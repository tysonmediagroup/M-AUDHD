"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"

interface CameraGroup {
    cameraHeight?: number
    perspective?: number
}

interface HoleGroup {
    layers?: number
    depth?: number
    falloff?: number
}

interface WaveGroup {
    wave?: number
    ripple?: number
}

interface InteractionGroup {
    hoverSpeed?: number
    clickPulse?: number
    transition?: any
}

interface InfiniteHoleProps {
    background?: string
    color?: string
    colors?: string[]
    colorSpread?: number
    columns?: number
    rows?: number
    thickness?: number
    speed?: number
    spin?: number
    distance?: number
    camera?: CameraGroup
    hole?: HoleGroup
    waveGroup?: WaveGroup
    interaction?: InteractionGroup
    style?: CSSProperties
}

type Vec3 = [number, number, number]

const SHIFT0 = 3

const LOOK_AT: Vec3 = [0, 0, 1]

const NEAR = 1
const FAR = 1000

const SPEED_REFERENCE = 50

const MAX_DT = 0.05

const MAX_DPR = 2

const MAX_COLORS = 8

const DEFAULT_CAMERA: Required<CameraGroup> = {
    cameraHeight: 6,
    perspective: 60,
}

const DEFAULT_HOLE: Required<HoleGroup> = {
    layers: 2,
    depth: 100,
    falloff: 2,
}

const DEFAULT_WAVE: Required<WaveGroup> = {
    wave: 100,
    ripple: 100,
}

const DEFAULT_INTERACTION: Required<InteractionGroup> = {
    hoverSpeed: 160,
    clickPulse: 160,
    transition: { type: "spring", duration: 0.6 },
}

function clamp(v: number, lo: number, hi: number): number {
    return v < lo ? lo : v > hi ? hi : v
}

function parseColor(input: string | undefined, fallback: Vec3): Vec3 {
    if (!input) return fallback
    const s = input.trim()

    if (s[0] === "#") {
        const hex = s.slice(1)
        const short = hex.length === 3 || hex.length === 4
        const long = hex.length === 6 || hex.length === 8
        if (!short && !long) return fallback
        const grab = (i: number) =>
            short
                ? parseInt(hex[i] + hex[i], 16)
                : parseInt(hex.slice(i * 2, i * 2 + 2), 16)
        const r = grab(0)
        const g = grab(1)
        const b = grab(2)
        if ([r, g, b].some(Number.isNaN)) return fallback
        return [r / 255, g / 255, b / 255]
    }

    const rgb = s.match(/rgba?\(([^)]+)\)/i)
    if (rgb) {
        const p = rgb[1].split(/[,/\s]+/).map((v) => parseFloat(v))
        if (p.length >= 3 && p.slice(0, 3).every((v) => !Number.isNaN(v))) {
            return [p[0] / 255, p[1] / 255, p[2] / 255]
        }
    }

    const hsl = s.match(/hsla?\(([^)]+)\)/i)
    if (hsl) {
        const p = hsl[1].split(/[,/\s]+/).map((v) => parseFloat(v))
        if (p.length >= 3 && p.slice(0, 3).every((v) => !Number.isNaN(v))) {
            const h = ((p[0] % 360) + 360) % 360 / 360
            const sat = clamp(p[1] / 100, 0, 1)
            const li = clamp(p[2] / 100, 0, 1)
            const c = (1 - Math.abs(2 * li - 1)) * sat
            const x = c * (1 - Math.abs(((h * 6) % 2) - 1))
            const m = li - c / 2
            const seg = Math.floor(h * 6) % 6
            const t: Vec3 =
                seg === 0
                    ? [c, x, 0]
                    : seg === 1
                      ? [x, c, 0]
                      : seg === 2
                        ? [0, c, x]
                        : seg === 3
                          ? [0, x, c]
                          : seg === 4
                            ? [x, 0, c]
                            : [c, 0, x]
            return [t[0] + m, t[1] + m, t[2] + m]
        }
    }

    return fallback
}

export function oneStepFor(columns: number): number {
    const arc = (2 * Math.PI) / Math.max(3, columns)
    return (SHIFT0 * arc) / (1 + arc)
}

