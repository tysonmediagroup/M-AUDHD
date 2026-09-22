"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

const DPR_MIN = 1.5
const DPR_CAP = 2

const TWIST_MAX_DEG = 12

const DRIFT_DEG_PER_SEC_AT_50 = 0.6

const CLOCK_WRAP = 3600

const EDGE_PX = 0.75

const VERT = `
precision highp float;
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const FRAG = `
precision highp float;

uniform vec2  uRes;
uniform float uDensity;
uniform float uDotSize;
uniform float uTwist;
uniform float uScale;
uniform vec2  uCursor;
uniform float uReach;
uniform float uLift;
uniform vec3  uBase;
uniform vec3  uAccent;

float dots(vec2 q, float r, float aa) {
    vec2 c = fract(q) - 0.5;
    float d = length(c);
    float hard = smoothstep(r + aa, r - aa, d);
    float mean = min(3.14159265 * r * r, 1.0);
    float sub  = smoothstep(0.35, 0.85, aa / max(r, 1e-4));
    return mix(hard, mean, sub);
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;

    float pxUV = 1.0 / uRes.y;

    float dA = uDensity;
    float aaA = ${EDGE_PX.toFixed(2)} * pxUV * dA;
    float cA = dots(uv * dA, uDotSize, aaA);

    vec2 rel = uv - uCursor;
    float fall = exp(-dot(rel, rel) / max(uReach * uReach, 1e-6));
    float gain = uLift * fall;
    vec2 uvB = uv + rel * gain;

    float s = sin(uTwist), c = cos(uTwist);
    vec2 rot = vec2(uvB.x * c - uvB.y * s, uvB.x * s + uvB.y * c);

    float dB = uDensity * uScale;

    float aaB = ${EDGE_PX.toFixed(2)} * pxUV * dB * abs(1.0 + gain);
    float cB = dots(rot * dB, uDotSize, aaB);

    vec3 pre = uBase * cA + uAccent * cB;
    float a = min(cA + cB, 1.0);
    gl_FragColor = vec4(pre, a);
}
`

function parseColor(input: string): [number, number, number] {
    if (!input) return [0, 0, 0]
    const s = input.trim()
    const fn = s.match(/rgba?\(([^)]+)\)/i)
    if (fn) {
        const p = fn[1].split(",").map((v) => parseFloat(v.trim()))
        return [(p[0] || 0) / 255, (p[1] || 0) / 255, (p[2] || 0) / 255]
    }
    let h = s.replace("#", "")
    if (h.length === 3 || h.length === 4)
        h = h.split("").map((ch) => ch + ch).join("")
    h = h.padEnd(6, "0")
    return [
        parseInt(h.slice(0, 2), 16) / 255,
        parseInt(h.slice(2, 4), 16) / 255,
        parseInt(h.slice(4, 6), 16) / 255,
    ]
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
    const sh = gl.createShader(type)!
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS))
        console.warn("MoireLattice shader:", gl.getShaderInfoLog(sh))
    return sh
}

function linkProg(gl: WebGLRenderingContext, vs: string, fs: string) {
    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, vs))
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, fs))
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
        console.warn("MoireLattice link:", gl.getProgramInfoLog(prog))
    return prog
}

interface OverlayGroup {
    twist?: number

    scale?: number
}
interface CursorGroup {
    reach?: number

    lift?: number

    damping?: number
}

const OVERLAY_DEFAULTS: Required<OverlayGroup> = { twist: 12, scale: 100 }
const CURSOR_DEFAULTS: Required<CursorGroup> = { reach: 35, lift: 25, damping: 20 }

interface Props {
    background?: string
    baseColor?: string
    accentColor?: string

    glow?: string

    density?: number

    dotSize?: number

    speed?: number
    overlay?: OverlayGroup
    cursor?: CursorGroup
    width?: number
    height?: number
    style?: React.CSSProperties
}

export default function MoireLattice(props: Props) {
    const {
        background = "#0A0A0B",
        baseColor = "#F0F0F0",
        accentColor = "#5B6CFF",
        glow = "rgba(255,255,255,0.05)",
        density = 40,
        dotSize = 46,
        speed = 50,
        overlay,
        cursor,
        style,
    } = props

    const ov: Required<OverlayGroup> = { ...OVERLAY_DEFAULTS, ...(overlay || {}) }
    const cu: Required<CursorGroup> = { ...CURSOR_DEFAULTS, ...(cursor || {}) }

    const hostRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const live = useRef({
        baseColor, accentColor, density, dotSize, speed,
        twist: ov.twist, scale: ov.scale,
        reach: cu.reach, lift: cu.lift, damping: cu.damping,
    })
    live.current = {
        baseColor, accentColor, density, dotSize, speed,
        twist: ov.twist, scale: ov.scale,
        reach: cu.reach, lift: cu.lift, damping: cu.damping,
    }

    useEffect(() => {
        const host = hostRef.current
        const canvas = canvasRef.current
        if (!host || !canvas) return

        const gl = canvas.getContext("webgl", {
            alpha: true,
            antialias: false,
            premultipliedAlpha: true,
            depth: false,
        }) as WebGLRenderingContext | null
        if (!gl) return

        const prog = linkProg(gl, VERT, FRAG)
        gl.useProgram(prog)

        const aPos = gl.getAttribLocation(prog, "aPos")
        const U = (n: string) => gl.getUniformLocation(prog, n)
        const u = {
            res: U("uRes"), density: U("uDensity"), dotSize: U("uDotSize"),
            twist: U("uTwist"), scale: U("uScale"),
            cursor: U("uCursor"), reach: U("uReach"), lift: U("uLift"),
            base: U("uBase"), accent: U("uAccent"),
        }

        const tri = gl.createBuffer()!
        gl.bindBuffer(gl.ARRAY_BUFFER, tri)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 3, -1, -1, 3]),
            gl.STATIC_DRAW
        )
        gl.enableVertexAttribArray(aPos)
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

        gl.disable(gl.DEPTH_TEST)
        gl.enable(gl.BLEND)
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

        let cssW = 0, cssH = 0, dpr = 1
        const resize = () => {
            dpr = Math.min(Math.max(window.devicePixelRatio || 1, DPR_MIN), DPR_CAP)
            cssW = canvas.clientWidth || host.clientWidth || 1
            cssH = canvas.clientHeight || host.clientHeight || 1
            const wpx = Math.max(1, Math.round(cssW * dpr))
            const hpx = Math.max(1, Math.round(cssH * dpr))
            if (canvas.width !== wpx || canvas.height !== hpx) {
                canvas.width = wpx
                canvas.height = hpx
            }
            gl.viewport(0, 0, wpx, hpx)
        }
        resize()
        const ro = new ResizeObserver(resize)
        ro.observe(canvas)

        const ptr = { x: 0, y: 0, has: false }
        const lens = { x: 0, y: 0 }

        let raf = 0
        let last = performance.now()
        let sceneT = 0
        let idleT = 0

        const frame = (now: number) => {
            raf = requestAnimationFrame(frame)
            const dtReal = Math.min((now - last) / 1000, 0.05)
            last = now
            if (cssW <= 0 || cssH <= 0) { resize(); return }

            const L = live.current
            sceneT += dtReal * (L.speed / 50)
            if (sceneT > CLOCK_WRAP) sceneT -= CLOCK_WRAP
            else if (sceneT < -CLOCK_WRAP) sceneT += CLOCK_WRAP

            idleT += dtReal
            let tx: number, ty: number
            if (ptr.has) {
                tx = (ptr.x * dpr - 0.5 * canvas.width) / canvas.height
                ty = (0.5 * canvas.height - ptr.y * dpr) / canvas.height
            } else {
                tx = Math.sin(idleT * 0.19) * 0.42
                ty = Math.cos(idleT * 0.13) * 0.28
            }
            const k = 1 - Math.exp(-(L.damping / 100) * 12 * dtReal)
            lens.x += (tx - lens.x) * k
            lens.y += (ty - lens.y) * k

            const [br, bgc, bb] = parseColor(L.baseColor)
            const [ar, ag, ab] = parseColor(L.accentColor)

            const twistDeg =
                (Math.min(Math.max(L.twist, 0), 100) / 100) * TWIST_MAX_DEG +
                sceneT * DRIFT_DEG_PER_SEC_AT_50
            const dotR = (Math.min(Math.max(L.dotSize, 0), 100) / 100) * 0.5

            gl.clearColor(0, 0, 0, 0)
            gl.clear(gl.COLOR_BUFFER_BIT)

            gl.uniform2f(u.res, canvas.width, canvas.height)
            gl.uniform1f(u.density, Math.max(L.density, 1))
            gl.uniform1f(u.dotSize, dotR)
            gl.uniform1f(u.twist, (twistDeg * Math.PI) / 180)
            gl.uniform1f(u.scale, L.scale / 100)
            gl.uniform2f(u.cursor, lens.x, lens.y)
            gl.uniform1f(u.reach, Math.max(L.reach, 1) / 100 * 0.5)
            gl.uniform1f(u.lift, L.lift / 100)
            gl.uniform3f(u.base, br, bgc, bb)
            gl.uniform3f(u.accent, ar, ag, ab)

            gl.drawArrays(gl.TRIANGLES, 0, 3)
        }
        raf = requestAnimationFrame(frame)

        const onMove = (e: PointerEvent) => {
            const r = host.getBoundingClientRect()

            const scale = r.width > 0 ? host.clientWidth / r.width : 1
            ptr.x = (e.clientX - r.left) * scale
            ptr.y = (e.clientY - r.top) * scale
            ptr.has = true
        }
        const onLeave = () => { ptr.has = false }

        host.addEventListener("pointermove", onMove)
        host.addEventListener("pointerleave", onLeave)

        window.addEventListener("pointerup", onLeave)

        return () => {
            cancelAnimationFrame(raf)
            ro.disconnect()
            host.removeEventListener("pointermove", onMove)
            host.removeEventListener("pointerleave", onLeave)
            window.removeEventListener("pointerup", onLeave)

        }
    }, [])

    return (
        <div
            ref={hostRef}
            style={{
                minWidth: 1200,
                minHeight: 800,
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                background: `radial-gradient(70% 56% at 50% 48%, ${glow} 0%, transparent 74%), ${background}`,
                ...style,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
            />
        </div>
    )
}