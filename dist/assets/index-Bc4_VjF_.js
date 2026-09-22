var FE=Object.defineProperty;var IE=(o,t,i)=>t in o?FE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var Mt=(o,t,i)=>IE(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function hS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Th={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function BE(){if(P_)return pl;P_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return pl.Fragment=t,pl.jsx=i,pl.jsxs=i,pl}var F_;function zE(){return F_||(F_=1,Th.exports=BE()),Th.exports}var B=zE(),bh={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function HE(){if(I_)return _t;I_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function A(H){return H===null||typeof H!="object"?null:(H=E&&H[E]||H["@@iterator"],typeof H=="function"?H:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function b(H,de,Ce){this.props=H,this.context=de,this.refs=y,this.updater=Ce||P}b.prototype.isReactComponent={},b.prototype.setState=function(H,de){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,de,"setState")},b.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function Z(){}Z.prototype=b.prototype;function U(H,de,Ce){this.props=H,this.context=de,this.refs=y,this.updater=Ce||P}var C=U.prototype=new Z;C.constructor=U,T(C,b.prototype),C.isPureReactComponent=!0;var R=Array.isArray;function z(){}var g={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function I(H,de,Ce){var j=Ce.ref;return{$$typeof:o,type:H,key:de,ref:j!==void 0?j:null,props:Ce}}function F(H,de){return I(H.type,de,H.props)}function X(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function Y(H){var de={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Ce){return de[Ce]})}var G=/\/+/g;function W(H,de){return typeof H=="object"&&H!==null&&H.key!=null?Y(""+H.key):de.toString(36)}function L(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(z,z):(H.status="pending",H.then(function(de){H.status==="pending"&&(H.status="fulfilled",H.value=de)},function(de){H.status==="pending"&&(H.status="rejected",H.reason=de)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function k(H,de,Ce,j,le){var Me=typeof H;(Me==="undefined"||Me==="boolean")&&(H=null);var Ne=!1;if(H===null)Ne=!0;else switch(Me){case"bigint":case"string":case"number":Ne=!0;break;case"object":switch(H.$$typeof){case o:case t:Ne=!0;break;case S:return Ne=H._init,k(Ne(H._payload),de,Ce,j,le)}}if(Ne)return le=le(H),Ne=j===""?"."+W(H,0):j,R(le)?(Ce="",Ne!=null&&(Ce=Ne.replace(G,"$&/")+"/"),k(le,de,Ce,"",function(et){return et})):le!=null&&(X(le)&&(le=F(le,Ce+(le.key==null||H&&H.key===le.key?"":(""+le.key).replace(G,"$&/")+"/")+Ne)),de.push(le)),1;Ne=0;var Se=j===""?".":j+":";if(R(H))for(var Ae=0;Ae<H.length;Ae++)j=H[Ae],Me=Se+W(j,Ae),Ne+=k(j,de,Ce,Me,le);else if(Ae=A(H),typeof Ae=="function")for(H=Ae.call(H),Ae=0;!(j=H.next()).done;)j=j.value,Me=Se+W(j,Ae++),Ne+=k(j,de,Ce,Me,le);else if(Me==="object"){if(typeof H.then=="function")return k(L(H),de,Ce,j,le);throw de=String(H),Error("Objects are not valid as a React child (found: "+(de==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":de)+"). If you meant to render a collection of children, use an array instead.")}return Ne}function ie(H,de,Ce){if(H==null)return H;var j=[],le=0;return k(H,j,"","",function(Me){return de.call(Ce,Me,le++)}),j}function te(H){if(H._status===-1){var de=H._result,Ce=de();Ce.then(function(j){(H._status===0||H._status===-1)&&(H._status=1,H._result=j,Ce.status===void 0&&(Ce.status="fulfilled",Ce.value=j))},function(j){(H._status===0||H._status===-1)&&(H._status=2,H._result=j,Ce.status===void 0&&(Ce.status="rejected",Ce.reason=j))}),H._status===-1&&(H._status=0,H._result=Ce)}if(H._status===1)return H._result.default;throw H._result}var ne=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var de=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(de))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function ae(H){var de=g.T,Ce={};Ce.types=de!==null?de.types:null,g.T=Ce;try{var j=H(),le=g.S;le!==null&&le(Ce,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(z,ne)}catch(Me){ne(Me)}finally{de!==null&&Ce.types!==null&&(de.types=Ce.types),g.T=de}}function Oe(H){var de=g.T;if(de!==null){var Ce=de.types;Ce===null?de.types=[H]:Ce.indexOf(H)===-1&&Ce.push(H)}else ae(Oe.bind(null,H))}var Le={map:ie,forEach:function(H,de,Ce){ie(H,function(){de.apply(this,arguments)},Ce)},count:function(H){var de=0;return ie(H,function(){de++}),de},toArray:function(H){return ie(H,function(de){return de})||[]},only:function(H){if(!X(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return _t.Activity=_,_t.Children=Le,_t.Component=b,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=U,_t.StrictMode=r,_t.Suspense=p,_t.ViewTransition=v,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,_t.__COMPILER_RUNTIME={__proto__:null,c:function(H){return g.H.useMemoCache(H)}},_t.addTransitionType=Oe,_t.cache=function(H){return function(){return H.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(H,de,Ce){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var j=T({},H.props),le=H.key;if(de!=null)for(Me in de.key!==void 0&&(le=""+de.key),de)!O.call(de,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&de.ref===void 0||(j[Me]=de[Me]);var Me=arguments.length-2;if(Me===1)j.children=Ce;else if(1<Me){for(var Ne=Array(Me),Se=0;Se<Me;Se++)Ne[Se]=arguments[Se+2];j.children=Ne}return I(H.type,le,j)},_t.createContext=function(H){return H={$$typeof:d,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:u,_context:H},H},_t.createElement=function(H,de,Ce){var j,le={},Me=null;if(de!=null)for(j in de.key!==void 0&&(Me=""+de.key),de)O.call(de,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(le[j]=de[j]);var Ne=arguments.length-2;if(Ne===1)le.children=Ce;else if(1<Ne){for(var Se=Array(Ne),Ae=0;Ae<Ne;Ae++)Se[Ae]=arguments[Ae+2];le.children=Se}if(H&&H.defaultProps)for(j in Ne=H.defaultProps,Ne)le[j]===void 0&&(le[j]=Ne[j]);return I(H,Me,le)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(H){return{$$typeof:h,render:H}},_t.isValidElement=X,_t.lazy=function(H){return{$$typeof:S,_payload:{_status:-1,_result:H},_init:te}},_t.memo=function(H,de){return{$$typeof:m,type:H,compare:de===void 0?null:de}},_t.startTransition=ae,_t.unstable_useCacheRefresh=function(){return g.H.useCacheRefresh()},_t.use=function(H){return g.H.use(H)},_t.useActionState=function(H,de,Ce){return g.H.useActionState(H,de,Ce)},_t.useCallback=function(H,de){return g.H.useCallback(H,de)},_t.useContext=function(H){return g.H.useContext(H)},_t.useDebugValue=function(){},_t.useDeferredValue=function(H,de){return g.H.useDeferredValue(H,de)},_t.useEffect=function(H,de){return g.H.useEffect(H,de)},_t.useEffectEvent=function(H){return g.H.useEffectEvent(H)},_t.useId=function(){return g.H.useId()},_t.useImperativeHandle=function(H,de,Ce){return g.H.useImperativeHandle(H,de,Ce)},_t.useInsertionEffect=function(H,de){return g.H.useInsertionEffect(H,de)},_t.useLayoutEffect=function(H,de){return g.H.useLayoutEffect(H,de)},_t.useMemo=function(H,de){return g.H.useMemo(H,de)},_t.useOptimistic=function(H,de){return g.H.useOptimistic(H,de)},_t.useReducer=function(H,de,Ce){return g.H.useReducer(H,de,Ce)},_t.useRef=function(H){return g.H.useRef(H)},_t.useState=function(H){return g.H.useState(H)},_t.useSyncExternalStore=function(H,de,Ce){return g.H.useSyncExternalStore(H,de,Ce)},_t.useTransition=function(){return g.H.useTransition()},_t.version="19.3.0",_t}var B_;function fm(){return B_||(B_=1,bh.exports=HE()),bh.exports}var Ge=fm();const GE=hS(Ge);var Ah={exports:{}},ml={},Rh={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function VE(){return z_||(z_=1,(function(o){function t(L,k){var ie=L.length;L.push(k);e:for(;0<ie;){var te=ie-1>>>1,ne=L[te];if(0<l(ne,k))L[te]=k,L[ie]=ne,ie=te;else break e}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var k=L[0],ie=L.pop();if(ie!==k){L[0]=ie;e:for(var te=0,ne=L.length,ae=ne>>>1;te<ae;){var Oe=2*(te+1)-1,Le=L[Oe],H=Oe+1,de=L[H];if(0>l(Le,ie))H<ne&&0>l(de,Le)?(L[te]=de,L[H]=ie,te=H):(L[te]=Le,L[Oe]=ie,te=Oe);else if(H<ne&&0>l(de,ie))L[te]=de,L[H]=ie,te=H;else break e}}return k}function l(L,k){var ie=L.sortIndex-k.sortIndex;return ie!==0?ie:L.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,_=null,v=3,E=!1,A=!1,P=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var k=i(m);k!==null;){if(k.callback===null)r(m);else if(k.startTime<=L)r(m),k.sortIndex=k.expirationTime,t(p,k);else break;k=i(m)}}function C(L){if(P=!1,U(L),!A)if(i(p)!==null)A=!0,R||(R=!0,X());else{var k=i(m);k!==null&&W(C,k.startTime-L)}}var R=!1,z=-1,g=5,O=-1;function I(){return T?!0:!(o.unstable_now()-O<g)}function F(){if(T=!1,R){var L=o.unstable_now();O=L;var k=!0;try{e:{A=!1,P&&(P=!1,b(z),z=-1),E=!0;var ie=v;try{t:{for(U(L),_=i(p);_!==null&&!(_.expirationTime>L&&I());){var te=_.callback;if(typeof te=="function"){_.callback=null,v=_.priorityLevel;var ne=te(_.expirationTime<=L);if(L=o.unstable_now(),typeof ne=="function"){_.callback=ne,U(L),k=!0;break t}_===i(p)&&r(p),U(L)}else r(p);_=i(p)}if(_!==null)k=!0;else{var ae=i(m);ae!==null&&W(C,ae.startTime-L),k=!1}}break e}finally{_=null,v=ie,E=!1}k=void 0}}finally{k?X():R=!1}}}var X;if(typeof Z=="function")X=function(){Z(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,G=Y.port2;Y.port1.onmessage=F,X=function(){G.postMessage(null)}}else X=function(){y(F,0)};function W(L,k){z=y(function(){L(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(L){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var ie=v;v=k;try{return L()}finally{v=ie}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ie=v;v=L;try{return k()}finally{v=ie}},o.unstable_scheduleCallback=function(L,k,ie){var te=o.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?te+ie:te):ie=te,L){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ie+ne,L={id:S++,callback:k,priorityLevel:L,startTime:ie,expirationTime:ne,sortIndex:-1},ie>te?(L.sortIndex=ie,t(m,L),i(p)===null&&L===i(m)&&(P?(b(z),z=-1):P=!0,W(C,ie-te))):(L.sortIndex=ne,t(p,L),A||E||(A=!0,R||(R=!0,X()))),L},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(L){var k=v;return function(){var ie=v;v=k;try{return L.apply(this,arguments)}finally{v=ie}}}})(Ch)),Ch}var H_;function kE(){return H_||(H_=1,Rh.exports=VE()),Rh.exports}var wh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function XE(){if(G_)return Pn;G_=1;var o=fm();function t(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,_,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:S,containerInfo:_,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(S){return{$$typeof:u,_reason:S}},Pn.createPortal=function(S,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return h(S,_,null,v)},Pn.flushSync=function(S){var _=p.T,v=r.p;try{if(p.T=null,r.p=2,S)return S()}finally{p.T=_,r.p=v,r.d.f()}},Pn.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(S,_))},Pn.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Pn.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin),A=typeof _.integrity=="string"?_.integrity:void 0,P=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?r.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:A,fetchPriority:P}):v==="script"&&r.d.X(S,{crossOrigin:E,integrity:A,fetchPriority:P,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Pn.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);r.d.M(S,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(S)},Pn.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin);r.d.L(S,v,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Pn.preloadModule=function(S,_){if(typeof S=="string")if(_){var v=m(_.as,_.crossOrigin);r.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(S)},Pn.requestFormReset=function(S){r.d.r(S)},Pn.unstable_batchedUpdates=function(S,_){return S(_)},Pn.useFormState=function(S,_,v){return p.H.useFormState(S,_,v)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var V_;function WE(){if(V_)return wh.exports;V_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),wh.exports=XE(),wh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function qE(){if(k_)return ml;k_=1;var o=kE(),t=fm(),i=WE();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,D=c.child;D;){if(D===a){x=!0,a=c,s=f;break}if(D===s){x=!0,s=c,a=f;break}D=D.sibling}if(!x){for(D=f.child;D;){if(D===a){x=!0,a=f,s=c;break}if(D===s){x=!0,s=f,a=c;break}D=D.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,s,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,s,c,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function A(e){var n=[null,null],a=v(e);return a===null||P(n,e,a.child,{foundSelf:!1}),n}function P(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&P(e,n,a.child,s))return!0;a=a.sibling}return!1}function T(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,b=null;function Z(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function U(e,n,a){return e===a?(b=e,!1):e===n?(b!==null&&(y=e),!0):!1}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function R(e,n,a){for(var s=0,c=e;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)e=a(e),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var z=Object.assign,g=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),W=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Oe=Symbol.for("react.legacy_hidden"),Le=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),de=Symbol.for("react.recoverable"),Ce=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=Ce&&e[Ce]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function Me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case Y:return"Profiler";case X:return"StrictMode";case k:return"Suspense";case ie:return"SuspenseList";case ae:return"Activity";case H:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case W:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:Me(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return Me(e(n))}catch{}}return null}var Ne=Array.isArray,Se=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ze=[],rt=-1;function Ye(e){return{current:e}}function ue(e){0>rt||(e.current=ze[rt],ze[rt]=null,rt--)}function Pe(e,n){rt++,ze[rt]=e.current,e.current=n}var ht=Ye(null),pt=Ye(null),st=Ye(null),$e=Ye(null);function q(e,n){switch(Pe(st,n),Pe(pt,e),Pe(ht,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xv(n),e=Wv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ue(ht),Pe(ht,e)}function Fe(){ue(ht),ue(pt),ue(st)}function nt(e){var n=e.memoizedState;n!==null&&(js._currentValue=n.memoizedState,Pe($e,e)),n=ht.current;var a=Wv(n,e.type);n!==a&&(Pe(pt,e),Pe(ht,a))}function w(e){pt.current===e&&(ue(ht),ue(pt)),$e.current===e&&(ue($e),js._currentValue=et)}var M,K;function Q(e){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",K=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+K}var fe=!1;function Re(e,n){if(!e||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(qe){var re=qe}Reflect.construct(e,[],be)}else{try{be.call()}catch(qe){re=qe}be=!1;try{var ge=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),be=!0,new e}finally{be&&(ge!==void 0?Object.defineProperty(e.prototype,"props",ge):delete e.prototype.props)}}}else{try{throw Error()}catch(qe){re=qe}(be=e())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(qe){if(qe&&re&&typeof qe.stack=="string")return[qe.stack,re.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],D=f[1];if(x&&D){var V=x.split(`
`),oe=D.split(`
`);for(c=s=0;s<V.length&&!V[s].includes("DetermineComponentFrameRoot");)s++;for(;c<oe.length&&!oe[c].includes("DetermineComponentFrameRoot");)c++;if(s===V.length||c===oe.length)for(s=V.length-1,c=oe.length-1;1<=s&&0<=c&&V[s]!==oe[c];)c--;for(;1<=s&&0<=c;s--,c--)if(V[s]!==oe[c]){if(s!==1||c!==1)do if(s--,c--,0>c||V[s]!==oe[c]){var _e=`
`+V[s].replace(" at new "," at ");return e.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",e.displayName)),_e}while(1<=s&&0<=c);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Q(a):""}function we(e,n){switch(e.tag){case 26:case 27:case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return e.child!==n&&n!==null?Q("Suspense Fallback"):Q("Suspense");case 19:return Q("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return Q("Activity");case 30:return Q("ViewTransition");default:return""}}function ce(e){try{var n="",a=null;do n+=we(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ve=Object.prototype.hasOwnProperty,Ue=o.unstable_scheduleCallback,Qe=o.unstable_cancelCallback,Ie=o.unstable_shouldYield,He=o.unstable_requestPaint,Ve=o.unstable_now,ft=o.unstable_getCurrentPriorityLevel,mt=o.unstable_ImmediatePriority,$=o.unstable_UserBlockingPriority,Be=o.unstable_NormalPriority,Ee=o.unstable_LowPriority,ke=o.unstable_IdlePriority,Xe=o.log,De=o.unstable_setDisableYieldValue,ut=null,Je=null;function It(e){if(typeof Xe=="function"&&De(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(ut,e)}catch{}}var St=Math.clz32?Math.clz32:Ju,ti=Math.log,gi=Math.LN2;function Ju(e){return e>>>=0,e===0?32:31-(ti(e)/gi|0)|0}var fs=256,wr=262144,Ya=4194304;function ga(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nr(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var D=s&134217727;return D!==0?(s=D&~f,s!==0?c=ga(s):(x&=D,x!==0?c=ga(x):a||(a=D&~e,a!==0&&(c=ga(a))))):(D=s&~f,D!==0?c=ga(D):x!==0?c=ga(x):a||(a=s&~e,a!==0&&(c=ga(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Za(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Wi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-St(a),c=1<<s;n|=e[s],a&=~c}return n}function So(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yo(){var e=Ya;return Ya<<=1,(Ya&62914560)===0&&(Ya=4194304),e}function ds(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function qi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fl(e,n,a,s,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,V=e.expirationTimes,oe=e.hiddenUpdates;for(a=x&~a;0<a;){var _e=31-St(a),be=1<<_e;D[_e]=0,V[_e]=-1;var re=oe[_e];if(re!==null)for(oe[_e]=null,_e=0;_e<re.length;_e++){var ge=re[_e];ge!==null&&(ge.lane&=-536870913)}a&=~be}s!==0&&Dr(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Dr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-St(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Mo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-St(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Eo(e,n){var a=n&-n;return a=(a&42)!==0?1:To(a),(a&(e.suspendedLanes|n))!==0?0:a}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Il(){var e=Ae.p;return e!==0?e:(e=window.event,e===void 0?32:C_(e.type))}function Bl(e,n){var a=Ae.p;try{return Ae.p=e,n()}finally{Ae.p=a}}var vi=Math.random().toString(36).slice(2),N="__reactFiber$"+vi,J="__reactProps$"+vi,xe="__reactContainer$"+vi,pe="__reactEvents$"+vi,me="__reactListeners$"+vi,Ze="__reactHandles$"+vi,tt="__reactResources$"+vi,We="__reactMarker$"+vi,ot="__reactLoad$"+vi;function lt(e){delete e[N],delete e[J],delete e[me],delete e[Ze]}function vt(e){var n;if(n=e[N])return n;for(var a=e.parentNode;a;){if(n=a[xe]||a[N]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=l_(e);e!==null;){if(a=e[N])return a;e=l_(e)}return n}e=a,a=e.parentNode}return null}function yt(e){if(e=e[N]||e[xe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function it(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Dt(e){var n=e[tt];return n||(n=e[tt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ct(e){e[We]=!0}function $t(e){e[ot]=void 0}var Yt=new Set,yn={};function je(e,n){ln(e,n),ln(e+"Capture",n)}function ln(e,n){for(yn[e]=n,e=0;e<n.length;e++)Yt.add(n[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},ni={};function Yi(e){return ve.call(ni,e)?!0:ve.call(Gn,e)?!1:Bt.test(e)?ni[e]=!0:(Gn[e]=!0,!1)}var wt=!1;function Wt(){var e=wt;return wt=!1,e}function nn(e,n,a){if(Yi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ii(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ot(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function va(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zl(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $u(e){if(!e._valueTracker){var n=va(e)?"checked":"value";e._valueTracker=zl(e,n,""+e[n])}}function Um(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=va(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var iy=/[\n"\\]/g;function _i(e){return e.replace(iy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ef(e,n,a,s,c,f,x,D){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+cn(n)):e.value!==""+cn(n)&&(e.value=""+cn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?tf(e,cn(e.value)):tf(e,cn(n)):a!=null?tf(e,cn(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+cn(D):e.removeAttribute("name")}function Lm(e,n,a,s,c,f,x,D){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){$u(e);return}a=a!=null?""+cn(a):"",n=n!=null?""+cn(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=D?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),$u(e)}function tf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function hs(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+cn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Om(e,n,a){if(n!=null&&(n=""+cn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+cn(a):""}function Pm(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ne(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=cn(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),$u(e)}function ps(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ay=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fm(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||ay.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Im(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",wt=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(Fm(e,c,s),wt=!0)}else for(var f in n)n.hasOwnProperty(f)&&Fm(e,f,n[f])}function nf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ry=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hl(e){return sy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var af=null;function rf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ms=null,gs=null;function Bm(e){var n=yt(e);if(n&&(e=n.stateNode)){var a=e[J]||null;e:switch(e=n.stateNode,n.type){case"input":if(ef(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[J]||null;if(!c)throw Error(r(90));ef(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Um(s)}break e;case"textarea":Om(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&hs(e,!!a.multiple,n,!1)}}}var sf=!1;function zm(e,n,a){if(sf)return e(n,a);sf=!0;try{var s=e(n);return s}finally{if(sf=!1,(ms!==null||gs!==null)&&(Hc(),ms&&(n=ms,e=gs,gs=ms=null,Bm(n),e)))for(n=0;n<e.length;n++)Bm(e[n])}}function Ao(e,n){var a=e.stateNode;if(a===null)return null;var s=a[J]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=!1;if(_a)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){of=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{of=!1}var ja=null,lf=null,Gl=null;function Hm(){if(Gl)return Gl;var e,n=lf,a=n.length,s,c="value"in ja?ja.value:ja.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Gl=c.slice(e,1<s?1-s:void 0)}function Vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kl(){return!0}function Gm(){return!1}function Vn(e){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(f):f[D]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?kl:Gm,this.isPropagationStopped=Gm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=kl)},persist:function(){},isPersistent:kl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Vn(Ka),Co=z({},Ka,{view:0,detail:0}),oy=Vn(Co),cf,uf,wo,Wl=z({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(cf=e.screenX-wo.screenX,uf=e.screenY-wo.screenY):uf=cf=0,wo=e),cf)},movementY:function(e){return"movementY"in e?e.movementY:uf}}),Vm=Vn(Wl),ly=z({},Wl,{dataTransfer:0}),cy=Vn(ly),uy=z({},Co,{relatedTarget:0}),ff=Vn(uy),fy=z({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),dy=Vn(fy),hy=z({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),py=Vn(hy),my=z({},Ka,{data:0}),km=Vn(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_y[e])?!!n[e]:!1}function df(){return xy}var Sy=z({},Co,{key:function(e){if(e.key){var n=gy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yy=Vn(Sy),My=z({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=Vn(My),Ey=z({},Ka,{submitter:0}),Ty=Vn(Ey),by=z({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),Ay=Vn(by),Ry=z({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=Vn(Ry),wy=z({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ny=Vn(wy),Dy=z({},Ka,{newState:0,oldState:0,source:0}),Uy=Vn(Dy),Ly=[9,13,27,32],hf=_a&&"CompositionEvent"in window,No=null;_a&&"documentMode"in document&&(No=document.documentMode);var Oy=_a&&"TextEvent"in window&&!No,Wm=_a&&(!hf||No&&8<No&&11>=No),qm=" ",Ym=!1;function Zm(e,n){switch(e){case"keyup":return Ly.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vs=!1;function Py(e,n){switch(e){case"compositionend":return jm(n);case"keypress":return n.which!==32?null:(Ym=!0,qm);case"textInput":return e=n.data,e===qm&&Ym?null:e;default:return null}}function Fy(e,n){if(vs)return e==="compositionend"||!hf&&Zm(e,n)?(e=Hm(),Gl=lf=ja=null,vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wm&&n.locale!=="ko"?null:n.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Iy[e.type]:n==="textarea"}function Qm(e,n,a,s){ms?gs?gs.push(s):gs=[s]:ms=s,n=qc(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Do=null,Uo=null;function By(e){Bv(e,0)}function ql(e){var n=it(e);if(Um(n))return e}function Jm(e,n){if(e==="change")return n}var $m=!1;if(_a){var pf;if(_a){var mf="oninput"in document;if(!mf){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),mf=typeof e0.oninput=="function"}pf=mf}else pf=!1;$m=pf&&(!document.documentMode||9<document.documentMode)}function t0(){Do&&(Do.detachEvent("onpropertychange",n0),Uo=Do=null)}function n0(e){if(e.propertyName==="value"&&ql(Uo)){var n=[];Qm(n,Uo,e,rf(e)),zm(By,n)}}function zy(e,n,a){e==="focusin"?(t0(),Do=n,Uo=a,Do.attachEvent("onpropertychange",n0)):e==="focusout"&&t0()}function Hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(Uo)}function Gy(e,n){if(e==="click")return ql(n)}function Vy(e,n){if(e==="input"||e==="change")return ql(n)}function ky(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ai=typeof Object.is=="function"?Object.is:ky;function Lo(e,n){if(ai(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ve.call(n,c)||!ai(e[c],n[c]))return!1}return!0}function gf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function i0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function a0(e,n){var a=i0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=i0(a)}}function r0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?r0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function s0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gf(e.document)}return n}function vf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Xy=_a&&"documentMode"in document&&11>=document.documentMode,_s=null,_f=null,Oo=null,xf=!1;function o0(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xf||_s==null||_s!==gf(s)||(s=_s,"selectionStart"in s&&vf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Oo&&Lo(Oo,s)||(Oo=s,s=qc(_f,"onSelect"),0<s.length&&(n=new Xl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=_s)))}function Ur(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var xs={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionrun:Ur("Transition","TransitionRun"),transitionstart:Ur("Transition","TransitionStart"),transitioncancel:Ur("Transition","TransitionCancel"),transitionend:Ur("Transition","TransitionEnd")},Sf={},l0={};_a&&(l0=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Lr(e){if(Sf[e])return Sf[e];if(!xs[e])return e;var n=xs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in l0)return Sf[e]=n[a];return e}var c0=Lr("animationend"),u0=Lr("animationiteration"),f0=Lr("animationstart"),Wy=Lr("transitionrun"),qy=Lr("transitionstart"),Yy=Lr("transitioncancel"),d0=Lr("transitionend"),h0=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function wi(e,n){h0.set(e,n),je(n,[e])}var Zy=0;function xa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Li.identifierPrefix;var a=Zy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function p0(e){if(e==null||typeof e=="string")return e;var n=null,a=zs;if(a!==null)for(var s=0;s<a.length;s++){var c=e[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function Sa(e,n){return e=p0(e),n=p0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],Ss=0,Mf=0;function Zl(){for(var e=Ss,n=Mf=Ss=0;n<e;){var a=xi[n];xi[n++]=null;var s=xi[n];xi[n++]=null;var c=xi[n];xi[n++]=null;var f=xi[n];if(xi[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&m0(a,c,f)}}function jl(e,n,a,s){xi[Ss++]=e,xi[Ss++]=n,xi[Ss++]=a,xi[Ss++]=s,Mf|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Ef(e,n,a,s){return jl(e,n,a,s),Kl(e)}function Or(e,n){return jl(e,null,null,n),Kl(e)}function m0(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-St(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Kl(e){if(50<nl)throw nl=0,zc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ys={};function jy(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,s){return new jy(e,n,a,s)}function Tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function g0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ql(e,n,a,s,c,f){var x=0;if(s=e,typeof s=="function")Tf(s)&&(x=1);else if(typeof s=="string")x=EE(e,a,ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case ae:return e=Zn(31,a,n,c),e.elementType=ae,e.lanes=f,e;case F:return Pr(a.children,c,f,n);case X:x=8,c|=24;break;case Y:return e=Zn(12,a,n,c|2),e.elementType=Y,e.lanes=f,e;case k:return e=Zn(13,a,n,c),e.elementType=k,e.lanes=f,e;case ie:return e=Zn(19,a,n,c),e.elementType=ie,e.lanes=f,e;case Oe:case H:return e=c|32,e=Zn(30,a,n,e),e.elementType=H,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case W:x=10;break e;case G:x=9;break e;case L:x=11;break e;case te:x=14;break e;case ne:x=16,s=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Zn(x,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Pr(e,n,a,s){return e=Zn(7,e,s,n),e.lanes=a,e}function bf(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function v0(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function Af(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _0=new WeakMap;function Si(e,n){if(typeof e=="object"&&e!==null){var a=_0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ce(n)},_0.set(e,n),n)}return{value:e,source:n,stack:ce(n)}}var Ms=[],Es=0,Jl=null,Po=0,yi=[],Mi=0,Qa=null,ji=1,Ki="";function Ma(e,n){Ms[Es++]=Po,Ms[Es++]=Jl,Jl=e,Po=n}function x0(e,n,a){yi[Mi++]=ji,yi[Mi++]=Ki,yi[Mi++]=Qa,Qa=e;var s=ji;e=Ki;var c=32-St(s)-1;s&=~(1<<c),a+=1;var f=32-St(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,ji=1<<32-St(n)+c|a<<c|s,Ki=f+e}else ji=1<<f|a<<c|s,Ki=e}function $l(e){e.return!==null&&(Ma(e,1),x0(e,1,0))}function Rf(e){for(;e===Jl;)Jl=Ms[--Es],Ms[Es]=null,Po=Ms[--Es],Ms[Es]=null;for(;e===Qa;)Qa=yi[--Mi],yi[Mi]=null,Ki=yi[--Mi],yi[Mi]=null,ji=yi[--Mi],yi[Mi]=null}function S0(e,n){yi[Mi++]=ji,yi[Mi++]=Ki,yi[Mi++]=Qa,ji=n.id,Ki=n.overflow,Qa=e}var bn=null,an=null,Nt=!1,Ja=null,Ei=!1,Cf=Error(r(519));function $a(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Si(n,e)),Cf}function y0(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[N]=e,n[J]=s,a){case"dialog":Lt("cancel",n),Lt("close",n);break;case"iframe":case"object":case"embed":Lt("load",n);break;case"video":case"audio":for(a=0;a<al.length;a++)Lt(al[a],n);break;case"source":Lt("error",n);break;case"img":case"image":case"link":Lt("error",n),Lt("load",n);break;case"details":Lt("toggle",n);break;case"input":Lt("invalid",n),Lm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Lt("invalid",n);break;case"textarea":Lt("invalid",n),Pm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Vv(n.textContent,a)?(s.popover!=null&&(Lt("beforetoggle",n),Lt("toggle",n)),s.onScroll!=null&&Lt("scroll",n),s.onScrollEnd!=null&&Lt("scrollend",n),s.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||$a(e,!0)}function ec(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:bn=bn.return}}function Ts(e){if(e!==bn)return!1;if(!Nt)return ec(e),Nt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ah(e.type,e.memoizedProps)),a=!a),a&&an&&$a(e),ec(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));an=o_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));an=o_(e)}else n===27?(n=an,mr(e.type)?(e=hh,hh=null,an=e):an=n):an=bn?bi(e.stateNode.nextSibling):null;return!0}function Fr(){an=bn=null,Nt=!1}function wf(){var e=Ja;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Ja=null),e}function Fo(e){Ja===null?Ja=[e]:Ja.push(e)}var Nf=Ye(null),Ir=null,Ea=null;function er(e,n,a){Pe(Nf,n._currentValue),n._currentValue=a}function Ta(e){e._currentValue=Nf.current,ue(Nf)}function tc(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Df(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var D=f;f=c;for(var V=0;V<n.length;V++)if(D.context===n[V]){f.lanes|=a,D=f.alternate,D!==null&&(D.lanes|=a),tc(f.return,a,e),s||(x=null);break e}f=D.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),tc(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),tc(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Br(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var D=c.type;ai(c.pendingProps.value,x.value)||(e!==null?e.push(D):e=[D])}}else if(c===$e.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(js):e=[js])}c=c.return}return e!==null&&Df(n,e,a,s),n.flags|=262144,e!==null}function nc(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zr(e){Ir=e,Ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return M0(Ir,e)}function ic(e,n){return Ir===null&&zr(e),M0(e,n)}function M0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(e===null)throw Error(r(308));Ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ea=Ea.next=n;return a}var Ky=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Qy=o.unstable_scheduleCallback,Jy=o.unstable_NormalPriority,pn={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new Ky,data:new Map,refCount:0}}function Io(e){e.refCount--,e.refCount===0&&Qy(Jy,function(){e.controller.abort()})}function E0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var Bo=null;function $y(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var zo=null,Lf=0,Hr=0,bs=null;function eM(e,n){if(zo===null){var a=zo=[];Lf=0,Hr=jd(),bs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Lf++,n.then(T0,T0),n}function T0(){if(--Lf===0&&(Bo=null,zo!==null)){bs!==null&&(bs.status="fulfilled");var e=zo;zo=null,Hr=0,bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function tM(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var b0=Se.S;Se.S=function(e,n){if(vv=Ve(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&eM(e,n),Bo!==null)for(var a=ks;a!==null;)E0(a,Bo),a=a.next;if(a=e.types,a!==null){for(var s=ks;s!==null;)E0(s,a),s=s.next;if(Hr!==0){s=Bo,s===null&&(s=Bo=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}b0!==null&&b0(e,n)};var Gr=Ye(null);function Of(){var e=Gr.current;return e!==null?e:tn.pooledCache}function ac(e,n){n===null?Pe(Gr,Gr.current):Pe(Gr,n.pool)}function A0(){var e=Of();return e===null?null:{parent:pn._currentValue,pool:e}}var As=Error(r(460)),Pf=Error(r(474)),rc=Error(r(542)),sc={then:function(){}};function R0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function C0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,N0(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,N0(e),e}throw kr=n,As}}function Vr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(kr=a,As):a}}var kr=null;function w0(){if(kr===null)throw Error(r(459));var e=kr;return kr=null,e}function N0(e){if(e===As||e===rc)throw Error(r(483))}var Rs=null,Ho=0;function oc(e){var n=Ho;return Ho+=1,Rs===null&&(Rs=[]),C0(Rs,e,n)}function tr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function lc(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function D0(e){function n(se,ee){if(e){var he=se.deletions;he===null?(se.deletions=[ee],se.flags|=16):he.push(ee)}}function a(se,ee){if(!e)return null;for(;ee!==null;)n(se,ee),ee=ee.sibling;return null}function s(se){for(var ee=new Map;se!==null;)se.key===null?ee.set(se.index,se):ee.set(se.key,se),se=se.sibling;return ee}function c(se,ee){return se=ya(se,ee),se.index=0,se.sibling=null,se}function f(se,ee,he){return se.index=he,e?(he=se.alternate,he!==null?(he=he.index,he<ee?(se.flags|=2,ee):he):(se.flags|=134217730,ee)):(se.flags|=1048576,ee)}function x(se){return e&&se.alternate===null&&(se.flags|=134217730),se}function D(se,ee,he,Te){return ee===null||ee.tag!==6?(ee=bf(he,se.mode,Te),ee.return=se,ee):(ee=c(ee,he),ee.return=se,ee)}function V(se,ee,he,Te){var at=he.type;return at===F?(se=_e(se,ee,he.props.children,Te,he.key),tr(se,he),se):ee!==null&&(ee.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&Vr(at)===ee.type)?(ee=c(ee,he.props),tr(ee,he),ee.return=se,ee):(ee=Ql(he.type,he.key,he.props,null,se.mode,Te),tr(ee,he),ee.return=se,ee)}function oe(se,ee,he,Te){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==he.containerInfo||ee.stateNode.implementation!==he.implementation?(ee=Af(he,se.mode,Te),ee.return=se,ee):(ee=c(ee,he.children||[]),ee.return=se,ee)}function _e(se,ee,he,Te,at){return ee===null||ee.tag!==7?(ee=Pr(he,se.mode,Te,at),ee.return=se,ee):(ee=c(ee,he),ee.return=se,ee)}function be(se,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ee=bf(""+ee,se.mode,he),ee.return=se,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case O:return he=Ql(ee.type,ee.key,ee.props,null,se.mode,he),tr(he,ee),he.return=se,he;case I:return ee=Af(ee,se.mode,he),ee.return=se,ee;case ne:return ee=Vr(ee),be(se,ee,he)}if(Ne(ee)||j(ee))return ee=Pr(ee,se.mode,he,null),ee.return=se,ee;if(typeof ee.then=="function")return be(se,oc(ee),he);if(ee.$$typeof===W)return be(se,ic(se,ee),he);lc(se,ee)}return null}function re(se,ee,he,Te){var at=ee!==null?ee.key:null;if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return at!==null?null:D(se,ee,""+he,Te);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case O:return he.key===at?V(se,ee,he,Te):null;case I:return he.key===at?oe(se,ee,he,Te):null;case ne:return he=Vr(he),re(se,ee,he,Te)}if(Ne(he)||j(he))return at!==null?null:_e(se,ee,he,Te,null);if(typeof he.then=="function")return re(se,ee,oc(he),Te);if(he.$$typeof===W)return re(se,ee,ic(se,he),Te);lc(se,he)}return null}function ge(se,ee,he,Te,at){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return se=se.get(he)||null,D(ee,se,""+Te,at);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return se=se.get(Te.key===null?he:Te.key)||null,V(ee,se,Te,at);case I:return se=se.get(Te.key===null?he:Te.key)||null,oe(ee,se,Te,at);case ne:return Te=Vr(Te),ge(se,ee,he,Te,at)}if(Ne(Te)||j(Te))return se=se.get(he)||null,_e(ee,se,Te,at,null);if(typeof Te.then=="function")return ge(se,ee,he,oc(Te),at);if(Te.$$typeof===W)return ge(se,ee,he,ic(ee,Te),at);lc(ee,Te)}return null}function qe(se,ee,he,Te){for(var at=null,Ft=null,dt=ee,gt=ee=0,vn=null;dt!==null&&gt<he.length;gt++){dt.index>gt?(vn=dt,dt=null):vn=dt.sibling;var Gt=re(se,dt,he[gt],Te);if(Gt===null){dt===null&&(dt=vn);break}e&&dt&&Gt.alternate===null&&n(se,dt),ee=f(Gt,ee,gt),Ft===null?at=Gt:Ft.sibling=Gt,Ft=Gt,dt=vn}if(gt===he.length)return a(se,dt),Nt&&Ma(se,gt),at;if(dt===null){for(;gt<he.length;gt++)dt=be(se,he[gt],Te),dt!==null&&(ee=f(dt,ee,gt),Ft===null?at=dt:Ft.sibling=dt,Ft=dt);return Nt&&Ma(se,gt),at}for(dt=s(dt);gt<he.length;gt++)vn=ge(dt,se,gt,he[gt],Te),vn!==null&&(e&&(Gt=vn.alternate,Gt!==null&&dt.delete(Gt.key===null?gt:Gt.key)),ee=f(vn,ee,gt),Ft===null?at=vn:Ft.sibling=vn,Ft=vn);return e&&dt.forEach(function(Sr){return n(se,Sr)}),Nt&&Ma(se,gt),at}function ct(se,ee,he,Te){if(he==null)throw Error(r(151));for(var at=null,Ft=null,dt=ee,gt=ee=0,vn=null,Gt=he.next();dt!==null&&!Gt.done;gt++,Gt=he.next()){dt.index>gt?(vn=dt,dt=null):vn=dt.sibling;var Sr=re(se,dt,Gt.value,Te);if(Sr===null){dt===null&&(dt=vn);break}e&&dt&&Sr.alternate===null&&n(se,dt),ee=f(Sr,ee,gt),Ft===null?at=Sr:Ft.sibling=Sr,Ft=Sr,dt=vn}if(Gt.done)return a(se,dt),Nt&&Ma(se,gt),at;if(dt===null){for(;!Gt.done;gt++,Gt=he.next())Gt=be(se,Gt.value,Te),Gt!==null&&(ee=f(Gt,ee,gt),Ft===null?at=Gt:Ft.sibling=Gt,Ft=Gt);return Nt&&Ma(se,gt),at}for(dt=s(dt);!Gt.done;gt++,Gt=he.next())Gt=ge(dt,se,gt,Gt.value,Te),Gt!==null&&(e&&(vn=Gt.alternate,vn!==null&&dt.delete(vn.key===null?gt:vn.key)),ee=f(Gt,ee,gt),Ft===null?at=Gt:Ft.sibling=Gt,Ft=Gt);return e&&dt.forEach(function(PE){return n(se,PE)}),Nt&&Ma(se,gt),at}function bt(se,ee,he,Te){if(typeof he=="object"&&he!==null&&he.type===F&&he.key===null&&he.props.ref===void 0&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case O:e:{for(var at=he.key;ee!==null;){if(ee.key===at){if(at=he.type,at===F){if(ee.tag===7){a(se,ee.sibling),Te=c(ee,he.props.children),tr(Te,he),Te.return=se,se=Te;break e}}else if(ee.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&Vr(at)===ee.type){a(se,ee.sibling),Te=c(ee,he.props),tr(Te,he),Te.return=se,se=Te;break e}a(se,ee);break}else n(se,ee);ee=ee.sibling}he.type===F?(Te=Pr(he.props.children,se.mode,Te,he.key),tr(Te,he),Te.return=se,se=Te):(Te=Ql(he.type,he.key,he.props,null,se.mode,Te),tr(Te,he),Te.return=se,se=Te)}return x(se);case I:e:{for(at=he.key;ee!==null;){if(ee.key===at)if(ee.tag===4&&ee.stateNode.containerInfo===he.containerInfo&&ee.stateNode.implementation===he.implementation){a(se,ee.sibling),Te=c(ee,he.children||[]),Te.return=se,se=Te;break e}else{a(se,ee);break}else n(se,ee);ee=ee.sibling}Te=Af(he,se.mode,Te),Te.return=se,se=Te}return x(se);case ne:return he=Vr(he),bt(se,ee,he,Te)}if(Ne(he))return qe(se,ee,he,Te);if(j(he)){if(at=j(he),typeof at!="function")throw Error(r(150));return he=at.call(he),ct(se,ee,he,Te)}if(typeof he.then=="function")return bt(se,ee,oc(he),Te);if(he.$$typeof===W)return bt(se,ee,ic(se,he),Te);lc(se,he)}return typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint"?(he=""+he,ee!==null&&ee.tag===6?(a(se,ee.sibling),Te=c(ee,he),Te.return=se,se=Te):(a(se,ee),Te=bf(he,se.mode,Te),Te.return=se,se=Te),x(se)):a(se,ee)}return function(se,ee,he,Te){try{Ho=0;var at=bt(se,ee,he,Te);return Rs=null,at}catch(dt){if(dt===As||dt===rc)throw dt;var Ft=Zn(29,dt,null,se.mode);return Ft.lanes=Te,Ft.return=se,Ft}finally{}}}var Xr=D0(!0),U0=D0(!1),nr=!1;function Ff(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ir(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ar(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(qt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Kl(e),m0(e,null,a),n}return jl(e,s,n,a),Kl(e)}function Go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Mo(e,a)}}function Bf(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var zf=!1;function Vo(){if(zf){var e=bs;if(e!==null)throw e}}function ko(e,n,a,s){zf=!1;var c=e.updateQueue;nr=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var V=D,oe=V.next;V.next=null,x===null?f=oe:x.next=oe,x=V;var _e=e.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==x&&(D===null?_e.firstBaseUpdate=oe:D.next=oe,_e.lastBaseUpdate=V))}if(f!==null){var be=c.baseState;x=0,_e=oe=V=null,D=f;do{var re=D.lane&-536870913,ge=re!==D.lane;if(ge?(Pt&re)===re:(s&re)===re){re!==0&&re===Hr&&(zf=!0),_e!==null&&(_e=_e.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var qe=e,ct=D;re=n;var bt=a;switch(ct.tag){case 1:if(qe=ct.payload,typeof qe=="function"){be=qe.call(bt,be,re);break e}be=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=ct.payload,re=typeof qe=="function"?qe.call(bt,be,re):qe,re==null)break e;be=z({},be,re);break e;case 2:nr=!0}}re=D.callback,re!==null&&(e.flags|=64,ge&&(e.flags|=8192),ge=c.callbacks,ge===null?c.callbacks=[re]:ge.push(re))}else ge={lane:re,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(oe=_e=ge,V=be):_e=_e.next=ge,x|=re;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);_e===null&&(V=be),c.baseState=V,c.firstBaseUpdate=oe,c.lastBaseUpdate=_e,f===null&&(c.shared.lanes=0),fr|=x,e.lanes=x,e.memoizedState=be}}function L0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function O0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)L0(a[e],n)}var rr=Ye(null),cc=Ye(0);function P0(e,n){e=wa,Pe(cc,e),Pe(rr,n),wa=e|n.baseLanes}function Hf(){Pe(cc,wa),Pe(rr,rr.current)}function Gf(){wa=cc.current,ue(rr),ue(cc)}var Dn=Ye(null),In=null;function sr(e){var n=e.alternate;Pe(Un,Un.current&1),Pe(Dn,e),In===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(In=e)}function Vf(e){Pe(Un,Un.current),Pe(Dn,e),In===null&&(In=e)}function F0(e){e.tag===22?(Pe(Un,Un.current),Pe(Dn,e),In===null&&(In=e)):or()}function or(){Pe(Un,Un.current),Pe(Dn,Dn.current)}function ri(e){ue(Dn),In===e&&(In=null),ue(Un)}var Un=Ye(0);function Xo(e,n){Pe(Dn,Dn.current),Pe(Un,n)}function kf(e){ue(Un),ue(Dn),In===e&&(In=null)}function uc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||dh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,Tt=null,en=null,mn=null,fc=!1,Cs=!1,Wr=!1,dc=0,Wo=0,ws=null,nM=0;function un(){throw Error(r(321))}function Xf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ai(e[a],n[a]))return!1;return!0}function Wf(e,n,a,s,c,f){return ba=f,Tt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Se.H=e===null||e.memoizedState===null?xg:Sg,Wr=!1,f=a(s,c),Wr=!1,Cs&&(f=B0(n,a,s,c)),I0(e),f}function I0(e){Se.H=xc;var n=en!==null&&en.next!==null;if(ba=0,mn=en=Tt=null,fc=!1,Wo=0,ws=null,n)throw Error(r(300));e===null||gn||(e=e.dependencies,e!==null&&nc(e)&&(gn=!0))}function B0(e,n,a,s){Tt=e;var c=0;do{if(Cs&&(ws=null),Wo=0,Cs=!1,25<=c)throw Error(r(301));if(c+=1,mn=en=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Se.H=uM,f=n(a,s)}while(Cs);return f}function iM(){var e=Se.H,n=e.useState()[0];return n=typeof n.then=="function"?qo(n):n,e=e.useState()[0],(en!==null?en.memoizedState:null)!==e&&(Tt.flags|=1024),n}function qf(){var e=dc!==0;return dc=0,e}function Yf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zf(e){if(fc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fc=!1}ba=0,mn=en=Tt=null,Cs=!1,Wo=dc=0,ws=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Tt.memoizedState=mn=e:mn=mn.next=e,mn}function hn(){if(en===null){var e=Tt.alternate;e=e!==null?e.memoizedState:null}else e=en.next;var n=mn===null?Tt.memoizedState:mn.next;if(n!==null)mn=n,en=e;else{if(e===null)throw Tt.alternate===null?Error(r(467)):Error(r(310));en=e,e={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},mn===null?Tt.memoizedState=mn=e:mn=mn.next=e}return mn}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qo(e){var n=Wo;return Wo+=1,ws===null&&(ws=[]),e=C0(ws,e,n),n=Tt,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,Se.H=n===null||n.memoizedState===null?xg:Sg),e}function pc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qo(e);if(e.$$typeof===de)return;if(e.$$typeof===W)return Nn(e)}throw Error(r(438,String(e)))}function jf(e){var n=null,a=Tt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Tt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hc(),Tt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=Le;return n.index++,a}function Aa(e,n){return typeof n=="function"?n(e):n}function mc(e){var n=hn();return Kf(n,en,e)}function Kf(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var D=x=null,V=null,oe=n,_e=!1;do{var be=oe.lane&-536870913;if(be!==oe.lane?(Pt&be)===be:(ba&be)===be){var re=oe.revertLane;if(re===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),be===Hr&&(_e=!0);else if((ba&re)===re){oe=oe.next,re===Hr&&(_e=!0);continue}else be={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(D=V=be,x=f):V=V.next=be,Tt.lanes|=re,fr|=re;be=oe.action,Wr&&a(f,be),f=oe.hasEagerState?oe.eagerState:a(f,be)}else re={lane:be,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(D=V=re,x=f):V=V.next=re,Tt.lanes|=be,fr|=be;oe=oe.next}while(oe!==null&&oe!==n);if(V===null?x=f:V.next=D,!ai(f,e.memoizedState)&&(gn=!0,_e&&(a=bs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=V,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Qf(e){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);ai(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function z0(e,n,a){var s=Tt,c=hn(),f=Nt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!ai((en||c).memoizedState,a);if(x&&(c.memoizedState=a,gn=!0),c=c.queue,ed(V0.bind(null,s,c,e),[e]),e=c.getSnapshot!==n||x||mn!==null&&(mn.memoizedState.tag&1)!==0,Ns(e?9:8,{destroy:void 0},G0.bind(null,s,c,a,n),null),e){if(s.flags|=2048,tn===null)throw Error(r(349));f||(ba&127)!==0||H0(s,n,a)}return a}function H0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Tt.updateQueue,n===null?(n=hc(),Tt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function G0(e,n,a,s){n.value=a,n.getSnapshot=s,k0(n)&&X0(e)}function V0(e,n,a){return a(function(){k0(n)&&X0(e)})}function k0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ai(e,a)}catch{return!0}}function X0(e){var n=Or(e,2);n!==null&&Jn(n,e,2)}function Jf(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Wr){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:e},n}function W0(e,n,a,s){return e.baseState=a,Kf(e,en,typeof s=="function"?s:Aa)}function aM(e,n,a,s,c){if(_c(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};Se.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,q0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function q0(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=Se.T,x={};x.types=f!==null?f.types:null,Se.T=x;try{var D=a(c,s),V=Se.S;V!==null&&V(x,D),Y0(e,n,D)}catch(oe){$f(e,n,oe)}finally{f!==null&&x.types!==null&&(f.types=x.types),Se.T=f}}else try{f=a(c,s),Y0(e,n,f)}catch(oe){$f(e,n,oe)}}function Y0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Z0(e,n,s)},function(s){return $f(e,n,s)}):Z0(e,n,a)}function Z0(e,n,a){n.status="fulfilled",n.value=a,j0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,q0(e,a)))}function $f(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,j0(n),n=n.next;while(n!==s)}e.action=null}function j0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function K0(e,n){return n}function Q0(e,n){if(Nt){var a=tn.formState;if(a!==null){e:{var s=Tt;if(Nt){if(an){t:{for(var c=an,f=Ei;c.nodeType!==8;){if(!f){c=null;break t}if(c=bi(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){an=bi(c.nextSibling),s=c.data==="F!";break e}}$a(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:K0,lastRenderedState:n},a.queue=s,a=gg.bind(null,Tt,s),s.dispatch=a,s=Jf(!1),f=rd.bind(null,Tt,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=aM.bind(null,Tt,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function J0(e){var n=hn();return $0(n,en,e)}function $0(e,n,a){if(n=Kf(e,n,K0)[0],e=mc(Aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=qo(n)}catch(x){throw x===As?rc:x}else s=n;n=hn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(Tt.flags|=2048,Ns(9,{destroy:void 0},rM.bind(null,c,a),null)),[s,f,e]}function rM(e,n){e.action=n}function eg(e){var n=hn(),a=en;if(a!==null)return $0(n,a,e);hn(),n=n.memoizedState,a=hn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Ns(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=Tt.updateQueue,n===null&&(n=hc(),Tt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function tg(){return hn().memoizedState}function gc(e,n,a,s){var c=kn();Tt.flags|=e,c.memoizedState=Ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function vc(e,n,a,s){var c=hn();s=s===void 0?null:s;var f=c.memoizedState.inst;en!==null&&s!==null&&Xf(s,en.memoizedState.deps)?c.memoizedState=Ns(n,f,a,s):(Tt.flags|=e,c.memoizedState=Ns(1|n,f,a,s))}function ng(e,n){gc(8390656,8,e,n)}function ed(e,n){vc(2048,8,e,n)}function sM(e){Tt.flags|=4;var n=Tt.updateQueue;if(n===null)n=hc(),Tt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function ig(e){var n=hn().memoizedState;return sM({ref:n,nextImpl:e}),function(){if((qt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ag(e,n){return vc(4,2,e,n)}function rg(e,n){return vc(4,4,e,n)}function sg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function og(e,n,a){a=a!=null?a.concat([e]):null,vc(4,4,sg.bind(null,n,e),a)}function td(){}function lg(e,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Xf(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function cg(e,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Xf(n,s[1]))return s[0];if(s=e(),Wr){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[s,n],s}function nd(e,n,a){return a===void 0||(ba&1073741824)!==0&&(Pt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=xv(),Tt.lanes|=e,fr|=e,a)}function ug(e,n,a,s){return ai(a,n)?a:rr.current!==null?(e=nd(e,a,s),ai(e,n)||(gn=!0),e):(ba&106)===0||(ba&1073741824)!==0&&(Pt&261930)===0?(gn=!0,e.memoizedState=a):(e=xv(),Tt.lanes|=e,fr|=e,n)}function fg(e,n,a,s,c){var f=Ae.p;Ae.p=f!==0&&8>f?f:8;var x=Se.T,D={};D.types=x!==null?x.types:null,Se.T=D,rd(e,!1,n,a);try{var V=c(),oe=Se.S;if(oe!==null&&oe(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _e=tM(V,s);Yo(e,n,_e,ci(e))}else Yo(e,n,s,ci(e))}catch(be){Yo(e,n,{then:function(){},status:"rejected",reason:be},ci())}finally{Ae.p=f,x!==null&&D.types!==null&&(x.types=D.types),Se.T=x}}function oM(){}function id(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=dg(e).queue;fg(e,c,n,et,a===null?oM:function(){return hg(e),a(s)})}function dg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function hg(e){var n=dg(e);n.next===null&&(n=e.alternate.memoizedState),Yo(e,n.next.queue,{},ci())}function ad(){return Nn(js)}function pg(){return hn().memoizedState}function mg(){return hn().memoizedState}function lM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();e=ir(a);var s=ar(n,e,a);s!==null&&(Jn(s,n,a),Go(s,n,a)),n={cache:Uf()},e.payload=n;return}n=n.return}}function cM(e,n,a){var s=ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_c(e)?vg(n,a):(a=Ef(e,n,a,s),a!==null&&(Jn(a,e,s),_g(a,n,s)))}function gg(e,n,a){var s=ci();Yo(e,n,a,s)}function Yo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_c(e))vg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,D=f(x,a);if(c.hasEagerState=!0,c.eagerState=D,ai(D,x))return jl(e,n,c,0),tn===null&&Zl(),!1}catch{}finally{}if(a=Ef(e,n,c,s),a!==null)return Jn(a,e,s),_g(a,n,s),!0}return!1}function rd(e,n,a,s){if(s={lane:2,revertLane:jd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_c(e)){if(n)throw Error(r(479))}else n=Ef(e,a,s,2),n!==null&&Jn(n,e,2)}function _c(e){var n=e.alternate;return e===Tt||n!==null&&n===Tt}function vg(e,n){Cs=fc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function _g(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Mo(e,a)}}var xc={readContext:Nn,use:pc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},xg={readContext:Nn,use:pc,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:ng,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gc(4194308,4,sg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gc(4194308,4,e,n)},useInsertionEffect:function(e,n){gc(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var s=e();if(Wr){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=kn();if(a!==void 0){var c=a(n);if(Wr){It(!0);try{a(n)}finally{It(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=cM.bind(null,Tt,e),[s.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Jf(e);var n=e.queue,a=gg.bind(null,Tt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:td,useDeferredValue:function(e,n){var a=kn();return nd(a,e,n)},useTransition:function(){var e=Jf(!1);return e=fg.bind(null,Tt,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=Tt,c=kn();if(Nt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),tn===null)throw Error(r(349));(Pt&127)!==0||H0(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,ng(V0.bind(null,s,f,e),[e]),s.flags|=2048,Ns(9,{destroy:void 0},G0.bind(null,s,f,a,n),null),a},useId:function(){var e=kn(),n=tn.identifierPrefix;if(Nt){var a=Ki,s=ji;a=(s&~(1<<32-St(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ad,useFormState:Q0,useActionState:Q0,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rd.bind(null,Tt,!0,a),a.dispatch=n,[e,n]},useMemoCache:jf,useCacheRefresh:function(){return kn().memoizedState=lM.bind(null,Tt)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((qt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Sg={readContext:Nn,use:pc,useCallback:lg,useContext:Nn,useEffect:ed,useImperativeHandle:og,useInsertionEffect:ag,useLayoutEffect:rg,useMemo:cg,useReducer:mc,useRef:tg,useState:function(){return mc(Aa)},useDebugValue:td,useDeferredValue:function(e,n){var a=hn();return ug(a,en.memoizedState,e,n)},useTransition:function(){var e=mc(Aa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:qo(e),n]},useSyncExternalStore:z0,useId:pg,useHostTransitionStatus:ad,useFormState:J0,useActionState:J0,useOptimistic:function(e,n){var a=hn();return W0(a,en,e,n)},useMemoCache:jf,useCacheRefresh:mg,useEffectEvent:ig},uM={readContext:Nn,use:pc,useCallback:lg,useContext:Nn,useEffect:ed,useImperativeHandle:og,useInsertionEffect:ag,useLayoutEffect:rg,useMemo:cg,useReducer:Qf,useRef:tg,useState:function(){return Qf(Aa)},useDebugValue:td,useDeferredValue:function(e,n){var a=hn();return en===null?nd(a,e,n):ug(a,en.memoizedState,e,n)},useTransition:function(){var e=Qf(Aa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:qo(e),n]},useSyncExternalStore:z0,useId:pg,useHostTransitionStatus:ad,useFormState:eg,useActionState:eg,useOptimistic:function(e,n){var a=hn();return en!==null?W0(a,en,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jf,useCacheRefresh:mg,useEffectEvent:ig};function sd(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:z({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var od={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ci(),c=ir(s);c.payload=n,a!=null&&(c.callback=a),n=ar(e,c,s),n!==null&&(Jn(n,e,s),Go(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ci(),c=ir(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ar(e,c,s),n!==null&&(Jn(n,e,s),Go(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ci(),s=ir(a);s.tag=2,n!=null&&(s.callback=n),n=ar(e,s,a),n!==null&&(Jn(n,e,a),Go(n,e,a))}};function yg(e,n,a,s,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Lo(a,s)||!Lo(c,f):!0}function Mg(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&od.enqueueReplaceState(n,n.state,null)}function qr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=z({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Eg(e){Yl(e)}function Tg(e){console.error(e)}function bg(e){Yl(e)}function Sc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ag(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ld(e,n,a){return a=ir(a),a.tag=3,a.payload={element:null},a.callback=function(){Sc(e,n)},a}function Rg(e){return e=ir(e),e.tag=3,e}function Cg(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Ag(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Ag(n,a,s),typeof c!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var D=s.stack;this.componentDidCatch(s.value,{componentStack:D!==null?D:""})})}function fM(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Br(n,a,c,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Gc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),qd(e,s,c)),!1;case 22:return a.flags|=65536,s===sc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),qd(e,s,c)),!1}throw Error(r(435,a.tag))}return qd(e,s,c),Gc(),!1}if(Nt)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Cf&&(e=Error(r(422),{cause:s}),Fo(Si(e,a)))):(s!==Cf&&(n=Error(r(423),{cause:s}),Fo(Si(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Si(s,a),c=ld(e.stateNode,s,c),Bf(e,c),fn!==4&&(fn=2)),!1;var f=Error(r(520),{cause:s});if(f=Si(f,a),tl===null?tl=[f]:tl.push(f),fn!==4&&(fn=2),n===null)return!0;s=Si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ld(a.stateNode,s,e),Bf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(dr===null||!dr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Rg(c),Cg(c,e,a,s),Bf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var cd=Error(r(461)),gn=!1;function Mn(e,n,a,s){n.child=e===null?U0(n,null,a,s):Xr(n,e.child,a,s)}function wg(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var D in s)D!=="ref"&&(x[D]=s[D])}else x=s;return zr(n),s=Wf(e,n,a,x,f,c),D=qf(),e!==null&&!gn?(Yf(e,n,c),Ra(e,n,c)):(Nt&&D&&$l(n),n.flags|=1,Mn(e,n,s,c),n.child)}function Ng(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Tf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dg(e,n,f,s,c)):(e=Ql(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vd(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(x,s)&&e.ref===n.ref)return Ra(e,n,c)}return n.flags|=1,e=ya(f,s),e.ref=n.ref,e.return=n,n.child=e}function Dg(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Lo(f,s)&&e.ref===n.ref)if(gn=!1,n.pendingProps=s=f,vd(e,c))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Ra(e,n,c)}return ud(e,n,a,s,c)}function Ug(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Lg(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(n,f!==null?f.cachePool:null),f!==null?P0(n,f):Hf(),F0(n);else return s=n.lanes=536870912,Lg(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ac(n,f.cachePool),P0(n,f),or(),n.memoizedState=null):(e!==null&&ac(n,null),Hf(),or());return Mn(e,n,c,a),n.child}function Zo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lg(e,n,a,s,c){var f=Of();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ac(n,null),Hf(),F0(n),e!==null&&Br(e,n,s,!0),n.childLanes=c,null}function yc(e,n){return n=Mc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Og(e,n,a){return Xr(n,e.child,null,a),e=yc(n,n.pendingProps),e.flags|=2,ri(n),n.memoizedState=null,e}function dM(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Nt){if(s.mode==="hidden")return e=yc(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Zo(null,e);if(Vf(n),(e=an)?(e=s_(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ji,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=v0(e),a.return=n,n.child=a,bn=n,an=null)):e=null,e===null)throw $a(n);return n.lanes=536870912,null}return yc(n,s)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Vf(n),c)if(n.flags&256)n.flags&=-257,n=Og(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||Br(e,n,a,!1),c=(a&e.childLanes)!==0,gn||c){if(rr.current===null){if(s=tn,s!==null&&(x=Eo(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Or(e,x),Jn(s,e,x),cd;Gc()}n=Og(e,n,a)}else e=f.treeContext,an=bi(x.nextSibling),bn=n,Nt=!0,Ja=null,Ei=!1,e!==null&&S0(n,e),n=yc(n,s),n.flags|=134221824;return n}return e=ya(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ds(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ud(e,n,a,s,c){return zr(n),a=Wf(e,n,a,s,void 0,c),s=qf(),e!==null&&!gn?(Yf(e,n,c),Ra(e,n,c)):(Nt&&s&&$l(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Pg(e,n,a,s,c,f){return zr(n),n.updateQueue=null,a=B0(n,s,a,c),I0(e),s=qf(),e!==null&&!gn?(Yf(e,n,f),Ra(e,n,f)):(Nt&&s&&$l(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Fg(e,n,a,s,c){if(zr(n),n.stateNode===null){var f=ys,x=a.contextType;typeof x=="object"&&x!==null&&(f=Nn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=od,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Ff(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Nn(x):ys,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(sd(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&od.enqueueReplaceState(f,f.state,null),ko(n,s,f,c),Vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var D=n.memoizedProps,V=qr(a,D);f.props=V;var oe=f.context,_e=a.contextType;x=ys,typeof _e=="object"&&_e!==null&&(x=Nn(_e));var be=a.getDerivedStateFromProps;_e=typeof be=="function"||typeof f.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,_e||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(D||oe!==x)&&Mg(n,f,s,x),nr=!1;var re=n.memoizedState;f.state=re,ko(n,s,f,c),Vo(),oe=n.memoizedState,D||re!==oe||nr?(typeof be=="function"&&(sd(n,a,be,s),oe=n.memoizedState),(V=nr||yg(n,a,V,s,re,oe,x))?(_e||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=oe),f.props=s,f.state=oe,f.context=x,s=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,If(e,n),x=n.memoizedProps,_e=qr(a,x),f.props=_e,be=n.pendingProps,re=f.context,oe=a.contextType,V=ys,typeof oe=="object"&&oe!==null&&(V=Nn(oe)),D=a.getDerivedStateFromProps,(oe=typeof D=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==be||re!==V)&&Mg(n,f,s,V),nr=!1,re=n.memoizedState,f.state=re,ko(n,s,f,c),Vo();var ge=n.memoizedState;x!==be||re!==ge||nr||e!==null&&e.dependencies!==null&&nc(e.dependencies)?(typeof D=="function"&&(sd(n,a,D,s),ge=n.memoizedState),(_e=nr||yg(n,a,_e,s,re,ge,V)||e!==null&&e.dependencies!==null&&nc(e.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ge,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ge,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ge),f.props=s,f.state=ge,f.context=V,s=_e):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&re===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&re===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ds(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Xr(n,e.child,null,c),n.child=Xr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ra(e,n,c),e}function Ig(e,n,a,s){return Fr(),n.flags|=256,Mn(e,n,a,s),n.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(e){return{baseLanes:e,cachePool:A0()}}function hd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Bg(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Nt){if(c?sr(n):or(),(e=an)?(e=s_(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Qa!==null?{id:ji,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=v0(e),a.return=n,n.child=a,bn=n,an=null)):e=null,e===null)throw $a(n);return dh(e)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(or(),c=n.mode,f=Mc({mode:"hidden",children:f},c),s=Pr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=dd(a),s.childLanes=hd(e,x,a),n.memoizedState=fd,Zo(null,s)):(sr(n),pd(n,f))}var D=e.memoizedState;if(D!==null){var V=D.dehydrated;if(V!==null)return hM(e,n,f,x,s,V,D,a)}return c?(or(),c=s.fallback,f=n.mode,D=e.child,V=D.sibling,s=ya(D,{mode:"hidden",children:s.children}),s.subtreeFlags=D.subtreeFlags&1206910976,V!==null?c=ya(V,c):(c=Pr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Zo(null,s),s=n.child,c=e.child.memoizedState,c===null?c=dd(a):(f=c.cachePool,f!==null?(D=pn._currentValue,f=f.parent!==D?{parent:D,pool:D}:f):f=A0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=hd(e,x,a),n.memoizedState=fd,Zo(e.child,s)):(sr(n),a=e.child,e=a.sibling,a=ya(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function pd(e,n){return n=Mc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Mc(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function Ec(e,n,a){return Xr(n,e.child,null,a),e=pd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hM(e,n,a,s,c,f,x,D){if(a)return n.flags&256?(sr(n),n.flags&=-257,Ec(e,n,D)):n.memoizedState!==null?(or(),n.child=e.child,n.flags|=128,null):(or(),f=c.fallback,x=n.mode,c=Mc({mode:"visible",children:c.children},x),f=Pr(f,x,D,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Xr(n,e.child,null,D),c=n.child,c.memoizedState=dd(D),c.childLanes=hd(e,s,D),n.memoizedState=fd,Zo(null,c));if(sr(n),dh(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var V=s.dgst;return s=V,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Fo({value:c,source:null,stack:null})),Ec(e,n,D)}if(gn||Br(e,n,D,!1),s=(D&e.childLanes)!==0,gn||s){if(rr.current!==null)return Ec(e,n,D);if(s=tn,s!==null&&(c=Eo(s,D),c!==0&&c!==x.retryLane))throw x.retryLane=c,Or(e,c),Jn(s,e,c),cd;return fh(f)||Gc(),Ec(e,n,D)}return fh(f)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,an=bi(f.nextSibling),bn=n,Nt=!0,Ja=null,Ei=!1,e!==null&&S0(n,e),n=pd(n,c.children),n.flags|=134221824,n)}function zg(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),tc(e.return,n,a)}function Hg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&uc(a)===null&&(n=e),e=e.sibling}return n}function Tc(e,n,a,s,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function md(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function gd(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=Un.current;if(n.flags&128)return Xo(n,x),null;var D=(x&2)!==0;if(D?(x=x&1|2,n.flags|=128):x&=1,Xo(n,x),c==="backwards"&&e!==null?(md(e),Mn(e,n,s,a),md(e)):Mn(e,n,s,a),s=Nt?Po:0,!D&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,a,n);else if(e.tag===19)zg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=Hg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,md(n)),Tc(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&uc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Tc(n,!0,a,null,f,s);break;case"together":Tc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Hg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Tc(n,!1,c,a,f,s)}return n.child}function Gg(e,n,a){var s=n.pendingProps;return er(n,n.type,s.value),Mn(e,n,s.children,a),n.child}function Ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),fr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Br(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ya(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ya(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nc(e)))}function pM(e,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),er(n,pn,e.memoizedState.cache),Fr();break;case 27:case 5:nt(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:er(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return sr(n),n.flags|=128,null;s=Br(e,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Bg(e,n,a):(sr(n),e=Ra(e,n,a),e!==null?e.sibling:null)}sr(n);break;case 19:if(n.flags&128)return gd(e,n,a);if(c=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Br(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return gd(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xo(n,Un.current),s)break;return null;case 22:return n.lanes=0,Ug(e,n,a,n.pendingProps);case 24:er(n,pn,e.memoizedState.cache)}return Ra(e,n,a)}function Vg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!vd(e,a)&&(n.flags&128)===0)return gn=!1,pM(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Nt&&(n.flags&1048576)!==0&&x0(n,Po,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=Vr(n.elementType),n.type=e,typeof e=="function")Tf(e)?(s=qr(e,s),n.tag=1,n=Fg(null,n,e,s,a)):(n.tag=0,n=ud(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===L){n.tag=11,n=wg(null,n,e,s,a);break e}else if(c===te){n.tag=14,n=Ng(null,n,e,s,a);break e}else if(c===W){n.tag=10,n.type=e,n=Gg(null,n,a);break e}}throw n=Me(e)||e,Error(r(306,n,""))}}return n;case 0:return ud(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=qr(s,n.pendingProps),Fg(e,n,s,c,a);case 3:e:{if(q(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,If(e,n),ko(n,s,null,a);var x=n.memoizedState;if(s=x.cache,er(n,pn,s),s!==f.cache&&Df(n,[pn],a,!0),Vo(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ig(e,n,s,a);break e}else if(s!==c){c=Si(Error(r(424)),n),Fo(c),n=Ig(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(an=bi(e.firstChild),bn=n,Nt=!0,Ja=null,Ei=!0,a=U0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Fr(),s===c){n=Ra(e,n,a);break e}Mn(e,n,s,a)}n=n.child}return n;case 26:return Ds(e,n),e===null?(a=h_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(n.stateNode=qv(n.type,n.pendingProps,st.current,n)):n.memoizedState=h_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&Nt&&(s=n.stateNode=c_(n.type,n.pendingProps,st.current),bn=n,Ei=!0,c=an,mr(n.type)?(hh=c,an=bi(s.firstChild)):an=c),Mn(e,n,n.pendingProps.children,a),Ds(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Nt&&((c=s=an)&&(s=lE(s,n.type,n.pendingProps,Ei),s!==null?(n.stateNode=s,bn=n,an=bi(s.firstChild),Ei=!1,c=!0):c=!1),c||$a(n)),nt(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,ah(c,f)?s=null:x!==null&&ah(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Wf(e,n,iM,null,null,a),js._currentValue=c),Ds(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&Nt&&((e=a=an)&&(a=cE(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,bn=n,an=null,e=!0):e=!1),e||$a(n)),null;case 13:return Bg(e,n,a);case 4:return q(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Xr(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return wg(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ds(e,n),Mn(e,n,s,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return Gg(e,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,zr(n),c=Nn(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Ng(e,n,n.type,n.pendingProps,a);case 15:return Dg(e,n,n.type,n.pendingProps,a);case 19:return gd(e,n,a);case 31:return dM(e,n,a);case 22:return Ug(e,n,a,n.pendingProps);case 24:return zr(n),s=Nn(pn),e===null?(c=Of(),c===null&&(c=tn,f=Uf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Ff(n),er(n,pn,c)):((e.lanes&a)!==0&&(If(e,n),ko(n,null,null,a),Vo()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),er(n,pn,s)):(s=f.cache,er(n,pn,s),s!==c.cache&&Df(n,[pn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:Nt&&$l(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Ds(e,n),Mn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ca(e){e.flags|=4}function _d(e,n,a,s,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?v_(n,s):v_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Ev())e.flags|=8192;else throw kr=sc,Pf}else e.flags&=-16777217}function kg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(n))if(Ev())e.flags|=8192;else throw kr=sc,Pf}function bc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?yo():536870912,e.lanes|=n,Fs|=n)}function jo(e,n){if(!Nt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function rn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function mM(e,n,a){var s=n.pendingProps;switch(Rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(n),null;case 1:return rn(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ta(pn),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ts(n)?Ca(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wf())),rn(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ca(n),f!==null?(rn(n),kg(n,f)):(rn(n),_d(n,c,null,s,a))):f?f!==e.memoizedState?(Ca(n),rn(n),kg(n,f)):(rn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ca(n),rn(n),_d(n,c,e,s,a)),null;case 27:if(w(n),a=st.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return rn(n),n.subtreeFlags&=-33554433,null}e=ht.current,Ts(n)?y0(n):(e=c_(c,s,a),n.stateNode=e,Ca(n))}return rn(n),n.subtreeFlags&=-33554433,null;case 5:if(w(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return rn(n),n.subtreeFlags&=-33554433,null}if(f=ht.current,Ts(n))y0(n);else{var x=sl(st.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[N]=n,f[J]=s;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(On(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Ca(n)}}return rn(n),n.subtreeFlags&=-33554433,_d(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=st.current,Ts(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[N]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Vv(e.nodeValue,a)),e||$a(n,!0)}else e=sl(e).createTextNode(s),e[N]=n,n.stateNode=e}return rn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Ts(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[N]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),e=!1}else a=wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return rn(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ts(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[N]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),c=!1}else c=wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),bc(n,n.updateQueue),rn(n),null);case 4:return Fe(),e===null&&$d(n.stateNode.containerInfo),n.flags|=67108864,rn(n),null;case 10:return Ta(n.type),rn(n),null;case 19:if(kf(n),s=n.memoizedState,s===null)return rn(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)jo(s,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=uc(e),f!==null){for(n.flags|=128,jo(s,!1),e=f.updateQueue,n.updateQueue=e,bc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)g0(a,e),a=a.sibling;return Xo(n,Un.current&1|2),Nt&&Ma(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Ve()>Ic&&(n.flags|=128,c=!0,jo(s,!1),n.lanes=4194304)}else{if(!c)if(e=uc(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,bc(n,e),jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Nt)return rn(n),null}else 2*Ve()-s.renderingStartTime>Ic&&a!==536870912&&(n.flags|=128,c=!0,jo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,f=Un.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Nt?Xo(n,f):(a=f,Pe(Dn,n),Pe(Un,a),In===null&&(In=n)),Nt&&Ma(n,s.treeForkCount),e}return rn(n),null;case 22:case 23:return ri(n),Gf(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(rn(n),n.subtreeFlags&6&&(n.flags|=8192)):rn(n),a=n.updateQueue,a!==null&&bc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ue(Gr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ta(pn),rn(n),null;case 25:return null;case 30:return n.flags|=33554432,rn(n),null}throw Error(r(156,n.tag))}function gM(e,n){switch(Rf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ta(pn),Fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return w(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return kf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Fe(),null;case 10:return Ta(n.type),null;case 22:case 23:return ri(n),Gf(),e!==null&&ue(Gr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ta(pn),null;case 25:return null;default:return null}}function Xg(e,n){switch(Rf(n),n.tag){case 3:Ta(pn),Fe();break;case 26:case 27:case 5:w(n);break;case 4:Fe();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:kf(n);break;case 10:Ta(n.type);break;case 22:case 23:ri(n),Gf(),e!==null&&ue(Gr);break;case 24:Ta(pn)}}function Ko(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(D){Kt(n,n.return,D)}}function lr(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var x=s.inst,D=x.destroy;if(D!==void 0){x.destroy=void 0,c=n;var V=a,oe=D;try{oe()}catch(_e){Kt(c,V,_e)}}}s=s.next}while(s!==f)}}catch(_e){Kt(n,n.return,_e)}}function Wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{O0(n,a)}catch(s){Kt(e,e.return,s)}}}function qg(e,n,a){a.props=qr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Kt(e,n,s)}}function Qi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var c=e.stateNode,f=xa(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=$v(f)),s=c.ref;break;case 7:if(e.stateNode===null){var x=new ui(e);_(e.child,!1,sE,x,void 0,void 0),e.stateNode=x}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(D){Kt(e,n,D)}}function Ln(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Kt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Kt(e,n,c)}else a.current=null}function Ac(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)r_(e.stateNode,n[a])}function Yg(e){for(var n=e.return;n!==null&&(Sd(n)&&r_(e.stateNode,n.stateNode),!xd(n));)n=n.return}function Qo(e){for(var n=e.return;n!==null&&(Sd(n)&&oE(e.stateNode,n.stateNode),!xd(n));)n=n.return}function xd(e){return e.tag===5||e.tag===3||e.tag===27}function Sd(e){return e&&e.tag===7&&e.stateNode!==null}function yd(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Kt(e,e.return,c)}}function Md(e,n,a){try{var s=e.stateNode;VM(s,e.type,a,n),s[J]=n}catch(c){Kt(e,e.return,c)}}function Zg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&mr(e.type)||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&mr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Td(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi)),Ac(e,s),wt=!0;else if(c!==4&&(c===27&&(Ac(e,s),s=null,mr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Td(e,n,a,s),e=e.sibling;e!==null;)Td(e,n,a,s),e=e.sibling}function Rc(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ac(e,s),wt=!0;else if(c!==4&&(c===27&&(Ac(e,s),s=null,mr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Rc(e,n,a,s),e=e.sibling;e!==null;)Rc(e,n,a,s),e=e.sibling}function jg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,s,a),n[N]=e,n[J]=a}catch(f){Kt(e,e.return,f)}}var Cc=!1,si=null;function Kg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Cc=!0)}var Ji=null;function Qg(){var e=Ji;return Ji=null,e}var jn=0;function Us(e,n,a,s,c){return jn=0,Jg(e.child,n,a,s,c)}function Jg(e,n,a,s,c){for(var f=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(s!==null){var D=oh(x);s.push(D),D.view&&(f=!0)}else f||oh(x).view&&(f=!0);Cc=!0,Qv(x,jn===0?n:n+"_"+jn,a),jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Jg(e.child,n,a,s,c)&&(f=!0));e=e.sibling}return f}function $i(e,n){for(;e!==null;)e.tag===5?Jv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||$i(e.child,n)),e=e.sibling}function wc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(wc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Sa(n.default,n.share),n!=="none"&&(Us(e,a,n,null,!1)||$i(e.child,!1))}e=e.sibling}}function bd(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,c=xa(s,a),f=Sa(s.default,a.paired?s.share:s.enter);f!=="none"?Us(e,c,f,null,!1)?(wc(e),a.paired||n||Hs(e,s.onEnter)):$i(e.child,!1):wc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bd(e,n),e=e.sibling;else wc(e)}function Ad(e){if(si!==null&&si.size!==0){var n=si;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=Sa(a.default,a.share);if(f!=="none"&&(Us(e,s,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Hs(e,a.onShare)):$i(e.child,!1)),n.delete(s),n.size===0)break}}}Ad(e)}e=e.sibling}}}function Rd(e){if(e.tag===30){var n=e.memoizedProps,a=xa(n,e.stateNode),s=si!==null?si.get(a):void 0,c=Sa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Us(e,a,c,null,!1)?s!==void 0?(c=e.stateNode,s.paired=c,c.paired=s,si.delete(a),Hs(e,n.onShare)):Hs(e,n.onExit):$i(e.child,!1)),si!==null&&Ad(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Rd(e),e=e.sibling;else si!==null&&Ad(e)}function $g(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=xa(n,e.stateNode);n=Sa(n.default,n.update),e.flags&=-5,n!=="none"&&Us(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&$g(e);e=e.sibling}}function Cd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,$i(e.child,!1))}Cd(e)}e=e.sibling}}function Nc(e){if(e.tag===30)e.stateNode.paired=null,$i(e.child,!1),Cd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Nc(e),e=e.sibling;else Cd(e)}function ev(e){for(e=e.child;e!==null;)e.tag===30?$i(e.child,!1):(e.subtreeFlags&33554432)!==0&&ev(e),e=e.sibling}function wd(e,n,a,s,c,f,x){for(var D=!1;n!==null;){if(n.tag===5){var V=n.stateNode;if(f!==null&&jn<f.length){var oe=f[jn],_e=oh(V);(oe.view||_e.view)&&(D=!0);var be;if(be=(e.flags&4)===0)if(_e.clip)be=!0;else{be=oe.rect;var re=_e.rect;be=be.y!==re.y||be.x!==re.x||be.height!==re.height||be.width!==re.width}be&&(e.flags|=4),_e.abs?_e=!oe.abs:(oe=oe.rect,_e=_e.rect,_e=oe.height!==_e.height||oe.width!==_e.width),_e&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Qv(V,jn===0?a:a+"_"+jn,c),D&&(e.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(V,jn===0?s:s+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:wd(e,n.child,a,s,c,f,x)&&(D=!0));n=n.sibling}return D}function tv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,c=xa(a,s),f=Sa(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,s=e;var D=e.child;jn=0,c=wd(s,D,c,c,f,x,!1),(e.flags&4)!==0&&c&&Hs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&tv(e);e=e.sibling}}var An=!1,Zt=!1,ea=!1,Nd=!1,nv=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ta=!1,Jo=!1,Dc=!1,Dd=!1;function vM(e,n,a){if(e=e.containerInfo,nh=Ks,e=s0(e),vf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var D=0,V=-1,oe=-1,_e=0,be=0,re=e,ge=null;t:for(;;){for(var qe;re!==s||f!==0&&re.nodeType!==3||(V=D+f),re!==x||c!==0&&re.nodeType!==3||(oe=D+c),re.nodeType===3&&(D+=re.nodeValue.length),(qe=re.firstChild)!==null;)ge=re,re=qe;for(;;){if(re===e)break t;if(ge===s&&++_e===f&&(V=D),ge===x&&++be===c&&(oe=D),(qe=re.nextSibling)!==null)break;re=ge,ge=re.parentNode}re=qe}s=V===-1||oe===-1?null:{start:V,end:oe}}else s=null}s=s||{start:0,end:0}}else s=null;for(ih={focusedElem:e,selectionRange:s},Ks=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(s=e.deletions,s!==null))for(f=0;f<s.length;f++)a&&Rd(s[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&Kg(e),Uc(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Rd(s),Uc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Kg(e),Uc(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,Rn=s):(a&&$g(e),Uc(a))}}si=null}function Uc(e){for(;Rn!==null;){var n=Rn,a=e,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var x=qr(n.type,c);a=f.getSnapshotBeforeUpdate(x,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(D){Kt(n,n.return,D)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)uh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":uh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=xa(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=Sa(c.default,c.update),c!=="none"&&Us(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function iv(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),s&4&&Ko(5,a);break;case 1:if(na(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Kt(a,a.return,x)}else{var c=qr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Kt(a,a.return,x)}}s&64&&Wg(a),s&512&&Qi(a,a.return);break;case 3:if(na(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{O0(e,n)}catch(x){Kt(a,a.return,x)}}break;case 27:n===null&&s&4&&jg(a);case 26:case 5:na(e,a),n===null&&s&4&&yd(a),s&512&&Qi(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),s&4&&ov(e,a);break;case 13:na(e,a),s&4&&lv(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wM.bind(null,a),uE(e,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||Zt;n=An,c=Zt,An=s,(Zt=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ui(e,a,s)):na(e,a),An=n,Zt=c}break;case 30:na(e,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:na(e,a)}}function Ud(e,n){for(e=e.child;e!==null;)av(e,n),e=e.sibling}function av(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(V){Kt(e,e.return,V)}Ld(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,wt=!0}catch(V){Kt(e,e.return,V)}break;case 18:try{var D=e.stateNode;n?Kv(D,!0):Kv(e.stateNode,!1)}catch(V){Kt(e,e.return,V)}break;case 22:case 23:e.memoizedState===null&&Ud(e,n);break;default:Ud(e,n)}}function Ld(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=n;switch(a.tag){case 4:av(a,s);break e;case 22:a.memoizedState===null&&Ld(a,s);break e;default:Ld(a,s)}}e=e.sibling}}function rv(e){var n=e.alternate;n!==null&&(e.alternate=null,rv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&lt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,Kn=!1;function Ni(e,n,a){for(a=a.child;a!==null;)sv(e,n,a),a=a.sibling}function sv(e,n,a){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Zt||Ln(a,n),Ni(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Zt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Zt||Ln(a,n),Qo(a);var s=sn,c=Kn;mr(a.type)&&(sn=a.stateNode,Kn=!1),Ni(e,n,a),u_(a.stateNode,a.type,a.memoizedProps),sn=s,Kn=c;break;case 5:Zt||Ln(a,n),Qo(a);case 6:if(a.tag===6&&Qo(a),s=sn,c=Kn,sn=null,Ni(e,n,a),sn=s,Kn=c,sn!==null)if(Kn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode),wt=!0}catch(f){Kt(a,n,f)}else try{sn.removeChild(a.stateNode),wt=!0}catch(f){Kt(a,n,f)}break;case 18:sn!==null&&(Kn?(e=sn,jv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qs(e)):jv(sn,a.stateNode));break;case 4:s=sn,c=Kn,sn=a.stateNode.containerInfo,Kn=!0,Ni(e,n,a),sn=s,Kn=c;break;case 0:case 11:case 14:case 15:lr(2,a,n),Zt||lr(4,a,n),Ni(e,n,a);break;case 1:Zt||(Ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&qg(a,n,s)),Ni(e,n,a);break;case 21:Ni(e,n,a);break;case 22:Zt=(s=Zt)||a.memoizedState!==null,Ni(e,n,a),Zt=s;break;case 30:Ln(a,n),Ni(e,n,a);break;case 7:Zt||Ln(a,n),Ni(e,n,a);break;default:Ni(e,n,a)}}function ov(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qs(e)}catch(a){Kt(n,n.return,a)}}}function lv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qs(e)}catch(a){Kt(n,n.return,a)}}function _M(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new nv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new nv),n;default:throw Error(r(435,e.tag))}}function Lc(e,n){var a=_M(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=NM.bind(null,e,s);s.then(c,c)}})}function Xn(e,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],x=e,D=n,V=D;e:for(;V!==null;){switch(V.tag){case 27:if(mr(V.type)){sn=V.stateNode,Kn=!1;break e}break;case 5:sn=V.stateNode,Kn=!1;break e;case 3:case 4:sn=V.stateNode.containerInfo,Kn=!0;break e}V=V.return}if(sn===null)throw Error(r(160));sv(x,D,f),sn=null,Kn=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cv(n,e,a),n=n.sibling}var Di=null;function cv(e,n,a){var s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var x=s[f];x.ref.impl=x.nextImpl}Xn(n,e,a),Wn(e),c&4&&(lr(3,e,e.return),Ko(3,e),lr(5,e,e.return));break;case 1:Xn(n,e,a),Wn(e),c&512&&(Zt||s===null||Ln(s,s.return)),c&64&&An&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Di,Xn(n,e,a),Wn(e),c&512&&(Zt||s===null||Ln(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(An)e.stateNode=qv(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;t:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[We]||s[N]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),On(s,n,a),s[N]=e,Ct(s),n=s;break e;case"link":if(f=g_("link","href",c).get(n+(a.href||""))){for(x=0;x<f.length;x++)if(s=f[x],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(x,1);break t}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;case"meta":if(f=g_("meta","content",c).get(n+(a.content||""))){for(x=0;x<f.length;x++)if(s=f[x],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(x,1);break t}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[N]=e,Ct(s),n=s}e.stateNode=n}else An||vh(f,e.type,e.stateNode);else e.stateNode=m_(f,a,e.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||Zt||n.parentNode.removeChild(n)):c.count--,a===null?An||vh(f,e.type,e.stateNode):m_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Md(e,e.memoizedProps,s.memoizedProps);break;case 27:Xn(n,e,a),Wn(e),c&512&&(Zt||s===null||Ln(s,s.return)),s!==null&&c&4&&Md(e,e.memoizedProps,s.memoizedProps);break;case 5:if(f=ea,ea=!1,Xn(n,e,a),ea=f,Wn(e),c&512&&(Zt||s===null||Ln(s,s.return)),e.flags&32){n=e.stateNode;try{ps(n,""),wt=!0}catch(_e){Kt(e,e.return,_e)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Md(e,n,s!==null?s.memoizedProps:n)),c&1024&&(Nd=!0);break;case 6:if(Xn(n,e,a),Wn(e),c&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,wt=!0}catch(_e){Kt(e,e.return,_e)}}break;case 3:if(wt=!1,Zc=null,f=Di,Di=ol(n.containerInfo),Xn(n,e,a),Di=f,Wn(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Qs(n.containerInfo)}catch(_e){Kt(e,e.return,_e)}Nd&&(Nd=!1,uv(e)),wt=!1;break;case 4:c=ea,ea=An,s=Wt(),f=Di,Di=ol(e.stateNode.containerInfo),Xn(n,e,a),Wn(e),Di=f,wt&&Jo&&(Dc=!0),wt=s,ea=c;break;case 12:Xn(n,e,a),Wn(e);break;case 31:Xn(n,e,a),Wn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lc(e,n)));break;case 13:Xn(n,e,a),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Fc=Ve()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lc(e,n)));break;case 22:f=e.memoizedState!==null,x=s!==null&&s.memoizedState!==null;var D=An,V=Zt,oe=ea;An=D||f,ea=oe||f,Zt=V||x,Xn(n,e,a),Zt=V,ea=oe,An=D,Wn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||x||An||Zt||(n=x||Zt,a=An,s=Zt,An=f||An,Zt=n,cr(e,2),An=a,Zt=s),!f&&ea||Ud(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Lc(e,a))));break;case 19:Xn(n,e,a),Wn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Lc(e,n)));break;case 30:c&512&&(Zt||s===null||Ln(s,s.return)),c=Wt(),f=Jo,x=(a&335544064)===a,D=e.memoizedProps,Jo=x&&Sa(D.default,D.update)!=="none",Xn(n,e,a),Wn(e),x&&s!==null&&wt&&(e.flags|=4),Jo=f,wt=c;break;case 21:break;case 7:c&512&&(Zt||s===null||Ln(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Xn(n,e,a),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Zg(s)){a=s;break}s=s.return}s=null;for(var c=e.return;c!==null;){if(Sd(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(xd(c))break;c=c.return}var x=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var D=a.stateNode,V=Ed(e);Rc(e,V,D,x);break;case 5:var oe=a.stateNode;a.flags&32&&(ps(oe,""),a.flags&=-33);var _e=Ed(e);Rc(e,_e,oe,x);break;case 3:case 4:var be=a.stateNode.containerInfo,re=Ed(e);Td(e,re,be,x);break;default:throw Error(r(161))}}catch(ge){Kt(e,e.return,ge)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function uv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;uv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ks=!0,n.reset(),Ks=!1),e=e.sibling}}function Ls(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)fv(n,e),n=n.sibling;else tv(n)}function fv(e,n){var a=e.alternate;if(a===null)bd(e,!1);else switch(e.tag){case 3:if(Dd=ta=!1,Qg(),Ls(n,e),!ta&&!Dc){if(e=Ji,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var c=e[s+1];Jv(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dd=!0}Ji=null;break;case 5:Ls(n,e);break;case 4:s=ta,ta=!1,Ls(n,e),ta&&(Dc=!0),ta=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?bd(e,!1):Ls(n,e));break;case 30:s=ta,c=Qg(),ta=!1,Ls(n,e),ta&&(e.flags|=4);var f=e.memoizedProps,x=e.stateNode;n=xa(f,x),x=xa(a.memoizedProps,x);var D=Sa(f.default,f.update);D==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,jn=0,n=wd(e,a,n,x,D,f,!0),jn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Hs(e,e.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ta=(e.flags&32)!==0?!0:s;break;default:Ls(n,e)}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)iv(e,n.alternate,n),n=n.sibling}function cr(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:lr(4,a,a.return),cr(a,s);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&qg(a,a.return,c),cr(a,s);break;case 27:(s&2)!==0&&u_(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||Qo(a),cr(a,s);break;case 6:Qo(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Zt||c.parentNode.removeChild(c),cr(a,s);break;case 22:a.memoizedState===null&&cr(a,s);break;case 30:Ln(a,a.return),cr(a,s);break;case 7:Ln(a,a.return);default:cr(a,s)}e=e.sibling}}function Ui(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,x=f.flags,D=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ui(c,f,a),Ko(4,f);break;case 1:if(Ui(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(_e){Kt(s,s.return,_e)}if(s=f,c=s.updateQueue,c!==null){var V=s.stateNode;try{var oe=c.shared.hiddenCallbacks;if(oe!==null)for(c.shared.hiddenCallbacks=null,c=0;c<oe.length;c++)L0(oe[c],V)}catch(_e){Kt(s,s.return,_e)}}D&&x&64&&Wg(f),Qi(f,f.return);break;case 27:(a&2)!==0&&jg(f);case 5:f.tag!==5&&f.tag!==27||Yg(f),Ui(c,f,a),D&&s===null&&x&4&&yd(f),Qi(f,f.return);break;case 6:Yg(f);break;case 26:V=f.stateNode,f.memoizedState!==null||V===null||An||vh(ol(V.ownerDocument),f.type,V),Ui(c,f,a),D&&s===null&&x&4&&yd(f),Qi(f,f.return);break;case 12:Ui(c,f,a);break;case 31:Ui(c,f,a),D&&x&4&&ov(c,f);break;case 13:Ui(c,f,a),D&&x&4&&lv(c,f);break;case 22:f.memoizedState===null&&Ui(c,f,a),Qi(f,f.return);break;case 30:Ui(c,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Ui(c,f,a)}n=n.sibling}}function Od(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Io(a))}function Pd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e))}function Ti(e,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)dv(e,n,a,s),n=n.sibling;else c&&ev(n)}function dv(e,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Nc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,s),f&2048&&Ko(9,n);break;case 1:Ti(e,n,a,s);break;case 3:Ti(e,n,a,s),c&&Dd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Io(f)));break;case 12:if(f&2048){Ti(e,n,a,s),f=n.stateNode;try{var x=n.memoizedProps,D=x.id,V=x.onPostCommit;typeof V=="function"&&V(D,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(oe){Kt(n,n.return,oe)}}else Ti(e,n,a,s);break;case 31:Ti(e,n,a,s);break;case 13:Ti(e,n,a,s);break;case 23:break;case 22:x=n.stateNode,D=n.alternate,n.memoizedState!==null?(c&&D!==null&&D.memoizedState===null&&Nc(D),x._visibility&2?Ti(e,n,a,s):$o(e,n)):(c&&D!==null&&D.memoizedState!==null&&Nc(n),x._visibility&2?Ti(e,n,a,s):(x._visibility|=2,Os(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Od(D,n);break;case 24:Ti(e,n,a,s),f&2048&&Pd(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&($i(f.child,!0),$i(n.child,!0))),Ti(e,n,a,s);break;default:Ti(e,n,a,s)}}function Os(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,D=a,V=s,oe=x.flags;switch(x.tag){case 0:case 11:case 15:Os(f,x,D,V,c),Ko(8,x);break;case 23:break;case 22:var _e=x.stateNode;x.memoizedState!==null?_e._visibility&2?Os(f,x,D,V,c):$o(f,x):(_e._visibility|=2,Os(f,x,D,V,c)),c&&oe&2048&&Od(x.alternate,x);break;case 24:Os(f,x,D,V,c),c&&oe&2048&&Pd(x.alternate,x);break;default:Os(f,x,D,V,c)}n=n.sibling}}function $o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:$o(a,s),c&2048&&Od(s.alternate,s);break;case 24:$o(a,s),c&2048&&Pd(s.alternate,s);break;default:$o(a,s)}n=n.sibling}}var Yr=8192;function Zr(e,n,a){if(e.subtreeFlags&Yr)for(e=e.child;e!==null;)hv(e,n,a),e=e.sibling}function hv(e,n,a){switch(e.tag){case 26:Zr(e,n,a),e.flags&Yr&&(e.memoizedState!==null?TE(a,Di,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&S_(a,e)));break;case 5:Zr(e,n,a),e.flags&Yr&&(e=e.stateNode,(n&335544128)===n&&S_(a,e));break;case 3:case 4:var s=Di;Di=ol(e.stateNode.containerInfo),Zr(e,n,a),Di=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Yr,Yr=16777216,Zr(e,n,a),Yr=s):Zr(e,n,a));break;case 30:if((e.flags&Yr)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var c=e.stateNode;c.paired=null,si===null&&(si=new Map),si.set(s,c)}Zr(e,n,a);break;default:Zr(e,n,a)}}function pv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function el(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,gv(s,e)}pv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mv(e),e=e.sibling}function mv(e){switch(e.tag){case 0:case 11:case 15:el(e),e.flags&2048&&lr(9,e,e.return);break;case 3:el(e);break;case 12:el(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Oc(e)):el(e);break;default:el(e)}}function Oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,gv(s,e)}pv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:lr(8,n,n.return),Oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Oc(n));break;default:Oc(n)}e=e.sibling}}function gv(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:lr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Io(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else e:for(a=e;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(rv(s),s===a){Rn=null;break e}if(c!==null){c.return=f,Rn=c;break e}Rn=f}}}var xM={getCacheForType:function(e){var n=Nn(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Nn(pn).controller.signal}},SM=typeof WeakMap=="function"?WeakMap:Map,qt=0,tn=null,Ut=null,Pt=0,jt=0,oi=null,ur=!1,Ps=!1,Fd=!1,wa=0,fn=0,fr=0,jr=0,Pc=0,li=0,Fs=0,tl=null,Qn=null,Id=!1,Fc=0,vv=0,Ic=1/0,Bc=null,dr=null,on=0,Li=null,Kr=null,ia=0,Bd=0,zd=null,_v=null,Is=null,Bs=null,zs=null,nl=0,zc=null;function ci(){return(qt&2)!==0&&Pt!==0?Pt&-Pt:Se.T!==null?jd():Il()}function xv(){if(li===0)if((Pt&536870912)===0||Nt){var e=wr;wr<<=1,(wr&3932160)===0&&(wr=262144),li=e}else li=536870912;return e=Dn.current,e!==null&&(e.flags|=32),li}function Hs(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=$v(xa(e.memoizedProps,a))),Bs===null&&(Bs=[]),Bs.push(n.bind(null,s))}}function Jn(e,n,a){(e===tn&&(jt===2||jt===9)||e.cancelPendingCommit!==null)&&(Gs(e,0),hr(e,Pt,li,!1)),qi(e,a),((qt&2)===0||e!==tn)&&(e===tn&&((qt&2)===0&&(jr|=a),fn===4&&hr(e,Pt,li,!1)),aa(e))}function Sv(e,n,a){if((qt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Za(e,n),c=s?EM(e,n):Gd(e,n,!0),f=s;do{if(c===0){Ps&&!s&&hr(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!yM(a)){c=Gd(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var D=e;c=tl;var V=D.current.memoizedState.isDehydrated;if(V&&(Gs(D,x).flags|=256),x=Gd(D,x,!1),x!==2&&x!==6){if(Fd&&!V){D.errorRecoveryDisabledLanes|=f,jr|=f,c=4;break e}f=Qn,Qn=c,f!==null&&(Qn===null?Qn=f:Qn.push.apply(Qn,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Gs(e,0),hr(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:hr(s,n,li,!ur);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Fc+300-Ve(),10<c)){if(hr(s,n,li,!ur),Nr(s,0,!0)!==0)break e;ia=n,s.timeoutHandle=sh(yv.bind(null,s,a,Qn,Bc,Id,n,li,jr,Fs,ur,f,"Throttled",-0,0),c);break e}yv(s,a,Qn,Bc,Id,n,li,jr,Fs,ur,f,null,-0,0)}}break}while(!0);aa(e)}function yv(e,n,a,s,c,f,x,D,V,oe,_e,be,re,ge){e.timeoutHandle=-1;var qe=n.subtreeFlags,ct=(f&335544064)===f;if(be=null,(ct||qe&8192||(qe&16785408)===16785408)&&(be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},si=null,hv(n,f,be),ct&&(qe=be,ct=e.containerInfo,ct=(ct.nodeType===9?ct:ct.ownerDocument).__reactViewTransition,ct!=null&&(qe.count++,qe.waitingForViewTransition=!0,qe=ul.bind(qe),ct.finished.then(qe,qe))),qe=(f&62914560)===f?Fc-Ve():(f&4194048)===f?vv-Ve():0,qe=bE(be,qe),qe!==null)){ia=f,e.cancelPendingCommit=qe(wv.bind(null,e,n,f,a,s,c,x,D,V,oe,_e,be,null,re,ge)),hr(e,f,x,!oe);return}wv(e,n,f,a,s,c,x,D,V,oe,_e,be)}function yM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!ai(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hr(e,n,a,s){n=Wi(e,n),n&=~Pc,n&=~jr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-St(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Dr(e,a,n)}function Hc(){return(qt&6)===0?(il(0),!1):!0}function Hd(){if(Ut!==null){if(jt===0)var e=Ut.return;else e=Ut,Ea=Ir=null,Zf(e),Rs=null,Ho=0,e=Ut;for(;e!==null;)Xg(e.alternate,e),e=e.return;Ut=null}}function Gs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,WM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,Hd(),tn=e,Ut=a=ya(e.current,null),Pt=n,jt=0,oi=null,ur=!1,Ps=Za(e,n),Fd=!1,Fs=li=Pc=jr=fr=fn=0,Qn=tl=null,Id=!1,wa=Wi(e,n),Zl(),a}function Mv(e,n){Tt=null,Se.H=xc,n===As||n===rc?(n=w0(),jt=3):n===Pf?(n=w0(),jt=4):jt=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Ut===null&&(fn=1,Sc(e,Si(n,e.current)))}function Ev(){var e=Dn.current;return e===null?!0:(Pt&4194048)===Pt?In===null:(Pt&62914560)===Pt||(Pt&536870912)!==0?e===In:!1}function Tv(){var e=Se.H;return Se.H=xc,e===null?xc:e}function bv(){var e=Se.A;return Se.A=xM,e}function Gc(){fn=4,ur||(Pt&4194048)!==Pt&&Dn.current!==null||(Ps=!0),(fr&134217727)===0&&(jr&134217727)===0||tn===null||hr(tn,Pt,li,!1)}function Gd(e,n,a){var s=qt;qt|=2;var c=Tv(),f=bv();(tn!==e||Pt!==n)&&(Bc=null,Gs(e,n)),n=!1;var x=fn;e:do try{if(jt!==0&&Ut!==null){var D=Ut,V=oi;switch(jt){case 8:Hd(),x=6;break e;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var oe=jt;if(jt=0,oi=null,Vs(e,D,V,oe),a&&Ps){x=0;break e}break;default:oe=jt,jt=0,oi=null,Vs(e,D,V,oe)}}MM(),x=fn;break}catch(_e){Mv(e,_e)}while(!0);return n&&e.shellSuspendCounter++,Ea=Ir=null,qt=s,Se.H=c,Se.A=f,Ut===null&&(tn=null,Pt=0,Zl()),x}function MM(){for(;Ut!==null;)Av(Ut)}function EM(e,n){var a=qt;qt|=2;var s=Tv(),c=bv();tn!==e||Pt!==n?(Bc=null,Ic=Ve()+500,Gs(e,n)):Ps=Za(e,n);e:do try{if(jt!==0&&Ut!==null){n=Ut;var f=oi;t:switch(jt){case 1:jt=0,oi=null,Vs(e,n,f,1);break;case 2:case 9:if(R0(f)){jt=0,oi=null,Rv(n);break}n=function(){jt!==2&&jt!==9||tn!==e||(jt=7),aa(e)},f.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:R0(f)?(jt=0,oi=null,Rv(n)):(jt=0,oi=null,Vs(e,n,f,7));break;case 5:var x=null;switch(Ut.tag){case 26:x=Ut.memoizedState;case 5:case 27:var D=Ut;if(x?__(x):D.stateNode.complete){jt=0,oi=null;var V=D.sibling;if(V!==null)Ut=V;else{var oe=D.return;oe!==null?(Ut=oe,Vc(oe)):Ut=null}break t}}jt=0,oi=null,Vs(e,n,f,5);break;case 6:jt=0,oi=null,Vs(e,n,f,6);break;case 8:Hd(),fn=6;break e;default:throw Error(r(462))}}TM();break}catch(_e){Mv(e,_e)}while(!0);return Ea=Ir=null,Se.H=s,Se.A=c,qt=a,Ut!==null?0:(tn=null,Pt=0,Zl(),fn)}function TM(){for(;Ut!==null&&!Ie();)Av(Ut)}function Av(e){var n=Vg(e.alternate,e,wa);e.memoizedProps=e.pendingProps,n===null?Vc(e):Ut=n}function Rv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Pg(a,n,n.pendingProps,n.type,void 0,Pt);break;case 11:n=Pg(a,n,n.pendingProps,n.type.render,n.ref,Pt);break;case 5:Zf(n);var s=n;s===bn&&(Nt?(ec(s),s.tag===5&&s.stateNode!=null&&(an=s.stateNode)):(ec(s),Nt=!0));default:Xg(a,n),n=Ut=g0(n,wa),n=Vg(a,n,wa)}e.memoizedProps=e.pendingProps,n===null?Vc(e):Ut=n}function Vs(e,n,a,s){Ea=Ir=null,Zf(n),Rs=null,Ho=0;var c=n.return;try{if(fM(e,c,n,a,Pt)){fn=1,Sc(e,Si(a,e.current)),Ut=null;return}}catch(f){if(c!==null)throw Ut=c,f;fn=1,Sc(e,Si(a,e.current)),Ut=null;return}n.flags&32768?(Nt||s===1?e=!0:Ps||(Pt&536870912)!==0?e=!1:(ur=e=!0,(s===2||s===9||s===3||s===6)&&(s=Dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Cv(n,e)):Vc(n)}function Vc(e){var n=e;do{if((n.flags&32768)!==0){Cv(n,ur);return}e=n.return;var a=mM(n.alternate,n,wa);if(a!==null){Ut=a;return}if(n=n.sibling,n!==null){Ut=n;return}Ut=n=e}while(n!==null);fn===0&&(fn=5)}function Cv(e,n){do{var a=gM(e.alternate,e);if(a!==null){a.flags&=32767,Ut=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ut=e;return}Ut=e=a}while(e!==null);fn=6,Ut=null}function wv(e,n,a,s,c,f,x,D,V,oe,_e,be){e.cancelPendingCommit=null;do kc();while(on!==0);if((qt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===tn&&(Ut=tn=null,Pt=0),Kr=n,Li=e,ia=a,zd=c,_v=s,bM(e,n,a,x,D,V,be)}}function bM(e,n,a,s,c,f,x){var D=n.lanes|n.childLanes;if(Bd=D,D|=Mf,Fl(e,a,D,s,c,f),Bs=null,(a&335544064)===a?(zs=$y(e),s=10262):(zs=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,DM(Be,function(){return Wd(),null})):(e.callbackNode=null,e.callbackPriority=0),Cc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Se.T,Se.T=null,c=Ae.p,Ae.p=2,f=qt,qt|=4;try{vM(e,n,a)}finally{qt=f,Ae.p=c,Se.T=s}}on=1,Cc?Is=QM(x,e.containerInfo,zs,Vd,kd,RM,Xd,Wd,AM):(Vd(),kd(),Xd())}function AM(e){if(on!==0){var n=Li.onRecoverableError;n(e,{componentStack:null})}}function RM(){on===3&&(on=0,fv(Kr,Li),on=4)}function Vd(){if(on===1){on=0;var e=Li,n=Kr,a=ia,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Se.T,Se.T=null;var c=Ae.p;Ae.p=2;var f=qt;qt|=4;try{Jo=Dc=!1,cv(n,e,a),a=ih;var x=s0(e.containerInfo),D=a.focusedElem,V=a.selectionRange;if(x!==D&&D&&D.ownerDocument&&r0(D.ownerDocument.documentElement,D)){if(V!==null&&vf(D)){var oe=V.start,_e=V.end;if(_e===void 0&&(_e=oe),"selectionStart"in D)D.selectionStart=oe,D.selectionEnd=Math.min(_e,D.value.length);else{var be=D.ownerDocument||document,re=be&&be.defaultView||window;if(re.getSelection){var ge=re.getSelection(),qe=D.textContent.length,ct=Math.min(V.start,qe),bt=V.end===void 0?ct:Math.min(V.end,qe);!ge.extend&&ct>bt&&(x=bt,bt=ct,ct=x);var se=a0(D,ct),ee=a0(D,bt);if(se&&ee&&(ge.rangeCount!==1||ge.anchorNode!==se.node||ge.anchorOffset!==se.offset||ge.focusNode!==ee.node||ge.focusOffset!==ee.offset)){var he=be.createRange();he.setStart(se.node,se.offset),ge.removeAllRanges(),ct>bt?(ge.addRange(he),ge.extend(ee.node,ee.offset)):(he.setEnd(ee.node,ee.offset),ge.addRange(he))}}}}for(be=[],ge=D;ge=ge.parentNode;)ge.nodeType===1&&be.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<be.length;D++){var Te=be[D];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}Ks=!!nh,ih=nh=null}finally{qt=f,Ae.p=c,Se.T=s}}e.current=n,on=2}}function kd(){if(on===2){on=0;var e=Li,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Se.T,Se.T=null;var s=Ae.p;Ae.p=2;var c=qt;qt|=4;try{iv(e,n.alternate,n)}finally{qt=c,Ae.p=s,Se.T=a}}on=3}}function Xd(){if(on===4||on===3){on=0;var e=Is;Is=null,He();var n=Li,a=Kr,s=ia,c=_v,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,Kr=Li=null,Nv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(dr=null),bo(s),a=a.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(ut,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Se.T,f=Ae.p,Ae.p=2,Se.T=null;try{for(var x=n.onRecoverableError,D=0;D<c.length;D++){var V=c[D];x(V.value,{componentStack:V.stack})}}finally{Se.T=a,Ae.p=f}}if(c=Bs,x=zs,zs=null,c!==null&&(Bs=null,x===null&&(x=[]),e!==null))for(V=0;V<c.length;V++)a=(0,c[V])(x),a!==void 0&&e.finished.finally(a);(ia&3)!==0&&kc(),aa(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===zc?nl++:(nl=0,zc=n):(nl=0,zc=null),il(0)}}function Nv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Io(n)))}function kc(){return Is!==null&&(Is.skipTransition(),Is=null),Vd(),kd(),Xd(),Wd()}function Wd(){if(on!==5)return!1;var e=Li,n=Bd;Bd=0;var a=bo(ia),s=Se.T,c=Ae.p;try{Ae.p=32>a?32:a,Se.T=null,a=zd,zd=null;var f=Li,x=ia;if(on=0,Kr=Li=null,ia=0,(qt&6)!==0)throw Error(r(331));var D=qt;if(qt|=4,mv(f.current),dv(f,f.current,x,a),qt=D,il(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{Ae.p=c,Se.T=s,Nv(e,n)}}function Dv(e,n,a){n=Si(a,n),n=ld(e.stateNode,n,2),e=ar(e,n,2),e!==null&&(qi(e,2),aa(e))}function Kt(e,n,a){if(e.tag===3)Dv(e,e,a);else for(;n!==null;){if(n.tag===3){Dv(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(dr===null||!dr.has(s))){e=Si(a,e),a=Rg(2),s=ar(n,a,2),s!==null&&(Cg(a,s,n,e),qi(s,2),aa(s));break}}n=n.return}}function qd(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new SM;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Fd=!0,c.add(a),e=CM.bind(null,e,n,a),n.then(e,e))}function CM(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,tn===e&&(Pt&a)===a&&((fn===4||fn===3&&(Pt&62914560)===Pt&&300>Ve()-Fc)&&(qt&2)===0?Gs(e,0):Pc|=a,Fs===Pt&&(Fs=0)),aa(e)}function Uv(e,n){n===0&&(n=yo()),e=Or(e,n),e!==null&&(qi(e,n),aa(e))}function wM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Uv(e,a)}function NM(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Uv(e,a)}function DM(e,n){return Ue(e,n)}var ks=null,Xs=null,Yd=!1,Xc=!1,Zd=!1,pr=0;function aa(e){e!==Xs&&e.next===null&&(Xs===null?ks=Xs=e:Xs=Xs.next=e),Xc=!0,Yd||(Yd=!0,LM())}function il(e,n){if(!Zd&&Xc){Zd=!0;do for(var a=!1,s=ks;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,D=s.pingedLanes;f=(1<<31-St(42|e)+1)-1,f&=c&~(x&~D),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fv(s,f))}else f=Pt,f=Nr(s,s===tn?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Za(s,f)||(a=!0,Fv(s,f));s=s.next}while(a);Zd=!1}}function UM(){Lv()}function Lv(){Xc=Yd=!1;var e=0;pr!==0&&XM()&&(e=pr);for(var n=Ve(),a=null,s=ks;s!==null;){var c=s.next,f=Ov(s,n);f===0?(s.next=null,a===null?ks=c:a.next=c,c===null&&(Xs=a)):(a=s,(e!==0||(f&3)!==0)&&(Xc=!0)),s=c}on!==0&&on!==5||il(e),pr!==0&&(pr=0)}function Ov(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-St(f),D=1<<x,V=c[x];V===-1?((D&a)===0||(D&s)!==0)&&(c[x]=So(D,n)):V<=n&&(e.expiredLanes|=D),f&=~D}if(n=tn,a=Pt,a=Nr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(jt===2||jt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Qe(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Za(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Qe(s),bo(a)){case 2:case 8:a=$;break;case 32:a=Be;break;case 268435456:a=ke;break;default:a=Be}return s=Pv.bind(null,e),a=Ue(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Qe(s),e.callbackPriority=2,e.callbackNode=null,2}function Pv(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kc()&&e.callbackNode!==a)return null;var s=Pt;return s=Nr(e,e===tn?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Sv(e,s,n),Ov(e,Ve()),e.callbackNode!=null&&e.callbackNode===a?Pv.bind(null,e):null)}function Fv(e,n){if(kc())return null;Sv(e,n,!0)}function LM(){qM(function(){(qt&6)!==0?Ue(mt,UM):Lv()})}function jd(){if(pr===0){var e=Hr;e===0&&(e=fs,fs<<=1,(fs&261888)===0&&(fs=256)),pr=e}return pr}function Iv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hl(e)}function OM(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Iv((c[J]||null).action),x=s.submitter;x&&(n=(n=x[J]||null)?Iv(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var D=new Xl("action","action",null,s,c);e.push({event:D,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(pr!==0){var V=new FormData(c,x);id(a,{pending:!0,data:V,method:c.method,action:f},null,V)}}else typeof f=="function"&&(D.preventDefault(),V=new FormData(c,x),id(a,{pending:!0,data:V,method:c.method,action:f},f,V))},currentTarget:c}]})}}for(var Kd=0;Kd<yf.length;Kd++){var Qd=yf[Kd],PM=Qd.toLowerCase(),FM=Qd[0].toUpperCase()+Qd.slice(1);wi(PM,"on"+FM)}wi(c0,"onAnimationEnd"),wi(u0,"onAnimationIteration"),wi(f0,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Wy,"onTransitionRun"),wi(qy,"onTransitionStart"),wi(Yy,"onTransitionCancel"),wi(d0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),je("onBeforeInput",["compositionend","keypress","textInput","paste"]),je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function Bv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var D=s[x],V=D.instance,oe=D.currentTarget;if(D=D.listener,V!==f&&c.isPropagationStopped())break e;f=D,c.currentTarget=oe;try{f(c)}catch(_e){Yl(_e)}c.currentTarget=null,f=V}else for(x=0;x<s.length;x++){if(D=s[x],V=D.instance,oe=D.currentTarget,D=D.listener,V!==f&&c.isPropagationStopped())break e;f=D,c.currentTarget=oe;try{f(c)}catch(_e){Yl(_e)}c.currentTarget=null,f=V}}}}function Lt(e,n){var a=n[pe];a===void 0&&(a=n[pe]=new Set);var s=e+"__bubble";a.has(s)||(zv(n,e,2,!1),a.add(s))}function Jd(e,n,a){var s=0;n&&(s|=4),zv(a,e,s,n)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function $d(e){if(!e[Wc]){e[Wc]=!0,Yt.forEach(function(a){a!=="selectionchange"&&(IM.has(a)||Jd(a,!1,e),Jd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wc]||(n[Wc]=!0,Jd("selectionchange",!1,n))}}function zv(e,n,a,s){switch(C_(n)){case 2:var c=wE;break;case 8:c=NE;break;default:c=xh}a=c.bind(null,n,a,e),c=void 0,!of||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function eh(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var D=s.stateNode.containerInfo;if(D===c)break;if(x===4)for(x=s.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;D!==null;){if(x=vt(D),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){s=f=x;continue e}D=D.parentNode}}s=s.return}zm(function(){var oe=f,_e=rf(a),be=[];e:{var re=h0.get(e);if(re!==void 0){var ge=Xl,qe=e;switch(e){case"keypress":if(Vl(a)===0)break e;case"keydown":case"keyup":ge=yy;break;case"focusin":qe="focus",ge=ff;break;case"focusout":qe="blur",ge=ff;break;case"beforeblur":case"afterblur":ge=ff;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=Ay;break;case c0:case u0:case f0:ge=dy;break;case d0:ge=Cy;break;case"scroll":case"scrollend":ge=oy;break;case"wheel":ge=Ny;break;case"copy":case"cut":case"paste":ge=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Xm;break;case"submit":ge=Ty;break;case"toggle":case"beforetoggle":ge=Uy}var ct=(n&4)!==0,bt=!ct&&(e==="scroll"||e==="scrollend"),se=ct?re!==null?re+"Capture":null:re;ct=[];for(var ee=oe,he;ee!==null;){var Te=ee;if(he=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||he===null||se===null||(Te=Ao(ee,se),Te!=null&&ct.push(rl(ee,Te,he))),bt)break;ee=ee.return}0<ct.length&&(re=new ge(re,qe,null,a,_e),be.push({event:re,listeners:ct}))}}if((n&7)===0){e:{if(ge=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",ge&&a!==af&&(qe=a.relatedTarget||a.fromElement)&&(vt(qe)||qe[xe]))break e;(re||ge)&&(qe=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,re?(ge=a.relatedTarget||a.toElement,re=oe,ge=ge?vt(ge):null,ge!==null&&(bt=u(ge),ct=ge.tag,ge!==bt||ct!==5&&ct!==27&&ct!==6)&&(ge=null)):(re=null,ge=oe),re!==ge&&(ct=Vm,Te="onMouseLeave",se="onMouseEnter",ee="mouse",(e==="pointerout"||e==="pointerover")&&(ct=Xm,Te="onPointerLeave",se="onPointerEnter",ee="pointer"),bt=re==null?qe:it(re),he=ge==null?qe:it(ge),qe=new ct(Te,ee+"leave",re,a,_e),qe.target=bt,qe.relatedTarget=he,Te=null,vt(_e)===oe&&(ct=new ct(se,ee+"enter",ge,a,_e),ct.target=he,ct.relatedTarget=bt,Te=ct),bt=Te,ct=re&&ge?R(re,ge,BM):null,re!==null&&Hv(be,qe,re,ct,!1),ge!==null&&bt!==null&&Hv(be,bt,ge,ct,!0)))}e:{if(re=oe?it(oe):window,ge=re.nodeName&&re.nodeName.toLowerCase(),ge==="select"||ge==="input"&&re.type==="file")var at=Jm;else if(Km(re))if($m)at=Vy;else{at=Hy;var Ft=zy}else ge=re.nodeName,!ge||ge.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?oe&&nf(oe.elementType)&&(at=Jm):at=Gy;if(at&&(at=at(e,oe))){Qm(be,at,a,_e);break e}Ft&&Ft(e,re,oe)}switch(Ft=oe?it(oe):window,e){case"focusin":(Km(Ft)||Ft.contentEditable==="true")&&(_s=Ft,_f=oe,Oo=null);break;case"focusout":Oo=_f=_s=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,o0(be,a,_e);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":o0(be,a,_e)}var dt;if(hf)e:{switch(e){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else vs?Zm(e,a)&&(gt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(Wm&&a.locale!=="ko"&&(vs||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&vs&&(dt=Hm()):(ja=_e,lf="value"in ja?ja.value:ja.textContent,vs=!0)),Ft=qc(oe,gt),0<Ft.length&&(gt=new km(gt,e,null,a,_e),be.push({event:gt,listeners:Ft}),dt?gt.data=dt:(dt=jm(a),dt!==null&&(gt.data=dt)))),(dt=Oy?Py(e,a):Fy(e,a))&&(gt=qc(oe,"onBeforeInput"),0<gt.length&&(Ft=new km("onBeforeInput","beforeinput",null,a,_e),be.push({event:Ft,listeners:gt}),Ft.data=dt)),OM(be,e,oe,a,_e)}Bv(be,n)})}function rl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function qc(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ao(e,a),c!=null&&s.unshift(rl(e,c,f)),c=Ao(e,n),c!=null&&s.push(rl(e,c,f))),e.tag===3)return s;e=e.return}return[]}function BM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hv(e,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var D=a,V=D.alternate,oe=D.stateNode;if(D=D.tag,V!==null&&V===s)break;D!==5&&D!==26&&D!==27||oe===null||(V=oe,c?(oe=Ao(a,f),oe!=null&&x.unshift(rl(a,oe,V))):c||(oe=Ao(a,f),oe!=null&&x.push(rl(a,oe,V)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var zM=/\r\n?/g,HM=/\u0000|\uFFFD/g;function Gv(e){return(typeof e=="string"?e:""+e).replace(zM,`
`).replace(HM,"")}function Vv(e,n){return n=Gv(n),Gv(e)===n}function Qt(e,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ps(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ps(e,""+s);else return;break;case"className":ii(e,"class",s);break;case"tabIndex":ii(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,a,s);break;case"style":Im(e,s,f);return;case"data":if(n!=="object"){ii(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Hl(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Qt(e,n,"name",c.name,c,null),Qt(e,n,"formEncType",c.formEncType,c,null),Qt(e,n,"formMethod",c.formMethod,c,null),Qt(e,n,"formTarget",c.formTarget,c,null)):(Qt(e,n,"encType",c.encType,c,null),Qt(e,n,"method",c.method,c,null),Qt(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Hl(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Zi);return;case"onScroll":s!=null&&Lt("scroll",e);return;case"onScrollEnd":s!=null&&Lt("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Hl(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Lt("beforetoggle",e),Lt("toggle",e),nn(e,"popover",s);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":nn(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=ry.get(a)||a,nn(e,a,s);else return}wt=!0}function th(e,n,a,s,c,f){switch(a){case"style":Im(e,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")ps(e,s);else if(typeof s=="number"||typeof s=="bigint")ps(e,""+s);else return;break;case"onScroll":s!=null&&Lt("scroll",e);return;case"onScrollEnd":s!=null&&Lt("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[J]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,s,c);break e}wt=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):nn(e,a,s)}return}wt=!0}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",e),Lt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(e,n,f,x,a,null)}}c&&Qt(e,n,"srcSet",a.srcSet,a,null),s&&Qt(e,n,"src",a.src,a,null);return;case"input":Lt("invalid",e);var D=f=x=c=null,V=null,oe=null;for(s in a)if(a.hasOwnProperty(s)){var _e=a[s];if(_e!=null)switch(s){case"name":c=_e;break;case"type":x=_e;break;case"checked":V=_e;break;case"defaultChecked":oe=_e;break;case"value":f=_e;break;case"defaultValue":D=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Qt(e,n,s,_e,a,null)}}Lm(e,f,D,V,oe,x,c,!1);return;case"select":Lt("invalid",e),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(D=a[c],D!=null))switch(c){case"value":f=D;break;case"defaultValue":x=D;break;case"multiple":s=D;default:Qt(e,n,c,D,a,null)}n=f,a=x,e.multiple=!!s,n!=null?hs(e,!!s,n,!1):a!=null&&hs(e,!!s,a,!0);return;case"textarea":Lt("invalid",e),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(D=a[x],D!=null))switch(x){case"value":s=D;break;case"defaultValue":c=D;break;case"children":f=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:Qt(e,n,x,D,a,null)}Pm(e,s,c,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Qt(e,n,V,s,a,null)}return;case"dialog":Lt("beforetoggle",e),Lt("toggle",e),Lt("cancel",e),Lt("close",e);break;case"iframe":case"object":Lt("load",e);break;case"video":case"audio":for(s=0;s<al.length;s++)Lt(al[s],e);break;case"image":Lt("error",e),Lt("load",e);break;case"details":Lt("toggle",e);break;case"embed":case"source":case"link":Lt("error",e),Lt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(s=a[oe],s!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qt(e,n,oe,s,a,null)}return;default:if(nf(n)){for(_e in a)a.hasOwnProperty(_e)&&(s=a[_e],s!==void 0&&th(e,n,_e,s,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(s=a[D],s!=null&&Qt(e,n,D,s,a,null))}var GM={};function VM(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,D=null,V=null,oe=null,_e=null;for(ge in a){var be=a[ge];if(a.hasOwnProperty(ge)&&be!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":V=be;default:s.hasOwnProperty(ge)||Qt(e,n,ge,null,s,be)}}for(var re in s){var ge=s[re];if(be=a[re],s.hasOwnProperty(re)&&(ge!=null||be!=null))switch(re){case"type":ge!==be&&(wt=!0),f=ge;break;case"name":ge!==be&&(wt=!0),c=ge;break;case"checked":ge!==be&&(wt=!0),oe=ge;break;case"defaultChecked":ge!==be&&(wt=!0),_e=ge;break;case"value":ge!==be&&(wt=!0),x=ge;break;case"defaultValue":ge!==be&&(wt=!0),D=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,n));break;default:ge!==be&&Qt(e,n,re,ge,s,be)}}ef(e,x,D,V,oe,_e,f,c);return;case"select":ge=x=D=re=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ge=V;default:s.hasOwnProperty(f)||Qt(e,n,f,null,s,V)}for(c in s)if(f=s[c],V=a[c],s.hasOwnProperty(c)&&(f!=null||V!=null))switch(c){case"value":f!==V&&(wt=!0),re=f;break;case"defaultValue":f!==V&&(wt=!0),D=f;break;case"multiple":f!==V&&(wt=!0),x=f;default:f!==V&&Qt(e,n,c,f,s,V)}n=D,a=x,s=ge,re!=null?hs(e,!!a,re,!1):!!s!=!!a&&(n!=null?hs(e,!!a,n,!0):hs(e,!!a,a?[]:"",!1));return;case"textarea":ge=re=null;for(D in a)if(c=a[D],a.hasOwnProperty(D)&&c!=null&&!s.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Qt(e,n,D,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":c!==f&&(wt=!0),re=c;break;case"defaultValue":c!==f&&(wt=!0),ge=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Qt(e,n,x,c,s,f)}Om(e,re,ge);return;case"option":for(var qe in a)if(re=a[qe],a.hasOwnProperty(qe)&&re!=null&&!s.hasOwnProperty(qe))switch(qe){case"selected":e.selected=!1;break;default:Qt(e,n,qe,null,s,re)}for(V in s)if(re=s[V],ge=a[V],s.hasOwnProperty(V)&&re!==ge&&(re!=null||ge!=null))switch(V){case"selected":re!==ge&&(wt=!0),e.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Qt(e,n,V,re,s,ge)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)re=a[ct],a.hasOwnProperty(ct)&&re!=null&&!s.hasOwnProperty(ct)&&Qt(e,n,ct,null,s,re);for(oe in s)if(re=s[oe],ge=a[oe],s.hasOwnProperty(oe)&&re!==ge&&(re!=null||ge!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:Qt(e,n,oe,re,s,ge)}return;default:if(nf(n)){for(var bt in a)re=a[bt],a.hasOwnProperty(bt)&&re!==void 0&&!s.hasOwnProperty(bt)&&th(e,n,bt,void 0,s,re);for(_e in s)re=s[_e],ge=a[_e],!s.hasOwnProperty(_e)||re===ge||re===void 0&&ge===void 0||th(e,n,_e,re,s,ge);return}}for(var se in a)re=a[se],a.hasOwnProperty(se)&&re!=null&&!s.hasOwnProperty(se)&&Qt(e,n,se,null,s,re);for(be in s)re=s[be],ge=a[be],!s.hasOwnProperty(be)||re===ge||re==null&&ge==null||Qt(e,n,be,re,s,ge)}function kv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,D=c.duration;if(f&&D&&kv(x)){for(x=0,D=c.responseEnd,s+=1;s<a.length;s++){var V=a[s],oe=V.startTime;if(oe>D)break;var _e=V.transferSize,be=V.initiatorType;_e&&kv(be)&&(V=V.responseEnd,x+=_e*(V<D?1:(D-oe)/(V-oe)))}if(--s,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nh=null,ih=null;function sl(e){return e.nodeType===9?e:e.ownerDocument}function Xv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function qv(e,n,a,s){return a=sl(a).createElement(e),a[N]=s,a[J]=n,On(a,e,n),Ct(a),a}function ah(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function XM(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var sh=typeof setTimeout=="function"?setTimeout:void 0,WM=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,Zv=typeof requestAnimationFrame=="function"?requestAnimationFrame:sh,qM=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(e){return Yv.resolve(null).then(e).catch(YM)}:sh;function YM(e){setTimeout(function(){throw e})}function mr(e){return e==="head"}function jv(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),Qs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ph(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ph(a);for(var f=a.firstChild;f;){var x=f.nextSibling,D=f.nodeName;f[We]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&ph(e.ownerDocument.body);a=c}while(a);Qs(n)}function Kv(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Qv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Jv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ZM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function oh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return ZM(n,a,e)}function jM(e){return e.documentElement.clientHeight}function KM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function QM(e,n,a,s,c,f,x,D,V){var oe=n.nodeType===9?n:n.ownerDocument;try{var _e=oe.startViewTransition({update:function(){var re=oe.defaultView,ge=re.navigation&&re.navigation.transition,qe=oe.fonts.status;s();var ct=[];if(qe==="loaded"&&(jM(oe),oe.fonts.status==="loading"&&ct.push(oe.fonts.ready)),qe=ct.length,e!==null)for(var bt=e.suspenseyImages,se=0,ee=0;ee<bt.length;ee++){var he=bt[ee];if(!he.complete){var Te=he.getBoundingClientRect();if(0<Te.bottom&&0<Te.right&&Te.top<re.innerHeight&&Te.left<re.innerWidth){if(se+=x_(he),se>jc){ct.length=qe;break}he=new Promise(KM.bind(he)),ct.push(he)}}}if(0<ct.length)return re=Promise.race([Promise.all(ct),new Promise(function(at){return setTimeout(at,500)})]).then(c,c),(ge?Promise.allSettled([ge.finished,re]):re).then(f,f);if(c(),ge)return ge.finished.then(f,f);f()},types:a});oe.__reactViewTransition=_e;var be=[];return _e.ready.then(function(){for(var re=oe.documentElement.getAnimations({subtree:!0}),ge=0;ge<re.length;ge++){var qe=re[ge],ct=qe.effect,bt=ct.pseudoElement;if(bt!=null&&bt.startsWith("::view-transition")){be.push(qe),qe=ct.getKeyframes();for(var se=bt=void 0,ee=!0,he=0;he<qe.length;he++){var Te=qe[he],at=Te.width;if(bt===void 0)bt=at;else if(bt!==at){ee=!1;break}if(at=Te.height,se===void 0)se=at;else if(se!==at){ee=!1;break}delete Te.width,delete Te.height,Te.transform==="none"&&delete Te.transform}ee&&bt!==void 0&&se!==void 0&&(ct.setKeyframes(qe),ee=getComputedStyle(ct.target,ct.pseudoElement),ee.width!==bt||ee.height!==se)&&(ee=qe[0],ee.width=bt,ee.height=se,ee=qe[qe.length-1],ee.width=bt,ee.height=se,ct.setKeyframes(qe))}}x()},function(re){oe.__reactViewTransition===_e&&(oe.__reactViewTransition=null);try{if(typeof re=="object"&&re!==null)switch(re.name){case"InvalidStateError":(re.message==="View transition was skipped because document visibility state is hidden."||re.message==="Skipping view transition because document visibility state has become hidden."||re.message==="Skipping view transition because viewport size changed."||re.message==="Transition was aborted because of invalid state")&&(re=null)}re!==null&&V(re)}finally{s(),c(),x()}}),_e.finished.finally(function(){for(var re=0;re<be.length;re++)be[re].cancel();oe.__reactViewTransition===_e&&(oe.__reactViewTransition=null),D()}),_e}catch{return s(),c(),x(),null}}function Qr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Qr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Qr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&s.push(a[c])}return s},Qr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function $v(e){return{name:e,group:new Qr("group",e),imagePair:new Qr("image-pair",e),old:new Qr("old",e),new:new Qr("new",e)}}function ui(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(e,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(t_(f,e,n,a)===-1){var x=this,D=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(D=function(V){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,V):n.handleEvent(V)}),s!==null&&(c=x.removeEventListener.bind(x,e,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Ws(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:D,cleanup:c}),_(this._fragmentFiber.child,!1,JM,e,D,s)}this._eventListeners=f}};function JM(e,n,a,s){return T(e).addEventListener(n,a,s),!1}ui.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=t_(s,e,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Ws(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,$M,e,a,c),s.splice(n,1),f!==null&&f()}};function $M(e,n,a,s){return T(e).removeEventListener(n,a,s),!1}function Ws(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function e_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function t_(e,n,a,s){if(e.length===0)return-1;s=e_(s);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&e_(f.optionsOrUseCapture)===s)return c}return-1}ui.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=T(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Ws(f.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Ws(f.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},ui.prototype.focus=function(e){_(this._fragmentFiber.child,!0,n_,e,void 0,void 0)};function n_(e,n){return e.tag===6?!1:(e=T(e),fE(e,n))}ui.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,lh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!n_(n[a],e);a--);};function lh(e,n){return n.push(e),!1}ui.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=T(e),e=sl(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,eE,e,void 0,void 0))};function eE(e,n){return e.tag===6?!1:(e=T(e),e===n||e.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,tE,e,void 0,void 0)};function tE(e,n){return e.tag===6||(e=T(e),n.observe(e)),!1}ui.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,nE,e,void 0,void 0);for(var a=n=0;a<Oi.length;a++){var s=Oi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Oi[n++]=s}Oi.length=n}};function nE(e,n){return e.tag===6||(e=T(e),n.unobserve(e)),!1}var Oi=[],ch=!1;function iE(e,n,a){Oi.push({fragmentInstance:e,observer:n,instance:a}),ch||(ch=!0,dE(function(){ch=!1;var s=Oi;Oi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}ui.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,aE,e,void 0,void 0),e};function aE(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=T(e),n.push.apply(n,e.getClientRects());return!1}ui.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:T(n).getRootNode(e)},ui.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,lh,a,void 0,void 0);var s=T(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=T(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=T(a[0]),c=T(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),D=c.compareDocumentPosition(e),V=x&Node.DOCUMENT_POSITION_CONTAINED_BY||D&Node.DOCUMENT_POSITION_CONTAINED_BY;return D=s&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&D&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||f&&c===e||V||D?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||rE(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function rE(e,n,a,s,c){var f=vt(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)e:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break e}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;e:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break e}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=R(a,f,C),n===null?n=!1:(_(n,!0,Z,f,a),f=y,y=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=R(s,f,C),n===null?n=!1:(_(n,!0,U,f,s),f=y,b=y=null,n=f!==null)),n):!1}function i_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,lh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=A(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=T(s),i_(e,a);return}if(s=T(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=T(c),i_(c,a)):T(c).scrollIntoView(e),s+=a?-1:1}};function sE(e,n){return e=T(e),a_(e,n),!1}function a_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function r_(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.addEventListener(c.type,c.attachedListener,Ws(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var x=0,D=0;D<Oi.length;D++){var V=Oi[D];(V.fragmentInstance!==n||V.observer!==f||V.instance!==e)&&(Oi[x++]=V)}Oi.length=x,f.observe(e)}),a_(e,n))}function oE(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.removeEventListener(c.type,c.attachedListener,Ws(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?iE(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function uh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),lt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lE(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[We])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function cE(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function s_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$?"||e.data==="$~"}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hh=null;function o_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function l_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function fE(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function dE(e){Zv(function(){Zv(function(n){return e(n)})})}function c_(e,n,a){switch(n=sl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function u_(e,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Qt(e,n,s,null,GM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Zi&&(e.onclick=null),lt(e)}function ph(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);lt(e)}var Ai=new Map,f_=new Set;function ol(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Na=Ae.d;Ae.d={f:hE,r:pE,D:mE,C:gE,L:vE,m:_E,X:SE,S:xE,M:yE};function hE(){var e=Na.f(),n=Hc();return e||n}function pE(e){var n=yt(e);n!==null&&n.tag===5&&n.type==="form"?hg(n):Na.r(e)}var qs=typeof document>"u"?null:document;function d_(e,n,a){var s=qs;if(s&&typeof n=="string"&&n){var c=_i(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),f_.has(c)||(f_.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),On(n,"link",e),Ct(n),s.head.appendChild(n)))}}function mE(e){Na.D(e),d_("dns-prefetch",e,null)}function gE(e,n){Na.C(e,n),d_("preconnect",e,n)}function vE(e,n,a){Na.L(e,n,a);var s=qs;if(s&&e&&n){var c='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_i(a.imageSizes)+'"]')):c+='[href="'+_i(e)+'"]';var f=c;switch(n){case"style":f=Ys(e);break;case"script":f=Zs(e)}if(!(Ai.has(f)||(e=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ai.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(ll(f))||n==="script"&&s.querySelector(cl(f))))){var x=s.createElement("link");On(x,"link",e),n==="style"&&(x[ot]=!0,x.onload=x.onerror=function(){$t(x)}),Ct(x),s.head.appendChild(x)}}}function _E(e,n){Na.m(e,n);var a=qs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_i(s)+'"][href="'+_i(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zs(e)}if(!Ai.has(f)&&(e=z({rel:"modulepreload",href:e},n),Ai.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cl(f)))return}s=a.createElement("link"),On(s,"link",e),Ct(s),a.head.appendChild(s)}}}function xE(e,n,a){Na.S(e,n,a);var s=qs;if(s&&e){var c=Dt(s).hoistableStyles,f=Ys(e);n=n||"default";var x=c.get(f);if(!x){var D={loading:0,preload:null};if(x=s.querySelector(ll(f)))D.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ai.get(f))&&mh(e,a);var V=x=s.createElement("link");Ct(V),On(V,"link",e),V._p=new Promise(function(oe,_e){V.onload=oe,V.onerror=_e}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Yc(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:D},c.set(f,x)}}}function SE(e,n){Na.X(e,n);var a=qs;if(a&&e){var s=Dt(a).hoistableScripts,c=Zs(e),f=s.get(c);f||(f=a.querySelector(cl(c)),f||(e=z({src:e,async:!0},n),(n=Ai.get(c))&&gh(e,n),f=a.createElement("script"),Ct(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function yE(e,n){Na.M(e,n);var a=qs;if(a&&e){var s=Dt(a).hoistableScripts,c=Zs(e),f=s.get(c);f||(f=a.querySelector(cl(c)),f||(e=z({src:e,async:!0,type:"module"},n),(n=Ai.get(c))&&gh(e,n),f=a.createElement("script"),Ct(f),On(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function h_(e,n,a,s){var c=(c=st.current)?ol(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ys(a.href),n=Dt(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ys(a.href);var f=Dt(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(ll(e)))?f._p||(x.instance=f,x.state.loading=5):(f=Ai.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(e,f)),ME(c,e,f,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Zs(a),n=Dt(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ys(e){return'href="'+_i(e)+'"'}function ll(e){return'link[rel="stylesheet"]['+e+"]"}function p_(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function ME(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ot]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[ot]=!0,n.onload=n.onerror=$t.bind(null,n),On(n,"link",a),Ct(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Zs(e){return'[src="'+_i(e)+'"]'}function cl(e){return"script[async]"+e}function m_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+_i(a.href)+'"]');if(s)return n.instance=s,Ct(s),s;var c=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ct(s),On(s,"style",c),Yc(s,a.precedence,e),n.instance=s;case"stylesheet":c=Ys(a.href);var f=e.querySelector(ll(c));if(f)return n.state.loading|=4,n.instance=f,Ct(f),f;s=p_(a),(c=Ai.get(c))&&mh(s,c),f=(e.ownerDocument||e).createElement("link"),Ct(f);var x=f;return x._p=new Promise(function(D,V){x.onload=D,x.onerror=V}),On(f,"link",s),n.state.loading|=4,Yc(f,a.precedence,e),n.instance=f;case"script":return f=Zs(a.src),(c=e.querySelector(cl(f)))?(n.instance=c,Ct(c),c):(s=a,(c=Ai.get(f))&&(s=z({},a),gh(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Ct(c),On(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Yc(s,a.precedence,e));return n.instance}function Yc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var D=s[x];if(D.dataset.precedence===n)f=D;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zc=null;function g_(e,n,a){if(Zc===null){var s=new Map,c=Zc=new Map;c.set(a,s)}else c=Zc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[We]||f[N]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var D=s.get(x);D?D.push(f):s.set(x,[f])}}return s}function vh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function EE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function v_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function x_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function S_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=x_(n),e.suspenseyImages.push(n)),e=AE.bind(e),n.decode().then(e,e))}function TE(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ys(s.href),f=n.querySelector(ll(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ul.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Ct(f);return}f=n.ownerDocument||n,s=p_(s),(c=Ai.get(c))&&mh(s,c),f=f.createElement("link"),Ct(f);var x=f;x._p=new Promise(function(D,V){x.onload=D,x.onerror=V}),On(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ul.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jc=0;function bE(e,n){return e.stylesheets&&e.count===0&&Qc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Qc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jc===0&&(jc=62500*kM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function y_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Qc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ul(){this.count--,y_(this)}function AE(){this.imgCount--,y_(this)}var Kc=null;function Qc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kc=new Map,n.forEach(RE,e),Kc=null,ul.call(e))}function RE(e,n){if(!(n.state.loading&4)){var a=Kc.get(e);if(a)var s=a.get(null);else{a=new Map,Kc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=ul.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var js={$$typeof:W,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function CE(e,n,a,s,c,f,x,D,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ds(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ds(0),this.hiddenUpdates=ds(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.transitionTypes=null,this.incompleteTransitions=new Map}function M_(e,n,a,s,c,f,x,D,V,oe,_e,be){return e=new CE(e,n,a,x,V,oe,_e,be,D),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Uf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Ff(f),e}function E_(e){return e?(e=ys,e):ys}function T_(e,n,a,s,c,f){c=E_(c),s.context===null?s.context=c:s.pendingContext=c,s=ir(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ar(e,s,n),a!==null&&(Jn(a,e,n),Go(a,e,n))}function b_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _h(e,n){b_(e,n),(e=e.alternate)&&b_(e,n)}function A_(e){if(e.tag===13||e.tag===31){var n=Or(e,67108864);n!==null&&Jn(n,e,67108864),_h(e,67108864)}}function R_(e){if(e.tag===13||e.tag===31){var n=ci();n=To(n);var a=Or(e,n);a!==null&&Jn(a,e,n),_h(e,n)}}var Ks=!0;function wE(e,n,a,s){var c=Se.T;Se.T=null;var f=Ae.p;try{Ae.p=2,xh(e,n,a,s)}finally{Ae.p=f,Se.T=c}}function NE(e,n,a,s){var c=Se.T;Se.T=null;var f=Ae.p;try{Ae.p=8,xh(e,n,a,s)}finally{Ae.p=f,Se.T=c}}function xh(e,n,a,s){if(Ks){var c=Sh(s);if(c===null)eh(e,n,s,Jc,a),w_(e,s);else if(UE(c,e,n,a,s))s.stopPropagation();else if(w_(e,s),n&4&&-1<DE.indexOf(e)){for(;c!==null;){var f=yt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=ga(f.pendingLanes);if(x!==0){var D=f;for(D.pendingLanes|=2,D.entangledLanes|=2;x;){var V=1<<31-St(x);D.entanglements[1]|=V,x&=~V}aa(f),(qt&6)===0&&(Ic=Ve()+500,il(0))}}break;case 31:case 13:D=Or(f,2),D!==null&&Jn(D,f,2),Hc(),_h(f,2)}if(f=Sh(s),f===null&&eh(e,n,s,Jc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else eh(e,n,s,null,a)}}function Sh(e){return e=rf(e),yh(e)}var Jc=null;function yh(e){if(Jc=null,e=vt(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jc=e,null}function C_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ft()){case mt:return 2;case $:return 8;case Be:case Ee:return 32;case ke:return 268435456;default:return 32}default:return 32}}var Mh=!1,gr=null,vr=null,_r=null,fl=new Map,dl=new Map,xr=[],DE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w_(e,n){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(n.pointerId)}}function hl(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=yt(n),n!==null&&A_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function UE(e,n,a,s,c){switch(n){case"focusin":return gr=hl(gr,e,n,a,s,c),!0;case"dragenter":return vr=hl(vr,e,n,a,s,c),!0;case"mouseover":return _r=hl(_r,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return fl.set(f,hl(fl.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,dl.set(f,hl(dl.get(f)||null,e,n,a,s,c)),!0}return!1}function N_(e){var n=vt(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Bl(e.priority,function(){R_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Bl(e.priority,function(){R_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Sh(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);af=s,a.target.dispatchEvent(s),af=null}else return n=yt(a),n!==null&&A_(n),e.blockedOn=a,!1;n.shift()}return!0}function D_(e,n,a){$c(e)&&a.delete(n)}function LE(){Mh=!1,gr!==null&&$c(gr)&&(gr=null),vr!==null&&$c(vr)&&(vr=null),_r!==null&&$c(_r)&&(_r=null),fl.forEach(D_),dl.forEach(D_)}function eu(e,n){e.blockedOn===n&&(e.blockedOn=null,Mh||(Mh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,LE)))}var tu=null;function U_(e){tu!==e&&(tu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tu===e&&(tu=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(yh(s||a)===null)continue;break}var f=yt(a);f!==null&&(e.splice(n,3),n-=3,id(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Qs(e){function n(V){return eu(V,e)}gr!==null&&eu(gr,e),vr!==null&&eu(vr,e),_r!==null&&eu(_r,e),fl.forEach(n),dl.forEach(n);for(var a=0;a<xr.length;a++){var s=xr[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)N_(a),a.blockedOn===null&&xr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[J]||null;if(typeof f=="function")x||U_(a);else if(x){var D=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[J]||null)D=x.formAction;else if(yh(c)!==null)continue}else D=x.action;typeof D=="function"?a[s+1]=D:(a.splice(s,3),s-=3),U_(a)}}}function L_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Eh(e){this._internalRoot=e}nu.prototype.render=Eh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ci();T_(a,s,e,n,null,null)},nu.prototype.unmount=Eh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;T_(e.current,2,null,e,null,null),Hc(),n[xe]=null}};function nu(e){this._internalRoot=e}nu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Il();e={blockedOn:null,target:e,priority:n};for(var a=0;a<xr.length&&n!==0&&n<xr[a].priority;a++);xr.splice(a,0,e),a===0&&N_(e)}};var O_=t.version;if(O_!=="19.3.0")throw Error(r(527,O_,"19.3.0"));Ae.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var OE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Se,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{ut=iu.inject(OE),Je=iu}catch{}}return ml.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Eg,f=Tg,x=bg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=M_(e,1,!1,null,null,a,s,null,c,f,x,L_),e[xe]=n.current,$d(e),new Eh(n)},ml.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Eg,x=Tg,D=bg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=M_(e,1,!0,n,a??null,s,c,V,f,x,D,L_),n.context=E_(null),a=n.current,s=ci(),s=To(s),c=ir(s),c.callback=null,ar(a,c,s),a=s,n.current.lanes=a,qi(n,a),aa(n),e[xe]=n.current,$d(e),new nu(n)},ml.version="19.3.0",ml}var X_;function YE(){if(X_)return Ah.exports;X_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ah.exports=qE(),Ah.exports}var ZE=YE();const jE=hS(ZE),KE=2,QE=1200,W_=4096,au=3,JE=.6,$E=.08,e1=.04,t1=1.3,n1=1.3*1.3,i1=.5,a1=.28,r1=.2,s1=20,o1=50,q_=.6,Ba=(o,t,i)=>o<t?t:o>i?i:o,zu=o=>o-Math.floor(o);function Nh(o,t){if(!o)return t;let i=String(o).trim();if(i.slice(0,4).toLowerCase()==="var("){const E=i.indexOf(","),A=i.lastIndexOf(")");if(E<0||A<E)return t;i=i.slice(E+1,A).trim()}if(i[0]==="#"){let E=i.slice(1);if(E.length===3||E.length===4){let A="";for(const P of E)A+=P+P;E=A}return E.length===6&&(E+="ff"),E.length!==8||/[^0-9a-f]/i.test(E)?t:[parseInt(E.slice(0,2),16)/255,parseInt(E.slice(2,4),16)/255,parseInt(E.slice(4,6),16)/255,parseInt(E.slice(6,8),16)/255]}const r=i.match(/^(rgba?|hsla?)\(([^)]*)\)$/i);if(!r)return t;const l=r[2].split(/[\s,/]+/).filter(E=>E.length>0);if(l.length<3)return t;const u=(E,A)=>{const P=parseFloat(E);return Number.isFinite(P)?E.indexOf("%")>=0?P/100*A:P:0},d=l.length>3?Ba(u(l[3],1),0,1):1;if(r[1].toLowerCase().slice(0,3)==="rgb")return[Ba(u(l[0],255)/255,0,1),Ba(u(l[1],255)/255,0,1),Ba(u(l[2],255)/255,0,1),d];const h=zu(parseFloat(l[0])/360),p=Ba(u(l[1],1),0,1),m=Ba(u(l[2],1),0,1),S=m<.5?m*(1+p):m+p-m*p,_=2*m-S,v=E=>{let A=zu(E);return A<1/6?_+(S-_)*6*A:A<1/2?S:A<2/3?_+(S-_)*(2/3-A)*6:_};return[v(h+1/3),v(h),v(h-1/3),d]}const l1=`
attribute vec2 aPos;
varying vec2 vUv;
void main() {
    vUv = aPos * 0.5 + 0.5;
    gl_Position = vec4(aPos, 0.0, 1.0);
}`,c1=`
precision highp float;

uniform sampler2D uMap;
uniform vec2 uRes;
uniform vec2 uAtlas;
uniform vec2 uPtr;
uniform float uReach;
uniform vec3 uText;
uniform vec3 uShade;
uniform vec4 uAccent;
uniform vec2 uV0;
uniform vec2 uV1;
uniform vec2 uV2;
uniform float uHalf;

varying vec2 vUv;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 blurRG(vec2 uv, float e) {
    vec4 sum = vec4(0.0);
    for (int i = 0; i < 6; i++) {
        float fi = float(i);
        float th = radians(fi / 6.0 * 360.0);
        vec2 dir = vec2(cos(th), sin(th));
        vec2 off = dir * (hash(vec2(fi, uv.x + uv.y)) + e);
        sum += texture2D(uMap, uv + off * e);
    }
    return (sum / 6.0).rg;
}

vec2 segment(vec2 p, vec2 a, vec2 b) {
    vec2 ab = b - a;
    vec2 ap = p - a;
    float t = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-8), 0.0, 1.0);
    return vec2(length(ap - ab * t), t);
}

float stroke(float d, float lw, float px) {
    return 1.0 - smoothstep(lw, lw + px, d);
}

float dashedLine(vec2 p, vec2 a, vec2 b, float lw, float px) {
    vec2 s = segment(p, a, b);
    float dash = step(0.5, fract(s.y * length(b - a) * 100.0));
    return stroke(s.x, lw, px) * dash;
}

float boxEdge(vec2 p, vec2 c, float h, float lw, float px) {
    vec2 q = abs(p - c) - vec2(h);
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
    return stroke(abs(d), lw, px);
}

void main() {
    float aspect = uRes.x / uRes.y;

    vec2 E = (vUv * uRes - (uRes - uAtlas) * 0.5) / uAtlas;
    float inside = step(0.0, E.x) * step(E.x, 1.0) * step(0.0, E.y) * step(E.y, 1.0);
    vec2 safeUv = clamp(E, 0.0, 1.0);

    float b = clamp(1.0 - E.y * 3.5, 0.0, 1.0) * 0.008;
    vec2 soft = blurRG(safeUv, b);
    vec2 sharp = blurRG(safeUv, b * 0.1);

    float d = length((vUv - uPtr) / vec2(1.0, aspect));
    float k = 1.0 - pow(smoothstep(0.0, max(uReach, 1e-4), d), 3.0);

    float mask = mix(soft.r, sharp.g, k) * inside;
    vec3 fill = mix(uShade, uText, smoothstep(0.0, 1.0, E.y));

    vec2 P = vec2(vUv.x * aspect, vUv.y);
    float px = 1.0 / uRes.y;
    float lw = px * 0.2;
    float lines = max(
        max(dashedLine(P, uV0, uV1, lw, px), dashedLine(P, uV1, uV2, lw, px)),
        dashedLine(P, uV2, uV0, lw, px)
    );
    float boxes = max(
        max(boxEdge(P, uV0, uHalf, lw, px), boxEdge(P, uV1, uHalf, lw, px)),
        boxEdge(P, uV2, uHalf, lw, px)
    );
    float A = max(lines, boxes) * uAccent.a * (1.0 - vUv.y);

    vec4 card = vec4(fill * mask, mask);
    vec4 comp = vec4(uAccent.rgb * A, A) + card * (1.0 - A);

    gl_FragColor = comp;
}`;function u1(o,t,i){const r=(u,d)=>{const h=o.createShader(u);return o.shaderSource(h,d),o.compileShader(h),h},l=o.createProgram();return o.attachShader(l,r(o.VERTEX_SHADER,t)),o.attachShader(l,r(o.FRAGMENT_SHADER,i)),o.bindAttribLocation(l,0,"aPos"),o.linkProgram(l),l}function pS(o,t){return`${o.style} ${o.weight} ${t}px ${o.family}`}function f1(o,t,i,r){const l=document.createElement("canvas").getContext("2d");if(!l)return null;const u=(y,b)=>{y.font=pS(t,b);try{"letterSpacing"in y&&(y.letterSpacing=t.letterSpacing)}catch{}},d=y=>{u(l,y);const b=l.measureText(o),Z=b.actualBoundingBoxAscent||y*.8,U=b.actualBoundingBoxDescent||y*.22;return{w:Math.max(1,b.width),asc:Z,desc:U}};let h=Math.max(8,i*r),p=d(h),m=h*.12;const S=Math.max((p.w+m*2)/W_,(p.asc+p.desc+m*2)/W_);S>1&&(h=Math.max(8,h/S),p=d(h),m=h*.12);const _=Math.max(1,Math.ceil(p.w+m*2)),v=Math.max(1,Math.ceil(p.asc+p.desc+m*2)),E=document.createElement("canvas");E.width=_,E.height=v;const A=E.getContext("2d");if(!A)return null;A.fillStyle="#000000",A.fillRect(0,0,_,v),u(A,h),A.textBaseline="alphabetic",A.textAlign="left",A.globalCompositeOperation="lighter",A.fillStyle="#ff0000",A.fillText(o,m,m+p.asc);const P=p.asc+p.desc;A.strokeStyle="#00ff00",A.lineCap="round",A.lineJoin="round",A.lineWidth=Math.max(2,P*.02),A.setLineDash([]),A.strokeText(o,m,m+p.asc),A.lineWidth=Math.max(3.5,P*.04),A.setLineDash([0,Math.max(8,P*.08)]),A.strokeText(o,m,m+p.asc);const T=i/h;return{canvas:E,cssW:_*T,cssH:v*T}}const d1={size:109,spread:27,labels:!0};function h1(o){const{text:t="VECTOR",font:i={fontFamily:"Inter",fontWeight:800,fontSize:"200px",lineHeight:"1em",letterSpacing:"-0.02em",textAlign:"left"},background:r="#000000",textColor:l="#FFFFFF",shade:u="#FFFFFF",accent:d="#FFFFFF",reach:h=290,speed:p=50,damping:m=60,handles:S,style:_}=o,v={...d1,...S??{}},E=Ge.useRef(null),A=Ge.useRef(null),P=Ge.useRef([null,null,null]),T=i==null?void 0:i.fontSize,y={family:(i==null?void 0:i.fontFamily)||"Inter, system-ui, sans-serif",weight:String((i==null?void 0:i.fontWeight)??500),style:(i==null?void 0:i.fontStyle)==="italic"?"italic":"normal",size:Math.max(8,parseFloat(String(T??240))||240),letterSpacing:String((i==null?void 0:i.letterSpacing)??"0px")},b=Nh(d,[1,1,1,.4]),Z=`rgb(${Math.round(b[0]*255)}, ${Math.round(b[1]*255)}, ${Math.round(b[2]*255)})`,U=Ge.useRef({text:t,fontSpec:y,textColor:l,shade:u,background:r,accentRGBA:b,reach:h,speed:p,damping:m,hg:v});return U.current.text=t,U.current.fontSpec=y,U.current.textColor=l,U.current.shade=u,U.current.background=r,U.current.accentRGBA=b,U.current.reach=h,U.current.speed=p,U.current.damping=m,U.current.hg=v,Ge.useEffect(()=>{const C=E.current,R=A.current;if(!C||!R)return;const z={alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,powerPreference:"high-performance"},g=R.getContext("webgl2",z)||R.getContext("webgl",z);if(!g)return;const O=typeof WebGL2RenderingContext<"u"&&g instanceof WebGL2RenderingContext,I=u1(g,l1,c1),F={map:g.getUniformLocation(I,"uMap"),res:g.getUniformLocation(I,"uRes"),atlas:g.getUniformLocation(I,"uAtlas"),ptr:g.getUniformLocation(I,"uPtr"),reach:g.getUniformLocation(I,"uReach"),text:g.getUniformLocation(I,"uText"),shade:g.getUniformLocation(I,"uShade"),accent:g.getUniformLocation(I,"uAccent"),v0:g.getUniformLocation(I,"uV0"),v1:g.getUniformLocation(I,"uV1"),v2:g.getUniformLocation(I,"uV2"),half:g.getUniformLocation(I,"uHalf")},X=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,X),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),g.STATIC_DRAW),g.enableVertexAttribArray(0),g.vertexAttribPointer(0,2,g.FLOAT,!1,0,0),g.disable(g.BLEND);const Y=g.createTexture();g.bindTexture(g.TEXTURE_2D,Y),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,1,1,0,g.RGBA,g.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE);let G=!0,W=Math.max(1,C.offsetWidth),L=Math.max(1,C.offsetHeight),k=!0,ie=1,te=0,ne=0,ae=1,Oe=1,Le="";function H(){return U.current.fontSpec.size*(W/QE)}function de(){W=Math.max(1,C.offsetWidth),L=Math.max(1,C.offsetHeight),ie=Math.min(KE,window.devicePixelRatio||1);const w=Math.max(1,Math.round(W*ie)),M=Math.max(1,Math.round(L*ie));w===te&&M===ne||(te=w,ne=M,R.width=w,R.height=M)}function Ce(){const w=U.current,M=w.fontSpec,K=Math.max(8,H()),Q=f1(w.text||" ",M,K,ie);if(!Q)return;if(ae=Math.max(1e-4,Q.cssW/K),Oe=Math.max(1e-4,Q.cssH/K),typeof document<"u"&&document.fonts)try{const ce=pS(M,64);if(!document.fonts.check(ce)){const ve=()=>{G&&(Le="")};document.fonts.load(ce,w.text).then(ve,ve)}}catch{}g.bindTexture(g.TEXTURE_2D,Y),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,!0),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,Q.canvas),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,!1);const fe=Q.canvas.width,Re=Q.canvas.height,we=(fe&fe-1)===0&&(Re&Re-1)===0;O||we?(g.generateMipmap(g.TEXTURE_2D),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR_MIPMAP_LINEAR)):g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR)}const j={x:-.5,y:.5},le={x:-.5,y:.5},Me=[],Ne=[];for(let w=0;w<au;w+=1)Me.push({x:-.5,y:.5}),Ne.push({x:-.5,y:.5});let Se=!1,Ae=0,et=0;function ze(w,M,K,Q){const fe=Math.floor(w/K),Re=Math.floor(M/Q),we=[];for(let ce=-1;ce<=1;ce+=1)for(let ve=-1;ve<=1;ve+=1){const Ue=(fe+ce+.5)*K,Qe=(Re+ve+.5)*Q;we.push({x:Ue,y:Qe,d:Math.hypot(Ue-w,Qe-M)})}we.sort((ce,ve)=>ce.d-ve.d);for(let ce=0;ce<au;ce+=1)Me[ce].x=we[ce+1].x,Me[ce].y=we[ce+1].y}const rt=w=>{Se=!0;const M=C.getBoundingClientRect();M.width<=0||M.height<=0||(j.x=(w.clientX-M.left)/M.width,j.y=1-(w.clientY-M.top)/M.height)};C.addEventListener("pointermove",rt);let Ye=0,ue=0,Pe=!0;function ht(){const w=U.current;k&&(k=!1,de());const M=w.fontSpec,K=[w.text,M.family,M.weight,M.style,M.letterSpacing,ie,Math.ceil(Math.max(8,H())/64)].join("|");K!==Le&&(Le=K,Ce())}function pt(w){const M=U.current,K=Math.max(0,M.speed)/o1,Q=Math.max(.01,M.hg.spread/100),fe=Q*JE,Re=W/L;if(Se)ze(j.x*Re,j.y,Q,fe);else{const ce=Oe*Math.max(8,H())/L;j.x+=w*i1*K,j.y=(1-ce)/2+a1*ce,j.x>1.5&&(j.x=-.5,le.x=-.5),Ae+=w,Ae>=r1&&(Ae=0,ze(j.x*Re,j.y,Q,fe))}const we=Ba(M.damping/100*s1*w,0,1);le.x+=(j.x-le.x)*we,le.y+=(j.y-le.y)*we,et+=w*K;for(let ce=0;ce<au;ce+=1){const ve=Me[ce],Ue=Math.round(ve.x/Q-.5),Qe=Math.round(ve.y/fe-.5),Ie=zu(Math.sin(Ue*127.1+Qe*311.7)*43758.5453),He=zu(Math.sin(Ue*269.5+Qe*183.3)*43758.5453);Ne[ce].x=ve.x+$E*Q*Math.sin(et*t1+Ie*Math.PI*2),Ne[ce].y=ve.y+e1*fe*Math.sin(et*n1+He*Math.PI*2)}}function st(){const w=U.current,M=W/L,K=w.hg.size/2;for(let Q=0;Q<au;Q+=1){const fe=P.current[Q];if(!fe)continue;const Re=Ne[Q].x/M,we=Ne[Q].y,ce=Math.round(Ba(Re*100,0,100)),ve=Math.round(Ba(we*100,0,100));fe.style.transform=`translate(${Re*W-K}px, ${(1-we)*L-K}px)`,fe.style.opacity=String(q_),fe.textContent=`${ce}, ${ve}`}}function $e(){const w=U.current,M=Nh(w.textColor,[.859,.918,.992,1]),K=Nh(w.shade,[.035,.063,.102,1]),Q=w.accentRGBA;g.viewport(0,0,te,ne),g.useProgram(I),g.uniform1i(F.map,0),g.activeTexture(g.TEXTURE0),g.bindTexture(g.TEXTURE_2D,Y),g.uniform2f(F.res,W,L);const fe=Math.max(8,H());g.uniform2f(F.atlas,ae*fe,Oe*fe),g.uniform2f(F.ptr,le.x,le.y),g.uniform1f(F.reach,Math.max(1,w.reach)/W),g.uniform3f(F.text,M[0],M[1],M[2]),g.uniform3f(F.shade,K[0],K[1],K[2]),g.uniform4f(F.accent,Q[0],Q[1],Q[2],Q[3]),g.uniform2f(F.v0,Ne[0].x,Ne[0].y),g.uniform2f(F.v1,Ne[1].x,Ne[1].y),g.uniform2f(F.v2,Ne[2].x,Ne[2].y),g.uniform1f(F.half,w.hg.size/2/L),g.drawArrays(g.TRIANGLE_STRIP,0,4)}const q=w=>{const M=ue?Math.min(.1,(w-ue)/1e3):0;ue=w,ht(),pt(M),st(),$e(),Ye=requestAnimationFrame(q)},Fe=()=>{Pe&&!document.hidden?Ye||(ue=0,Ye=requestAnimationFrame(q)):Ye&&(cancelAnimationFrame(Ye),Ye=0)},nt=new ResizeObserver(()=>{k=!0});return nt.observe(C),document.addEventListener("visibilitychange",Fe),typeof document<"u"&&document.fonts&&document.fonts.ready.then(()=>{G&&(Le="")},()=>{}),Fe(),()=>{G=!1,Pe=!1,Ye&&cancelAnimationFrame(Ye),nt.disconnect(),C.removeEventListener("pointermove",rt),document.removeEventListener("visibilitychange",Fe)}},[]),B.jsxs("div",{ref:E,style:{position:"relative",overflow:"hidden",background:r,minWidth:1200,minHeight:800,width:"100%",height:"100%",..._},children:[B.jsx("canvas",{ref:A,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),v.labels?[0,1,2].map(C=>B.jsx("div",{ref:R=>{P.current[C]=R},style:{position:"absolute",left:0,top:0,opacity:q_,pointerEvents:"none",whiteSpace:"nowrap",fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:11,letterSpacing:"0.08em",color:Z}},C)):null]})}const p1=2,ru=.1,su=2e3,m1=200,mS=-1800,Y_=m1-mS,g1=.001,v1=6,_1=760,x1=170,S1=420,y1=1.45,Dh=3e3,M1=15*2.4*60,Uh=64,Z_=-2900,j_=-10,E1=3e3,K_=240,Q_=660,T1=4,b1=2,A1=.0016,Lh=.6,Hu=8,Oh=[0,.23,.66,1,.35],R1=.6,C1=-900,w1=380,N1=.06,D1=1.6,U1=12,dm=`
uniform vec2 uSteer;
uniform float uFocal, uAspect, uZA, uZB;

vec3 steerP(vec3 p){
  float cy = cos(uSteer.x), sy = sin(uSteer.x);
  p = vec3(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);
  float cx = cos(uSteer.y), sx = sin(uSteer.y);
  return vec3(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);
}

vec4 projectP(vec3 p){
  return vec4(p.x * uFocal / uAspect, p.y * uFocal, p.z * uZA + uZB, -p.z);
}

// The vertex stage only hands over the view depth. Fog is FOG_GLSL's job, in the
// fragment stage, because that is where three evaluates FogExp2 -- and the
// difference is not cosmetic: interpolating exp(-(d * density)^2) itself across a
// streak 2000 units long pulls almost the whole on-screen rail down to the FAR
// end's value, so long streaks would read dimmer than short ones.
float depthOf(vec3 p){
  return max(-p.z, 0.0);
}
`,hm=`
uniform float uFog;

float clarity(float depth){
  float d = depth * uFog;
  return exp(-d * d);
}
`,L1=`
precision highp float;

attribute vec2 a_dir;
attribute float a_rnorm;
attribute float a_z0;
attribute float a_off;
attribute float a_pick;

uniform float uFlow, uSpan, uResetZ, uRadiusMin, uSpread, uLen;
uniform vec3 uPal[${Hu}];
uniform int uPalN;

varying vec3 vTint;
varying float vDepth;
${dm}
void main(){
  float r = uRadiusMin + a_rnorm * uSpread;

  float zh = uResetZ + mod(a_z0 + uFlow - uResetZ, uSpan);
  vec3 p = steerP(vec3(a_dir * r, zh + a_off * uLen));

  float slot = floor(a_pick * float(uPalN));
  int idx = int(min(slot, float(uPalN) - 1.0));
  vec3 tint = uPal[0];
  for (int i = 1; i < ${Hu}; i += 1) {
    if (i == idx) tint = uPal[i];
  }
  vTint = tint;
  vDepth = depthOf(p);
  gl_Position = projectP(p);
}
`,O1=`
precision highp float;
uniform float uOpacity;
${hm}varying vec3 vTint;
varying float vDepth;
void main(){
  float a = uOpacity * clarity(vDepth);
  gl_FragColor = vec4(vTint * a, a);
}
`,P1=`
precision highp float;

attribute vec3 a_pos;
attribute vec2 a_uv;

uniform float uRoll, uOffY;
uniform vec2 uRepeat;

varying vec2 vUv;
varying float vDepth;
${dm}
void main(){
  float c = cos(uRoll), s = sin(uRoll);
  vec3 p = steerP(vec3(a_pos.x * c - a_pos.y * s, a_pos.x * s + a_pos.y * c, a_pos.z));
  vUv = a_uv * uRepeat + vec2(0.0, uOffY);
  vDepth = depthOf(p);
  gl_Position = projectP(p);
}
`,F1=`
precision highp float;
uniform sampler2D uTex;
uniform vec3 uTint;
uniform float uOpacity;
${hm}varying vec2 vUv;
varying float vDepth;
void main(){
  float m = texture2D(uTex, vUv).r;
  float a = m * uOpacity * clarity(vDepth);
  gl_FragColor = vec4(uTint * a, a);
}
`,I1=`
precision highp float;

attribute vec2 a_corner;

uniform float uHalf, uZ;

varying vec2 vUv;
varying float vDepth;
${dm}
void main(){
  vec3 p = steerP(vec3(a_corner * uHalf, uZ));
  vUv = a_corner * 0.5 + 0.5;
  vDepth = depthOf(p);
  gl_Position = projectP(p);
}
`,B1=`
precision highp float;
uniform sampler2D uTex;
uniform vec3 uTint;
uniform float uOpacity;
${hm}varying vec2 vUv;
varying float vDepth;
void main(){
  float m = texture2D(uTex, vUv).r;
  float a = m * uOpacity * clarity(vDepth);
  gl_FragColor = vec4(uTint * a, a);
}
`;function J_(o,t,i){const r=o.createShader(t);return r?(o.shaderSource(r,i),o.compileShader(r),o.getShaderParameter(r,o.COMPILE_STATUS)?r:(console.error("Hyperspace shader:",o.getShaderInfoLog(r)),o.deleteShader(r),null)):null}function Ph(o,t,i){const r=J_(o,o.VERTEX_SHADER,t),l=J_(o,o.FRAGMENT_SHADER,i);if(!r||!l)return null;const u=o.createProgram();return u?(o.attachShader(u,r),o.attachShader(u,l),o.linkProgram(u),o.getProgramParameter(u,o.LINK_STATUS)?u:(console.error("Hyperspace link:",o.getProgramInfoLog(u)),null)):null}function Fh(o,t){const i={};return r=>(r in i||(i[r]=o.getUniformLocation(t,r)),i[r])}function Al(o,t){if(!o)return t;const i=String(o).trim();if(i.charAt(0)==="#"){let l=i.slice(1);if((l.length===3||l.length===4)&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]+(l.length===4?l[3]+l[3]:"")),l.length>=6){const u=parseInt(l.slice(0,2),16),d=parseInt(l.slice(2,4),16),h=parseInt(l.slice(4,6),16),p=l.length>=8?parseInt(l.slice(6,8),16)/255:1;if(!isNaN(u)&&!isNaN(d)&&!isNaN(h))return[u/255,d/255,h/255,p]}return t}const r=i.match(/[\d.]+/g);return r&&r.length>=3?[Math.min(255,parseFloat(r[0]))/255,Math.min(255,parseFloat(r[1]))/255,Math.min(255,parseFloat(r[2]))/255,r.length>=4?Math.min(1,parseFloat(r[3])):1]:t}function z1(o,t,i,r){const l=Array.isArray(o)?o.filter(h=>typeof h=="string"&&h.length>0):[];if(l.length>0){const h=Math.min(Hu,l.length);for(let p=0;p<h;p+=1){const m=Al(l[p],[1,1,1,1]);r[p*3]=m[0],r[p*3+1]=m[1],r[p*3+2]=m[2]}return h}const u=Al(t,[1,1,1,1]),d=Al(i,[.376,.647,.98,1]);for(let h=0;h<Oh.length;h+=1){const p=Oh[h];r[h*3]=u[0]+(d[0]-u[0])*p,r[h*3+1]=u[1]+(d[1]-u[1])*p,r[h*3+2]=u[2]+(d[2]-u[2])*p}return Oh.length}function fi(o,t){return typeof o=="number"&&isFinite(o)?o:t}function Pi(o,t,i){return o<t?t:o>i?i:o}function H1(o){let t=o>>>0;return()=>{t=t+1831565813>>>0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function G1(o){const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d");if(!r)return i;r.fillStyle="#000000",r.fillRect(0,0,512,512);for(let l=0;l<240;l+=1){const u=o()*512,d=o()*3+.6,h=o()*320+90,p=o()*512,m=o()*.45+.08;for(const S of[-512,0,512]){const _=r.createLinearGradient(0,p+S,0,p+S+h);_.addColorStop(0,"rgba(255,255,255,0)"),_.addColorStop(.5,"rgba(255,255,255,"+m.toFixed(3)+")"),_.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=_,r.fillRect(u,p+S,d,h)}}return i}function V1(){const t=document.createElement("canvas");t.width=256,t.height=256;const i=t.getContext("2d");if(!i)return t;i.fillStyle="#000000",i.fillRect(0,0,256,256);const r=i.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.18,"rgba(255,255,255,0.55)"),r.addColorStop(.45,"rgba(255,255,255,0.16)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(0,0,256,256),t}function $_(o,t,i){const r=o.createTexture();if(!r)return null;o.bindTexture(o.TEXTURE_2D,r),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,1),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,t),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,0);const l=i?o.REPEAT:o.CLAMP_TO_EDGE;return o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,l),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,l),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),i?(o.generateMipmap(o.TEXTURE_2D),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR)):o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),r}const k1={length:29,spread:135,opacity:100},X1={opacity:100,roll:90,glow:"#7464FFE6"},W1={steer:200,boost:300,damping:100};function q1(o){const{style:t,background:i="#01020A",colors:r=["#0047FF","#FFF000","#FF6800","#00FFA8","#C7D2FE"],baseColor:l="#FFFFFF",accentColor:u="#60A5FA",density:d=880,speed:h=35,perspective:p=104,streaks:m,tunnel:S,pointer:_,width:v,height:E}=o,A={...k1,...m||{}},P={...X1,...S||{}},T={...W1,..._||{}},y=Ge.useRef(null),b=Ge.useRef({w:0,h:0});b.current={w:fi(v,0),h:fi(E,0)};const Z=Ge.useRef({});Z.current={bg:i,pal:r,base:l,accent:u,streakCount:Math.round(Pi(fi(d,1200),100,Dh)),flow:M1*(Pi(fi(h,50),0,100)/50),fov:Pi(fi(p,75),10,120),len:Pi(fi(A.length,100),10,400)/100,spread:Pi(fi(A.spread,100),10,300)/100*_1,streakOpacity:Pi(fi(A.opacity,60),0,100)/100*y1,wallOpacity:Pi(fi(P.opacity,90),0,100)/100*R1,roll:Pi(fi(P.roll,6),-90,90)*Math.PI/180,glow:P.glow,steer:Pi(fi(T.steer,100),0,200)/100*(U1*Math.PI/180),boost:Pi(fi(T.boost,100),0,300)/100,damping:Pi(fi(T.damping,30),1,100)};const U=Ge.useRef({x:0,y:0,down:!1});return Ge.useEffect(()=>{const C=y.current;if(!C)return;const R=C.getContext("webgl",{alpha:!1,antialias:!0,depth:!1,powerPreference:"high-performance"});if(!R){console.error("Hyperspace: WebGL unavailable");return}const z=Ph(R,L1,O1),g=Ph(R,P1,F1),O=Ph(R,I1,B1);if(!z||!g||!O)return;const I=Fh(R,z),F=Fh(R,g),X=Fh(R,O),Y=H1(6221079),G=6,W=new Float32Array(Dh*2*G);for(let pt=0;pt<Dh;pt+=1){const st=Y()*Math.PI*2,$e=Y(),q=(Y()-.5)*2e3,Fe=Y()*S1+x1,nt=Y(),w=Math.cos(st),M=Math.sin(st);for(let K=0;K<2;K+=1){const Q=(pt*2+K)*G;W[Q]=w,W[Q+1]=M,W[Q+2]=$e,W[Q+3]=q,W[Q+4]=K===0?0:Fe,W[Q+5]=nt}}const L=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,L),R.bufferData(R.ARRAY_BUFFER,W,R.STATIC_DRAW);const k=5,ie=Uh*6,te=new Float32Array(ie*k);{const st=(j_-Z_)/E1,$e=K_+0*Q_,q=K_+st*Q_;let Fe=0;const nt=(w,M)=>{const K=w/Uh,Q=K*Math.PI*2,fe=M?q:$e;te[Fe]=fe*Math.sin(Q),te[Fe+1]=-fe*Math.cos(Q),te[Fe+2]=M?j_:Z_,te[Fe+3]=K,te[Fe+4]=M?st:0,Fe+=k};for(let w=0;w<Uh;w+=1)nt(w,!1),nt(w+1,!1),nt(w+1,!0),nt(w,!1),nt(w+1,!0),nt(w,!0)}const ne=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,ne),R.bufferData(R.ARRAY_BUFFER,te,R.STATIC_DRAW);const ae=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,ae),R.bufferData(R.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),R.STATIC_DRAW);const Oe=$_(R,G1(Y),!0),Le=$_(R,V1(),!1),H=(pt,st,$e,q)=>{let Fe=0;const nt=[];for(let w=0;w<st.length;w+=1){const M=R.getAttribLocation(pt,st[w]);M>=0&&(R.enableVertexAttribArray(M),R.vertexAttribPointer(M,$e[w],R.FLOAT,!1,q*4,Fe*4),nt.push(M)),Fe+=$e[w]}return nt},de=new Float32Array(Hu*3);let Ce=0,j=performance.now(),le=0,Me=0,Ne=0,Se=0,Ae=0,et=0,ze=1;const rt=pt=>{const st=Math.min(.05,(pt-j)/1e3);j=pt;const $e=Z.current,q=U.current,Fe=1-Math.exp(-$e.damping*.12*st),nt=q.down?1+$e.boost:1;ze+=(nt-ze)*Fe,Ae+=(-q.x*$e.steer-Ae)*Fe,et+=(q.y*$e.steer-et)*Fe;const w=$e.flow*ze*st;le=(le+w)%Y_,Se=(Se-w*A1)%1,Ne=(Ne+$e.roll*st)%(Math.PI*2),Me+=st;const M=Math.min(window.devicePixelRatio||1,p1),K=b.current.w||C.clientWidth||1200,Q=b.current.h||C.clientHeight||800,fe=Math.max(1,Math.round(K*M)),Re=Math.max(1,Math.round(Q*M));(C.width!==fe||C.height!==Re)&&(C.width=fe,C.height=Re),R.viewport(0,0,fe,Re);const we=Al($e.bg,[.004,.008,.039,1]),ce=Al($e.glow,[.859,.918,.996,.9]),ve=z1($e.pal,$e.base,$e.accent,de),Ue=ve>1?3:0;R.clearColor(we[0],we[1],we[2],1),R.clear(R.COLOR_BUFFER_BIT),R.disable(R.DEPTH_TEST),R.disable(R.CULL_FACE),R.enable(R.BLEND),R.blendFunc(R.ONE,R.ONE);const Qe=1/Math.tan($e.fov*Math.PI/180/2),Ie=fe/Math.max(1,Re),He=(su+ru)/(ru-su),Ve=2*su*ru/(ru-su),ft=$=>{R.uniform2f($("uSteer"),Ae,et),R.uniform1f($("uFocal"),Qe),R.uniform1f($("uAspect"),Ie),R.uniform1f($("uZA"),He),R.uniform1f($("uZB"),Ve),R.uniform1f($("uFog"),g1)};if(Oe){R.useProgram(g),R.bindBuffer(R.ARRAY_BUFFER,ne);const $=H(g,["a_pos","a_uv"],[3,2],k);ft(F),R.activeTexture(R.TEXTURE0),R.bindTexture(R.TEXTURE_2D,Oe),R.uniform1i(F("uTex"),0),R.uniform1f(F("uRoll"),Ne),R.uniform1f(F("uOffY"),Se),R.uniform2f(F("uRepeat"),T1,b1),R.uniform1f(F("uOpacity"),$e.wallOpacity),R.uniform3f(F("uTint"),de[0]+(de[Ue]-de[0])*Lh,de[1]+(de[Ue+1]-de[1])*Lh,de[2]+(de[Ue+2]-de[2])*Lh),R.drawArrays(R.TRIANGLES,0,ie);for(const Be of $)R.disableVertexAttribArray(Be)}if(Le&&ce[3]>0){R.useProgram(O),R.bindBuffer(R.ARRAY_BUFFER,ae);const $=H(O,["a_corner"],[2],2);ft(X),R.activeTexture(R.TEXTURE0),R.bindTexture(R.TEXTURE_2D,Le),R.uniform1i(X("uTex"),0),R.uniform1f(X("uHalf"),w1*(1+Math.sin(Me*D1)*N1)),R.uniform1f(X("uZ"),C1),R.uniform1f(X("uOpacity"),ce[3]),R.uniform3f(X("uTint"),ce[0],ce[1],ce[2]),R.drawArrays(R.TRIANGLES,0,6);for(const Be of $)R.disableVertexAttribArray(Be)}R.useProgram(z),R.bindBuffer(R.ARRAY_BUFFER,L);const mt=H(z,["a_dir","a_rnorm","a_z0","a_off","a_pick"],[2,1,1,1,1],G);ft(I),R.uniform1f(I("uFlow"),le),R.uniform1f(I("uSpan"),Y_),R.uniform1f(I("uResetZ"),mS),R.uniform1f(I("uRadiusMin"),v1),R.uniform1f(I("uSpread"),$e.spread),R.uniform1f(I("uLen"),$e.len*Math.sqrt(ze)),R.uniform1f(I("uOpacity"),$e.streakOpacity),R.uniform3fv(I("uPal[0]"),de),R.uniform1i(I("uPalN"),ve),R.drawArrays(R.LINES,0,$e.streakCount*2);for(const $ of mt)R.disableVertexAttribArray($);Ce=requestAnimationFrame(rt)},Ye=pt=>{const st=C.getBoundingClientRect();st.width<=0||st.height<=0||(U.current.x=(pt.clientX-st.left)/st.width*2-1,U.current.y=1-(pt.clientY-st.top)/st.height*2)},ue=()=>{U.current.x=0,U.current.y=0,U.current.down=!1},Pe=pt=>{Ye(pt),U.current.down=!0},ht=()=>{U.current.down=!1};return C.addEventListener("pointermove",Ye),C.addEventListener("pointerenter",Ye),C.addEventListener("pointerleave",ue),C.addEventListener("pointerdown",Pe),window.addEventListener("pointerup",ht),window.addEventListener("pointercancel",ht),Ce=requestAnimationFrame(rt),()=>{cancelAnimationFrame(Ce),C.removeEventListener("pointermove",Ye),C.removeEventListener("pointerenter",Ye),C.removeEventListener("pointerleave",ue),C.removeEventListener("pointerdown",Pe),window.removeEventListener("pointerup",ht),window.removeEventListener("pointercancel",ht)}},[]),B.jsx("div",{style:{position:"relative",overflow:"hidden",background:i,isolation:"isolate",minWidth:1200,minHeight:800,width:typeof v=="number"&&v>0?v:"100%",height:typeof E=="number"&&E>0?E:"100%",...t},children:B.jsx("canvas",{ref:y,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}const Ih=3,Y1=[0,0,1],Bh=1,zh=1e3,Z1=50,j1=.05,K1=2,Hh=8,Q1={cameraHeight:6,perspective:60},J1={layers:2,depth:100,falloff:2},$1={wave:100,ripple:100},eT={hoverSpeed:160,clickPulse:160,transition:{type:"spring",duration:.6}};function Ar(o,t,i){return o<t?t:o>i?i:o}function ex(o,t){if(!o)return t;const i=o.trim();if(i[0]==="#"){const u=i.slice(1),d=u.length===3||u.length===4,h=u.length===6||u.length===8;if(!d&&!h)return t;const p=v=>parseInt(d?u[v]+u[v]:u.slice(v*2,v*2+2),16),m=p(0),S=p(1),_=p(2);return[m,S,_].some(Number.isNaN)?t:[m/255,S/255,_/255]}const r=i.match(/rgba?\(([^)]+)\)/i);if(r){const u=r[1].split(/[,/\s]+/).map(d=>parseFloat(d));if(u.length>=3&&u.slice(0,3).every(d=>!Number.isNaN(d)))return[u[0]/255,u[1]/255,u[2]/255]}const l=i.match(/hsla?\(([^)]+)\)/i);if(l){const u=l[1].split(/[,/\s]+/).map(d=>parseFloat(d));if(u.length>=3&&u.slice(0,3).every(d=>!Number.isNaN(d))){const d=(u[0]%360+360)%360/360,h=Ar(u[1]/100,0,1),p=Ar(u[2]/100,0,1),m=(1-Math.abs(2*p-1))*h,S=m*(1-Math.abs(d*6%2-1)),_=p-m/2,v=Math.floor(d*6)%6,E=v===0?[m,S,0]:v===1?[S,m,0]:v===2?[0,m,S]:v===3?[0,S,m]:v===4?[S,0,m]:[m,0,S];return[E[0]+_,E[1]+_,E[2]+_]}}return t}function tT(o,t){const i=1/Math.tan(o*Math.PI/360),r=1/(Bh-zh),l=new Float32Array(16);return l[0]=i/t,l[5]=i,l[10]=(zh+Bh)*r,l[11]=-1,l[14]=2*zh*Bh*r,l}function nT(o,t,i){let r=o[0]-t[0],l=o[1]-t[1],u=o[2]-t[2],d=Math.hypot(r,l,u)||1;r/=d,l/=d,u/=d;let h=i[1]*u-i[2]*l,p=i[2]*r-i[0]*u,m=i[0]*l-i[1]*r;d=Math.hypot(h,p,m)||1,h/=d,p/=d,m/=d;const S=l*m-u*p,_=u*h-r*m,v=r*p-l*h,E=new Float32Array(16);return E[0]=h,E[1]=S,E[2]=r,E[4]=p,E[5]=_,E[6]=l,E[8]=m,E[9]=v,E[10]=u,E[12]=-(h*o[0]+p*o[1]+m*o[2]),E[13]=-(S*o[0]+_*o[1]+v*o[2]),E[14]=-(r*o[0]+l*o[1]+u*o[2]),E[15]=1,E}function iT(o,t){const i=new Float32Array(16);for(let r=0;r<4;r++)for(let l=0;l<4;l++)i[r*4+l]=o[l]*t[r*4]+o[4+l]*t[r*4+1]+o[8+l]*t[r*4+2]+o[12+l]*t[r*4+3];return i}function aT(o){const t=Math.cos(o),i=Math.sin(o),r=new Float32Array(16);return r[0]=t,r[2]=-i,r[5]=1,r[8]=i,r[10]=t,r[15]=1,r}function rT(){const o=[],t=[],i=[],r=[{n:[1,0,0],u:[0,0,-1],v:[0,1,0]},{n:[-1,0,0],u:[0,0,1],v:[0,1,0]},{n:[0,1,0],u:[1,0,0],v:[0,0,1]},{n:[0,-1,0],u:[1,0,0],v:[0,0,-1]},{n:[0,0,1],u:[1,0,0],v:[0,1,0]},{n:[0,0,-1],u:[-1,0,0],v:[0,1,0]}];for(const l of r){const u=o.length/3;for(const[d,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])o.push((l.n[0]+d*l.u[0]+h*l.v[0])*.5,(l.n[1]+d*l.u[1]+h*l.v[1])*.5,(l.n[2]+d*l.u[2]+h*l.v[2])*.5),t.push((d+1)*.5,(h+1)*.5);i.push(u,u+1,u+2,u,u+2,u+3)}return{position:new Float32Array(o),uv:new Float32Array(t),index:new Uint16Array(i)}}function sT(o,t,i){const r=new Float32Array(o*t*i*3);let l=0;for(let u=0;u<o;u++)for(let d=0;d<i;d++)for(let h=0;h<t;h++)r[l++]=u,r[l++]=h,r[l++]=d;return r}const oT=`#version 300 es
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
`,lT=`#version 300 es
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
`;function cT(o){const{background:t="#000000",color:i="#FFFFFF",colors:r=["#8B00FF","#FF00C9"],colorSpread:l=8,columns:u=93,rows:d=36,thickness:h=3,speed:p=38,spin:m=15,distance:S=34,camera:_,hole:v,waveGroup:E,interaction:A,style:P}=o,T={...Q1,..._??{}},y={...J1,...v??{}},b={...$1,...E??{}},Z={...eT,...A??{}},U=Ge.useRef(null),C=Ge.useRef(null),R=Ge.useRef(0),z=Ge.useRef(0),g=Ge.useRef(0),O=Ge.useRef({background:t,color:i,colors:r,colorSpread:l,columns:u,rows:d,thickness:h,speed:p,spin:m,distance:S,cam:T,hol:y,wav:b,int:Z});O.current={background:t,color:i,colors:r,colorSpread:l,columns:u,rows:d,thickness:h,speed:p,spin:m,distance:S,cam:T,hol:y,wav:b,int:Z};const I=Ge.useRef({rows:-1,columns:-1,layers:-1});Ge.useEffect(()=>{const G=C.current,W=U.current;if(!G||!W)return;const L=G.getContext("webgl2",{alpha:!0,antialias:!0,premultipliedAlpha:!0});if(!L)return;const k=($e,q)=>{const Fe=L.createShader($e);return Fe?(L.shaderSource(Fe,q),L.compileShader(Fe),L.getShaderParameter(Fe,L.COMPILE_STATUS)?Fe:(console.error("InfiniteHole shader:",L.getShaderInfoLog(Fe)),L.deleteShader(Fe),null)):null},ie=k(L.VERTEX_SHADER,oT),te=k(L.FRAGMENT_SHADER,lT);if(!ie||!te)return;const ne=L.createProgram();if(!ne)return;if(L.attachShader(ne,ie),L.attachShader(ne,te),L.linkProgram(ne),!L.getProgramParameter(ne,L.LINK_STATUS)){console.error("InfiniteHole link:",L.getProgramInfoLog(ne));return}L.useProgram(ne);const ae={projection:L.getUniformLocation(ne,"uProjection"),modelView:L.getUniformLocation(ne,"uModelView"),arc:L.getUniformLocation(ne,"uArc"),shift:L.getUniformLocation(ne,"uShift"),phase:L.getUniformLocation(ne,"uPhase"),seam:L.getUniformLocation(ne,"uSeam"),depth:L.getUniformLocation(ne,"uDepth"),falloff:L.getUniformLocation(ne,"uFalloff"),wave:L.getUniformLocation(ne,"uWave"),ripple:L.getUniformLocation(ne,"uRipple"),colors:L.getUniformLocation(ne,"uColors[0]"),colorCount:L.getUniformLocation(ne,"uColorCount"),colorSpread:L.getUniformLocation(ne,"uColorSpread"),background:L.getUniformLocation(ne,"uBackground"),thickness:L.getUniformLocation(ne,"uThickness")},Oe=rT(),Le=L.createVertexArray();L.bindVertexArray(Le);const H=L.createBuffer();L.bindBuffer(L.ARRAY_BUFFER,H),L.bufferData(L.ARRAY_BUFFER,Oe.position,L.STATIC_DRAW);const de=L.getAttribLocation(ne,"aPosition");L.enableVertexAttribArray(de),L.vertexAttribPointer(de,3,L.FLOAT,!1,0,0);const Ce=L.createBuffer();L.bindBuffer(L.ARRAY_BUFFER,Ce),L.bufferData(L.ARRAY_BUFFER,Oe.uv,L.STATIC_DRAW);const j=L.getAttribLocation(ne,"aUv");L.enableVertexAttribArray(j),L.vertexAttribPointer(j,2,L.FLOAT,!1,0,0);const le=L.createBuffer();L.bindBuffer(L.ARRAY_BUFFER,le);const Me=L.getAttribLocation(ne,"aRcl");L.enableVertexAttribArray(Me),L.vertexAttribPointer(Me,3,L.FLOAT,!1,0,0),L.vertexAttribDivisor(Me,1);const Ne=L.createBuffer();L.bindBuffer(L.ELEMENT_ARRAY_BUFFER,Ne),L.bufferData(L.ELEMENT_ARRAY_BUFFER,Oe.index,L.STATIC_DRAW);let Se=0;const Ae=($e,q,Fe)=>{const nt=sT($e,q,Fe);L.bindBuffer(L.ARRAY_BUFFER,le),L.bufferData(L.ARRAY_BUFFER,nt,L.STATIC_DRAW),Se=$e*q*Fe,I.current={rows:$e,columns:q,layers:Fe}};L.enable(L.DEPTH_TEST),L.clearColor(0,0,0,0);let et=0,ze=0;const rt=()=>{const $e=G.clientWidth||1,q=G.clientHeight||1,Fe=Math.min(window.devicePixelRatio||1,K1),nt=Math.max(1,Math.round($e*Fe)),w=Math.max(1,Math.round(q*Fe));(G.width!==nt||G.height!==w)&&(G.width=nt,G.height=w),et=$e,ze=q,L.viewport(0,0,nt,w)};rt();const Ye=new ResizeObserver(rt);Ye.observe(G);let ue=0,Pe=performance.now(),ht=0,pt=0;const st=$e=>{var ke;const q=Ar(($e-Pe)/1e3,0,j1);Pe=$e;const Fe=O.current,nt=typeof((ke=Fe.int.transition)==null?void 0:ke.duration)=="number"&&Fe.int.transition.duration>0?Fe.int.transition.duration:.4;z.current+=(R.current-z.current)*(1-Math.exp(-q/(nt*.5))),g.current*=Math.exp(-q/(nt*.6)),g.current<.001&&(g.current=0);const w=z.current,M=g.current,K=1+w*(Ar(Fe.int.hoverSpeed,0,400)/100-1),Q=1+M*(Ar(Fe.int.clickPulse,0,400)/100-1),fe=Math.max(3,Math.round(Fe.columns)),Re=Math.max(1,Math.round(Fe.rows)),we=Math.max(1,Math.round(Fe.hol.layers)),ce=I.current;(ce.rows!==Re||ce.columns!==fe||ce.layers!==we)&&Ae(Re,fe,we),ht=(ht+q*(Fe.speed*K/Z1))%1,pt=(pt+q*(Fe.spin*Math.PI/180))%(Math.PI*2);const ve=2*Math.PI/fe,Ue=Ih*ve/(1+ve),Qe=Ih-ht*Ue,Ie=[0,Fe.cam.cameraHeight,Fe.distance-w*(Fe.distance*.15)],He=nT(Ie,Y1,[0,1,0]),Ve=iT(He,aT(pt)),ft=tT(Ar(Fe.cam.perspective,5,175),Math.max(et,1)/Math.max(ze,1)),mt=[Fe.color,...Array.isArray(Fe.colors)?Fe.colors:[]].slice(0,Hh),$=Math.max(1,mt.length),Be=new Float32Array(Hh*3);for(let Xe=0;Xe<Hh;Xe++){const De=ex(mt[Xe%$],[1,1,1]);Be[Xe*3]=De[0],Be[Xe*3+1]=De[1],Be[Xe*3+2]=De[2]}const Ee=ex(Fe.background,[0,0,0]);L.useProgram(ne),L.bindVertexArray(Le),L.uniformMatrix4fv(ae.projection,!1,ft),L.uniformMatrix4fv(ae.modelView,!1,Ve),L.uniform1f(ae.arc,ve),L.uniform1f(ae.shift,Qe),L.uniform1f(ae.phase,ht),L.uniform1f(ae.seam,(Ih-Qe)*ve),L.uniform1f(ae.depth,Math.max(0,Fe.hol.depth)/100*Q),L.uniform1f(ae.falloff,Fe.hol.falloff),L.uniform1f(ae.wave,Math.max(0,Fe.wav.wave)/100*Q),L.uniform1f(ae.ripple,Math.max(0,Fe.wav.ripple)/100),L.uniform3fv(ae.colors,Be),L.uniform1i(ae.colorCount,$),L.uniform1f(ae.colorSpread,Math.max(1e-4,Fe.colorSpread)),L.uniform3f(ae.background,Ee[0],Ee[1],Ee[2]),L.uniform1f(ae.thickness,Ar(Ar(Fe.thickness,0,49)/100*(1+M*.4),0,.5)),L.clear(L.COLOR_BUFFER_BIT|L.DEPTH_BUFFER_BIT),L.drawElementsInstanced(L.TRIANGLES,Oe.index.length,L.UNSIGNED_SHORT,0,Se),ue=requestAnimationFrame(st)};return ue=requestAnimationFrame(st),()=>{cancelAnimationFrame(ue),Ye.disconnect(),I.current={rows:-1,columns:-1,layers:-1}}},[]);const F=()=>{R.current=1},X=()=>{R.current=0},Y=()=>{g.current=1};return B.jsx("div",{ref:U,onPointerEnter:F,onPointerLeave:X,onPointerDown:Y,style:{minWidth:1200,minHeight:800,width:"100%",height:"100%",position:"relative",overflow:"hidden",cursor:"pointer",background:t,...P},children:B.jsx("canvas",{ref:C,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}const wn={colorA:"#7B6CFF",colorB:"#37E5C8",count:12,scale:8,size:6,trail:16,speed:20,followPointer:!0,strength:20};function Jr(o,t,i,r){const l=typeof o=="number"&&isFinite(o)?o:r;return Math.max(t,Math.min(i,l))}function tx(o){const t=Jr(o.trail,1,20,wn.trail);return{count:Math.round(90+Jr(o.count,1,20,wn.count)*65),scale:.09+Jr(o.scale,1,20,wn.scale)*.055,size:.4+Jr(o.size,1,20,wn.size)*.16,fade:Math.max(.02,.18*Math.pow(.8907,t-1)),speed:12+Jr(o.speed,0,20,wn.speed)*9,reach:90+Jr(o.strength,1,20,wn.strength)*26,whirl:.35+Jr(o.strength,1,20,wn.strength)*.032}}function nx(o){const t=(o||"").replace("#","").trim();return t.length===3?[parseInt(t[0]+t[0],16),parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16)]:t.length>=6?[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]:[128,128,128]}function uT(o,t,i,r){const l=Math.round(o[0]+(t[0]-o[0])*i),u=Math.round(o[1]+(t[1]-o[1])*i),d=Math.round(o[2]+(t[2]-o[2])*i);return"rgba("+l+","+u+","+d+","+r+")"}function ou(o,t){const i=Math.sin(o*127.1+t*311.7)*43758.5453;return i-Math.floor(i)}function ix(o,t){const i=Math.floor(o),r=Math.floor(t),l=o-i,u=t-r,d=l*l*(3-2*l),h=u*u*(3-2*u),p=ou(i,r),m=ou(i+1,r),S=ou(i,r+1),_=ou(i+1,r+1);return(p+(m-p)*d)*(1-h)+(S+(_-S)*d)*h}class fT{constructor(t,i){Mt(this,"container");Mt(this,"canvas");Mt(this,"ctx");Mt(this,"cfg");Mt(this,"motes",[]);Mt(this,"width",0);Mt(this,"height",0);Mt(this,"dpr",1);Mt(this,"time",0);Mt(this,"frameId",0);Mt(this,"lastT",0);Mt(this,"disposed",!1);Mt(this,"px",-1);Mt(this,"py",-1);Mt(this,"tx",-1);Mt(this,"ty",-1);Mt(this,"grip",0);Mt(this,"gripTarget",0);Mt(this,"onEnter",()=>{this.gripTarget=1});Mt(this,"onLeave",()=>{this.gripTarget=0});Mt(this,"onMove",t=>{const i=this.container.getBoundingClientRect();!i.width||!i.height||(this.tx=t.clientX-i.left,this.ty=t.clientY-i.top,this.px<0&&(this.px=this.tx,this.py=this.ty))});this.container=t,this.cfg=i,this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.inset="0",this.canvas.style.width="100%",this.canvas.style.height="100%",t.appendChild(this.canvas);const r=this.canvas.getContext("2d");if(!r)throw new Error("no 2d context");this.ctx=r,t.addEventListener("pointerenter",this.onEnter),t.addEventListener("pointerleave",this.onLeave),t.addEventListener("pointercancel",this.onLeave),t.addEventListener("pointermove",this.onMove)}spawn(t){t.x=Math.random()*this.width,t.y=Math.random()*this.height,t.span=2+Math.random()*6,t.life=t.span,t.tint=Math.random(),t.weight=.35+Math.random()*Math.random()*1.9,t.pace=.6+Math.random()*.8}build(){const t=tx(this.cfg);this.motes=[];for(let i=0;i<t.count;i++){const r={x:0,y:0,life:0,span:1,tint:0,weight:1,pace:1};this.spawn(r),r.life=Math.random()*r.span,this.motes.push(r)}}start(){this.lastT=performance.now();const t=()=>{this.frameId=requestAnimationFrame(t),this.step()};t()}setSize(t,i){if(this.disposed||t<=0||i<=0)return;this.dpr=Math.min(window.devicePixelRatio||1,2);const r=this.width===0;this.width=t,this.height=i,this.canvas.width=Math.round(t*this.dpr),this.canvas.height=Math.round(i*this.dpr),this.ctx.setTransform(this.dpr,0,0,this.dpr,0,0),(r||this.motes.length===0)&&this.build()}updateConfig(t){if(this.disposed)return;const i=this.cfg;this.cfg=t,i.count!==t.count&&this.build()}step(){if(this.disposed||this.width<=0||this.motes.length===0)return;const t=performance.now();let i=(t-this.lastT)/1e3;this.lastT=t,(!isFinite(i)||i<0)&&(i=0);const r=i>.4;i>.05&&(i=.05);const l=tx(this.cfg),u=this.ctx;if(this.time+=i,r&&u.clearRect(0,0,this.width,this.height),this.px>=0){const v=1-Math.exp(-i*12);this.px+=(this.tx-this.px)*v,this.py+=(this.ty-this.py)*v}const d=this.cfg.followPointer&&this.px>=0?this.gripTarget:0;this.grip+=(d-this.grip)*(1-Math.exp(-i*4));const h=Math.min(.6,l.fade*i*60);u.globalCompositeOperation="destination-out",u.fillStyle="rgba(0,0,0,"+h+")",u.fillRect(0,0,this.width,this.height),u.globalCompositeOperation="source-over",u.lineCap="round";const p=l.reach,m=p*p,S=nx(this.cfg.colorA||wn.colorA),_=nx(this.cfg.colorB||wn.colorB);for(let v=0;v<this.motes.length;v++){const E=this.motes[v],A=ix(E.x*l.scale*.01+this.time*.12,E.y*l.scale*.01-this.time*.09),P=ix(E.x*l.scale*.031-this.time*.2,E.y*l.scale*.031+this.time*.16);let T=(A*.78+P*.22)*Math.PI*4;const y=l.speed*E.pace;if(this.grip>.01){const R=this.px-E.x,z=this.py-E.y,g=R*R+z*z;if(g<m&&g>1){const O=Math.sqrt(g),I=(1-O/p)*(1-O/p)*this.grip,F=Math.PI*(.5-.16*(O/p));let Y=Math.atan2(z,R)-F-T;for(;Y>Math.PI;)Y-=Math.PI*2;for(;Y<-Math.PI;)Y+=Math.PI*2;T+=Y*Math.min(1,I*l.whirl*2.2)}}const b=E.x,Z=E.y;if(E.x+=Math.cos(T)*y*i,E.y+=Math.sin(T)*y*i,E.life-=i,E.life<=0||E.x<-10||E.x>this.width+10||E.y<-10||E.y>this.height+10){this.spawn(E);continue}const U=E.life/E.span,C=Math.min(1,Math.min(U,1-U)*6);u.strokeStyle=uT(S,_,E.tint,.2+C*.55),u.lineWidth=l.size*E.weight,u.beginPath(),u.moveTo(b,Z),u.lineTo(E.x,E.y),u.stroke()}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frameId),this.container.removeEventListener("pointerenter",this.onEnter),this.container.removeEventListener("pointerleave",this.onLeave),this.container.removeEventListener("pointercancel",this.onLeave),this.container.removeEventListener("pointermove",this.onMove),this.canvas.parentNode===this.container&&this.container.removeChild(this.canvas)}}function gS(o){const{colorA:t=wn.colorA,colorB:i=wn.colorB,count:r=wn.count,scale:l=wn.scale,size:u=wn.size,trail:d=wn.trail,speed:h=wn.speed,followPointer:p=wn.followPointer,strength:m=wn.strength,style:S}=o,_=Ge.useRef(null),v=Ge.useRef(null),E=Ge.useRef(null);return E.current={colorA:t,colorB:i,count:r,scale:l,size:u,trail:d,speed:h,followPointer:p,strength:m},Ge.useEffect(()=>{const A=_.current;if(!A)return;let P;try{P=new fT(A,E.current)}catch{return}v.current=P,P.setSize(A.clientWidth,A.clientHeight),P.start();const T=new ResizeObserver(()=>{P.setSize(A.clientWidth,A.clientHeight)});return T.observe(A),()=>{T.disconnect(),P.dispose(),v.current=null}},[]),Ge.useEffect(()=>{var A;(A=v.current)==null||A.updateConfig(E.current)},[t,i,r,l,u,d,h,p,m]),B.jsx("div",{ref:_,role:"img","aria-label":"Particles tracing ribbons through a field of angles",style:{position:"relative",width:"100%",height:"100%",minWidth:120,minHeight:120,overflow:"hidden",...S}})}gS.displayName="Flow Ribbons";const ax=8,dT=3,hT=-1,pT=.25,rx=3,vS=30,pm=1e3,mT=1e5,sx=2,gT=1.5,vT=.08,_T=.02,xT=60,ST=3,yT=8,ra=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
    v_uv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
}`,ma=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 v_uv;
`,MT=ma+`
uniform sampler2D u_state;
uniform sampler2D u_velocity;
uniform vec2 u_dimensions;
uniform float u_dt;
out vec2 out_state;
void main() {
    out_state = texture(u_state, v_uv - texture(u_velocity, v_uv).xy * u_dt / u_dimensions).xy;
}`,ET=ma+`
uniform sampler2D u_velocity;
uniform vec2 u_aspect;
uniform float u_scale;
uniform float u_time;
uniform float u_amp;
uniform float u_drag;
out vec2 out_velocity;

float h21(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float vn2(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), u.x),
               mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
    float a = 0.5;
    float s = 0.0;
    for (int i = 0; i < 3; i++) {
        s += a * vn2(p);
        p = p * 2.03 + 17.1;
        a *= 0.5;
    }
    return s;
}

float psi(vec2 p) {
    float w = 6.28318530718 / 60.0;
    vec2 d1 = 0.9 * vec2(cos(3.0 * w * u_time), sin(3.0 * w * u_time));
    vec2 d2 = 1.4 * vec2(cos(2.1 - 2.0 * w * u_time), sin(2.1 - 2.0 * w * u_time));
    return fbm(p + d1) - fbm(p * 1.31 + d2);
}

void main() {
    vec2 p = v_uv * u_aspect * u_scale;
    float e = 0.05;

    vec2 force = vec2(psi(p + vec2(0.0, e)) - psi(p - vec2(0.0, e)),
                      psi(p - vec2(e, 0.0)) - psi(p + vec2(e, 0.0))) / (2.0 * e);
    vec2 velocity = texture(u_velocity, v_uv).xy;
    velocity += force * u_amp;
    velocity *= max(0.0, 1.0 - u_drag);
    float velocityMag = length(velocity);
    out_velocity = velocity * (min(velocityMag, ${vS.toFixed(1)}) / max(velocityMag, 1e-6));
}`,TT=ma+`
uniform sampler2D u_vectorField;
uniform vec2 u_pxSize;
out float out_divergence;
void main() {
    float n = texture(u_vectorField, v_uv + vec2(0.0, u_pxSize.y)).y;
    float s = texture(u_vectorField, v_uv - vec2(0.0, u_pxSize.y)).y;
    float e = texture(u_vectorField, v_uv + vec2(u_pxSize.x, 0.0)).x;
    float w = texture(u_vectorField, v_uv - vec2(u_pxSize.x, 0.0)).x;
    out_divergence = 0.5 * (e - w + n - s);
}`,bT=ma+`
uniform float u_alpha;
uniform float u_beta;
uniform vec2 u_pxSize;
uniform sampler2D u_previousState;
uniform sampler2D u_divergence;
out float out_jacobi;
void main() {
    float n = texture(u_previousState, v_uv + vec2(0.0, u_pxSize.y)).x;
    float s = texture(u_previousState, v_uv - vec2(0.0, u_pxSize.y)).x;
    float e = texture(u_previousState, v_uv + vec2(u_pxSize.x, 0.0)).x;
    float w = texture(u_previousState, v_uv - vec2(u_pxSize.x, 0.0)).x;
    float d = texture(u_divergence, v_uv).x;
    out_jacobi = (n + s + e + w + u_alpha * d) * u_beta;
}`,AT=ma+`
uniform vec2 u_pxSize;
uniform sampler2D u_scalarField;
uniform sampler2D u_vectorField;
out vec2 out_result;
void main() {
    float n = texture(u_scalarField, v_uv + vec2(0.0, u_pxSize.y)).r;
    float s = texture(u_scalarField, v_uv - vec2(0.0, u_pxSize.y)).r;
    float e = texture(u_scalarField, v_uv + vec2(u_pxSize.x, 0.0)).r;
    float w = texture(u_scalarField, v_uv - vec2(u_pxSize.x, 0.0)).r;
    out_result = texture(u_vectorField, v_uv).xy - 0.5 * vec2(e - w, n - s);
}`,RT=ma+`
uniform sampler2D u_velocity;
uniform vec2 u_dimensions;
uniform vec2 u_p1;
uniform vec2 u_p2;
uniform float u_radius;
uniform vec2 u_vector;
uniform float u_force;
out vec2 out_velocity;
void main() {
    vec2 p = v_uv * u_dimensions;
    vec2 ab = u_p2 - u_p1;
    float t = clamp(dot(p - u_p1, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
    float radius = length(p - (u_p1 + ab * t)) / u_radius;
    float falloff = max(0.0, 1.0 - radius * radius);
    vec2 velocity = texture(u_velocity, v_uv).xy + falloff * u_vector * u_force;
    float velocityMag = length(velocity);
    out_velocity = velocity * (min(velocityMag, ${vS.toFixed(1)}) / max(velocityMag, 1e-6));
}`,CT=ma+`
uniform sampler2D u_ages;
uniform float u_dt;
out float out_age;
void main() {
    float age = texture(u_ages, v_uv).x + u_dt;
    out_age = step(age, ${pm.toFixed(1)}) * age;
}`,wT=ma+`
uniform vec2 u_dimensions;
uniform sampler2D u_positions;
uniform sampler2D u_velocity;
uniform sampler2D u_ages;
uniform sampler2D u_initialPositions;
uniform float u_step;
out vec4 out_position;
void main() {
    vec4 positionData = texture(u_positions, v_uv);
    vec2 absolute = positionData.rg;
    vec2 displacement = positionData.ba;
    vec2 position = absolute + displacement;

    vec2 pxSize = 1.0 / u_dimensions;
    vec2 velocity1 = texture(u_velocity, position * pxSize).xy;
    vec2 halfStep = position + velocity1 * 0.5 * u_step;
    vec2 velocity2 = texture(u_velocity, halfStep * pxSize).xy;
    displacement += velocity2 * u_step;

    float shouldMerge = step(20.0, dot(displacement, displacement));
    absolute = mod(absolute + shouldMerge * displacement + u_dimensions, u_dimensions);
    displacement *= (1.0 - shouldMerge);

    float shouldReset = step(texture(u_ages, v_uv).x, 1.0);
    out_position = mix(vec4(absolute, displacement), texture(u_initialPositions, v_uv), shouldReset);
}`,NT=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D u_positions;
uniform vec2 u_dimensions;
uniform ivec2 u_texSize;
uniform float u_pointSize;
out vec2 v_uv;
out vec2 v_uv_position;
void main() {
    int i = gl_VertexID;
    ivec2 texel = ivec2(i % u_texSize.x, i / u_texSize.x);
    vec4 positionData = texelFetch(u_positions, texel, 0);

    vec2 position = mod(positionData.rg + positionData.ba, u_dimensions);
    v_uv = position / u_dimensions;
    v_uv_position = (vec2(texel) + 0.5) / vec2(u_texSize);
    gl_Position = vec4(v_uv * 2.0 - 1.0, 0.0, 1.0);
    gl_PointSize = u_pointSize;
}`,DT=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 v_uv;
in vec2 v_uv_position;
uniform sampler2D u_ages;
uniform sampler2D u_velocity;
out float out_state;
void main() {
    float ageFraction = texture(u_ages, v_uv_position).x / ${pm.toFixed(1)};

    float opacity = mix(0.0, 1.0, min(ageFraction * 10.0, 1.0))
                  * mix(1.0, 0.0, clamp(ageFraction * 10.0 - 9.0, 0.0, 1.0));
    vec2 velocity = texture(u_velocity, v_uv).xy;

    float multiplier = clamp(dot(velocity, velocity) * 0.05 + 0.7, 0.0, 1.0);
    out_state = opacity * multiplier;
}`,UT=ma+`
uniform sampler2D u_image;
uniform float u_increment;
out float out_color;
void main() {
    out_color = max(texture(u_image, v_uv).x + u_increment, 0.0);
}`,LT=ma+`
uniform sampler2D u_trailState;
uniform vec3 u_background;
uniform vec3 u_particle;
out vec4 out_color;
void main() {
    out_color = vec4(mix(u_background, u_particle, clamp(texture(u_trailState, v_uv).x, 0.0, 1.0)), 1.0);
}`;function Da(o,t){return typeof o=="number"&&isFinite(o)?o:t}function ox(o,t){if(!o)return t;const i=o.trim();if(i[0]==="#"){let l=i.slice(1);if((l.length===3||l.length===4)&&(l=l[0]+l[0]+l[1]+l[1]+l[2]+l[2]),l.length>=6){const u=parseInt(l.slice(0,2),16),d=parseInt(l.slice(2,4),16),h=parseInt(l.slice(4,6),16);if(!isNaN(u)&&!isNaN(d)&&!isNaN(h))return[u/255,d/255,h/255]}return t}const r=i.match(/[\d.]+/g);return r&&r.length>=3?[Math.min(255,parseFloat(r[0]))/255,Math.min(255,parseFloat(r[1]))/255,Math.min(255,parseFloat(r[2]))/255]:t}function lx(o,t,i){const r=o.createShader(t);return r?(o.shaderSource(r,i),o.compileShader(r),o.getShaderParameter(r,o.COMPILE_STATUS)?r:(console.error("InkCurrent shader:",o.getShaderInfoLog(r)),o.deleteShader(r),null)):null}function Fi(o,t,i,r){const l=lx(o,o.VERTEX_SHADER,t),u=lx(o,o.FRAGMENT_SHADER,i);if(!l||!u)return null;const d=o.createProgram();if(!d)return null;if(o.attachShader(d,l),o.attachShader(d,u),o.bindAttribLocation(d,0,"a_pos"),o.linkProgram(d),o.deleteShader(l),o.deleteShader(u),!o.getProgramParameter(d,o.LINK_STATUS))return console.error("InkCurrent link:",o.getProgramInfoLog(d)),null;const h={};for(const p of r)h[p]=o.getUniformLocation(d,p);return{program:d,u:h}}function lu(o,t,i,r,l,u,d,h,p){const m=o.createTexture(),S=o.createFramebuffer();return!m||!S?null:(o.bindTexture(o.TEXTURE_2D,m),o.texImage2D(o.TEXTURE_2D,0,r,t,i,0,l,u,p),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,d),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,d),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,h),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,h),o.bindFramebuffer(o.FRAMEBUFFER,S),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,m,0),o.checkFramebufferStatus(o.FRAMEBUFFER)!==o.FRAMEBUFFER_COMPLETE?(console.error("InkCurrent: incomplete framebuffer"),null):(o.bindFramebuffer(o.FRAMEBUFFER,null),{tex:m,fbo:S,w:t,h:i}))}const OT={strength:50,scale:5};function PT(o){const{style:t,background:i="#000000",baseColor:r="#00FFE2",density:l=111,speed:u=74,trail:d=100,hover:h=138,reach:p=112,flow:m,width:S,height:_}=o,v={...OT,...m??{}},E=Ge.useRef(null),A=Ge.useRef({background:[.98,.922,.843],particle:[0,0,.2],density:.1,speed:1,trail:15,force:sx,radius:15,flowAmp:1,flowScale:5});A.current={background:ox(i,[.98,.922,.843]),particle:ox(r,[0,0,.2]),density:Math.max(1,Da(l,100))/1e3,speed:Math.max(0,Da(u,50))/50,trail:Math.max(1,Da(d,15)),force:sx*Math.max(0,Da(h,100))/100,radius:Math.max(1,Da(p,30))/2,flowAmp:Math.max(0,Da(v.strength,50))/50,flowScale:Math.max(1,Da(v.scale,5))};const P=Ge.useRef([]),T=Ge.useRef(null);return Ge.useEffect(()=>{const y=E.current;if(!y)return;const b=y.getContext("webgl2",{antialias:!1,alpha:!1,depth:!1,stencil:!1});if(!b){console.error("InkCurrent: WebGL2 unavailable");return}const Z=!!b.getExtension("EXT_color_buffer_float");if(!(Z||!!b.getExtension("EXT_color_buffer_half_float"))){console.error("InkCurrent: no float color buffer support");return}const C=Z?b.RGBA32F:b.RGBA16F,R=Z?b.R32F:b.R16F,z={advect:Fi(b,ra,MT,["u_state","u_velocity","u_dimensions","u_dt"]),stir:Fi(b,ra,ET,["u_velocity","u_aspect","u_scale","u_time","u_amp","u_drag"]),divergence:Fi(b,ra,TT,["u_vectorField","u_pxSize"]),jacobi:Fi(b,ra,bT,["u_alpha","u_beta","u_pxSize","u_previousState","u_divergence"]),gradientSub:Fi(b,ra,AT,["u_pxSize","u_scalarField","u_vectorField"]),touch:Fi(b,ra,RT,["u_velocity","u_dimensions","u_p1","u_p2","u_radius","u_vector","u_force"]),age:Fi(b,ra,CT,["u_ages","u_dt"]),advectParticles:Fi(b,ra,wT,["u_dimensions","u_positions","u_velocity","u_ages","u_initialPositions","u_step"]),points:Fi(b,NT,DT,["u_positions","u_dimensions","u_texSize","u_pointSize","u_ages","u_velocity"]),fade:Fi(b,ra,UT,["u_image","u_increment"]),composite:Fi(b,ra,LT,["u_trailState","u_background","u_particle"])};for(const w of Object.keys(z))if(!z[w])return;const g=z,O=(w,M)=>{b.useProgram(w.program);for(const[K,Q]of M)b.uniform1i(w.u[K],Q)};O(g.advect,[["u_state",0],["u_velocity",1]]),O(g.stir,[["u_velocity",0]]),O(g.divergence,[["u_vectorField",0]]),O(g.jacobi,[["u_previousState",0],["u_divergence",1]]),O(g.gradientSub,[["u_scalarField",0],["u_vectorField",1]]),O(g.touch,[["u_velocity",0]]),O(g.age,[["u_ages",0]]),O(g.advectParticles,[["u_positions",0],["u_velocity",1],["u_ages",2],["u_initialPositions",3]]),O(g.points,[["u_positions",0],["u_ages",1],["u_velocity",2]]),O(g.fade,[["u_image",0]]),O(g.composite,[["u_trailState",0]]),b.useProgram(g.jacobi.program),b.uniform1f(g.jacobi.u.u_alpha,hT),b.uniform1f(g.jacobi.u.u_beta,pT);const I=b.createVertexArray();b.bindVertexArray(I);const F=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,F),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),b.STATIC_DRAW),b.enableVertexAttribArray(0),b.vertexAttribPointer(0,2,b.FLOAT,!1,0,0);const X=b.createVertexArray();b.bindVertexArray(null),b.disable(b.BLEND),b.disable(b.DEPTH_TEST),b.disable(b.CULL_FACE);let Y=null,G=null,W=null,L=null,k=null,ie=null,te=null,ne=0,ae=0,Oe=0,Le=0,H=0,de=0,Ce=0,j=0,le=0,Me=0,Ne=!1;const Se=[],Ae=()=>{for(const w of Se)w&&(b.deleteTexture(w.tex),b.deleteFramebuffer(w.fbo));Se.length=0,Y=G=W=L=k=null,ie=te=null},et=w=>(Se.push(w),w),ze=(w,M,K,Q,fe,Re,we,ce)=>{const ve=et(lu(b,w,M,K,Q,fe,Re,we,ce)),Ue=et(lu(b,w,M,K,Q,fe,Re,we,ce));return ve&&Ue?{a:ve,b:Ue}:null},rt=w=>{b.bindFramebuffer(b.FRAMEBUFFER,w.fbo),b.viewport(0,0,w.w,w.h),b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT)},Ye=(w,M,K,Q,fe)=>{Ae(),ne=w,ae=M,Oe=K,Le=Q,Me=fe,H=Math.ceil(w/ax),de=Math.ceil(M/ax),Y=ze(H,de,b.RG16F,b.RG,b.HALF_FLOAT,b.LINEAR,b.REPEAT,null),ie=et(lu(b,H,de,R,b.RED,b.FLOAT,b.NEAREST,b.REPEAT,null)),G=ze(H,de,R,b.RED,b.FLOAT,b.NEAREST,b.REPEAT,null),k=ze(K,Q,b.R16F,b.RED,b.HALF_FLOAT,b.NEAREST,b.CLAMP_TO_EDGE,null);const Re=Math.min(Math.ceil(w*M*fe),mT);Ce=Math.max(1,Math.ceil(Math.sqrt(Re))),j=Math.max(1,Math.ceil(Re/Ce)),le=Ce*j;const we=new Float32Array(le*4),ce=new Float32Array(le);for(let Ue=0;Ue<le;Ue++)we[4*Ue]=Math.random()*w,we[4*Ue+1]=Math.random()*M,ce[Ue]=Math.round(Math.random()*pm);if(W=ze(Ce,j,C,b.RGBA,b.FLOAT,b.NEAREST,b.CLAMP_TO_EDGE,we),te=et(lu(b,Ce,j,C,b.RGBA,b.FLOAT,b.NEAREST,b.CLAMP_TO_EDGE,we)),L=ze(Ce,j,R,b.RED,b.FLOAT,b.NEAREST,b.CLAMP_TO_EDGE,ce),Ne=!!(Y&&ie&&G&&k&&W&&te&&L),!Ne)return;rt(Y.a),rt(Y.b),rt(G.a),rt(G.b),rt(k.a),rt(k.b),b.bindFramebuffer(b.FRAMEBUFFER,null);const ve=[1/H,1/de];b.useProgram(g.divergence.program),b.uniform2fv(g.divergence.u.u_pxSize,ve),b.useProgram(g.jacobi.program),b.uniform2fv(g.jacobi.u.u_pxSize,ve),b.useProgram(g.gradientSub.program),b.uniform2fv(g.gradientSub.u.u_pxSize,ve)},ue=(w,M)=>{b.activeTexture(b.TEXTURE0+w),b.bindTexture(b.TEXTURE_2D,M)},Pe=w=>{w?(b.bindFramebuffer(b.FRAMEBUFFER,w.fbo),b.viewport(0,0,w.w,w.h)):(b.bindFramebuffer(b.FRAMEBUFFER,null),b.viewport(0,0,Oe,Le)),b.bindVertexArray(I),b.drawArrays(b.TRIANGLES,0,3)},ht=w=>{const M=w.a;w.a=w.b,w.b=M};let pt=0,st=performance.now(),$e=0;const q=w=>{pt=requestAnimationFrame(q);const M=A.current,K=Math.min(window.devicePixelRatio||1,gT),Q=Math.max(1,Math.round(y.clientWidth||Da(S,1200))),fe=Math.max(1,Math.round(y.clientHeight||Da(_,800))),Re=Math.max(1,Math.round(Q*K)),we=Math.max(1,Math.round(fe*K));if((y.width!==Re||y.height!==we)&&(y.width=Re,y.height=we),(Q!==ne||fe!==ae||Re!==Oe||we!==Le||M.density!==Me)&&(Ye(Q,fe,Re,we,M.density),P.current.length=0,T.current=null),!Ne||!Y||!G||!W||!L||!k||!ie||!te)return;const ce=(w-st)/1e3;st=w;const ve=Math.min(ST,Math.max(0,ce*60))*M.speed;$e=($e+ce)%xT,b.useProgram(g.advect.program),b.uniform2f(g.advect.u.u_dimensions,ne,ae),b.uniform1f(g.advect.u.u_dt,ve),ue(0,Y.a.tex),ue(1,Y.a.tex),Pe(Y.b),ht(Y),M.flowAmp>0&&ve>0&&(b.useProgram(g.stir.program),b.uniform2f(g.stir.u.u_aspect,ne/ae,1),b.uniform1f(g.stir.u.u_scale,M.flowScale),b.uniform1f(g.stir.u.u_time,$e),b.uniform1f(g.stir.u.u_amp,vT*M.flowAmp*ve),b.uniform1f(g.stir.u.u_drag,Math.min(1,_T*ve)),ue(0,Y.a.tex),Pe(Y.b),ht(Y));const Ue=P.current;if(Ue.length>0){b.useProgram(g.touch.program),b.uniform2f(g.touch.u.u_dimensions,ne,ae),b.uniform1f(g.touch.u.u_radius,M.radius),b.uniform1f(g.touch.u.u_force,M.force);const Ie=Math.max(0,Ue.length-yT);for(let He=Ie;He<Ue.length;He++){const Ve=Ue[He];b.uniform2f(g.touch.u.u_p1,Ve.x1,Ve.y1),b.uniform2f(g.touch.u.u_p2,Ve.x2,Ve.y2),b.uniform2f(g.touch.u.u_vector,Ve.x2-Ve.x1,Ve.y2-Ve.y1),ue(0,Y.a.tex),Pe(Y.b),ht(Y)}Ue.length=0}b.useProgram(g.divergence.program),ue(0,Y.a.tex),Pe(ie),b.useProgram(g.jacobi.program),ue(1,ie.tex);for(let Ie=0;Ie<dT;Ie++)ue(0,G.a.tex),Pe(G.b),ht(G);b.useProgram(g.gradientSub.program),ue(0,G.a.tex),ue(1,Y.a.tex),Pe(Y.b),ht(Y),b.useProgram(g.age.program),b.uniform1f(g.age.u.u_dt,ve),ue(0,L.a.tex),Pe(L.b),ht(L),b.useProgram(g.fade.program),b.uniform1f(g.fade.u.u_increment,-ve/M.trail),ue(0,k.a.tex),Pe(k.b),ht(k);const Qe=Math.max(1,K);for(let Ie=0;Ie<rx;Ie++)b.useProgram(g.advectParticles.program),b.uniform2f(g.advectParticles.u.u_dimensions,ne,ae),b.uniform1f(g.advectParticles.u.u_step,ve/rx),ue(0,W.a.tex),ue(1,Y.a.tex),ue(2,L.a.tex),ue(3,te.tex),Pe(W.b),ht(W),b.useProgram(g.points.program),b.uniform2f(g.points.u.u_dimensions,ne,ae),b.uniform2i(g.points.u.u_texSize,Ce,j),b.uniform1f(g.points.u.u_pointSize,Qe),ue(0,W.a.tex),ue(1,L.a.tex),ue(2,Y.a.tex),b.bindFramebuffer(b.FRAMEBUFFER,k.a.fbo),b.viewport(0,0,k.a.w,k.a.h),b.bindVertexArray(X),b.drawArrays(b.POINTS,0,le);b.useProgram(g.composite.program),b.uniform3fv(g.composite.u.u_background,M.background),b.uniform3fv(g.composite.u.u_particle,M.particle),ue(0,k.a.tex),Pe(null)};pt=requestAnimationFrame(q);const Fe=w=>{const M=w.offsetX,K=w.offsetY,Q=T.current;T.current={id:w.pointerId,x:M,y:K},!(!Q||Q.id!==w.pointerId)&&(Q.x===M&&Q.y===K||P.current.push({x1:Q.x,y1:ae-Q.y,x2:M,y2:ae-K}))},nt=()=>{T.current=null};return y.addEventListener("pointermove",Fe),window.addEventListener("pointerup",nt),window.addEventListener("pointercancel",nt),y.addEventListener("pointerleave",nt),()=>{cancelAnimationFrame(pt),y.removeEventListener("pointermove",Fe),y.removeEventListener("pointerleave",nt),window.removeEventListener("pointerup",nt),window.removeEventListener("pointercancel",nt),Ae();for(const w of Object.keys(g))b.deleteProgram(g[w].program);b.deleteBuffer(F),b.deleteVertexArray(I),b.deleteVertexArray(X)}},[]),B.jsx("div",{style:{position:"relative",overflow:"hidden",background:i,minWidth:1200,minHeight:800,width:typeof S=="number"&&S>0?S:"100%",height:typeof _=="number"&&_>0?_:"100%",...t},children:B.jsx("canvas",{ref:E,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",touchAction:"none"}})})}function FT(o=.5){const t=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,r=(3-Math.sqrt(3))/3,l=new Uint8Array(256);for(let S=0;S<256;S++)l[S]=S;const u=S=>{const _=Math.sin(S*12.9898+o*78.233)*43758.5453;return _-Math.floor(_)};for(let S=255;S>0;S--){const _=Math.floor((S+1)*u(S)),v=l[S];l[S]=l[_],l[_]=v}const d=new Uint8Array(512),h=new Uint8Array(512);for(let S=0;S<512;S++)d[S]=l[S&255],h[S]=d[S]%12;const p=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),m=S=>Math.floor(S)|0;return function(_,v){const E=(_+v)*t,A=m(_+E),P=m(v+E),T=(A+P)*i,y=_-(A-T),b=v-(P-T);let Z,U;y>b?(Z=1,U=0):(Z=0,U=1);const C=y-Z+i,R=b-U+i,z=y-1+r,g=b-1+r,O=A&255,I=P&255,F=h[O+d[I]],X=h[O+Z+d[I+U]],Y=h[O+1+d[I+1]];let G=0,W=0,L=0,k=.5-y*y-b*b;k>=0&&(k*=k,G=k*k*(p[F*2]*y+p[F*2+1]*b));let ie=.5-C*C-R*R;ie>=0&&(ie*=ie,W=ie*ie*(p[X*2]*C+p[X*2+1]*R));let te=.5-z*z-g*g;return te>=0&&(te*=te,L=te*te*(p[Y*2]*z+p[Y*2+1]*g)),70*(G+W+L)}}const IT=0,BT=3,zT=.5;function HT({strokeColor:o="#FFFFFF",backgroundColor:t="#000000",count:i=57,movement:r=24,hover:l=!0,force:u=4,resolution:d=10}){const h=Ge.useRef(null),p=Ge.useRef(null),m=Ge.useRef({x:-10,y:0,lx:0,ly:0,sx:0,sy:0,v:0,vs:0,a:0,set:!1}),S=Ge.useRef(null),_=Ge.useRef([]),v=Ge.useRef(null),E=Ge.useRef(null),A=Ge.useRef(null),P=Ge.useRef(0),T=Ge.useRef(null),y=Ge.useRef({width:0,height:0,zoom:1}),b=Ge.useRef(!0),Z=Ge.useRef({strokeColor:o,count:i,movement:r,hover:l,force:u,resolution:d});Z.current={strokeColor:o,count:i,movement:r,hover:l,force:u,resolution:d};const U=()=>{const O=h.current,I=p.current;if(!O||!I)return;const F=O.clientWidth||O.offsetWidth||1,X=O.clientHeight||O.offsetHeight||1;A.current={width:F,height:X},I.style.width=`${F}px`,I.style.height=`${X}px`},C=()=>{const O=p.current;if(!O||!A.current)return;const{width:I,height:F}=A.current,{strokeColor:X,count:Y}=Z.current,W=90-(Math.max(1,Math.min(100,Y))-1)/99*82,L=Math.ceil((I+W)/W),k=Math.ceil((F+W)/W),ie=(I-W*(L-1))/2,te=(F-W*(k-1))/2,ne=[];for(let Oe=0;Oe<L;Oe++)for(let Le=0;Le<k;Le++)ne.push({x:ie+W*Oe,y:te+W*Le,angle:0,cursor:{x:0,y:0,vx:0,vy:0}});if(_.current=ne,!S.current){const Oe=document.createElementNS("http://www.w3.org/2000/svg","path");O.appendChild(Oe),S.current=Oe}const ae=S.current;ae.setAttribute("fill","none"),ae.setAttribute("stroke",X),ae.setAttribute("stroke-width","1.5"),ae.setAttribute("stroke-linecap","round")},R=(O,I)=>{const F=h.current;if(!A.current||!F)return;const X=m.current,Y=F.getBoundingClientRect();X.x=O-Y.left,X.y=I-Y.top+window.scrollY,X.set||(X.sx=X.x,X.sy=X.y,X.lx=X.x,X.ly=X.y,X.set=!0),F.style.setProperty("--x",`${X.sx}px`),F.style.setProperty("--y",`${X.sy}px`)},z=O=>{P.current=O;const I=_.current,F=m.current,X=v.current;if(!X)return;const{movement:Y,hover:G,force:W}=Z.current,L=BT,k=IT,ie=O*Y*8e-6,te=Math.cos(k)*ie,ne=Math.sin(k)*ie;I.forEach(ae=>{const Oe=X(ae.x*.004-te,ae.y*.004-ne),Le=k+Oe*Math.PI*L,H=ae.x-F.sx,de=ae.y-F.sy,Ce=Math.hypot(H,de),j=Math.max(175,F.vs);let le=0;if(G&&Ce<j){const Ne=1-Ce/j,Se=W/10*.02;le=(Math.atan2(de,H)+Math.PI/2-Le)*Ne*(.4+F.vs*Se);const et=Math.cos(Ce*.001)*Ne,ze=W/10*7e-4;ae.cursor.vx+=Math.cos(Math.atan2(de,H))*et*j*F.vs*ze,ae.cursor.vy+=Math.sin(Math.atan2(de,H))*et*j*F.vs*ze}let Me=Le+le-ae.angle;for(;Me>Math.PI;)Me-=2*Math.PI;for(;Me<-Math.PI;)Me+=2*Math.PI;ae.angle+=Me*.12,ae.cursor.vx+=(0-ae.cursor.x)*.01,ae.cursor.vy+=(0-ae.cursor.y)*.01,ae.cursor.vx*=.95,ae.cursor.vy*=.95,ae.cursor.x+=ae.cursor.vx,ae.cursor.y+=ae.cursor.vy,ae.cursor.x=Math.min(50,Math.max(-50,ae.cursor.x)),ae.cursor.y=Math.min(50,Math.max(-50,ae.cursor.y))})},g=()=>{const O=_.current,I=S.current;if(!I)return;const{resolution:F}=Z.current,X=(6+F/10*20)/2;I.setAttribute("fill","none"),I.setAttribute("stroke-width","1.5");let Y="";for(const G of O){const W=G.x+G.cursor.x,L=G.y+G.cursor.y,k=Math.cos(G.angle)*X,ie=Math.sin(G.angle)*X;Y+=`M ${(W-k).toFixed(1)} ${(L-ie).toFixed(1)} L ${(W+k).toFixed(1)} ${(L+ie).toFixed(1)} `}I.setAttribute("d",Y)};return Ge.useEffect(()=>{const O=h.current;if(!O||!p.current)return;v.current=FT(zT),U(),C();const I=()=>{U(),C()},F=G=>R(G.pageX,G.pageY),X=G=>{G.preventDefault();const W=G.touches[0];W&&R(W.clientX,W.clientY)};window.addEventListener("resize",I),window.addEventListener("mousemove",F),O.addEventListener("touchmove",X,{passive:!1});const Y=new IntersectionObserver(G=>{G.forEach(W=>{b.current=W.isIntersecting})},{threshold:.1});return Y.observe(O),()=>{window.removeEventListener("resize",I),window.removeEventListener("mousemove",F),O.removeEventListener("touchmove",X),Y.disconnect()}},[]),Ge.useEffect(()=>{if(!h.current||!T.current)return;let O=0;const I=1,F=()=>{const X=h.current,Y=T.current;if(!X||!Y)return;const G=X.clientWidth||X.offsetWidth||1,W=X.clientHeight||X.offsetHeight||1,L=Y.getBoundingClientRect().width/20,k=y.current;(Math.abs(G-k.width)>I||Math.abs(W-k.height)>I||Math.abs(L-k.zoom)>.01)&&(y.current={width:G,height:W,zoom:L},U(),C()),O=requestAnimationFrame(F)};return O=requestAnimationFrame(F),()=>{O&&cancelAnimationFrame(O)}},[o,i,d]),Ge.useEffect(()=>{C()},[o,i]),Ge.useEffect(()=>{const O=I=>{if(!b.current){E.current=requestAnimationFrame(O);return}const F=m.current;F.sx+=(F.x-F.sx)*.1,F.sy+=(F.y-F.sy)*.1;const X=F.x-F.lx,Y=F.y-F.ly,G=Math.hypot(X,Y);F.v=G,F.vs+=(G-F.vs)*.1,F.vs=Math.min(100,F.vs),F.lx=F.x,F.ly=F.y,F.a=Math.atan2(Y,X),h.current&&(h.current.style.setProperty("--x",`${F.sx}px`),h.current.style.setProperty("--y",`${F.sy}px`)),z(I),g(),E.current=requestAnimationFrame(O)};return E.current=requestAnimationFrame(O),()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null)}},[]),B.jsxs("div",{ref:h,style:{backgroundColor:t||"transparent",position:"relative",margin:0,padding:0,width:"100%",height:"100%",overflow:"hidden","--x":"-0.5rem","--y":"50%"},children:[B.jsx("svg",{ref:p,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"},xmlns:"http://www.w3.org/2000/svg"}),B.jsx("div",{ref:T,style:{position:"absolute",width:20,height:20,opacity:0,pointerEvents:"none"}})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mm="186",GT=0,cx=1,VT=2,Lu=1,kT=2,Tl=3,ss=0,ei=1,za=2,Ga=0,Rl=1,ux=2,fx=3,dx=4,XT=5,fo=100,WT=101,qT=102,YT=103,ZT=104,jT=200,KT=201,QT=202,JT=203,_S=204,xS=205,$T=206,eb=207,tb=208,nb=209,ib=210,ab=211,rb=212,sb=213,ob=214,Ep=0,Tp=1,bp=2,Cl=3,Ap=4,Rp=5,Cp=6,wp=7,SS=0,lb=1,cb=2,fa=0,yS=1,MS=2,ES=3,TS=4,bS=5,AS=6,RS=7,CS=300,os=301,go=302,Gh=303,Vh=304,Zu=306,Np=1e3,Ha=1001,Dp=1002,Fn=1003,ub=1004,cu=1005,Hn=1006,kh=1007,as=1008,Ci=1009,wS=1010,NS=1011,wl=1012,gm=1013,da=1014,ca=1015,ha=1016,vm=1017,_m=1018,Nl=1020,DS=35902,US=35899,LS=1021,OS=1022,Vi=1023,Wa=1026,rs=1027,PS=1028,xm=1029,ls=1030,Sm=1031,ym=1033,Ou=33776,Pu=33777,Fu=33778,Iu=33779,Up=35840,Lp=35841,Op=35842,Pp=35843,Fp=36196,Ip=37492,Bp=37496,zp=37488,Hp=37489,Gu=37490,Gp=37491,Vp=37808,kp=37809,Xp=37810,Wp=37811,qp=37812,Yp=37813,Zp=37814,jp=37815,Kp=37816,Qp=37817,Jp=37818,$p=37819,em=37820,tm=37821,nm=36492,im=36494,am=36495,rm=36283,sm=36284,Vu=36285,om=36286,fb=3200,hx=0,db=1,Cr="",pi="srgb",ku="srgb-linear",Xu="linear",Jt="srgb",Xh=7680,hb=519,pb=512,mb=513,gb=514,Mm=515,vb=516,_b=517,Em=518,xb=519,Sb=35044,px="300 es",ua=2e3,Wu=2001;function yb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function qu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Mb(){const o=qu("canvas");return o.style.display="block",o}const mx={};function gx(...o){const t="THREE."+o.shift();console.log(t,...o)}function FS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function xt(...o){o=FS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function kt(...o){o=FS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function po(...o){const t=o.join(" ");t in mx||(mx[t]=!0,xt(...o))}function Eb(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const Tb={[Ep]:Tp,[bp]:Cp,[Ap]:wp,[Cl]:Rp,[Tp]:Ep,[Cp]:bp,[wp]:Ap,[Rp]:Cl};class us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=Math.PI/180,lm=180/Math.PI;function Ul(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ht(o,t,i){return Math.max(t,Math.min(i,o))}function bb(o,t){return(o%t+t)%t}function qh(o,t,i){return(1-i)*o+i*t}function gl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rm=class Rm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ht(this.x,t.x,i.x),this.y=Ht(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ht(this.x,t,i),this.y=Ht(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ht(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ht(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rm.prototype.isVector2=!0;let Xt=Rm;class _o{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],S=r[l+2],_=r[l+3],v=u[d+0],E=u[d+1],A=u[d+2],P=u[d+3];if(_!==P||p!==v||m!==E||S!==A){let T=p*v+m*E+S*A+_*P;T<0&&(v=-v,E=-E,A=-A,P=-P,T=-T);let y=1-h;if(T<.9995){const b=Math.acos(T),Z=Math.sin(b);y=Math.sin(y*b)/Z,h=Math.sin(h*b)/Z,p=p*y+v*h,m=m*y+E*h,S=S*y+A*h,_=_*y+P*h}else{p=p*y+v*h,m=m*y+E*h,S=S*y+A*h,_=_*y+P*h;const b=1/Math.sqrt(p*p+m*m+S*S+_*_);p*=b,m*=b,S*=b,_*=b}}t[i]=p,t[i+1]=m,t[i+2]=S,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],S=r[l+3],_=u[d],v=u[d+1],E=u[d+2],A=u[d+3];return t[i]=h*A+S*_+p*E-m*v,t[i+1]=p*A+S*v+m*_-h*E,t[i+2]=m*A+S*E+h*v-p*_,t[i+3]=S*A-h*_-p*v-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(r/2),S=h(l/2),_=h(u/2),v=p(r/2),E=p(l/2),A=p(u/2);switch(d){case"XYZ":this._x=v*S*_+m*E*A,this._y=m*E*_-v*S*A,this._z=m*S*A+v*E*_,this._w=m*S*_-v*E*A;break;case"YXZ":this._x=v*S*_+m*E*A,this._y=m*E*_-v*S*A,this._z=m*S*A-v*E*_,this._w=m*S*_+v*E*A;break;case"ZXY":this._x=v*S*_-m*E*A,this._y=m*E*_+v*S*A,this._z=m*S*A+v*E*_,this._w=m*S*_-v*E*A;break;case"ZYX":this._x=v*S*_-m*E*A,this._y=m*E*_+v*S*A,this._z=m*S*A-v*E*_,this._w=m*S*_+v*E*A;break;case"YZX":this._x=v*S*_+m*E*A,this._y=m*E*_+v*S*A,this._z=m*S*A-v*E*_,this._w=m*S*_-v*E*A;break;case"XZY":this._x=v*S*_-m*E*A,this._y=m*E*_-v*S*A,this._z=m*S*A+v*E*_,this._w=m*S*_+v*E*A;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],_=i[10],v=r+h+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(S-p)*E,this._y=(u-m)*E,this._z=(d-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(S-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+m)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(u-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+S)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(d-l)/E,this._x=(u+m)/E,this._y=(p+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=r*S+d*h+l*m-u*p,this._y=l*S+d*p+u*h-r*m,this._z=u*S+d*m+r*p-l*h,this._w=d*S-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cm=class Cm{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*l-h*r),S=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+p*m+d*_-h*S,this.y=r+p*S+h*m-u*_,this.z=l+p*_+u*S-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ht(this.x,t.x,i.x),this.y=Ht(this.y,t.y,i.y),this.z=Ht(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ht(this.x,t,i),this.y=Ht(this.y,t,i),this.z=Ht(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ht(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Yh.copy(this).projectOnVector(t),this.sub(Yh)}reflect(t){return this.sub(Yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ht(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cm.prototype.isVector3=!0;let ye=Cm;const Yh=new ye,vx=new _o,wm=class wm{constructor(t,i,r,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m)}set(t,i,r,l,u,d,h,p,m){const S=this.elements;return S[0]=t,S[1]=l,S[2]=h,S[3]=i,S[4]=u,S[5]=p,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],S=r[4],_=r[7],v=r[2],E=r[5],A=r[8],P=l[0],T=l[3],y=l[6],b=l[1],Z=l[4],U=l[7],C=l[2],R=l[5],z=l[8];return u[0]=d*P+h*b+p*C,u[3]=d*T+h*Z+p*R,u[6]=d*y+h*U+p*z,u[1]=m*P+S*b+_*C,u[4]=m*T+S*Z+_*R,u[7]=m*y+S*U+_*z,u[2]=v*P+E*b+A*C,u[5]=v*T+E*Z+A*R,u[8]=v*y+E*U+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],S=t[8];return i*d*S-i*h*m-r*u*S+r*h*p+l*u*m-l*d*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],S=t[8],_=S*d-h*m,v=h*p-S*u,E=m*u-d*p,A=i*_+r*v+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=_*P,t[1]=(l*m-S*r)*P,t[2]=(h*r-l*d)*P,t[3]=v*P,t[4]=(S*i-l*p)*P,t[5]=(l*u-h*i)*P,t[6]=E*P,t[7]=(r*p-m*i)*P,t[8]=(d*i-r*u)*P,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+t,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zh.makeScale(t,i)),this}rotate(t){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zh.makeRotation(-t)),this}translate(t,i){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wm.prototype.isMatrix3=!0;let Et=wm;const Zh=new Et,_x=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xx=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ab(){const o={enabled:!0,workingColorSpace:ku,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Jt&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Jt&&(l.r=mo(l.r),l.g=mo(l.g),l.b=mo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Cr?Xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ku]:{primaries:t,whitePoint:r,transfer:Xu,toXYZ:_x,fromXYZ:xx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Jt,toXYZ:_x,fromXYZ:xx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const zt=Ab();function Va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Js;class Rb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Js===void 0&&(Js=qu("canvas")),Js.width=t.width,Js.height=t.height;const l=Js.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Js}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Va(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Va(i[r]/255)*255):i[r]=Va(i[r]);return{data:i,width:t.width,height:t.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cb=0;class Tm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Ul(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(jh(l[d].image)):u.push(jh(l[d]))}else u=jh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function jh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Rb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let wb=0;const Kh=new ye;class Yn extends us{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,r=Ha,l=Ha,u=Hn,d=as,h=Vi,p=Ci,m=Yn.DEFAULT_ANISOTROPY,S=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Ul(),this.name="",this.source=new Tm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){xt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){xt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==CS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Np:t.x=t.x-Math.floor(t.x);break;case Ha:t.x=t.x<0?0:1;break;case Dp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Np:t.y=t.y-Math.floor(t.y);break;case Ha:t.y=t.y<0?0:1;break;case Dp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=CS;Yn.DEFAULT_ANISOTROPY=1;const Nm=class Nm{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],S=p[4],_=p[8],v=p[1],E=p[5],A=p[9],P=p[2],T=p[6],y=p[10];if(Math.abs(S-v)<.01&&Math.abs(_-P)<.01&&Math.abs(A-T)<.01){if(Math.abs(S+v)<.1&&Math.abs(_+P)<.1&&Math.abs(A+T)<.1&&Math.abs(m+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const Z=(m+1)/2,U=(E+1)/2,C=(y+1)/2,R=(S+v)/4,z=(_+P)/4,g=(A+T)/4;return Z>U&&Z>C?Z<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(Z),l=R/r,u=z/r):U>C?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=R/l,u=g/l):C<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(C),r=z/u,l=g/u),this.set(r,l,u,i),this}let b=Math.sqrt((T-A)*(T-A)+(_-P)*(_-P)+(v-S)*(v-S));return Math.abs(b)<.001&&(b=1),this.x=(T-A)/b,this.y=(_-P)/b,this.z=(v-S)/b,this.w=Math.acos((m+E+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ht(this.x,t.x,i.x),this.y=Ht(this.y,t.y,i.y),this.z=Ht(this.z,t.z,i.z),this.w=Ht(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ht(this.x,t,i),this.y=Ht(this.y,t,i),this.z=Ht(this.z,t,i),this.w=Ht(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ht(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nm.prototype.isVector4=!0;let dn=Nm;class Nb extends us{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new dn(0,0,t,i),this.scissorTest=!1,this.viewport=new dn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new Yn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Tm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Nb{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class IS extends Yn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Db extends Yn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Yu=class Yu{constructor(t,i,r,l,u,d,h,p,m,S,_,v,E,A,P,T){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,p,m,S,_,v,E,A,P,T)}set(t,i,r,l,u,d,h,p,m,S,_,v,E,A,P,T){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=u,y[5]=d,y[9]=h,y[13]=p,y[2]=m,y[6]=S,y[10]=_,y[14]=v,y[3]=E,y[7]=A,y[11]=P,y[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yu().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,l=1/$s.setFromMatrixColumn(t,0).length(),u=1/$s.setFromMatrixColumn(t,1).length(),d=1/$s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),S=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const v=d*S,E=d*_,A=h*S,P=h*_;i[0]=p*S,i[4]=-p*_,i[8]=m,i[1]=E+A*m,i[5]=v-P*m,i[9]=-h*p,i[2]=P-v*m,i[6]=A+E*m,i[10]=d*p}else if(t.order==="YXZ"){const v=p*S,E=p*_,A=m*S,P=m*_;i[0]=v+P*h,i[4]=A*h-E,i[8]=d*m,i[1]=d*_,i[5]=d*S,i[9]=-h,i[2]=E*h-A,i[6]=P+v*h,i[10]=d*p}else if(t.order==="ZXY"){const v=p*S,E=p*_,A=m*S,P=m*_;i[0]=v-P*h,i[4]=-d*_,i[8]=A+E*h,i[1]=E+A*h,i[5]=d*S,i[9]=P-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const v=d*S,E=d*_,A=h*S,P=h*_;i[0]=p*S,i[4]=A*m-E,i[8]=v*m+P,i[1]=p*_,i[5]=P*m+v,i[9]=E*m-A,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const v=d*p,E=d*m,A=h*p,P=h*m;i[0]=p*S,i[4]=P-v*_,i[8]=A*_+E,i[1]=_,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=E*_+A,i[10]=v-P*_}else if(t.order==="XZY"){const v=d*p,E=d*m,A=h*p,P=h*m;i[0]=p*S,i[4]=-_,i[8]=m*S,i[1]=v*_+P,i[5]=d*S,i[9]=E*_-A,i[2]=A*_-E,i[6]=h*S,i[10]=P*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ub,t,Lb)}lookAt(t,i,r){const l=this.elements;return di.subVectors(t,i),di.lengthSq()===0&&(di.z=1),di.normalize(),yr.crossVectors(r,di),yr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),yr.crossVectors(r,di)),yr.normalize(),uu.crossVectors(di,yr),l[0]=yr.x,l[4]=uu.x,l[8]=di.x,l[1]=yr.y,l[5]=uu.y,l[9]=di.y,l[2]=yr.z,l[6]=uu.z,l[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],S=r[1],_=r[5],v=r[9],E=r[13],A=r[2],P=r[6],T=r[10],y=r[14],b=r[3],Z=r[7],U=r[11],C=r[15],R=l[0],z=l[4],g=l[8],O=l[12],I=l[1],F=l[5],X=l[9],Y=l[13],G=l[2],W=l[6],L=l[10],k=l[14],ie=l[3],te=l[7],ne=l[11],ae=l[15];return u[0]=d*R+h*I+p*G+m*ie,u[4]=d*z+h*F+p*W+m*te,u[8]=d*g+h*X+p*L+m*ne,u[12]=d*O+h*Y+p*k+m*ae,u[1]=S*R+_*I+v*G+E*ie,u[5]=S*z+_*F+v*W+E*te,u[9]=S*g+_*X+v*L+E*ne,u[13]=S*O+_*Y+v*k+E*ae,u[2]=A*R+P*I+T*G+y*ie,u[6]=A*z+P*F+T*W+y*te,u[10]=A*g+P*X+T*L+y*ne,u[14]=A*O+P*Y+T*k+y*ae,u[3]=b*R+Z*I+U*G+C*ie,u[7]=b*z+Z*F+U*W+C*te,u[11]=b*g+Z*X+U*L+C*ne,u[15]=b*O+Z*Y+U*k+C*ae,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],p=t[9],m=t[13],S=t[2],_=t[6],v=t[10],E=t[14],A=t[3],P=t[7],T=t[11],y=t[15],b=p*E-m*v,Z=h*E-m*_,U=h*v-p*_,C=d*E-m*S,R=d*v-p*S,z=d*_-h*S;return i*(P*b-T*Z+y*U)-r*(A*b-T*C+y*R)+l*(A*Z-P*C+y*z)-u*(A*U-P*R+T*z)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],m=t[6],S=t[10];return i*(d*S-h*m)-r*(u*S-h*p)+l*(u*m-d*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],p=t[6],m=t[7],S=t[8],_=t[9],v=t[10],E=t[11],A=t[12],P=t[13],T=t[14],y=t[15],b=i*h-r*d,Z=i*p-l*d,U=i*m-u*d,C=r*p-l*h,R=r*m-u*h,z=l*m-u*p,g=S*P-_*A,O=S*T-v*A,I=S*y-E*A,F=_*T-v*P,X=_*y-E*P,Y=v*y-E*T,G=b*Y-Z*X+U*F+C*I-R*O+z*g;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/G;return t[0]=(h*Y-p*X+m*F)*W,t[1]=(l*X-r*Y-u*F)*W,t[2]=(P*z-T*R+y*C)*W,t[3]=(v*R-_*z-E*C)*W,t[4]=(p*I-d*Y-m*O)*W,t[5]=(i*Y-l*I+u*O)*W,t[6]=(T*U-A*z-y*Z)*W,t[7]=(S*z-v*U+E*Z)*W,t[8]=(d*X-h*I+m*g)*W,t[9]=(r*I-i*X-u*g)*W,t[10]=(A*R-P*U+y*b)*W,t[11]=(_*U-S*R-E*b)*W,t[12]=(h*O-d*F-p*g)*W,t[13]=(i*F-r*O+l*g)*W,t[14]=(P*Z-A*C-T*b)*W,t[15]=(S*C-_*Z+v*b)*W,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,p=t.z,m=u*d,S=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+r,S*p-l*d,0,m*p-l*h,S*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,S=d+d,_=h+h,v=u*m,E=u*S,A=u*_,P=d*S,T=d*_,y=h*_,b=p*m,Z=p*S,U=p*_,C=r.x,R=r.y,z=r.z;return l[0]=(1-(P+y))*C,l[1]=(E+U)*C,l[2]=(A-Z)*C,l[3]=0,l[4]=(E-U)*R,l[5]=(1-(v+y))*R,l[6]=(T+b)*R,l[7]=0,l[8]=(A+Z)*z,l[9]=(T-b)*z,l[10]=(1-(v+P))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=$s.set(l[0],l[1],l[2]).length();const h=$s.set(l[4],l[5],l[6]).length(),p=$s.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ii.copy(this);const m=1/d,S=1/h,_=1/p;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=S,Ii.elements[5]*=S,Ii.elements[6]*=S,Ii.elements[8]*=_,Ii.elements[9]*=_,Ii.elements[10]*=_,i.setFromRotationMatrix(Ii),r.x=d,r.y=h,r.z=p,this}makePerspective(t,i,r,l,u,d,h=ua,p=!1){const m=this.elements,S=2*u/(i-t),_=2*u/(r-l),v=(i+t)/(i-t),E=(r+l)/(r-l);let A,P;if(p)A=u/(d-u),P=d*u/(d-u);else if(h===ua)A=-(d+u)/(d-u),P=-2*d*u/(d-u);else if(h===Wu)A=-d/(d-u),P=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=P,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=ua,p=!1){const m=this.elements,S=2/(i-t),_=2/(r-l),v=-(i+t)/(i-t),E=-(r+l)/(r-l);let A,P;if(p)A=1/(d-u),P=d/(d-u);else if(h===ua)A=-2/(d-u),P=-(d+u)/(d-u);else if(h===Wu)A=-1/(d-u),P=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=A,m[14]=P,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Yu.prototype.isMatrix4=!0;let Sn=Yu;const $s=new ye,Ii=new Sn,Ub=new ye(0,0,0),Lb=new ye(1,1,1),yr=new ye,uu=new ye,di=new ye,Sx=new Sn,yx=new _o;class cs{constructor(t=0,i=0,r=0,l=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],_=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ht(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-S,E),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Sx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return yx.setFromEuler(this),this.setFromQuaternion(yx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class BS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ob=0;const Mx=new ye,eo=new _o,Ua=new Sn,fu=new ye,vl=new ye,Pb=new ye,Fb=new _o,Ex=new ye(1,0,0),Tx=new ye(0,1,0),bx=new ye(0,0,1),Ax={type:"added"},Ib={type:"removed"},to={type:"childadded",child:null},Qh={type:"childremoved",child:null};class mi extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const t=new ye,i=new cs,r=new _o,l=new ye(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Sn},normalMatrix:{value:new Et}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return eo.setFromAxisAngle(t,i),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,i){return eo.setFromAxisAngle(t,i),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(Ex,t)}rotateY(t){return this.rotateOnAxis(Tx,t)}rotateZ(t){return this.rotateOnAxis(bx,t)}translateOnAxis(t,i){return Mx.copy(t).applyQuaternion(this.quaternion),this.position.add(Mx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ex,t)}translateY(t){return this.translateOnAxis(Tx,t)}translateZ(t){return this.translateOnAxis(bx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fu.copy(t):fu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(vl,fu,this.up):Ua.lookAt(fu,vl,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),eo.setFromRotationMatrix(Ua),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ax),to.child=t,this.dispatchEvent(to),to.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ib),Qh.child=t,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ax),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,t,Pb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,Fb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const _=p[m];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),S=d(t.images),_=d(t.shapes),v=d(t.skeletons),E=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}mi.DEFAULT_UP=new ye(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class du extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bb={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ye,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ye),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ye,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ye,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const P of t.hand.values()){const T=i.getJointPose(P,r),y=this._getHandJoint(m,P);T!==null&&(y.matrix.fromArray(T.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=T.radius),y.visible=T!==null}const S=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=S.position.distanceTo(_.position),E=.02,A=.005;m.inputState.pinching&&v>E+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=E-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Bb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new du;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const zS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},hu={h:0,s:0,l:0};function $h(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Vt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=zt.workingColorSpace){return this.r=t,this.g=i,this.b=r,zt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=zt.workingColorSpace){if(t=bb(t,1),i=Ht(i,0,1),r=Ht(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=$h(d,u,t+1/3),this.g=$h(d,u,t),this.b=$h(d,u,t-1/3)}return zt.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function r(u){u!==void 0&&parseFloat(u)<1&&xt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:xt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=zS[t.toLowerCase()];return r!==void 0?this.setHex(r,i):xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return zt.workingToColorSpace(zn.copy(this),t),Math.round(Ht(zn.r*255,0,255))*65536+Math.round(Ht(zn.g*255,0,255))*256+Math.round(Ht(zn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=zt.workingColorSpace){zt.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,u=zn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=S<=.5?_/(d+h):_/(2-d-h),d){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=S,t}getRGB(t,i=zt.workingColorSpace){return zt.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=pi){zt.workingToColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Mr),this.setHSL(Mr.h+t,Mr.s+i,Mr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Mr),t.getHSL(hu);const r=qh(Mr.h,hu.h,i),l=qh(Mr.s,hu.s,i),u=qh(Mr.l,hu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Vt;Vt.NAMES=zS;class zb extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new ye,La=new ye,ep=new ye,Oa=new ye,no=new ye,io=new ye,Rx=new ye,tp=new ye,np=new ye,ip=new ye,ap=new dn,rp=new dn,sp=new dn;class Gi{constructor(t=new ye,i=new ye,r=new ye){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Bi.subVectors(t,i),l.cross(Bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Bi.subVectors(l,i),La.subVectors(r,i),ep.subVectors(t,i);const d=Bi.dot(Bi),h=Bi.dot(La),p=Bi.dot(ep),m=La.dot(La),S=La.dot(ep),_=d*m-h*h;if(_===0)return u.set(0,0,0),null;const v=1/_,E=(m*p-h*S)*v,A=(d*S-h*p)*v;return u.set(1-E-A,A,E)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(t,i,r,l,u,d,h,p){return this.getBarycoord(t,i,r,l,Oa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Oa.x),p.addScaledVector(d,Oa.y),p.addScaledVector(h,Oa.z),p)}static getInterpolatedAttribute(t,i,r,l,u,d){return ap.setScalar(0),rp.setScalar(0),sp.setScalar(0),ap.fromBufferAttribute(t,i),rp.fromBufferAttribute(t,r),sp.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(ap,u.x),d.addScaledVector(rp,u.y),d.addScaledVector(sp,u.z),d}static isFrontFacing(t,i,r,l){return Bi.subVectors(r,i),La.subVectors(t,i),Bi.cross(La).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Bi.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;no.subVectors(l,r),io.subVectors(u,r),tp.subVectors(t,r);const p=no.dot(tp),m=io.dot(tp);if(p<=0&&m<=0)return i.copy(r);np.subVectors(t,l);const S=no.dot(np),_=io.dot(np);if(S>=0&&_<=S)return i.copy(l);const v=p*_-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(r).addScaledVector(no,d);ip.subVectors(t,u);const E=no.dot(ip),A=io.dot(ip);if(A>=0&&E<=A)return i.copy(u);const P=E*m-p*A;if(P<=0&&m>=0&&A<=0)return h=m/(m-A),i.copy(r).addScaledVector(io,h);const T=S*A-E*_;if(T<=0&&_-S>=0&&E-A>=0)return Rx.subVectors(u,l),h=(_-S)/(_-S+(E-A)),i.copy(l).addScaledVector(Rx,h);const y=1/(T+P+v);return d=P*y,h=v*y,i.copy(r).addScaledVector(no,d).addScaledVector(io,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ll{constructor(t=new ye(1/0,1/0,1/0),i=new ye(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,zi):zi.fromBufferAttribute(u,d),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pu.copy(r.boundingBox)),pu.applyMatrix4(t.matrixWorld),this.union(pu)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_l),mu.subVectors(this.max,_l),ao.subVectors(t.a,_l),ro.subVectors(t.b,_l),so.subVectors(t.c,_l),Er.subVectors(ro,ao),Tr.subVectors(so,ro),$r.subVectors(ao,so);let i=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-$r.z,$r.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,$r.z,0,-$r.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-$r.y,$r.x,0];return!op(i,ao,ro,so,mu)||(i=[1,0,0,0,1,0,0,0,1],!op(i,ao,ro,so,mu))?!1:(gu.crossVectors(Er,Tr),i=[gu.x,gu.y,gu.z],op(i,ao,ro,so,mu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pa=[new ye,new ye,new ye,new ye,new ye,new ye,new ye,new ye],zi=new ye,pu=new Ll,ao=new ye,ro=new ye,so=new ye,Er=new ye,Tr=new ye,$r=new ye,_l=new ye,mu=new ye,gu=new ye,es=new ye;function op(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){es.fromArray(o,u);const h=l.x*Math.abs(es.x)+l.y*Math.abs(es.y)+l.z*Math.abs(es.z),p=t.dot(es),m=i.dot(es),S=r.dot(es);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const _n=new ye,vu=new Xt;let Hb=0;class ka extends us{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Sb,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vu.fromBufferAttribute(this,i),vu.applyMatrix3(t),this.setXY(i,vu.x,vu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=gl(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=gl(i,this.array)),i}setX(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=gl(i,this.array)),i}setY(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=gl(i,this.array)),i}setZ(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=gl(i,this.array)),i}setW(t,i){return this.normalized&&(i=$n(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array),u=$n(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class HS extends ka{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class GS extends ka{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Xa extends ka{constructor(t,i,r){super(new Float32Array(t),i,r)}}const Gb=new Ll,xl=new ye,lp=new ye;class bm{constructor(t=new ye,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Gb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xl.subVectors(t,this.center);const i=xl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(xl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xl.copy(t.center).add(lp)),this.expandByPoint(xl.copy(t.center).sub(lp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Vb=0;const Ri=new Sn,cp=new mi,oo=new ye,hi=new Ll,Sl=new Ll,Cn=new ye;class qa extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yb(t)?GS:HS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Et().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,i,r){return Ri.makeTranslation(t,i,r),this.applyMatrix4(Ri),this}scale(t,i,r){return Ri.makeScale(t,i,r),this.applyMatrix4(Ri),this}lookAt(t){return cp.lookAt(t),cp.updateMatrix(),this.applyMatrix4(cp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Xa(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ye(-1/0,-1/0,-1/0),new ye(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];hi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bm);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ye,1/0);return}if(t){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Sl.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(hi.min,Sl.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,Sl.max),hi.expandByPoint(Cn)):(hi.expandByPoint(Sl.min),hi.expandByPoint(Sl.max))}hi.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)Cn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)Cn.fromBufferAttribute(h,m),p&&(oo.fromBufferAttribute(t,m),Cn.add(oo)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new ka(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let g=0;g<r.count;g++)h[g]=new ye,p[g]=new ye;const m=new ye,S=new ye,_=new ye,v=new Xt,E=new Xt,A=new Xt,P=new ye,T=new ye;function y(g,O,I){m.fromBufferAttribute(r,g),S.fromBufferAttribute(r,O),_.fromBufferAttribute(r,I),v.fromBufferAttribute(u,g),E.fromBufferAttribute(u,O),A.fromBufferAttribute(u,I),S.sub(m),_.sub(m),E.sub(v),A.sub(v);const F=1/(E.x*A.y-A.x*E.y);isFinite(F)&&(P.copy(S).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(F),T.copy(_).multiplyScalar(E.x).addScaledVector(S,-A.x).multiplyScalar(F),h[g].add(P),h[O].add(P),h[I].add(P),p[g].add(T),p[O].add(T),p[I].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let g=0,O=b.length;g<O;++g){const I=b[g],F=I.start,X=I.count;for(let Y=F,G=F+X;Y<G;Y+=3)y(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const Z=new ye,U=new ye,C=new ye,R=new ye;function z(g){C.fromBufferAttribute(l,g),R.copy(C);const O=h[g];Z.copy(O),Z.sub(C.multiplyScalar(C.dot(O))).normalize(),U.crossVectors(R,O);const F=U.dot(p[g])<0?-1:1;d.setXYZW(g,Z.x,Z.y,Z.z,F)}for(let g=0,O=b.length;g<O;++g){const I=b[g],F=I.start,X=I.count;for(let Y=F,G=F+X;Y<G;Y+=3)z(t.getX(Y+0)),z(t.getX(Y+1)),z(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ka(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const l=new ye,u=new ye,d=new ye,h=new ye,p=new ye,m=new ye,S=new ye,_=new ye;if(t)for(let v=0,E=t.count;v<E;v+=3){const A=t.getX(v+0),P=t.getX(v+1),T=t.getX(v+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,T),S.subVectors(d,u),_.subVectors(l,u),S.cross(_),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,T),h.add(S),p.add(S),m.add(S),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(P,p.x,p.y,p.z),r.setXYZ(T,m.x,m.y,m.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,u),_.subVectors(l,u),S.cross(_),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(h,p){const m=h.array,S=h.itemSize,_=h.normalized,v=new m.constructor(p.length*S);let E=0,A=0;for(let P=0,T=p.length;P<T;P++){h.isInterleavedBufferAttribute?E=p[P]*h.data.stride+h.offset:E=p[P]*S;for(let y=0;y<S;y++)v[A++]=m[E++]}return new ka(v,S,_)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qa,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let S=0,_=m.length;S<_;S++){const v=m[S],E=t(v,r);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let _=0,v=m.length;_<v;_++){const E=m[_];S.push(E.toJSON(t.data))}S.length>0&&(l[p]=S,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const u=t.morphAttributes;for(const m in u){const S=[],_=u[m];for(let v=0,E=_.length;v<E;v++)S.push(_[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,S=d.length;m<S;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new ye,kb=new ye,Xb=new Et;class Rr{constructor(t=new ye(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=up.subVectors(r,i).cross(kb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(up),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Xb.getNormalMatrix(t),l=this.coplanarPoint(up).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Wb=0;class ju extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=Rl,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_S,this.blendDst=xS,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xh,this.stencilZFail=Xh,this.stencilZPass=Xh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){xt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){xt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new Rr().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xt().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Fa=new ye,fp=new ye,_u=new ye,xu=new ye;class qb{constructor(t=new ye,i=new ye(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Fa.copy(this.origin).addScaledVector(this.direction,i),Fa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){fp.copy(t).add(i).multiplyScalar(.5),_u.copy(i).sub(t).normalize(),xu.copy(this.origin).sub(fp);const u=t.distanceTo(i)*.5,d=-this.direction.dot(_u),h=xu.dot(this.direction),p=-xu.dot(_u),m=xu.lengthSq(),S=Math.abs(1-d*d);let _,v,E,A;if(S>0)if(_=d*p-h,v=d*h-p,A=u*S,_>=0)if(v>=-A)if(v<=A){const P=1/S;_*=P,v*=P,E=_*(_+d*v+2*h)+v*(d*_+v+2*p)+m}else v=u,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;else v=-u,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;else v<=-A?(_=Math.max(0,-(-d*u+h)),v=_>0?-u:Math.min(Math.max(-u,-p),u),E=-_*_+v*(v+2*p)+m):v<=A?(_=0,v=Math.min(Math.max(-u,-p),u),E=v*(v+2*p)+m):(_=Math.max(0,-(d*u+h)),v=_>0?u:Math.min(Math.max(-u,-p),u),E=-_*_+v*(v+2*p)+m);else v=d>0?-u:u,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(fp).addScaledVector(_u,v),E}intersectSphere(t,i){if(t.radius<0)return null;Fa.subVectors(t.center,this.origin);const r=Fa.dot(this.direction),l=Fa.dot(Fa)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),S>=0?(u=(t.min.y-v.y)*S,d=(t.max.y-v.y)*S):(u=(t.max.y-v.y)*S,d=(t.min.y-v.y)*S),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Fa)!==null}intersectTriangle(t,i,r,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,_=t.x-d.x,v=t.y-d.y,E=t.z-d.z,A=i.x-d.x,P=i.y-d.y,T=i.z-d.z,y=r.x-d.x,b=r.y-d.y,Z=r.z-d.z,U=Math.abs(p),C=Math.abs(m),R=Math.abs(S);let z,g,O,I,F,X,Y,G,W,L,k,ie;if(U>=C&&U>=R?(O=p,X=_,W=A,ie=y,p>=0?(z=m,g=S,I=v,F=E,Y=P,G=T,L=b,k=Z):(z=S,g=m,I=E,F=v,Y=T,G=P,L=Z,k=b)):C>=R?(O=m,X=v,W=P,ie=b,m>=0?(z=S,g=p,I=E,F=_,Y=T,G=A,L=Z,k=y):(z=p,g=S,I=_,F=E,Y=A,G=T,L=y,k=Z)):(O=S,X=E,W=T,ie=Z,S>=0?(z=p,g=m,I=_,F=v,Y=A,G=P,L=y,k=b):(z=m,g=p,I=v,F=_,Y=P,G=A,L=b,k=y)),O===0)return null;const te=z/O,ne=g/O,ae=1/O,Oe=I-te*X,Le=F-ne*X,H=Y-te*W,de=G-ne*W,Ce=L-te*ie,j=k-ne*ie,le=Ce*de-j*H,Me=Oe*j-Le*Ce,Ne=H*Le-de*Oe;if(l){if(le<0||Me<0||Ne<0)return null}else if((le<0||Me<0||Ne<0)&&(le>0||Me>0||Ne>0))return null;const Se=le+Me+Ne;if(Se===0)return null;const Ae=ae*(le*X+Me*W+Ne*ie);return(Se>0?Ae<0:Ae>0)?null:this.at(Ae/Se,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class VS extends ju{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=SS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Cx=new Sn,ts=new qb,Su=new bm,wx=new ye,yu=new ye,Mu=new ye,Eu=new ye,dp=new ye,Tu=new ye,Nx=new ye,bu=new ye;class pa extends mi{constructor(t=new qa,i=new VS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Tu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const S=h[p],_=u[p];S!==0&&(dp.fromBufferAttribute(_,t),d?Tu.addScaledVector(dp,S):Tu.addScaledVector(dp.sub(i),S))}i.add(Tu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Su.copy(r.boundingSphere),Su.applyMatrix4(u),ts.copy(t.ray).recast(t.near),!(Su.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Su,wx)===null||ts.origin.distanceToSquared(wx)>(t.far-t.near)**2))&&(Cx.copy(u).invert(),ts.copy(t.ray).applyMatrix4(Cx),!(r.boundingBox!==null&&ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ts)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,S=u.attributes.uv1,_=u.attributes.normal,v=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,P=v.length;A<P;A++){const T=v[A],y=d[T.materialIndex],b=Math.max(T.start,E.start),Z=Math.min(h.count,Math.min(T.start+T.count,E.start+E.count));for(let U=b,C=Z;U<C;U+=3){const R=h.getX(U),z=h.getX(U+1),g=h.getX(U+2);l=Au(this,y,t,r,m,S,_,R,z,g),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),P=Math.min(h.count,E.start+E.count);for(let T=A,y=P;T<y;T+=3){const b=h.getX(T),Z=h.getX(T+1),U=h.getX(T+2);l=Au(this,d,t,r,m,S,_,b,Z,U),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let A=0,P=v.length;A<P;A++){const T=v[A],y=d[T.materialIndex],b=Math.max(T.start,E.start),Z=Math.min(p.count,Math.min(T.start+T.count,E.start+E.count));for(let U=b,C=Z;U<C;U+=3){const R=U,z=U+1,g=U+2;l=Au(this,y,t,r,m,S,_,R,z,g),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),P=Math.min(p.count,E.start+E.count);for(let T=A,y=P;T<y;T+=3){const b=T,Z=T+1,U=T+2;l=Au(this,d,t,r,m,S,_,b,Z,U),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}}}function Yb(o,t,i,r,l,u,d,h){let p;if(t.side===ei?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,t.side===ss,h),p===null)return null;bu.copy(h),bu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(bu);return m<i.near||m>i.far?null:{distance:m,point:bu.clone(),object:o}}function Au(o,t,i,r,l,u,d,h,p,m){o.getVertexPosition(h,yu),o.getVertexPosition(p,Mu),o.getVertexPosition(m,Eu);const S=Yb(o,t,i,r,yu,Mu,Eu,Nx);if(S){const _=new ye;Gi.getBarycoord(Nx,yu,Mu,Eu,_),l&&(S.uv=Gi.getInterpolatedAttribute(l,h,p,m,_,new Xt)),u&&(S.uv1=Gi.getInterpolatedAttribute(u,h,p,m,_,new Xt)),d&&(S.normal=Gi.getInterpolatedAttribute(d,h,p,m,_,new ye),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new ye,materialIndex:0};Gi.getNormal(yu,Mu,Eu,v.normal),S.face=v,S.barycoord=_}return S}class Zb extends Yn{constructor(t=null,i=1,r=1,l,u,d,h,p,m=Fn,S=Fn,_,v){super(null,d,h,p,m,S,l,u,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ns=new bm,jb=new Xt(.5,.5),Ru=new ye;class kS{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,u=new Rr,d=new Rr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ua,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],p=u[2],m=u[3],S=u[4],_=u[5],v=u[6],E=u[7],A=u[8],P=u[9],T=u[10],y=u[11],b=u[12],Z=u[13],U=u[14],C=u[15];if(l[0].setComponents(m-d,E-S,y-A,C-b).normalize(),l[1].setComponents(m+d,E+S,y+A,C+b).normalize(),l[2].setComponents(m+h,E+_,y+P,C+Z).normalize(),l[3].setComponents(m-h,E-_,y-P,C-Z).normalize(),r)l[4].setComponents(p,v,T,U).normalize(),l[5].setComponents(m-p,E-v,y-T,C-U).normalize();else if(l[4].setComponents(m-p,E-v,y-T,C-U).normalize(),i===ua)l[5].setComponents(m+p,E+v,y+T,C+U).normalize();else if(i===Wu)l[5].setComponents(p,v,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);const i=jb.distanceTo(t.center);return ns.radius=.7071067811865476+i,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ru.x=l.normal.x>0?t.max.x:t.min.x,Ru.y=l.normal.y>0?t.max.y:t.min.y,Ru.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class XS extends Yn{constructor(t=[],i=os,r,l,u,d,h,p,m,S){super(t,i,r,l,u,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dl extends Yn{constructor(t,i,r=da,l,u,d,h=Fn,p=Fn,m,S=Wa,_=1){if(S!==Wa&&S!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,u,d,h,p,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class Kb extends Dl{constructor(t,i=da,r=os,l,u,d=Fn,h=Fn,p,m=Wa){const S={width:t,height:t,depth:1},_=[S,S,S,S,S,S];super(t,t,i,r,l,u,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class WS extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ol extends qa{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],S=[],_=[];let v=0,E=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Xa(m,3)),this.setAttribute("normal",new Xa(S,3)),this.setAttribute("uv",new Xa(_,2));function A(P,T,y,b,Z,U,C,R,z,g,O){const I=U/z,F=C/g,X=U/2,Y=C/2,G=R/2,W=z+1,L=g+1;let k=0,ie=0;const te=new ye;for(let ne=0;ne<L;ne++){const ae=ne*F-Y;for(let Oe=0;Oe<W;Oe++){const Le=Oe*I-X;te[P]=Le*b,te[T]=ae*Z,te[y]=G,m.push(te.x,te.y,te.z),te[P]=0,te[T]=0,te[y]=R>0?1:-1,S.push(te.x,te.y,te.z),_.push(Oe/z),_.push(1-ne/g),k+=1}}for(let ne=0;ne<g;ne++)for(let ae=0;ae<z;ae++){const Oe=v+ae+W*ne,Le=v+ae+W*(ne+1),H=v+(ae+1)+W*(ne+1),de=v+(ae+1)+W*ne;p.push(Oe,Le,de),p.push(Le,H,de),ie+=6}h.addGroup(E,ie,O),E+=ie,v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Pl extends qa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,S=p+1,_=t/h,v=i/p,E=[],A=[],P=[],T=[];for(let y=0;y<S;y++){const b=y*v-d;for(let Z=0;Z<m;Z++){const U=Z*_-u;A.push(U,-b,0),P.push(0,0,1),T.push(Z/h),T.push(1-y/p)}}for(let y=0;y<p;y++)for(let b=0;b<h;b++){const Z=b+m*y,U=b+m*(y+1),C=b+1+m*(y+1),R=b+1+m*y;E.push(Z,U,R),E.push(U,C,R)}this.setIndex(E),this.setAttribute("position",new Xa(A,3)),this.setAttribute("normal",new Xa(P,3)),this.setAttribute("uv",new Xa(T,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.width,t.height,t.widthSegments,t.heightSegments)}}function vo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];if(Dx(l))l.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(Dx(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();t[i][r]=u}else t[i][r]=l.slice();else t[i][r]=l}}return t}function qn(o){const t={};for(let i=0;i<o.length;i++){const r=vo(o[i]);for(const l in r)t[l]=r[l]}return t}function Dx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Qb(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function qS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:zt.workingColorSpace}const Jb={clone:vo,merge:qn};var $b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ju{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$b,this.fragmentShader=eA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vo(t.uniforms),this.uniformsGroups=Qb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Vt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Xt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new ye().fromArray(l.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new Et().fromArray(l.value);break;case"m4":this.uniforms[r].value=new Sn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class tA extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nA extends ju{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iA extends ju{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cu=new ye,wu=new _o,sa=new ye;class Am extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cu,wu,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cu,wu,sa.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(Cu,wu,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cu,wu,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new ye,Ux=new Xt,Lx=new Xt;class Hi extends Am{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=lm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lm*2*Math.atan(Math.tan(Wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-t/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(br.x,br.y).multiplyScalar(-t/br.z)}getViewSize(t,i){return this.getViewBounds(t,Ux,Lx),i.subVectors(Lx,Ux)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class YS extends Am{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const lo=-90,co=1;class aA extends mi{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Hi(lo,co,t,i);l.layers=this.layers,this.add(l);const u=new Hi(lo,co,t,i);u.layers=this.layers,this.add(u);const d=new Hi(lo,co,t,i);d.layers=this.layers,this.add(d);const h=new Hi(lo,co,t,i);h.layers=this.layers,this.add(h);const p=new Hi(lo,co,t,i);p.layers=this.layers,this.add(p);const m=new Hi(lo,co,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(t===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,S]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let T=!1;t.isWebGLRenderer===!0?T=t.state.buffers.depth.getReversed():T=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),T&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),T&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,l),T&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,3,l),T&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,4,l),T&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.generateMipmaps=P,t.setRenderTarget(r,5,l),T&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(_,v,E),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class rA extends Hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Dm=class Dm{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=r,u[3]=l,this}};Dm.prototype.isMatrix2=!0;let Ox=Dm;function Px(o,t,i,r){const l=sA(r);switch(i){case LS:return o*t;case PS:return o*t/l.components*l.byteLength;case xm:return o*t/l.components*l.byteLength;case ls:return o*t*2/l.components*l.byteLength;case Sm:return o*t*2/l.components*l.byteLength;case OS:return o*t*3/l.components*l.byteLength;case Vi:return o*t*4/l.components*l.byteLength;case ym:return o*t*4/l.components*l.byteLength;case Ou:case Pu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fu:case Iu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Lp:case Pp:return Math.max(o,16)*Math.max(t,8)/4;case Up:case Op:return Math.max(o,8)*Math.max(t,8)/2;case Fp:case Ip:case zp:case Hp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bp:case Gu:case Gp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Xp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case qp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case jp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Kp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case em:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case tm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case nm:case im:case am:return Math.ceil(o/4)*Math.ceil(t/4)*16;case rm:case sm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vu:case om:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sA(o){switch(o){case Ci:case wS:return{byteLength:1,components:1};case wl:case NS:case ha:return{byteLength:2,components:1};case vm:case _m:return{byteLength:2,components:4};case da:case gm:case ca:return{byteLength:4,components:1};case DS:case US:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mm}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ZS(){let o=null,t=!1,i=null,r=null;function l(u,d){r=o.requestAnimationFrame(l),i(u,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function oA(o){const t=new WeakMap;function i(h,p){const m=h.array,S=h.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const S=p.array,_=p.updateRanges;if(o.bindBuffer(m,h),_.length===0)o.bufferSubData(m,0,S);else{_.sort((E,A)=>E.start-A.start);let v=0;for(let E=1;E<_.length;E++){const A=_[v],P=_[E];P.start<=A.start+A.count+1?A.count=Math.max(A.count,P.start+P.count-A.start):(++v,_[v]=P)}_.length=v+1;for(let E=0,A=_.length;E<A;E++){const P=_[E];o.bufferSubData(m,P.start*S.BYTES_PER_ELEMENT,S,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(o.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=t.get(h);(!S||S.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var lA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,OA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BA="gl_FragColor = linearToOutputTexel( gl_FragColor );",zA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,GA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$A=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,e2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,t2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,l2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,b2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,B2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,J2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:lA,alphahash_pars_fragment:cA,alphamap_fragment:uA,alphamap_pars_fragment:fA,alphatest_fragment:dA,alphatest_pars_fragment:hA,aomap_fragment:pA,aomap_pars_fragment:mA,batching_pars_vertex:gA,batching_vertex:vA,begin_vertex:_A,beginnormal_vertex:xA,bsdfs:SA,iridescence_fragment:yA,bumpmap_pars_fragment:MA,clipping_planes_fragment:EA,clipping_planes_pars_fragment:TA,clipping_planes_pars_vertex:bA,clipping_planes_vertex:AA,color_fragment:RA,color_pars_fragment:CA,color_pars_vertex:wA,color_vertex:NA,common:DA,cube_uv_reflection_fragment:UA,defaultnormal_vertex:LA,displacementmap_pars_vertex:OA,displacementmap_vertex:PA,emissivemap_fragment:FA,emissivemap_pars_fragment:IA,colorspace_fragment:BA,colorspace_pars_fragment:zA,envmap_fragment:HA,envmap_common_pars_fragment:GA,envmap_pars_fragment:VA,envmap_pars_vertex:kA,envmap_physical_pars_fragment:e2,envmap_vertex:XA,fog_vertex:WA,fog_pars_vertex:qA,fog_fragment:YA,fog_pars_fragment:ZA,gradientmap_pars_fragment:jA,lightmap_pars_fragment:KA,lights_lambert_fragment:QA,lights_lambert_pars_fragment:JA,lights_pars_begin:$A,lights_toon_fragment:t2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:a2,lights_physical_fragment:r2,lights_physical_pars_fragment:s2,lights_fragment_begin:o2,lights_fragment_maps:l2,lights_fragment_end:c2,lightprobes_pars_fragment:u2,logdepthbuf_fragment:f2,logdepthbuf_pars_fragment:d2,logdepthbuf_pars_vertex:h2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:v2,map_particle_pars_fragment:_2,metalnessmap_fragment:x2,metalnessmap_pars_fragment:S2,morphinstance_vertex:y2,morphcolor_vertex:M2,morphnormal_vertex:E2,morphtarget_pars_vertex:T2,morphtarget_vertex:b2,normal_fragment_begin:A2,normal_fragment_maps:R2,normal_pars_fragment:C2,normal_pars_vertex:w2,normal_vertex:N2,normalmap_pars_fragment:D2,clearcoat_normal_fragment_begin:U2,clearcoat_normal_fragment_maps:L2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:P2,opaque_fragment:F2,packing:I2,premultiplied_alpha_fragment:B2,project_vertex:z2,dithering_fragment:H2,dithering_pars_fragment:G2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:k2,shadowmap_pars_fragment:X2,shadowmap_pars_vertex:W2,shadowmap_vertex:q2,shadowmask_pars_fragment:Y2,skinbase_vertex:Z2,skinning_pars_vertex:j2,skinning_vertex:K2,skinnormal_vertex:Q2,specularmap_fragment:J2,specularmap_pars_fragment:$2,tonemapping_fragment:eR,tonemapping_pars_fragment:tR,transmission_fragment:nR,transmission_pars_fragment:iR,uv_pars_fragment:aR,uv_pars_vertex:rR,uv_vertex:sR,worldpos_vertex:oR,background_vert:lR,background_frag:cR,backgroundCube_vert:uR,backgroundCube_frag:fR,cube_vert:dR,cube_frag:hR,depth_vert:pR,depth_frag:mR,distance_vert:gR,distance_frag:vR,equirect_vert:_R,equirect_frag:xR,linedashed_vert:SR,linedashed_frag:yR,meshbasic_vert:MR,meshbasic_frag:ER,meshlambert_vert:TR,meshlambert_frag:bR,meshmatcap_vert:AR,meshmatcap_frag:RR,meshnormal_vert:CR,meshnormal_frag:wR,meshphong_vert:NR,meshphong_frag:DR,meshphysical_vert:UR,meshphysical_frag:LR,meshtoon_vert:OR,meshtoon_frag:PR,points_vert:FR,points_frag:IR,shadow_vert:BR,shadow_frag:zR,sprite_vert:HR,sprite_frag:GR},Ke={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ye},probesMax:{value:new ye},probesResolution:{value:new ye}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},la={basic:{uniforms:qn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:qn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:qn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:qn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:qn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:qn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:qn([Ke.points,Ke.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:qn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:qn([Ke.common,Ke.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:qn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:qn([Ke.sprite,Ke.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:qn([Ke.common,Ke.displacementmap,{referencePosition:{value:new ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:qn([Ke.lights,Ke.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};la.physical={uniforms:qn([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Nu={r:0,b:0,g:0},VR=new Sn,jS=new Et;jS.set(-1,0,0,0,1,0,0,0,1);function kR(o,t,i,r,l,u){const d=new Vt(0);let h=l===!0?0:1,p,m,S=null,_=0,v=null;function E(b){let Z=b.isScene===!0?b.background:null;if(Z&&Z.isTexture){const U=b.backgroundBlurriness>0;Z=t.get(Z,U)}return Z}function A(b){let Z=!1;const U=E(b);U===null?T(d,h):U&&U.isColor&&(T(U,1),Z=!0);const C=o.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,u):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||Z)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function P(b,Z){const U=E(Z);U&&(U.isCubeTexture||U.mapping===Zu)?(m===void 0&&(m=new pa(new Ol(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:vo(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(C,R,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=U,m.material.uniforms.backgroundBlurriness.value=Z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=Z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(VR.makeRotationFromEuler(Z.backgroundRotation)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(jS),m.material.toneMapped=zt.getTransfer(U.colorSpace)!==Jt,(S!==U||_!==U.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=U,_=U.version,v=o.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new pa(new Pl(2,2),new Xi({name:"BackgroundMaterial",uniforms:vo(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=Z.backgroundIntensity,p.material.toneMapped=zt.getTransfer(U.colorSpace)!==Jt,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(S!==U||_!==U.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=U,_=U.version,v=o.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function T(b,Z){b.getRGB(Nu,qS(o)),i.buffers.color.setClear(Nu.r,Nu.g,Nu.b,Z,u)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(b,Z=1){d.set(b),h=Z,T(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,T(d,h)},render:A,addToRenderList:P,dispose:y}}function XR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function h(F,X,Y,G,W){let L=!1;const k=_(F,G,Y,X);u!==k&&(u=k,m(u.object)),L=E(F,G,Y,W),L&&A(F,G,Y,W),W!==null&&t.update(W,o.ELEMENT_ARRAY_BUFFER),(L||d)&&(d=!1,U(F,X,Y,G),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function p(){return o.createVertexArray()}function m(F){return o.bindVertexArray(F)}function S(F){return o.deleteVertexArray(F)}function _(F,X,Y,G){const W=G.wireframe===!0;let L=r[X.id];L===void 0&&(L={},r[X.id]=L);const k=F.isInstancedMesh===!0?F.id:0;let ie=L[k];ie===void 0&&(ie={},L[k]=ie);let te=ie[Y.id];te===void 0&&(te={},ie[Y.id]=te);let ne=te[W];return ne===void 0&&(ne=v(p()),te[W]=ne),ne}function v(F){const X=[],Y=[],G=[];for(let W=0;W<i;W++)X[W]=0,Y[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:G,object:F,attributes:{},index:null}}function E(F,X,Y,G){const W=u.attributes,L=X.attributes;let k=0;const ie=Y.getAttributes();for(const te in ie)if(ie[te].location>=0){const ae=W[te];let Oe=L[te];if(Oe===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(Oe=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(Oe=F.instanceColor)),ae===void 0||ae.attribute!==Oe||Oe&&ae.data!==Oe.data)return!0;k++}return u.attributesNum!==k||u.index!==G}function A(F,X,Y,G){const W={},L=X.attributes;let k=0;const ie=Y.getAttributes();for(const te in ie)if(ie[te].location>=0){let ae=L[te];ae===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));const Oe={};Oe.attribute=ae,ae&&ae.data&&(Oe.data=ae.data),W[te]=Oe,k++}u.attributes=W,u.attributesNum=k,u.index=G}function P(){const F=u.newAttributes;for(let X=0,Y=F.length;X<Y;X++)F[X]=0}function T(F){y(F,0)}function y(F,X){const Y=u.newAttributes,G=u.enabledAttributes,W=u.attributeDivisors;Y[F]=1,G[F]===0&&(o.enableVertexAttribArray(F),G[F]=1),W[F]!==X&&(o.vertexAttribDivisor(F,X),W[F]=X)}function b(){const F=u.newAttributes,X=u.enabledAttributes;for(let Y=0,G=X.length;Y<G;Y++)X[Y]!==F[Y]&&(o.disableVertexAttribArray(Y),X[Y]=0)}function Z(F,X,Y,G,W,L,k){k===!0?o.vertexAttribIPointer(F,X,Y,W,L):o.vertexAttribPointer(F,X,Y,G,W,L)}function U(F,X,Y,G){P();const W=G.attributes,L=Y.getAttributes(),k=X.defaultAttributeValues;for(const ie in L){const te=L[ie];if(te.location>=0){let ne=W[ie];if(ne===void 0&&(ie==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),ie==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){const ae=ne.normalized,Oe=ne.itemSize,Le=t.get(ne);if(Le===void 0)continue;const H=Le.buffer,de=Le.type,Ce=Le.bytesPerElement,j=de===o.INT||de===o.UNSIGNED_INT||ne.gpuType===gm;if(ne.isInterleavedBufferAttribute){const le=ne.data,Me=le.stride,Ne=ne.offset;if(le.isInstancedInterleavedBuffer){for(let Se=0;Se<te.locationSize;Se++)y(te.location+Se,le.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<te.locationSize;Se++)T(te.location+Se);o.bindBuffer(o.ARRAY_BUFFER,H);for(let Se=0;Se<te.locationSize;Se++)Z(te.location+Se,Oe/te.locationSize,de,ae,Me*Ce,(Ne+Oe/te.locationSize*Se)*Ce,j)}else{if(ne.isInstancedBufferAttribute){for(let le=0;le<te.locationSize;le++)y(te.location+le,ne.meshPerAttribute);F.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<te.locationSize;le++)T(te.location+le);o.bindBuffer(o.ARRAY_BUFFER,H);for(let le=0;le<te.locationSize;le++)Z(te.location+le,Oe/te.locationSize,de,ae,Oe*Ce,Oe/te.locationSize*le*Ce,j)}}else if(k!==void 0){const ae=k[ie];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(te.location,ae);break;case 3:o.vertexAttrib3fv(te.location,ae);break;case 4:o.vertexAttrib4fv(te.location,ae);break;default:o.vertexAttrib1fv(te.location,ae)}}}}b()}function C(){O();for(const F in r){const X=r[F];for(const Y in X){const G=X[Y];for(const W in G){const L=G[W];for(const k in L)S(L[k].object),delete L[k];delete G[W]}}delete r[F]}}function R(F){if(r[F.id]===void 0)return;const X=r[F.id];for(const Y in X){const G=X[Y];for(const W in G){const L=G[W];for(const k in L)S(L[k].object),delete L[k];delete G[W]}}delete r[F.id]}function z(F){for(const X in r){const Y=r[X];for(const G in Y){const W=Y[G];if(W[F.id]===void 0)continue;const L=W[F.id];for(const k in L)S(L[k].object),delete L[k];delete W[F.id]}}}function g(F){for(const X in r){const Y=r[X],G=F.isInstancedMesh===!0?F.id:0,W=Y[G];if(W!==void 0){for(const L in W){const k=W[L];for(const ie in k)S(k[ie].object),delete k[ie];delete W[L]}delete Y[G],Object.keys(Y).length===0&&delete r[X]}}}function O(){I(),d=!0,u!==l&&(u=l,m(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:g,releaseStatesOfProgram:z,initAttributes:P,enableAttribute:T,disableUnusedAttributes:b}}function WR(o,t,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(r,p,m,S),i.update(m,r,S))}function h(p,m,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,S);let v=0;for(let E=0;E<S;E++)v+=m[E];i.update(v,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function qR(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Vi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const g=z===ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ci&&z!==ca&&!g&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(xt("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),b=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),Z=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=o.getParameter(o.MAX_SAMPLES),R=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:A,maxTextureSize:P,maxCubemapSize:T,maxAttributes:y,maxVertexUniforms:b,maxVaryings:Z,maxFragmentUniforms:U,maxSamples:C,samples:R}}function YR(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Rr,h=new Et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||r!==0||l;return l=v,r=_.length,E},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){i=S(_,v,0)},this.setState=function(_,v,E){const A=_.clippingPlanes,P=_.clipIntersection,T=_.clipShadows,y=o.get(_);if(!l||A===null||A.length===0||u&&!T)u?S(null):m();else{const b=u?0:r,Z=b*4;let U=y.clippingState||null;p.value=U,U=S(A,v,Z,E);for(let C=0;C!==Z;++C)U[C]=i[C];y.clippingState=U,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function S(_,v,E,A){const P=_!==null?_.length:0;let T=null;if(P!==0){if(T=p.value,A!==!0||T===null){const y=E+P*4,b=v.matrixWorldInverse;h.getNormalMatrix(b),(T===null||T.length<y)&&(T=new Float32Array(y));for(let Z=0,U=E;Z!==P;++Z,U+=4)d.copy(_[Z]).applyMatrix4(b,h),d.normal.toArray(T,U),T[U+3]=d.constant}p.value=T,p.needsUpdate=!0}return t.numPlanes=P,t.numIntersection=0,T}}const ho=4,ZR=6,jR=20,KR=256,yl=new YS,Fx=new Vt;let hp=null,pp=0,mp=0,gp=!1;const QR=new ye,is=new ye;class Ix{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=QR}=u;hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hp,pp,mp),this._renderer.xr.enabled=gp,t.scissorTest=!1,uo(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===os||t.mapping===go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),gp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ha,format:Vi,colorSpace:ku,depthBuffer:!1},l=Bx(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bx(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=JR(u)),this._blurMaterial=eC(u,t,i),this._ggxMaterial=$R(u,t,i)}return l}_compileMaterial(t){const i=new pa(new qa,t);this._renderer.compile(i,yl)}_sceneToCubeUV(t,i,r,l,u){const p=new Hi(90,1,i,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,E=_.toneMapping;_.getClearColor(Fx),_.toneMapping=fa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pa(new Ol,new VS({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,T=P.material;let y=!1;const b=t.background;b?b.isColor&&(T.color.copy(b),t.background=null,y=!0):(T.color.copy(Fx),y=!0);for(let Z=0;Z<6;Z++){const U=Z%3;U===0?(p.up.set(0,m[Z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+S[Z],u.y,u.z)):U===1?(p.up.set(0,0,m[Z]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+S[Z],u.z)):(p.up.set(0,m[Z],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+S[Z]));const C=this._cubeSize;uo(l,U*C,Z>2?C:0,C,C),_.setRenderTarget(l),y&&_.render(P,p),_.render(t,p)}_.toneMapping=E,_.autoClear=v,t.background=b}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===os||t.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;uo(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,yl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-S*S),v=m*1.25,E=_*v,{_lodMax:A}=this,P=this._sizeLods[r],T=3*P*(r>A-ho?r-A+ho:0),y=4*(this._cubeSize-P);p.envMap.value=t.texture,p.roughness.value=E,p.mipInt.value=A-i,uo(u,T,y,3*P,2*P),l.setRenderTarget(u),l.render(h,yl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=A-r,uo(t,T,y,3*P,2*P),l.setRenderTarget(t),l.render(h,yl)}_blur(t,i,r,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,r,d),this._blurPass(u,t,r,r,d)}_blurPass(t,i,r,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const S=this._sizeLods[l],_=3*S*(l>this._lodMax-ho?l-this._lodMax+ho:0),v=4*(this._cubeSize-S);uo(i,_,v,3*S,2*S),d.setRenderTarget(i),d.render(p,yl)}}function JR(o){const t=[],i=[];let r=o;const l=o-ho+1+ZR;for(let u=0;u<l;u++){const d=Math.pow(2,r);t.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,v=6,E=3,A=new Float32Array(E*v*_),P=new Float32Array(E*v*_);for(let y=0;y<_;y++){const b=y%3*2/3-1,Z=y>2?0:-1,U=[b,Z,0,b+2/3,Z,0,b+2/3,Z+1,0,b,Z,0,b+2/3,Z+1,0,b,Z+1,0];A.set(U,E*v*y);for(let C=0;C<v;C++){const R=S[C*2]*2-1,z=S[C*2+1]*2-1;y===0?is.set(1,z,R):y===1?is.set(-R,1,-z):y===2?is.set(-R,z,1):y===3?is.set(-1,z,-R):y===4?is.set(-R,-1,z):is.set(R,z,-1),is.toArray(P,(y*v+C)*E)}}const T=new qa;T.setAttribute("position",new ka(A,E)),T.setAttribute("outputDirection",new ka(P,E)),i.push(new pa(T,null)),r>ho&&r--}return{lodMeshes:i,sizeLods:t}}function Bx(o,t,i){const r=new ki(o,t,i);return r.texture.mapping=Zu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function uo(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function $R(o,t,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function eC(o,t,i){return new Xi({name:"SphericalGaussianBlur",defines:{SAMPLES:jR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function zx(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Hx(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class KS extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new XS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ol(5,5,5),u=new Xi({name:"CubemapFromEquirect",uniforms:vo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Ga});u.uniforms.tEquirect.value=i;const d=new pa(l,u),h=i.minFilter;return i.minFilter===as&&(i.minFilter=Hn),new aA(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}function tC(o){let t=new WeakMap,i=new WeakMap,r=null;function l(v,E=!1){return v==null?null:E?d(v):u(v)}function u(v){if(v&&v.isTexture){const E=v.mapping;if(E===Gh||E===Vh)if(t.has(v)){const A=t.get(v).texture;return h(A,v.mapping)}else{const A=v.image;if(A&&A.height>0){const P=new KS(A.height);return P.fromEquirectangularTexture(o,v),t.set(v,P),v.addEventListener("dispose",m),h(P.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,A=E===Gh||E===Vh,P=E===os||E===go;if(A||P){let T=i.get(v);const y=T!==void 0?T.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==y)return r===null&&(r=new Ix(o)),T=A?r.fromEquirectangular(v,T):r.fromCubemap(v,T),T.texture.pmremVersion=v.pmremVersion,i.set(v,T),T.texture;if(T!==void 0)return T.texture;{const b=v.image;return A&&b&&b.height>0||P&&b&&p(b)?(r===null&&(r=new Ix(o)),T=A?r.fromEquirectangular(v):r.fromCubemap(v),T.texture.pmremVersion=v.pmremVersion,i.set(v,T),v.addEventListener("dispose",S),T.texture):null}}}return v}function h(v,E){return E===Gh?v.mapping=os:E===Vh&&(v.mapping=go),v}function p(v){let E=0;const A=6;for(let P=0;P<A;P++)v[P]!==void 0&&E++;return E===A}function m(v){const E=v.target;E.removeEventListener("dispose",m);const A=t.get(E);A!==void 0&&(t.delete(E),A.dispose())}function S(v){const E=v.target;E.removeEventListener("dispose",S);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function nC(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&po("WebGLRenderer: "+r+" extension not supported."),l}}}function iC(o,t,i,r){const l={},u=new WeakMap;function d(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const A in v.attributes)t.remove(v.attributes[A]);v.removeEventListener("dispose",d),delete l[v.id];const E=u.get(v);E&&(t.remove(E),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const E in v)t.update(v[E],o.ARRAY_BUFFER)}function m(_){const v=[],E=_.index,A=_.attributes.position;let P=0;if(A===void 0)return;if(E!==null){const b=E.array;P=E.version;for(let Z=0,U=b.length;Z<U;Z+=3){const C=b[Z+0],R=b[Z+1],z=b[Z+2];v.push(C,R,R,z,z,C)}}else{const b=A.array;P=A.version;for(let Z=0,U=b.length/3-1;Z<U;Z+=3){const C=Z+0,R=Z+1,z=Z+2;v.push(C,R,R,z,z,C)}}const T=new(A.count>=65535?GS:HS)(v,1);T.version=P;const y=u.get(_);y&&t.remove(y),u.set(_,T)}function S(_){const v=u.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:S}}function aC(o,t,i){let r;function l(_){r=_}let u,d;function h(_){u=_.type,d=_.bytesPerElement}function p(_,v){o.drawElements(r,v,u,_*d),i.update(v,r,1)}function m(_,v,E){E!==0&&(o.drawElementsInstanced(r,v,u,_*d,E),i.update(v,r,E))}function S(_,v,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,_,0,E);let P=0;for(let T=0;T<E;T++)P+=v[T];i.update(P,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function rC(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:kt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function sC(o,t,i){const r=new WeakMap,l=new dn;function u(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let I=function(){g.dispose(),r.delete(h),h.removeEventListener("dispose",I)};var E=I;v!==void 0&&v.texture.dispose();const A=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],Z=h.morphAttributes.color||[];let U=0;A===!0&&(U=1),P===!0&&(U=2),T===!0&&(U=3);let C=h.attributes.position.count*U,R=1;C>t.maxTextureSize&&(R=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const z=new Float32Array(C*R*4*_),g=new IS(z,C,R,_);g.type=ca,g.needsUpdate=!0;const O=U*4;for(let F=0;F<_;F++){const X=y[F],Y=b[F],G=Z[F],W=C*R*4*F;for(let L=0;L<X.count;L++){const k=L*O;A===!0&&(l.fromBufferAttribute(X,L),z[W+k+0]=l.x,z[W+k+1]=l.y,z[W+k+2]=l.z,z[W+k+3]=0),P===!0&&(l.fromBufferAttribute(Y,L),z[W+k+4]=l.x,z[W+k+5]=l.y,z[W+k+6]=l.z,z[W+k+7]=0),T===!0&&(l.fromBufferAttribute(G,L),z[W+k+8]=l.x,z[W+k+9]=l.y,z[W+k+10]=l.z,z[W+k+11]=G.itemSize===4?l.w:1)}}v={count:_,texture:g,size:new Xt(C,R)},r.set(h,v),h.addEventListener("dispose",I)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let T=0;T<m.length;T++)A+=m[T];const P=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",P),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function oC(o,t,i,r,l){let u=new WeakMap;function d(m){const S=l.render.frame,_=m.geometry,v=t.get(m,_);if(u.get(v)!==S&&(t.update(v),u.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,S))),m.isSkinnedMesh){const E=m.skeleton;u.get(E)!==S&&(E.update(),u.set(E,S))}return v}function h(){u=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const lC={[yS]:"LINEAR_TONE_MAPPING",[MS]:"REINHARD_TONE_MAPPING",[ES]:"CINEON_TONE_MAPPING",[TS]:"ACES_FILMIC_TONE_MAPPING",[AS]:"AGX_TONE_MAPPING",[RS]:"NEUTRAL_TONE_MAPPING",[bS]:"CUSTOM_TONE_MAPPING"};function cC(o,t,i,r,l,u){const d=new ki(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new qa;m.setAttribute("position",new Xa([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Xa([0,2,0,0,2,0],2));const S=new tA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new pa(m,S),v=new YS(-1,1,1,-1,0,1);let E=null,A=null,P=!1,T,y=null,b=[],Z=!1;this.setSize=function(U,C){d.setSize(U,C),h!==null&&h.setSize(U,C),p!==null&&p.setSize(U,C);for(let R=0;R<b.length;R++){const z=b[R];z.setSize&&z.setSize(U,C)}},this.setEffects=function(U){b=U,Z=b.length>0&&b[0].isRenderPass===!0;const C=d.width,R=d.height;b.length>0&&h===null&&(h=new ki(C,R,{type:ha,depthBuffer:!1,stencilBuffer:!1}),p=new ki(C,R,{type:ha,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<b.length;z++){const g=b[z];g.setSize&&g.setSize(C,R)}},this.begin=function(U,C){if(P||U.toneMapping===fa&&b.length===0)return!1;if(y=C,C!==null){const R=C.width,z=C.height;(d.width!==R||d.height!==z)&&this.setSize(R,z)}return Z===!1&&U.setRenderTarget(d),T=U.toneMapping,U.toneMapping=fa,!0},this.hasRenderPass=function(){return Z},this.end=function(U,C){U.toneMapping=T,P=!0;let R=d,z=h;for(let g=0;g<b.length;g++){const O=b[g];O.enabled!==!1&&(O.render(U,z,R,C),O.needsSwap!==!1&&(R=z,z=z===h?p:h))}if(E!==U.outputColorSpace||A!==U.toneMapping){E=U.outputColorSpace,A=U.toneMapping,S.defines={},zt.getTransfer(E)===Jt&&(S.defines.SRGB_TRANSFER="");const g=lC[A];g&&(S.defines[g]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=R.texture,U.setRenderTarget(y),U.render(_,v),y=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const QS=new Yn,cm=new Dl(1,1),JS=new IS,$S=new Db,ey=new XS,Gx=[],Vx=[],kx=new Float32Array(16),Xx=new Float32Array(9),Wx=new Float32Array(4);function xo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Gx[l];if(u===void 0&&(u=new Float32Array(l),Gx[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function En(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Tn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Qu(o,t){let i=Vx[t];i===void 0&&(i=new Int32Array(t),Vx[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function uC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function fC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2fv(this.addr,t),Tn(i,t)}}function dC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;o.uniform3fv(this.addr,t),Tn(i,t)}}function hC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4fv(this.addr,t),Tn(i,t)}}function pC(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;Wx.set(r),o.uniformMatrix2fv(this.addr,!1,Wx),Tn(i,r)}}function mC(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;Xx.set(r),o.uniformMatrix3fv(this.addr,!1,Xx),Tn(i,r)}}function gC(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;kx.set(r),o.uniformMatrix4fv(this.addr,!1,kx),Tn(i,r)}}function vC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function _C(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2iv(this.addr,t),Tn(i,t)}}function xC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3iv(this.addr,t),Tn(i,t)}}function SC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4iv(this.addr,t),Tn(i,t)}}function yC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function MC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2uiv(this.addr,t),Tn(i,t)}}function EC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3uiv(this.addr,t),Tn(i,t)}}function TC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4uiv(this.addr,t),Tn(i,t)}}function bC(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(cm.compareFunction=i.isReversedDepthBuffer()?Em:Mm,u=cm):u=QS,i.setTexture2D(t||u,l)}function AC(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||$S,l)}function RC(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||ey,l)}function CC(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||JS,l)}function wC(o){switch(o){case 5126:return uC;case 35664:return fC;case 35665:return dC;case 35666:return hC;case 35674:return pC;case 35675:return mC;case 35676:return gC;case 5124:case 35670:return vC;case 35667:case 35671:return _C;case 35668:case 35672:return xC;case 35669:case 35673:return SC;case 5125:return yC;case 36294:return MC;case 36295:return EC;case 36296:return TC;case 35678:case 36198:case 36298:case 36306:case 35682:return bC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return RC;case 36289:case 36303:case 36311:case 36292:return CC}}function NC(o,t){o.uniform1fv(this.addr,t)}function DC(o,t){const i=xo(t,this.size,2);o.uniform2fv(this.addr,i)}function UC(o,t){const i=xo(t,this.size,3);o.uniform3fv(this.addr,i)}function LC(o,t){const i=xo(t,this.size,4);o.uniform4fv(this.addr,i)}function OC(o,t){const i=xo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function PC(o,t){const i=xo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function FC(o,t){const i=xo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function IC(o,t){o.uniform1iv(this.addr,t)}function BC(o,t){o.uniform2iv(this.addr,t)}function zC(o,t){o.uniform3iv(this.addr,t)}function HC(o,t){o.uniform4iv(this.addr,t)}function GC(o,t){o.uniform1uiv(this.addr,t)}function VC(o,t){o.uniform2uiv(this.addr,t)}function kC(o,t){o.uniform3uiv(this.addr,t)}function XC(o,t){o.uniform4uiv(this.addr,t)}function WC(o,t,i){const r=this.cache,l=t.length,u=Qu(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=cm:d=QS;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function qC(o,t,i){const r=this.cache,l=t.length,u=Qu(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||$S,u[d])}function YC(o,t,i){const r=this.cache,l=t.length,u=Qu(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||ey,u[d])}function ZC(o,t,i){const r=this.cache,l=t.length,u=Qu(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||JS,u[d])}function jC(o){switch(o){case 5126:return NC;case 35664:return DC;case 35665:return UC;case 35666:return LC;case 35674:return OC;case 35675:return PC;case 35676:return FC;case 5124:case 35670:return IC;case 35667:case 35671:return BC;case 35668:case 35672:return zC;case 35669:case 35673:return HC;case 5125:return GC;case 36294:return VC;case 36295:return kC;case 36296:return XC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return qC;case 35680:case 36300:case 36308:case 36293:return YC;case 36289:case 36303:case 36311:case 36292:return ZC}}class KC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=wC(i.type)}}class QC{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jC(i.type)}}class JC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const vp=/(\w+)(\])?(\[|\.)?/g;function qx(o,t){o.seq.push(t),o.map[t.id]=t}function $C(o,t,i){const r=o.name,l=r.length;for(vp.lastIndex=0;;){const u=vp.exec(r),d=vp.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){qx(i,m===void 0?new KC(h,o,t):new QC(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new JC(h),qx(i,_)),i=_}}}class Bu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),p=t.getUniformLocation(i,h.name);$C(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Yx(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const e3=37297;let t3=0;function n3(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Zx=new Et;function i3(o){zt._getMatrix(Zx,zt.workingColorSpace,o);const t=`mat3( ${Zx.elements.map(i=>i.toFixed(4))} )`;switch(zt.getTransfer(o)){case Xu:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function jx(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+n3(o.getShaderSource(t),h)}else return u}function a3(o,t){const i=i3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const r3={[yS]:"Linear",[MS]:"Reinhard",[ES]:"Cineon",[TS]:"ACESFilmic",[AS]:"AgX",[RS]:"Neutral",[bS]:"Custom"};function s3(o,t){const i=r3[t];return i===void 0?(xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Du=new ye;function o3(){zt.getLuminanceCoefficients(Du);const o=Du.x.toFixed(4),t=Du.y.toFixed(4),i=Du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function c3(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function u3(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function bl(o){return o!==""}function Kx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f3=/^[ \t]*#include +<([\w\d./]+)>/gm;function um(o){return o.replace(f3,h3)}const d3=new Map;function h3(o,t){let i=Rt[t];if(i===void 0){const r=d3.get(t);if(r!==void 0)i=Rt[r],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return um(i)}const p3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jx(o){return o.replace(p3,m3)}function m3(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function $x(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const g3={[Lu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function v3(o){return g3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _3={[os]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function x3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":_3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const S3={[go]:"ENVMAP_MODE_REFRACTION"};function y3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":S3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M3={[SS]:"ENVMAP_BLENDING_MULTIPLY",[lb]:"ENVMAP_BLENDING_MIX",[cb]:"ENVMAP_BLENDING_ADD"};function E3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":M3[o.combine]||"ENVMAP_BLENDING_NONE"}function T3(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b3(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=v3(i),m=x3(i),S=y3(i),_=E3(i),v=T3(i),E=l3(i),A=c3(u),P=l.createProgram();let T,y,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bl).join(`
`),T.length>0&&(T+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bl).join(`
`),y.length>0&&(y+=`
`)):(T=[$x(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),y=[$x(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?Rt.tonemapping_pars_fragment:"",i.toneMapping!==fa?s3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,a3("linearToOutputTexel",i.outputColorSpace),o3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bl).join(`
`)),d=um(d),d=Kx(d,i),d=Qx(d,i),h=um(h),h=Kx(h,i),h=Qx(h,i),d=Jx(d),h=Jx(h),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,T=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,y=["#define varying in",i.glslVersion===px?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===px?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const Z=b+T+d,U=b+y+h,C=Yx(l,l.VERTEX_SHADER,Z),R=Yx(l,l.FRAGMENT_SHADER,U);l.attachShader(P,C),l.attachShader(P,R),i.index0AttributeName!==void 0?l.bindAttribLocation(P,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(P,0,"position"),l.linkProgram(P);function z(F){if(o.debug.checkShaderErrors){const X=l.getProgramInfoLog(P)||"",Y=l.getShaderInfoLog(C)||"",G=l.getShaderInfoLog(R)||"",W=X.trim(),L=Y.trim(),k=G.trim();let ie=!0,te=!0;if(l.getProgramParameter(P,l.LINK_STATUS)===!1)if(ie=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,P,C,R);else{const ne=jx(l,C,"vertex"),ae=jx(l,R,"fragment");kt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(P,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+ne+`
`+ae)}else W!==""?xt("WebGLProgram: Program Info Log:",W):(L===""||k==="")&&(te=!1);te&&(F.diagnostics={runnable:ie,programLog:W,vertexShader:{log:L,prefix:T},fragmentShader:{log:k,prefix:y}})}l.deleteShader(C),l.deleteShader(R),g=new Bu(l,P),O=u3(l,P)}let g;this.getUniforms=function(){return g===void 0&&z(this),g};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let I=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=l.getProgramParameter(P,e3)),I},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t3++,this.cacheKey=t,this.usedTimes=1,this.program=P,this.vertexShader=C,this.fragmentShader=R,this}let A3=0;class R3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new C3(t),i.set(t,r)),r}}class C3{constructor(t){this.id=A3++,this.code=t,this.usedTimes=0}}function w3(o){return o===ls||o===Gu||o===Vu}function N3(o,t,i,r,l,u){const d=new BS,h=new R3,p=new Set,m=[],S=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(g){return p.add(g),g===0?"uv":`uv${g}`}function P(g,O,I,F,X,Y){const G=F.fog,W=X.geometry,L=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?F.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ie=t.get(g.envMap||L,k),te=ie&&ie.mapping===Zu?ie.image.height:null,ne=E[g.type];g.precision!==null&&(v=r.getMaxPrecision(g.precision),v!==g.precision&&xt("WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Oe=ae!==void 0?ae.length:0;let Le=0;W.morphAttributes.position!==void 0&&(Le=1),W.morphAttributes.normal!==void 0&&(Le=2),W.morphAttributes.color!==void 0&&(Le=3);let H,de,Ce,j;if(ne){const It=la[ne];H=It.vertexShader,de=It.fragmentShader}else{H=g.vertexShader,de=g.fragmentShader;const It=h.getVertexShaderStage(g),St=h.getFragmentShaderStage(g);h.update(g,It,St),Ce=It.id,j=St.id}const le=o.getRenderTarget(),Me=o.state.buffers.depth.getReversed(),Ne=X.isInstancedMesh===!0,Se=X.isBatchedMesh===!0,Ae=!!g.map,et=!!g.matcap,ze=!!ie,rt=!!g.aoMap,Ye=!!g.lightMap,ue=!!g.bumpMap&&g.wireframe===!1,Pe=!!g.normalMap,ht=!!g.displacementMap,pt=!!g.emissiveMap,st=!!g.metalnessMap,$e=!!g.roughnessMap,q=g.anisotropy>0,Fe=g.clearcoat>0,nt=g.dispersion>0,w=g.retroreflectivity>0,M=g.iridescence>0,K=g.sheen>0,Q=g.transmission>0,fe=q&&!!g.anisotropyMap,Re=Fe&&!!g.clearcoatMap,we=Fe&&!!g.clearcoatNormalMap,ce=Fe&&!!g.clearcoatRoughnessMap,ve=M&&!!g.iridescenceMap,Ue=M&&!!g.iridescenceThicknessMap,Qe=K&&!!g.sheenColorMap,Ie=K&&!!g.sheenRoughnessMap,He=!!g.specularMap,Ve=!!g.specularColorMap,ft=!!g.specularIntensityMap,mt=Q&&!!g.transmissionMap,$=Q&&!!g.thicknessMap,Be=!!g.gradientMap,Ee=!!g.alphaMap,ke=g.alphaTest>0,Xe=!!g.alphaHash,De=!!g.extensions;let ut=fa;g.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ut=o.toneMapping);const Je={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:H,fragmentShader:de,defines:g.defines,customVertexShaderID:Ce,customFragmentShaderID:j,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Se,batchingColor:Se&&X._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&X.instanceColor!==null,instancingMorph:Ne&&X.morphTexture!==null,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ae,matcap:et,envMap:ze,envMapMode:ze&&ie.mapping,envMapCubeUVHeight:te,aoMap:rt,lightMap:Ye,bumpMap:ue,normalMap:Pe,displacementMap:ht,emissiveMap:pt,normalMapObjectSpace:Pe&&g.normalMapType===db,normalMapTangentSpace:Pe&&g.normalMapType===hx,packedNormalMap:Pe&&g.normalMapType===hx&&w3(g.normalMap.format),metalnessMap:st,roughnessMap:$e,anisotropy:q,anisotropyMap:fe,clearcoat:Fe,clearcoatMap:Re,clearcoatNormalMap:we,clearcoatRoughnessMap:ce,dispersion:nt,retroreflection:w,iridescence:M,iridescenceMap:ve,iridescenceThicknessMap:Ue,sheen:K,sheenColorMap:Qe,sheenRoughnessMap:Ie,specularMap:He,specularColorMap:Ve,specularIntensityMap:ft,transmission:Q,transmissionMap:mt,thicknessMap:$,gradientMap:Be,opaque:g.transparent===!1&&g.blending===Rl&&g.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ke,alphaHash:Xe,combine:g.combine,mapUv:Ae&&A(g.map.channel),aoMapUv:rt&&A(g.aoMap.channel),lightMapUv:Ye&&A(g.lightMap.channel),bumpMapUv:ue&&A(g.bumpMap.channel),normalMapUv:Pe&&A(g.normalMap.channel),displacementMapUv:ht&&A(g.displacementMap.channel),emissiveMapUv:pt&&A(g.emissiveMap.channel),metalnessMapUv:st&&A(g.metalnessMap.channel),roughnessMapUv:$e&&A(g.roughnessMap.channel),anisotropyMapUv:fe&&A(g.anisotropyMap.channel),clearcoatMapUv:Re&&A(g.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&A(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&A(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&A(g.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(g.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&A(g.sheenRoughnessMap.channel),specularMapUv:He&&A(g.specularMap.channel),specularColorMapUv:Ve&&A(g.specularColorMap.channel),specularIntensityMapUv:ft&&A(g.specularIntensityMap.channel),transmissionMapUv:mt&&A(g.transmissionMap.channel),thicknessMapUv:$&&A(g.thicknessMap.channel),alphaMapUv:Ee&&A(g.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pe||q),vertexNormals:!!W.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(Ae||Ee),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||W.attributes.normal===void 0&&Pe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Le,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:g.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ae&&g.map.isVideoTexture===!0&&zt.getTransfer(g.map.colorSpace)===Jt,decodeVideoTextureEmissive:pt&&g.emissiveMap.isVideoTexture===!0&&zt.getTransfer(g.emissiveMap.colorSpace)===Jt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===za,flipSided:g.side===ei,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:De&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&g.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Je.vertexUv1s=p.has(1),Je.vertexUv2s=p.has(2),Je.vertexUv3s=p.has(3),p.clear(),Je}function T(g){const O=[];if(g.shaderID?O.push(g.shaderID):(O.push(g.customVertexShaderID),O.push(g.customFragmentShaderID)),g.defines!==void 0)for(const I in g.defines)O.push(I),O.push(g.defines[I]);return g.isRawShaderMaterial===!1&&(y(O,g),b(O,g),O.push(o.outputColorSpace)),O.push(g.customProgramCacheKey),O.join()}function y(g,O){g.push(O.precision),g.push(O.outputColorSpace),g.push(O.envMapMode),g.push(O.envMapCubeUVHeight),g.push(O.mapUv),g.push(O.alphaMapUv),g.push(O.lightMapUv),g.push(O.aoMapUv),g.push(O.bumpMapUv),g.push(O.normalMapUv),g.push(O.displacementMapUv),g.push(O.emissiveMapUv),g.push(O.metalnessMapUv),g.push(O.roughnessMapUv),g.push(O.anisotropyMapUv),g.push(O.clearcoatMapUv),g.push(O.clearcoatNormalMapUv),g.push(O.clearcoatRoughnessMapUv),g.push(O.iridescenceMapUv),g.push(O.iridescenceThicknessMapUv),g.push(O.sheenColorMapUv),g.push(O.sheenRoughnessMapUv),g.push(O.specularMapUv),g.push(O.specularColorMapUv),g.push(O.specularIntensityMapUv),g.push(O.transmissionMapUv),g.push(O.thicknessMapUv),g.push(O.combine),g.push(O.fogExp2),g.push(O.sizeAttenuation),g.push(O.morphTargetsCount),g.push(O.morphAttributeCount),g.push(O.numSunLights),g.push(O.numDirLights),g.push(O.numPointLights),g.push(O.numSpotLights),g.push(O.numSpotLightMaps),g.push(O.numHemiLights),g.push(O.numRectAreaLights),g.push(O.numSunLightShadows),g.push(O.numDirLightShadows),g.push(O.numPointLightShadows),g.push(O.numSpotLightShadows),g.push(O.numSpotLightShadowsWithMaps),g.push(O.numLightProbes),g.push(O.shadowMapType),g.push(O.toneMapping),g.push(O.numClippingPlanes),g.push(O.numClipIntersection),g.push(O.depthPacking)}function b(g,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.retroreflection&&d.enable(24),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),g.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),g.push(d.mask)}function Z(g){const O=E[g.type];let I;if(O){const F=la[O];I=Jb.clone(F.uniforms)}else I=g.uniforms;return I}function U(g,O){let I=S.get(O);return I!==void 0?++I.usedTimes:(I=new b3(o,O,g,l),m.push(I),S.set(O,I)),I}function C(g){if(--g.usedTimes===0){const O=m.indexOf(g);m[O]=m[m.length-1],m.pop(),S.delete(g.cacheKey),g.destroy()}}function R(g){h.remove(g)}function z(){h.dispose()}return{getParameters:P,getProgramCacheKey:T,getUniforms:Z,acquireProgram:U,releaseProgram:C,releaseShaderCache:R,programs:m,dispose:z}}function D3(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function U3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function eS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function tS(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function h(v,E,A,P,T,y){let b=o[t];return b===void 0?(b={id:v.id,object:v,geometry:E,material:A,materialVariant:d(v),groupOrder:P,renderOrder:v.renderOrder,z:T,group:y},o[t]=b):(b.id=v.id,b.object=v,b.geometry=E,b.material=A,b.materialVariant=d(v),b.groupOrder=P,b.renderOrder=v.renderOrder,b.z=T,b.group=y),t++,b}function p(v,E,A,P,T,y,b){b.reversedDepth===!0&&(T=-T);const Z=h(v,E,A,P,T,y);A.transmission>0?r.push(Z):A.transparent===!0?l.push(Z):i.push(Z)}function m(v,E,A,P,T,y){const b=h(v,E,A,P,T,y);A.transmission>0?r.unshift(b):A.transparent===!0?l.unshift(b):i.unshift(b)}function S(v,E){i.length>1&&i.sort(v||U3),r.length>1&&r.sort(E||eS),l.length>1&&l.sort(E||eS)}function _(){for(let v=t,E=o.length;v<E;v++){const A=o[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:_,sort:S}}function L3(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new tS,o.set(r,[d])):l>=u.length?(d=new tS,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function O3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new ye,color:new Vt};break;case"SpotLight":i={position:new ye,direction:new ye,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ye,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ye,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":i={color:new Vt,position:new ye,halfWidth:new ye,halfHeight:new ye};break}return o[t.id]=i,i}}}function P3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let F3=0;function I3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function B3(o){const t=new O3,i=P3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ye);const l=new ye,u=new Sn,d=new Sn;function h(m){let S=0,_=0,v=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let E=0,A=0,P=0,T=0,y=0,b=0,Z=0,U=0,C=0,R=0,z=0,g=0,O=0,I=0;m.sort(I3);for(let X=0,Y=m.length;X<Y;X++){const G=m[X],W=G.color,L=G.intensity,k=G.distance;let ie=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ls?ie=G.shadow.map.texture:ie=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=W.r*L,_+=W.g*L,v+=W.b*L;else if(G.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(G.sh.coefficients[te],L);I++}else if(G.isSunLight){const te=t.get(G);if(te.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ne=G.shadow,ae=i.get(G);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),r.sunShadow[A]=ae,r.sunShadowMap[A]=ie;const Oe=ne.getViewportCount();for(let Le=0;Le<Oe;Le++)r.sunShadowMatrix[P+Le]=ne.getMatrix(Le),r.sunShadowCascade[P+Le]=ne._cascadeData[Le];P+=Oe,A++}r.sun[E]=te,E++}else if(G.isDirectionalLight){const te=t.get(G);if(te.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ne=G.shadow,ae=i.get(G);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,r.directionalShadow[T]=ae,r.directionalShadowMap[T]=ie,r.directionalShadowMatrix[T]=G.shadow.matrix,C++}r.directional[T]=te,T++}else if(G.isSpotLight){const te=t.get(G);te.position.setFromMatrixPosition(G.matrixWorld),te.color.copy(W).multiplyScalar(L),te.distance=k,te.coneCos=Math.cos(G.angle),te.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),te.decay=G.decay,r.spot[b]=te;const ne=G.shadow;if(G.map&&(r.spotLightMap[g]=G.map,g++,ne.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[b]=ne.matrix,G.castShadow){const ae=i.get(G);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,r.spotShadow[b]=ae,r.spotShadowMap[b]=ie,z++}b++}else if(G.isRectAreaLight){const te=t.get(G);te.color.copy(W).multiplyScalar(L),te.halfWidth.set(G.width*.5,0,0),te.halfHeight.set(0,G.height*.5,0),r.rectArea[Z]=te,Z++}else if(G.isPointLight){const te=t.get(G);if(te.color.copy(G.color).multiplyScalar(G.intensity),te.distance=G.distance,te.decay=G.decay,G.castShadow){const ne=G.shadow,ae=i.get(G);ae.shadowIntensity=ne.intensity,ae.shadowBias=ne.bias,ae.shadowNormalBias=ne.normalBias,ae.shadowRadius=ne.radius,ae.shadowMapSize=ne.mapSize,ae.shadowCameraNear=ne.camera.near,ae.shadowCameraFar=ne.camera.far,r.pointShadow[y]=ae,r.pointShadowMap[y]=ie,r.pointShadowMatrix[y]=G.shadow.matrix,R++}r.point[y]=te,y++}else if(G.isHemisphereLight){const te=t.get(G);te.skyColor.copy(G.color).multiplyScalar(L),te.groundColor.copy(G.groundColor).multiplyScalar(L),r.hemi[U]=te,U++}}Z>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=v;const F=r.hash;(F.sunLength!==E||F.directionalLength!==T||F.pointLength!==y||F.spotLength!==b||F.rectAreaLength!==Z||F.hemiLength!==U||F.numSunShadows!==A||F.numDirectionalShadows!==C||F.numPointShadows!==R||F.numSpotShadows!==z||F.numSpotMaps!==g||F.numLightProbes!==I)&&(r.sun.length=E,r.directional.length=T,r.spot.length=b,r.rectArea.length=Z,r.point.length=y,r.hemi.length=U,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=P,r.sunShadowCascade.length=P,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.directionalShadowMatrix.length=C,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=z,r.spotShadowMap.length=z,r.spotLightMatrix.length=z+g-O,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=I,F.sunLength=E,F.directionalLength=T,F.pointLength=y,F.spotLength=b,F.rectAreaLength=Z,F.hemiLength=U,F.numSunShadows=A,F.numDirectionalShadows=C,F.numPointShadows=R,F.numSpotShadows=z,F.numSpotMaps=g,F.numLightProbes=I,r.version=F3++)}function p(m,S){let _=0,v=0,E=0,A=0,P=0,T=0;const y=S.matrixWorldInverse;for(let b=0,Z=m.length;b<Z;b++){const U=m[b];if(U.isSunLight){const C=r.sun[_];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),_++}else if(U.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(U.isSpotLight){const C=r.spot[A];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),A++}else if(U.isRectAreaLight){const C=r.rectArea[P];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),d.identity(),u.copy(U.matrixWorld),u.premultiply(y),d.extractRotation(u),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),P++}else if(U.isPointLight){const C=r.point[E];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(y),E++}else if(U.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:h,setupView:p,state:r}}function nS(o){const t=new B3(o),i=[],r=[],l=[];function u(v){_.camera=v,i.length=0,r.length=0,l.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function S(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function z3(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new nS(o),t.set(l,[h])):u>=d.length?(h=new nS(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const H3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,V3=[new ye(1,0,0),new ye(-1,0,0),new ye(0,1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1)],k3=[new ye(0,-1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1),new ye(0,-1,0),new ye(0,-1,0)],iS=new Sn,Ml=new ye,_p=new ye;function X3(o,t,i){let r=new kS;const l=new Xt,u=new Xt,d=new dn,h=new nA,p=new iA,m={},S=i.maxTextureSize,_={[ss]:ei,[ei]:ss,[za]:za},v=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:H3,fragmentShader:G3}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const A=new qa;A.setAttribute("position",new ka(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new pa(A,v),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let y=this.type;this.render=function(R,z,g){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||R.length===0)return;this.type===kT&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lu);const O=o.getRenderTarget(),I=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),X=o.state;X.setBlending(Ga),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Y=y!==this.type;Y&&z.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(W=>W.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,W=R.length;G<W;G++){const L=R[G],k=L.shadow;if(k===void 0){xt("WebGLShadowMap:",L,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const ie=k.getFrameExtents();l.multiply(ie),u.copy(k.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/ie.x),l.x=u.x*ie.x,k.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/ie.y),l.y=u.y*ie.y,k.mapSize.y=u.y));const te=o.state.buffers.depth.getReversed();if(k.camera._reversedDepth=te,k.map===null||Y===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Tl){if(L.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ki(l.x,l.y,{format:ls,type:ha,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),k.map.texture.name=L.name+".shadowMap",k.map.depthTexture=new Dl(l.x,l.y,ca),k.map.depthTexture.name=L.name+".shadowMapDepth",k.map.depthTexture.format=Wa,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fn,k.map.depthTexture.magFilter=Fn}else L.isPointLight?(k.map=new KS(l.x),k.map.depthTexture=new Kb(l.x,da)):(k.map=new ki(l.x,l.y),k.map.depthTexture=new Dl(l.x,l.y,da)),k.map.depthTexture.name=L.name+".shadowMap",k.map.depthTexture.format=Wa,this.type===Lu?(k.map.depthTexture.compareFunction=te?Em:Mm,k.map.depthTexture.minFilter=Hn,k.map.depthTexture.magFilter=Hn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Fn,k.map.depthTexture.magFilter=Fn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==l.x||k.map.height!==l.y)&&k.map.setSize(l.x,l.y);const ne=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();L.isPointLight!==!0&&k.updateMatrices(L,g);for(let ae=0;ae<ne;ae++){const Oe=k.getCamera(ae);if(L.isPointLight){const Le=k.camera,H=k.matrix,de=L.distance||Le.far;de!==Le.far&&(Le.far=de,Le.updateProjectionMatrix()),Ml.setFromMatrixPosition(L.matrixWorld),Le.position.copy(Ml),_p.copy(Le.position),_p.add(V3[ae]),Le.up.copy(k3[ae]),Le.lookAt(_p),Le.updateMatrixWorld(),H.makeTranslation(-Ml.x,-Ml.y,-Ml.z),iS.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),k._frustum.setFromProjectionMatrix(iS,Le.coordinateSystem,Le.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,ae),o.clear();else{ae===0&&(o.setRenderTarget(k.map),o.clear());const Le=k.getViewport(ae);d.set(u.x*Le.x,u.y*Le.y,u.x*Le.z,u.y*Le.w),X.viewport(d)}r=k.getFrustum(ae),U(z,g,Oe,L,this.type)}k.isPointLightShadow!==!0&&this.type===Tl&&b(k,g),k.needsUpdate=!1}y=this.type,T.needsUpdate=!1,o.setRenderTarget(O,I,F)};function b(R,z){const g=t.update(P);v.defines.VSM_SAMPLES!==R.blurSamples&&(v.defines.VSM_SAMPLES=R.blurSamples,E.defines.VSM_SAMPLES=R.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),R.mapPass===null?R.mapPass=new ki(l.x,l.y,{format:ls,type:ha}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),v.uniforms.shadow_pass.value=R.map.depthTexture,v.uniforms.resolution.value.set(R.map.width,R.map.height),v.uniforms.radius.value=R.radius,o.setRenderTarget(R.mapPass),o.clear(),o.renderBufferDirect(z,null,g,v,P,null),E.uniforms.shadow_pass.value=R.mapPass.texture,E.uniforms.resolution.value.set(R.map.width,R.map.height),E.uniforms.radius.value=R.radius,o.setRenderTarget(R.map),o.clear(),o.renderBufferDirect(z,null,g,E,P,null)}function Z(R,z,g,O){let I=null;const F=g.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)I=F;else if(I=g.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const X=I.uuid,Y=z.uuid;let G=m[X];G===void 0&&(G={},m[X]=G);let W=G[Y];W===void 0&&(W=I.clone(),G[Y]=W,z.addEventListener("dispose",C)),I=W}if(I.visible=z.visible,I.wireframe=z.wireframe,O===Tl?I.side=z.shadowSide!==null?z.shadowSide:z.side:I.side=z.shadowSide!==null?z.shadowSide:_[z.side],I.alphaMap=z.alphaMap,I.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,I.map=z.map,I.clipShadows=z.clipShadows,I.clippingPlanes=z.clippingPlanes,I.clipIntersection=z.clipIntersection,I.displacementMap=z.displacementMap,I.displacementScale=z.displacementScale,I.displacementBias=z.displacementBias,I.wireframeLinewidth=z.wireframeLinewidth,I.linewidth=z.linewidth,g.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const X=o.properties.get(I);X.light=g}return I}function U(R,z,g,O,I){if(R.visible===!1)return;if(R.layers.test(z.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===Tl)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,R.matrixWorld);const Y=t.update(R),G=R.material;if(Array.isArray(G)){const W=Y.groups;for(let L=0,k=W.length;L<k;L++){const ie=W[L],te=G[ie.materialIndex];if(te&&te.visible){const ne=Z(R,te,O,I);R.onBeforeShadow(o,R,z,g,Y,ne,ie),o.renderBufferDirect(g,null,Y,ne,R,ie),R.onAfterShadow(o,R,z,g,Y,ne,ie)}}}else if(G.visible){const W=Z(R,G,O,I);R.onBeforeShadow(o,R,z,g,Y,W,null),o.renderBufferDirect(g,null,Y,W,R,null),R.onAfterShadow(o,R,z,g,Y,W,null)}}const X=R.children;for(let Y=0,G=X.length;Y<G;Y++)U(X[Y],z,g,O,I)}function C(R){R.target.removeEventListener("dispose",C);for(const g in m){const O=m[g],I=R.target.uuid;I in O&&(O[I].dispose(),delete O[I])}}}function W3(o,t){function i(){let $=!1;const Be=new dn;let Ee=null;const ke=new dn(0,0,0,0);return{setMask:function(Xe){Ee!==Xe&&!$&&(o.colorMask(Xe,Xe,Xe,Xe),Ee=Xe)},setLocked:function(Xe){$=Xe},setClear:function(Xe,De,ut,Je,It){It===!0&&(Xe*=Je,De*=Je,ut*=Je),Be.set(Xe,De,ut,Je),ke.equals(Be)===!1&&(o.clearColor(Xe,De,ut,Je),ke.copy(Be))},reset:function(){$=!1,Ee=null,ke.set(-1,0,0,0)}}}function r(){let $=!1,Be=!1,Ee=null,ke=null,Xe=null;return{setReversed:function(De){if(Be!==De){const ut=t.get("EXT_clip_control");De?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),Be=De;const Je=Xe;Xe=null,this.setClear(Je)}},getReversed:function(){return Be},setTest:function(De){De?le(o.DEPTH_TEST):Me(o.DEPTH_TEST)},setMask:function(De){Ee!==De&&!$&&(o.depthMask(De),Ee=De)},setFunc:function(De){if(Be&&(De=Tb[De]),ke!==De){switch(De){case Ep:o.depthFunc(o.NEVER);break;case Tp:o.depthFunc(o.ALWAYS);break;case bp:o.depthFunc(o.LESS);break;case Cl:o.depthFunc(o.LEQUAL);break;case Ap:o.depthFunc(o.EQUAL);break;case Rp:o.depthFunc(o.GEQUAL);break;case Cp:o.depthFunc(o.GREATER);break;case wp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ke=De}},setLocked:function(De){$=De},setClear:function(De){Xe!==De&&(Xe=De,Be&&(De=1-De),o.clearDepth(De))},reset:function(){$=!1,Ee=null,ke=null,Xe=null,Be=!1}}}function l(){let $=!1,Be=null,Ee=null,ke=null,Xe=null,De=null,ut=null,Je=null,It=null;return{setTest:function(St){$||(St?le(o.STENCIL_TEST):Me(o.STENCIL_TEST))},setMask:function(St){Be!==St&&!$&&(o.stencilMask(St),Be=St)},setFunc:function(St,ti,gi){(Ee!==St||ke!==ti||Xe!==gi)&&(o.stencilFunc(St,ti,gi),Ee=St,ke=ti,Xe=gi)},setOp:function(St,ti,gi){(De!==St||ut!==ti||Je!==gi)&&(o.stencilOp(St,ti,gi),De=St,ut=ti,Je=gi)},setLocked:function(St){$=St},setClear:function(St){It!==St&&(o.clearStencil(St),It=St)},reset:function(){$=!1,Be=null,Ee=null,ke=null,Xe=null,De=null,ut=null,Je=null,It=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let S={},_={},v={},E=new WeakMap,A=[],P=null,T=!1,y=null,b=null,Z=null,U=null,C=null,R=null,z=null,g=new Vt(0,0,0),O=0,I=!1,F=null,X=null,Y=null,G=null,W=null;const L=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ie=0;const te=o.getParameter(o.VERSION);te.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(te)[1]),k=ie>=1):te.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),k=ie>=2);let ne=null,ae={};const Oe=o.getParameter(o.SCISSOR_BOX),Le=o.getParameter(o.VIEWPORT),H=new dn().fromArray(Oe),de=new dn().fromArray(Le);function Ce($,Be,Ee,ke){const Xe=new Uint8Array(4),De=o.createTexture();o.bindTexture($,De),o.texParameteri($,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri($,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ut=0;ut<Ee;ut++)$===o.TEXTURE_3D||$===o.TEXTURE_2D_ARRAY?o.texImage3D(Be,0,o.RGBA,1,1,ke,0,o.RGBA,o.UNSIGNED_BYTE,Xe):o.texImage2D(Be+ut,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xe);return De}const j={};j[o.TEXTURE_2D]=Ce(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=Ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=Ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=Ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),le(o.DEPTH_TEST),d.setFunc(Cl),ue(!1),Pe(cx),le(o.CULL_FACE),rt(Ga);function le($){S[$]!==!0&&(o.enable($),S[$]=!0)}function Me($){S[$]!==!1&&(o.disable($),S[$]=!1)}function Ne($,Be){return v[$]!==Be?(o.bindFramebuffer($,Be),v[$]=Be,$===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Be),$===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Be),!0):!1}function Se($,Be){let Ee=A,ke=!1;if($){Ee=E.get(Be),Ee===void 0&&(Ee=[],E.set(Be,Ee));const Xe=$.textures;if(Ee.length!==Xe.length||Ee[0]!==o.COLOR_ATTACHMENT0){for(let De=0,ut=Xe.length;De<ut;De++)Ee[De]=o.COLOR_ATTACHMENT0+De;Ee.length=Xe.length,ke=!0}}else Ee[0]!==o.BACK&&(Ee[0]=o.BACK,ke=!0);ke&&o.drawBuffers(Ee)}function Ae($){return P!==$?(o.useProgram($),P=$,!0):!1}const et={[fo]:o.FUNC_ADD,[WT]:o.FUNC_SUBTRACT,[qT]:o.FUNC_REVERSE_SUBTRACT};et[YT]=o.MIN,et[ZT]=o.MAX;const ze={[jT]:o.ZERO,[KT]:o.ONE,[QT]:o.SRC_COLOR,[_S]:o.SRC_ALPHA,[ib]:o.SRC_ALPHA_SATURATE,[tb]:o.DST_COLOR,[$T]:o.DST_ALPHA,[JT]:o.ONE_MINUS_SRC_COLOR,[xS]:o.ONE_MINUS_SRC_ALPHA,[nb]:o.ONE_MINUS_DST_COLOR,[eb]:o.ONE_MINUS_DST_ALPHA,[ab]:o.CONSTANT_COLOR,[rb]:o.ONE_MINUS_CONSTANT_COLOR,[sb]:o.CONSTANT_ALPHA,[ob]:o.ONE_MINUS_CONSTANT_ALPHA};function rt($,Be,Ee,ke,Xe,De,ut,Je,It,St){if($===Ga){T===!0&&(Me(o.BLEND),T=!1);return}if(T===!1&&(le(o.BLEND),T=!0),$!==XT){if($!==y||St!==I){if((b!==fo||C!==fo)&&(o.blendEquation(o.FUNC_ADD),b=fo,C=fo),St)switch($){case Rl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ux:o.blendFunc(o.ONE,o.ONE);break;case fx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:kt("WebGLState: Invalid blending: ",$);break}else switch($){case Rl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ux:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case fx:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dx:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",$);break}Z=null,U=null,R=null,z=null,g.set(0,0,0),O=0,y=$,I=St}return}Xe=Xe||Be,De=De||Ee,ut=ut||ke,(Be!==b||Xe!==C)&&(o.blendEquationSeparate(et[Be],et[Xe]),b=Be,C=Xe),(Ee!==Z||ke!==U||De!==R||ut!==z)&&(o.blendFuncSeparate(ze[Ee],ze[ke],ze[De],ze[ut]),Z=Ee,U=ke,R=De,z=ut),(Je.equals(g)===!1||It!==O)&&(o.blendColor(Je.r,Je.g,Je.b,It),g.copy(Je),O=It),y=$,I=!1}function Ye($,Be){$.side===za?Me(o.CULL_FACE):le(o.CULL_FACE);let Ee=$.side===ei;Be&&(Ee=!Ee),ue(Ee),$.blending===Rl&&$.transparent===!1?rt(Ga):rt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),d.setFunc($.depthFunc),d.setTest($.depthTest),d.setMask($.depthWrite),u.setMask($.colorWrite);const ke=$.stencilWrite;h.setTest(ke),ke&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),pt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):Me(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue($){F!==$&&($?o.frontFace(o.CW):o.frontFace(o.CCW),F=$)}function Pe($){$!==GT?(le(o.CULL_FACE),$!==X&&($===cx?o.cullFace(o.BACK):$===VT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Me(o.CULL_FACE),X=$}function ht($){$!==Y&&(k&&o.lineWidth($),Y=$)}function pt($,Be,Ee){$?(le(o.POLYGON_OFFSET_FILL),(G!==Be||W!==Ee)&&(G=Be,W=Ee,d.getReversed()&&(Be=-Be),o.polygonOffset(Be,Ee))):Me(o.POLYGON_OFFSET_FILL)}function st($){$?le(o.SCISSOR_TEST):Me(o.SCISSOR_TEST)}function $e($){$===void 0&&($=o.TEXTURE0+L-1),ne!==$&&(o.activeTexture($),ne=$)}function q($,Be,Ee){Ee===void 0&&(ne===null?Ee=o.TEXTURE0+L-1:Ee=ne);let ke=ae[Ee];ke===void 0&&(ke={type:void 0,texture:void 0},ae[Ee]=ke),(ke.type!==$||ke.texture!==Be)&&(ne!==Ee&&(o.activeTexture(Ee),ne=Ee),o.bindTexture($,Be||j[$]),ke.type=$,ke.texture=Be)}function Fe(){const $=ae[ne];$!==void 0&&$.type!==void 0&&(o.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function nt(){try{o.compressedTexImage2D(...arguments)}catch($){kt("WebGLState:",$)}}function w(){try{o.compressedTexImage3D(...arguments)}catch($){kt("WebGLState:",$)}}function M(){try{o.texSubImage2D(...arguments)}catch($){kt("WebGLState:",$)}}function K(){try{o.texSubImage3D(...arguments)}catch($){kt("WebGLState:",$)}}function Q(){try{o.compressedTexSubImage2D(...arguments)}catch($){kt("WebGLState:",$)}}function fe(){try{o.compressedTexSubImage3D(...arguments)}catch($){kt("WebGLState:",$)}}function Re(){try{o.texStorage2D(...arguments)}catch($){kt("WebGLState:",$)}}function we(){try{o.texStorage3D(...arguments)}catch($){kt("WebGLState:",$)}}function ce(){try{o.texImage2D(...arguments)}catch($){kt("WebGLState:",$)}}function ve(){try{o.texImage3D(...arguments)}catch($){kt("WebGLState:",$)}}function Ue($){return _[$]!==void 0?_[$]:o.getParameter($)}function Qe($,Be){_[$]!==Be&&(o.pixelStorei($,Be),_[$]=Be)}function Ie($){H.equals($)===!1&&(o.scissor($.x,$.y,$.z,$.w),H.copy($))}function He($){de.equals($)===!1&&(o.viewport($.x,$.y,$.z,$.w),de.copy($))}function Ve($,Be){let Ee=m.get(Be);Ee===void 0&&(Ee=new WeakMap,m.set(Be,Ee));let ke=Ee.get($);ke===void 0&&(ke=o.getUniformBlockIndex(Be,$.name),Ee.set($,ke))}function ft($,Be){const ke=m.get(Be).get($);p.get(Be)!==ke&&(o.uniformBlockBinding(Be,ke,$.__bindingPointIndex),p.set(Be,ke))}function mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},_={},ne=null,ae={},v={},E=new WeakMap,A=[],P=null,T=!1,y=null,b=null,Z=null,U=null,C=null,R=null,z=null,g=new Vt(0,0,0),O=0,I=!1,F=null,X=null,Y=null,G=null,W=null,H.set(0,0,o.canvas.width,o.canvas.height),de.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:le,disable:Me,bindFramebuffer:Ne,drawBuffers:Se,useProgram:Ae,setBlending:rt,setMaterial:Ye,setFlipSided:ue,setCullFace:Pe,setLineWidth:ht,setPolygonOffset:pt,setScissorTest:st,activeTexture:$e,bindTexture:q,unbindTexture:Fe,compressedTexImage2D:nt,compressedTexImage3D:w,texImage2D:ce,texImage3D:ve,pixelStorei:Qe,getParameter:Ue,updateUBOMapping:Ve,uniformBlockBinding:ft,texStorage2D:Re,texStorage3D:we,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:Q,compressedTexSubImage3D:fe,scissor:Ie,viewport:He,reset:mt}}function q3(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Xt,S=new WeakMap,_=new Set;let v;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(w,M){return A?new OffscreenCanvas(w,M):qu("canvas")}function T(w,M,K){let Q=1;const fe=nt(w);if((fe.width>K||fe.height>K)&&(Q=K/Math.max(fe.width,fe.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Re=Math.floor(Q*fe.width),we=Math.floor(Q*fe.height);v===void 0&&(v=P(Re,we));const ce=M?P(Re,we):v;return ce.width=Re,ce.height=we,ce.getContext("2d").drawImage(w,0,0,Re,we),xt("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Re+"x"+we+")."),ce}else return"data"in w&&xt("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),w;return w}function y(w){return w.generateMipmaps}function b(w){o.generateMipmap(w)}function Z(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(w,M,K,Q,fe,Re=!1){if(w!==null){if(o[w]!==void 0)return o[w];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let we;Q&&(we=t.get("EXT_texture_norm16"),we||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=M;if(M===o.RED&&(K===o.FLOAT&&(ce=o.R32F),K===o.HALF_FLOAT&&(ce=o.R16F),K===o.UNSIGNED_BYTE&&(ce=o.R8),K===o.UNSIGNED_SHORT&&we&&(ce=we.R16_EXT),K===o.SHORT&&we&&(ce=we.R16_SNORM_EXT)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.R8UI),K===o.UNSIGNED_SHORT&&(ce=o.R16UI),K===o.UNSIGNED_INT&&(ce=o.R32UI),K===o.BYTE&&(ce=o.R8I),K===o.SHORT&&(ce=o.R16I),K===o.INT&&(ce=o.R32I)),M===o.RG&&(K===o.FLOAT&&(ce=o.RG32F),K===o.HALF_FLOAT&&(ce=o.RG16F),K===o.UNSIGNED_BYTE&&(ce=o.RG8),K===o.UNSIGNED_SHORT&&we&&(ce=we.RG16_EXT),K===o.SHORT&&we&&(ce=we.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RG8UI),K===o.UNSIGNED_SHORT&&(ce=o.RG16UI),K===o.UNSIGNED_INT&&(ce=o.RG32UI),K===o.BYTE&&(ce=o.RG8I),K===o.SHORT&&(ce=o.RG16I),K===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),K===o.UNSIGNED_INT&&(ce=o.RGB32UI),K===o.BYTE&&(ce=o.RGB8I),K===o.SHORT&&(ce=o.RGB16I),K===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),K===o.UNSIGNED_INT&&(ce=o.RGBA32UI),K===o.BYTE&&(ce=o.RGBA8I),K===o.SHORT&&(ce=o.RGBA16I),K===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_SHORT&&we&&(ce=we.RGB16_EXT),K===o.SHORT&&we&&(ce=we.RGB16_SNORM_EXT),K===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const ve=Re?Xu:zt.getTransfer(fe);K===o.FLOAT&&(ce=o.RGBA32F),K===o.HALF_FLOAT&&(ce=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ce=ve===Jt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT&&we&&(ce=we.RGBA16_EXT),K===o.SHORT&&we&&(ce=we.RGBA16_SNORM_EXT),K===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function C(w,M){let K;return w?M===null||M===da||M===Nl?K=o.DEPTH24_STENCIL8:M===ca?K=o.DEPTH32F_STENCIL8:M===wl&&(K=o.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===da||M===Nl?K=o.DEPTH_COMPONENT24:M===ca?K=o.DEPTH_COMPONENT32F:M===wl&&(K=o.DEPTH_COMPONENT16),K}function R(w,M){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fn&&w.minFilter!==Hn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function z(w){const M=w.target;M.removeEventListener("dispose",z),O(M),M.isVideoTexture&&S.delete(M),M.isHTMLTexture&&_.delete(M)}function g(w){const M=w.target;M.removeEventListener("dispose",g),F(M)}function O(w){const M=r.get(w);if(M.__webglInit===void 0)return;const K=w.source,Q=E.get(K);if(Q){const fe=Q[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(w),Object.keys(Q).length===0&&E.delete(K)}r.remove(w)}function I(w){const M=r.get(w);o.deleteTexture(M.__webglTexture);const K=w.source,Q=E.get(K);delete Q[M.__cacheKey],d.memory.textures--}function F(w){const M=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let fe=0;fe<M.__webglFramebuffer[Q].length;fe++)o.deleteFramebuffer(M.__webglFramebuffer[Q][fe]);else o.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)o.deleteFramebuffer(M.__webglFramebuffer[Q]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=w.textures;for(let Q=0,fe=K.length;Q<fe;Q++){const Re=r.get(K[Q]);Re.__webglTexture&&(o.deleteTexture(Re.__webglTexture),d.memory.textures--),r.remove(K[Q])}r.remove(w)}let X=0;function Y(){X=0}function G(){return X}function W(w){X=w}function L(){const w=X;return w>=l.maxTextures&&xt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+l.maxTextures),X+=1,w}function k(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ie(w,M){const K=r.get(w);if(w.isVideoTexture&&q(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&K.__version!==w.version){const Q=w.image;if(Q===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(K,w,M);return}}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function te(w,M){const K=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){Me(K,w,M);return}else w.isExternalTexture&&(K.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function ne(w,M){const K=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&K.__version!==w.version){Me(K,w,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function ae(w,M){const K=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&K.__version!==w.version){Ne(K,w,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const Oe={[Np]:o.REPEAT,[Ha]:o.CLAMP_TO_EDGE,[Dp]:o.MIRRORED_REPEAT},Le={[Fn]:o.NEAREST,[ub]:o.NEAREST_MIPMAP_NEAREST,[cu]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[kh]:o.LINEAR_MIPMAP_NEAREST,[as]:o.LINEAR_MIPMAP_LINEAR},H={[pb]:o.NEVER,[xb]:o.ALWAYS,[mb]:o.LESS,[Mm]:o.LEQUAL,[gb]:o.EQUAL,[Em]:o.GEQUAL,[vb]:o.GREATER,[_b]:o.NOTEQUAL};function de(w,M){if(M.type===ca&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Hn||M.magFilter===kh||M.magFilter===cu||M.magFilter===as||M.minFilter===Hn||M.minFilter===kh||M.minFilter===cu||M.minFilter===as)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,Oe[M.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,Oe[M.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,Oe[M.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,Le[M.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,Le[M.minFilter]),M.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,H[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fn||M.minFilter!==cu&&M.minFilter!==as||M.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(w,M){let K=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",z));const Q=M.source;let fe=E.get(Q);fe===void 0&&(fe={},E.set(Q,fe));const Re=k(M);if(Re!==w.__cacheKey){fe[Re]===void 0&&(fe[Re]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,K=!0),fe[Re].usedTimes++;const we=fe[w.__cacheKey];we!==void 0&&(fe[w.__cacheKey].usedTimes--,we.usedTimes===0&&I(M)),w.__cacheKey=Re,w.__webglTexture=fe[Re].texture}return K}function j(w,M,K){return Math.floor(Math.floor(w/K)/M)}function le(w,M,K,Q){const Re=w.updateRanges;if(Re.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,Q,M.data);else{Re.sort((Qe,Ie)=>Qe.start-Ie.start);let we=0;for(let Qe=1;Qe<Re.length;Qe++){const Ie=Re[we],He=Re[Qe],Ve=Ie.start+Ie.count,ft=j(He.start,M.width,4),mt=j(Ie.start,M.width,4);He.start<=Ve+1&&ft===mt&&j(He.start+He.count-1,M.width,4)===ft?Ie.count=Math.max(Ie.count,He.start+He.count-Ie.start):(++we,Re[we]=He)}Re.length=we+1;const ce=i.getParameter(o.UNPACK_ROW_LENGTH),ve=i.getParameter(o.UNPACK_SKIP_PIXELS),Ue=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Qe=0,Ie=Re.length;Qe<Ie;Qe++){const He=Re[Qe],Ve=Math.floor(He.start/4),ft=Math.ceil(He.count/4),mt=Ve%M.width,$=Math.floor(Ve/M.width),Be=ft,Ee=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,$),i.texSubImage2D(o.TEXTURE_2D,0,mt,$,Be,Ee,K,Q,M.data)}w.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ce),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ue)}}function Me(w,M,K){let Q=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=o.TEXTURE_3D);const fe=Ce(w,M),Re=M.source;i.bindTexture(Q,w.__webglTexture,o.TEXTURE0+K);const we=r.get(Re);if(Re.version!==we.__version||fe===!0){if(i.activeTexture(o.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const Ee=zt.getPrimaries(zt.workingColorSpace),ke=M.colorSpace===Cr?null:zt.getPrimaries(M.colorSpace),Xe=M.colorSpace===Cr||Ee===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let ve=T(M.image,!1,l.maxTextureSize);ve=Fe(M,ve);const Ue=u.convert(M.format,M.colorSpace),Qe=u.convert(M.type);let Ie=U(M.internalFormat,Ue,Qe,M.normalized,M.colorSpace,M.isVideoTexture);de(Q,M);let He;const Ve=M.mipmaps,ft=M.isVideoTexture!==!0,mt=we.__version===void 0||fe===!0,$=Re.dataReady,Be=R(M,ve);if(M.isDepthTexture)Ie=C(M.format===rs,M.type),mt&&(ft?i.texStorage2D(o.TEXTURE_2D,1,Ie,ve.width,ve.height):i.texImage2D(o.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Ue,Qe,null));else if(M.isDataTexture)if(Ve.length>0){ft&&mt&&i.texStorage2D(o.TEXTURE_2D,Be,Ie,Ve[0].width,Ve[0].height);for(let Ee=0,ke=Ve.length;Ee<ke;Ee++)He=Ve[Ee],ft?$&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,He.width,He.height,Ue,Qe,He.data):i.texImage2D(o.TEXTURE_2D,Ee,Ie,He.width,He.height,0,Ue,Qe,He.data);M.generateMipmaps=!1}else ft?(mt&&i.texStorage2D(o.TEXTURE_2D,Be,Ie,ve.width,ve.height),$&&le(M,ve,Ue,Qe)):i.texImage2D(o.TEXTURE_2D,0,Ie,ve.width,ve.height,0,Ue,Qe,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ft&&mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Ie,Ve[0].width,Ve[0].height,ve.depth);for(let Ee=0,ke=Ve.length;Ee<ke;Ee++)if(He=Ve[Ee],M.format!==Vi)if(Ue!==null)if(ft){if($)if(M.layerUpdates.size>0){const Xe=Px(He.width,He.height,M.format,M.type);for(const De of M.layerUpdates){const ut=He.data.subarray(De*Xe/He.data.BYTES_PER_ELEMENT,(De+1)*Xe/He.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,De,He.width,He.height,1,Ue,ut)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,He.width,He.height,ve.depth,Ue,He.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Ie,He.width,He.height,ve.depth,0,He.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?$&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,He.width,He.height,ve.depth,Ue,Qe,He.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Ie,He.width,He.height,ve.depth,0,Ue,Qe,He.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ft&&mt&&i.texStorage2D(o.TEXTURE_2D,Be,Ie,Ve[0].width,Ve[0].height);for(let Ee=0,ke=Ve.length;Ee<ke;Ee++)He=Ve[Ee],M.format!==Vi?Ue!==null?ft?$&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,He.width,He.height,Ue,He.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Ie,He.width,He.height,0,He.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?$&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,He.width,He.height,Ue,Qe,He.data):i.texImage2D(o.TEXTURE_2D,Ee,Ie,He.width,He.height,0,Ue,Qe,He.data)}else if(M.isDataArrayTexture)if(ft){if(mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Ie,ve.width,ve.height,ve.depth),$)if(M.layerUpdates.size>0){const Ee=Px(ve.width,ve.height,M.format,M.type);for(const ke of M.layerUpdates){const Xe=ve.data.subarray(ke*Ee/ve.data.BYTES_PER_ELEMENT,(ke+1)*Ee/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ke,ve.width,ve.height,1,Ue,Qe,Xe)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Qe,ve.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ie,ve.width,ve.height,ve.depth,0,Ue,Qe,ve.data);else if(M.isData3DTexture)ft?(mt&&i.texStorage3D(o.TEXTURE_3D,Be,Ie,ve.width,ve.height,ve.depth),$&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Qe,ve.data)):i.texImage3D(o.TEXTURE_3D,0,Ie,ve.width,ve.height,ve.depth,0,Ue,Qe,ve.data);else if(M.isFramebufferTexture){if(mt)if(ft)i.texStorage2D(o.TEXTURE_2D,Be,Ie,ve.width,ve.height);else{let Ee=ve.width,ke=ve.height;for(let Xe=0;Xe<Be;Xe++)i.texImage2D(o.TEXTURE_2D,Xe,Ie,Ee,ke,0,Ue,Qe,null),Ee>>=1,ke>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const Ee=o.canvas;if(Ee.hasAttribute("layoutsubtree")||Ee.setAttribute("layoutsubtree","true"),ve.parentNode!==Ee){Ee.appendChild(ve),_.add(M),Ee.onpaint=ke=>{const Xe=ke.changedElements;for(const De of _)Xe.includes(De.image)&&(De.needsUpdate=!0)},Ee.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,ve);else{const Xe=o.RGBA,De=o.RGBA,ut=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xe,De,ut,ve)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Ve.length>0){if(ft&&mt){const Ee=nt(Ve[0]);i.texStorage2D(o.TEXTURE_2D,Be,Ie,Ee.width,Ee.height)}for(let Ee=0,ke=Ve.length;Ee<ke;Ee++)He=Ve[Ee],ft?$&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ue,Qe,He):i.texImage2D(o.TEXTURE_2D,Ee,Ie,Ue,Qe,He);M.generateMipmaps=!1}else if(ft){if(mt){const Ee=nt(ve);i.texStorage2D(o.TEXTURE_2D,Be,Ie,Ee.width,Ee.height)}$&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,Qe,ve)}else i.texImage2D(o.TEXTURE_2D,0,Ie,Ue,Qe,ve);y(M)&&b(Q),we.__version=Re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ne(w,M,K){if(M.image.length!==6)return;const Q=Ce(w,M),fe=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+K);const Re=r.get(fe);if(fe.version!==Re.__version||Q===!0){i.activeTexture(o.TEXTURE0+K);const we=zt.getPrimaries(zt.workingColorSpace),ce=M.colorSpace===Cr?null:zt.getPrimaries(M.colorSpace),ve=M.colorSpace===Cr||we===ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,Qe=M.image[0]&&M.image[0].isDataTexture,Ie=[];for(let De=0;De<6;De++)!Ue&&!Qe?Ie[De]=T(M.image[De],!0,l.maxCubemapSize):Ie[De]=Qe?M.image[De].image:M.image[De],Ie[De]=Fe(M,Ie[De]);const He=Ie[0],Ve=u.convert(M.format,M.colorSpace),ft=u.convert(M.type),mt=U(M.internalFormat,Ve,ft,M.normalized,M.colorSpace),$=M.isVideoTexture!==!0,Be=Re.__version===void 0||Q===!0,Ee=fe.dataReady;let ke=R(M,He);de(o.TEXTURE_CUBE_MAP,M);let Xe;if(Ue){$&&Be&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ke,mt,He.width,He.height);for(let De=0;De<6;De++){Xe=Ie[De].mipmaps;for(let ut=0;ut<Xe.length;ut++){const Je=Xe[ut];M.format!==Vi?Ve!==null?$?Ee&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut,0,0,Je.width,Je.height,Ve,Je.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut,mt,Je.width,Je.height,0,Je.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut,0,0,Je.width,Je.height,Ve,ft,Je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut,mt,Je.width,Je.height,0,Ve,ft,Je.data)}}}else{if(Xe=M.mipmaps,$&&Be){Xe.length>0&&ke++;const De=nt(Ie[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ke,mt,De.width,De.height)}for(let De=0;De<6;De++)if(Qe){$?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Ie[De].width,Ie[De].height,Ve,ft,Ie[De].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,mt,Ie[De].width,Ie[De].height,0,Ve,ft,Ie[De].data);for(let ut=0;ut<Xe.length;ut++){const It=Xe[ut].image[De].image;$?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut+1,0,0,It.width,It.height,Ve,ft,It.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut+1,mt,It.width,It.height,0,Ve,ft,It.data)}}else{$?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Ve,ft,Ie[De]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,mt,Ve,ft,Ie[De]);for(let ut=0;ut<Xe.length;ut++){const Je=Xe[ut];$?Ee&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut+1,0,0,Ve,ft,Je.image[De]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+De,ut+1,mt,Ve,ft,Je.image[De])}}}y(M)&&b(o.TEXTURE_CUBE_MAP),Re.__version=fe.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Se(w,M,K,Q,fe,Re){const we=u.convert(K.format,K.colorSpace),ce=u.convert(K.type),ve=U(K.internalFormat,we,ce,K.normalized,K.colorSpace),Ue=r.get(M),Qe=r.get(K);if(Qe.__renderTarget=M,!Ue.__hasExternalTextures){const Ie=Math.max(1,M.width>>Re),He=Math.max(1,M.height>>Re);fe===o.TEXTURE_3D||fe===o.TEXTURE_2D_ARRAY?i.texImage3D(fe,Re,ve,Ie,He,M.depth,0,we,ce,null):i.texImage2D(fe,Re,ve,Ie,He,0,we,ce,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),$e(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Q,fe,Qe.__webglTexture,0,st(M)):(fe===o.TEXTURE_2D||fe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Q,fe,Qe.__webglTexture,Re),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ae(w,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,w),M.depthBuffer){const Q=M.depthTexture,fe=Q&&Q.isDepthTexture?Q.type:null,Re=C(M.stencilBuffer,fe),we=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,st(M),Re,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,st(M),Re,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Re,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,we,o.RENDERBUFFER,w)}else{const Q=M.textures;for(let fe=0;fe<Q.length;fe++){const Re=Q[fe],we=u.convert(Re.format,Re.colorSpace),ce=u.convert(Re.type),ve=U(Re.internalFormat,we,ce,Re.normalized,Re.colorSpace);$e(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,st(M),ve,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,st(M),ve,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ve,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function et(w,M,K){const Q=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),fe.__webglTexture===void 0){fe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),de(o.TEXTURE_CUBE_MAP,M.depthTexture);const Ue=u.convert(M.depthTexture.format),Qe=u.convert(M.depthTexture.type);let Ie;M.depthTexture.format===Wa?Ie=o.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(Ie=o.DEPTH24_STENCIL8);for(let He=0;He<6;He++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ie,M.width,M.height,0,Ue,Qe,null)}}else ie(M.depthTexture,0);const Re=fe.__webglTexture,we=st(M),ce=Q?o.TEXTURE_CUBE_MAP_POSITIVE_X+K:o.TEXTURE_2D,ve=M.depthTexture.format===rs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Wa)$e(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,ce,Re,0,we):o.framebufferTexture2D(o.FRAMEBUFFER,ve,ce,Re,0);else if(M.depthTexture.format===rs)$e(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,ce,Re,0,we):o.framebufferTexture2D(o.FRAMEBUFFER,ve,ce,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(w){const M=r.get(w),K=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",fe)};Q.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=Q}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let Q=0;Q<6;Q++)et(M.__webglFramebuffer[Q],w,Q);else{const Q=w.texture.mipmaps;Q&&Q.length>0?et(M.__webglFramebuffer[0],w,0):et(M.__webglFramebuffer,w,0)}else if(K){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=o.createRenderbuffer(),Ae(M.__webglDepthbuffer[Q],w,!1);else{const fe=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer[Q];o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,Re)}}else{const Q=w.texture.mipmaps;if(Q&&Q.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ae(M.__webglDepthbuffer,w,!1);else{const fe=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Re),o.framebufferRenderbuffer(o.FRAMEBUFFER,fe,o.RENDERBUFFER,Re)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function rt(w,M,K){const Q=r.get(w);M!==void 0&&Se(Q.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&ze(w)}function Ye(w){const M=w.texture,K=r.get(w),Q=r.get(M);w.addEventListener("dispose",g);const fe=w.textures,Re=w.isWebGLCubeRenderTarget===!0,we=fe.length>1;if(we||(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=M.version,d.memory.textures++),Re){K.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[ce]=[];for(let ve=0;ve<M.mipmaps.length;ve++)K.__webglFramebuffer[ce][ve]=o.createFramebuffer()}else K.__webglFramebuffer[ce]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)K.__webglFramebuffer[ce]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(we)for(let ce=0,ve=fe.length;ce<ve;ce++){const Ue=r.get(fe[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&$e(w)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ce=0;ce<fe.length;ce++){const ve=fe[ce];K.__webglColorRenderbuffer[ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[ce]);const Ue=u.convert(ve.format,ve.colorSpace),Qe=u.convert(ve.type),Ie=U(ve.internalFormat,Ue,Qe,ve.normalized,ve.colorSpace,w.isXRRenderTarget===!0),He=st(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,He,Ie,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.RENDERBUFFER,K.__webglColorRenderbuffer[ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Ae(K.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Re){i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture),de(o.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Se(K.__webglFramebuffer[ce][ve],w,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else Se(K.__webglFramebuffer[ce],w,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(M)&&b(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(we){for(let ce=0,ve=fe.length;ce<ve;ce++){const Ue=fe[ce],Qe=r.get(Ue);let Ie=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ie=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ie,Qe.__webglTexture),de(Ie,Ue),Se(K.__webglFramebuffer,w,Ue,o.COLOR_ATTACHMENT0+ce,Ie,0),y(Ue)&&b(Ie)}i.unbindTexture()}else{let ce=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ce,Q.__webglTexture),de(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Se(K.__webglFramebuffer[ve],w,M,o.COLOR_ATTACHMENT0,ce,ve);else Se(K.__webglFramebuffer,w,M,o.COLOR_ATTACHMENT0,ce,0);y(M)&&b(ce),i.unbindTexture()}w.depthBuffer&&ze(w)}function ue(w){const M=w.textures;for(let K=0,Q=M.length;K<Q;K++){const fe=M[K];if(y(fe)){const Re=Z(w),we=r.get(fe).__webglTexture;i.bindTexture(Re,we),b(Re),i.unbindTexture()}}}const Pe=[],ht=[];function pt(w){if(w.samples>0){if($e(w)===!1){const M=w.textures,K=w.width,Q=w.height;let fe=o.COLOR_BUFFER_BIT;const Re=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=r.get(w),ce=M.length>1;if(ce)for(let Ue=0;Ue<M.length;Ue++)i.bindFramebuffer(o.FRAMEBUFFER,we.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,we.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const ve=w.texture.mipmaps;ve&&ve.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(fe|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(fe|=o.STENCIL_BUFFER_BIT)),ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,we.__webglColorRenderbuffer[Ue]);const Qe=r.get(M[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Qe,0)}o.blitFramebuffer(0,0,K,Q,0,0,K,Q,fe,o.NEAREST),p===!0&&(Pe.length=0,ht.length=0,Pe.push(o.COLOR_ATTACHMENT0+Ue),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Pe.push(Re),ht.push(Re),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ce)for(let Ue=0;Ue<M.length;Ue++){i.bindFramebuffer(o.FRAMEBUFFER,we.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,we.__webglColorRenderbuffer[Ue]);const Qe=r.get(M[Ue]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,we.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,Qe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&p){const M=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function st(w){return Math.min(l.maxSamples,w.samples)}function $e(w){const M=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function q(w){const M=d.render.frame;S.get(w)!==M&&(S.set(w,M),w.update())}function Fe(w,M){const K=w.colorSpace,Q=w.format,fe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||K!==ku&&K!==Cr&&(zt.getTransfer(K)===Jt?(Q!==Vi||fe!==Ci)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",K)),M}function nt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(m.width=w.naturalWidth||w.width,m.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(m.width=w.displayWidth,m.height=w.displayHeight):(m.width=w.width,m.height=w.height),m}this.allocateTextureUnit=L,this.resetTextureUnits=Y,this.getTextureUnits=G,this.setTextureUnits=W,this.setTexture2D=ie,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=ae,this.rebindTextures=rt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Y3(o,t){function i(r,l=Cr){let u;const d=zt.getTransfer(l);if(r===Ci)return o.UNSIGNED_BYTE;if(r===vm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_m)return o.UNSIGNED_SHORT_5_5_5_1;if(r===DS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===US)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===wS)return o.BYTE;if(r===NS)return o.SHORT;if(r===wl)return o.UNSIGNED_SHORT;if(r===gm)return o.INT;if(r===da)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===ha)return o.HALF_FLOAT;if(r===LS)return o.ALPHA;if(r===OS)return o.RGB;if(r===Vi)return o.RGBA;if(r===Wa)return o.DEPTH_COMPONENT;if(r===rs)return o.DEPTH_STENCIL;if(r===PS)return o.RED;if(r===xm)return o.RED_INTEGER;if(r===ls)return o.RG;if(r===Sm)return o.RG_INTEGER;if(r===ym)return o.RGBA_INTEGER;if(r===Ou||r===Pu||r===Fu||r===Iu)if(d===Jt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ou)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ou)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Up||r===Lp||r===Op||r===Pp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Up)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Op)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fp||r===Ip||r===Bp||r===zp||r===Hp||r===Gu||r===Gp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Fp||r===Ip)return d===Jt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Bp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===zp)return u.COMPRESSED_R11_EAC;if(r===Hp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Gu)return u.COMPRESSED_RG11_EAC;if(r===Gp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vp||r===kp||r===Xp||r===Wp||r===qp||r===Yp||r===Zp||r===jp||r===Kp||r===Qp||r===Jp||r===$p||r===em||r===tm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Vp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jp)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$p)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===em)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tm)return d===Jt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nm||r===im||r===am)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===nm)return d===Jt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===im)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===am)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rm||r===sm||r===Vu||r===om)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===rm)return u.COMPRESSED_RED_RGTC1_EXT;if(r===sm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===om)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Z3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class K3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new WS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Xi({vertexShader:Z3,fragmentShader:j3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pa(new Pl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q3 extends us{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,S=null,_=null,v=null,E=null,A=null;const P=typeof XRWebGLBinding<"u",T=new K3,y={},b=i.getContextAttributes();let Z=null,U=null;const C=[],R=[],z=new Xt;let g=null,O=null;const I=new Hi;I.viewport=new dn;const F=new Hi;F.viewport=new dn;const X=[I,F],Y=new rA;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=C[j];return le===void 0&&(le=new Jh,C[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=C[j];return le===void 0&&(le=new Jh,C[j]=le),le.getGripSpace()},this.getHand=function(j){let le=C[j];return le===void 0&&(le=new Jh,C[j]=le),le.getHandSpace()};function L(j){const le=R.indexOf(j.inputSource);if(le===-1)return;const Me=C[le];Me!==void 0&&(Me.update(j.inputSource,j.frame,m||d),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){l.removeEventListener("select",L),l.removeEventListener("selectstart",L),l.removeEventListener("selectend",L),l.removeEventListener("squeeze",L),l.removeEventListener("squeezestart",L),l.removeEventListener("squeezeend",L),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",ie);for(let j=0;j<C.length;j++){const le=R[j];le!==null&&(R[j]=null,C[j].disconnect(le))}G=null,W=null,T.reset();for(const j in y)delete y[j];if(t.setRenderTarget(Z),E=null,v=null,_=null,l=null,U=null,Ce.stop(),r.isPresenting=!1,t.setPixelRatio(g),t.setSize(z.width,z.height,!1),O!==null){const j=O.camera;j.fov=O.fov,j.zoom=O.zoom,j.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(Z=t.getRenderTarget(),l.addEventListener("select",L),l.addEventListener("selectstart",L),l.addEventListener("selectend",L),l.addEventListener("squeeze",L),l.addEventListener("squeezestart",L),l.addEventListener("squeezeend",L),l.addEventListener("end",k),l.addEventListener("inputsourceschange",ie),b.xrCompatible!==!0&&await i.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(z),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ne=null,Se=null;b.depth&&(Se=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=b.stencil?rs:Wa,Ne=b.stencil?Nl:da);const Ae={colorFormat:i.RGBA8,depthFormat:Se,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(Ae),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new ki(v.textureWidth,v.textureHeight,{format:Vi,type:Ci,depthTexture:new Dl(v.textureWidth,v.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new ki(E.framebufferWidth,E.framebufferHeight,{format:Vi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Ce.setContext(l),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ie(j){for(let le=0;le<j.removed.length;le++){const Me=j.removed[le],Ne=R.indexOf(Me);Ne>=0&&(R[Ne]=null,C[Ne].disconnect(Me))}for(let le=0;le<j.added.length;le++){const Me=j.added[le];let Ne=R.indexOf(Me);if(Ne===-1){for(let Ae=0;Ae<C.length;Ae++)if(Ae>=R.length){R.push(Me),Ne=Ae;break}else if(R[Ae]===null){R[Ae]=Me,Ne=Ae;break}if(Ne===-1)break}const Se=C[Ne];Se&&Se.connect(Me)}}const te=new ye,ne=new ye;function ae(j,le,Me){te.setFromMatrixPosition(le.matrixWorld),ne.setFromMatrixPosition(Me.matrixWorld);const Ne=te.distanceTo(ne),Se=le.projectionMatrix.elements,Ae=Me.projectionMatrix.elements,et=Se[14]/(Se[10]-1),ze=Se[14]/(Se[10]+1),rt=(Se[9]+1)/Se[5],Ye=(Se[9]-1)/Se[5],ue=(Se[8]-1)/Se[0],Pe=(Ae[8]+1)/Ae[0],ht=et*ue,pt=et*Pe,st=Ne/(-ue+Pe),$e=st*-ue;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($e),j.translateZ(st),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Se[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const q=et+st,Fe=ze+st,nt=ht-$e,w=pt+(Ne-$e),M=rt*ze/Fe*q,K=Ye*ze/Fe*q;j.projectionMatrix.makePerspective(nt,w,M,K,q,Fe),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Oe(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let le=j.near,Me=j.far;T.texture!==null&&(T.depthNear>0&&(le=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),Y.near=F.near=I.near=le,Y.far=F.far=I.far=Me,(G!==Y.near||W!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),G=Y.near,W=Y.far),Y.layers.mask=j.layers.mask|6,I.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;const Ne=j.parent,Se=Y.cameras;Oe(Y,Ne);for(let Ae=0;Ae<Se.length;Ae++)Oe(Se[Ae],Ne);Se.length===2?ae(Y,I,F):Y.projectionMatrix.copy(I.projectionMatrix),O===null&&j.isPerspectiveCamera&&(O={camera:j,fov:j.fov,zoom:j.zoom}),Le(j,Y,Ne)};function Le(j,le,Me){Me===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=lm*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&E===null))return p},this.setFoveation=function(j){p=j,v!==null&&(v.fixedFoveation=j),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=j)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(Y)},this.getCameraTexture=function(j){return y[j]};let H=null;function de(j,le){if(S=le.getViewerPose(m||d),A=le,S!==null){const Me=S.views;E!==null&&(t.setRenderTargetFramebuffer(U,E.framebuffer),t.setRenderTarget(U));let Ne=!1;Me.length!==Y.cameras.length&&(Y.cameras.length=0,Ne=!0);for(let ze=0;ze<Me.length;ze++){const rt=Me[ze];let Ye=null;if(E!==null)Ye=E.getViewport(rt);else{const Pe=_.getViewSubImage(v,rt);Ye=Pe.viewport,ze===0&&(t.setRenderTargetTextures(U,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(U))}let ue=X[ze];ue===void 0&&(ue=new Hi,ue.layers.enable(ze),ue.viewport=new dn,X[ze]=ue),ue.matrix.fromArray(rt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(rt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ze===0&&(Y.matrix.copy(ue.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ne===!0&&Y.cameras.push(ue)}const Se=l.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&P){_=r.getBinding();const ze=_.getDepthInformation(Me[0]);ze&&ze.isValid&&ze.texture&&T.init(ze,l.renderState)}if(Se&&Se.includes("camera-access")&&P){t.state.unbindTexture(),_=r.getBinding();for(let ze=0;ze<Me.length;ze++){const rt=Me[ze].camera;if(rt){let Ye=y[rt];Ye||(Ye=new WS,y[rt]=Ye);const ue=_.getCameraImage(rt);Ye.sourceTexture=ue}}}}for(let Me=0;Me<C.length;Me++){const Ne=R[Me],Se=C[Me];Ne!==null&&Se!==void 0&&Se.update(Ne,le,m||d)}H&&H(j,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),A=null}const Ce=new ZS;Ce.setAnimationLoop(de),this.setAnimationLoop=function(j){H=j},this.dispose=function(){}}}const J3=new Sn,ty=new Et;ty.set(-1,0,0,0,1,0,0,0,1);function $3(o,t){function i(T,y){T.matrixAutoUpdate===!0&&T.updateMatrix(),y.value.copy(T.matrix)}function r(T,y){y.color.getRGB(T.fogColor.value,qS(o)),y.isFog?(T.fogNear.value=y.near,T.fogFar.value=y.far):y.isFogExp2&&(T.fogDensity.value=y.density)}function l(T,y,b,Z,U){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?u(T,y):y.isMeshLambertMaterial?(u(T,y),y.envMap&&(T.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(T,y),_(T,y)):y.isMeshPhongMaterial?(u(T,y),S(T,y),y.envMap&&(T.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(T,y),v(T,y),y.isMeshPhysicalMaterial&&E(T,y,U)):y.isMeshMatcapMaterial?(u(T,y),A(T,y)):y.isMeshDepthMaterial?u(T,y):y.isMeshDistanceMaterial?(u(T,y),P(T,y)):y.isMeshNormalMaterial?u(T,y):y.isLineBasicMaterial?(d(T,y),y.isLineDashedMaterial&&h(T,y)):y.isPointsMaterial?p(T,y,b,Z):y.isSpriteMaterial?m(T,y):y.isShadowMaterial?(T.color.value.copy(y.color),T.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(T,y){T.opacity.value=y.opacity,y.color&&T.diffuse.value.copy(y.color),y.emissive&&T.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(T.map.value=y.map,i(y.map,T.mapTransform)),y.alphaMap&&(T.alphaMap.value=y.alphaMap,i(y.alphaMap,T.alphaMapTransform)),y.bumpMap&&(T.bumpMap.value=y.bumpMap,i(y.bumpMap,T.bumpMapTransform),T.bumpScale.value=y.bumpScale,y.side===ei&&(T.bumpScale.value*=-1)),y.normalMap&&(T.normalMap.value=y.normalMap,i(y.normalMap,T.normalMapTransform),T.normalScale.value.copy(y.normalScale),y.side===ei&&T.normalScale.value.negate()),y.displacementMap&&(T.displacementMap.value=y.displacementMap,i(y.displacementMap,T.displacementMapTransform),T.displacementScale.value=y.displacementScale,T.displacementBias.value=y.displacementBias),y.emissiveMap&&(T.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,T.emissiveMapTransform)),y.specularMap&&(T.specularMap.value=y.specularMap,i(y.specularMap,T.specularMapTransform)),y.alphaTest>0&&(T.alphaTest.value=y.alphaTest);const b=t.get(y),Z=b.envMap,U=b.envMapRotation;Z&&(T.envMap.value=Z,T.envMapRotation.value.setFromMatrix4(J3.makeRotationFromEuler(U)).transpose(),Z.isCubeTexture&&Z.isRenderTargetTexture===!1&&T.envMapRotation.value.premultiply(ty),T.reflectivity.value=y.reflectivity,T.ior.value=y.ior,T.refractionRatio.value=y.refractionRatio),y.lightMap&&(T.lightMap.value=y.lightMap,T.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,T.lightMapTransform)),y.aoMap&&(T.aoMap.value=y.aoMap,T.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,T.aoMapTransform))}function d(T,y){T.diffuse.value.copy(y.color),T.opacity.value=y.opacity,y.map&&(T.map.value=y.map,i(y.map,T.mapTransform))}function h(T,y){T.dashSize.value=y.dashSize,T.totalSize.value=y.dashSize+y.gapSize,T.scale.value=y.scale}function p(T,y,b,Z){T.diffuse.value.copy(y.color),T.opacity.value=y.opacity,T.size.value=y.size*b,T.scale.value=Z*.5,y.map&&(T.map.value=y.map,i(y.map,T.uvTransform)),y.alphaMap&&(T.alphaMap.value=y.alphaMap,i(y.alphaMap,T.alphaMapTransform)),y.alphaTest>0&&(T.alphaTest.value=y.alphaTest)}function m(T,y){T.diffuse.value.copy(y.color),T.opacity.value=y.opacity,T.rotation.value=y.rotation,y.map&&(T.map.value=y.map,i(y.map,T.mapTransform)),y.alphaMap&&(T.alphaMap.value=y.alphaMap,i(y.alphaMap,T.alphaMapTransform)),y.alphaTest>0&&(T.alphaTest.value=y.alphaTest)}function S(T,y){T.specular.value.copy(y.specular),T.shininess.value=Math.max(y.shininess,1e-4)}function _(T,y){y.gradientMap&&(T.gradientMap.value=y.gradientMap)}function v(T,y){T.metalness.value=y.metalness,y.metalnessMap&&(T.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,T.metalnessMapTransform)),T.roughness.value=y.roughness,y.roughnessMap&&(T.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,T.roughnessMapTransform)),y.envMap&&(T.envMapIntensity.value=y.envMapIntensity)}function E(T,y,b){T.ior.value=y.ior,y.sheen>0&&(T.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),T.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(T.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,T.sheenColorMapTransform)),y.sheenRoughnessMap&&(T.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,T.sheenRoughnessMapTransform))),y.clearcoat>0&&(T.clearcoat.value=y.clearcoat,T.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(T.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,T.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(T.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&T.clearcoatNormalScale.value.negate())),y.dispersion>0&&(T.dispersion.value=y.dispersion),y.retroreflectivity>0&&(T.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(T.iridescence.value=y.iridescence,T.iridescenceIOR.value=y.iridescenceIOR,T.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(T.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,T.iridescenceMapTransform)),y.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),y.transmission>0&&(T.transmission.value=y.transmission,T.transmissionSamplerMap.value=b.texture,T.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(T.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,T.transmissionMapTransform)),T.thickness.value=y.thickness,y.thicknessMap&&(T.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=y.attenuationDistance,T.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(T.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(T.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=y.specularIntensity,T.specularColor.value.copy(y.specularColor),y.specularColorMap&&(T.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,T.specularColorMapTransform)),y.specularIntensityMap&&(T.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,T.specularIntensityMapTransform))}function A(T,y){y.matcap&&(T.matcap.value=y.matcap)}function P(T,y){const b=t.get(y).light;T.referencePosition.value.setFromMatrixPosition(b.matrixWorld),T.nearDistance.value=b.shadow.camera.near,T.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ew(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,C){const R=C.program;r.uniformBlockBinding(U,R)}function m(U,C){let R=l[U.id];R===void 0&&(T(U),R=S(U),l[U.id]=R,U.addEventListener("dispose",b));const z=C.program;r.updateUBOMapping(U,z);const g=t.render.frame;u[U.id]!==g&&(v(U),u[U.id]=g)}function S(U){const C=_();U.__bindingPointIndex=C;const R=o.createBuffer(),z=U.__size,g=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,z,g),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,R),R}function _(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const C=l[U.id],R=U.uniforms,z=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let g=0,O=R.length;g<O;g++){const I=R[g];if(Array.isArray(I))for(let F=0,X=I.length;F<X;F++)E(I[F],g,F,z);else E(I,g,0,z)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(U,C,R,z){if(P(U,C,R,z)===!0){const g=U.__offset,O=U.value;if(Array.isArray(O)){let I=0;for(let F=0;F<O.length;F++){const X=O[F],Y=y(X);A(X,U.__data,I),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,U.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,g,U.__data)}}function A(U,C,R){typeof U=="number"||typeof U=="boolean"?C[0]=U:U.isMatrix3?(C[0]=U.elements[0],C[1]=U.elements[1],C[2]=U.elements[2],C[3]=0,C[4]=U.elements[3],C[5]=U.elements[4],C[6]=U.elements[5],C[7]=0,C[8]=U.elements[6],C[9]=U.elements[7],C[10]=U.elements[8],C[11]=0):ArrayBuffer.isView(U)?C.set(new U.constructor(U.buffer,U.byteOffset,C.length)):U.toArray(C,R)}function P(U,C,R,z){const g=U.value,O=C+"_"+R;if(z[O]===void 0)return typeof g=="number"||typeof g=="boolean"?z[O]=g:ArrayBuffer.isView(g)?z[O]=g.slice():z[O]=g.clone(),!0;{const I=z[O];if(typeof g=="number"||typeof g=="boolean"){if(I!==g)return z[O]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(I.equals(g)===!1)return I.copy(g),!0}}return!1}function T(U){const C=U.uniforms;let R=0;const z=16;for(let O=0,I=C.length;O<I;O++){const F=Array.isArray(C[O])?C[O]:[C[O]];for(let X=0,Y=F.length;X<Y;X++){const G=F[X],W=Array.isArray(G.value)?G.value:[G.value];for(let L=0,k=W.length;L<k;L++){const ie=W[L],te=y(ie),ne=R%z,ae=ne%te.boundary,Oe=ne+ae;R+=ae,Oe!==0&&z-Oe<te.storage&&(R+=z-Oe),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=R,R+=te.storage}}}const g=R%z;return g>0&&(R+=z-g),U.__size=R,U.__cache={},this}function y(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(U)?(C.boundary=16,C.storage=U.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",U),C}function b(U){const C=U.target;C.removeEventListener("dispose",b);const R=d.indexOf(C.__bindingPointIndex);d.splice(R,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function Z(){for(const U in l)o.deleteBuffer(l[U]);d=[],l={},u={}}return{bind:p,update:m,dispose:Z}}const tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function nw(){return oa===null&&(oa=new Zb(tw,16,16,ls,ha),oa.name="DFG_LUT",oa.minFilter=Hn,oa.magFilter=Hn,oa.wrapS=Ha,oa.wrapT=Ha,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class iw{constructor(t={}){const{canvas:i=Mb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:E=Ci}=t;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const P=E,T=new Set([ym,Sm,xm]),y=new Set([Ci,da,wl,Nl,vm,_m]),b=new Uint32Array(4),Z=new Int32Array(4),U=new ye;let C=null,R=null;const z=[],g=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let F=!1,X=null,Y=null,G=null,W=null;this._outputColorSpace=pi;let L=0,k=0,ie=null,te=-1,ne=null;const ae=new dn,Oe=new dn;let Le=null;const H=new Vt(0);let de=0,Ce=i.width,j=i.height,le=1,Me=null,Ne=null;const Se=new dn(0,0,Ce,j),Ae=new dn(0,0,Ce,j);let et=!1;const ze=new kS;let rt=!1,Ye=!1;const ue=new Sn,Pe=new ye,ht=new dn,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function $e(){return ie===null?le:1}let q=r;function Fe(N,J){return i.getContext(N,J)}let nt,w,M,K,Q,fe,Re,we,ce,ve,Ue,Qe,Ie,He,Ve,ft,mt,$,Be,Ee,ke,Xe,De;try{const N={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mm}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",St,!1),i.addEventListener("webglcontextcreationerror",ti,!1),q===null){const J="webgl2";if(q=Fe(J,N),q===null)throw Fe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(N){throw i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",St,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),kt("WebGLRenderer: "+N.message),N}function ut(){nt=new nC(q),nt.init(),ke=new Y3(q,nt),w=new qR(q,nt,t,ke),M=new W3(q,nt),w.reversedDepthBuffer&&v&&M.buffers.depth.setReversed(!0),Y=q.createFramebuffer(),G=q.createFramebuffer(),W=q.createFramebuffer(),K=new rC(q),Q=new D3,fe=new q3(q,nt,M,Q,w,ke,K),Re=new tC(I),we=new oA(q),Xe=new XR(q,we),ce=new iC(q,we,K,Xe),ve=new oC(q,ce,we,Xe,K),$=new sC(q,w,fe),Ve=new YR(Q),Ue=new N3(I,Re,nt,w,Xe,Ve),Qe=new $3(I,Q),Ie=new L3,He=new z3(nt),mt=new kR(I,Re,M,ve,A,p),ft=new X3(I,ve,w),De=new ew(q,K,w,M),Be=new WR(q,nt,K),Ee=new aC(q,nt,K),K.programs=Ue.programs,I.capabilities=w,I.extensions=nt,I.properties=Q,I.renderLists=Ie,I.shadowMap=ft,I.state=M,I.info=K}P!==Ci&&(O=new cC(P,i.width,i.height,h,l,u));const Je=new Q3(I,q);this.xr=Je,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const N=nt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=nt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(N){N!==void 0&&(le=N,this.setSize(Ce,j,!1))},this.getSize=function(N){return N.set(Ce,j)},this.setSize=function(N,J,xe=!0){if(Je.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=N,j=J,i.width=Math.floor(N*le),i.height=Math.floor(J*le),xe===!0&&(i.style.width=N+"px",i.style.height=J+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(Ce*le,j*le).floor()},this.setDrawingBufferSize=function(N,J,xe){Ce=N,j=J,le=xe,i.width=Math.floor(N*xe),i.height=Math.floor(J*xe),this.setViewport(0,0,N,J)},this.setEffects=function(N){if(P===Ci){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let J=0;J<N.length;J++)if(N[J].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ae)},this.getViewport=function(N){return N.copy(Se)},this.setViewport=function(N,J,xe,pe){N.isVector4?Se.set(N.x,N.y,N.z,N.w):Se.set(N,J,xe,pe),M.viewport(ae.copy(Se).multiplyScalar(le).round())},this.getScissor=function(N){return N.copy(Ae)},this.setScissor=function(N,J,xe,pe){N.isVector4?Ae.set(N.x,N.y,N.z,N.w):Ae.set(N,J,xe,pe),M.scissor(Oe.copy(Ae).multiplyScalar(le).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(N){M.setScissorTest(et=N)},this.setOpaqueSort=function(N){Me=N},this.setTransparentSort=function(N){Ne=N},this.getClearColor=function(N){return N.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,xe=!0){let pe=0;if(N){let me=!1;if(ie!==null){const Ze=ie.texture.format;me=T.has(Ze)}if(me){const Ze=ie.texture.type,tt=y.has(Ze),We=mt.getClearColor(),ot=mt.getClearAlpha(),lt=We.r,vt=We.g,yt=We.b;tt?(b[0]=lt,b[1]=vt,b[2]=yt,b[3]=ot,q.clearBufferuiv(q.COLOR,0,b)):(Z[0]=lt,Z[1]=vt,Z[2]=yt,Z[3]=ot,q.clearBufferiv(q.COLOR,0,Z))}else pe|=q.COLOR_BUFFER_BIT}J&&(pe|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xe&&(pe|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pe!==0&&q.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),X=N},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",St,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),mt.dispose(),Ie.dispose(),He.dispose(),Q.dispose(),Re.dispose(),ve.dispose(),Xe.dispose(),De.dispose(),Ue.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",Nr),Je.removeEventListener("sessionend",Za),Wi.stop()};function It(N){N.preventDefault(),gx("WebGLRenderer: Context Lost."),F=!0}function St(){gx("WebGLRenderer: Context Restored."),F=!1;const N=K.autoReset,J=ft.enabled,xe=ft.autoUpdate,pe=ft.needsUpdate,me=ft.type;ut(),K.autoReset=N,ft.enabled=J,ft.autoUpdate=xe,ft.needsUpdate=pe,ft.type=me}function ti(N){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function gi(N){const J=N.target;J.removeEventListener("dispose",gi),Ju(J)}function Ju(N){fs(N),Q.remove(N)}function fs(N){const J=Q.get(N).programs;J!==void 0&&(J.forEach(function(xe){Ue.releaseProgram(xe)}),N.isShaderMaterial&&Ue.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,xe,pe,me,Ze){J===null&&(J=pt);const tt=me.isMesh&&me.matrixWorld.determinantAffine()<0,We=bo(N,J,xe,pe,me);M.setMaterial(pe,tt);let ot=xe.index,lt=1;if(pe.wireframe===!0){if(ot=ce.getWireframeAttribute(xe),ot===void 0)return;lt=2}const vt=xe.drawRange,yt=xe.attributes.position;let it=vt.start*lt,Dt=(vt.start+vt.count)*lt;Ze!==null&&(it=Math.max(it,Ze.start*lt),Dt=Math.min(Dt,(Ze.start+Ze.count)*lt)),ot!==null?(it=Math.max(it,0),Dt=Math.min(Dt,ot.count)):yt!=null&&(it=Math.max(it,0),Dt=Math.min(Dt,yt.count));const Ct=Dt-it;if(Ct<0||Ct===1/0)return;Xe.setup(me,pe,We,xe,ot);let $t,Yt=Be;if(ot!==null&&($t=we.get(ot),Yt=Ee,Yt.setIndex($t)),me.isMesh)pe.wireframe===!0?(M.setLineWidth(pe.wireframeLinewidth*$e()),Yt.setMode(q.LINES)):Yt.setMode(q.TRIANGLES);else if(me.isLine){let yn=pe.linewidth;yn===void 0&&(yn=1),M.setLineWidth(yn*$e()),me.isLineSegments?Yt.setMode(q.LINES):me.isLineLoop?Yt.setMode(q.LINE_LOOP):Yt.setMode(q.LINE_STRIP)}else me.isPoints?Yt.setMode(q.POINTS):me.isSprite&&Yt.setMode(q.TRIANGLES);if(me.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(me._multiDrawStarts,me._multiDrawCounts,me._multiDrawCount);else{const yn=me._multiDrawStarts,je=me._multiDrawCounts,ln=me._multiDrawCount,Bt=ot?we.get(ot).bytesPerElement:1,Gn=Q.get(pe).currentProgram.getUniforms();for(let ni=0;ni<ln;ni++)Gn.setValue(q,"_gl_DrawID",ni),Yt.render(yn[ni]/Bt,je[ni])}else if(me.isInstancedMesh)Yt.renderInstances(it,Ct,me.count);else if(xe.isInstancedBufferGeometry){const yn=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,je=Math.min(xe.instanceCount,yn);Yt.renderInstances(it,Ct,je)}else Yt.render(it,Ct)};function wr(N,J,xe,pe){X!==null&&N.isNodeMaterial&&X.setObject(pe,N),rt===!0&&Ve.setState(N,xe,!1),N.transparent===!0&&N.side===za&&N.forceSinglePass===!1?(N.side=ei,N.needsUpdate=!0,Dr(N,J,pe),N.side=ss,N.needsUpdate=!0,Dr(N,J,pe),N.side=za):Dr(N,J,pe)}this.compile=function(N,J,xe=null){xe===null&&(xe=N),X!==null&&X.renderStart(N,J,xe),R=He.get(xe),R.init(J),g.push(R),xe.traverseVisible(function(me){me.isLight&&me.layers.test(J.layers)&&(R.pushLight(me),me.castShadow&&R.pushShadow(me))}),N!==xe&&N.traverseVisible(function(me){me.isLight&&me.layers.test(J.layers)&&(R.pushLight(me),me.castShadow&&R.pushShadow(me))}),R.setupLights(),X!==null&&X.updateLights(R.state.lightsArray),Ye=this.localClippingEnabled,rt=Ve.init(this.clippingPlanes,Ye),rt===!0&&Ve.setGlobalState(this.clippingPlanes,J),X!==null&&ft.render(R.state.shadowsArray,xe,J);const pe=new Set;return N.traverse(function(me){if(!(me.isMesh||me.isPoints||me.isLine||me.isSprite))return;const Ze=me.material;if(Ze)if(Array.isArray(Ze))for(let tt=0;tt<Ze.length;tt++){const We=Ze[tt];wr(We,xe,J,me),pe.add(We)}else wr(Ze,xe,J,me),pe.add(Ze)}),R=g.pop(),X!==null&&X.renderEnd(),pe},this.compileAsync=function(N,J,xe=null){const pe=this.compile(N,J,xe);return new Promise(me=>{function Ze(){if(pe.forEach(function(tt){const ot=Q.get(tt).currentProgram;(ot===void 0||ot.isReady())&&pe.delete(tt)}),pe.size===0){me(N);return}setTimeout(Ze,10)}nt.get("KHR_parallel_shader_compile")!==null?Ze():setTimeout(Ze,10)})};let Ya=null;function ga(N){Ya&&Ya(N)}function Nr(){Wi.stop()}function Za(){Wi.start()}const Wi=new ZS;Wi.setAnimationLoop(ga),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(N){Ya=N,Je.setAnimationLoop(N),N===null?Wi.stop():Wi.start()},Je.addEventListener("sessionstart",Nr),Je.addEventListener("sessionend",Za),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;X!==null&&X.renderStart(N,J);const xe=Je.enabled===!0&&Je.isPresenting===!0,pe=O!==null&&(ie===null||xe)&&O.begin(I,ie);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(J),J=Je.getCamera()),N.isScene===!0&&N.onBeforeRender(I,N,J,ie),R=He.get(N,g.length),R.init(J),R.state.textureUnits=fe.getTextureUnits(),g.push(R),ue.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ze.setFromProjectionMatrix(ue,ua,J.reversedDepth),Ye=this.localClippingEnabled,rt=Ve.init(this.clippingPlanes,Ye),C=Ie.get(N,z.length),C.init(),z.push(C),Je.enabled===!0&&Je.isPresenting===!0){const tt=I.xr.getDepthSensingMesh();tt!==null&&So(tt,J,-1/0,I.sortObjects)}So(N,J,0,I.sortObjects),C.finish(),X!==null&&X.updateLights(R.state.lightsArray),I.sortObjects===!0&&C.sort(Me,Ne),st=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,st&&mt.addToRenderList(C,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ve.beginShadows();const me=R.state.shadowsArray;if(ft.render(me,N,J),rt===!0&&Ve.endShadows(),(pe&&O.hasRenderPass())===!1){const tt=C.opaque,We=C.transmissive;if(R.setupLights(),J.isArrayCamera){const ot=J.cameras;if(We.length>0)for(let lt=0,vt=ot.length;lt<vt;lt++){const yt=ot[lt];ds(tt,We,N,yt)}st&&mt.render(N);for(let lt=0,vt=ot.length;lt<vt;lt++){const yt=ot[lt];yo(C,N,yt,yt.viewport)}}else We.length>0&&ds(tt,We,N,J),st&&mt.render(N),yo(C,N,J)}ie!==null&&k===0&&(fe.updateMultisampleRenderTarget(ie),fe.updateRenderTargetMipmap(ie)),pe&&O.end(I),N.isScene===!0&&N.onAfterRender(I,N,J),Xe.resetDefaultState(),te=-1,ne=null,g.pop(),g.length>0?(R=g[g.length-1],fe.setTextureUnits(R.state.textureUnits),rt===!0&&Ve.setGlobalState(I.clippingPlanes,R.state.camera)):R=null,z.pop(),z.length>0?C=z[z.length-1]:C=null,X!==null&&X.renderEnd()};function So(N,J,xe,pe){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)xe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLightProbeGrid)R.pushLightProbeGrid(N);else if(N.isLight)R.pushLight(N),N.castShadow&&R.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(ze)){pe&&ht.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ue);const tt=ve.update(N),We=N.material;We.visible&&C.push(N,tt,We,xe,ht.z,null,J)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(ze))){const tt=ve.update(N),We=N.material;if(pe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ht.copy(N.boundingSphere.center)):(tt.boundingSphere===null&&tt.computeBoundingSphere(),ht.copy(tt.boundingSphere.center)),ht.applyMatrix4(N.matrixWorld).applyMatrix4(ue)),Array.isArray(We)){const ot=tt.groups;for(let lt=0,vt=ot.length;lt<vt;lt++){const yt=ot[lt],it=We[yt.materialIndex];it&&it.visible&&C.push(N,tt,it,xe,ht.z,yt,J)}}else We.visible&&C.push(N,tt,We,xe,ht.z,null,J)}}const Ze=N.children;for(let tt=0,We=Ze.length;tt<We;tt++)So(Ze[tt],J,xe,pe)}function yo(N,J,xe,pe){const{opaque:me,transmissive:Ze,transparent:tt}=N;R.setupLightsView(xe),rt===!0&&Ve.setGlobalState(I.clippingPlanes,xe),pe&&M.viewport(ae.copy(pe)),me.length>0&&qi(me,J,xe),Ze.length>0&&qi(Ze,J,xe),tt.length>0&&qi(tt,J,xe),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ds(N,J,xe,pe){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[pe.id]===void 0){const it=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[pe.id]=new ki(1,1,{generateMipmaps:!0,type:it?ha:Ci,minFilter:as,samples:Math.max(4,w.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}const Ze=R.state.transmissionRenderTarget[pe.id],tt=pe.viewport||ae;Ze.setSize(tt.z*I.transmissionResolutionScale,tt.w*I.transmissionResolutionScale);const We=I.getRenderTarget(),ot=I.getActiveCubeFace(),lt=I.getActiveMipmapLevel();I.setRenderTarget(Ze),I.getClearColor(H),de=I.getClearAlpha(),de<1&&I.setClearColor(16777215,.5),I.clear(),st&&mt.render(xe);const vt=I.toneMapping;I.toneMapping=fa;const yt=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),R.setupLightsView(pe),rt===!0&&Ve.setGlobalState(I.clippingPlanes,pe),qi(N,xe,pe),fe.updateMultisampleRenderTarget(Ze),fe.updateRenderTargetMipmap(Ze),nt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Dt=0,Ct=J.length;Dt<Ct;Dt++){const $t=J[Dt],{object:Yt,geometry:yn,material:je,group:ln}=$t;if(je.side===za&&Yt.layers.test(pe.layers)){const Bt=je.side;je.side=ei,je.needsUpdate=!0,Fl(Yt,xe,pe,yn,je,ln),je.side=Bt,je.needsUpdate=!0,it=!0}}it===!0&&(fe.updateMultisampleRenderTarget(Ze),fe.updateRenderTargetMipmap(Ze))}I.setRenderTarget(We,ot,lt),I.setClearColor(H,de),yt!==void 0&&(pe.viewport=yt),I.toneMapping=vt}function qi(N,J,xe){const pe=J.isScene===!0?J.overrideMaterial:null;for(let me=0,Ze=N.length;me<Ze;me++){const tt=N[me],{object:We,geometry:ot,group:lt}=tt;let vt=tt.material;vt.allowOverride===!0&&pe!==null&&(vt=pe),We.layers.test(xe.layers)&&Fl(We,J,xe,ot,vt,lt)}}function Fl(N,J,xe,pe,me,Ze){X!==null&&me.isNodeMaterial&&X.setObject(N,me),N.onBeforeRender(I,J,xe,pe,me,Ze),N.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),me.onBeforeRender(I,J,xe,pe,N,Ze),me.transparent===!0&&me.side===za&&me.forceSinglePass===!1?(me.side=ei,me.needsUpdate=!0,I.renderBufferDirect(xe,J,pe,me,N,Ze),me.side=ss,me.needsUpdate=!0,I.renderBufferDirect(xe,J,pe,me,N,Ze),me.side=za):I.renderBufferDirect(xe,J,pe,me,N,Ze),N.onAfterRender(I,J,xe,pe,me,Ze)}function Dr(N,J,xe){J.isScene!==!0&&(J=pt);const pe=Q.get(N),me=R.state.lights,Ze=R.state.shadowsArray,tt=me.state.version,We=Ue.getParameters(N,me.state,Ze,J,xe,R.state.lightProbeGridArray),ot=Ue.getProgramCacheKey(We);let lt=pe.programs;pe.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?J.environment:null,pe.fog=J.fog;const vt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;pe.envMap=Re.get(N.envMap||pe.environment,vt),pe.envMapRotation=pe.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,lt===void 0&&(N.addEventListener("dispose",gi),lt=new Map,pe.programs=lt);let yt=lt.get(ot);if(yt!==void 0){if(pe.currentProgram===yt&&pe.lightsStateVersion===tt)return Eo(N,We),yt}else We.uniforms=Ue.getUniforms(N),X!==null&&N.isNodeMaterial&&X.build(N,xe,We),N.onBeforeCompile(We,I),yt=Ue.acquireProgram(We,ot),lt.set(ot,yt),pe.uniforms=We.uniforms;const it=pe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(it.clippingPlanes=Ve.uniform),Eo(N,We),pe.needsLights=Bl(N),pe.lightsStateVersion=tt,pe.needsLights&&(it.ambientLightColor.value=me.state.ambient,it.lightProbe.value=me.state.probe,it.sunLights.value=me.state.sun,it.sunLightShadows.value=me.state.sunShadow,it.directionalLights.value=me.state.directional,it.directionalLightShadows.value=me.state.directionalShadow,it.spotLights.value=me.state.spot,it.spotLightShadows.value=me.state.spotShadow,it.rectAreaLights.value=me.state.rectArea,it.ltc_1.value=me.state.rectAreaLTC1,it.ltc_2.value=me.state.rectAreaLTC2,it.pointLights.value=me.state.point,it.pointLightShadows.value=me.state.pointShadow,it.hemisphereLights.value=me.state.hemi,it.sunShadowMatrix.value=me.state.sunShadowMatrix,it.sunShadowCascade.value=me.state.sunShadowCascade,it.directionalShadowMatrix.value=me.state.directionalShadowMatrix,it.spotLightMatrix.value=me.state.spotLightMatrix,it.spotLightMap.value=me.state.spotLightMap,it.pointShadowMatrix.value=me.state.pointShadowMatrix),pe.lightProbeGrid=R.state.lightProbeGridArray.length>0,pe.currentProgram=yt,pe.uniformsList=null,yt}function Mo(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=Bu.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function Eo(N,J){const xe=Q.get(N);xe.outputColorSpace=J.outputColorSpace,xe.batching=J.batching,xe.batchingColor=J.batchingColor,xe.instancing=J.instancing,xe.instancingColor=J.instancingColor,xe.instancingMorph=J.instancingMorph,xe.skinning=J.skinning,xe.morphTargets=J.morphTargets,xe.morphNormals=J.morphNormals,xe.morphColors=J.morphColors,xe.morphTargetsCount=J.morphTargetsCount,xe.numClippingPlanes=J.numClippingPlanes,xe.numIntersection=J.numClipIntersection,xe.vertexAlphas=J.vertexAlphas,xe.vertexTangents=J.vertexTangents,xe.toneMapping=J.toneMapping}function To(N,J){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;U.setFromMatrixPosition(J.matrixWorld);for(let xe=0,pe=N.length;xe<pe;xe++){const me=N[xe];if(me.texture!==null&&me.boundingBox.containsPoint(U))return me}return null}function bo(N,J,xe,pe,me){J.isScene!==!0&&(J=pt),fe.resetTextureUnits();const Ze=J.fog,tt=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial?J.environment:null,We=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:zt.workingColorSpace,ot=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial&&!pe.envMap||pe.isMeshPhongMaterial&&!pe.envMap,lt=Re.get(pe.envMap||tt,ot),vt=pe.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,yt=!!xe.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),it=!!xe.morphAttributes.position,Dt=!!xe.morphAttributes.normal,Ct=!!xe.morphAttributes.color;let $t=fa;pe.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&($t=I.toneMapping);const Yt=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,yn=Yt!==void 0?Yt.length:0,je=Q.get(pe),ln=R.state.lights;if(rt===!0&&(Ye===!0||N!==ne)){const Ot=N===ne&&pe.id===te;Ve.setState(pe,N,Ot)}let Bt=!1;pe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ln.state.version||je.outputColorSpace!==We||me.isBatchedMesh&&je.batching===!1||!me.isBatchedMesh&&je.batching===!0||me.isBatchedMesh&&je.batchingColor===!0&&me._colorsTexture===null||me.isBatchedMesh&&je.batchingColor===!1&&me._colorsTexture!==null||me.isInstancedMesh&&je.instancing===!1||!me.isInstancedMesh&&je.instancing===!0||me.isSkinnedMesh&&je.skinning===!1||!me.isSkinnedMesh&&je.skinning===!0||me.isInstancedMesh&&je.instancingColor===!0&&me.instanceColor===null||me.isInstancedMesh&&je.instancingColor===!1&&me.instanceColor!==null||me.isInstancedMesh&&je.instancingMorph===!0&&me.morphTexture===null||me.isInstancedMesh&&je.instancingMorph===!1&&me.morphTexture!==null||je.envMap!==lt||pe.fog===!0&&je.fog!==Ze||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ve.numPlanes||je.numIntersection!==Ve.numIntersection)||je.vertexAlphas!==vt||je.vertexTangents!==yt||je.morphTargets!==it||je.morphNormals!==Dt||je.morphColors!==Ct||je.toneMapping!==$t||je.morphTargetsCount!==yn||!!je.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,je.__version=pe.version);let Gn=je.currentProgram;Bt===!0&&(Gn=Dr(pe,J,me),X&&pe.isNodeMaterial&&X.onUpdateProgram(pe,Gn,je));let ni=!1,Yi=!1,wt=!1;const Wt=Gn.getUniforms(),nn=je.uniforms;if(M.useProgram(Gn.program)&&(ni=!0,Yi=!0,wt=!0),pe.id!==te&&(te=pe.id,Yi=!0),je.needsLights){const Ot=To(R.state.lightProbeGridArray,me);je.lightProbeGrid!==Ot&&(je.lightProbeGrid=Ot,Yi=!0)}if(ni||ne!==N){M.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Wt.setValue(q,"projectionMatrix",N.projectionMatrix),Wt.setValue(q,"viewMatrix",N.matrixWorldInverse);const cn=Wt.map.cameraPosition;cn!==void 0&&cn.setValue(q,Pe.setFromMatrixPosition(N.matrixWorld)),w.logarithmicDepthBuffer&&Wt.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Wt.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),ne!==N&&(ne=N,Yi=!0,wt=!0)}if(je.needsLights&&(ln.state.sunShadowMap.length>0&&Wt.setValue(q,"sunShadowMap",ln.state.sunShadowMap,fe),ln.state.directionalShadowMap.length>0&&Wt.setValue(q,"directionalShadowMap",ln.state.directionalShadowMap,fe),ln.state.spotShadowMap.length>0&&Wt.setValue(q,"spotShadowMap",ln.state.spotShadowMap,fe),ln.state.pointShadowMap.length>0&&Wt.setValue(q,"pointShadowMap",ln.state.pointShadowMap,fe)),me.isSkinnedMesh){Wt.setOptional(q,me,"bindMatrix"),Wt.setOptional(q,me,"bindMatrixInverse");const Ot=me.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Wt.setValue(q,"boneTexture",Ot.boneTexture,fe))}me.isBatchedMesh&&(Wt.setOptional(q,me,"batchingTexture"),Wt.setValue(q,"batchingTexture",me._matricesTexture,fe),Wt.setOptional(q,me,"batchingIdTexture"),Wt.setValue(q,"batchingIdTexture",me._indirectTexture,fe),Wt.setOptional(q,me,"batchingColorTexture"),me._colorsTexture!==null&&Wt.setValue(q,"batchingColorTexture",me._colorsTexture,fe));const ii=xe.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&$.update(me,xe,Gn),(Yi||je.receiveShadow!==me.receiveShadow)&&(je.receiveShadow=me.receiveShadow,Wt.setValue(q,"receiveShadow",me.receiveShadow)),(pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial)&&pe.envMap===null&&J.environment!==null&&(nn.envMapIntensity.value=J.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=nw()),Yi){if(Wt.setValue(q,"toneMappingExposure",I.toneMappingExposure),je.needsLights&&Il(nn,wt),Ze&&pe.fog===!0&&Qe.refreshFogUniforms(nn,Ze),Qe.refreshMaterialUniforms(nn,pe,le,j,R.state.transmissionRenderTarget[N.id]),je.needsLights&&je.lightProbeGrid){const Ot=je.lightProbeGrid;nn.probesSH.value=Ot.texture,nn.probesMin.value.copy(Ot.boundingBox.min),nn.probesMax.value.copy(Ot.boundingBox.max),nn.probesResolution.value.copy(Ot.resolution)}Bu.upload(q,Mo(je),nn,fe)}if(pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(Bu.upload(q,Mo(je),nn,fe),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Wt.setValue(q,"center",me.center),Wt.setValue(q,"modelViewMatrix",me.modelViewMatrix),Wt.setValue(q,"normalMatrix",me.normalMatrix),Wt.setValue(q,"modelMatrix",me.matrixWorld),pe.uniformsGroups!==void 0){const Ot=pe.uniformsGroups;for(let cn=0,va=Ot.length;cn<va;cn++){const zl=Ot[cn];De.update(zl,Gn),De.bind(zl,Gn)}}return Gn}function Il(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.sunLights.needsUpdate=J,N.sunLightShadows.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Bl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(N,J,xe){const pe=Q.get(N);pe.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),Q.get(N.texture).__webglTexture=J,Q.get(N.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:xe,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){const xe=Q.get(N);xe.__webglFramebuffer=J,xe.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,xe=0){ie=N,L=J,k=xe;let pe=null,me=!1,Ze=!1;if(N){const We=Q.get(N);if(We.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(q.FRAMEBUFFER,We.__webglFramebuffer),ae.copy(N.viewport),Oe.copy(N.scissor),Le=N.scissorTest,M.viewport(ae),M.scissor(Oe),M.setScissorTest(Le),te=-1;return}else if(We.__webglFramebuffer===void 0)fe.setupRenderTarget(N);else if(We.__hasExternalTextures)fe.rebindTextures(N,Q.get(N.texture).__webglTexture,Q.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const vt=N.depthTexture;if(We.__boundDepthTexture!==vt){if(vt!==null&&Q.has(vt)&&(N.width!==vt.image.width||N.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(N)}}const ot=N.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ze=!0);const lt=Q.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[J])?pe=lt[J][xe]:pe=lt[J],me=!0):N.samples>0&&fe.useMultisampledRTT(N)===!1?pe=Q.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?pe=lt[xe]:pe=lt,ae.copy(N.viewport),Oe.copy(N.scissor),Le=N.scissorTest}else ae.copy(Se).multiplyScalar(le).floor(),Oe.copy(Ae).multiplyScalar(le).floor(),Le=et;if(xe!==0&&(pe=Y),M.bindFramebuffer(q.FRAMEBUFFER,pe)&&M.drawBuffers(N,pe),M.viewport(ae),M.scissor(Oe),M.setScissorTest(Le),me){const We=Q.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+J,We.__webglTexture,xe)}else if(Ze){const We=J;for(let ot=0;ot<N.textures.length;ot++){const lt=Q.get(N.textures[ot]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ot,lt.__webglTexture,xe,We)}}else if(N!==null&&xe!==0){const We=Q.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,We.__webglTexture,xe)}te=-1};function vi(N){const J=Q.get(N);return(J.__readFormat!==N.format||J.__readType!==N.type)&&(J.__readFormat=N.format,J.__readType=N.type,J.__formatReadable=w.textureFormatReadable(N.format),J.__typeReadable=w.textureTypeReadable(N.type)),J}this.readRenderTargetPixels=function(N,J,xe,pe,me,Ze,tt,We=0){if(!(N&&N.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=Q.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&tt!==void 0&&(ot=ot[tt]),ot){M.bindFramebuffer(q.FRAMEBUFFER,ot);try{const lt=N.textures[We],vt=lt.format,yt=lt.type;N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);const it=vi(lt);if(it.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-pe&&xe>=0&&xe<=N.height-me&&q.readPixels(J,xe,pe,me,ke.convert(vt),ke.convert(yt),Ze)}finally{const lt=ie!==null?Q.get(ie).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(N,J,xe,pe,me,Ze,tt,We=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ot=Q.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&tt!==void 0&&(ot=ot[tt]),ot)if(J>=0&&J<=N.width-pe&&xe>=0&&xe<=N.height-me){M.bindFramebuffer(q.FRAMEBUFFER,ot);const lt=N.textures[We],vt=lt.format,yt=lt.type;N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);const it=vi(lt);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Dt),q.bufferData(q.PIXEL_PACK_BUFFER,Ze.byteLength,q.STREAM_READ),q.readPixels(J,xe,pe,me,ke.convert(vt),ke.convert(yt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Ct=ie!==null?Q.get(ie).__webglFramebuffer:null;M.bindFramebuffer(q.FRAMEBUFFER,Ct);const $t=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Eb(q,$t,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Dt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ze),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Dt),q.deleteSync($t),Ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,xe=0){const pe=Math.pow(2,-xe),me=Math.floor(N.image.width*pe),Ze=Math.floor(N.image.height*pe),tt=J!==null?J.x:0,We=J!==null?J.y:0;fe.setTexture2D(N,0),q.copyTexSubImage2D(q.TEXTURE_2D,xe,0,0,tt,We,me,Ze),M.unbindTexture()},this.copyTextureToTexture=function(N,J,xe=null,pe=null,me=0,Ze=0){let tt,We,ot,lt,vt,yt,it,Dt,Ct;const $t=N.isCompressedTexture?N.mipmaps[Ze]:N.image;if(xe!==null)tt=xe.max.x-xe.min.x,We=xe.max.y-xe.min.y,ot=xe.isBox3?xe.max.z-xe.min.z:1,lt=xe.min.x,vt=xe.min.y,yt=xe.isBox3?xe.min.z:0;else{const nn=Math.pow(2,-me);tt=Math.floor($t.width*nn),We=Math.floor($t.height*nn),N.isDataArrayTexture?ot=$t.depth:N.isData3DTexture?ot=Math.floor($t.depth*nn):ot=1,lt=0,vt=0,yt=0}pe!==null?(it=pe.x,Dt=pe.y,Ct=pe.z):(it=0,Dt=0,Ct=0);const Yt=ke.convert(J.format),yn=ke.convert(J.type);let je;J.isData3DTexture?(fe.setTexture3D(J,0),je=q.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(fe.setTexture2DArray(J,0),je=q.TEXTURE_2D_ARRAY):(fe.setTexture2D(J,0),je=q.TEXTURE_2D),M.activeTexture(q.TEXTURE0),M.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),M.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),M.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment);const ln=M.getParameter(q.UNPACK_ROW_LENGTH),Bt=M.getParameter(q.UNPACK_IMAGE_HEIGHT),Gn=M.getParameter(q.UNPACK_SKIP_PIXELS),ni=M.getParameter(q.UNPACK_SKIP_ROWS),Yi=M.getParameter(q.UNPACK_SKIP_IMAGES);M.pixelStorei(q.UNPACK_ROW_LENGTH,$t.width),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$t.height),M.pixelStorei(q.UNPACK_SKIP_PIXELS,lt),M.pixelStorei(q.UNPACK_SKIP_ROWS,vt),M.pixelStorei(q.UNPACK_SKIP_IMAGES,yt);const wt=N.isDataArrayTexture||N.isData3DTexture,Wt=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){const nn=Q.get(N),ii=Q.get(J),Ot=Q.get(nn.__renderTarget),cn=Q.get(ii.__renderTarget);M.bindFramebuffer(q.READ_FRAMEBUFFER,Ot.__webglFramebuffer),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let va=0;va<ot;va++)wt&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Q.get(N).__webglTexture,me,yt+va),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Q.get(J).__webglTexture,Ze,Ct+va)),q.blitFramebuffer(lt,vt,tt,We,it,Dt,tt,We,q.DEPTH_BUFFER_BIT,q.NEAREST);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(me!==0||N.isRenderTargetTexture||Q.has(N)){const nn=Q.get(N),ii=Q.get(J);M.bindFramebuffer(q.READ_FRAMEBUFFER,G),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,W);for(let Ot=0;Ot<ot;Ot++)wt?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,nn.__webglTexture,me,yt+Ot):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,nn.__webglTexture,me),Wt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ii.__webglTexture,Ze,Ct+Ot):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ii.__webglTexture,Ze),me!==0?q.blitFramebuffer(lt,vt,tt,We,it,Dt,tt,We,q.COLOR_BUFFER_BIT,q.NEAREST):Wt?q.copyTexSubImage3D(je,Ze,it,Dt,Ct+Ot,lt,vt,tt,We):q.copyTexSubImage2D(je,Ze,it,Dt,lt,vt,tt,We);M.bindFramebuffer(q.READ_FRAMEBUFFER,null),M.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Wt?N.isDataTexture||N.isData3DTexture?q.texSubImage3D(je,Ze,it,Dt,Ct,tt,We,ot,Yt,yn,$t.data):J.isCompressedArrayTexture?q.compressedTexSubImage3D(je,Ze,it,Dt,Ct,tt,We,ot,Yt,$t.data):q.texSubImage3D(je,Ze,it,Dt,Ct,tt,We,ot,Yt,yn,$t):N.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ze,it,Dt,tt,We,Yt,yn,$t.data):N.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ze,it,Dt,$t.width,$t.height,Yt,$t.data):q.texSubImage2D(q.TEXTURE_2D,Ze,it,Dt,tt,We,Yt,yn,$t);M.pixelStorei(q.UNPACK_ROW_LENGTH,ln),M.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Bt),M.pixelStorei(q.UNPACK_SKIP_PIXELS,Gn),M.pixelStorei(q.UNPACK_SKIP_ROWS,ni),M.pixelStorei(q.UNPACK_SKIP_IMAGES,Yi),Ze===0&&J.generateMipmaps&&q.generateMipmap(je),M.unbindTexture()},this.initRenderTarget=function(N){Q.get(N).__webglFramebuffer===void 0&&fe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?fe.setTextureCube(N,0):N.isData3DTexture?fe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?fe.setTexture2DArray(N,0):fe.setTexture2D(N,0),M.unbindTexture()},this.resetState=function(){L=0,k=0,ie=null,M.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(t),i.unpackColorSpace=zt._getUnpackColorSpace()}}const xn={smoke:"#FFF700",deep:"#FFF700",ember:"#FFF700",detail:20,turbulence:20,swirl:10,density:4,contrast:20,emberAmount:0,speed:5,hoverBoost:20,sizePercent:100};function Ia(o,t,i,r){const l=typeof o=="number"&&isFinite(o)?o:r;return Math.max(t,Math.min(i,l))}function xp(o){return{detail:1+Ia(o.detail,1,20,xn.detail)*.25,turbulence:Ia(o.turbulence,0,20,xn.turbulence)*.12,swirl:2.8+(Ia(o.swirl,1,10,xn.swirl)-1)*.3111,density:.25+Ia(o.density,1,10,xn.density)*.055,contrast:.6+Ia(o.contrast,1,20,xn.contrast)*.13,ember:Ia(o.emberAmount,0,20,xn.emberAmount)*.06,speed:Ia(o.speed,0,20,xn.speed)*.07,hoverBoost:Ia(o.hoverBoost,0,20,xn.hoverBoost)*.15,zoom:100/Ia(o.sizePercent,20,200,100)}}const aw=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`,rw=`
    precision highp float;

    uniform vec2 uResolution;
    uniform vec3 uSmoke;
    uniform vec3 uDeep;
    uniform vec3 uEmber;
    uniform float uTime;
    uniform float uDetail;
    uniform float uTurbulence;
    uniform float uSwirl;
    uniform float uDensity;
    uniform float uContrast;
    uniform float uEmberAmount;
    uniform float uZoom;

    varying vec2 vUv;

    float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
    }

    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float fbm(vec2 p) {
        float sum = 0.0;
        float amp = 0.5;
        float norm = 0.0;
        for (int i = 0; i < 6; i++) {
            float w = clamp(uDetail - float(i), 0.0, 1.0);
            sum += noise(p) * amp * w;
            norm += amp * w;
            p *= 2.02;

            p = mat2(0.8, 0.6, -0.6, 0.8) * p;
            amp *= 0.5;
        }
        return sum / max(0.0001, norm);
    }

    void main() {
        vec2 uv = (vUv - 0.5) * uZoom;
        uv.x *= uResolution.x / max(1.0, uResolution.y);

        float r = length(uv);
        float a = atan(uv.y, uv.x) + uSwirl / (r + 0.35) - uTime * 0.6;
        vec2 p = vec2(cos(a), sin(a)) * r;

        vec2 q = vec2(fbm(p * 1.6 + uTime * 0.15), fbm(p * 1.6 - uTime * 0.11));
        vec2 s = vec2(
            fbm(p * 2.1 + q * uTurbulence * 4.0 + uTime * 0.2),
            fbm(p * 2.1 - q * uTurbulence * 4.0 - uTime * 0.17)
        );
        float f = fbm(p * 2.6 + s * uTurbulence * 4.0);

        float fall = exp(-r * r * 1.1);
        float d = pow(clamp(f * uDensity * 3.2 * fall, 0.0, 1.0), uContrast);

        vec3 col = mix(uDeep, uSmoke, pow(d, 0.6));

        float heat = pow(max(dot(s, s), 0.0), 1.2) * exp(-r * 2.2);
        col += uEmber * heat * uEmberAmount * 6.0;

        float alpha = clamp(d * 1.15, 0.0, 1.0);
        gl_FragColor = vec4(col * alpha, alpha);
    }
`;class sw{constructor(t,i){Mt(this,"container");Mt(this,"cfg");Mt(this,"renderer");Mt(this,"scene",new zb);Mt(this,"camera",new Am);Mt(this,"geometry",new Pl(2,2));Mt(this,"material");Mt(this,"mesh");Mt(this,"hover",0);Mt(this,"hoverTarget",0);Mt(this,"time",0);Mt(this,"width",0);Mt(this,"height",0);Mt(this,"frameId",0);Mt(this,"lastT",0);Mt(this,"disposed",!1);Mt(this,"unbind",()=>{});this.container=t,this.cfg=i;const r=xp(i);this.renderer=new iw({antialias:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=pi,this.renderer.setClearColor(0,0);const l=this.renderer.domElement;l.style.position="absolute",l.style.inset="0",l.style.width="100%",l.style.height="100%",l.style.touchAction="none",t.appendChild(l),this.material=new Xi({vertexShader:aw,fragmentShader:rw,uniforms:{uResolution:{value:new Xt(1,1)},uSmoke:{value:new Vt(i.smoke)},uDeep:{value:new Vt(i.deep)},uEmber:{value:new Vt(i.ember)},uTime:{value:0},uDetail:{value:r.detail},uTurbulence:{value:r.turbulence},uSwirl:{value:r.swirl},uDensity:{value:r.density},uContrast:{value:r.contrast},uEmberAmount:{value:r.ember},uZoom:{value:r.zoom}},transparent:!0,depthTest:!1,depthWrite:!1}),this.mesh=new pa(this.geometry,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh),this.bindEvents()}bindEvents(){const t=this.renderer.domElement,i=()=>{this.hoverTarget=1},r=()=>{this.hoverTarget=0};t.addEventListener("pointerenter",i),t.addEventListener("pointerleave",r),t.addEventListener("pointercancel",r),this.unbind=()=>{t.removeEventListener("pointerenter",i),t.removeEventListener("pointerleave",r),t.removeEventListener("pointercancel",r)}}start(){this.lastT=performance.now();const t=()=>{this.frameId=requestAnimationFrame(t),this.step()};t()}setSize(t,i){this.disposed||t<=0||i<=0||(this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.material.uniforms.uResolution.value.set(t,i))}updateConfig(t){if(this.disposed)return;this.cfg=t;const i=xp(t),r=this.material.uniforms;r.uSmoke.value.set(t.smoke||"#ffffff"),r.uDeep.value.set(t.deep||"#000000"),r.uEmber.value.set(t.ember||"#ffffff"),r.uDetail.value=i.detail,r.uTurbulence.value=i.turbulence,r.uSwirl.value=i.swirl,r.uDensity.value=i.density,r.uContrast.value=i.contrast,r.uEmberAmount.value=i.ember,r.uZoom.value=i.zoom}step(){if(this.disposed)return;const t=performance.now();let i=(t-this.lastT)/1e3;this.lastT=t,(!isFinite(i)||i<0)&&(i=0),i>.05&&(i=.05);const r=xp(this.cfg);this.hover+=(this.hoverTarget-this.hover)*(1-Math.exp(-i*3.5)),this.time+=i*r.speed*(1+r.hoverBoost*this.hover),this.material.uniforms.uTime.value=this.time,this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,cancelAnimationFrame(this.frameId),this.unbind(),this.geometry.dispose(),this.material.dispose(),this.renderer.dispose();const t=this.renderer.domElement;t.parentNode===this.container&&this.container.removeChild(t)}}function ny(o){const{smoke:t=xn.smoke,deep:i=xn.deep,ember:r=xn.ember,detail:l=xn.detail,turbulence:u=xn.turbulence,swirl:d=xn.swirl,density:h=xn.density,contrast:p=xn.contrast,emberAmount:m=xn.emberAmount,speed:S=xn.speed,hoverBoost:_=xn.hoverBoost,sizePercent:v=xn.sizePercent,style:E}=o,A=Ge.useRef(null),P=Ge.useRef(null),T=Ge.useRef(null);return T.current={smoke:t,deep:i,ember:r,detail:l,turbulence:u,swirl:d,density:h,contrast:p,emberAmount:m,speed:S,hoverBoost:_,sizePercent:v},Ge.useEffect(()=>{const y=A.current;if(!y)return;let b;try{b=new sw(y,T.current)}catch{return}P.current=b,b.setSize(y.clientWidth,y.clientHeight),b.start();const Z=new ResizeObserver(()=>{b.setSize(y.clientWidth,y.clientHeight)});return Z.observe(y),()=>{Z.disconnect(),b.dispose(),P.current=null}},[]),Ge.useEffect(()=>{var y;(y=P.current)==null||y.updateConfig(T.current)},[t,i,r,l,u,d,h,p,m,S,_,v]),B.jsx("div",{ref:A,role:"img","aria-label":"Smoke vortex",style:{position:"relative",width:"100%",height:"100%",minWidth:160,minHeight:160,overflow:"hidden",...E}})}ny.displayName="Smoke Vortex";const ow=1.5,lw=2,cw=12,uw=.6,Uu=3600,aS=.75,fw=`
precision highp float;
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`,dw=`
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
    float aaA = ${aS.toFixed(2)} * pxUV * dA;
    float cA = dots(uv * dA, uDotSize, aaA);

    vec2 rel = uv - uCursor;
    float fall = exp(-dot(rel, rel) / max(uReach * uReach, 1e-6));
    float gain = uLift * fall;
    vec2 uvB = uv + rel * gain;

    float s = sin(uTwist), c = cos(uTwist);
    vec2 rot = vec2(uvB.x * c - uvB.y * s, uvB.x * s + uvB.y * c);

    float dB = uDensity * uScale;

    float aaB = ${aS.toFixed(2)} * pxUV * dB * abs(1.0 + gain);
    float cB = dots(rot * dB, uDotSize, aaB);

    vec3 pre = uBase * cA + uAccent * cB;
    float a = min(cA + cB, 1.0);
    gl_FragColor = vec4(pre, a);
}
`;function rS(o){if(!o)return[0,0,0];const t=o.trim(),i=t.match(/rgba?\(([^)]+)\)/i);if(i){const l=i[1].split(",").map(u=>parseFloat(u.trim()));return[(l[0]||0)/255,(l[1]||0)/255,(l[2]||0)/255]}let r=t.replace("#","");return(r.length===3||r.length===4)&&(r=r.split("").map(l=>l+l).join("")),r=r.padEnd(6,"0"),[parseInt(r.slice(0,2),16)/255,parseInt(r.slice(2,4),16)/255,parseInt(r.slice(4,6),16)/255]}function sS(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),o.getShaderParameter(r,o.COMPILE_STATUS)||console.warn("MoireLattice shader:",o.getShaderInfoLog(r)),r}function hw(o,t,i){const r=o.createProgram();return o.attachShader(r,sS(o,o.VERTEX_SHADER,t)),o.attachShader(r,sS(o,o.FRAGMENT_SHADER,i)),o.linkProgram(r),o.getProgramParameter(r,o.LINK_STATUS)||console.warn("MoireLattice link:",o.getProgramInfoLog(r)),r}const pw={twist:12,scale:100},mw={reach:35,lift:25,damping:20};function gw(o){const{background:t="#0A0A0B",baseColor:i="#F0F0F0",accentColor:r="#5B6CFF",glow:l="rgba(255,255,255,0.05)",density:u=40,dotSize:d=46,speed:h=50,overlay:p,cursor:m,style:S}=o,_={...pw,...p||{}},v={...mw,...m||{}},E=Ge.useRef(null),A=Ge.useRef(null),P=Ge.useRef({baseColor:i,accentColor:r,density:u,dotSize:d,speed:h,twist:_.twist,scale:_.scale,reach:v.reach,lift:v.lift,damping:v.damping});return P.current={baseColor:i,accentColor:r,density:u,dotSize:d,speed:h,twist:_.twist,scale:_.scale,reach:v.reach,lift:v.lift,damping:v.damping},Ge.useEffect(()=>{const T=E.current,y=A.current;if(!T||!y)return;const b=y.getContext("webgl",{alpha:!0,antialias:!1,premultipliedAlpha:!0,depth:!1});if(!b)return;const Z=hw(b,fw,dw);b.useProgram(Z);const U=b.getAttribLocation(Z,"aPos"),C=Oe=>b.getUniformLocation(Z,Oe),R={res:C("uRes"),density:C("uDensity"),dotSize:C("uDotSize"),twist:C("uTwist"),scale:C("uScale"),cursor:C("uCursor"),reach:C("uReach"),lift:C("uLift"),base:C("uBase"),accent:C("uAccent")},z=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,z),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),b.STATIC_DRAW),b.enableVertexAttribArray(U),b.vertexAttribPointer(U,2,b.FLOAT,!1,0,0),b.disable(b.DEPTH_TEST),b.enable(b.BLEND),b.blendFunc(b.ONE,b.ONE_MINUS_SRC_ALPHA);let g=0,O=0,I=1;const F=()=>{I=Math.min(Math.max(window.devicePixelRatio||1,ow),lw),g=y.clientWidth||T.clientWidth||1,O=y.clientHeight||T.clientHeight||1;const Oe=Math.max(1,Math.round(g*I)),Le=Math.max(1,Math.round(O*I));(y.width!==Oe||y.height!==Le)&&(y.width=Oe,y.height=Le),b.viewport(0,0,Oe,Le)};F();const X=new ResizeObserver(F);X.observe(y);const Y={x:0,y:0,has:!1},G={x:0,y:0};let W=0,L=performance.now(),k=0,ie=0;const te=Oe=>{W=requestAnimationFrame(te);const Le=Math.min((Oe-L)/1e3,.05);if(L=Oe,g<=0||O<=0){F();return}const H=P.current;k+=Le*(H.speed/50),k>Uu?k-=Uu:k<-Uu&&(k+=Uu),ie+=Le;let de,Ce;Y.has?(de=(Y.x*I-.5*y.width)/y.height,Ce=(.5*y.height-Y.y*I)/y.height):(de=Math.sin(ie*.19)*.42,Ce=Math.cos(ie*.13)*.28);const j=1-Math.exp(-(H.damping/100)*12*Le);G.x+=(de-G.x)*j,G.y+=(Ce-G.y)*j;const[le,Me,Ne]=rS(H.baseColor),[Se,Ae,et]=rS(H.accentColor),ze=Math.min(Math.max(H.twist,0),100)/100*cw+k*uw,rt=Math.min(Math.max(H.dotSize,0),100)/100*.5;b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT),b.uniform2f(R.res,y.width,y.height),b.uniform1f(R.density,Math.max(H.density,1)),b.uniform1f(R.dotSize,rt),b.uniform1f(R.twist,ze*Math.PI/180),b.uniform1f(R.scale,H.scale/100),b.uniform2f(R.cursor,G.x,G.y),b.uniform1f(R.reach,Math.max(H.reach,1)/100*.5),b.uniform1f(R.lift,H.lift/100),b.uniform3f(R.base,le,Me,Ne),b.uniform3f(R.accent,Se,Ae,et),b.drawArrays(b.TRIANGLES,0,3)};W=requestAnimationFrame(te);const ne=Oe=>{const Le=T.getBoundingClientRect(),H=Le.width>0?T.clientWidth/Le.width:1;Y.x=(Oe.clientX-Le.left)*H,Y.y=(Oe.clientY-Le.top)*H,Y.has=!0},ae=()=>{Y.has=!1};return T.addEventListener("pointermove",ne),T.addEventListener("pointerleave",ae),window.addEventListener("pointerup",ae),()=>{cancelAnimationFrame(W),X.disconnect(),T.removeEventListener("pointermove",ne),T.removeEventListener("pointerleave",ae),window.removeEventListener("pointerup",ae)}},[]),B.jsx("div",{ref:E,style:{minWidth:1200,minHeight:800,width:"100%",height:"100%",position:"relative",overflow:"hidden",background:`radial-gradient(70% 56% at 50% 48%, ${l} 0%, transparent 74%), ${t}`,...S},children:B.jsx("canvas",{ref:A,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}})})}const vw=2,Sp=8,oS=.09,_w=2.4,xw=`
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`,Sw=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform float uPitch;
uniform vec3  uSky;
uniform vec3  uBase;
uniform vec3  uAccent;
uniform float uRain;
uniform float uCover;
uniform float uPScale;
uniform float uReflect;
uniform float uRipple;
uniform float uStreak;
uniform vec2  uCursor;
uniform float uReach;
uniform float uGlow;
uniform float uPulseAmp;
uniform float uEngaged;
uniform vec4  uPulses[8];
uniform float uNow;

const float CAM_H = 1.0;
const float TANH  = 0.45;
const float FOG_K = 0.055;
const float RIP   = 7.0;
const float PULSE_SPEED = 1.1;
const float PULSE_K = 14.0;
const float PULSE_W = 0.16;

float sq(float x) { return x * x; }

float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.x + p3.y) * p3.z);
}

vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xx + p3.yz) * p3.zy);
}

float vn(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
               mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm3(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
        v += a * vn(p);
        p = p * 2.07 + vec2(31.4, 17.1);
        a *= 0.5;
    }
    return v / 0.875;
}

float fbm4(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * vn(p);
        p = p * 2.03 + vec2(11.7, 53.3);
        a *= 0.5;
    }
    return v / 0.9375;
}

vec2 rippleGrad(vec2 uv, float time) {
    vec2 p0 = floor(uv);
    vec2 circles = vec2(0.0);
    for (int j = -1; j <= 1; ++j) {
        for (int i = -1; i <= 1; ++i) {
            vec2 pi = p0 + vec2(float(i), float(j));
            vec2 p = pi + hash22(pi);

            float t = fract(0.3 * time + hash12(pi));
            vec2 v = p - uv;
            float len = length(v);

            vec2 dir = v / max(len, 1e-5);
            float d = len - 2.0 * t;

            float h = 1e-3;
            float d1 = d - h;
            float d2 = d + h;
            float c1 = sin(31.0 * d1) * smoothstep(-0.6, -0.3, d1) * smoothstep(0.0, -0.3, d1);
            float c2 = sin(31.0 * d2) * smoothstep(-0.6, -0.3, d2) * smoothstep(0.0, -0.3, d2);
            circles += 0.5 * dir * ((c2 - c1) / (2.0 * h) * (1.0 - t) * (1.0 - t));
        }
    }
    return circles / 9.0;
}

vec3 pulseInfo(vec2 P) {
    vec3 acc = vec3(0.0);
    for (int i = 0; i < 8; i++) {
        vec4 pl = uPulses[i];
        if (pl.w < 0.5) continue;
        float age = uNow - pl.z;
        if (age < 0.0) continue;
        vec2 v = P - pl.xy;
        float r = length(v);
        vec2 dir = v / max(r, 1e-5);
        float rad = age * PULSE_SPEED;
        float band = exp(-sq((r - rad) / PULSE_W));

        float amp = exp(-age * 0.9) / (1.0 + rad * 1.5);
        acc.xy += dir * sin(PULSE_K * (r - rad)) * band * amp;
        float disc = 1.0 - smoothstep(rad * 0.75, rad * 1.15, r);
        acc.z = max(acc.z, disc * exp(-age * 0.9));
    }
    return acc;
}

vec3 env(vec3 d) {
    float up = clamp(d.y, -1.0, 1.0);
    vec3 zen = uSky * 0.7;
    vec3 hor = mix(uSky, uAccent, 0.5);
    vec3 c = mix(hor, zen, smoothstep(0.0, 0.5, up));
    c = mix(c * 0.35, c, smoothstep(-0.2, 0.0, up));

    float band = exp(-sq(up / 0.06));
    float az = atan(d.z, d.x);
    float lamps = 0.0;
    for (int i = 0; i < 4; i++) {
        float fi = float(i);
        float a0 = -2.30 + fi * 1.37;
        lamps += exp(-sq((az - a0) / 0.11)) * (0.55 + 0.45 * fract(fi * 0.37 + 0.2));
    }
    c += uAccent * band * lamps * 2.4;
    c += mix(uAccent, vec3(1.0, 0.86, 0.62), 0.65) * band * 0.30;
    return c;
}

float streaks(vec2 S, float t) {
    float s = 0.0;
    for (int i = 0; i < 3; i++) {
        float fi = float(i);
        float sc = 26.0 + fi * 20.0;
        vec2 q = S * sc;
        q.x += q.y * 0.11;

        q.y += t * (5.5 + fi * 3.0);
        vec2 id = floor(q);
        vec2 f = fract(q);
        float h = hash12(id + fi * 31.7);
        float present = step(0.70, h);
        float cx = 0.2 + 0.6 * fract(h * 17.3);
        float line = smoothstep(0.055, 0.0, abs(f.x - cx))
                   * smoothstep(0.0, 0.10, f.y)
                   * (1.0 - smoothstep(0.10, 0.62, f.y));
        s += present * line * (0.5 + 0.5 * fract(h * 7.1));
    }
    return s;
}

void main() {
    vec2 q = (2.0 * gl_FragCoord.xy - uRes) / uRes.y;

    vec3 rc = normalize(vec3(q * TANH, -1.0));
    float cp = cos(uPitch);
    float sp = sin(uPitch);
    vec3 rd = vec3(rc.x, rc.y * cp + rc.z * sp, -rc.y * sp + rc.z * cp);

    vec3 col;
    float sky = 1.0;

    if (rd.y < -1e-3) {
        sky = 0.0;
        float t = min(CAM_H / -rd.y, 400.0);
        vec2 P = vec2(rd.x, rd.z) * t;

        float fp = t * t * (2.0 * TANH / uRes.y) / CAM_H;

        float pn = fbm4(P * uPScale + vec2(3.0, 0.0));
        float lo = mix(0.74, 0.20, uCover);
        float puddle = smoothstep(lo, lo + 0.09, pn);
        puddle *= 1.0 / (1.0 + sq(fp * uPScale * 2.0));

        float wetProgress = clamp(smoothstep(0.0, 0.75, uRain), 0.0, 1.0);
        float ripProgress = clamp(smoothstep(0.55, 1.0, uRain), 0.0, 1.0);
        vec3 pulse = pulseInfo(P);
        float wet = clamp(puddle * wetProgress
                        + pulse.z * 0.6 * uEngaged * min(uPulseAmp, 1.0), 0.0, 1.0);

        float ripFade = 1.0 / (1.0 + sq(fp * RIP * 5.0));

        vec2 g = rippleGrad(P * RIP, uTime) * (0.85 * uRipple * ripProgress * ripFade * wet);
        g += pulse.xy * (2.2 * uPulseAmp * uEngaged);
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));

        float grainFade = 1.0 / (1.0 + sq(fp * 26.0));
        float grain = fbm3(P * 26.0);
        float gravel = step(0.72, hash12(floor(P * 150.0)));
        vec3 albedo = uBase * (0.45 + 1.15 * mix(0.5, grain, grainFade));
        albedo *= 1.0 + 0.34 * (gravel - 0.5) * grainFade;

        albedo *= mix(1.0, 0.42, wet);

        vec3 amb = mix(uSky, uAccent, 0.25) * 3.0;
        col = albedo * amb * (0.55 + 0.45 * N.y);

        col += mix(uSky, uAccent, 0.5) * wet * 0.10;

        vec3 R = reflect(rd, N);
        float F = 0.03 + 0.97 * pow(1.0 - clamp(dot(N, -rd), 0.0, 1.0), 5.0);

        float refl = mix(0.02, 1.0, wet) * uReflect;
        col += env(R) * F * refl;

        if (uEngaged > 0.5 && uGlow > 0.0) {
            float rr = length(P - uCursor);
            float pool = exp(-sq(rr / max(uReach, 1e-3)));

            col += uAccent * pool * uGlow * (0.10 + 0.90 * wet);
        }

        vec3 far = env(normalize(vec3(rd.x, 0.012, rd.z)));
        col = mix(col, far, 1.0 - exp(-t * FOG_K));
    } else {
        col = env(rd);
    }

    vec2 S = gl_FragCoord.xy / uRes.y;
    float rainNear = clamp(smoothstep(0.0, 0.5, uRain), 0.0, 1.0);
    col += mix(vec3(1.0), uAccent, 0.45) * streaks(S, uTime) * 0.30 * uStreak * rainNear;

    vec2 v = (2.0 * gl_FragCoord.xy - uRes) / uRes.y;
    float vig = smoothstep(0.72, 1.75, length(v * vec2(0.68, 1.0)));
    col *= 1.0 - 0.72 * vig;
    float fy = gl_FragCoord.y / uRes.y;
    col = mix(col, col * vec3(0.84, 0.89, 1.20), (1.0 - smoothstep(0.0, 0.5, fy)) * 0.22);
    col = mix(col, col * vec3(1.18, 1.06, 0.86), smoothstep(0.55, 1.0, fy) * 0.30);

    col += (hash12(gl_FragCoord.xy * 0.41 + fract(uTime)) - 0.5) * 0.010;

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;function yp(o){if(typeof o!="string")return[.5,.5,.5];let t=o.trim();const i=t.match(/^rgba?\(([^)]+)\)$/i);if(i){const l=i[1].split(",").map(u=>parseFloat(u));return[(l[0]||0)/255,(l[1]||0)/255,(l[2]||0)/255]}if(t=t.replace("#",""),t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t.length===8&&(t=t.slice(0,6)),t.length!==6)return[.5,.5,.5];const r=parseInt(t,16);return isFinite(r)?[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]:[.5,.5,.5]}function lS(o,t,i){const r=o.createShader(t);return r?(o.shaderSource(r,i),o.compileShader(r),o.getShaderParameter(r,o.COMPILE_STATUS)?r:(console.error("RainPuddle shader:",o.getShaderInfoLog(r)),o.deleteShader(r),null)):null}const yw=1,cS=.45,Mw={coverage:62,scale:170,reflection:150},Ew={ripples:100,streaks:70},Tw={reach:54,ripple:100,glow:60};function bw(o){const{background:t="#000000",baseColor:i="#03661A",accentColor:r="#FFFFFF",rain:l=100,speed:u=100,tilt:d=25,puddles:h,drops:p,cursor:m,width:S,height:_,style:v}=o,E={...Mw,...h||{}},A={...Ew,...p||{}},P={...Tw,...m||{}},T=Ge.useRef(null),y=Ge.useRef(null),b=Ge.useRef({speed:50,pitch:.38,rain:1,cover:.55,pScale:1.1,reflect:1,ripple:1,streak:.7,reach:.3,pulseAmp:1,glow:.6,sky:[0,0,0],base:[.2,.2,.2],accent:[.5,.6,1]});return b.current={speed:u,pitch:Math.max(2,d)*Math.PI/180,rain:l/100,cover:E.coverage/100,pScale:E.scale/100*1.1,reflect:E.reflection/100,ripple:A.ripples/100,streak:A.streaks/100,reach:P.reach/100*1.2,pulseAmp:P.ripple/100,glow:P.glow/100*.55,sky:yp(t),base:yp(i),accent:yp(r)},Ge.useEffect(()=>{const Z=T.current,U=y.current;if(!Z||!U)return;const C=U.getContext("webgl",{antialias:!1,alpha:!1,depth:!1,preserveDrawingBuffer:!0});if(!C)return;const R=lS(C,C.VERTEX_SHADER,xw),z=lS(C,C.FRAGMENT_SHADER,Sw);if(!R||!z)return;const g=C.createProgram();if(!g)return;if(C.attachShader(g,R),C.attachShader(g,z),C.linkProgram(g),!C.getProgramParameter(g,C.LINK_STATUS)){console.error("RainPuddle link:",C.getProgramInfoLog(g));return}C.useProgram(g);const O=C.createBuffer();C.bindBuffer(C.ARRAY_BUFFER,O),C.bufferData(C.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),C.STATIC_DRAW);const I=C.getAttribLocation(g,"a_pos");C.enableVertexAttribArray(I),C.vertexAttribPointer(I,2,C.FLOAT,!1,0,0);const F={res:C.getUniformLocation(g,"uRes"),time:C.getUniformLocation(g,"uTime"),pitch:C.getUniformLocation(g,"uPitch"),sky:C.getUniformLocation(g,"uSky"),base:C.getUniformLocation(g,"uBase"),accent:C.getUniformLocation(g,"uAccent"),rain:C.getUniformLocation(g,"uRain"),cover:C.getUniformLocation(g,"uCover"),pScale:C.getUniformLocation(g,"uPScale"),reflect:C.getUniformLocation(g,"uReflect"),ripple:C.getUniformLocation(g,"uRipple"),streak:C.getUniformLocation(g,"uStreak"),cursor:C.getUniformLocation(g,"uCursor"),reach:C.getUniformLocation(g,"uReach"),glow:C.getUniformLocation(g,"uGlow"),pulseAmp:C.getUniformLocation(g,"uPulseAmp"),engaged:C.getUniformLocation(g,"uEngaged"),pulses:C.getUniformLocation(g,"uPulses[0]"),now:C.getUniformLocation(g,"uNow")};let X=0,Y=0;const G=()=>{const Ae=Math.min(window.devicePixelRatio||1,vw),et=Math.max(1,Math.round((U.clientWidth||Z.clientWidth||1)*Ae)),ze=Math.max(1,Math.round((U.clientHeight||Z.clientHeight||1)*Ae));et===X&&ze===Y||(X=et,Y=ze,U.width=et,U.height=ze,C.viewport(0,0,et,ze))},W=new ResizeObserver(G);W.observe(Z),G();let L=0,k=0,ie=0,te=0,ne=!1;const ae=new Float32Array(Sp*4);let Oe=0,Le=0,H=0,de=!1;const Ce=(Ae,et,ze)=>{const rt=Ae*cS,Ye=et*cS,ue=-1,Pe=1/Math.hypot(rt,Ye,ue),ht=rt*Pe,pt=Ye*Pe,st=ue*Pe,$e=Math.cos(ze),q=Math.sin(ze),Fe=pt*$e+st*q,nt=-pt*q+st*$e;if(Fe>=-.001)return null;const w=Math.min(yw/-Fe,400);return[ht*w,nt*w]},j=Ae=>{const et=Z.getBoundingClientRect();if(et.width<=0||et.height<=0)return;const ze=(2*(Ae.clientX-et.left)-et.width)/et.height,rt=(et.height-2*(Ae.clientY-et.top))/et.height,Ye=Ce(ze,rt,b.current.pitch);Ye&&(L=Ye[0],k=Ye[1],ne||(ie=L,te=k,Le=L,H=k,de=!1),ne=!0)};window.addEventListener("pointermove",j);let le=0,Me=0,Ne=0;const Se=Ae=>{Ne=requestAnimationFrame(Se);const et=Me?Math.min(.05,(Ae-Me)/1e3):0;Me=Ae;const ze=b.current;le+=et*(ze.speed/50);const rt=1-Math.exp(-14*et);if(ie+=(L-ie)*rt,te+=(k-te)*rt,ne){const Ye=ie-Le,ue=te-H;if(!de||Ye*Ye+ue*ue>oS*oS){const Pe=Oe*4;ae[Pe]=ie,ae[Pe+1]=te,ae[Pe+2]=le,ae[Pe+3]=1,Oe=(Oe+1)%Sp,Le=ie,H=te,de=!0}}for(let Ye=0;Ye<Sp;Ye++)ae[Ye*4+3]>.5&&le-ae[Ye*4+2]>_w&&(ae[Ye*4+3]=0);G(),C.uniform2f(F.res,X,Y),C.uniform1f(F.time,le),C.uniform1f(F.pitch,ze.pitch),C.uniform3fv(F.sky,ze.sky),C.uniform3fv(F.base,ze.base),C.uniform3fv(F.accent,ze.accent),C.uniform1f(F.rain,ze.rain),C.uniform1f(F.cover,ze.cover),C.uniform1f(F.pScale,ze.pScale),C.uniform1f(F.reflect,ze.reflect),C.uniform1f(F.ripple,ze.ripple),C.uniform1f(F.streak,ze.streak),C.uniform2f(F.cursor,ie,te),C.uniform1f(F.reach,ze.reach),C.uniform1f(F.glow,ze.glow),C.uniform1f(F.pulseAmp,ze.pulseAmp),C.uniform1f(F.engaged,ne?1:0),C.uniform4fv(F.pulses,ae),C.uniform1f(F.now,le),C.drawArrays(C.TRIANGLES,0,3)};return Ne=requestAnimationFrame(Se),()=>{cancelAnimationFrame(Ne),W.disconnect(),window.removeEventListener("pointermove",j)}},[]),B.jsx("div",{ref:T,style:{position:"relative",overflow:"hidden",background:t,minWidth:1200,minHeight:800,width:typeof S=="number"&&S>0?S:"100%",height:typeof _=="number"&&_>0?_:"100%",...v},children:B.jsx("canvas",{ref:y,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",filter:"contrast(1.2) saturate(1.1) brightness(1.1)"}})})}class Aw{constructor(){Mt(this,"ctx",null);Mt(this,"masterGain",null);Mt(this,"isMuted",!1);Mt(this,"scale",[261.63,293.66,329.63,392,440,523.25,587.33,659.25]);Mt(this,"lastIndex",0)}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.35,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination)}catch(t){console.warn("Audio unavailable",t)}}playChime(t=.2){if(!this.ctx||this.isMuted||!this.masterGain)return;this.lastIndex=(this.lastIndex+1+Math.floor(Math.random()*2))%this.scale.length;const i=this.scale[this.lastIndex],r=this.ctx.currentTime,l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(i,r),u.gain.setValueAtTime(.001,r),u.gain.exponentialRampToValueAtTime(Math.min(.2,t*.3),r+.03),u.gain.exponentialRampToValueAtTime(1e-4,r+1.1),l.connect(u),u.connect(this.masterGain),l.start(r),l.stop(r+1.2),this.vibrate(10)}vibrate(t=10){if(typeof window<"u"&&"navigator"in window&&"vibrate"in navigator)try{navigator.vibrate(t)}catch{}}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.isMuted?0:.35,this.ctx.currentTime,.05),this.isMuted}}const At=new Aw,uS={inhale:4,hold:4,exhale:4,rest:2},fS={inhale:{title:"Breathe In Slowly...",hint:"Fill your lungs gently through your nose."},hold:{title:"Hold Gently...",hint:"Keep the air softly inside without straining."},exhale:{title:"Release & Breathe Out...",hint:"Let all the air gently leave through your mouth."},rest:{title:"Rest...",hint:"Feel your shoulders soften and relax."}},Rw=({onClose:o,onFinish:t})=>{const[i,r]=Ge.useState("message"),[l,u]=Ge.useState("inhale"),[d,h]=Ge.useState(uS.inhale),[p,m]=Ge.useState(0);return Ge.useEffect(()=>{const S=setTimeout(()=>{r("breathing"),At.playChime(.2)},2200);return()=>clearTimeout(S)},[]),Ge.useEffect(()=>{if(i!=="breathing")return;const S=setInterval(()=>{h(_=>{if(_>1)return _-1;let v="inhale";return l==="inhale"?v="hold":l==="hold"?v="exhale":l==="exhale"?v="rest":l==="rest"&&(v="inhale",m(E=>E+1)),u(v),At.playChime(.16),uS[v]})},1e3);return()=>clearInterval(S)},[i,l]),Ge.useEffect(()=>{const S=_=>{_.key==="Escape"?o():(_.key===" "||_.key==="Enter")&&t()};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[o,t]),B.jsxs("div",{className:"tinyman-modal breathing-modal-overlay",children:[B.jsx("button",{className:"close-modal-btn",onClick:o,title:"Close (Esc)",children:"Close ×"}),i==="message"?B.jsxs("div",{className:"breathing-initial-card animate-text-fade",children:[B.jsx("p",{className:"breathing-initial-text",children:"It's going to be alright."}),B.jsx("span",{className:"breathing-initial-sub",children:"Take this moment for yourself..."})]}):B.jsxs("div",{className:"breathing-guide-container animate-text-fade",children:[B.jsxs("div",{className:"breathing-header",children:[B.jsx("span",{className:"breathing-badge",children:"Steve's Calming Breath"}),B.jsx("h2",{className:"breathing-phase-title",children:fS[l].title}),B.jsx("p",{className:"breathing-hint",children:fS[l].hint})]}),B.jsxs("div",{className:"breathing-visual-stage",children:[B.jsx("div",{className:`breathing-halo phase-${l}`}),B.jsx("div",{className:`breathing-orb phase-${l}`,children:B.jsx("div",{className:"orb-inner-core",children:B.jsxs("span",{className:"breathing-counter",children:[d,"s"]})})})]}),B.jsxs("div",{className:"breathing-footer",children:[B.jsx("span",{className:"breathing-cycle-status",children:p>0?`Completed cycles: ${p}`:"Follow the light..."}),B.jsx("div",{className:"sequence-nav",style:{marginTop:"12px"},children:B.jsx("button",{className:"seq-btn primary",onClick:t,title:"Finish breathing and enter sensory space",children:"I Feel Calmer Now →"})})]})]})]})},Cw=({className:o=""})=>{const t=i=>{i.stopPropagation(),At.playChime(.28)};return B.jsxs("div",{className:`steve-cartoon-cosmos ${o}`,children:[B.jsx("div",{className:"cosmos-item saturn-doodle",onClick:t,title:"Steve's Ringed Planet",children:B.jsxs("svg",{width:"68",height:"52",viewBox:"0 0 68 52",fill:"none",children:[B.jsx("ellipse",{cx:"34",cy:"26",rx:"18",ry:"18",fill:"#FFF8E7",fillOpacity:"0.9"}),B.jsx("circle",{cx:"28",cy:"20",r:"3",fill:"#E6D3A3",fillOpacity:"0.6"}),B.jsx("circle",{cx:"38",cy:"28",r:"2.5",fill:"#E6D3A3",fillOpacity:"0.6"}),B.jsx("ellipse",{cx:"34",cy:"26",rx:"32",ry:"9",stroke:"#FFFFFF",strokeWidth:"3",strokeLinecap:"round",transform:"rotate(-18 34 26)",strokeDasharray:"95 18"})]})}),B.jsx("div",{className:"cosmos-item moon-doodle",onClick:t,title:"Sleeping Moon",children:B.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",children:[B.jsx("path",{d:"M32 10C24 10 16 16 16 26C16 34 22 40 30 40C20 40 10 32 10 22C10 12 18 4 30 4C30.7 4 31.4 4.1 32 4.2C30 6 32 10 32 10Z",fill:"#FFFBEA",fillOpacity:"0.92"}),B.jsx("circle",{cx:"19",cy:"22",r:"2",fill:"#E6D3A3",fillOpacity:"0.5"}),B.jsx("circle",{cx:"23",cy:"28",r:"1.5",fill:"#E6D3A3",fillOpacity:"0.5"})]})}),B.jsx("div",{className:"cosmos-item azure-planet-doodle",onClick:t,title:"Tiny Azure Planet",children:B.jsxs("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[B.jsx("circle",{cx:"26",cy:"26",r:"16",fill:"#A5F3FC",fillOpacity:"0.88"}),B.jsx("ellipse",{cx:"22",cy:"22",rx:"3.5",ry:"2",fill:"#38BDF8",fillOpacity:"0.5"}),B.jsx("ellipse",{cx:"30",cy:"30",rx:"4",ry:"2",fill:"#38BDF8",fillOpacity:"0.5"}),B.jsx("ellipse",{cx:"26",cy:"26",rx:"24",ry:"6",stroke:"#E0F2FE",strokeWidth:"2",strokeLinecap:"round",transform:"rotate(22 26 26)",strokeDasharray:"60 12"})]})}),B.jsx("div",{className:"cosmos-item crater-planet-doodle",onClick:t,title:"Tiny Bubble Planet",children:B.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",children:[B.jsx("circle",{cx:"24",cy:"24",r:"18",fill:"#E0D4FD",fillOpacity:"0.85"}),B.jsx("circle",{cx:"18",cy:"18",r:"4",fill:"#B79DF2",fillOpacity:"0.7"}),B.jsx("circle",{cx:"29",cy:"22",r:"3",fill:"#B79DF2",fillOpacity:"0.7"}),B.jsx("circle",{cx:"22",cy:"31",r:"2.5",fill:"#B79DF2",fillOpacity:"0.7"})]})}),B.jsx("div",{className:"cosmos-item comet-doodle",onClick:t,title:"Shooting Star",children:B.jsxs("svg",{width:"60",height:"42",viewBox:"0 0 60 42",fill:"none",children:[B.jsx("path",{d:"M6 10C16 12 28 17 38 22",stroke:"#FFF275",strokeWidth:"2.5",strokeLinecap:"round",strokeDasharray:"4 6",strokeOpacity:"0.75"}),B.jsx("path",{d:"M10 18C20 20 30 24 40 27",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"3 5",strokeOpacity:"0.6"}),B.jsx("path",{d:"M48 20L50 25L55 25L51 28L53 33L48 30L43 33L45 28L41 25L46 25Z",fill:"#FFF89A",fillOpacity:"0.95"})]})}),B.jsx("div",{className:"cosmos-item gas-giant-doodle",onClick:t,title:"Pastel Gas Giant",children:B.jsxs("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",children:[B.jsx("circle",{cx:"27",cy:"27",r:"19",fill:"#FED7AA",fillOpacity:"0.9"}),B.jsx("path",{d:"M10 24C16 21 38 21 44 24",stroke:"#FB923C",strokeWidth:"2",strokeLinecap:"round",strokeOpacity:"0.6"}),B.jsx("path",{d:"M9 28C17 26 37 26 45 28",stroke:"#FFFFFF",strokeWidth:"2",strokeLinecap:"round",strokeOpacity:"0.7"}),B.jsx("path",{d:"M12 32C18 31 36 31 42 32",stroke:"#EA580C",strokeWidth:"1.8",strokeLinecap:"round",strokeOpacity:"0.5"})]})}),B.jsx("div",{className:"cosmos-item star-chubby s1",onClick:t,children:B.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:B.jsx("path",{d:"M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z",fill:"#FFFFFF",fillOpacity:"0.95"})})}),B.jsx("div",{className:"cosmos-item star-chubby s2",onClick:t,children:B.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:B.jsx("path",{d:"M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z",fill:"#FFE599",fillOpacity:"0.9"})})}),B.jsx("div",{className:"cosmos-item star-chubby s3",onClick:t,children:B.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:B.jsx("path",{d:"M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z",fill:"#C7D2FE",fillOpacity:"0.95"})})}),B.jsx("div",{className:"cosmos-item star-chubby s4",onClick:t,children:B.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:B.jsx("path",{d:"M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z",fill:"#FBCFE8",fillOpacity:"0.85"})})}),B.jsx("div",{className:"cosmos-item star-chubby s5",onClick:t,children:B.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:B.jsx("path",{d:"M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z",fill:"#FFFFFF",fillOpacity:"0.9"})})})]})},ww=[{id:"hyperspace",label:"Hyper Space"},{id:"infinite-hole",label:"Infinite Hole"},{id:"infinite-tendrils",label:"Infinite Tendrils"},{id:"ink-current",label:"Ink Current"},{id:"line-ripple",label:"Line Ripple"},{id:"liquid-vortex",label:"Liquid Vortex"},{id:"moire-lattice",label:"Moire Lattice"},{id:"rain-puddle",label:"Rain Puddle"}],Mp=[{image:"/drawings/step1.png",caption:"Hi Steve!"},{image:"/drawings/step2.png",caption:"I'm that tiny little guy you drew one time."},{image:"/drawings/step3.png",caption:"Things probably don't feel great right now."},{image:"/drawings/step4.png",caption:"But guess what! It's going to be okay!"}],Nw=[{id:"overwhelmed",label:"I'm Feeling Overwhelmed"},{id:"overstimulated",label:"I'm Feeling Overstimulated"},{id:"anxious",label:"I'm Feeling Anxious"},{id:"sad",label:"I'm Feeling Sad"},{id:"breathe",label:"I Need a Moment to Breathe"}],Dw=`Steve, 

The staff at school for the most part are REQUIRED to give you a place thats not overwhelming/overstimulating when you need it. 

So just tell one of the teachers what's going on. And hopefully they will help you. 

Hoping the best for ya!

-Tyler`,Uw=`Hey Steve, I'm always here if you need me.

-Tyler`,El=["Hi Steve!","This is from Tyler...","Your feeling sad?... I am super sorry to hear that, I'm always here for you, you have you friends in the middle school. And of course your family! (Ollie especially)","I'f you are at school, try and talk to me if you are able to. Especially if it's 5th period you should be able to talk to any of the staff in the 100 building cafeteria area and you can talk to me a little bit if you want. :) Hope you feel better."],dS=[{id:"lonely",label:"I am feeling lonely",category:"core",screens:["Listen here Me, you may feel lonely right now but here's the reality... That's bullshit. You are not.","3 years ago in 7th grade, you were alone, you didn't have a single person besides maybe Mr. G. Coming home every night crying yourself to sleep was justifiable then, but not now.","Buck up and get it to gether cuz we aint doin this shit again."]},{id:"stressed",label:"I am feeling stressed",category:"core",screens:["Pause.","It's alright","Face each thing one by one, and things will be okay.","Good Luck."]},{id:"overstimulated",label:"I am feeling overstimulated",category:"core",screens:["Me, why the fuck are you pressing this button you got the headphones use them"]},{id:"overwhelmed",label:"I am feeling overwhelmed",category:"core",screens:["Newsflash, this button isn't any different than it was 2 years ago","If I am at school, go see Mr. Corley or Mr. G","good luck me...."]},{id:"socially-exhausted",label:"I'm feeling socially exhausted",category:"core",screens:["Alright myself, you are an amazing soul when you try to talk to all of the persons, but you don't have to do that to mask... that induces anxiety. just giveyourself some time to yourself...."]},{id:"lonely-2026",label:"I'm feeling lonely (2026)",category:"2026",screens:["Alright c'mon here we go again. Go talk to Ash and introduce yourself, it's been like a week, your trying to make a friend why are you still hitting this button?"]},{id:"talk-to-oliver",label:"I want to talk to Oliver",category:"2026",screens:["ME. This aint the way this shit's going, oliver is 8 years old. You are 15. I know he brings lots of awesome positivity and that's great. But HE IS NOT your brother.",'Oliver probably isnt looking up to me like an older brother, he is just socializing like every other 8 year old your age. If a "Brotherly friendship" is not what steven and ollie want from us, then it sure as hell is not what they need.',"So get over it."]},{id:"talk-to-stephen",label:"I want to talk to Stephen",category:"2026",screens:["jesus dude... your helping him, hes not your brother.","get over it","help him","be there for him when he needs you."]}];function Lw(){const[o,t]=Ge.useState(()=>localStorage.getItem("steve_authenticated")==="true"),[i,r]=Ge.useState(""),[l,u]=Ge.useState(""),[d,h]=Ge.useState(()=>localStorage.getItem("steve_profile")==="Tyler Custine"?"Tyler Custine":"Stephen French"),[p,m]=Ge.useState("home"),[S,_]=Ge.useState(()=>localStorage.getItem("steve_perf_mode")==="ultra"?"ultra":"smooth"),[v,E]=Ge.useState(!0),[A,P]=Ge.useState("hyperspace"),[T,y]=Ge.useState(!1),[b,Z]=Ge.useState(new Date);Ge.useEffect(()=>{const ue=setInterval(()=>Z(new Date),1e3);return()=>clearInterval(ue)},[]);const[U,C]=Ge.useState(()=>localStorage.getItem("steve_custom_bg")||"/steve-space-background.jpg"),[R,z]=Ge.useState(()=>localStorage.getItem("tyler_custom_bg")||"/t5s-project-background.png"),[g,O]=Ge.useState(null),[I,F]=Ge.useState(0),[X,Y]=Ge.useState(null),[G,W]=Ge.useState(0);Ge.useEffect(()=>{const ue=()=>{At.init()};window.addEventListener("pointerdown",ue,{once:!0}),window.addEventListener("keydown",ue,{once:!0})},[]);const L=ue=>{ue.preventDefault(),i.trim().toLowerCase()==="tinyman"?(t(!0),localStorage.setItem("steve_authenticated","true"),u(""),At.playChime(.3)):u("Incorrect password. Please try again.")},k=()=>{localStorage.removeItem("steve_authenticated"),t(!1),r(""),u("")},ie=()=>{const ue=d==="Stephen French"?"Tyler Custine":"Stephen French";h(ue),localStorage.setItem("steve_profile",ue),At.playChime(.2)},te=ue=>{h(ue),localStorage.setItem("steve_profile",ue),At.playChime(.2)},ne=ue=>{_(ue),localStorage.setItem("steve_perf_mode",ue),At.playChime(.2)},ae=()=>{const ue=At.toggleMute();y(ue)},Oe=ue=>{P(ue),At.playChime(.25)},Le=ue=>ue==="overstimulated"||ue==="anxious"?5:ue==="overwhelmed"?4:ue==="sad"?El.length:1,H=ue=>{O(ue),F(0),At.playChime(.3)},de=()=>{if(!g)return;const ue=Le(g);I<ue-1?(F(Pe=>Pe+1),At.playChime(.25)):(O(null),m("sensory"),P("hyperspace"),At.playChime(.35))},Ce=()=>{I>0&&(F(ue=>ue-1),At.playChime(.2))},j=ue=>{Y(ue),W(0),At.playChime(.3)},le=()=>{X&&(G<X.screens.length-1?(W(ue=>ue+1),At.playChime(.25)):(Y(null),At.playChime(.35)))},Me=()=>{G>0&&(W(ue=>ue-1),At.playChime(.2))},Ne=(ue,Pe)=>{var pt;const ht=(pt=ue.target.files)==null?void 0:pt[0];if(ht){const st=new FileReader;st.onload=$e=>{var Fe;const q=(Fe=$e.target)==null?void 0:Fe.result;q&&(Pe==="Stephen French"?(C(q),localStorage.setItem("steve_custom_bg",q)):(z(q),localStorage.setItem("tyler_custom_bg",q)),At.playChime(.3))},st.readAsDataURL(ht)}},Se=Ge.useCallback(ue=>{g&&g!=="breathe"?ue.key==="ArrowRight"||ue.key===" "?de():ue.key==="ArrowLeft"?Ce():ue.key==="Escape"&&O(null):X&&(ue.key==="ArrowRight"||ue.key===" "?le():ue.key==="ArrowLeft"?Me():ue.key==="Escape"&&Y(null))},[g,I,X,G]);Ge.useEffect(()=>(window.addEventListener("keydown",Se),()=>window.removeEventListener("keydown",Se)),[Se]);const Ae=b.getHours(),et=Ae>=5&&Ae<12?"Good Morning":Ae>=12&&Ae<17?"Good Afternoon":Ae>=17&&Ae<22?"Good Evening":"Late Night",ze=d==="Stephen French"?"Hi Steve!":`${et}, Tyler.`,rt=b.toLocaleTimeString([],{hour:"numeric",minute:"2-digit",second:"2-digit"}),Ye=b.toLocaleDateString([],{weekday:"long",month:"long",day:"numeric",year:"numeric"});return o?B.jsxs("div",{className:"app-container",children:[d==="Stephen French"&&p!=="sensory"&&B.jsx("div",{className:"cosmic-stars"}),d==="Stephen French"&&!v&&p!=="sensory"&&B.jsx(Cw,{}),B.jsxs("div",{className:`intro-overlay ${v?"":"hidden"}`,children:[B.jsx("div",{className:"cosmic-stars"}),B.jsx("div",{className:"intro-wordmark-wrap",children:B.jsx(h1,{text:"Steve French - Tyler Custine",font:{fontFamily:"'Cormorant Garamond', Garamond, serif",fontWeight:600,fontSize:"60px",letterSpacing:"0.03em"},background:"#000000",textColor:"#ffffff",shade:"#ffffff",accent:"#ffffff",reach:360,speed:45,style:{minWidth:"100%",minHeight:"100%",width:"100%",height:"100%"}})}),B.jsxs("div",{className:"intro-cta",children:[B.jsx("button",{className:"intro-enter-btn",onClick:()=>{E(!1),m("home"),At.playChime(.3)},children:"Enter"}),B.jsx("span",{className:"intro-hint",children:"OriginKit Sensory Experience"})]})]}),B.jsxs("header",{className:"top-header",children:[B.jsx("div",{className:"brand-section",children:B.jsx("span",{className:"brand-title",onClick:()=>{m("home"),At.playChime(.2)},title:"Go to Home",children:d})}),B.jsxs("nav",{className:"main-nav desktop-only",children:[B.jsx("button",{className:`nav-tab ${p==="home"?"active":""}`,onClick:()=>{m("home"),At.playChime(.2)},children:"Home"}),B.jsx("button",{className:`nav-tab ${p==="sensory"?"active":""}`,onClick:()=>{m("sensory"),At.playChime(.2)},children:"Sensory"}),B.jsx("button",{className:`nav-tab ${p==="emotions"?"active":""}`,onClick:()=>{m("emotions"),At.playChime(.2)},children:"Emotions"}),B.jsx("button",{className:`nav-tab ${p==="settings"?"active":""}`,onClick:()=>{m("settings"),At.playChime(.2)},children:"Settings"})]}),B.jsxs("div",{className:"header-actions",children:[B.jsx("button",{className:"quick-audio-btn",onClick:ae,title:T?"Unmute chimes":"Mute chimes",children:T?"Muted":"Sound"}),B.jsxs("div",{className:"profile-pill",onClick:ie,title:"Click to switch profile",children:[B.jsx("span",{className:"profile-name",children:d}),B.jsx("span",{className:"profile-switch-hint",children:"Switch"})]})]})]}),p==="home"&&B.jsxs("section",{className:"home-view",children:[d==="Stephen French"&&U&&B.jsx("div",{className:"profile-bg-layer",style:{backgroundImage:`url(${U})`}}),d==="Tyler Custine"&&R&&B.jsx("div",{className:"profile-bg-layer",style:{backgroundImage:`url(${R})`}}),B.jsx("div",{className:"home-vignette"}),B.jsxs("div",{className:"home-content",children:[d==="Stephen French"&&B.jsx("div",{className:"space-telemetry-badge",children:"✦ DEEP SPACE ORBIT • SECTOR 7 ✦"}),B.jsx("h1",{className:"home-greeting",children:ze}),B.jsxs("div",{className:"home-time-block",children:[B.jsx("div",{className:"home-clock",children:rt}),B.jsx("div",{className:"home-date",children:Ye})]}),d==="Stephen French"?B.jsxs("div",{className:"home-space-quote",children:[B.jsx("p",{children:'"Out here among the stars, everything slows down. Take your time, breathe easy, and explore at your own pace."'}),B.jsxs("div",{className:"home-actions",children:[B.jsx("button",{className:"glow-btn",onClick:()=>{m("sensory"),P("hyperspace"),At.playChime(.25)},children:"Enter Hyper Space →"}),B.jsx("button",{className:"glow-btn",onClick:()=>{m("emotions"),At.playChime(.25)},children:"Emotional Space →"}),B.jsxs("label",{className:"glow-btn upload-btn",children:["Upload Space Image",B.jsx("input",{type:"file",accept:"image/*",onChange:ue=>Ne(ue,"Stephen French"),style:{display:"none"}})]})]})]}):B.jsxs("div",{className:"home-space-quote",children:[B.jsx("p",{children:"Welcome back. Take a quiet breath and enjoy the space."}),B.jsxs("div",{className:"home-actions",children:[B.jsx("button",{className:"glow-btn",onClick:()=>{m("sensory"),At.playChime(.25)},children:"Open Sensory Toolkit →"}),B.jsxs("label",{className:"glow-btn upload-btn",children:["Upload Profile Background",B.jsx("input",{type:"file",accept:"image/*",onChange:ue=>Ne(ue,"Tyler Custine"),style:{display:"none"}})]})]})]})]})]}),p==="sensory"&&B.jsxs(B.Fragment,{children:[B.jsxs("main",{className:"canvas-viewport",onPointerDown:()=>At.playChime(.2),children:[A==="hyperspace"&&B.jsx(q1,{background:"#000000",baseColor:"#FFFFFF",accentColor:"#C7D2FE",density:S==="smooth"?300:800,speed:S==="smooth"?24:35,style:{width:"100%",height:"100%"}}),A==="infinite-hole"&&B.jsx(cT,{background:"#000000",columns:S==="smooth"?32:48,rows:S==="smooth"?32:48,style:{width:"100%",height:"100%"}}),A==="infinite-tendrils"&&B.jsx(gS,{style:{width:"100%",height:"100%"}}),A==="ink-current"&&B.jsx(PT,{background:"#000000",style:{width:"100%",height:"100%"}}),A==="line-ripple"&&B.jsx(HT,{backgroundColor:"#000000",strokeColor:"#ffffff"}),A==="liquid-vortex"&&B.jsx(ny,{style:{width:"100%",height:"100%"}}),A==="moire-lattice"&&B.jsx(gw,{background:"#000000",style:{width:"100%",height:"100%"}}),A==="rain-puddle"&&B.jsx(bw,{background:"#000000",style:{width:"100%",height:"100%"}})]}),B.jsx("footer",{className:"bottom-dock-container",children:B.jsx("nav",{className:"dock",children:ww.map(ue=>B.jsx("button",{className:`dock-tab ${A===ue.id?"active":""}`,onClick:()=>Oe(ue.id),children:ue.label},ue.id))})})]}),p==="emotions"&&B.jsx("section",{className:"emotions-view",children:B.jsxs("div",{className:"emotions-card tyler-emotions-wrapper",children:[B.jsxs("div",{className:"emotions-header",children:[B.jsx("h2",{children:d==="Stephen French"?"How are you feeling right now?":"Emotions & Reality Checks"}),B.jsx("p",{children:d==="Stephen French"?"For Stephen French — take a gentle pause.":"For Tyler Custine — honest reflection & grounding sequences."})]}),d==="Stephen French"?B.jsx("div",{className:"emotions-grid",children:Nw.map(ue=>B.jsxs("button",{className:"emotion-btn",onClick:()=>H(ue.id),children:[B.jsx("span",{children:ue.label}),B.jsx("span",{className:"emotion-arrow",children:"→"})]},ue.id))}):B.jsxs("div",{className:"tyler-emotions-sections",children:[B.jsxs("div",{className:"tyler-category-block",children:[B.jsx("div",{className:"category-header-bar",children:B.jsx("span",{className:"category-title",children:"Core Emotions"})}),B.jsx("div",{className:"emotions-grid",children:dS.filter(ue=>ue.category==="core").map(ue=>B.jsxs("button",{className:"emotion-btn tyler-emotion-btn",onClick:()=>j(ue),children:[B.jsx("span",{children:ue.label}),B.jsx("span",{className:"emotion-arrow",children:"→"})]},ue.id))})]}),B.jsxs("div",{className:"tyler-category-block",style:{marginTop:"28px"},children:[B.jsx("div",{className:"category-header-bar",children:B.jsx("span",{className:"category-title",children:"2026 Additions"})}),B.jsx("div",{className:"emotions-grid",children:dS.filter(ue=>ue.category==="2026").map(ue=>B.jsxs("button",{className:"emotion-btn tyler-emotion-btn",onClick:()=>j(ue),children:[B.jsx("span",{children:ue.label}),B.jsx("span",{className:"emotion-arrow",children:"→"})]},ue.id))})]})]})]})}),p==="settings"&&B.jsx("section",{className:"settings-view",children:B.jsxs("div",{className:"settings-card",children:[B.jsxs("div",{className:"settings-header",children:[B.jsx("h2",{children:"Space Settings"}),B.jsx("p",{children:"Tailor your sensory experience and active profile."})]}),B.jsxs("div",{className:"settings-group",children:[B.jsx("span",{className:"settings-label",children:"Active Profile"}),B.jsxs("div",{className:"settings-options",children:[B.jsx("button",{className:`settings-toggle-btn ${d==="Stephen French"?"active":""}`,onClick:()=>te("Stephen French"),children:"Stephen French"}),B.jsx("button",{className:`settings-toggle-btn ${d==="Tyler Custine"?"active":""}`,onClick:()=>te("Tyler Custine"),children:"Tyler Custine"})]}),B.jsx("span",{className:"settings-desc",children:"Switch profiles instantly without a password."})]}),d==="Stephen French"&&B.jsxs("div",{className:"settings-group",children:[B.jsx("span",{className:"settings-label",children:"Space Background"}),B.jsxs("div",{className:"settings-options",children:[B.jsxs("label",{className:"settings-toggle-btn active",style:{textAlign:"center",cursor:"pointer"},children:["Upload New Space Image",B.jsx("input",{type:"file",accept:"image/*",onChange:ue=>Ne(ue,"Stephen French"),style:{display:"none"}})]}),B.jsx("button",{className:"settings-toggle-btn",onClick:()=>{C("/steve-space-background.jpg"),localStorage.setItem("steve_custom_bg","/steve-space-background.jpg"),At.playChime(.2)},children:"Reset to Deep Nebula"})]}),B.jsx("span",{className:"settings-desc",children:"Choose a personal cosmic wallpaper or restore the deep space nebula."})]}),d==="Tyler Custine"&&B.jsxs("div",{className:"settings-group",children:[B.jsx("span",{className:"settings-label",children:"Profile Background"}),B.jsxs("div",{className:"settings-options",children:[B.jsxs("label",{className:"settings-toggle-btn active",style:{textAlign:"center",cursor:"pointer"},children:["Upload New Background Image",B.jsx("input",{type:"file",accept:"image/*",onChange:ue=>Ne(ue,"Tyler Custine"),style:{display:"none"}})]}),B.jsx("button",{className:"settings-toggle-btn",onClick:()=>{z("/t5s-project-background.png"),localStorage.setItem("tyler_custom_bg","/t5s-project-background.png"),At.playChime(.2)},children:"Reset to Default"})]}),B.jsx("span",{className:"settings-desc",children:"Upload any picture to display behind your profile."})]}),B.jsxs("div",{className:"settings-group",children:[B.jsx("span",{className:"settings-label",children:"Performance Mode"}),B.jsxs("div",{className:"settings-options",children:[B.jsx("button",{className:`settings-toggle-btn ${S==="smooth"?"active":""}`,onClick:()=>ne("smooth"),children:"Smooth (High FPS)"}),B.jsx("button",{className:`settings-toggle-btn ${S==="ultra"?"active":""}`,onClick:()=>ne("ultra"),children:"Ultra (Full Density)"})]}),B.jsx("span",{className:"settings-desc",children:"Smooth reduces particle density to avoid stutter and lag on Retina displays."})]}),B.jsxs("div",{className:"settings-group",children:[B.jsx("span",{className:"settings-label",children:"Acoustic Chimes"}),B.jsxs("div",{className:"settings-options",children:[B.jsx("button",{className:`settings-toggle-btn ${T?"":"active"}`,onClick:()=>{T&&ae()},children:"Audio Enabled"}),B.jsx("button",{className:`settings-toggle-btn ${T?"active":""}`,onClick:()=>{T||ae()},children:"Muted"})]}),B.jsx("span",{className:"settings-desc",children:"Soft, calming pentatonic sine chime feedback."})]}),B.jsxs("div",{className:"settings-group",children:[B.jsx("span",{className:"settings-label",children:"System Actions"}),B.jsxs("div",{className:"settings-options",children:[B.jsx("button",{className:"settings-toggle-btn",onClick:()=>{E(!0),At.playChime(.2)},children:"Replay Wordmark Intro"}),B.jsx("button",{className:"settings-toggle-btn",onClick:k,children:"Lock Space"})]}),B.jsx("span",{className:"settings-desc",children:'Locking requires the "tinyman" password to re-enter.'})]})]})}),g==="breathe"&&B.jsx(Rw,{onClose:()=>O(null),onFinish:()=>{O(null),m("sensory"),P("hyperspace"),At.playChime(.35)}}),g==="sad"&&B.jsxs("div",{className:"tinyman-modal tyler-modal-overlay",children:[B.jsx("button",{className:"close-modal-btn",onClick:()=>O(null),title:"Close (Esc)",children:"Close ×"}),B.jsxs("div",{className:"tyler-sequence-container",children:[B.jsxs("div",{className:"tyler-modal-header",children:[B.jsx("span",{className:"tyler-badge",children:"For Steve French • From Tyler"}),B.jsx("h2",{className:"tyler-modal-title",children:"I'm Feeling Sad"}),B.jsxs("span",{className:"tyler-screen-count",children:["Screen ",I+1," of ",El.length]})]}),B.jsx("div",{className:"tyler-text-card animate-text-fade",children:B.jsxs("p",{className:"tyler-raw-text",children:['"',El[I],'"']})},I),B.jsxs("div",{className:"sequence-nav",children:[B.jsx("button",{className:"seq-btn",onClick:Ce,disabled:I===0,style:{opacity:I===0?.35:1,cursor:I===0?"default":"pointer"},children:"← Back"}),B.jsx("div",{className:"seq-indicators",children:El.map((ue,Pe)=>B.jsx("div",{className:`seq-dot ${Pe===I?"active":""}`,onClick:()=>{F(Pe),At.playChime(.2)},style:{cursor:"pointer"}},Pe))}),B.jsx("button",{className:"seq-btn primary",onClick:de,children:I===El.length-1?"Finish & Ground →":"Next Screen →"})]})]})]}),g&&(g==="overwhelmed"||g==="overstimulated"||g==="anxious")&&B.jsxs("div",{className:"tinyman-modal",children:[B.jsx("button",{className:"close-modal-btn",onClick:()=>O(null),title:"Close (Esc)",children:"Close ×"}),B.jsxs("div",{className:"tinyman-container",children:[I<4?B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"drawing-frame",children:B.jsx("img",{src:Mp[I].image,alt:Mp[I].caption,className:"drawing-img"})}),B.jsx("h2",{className:"drawing-caption",children:Mp[I].caption})]}):B.jsxs("div",{className:"steve-note-card animate-text-fade",children:[B.jsx("div",{style:{marginBottom:"18px"},children:B.jsx("span",{className:"tyler-badge",children:"A Note From Tyler"})}),B.jsx("p",{className:"steve-note-text",children:g==="overstimulated"?Dw:Uw})]},"note-step"),B.jsxs("div",{className:"sequence-nav",children:[B.jsx("button",{className:"seq-btn",onClick:Ce,disabled:I===0,style:{opacity:I===0?.35:1,cursor:I===0?"default":"pointer"},children:"← Back"}),B.jsx("div",{className:"seq-indicators",children:Array.from({length:Le(g)}).map((ue,Pe)=>B.jsx("div",{className:`seq-dot ${Pe===I?"active":""}`,onClick:()=>{F(Pe),At.playChime(.2)},style:{cursor:"pointer"}},Pe))}),B.jsx("button",{className:"seq-btn primary",onClick:de,children:I===Le(g)-1?"Finish & Relax →":I===3&&(g==="overstimulated"||g==="anxious")?"Next & Note →":"Next →"})]})]})]}),X&&B.jsxs("div",{className:"tinyman-modal tyler-modal-overlay",children:[B.jsx("button",{className:"close-modal-btn",onClick:()=>Y(null),title:"Close (Esc)",children:"Close ×"}),B.jsxs("div",{className:"tyler-sequence-container",children:[B.jsxs("div",{className:"tyler-modal-header",children:[B.jsx("span",{className:"tyler-badge",children:X.category==="2026"?"2026 Addition":"Reality Check"}),B.jsx("h2",{className:"tyler-modal-title",children:X.label}),B.jsxs("span",{className:"tyler-screen-count",children:["Screen ",G+1," of ",X.screens.length]})]}),B.jsx("div",{className:"tyler-text-card animate-text-fade",children:B.jsxs("p",{className:"tyler-raw-text",children:['"',X.screens[G],'"']})},G),B.jsxs("div",{className:"sequence-nav",children:[B.jsx("button",{className:"seq-btn",onClick:Me,disabled:G===0,style:{opacity:G===0?.35:1,cursor:G===0?"default":"pointer"},children:"← Back"}),B.jsx("div",{className:"seq-indicators",children:X.screens.map((ue,Pe)=>B.jsx("div",{className:`seq-dot ${Pe===G?"active":""}`,onClick:()=>{W(Pe),At.playChime(.2)},style:{cursor:"pointer"}},Pe))}),B.jsx("button",{className:"seq-btn primary",onClick:le,children:G===X.screens.length-1?"Finish & Ground →":"Next Screen →"})]})]})]}),B.jsxs("nav",{className:"mobile-bottom-nav",children:[B.jsx("button",{className:`mobile-nav-tab ${p==="home"?"active":""}`,onClick:()=>{m("home"),At.playChime(.2)},"aria-label":"Home",children:B.jsx("span",{className:"mobile-tab-label",children:"Home"})}),B.jsx("button",{className:`mobile-nav-tab ${p==="sensory"?"active":""}`,onClick:()=>{m("sensory"),At.playChime(.2)},"aria-label":"Sensory",children:B.jsx("span",{className:"mobile-tab-label",children:"Sensory"})}),B.jsx("button",{className:`mobile-nav-tab ${p==="emotions"?"active":""}`,onClick:()=>{m("emotions"),At.playChime(.2)},"aria-label":"Emotions",children:B.jsx("span",{className:"mobile-tab-label",children:"Emotions"})}),B.jsx("button",{className:`mobile-nav-tab ${p==="settings"?"active":""}`,onClick:()=>{m("settings"),At.playChime(.2)},"aria-label":"Settings",children:B.jsx("span",{className:"mobile-tab-label",children:"Settings"})})]}),B.jsx("img",{id:"tyson-banner",src:"/TYSONMediaGroupBanner.png",alt:"TYSON Media Group"})]}):B.jsxs("div",{className:"lock-screen",children:[B.jsx("div",{className:"cosmic-stars"}),B.jsxs("div",{className:"lock-card",children:[B.jsx("h1",{className:"lock-title",children:"MYT5S"}),B.jsx("p",{className:"lock-subtitle",children:"Stephen French • Tyler Custine"}),B.jsxs("form",{className:"lock-form",onSubmit:L,children:[B.jsx("input",{type:"password",className:"lock-input",placeholder:"Enter site password",value:i,onChange:ue=>r(ue.target.value),autoFocus:!0}),l&&B.jsx("p",{className:"lock-error",children:l}),B.jsx("button",{type:"submit",className:"lock-btn",children:"Unlock Space"})]})]}),B.jsx("img",{id:"tyson-banner",src:"/TYSONMediaGroupBanner.png",alt:"TYSON Media Group"})]})}jE.createRoot(document.getElementById("root")).render(B.jsx(GE.StrictMode,{children:B.jsx(Lw,{})}));