function perspective(fovDeg: number, aspect: number): Float32Array {
    const f = 1 / Math.tan((fovDeg * Math.PI) / 360)
    const nf = 1 / (NEAR - FAR)
    const m = new Float32Array(16)
    m[0] = f / aspect
    m[5] = f
    m[10] = (FAR + NEAR) * nf
    m[11] = -1
    m[14] = 2 * FAR * NEAR * nf
    return m
}

function lookAt(eye: Vec3, center: Vec3, up: Vec3): Float32Array {
    let zx = eye[0] - center[0]
    let zy = eye[1] - center[1]
    let zz = eye[2] - center[2]
    let len = Math.hypot(zx, zy, zz) || 1
    zx /= len
    zy /= len
    zz /= len

    let xx = up[1] * zz - up[2] * zy
    let xy = up[2] * zx - up[0] * zz
    let xz = up[0] * zy - up[1] * zx
    len = Math.hypot(xx, xy, xz) || 1
    xx /= len
    xy /= len
    xz /= len

    const yx = zy * xz - zz * xy
    const yy = zz * xx - zx * xz
    const yz = zx * xy - zy * xx

    const m = new Float32Array(16)
    m[0] = xx
    m[1] = yx
    m[2] = zx
    m[4] = xy
    m[5] = yy
    m[6] = zy
    m[8] = xz
    m[9] = yz
    m[10] = zz
    m[12] = -(xx * eye[0] + xy * eye[1] + xz * eye[2])
    m[13] = -(yx * eye[0] + yy * eye[1] + yz * eye[2])
    m[14] = -(zx * eye[0] + zy * eye[1] + zz * eye[2])
    m[15] = 1
    return m
}

function multiply(a: Float32Array, b: Float32Array): Float32Array {
    const o = new Float32Array(16)
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
            o[c * 4 + r] =
                a[r] * b[c * 4] +
                a[4 + r] * b[c * 4 + 1] +
                a[8 + r] * b[c * 4 + 2] +
                a[12 + r] * b[c * 4 + 3]
        }
    }
    return o
}

function rotationY(rad: number): Float32Array {
    const c = Math.cos(rad)
    const s = Math.sin(rad)
    const m = new Float32Array(16)
    m[0] = c
    m[2] = -s
    m[5] = 1
    m[8] = s
    m[10] = c
    m[15] = 1
    return m
}

function unitBox(): { position: Float32Array; uv: Float32Array; index: Uint16Array } {
    const position: number[] = []
    const uv: number[] = []
    const index: number[] = []

    const faces: { n: Vec3; u: Vec3; v: Vec3 }[] = [
        { n: [1, 0, 0], u: [0, 0, -1], v: [0, 1, 0] },
        { n: [-1, 0, 0], u: [0, 0, 1], v: [0, 1, 0] },
        { n: [0, 1, 0], u: [1, 0, 0], v: [0, 0, 1] },
        { n: [0, -1, 0], u: [1, 0, 0], v: [0, 0, -1] },
        { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] },
        { n: [0, 0, -1], u: [-1, 0, 0], v: [0, 1, 0] },
    ]

    for (const f of faces) {
        const base = position.length / 3
        for (const [su, sv] of [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1],
        ]) {
            position.push(
                (f.n[0] + su * f.u[0] + sv * f.v[0]) * 0.5,
                (f.n[1] + su * f.u[1] + sv * f.v[1]) * 0.5,
                (f.n[2] + su * f.u[2] + sv * f.v[2]) * 0.5
            )
            uv.push((su + 1) * 0.5, (sv + 1) * 0.5)
        }
        index.push(base, base + 1, base + 2, base, base + 2, base + 3)
    }

    return {
        position: new Float32Array(position),
        uv: new Float32Array(uv),
        index: new Uint16Array(index),
    }
}

function instanceData(rows: number, columns: number, layers: number): Float32Array {
    const out = new Float32Array(rows * columns * layers * 3)
    let n = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < layers; j++) {
            for (let k = 0; k < columns; k++) {
                out[n++] = i
                out[n++] = k
                out[n++] = j
            }
        }
    }
    return out
}

const VERT = `#version 300 es
precision highp float;

in vec3 aPosition;
in vec2 aUv;
in vec3 aRcl;

uniform mat4 uProjection;
uniform mat4 uModelView;
uniform float uArc;
uniform float uShift;
uniform float uPhase;
uniform float uSeam;
uniform float uDepth;
uniform float uFalloff;
uniform float uWave;
uniform float uRipple;
uniform vec3 uColors[8];
uniform int uColorCount;
uniform float uColorSpread;

out vec2 vUv;
out vec3 vColor;

void main() {
    float radius = uShift;
    float zShift = 0.0;
    int row = int(aRcl.x + 0.5);
    for (int i = 0; i < row; i++) {
        radius += radius * uArc;
        zShift += radius * uArc;
    }

    vec4 p = vec4(aPosition, 1.0);

    if (p.z > 0.0) radius += radius * uArc;

    p.xz *= radius * uArc;

    p.z += zShift + uShift - uSeam;

    float c = aRcl.y * uRipple;
    float wave = sin(c / 5.3) * 1.1 + sin(c / 1.3) * 1.5 + cos(c / 1.7) * 2.5;
    wave *= uWave;

    float t = uFalloff - aRcl.x + abs(wave) + uPhase;
    t += aRcl.z * abs(sin(aRcl.y));
    t = max(t, 0.0);
    p.y -= t * t * t * uDepth + aRcl.z;

    float a = aRcl.y * uArc;
    float sn = sin(a);
    float cs = cos(a);
    p.xz = p.xz * mat2(cs, -sn, sn, cs);

    float span = uColorSpread > 0.0
        ? mod(aRcl.x, uColorSpread) / uColorSpread * float(uColorCount)
        : 0.0;
    float idxF = floor(span);
    float fracT = span - idxF;
    int i0 = int(mod(idxF, float(uColorCount)));
    int i1 = int(mod(idxF + 1.0, float(uColorCount)));
    vec3 c0 = uColors[0];
    vec3 c1 = uColors[0];
    for (int k = 0; k < 8; k++) {
        if (k == i0) c0 = uColors[k];
        if (k == i1) c1 = uColors[k];
    }
    vColor = mix(c0, c1, fracT);

    vUv = aUv;
    gl_Position = uProjection * uModelView * p;
}
`

const FRAG = `#version 300 es
precision highp float;

in vec2 vUv;
in vec3 vColor;

uniform vec3 uBackground;
uniform float uThickness;

out vec4 fragColor;

void main() {
    float d = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
    float aa = max(fwidth(d), 1e-5);
    float frame = 1.0 - smoothstep(uThickness - aa, uThickness + aa, d);

    fragColor = vec4(mix(uBackground, vColor, frame), 1.0);
}
`

export default function InfiniteHole(props: InfiniteHoleProps) {
    const {
        background = "#000000",
        color = "#FFFFFF",
        colors = ["#8B00FF","#FF00C9"],
        colorSpread = 8,
        columns = 93,
        rows = 36,
        thickness = 3,
        speed = 38,
        spin = 15,
        distance = 34,
        camera,
        hole,
        waveGroup,
        interaction,
        style,
    } = props

    const cam: Required<CameraGroup> = { ...DEFAULT_CAMERA, ...(camera ?? {}) }
    const hol: Required<HoleGroup> = { ...DEFAULT_HOLE, ...(hole ?? {}) }
    const wav: Required<WaveGroup> = { ...DEFAULT_WAVE, ...(waveGroup ?? {}) }
    const int: Required<InteractionGroup> = {
        ...DEFAULT_INTERACTION,
        ...(interaction ?? {}),
    }

    const rootRef = useRef<HTMLDivElement | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const hoverRef = useRef(0)

    const hoverAmtRef = useRef(0)

    const pulseRef = useRef(0)

    const liveRef = useRef({
        background,
        color,
        colors,
        colorSpread,
        columns,
        rows,
        thickness,
        speed,
        spin,
        distance,
        cam,
        hol,
        wav,
        int,
    })
    liveRef.current = {
        background,
        color,
        colors,
        colorSpread,
        columns,
        rows,
        thickness,
        speed,
        spin,
        distance,
        cam,
        hol,
        wav,
        int,
    }

    const geomRef = useRef({ rows: -1, columns: -1, layers: -1 })

    useEffect(() => {
        const canvas = canvasRef.current
        const root = rootRef.current
        if (!canvas || !root) return

        const gl = canvas.getContext("webgl2", {
            alpha: true,
            antialias: true,
            premultipliedAlpha: true,
        })
        if (!gl) return

        const compile = (type: number, src: string) => {
            const sh = gl.createShader(type)
            if (!sh) return null
            gl.shaderSource(sh, src)
            gl.compileShader(sh)
            if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
                console.error("InfiniteHole shader:", gl.getShaderInfoLog(sh))
                gl.deleteShader(sh)
                return null
            }
            return sh
        }

        const vs = compile(gl.VERTEX_SHADER, VERT)
        const fs = compile(gl.FRAGMENT_SHADER, FRAG)
        if (!vs || !fs) return

        const program = gl.createProgram()
        if (!program) return
        gl.attachShader(program, vs)
        gl.attachShader(program, fs)
        gl.linkProgram(program)
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("InfiniteHole link:", gl.getProgramInfoLog(program))
            return
        }
        gl.useProgram(program)

        const U = {
            projection: gl.getUniformLocation(program, "uProjection"),
            modelView: gl.getUniformLocation(program, "uModelView"),
            arc: gl.getUniformLocation(program, "uArc"),
            shift: gl.getUniformLocation(program, "uShift"),
            phase: gl.getUniformLocation(program, "uPhase"),
            seam: gl.getUniformLocation(program, "uSeam"),
            depth: gl.getUniformLocation(program, "uDepth"),
            falloff: gl.getUniformLocation(program, "uFalloff"),
            wave: gl.getUniformLocation(program, "uWave"),
            ripple: gl.getUniformLocation(program, "uRipple"),
            colors: gl.getUniformLocation(program, "uColors[0]"),
            colorCount: gl.getUniformLocation(program, "uColorCount"),
            colorSpread: gl.getUniformLocation(program, "uColorSpread"),
            background: gl.getUniformLocation(program, "uBackground"),
            thickness: gl.getUniformLocation(program, "uThickness"),
        }

        const box = unitBox()
        const vao = gl.createVertexArray()
        gl.bindVertexArray(vao)

        const posBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, posBuf)
        gl.bufferData(gl.ARRAY_BUFFER, box.position, gl.STATIC_DRAW)
        const aPosition = gl.getAttribLocation(program, "aPosition")
        gl.enableVertexAttribArray(aPosition)
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0)

        const uvBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf)
        gl.bufferData(gl.ARRAY_BUFFER, box.uv, gl.STATIC_DRAW)
        const aUv = gl.getAttribLocation(program, "aUv")
        gl.enableVertexAttribArray(aUv)
        gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 0, 0)

        const rclBuf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, rclBuf)
        const aRcl = gl.getAttribLocation(program, "aRcl")
        gl.enableVertexAttribArray(aRcl)
        gl.vertexAttribPointer(aRcl, 3, gl.FLOAT, false, 0, 0)
        gl.vertexAttribDivisor(aRcl, 1)

        const idxBuf = gl.createBuffer()
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, box.index, gl.STATIC_DRAW)

        let instances = 0
        const rebuild = (r: number, c: number, l: number) => {
            const data = instanceData(r, c, l)
            gl.bindBuffer(gl.ARRAY_BUFFER, rclBuf)
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
            instances = r * c * l
            geomRef.current = { rows: r, columns: c, layers: l }
        }

        gl.enable(gl.DEPTH_TEST)

        gl.clearColor(0, 0, 0, 0)

        let cssW = 0
        let cssH = 0
        const resize = () => {
            const w = canvas.clientWidth || 1
            const h = canvas.clientHeight || 1
            const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
            const bw = Math.max(1, Math.round(w * dpr))
            const bh = Math.max(1, Math.round(h * dpr))
            if (canvas.width !== bw || canvas.height !== bh) {
                canvas.width = bw
                canvas.height = bh
            }
            cssW = w
            cssH = h
            gl.viewport(0, 0, bw, bh)
        }
        resize()

        const ro = new ResizeObserver(resize)
        ro.observe(canvas)

        let raf = 0
        let last = performance.now()

        let cycles = 0

        let angle = 0

        const tick = (now: number) => {
            const dt = clamp((now - last) / 1000, 0, MAX_DT)
            last = now

            const L = liveRef.current

            const transDur =
                typeof L.int.transition?.duration === "number" &&
                L.int.transition.duration > 0
                    ? L.int.transition.duration
                    : 0.4
            hoverAmtRef.current +=
                (hoverRef.current - hoverAmtRef.current) *
                (1 - Math.exp(-dt / (transDur * 0.5)))
            pulseRef.current *= Math.exp(-dt / (transDur * 0.6))
            if (pulseRef.current < 0.001) pulseRef.current = 0
            const hoverAmt = hoverAmtRef.current
            const pulseAmt = pulseRef.current
            const hoverSpeedFactor =
                1 + hoverAmt * (clamp(L.int.hoverSpeed, 0, 400) / 100 - 1)
            const clickPulseFactor =
                1 + pulseAmt * (clamp(L.int.clickPulse, 0, 400) / 100 - 1)

            const cols = Math.max(3, Math.round(L.columns))
            const rws = Math.max(1, Math.round(L.rows))
            const lyrs = Math.max(1, Math.round(L.hol.layers))

            const g = geomRef.current
            if (g.rows !== rws || g.columns !== cols || g.layers !== lyrs) {
                rebuild(rws, cols, lyrs)
            }

            cycles = (cycles + dt * ((L.speed * hoverSpeedFactor) / SPEED_REFERENCE)) % 1
            angle =
                (angle + dt * ((L.spin * Math.PI) / 180)) % (Math.PI * 2)

            const arc = (2 * Math.PI) / cols
            const step = (SHIFT0 * arc) / (1 + arc)
            const shift = SHIFT0 - cycles * step

            const eye: Vec3 = [
                0,
                L.cam.cameraHeight,
                L.distance - hoverAmt * (L.distance * 0.15),
            ]
            const view = lookAt(eye, LOOK_AT, [0, 1, 0])
            const modelView = multiply(view, rotationY(angle))
            const proj = perspective(
                clamp(L.cam.perspective, 5, 175),
                Math.max(cssW, 1) / Math.max(cssH, 1)
            )

            const stops = [L.color, ...(Array.isArray(L.colors) ? L.colors : [])].slice(
                0,
                MAX_COLORS
            )
            const colorCount = Math.max(1, stops.length)
            const colorsFlat = new Float32Array(MAX_COLORS * 3)
            for (let i = 0; i < MAX_COLORS; i++) {
                const c = parseColor(stops[i % colorCount], [1, 1, 1])
                colorsFlat[i * 3] = c[0]
                colorsFlat[i * 3 + 1] = c[1]
                colorsFlat[i * 3 + 2] = c[2]
            }
            const bg = parseColor(L.background, [0, 0, 0])

            gl.useProgram(program)
            gl.bindVertexArray(vao)
            gl.uniformMatrix4fv(U.projection, false, proj)
            gl.uniformMatrix4fv(U.modelView, false, modelView)
            gl.uniform1f(U.arc, arc)
            gl.uniform1f(U.shift, shift)
            gl.uniform1f(U.phase, cycles)
            gl.uniform1f(U.seam, (SHIFT0 - shift) * arc)
            gl.uniform1f(U.depth, (Math.max(0, L.hol.depth) / 100) * clickPulseFactor)
            gl.uniform1f(U.falloff, L.hol.falloff)
            gl.uniform1f(U.wave, (Math.max(0, L.wav.wave) / 100) * clickPulseFactor)
            gl.uniform1f(U.ripple, Math.max(0, L.wav.ripple) / 100)
            gl.uniform3fv(U.colors, colorsFlat)
            gl.uniform1i(U.colorCount, colorCount)
            gl.uniform1f(U.colorSpread, Math.max(0.0001, L.colorSpread))
            gl.uniform3f(U.background, bg[0], bg[1], bg[2])
            gl.uniform1f(
                U.thickness,
                clamp((clamp(L.thickness, 0, 49) / 100) * (1 + pulseAmt * 0.4), 0, 0.5)
            )

            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
            gl.drawElementsInstanced(
                gl.TRIANGLES,
                box.index.length,
                gl.UNSIGNED_SHORT,
                0,
                instances
            )

            raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)

        return () => {
            cancelAnimationFrame(raf)
            ro.disconnect()

            geomRef.current = { rows: -1, columns: -1, layers: -1 }
        }
    }, [])

    const handlePointerEnter = () => {
        hoverRef.current = 1
    }
    const handlePointerLeave = () => {
        hoverRef.current = 0
    }
    const handlePointerDown = () => {
        pulseRef.current = 1
    }

    return (
        <div
            ref={rootRef}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            style={{
                minWidth: 1200,
                minHeight: 800,
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",

                background,
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