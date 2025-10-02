(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sa(t){const e=Object.create(null);for(const a of t.split(","))e[a]=1;return a=>a in e}const te={},Dt=[],$e=()=>{},Vs=()=>!1,Nn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ea=t=>t.startsWith("onUpdate:"),ue=Object.assign,Ca=(t,e)=>{const a=t.indexOf(e);a>-1&&t.splice(a,1)},li=Object.prototype.hasOwnProperty,Q=(t,e)=>li.call(t,e),M=Array.isArray,It=t=>ln(t)==="[object Map]",jn=t=>ln(t)==="[object Set]",Ja=t=>ln(t)==="[object Date]",B=t=>typeof t=="function",de=t=>typeof t=="string",Ge=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Ws=t=>(se(t)||B(t))&&B(t.then)&&B(t.catch),Gs=Object.prototype.toString,ln=t=>Gs.call(t),ui=t=>ln(t).slice(8,-1),Ks=t=>ln(t)==="[object Object]",xa=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gt=Sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mn=t=>{const e=Object.create(null);return a=>e[a]||(e[a]=t(a))},vi=/-\w/g,Re=Mn(t=>t.replace(vi,e=>e.slice(1).toUpperCase())),pi=/\B([A-Z])/g,mt=Mn(t=>t.replace(pi,"-$1").toLowerCase()),Un=Mn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jn=Mn(t=>t?`on${Un(t)}`:""),pt=(t,e)=>!Object.is(t,e),yn=(t,...e)=>{for(let a=0;a<t.length;a++)t[a](...e)},zs=(t,e,a,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:a})},En=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qa;const Bn=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ta(t){if(M(t)){const e={};for(let a=0;a<t.length;a++){const s=t[a],o=de(s)?hi(s):Ta(s);if(o)for(const i in o)e[i]=o[i]}return e}else if(de(t)||se(t))return t}const fi=/;(?![^(]*\))/g,mi=/:([^]+)/,gi=/\/\*[^]*?\*\//g;function hi(t){const e={};return t.replace(gi,"").split(fi).forEach(a=>{if(a){const s=a.split(mi);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Da(t){let e="";if(de(t))e=t;else if(M(t))for(let a=0;a<t.length;a++){const s=Da(t[a]);s&&(e+=s+" ")}else if(se(t))for(const a in t)t[a]&&(e+=a+" ");return e.trim()}const bi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yi=Sa(bi);function Ys(t){return!!t||t===""}function _i(t,e){if(t.length!==e.length)return!1;let a=!0;for(let s=0;a&&s<t.length;s++)a=Hn(t[s],e[s]);return a}function Hn(t,e){if(t===e)return!0;let a=Ja(t),s=Ja(e);if(a||s)return a&&s?t.getTime()===e.getTime():!1;if(a=Ge(t),s=Ge(e),a||s)return t===e;if(a=M(t),s=M(e),a||s)return a&&s?_i(t,e):!1;if(a=se(t),s=se(e),a||s){if(!a||!s)return!1;const o=Object.keys(t).length,i=Object.keys(e).length;if(o!==i)return!1;for(const r in t){const c=t.hasOwnProperty(r),d=e.hasOwnProperty(r);if(c&&!d||!c&&d||!Hn(t[r],e[r]))return!1}}return String(t)===String(e)}function wi(t,e){return t.findIndex(a=>Hn(a,e))}const Js=t=>!!(t&&t.__v_isRef===!0),Qs=t=>de(t)?t:t==null?"":M(t)||se(t)&&(t.toString===Gs||!B(t.toString))?Js(t)?Qs(t.value):JSON.stringify(t,Xs,2):String(t),Xs=(t,e)=>Js(e)?Xs(t,e.value):It(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[s,o],i)=>(a[Qn(s,i)+" =>"]=o,a),{})}:jn(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>Qn(a))}:Ge(e)?Qn(e):se(e)&&!M(e)&&!Ks(e)?String(e):e,Qn=(t,e="")=>{var a;return Ge(t)?`Symbol(${(a=t.description)!=null?a:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class ki{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!e&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,a;if(this.scopes)for(e=0,a=this.scopes.length;e<a;e++)this.scopes[e].pause();for(e=0,a=this.effects.length;e<a;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,a;if(this.scopes)for(e=0,a=this.scopes.length;e<a;e++)this.scopes[e].resume();for(e=0,a=this.effects.length;e<a;e++)this.effects[e].resume()}}run(e){if(this._active){const a=ke;try{return ke=this,e()}finally{ke=a}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){this._on>0&&--this._on===0&&(ke=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function qi(){return ke}let ae;const Xn=new WeakSet;class Zs{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xn.has(this)&&(Xn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||to(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xa(this),no(this);const e=ae,a=Oe;ae=this,Oe=!0;try{return this.fn()}finally{ao(this),ae=e,Oe=a,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pa(e);this.deps=this.depsTail=void 0,Xa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){da(this)&&this.run()}get dirty(){return da(this)}}let eo=0,Kt,zt;function to(t,e=!1){if(t.flags|=8,e){t.next=zt,zt=t;return}t.next=Kt,Kt=t}function Ia(){eo++}function Ra(){if(--eo>0)return;if(zt){let e=zt;for(zt=void 0;e;){const a=e.next;e.next=void 0,e.flags&=-9,e=a}}let t;for(;Kt;){let e=Kt;for(Kt=void 0;e;){const a=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=a}}if(t)throw t}function no(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ao(t){let e,a=t.depsTail,s=a;for(;s;){const o=s.prevDep;s.version===-1?(s===a&&(a=o),Pa(s),Si(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}t.deps=e,t.depsTail=a}function da(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(so(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function so(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===nn)||(t.globalVersion=nn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!da(t))))return;t.flags|=2;const e=t.dep,a=ae,s=Oe;ae=t,Oe=!0;try{no(t);const o=t.fn(t._value);(e.version===0||pt(o,t._value))&&(t.flags|=128,t._value=o,e.version++)}catch(o){throw e.version++,o}finally{ae=a,Oe=s,ao(t),t.flags&=-3}}function Pa(t,e=!1){const{dep:a,prevSub:s,nextSub:o}=t;if(s&&(s.nextSub=o,t.prevSub=void 0),o&&(o.prevSub=s,t.nextSub=void 0),a.subs===t&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let i=a.computed.deps;i;i=i.nextDep)Pa(i,!0)}!e&&!--a.sc&&a.map&&a.map.delete(a.key)}function Si(t){const{prevDep:e,nextDep:a}=t;e&&(e.nextDep=a,t.prevDep=void 0),a&&(a.prevDep=e,t.nextDep=void 0)}let Oe=!0;const oo=[];function at(){oo.push(Oe),Oe=!1}function st(){const t=oo.pop();Oe=t===void 0?!0:t}function Xa(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const a=ae;ae=void 0;try{e()}finally{ae=a}}}let nn=0;class Ei{constructor(e,a){this.sub=e,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Aa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ae||!Oe||ae===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==ae)a=this.activeLink=new Ei(ae,this),ae.deps?(a.prevDep=ae.depsTail,ae.depsTail.nextDep=a,ae.depsTail=a):ae.deps=ae.depsTail=a,io(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=ae.depsTail,a.nextDep=void 0,ae.depsTail.nextDep=a,ae.depsTail=a,ae.deps===a&&(ae.deps=s)}return a}trigger(e){this.version++,nn++,this.notify(e)}notify(e){Ia();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Ra()}}}function io(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)io(s)}const a=t.dep.subs;a!==t&&(t.prevSub=a,a&&(a.nextSub=t)),t.dep.subs=t}}const la=new WeakMap,wt=Symbol(""),ua=Symbol(""),an=Symbol("");function fe(t,e,a){if(Oe&&ae){let s=la.get(t);s||la.set(t,s=new Map);let o=s.get(a);o||(s.set(a,o=new Aa),o.map=s,o.key=a),o.track()}}function Ze(t,e,a,s,o,i){const r=la.get(t);if(!r){nn++;return}const c=d=>{d&&d.trigger()};if(Ia(),e==="clear")r.forEach(c);else{const d=M(t),f=d&&xa(a);if(d&&a==="length"){const v=Number(s);r.forEach((p,g)=>{(g==="length"||g===an||!Ge(g)&&g>=v)&&c(p)})}else switch((a!==void 0||r.has(void 0))&&c(r.get(a)),f&&c(r.get(an)),e){case"add":d?f&&c(r.get("length")):(c(r.get(wt)),It(t)&&c(r.get(ua)));break;case"delete":d||(c(r.get(wt)),It(t)&&c(r.get(ua)));break;case"set":It(t)&&c(r.get(wt));break}}Ra()}function Ct(t){const e=J(t);return e===t?e:(fe(e,"iterate",an),Le(t)?e:e.map(be))}function $a(t){return fe(t=J(t),"iterate",an),t}const Ci={__proto__:null,[Symbol.iterator](){return Zn(this,Symbol.iterator,be)},concat(...t){return Ct(this).concat(...t.map(e=>M(e)?Ct(e):e))},entries(){return Zn(this,"entries",t=>(t[1]=be(t[1]),t))},every(t,e){return Ye(this,"every",t,e,void 0,arguments)},filter(t,e){return Ye(this,"filter",t,e,a=>a.map(be),arguments)},find(t,e){return Ye(this,"find",t,e,be,arguments)},findIndex(t,e){return Ye(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ye(this,"findLast",t,e,be,arguments)},findLastIndex(t,e){return Ye(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ye(this,"forEach",t,e,void 0,arguments)},includes(...t){return ea(this,"includes",t)},indexOf(...t){return ea(this,"indexOf",t)},join(t){return Ct(this).join(t)},lastIndexOf(...t){return ea(this,"lastIndexOf",t)},map(t,e){return Ye(this,"map",t,e,void 0,arguments)},pop(){return Bt(this,"pop")},push(...t){return Bt(this,"push",t)},reduce(t,...e){return Za(this,"reduce",t,e)},reduceRight(t,...e){return Za(this,"reduceRight",t,e)},shift(){return Bt(this,"shift")},some(t,e){return Ye(this,"some",t,e,void 0,arguments)},splice(...t){return Bt(this,"splice",t)},toReversed(){return Ct(this).toReversed()},toSorted(t){return Ct(this).toSorted(t)},toSpliced(...t){return Ct(this).toSpliced(...t)},unshift(...t){return Bt(this,"unshift",t)},values(){return Zn(this,"values",be)}};function Zn(t,e,a){const s=$a(t),o=s[e]();return s!==t&&!Le(t)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=a(i.value)),i}),o}const xi=Array.prototype;function Ye(t,e,a,s,o,i){const r=$a(t),c=r!==t&&!Le(t),d=r[e];if(d!==xi[e]){const p=d.apply(t,i);return c?be(p):p}let f=a;r!==t&&(c?f=function(p,g){return a.call(this,be(p),g,t)}:a.length>2&&(f=function(p,g){return a.call(this,p,g,t)}));const v=d.call(r,f,s);return c&&o?o(v):v}function Za(t,e,a,s){const o=$a(t);let i=a;return o!==t&&(Le(t)?a.length>3&&(i=function(r,c,d){return a.call(this,r,c,d,t)}):i=function(r,c,d){return a.call(this,r,be(c),d,t)}),o[e](i,...s)}function ea(t,e,a){const s=J(t);fe(s,"iterate",an);const o=s[e](...a);return(o===-1||o===!1)&&Na(a[0])?(a[0]=J(a[0]),s[e](...a)):o}function Bt(t,e,a=[]){at(),Ia();const s=J(t)[e].apply(t,a);return Ra(),st(),s}const Ti=Sa("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ge));function Di(t){Ge(t)||(t=String(t));const e=J(this);return fe(e,"has",t),e.hasOwnProperty(t)}class co{constructor(e=!1,a=!1){this._isReadonly=e,this._isShallow=a}get(e,a,s){if(a==="__v_skip")return e.__v_skip;const o=this._isReadonly,i=this._isShallow;if(a==="__v_isReactive")return!o;if(a==="__v_isReadonly")return o;if(a==="__v_isShallow")return i;if(a==="__v_raw")return s===(o?i?Mi:po:i?vo:uo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=M(e);if(!o){let d;if(r&&(d=Ci[a]))return d;if(a==="hasOwnProperty")return Di}const c=Reflect.get(e,a,ge(e)?e:s);if((Ge(a)?ro.has(a):Ti(a))||(o||fe(e,"get",a),i))return c;if(ge(c)){const d=r&&xa(a)?c:c.value;return o&&se(d)?pa(d):d}return se(c)?o?pa(c):Fn(c):c}}class lo extends co{constructor(e=!1){super(!1,e)}set(e,a,s,o){let i=e[a];if(!this._isShallow){const d=kt(i);if(!Le(s)&&!kt(s)&&(i=J(i),s=J(s)),!M(e)&&ge(i)&&!ge(s))return d||(i.value=s),!0}const r=M(e)&&xa(a)?Number(a)<e.length:Q(e,a),c=Reflect.set(e,a,s,ge(e)?e:o);return e===J(o)&&(r?pt(s,i)&&Ze(e,"set",a,s):Ze(e,"add",a,s)),c}deleteProperty(e,a){const s=Q(e,a);e[a];const o=Reflect.deleteProperty(e,a);return o&&s&&Ze(e,"delete",a,void 0),o}has(e,a){const s=Reflect.has(e,a);return(!Ge(a)||!ro.has(a))&&fe(e,"has",a),s}ownKeys(e){return fe(e,"iterate",M(e)?"length":wt),Reflect.ownKeys(e)}}class Ii extends co{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const Ri=new lo,Pi=new Ii,Ai=new lo(!0);const va=t=>t,fn=t=>Reflect.getPrototypeOf(t);function $i(t,e,a){return function(...s){const o=this.__v_raw,i=J(o),r=It(i),c=t==="entries"||t===Symbol.iterator&&r,d=t==="keys"&&r,f=o[t](...s),v=a?va:e?fa:be;return!e&&fe(i,"iterate",d?ua:wt),{next(){const{value:p,done:g}=f.next();return g?{value:p,done:g}:{value:c?[v(p[0]),v(p[1])]:v(p),done:g}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Oi(t,e){const a={get(o){const i=this.__v_raw,r=J(i),c=J(o);t||(pt(o,c)&&fe(r,"get",o),fe(r,"get",c));const{has:d}=fn(r),f=e?va:t?fa:be;if(d.call(r,o))return f(i.get(o));if(d.call(r,c))return f(i.get(c));i!==r&&i.get(o)},get size(){const o=this.__v_raw;return!t&&fe(J(o),"iterate",wt),o.size},has(o){const i=this.__v_raw,r=J(i),c=J(o);return t||(pt(o,c)&&fe(r,"has",o),fe(r,"has",c)),o===c?i.has(o):i.has(o)||i.has(c)},forEach(o,i){const r=this,c=r.__v_raw,d=J(c),f=e?va:t?fa:be;return!t&&fe(d,"iterate",wt),c.forEach((v,p)=>o.call(i,f(v),f(p),r))}};return ue(a,t?{add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear")}:{add(o){!e&&!Le(o)&&!kt(o)&&(o=J(o));const i=J(this);return fn(i).has.call(i,o)||(i.add(o),Ze(i,"add",o,o)),this},set(o,i){!e&&!Le(i)&&!kt(i)&&(i=J(i));const r=J(this),{has:c,get:d}=fn(r);let f=c.call(r,o);f||(o=J(o),f=c.call(r,o));const v=d.call(r,o);return r.set(o,i),f?pt(i,v)&&Ze(r,"set",o,i):Ze(r,"add",o,i),this},delete(o){const i=J(this),{has:r,get:c}=fn(i);let d=r.call(i,o);d||(o=J(o),d=r.call(i,o)),c&&c.call(i,o);const f=i.delete(o);return d&&Ze(i,"delete",o,void 0),f},clear(){const o=J(this),i=o.size!==0,r=o.clear();return i&&Ze(o,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(o=>{a[o]=$i(o,t,e)}),a}function Oa(t,e){const a=Oi(t,e);return(s,o,i)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?s:Reflect.get(Q(a,o)&&o in s?a:s,o,i)}const Li={get:Oa(!1,!1)},Ni={get:Oa(!1,!0)},ji={get:Oa(!0,!1)};const uo=new WeakMap,vo=new WeakMap,po=new WeakMap,Mi=new WeakMap;function Ui(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bi(t){return t.__v_skip||!Object.isExtensible(t)?0:Ui(ui(t))}function Fn(t){return kt(t)?t:La(t,!1,Ri,Li,uo)}function fo(t){return La(t,!1,Ai,Ni,vo)}function pa(t){return La(t,!0,Pi,ji,po)}function La(t,e,a,s,o){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Bi(t);if(i===0)return t;const r=o.get(t);if(r)return r;const c=new Proxy(t,i===2?s:a);return o.set(t,c),c}function Yt(t){return kt(t)?Yt(t.__v_raw):!!(t&&t.__v_isReactive)}function kt(t){return!!(t&&t.__v_isReadonly)}function Le(t){return!!(t&&t.__v_isShallow)}function Na(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Hi(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&zs(t,"__v_skip",!0),t}const be=t=>se(t)?Fn(t):t,fa=t=>se(t)?pa(t):t;function ge(t){return t?t.__v_isRef===!0:!1}function Fi(t){return mo(t,!1)}function Vi(t){return mo(t,!0)}function mo(t,e){return ge(t)?t:new Wi(t,e)}class Wi{constructor(e,a){this.dep=new Aa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?e:J(e),this._value=a?e:be(e),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(e){const a=this._rawValue,s=this.__v_isShallow||Le(e)||kt(e);e=s?e:J(e),pt(e,a)&&(this._rawValue=e,this._value=s?e:be(e),this.dep.trigger())}}function Rt(t){return ge(t)?t.value:t}const Gi={get:(t,e,a)=>e==="__v_raw"?t:Rt(Reflect.get(t,e,a)),set:(t,e,a,s)=>{const o=t[e];return ge(o)&&!ge(a)?(o.value=a,!0):Reflect.set(t,e,a,s)}};function go(t){return Yt(t)?t:new Proxy(t,Gi)}class Ki{constructor(e,a,s){this.fn=e,this.setter=a,this._value=void 0,this.dep=new Aa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=nn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return to(this,!0),!0}get value(){const e=this.dep.track();return so(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zi(t,e,a=!1){let s,o;return B(t)?s=t:(s=t.get,o=t.set),new Ki(s,o,a)}const gn={},Cn=new WeakMap;let yt;function Yi(t,e=!1,a=yt){if(a){let s=Cn.get(a);s||Cn.set(a,s=[]),s.push(t)}}function Ji(t,e,a=te){const{immediate:s,deep:o,once:i,scheduler:r,augmentJob:c,call:d}=a,f=A=>o?A:Le(A)||o===!1||o===0?et(A,1):et(A);let v,p,g,h,T=!1,I=!1;if(ge(t)?(p=()=>t.value,T=Le(t)):Yt(t)?(p=()=>f(t),T=!0):M(t)?(I=!0,T=t.some(A=>Yt(A)||Le(A)),p=()=>t.map(A=>{if(ge(A))return A.value;if(Yt(A))return f(A);if(B(A))return d?d(A,2):A()})):B(t)?e?p=d?()=>d(t,2):t:p=()=>{if(g){at();try{g()}finally{st()}}const A=yt;yt=v;try{return d?d(t,3,[h]):t(h)}finally{yt=A}}:p=$e,e&&o){const A=p,ee=o===!0?1/0:o;p=()=>et(A(),ee)}const H=qi(),O=()=>{v.stop(),H&&H.active&&Ca(H.effects,v)};if(i&&e){const A=e;e=(...ee)=>{A(...ee),O()}}let R=I?new Array(t.length).fill(gn):gn;const N=A=>{if(!(!(v.flags&1)||!v.dirty&&!A))if(e){const ee=v.run();if(o||T||(I?ee.some((ve,ie)=>pt(ve,R[ie])):pt(ee,R))){g&&g();const ve=yt;yt=v;try{const ie=[ee,R===gn?void 0:I&&R[0]===gn?[]:R,h];R=ee,d?d(e,3,ie):e(...ie)}finally{yt=ve}}}else v.run()};return c&&c(N),v=new Zs(p),v.scheduler=r?()=>r(N,!1):N,h=A=>Yi(A,!1,v),g=v.onStop=()=>{const A=Cn.get(v);if(A){if(d)d(A,4);else for(const ee of A)ee();Cn.delete(v)}},e?s?N(!0):R=v.run():r?r(N.bind(null,!0),!0):v.run(),O.pause=v.pause.bind(v),O.resume=v.resume.bind(v),O.stop=O,O}function et(t,e=1/0,a){if(e<=0||!se(t)||t.__v_skip||(a=a||new Map,(a.get(t)||0)>=e))return t;if(a.set(t,e),e--,ge(t))et(t.value,e,a);else if(M(t))for(let s=0;s<t.length;s++)et(t[s],e,a);else if(jn(t)||It(t))t.forEach(s=>{et(s,e,a)});else if(Ks(t)){for(const s in t)et(t[s],e,a);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&et(t[s],e,a)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function un(t,e,a,s){try{return s?t(...s):t()}catch(o){Vn(o,e,a)}}function Ke(t,e,a,s){if(B(t)){const o=un(t,e,a,s);return o&&Ws(o)&&o.catch(i=>{Vn(i,e,a)}),o}if(M(t)){const o=[];for(let i=0;i<t.length;i++)o.push(Ke(t[i],e,a,s));return o}}function Vn(t,e,a,s=!0){const o=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||te;if(e){let c=e.parent;const d=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${a}`;for(;c;){const v=c.ec;if(v){for(let p=0;p<v.length;p++)if(v[p](t,d,f)===!1)return}c=c.parent}if(i){at(),un(i,null,10,[t,d,f]),st();return}}Qi(t,a,o,s,r)}function Qi(t,e,a,s=!0,o=!1){if(o)throw t;console.error(t)}const ye=[];let Ve=-1;const Pt=[];let lt=null,xt=0;const ho=Promise.resolve();let xn=null;function ja(t){const e=xn||ho;return t?e.then(this?t.bind(this):t):e}function Xi(t){let e=Ve+1,a=ye.length;for(;e<a;){const s=e+a>>>1,o=ye[s],i=sn(o);i<t||i===t&&o.flags&2?e=s+1:a=s}return e}function Ma(t){if(!(t.flags&1)){const e=sn(t),a=ye[ye.length-1];!a||!(t.flags&2)&&e>=sn(a)?ye.push(t):ye.splice(Xi(e),0,t),t.flags|=1,bo()}}function bo(){xn||(xn=ho.then(_o))}function Zi(t){M(t)?Pt.push(...t):lt&&t.id===-1?lt.splice(xt+1,0,t):t.flags&1||(Pt.push(t),t.flags|=1),bo()}function es(t,e,a=Ve+1){for(;a<ye.length;a++){const s=ye[a];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ye.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function yo(t){if(Pt.length){const e=[...new Set(Pt)].sort((a,s)=>sn(a)-sn(s));if(Pt.length=0,lt){lt.push(...e);return}for(lt=e,xt=0;xt<lt.length;xt++){const a=lt[xt];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}lt=null,xt=0}}const sn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _o(t){const e=$e;try{for(Ve=0;Ve<ye.length;Ve++){const a=ye[Ve];a&&!(a.flags&8)&&(a.flags&4&&(a.flags&=-2),un(a,a.i,a.i?15:14),a.flags&4||(a.flags&=-2))}}finally{for(;Ve<ye.length;Ve++){const a=ye[Ve];a&&(a.flags&=-2)}Ve=-1,ye.length=0,yo(),xn=null,(ye.length||Pt.length)&&_o()}}let Ce=null,wo=null;function Tn(t){const e=Ce;return Ce=t,wo=t&&t.type.__scopeId||null,e}function F(t,e=Ce,a){if(!e||t._n)return t;const s=(...o)=>{s._d&&Rn(-1);const i=Tn(e);let r;try{r=t(...o)}finally{Tn(i),s._d&&Rn(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function tt(t,e){if(Ce===null)return t;const a=zn(Ce),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[i,r,c,d=te]=e[o];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&et(r),s.push({dir:i,instance:a,value:r,oldValue:void 0,arg:c,modifiers:d}))}return t}function ht(t,e,a,s){const o=t.dirs,i=e&&e.dirs;for(let r=0;r<o.length;r++){const c=o[r];i&&(c.oldValue=i[r].value);let d=c.dir[s];d&&(at(),Ke(d,a,8,[t.el,c,t,e]),st())}}const er=Symbol("_vte"),tr=t=>t.__isTeleport,nr=Symbol("_leaveCb");function Ua(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ua(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ko(t,e){return B(t)?(()=>ue({name:t.name},e,{setup:t}))():t}function qo(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Dn=new WeakMap;function Jt(t,e,a,s,o=!1){if(M(t)){t.forEach((T,I)=>Jt(T,e&&(M(e)?e[I]:e),a,s,o));return}if(Qt(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Jt(t,e,a,s.component.subTree);return}const i=s.shapeFlag&4?zn(s.component):s.el,r=o?null:i,{i:c,r:d}=t,f=e&&e.r,v=c.refs===te?c.refs={}:c.refs,p=c.setupState,g=J(p),h=p===te?Vs:T=>Q(g,T);if(f!=null&&f!==d){if(ts(e),de(f))v[f]=null,h(f)&&(p[f]=null);else if(ge(f)){f.value=null;const T=e;T.k&&(v[T.k]=null)}}if(B(d))un(d,c,12,[r,v]);else{const T=de(d),I=ge(d);if(T||I){const H=()=>{if(t.f){const O=T?h(d)?p[d]:v[d]:d.value;if(o)M(O)&&Ca(O,i);else if(M(O))O.includes(i)||O.push(i);else if(T)v[d]=[i],h(d)&&(p[d]=v[d]);else{const R=[i];d.value=R,t.k&&(v[t.k]=R)}}else T?(v[d]=r,h(d)&&(p[d]=r)):I&&(d.value=r,t.k&&(v[t.k]=r))};if(r){const O=()=>{H(),Dn.delete(t)};O.id=-1,Dn.set(t,O),Ee(O,a)}else ts(t),H()}}}function ts(t){const e=Dn.get(t);e&&(e.flags|=8,Dn.delete(t))}Bn().requestIdleCallback;Bn().cancelIdleCallback;const Qt=t=>!!t.type.__asyncLoader,So=t=>t.type.__isKeepAlive;function ar(t,e){Eo(t,"a",e)}function sr(t,e){Eo(t,"da",e)}function Eo(t,e,a=me){const s=t.__wdc||(t.__wdc=()=>{let o=a;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(Wn(e,s,a),a){let o=a.parent;for(;o&&o.parent;)So(o.parent.vnode)&&or(s,e,a,o),o=o.parent}}function or(t,e,a,s){const o=Wn(e,t,s,!0);Co(()=>{Ca(s[e],o)},a)}function Wn(t,e,a=me,s=!1){if(a){const o=a[t]||(a[t]=[]),i=e.__weh||(e.__weh=(...r)=>{at();const c=vn(a),d=Ke(e,a,t,r);return c(),st(),d});return s?o.unshift(i):o.push(i),i}}const ot=t=>(e,a=me)=>{(!rn||t==="sp")&&Wn(t,(...s)=>e(...s),a)},ir=ot("bm"),rr=ot("m"),cr=ot("bu"),dr=ot("u"),lr=ot("bum"),Co=ot("um"),ur=ot("sp"),vr=ot("rtg"),pr=ot("rtc");function fr(t,e=me){Wn("ec",t,e)}const xo="components";function Te(t,e){return gr(xo,t,!0,e)||t}const mr=Symbol.for("v-ndc");function gr(t,e,a=!0,s=!1){const o=Ce||me;if(o){const i=o.type;if(t===xo){const c=oc(i,!1);if(c&&(c===e||c===Re(e)||c===Un(Re(e))))return i}const r=ns(o[t]||i[t],e)||ns(o.appContext[t],e);return!r&&s?i:r}}function ns(t,e){return t&&(t[e]||t[Re(e)]||t[Un(Re(e))])}const ma=t=>t?Go(t)?zn(t):ma(t.parent):null,Xt=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ma(t.parent),$root:t=>ma(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ba(t),$forceUpdate:t=>t.f||(t.f=()=>{Ma(t.update)}),$nextTick:t=>t.n||(t.n=ja.bind(t.proxy)),$watch:t=>Nr.bind(t)}),ta=(t,e)=>t!==te&&!t.__isScriptSetup&&Q(t,e),hr={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:a,setupState:s,data:o,props:i,accessCache:r,type:c,appContext:d}=t;let f;if(e[0]!=="$"){const h=r[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return o[e];case 4:return a[e];case 3:return i[e]}else{if(ta(s,e))return r[e]=1,s[e];if(o!==te&&Q(o,e))return r[e]=2,o[e];if((f=t.propsOptions[0])&&Q(f,e))return r[e]=3,i[e];if(a!==te&&Q(a,e))return r[e]=4,a[e];ga&&(r[e]=0)}}const v=Xt[e];let p,g;if(v)return e==="$attrs"&&fe(t.attrs,"get",""),v(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(a!==te&&Q(a,e))return r[e]=4,a[e];if(g=d.config.globalProperties,Q(g,e))return g[e]},set({_:t},e,a){const{data:s,setupState:o,ctx:i}=t;return ta(o,e)?(o[e]=a,!0):s!==te&&Q(s,e)?(s[e]=a,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=a,!0)},has({_:{data:t,setupState:e,accessCache:a,ctx:s,appContext:o,propsOptions:i,type:r}},c){let d,f;return!!(a[c]||t!==te&&c[0]!=="$"&&Q(t,c)||ta(e,c)||(d=i[0])&&Q(d,c)||Q(s,c)||Q(Xt,c)||Q(o.config.globalProperties,c)||(f=r.__cssModules)&&f[c])},defineProperty(t,e,a){return a.get!=null?t._.accessCache[e]=0:Q(a,"value")&&this.set(t,e,a.value,null),Reflect.defineProperty(t,e,a)}};function as(t){return M(t)?t.reduce((e,a)=>(e[a]=null,e),{}):t}let ga=!0;function br(t){const e=Ba(t),a=t.proxy,s=t.ctx;ga=!1,e.beforeCreate&&ss(e.beforeCreate,t,"bc");const{data:o,computed:i,methods:r,watch:c,provide:d,inject:f,created:v,beforeMount:p,mounted:g,beforeUpdate:h,updated:T,activated:I,deactivated:H,beforeDestroy:O,beforeUnmount:R,destroyed:N,unmounted:A,render:ee,renderTracked:ve,renderTriggered:ie,errorCaptured:je,serverPrefetch:it,expose:Me,inheritAttrs:rt,components:gt,directives:Ue,filters:Mt}=e;if(f&&yr(f,s,null),r)for(const Z in r){const K=r[Z];B(K)&&(s[Z]=K.bind(a))}if(o){const Z=o.call(a,a);se(Z)&&(t.data=Fn(Z))}if(ga=!0,i)for(const Z in i){const K=i[Z],ze=B(K)?K.bind(a,a):B(K.get)?K.get.bind(a,a):$e,ct=!B(K)&&B(K.set)?K.set.bind(a):$e,Be=Ae({get:ze,set:ct});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>Be.value,set:_e=>Be.value=_e})}if(c)for(const Z in c)To(c[Z],s,a,Z);if(d){const Z=B(d)?d.call(a):d;Reflect.ownKeys(Z).forEach(K=>{_n(K,Z[K])})}v&&ss(v,t,"c");function le(Z,K){M(K)?K.forEach(ze=>Z(ze.bind(a))):K&&Z(K.bind(a))}if(le(ir,p),le(rr,g),le(cr,h),le(dr,T),le(ar,I),le(sr,H),le(fr,je),le(pr,ve),le(vr,ie),le(lr,R),le(Co,A),le(ur,it),M(Me))if(Me.length){const Z=t.exposed||(t.exposed={});Me.forEach(K=>{Object.defineProperty(Z,K,{get:()=>a[K],set:ze=>a[K]=ze,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===$e&&(t.render=ee),rt!=null&&(t.inheritAttrs=rt),gt&&(t.components=gt),Ue&&(t.directives=Ue),it&&qo(t)}function yr(t,e,a=$e){M(t)&&(t=ha(t));for(const s in t){const o=t[s];let i;se(o)?"default"in o?i=nt(o.from||s,o.default,!0):i=nt(o.from||s):i=nt(o),ge(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):e[s]=i}}function ss(t,e,a){Ke(M(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,a)}function To(t,e,a,s){let o=s.includes(".")?Bo(a,s):()=>a[s];if(de(t)){const i=e[t];B(i)&&wn(o,i)}else if(B(t))wn(o,t.bind(a));else if(se(t))if(M(t))t.forEach(i=>To(i,e,a,s));else{const i=B(t.handler)?t.handler.bind(a):e[t.handler];B(i)&&wn(o,i,t)}}function Ba(t){const e=t.type,{mixins:a,extends:s}=e,{mixins:o,optionsCache:i,config:{optionMergeStrategies:r}}=t.appContext,c=i.get(e);let d;return c?d=c:!o.length&&!a&&!s?d=e:(d={},o.length&&o.forEach(f=>In(d,f,r,!0)),In(d,e,r)),se(e)&&i.set(e,d),d}function In(t,e,a,s=!1){const{mixins:o,extends:i}=e;i&&In(t,i,a,!0),o&&o.forEach(r=>In(t,r,a,!0));for(const r in e)if(!(s&&r==="expose")){const c=_r[r]||a&&a[r];t[r]=c?c(t[r],e[r]):e[r]}return t}const _r={data:os,props:is,emits:is,methods:Wt,computed:Wt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Wt,directives:Wt,watch:kr,provide:os,inject:wr};function os(t,e){return e?t?function(){return ue(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function wr(t,e){return Wt(ha(t),ha(e))}function ha(t){if(M(t)){const e={};for(let a=0;a<t.length;a++)e[t[a]]=t[a];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function Wt(t,e){return t?ue(Object.create(null),t,e):e}function is(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:ue(Object.create(null),as(t),as(e??{})):e}function kr(t,e){if(!t)return e;if(!e)return t;const a=ue(Object.create(null),t);for(const s in e)a[s]=he(t[s],e[s]);return a}function Do(){return{app:null,config:{isNativeTag:Vs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qr=0;function Sr(t,e){return function(s,o=null){B(s)||(s=ue({},s)),o!=null&&!se(o)&&(o=null);const i=Do(),r=new WeakSet,c=[];let d=!1;const f=i.app={_uid:qr++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:rc,get config(){return i.config},set config(v){},use(v,...p){return r.has(v)||(v&&B(v.install)?(r.add(v),v.install(f,...p)):B(v)&&(r.add(v),v(f,...p))),f},mixin(v){return i.mixins.includes(v)||i.mixins.push(v),f},component(v,p){return p?(i.components[v]=p,f):i.components[v]},directive(v,p){return p?(i.directives[v]=p,f):i.directives[v]},mount(v,p,g){if(!d){const h=f._ceVNode||L(s,o);return h.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(h,v):t(h,v,g),d=!0,f._container=v,v.__vue_app__=f,zn(h.component)}},onUnmount(v){c.push(v)},unmount(){d&&(Ke(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(v,p){return i.provides[v]=p,f},runWithContext(v){const p=At;At=f;try{return v()}finally{At=p}}};return f}}let At=null;function _n(t,e){if(me){let a=me.provides;const s=me.parent&&me.parent.provides;s===a&&(a=me.provides=Object.create(s)),a[t]=e}}function nt(t,e,a=!1){const s=ec();if(s||At){let o=At?At._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&t in o)return o[t];if(arguments.length>1)return a&&B(e)?e.call(s&&s.proxy):e}}const Io={},Ro=()=>Object.create(Io),Po=t=>Object.getPrototypeOf(t)===Io;function Er(t,e,a,s=!1){const o={},i=Ro();t.propsDefaults=Object.create(null),Ao(t,e,o,i);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);a?t.props=s?o:fo(o):t.type.props?t.props=o:t.props=i,t.attrs=i}function Cr(t,e,a,s){const{props:o,attrs:i,vnode:{patchFlag:r}}=t,c=J(o),[d]=t.propsOptions;let f=!1;if((s||r>0)&&!(r&16)){if(r&8){const v=t.vnode.dynamicProps;for(let p=0;p<v.length;p++){let g=v[p];if(Gn(t.emitsOptions,g))continue;const h=e[g];if(d)if(Q(i,g))h!==i[g]&&(i[g]=h,f=!0);else{const T=Re(g);o[T]=ba(d,c,T,h,t,!1)}else h!==i[g]&&(i[g]=h,f=!0)}}}else{Ao(t,e,o,i)&&(f=!0);let v;for(const p in c)(!e||!Q(e,p)&&((v=mt(p))===p||!Q(e,v)))&&(d?a&&(a[p]!==void 0||a[v]!==void 0)&&(o[p]=ba(d,c,p,void 0,t,!0)):delete o[p]);if(i!==c)for(const p in i)(!e||!Q(e,p))&&(delete i[p],f=!0)}f&&Ze(t.attrs,"set","")}function Ao(t,e,a,s){const[o,i]=t.propsOptions;let r=!1,c;if(e)for(let d in e){if(Gt(d))continue;const f=e[d];let v;o&&Q(o,v=Re(d))?!i||!i.includes(v)?a[v]=f:(c||(c={}))[v]=f:Gn(t.emitsOptions,d)||(!(d in s)||f!==s[d])&&(s[d]=f,r=!0)}if(i){const d=J(a),f=c||te;for(let v=0;v<i.length;v++){const p=i[v];a[p]=ba(o,d,p,f[p],t,!Q(f,p))}}return r}function ba(t,e,a,s,o,i){const r=t[a];if(r!=null){const c=Q(r,"default");if(c&&s===void 0){const d=r.default;if(r.type!==Function&&!r.skipFactory&&B(d)){const{propsDefaults:f}=o;if(a in f)s=f[a];else{const v=vn(o);s=f[a]=d.call(null,e),v()}}else s=d;o.ce&&o.ce._setProp(a,s)}r[0]&&(i&&!c?s=!1:r[1]&&(s===""||s===mt(a))&&(s=!0))}return s}const xr=new WeakMap;function $o(t,e,a=!1){const s=a?xr:e.propsCache,o=s.get(t);if(o)return o;const i=t.props,r={},c=[];let d=!1;if(!B(t)){const v=p=>{d=!0;const[g,h]=$o(p,e,!0);ue(r,g),h&&c.push(...h)};!a&&e.mixins.length&&e.mixins.forEach(v),t.extends&&v(t.extends),t.mixins&&t.mixins.forEach(v)}if(!i&&!d)return se(t)&&s.set(t,Dt),Dt;if(M(i))for(let v=0;v<i.length;v++){const p=Re(i[v]);rs(p)&&(r[p]=te)}else if(i)for(const v in i){const p=Re(v);if(rs(p)){const g=i[v],h=r[p]=M(g)||B(g)?{type:g}:ue({},g),T=h.type;let I=!1,H=!0;if(M(T))for(let O=0;O<T.length;++O){const R=T[O],N=B(R)&&R.name;if(N==="Boolean"){I=!0;break}else N==="String"&&(H=!1)}else I=B(T)&&T.name==="Boolean";h[0]=I,h[1]=H,(I||Q(h,"default"))&&c.push(p)}}const f=[r,c];return se(t)&&s.set(t,f),f}function rs(t){return t[0]!=="$"&&!Gt(t)}const Ha=t=>t==="_"||t==="_ctx"||t==="$stable",Fa=t=>M(t)?t.map(We):[We(t)],Tr=(t,e,a)=>{if(e._n)return e;const s=F((...o)=>Fa(e(...o)),a);return s._c=!1,s},Oo=(t,e,a)=>{const s=t._ctx;for(const o in t){if(Ha(o))continue;const i=t[o];if(B(i))e[o]=Tr(o,i,s);else if(i!=null){const r=Fa(i);e[o]=()=>r}}},Lo=(t,e)=>{const a=Fa(e);t.slots.default=()=>a},No=(t,e,a)=>{for(const s in e)(a||!Ha(s))&&(t[s]=e[s])},Dr=(t,e,a)=>{const s=t.slots=Ro();if(t.vnode.shapeFlag&32){const o=e._;o?(No(s,e,a),a&&zs(s,"_",o,!0)):Oo(e,s)}else e&&Lo(t,e)},Ir=(t,e,a)=>{const{vnode:s,slots:o}=t;let i=!0,r=te;if(s.shapeFlag&32){const c=e._;c?a&&c===1?i=!1:No(o,e,a):(i=!e.$stable,Oo(e,o)),r=e}else e&&(Lo(t,e),r={default:1});if(i)for(const c in o)!Ha(c)&&r[c]==null&&delete o[c]},Ee=Wr;function Rr(t){return Pr(t)}function Pr(t,e){const a=Bn();a.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:r,createText:c,createComment:d,setText:f,setElementText:v,parentNode:p,nextSibling:g,setScopeId:h=$e,insertStaticContent:T}=t,I=(l,u,m,_=null,b=null,w=null,E=void 0,S=null,q=!!u.dynamicChildren)=>{if(l===u)return;l&&!Ht(l,u)&&(_=y(l),_e(l,b,w,!0),l=null),u.patchFlag===-2&&(q=!1,u.dynamicChildren=null);const{type:k,ref:j,shapeFlag:x}=u;switch(k){case Kn:H(l,u,m,_);break;case ft:O(l,u,m,_);break;case kn:l==null&&R(u,m,_,E);break;case Xe:gt(l,u,m,_,b,w,E,S,q);break;default:x&1?ee(l,u,m,_,b,w,E,S,q):x&6?Ue(l,u,m,_,b,w,E,S,q):(x&64||x&128)&&k.process(l,u,m,_,b,w,E,S,q,P)}j!=null&&b?Jt(j,l&&l.ref,w,u||l,!u):j==null&&l&&l.ref!=null&&Jt(l.ref,null,w,l,!0)},H=(l,u,m,_)=>{if(l==null)s(u.el=c(u.children),m,_);else{const b=u.el=l.el;u.children!==l.children&&f(b,u.children)}},O=(l,u,m,_)=>{l==null?s(u.el=d(u.children||""),m,_):u.el=l.el},R=(l,u,m,_)=>{[l.el,l.anchor]=T(l.children,u,m,_,l.el,l.anchor)},N=({el:l,anchor:u},m,_)=>{let b;for(;l&&l!==u;)b=g(l),s(l,m,_),l=b;s(u,m,_)},A=({el:l,anchor:u})=>{let m;for(;l&&l!==u;)m=g(l),o(l),l=m;o(u)},ee=(l,u,m,_,b,w,E,S,q)=>{u.type==="svg"?E="svg":u.type==="math"&&(E="mathml"),l==null?ve(u,m,_,b,w,E,S,q):it(l,u,b,w,E,S,q)},ve=(l,u,m,_,b,w,E,S)=>{let q,k;const{props:j,shapeFlag:x,transition:$,dirs:U}=l;if(q=l.el=r(l.type,w,j&&j.is,j),x&8?v(q,l.children):x&16&&je(l.children,q,null,_,b,na(l,w),E,S),U&&ht(l,null,_,"created"),ie(q,l,l.scopeId,E,_),j){for(const ne in j)ne!=="value"&&!Gt(ne)&&i(q,ne,null,j[ne],w,_);"value"in j&&i(q,"value",null,j.value,w),(k=j.onVnodeBeforeMount)&&Fe(k,_,l)}U&&ht(l,null,_,"beforeMount");const W=Ar(b,$);W&&$.beforeEnter(q),s(q,u,m),((k=j&&j.onVnodeMounted)||W||U)&&Ee(()=>{k&&Fe(k,_,l),W&&$.enter(q),U&&ht(l,null,_,"mounted")},b)},ie=(l,u,m,_,b)=>{if(m&&h(l,m),_)for(let w=0;w<_.length;w++)h(l,_[w]);if(b){let w=b.subTree;if(u===w||Fo(w.type)&&(w.ssContent===u||w.ssFallback===u)){const E=b.vnode;ie(l,E,E.scopeId,E.slotScopeIds,b.parent)}}},je=(l,u,m,_,b,w,E,S,q=0)=>{for(let k=q;k<l.length;k++){const j=l[k]=S?ut(l[k]):We(l[k]);I(null,j,u,m,_,b,w,E,S)}},it=(l,u,m,_,b,w,E)=>{const S=u.el=l.el;let{patchFlag:q,dynamicChildren:k,dirs:j}=u;q|=l.patchFlag&16;const x=l.props||te,$=u.props||te;let U;if(m&&bt(m,!1),(U=$.onVnodeBeforeUpdate)&&Fe(U,m,u,l),j&&ht(u,l,m,"beforeUpdate"),m&&bt(m,!0),(x.innerHTML&&$.innerHTML==null||x.textContent&&$.textContent==null)&&v(S,""),k?Me(l.dynamicChildren,k,S,m,_,na(u,b),w):E||K(l,u,S,null,m,_,na(u,b),w,!1),q>0){if(q&16)rt(S,x,$,m,b);else if(q&2&&x.class!==$.class&&i(S,"class",null,$.class,b),q&4&&i(S,"style",x.style,$.style,b),q&8){const W=u.dynamicProps;for(let ne=0;ne<W.length;ne++){const X=W[ne],we=x[X],pe=$[X];(pe!==we||X==="value")&&i(S,X,we,pe,b,m)}}q&1&&l.children!==u.children&&v(S,u.children)}else!E&&k==null&&rt(S,x,$,m,b);((U=$.onVnodeUpdated)||j)&&Ee(()=>{U&&Fe(U,m,u,l),j&&ht(u,l,m,"updated")},_)},Me=(l,u,m,_,b,w,E)=>{for(let S=0;S<u.length;S++){const q=l[S],k=u[S],j=q.el&&(q.type===Xe||!Ht(q,k)||q.shapeFlag&198)?p(q.el):m;I(q,k,j,null,_,b,w,E,!0)}},rt=(l,u,m,_,b)=>{if(u!==m){if(u!==te)for(const w in u)!Gt(w)&&!(w in m)&&i(l,w,u[w],null,b,_);for(const w in m){if(Gt(w))continue;const E=m[w],S=u[w];E!==S&&w!=="value"&&i(l,w,S,E,b,_)}"value"in m&&i(l,"value",u.value,m.value,b)}},gt=(l,u,m,_,b,w,E,S,q)=>{const k=u.el=l?l.el:c(""),j=u.anchor=l?l.anchor:c("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:U}=u;U&&(S=S?S.concat(U):U),l==null?(s(k,m,_),s(j,m,_),je(u.children||[],m,j,b,w,E,S,q)):x>0&&x&64&&$&&l.dynamicChildren?(Me(l.dynamicChildren,$,m,b,w,E,S),(u.key!=null||b&&u===b.subTree)&&jo(l,u,!0)):K(l,u,m,j,b,w,E,S,q)},Ue=(l,u,m,_,b,w,E,S,q)=>{u.slotScopeIds=S,l==null?u.shapeFlag&512?b.ctx.activate(u,m,_,E,q):Mt(u,m,_,b,w,E,q):qt(l,u,q)},Mt=(l,u,m,_,b,w,E)=>{const S=l.component=Zr(l,_,b);if(So(l)&&(S.ctx.renderer=P),tc(S,!1,E),S.asyncDep){if(b&&b.registerDep(S,le,E),!l.el){const q=S.subTree=L(ft);O(null,q,u,m),l.placeholder=q.el}}else le(S,l,u,m,b,w,E)},qt=(l,u,m)=>{const _=u.component=l.component;if(Fr(l,u,m))if(_.asyncDep&&!_.asyncResolved){Z(_,u,m);return}else _.next=u,_.update();else u.el=l.el,_.vnode=u},le=(l,u,m,_,b,w,E)=>{const S=()=>{if(l.isMounted){let{next:x,bu:$,u:U,parent:W,vnode:ne}=l;{const qe=Mo(l);if(qe){x&&(x.el=ne.el,Z(l,x,E)),qe.asyncDep.then(()=>{l.isUnmounted||S()});return}}let X=x,we;bt(l,!1),x?(x.el=ne.el,Z(l,x,E)):x=ne,$&&yn($),(we=x.props&&x.props.onVnodeBeforeUpdate)&&Fe(we,W,x,ne),bt(l,!0);const pe=aa(l),Pe=l.subTree;l.subTree=pe,I(Pe,pe,p(Pe.el),y(Pe),l,b,w),x.el=pe.el,X===null&&Vr(l,pe.el),U&&Ee(U,b),(we=x.props&&x.props.onVnodeUpdated)&&Ee(()=>Fe(we,W,x,ne),b)}else{let x;const{el:$,props:U}=u,{bm:W,m:ne,parent:X,root:we,type:pe}=l,Pe=Qt(u);if(bt(l,!1),W&&yn(W),!Pe&&(x=U&&U.onVnodeBeforeMount)&&Fe(x,X,u),bt(l,!0),$&&oe){const qe=()=>{l.subTree=aa(l),oe($,l.subTree,l,b,null)};Pe&&pe.__asyncHydrate?pe.__asyncHydrate($,l,qe):qe()}else{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(pe);const qe=l.subTree=aa(l);I(null,qe,m,_,l,b,w),u.el=qe.el}if(ne&&Ee(ne,b),!Pe&&(x=U&&U.onVnodeMounted)){const qe=u;Ee(()=>Fe(x,X,qe),b)}(u.shapeFlag&256||X&&Qt(X.vnode)&&X.vnode.shapeFlag&256)&&l.a&&Ee(l.a,b),l.isMounted=!0,u=m=_=null}};l.scope.on();const q=l.effect=new Zs(S);l.scope.off();const k=l.update=q.run.bind(q),j=l.job=q.runIfDirty.bind(q);j.i=l,j.id=l.uid,q.scheduler=()=>Ma(j),bt(l,!0),k()},Z=(l,u,m)=>{u.component=l;const _=l.vnode.props;l.vnode=u,l.next=null,Cr(l,u.props,_,m),Ir(l,u.children,m),at(),es(l),st()},K=(l,u,m,_,b,w,E,S,q=!1)=>{const k=l&&l.children,j=l?l.shapeFlag:0,x=u.children,{patchFlag:$,shapeFlag:U}=u;if($>0){if($&128){ct(k,x,m,_,b,w,E,S,q);return}else if($&256){ze(k,x,m,_,b,w,E,S,q);return}}U&8?(j&16&&Ie(k,b,w),x!==k&&v(m,x)):j&16?U&16?ct(k,x,m,_,b,w,E,S,q):Ie(k,b,w,!0):(j&8&&v(m,""),U&16&&je(x,m,_,b,w,E,S,q))},ze=(l,u,m,_,b,w,E,S,q)=>{l=l||Dt,u=u||Dt;const k=l.length,j=u.length,x=Math.min(k,j);let $;for($=0;$<x;$++){const U=u[$]=q?ut(u[$]):We(u[$]);I(l[$],U,m,null,b,w,E,S,q)}k>j?Ie(l,b,w,!0,!1,x):je(u,m,_,b,w,E,S,q,x)},ct=(l,u,m,_,b,w,E,S,q)=>{let k=0;const j=u.length;let x=l.length-1,$=j-1;for(;k<=x&&k<=$;){const U=l[k],W=u[k]=q?ut(u[k]):We(u[k]);if(Ht(U,W))I(U,W,m,null,b,w,E,S,q);else break;k++}for(;k<=x&&k<=$;){const U=l[x],W=u[$]=q?ut(u[$]):We(u[$]);if(Ht(U,W))I(U,W,m,null,b,w,E,S,q);else break;x--,$--}if(k>x){if(k<=$){const U=$+1,W=U<j?u[U].el:_;for(;k<=$;)I(null,u[k]=q?ut(u[k]):We(u[k]),m,W,b,w,E,S,q),k++}}else if(k>$)for(;k<=x;)_e(l[k],b,w,!0),k++;else{const U=k,W=k,ne=new Map;for(k=W;k<=$;k++){const Se=u[k]=q?ut(u[k]):We(u[k]);Se.key!=null&&ne.set(Se.key,k)}let X,we=0;const pe=$-W+1;let Pe=!1,qe=0;const Ut=new Array(pe);for(k=0;k<pe;k++)Ut[k]=0;for(k=U;k<=x;k++){const Se=l[k];if(we>=pe){_e(Se,b,w,!0);continue}let He;if(Se.key!=null)He=ne.get(Se.key);else for(X=W;X<=$;X++)if(Ut[X-W]===0&&Ht(Se,u[X])){He=X;break}He===void 0?_e(Se,b,w,!0):(Ut[He-W]=k+1,He>=qe?qe=He:Pe=!0,I(Se,u[He],m,null,b,w,E,S,q),we++)}const Ka=Pe?$r(Ut):Dt;for(X=Ka.length-1,k=pe-1;k>=0;k--){const Se=W+k,He=u[Se],za=u[Se+1],Ya=Se+1<j?za.el||za.placeholder:_;Ut[k]===0?I(null,He,m,Ya,b,w,E,S,q):Pe&&(X<0||k!==Ka[X]?Be(He,m,Ya,2):X--)}}},Be=(l,u,m,_,b=null)=>{const{el:w,type:E,transition:S,children:q,shapeFlag:k}=l;if(k&6){Be(l.component.subTree,u,m,_);return}if(k&128){l.suspense.move(u,m,_);return}if(k&64){E.move(l,u,m,P);return}if(E===Xe){s(w,u,m);for(let x=0;x<q.length;x++)Be(q[x],u,m,_);s(l.anchor,u,m);return}if(E===kn){N(l,u,m);return}if(_!==2&&k&1&&S)if(_===0)S.beforeEnter(w),s(w,u,m),Ee(()=>S.enter(w),b);else{const{leave:x,delayLeave:$,afterLeave:U}=S,W=()=>{l.ctx.isUnmounted?o(w):s(w,u,m)},ne=()=>{w._isLeaving&&w[nr](!0),x(w,()=>{W(),U&&U()})};$?$(w,W,ne):ne()}else s(w,u,m)},_e=(l,u,m,_=!1,b=!1)=>{const{type:w,props:E,ref:S,children:q,dynamicChildren:k,shapeFlag:j,patchFlag:x,dirs:$,cacheIndex:U}=l;if(x===-2&&(b=!1),S!=null&&(at(),Jt(S,null,m,l,!0),st()),U!=null&&(u.renderCache[U]=void 0),j&256){u.ctx.deactivate(l);return}const W=j&1&&$,ne=!Qt(l);let X;if(ne&&(X=E&&E.onVnodeBeforeUnmount)&&Fe(X,u,l),j&6)pn(l.component,m,_);else{if(j&128){l.suspense.unmount(m,_);return}W&&ht(l,null,u,"beforeUnmount"),j&64?l.type.remove(l,u,m,P,_):k&&!k.hasOnce&&(w!==Xe||x>0&&x&64)?Ie(k,u,m,!1,!0):(w===Xe&&x&384||!b&&j&16)&&Ie(q,u,m),_&&St(l)}(ne&&(X=E&&E.onVnodeUnmounted)||W)&&Ee(()=>{X&&Fe(X,u,l),W&&ht(l,null,u,"unmounted")},m)},St=l=>{const{type:u,el:m,anchor:_,transition:b}=l;if(u===Xe){Et(m,_);return}if(u===kn){A(l);return}const w=()=>{o(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:E,delayLeave:S}=b,q=()=>E(m,w);S?S(l.el,w,q):q()}else w()},Et=(l,u)=>{let m;for(;l!==u;)m=g(l),o(l),l=m;o(u)},pn=(l,u,m)=>{const{bum:_,scope:b,job:w,subTree:E,um:S,m:q,a:k}=l;cs(q),cs(k),_&&yn(_),b.stop(),w&&(w.flags|=8,_e(E,l,u,m)),S&&Ee(S,u),Ee(()=>{l.isUnmounted=!0},u)},Ie=(l,u,m,_=!1,b=!1,w=0)=>{for(let E=w;E<l.length;E++)_e(l[E],u,m,_,b)},y=l=>{if(l.shapeFlag&6)return y(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=g(l.anchor||l.el),m=u&&u[er];return m?g(m):u};let D=!1;const C=(l,u,m)=>{l==null?u._vnode&&_e(u._vnode,null,null,!0):I(u._vnode||null,l,u,null,null,null,m),u._vnode=l,D||(D=!0,es(),yo(),D=!1)},P={p:I,um:_e,m:Be,r:St,mt:Mt,mc:je,pc:K,pbc:Me,n:y,o:t};let z,oe;return e&&([z,oe]=e(P)),{render:C,hydrate:z,createApp:Sr(C,z)}}function na({type:t,props:e},a){return a==="svg"&&t==="foreignObject"||a==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:a}function bt({effect:t,job:e},a){a?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ar(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jo(t,e,a=!1){const s=t.children,o=e.children;if(M(s)&&M(o))for(let i=0;i<s.length;i++){const r=s[i];let c=o[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[i]=ut(o[i]),c.el=r.el),!a&&c.patchFlag!==-2&&jo(r,c)),c.type===Kn&&c.patchFlag!==-1&&(c.el=r.el),c.type===ft&&!c.el&&(c.el=r.el)}}function $r(t){const e=t.slice(),a=[0];let s,o,i,r,c;const d=t.length;for(s=0;s<d;s++){const f=t[s];if(f!==0){if(o=a[a.length-1],t[o]<f){e[s]=o,a.push(s);continue}for(i=0,r=a.length-1;i<r;)c=i+r>>1,t[a[c]]<f?i=c+1:r=c;f<t[a[i]]&&(i>0&&(e[s]=a[i-1]),a[i]=s)}}for(i=a.length,r=a[i-1];i-- >0;)a[i]=r,r=e[r];return a}function Mo(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mo(e)}function cs(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Or=Symbol.for("v-scx"),Lr=()=>nt(Or);function wn(t,e,a){return Uo(t,e,a)}function Uo(t,e,a=te){const{immediate:s,deep:o,flush:i,once:r}=a,c=ue({},a),d=e&&s||!e&&i!=="post";let f;if(rn){if(i==="sync"){const h=Lr();f=h.__watcherHandles||(h.__watcherHandles=[])}else if(!d){const h=()=>{};return h.stop=$e,h.resume=$e,h.pause=$e,h}}const v=me;c.call=(h,T,I)=>Ke(h,v,T,I);let p=!1;i==="post"?c.scheduler=h=>{Ee(h,v&&v.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(h,T)=>{T?h():Ma(h)}),c.augmentJob=h=>{e&&(h.flags|=4),p&&(h.flags|=2,v&&(h.id=v.uid,h.i=v))};const g=Ji(t,e,c);return rn&&(f?f.push(g):d&&g()),g}function Nr(t,e,a){const s=this.proxy,o=de(t)?t.includes(".")?Bo(s,t):()=>s[t]:t.bind(s,s);let i;B(e)?i=e:(i=e.handler,a=e);const r=vn(this),c=Uo(o,i.bind(s),a);return r(),c}function Bo(t,e){const a=e.split(".");return()=>{let s=t;for(let o=0;o<a.length&&s;o++)s=s[a[o]];return s}}const jr=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Re(e)}Modifiers`]||t[`${mt(e)}Modifiers`];function Mr(t,e,...a){if(t.isUnmounted)return;const s=t.vnode.props||te;let o=a;const i=e.startsWith("update:"),r=i&&jr(s,e.slice(7));r&&(r.trim&&(o=a.map(v=>de(v)?v.trim():v)),r.number&&(o=a.map(En)));let c,d=s[c=Jn(e)]||s[c=Jn(Re(e))];!d&&i&&(d=s[c=Jn(mt(e))]),d&&Ke(d,t,6,o);const f=s[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ke(f,t,6,o)}}const Ur=new WeakMap;function Ho(t,e,a=!1){const s=a?Ur:e.emitsCache,o=s.get(t);if(o!==void 0)return o;const i=t.emits;let r={},c=!1;if(!B(t)){const d=f=>{const v=Ho(f,e,!0);v&&(c=!0,ue(r,v))};!a&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}return!i&&!c?(se(t)&&s.set(t,null),null):(M(i)?i.forEach(d=>r[d]=null):ue(r,i),se(t)&&s.set(t,r),r)}function Gn(t,e){return!t||!Nn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,mt(e))||Q(t,e))}function aa(t){const{type:e,vnode:a,proxy:s,withProxy:o,propsOptions:[i],slots:r,attrs:c,emit:d,render:f,renderCache:v,props:p,data:g,setupState:h,ctx:T,inheritAttrs:I}=t,H=Tn(t);let O,R;try{if(a.shapeFlag&4){const A=o||s,ee=A;O=We(f.call(ee,A,v,p,h,g,T)),R=c}else{const A=e;O=We(A.length>1?A(p,{attrs:c,slots:r,emit:d}):A(p,null)),R=e.props?c:Br(c)}}catch(A){Zt.length=0,Vn(A,t,1),O=L(ft)}let N=O;if(R&&I!==!1){const A=Object.keys(R),{shapeFlag:ee}=N;A.length&&ee&7&&(i&&A.some(Ea)&&(R=Hr(R,i)),N=Lt(N,R,!1,!0))}return a.dirs&&(N=Lt(N,null,!1,!0),N.dirs=N.dirs?N.dirs.concat(a.dirs):a.dirs),a.transition&&Ua(N,a.transition),O=N,Tn(H),O}const Br=t=>{let e;for(const a in t)(a==="class"||a==="style"||Nn(a))&&((e||(e={}))[a]=t[a]);return e},Hr=(t,e)=>{const a={};for(const s in t)(!Ea(s)||!(s.slice(9)in e))&&(a[s]=t[s]);return a};function Fr(t,e,a){const{props:s,children:o,component:i}=t,{props:r,children:c,patchFlag:d}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&d>=0){if(d&1024)return!0;if(d&16)return s?ds(s,r,f):!!r;if(d&8){const v=e.dynamicProps;for(let p=0;p<v.length;p++){const g=v[p];if(r[g]!==s[g]&&!Gn(f,g))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:s===r?!1:s?r?ds(s,r,f):!0:!!r;return!1}function ds(t,e,a){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(e[i]!==t[i]&&!Gn(a,i))return!0}return!1}function Vr({vnode:t,parent:e},a){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=a,e=e.parent;else break}}const Fo=t=>t.__isSuspense;function Wr(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):Zi(t)}const Xe=Symbol.for("v-fgt"),Kn=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),kn=Symbol.for("v-stc"),Zt=[];let xe=null;function re(t=!1){Zt.push(xe=t?null:[])}function Gr(){Zt.pop(),xe=Zt[Zt.length-1]||null}let on=1;function Rn(t,e=!1){on+=t,t<0&&xe&&e&&(xe.hasOnce=!0)}function Vo(t){return t.dynamicChildren=on>0?xe||Dt:null,Gr(),on>0&&xe&&xe.push(t),t}function ce(t,e,a,s,o,i){return Vo(n(t,e,a,s,o,i,!0))}function Kr(t,e,a,s,o){return Vo(L(t,e,a,s,o,!0))}function Pn(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}const Wo=({key:t})=>t??null,qn=({ref:t,ref_key:e,ref_for:a})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||ge(t)||B(t)?{i:Ce,r:t,k:e,f:!!a}:t:null);function n(t,e=null,a=null,s=0,o=null,i=t===Xe?0:1,r=!1,c=!1){const d={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wo(e),ref:e&&qn(e),scopeId:wo,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ce};return c?(Va(d,a),i&128&&t.normalize(d)):a&&(d.shapeFlag|=de(a)?8:16),on>0&&!r&&xe&&(d.patchFlag>0||i&6)&&d.patchFlag!==32&&xe.push(d),d}const L=zr;function zr(t,e=null,a=null,s=0,o=null,i=!1){if((!t||t===mr)&&(t=ft),Pn(t)){const c=Lt(t,e,!0);return a&&Va(c,a),on>0&&!i&&xe&&(c.shapeFlag&6?xe[xe.indexOf(t)]=c:xe.push(c)),c.patchFlag=-2,c}if(ic(t)&&(t=t.__vccOpts),e){e=Yr(e);let{class:c,style:d}=e;c&&!de(c)&&(e.class=Da(c)),se(d)&&(Na(d)&&!M(d)&&(d=ue({},d)),e.style=Ta(d))}const r=de(t)?1:Fo(t)?128:tr(t)?64:se(t)?4:B(t)?2:0;return n(t,e,a,s,o,r,i,!0)}function Yr(t){return t?Na(t)||Po(t)?ue({},t):t:null}function Lt(t,e,a=!1,s=!1){const{props:o,ref:i,patchFlag:r,children:c,transition:d}=t,f=e?Jr(o||{},e):o,v={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Wo(f),ref:e&&e.ref?a&&i?M(i)?i.concat(qn(e)):[i,qn(e)]:qn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:d,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lt(t.ssContent),ssFallback:t.ssFallback&&Lt(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return d&&s&&Ua(v,d.clone(v)),v}function V(t=" ",e=0){return L(Kn,null,t,e)}function G(t,e){const a=L(kn,null,t);return a.staticCount=e,a}function $t(t="",e=!1){return e?(re(),Kr(ft,null,t)):L(ft,null,t)}function We(t){return t==null||typeof t=="boolean"?L(ft):M(t)?L(Xe,null,t.slice()):Pn(t)?ut(t):L(Kn,null,String(t))}function ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lt(t)}function Va(t,e){let a=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(M(e))a=16;else if(typeof e=="object")if(s&65){const o=e.default;o&&(o._c&&(o._d=!1),Va(t,o()),o._c&&(o._d=!0));return}else{a=32;const o=e._;!o&&!Po(e)?e._ctx=Ce:o===3&&Ce&&(Ce.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ce},a=32):(e=String(e),s&64?(a=16,e=[V(e)]):a=8);t.children=e,t.shapeFlag|=a}function Jr(...t){const e={};for(let a=0;a<t.length;a++){const s=t[a];for(const o in s)if(o==="class")e.class!==s.class&&(e.class=Da([e.class,s.class]));else if(o==="style")e.style=Ta([e.style,s.style]);else if(Nn(o)){const i=e[o],r=s[o];r&&i!==r&&!(M(i)&&i.includes(r))&&(e[o]=i?[].concat(i,r):r)}else o!==""&&(e[o]=s[o])}return e}function Fe(t,e,a,s=null){Ke(t,e,7,[a,s])}const Qr=Do();let Xr=0;function Zr(t,e,a){const s=t.type,o=(e?e.appContext:t.appContext)||Qr,i={uid:Xr++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ki(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$o(s,o),emitsOptions:Ho(s,o),emit:null,emitted:null,propsDefaults:te,inheritAttrs:s.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mr.bind(null,i),t.ce&&t.ce(i),i}let me=null;const ec=()=>me||Ce;let An,ya;{const t=Bn(),e=(a,s)=>{let o;return(o=t[a])||(o=t[a]=[]),o.push(s),i=>{o.length>1?o.forEach(r=>r(i)):o[0](i)}};An=e("__VUE_INSTANCE_SETTERS__",a=>me=a),ya=e("__VUE_SSR_SETTERS__",a=>rn=a)}const vn=t=>{const e=me;return An(t),t.scope.on(),()=>{t.scope.off(),An(e)}},ls=()=>{me&&me.scope.off(),An(null)};function Go(t){return t.vnode.shapeFlag&4}let rn=!1;function tc(t,e=!1,a=!1){e&&ya(e);const{props:s,children:o}=t.vnode,i=Go(t);Er(t,s,i,e),Dr(t,o,a||e);const r=i?nc(t,e):void 0;return e&&ya(!1),r}function nc(t,e){const a=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hr);const{setup:s}=a;if(s){at();const o=t.setupContext=s.length>1?sc(t):null,i=vn(t),r=un(s,t,0,[t.props,o]),c=Ws(r);if(st(),i(),(c||t.sp)&&!Qt(t)&&qo(t),c){if(r.then(ls,ls),e)return r.then(d=>{us(t,d,e)}).catch(d=>{Vn(d,t,0)});t.asyncDep=r}else us(t,r,e)}else Ko(t,e)}function us(t,e,a){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=go(e)),Ko(t,a)}let vs;function Ko(t,e,a){const s=t.type;if(!t.render){if(!e&&vs&&!s.render){const o=s.template||Ba(t).template;if(o){const{isCustomElement:i,compilerOptions:r}=t.appContext.config,{delimiters:c,compilerOptions:d}=s,f=ue(ue({isCustomElement:i,delimiters:c},r),d);s.render=vs(o,f)}}t.render=s.render||$e}{const o=vn(t);at();try{br(t)}finally{st(),o()}}}const ac={get(t,e){return fe(t,"get",""),t[e]}};function sc(t){const e=a=>{t.exposed=a||{}};return{attrs:new Proxy(t.attrs,ac),slots:t.slots,emit:t.emit,expose:e}}function zn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(go(Hi(t.exposed)),{get(e,a){if(a in e)return e[a];if(a in Xt)return Xt[a](t)},has(e,a){return a in e||a in Xt}})):t.proxy}function oc(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function ic(t){return B(t)&&"__vccOpts"in t}const Ae=(t,e)=>zi(t,e,rn);function zo(t,e,a){try{Rn(-1);const s=arguments.length;return s===2?se(e)&&!M(e)?Pn(e)?L(t,null,[e]):L(t,e):L(t,null,e):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&Pn(a)&&(a=[a]),L(t,e,a))}finally{Rn(1)}}const rc="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _a;const ps=typeof window<"u"&&window.trustedTypes;if(ps)try{_a=ps.createPolicy("vue",{createHTML:t=>t})}catch{}const Yo=_a?t=>_a.createHTML(t):t=>t,cc="http://www.w3.org/2000/svg",dc="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,fs=Qe&&Qe.createElement("template"),lc={insert:(t,e,a)=>{e.insertBefore(t,a||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,a,s)=>{const o=e==="svg"?Qe.createElementNS(cc,t):e==="mathml"?Qe.createElementNS(dc,t):a?Qe.createElement(t,{is:a}):Qe.createElement(t);return t==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:t=>Qe.createTextNode(t),createComment:t=>Qe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,a,s,o,i){const r=a?a.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),a),!(o===i||!(o=o.nextSibling)););else{fs.innerHTML=Yo(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=fs.content;if(s==="svg"||s==="mathml"){const d=c.firstChild;for(;d.firstChild;)c.appendChild(d.firstChild);c.removeChild(d)}e.insertBefore(c,a)}return[r?r.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},uc=Symbol("_vtc");function vc(t,e,a){const s=t[uc];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):a?t.setAttribute("class",e):t.className=e}const $n=Symbol("_vod"),Jo=Symbol("_vsh"),hn={name:"show",beforeMount(t,{value:e},{transition:a}){t[$n]=t.style.display==="none"?"":t.style.display,a&&e?a.beforeEnter(t):Ft(t,e)},mounted(t,{value:e},{transition:a}){a&&e&&a.enter(t)},updated(t,{value:e,oldValue:a},{transition:s}){!e!=!a&&(s?e?(s.beforeEnter(t),Ft(t,!0),s.enter(t)):s.leave(t,()=>{Ft(t,!1)}):Ft(t,e))},beforeUnmount(t,{value:e}){Ft(t,e)}};function Ft(t,e){t.style.display=e?t[$n]:"none",t[Jo]=!e}const pc=Symbol(""),fc=/(?:^|;)\s*display\s*:/;function mc(t,e,a){const s=t.style,o=de(a);let i=!1;if(a&&!o){if(e)if(de(e))for(const r of e.split(";")){const c=r.slice(0,r.indexOf(":")).trim();a[c]==null&&Sn(s,c,"")}else for(const r in e)a[r]==null&&Sn(s,r,"");for(const r in a)r==="display"&&(i=!0),Sn(s,r,a[r])}else if(o){if(e!==a){const r=s[pc];r&&(a+=";"+r),s.cssText=a,i=fc.test(a)}}else e&&t.removeAttribute("style");$n in t&&(t[$n]=i?s.display:"",t[Jo]&&(s.display="none"))}const ms=/\s*!important$/;function Sn(t,e,a){if(M(a))a.forEach(s=>Sn(t,e,s));else if(a==null&&(a=""),e.startsWith("--"))t.setProperty(e,a);else{const s=gc(t,e);ms.test(a)?t.setProperty(mt(s),a.replace(ms,""),"important"):t[s]=a}}const gs=["Webkit","Moz","ms"],sa={};function gc(t,e){const a=sa[e];if(a)return a;let s=Re(e);if(s!=="filter"&&s in t)return sa[e]=s;s=Un(s);for(let o=0;o<gs.length;o++){const i=gs[o]+s;if(i in t)return sa[e]=i}return e}const hs="http://www.w3.org/1999/xlink";function bs(t,e,a,s,o,i=yi(e)){s&&e.startsWith("xlink:")?a==null?t.removeAttributeNS(hs,e.slice(6,e.length)):t.setAttributeNS(hs,e,a):a==null||i&&!Ys(a)?t.removeAttribute(e):t.setAttribute(e,i?"":Ge(a)?String(a):a)}function ys(t,e,a,s,o){if(e==="innerHTML"||e==="textContent"){a!=null&&(t[e]=e==="innerHTML"?Yo(a):a);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,d=a==null?t.type==="checkbox"?"on":"":String(a);(c!==d||!("_value"in t))&&(t.value=d),a==null&&t.removeAttribute(e),t._value=a;return}let r=!1;if(a===""||a==null){const c=typeof t[e];c==="boolean"?a=Ys(a):a==null&&c==="string"?(a="",r=!0):c==="number"&&(a=0,r=!0)}try{t[e]=a}catch{}r&&t.removeAttribute(o||e)}function _t(t,e,a,s){t.addEventListener(e,a,s)}function hc(t,e,a,s){t.removeEventListener(e,a,s)}const _s=Symbol("_vei");function bc(t,e,a,s,o=null){const i=t[_s]||(t[_s]={}),r=i[e];if(s&&r)r.value=s;else{const[c,d]=yc(e);if(s){const f=i[e]=kc(s,o);_t(t,c,f,d)}else r&&(hc(t,c,r,d),i[e]=void 0)}}const ws=/(?:Once|Passive|Capture)$/;function yc(t){let e;if(ws.test(t)){e={};let s;for(;s=t.match(ws);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mt(t.slice(2)),e]}let oa=0;const _c=Promise.resolve(),wc=()=>oa||(_c.then(()=>oa=0),oa=Date.now());function kc(t,e){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;Ke(qc(s,a.value),e,5,[s])};return a.value=t,a.attached=wc(),a}function qc(t,e){if(M(e)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},e.map(s=>o=>!o._stopped&&s&&s(o))}else return e}const ks=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sc=(t,e,a,s,o,i)=>{const r=o==="svg";e==="class"?vc(t,s,r):e==="style"?mc(t,a,s):Nn(e)?Ea(e)||bc(t,e,a,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ec(t,e,s,r))?(ys(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bs(t,e,s,r,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(s))?ys(t,Re(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bs(t,e,s,r))};function Ec(t,e,a,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ks(e)&&B(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const o=t.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ks(e)&&de(a)?!1:e in t}const On=t=>{const e=t.props["onUpdate:modelValue"]||!1;return M(e)?a=>yn(e,a):e};function Cc(t){t.target.composing=!0}function qs(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ot=Symbol("_assign"),bn={created(t,{modifiers:{lazy:e,trim:a,number:s}},o){t[Ot]=On(o);const i=s||o.props&&o.props.type==="number";_t(t,e?"change":"input",r=>{if(r.target.composing)return;let c=t.value;a&&(c=c.trim()),i&&(c=En(c)),t[Ot](c)}),a&&_t(t,"change",()=>{t.value=t.value.trim()}),e||(_t(t,"compositionstart",Cc),_t(t,"compositionend",qs),_t(t,"change",qs))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:a,modifiers:{lazy:s,trim:o,number:i}},r){if(t[Ot]=On(r),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?En(t.value):t.value,d=e??"";c!==d&&(document.activeElement===t&&t.type!=="range"&&(s&&e===a||o&&t.value.trim()===d)||(t.value=d))}},xc={deep:!0,created(t,{value:e,modifiers:{number:a}},s){const o=jn(e);_t(t,"change",()=>{const i=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>a?En(Ln(r)):Ln(r));t[Ot](t.multiple?o?new Set(i):i:i[0]),t._assigning=!0,ja(()=>{t._assigning=!1})}),t[Ot]=On(s)},mounted(t,{value:e}){Ss(t,e)},beforeUpdate(t,e,a){t[Ot]=On(a)},updated(t,{value:e}){t._assigning||Ss(t,e)}};function Ss(t,e){const a=t.multiple,s=M(e);if(!(a&&!s&&!jn(e))){for(let o=0,i=t.options.length;o<i;o++){const r=t.options[o],c=Ln(r);if(a)if(s){const d=typeof c;d==="string"||d==="number"?r.selected=e.some(f=>String(f)===String(c)):r.selected=wi(e,c)>-1}else r.selected=e.has(c);else if(Hn(Ln(r),e)){t.selectedIndex!==o&&(t.selectedIndex=o);return}}!a&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ln(t){return"_value"in t?t._value:t.value}const Tc=["ctrl","shift","alt","meta"],Dc={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tc.some(a=>t[`${a}Key`]&&!e.includes(a))},Es=(t,e)=>{const a=t._withMods||(t._withMods={}),s=e.join(".");return a[s]||(a[s]=(o,...i)=>{for(let r=0;r<e.length;r++){const c=Dc[e[r]];if(c&&c(o,e))return}return t(o,...i)})},Ic={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rc=(t,e)=>{const a=t._withKeys||(t._withKeys={}),s=e.join(".");return a[s]||(a[s]=o=>{if(!("key"in o))return;const i=mt(o.key);if(e.some(r=>r===i||Ic[r]===i))return t(o)})},Pc=ue({patchProp:Sc},lc);let Cs;function Ac(){return Cs||(Cs=Rr(Pc))}const $c=(...t)=>{const e=Ac().createApp(...t),{mount:a}=e;return e.mount=s=>{const o=Lc(s);if(!o)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const r=a(o,!1,Oc(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},e};function Oc(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lc(t){return de(t)?document.querySelector(t):t}const De=(t,e)=>{const a=t.__vccOpts||t;for(const[s,o]of e)a[s]=o;return a},Nc={name:"App"},jc={id:"app"};function Mc(t,e,a,s,o,i){const r=Te("router-view");return re(),ce("div",jc,[L(r)])}const Uc=De(Nc,[["render",Mc]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Tt=typeof document<"u";function Qo(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bc(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Qo(t.default)}const Y=Object.assign;function ia(t,e){const a={};for(const s in e){const o=e[s];a[s]=Ne(o)?o.map(t):t(o)}return a}const en=()=>{},Ne=Array.isArray,Xo=/#/g,Hc=/&/g,Fc=/\//g,Vc=/=/g,Wc=/\?/g,Zo=/\+/g,Gc=/%5B/g,Kc=/%5D/g,ei=/%5E/g,zc=/%60/g,ti=/%7B/g,Yc=/%7C/g,ni=/%7D/g,Jc=/%20/g;function Wa(t){return encodeURI(""+t).replace(Yc,"|").replace(Gc,"[").replace(Kc,"]")}function Qc(t){return Wa(t).replace(ti,"{").replace(ni,"}").replace(ei,"^")}function wa(t){return Wa(t).replace(Zo,"%2B").replace(Jc,"+").replace(Xo,"%23").replace(Hc,"%26").replace(zc,"`").replace(ti,"{").replace(ni,"}").replace(ei,"^")}function Xc(t){return wa(t).replace(Vc,"%3D")}function Zc(t){return Wa(t).replace(Xo,"%23").replace(Wc,"%3F")}function ed(t){return t==null?"":Zc(t).replace(Fc,"%2F")}function cn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const td=/\/$/,nd=t=>t.replace(td,"");function ra(t,e,a="/"){let s,o={},i="",r="";const c=e.indexOf("#");let d=e.indexOf("?");return c<d&&c>=0&&(d=-1),d>-1&&(s=e.slice(0,d),i=e.slice(d+1,c>-1?c:e.length),o=t(i)),c>-1&&(s=s||e.slice(0,c),r=e.slice(c,e.length)),s=id(s??e,a),{fullPath:s+(i&&"?")+i+r,path:s,query:o,hash:cn(r)}}function ad(t,e){const a=e.query?t(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function xs(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sd(t,e,a){const s=e.matched.length-1,o=a.matched.length-1;return s>-1&&s===o&&Nt(e.matched[s],a.matched[o])&&ai(e.params,a.params)&&t(e.query)===t(a.query)&&e.hash===a.hash}function Nt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ai(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const a in t)if(!od(t[a],e[a]))return!1;return!0}function od(t,e){return Ne(t)?Ts(t,e):Ne(e)?Ts(e,t):t===e}function Ts(t,e){return Ne(e)?t.length===e.length&&t.every((a,s)=>a===e[s]):t.length===1&&t[0]===e}function id(t,e){if(t.startsWith("/"))return t;if(!t)return e;const a=e.split("/"),s=t.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let i=a.length-1,r,c;for(r=0;r<s.length;r++)if(c=s[r],c!==".")if(c==="..")i>1&&i--;else break;return a.slice(0,i).join("/")+"/"+s.slice(r).join("/")}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var dn;(function(t){t.pop="pop",t.push="push"})(dn||(dn={}));var tn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(tn||(tn={}));function rd(t){if(!t)if(Tt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nd(t)}const cd=/^[^#]+#/;function dd(t,e){return t.replace(cd,"#")+e}function ld(t,e){const a=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-a.left-(e.left||0),top:s.top-a.top-(e.top||0)}}const Yn=()=>({left:window.scrollX,top:window.scrollY});function ud(t){let e;if("el"in t){const a=t.el,s=typeof a=="string"&&a.startsWith("#"),o=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!o)return;e=ld(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ds(t,e){return(history.state?history.state.position-e:-1)+t}const ka=new Map;function vd(t,e){ka.set(t,e)}function pd(t){const e=ka.get(t);return ka.delete(t),e}let fd=()=>location.protocol+"//"+location.host;function si(t,e){const{pathname:a,search:s,hash:o}=e,i=t.indexOf("#");if(i>-1){let c=o.includes(t.slice(i))?t.slice(i).length:1,d=o.slice(c);return d[0]!=="/"&&(d="/"+d),xs(d,"")}return xs(a,t)+s+o}function md(t,e,a,s){let o=[],i=[],r=null;const c=({state:g})=>{const h=si(t,location),T=a.value,I=e.value;let H=0;if(g){if(a.value=h,e.value=g,r&&r===T){r=null;return}H=I?g.position-I.position:0}else s(h);o.forEach(O=>{O(a.value,T,{delta:H,type:dn.pop,direction:H?H>0?tn.forward:tn.back:tn.unknown})})};function d(){r=a.value}function f(g){o.push(g);const h=()=>{const T=o.indexOf(g);T>-1&&o.splice(T,1)};return i.push(h),h}function v(){const{history:g}=window;g.state&&g.replaceState(Y({},g.state,{scroll:Yn()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",v,{passive:!0}),{pauseListeners:d,listen:f,destroy:p}}function Is(t,e,a,s=!1,o=!1){return{back:t,current:e,forward:a,replaced:s,position:window.history.length,scroll:o?Yn():null}}function gd(t){const{history:e,location:a}=window,s={value:si(t,a)},o={value:e.state};o.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(d,f,v){const p=t.indexOf("#"),g=p>-1?(a.host&&document.querySelector("base")?t:t.slice(p))+d:fd()+t+d;try{e[v?"replaceState":"pushState"](f,"",g),o.value=f}catch(h){console.error(h),a[v?"replace":"assign"](g)}}function r(d,f){const v=Y({},e.state,Is(o.value.back,d,o.value.forward,!0),f,{position:o.value.position});i(d,v,!0),s.value=d}function c(d,f){const v=Y({},o.value,e.state,{forward:d,scroll:Yn()});i(v.current,v,!0);const p=Y({},Is(s.value,d,null),{position:v.position+1},f);i(d,p,!1),s.value=d}return{location:s,state:o,push:c,replace:r}}function hd(t){t=rd(t);const e=gd(t),a=md(t,e.state,e.location,e.replace);function s(i,r=!0){r||a.pauseListeners(),history.go(i)}const o=Y({location:"",base:t,go:s,createHref:dd.bind(null,t)},e,a);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function bd(t){return typeof t=="string"||t&&typeof t=="object"}function oi(t){return typeof t=="string"||typeof t=="symbol"}const ii=Symbol("");var Rs;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rs||(Rs={}));function jt(t,e){return Y(new Error,{type:t,[ii]:!0},e)}function Je(t,e){return t instanceof Error&&ii in t&&(e==null||!!(t.type&e))}const Ps="[^/]+?",yd={sensitive:!1,strict:!1,start:!0,end:!0},_d=/[.+*?^${}()[\]/\\]/g;function wd(t,e){const a=Y({},yd,e),s=[];let o=a.start?"^":"";const i=[];for(const f of t){const v=f.length?[]:[90];a.strict&&!f.length&&(o+="/");for(let p=0;p<f.length;p++){const g=f[p];let h=40+(a.sensitive?.25:0);if(g.type===0)p||(o+="/"),o+=g.value.replace(_d,"\\$&"),h+=40;else if(g.type===1){const{value:T,repeatable:I,optional:H,regexp:O}=g;i.push({name:T,repeatable:I,optional:H});const R=O||Ps;if(R!==Ps){h+=10;try{new RegExp(`(${R})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${T}" (${R}): `+A.message)}}let N=I?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;p||(N=H&&f.length<2?`(?:/${N})`:"/"+N),H&&(N+="?"),o+=N,h+=20,H&&(h+=-8),I&&(h+=-20),R===".*"&&(h+=-50)}v.push(h)}s.push(v)}if(a.strict&&a.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}a.strict||(o+="/?"),a.end?o+="$":a.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const r=new RegExp(o,a.sensitive?"":"i");function c(f){const v=f.match(r),p={};if(!v)return null;for(let g=1;g<v.length;g++){const h=v[g]||"",T=i[g-1];p[T.name]=h&&T.repeatable?h.split("/"):h}return p}function d(f){let v="",p=!1;for(const g of t){(!p||!v.endsWith("/"))&&(v+="/"),p=!1;for(const h of g)if(h.type===0)v+=h.value;else if(h.type===1){const{value:T,repeatable:I,optional:H}=h,O=T in f?f[T]:"";if(Ne(O)&&!I)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const R=Ne(O)?O.join("/"):O;if(!R)if(H)g.length<2&&(v.endsWith("/")?v=v.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);v+=R}}return v||"/"}return{re:r,score:s,keys:i,parse:c,stringify:d}}function kd(t,e){let a=0;for(;a<t.length&&a<e.length;){const s=e[a]-t[a];if(s)return s;a++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ri(t,e){let a=0;const s=t.score,o=e.score;for(;a<s.length&&a<o.length;){const i=kd(s[a],o[a]);if(i)return i;a++}if(Math.abs(o.length-s.length)===1){if(As(s))return 1;if(As(o))return-1}return o.length-s.length}function As(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qd={type:0,value:""},Sd=/[a-zA-Z0-9_]/;function Ed(t){if(!t)return[[]];if(t==="/")return[[qd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${a})/"${f}": ${h}`)}let a=0,s=a;const o=[];let i;function r(){i&&o.push(i),i=[]}let c=0,d,f="",v="";function p(){f&&(a===0?i.push({type:0,value:f}):a===1||a===2||a===3?(i.length>1&&(d==="*"||d==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:v,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):e("Invalid state to consume buffer"),f="")}function g(){f+=d}for(;c<t.length;){if(d=t[c++],d==="\\"&&a!==2){s=a,a=4;continue}switch(a){case 0:d==="/"?(f&&p(),r()):d===":"?(p(),a=1):g();break;case 4:g(),a=s;break;case 1:d==="("?a=2:Sd.test(d)?g():(p(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&c--);break;case 2:d===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+d:a=3:v+=d;break;case 3:p(),a=0,d!=="*"&&d!=="?"&&d!=="+"&&c--,v="";break;default:e("Unknown state");break}}return a===2&&e(`Unfinished custom RegExp for param "${f}"`),p(),r(),o}function Cd(t,e,a){const s=wd(Ed(t.path),a),o=Y(s,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function xd(t,e){const a=[],s=new Map;e=Ns({strict:!1,end:!0,sensitive:!1},e);function o(p){return s.get(p)}function i(p,g,h){const T=!h,I=Os(p);I.aliasOf=h&&h.record;const H=Ns(e,p),O=[I];if("alias"in p){const A=typeof p.alias=="string"?[p.alias]:p.alias;for(const ee of A)O.push(Os(Y({},I,{components:h?h.record.components:I.components,path:ee,aliasOf:h?h.record:I})))}let R,N;for(const A of O){const{path:ee}=A;if(g&&ee[0]!=="/"){const ve=g.record.path,ie=ve[ve.length-1]==="/"?"":"/";A.path=g.record.path+(ee&&ie+ee)}if(R=Cd(A,g,H),h?h.alias.push(R):(N=N||R,N!==R&&N.alias.push(R),T&&p.name&&!Ls(R)&&r(p.name)),ci(R)&&d(R),I.children){const ve=I.children;for(let ie=0;ie<ve.length;ie++)i(ve[ie],R,h&&h.children[ie])}h=h||R}return N?()=>{r(N)}:en}function r(p){if(oi(p)){const g=s.get(p);g&&(s.delete(p),a.splice(a.indexOf(g),1),g.children.forEach(r),g.alias.forEach(r))}else{const g=a.indexOf(p);g>-1&&(a.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function c(){return a}function d(p){const g=Id(p,a);a.splice(g,0,p),p.record.name&&!Ls(p)&&s.set(p.record.name,p)}function f(p,g){let h,T={},I,H;if("name"in p&&p.name){if(h=s.get(p.name),!h)throw jt(1,{location:p});H=h.record.name,T=Y($s(g.params,h.keys.filter(N=>!N.optional).concat(h.parent?h.parent.keys.filter(N=>N.optional):[]).map(N=>N.name)),p.params&&$s(p.params,h.keys.map(N=>N.name))),I=h.stringify(T)}else if(p.path!=null)I=p.path,h=a.find(N=>N.re.test(I)),h&&(T=h.parse(I),H=h.record.name);else{if(h=g.name?s.get(g.name):a.find(N=>N.re.test(g.path)),!h)throw jt(1,{location:p,currentLocation:g});H=h.record.name,T=Y({},g.params,p.params),I=h.stringify(T)}const O=[];let R=h;for(;R;)O.unshift(R.record),R=R.parent;return{name:H,path:I,params:T,matched:O,meta:Dd(O)}}t.forEach(p=>i(p));function v(){a.length=0,s.clear()}return{addRoute:i,resolve:f,removeRoute:r,clearRoutes:v,getRoutes:c,getRecordMatcher:o}}function $s(t,e){const a={};for(const s of e)s in t&&(a[s]=t[s]);return a}function Os(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Td(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Td(t){const e={},a=t.props||!1;if("component"in t)e.default=a;else for(const s in t.components)e[s]=typeof a=="object"?a[s]:a;return e}function Ls(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dd(t){return t.reduce((e,a)=>Y(e,a.meta),{})}function Ns(t,e){const a={};for(const s in t)a[s]=s in e?e[s]:t[s];return a}function Id(t,e){let a=0,s=e.length;for(;a!==s;){const i=a+s>>1;ri(t,e[i])<0?s=i:a=i+1}const o=Rd(t);return o&&(s=e.lastIndexOf(o,s-1)),s}function Rd(t){let e=t;for(;e=e.parent;)if(ci(e)&&ri(t,e)===0)return e}function ci({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Pd(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<s.length;++o){const i=s[o].replace(Zo," "),r=i.indexOf("="),c=cn(r<0?i:i.slice(0,r)),d=r<0?null:cn(i.slice(r+1));if(c in e){let f=e[c];Ne(f)||(f=e[c]=[f]),f.push(d)}else e[c]=d}return e}function js(t){let e="";for(let a in t){const s=t[a];if(a=Xc(a),s==null){s!==void 0&&(e+=(e.length?"&":"")+a);continue}(Ne(s)?s.map(i=>i&&wa(i)):[s&&wa(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+a,i!=null&&(e+="="+i))})}return e}function Ad(t){const e={};for(const a in t){const s=t[a];s!==void 0&&(e[a]=Ne(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return e}const $d=Symbol(""),Ms=Symbol(""),Ga=Symbol(""),di=Symbol(""),qa=Symbol("");function Vt(){let t=[];function e(s){return t.push(s),()=>{const o=t.indexOf(s);o>-1&&t.splice(o,1)}}function a(){t=[]}return{add:e,list:()=>t.slice(),reset:a}}function vt(t,e,a,s,o,i=r=>r()){const r=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((c,d)=>{const f=g=>{g===!1?d(jt(4,{from:a,to:e})):g instanceof Error?d(g):bd(g)?d(jt(2,{from:e,to:g})):(r&&s.enterCallbacks[o]===r&&typeof g=="function"&&r.push(g),c())},v=i(()=>t.call(s&&s.instances[o],e,a,f));let p=Promise.resolve(v);t.length<3&&(p=p.then(f)),p.catch(g=>d(g))})}function ca(t,e,a,s,o=i=>i()){const i=[];for(const r of t)for(const c in r.components){let d=r.components[c];if(!(e!=="beforeRouteEnter"&&!r.instances[c]))if(Qo(d)){const v=(d.__vccOpts||d)[e];v&&i.push(vt(v,a,s,r,c,o))}else{let f=d();i.push(()=>f.then(v=>{if(!v)throw new Error(`Couldn't resolve component "${c}" at "${r.path}"`);const p=Bc(v)?v.default:v;r.mods[c]=v,r.components[c]=p;const h=(p.__vccOpts||p)[e];return h&&vt(h,a,s,r,c,o)()}))}}return i}function Us(t){const e=nt(Ga),a=nt(di),s=Ae(()=>{const d=Rt(t.to);return e.resolve(d)}),o=Ae(()=>{const{matched:d}=s.value,{length:f}=d,v=d[f-1],p=a.matched;if(!v||!p.length)return-1;const g=p.findIndex(Nt.bind(null,v));if(g>-1)return g;const h=Bs(d[f-2]);return f>1&&Bs(v)===h&&p[p.length-1].path!==h?p.findIndex(Nt.bind(null,d[f-2])):g}),i=Ae(()=>o.value>-1&&Md(a.params,s.value.params)),r=Ae(()=>o.value>-1&&o.value===a.matched.length-1&&ai(a.params,s.value.params));function c(d={}){if(jd(d)){const f=e[Rt(t.replace)?"replace":"push"](Rt(t.to)).catch(en);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:Ae(()=>s.value.href),isActive:i,isExactActive:r,navigate:c}}function Od(t){return t.length===1?t[0]:t}const Ld=ko({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Us,setup(t,{slots:e}){const a=Fn(Us(t)),{options:s}=nt(Ga),o=Ae(()=>({[Hs(t.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[Hs(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const i=e.default&&Od(e.default(a));return t.custom?i:zo("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:o.value},i)}}}),Nd=Ld;function jd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Md(t,e){for(const a in e){const s=e[a],o=t[a];if(typeof s=="string"){if(s!==o)return!1}else if(!Ne(o)||o.length!==s.length||s.some((i,r)=>i!==o[r]))return!1}return!0}function Bs(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hs=(t,e,a)=>t??e??a,Ud=ko({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:a}){const s=nt(qa),o=Ae(()=>t.route||s.value),i=nt(Ms,0),r=Ae(()=>{let f=Rt(i);const{matched:v}=o.value;let p;for(;(p=v[f])&&!p.components;)f++;return f}),c=Ae(()=>o.value.matched[r.value]);_n(Ms,Ae(()=>r.value+1)),_n($d,c),_n(qa,o);const d=Fi();return wn(()=>[d.value,c.value,t.name],([f,v,p],[g,h,T])=>{v&&(v.instances[p]=f,h&&h!==v&&f&&f===g&&(v.leaveGuards.size||(v.leaveGuards=h.leaveGuards),v.updateGuards.size||(v.updateGuards=h.updateGuards))),f&&v&&(!h||!Nt(v,h)||!g)&&(v.enterCallbacks[p]||[]).forEach(I=>I(f))},{flush:"post"}),()=>{const f=o.value,v=t.name,p=c.value,g=p&&p.components[v];if(!g)return Fs(a.default,{Component:g,route:f});const h=p.props[v],T=h?h===!0?f.params:typeof h=="function"?h(f):h:null,H=zo(g,Y({},T,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[v]=null)},ref:d}));return Fs(a.default,{Component:H,route:f})||H}}});function Fs(t,e){if(!t)return null;const a=t(e);return a.length===1?a[0]:a}const Bd=Ud;function Hd(t){const e=xd(t.routes,t),a=t.parseQuery||Pd,s=t.stringifyQuery||js,o=t.history,i=Vt(),r=Vt(),c=Vt(),d=Vi(dt);let f=dt;Tt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=ia.bind(null,y=>""+y),p=ia.bind(null,ed),g=ia.bind(null,cn);function h(y,D){let C,P;return oi(y)?(C=e.getRecordMatcher(y),P=D):P=y,e.addRoute(P,C)}function T(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function I(){return e.getRoutes().map(y=>y.record)}function H(y){return!!e.getRecordMatcher(y)}function O(y,D){if(D=Y({},D||d.value),typeof y=="string"){const u=ra(a,y,D.path),m=e.resolve({path:u.path},D),_=o.createHref(u.fullPath);return Y(u,m,{params:g(m.params),hash:cn(u.hash),redirectedFrom:void 0,href:_})}let C;if(y.path!=null)C=Y({},y,{path:ra(a,y.path,D.path).path});else{const u=Y({},y.params);for(const m in u)u[m]==null&&delete u[m];C=Y({},y,{params:p(u)}),D.params=p(D.params)}const P=e.resolve(C,D),z=y.hash||"";P.params=v(g(P.params));const oe=ad(s,Y({},y,{hash:Qc(z),path:P.path})),l=o.createHref(oe);return Y({fullPath:oe,hash:z,query:s===js?Ad(y.query):y.query||{}},P,{redirectedFrom:void 0,href:l})}function R(y){return typeof y=="string"?ra(a,y,d.value.path):Y({},y)}function N(y,D){if(f!==y)return jt(8,{from:D,to:y})}function A(y){return ie(y)}function ee(y){return A(Y(R(y),{replace:!0}))}function ve(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:C}=D;let P=typeof C=="function"?C(y):C;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=R(P):{path:P},P.params={}),Y({query:y.query,hash:y.hash,params:P.path!=null?{}:y.params},P)}}function ie(y,D){const C=f=O(y),P=d.value,z=y.state,oe=y.force,l=y.replace===!0,u=ve(C);if(u)return ie(Y(R(u),{state:typeof u=="object"?Y({},z,u.state):z,force:oe,replace:l}),D||C);const m=C;m.redirectedFrom=D;let _;return!oe&&sd(s,P,C)&&(_=jt(16,{to:m,from:P}),Be(P,P,!0,!1)),(_?Promise.resolve(_):Me(m,P)).catch(b=>Je(b)?Je(b,2)?b:ct(b):K(b,m,P)).then(b=>{if(b){if(Je(b,2))return ie(Y({replace:l},R(b.to),{state:typeof b.to=="object"?Y({},z,b.to.state):z,force:oe}),D||m)}else b=gt(m,P,!0,l,z);return rt(m,P,b),b})}function je(y,D){const C=N(y,D);return C?Promise.reject(C):Promise.resolve()}function it(y){const D=Et.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function Me(y,D){let C;const[P,z,oe]=Fd(y,D);C=ca(P.reverse(),"beforeRouteLeave",y,D);for(const u of P)u.leaveGuards.forEach(m=>{C.push(vt(m,y,D))});const l=je.bind(null,y,D);return C.push(l),Ie(C).then(()=>{C=[];for(const u of i.list())C.push(vt(u,y,D));return C.push(l),Ie(C)}).then(()=>{C=ca(z,"beforeRouteUpdate",y,D);for(const u of z)u.updateGuards.forEach(m=>{C.push(vt(m,y,D))});return C.push(l),Ie(C)}).then(()=>{C=[];for(const u of oe)if(u.beforeEnter)if(Ne(u.beforeEnter))for(const m of u.beforeEnter)C.push(vt(m,y,D));else C.push(vt(u.beforeEnter,y,D));return C.push(l),Ie(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=ca(oe,"beforeRouteEnter",y,D,it),C.push(l),Ie(C))).then(()=>{C=[];for(const u of r.list())C.push(vt(u,y,D));return C.push(l),Ie(C)}).catch(u=>Je(u,8)?u:Promise.reject(u))}function rt(y,D,C){c.list().forEach(P=>it(()=>P(y,D,C)))}function gt(y,D,C,P,z){const oe=N(y,D);if(oe)return oe;const l=D===dt,u=Tt?history.state:{};C&&(P||l?o.replace(y.fullPath,Y({scroll:l&&u&&u.scroll},z)):o.push(y.fullPath,z)),d.value=y,Be(y,D,C,l),ct()}let Ue;function Mt(){Ue||(Ue=o.listen((y,D,C)=>{if(!pn.listening)return;const P=O(y),z=ve(P);if(z){ie(Y(z,{replace:!0,force:!0}),P).catch(en);return}f=P;const oe=d.value;Tt&&vd(Ds(oe.fullPath,C.delta),Yn()),Me(P,oe).catch(l=>Je(l,12)?l:Je(l,2)?(ie(Y(R(l.to),{force:!0}),P).then(u=>{Je(u,20)&&!C.delta&&C.type===dn.pop&&o.go(-1,!1)}).catch(en),Promise.reject()):(C.delta&&o.go(-C.delta,!1),K(l,P,oe))).then(l=>{l=l||gt(P,oe,!1),l&&(C.delta&&!Je(l,8)?o.go(-C.delta,!1):C.type===dn.pop&&Je(l,20)&&o.go(-1,!1)),rt(P,oe,l)}).catch(en)}))}let qt=Vt(),le=Vt(),Z;function K(y,D,C){ct(y);const P=le.list();return P.length?P.forEach(z=>z(y,D,C)):console.error(y),Promise.reject(y)}function ze(){return Z&&d.value!==dt?Promise.resolve():new Promise((y,D)=>{qt.add([y,D])})}function ct(y){return Z||(Z=!y,Mt(),qt.list().forEach(([D,C])=>y?C(y):D()),qt.reset()),y}function Be(y,D,C,P){const{scrollBehavior:z}=t;if(!Tt||!z)return Promise.resolve();const oe=!C&&pd(Ds(y.fullPath,0))||(P||!C)&&history.state&&history.state.scroll||null;return ja().then(()=>z(y,D,oe)).then(l=>l&&ud(l)).catch(l=>K(l,y,D))}const _e=y=>o.go(y);let St;const Et=new Set,pn={currentRoute:d,listening:!0,addRoute:h,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:I,resolve:O,options:t,push:A,replace:ee,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:r.add,afterEach:c.add,onError:le.add,isReady:ze,install(y){const D=this;y.component("RouterLink",Nd),y.component("RouterView",Bd),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(d)}),Tt&&!St&&d.value===dt&&(St=!0,A(o.location).catch(z=>{}));const C={};for(const z in dt)Object.defineProperty(C,z,{get:()=>d.value[z],enumerable:!0});y.provide(Ga,D),y.provide(di,fo(C)),y.provide(qa,d);const P=y.unmount;Et.add(y),y.unmount=function(){Et.delete(y),Et.size<1&&(f=dt,Ue&&Ue(),Ue=null,d.value=dt,St=!1,Z=!1),P()}}};function Ie(y){return y.reduce((D,C)=>D.then(()=>it(C)),Promise.resolve())}return pn}function Fd(t,e){const a=[],s=[],o=[],i=Math.max(e.matched.length,t.matched.length);for(let r=0;r<i;r++){const c=e.matched[r];c&&(t.matched.find(f=>Nt(f,c))?s.push(c):a.push(c));const d=t.matched[r];d&&(e.matched.find(f=>Nt(f,d))||o.push(d))}return[a,s,o]}const Vd={name:"Home",data(){return{feedbackSubmitted:!1}},methods:{submitFeedback(t){this.feedbackSubmitted=!0,console.log(`Feedback submitted: ${t}`)}}},Wd={class:"nav-header"},Gd={class:"container"},Kd={class:"nav-content"},zd={class:"nav-menu"},Yd={class:"content-section"},Jd={class:"container"},Qd={class:"card-grid"},Xd={class:"content-section"},Zd={class:"container"},el={class:"card-grid"},tl={class:"content-section"},nl={class:"container"},al={class:"card-grid"},sl={class:"feedback-section"},ol={class:"container"},il={class:"feedback-buttons"},rl={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function cl(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",null,[n("nav",Wd,[n("div",Gd,[n("div",Kd,[L(r,{to:"/",class:"nav-brand"},{default:F(()=>[...e[2]||(e[2]=[n("img",{src:"https://www.storecove.com/typo3conf/ext/spt_package/Resources/Public/images/common/logo_prev.png",alt:"Storecove"},null,-1)])]),_:1}),n("ul",zd,[n("li",null,[L(r,{to:"/integration-basics-faq"},{default:F(()=>[...e[3]||(e[3]=[V("FAQ",-1)])]),_:1})]),n("li",null,[L(r,{to:"/implementation-guide"},{default:F(()=>[...e[4]||(e[4]=[V("Guide",-1)])]),_:1})]),n("li",null,[L(r,{to:"/developer-dashboard"},{default:F(()=>[...e[5]||(e[5]=[V("Dashboard",-1)])]),_:1})]),n("li",null,[L(r,{to:"/webhook-testing"},{default:F(()=>[...e[6]||(e[6]=[V("Webhooks",-1)])]),_:1})])]),e[7]||(e[7]=n("div",{class:"nav-actions"},[n("a",{href:"https://www.storecove.com/us/en/start-now/",target:"_blank",class:"start-now-btn"},"Start now")],-1)),e[8]||(e[8]=n("input",{type:"text",class:"search-box",placeholder:"Search documentation..."},null,-1))])])]),e[25]||(e[25]=G('<section class="hero"><div class="container"><div class="hero-content"><div class="hero-text"><h1>E-Invoicing Integration Toolkit</h1><p>Everything you need to integrate e-invoicing capabilities into your platform and help your clients go digital</p></div><div class="hero-image"><div class="hero-icon">🧾</div></div></div></div></section>',1)),n("section",Yd,[n("div",Jd,[e[15]||(e[15]=n("div",{class:"section-header"},[n("h2",null,"Get Started with E-invoicing"),n("p",null,"Comprehensive tools and resources to help you build your e-invoicing integration with the Storecove platform")],-1)),n("div",Qd,[L(r,{to:"/integration-basics-faq",class:"card"},{default:F(()=>[...e[9]||(e[9]=[n("div",{class:"card-icon"},"❓",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"FAQ"),n("h3",{class:"card-title"},"Integration Basics"),n("p",{class:"card-description"},"Frequently asked questions about e-invoicing integration fundamentals and common implementation patterns")],-1)])]),_:1}),L(r,{to:"/getting-started-webinar",class:"card"},{default:F(()=>[...e[10]||(e[10]=[n("div",{class:"card-icon"},"🎥",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Video"),n("h3",{class:"card-title"},"Getting Started Webinar"),n("p",{class:"card-description"},"Learn the basics of e-invoicing and how to set up your first integration with our platform")],-1)])]),_:1}),L(r,{to:"/platform-plugins",class:"card"},{default:F(()=>[...e[11]||(e[11]=[n("div",{class:"card-icon"},"🔌",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Coming Soon"),n("h3",{class:"card-title"},"Platform Plugins"),n("p",{class:"card-description"},"Pre-built integrations for popular accounting platforms and ERP systems")],-1)])]),_:1}),L(r,{to:"/sdk-libraries",class:"card"},{default:F(()=>[...e[12]||(e[12]=[n("div",{class:"card-icon"},"💻",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Code"),n("h3",{class:"card-title"},"SDK Libraries"),n("p",{class:"card-description"},"Server-side libraries and SDKs available in multiple programming languages for faster integration")],-1)])]),_:1}),L(r,{to:"/implementation-guide",class:"card"},{default:F(()=>[...e[13]||(e[13]=[n("div",{class:"card-icon"},"📖",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Guide"),n("h3",{class:"card-title"},"Implementation Guide"),n("p",{class:"card-description"},"Comprehensive guide covering legal entities, identifiers, and compliance requirements")],-1)])]),_:1}),L(r,{to:"/sample-code",class:"card"},{default:F(()=>[...e[14]||(e[14]=[n("div",{class:"card-icon"},"📋",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Examples"),n("h3",{class:"card-title"},"Sample Code"),n("p",{class:"card-description"},"Real-world examples and code snippets for common e-invoicing scenarios and use cases")],-1)])]),_:1})])])]),n("section",Xd,[n("div",Zd,[e[19]||(e[19]=n("div",{class:"section-header"},[n("h2",null,"Test Your Implementation"),n("p",null,"Learn how to test your e-invoicing integration before going live with real transactions")],-1)),n("div",el,[L(r,{to:"/sandbox-testing",class:"card"},{default:F(()=>[...e[16]||(e[16]=[n("div",{class:"card-icon"},"🧪",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Testing"),n("h3",{class:"card-title"},"Sandbox Environment"),n("p",{class:"card-description"},"Complete testing environment with sample data, validation tools, and webhook testing capabilities for safe integration development")],-1)])]),_:1}),e[18]||(e[18]=G('<div class="card coming-soon-card"><div class="card-icon">✅</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Invoice Validation</h3><p class="card-description">Comprehensive validation rules from our platform to ensure your e-invoice formats are compliant before sending</p></div></div>',1)),L(r,{to:"/webhook-testing",class:"card"},{default:F(()=>[...e[17]||(e[17]=[n("div",{class:"card-icon"},"🔄",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Guide"),n("h3",{class:"card-title"},"Webhook Testing"),n("p",{class:"card-description"},"Learn how to implement and test webhooks for real-time e-invoicing status updates with Python examples")],-1)])]),_:1})])])]),n("section",tl,[n("div",nl,[e[23]||(e[23]=n("div",{class:"section-header"},[n("h2",null,"Go Live & Maintain"),n("p",null,"Tools and resources to help you maintain and troubleshoot your e-invoicing integration in production")],-1)),n("div",al,[L(r,{to:"/developer-dashboard",class:"card"},{default:F(()=>[...e[20]||(e[20]=[n("div",{class:"card-icon"},"📊",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Dashboard"),n("h3",{class:"card-title"},"Developer Dashboard"),n("p",{class:"card-description"},"Monitor e-invoicing activity, track delivery status, and manage your integration with comprehensive administrative tools")],-1)])]),_:1}),L(r,{to:"/error-handling",class:"card"},{default:F(()=>[...e[21]||(e[21]=[n("div",{class:"card-icon"},"⚠️",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Troubleshooting"),n("h3",{class:"card-title"},"Error Handling"),n("p",{class:"card-description"},"Comprehensive guide to Storecove API error codes, troubleshooting steps, and resolution strategies")],-1)])]),_:1}),L(r,{to:"/api-logs",class:"card"},{default:F(()=>[...e[22]||(e[22]=[n("div",{class:"card-icon"},"📝",-1),n("div",{class:"card-content"},[n("span",{class:"card-label"},"Monitoring"),n("h3",{class:"card-title"},"API Logs"),n("p",{class:"card-description"},"Best practices for API logging, monitoring approaches, and real-world examples for production systems")],-1)])]),_:1})])])]),e[26]||(e[26]=G('<section class="content-section"><div class="container"><div class="section-header"><h2>Stay Compliant &amp; Updated</h2><p>Keep informed about regulatory changes, new features, and best practices in e-invoicing</p></div><div class="card-grid"><div class="card coming-soon-card"><div class="card-icon">📧</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Developer Updates</h3><p class="card-description">Monthly newsletter with API updates, new features, and e-invoicing regulatory changes</p></div></div><div class="card coming-soon-card"><div class="card-icon">🔄</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Platform Updates</h3><p class="card-description">Stay informed about new features, API improvements, and supported e-invoicing formats</p></div></div><div class="card coming-soon-card"><div class="card-icon">📰</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Technical Blog</h3><p class="card-description">Deep-dive articles on e-invoicing trends, compliance updates, and integration best practices</p></div></div></div></div></section><section class="content-section"><div class="container"><div class="section-header"><h2>Advanced Developer Resources</h2><p>Comprehensive developer tools, examples, and advanced integration patterns in one place</p></div><div class="card-grid"><div class="card coming-soon-card"><div class="card-icon">🛠️</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Advanced Tools</h3><p class="card-description">Advanced integration examples, specialized tools, and complex e-invoicing scenarios documentation</p></div></div></div></div></section>',2)),n("section",sl,[n("div",ol,[e[24]||(e[24]=n("h3",{class:"feedback-question"},"Was this toolkit helpful?",-1)),n("div",il,[n("button",{class:"feedback-btn",onClick:e[0]||(e[0]=c=>i.submitFeedback("yes"))},"👍 Yes"),n("button",{class:"feedback-btn",onClick:e[1]||(e[1]=c=>i.submitFeedback("no"))},"👎 No")]),o.feedbackSubmitted?(re(),ce("p",rl," Thank you for your feedback! ")):$t("",!0)])]),e[27]||(e[27]=G('<footer class="footer"><div class="container"><div class="footer-content"><div class="footer-section"><h3>Solutions</h3><ul class="footer-links"><li><a href="https://www.storecove.com/us/en/solutions/e-invoicing-api/" target="_blank">E-invoicing API</a></li><li><a href="https://www.storecove.com/us/en/solutions/peppol-access-point/" target="_blank">PEPPOL Access Point</a></li><li><a href="https://www.storecove.com/us/en/solutions/global-e-invoicing/" target="_blank">Global E-invoicing</a></li><li><a href="https://www.storecove.com/us/en/integrators/become-an-integrator/" target="_blank">Become an Integrator</a></li></ul></div><div class="footer-section"><h3>Networks</h3><ul class="footer-links"><li><a href="https://www.storecove.com/us/en/peppol/" target="_blank">Peppol</a></li><li><a href="https://www.storecove.com/us/en/solutions/dbna/" target="_blank">DBNAlliance (USA)</a></li><li><a href="https://www.storecove.com/us/en/solutions/finland/" target="_blank">Finvoice</a></li></ul></div><div class="footer-section"><h3>Resources</h3><ul class="footer-links"><li><a href="https://www.storecove.com/blog/" target="_blank">Blog</a></li><li><a href="https://www.storecove.com/us/en/webinars/" target="_blank">Webinars</a></li><li><a href="https://www.storecove.com/us/en/whitepapers/" target="_blank">White Papers</a></li></ul></div><div class="footer-section"><h3>Support</h3><ul class="footer-links"><li><a href="https://help.storecove.com/en/" target="_blank">Help Center</a></li><li><a href="https://www.storecove.com/us/en/contact/" target="_blank">Contact Us</a></li><li><a href="mailto:info@storecove.com">info@storecove.com</a></li><li><a href="https://app.storecove.com/users/sign_in" target="_blank">Login</a></li></ul></div></div><div class="footer-bottom"><div style="display:flex;align-items:center;justify-content:center;margin-bottom:1rem;"><img src="https://www.storecove.com/fileadmin/user_upload/Logo_white_3325x765.png" alt="Storecove" style="height:40px;width:auto;"></div><p>© 2024 Storecove. All rights reserved.</p></div></div></footer>',1))])}const dl=De(Vd,[["render",cl]]);const ll={name:"IntegrationBasicsFAQ",mounted(){this.setupFAQInteractivity()},methods:{setupFAQInteractivity(){document.querySelectorAll(".faq-question").forEach(e=>{e.addEventListener("click",()=>{const a=e.nextElementSibling,s=a.style.display==="block";document.querySelectorAll(".faq-answer").forEach(o=>{o.style.display="none"}),s||(a.style.display="block")})})}}},ul={class:"faq-page"},vl={class:"nav-header"},pl={class:"container"},fl={class:"nav-content"},ml={class:"breadcrumb-section"},gl={class:"container"},hl={class:"breadcrumb"};function bl(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",ul,[n("nav",vl,[n("div",pl,[n("div",fl,[L(r,{to:"/",class:"nav-brand"},{default:F(()=>[...e[0]||(e[0]=[n("img",{src:"https://www.storecove.com/typo3conf/ext/spt_package/Resources/Public/images/common/logo_prev.png",alt:"Storecove"},null,-1)])]),_:1}),e[1]||(e[1]=G('<ul class="nav-menu" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/docs/" target="_blank" data-v-c2dcc444>Docs</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/" target="_blank" data-v-c2dcc444>Solutions</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/integrators/" target="_blank" data-v-c2dcc444>Integrators</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/mystorecove/" target="_blank" data-v-c2dcc444>Resources</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/contact/" target="_blank" data-v-c2dcc444>Contact</a></li></ul><div class="nav-actions" data-v-c2dcc444><a href="https://www.storecove.com/us/en/start-now/" target="_blank" class="start-now-btn" data-v-c2dcc444>Start now</a></div><input type="text" class="search-box" placeholder="Search documentation..." data-v-c2dcc444>',3))])])]),n("section",ml,[n("div",gl,[n("nav",hl,[L(r,{to:"/"},{default:F(()=>[...e[2]||(e[2]=[V("Integration Toolkit",-1)])]),_:1}),e[3]||(e[3]=n("span",{class:"separator"},">",-1)),e[4]||(e[4]=n("span",{class:"current"},"Integration Basics FAQ",-1))])])]),e[5]||(e[5]=G(`<section class="main-content" data-v-c2dcc444><div class="container" data-v-c2dcc444><div class="content-wrapper" data-v-c2dcc444><h1 class="page-title" data-v-c2dcc444>Integration Basics FAQ</h1><p class="page-description" data-v-c2dcc444> Frequently asked questions about e-invoicing integration fundamentals and common implementation patterns with Storecove. </p><div class="faq-sections" data-v-c2dcc444><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🚀 Getting Started</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is Storecove and how does e-invoicing work?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove is a global e-invoicing platform that enables businesses to send and receive electronic invoices worldwide. We provide:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Global Compliance:</strong> Automatic compliance with local tax authorities and regulations</li><li data-v-c2dcc444><strong data-v-c2dcc444>Multiple Networks:</strong> Connection to Peppol, DBNAlliance, and country-specific networks</li><li data-v-c2dcc444><strong data-v-c2dcc444>Format Conversion:</strong> Automatic conversion to local e-invoice formats (UBL, CII, FatturaPA, etc.)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Unified API:</strong> Single integration point for worldwide e-invoicing</li></ul></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How long does it take to integrate with Storecove?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Integration typically takes <strong data-v-c2dcc444>1-6 weeks</strong> depending on your requirements:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Basic Integration:</strong> 1-2 weeks for simple sending functionality</li><li data-v-c2dcc444><strong data-v-c2dcc444>Full Integration:</strong> 3-4 weeks including receiving and advanced features</li><li data-v-c2dcc444><strong data-v-c2dcc444>Enterprise Integration:</strong> 4-6 weeks with custom workflows and multiple legal entities</li></ul><p data-v-c2dcc444>We recommend using our sandbox environment for development and testing.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What are the prerequisites for integration?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>To integrate with Storecove, you need:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Technical:</strong> RESTful JSON experience and HTTPS capability</li><li data-v-c2dcc444><strong data-v-c2dcc444>Business:</strong> Working ERP or accounting system</li><li data-v-c2dcc444><strong data-v-c2dcc444>Access:</strong> Storecove sandbox account and API key</li><li data-v-c2dcc444><strong data-v-c2dcc444>Legal Entity:</strong> Registered business with valid tax identifiers</li></ul></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🔐 API &amp; Authentication</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I authenticate with the Storecove API?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove uses Bearer token authentication:</p><div class="code-block" data-v-c2dcc444><pre data-v-c2dcc444><code data-v-c2dcc444>Authorization: Bearer YOUR_API_KEY_HERE</code></pre></div><p data-v-c2dcc444>Create API keys in your Storecove dashboard under <strong data-v-c2dcc444>API Keys</strong>. Never expose API keys in client-side code.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is the difference between Sandbox and Production environments?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444><strong data-v-c2dcc444>Sandbox Environment:</strong></p><ul data-v-c2dcc444><li data-v-c2dcc444>Free testing environment with test networks</li><li data-v-c2dcc444>Webhook simulation capabilities</li><li data-v-c2dcc444>Connected to test instances of Peppol, DBNAlliance, and tax authorities</li><li data-v-c2dcc444>Use for development and testing</li></ul><p data-v-c2dcc444><strong data-v-c2dcc444>Production Environment:</strong></p><ul data-v-c2dcc444><li data-v-c2dcc444>Live environment for real business transactions</li><li data-v-c2dcc444>Connected to live networks and tax authorities</li><li data-v-c2dcc444>Requires separate API keys and legal entity approval</li></ul></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I handle API errors and rate limiting?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Follow these best practices:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>HTTP 4xx errors:</strong> Client-side errors, check your request format</li><li data-v-c2dcc444><strong data-v-c2dcc444>HTTP 5xx errors:</strong> Server-side errors, retry with exponential backoff</li><li data-v-c2dcc444><strong data-v-c2dcc444>Rate Limiting:</strong> Implement job queues for high-volume sending</li><li data-v-c2dcc444><strong data-v-c2dcc444>Idempotency:</strong> Use the idempotencyGuid field to prevent duplicate submissions</li></ul></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🏢 Legal Entities &amp; Identifiers</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is a Legal Entity and why do I need one?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>A Legal Entity represents your company in the e-invoicing ecosystem:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Identity:</strong> Contains your company&#39;s legal and tax identifiers</li><li data-v-c2dcc444><strong data-v-c2dcc444>Sending:</strong> Required to send invoices (acts_as_sender: true)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Receiving:</strong> Advertises your identifiers on networks to receive invoices</li><li data-v-c2dcc444><strong data-v-c2dcc444>Compliance:</strong> Ensures proper business identification for tax authorities</li></ul><p data-v-c2dcc444>Create Legal Entities through the Storecove UI at <a href="https://app.storecove.com/senders" target="_blank" data-v-c2dcc444>app.storecove.com/senders</a></p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What identifiers do I need for my country?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Required identifiers vary by country. Common examples:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>EU Countries:</strong> VAT number (e.g., NL:VAT, DE:VAT)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Netherlands:</strong> KVK number + VAT number</li><li data-v-c2dcc444><strong data-v-c2dcc444>Germany:</strong> VAT number (for business) or LWID (for government)</li><li data-v-c2dcc444><strong data-v-c2dcc444>United States:</strong> EIN number, DUNS, or GLN</li><li data-v-c2dcc444><strong data-v-c2dcc444>Singapore:</strong> UEN number</li><li data-v-c2dcc444><strong data-v-c2dcc444>Australia:</strong> ABN number</li></ul><p data-v-c2dcc444>Check our <a href="https://www.storecove.com/docs/#sender-identifiers" target="_blank" data-v-c2dcc444>Sender Identifiers guide</a> for complete requirements.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How long does Legal Entity approval take?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Legal Entity approval typically takes:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Standard countries:</strong> Up to 24 hours</li><li data-v-c2dcc444><strong data-v-c2dcc444>Special countries (SG, IT, FI, ES, PT):</strong> May require additional setup - contact support first</li><li data-v-c2dcc444><strong data-v-c2dcc444>Peppol advertisement:</strong> Additional 24-48 hours to appear in network directory</li></ul><p data-v-c2dcc444>You can start testing immediately, but wait for approval before going live.</p></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>📤 Sending Documents</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is the invoice sending workflow?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove follows a 5-phase sending workflow:</p><ol data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>CTC Compliance:</strong> Tax authority clearance (for countries like Italy, India)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Tax Compliance:</strong> Integration with tax filing systems</li><li data-v-c2dcc444><strong data-v-c2dcc444>Exchange Networks:</strong> Peppol, DBNAlliance routing</li><li data-v-c2dcc444><strong data-v-c2dcc444>Static Routes:</strong> Direct connections (Finvoice, etc.)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Email Fallback:</strong> Email with country-specific attachments</li></ol><p data-v-c2dcc444>Storecove automatically determines the best route for each invoice.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What tax systems are supported?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove supports two tax calculation systems:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>tax_line_percentages (Recommended):</strong> Tax calculated from percentages</li><li data-v-c2dcc444><strong data-v-c2dcc444>tax_line_amounts:</strong> Pre-calculated tax amounts</li></ul><p data-v-c2dcc444>Most receivers only support percentage-based taxes, so use <code data-v-c2dcc444>tax_line_percentages</code> when possible.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I know if my invoice was delivered successfully?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove provides multiple delivery confirmations:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Webhooks:</strong> Real-time status updates via HTTP callbacks</li><li data-v-c2dcc444><strong data-v-c2dcc444>Status Events:</strong> cleared, succeeded, acknowledged, accepted, etc.</li><li data-v-c2dcc444><strong data-v-c2dcc444>Sending Evidence:</strong> Retrieve delivery proof via API</li><li data-v-c2dcc444><strong data-v-c2dcc444>Response Documents:</strong> Invoice responses from recipients</li></ul><p data-v-c2dcc444>Configure webhooks for automatic status notifications.</p></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🌐 Networks &amp; Routing</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What e-invoicing networks does Storecove support?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove connects to major global networks:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Peppol:</strong> European and international network</li><li data-v-c2dcc444><strong data-v-c2dcc444>DBNAlliance:</strong> US-based network</li><li data-v-c2dcc444><strong data-v-c2dcc444>Country-specific:</strong> Italy SDI, Singapore IRAS, Malaysia LHDNM</li><li data-v-c2dcc444><strong data-v-c2dcc444>Legacy networks:</strong> Finvoice (Finland), Svefaktura (Sweden)</li></ul><p data-v-c2dcc444>If the recipient isn&#39;t on a network, we send via email with compliant attachments.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I find out if a recipient can receive e-invoices?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Use the Discovery API to check recipient capabilities:</p><div class="code-block" data-v-c2dcc444><pre data-v-c2dcc444><code data-v-c2dcc444>POST /api/v2/discovery/receives
{
  &quot;documentTypes&quot;: [&quot;invoice&quot;],
  &quot;network&quot;: &quot;peppol&quot;,
  &quot;scheme&quot;: &quot;NL:VAT&quot;,
  &quot;identifier&quot;: &quot;NL123456789B01&quot;
}</code></pre></div><p data-v-c2dcc444>Returns whether the recipient can receive electronic invoices and via which networks.</p></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🔧 Troubleshooting</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>Why is my invoice not being sent?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Common issues and solutions:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Invalid Legal Entity:</strong> Ensure your Legal Entity is approved</li><li data-v-c2dcc444><strong data-v-c2dcc444>Missing identifiers:</strong> Check recipient has valid routing identifiers</li><li data-v-c2dcc444><strong data-v-c2dcc444>No routing found:</strong> Add email address as fallback</li><li data-v-c2dcc444><strong data-v-c2dcc444>Invalid JSON:</strong> Validate your invoice structure</li><li data-v-c2dcc444><strong data-v-c2dcc444>Tax calculation errors:</strong> Ensure amounts add up correctly</li></ul><p data-v-c2dcc444>Check the webhook events for detailed error messages.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I debug webhook issues?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Webhook troubleshooting steps:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Endpoint accessibility:</strong> Ensure your webhook URL is publicly accessible</li><li data-v-c2dcc444><strong data-v-c2dcc444>HTTP 200 response:</strong> Always return 200 OK for successful processing</li><li data-v-c2dcc444><strong data-v-c2dcc444>Retry mechanism:</strong> Storecove retries for 5 days if non-200 response</li><li data-v-c2dcc444><strong data-v-c2dcc444>Testing:</strong> Use webhook.site for development testing</li></ul><p data-v-c2dcc444>For pull-mode webhooks, use the WebhookInstances API to retrieve events.</p></div></div></div></div><div class="support-section" data-v-c2dcc444><h2 data-v-c2dcc444>Need More Help?</h2><div class="support-cards" data-v-c2dcc444><div class="support-card" data-v-c2dcc444><h3 data-v-c2dcc444>📚 Documentation</h3><p data-v-c2dcc444>Comprehensive API documentation and guides</p><a href="https://www.storecove.com/docs/" target="_blank" class="support-link" data-v-c2dcc444>View Docs</a></div><div class="support-card" data-v-c2dcc444><h3 data-v-c2dcc444>💬 Support</h3><p data-v-c2dcc444>Get help from our technical support team</p><a href="mailto:apisupport@storecove.com" class="support-link" data-v-c2dcc444>Contact Support</a></div><div class="support-card" data-v-c2dcc444><h3 data-v-c2dcc444>🎯 Sandbox</h3><p data-v-c2dcc444>Test your integration in our sandbox environment</p><a href="https://app.storecove.com/" target="_blank" class="support-link" data-v-c2dcc444>Access Sandbox</a></div></div></div></div></div></section><footer class="footer" data-v-c2dcc444><div class="container" data-v-c2dcc444><div class="footer-content" data-v-c2dcc444><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Solutions</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/e-invoicing-api/" target="_blank" data-v-c2dcc444>E-invoicing API</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/peppol-access-point/" target="_blank" data-v-c2dcc444>PEPPOL Access Point</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/global-e-invoicing/" target="_blank" data-v-c2dcc444>Global E-invoicing</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/integrators/become-an-integrator/" target="_blank" data-v-c2dcc444>Become an Integrator</a></li></ul></div><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Networks</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/peppol/" target="_blank" data-v-c2dcc444>Peppol</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/dbna/" target="_blank" data-v-c2dcc444>DBNAlliance (USA)</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/finland/" target="_blank" data-v-c2dcc444>Finvoice</a></li></ul></div><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Resources</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/docs/" target="_blank" data-v-c2dcc444>API Documentation</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/blog/" target="_blank" data-v-c2dcc444>Blog</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/webinars/" target="_blank" data-v-c2dcc444>Webinars</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/whitepapers/" target="_blank" data-v-c2dcc444>White Papers</a></li></ul></div><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Support</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://help.storecove.com/en/" target="_blank" data-v-c2dcc444>Help Center</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/contact/" target="_blank" data-v-c2dcc444>Contact Us</a></li><li data-v-c2dcc444><a href="mailto:info@storecove.com" data-v-c2dcc444>info@storecove.com</a></li><li data-v-c2dcc444><a href="https://app.storecove.com/users/sign_in" target="_blank" data-v-c2dcc444>Login</a></li></ul></div></div><div class="footer-bottom" data-v-c2dcc444><div style="display:flex;align-items:center;justify-content:center;margin-bottom:1rem;" data-v-c2dcc444><img src="https://www.storecove.com/fileadmin/user_upload/Logo_white_3325x765.png" alt="Storecove" style="height:40px;width:auto;" data-v-c2dcc444></div><p data-v-c2dcc444>© 2024 Storecove. All rights reserved.</p></div></div></footer>`,2))])}const yl=De(ll,[["render",bl],["__scopeId","data-v-c2dcc444"]]);const _l={name:"GettingStartedWebinar",data(){return{feedbackSubmitted:!1}},methods:{submitFeedback(t){this.feedbackSubmitted=!0,console.log(`Feedback submitted: ${t}`)},downloadSlides(t){alert(`Slides for ${t} webinar would be downloaded. This is a demo implementation.`)}}},wl={class:"page-container"},kl={class:"page-header"},ql={class:"container"},Sl={class:"content-section"},El={class:"container"},Cl={class:"webinar-grid"},xl={class:"webinar-card"},Tl={class:"webinar-content"},Dl={class:"webinar-actions"},Il={class:"webinar-card"},Rl={class:"webinar-content"},Pl={class:"webinar-actions"},Al={class:"webinar-card"},$l={class:"webinar-content"},Ol={class:"webinar-actions"},Ll={class:"content-section"},Nl={class:"container"},jl={class:"resource-grid"},Ml={class:"resource-card"},Ul={class:"resource-content"},Bl={class:"resource-card"},Hl={class:"resource-content"},Fl={class:"resource-card"},Vl={class:"resource-content"},Wl={class:"feedback-section"},Gl={class:"container"},Kl={class:"feedback-buttons"},zl={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function Yl(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",wl,[n("div",kl,[n("div",ql,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[5]||(e[5]=[V("← Back to Toolkit",-1)])]),_:1}),e[6]||(e[6]=n("h1",{class:"page-title"},"Getting Started Webinar",-1)),e[7]||(e[7]=n("p",{class:"page-description"},"Watch our comprehensive webinars to learn about e-invoicing requirements and implementation strategies for different regions",-1))])]),e[40]||(e[40]=G('<section class="content-section" data-v-b0cb9b24><div class="container" data-v-b0cb9b24><div class="intro-section" data-v-b0cb9b24><div class="intro-content" data-v-b0cb9b24><h2 data-v-b0cb9b24>Welcome to E-invoicing Training</h2><p data-v-b0cb9b24>These webinars provide essential knowledge about e-invoicing compliance, implementation strategies, and region-specific requirements. Whether you&#39;re just getting started or looking to expand to new markets, these sessions will help you understand the landscape and plan your integration accordingly.</p><div class="highlight-box" data-v-b0cb9b24><h3 data-v-b0cb9b24>What You&#39;ll Learn</h3><ul data-v-b0cb9b24><li data-v-b0cb9b24>Regional e-invoicing mandates and compliance requirements</li><li data-v-b0cb9b24>Implementation timelines and preparation strategies</li><li data-v-b0cb9b24>Technical requirements and API integration approaches</li><li data-v-b0cb9b24>Real-world demo of Storecove&#39;s e-invoicing platform</li><li data-v-b0cb9b24>Best practices for different market scenarios</li></ul></div></div></div></div></section>',1)),n("section",Sl,[n("div",El,[e[24]||(e[24]=n("h2",{class:"section-title"},"Featured Training Sessions",-1)),n("div",Cl,[n("div",xl,[e[13]||(e[13]=n("div",{class:"webinar-header"},[n("div",{class:"webinar-tag"},"🇧🇪 Belgium"),n("span",{class:"webinar-duration"},"45 min")],-1)),n("div",Tl,[e[10]||(e[10]=n("h3",{class:"webinar-title"},"Belgium's E-Invoicing Mandate: How to Prepare for 1 January 2026",-1)),e[11]||(e[11]=n("p",{class:"webinar-description"},"Comprehensive overview of Belgium's upcoming e-invoicing mandate, including timeline, technical requirements, and preparation strategies for businesses and software providers.",-1)),e[12]||(e[12]=n("div",{class:"webinar-topics"},[n("h4",null,"Key Topics Covered:"),n("ul",null,[n("li",null,"Belgium's e-invoicing mandate timeline and phases"),n("li",null,"Technical requirements and supported formats"),n("li",null,"PEPPOL integration for Belgian market"),n("li",null,"Compliance strategies for different business sizes"),n("li",null,"Implementation roadmap and key milestones")])],-1)),n("div",Dl,[e[9]||(e[9]=n("a",{href:"https://my.demio.com/recording/FCk2cxxP",target:"_blank",class:"primary-btn"},[n("span",{class:"btn-icon"},"▶️"),V(" Watch Recording ")],-1)),n("button",{class:"secondary-btn",onClick:e[0]||(e[0]=c=>i.downloadSlides("belgium"))},[...e[8]||(e[8]=[n("span",{class:"btn-icon"},"📄",-1),V(" Download Slides ",-1)])])])])]),n("div",Il,[e[19]||(e[19]=n("div",{class:"webinar-header"},[n("div",{class:"webinar-tag"},"🇸🇬 Singapore"),n("span",{class:"webinar-duration"},"40 min")],-1)),n("div",Rl,[e[16]||(e[16]=n("h3",{class:"webinar-title"},"C5 Compliance in Singapore",-1)),e[17]||(e[17]=n("p",{class:"webinar-description"},"Deep dive into Singapore's C5 compliance framework for e-invoicing, covering technical specifications, implementation guidelines, and regulatory requirements.",-1)),e[18]||(e[18]=n("div",{class:"webinar-topics"},[n("h4",null,"Key Topics Covered:"),n("ul",null,[n("li",null,"Understanding C5 compliance framework"),n("li",null,"Singapore's e-invoicing regulatory landscape"),n("li",null,"Technical implementation requirements"),n("li",null,"Integration with local accounting systems"),n("li",null,"Compliance verification and audit trails")])],-1)),n("div",Pl,[e[15]||(e[15]=n("a",{href:"https://my.demio.com/recording/HGxNtbOd",target:"_blank",class:"primary-btn"},[n("span",{class:"btn-icon"},"▶️"),V(" Watch Recording ")],-1)),n("button",{class:"secondary-btn",onClick:e[1]||(e[1]=c=>i.downloadSlides("singapore"))},[...e[14]||(e[14]=[n("span",{class:"btn-icon"},"📄",-1),V(" Download Slides ",-1)])])])])]),n("div",Al,[e[23]||(e[23]=n("div",{class:"webinar-header"},[n("div",{class:"webinar-tag"},"🇲🇾 Malaysia"),n("span",{class:"webinar-duration"},"50 min")],-1)),n("div",$l,[e[22]||(e[22]=G('<h3 class="webinar-title" data-v-b0cb9b24>Malaysia e-Invoicing: Storecove e-Invoicing API DEMO</h3><p class="webinar-description" data-v-b0cb9b24>Live demonstration of implementing e-invoicing for the Malaysian market using Storecove&#39;s API, including practical examples and code walkthroughs.</p><div class="webinar-topics" data-v-b0cb9b24><h4 data-v-b0cb9b24>Key Topics Covered:</h4><ul data-v-b0cb9b24><li data-v-b0cb9b24>Malaysia&#39;s e-invoicing mandate overview</li><li data-v-b0cb9b24>Live API demonstration and implementation</li><li data-v-b0cb9b24>Document format requirements and validation</li><li data-v-b0cb9b24>Integration patterns and best practices</li><li data-v-b0cb9b24>Real-world use cases and scenarios</li><li data-v-b0cb9b24>Q&amp;A with technical implementation examples</li></ul></div>',3)),n("div",Ol,[e[21]||(e[21]=n("a",{href:"https://my.demio.com/recording/eojMpBFi",target:"_blank",class:"primary-btn"},[n("span",{class:"btn-icon"},"▶️"),V(" Watch Recording ")],-1)),n("button",{class:"secondary-btn",onClick:e[2]||(e[2]=c=>i.downloadSlides("malaysia"))},[...e[20]||(e[20]=[n("span",{class:"btn-icon"},"📄",-1),V(" Download Slides ",-1)])])])])])])])]),n("section",Ll,[n("div",Nl,[e[38]||(e[38]=n("h2",{class:"section-title"},"Additional Learning Resources",-1)),n("div",jl,[n("div",Ml,[e[28]||(e[28]=n("div",{class:"resource-icon"},"📚",-1)),n("div",Ul,[e[26]||(e[26]=n("h3",null,"E-invoicing Fundamentals",-1)),e[27]||(e[27]=n("p",null,"Start with the basics of e-invoicing, understanding different formats, networks, and compliance requirements.",-1)),L(r,{to:"/integration-basics-faq",class:"resource-link"},{default:F(()=>[...e[25]||(e[25]=[V("View FAQ →",-1)])]),_:1})])]),n("div",Bl,[e[32]||(e[32]=n("div",{class:"resource-icon"},"💻",-1)),n("div",Hl,[e[30]||(e[30]=n("h3",null,"Technical Implementation",-1)),e[31]||(e[31]=n("p",null,"Detailed guides on API integration, document formats, and technical implementation patterns.",-1)),L(r,{to:"/implementation-guide",class:"resource-link"},{default:F(()=>[...e[29]||(e[29]=[V("View Guide →",-1)])]),_:1})])]),n("div",Fl,[e[36]||(e[36]=n("div",{class:"resource-icon"},"📋",-1)),n("div",Vl,[e[34]||(e[34]=n("h3",null,"Sample Code Examples",-1)),e[35]||(e[35]=n("p",null,"Ready-to-use code examples in multiple programming languages for common integration scenarios.",-1)),L(r,{to:"/sample-code",class:"resource-link"},{default:F(()=>[...e[33]||(e[33]=[V("View Examples →",-1)])]),_:1})])]),e[37]||(e[37]=n("div",{class:"resource-card"},[n("div",{class:"resource-icon"},"🌐"),n("div",{class:"resource-content"},[n("h3",null,"Regional Compliance"),n("p",null,"Stay updated on e-invoicing mandates and requirements across different countries and regions."),n("a",{href:"https://www.storecove.com/blog/",target:"_blank",class:"resource-link"},"Read Blog →")])],-1))])])]),e[41]||(e[41]=G('<section class="content-section next-steps-section" data-v-b0cb9b24><div class="container" data-v-b0cb9b24><div class="next-steps-content" data-v-b0cb9b24><h2 data-v-b0cb9b24>Ready to Get Started?</h2><p data-v-b0cb9b24>After watching these webinars, you&#39;ll have a solid understanding of e-invoicing requirements and implementation strategies. Here&#39;s what you can do next:</p><div class="steps-grid" data-v-b0cb9b24><div class="step-card" data-v-b0cb9b24><div class="step-number" data-v-b0cb9b24>1</div><div class="step-content" data-v-b0cb9b24><h3 data-v-b0cb9b24>Explore the Documentation</h3><p data-v-b0cb9b24>Dive deeper into our comprehensive API documentation to understand the technical details.</p><a href="https://www.storecove.com/docs/" target="_blank" class="step-link" data-v-b0cb9b24>View Docs →</a></div></div><div class="step-card" data-v-b0cb9b24><div class="step-number" data-v-b0cb9b24>2</div><div class="step-content" data-v-b0cb9b24><h3 data-v-b0cb9b24>Try the Sandbox</h3><p data-v-b0cb9b24>Test your integration in our sandbox environment before going live with real transactions.</p><a href="https://app.storecove.com/" target="_blank" class="step-link" data-v-b0cb9b24>Access Sandbox →</a></div></div><div class="step-card" data-v-b0cb9b24><div class="step-number" data-v-b0cb9b24>3</div><div class="step-content" data-v-b0cb9b24><h3 data-v-b0cb9b24>Contact Our Team</h3><p data-v-b0cb9b24>Get personalized support and guidance from our integration specialists.</p><a href="https://www.storecove.com/us/en/contact/" target="_blank" class="step-link" data-v-b0cb9b24>Contact Us →</a></div></div></div></div></div></section>',1)),n("section",Wl,[n("div",Gl,[e[39]||(e[39]=n("h3",{class:"feedback-question"},"Was this webinar content helpful?",-1)),n("div",Kl,[n("button",{class:"feedback-btn",onClick:e[3]||(e[3]=c=>i.submitFeedback("yes"))},"👍 Yes"),n("button",{class:"feedback-btn",onClick:e[4]||(e[4]=c=>i.submitFeedback("no"))},"👎 No")]),o.feedbackSubmitted?(re(),ce("p",zl," Thank you for your feedback! ")):$t("",!0)])])])}const Jl=De(_l,[["render",Yl],["__scopeId","data-v-b0cb9b24"]]);const Ql={name:"PlatformPlugins",data(){return{email:"",subscribed:!1,feedbackSubmitted:!1,showRequestForm:!1,platformRequest:{name:"",type:"",useCase:"",email:""}}},methods:{subscribeToUpdates(){this.email&&!this.subscribed&&(this.subscribed=!0,console.log(`Subscribed email: ${this.email}`))},submitFeedback(t){this.feedbackSubmitted=!0,console.log(`Platform feedback: ${t}`)},submitPlatformRequest(){console.log("Platform request submitted:",this.platformRequest),this.showRequestForm=!1,alert("Thank you for your request! We'll consider it for our roadmap and get back to you."),this.platformRequest={name:"",type:"",useCase:"",email:""}}}},Xl={class:"page-container"},Zl={class:"page-header"},eu={class:"container"},tu={class:"coming-soon-section"},nu={class:"container"},au={class:"coming-soon-content"},su={class:"notify-section"},ou={class:"notify-form"},iu=["disabled"],ru={key:0,class:"success-message"},cu={class:"content-section"},du={class:"container"},lu={class:"custom-options-grid"},uu={class:"custom-option-card"},vu={class:"custom-content"},pu={class:"custom-option-card"},fu={class:"custom-content"},mu={class:"modal-header"},gu={class:"modal-body"},hu={class:"form-group"},bu={class:"form-group"},yu={class:"form-group"},_u={class:"form-group"},wu={class:"form-actions"},ku={class:"content-section alternatives-section"},qu={class:"container"},Su={class:"alternatives-grid"},Eu={class:"alternative-card"},Cu={class:"alternative-content"},xu={class:"alternative-card"},Tu={class:"alternative-content"},Du={class:"feedback-section"},Iu={class:"container"},Ru={class:"feedback-buttons"},Pu={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function Au(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",Xl,[n("div",Zl,[n("div",eu,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[17]||(e[17]=[V("← Back to Toolkit",-1)])]),_:1}),e[18]||(e[18]=n("h1",{class:"page-title"},"Platform Plugins",-1)),e[19]||(e[19]=n("p",{class:"page-description"},"Pre-built integrations for popular accounting platforms and ERP systems",-1))])]),n("section",tu,[n("div",nu,[n("div",au,[e[22]||(e[22]=n("div",{class:"coming-soon-icon"},"🚀",-1)),e[23]||(e[23]=n("h2",null,"Coming Soon",-1)),e[24]||(e[24]=n("p",null,"We're working hard to bring you ready-to-use plugins for the most popular accounting and ERP platforms. These plugins will make e-invoicing integration even easier by providing pre-built connectors that require minimal configuration.",-1)),n("div",su,[e[20]||(e[20]=n("h3",null,"Get Notified When Available",-1)),e[21]||(e[21]=n("p",null,"Be the first to know when our platform plugins are ready. We'll send you an email with installation instructions and setup guides.",-1)),n("div",ou,[tt(n("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=c=>o.email=c),placeholder:"Enter your email address",class:"email-input",onKeyup:e[1]||(e[1]=Rc((...c)=>i.subscribeToUpdates&&i.subscribeToUpdates(...c),["enter"]))},null,544),[[bn,o.email]]),n("button",{onClick:e[2]||(e[2]=(...c)=>i.subscribeToUpdates&&i.subscribeToUpdates(...c)),class:"notify-btn",disabled:!o.email||o.subscribed},Qs(o.subscribed?"✓ Subscribed":"Notify Me"),9,iu)]),o.subscribed?(re(),ce("p",ru," Thanks! We'll notify you when platform plugins are available. ")):$t("",!0)])])])]),e[56]||(e[56]=G('<section class="content-section" data-v-b1966f3a><div class="container" data-v-b1966f3a><h2 class="section-title" data-v-b1966f3a>Planned Platform Integrations</h2><p class="section-description" data-v-b1966f3a>Here&#39;s what we&#39;re working on to make e-invoicing integration seamless across different platforms</p><div class="plugin-grid" data-v-b1966f3a><div class="plugin-category" data-v-b1966f3a><h3 class="category-title" data-v-b1966f3a><span class="category-icon" data-v-b1966f3a>💰</span> Accounting Software </h3><div class="plugin-list" data-v-b1966f3a><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/quickbooks.intuit.com" alt="QuickBooks" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>QuickBooks Online</h4><p data-v-b1966f3a>Direct integration with QuickBooks Online for automated e-invoice sending and receiving</p></div></div><span class="plugin-status" data-v-b1966f3a>Q2 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/xero.com" alt="Xero" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Xero</h4><p data-v-b1966f3a>Seamless e-invoicing integration with Xero accounting platform</p></div></div><span class="plugin-status" data-v-b1966f3a>Q2 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/sage.com" alt="Sage" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Sage Business Cloud</h4><p data-v-b1966f3a>Plugin for Sage Business Cloud Accounting with full e-invoicing support</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><div class="plugin-logo plugin-placeholder" data-v-b1966f3a>FW</div><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>FreshBooks</h4><p data-v-b1966f3a>E-invoicing capabilities integrated directly into FreshBooks workflow</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div></div></div><div class="plugin-category" data-v-b1966f3a><h3 class="category-title" data-v-b1966f3a><span class="category-icon" data-v-b1966f3a>🏢</span> ERP Systems </h3><div class="plugin-list" data-v-b1966f3a><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/sap.com" alt="SAP" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>SAP Business One</h4><p data-v-b1966f3a>Enterprise-grade e-invoicing integration for SAP Business One systems</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/oracle.com" alt="Oracle" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Oracle NetSuite</h4><p data-v-b1966f3a>Comprehensive e-invoicing solution for Oracle NetSuite environments</p></div></div><span class="plugin-status" data-v-b1966f3a>Q4 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Microsoft Dynamics 365</h4><p data-v-b1966f3a>Native e-invoicing integration for Microsoft Dynamics 365 Business Central</p></div></div><span class="plugin-status" data-v-b1966f3a>Q4 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/odoo.com" alt="Odoo" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Odoo</h4><p data-v-b1966f3a>Open-source ERP integration with full e-invoicing compliance features</p></div></div><span class="plugin-status" data-v-b1966f3a>Q1 2025</span></div></div></div><div class="plugin-category" data-v-b1966f3a><h3 class="category-title" data-v-b1966f3a><span class="category-icon" data-v-b1966f3a>🛒</span> E-commerce Platforms </h3><div class="plugin-list" data-v-b1966f3a><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/shopify.com" alt="Shopify" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Shopify</h4><p data-v-b1966f3a>Automated e-invoicing for Shopify stores with compliance features</p></div></div><span class="plugin-status" data-v-b1966f3a>Q2 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/woocommerce.com" alt="WooCommerce" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>WooCommerce</h4><p data-v-b1966f3a>WordPress e-commerce plugin with integrated e-invoicing capabilities</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/magento.com" alt="Magento" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Magento Commerce</h4><p data-v-b1966f3a>Enterprise e-commerce solution with comprehensive e-invoicing integration</p></div></div><span class="plugin-status" data-v-b1966f3a>Q4 2024</span></div></div></div></div></div></section>',1)),n("section",cu,[n("div",du,[e[33]||(e[33]=n("h2",{class:"section-title"},"Need Something Custom?",-1)),n("div",lu,[e[32]||(e[32]=n("div",{class:"custom-option-card"},[n("div",{class:"custom-icon"},"🔧"),n("div",{class:"custom-content"},[n("h3",null,"Custom Plugin Development"),n("p",null,"We can develop custom plugins for your specific platform or system. Our team has experience integrating with various APIs and can create tailored solutions."),n("a",{href:"https://www.storecove.com/us/en/contact/",target:"_blank",class:"custom-link"},"Discuss Custom Development →")])],-1)),n("div",uu,[e[27]||(e[27]=n("div",{class:"custom-icon"},"📋",-1)),n("div",vu,[e[25]||(e[25]=n("h3",null,"Request a Platform",-1)),e[26]||(e[26]=n("p",null,"Don't see your platform listed? Let us know what you need and we'll consider it for our roadmap based on demand and feasibility.",-1)),n("button",{onClick:e[3]||(e[3]=c=>o.showRequestForm=!0),class:"custom-link"},"Request Platform →")])]),n("div",pu,[e[31]||(e[31]=n("div",{class:"custom-icon"},"💻",-1)),n("div",fu,[e[29]||(e[29]=n("h3",null,"Direct API Integration",-1)),e[30]||(e[30]=n("p",null,"For maximum flexibility, you can always integrate directly with our REST API. We provide comprehensive documentation and code examples.",-1)),L(r,{to:"/implementation-guide",class:"custom-link"},{default:F(()=>[...e[28]||(e[28]=[V("View Implementation Guide →",-1)])]),_:1})])])])])]),o.showRequestForm?(re(),ce("div",{key:0,class:"modal-overlay",onClick:e[12]||(e[12]=c=>o.showRequestForm=!1)},[n("div",{class:"modal-content",onClick:e[11]||(e[11]=Es(()=>{},["stop"]))},[n("div",mu,[e[34]||(e[34]=n("h3",null,"Request a Platform Plugin",-1)),n("button",{onClick:e[4]||(e[4]=c=>o.showRequestForm=!1),class:"close-btn"},"×")]),n("div",gu,[e[41]||(e[41]=n("p",null,"Help us prioritize our plugin development by telling us which platform you need:",-1)),n("form",{onSubmit:e[10]||(e[10]=Es((...c)=>i.submitPlatformRequest&&i.submitPlatformRequest(...c),["prevent"]))},[n("div",hu,[e[35]||(e[35]=n("label",{for:"platform-name"},"Platform Name *",-1)),tt(n("input",{type:"text",id:"platform-name","onUpdate:modelValue":e[5]||(e[5]=c=>o.platformRequest.name=c),placeholder:"e.g., Salesforce, HubSpot, etc.",required:""},null,512),[[bn,o.platformRequest.name]])]),n("div",bu,[e[37]||(e[37]=n("label",{for:"platform-type"},"Platform Type *",-1)),tt(n("select",{id:"platform-type","onUpdate:modelValue":e[6]||(e[6]=c=>o.platformRequest.type=c),required:""},[...e[36]||(e[36]=[G('<option value="" data-v-b1966f3a>Select type...</option><option value="accounting" data-v-b1966f3a>Accounting Software</option><option value="erp" data-v-b1966f3a>ERP System</option><option value="ecommerce" data-v-b1966f3a>E-commerce Platform</option><option value="crm" data-v-b1966f3a>CRM System</option><option value="other" data-v-b1966f3a>Other</option>',6)])],512),[[xc,o.platformRequest.type]])]),n("div",yu,[e[38]||(e[38]=n("label",{for:"use-case"},"Use Case *",-1)),tt(n("textarea",{id:"use-case","onUpdate:modelValue":e[7]||(e[7]=c=>o.platformRequest.useCase=c),placeholder:"Describe how you would use this integration...",rows:"3",required:""},null,512),[[bn,o.platformRequest.useCase]])]),n("div",_u,[e[39]||(e[39]=n("label",{for:"contact-email"},"Contact Email *",-1)),tt(n("input",{type:"email",id:"contact-email","onUpdate:modelValue":e[8]||(e[8]=c=>o.platformRequest.email=c),placeholder:"your@email.com",required:""},null,512),[[bn,o.platformRequest.email]])]),n("div",wu,[n("button",{type:"button",onClick:e[9]||(e[9]=c=>o.showRequestForm=!1),class:"secondary-btn"},"Cancel"),e[40]||(e[40]=n("button",{type:"submit",class:"primary-btn"},"Submit Request",-1))])],32)])])])):$t("",!0),n("section",ku,[n("div",qu,[e[53]||(e[53]=n("h2",{class:"section-title"},"Current Integration Options",-1)),e[54]||(e[54]=n("p",{class:"section-description"},"While we work on these plugins, here are the current ways to integrate e-invoicing:",-1)),n("div",Su,[e[52]||(e[52]=G('<div class="alternative-card" data-v-b1966f3a><div class="alternative-icon" data-v-b1966f3a>🔌</div><div class="alternative-content" data-v-b1966f3a><h3 data-v-b1966f3a>REST API Integration</h3><p data-v-b1966f3a>Our comprehensive REST API provides full access to all e-invoicing features. Perfect for custom integrations and existing applications.</p><div class="alternative-features" data-v-b1966f3a><span class="feature-tag" data-v-b1966f3a>Full Control</span><span class="feature-tag" data-v-b1966f3a>Real-time</span><span class="feature-tag" data-v-b1966f3a>Scalable</span></div><a href="https://www.storecove.com/docs/" target="_blank" class="alternative-link" data-v-b1966f3a>Explore API →</a></div></div>',1)),n("div",Eu,[e[46]||(e[46]=n("div",{class:"alternative-icon"},"📚",-1)),n("div",Cu,[e[43]||(e[43]=n("h3",null,"SDK Libraries",-1)),e[44]||(e[44]=n("p",null,"Use our SDK libraries in various programming languages to speed up your integration development process.",-1)),e[45]||(e[45]=n("div",{class:"alternative-features"},[n("span",{class:"feature-tag"},"Multiple Languages"),n("span",{class:"feature-tag"},"Type Safe"),n("span",{class:"feature-tag"},"Well Documented")],-1)),L(r,{to:"/sdk-libraries",class:"alternative-link"},{default:F(()=>[...e[42]||(e[42]=[V("View SDKs →",-1)])]),_:1})])]),n("div",xu,[e[51]||(e[51]=n("div",{class:"alternative-icon"},"📋",-1)),n("div",Tu,[e[48]||(e[48]=n("h3",null,"Sample Code & Examples",-1)),e[49]||(e[49]=n("p",null,"Ready-to-use code examples and implementation patterns to help you get started quickly with common scenarios.",-1)),e[50]||(e[50]=n("div",{class:"alternative-features"},[n("span",{class:"feature-tag"},"Copy & Paste"),n("span",{class:"feature-tag"},"Best Practices"),n("span",{class:"feature-tag"},"Production Ready")],-1)),L(r,{to:"/sample-code",class:"alternative-link"},{default:F(()=>[...e[47]||(e[47]=[V("View Examples →",-1)])]),_:1})])])])])]),n("section",Du,[n("div",Iu,[e[55]||(e[55]=n("h3",{class:"feedback-question"},"Which platform integration would be most valuable to you?",-1)),n("div",Ru,[n("button",{class:"feedback-btn",onClick:e[13]||(e[13]=c=>i.submitFeedback("accounting"))},"💰 Accounting Software"),n("button",{class:"feedback-btn",onClick:e[14]||(e[14]=c=>i.submitFeedback("erp"))},"🏢 ERP Systems"),n("button",{class:"feedback-btn",onClick:e[15]||(e[15]=c=>i.submitFeedback("ecommerce"))},"🛒 E-commerce Platforms"),n("button",{class:"feedback-btn",onClick:e[16]||(e[16]=c=>i.submitFeedback("other"))},"🔧 Other/Custom")]),o.feedbackSubmitted?(re(),ce("p",Pu," Thank you for your input! This helps us prioritize our development. ")):$t("",!0)])])])}const $u=De(Ql,[["render",Au],["__scopeId","data-v-b1966f3a"]]);const Ou={name:"SDKLibraries",mounted(){window.showTab=t=>{document.querySelectorAll(".tab-content").forEach(e=>{e.classList.remove("active")}),document.querySelectorAll(".tab-button").forEach(e=>{e.classList.remove("active")}),document.getElementById(t).classList.add("active"),event.target.classList.add("active")},window.showCodeGenInstructions=()=>{alert(`To generate a client library:

1. Download Swagger Codegen CLI
2. Run: java -jar swagger-codegen-cli.jar generate -i https://api.storecove.com/api/v2/openapi.json -l [language] -o ./output
3. Replace [language] with your target language (java, csharp, python, etc.)`)}}},Lu={class:"sdk-libraries"},Nu={class:"back-navigation"},ju={class:"container"};function Mu(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",Lu,[e[1]||(e[1]=n("div",{class:"hero-section"},[n("div",{class:"container"},[n("div",{class:"hero-content"},[n("h1",null,"SDK Libraries"),n("p",null,"Official and community-maintained SDKs for Storecove integration")])])],-1)),e[2]||(e[2]=n("section",{class:"content-section"},[n("div",{class:"container"},[n("div",{class:"section-block"},[n("h2",null,"🚀 OpenAPI 2.0 Specification"),n("div",{class:"highlight-box"},[n("p",null,[V("Storecove API is built on "),n("strong",null,"OpenAPI 2.0 specification"),V(", making it easy to generate client libraries in multiple programming languages.")]),n("div",{class:"api-info"},[n("div",{class:"api-detail"},[n("strong",null,"API Version:"),V(" 2.0.1 ")]),n("div",{class:"api-detail"},[n("strong",null,"Base URL:"),V(),n("code",null,"https://api.storecove.com/api/v2")]),n("div",{class:"api-detail"},[n("strong",null,"OpenAPI Spec:"),V(),n("code",null,"https://api.storecove.com/api/v2/openapi.json")])])])]),n("div",{class:"section-block"},[n("h2",null,"⚡ Generate Client Libraries"),n("p",null,"Use Swagger Codegen to automatically generate client libraries for your preferred programming language:"),n("div",{class:"code-example"},[n("h3",null,"Java Example"),n("pre",null,[n("code",null,`# Download Swagger Codegen JAR
wget https://repo1.maven.org/maven2/io/swagger/swagger-codegen-cli/2.4.32/swagger-codegen-cli-2.4.32.jar

# Generate Java client
java -jar swagger-codegen-cli-2.4.32.jar generate \\
  -i https://api.storecove.com/api/v2/openapi.json \\
  -l java \\
  -o ./storecove-java-client`)])]),n("div",{class:"code-example"},[n("h3",null,"C# Example"),n("pre",null,[n("code",null,`# Generate C# client
java -jar swagger-codegen-cli-2.4.32.jar generate \\
  -i https://api.storecove.com/api/v2/openapi.json \\
  -l csharp \\
  -o ./storecove-csharp-client`)])])]),n("div",{class:"section-block"},[n("h2",null,"🌍 Supported Programming Languages"),n("p",null,"Swagger Codegen supports client library generation for these languages and frameworks:"),n("div",{class:"language-grid"},[n("div",{class:"language-category"},[n("h3",null,"Popular Languages"),n("div",{class:"language-list"},[n("span",{class:"language-tag featured"},"Java"),n("span",{class:"language-tag featured"},"C#"),n("span",{class:"language-tag featured"},"Node.js"),n("span",{class:"language-tag featured"},"Python"),n("span",{class:"language-tag featured"},"PHP"),n("span",{class:"language-tag featured"},"Ruby"),n("span",{class:"language-tag featured"},"Go"),n("span",{class:"language-tag featured"},"Swift")])]),n("div",{class:"language-category"},[n("h3",null,"Mobile Development"),n("div",{class:"language-list"},[n("span",{class:"language-tag"},"Android"),n("span",{class:"language-tag"},"Objective-C"),n("span",{class:"language-tag"},"Swift (iOS)"),n("span",{class:"language-tag"},"Kotlin"),n("span",{class:"language-tag"},"Dart (Flutter)")])]),n("div",{class:"language-category"},[n("h3",null,"Web & JavaScript"),n("div",{class:"language-list"},[n("span",{class:"language-tag"},"JavaScript"),n("span",{class:"language-tag"},"TypeScript"),n("span",{class:"language-tag"},"Angular"),n("span",{class:"language-tag"},"React"),n("span",{class:"language-tag"},"Vue.js")])]),n("div",{class:"language-category"},[n("h3",null,"Other Languages"),n("div",{class:"language-list"},[n("span",{class:"language-tag"},"Perl"),n("span",{class:"language-tag"},"Scala"),n("span",{class:"language-tag"},"R"),n("span",{class:"language-tag"},"Rust"),n("span",{class:"language-tag"},"Haskell"),n("span",{class:"language-tag"},"Erlang"),n("span",{class:"language-tag"},"Clojure"),n("span",{class:"language-tag"},"Ada")])])])]),n("div",{class:"section-block"},[n("h2",null,"💡 Quick Integration Examples"),n("div",{class:"integration-tabs"},[n("div",{class:"tab-buttons"},[n("button",{class:"tab-button active",onclick:"showTab('curl')"},"cURL"),n("button",{class:"tab-button",onclick:"showTab('javascript')"},"JavaScript"),n("button",{class:"tab-button",onclick:"showTab('python')"},"Python"),n("button",{class:"tab-button",onclick:"showTab('java')"},"Java")]),n("div",{id:"curl",class:"tab-content active"},[n("h3",null,"cURL Example"),n("pre",null,[n("code",null,`# Submit a document
curl -X POST "https://api.storecove.com/api/v2/document_submissions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "legalEntityId": 123,
    "routing": {
      "eIdentifiers": [
        {
          "scheme": "DE:VAT",
          "id": "DE123456789"
        }
      ]
    },
    "document": {
      "documentType": "Invoice",
      "invoice": {
        "invoiceNumber": "INV-2024-001",
        "issueDate": "2024-01-15",
        "accountingCustomerParty": {
          "party": {
            "companyName": "Example Company"
          }
        },
        "invoiceLines": []
      }
    }
  }'`)])]),n("div",{id:"javascript",class:"tab-content"},[n("h3",null,"JavaScript/Node.js Example"),n("pre",null,[n("code",null,`const axios = require('axios');

const storecoveClient = axios.create({
  baseURL: 'https://api.storecove.com/api/v2',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

async function submitDocument() {
  try {
    const response = await storecoveClient.post('/document_submissions', {
      legalEntityId: 123,
      routing: {
        eIdentifiers: [
          {
            scheme: "DE:VAT",
            id: "DE123456789"
          }
        ]
      },
      document: {
        documentType: "Invoice",
        invoice: {
          invoiceNumber: "INV-2024-001",
          issueDate: "2024-01-15",
          accountingCustomerParty: {
            party: {
              companyName: "Example Company"
            }
          },
          invoiceLines: []
        }
      }
    });
    
    console.log('Document submitted:', response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}`)])]),n("div",{id:"python",class:"tab-content"},[n("h3",null,"Python Example"),n("pre",null,[n("code",null,`import requests
import json

class StorecoveClient:
    def __init__(self, api_key):
        self.base_url = "https://api.storecove.com/api/v2"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def submit_document(self, document_data):
        url = f"{self.base_url}/document_submissions"
        response = requests.post(url, headers=self.headers, json=document_data)
        return response.json()

# Usage
client = StorecoveClient("YOUR_API_KEY")

document = {
    "legalEntityId": 123,
    "routing": {
        "eIdentifiers": [
            {
                "scheme": "DE:VAT",
                "id": "DE123456789"
            }
        ]
    },
    "document": {
        "documentType": "Invoice",
        "invoice": {
            "invoiceNumber": "INV-2024-001",
            "issueDate": "2024-01-15",
            "accountingCustomerParty": {
                "party": {
                    "companyName": "Example Company"
                }
            },
            "invoiceLines": []
        }
    }
}

result = client.submit_document(document)
print(json.dumps(result, indent=2))`)])]),n("div",{id:"java",class:"tab-content"},[n("h3",null,"Java Example"),n("pre",null,[n("code",null,`import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;

public class StorecoveClient {
    private final String baseUrl = "https://api.storecove.com/api/v2";
    private final String apiKey;
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    
    public StorecoveClient(String apiKey) {
        this.apiKey = apiKey;
        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }
    
    public String submitDocument(Object documentData) throws Exception {
        String json = objectMapper.writeValueAsString(documentData);
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/document_submissions"))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();
            
        HttpResponse<String> response = httpClient.send(request, 
            HttpResponse.BodyHandlers.ofString());
            
        return response.body();
    }
}`)])])])]),n("div",{class:"section-block"},[n("h2",null,"🛠️ Integration Tools & Resources"),n("div",{class:"tools-grid"},[n("div",{class:"tool-card"},[n("h3",null,"📮 Postman Collection"),n("p",null,"Ready-to-use Postman collection with all Storecove API endpoints pre-configured."),n("div",{class:"tool-actions"},[n("a",{href:"https://api.storecove.com/api/v2/openapi.json",class:"btn-secondary",target:"_blank"}," Import OpenAPI Spec ")])]),n("div",{class:"tool-card"},[n("h3",null,"🔧 Swagger UI"),n("p",null,"Interactive API documentation with live testing capabilities."),n("div",{class:"tool-actions"},[n("a",{href:"https://api.storecove.com/docs",class:"btn-secondary",target:"_blank"}," Open Swagger UI ")])]),n("div",{class:"tool-card"},[n("h3",null,"⚡ Code Generator"),n("p",null,"Generate client libraries automatically using Swagger Codegen."),n("div",{class:"tool-actions"},[n("button",{class:"btn-secondary",onclick:"showCodeGenInstructions()"}," View Instructions ")])]),n("div",{class:"tool-card"},[n("h3",null,"📚 REST Clients"),n("p",null,"Use any generic REST client library with the OpenAPI specification."),n("div",{class:"tool-actions"},[n("span",{class:"tool-note"},"Language agnostic")])])])]),n("div",{class:"section-block"},[n("h2",null,"✅ SDK Development Best Practices"),n("div",{class:"best-practices"},[n("div",{class:"practice-item"},[n("div",{class:"practice-icon"},"🔐"),n("div",{class:"practice-content"},[n("h3",null,"Authentication"),n("p",null,"Always use Bearer token authentication and store API keys securely. Never commit API keys to version control.")])]),n("div",{class:"practice-item"},[n("div",{class:"practice-icon"},"🔄"),n("div",{class:"practice-content"},[n("h3",null,"Error Handling"),n("p",null,"Implement comprehensive error handling for HTTP status codes, network failures, and API validation errors.")])]),n("div",{class:"practice-item"},[n("div",{class:"practice-icon"},"📊"),n("div",{class:"practice-content"},[n("h3",null,"Rate Limiting"),n("p",null,"Respect API rate limits and implement exponential backoff for retries.")])]),n("div",{class:"practice-item"},[n("div",{class:"practice-icon"},"🔍"),n("div",{class:"practice-content"},[n("h3",null,"Logging"),n("p",null,"Log API requests and responses for debugging, but never log sensitive data like API keys.")])]),n("div",{class:"practice-item"},[n("div",{class:"practice-icon"},"🏗️"),n("div",{class:"practice-content"},[n("h3",null,"Data Validation"),n("p",null,"Validate data before sending to the API. Use the OpenAPI schema for client-side validation.")])]),n("div",{class:"practice-item"},[n("div",{class:"practice-icon"},"🧪"),n("div",{class:"practice-content"},[n("h3",null,"Testing"),n("p",null,"Use the sandbox environment for testing. Implement unit and integration tests for your SDK.")])])])]),n("div",{class:"section-block"},[n("h2",null,"🔄 Keeping SDKs Updated"),n("div",{class:"maintenance-info"},[n("p",null,"The Storecove API evolves over time. Keep your generated SDKs updated by:"),n("ul",null,[n("li",null,"Regularly checking the OpenAPI specification for changes"),n("li",null,"Regenerating client libraries when new API versions are released"),n("li",null,"Testing compatibility with new API features"),n("li",null,"Updating your application code to handle API deprecations")]),n("div",{class:"update-command"},[n("h4",null,"Quick Update Command"),n("pre",null,[n("code",null,`# Regenerate your client library
java -jar swagger-codegen-cli-2.4.32.jar generate \\
  -i https://api.storecove.com/api/v2/openapi.json \\
  -l [your-language] \\
  -o ./storecove-client`)])])])])])],-1)),n("section",Nu,[n("div",ju,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[0]||(e[0]=[V(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const Uu=De(Ou,[["render",Mu],["__scopeId","data-v-b89e00be"]]);const Bu={name:"ImplementationGuide",mounted(){window.scrollToSection=t=>{const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})},window.showCodeTab=t=>{document.querySelectorAll(".code-content").forEach(a=>{a.classList.remove("active")}),document.querySelectorAll(".code-tab").forEach(a=>{a.classList.remove("active")});const e=document.getElementById(t);e&&e.classList.add("active"),event.target.classList.add("active")},this.trackProgress()},methods:{trackProgress(){document.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.addEventListener("change",()=>{this.updateProgress()})})},updateProgress(){const t=document.querySelectorAll('input[type="checkbox"]').length,e=document.querySelectorAll('input[type="checkbox"]:checked').length,a=Math.round(e/t*100),s=document.querySelector(".progress-indicator");s&&(s.textContent=`Progress: ${a}%`)}}},Hu={class:"implementation-guide"},Fu={class:"content-section"},Vu={class:"container"},Wu={class:"toc-section"},Gu={class:"toc-grid"},Ku={class:"next-steps"},zu={class:"next-steps-grid"},Yu={class:"next-step-item"},Ju={class:"next-step-item"},Qu={class:"next-step-item"},Xu={class:"back-navigation"},Zu={class:"container"};function ev(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",Hu,[e[33]||(e[33]=n("div",{class:"hero-section"},[n("div",{class:"container"},[n("div",{class:"hero-content"},[n("h1",null,"Implementation Guide"),n("p",null,"Step-by-step guide to implementing Storecove e-invoicing")])])],-1)),n("section",Fu,[n("div",Vu,[n("div",Wu,[e[16]||(e[16]=n("h2",null,"📋 Implementation Overview",-1)),n("div",Gu,[n("div",{class:"toc-item",onClick:e[0]||(e[0]=c=>t.scrollToSection("prerequisites"))},[...e[8]||(e[8]=[n("div",{class:"toc-number"},"1",-1),n("div",{class:"toc-content"},[n("h3",null,"Prerequisites"),n("p",null,"Account setup and initial configuration")],-1)])]),n("div",{class:"toc-item",onClick:e[1]||(e[1]=c=>t.scrollToSection("authentication"))},[...e[9]||(e[9]=[n("div",{class:"toc-number"},"2",-1),n("div",{class:"toc-content"},[n("h3",null,"Authentication"),n("p",null,"API key setup and security best practices")],-1)])]),n("div",{class:"toc-item",onClick:e[2]||(e[2]=c=>t.scrollToSection("legal-entities"))},[...e[10]||(e[10]=[n("div",{class:"toc-number"},"3",-1),n("div",{class:"toc-content"},[n("h3",null,"Legal Entities"),n("p",null,"Configure your business entities")],-1)])]),n("div",{class:"toc-item",onClick:e[3]||(e[3]=c=>t.scrollToSection("identifiers"))},[...e[11]||(e[11]=[n("div",{class:"toc-number"},"4",-1),n("div",{class:"toc-content"},[n("h3",null,"Identifiers"),n("p",null,"Set up PEPPOL and tax identifiers")],-1)])]),n("div",{class:"toc-item",onClick:e[4]||(e[4]=c=>t.scrollToSection("document-submission"))},[...e[12]||(e[12]=[n("div",{class:"toc-number"},"5",-1),n("div",{class:"toc-content"},[n("h3",null,"Document Submission"),n("p",null,"Send your first e-invoice")],-1)])]),n("div",{class:"toc-item",onClick:e[5]||(e[5]=c=>t.scrollToSection("webhooks"))},[...e[13]||(e[13]=[n("div",{class:"toc-number"},"6",-1),n("div",{class:"toc-content"},[n("h3",null,"Webhooks"),n("p",null,"Handle delivery notifications")],-1)])]),n("div",{class:"toc-item",onClick:e[6]||(e[6]=c=>t.scrollToSection("testing"))},[...e[14]||(e[14]=[n("div",{class:"toc-number"},"7",-1),n("div",{class:"toc-content"},[n("h3",null,"Testing"),n("p",null,"Validate your integration")],-1)])]),n("div",{class:"toc-item",onClick:e[7]||(e[7]=c=>t.scrollToSection("go-live"))},[...e[15]||(e[15]=[n("div",{class:"toc-number"},"8",-1),n("div",{class:"toc-content"},[n("h3",null,"Go Live"),n("p",null,"Production deployment checklist")],-1)])])])]),e[27]||(e[27]=G('<div id="prerequisites" class="implementation-step" data-v-84a64480><div class="step-header" data-v-84a64480><span class="step-number" data-v-84a64480>1</span><h2 data-v-84a64480>📋 Prerequisites</h2></div><div class="step-content" data-v-84a64480><h3 data-v-84a64480>Before You Begin</h3><div class="checklist" data-v-84a64480><div class="checklist-item" data-v-84a64480><input type="checkbox" id="account" data-v-84a64480><label for="account" data-v-84a64480>✅ Active Storecove account</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="api-access" data-v-84a64480><label for="api-access" data-v-84a64480>✅ API access enabled</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="business-info" data-v-84a64480><label for="business-info" data-v-84a64480>✅ Business registration details ready</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="tax-numbers" data-v-84a64480><label for="tax-numbers" data-v-84a64480>✅ Tax identification numbers</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="dev-environment" data-v-84a64480><label for="dev-environment" data-v-84a64480>✅ Development environment set up</label></div></div><div class="info-box" data-v-84a64480><h4 data-v-84a64480>📞 Need Help Getting Started?</h4><p data-v-84a64480>Contact Storecove support for account activation and API access:</p><ul data-v-84a64480><li data-v-84a64480>Email: <a href="mailto:apisupport@storecove.nl" data-v-84a64480>apisupport@storecove.nl</a></li><li data-v-84a64480>Documentation: <a href="https://www.storecove.com/docs/" target="_blank" data-v-84a64480>https://www.storecove.com/docs/</a></li></ul></div></div></div>',1)),e[28]||(e[28]=n("div",{id:"authentication",class:"implementation-step"},[n("div",{class:"step-header"},[n("span",{class:"step-number"},"2"),n("h2",null,"🔐 Authentication Setup")]),n("div",{class:"step-content"},[n("h3",null,"API Key Configuration"),n("p",null,"Storecove uses Bearer token authentication. Your API key should be included in the Authorization header of every request."),n("div",{class:"code-example"},[n("h4",null,"Environment Setup"),n("div",{class:"code-tabs"},[n("button",{class:"code-tab active",onclick:"showCodeTab('env-bash')"},"Bash"),n("button",{class:"code-tab",onclick:"showCodeTab('env-windows')"},"Windows"),n("button",{class:"code-tab",onclick:"showCodeTab('env-node')"},"Node.js")]),n("div",{id:"env-bash",class:"code-content active"},[n("pre",null,[n("code",null,`# Set environment variable (Linux/Mac)
export STORECOVE_API_KEY="your_api_key_here"
export STORECOVE_BASE_URL="https://api.storecove.com/api/v2"

# Test authentication
curl -H "Authorization: Bearer $STORECOVE_API_KEY" \\
     "$STORECOVE_BASE_URL/legal_entities"`)])]),n("div",{id:"env-windows",class:"code-content"},[n("pre",null,[n("code",null,`# Set environment variable (Windows)
set STORECOVE_API_KEY=your_api_key_here
set STORECOVE_BASE_URL=https://api.storecove.com/api/v2

# Test authentication
curl -H "Authorization: Bearer %STORECOVE_API_KEY%" ^
     "%STORECOVE_BASE_URL%/legal_entities"`)])]),n("div",{id:"env-node",class:"code-content"},[n("pre",null,[n("code",null,`// .env file
STORECOVE_API_KEY=your_api_key_here
STORECOVE_BASE_URL=https://api.storecove.com/api/v2

// Node.js usage
require('dotenv').config();

const apiKey = ({}).STORECOVE_API_KEY;
const baseUrl = ({}).STORECOVE_BASE_URL;

const headers = {
  'Authorization': \`Bearer \${apiKey}\`,
  'Content-Type': 'application/json'
};`)])])]),n("div",{class:"warning-box"},[n("h4",null,"🚨 Security Best Practices"),n("ul",null,[n("li",null,"Never hardcode API keys in your source code"),n("li",null,"Use environment variables or secure key management"),n("li",null,"Rotate API keys regularly"),n("li",null,"Use different keys for development and production"),n("li",null,"Implement proper error handling for authentication failures")])])])],-1)),e[29]||(e[29]=G(`<div id="legal-entities" class="implementation-step" data-v-84a64480><div class="step-header" data-v-84a64480><span class="step-number" data-v-84a64480>3</span><h2 data-v-84a64480>🏢 Legal Entity Configuration</h2></div><div class="step-content" data-v-84a64480><h3 data-v-84a64480>Create Your Business Entity</h3><p data-v-84a64480>A Legal Entity represents your business in the Storecove system. You need at least one Legal Entity to send or receive documents.</p><div class="code-example" data-v-84a64480><h4 data-v-84a64480>Create Legal Entity</h4><pre data-v-84a64480><code data-v-84a64480>POST /legal_entities
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  &quot;party_name&quot;: &quot;Your Company Name&quot;,
  &quot;line1&quot;: &quot;123 Business Street&quot;,
  &quot;city&quot;: &quot;Business City&quot;,
  &quot;zip&quot;: &quot;12345&quot;,
  &quot;country&quot;: &quot;US&quot;,
  &quot;public&quot;: true,
  &quot;acts_as_sender&quot;: true,
  &quot;acts_as_receiver&quot;: true,
  &quot;tax_registered&quot;: true,
  &quot;advertisements&quot;: [&quot;invoice&quot;, &quot;order&quot;]
}</code></pre></div><div class="field-guide" data-v-84a64480><h4 data-v-84a64480>📝 Field Guide</h4><div class="field-grid" data-v-84a64480><div class="field-item" data-v-84a64480><strong data-v-84a64480>party_name</strong><p data-v-84a64480>Your legal business name (2-64 characters)</p></div><div class="field-item" data-v-84a64480><strong data-v-84a64480>line1</strong><p data-v-84a64480>Primary business address (required)</p></div><div class="field-item" data-v-84a64480><strong data-v-84a64480>country</strong><p data-v-84a64480>ISO 3166-1 alpha-2 country code</p></div><div class="field-item" data-v-84a64480><strong data-v-84a64480>public</strong><p data-v-84a64480>List in PEPPOL directory (recommended: true)</p></div><div class="field-item" data-v-84a64480><strong data-v-84a64480>acts_as_sender</strong><p data-v-84a64480>Can send documents (true for invoicing)</p></div><div class="field-item" data-v-84a64480><strong data-v-84a64480>acts_as_receiver</strong><p data-v-84a64480>Can receive documents (true for purchases)</p></div></div></div><div class="response-example" data-v-84a64480><h4 data-v-84a64480>📤 Response Example</h4><pre data-v-84a64480><code data-v-84a64480>{
  &quot;id&quot;: 12345,
  &quot;party_name&quot;: &quot;Your Company Name&quot;,
  &quot;line1&quot;: &quot;123 Business Street&quot;,
  &quot;city&quot;: &quot;Business City&quot;,
  &quot;zip&quot;: &quot;12345&quot;,
  &quot;country&quot;: &quot;US&quot;,
  &quot;public&quot;: true,
  &quot;acts_as_sender&quot;: true,
  &quot;acts_as_receiver&quot;: true,
  &quot;tax_registered&quot;: true,
  &quot;advertisements&quot;: [&quot;invoice&quot;, &quot;order&quot;],
  &quot;api_keys&quot;: [&quot;api_key_123&quot;],
  &quot;peppol_identifiers&quot;: [],
  &quot;additional_tax_identifiers&quot;: []
}</code></pre></div></div></div><div id="identifiers" class="implementation-step" data-v-84a64480><div class="step-header" data-v-84a64480><span class="step-number" data-v-84a64480>4</span><h2 data-v-84a64480>🏷️ Identifier Configuration</h2></div><div class="step-content" data-v-84a64480><h3 data-v-84a64480>PEPPOL Identifiers</h3><p data-v-84a64480>PEPPOL identifiers are required for electronic document exchange. Common identifier schemes include VAT numbers, company registration numbers, and GLN codes.</p><div class="identifier-types" data-v-84a64480><div class="identifier-type" data-v-84a64480><h4 data-v-84a64480>🇪🇺 European Union</h4><ul data-v-84a64480><li data-v-84a64480><strong data-v-84a64480>DE:VAT</strong> - German VAT number</li><li data-v-84a64480><strong data-v-84a64480>NL:VAT</strong> - Dutch VAT number</li><li data-v-84a64480><strong data-v-84a64480>FR:VAT</strong> - French VAT number</li><li data-v-84a64480><strong data-v-84a64480>IT:VAT</strong> - Italian VAT number</li></ul></div><div class="identifier-type" data-v-84a64480><h4 data-v-84a64480>🌏 Asia Pacific</h4><ul data-v-84a64480><li data-v-84a64480><strong data-v-84a64480>SG:UEN</strong> - Singapore UEN</li><li data-v-84a64480><strong data-v-84a64480>AU:ABN</strong> - Australian ABN</li><li data-v-84a64480><strong data-v-84a64480>NZ:GST</strong> - New Zealand GST</li><li data-v-84a64480><strong data-v-84a64480>MY:TIN</strong> - Malaysia TIN</li></ul></div><div class="identifier-type" data-v-84a64480><h4 data-v-84a64480>🌍 Global</h4><ul data-v-84a64480><li data-v-84a64480><strong data-v-84a64480>GLN</strong> - Global Location Number</li><li data-v-84a64480><strong data-v-84a64480>DUNS</strong> - DUNS Number</li><li data-v-84a64480><strong data-v-84a64480>LEI</strong> - Legal Entity Identifier</li></ul></div></div><div class="code-example" data-v-84a64480><h4 data-v-84a64480>Add PEPPOL Identifier</h4><pre data-v-84a64480><code data-v-84a64480>POST /legal_entities/{legal_entity_id}/peppol_identifiers
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  &quot;superscheme&quot;: &quot;iso6523-actorid-upis&quot;,
  &quot;scheme&quot;: &quot;DE:VAT&quot;,
  &quot;identifier&quot;: &quot;DE123456789&quot;
}</code></pre></div><div class="discovery-section" data-v-84a64480><h4 data-v-84a64480>🔍 Identifier Discovery</h4><p data-v-84a64480>Use the discovery endpoint to check if a recipient can receive electronic documents:</p><div class="code-example" data-v-84a64480><pre data-v-84a64480><code data-v-84a64480>POST /discovery/receives
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  &quot;metaScheme&quot;: &quot;iso6523-actorid-upis&quot;,
  &quot;scheme&quot;: &quot;DE:VAT&quot;,
  &quot;identifier&quot;: &quot;DE987654321&quot;,
  &quot;documentTypes&quot;: [&quot;invoice&quot;, &quot;creditnote&quot;]
}</code></pre></div></div></div></div><div id="document-submission" class="implementation-step" data-v-84a64480><div class="step-header" data-v-84a64480><span class="step-number" data-v-84a64480>5</span><h2 data-v-84a64480>📄 Document Submission</h2></div><div class="step-content" data-v-84a64480><h3 data-v-84a64480>Send Your First E-Invoice</h3><p data-v-84a64480>Document submission is the core functionality of Storecove. Here&#39;s how to send a complete invoice:</p><div class="submission-workflow" data-v-84a64480><div class="workflow-step" data-v-84a64480><div class="workflow-number" data-v-84a64480>5.1</div><div class="workflow-content" data-v-84a64480><h4 data-v-84a64480>Prepare Invoice Data</h4><p data-v-84a64480>Structure your invoice according to UBL or CII standards</p></div></div><div class="workflow-step" data-v-84a64480><div class="workflow-number" data-v-84a64480>5.2</div><div class="workflow-content" data-v-84a64480><h4 data-v-84a64480>Configure Routing</h4><p data-v-84a64480>Specify recipient identifiers and fallback options</p></div></div><div class="workflow-step" data-v-84a64480><div class="workflow-number" data-v-84a64480>5.3</div><div class="workflow-content" data-v-84a64480><h4 data-v-84a64480>Submit Document</h4><p data-v-84a64480>Send via the document_submissions endpoint</p></div></div><div class="workflow-step" data-v-84a64480><div class="workflow-number" data-v-84a64480>5.4</div><div class="workflow-content" data-v-84a64480><h4 data-v-84a64480>Monitor Status</h4><p data-v-84a64480>Track delivery via webhooks or polling</p></div></div></div><div class="code-example" data-v-84a64480><h4 data-v-84a64480>Complete Invoice Submission</h4><pre data-v-84a64480><code data-v-84a64480>POST /document_submissions
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  &quot;legalEntityId&quot;: 12345,
  &quot;routing&quot;: {
    &quot;eIdentifiers&quot;: [
      {
        &quot;scheme&quot;: &quot;DE:VAT&quot;,
        &quot;id&quot;: &quot;DE987654321&quot;
      }
    ],
    &quot;emails&quot;: [&quot;fallback@example.com&quot;]
  },
  &quot;document&quot;: {
    &quot;documentType&quot;: &quot;Invoice&quot;,
    &quot;invoice&quot;: {
      &quot;invoiceNumber&quot;: &quot;INV-2024-001&quot;,
      &quot;issueDate&quot;: &quot;2024-01-15&quot;,
      &quot;dueDate&quot;: &quot;2024-02-15&quot;,
      &quot;documentCurrencyCode&quot;: &quot;EUR&quot;,
      &quot;accountingCustomerParty&quot;: {
        &quot;party&quot;: {
          &quot;companyName&quot;: &quot;Customer Company Ltd&quot;,
          &quot;address&quot;: {
            &quot;street1&quot;: &quot;456 Customer St&quot;,
            &quot;city&quot;: &quot;Customer City&quot;,
            &quot;zip&quot;: &quot;67890&quot;,
            &quot;country&quot;: &quot;DE&quot;
          }
        },
        &quot;publicIdentifiers&quot;: [
          {
            &quot;scheme&quot;: &quot;DE:VAT&quot;,
            &quot;id&quot;: &quot;DE987654321&quot;
          }
        ]
      },
      &quot;invoiceLines&quot;: [
        {
          &quot;lineId&quot;: &quot;1&quot;,
          &quot;name&quot;: &quot;Professional Services&quot;,
          &quot;description&quot;: &quot;Consulting services Q1 2024&quot;,
          &quot;quantity&quot;: 40,
          &quot;quantityUnitCode&quot;: &quot;HUR&quot;,
          &quot;itemPrice&quot;: 150.00,
          &quot;amountExcludingTax&quot;: 6000.00,
          &quot;taxesDutiesFees&quot;: [
            {
              &quot;taxAmount&quot;: 1140.00,
              &quot;percentage&quot;: 19.0,
              &quot;country&quot;: &quot;DE&quot;,
              &quot;category&quot;: &quot;standard&quot;
            }
          ]
        }
      ],
      &quot;taxSubtotals&quot;: [
        {
          &quot;taxableAmount&quot;: 6000.00,
          &quot;taxAmount&quot;: 1140.00,
          &quot;percentage&quot;: 19.0,
          &quot;country&quot;: &quot;DE&quot;,
          &quot;category&quot;: &quot;standard&quot;
        }
      ],
      &quot;paymentMeansArray&quot;: [
        {
          &quot;code&quot;: &quot;credit_transfer&quot;,
          &quot;account&quot;: &quot;DE89370400440532013000&quot;,
          &quot;holder&quot;: &quot;Your Company Name&quot;,
          &quot;paymentId&quot;: &quot;INV-2024-001&quot;
        }
      ]
    }
  }
}</code></pre></div><div class="tips-box" data-v-84a64480><h4 data-v-84a64480>💡 Pro Tips</h4><ul data-v-84a64480><li data-v-84a64480>Always include fallback email addresses for reliable delivery</li><li data-v-84a64480>Use meaningful invoice numbers and payment IDs for reconciliation</li><li data-v-84a64480>Validate customer identifiers before submission</li><li data-v-84a64480>Include complete address information for compliance</li><li data-v-84a64480>Set appropriate due dates according to payment terms</li></ul></div></div></div>`,3)),e[30]||(e[30]=n("div",{id:"webhooks",class:"implementation-step"},[n("div",{class:"step-header"},[n("span",{class:"step-number"},"6"),n("h2",null,"🔗 Webhook Configuration")]),n("div",{class:"step-content"},[n("h3",null,"Real-time Delivery Notifications"),n("p",null,"Webhooks provide real-time updates about document processing and delivery status."),n("div",{class:"webhook-events"},[n("h4",null,"📨 Webhook Events"),n("div",{class:"event-grid"},[n("div",{class:"event-item"},[n("strong",null,"document_submitted"),n("p",null,"Document received and queued for processing")]),n("div",{class:"event-item"},[n("strong",null,"document_cleared"),n("p",null,"Document validated and ready for delivery")]),n("div",{class:"event-item"},[n("strong",null,"document_delivered"),n("p",null,"Document successfully delivered to recipient")]),n("div",{class:"event-item"},[n("strong",null,"document_failed"),n("p",null,"Delivery failed (with error details)")]),n("div",{class:"event-item"},[n("strong",null,"received_document"),n("p",null,"New document received for your entity")])])]),n("div",{class:"code-example"},[n("h4",null,"Webhook Endpoint Implementation"),n("div",{class:"code-tabs"},[n("button",{class:"code-tab active",onclick:"showCodeTab('webhook-node')"},"Node.js"),n("button",{class:"code-tab",onclick:"showCodeTab('webhook-python')"},"Python"),n("button",{class:"code-tab",onclick:"showCodeTab('webhook-php')"},"PHP")]),n("div",{id:"webhook-node",class:"code-content active"},[n("pre",null,[n("code",null,`const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhooks/storecove', (req, res) => {
  const event = req.body;
  
  console.log('Received webhook:', event.type);
  
  switch(event.type) {
    case 'document_delivered':
      console.log(\`Document \${event.document_guid} delivered successfully\`);
      // Update your database
      updateInvoiceStatus(event.document_guid, 'delivered');
      break;
      
    case 'document_failed':
      console.log(\`Document \${event.document_guid} failed:\`, event.error);
      // Handle delivery failure
      handleDeliveryFailure(event.document_guid, event.error);
      break;
      
    case 'received_document':
      console.log(\`New document received: \${event.document_guid}\`);
      // Process incoming document
      processIncomingDocument(event);
      break;
  }
  
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`)])]),n("div",{id:"webhook-python",class:"code-content"},[n("pre",null,[n("code",null,`from flask import Flask, request, jsonify
import logging

app = Flask(__name__)

@app.route('/webhooks/storecove', methods=['POST'])
def handle_webhook():
    event = request.get_json()
    
    logging.info(f"Received webhook: {event.get('type')}")
    
    event_type = event.get('type')
    document_guid = event.get('document_guid')
    
    if event_type == 'document_delivered':
        logging.info(f"Document {document_guid} delivered successfully")
        update_invoice_status(document_guid, 'delivered')
        
    elif event_type == 'document_failed':
        logging.error(f"Document {document_guid} failed: {event.get('error')}")
        handle_delivery_failure(document_guid, event.get('error'))
        
    elif event_type == 'received_document':
        logging.info(f"New document received: {document_guid}")
        process_incoming_document(event)
    
    return jsonify({'status': 'success'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)`)])]),n("div",{id:"webhook-php",class:"code-content"},[n("pre",null,[n("code",null,`<?php
$input = file_get_contents('php://input');
$event = json_decode($input, true);

error_log("Received webhook: " . $event['type']);

switch($event['type']) {
    case 'document_delivered':
        error_log("Document {$event['document_guid']} delivered successfully");
        updateInvoiceStatus($event['document_guid'], 'delivered');
        break;
        
    case 'document_failed':
        error_log("Document {$event['document_guid']} failed: " . $event['error']);
        handleDeliveryFailure($event['document_guid'], $event['error']);
        break;
        
    case 'received_document':
        error_log("New document received: {$event['document_guid']}");
        processIncomingDocument($event);
        break;
}

http_response_code(200);
echo "OK";
?>`)])])]),n("div",{class:"webhook-config"},[n("h4",null,"⚙️ Webhook Configuration"),n("p",null,"Configure your webhook URL in the Storecove dashboard or contact support to set up webhook endpoints for your account."),n("div",{class:"config-checklist"},[n("div",{class:"checklist-item"},[n("input",{type:"checkbox",id:"webhook-url"}),n("label",{for:"webhook-url"},"✅ Webhook URL configured")]),n("div",{class:"checklist-item"},[n("input",{type:"checkbox",id:"webhook-https"}),n("label",{for:"webhook-https"},"✅ HTTPS endpoint (required)")]),n("div",{class:"checklist-item"},[n("input",{type:"checkbox",id:"webhook-response"}),n("label",{for:"webhook-response"},"✅ Returns HTTP 200 status")]),n("div",{class:"checklist-item"},[n("input",{type:"checkbox",id:"webhook-timeout"}),n("label",{for:"webhook-timeout"},"✅ Responds within 30 seconds")])])])])],-1)),e[31]||(e[31]=G(`<div id="testing" class="implementation-step" data-v-84a64480><div class="step-header" data-v-84a64480><span class="step-number" data-v-84a64480>7</span><h2 data-v-84a64480>🧪 Testing Your Integration</h2></div><div class="step-content" data-v-84a64480><h3 data-v-84a64480>Sandbox Environment</h3><p data-v-84a64480>Test your integration thoroughly using the Storecove sandbox environment before going live.</p><div class="testing-checklist" data-v-84a64480><h4 data-v-84a64480>🧾 Testing Checklist</h4><div class="test-categories" data-v-84a64480><div class="test-category" data-v-84a64480><h5 data-v-84a64480>Authentication Tests</h5><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-auth-valid" data-v-84a64480><label for="test-auth-valid" data-v-84a64480>✅ Valid API key authentication</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-auth-invalid" data-v-84a64480><label for="test-auth-invalid" data-v-84a64480>✅ Invalid API key handling</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-auth-missing" data-v-84a64480><label for="test-auth-missing" data-v-84a64480>✅ Missing authorization header</label></div></div><div class="test-category" data-v-84a64480><h5 data-v-84a64480>Document Submission Tests</h5><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-doc-valid" data-v-84a64480><label for="test-doc-valid" data-v-84a64480>✅ Valid invoice submission</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-doc-invalid" data-v-84a64480><label for="test-doc-invalid" data-v-84a64480>✅ Invalid document format</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-doc-missing" data-v-84a64480><label for="test-doc-missing" data-v-84a64480>✅ Missing required fields</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-doc-routing" data-v-84a64480><label for="test-doc-routing" data-v-84a64480>✅ Routing to different recipients</label></div></div><div class="test-category" data-v-84a64480><h5 data-v-84a64480>Webhook Tests</h5><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-webhook-delivery" data-v-84a64480><label for="test-webhook-delivery" data-v-84a64480>✅ Webhook delivery</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-webhook-retry" data-v-84a64480><label for="test-webhook-retry" data-v-84a64480>✅ Webhook retry mechanism</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-webhook-parsing" data-v-84a64480><label for="test-webhook-parsing" data-v-84a64480>✅ Event payload parsing</label></div></div><div class="test-category" data-v-84a64480><h5 data-v-84a64480>Error Handling Tests</h5><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-error-network" data-v-84a64480><label for="test-error-network" data-v-84a64480>✅ Network timeout handling</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-error-rate" data-v-84a64480><label for="test-error-rate" data-v-84a64480>✅ Rate limit handling</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="test-error-server" data-v-84a64480><label for="test-error-server" data-v-84a64480>✅ Server error handling</label></div></div></div></div><div class="test-scenarios" data-v-84a64480><h4 data-v-84a64480>📋 Test Scenarios</h4><div class="scenario-grid" data-v-84a64480><div class="scenario" data-v-84a64480><h5 data-v-84a64480>Successful Delivery</h5><p data-v-84a64480>Submit invoice to known test recipient with valid PEPPOL identifier</p></div><div class="scenario" data-v-84a64480><h5 data-v-84a64480>Email Fallback</h5><p data-v-84a64480>Submit to non-PEPPOL recipient, verify email delivery</p></div><div class="scenario" data-v-84a64480><h5 data-v-84a64480>Validation Errors</h5><p data-v-84a64480>Test with invalid data formats and missing fields</p></div><div class="scenario" data-v-84a64480><h5 data-v-84a64480>Large Documents</h5><p data-v-84a64480>Test with attachments and complex invoice structures</p></div></div></div><div class="code-example" data-v-84a64480><h4 data-v-84a64480>Test Document Submission</h4><pre data-v-84a64480><code data-v-84a64480># Test with sandbox environment
curl -X POST &quot;https://api.storecove.com/api/v2/document_submissions&quot; \\
  -H &quot;Authorization: Bearer YOUR_SANDBOX_API_KEY&quot; \\
  -H &quot;Content-Type: application/json&quot; \\
  -d &#39;{
    &quot;legalEntityId&quot;: 12345,
    &quot;routing&quot;: {
      &quot;eIdentifiers&quot;: [
        {
          &quot;scheme&quot;: &quot;NL:TEST&quot;,
          &quot;id&quot;: &quot;123456789&quot;
        }
      ]
    },
    &quot;document&quot;: {
      &quot;documentType&quot;: &quot;Invoice&quot;,
      &quot;invoice&quot;: {
        &quot;invoiceNumber&quot;: &quot;TEST-001&quot;,
        &quot;issueDate&quot;: &quot;2024-01-15&quot;,
        &quot;accountingCustomerParty&quot;: {
          &quot;party&quot;: {
            &quot;companyName&quot;: &quot;Test Customer&quot;
          }
        },
        &quot;invoiceLines&quot;: [
          {
            &quot;lineId&quot;: &quot;1&quot;,
            &quot;quantity&quot;: 1,
            &quot;quantityUnitCode&quot;: &quot;C62&quot;,
            &quot;amountExcludingTax&quot;: 100.00
          }
        ]
      }
    }
  }&#39;</code></pre></div></div></div><div id="go-live" class="implementation-step" data-v-84a64480><div class="step-header" data-v-84a64480><span class="step-number" data-v-84a64480>8</span><h2 data-v-84a64480>🚀 Go Live Checklist</h2></div><div class="step-content" data-v-84a64480><h3 data-v-84a64480>Production Deployment</h3><p data-v-84a64480>Complete these steps before switching to production:</p><div class="go-live-checklist" data-v-84a64480><div class="checklist-section" data-v-84a64480><h4 data-v-84a64480>🔧 Technical Requirements</h4><div class="checklist-item" data-v-84a64480><input type="checkbox" id="prod-api-key" data-v-84a64480><label for="prod-api-key" data-v-84a64480>✅ Production API keys configured</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="prod-urls" data-v-84a64480><label for="prod-urls" data-v-84a64480>✅ Production URLs updated</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="prod-webhooks" data-v-84a64480><label for="prod-webhooks" data-v-84a64480>✅ Production webhook endpoints</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="prod-ssl" data-v-84a64480><label for="prod-ssl" data-v-84a64480>✅ SSL certificates valid</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="prod-monitoring" data-v-84a64480><label for="prod-monitoring" data-v-84a64480>✅ Monitoring and logging in place</label></div></div><div class="checklist-section" data-v-84a64480><h4 data-v-84a64480>📊 Business Requirements</h4><div class="checklist-item" data-v-84a64480><input type="checkbox" id="business-entities" data-v-84a64480><label for="business-entities" data-v-84a64480>✅ All legal entities configured</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="business-identifiers" data-v-84a64480><label for="business-identifiers" data-v-84a64480>✅ PEPPOL identifiers validated</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="business-workflows" data-v-84a64480><label for="business-workflows" data-v-84a64480>✅ Invoice workflows tested</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="business-training" data-v-84a64480><label for="business-training" data-v-84a64480>✅ Team training completed</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="business-backup" data-v-84a64480><label for="business-backup" data-v-84a64480>✅ Backup processes defined</label></div></div><div class="checklist-section" data-v-84a64480><h4 data-v-84a64480>🔍 Quality Assurance</h4><div class="checklist-item" data-v-84a64480><input type="checkbox" id="qa-testing" data-v-84a64480><label for="qa-testing" data-v-84a64480>✅ End-to-end testing completed</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="qa-performance" data-v-84a64480><label for="qa-performance" data-v-84a64480>✅ Performance testing passed</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="qa-security" data-v-84a64480><label for="qa-security" data-v-84a64480>✅ Security review completed</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="qa-compliance" data-v-84a64480><label for="qa-compliance" data-v-84a64480>✅ Compliance requirements met</label></div><div class="checklist-item" data-v-84a64480><input type="checkbox" id="qa-documentation" data-v-84a64480><label for="qa-documentation" data-v-84a64480>✅ Documentation updated</label></div></div></div><div class="success-metrics" data-v-84a64480><h4 data-v-84a64480>📈 Success Metrics</h4><p data-v-84a64480>Monitor these key metrics after going live:</p><div class="metrics-grid" data-v-84a64480><div class="metric" data-v-84a64480><strong data-v-84a64480>Delivery Success Rate</strong><p data-v-84a64480>Target: &gt;95% successful deliveries</p></div><div class="metric" data-v-84a64480><strong data-v-84a64480>Processing Time</strong><p data-v-84a64480>Target: &lt;5 minutes end-to-end</p></div><div class="metric" data-v-84a64480><strong data-v-84a64480>Error Rate</strong><p data-v-84a64480>Target: &lt;2% API errors</p></div><div class="metric" data-v-84a64480><strong data-v-84a64480>Webhook Reliability</strong><p data-v-84a64480>Target: &gt;99% webhook delivery</p></div></div></div><div class="support-info" data-v-84a64480><h4 data-v-84a64480>🆘 Production Support</h4><div class="support-grid" data-v-84a64480><div class="support-item" data-v-84a64480><h5 data-v-84a64480>📧 Email Support</h5><p data-v-84a64480><a href="mailto:apisupport@storecove.nl" data-v-84a64480>apisupport@storecove.nl</a></p></div><div class="support-item" data-v-84a64480><h5 data-v-84a64480>📖 Documentation</h5><p data-v-84a64480><a href="https://www.storecove.com/docs/" target="_blank" data-v-84a64480>API Documentation</a></p></div><div class="support-item" data-v-84a64480><h5 data-v-84a64480>📊 Status Page</h5><p data-v-84a64480>Monitor API status and maintenance</p></div><div class="support-item" data-v-84a64480><h5 data-v-84a64480>💬 Community</h5><p data-v-84a64480>Developer forums and discussions</p></div></div></div></div></div>`,2)),n("div",Ku,[e[26]||(e[26]=n("h2",null,"🎯 Next Steps",-1)),n("div",zu,[n("div",Yu,[e[18]||(e[18]=n("h3",null,"📊 Monitor Performance",-1)),e[19]||(e[19]=n("p",null,"Set up monitoring dashboards and alerts for your integration",-1)),L(r,{to:"/developer-dashboard",class:"btn-primary"},{default:F(()=>[...e[17]||(e[17]=[V("View Dashboard Guide",-1)])]),_:1})]),n("div",Ju,[e[21]||(e[21]=n("h3",null,"🛠️ Error Handling",-1)),e[22]||(e[22]=n("p",null,"Implement robust error handling and recovery mechanisms",-1)),L(r,{to:"/error-handling",class:"btn-primary"},{default:F(()=>[...e[20]||(e[20]=[V("Learn Error Handling",-1)])]),_:1})]),n("div",Qu,[e[24]||(e[24]=n("h3",null,"📝 API Logging",-1)),e[25]||(e[25]=n("p",null,"Set up comprehensive logging for debugging and compliance",-1)),L(r,{to:"/api-logs",class:"btn-primary"},{default:F(()=>[...e[23]||(e[23]=[V("Setup Logging",-1)])]),_:1})])])])])]),n("section",Xu,[n("div",Zu,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[32]||(e[32]=[V(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const tv=De(Bu,[["render",ev],["__scopeId","data-v-84a64480"]]);const nv={name:"SampleCode",mounted(){this.initializeTabs(),this.initializeCopyButtons()},methods:{initializeTabs(){window.showTab=t=>{const e=document.querySelector(`#${t}`);if(!e)return;const a=e.closest(".code-section");if(!a)return;a.querySelectorAll(".tab-content").forEach(r=>r.classList.remove("active")),a.querySelectorAll(".tab-btn").forEach(r=>r.classList.remove("active")),e.classList.add("active");const i=a.querySelector(`[onclick*="${t}"]`);i&&i.classList.add("active")}},initializeCopyButtons(){window.copyCode=async t=>{try{const e=document.getElementById(t);if(!e)return;const a=e.textContent||e.innerText;if(navigator.clipboard)await navigator.clipboard.writeText(a);else{const o=document.createElement("textarea");o.value=a,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}const s=document.querySelector(`[onclick*="${t}"]`);if(s){const o=s.textContent;s.textContent="✅ Copied!",s.style.background="rgba(34, 197, 94, 0.2)",s.style.borderColor="rgba(34, 197, 94, 0.3)",setTimeout(()=>{s.textContent=o,s.style.background="",s.style.borderColor=""},2e3)}}catch(e){console.error("Failed to copy code:",e);const a=document.querySelector(`[onclick*="${t}"]`);if(a){const s=a.textContent;a.textContent="❌ Failed",a.style.background="rgba(239, 68, 68, 0.2)",a.style.borderColor="rgba(239, 68, 68, 0.3)",setTimeout(()=>{a.textContent=s,a.style.background="",a.style.borderColor=""},2e3)}}}},scrollToSection(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}},av={class:"sample-code"},sv={class:"content-section"},ov={class:"container"},iv={class:"section-block"},rv={class:"quick-start-grid"},cv={class:"back-navigation"},dv={class:"container"};function lv(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",av,[e[15]||(e[15]=n("div",{class:"hero-section"},[n("div",{class:"container"},[n("div",{class:"hero-content"},[n("h1",null,"Sample Code"),n("p",null,"Ready-to-use code examples for Storecove integration")])])],-1)),n("section",sv,[n("div",ov,[n("div",iv,[e[8]||(e[8]=n("h2",null,"🚀 Quick Start Examples",-1)),e[9]||(e[9]=n("p",null,"Jump right in with these essential code examples for common Storecove operations.",-1)),n("div",rv,[n("div",{class:"quick-start-card",onClick:e[0]||(e[0]=c=>i.scrollToSection("authentication"))},[...e[4]||(e[4]=[n("div",{class:"card-icon"},"🔐",-1),n("h3",null,"Authentication",-1),n("p",null,"API key setup and requests",-1)])]),n("div",{class:"quick-start-card",onClick:e[1]||(e[1]=c=>i.scrollToSection("submit-invoice"))},[...e[5]||(e[5]=[n("div",{class:"card-icon"},"📄",-1),n("h3",null,"Submit Invoice",-1),n("p",null,"Send your first e-invoice",-1)])]),n("div",{class:"quick-start-card",onClick:e[2]||(e[2]=c=>i.scrollToSection("webhooks"))},[...e[6]||(e[6]=[n("div",{class:"card-icon"},"🔗",-1),n("h3",null,"Handle Webhooks",-1),n("p",null,"Process delivery notifications",-1)])]),n("div",{class:"quick-start-card",onClick:e[3]||(e[3]=c=>i.scrollToSection("discovery"))},[...e[7]||(e[7]=[n("div",{class:"card-icon"},"🔍",-1),n("h3",null,"Recipient Discovery",-1),n("p",null,"Check if recipients can receive e-invoices",-1)])])])]),e[10]||(e[10]=n("div",{id:"authentication",class:"code-section"},[n("h2",null,"🔐 Authentication Examples"),n("p",null,"All Storecove API requests require Bearer token authentication."),n("div",{class:"language-tabs"},[n("button",{class:"tab-btn active",onclick:"showTab('auth-curl')"},"cURL"),n("button",{class:"tab-btn",onclick:"showTab('auth-js')"},"JavaScript"),n("button",{class:"tab-btn",onclick:"showTab('auth-python')"},"Python"),n("button",{class:"tab-btn",onclick:"showTab('auth-java')"},"Java"),n("button",{class:"tab-btn",onclick:"showTab('auth-csharp')"},"C#")]),n("div",{id:"auth-curl",class:"tab-content active"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"cURL - Basic Authentication"),n("button",{class:"copy-btn",onclick:"copyCode('auth-curl-code')"},"📋 Copy")]),n("pre",{id:"auth-curl-code"},[n("code",null,`# Set your API key as environment variable
export STORECOVE_API_KEY="your_api_key_here"

# Test authentication with a simple request
curl -X GET "https://api.storecove.com/api/v2/legal_entities" \\
  -H "Authorization: Bearer $STORECOVE_API_KEY" \\
  -H "Content-Type: application/json"

# Expected response: 200 OK with your legal entities`)])])]),n("div",{id:"auth-js",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"JavaScript - Node.js Authentication"),n("button",{class:"copy-btn",onclick:"copyCode('auth-js-code')"},"📋 Copy")]),n("pre",{id:"auth-js-code"},[n("code",null,`const axios = require('axios');

// Create reusable HTTP client
const storecoveAPI = axios.create({
  baseURL: 'https://api.storecove.com/api/v2',
  headers: {
    'Authorization': \`Bearer \${({}).STORECOVE_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  timeout: 30000 // 30 second timeout
});

// Test authentication
async function testAuthentication() {
  try {
    const response = await storecoveAPI.get('/legal_entities');
    console.log('✅ Authentication successful');
    console.log('Legal entities:', response.data);
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.error('❌ Authentication failed - check your API key');
    } else {
      console.error('❌ Request failed:', error.message);
    }
    throw error;
  }
}

// Usage
testAuthentication();`)])])]),n("div",{id:"auth-python",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"Python - Requests Authentication"),n("button",{class:"copy-btn",onclick:"copyCode('auth-python-code')"},"📋 Copy")]),n("pre",{id:"auth-python-code"},[n("code",null,`import requests
import os
from typing import Dict, Any

class StorecoveClient:
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv('STORECOVE_API_KEY')
        if not self.api_key:
            raise ValueError("API key is required")
        
        self.base_url = "https://api.storecove.com/api/v2"
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        })
    
    def test_authentication(self) -> Dict[str, Any]:
        """Test API authentication by fetching legal entities"""
        try:
            response = self.session.get(f"{self.base_url}/legal_entities")
            response.raise_for_status()
            print("✅ Authentication successful")
            return response.json()
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 401:
                print("❌ Authentication failed - check your API key")
            raise
        except requests.exceptions.RequestException as e:
            print(f"❌ Request failed: {e}")
            raise

# Usage
client = StorecoveClient()
legal_entities = client.test_authentication()`)])])]),n("div",{id:"auth-java",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"Java - HTTP Client Authentication"),n("button",{class:"copy-btn",onclick:"copyCode('auth-java-code')"},"📋 Copy")]),n("pre",{id:"auth-java-code"},[n("code",null,`import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.time.Duration;
import com.fasterxml.jackson.databind.ObjectMapper;

public class StorecoveClient {
    private final String apiKey;
    private final String baseUrl = "https://api.storecove.com/api/v2";
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    
    public StorecoveClient(String apiKey) {
        this.apiKey = apiKey;
        this.httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(30))
            .build();
        this.objectMapper = new ObjectMapper();
    }
    
    public String testAuthentication() throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/legal_entities"))
            .header("Authorization", "Bearer " + apiKey)
            .header("Content-Type", "application/json")
            .GET()
            .build();
            
        HttpResponse<String> response = httpClient.send(request, 
            HttpResponse.BodyHandlers.ofString());
            
        if (response.statusCode() == 200) {
            System.out.println("✅ Authentication successful");
            return response.body();
        } else if (response.statusCode() == 401) {
            throw new RuntimeException("❌ Authentication failed - check your API key");
        } else {
            throw new RuntimeException("❌ Request failed with status: " + response.statusCode());
        }
    }
    
    // Usage
    public static void main(String[] args) {
        try {
            StorecoveClient client = new StorecoveClient(System.getenv("STORECOVE_API_KEY"));
            String result = client.testAuthentication();
            System.out.println(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`)])])]),n("div",{id:"auth-csharp",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"C# - HttpClient Authentication"),n("button",{class:"copy-btn",onclick:"copyCode('auth-csharp-code')"},"📋 Copy")]),n("pre",{id:"auth-csharp-code"},[n("code",null,`using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

public class StorecoveClient : IDisposable
{
    private readonly HttpClient _httpClient;
    private readonly string _baseUrl = "https://api.storecove.com/api/v2";
    
    public StorecoveClient(string apiKey)
    {
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        _httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");
        _httpClient.Timeout = TimeSpan.FromSeconds(30);
    }
    
    public async Task<string> TestAuthenticationAsync()
    {
        try
        {
            var response = await _httpClient.GetAsync($"{_baseUrl}/legal_entities");
            
            if (response.IsSuccessStatusCode)
            {
                Console.WriteLine("✅ Authentication successful");
                return await response.Content.ReadAsStringAsync();
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
            {
                throw new UnauthorizedAccessException("❌ Authentication failed - check your API key");
            }
            else
            {
                throw new HttpRequestException($"❌ Request failed with status: {response.StatusCode}");
            }
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"❌ Request failed: {ex.Message}");
            throw;
        }
    }
    
    public void Dispose()
    {
        _httpClient?.Dispose();
    }
}

// Usage
class Program
{
    static async Task Main(string[] args)
    {
        var apiKey = Environment.GetEnvironmentVariable("STORECOVE_API_KEY");
        using var client = new StorecoveClient(apiKey);
        
        try
        {
            var result = await client.TestAuthenticationAsync();
            Console.WriteLine(result);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}`)])])])],-1)),e[11]||(e[11]=n("div",{id:"submit-invoice",class:"code-section"},[n("h2",null,"📄 Invoice Submission Examples"),n("p",null,"Complete examples for submitting invoices through the Storecove API."),n("div",{class:"language-tabs"},[n("button",{class:"tab-btn active",onclick:"showTab('invoice-curl')"},"cURL"),n("button",{class:"tab-btn",onclick:"showTab('invoice-js')"},"JavaScript"),n("button",{class:"tab-btn",onclick:"showTab('invoice-python')"},"Python"),n("button",{class:"tab-btn",onclick:"showTab('invoice-php')"},"PHP")]),n("div",{id:"invoice-curl",class:"tab-content active"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"cURL - Submit Complete Invoice"),n("button",{class:"copy-btn",onclick:"copyCode('invoice-curl-code')"},"📋 Copy")]),n("pre",{id:"invoice-curl-code"},[n("code",null,`curl -X POST "https://api.storecove.com/api/v2/document_submissions" \\
  -H "Authorization: Bearer $STORECOVE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "legalEntityId": 12345,
    "routing": {
      "eIdentifiers": [
        {
          "scheme": "DE:VAT",
          "id": "DE123456789"
        }
      ],
      "emails": ["fallback@customer.com"]
    },
    "document": {
      "documentType": "Invoice",
      "invoice": {
        "invoiceNumber": "INV-2024-001",
        "issueDate": "2024-01-15",
        "dueDate": "2024-02-15",
        "documentCurrencyCode": "EUR",
        "accountingCustomerParty": {
          "party": {
            "companyName": "Customer Company Ltd",
            "address": {
              "street1": "123 Customer Street",
              "city": "Berlin",
              "zip": "10115",
              "country": "DE"
            }
          },
          "publicIdentifiers": [
            {
              "scheme": "DE:VAT",
              "id": "DE123456789"
            }
          ]
        },
        "invoiceLines": [
          {
            "lineId": "1",
            "name": "Consulting Services",
            "description": "Monthly consulting services",
            "quantity": 20,
            "quantityUnitCode": "HUR",
            "itemPrice": 150.00,
            "amountExcludingTax": 3000.00,
            "taxesDutiesFees": [
              {
                "taxAmount": 570.00,
                "percentage": 19.0,
                "country": "DE",
                "category": "standard"
              }
            ]
          }
        ],
        "paymentMeansArray": [
          {
            "code": "credit_transfer",
            "account": "DE89370400440532013000",
            "holder": "Your Company Name",
            "paymentId": "INV-2024-001"
          }
        ]
      }
    }
  }'`)])])]),n("div",{id:"invoice-js",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"JavaScript - Submit Invoice with Error Handling"),n("button",{class:"copy-btn",onclick:"copyCode('invoice-js-code')"},"📋 Copy")]),n("pre",{id:"invoice-js-code"},[n("code",null,`async function submitInvoice(invoiceData) {
  try {
    const response = await storecoveAPI.post('/document_submissions', {
      legalEntityId: invoiceData.legalEntityId,
      routing: {
        eIdentifiers: invoiceData.recipientIdentifiers,
        emails: invoiceData.fallbackEmails || []
      },
      document: {
        documentType: "Invoice",
        invoice: {
          invoiceNumber: invoiceData.invoiceNumber,
          issueDate: invoiceData.issueDate,
          dueDate: invoiceData.dueDate,
          documentCurrencyCode: invoiceData.currency || "EUR",
          accountingCustomerParty: {
            party: {
              companyName: invoiceData.customer.name,
              address: invoiceData.customer.address
            },
            publicIdentifiers: invoiceData.recipientIdentifiers
          },
          invoiceLines: invoiceData.lines.map((line, index) => ({
            lineId: (index + 1).toString(),
            name: line.name,
            description: line.description,
            quantity: line.quantity,
            quantityUnitCode: line.unitCode || "C62",
            itemPrice: line.unitPrice,
            amountExcludingTax: line.quantity * line.unitPrice,
            taxesDutiesFees: [{
              taxAmount: (line.quantity * line.unitPrice) * (line.taxRate / 100),
              percentage: line.taxRate,
              country: invoiceData.taxCountry,
              category: "standard"
            }]
          })),
          paymentMeansArray: invoiceData.paymentMeans ? [invoiceData.paymentMeans] : []
        }
      }
    });

    console.log('✅ Invoice submitted successfully');
    console.log('Document GUID:', response.data.guid);
    return response.data;

  } catch (error) {
    console.error('❌ Invoice submission failed');
    
    if (error.response?.status === 422) {
      console.error('Validation errors:', error.response.data);
    } else if (error.response?.status === 401) {
      console.error('Authentication failed - check your API key');
    } else {
      console.error('Error:', error.message);
    }
    
    throw error;
  }
}

// Example usage
const invoiceData = {
  legalEntityId: 12345,
  invoiceNumber: "INV-2024-001",
  issueDate: "2024-01-15",
  dueDate: "2024-02-15",
  currency: "EUR",
  taxCountry: "DE",
  recipientIdentifiers: [
    { scheme: "DE:VAT", id: "DE123456789" }
  ],
  fallbackEmails: ["customer@example.com"],
  customer: {
    name: "Customer Company Ltd",
    address: {
      street1: "123 Customer Street",
      city: "Berlin",
      zip: "10115",
      country: "DE"
    }
  },
  lines: [
    {
      name: "Consulting Services",
      description: "Monthly consulting services",
      quantity: 20,
      unitCode: "HUR",
      unitPrice: 150.00,
      taxRate: 19.0
    }
  ],
  paymentMeans: {
    code: "credit_transfer",
    account: "DE89370400440532013000",
    holder: "Your Company Name",
    paymentId: "INV-2024-001"
  }
};

submitInvoice(invoiceData);`)])])]),n("div",{id:"invoice-python",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"Python - Invoice Submission with Validation"),n("button",{class:"copy-btn",onclick:"copyCode('invoice-python-code')"},"📋 Copy")]),n("pre",{id:"invoice-python-code"},[n("code",null,`from datetime import datetime, timedelta
from decimal import Decimal
from typing import List, Dict, Any, Optional

class InvoiceLine:
    def __init__(self, name: str, description: str, quantity: float, 
                 unit_price: float, tax_rate: float, unit_code: str = "C62"):
        self.name = name
        self.description = description
        self.quantity = quantity
        self.unit_price = unit_price
        self.tax_rate = tax_rate
        self.unit_code = unit_code
    
    def to_dict(self, line_id: str, tax_country: str) -> Dict[str, Any]:
        amount_excluding_tax = self.quantity * self.unit_price
        tax_amount = amount_excluding_tax * (self.tax_rate / 100)
        
        return {
            "lineId": line_id,
            "name": self.name,
            "description": self.description,
            "quantity": self.quantity,
            "quantityUnitCode": self.unit_code,
            "itemPrice": self.unit_price,
            "amountExcludingTax": amount_excluding_tax,
            "taxesDutiesFees": [{
                "taxAmount": tax_amount,
                "percentage": self.tax_rate,
                "country": tax_country,
                "category": "standard"
            }]
        }

class StorecoveInvoice:
    def __init__(self, client: StorecoveClient):
        self.client = client
    
    def submit_invoice(self, 
                      legal_entity_id: int,
                      invoice_number: str,
                      customer_name: str,
                      customer_address: Dict[str, str],
                      recipient_identifiers: List[Dict[str, str]],
                      lines: List[InvoiceLine],
                      currency: str = "EUR",
                      payment_terms_days: int = 30,
                      fallback_emails: Optional[List[str]] = None) -> Dict[str, Any]:
        
        # Calculate dates
        issue_date = datetime.now().date()
        due_date = issue_date + timedelta(days=payment_terms_days)
        
        # Build invoice payload
        payload = {
            "legalEntityId": legal_entity_id,
            "routing": {
                "eIdentifiers": recipient_identifiers,
                "emails": fallback_emails or []
            },
            "document": {
                "documentType": "Invoice",
                "invoice": {
                    "invoiceNumber": invoice_number,
                    "issueDate": issue_date.isoformat(),
                    "dueDate": due_date.isoformat(),
                    "documentCurrencyCode": currency,
                    "accountingCustomerParty": {
                        "party": {
                            "companyName": customer_name,
                            "address": customer_address
                        },
                        "publicIdentifiers": recipient_identifiers
                    },
                    "invoiceLines": [
                        line.to_dict(str(i + 1), customer_address["country"])
                        for i, line in enumerate(lines)
                    ]
                }
            }
        }
        
        try:
            response = self.client.session.post(
                f"{self.client.base_url}/document_submissions",
                json=payload
            )
            response.raise_for_status()
            
            result = response.json()
            print(f"✅ Invoice {invoice_number} submitted successfully")
            print(f"Document GUID: {result.get('guid')}")
            return result
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 422:
                errors = e.response.json()
                print("❌ Validation errors:")
                for error in errors:
                    print(f"  - {error.get('source', 'Unknown')}: {error.get('details', 'No details')}")
            else:
                print(f"❌ HTTP Error {e.response.status_code}: {e.response.text}")
            raise
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
            raise

# Example usage
client = StorecoveClient()
invoice_service = StorecoveInvoice(client)

# Create invoice lines
lines = [
    InvoiceLine(
        name="Consulting Services",
        description="Monthly consulting services",
        quantity=20.0,
        unit_price=150.00,
        tax_rate=19.0,
        unit_code="HUR"
    ),
    InvoiceLine(
        name="Software License",
        description="Annual software license",
        quantity=1.0,
        unit_price=1200.00,
        tax_rate=19.0
    )
]

# Submit invoice
result = invoice_service.submit_invoice(
    legal_entity_id=12345,
    invoice_number="INV-2024-001",
    customer_name="Customer Company Ltd",
    customer_address={
        "street1": "123 Customer Street",
        "city": "Berlin",
        "zip": "10115",
        "country": "DE"
    },
    recipient_identifiers=[
        {"scheme": "DE:VAT", "id": "DE123456789"}
    ],
    lines=lines,
    fallback_emails=["customer@example.com"]
)`)])])]),n("div",{id:"invoice-php",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"PHP - Invoice Submission Class"),n("button",{class:"copy-btn",onclick:"copyCode('invoice-php-code')"},"📋 Copy")]),n("pre",{id:"invoice-php-code"},[n("code",null,`<?php

class StorecoveInvoice {
    private $apiKey;
    private $baseUrl = 'https://api.storecove.com/api/v2';
    
    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }
    
    public function submitInvoice($invoiceData) {
        $payload = [
            'legalEntityId' => $invoiceData['legalEntityId'],
            'routing' => [
                'eIdentifiers' => $invoiceData['recipientIdentifiers'],
                'emails' => $invoiceData['fallbackEmails'] ?? []
            ],
            'document' => [
                'documentType' => 'Invoice',
                'invoice' => [
                    'invoiceNumber' => $invoiceData['invoiceNumber'],
                    'issueDate' => $invoiceData['issueDate'],
                    'dueDate' => $invoiceData['dueDate'],
                    'documentCurrencyCode' => $invoiceData['currency'] ?? 'EUR',
                    'accountingCustomerParty' => [
                        'party' => [
                            'companyName' => $invoiceData['customer']['name'],
                            'address' => $invoiceData['customer']['address']
                        ],
                        'publicIdentifiers' => $invoiceData['recipientIdentifiers']
                    ],
                    'invoiceLines' => $this->buildInvoiceLines($invoiceData['lines'], $invoiceData['taxCountry']),
                    'paymentMeansArray' => isset($invoiceData['paymentMeans']) ? [$invoiceData['paymentMeans']] : []
                ]
            ]
        ];
        
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $this->baseUrl . '/document_submissions',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($payload),
            CURLOPT_HTTPHEADER => [
                'Authorization: Bearer ' . $this->apiKey,
                'Content-Type: application/json'
            ],
            CURLOPT_TIMEOUT => 30
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);
        
        if ($error) {
            throw new Exception("cURL Error: " . $error);
        }
        
        $responseData = json_decode($response, true);
        
        if ($httpCode >= 200 && $httpCode < 300) {
            echo "✅ Invoice {$invoiceData['invoiceNumber']} submitted successfully\\n";
            echo "Document GUID: " . $responseData['guid'] . "\\n";
            return $responseData;
        } else {
            echo "❌ Invoice submission failed (HTTP $httpCode)\\n";
            if ($httpCode === 422) {
                echo "Validation errors:\\n";
                foreach ($responseData as $error) {
                    echo "  - {$error['source']}: {$error['details']}\\n";
                }
            }
            throw new Exception("HTTP Error $httpCode: " . $response);
        }
    }
    
    private function buildInvoiceLines($lines, $taxCountry) {
        $invoiceLines = [];
        
        foreach ($lines as $index => $line) {
            $amountExcludingTax = $line['quantity'] * $line['unitPrice'];
            $taxAmount = $amountExcludingTax * ($line['taxRate'] / 100);
            
            $invoiceLines[] = [
                'lineId' => (string)($index + 1),
                'name' => $line['name'],
                'description' => $line['description'],
                'quantity' => $line['quantity'],
                'quantityUnitCode' => $line['unitCode'] ?? 'C62',
                'itemPrice' => $line['unitPrice'],
                'amountExcludingTax' => $amountExcludingTax,
                'taxesDutiesFees' => [[
                    'taxAmount' => $taxAmount,
                    'percentage' => $line['taxRate'],
                    'country' => $taxCountry,
                    'category' => 'standard'
                ]]
            ];
        }
        
        return $invoiceLines;
    }
}

// Example usage
$apiKey = $_ENV['STORECOVE_API_KEY'];
$invoice = new StorecoveInvoice($apiKey);

$invoiceData = [
    'legalEntityId' => 12345,
    'invoiceNumber' => 'INV-2024-001',
    'issueDate' => '2024-01-15',
    'dueDate' => '2024-02-15',
    'currency' => 'EUR',
    'taxCountry' => 'DE',
    'recipientIdentifiers' => [
        ['scheme' => 'DE:VAT', 'id' => 'DE123456789']
    ],
    'fallbackEmails' => ['customer@example.com'],
    'customer' => [
        'name' => 'Customer Company Ltd',
        'address' => [
            'street1' => '123 Customer Street',
            'city' => 'Berlin',
            'zip' => '10115',
            'country' => 'DE'
        ]
    ],
    'lines' => [
        [
            'name' => 'Consulting Services',
            'description' => 'Monthly consulting services',
            'quantity' => 20,
            'unitCode' => 'HUR',
            'unitPrice' => 150.00,
            'taxRate' => 19.0
        ]
    ],
    'paymentMeans' => [
        'code' => 'credit_transfer',
        'account' => 'DE89370400440532013000',
        'holder' => 'Your Company Name',
        'paymentId' => 'INV-2024-001'
    ]
];

try {
    $result = $invoice->submitInvoice($invoiceData);
    print_r($result);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\\n";
}

?>`)])])])],-1)),e[12]||(e[12]=n("div",{id:"handle-webhooks",class:"code-section"},[n("h2",null,"🔔 Webhook Handling Examples"),n("p",null,"Implement webhook endpoints to receive real-time updates from Storecove."),n("div",{class:"language-tabs"},[n("button",{class:"tab-btn active",onclick:"showTab('webhook-node')"},"Node.js"),n("button",{class:"tab-btn",onclick:"showTab('webhook-python')"},"Python"),n("button",{class:"tab-btn",onclick:"showTab('webhook-php')"},"PHP"),n("button",{class:"tab-btn",onclick:"showTab('webhook-java')"},"Java")]),n("div",{id:"webhook-node",class:"tab-content active"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"Node.js + Express - Complete Webhook Handler"),n("button",{class:"copy-btn",onclick:"copyCode('webhook-node-code')"},"📋 Copy")]),n("pre",{id:"webhook-node-code"},[n("code",null,`const express = require('express');
const crypto = require('crypto');
const app = express();

// Middleware to capture raw body for signature verification
app.use('/webhook/storecove', express.raw({ type: 'application/json' }));
app.use(express.json());

// Webhook secret from Storecove dashboard
const WEBHOOK_SECRET = ({}).STORECOVE_WEBHOOK_SECRET;

// Verify webhook signature
function verifyWebhookSignature(payload, signature) {
    const computedSignature = crypto
        .createHmac('sha256', WEBHOOK_SECRET)
        .update(payload)
        .digest('hex');
    
    const expectedSignature = \`sha256=\${computedSignature}\`;
    
    return crypto.timingSafeEqual(
        Buffer.from(signature, 'utf8'),
        Buffer.from(expectedSignature, 'utf8')
    );
}

// Main webhook endpoint
app.post('/webhook/storecove', (req, res) => {
    try {
        const signature = req.headers['x-storecove-signature'];
        
        if (!signature) {
            console.error('❌ Missing webhook signature');
            return res.status(401).json({ error: 'Missing signature' });
        }
        
        if (!verifyWebhookSignature(req.body, signature)) {
            console.error('❌ Invalid webhook signature');
            return res.status(401).json({ error: 'Invalid signature' });
        }
        
        const event = JSON.parse(req.body.toString());
        console.log('✅ Webhook received:', event.eventType);
        
        // Handle different event types
        switch (event.eventType) {
            case 'document.sent':
                handleDocumentSent(event);
                break;
                
            case 'document.delivered':
                handleDocumentDelivered(event);
                break;
                
            case 'document.failed':
                handleDocumentFailed(event);
                break;
                
            case 'document.legal_validation_failed':
                handleLegalValidationFailed(event);
                break;
                
            case 'document.updated':
                handleDocumentUpdated(event);
                break;
                
            default:
                console.log(\`⚠️ Unhandled event type: \${event.eventType}\`);
        }
        
        // Always respond with 200 to acknowledge receipt
        res.status(200).json({ status: 'received' });
        
    } catch (error) {
        console.error('❌ Webhook processing error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

function handleDocumentSent(event) {
    console.log(\`📤 Document sent: \${event.documentGuid}\`);
    
    // Update your database
    updateDocumentStatus(event.documentGuid, 'sent', {
        sentAt: event.timestamp,
        recipientInfo: event.recipientInfo
    });
    
    // Send notification to user
    notifyUser(event.legalEntityId, 'Document successfully sent', {
        documentGuid: event.documentGuid,
        recipientName: event.recipientInfo?.name
    });
}

function handleDocumentDelivered(event) {
    console.log(\`✅ Document delivered: \${event.documentGuid}\`);
    
    updateDocumentStatus(event.documentGuid, 'delivered', {
        deliveredAt: event.timestamp,
        deliveryMethod: event.deliveryMethod
    });
    
    // Trigger business logic (e.g., payment reminders)
    schedulePaymentReminder(event.documentGuid, event.dueDate);
}

function handleDocumentFailed(event) {
    console.error(\`❌ Document failed: \${event.documentGuid}\`);
    console.error('Failure reason:', event.failureReason);
    
    updateDocumentStatus(event.documentGuid, 'failed', {
        failedAt: event.timestamp,
        reason: event.failureReason,
        details: event.failureDetails
    });
    
    // Alert administrators
    alertAdministrators('Document delivery failed', {
        documentGuid: event.documentGuid,
        reason: event.failureReason
    });
}

function handleLegalValidationFailed(event) {
    console.error(\`⚖️ Legal validation failed: \${event.documentGuid}\`);
    
    updateDocumentStatus(event.documentGuid, 'validation_failed', {
        failedAt: event.timestamp,
        validationErrors: event.validationErrors
    });
    
    // Notify document creator for corrections
    notifyDocumentCreator(event.documentGuid, event.validationErrors);
}

function handleDocumentUpdated(event) {
    console.log(\`🔄 Document updated: \${event.documentGuid}\`);
    
    // Sync document updates
    syncDocumentUpdates(event.documentGuid, event.updates);
}

// Helper functions (implement based on your architecture)
async function updateDocumentStatus(documentGuid, status, metadata) {
    // Update your database
    console.log(\`Updating \${documentGuid} to status: \${status}\`);
}

async function notifyUser(legalEntityId, message, data) {
    // Send notification (email, push, etc.)
    console.log(\`Notifying entity \${legalEntityId}: \${message}\`);
}

async function schedulePaymentReminder(documentGuid, dueDate) {
    // Schedule payment reminder logic
    console.log(\`Scheduling payment reminder for \${documentGuid} due \${dueDate}\`);
}

async function alertAdministrators(message, data) {
    // Alert system administrators
    console.log(\`ADMIN ALERT: \${message}\`, data);
}

async function notifyDocumentCreator(documentGuid, errors) {
    // Notify document creator about validation errors
    console.log(\`Validation errors for \${documentGuid}:\`, errors);
}

async function syncDocumentUpdates(documentGuid, updates) {
    // Sync document updates to your system
    console.log(\`Syncing updates for \${documentGuid}:\`, updates);
}

// Health check endpoint
app.get('/webhook/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const PORT = ({}).PORT || 3000;
app.listen(PORT, () => {
    console.log(\`🚀 Webhook server running on port \${PORT}\`);
    console.log(\`📡 Storecove webhook endpoint: http://localhost:\${PORT}/webhook/storecove\`);
});`)])])]),n("div",{id:"webhook-python",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"Python + Flask - Webhook Handler with Database"),n("button",{class:"copy-btn",onclick:"copyCode('webhook-python-code')"},"📋 Copy")]),n("pre",{id:"webhook-python-code"},[n("code",null,`from flask import Flask, request, jsonify
import hashlib
import hmac
import json
import logging
from datetime import datetime
from typing import Dict, Any

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Configuration
WEBHOOK_SECRET = os.getenv('STORECOVE_WEBHOOK_SECRET')

class StorecoveWebhookHandler:
    def __init__(self, secret: str):
        self.secret = secret
        
    def verify_signature(self, payload: bytes, signature: str) -> bool:
        """Verify webhook signature for security."""
        if not signature:
            return False
            
        computed_signature = hmac.new(
            self.secret.encode('utf-8'),
            payload,
            hashlib.sha256
        ).hexdigest()
        
        expected_signature = f"sha256={computed_signature}"
        
        return hmac.compare_digest(signature, expected_signature)
    
    def handle_event(self, event: Dict[str, Any]) -> None:
        """Route events to appropriate handlers."""
        event_type = event.get('eventType')
        document_guid = event.get('documentGuid')
        
        logger.info(f"Processing event: {event_type} for document: {document_guid}")
        
        handlers = {
            'document.sent': self.handle_document_sent,
            'document.delivered': self.handle_document_delivered,
            'document.failed': self.handle_document_failed,
            'document.legal_validation_failed': self.handle_legal_validation_failed,
            'document.updated': self.handle_document_updated,
            'recipient.created': self.handle_recipient_created,
            'payment.received': self.handle_payment_received
        }
        
        handler = handlers.get(event_type)
        if handler:
            try:
                handler(event)
            except Exception as e:
                logger.error(f"Error handling {event_type}: {e}")
                raise
        else:
            logger.warning(f"No handler for event type: {event_type}")
    
    def handle_document_sent(self, event: Dict[str, Any]) -> None:
        """Handle document sent event."""
        document_guid = event['documentGuid']
        recipient_info = event.get('recipientInfo', {})
        
        # Update document status in database
        self.update_document_status(
            document_guid, 
            'sent',
            metadata={
                'sent_at': event['timestamp'],
                'recipient_name': recipient_info.get('name'),
                'delivery_method': event.get('deliveryMethod')
            }
        )
        
        # Send notification
        self.send_notification(
            event['legalEntityId'],
            f"Invoice sent to {recipient_info.get('name', 'recipient')}",
            {'document_guid': document_guid}
        )
        
        logger.info(f"✅ Document {document_guid} sent successfully")
    
    def handle_document_delivered(self, event: Dict[str, Any]) -> None:
        """Handle document delivered event."""
        document_guid = event['documentGuid']
        
        self.update_document_status(
            document_guid,
            'delivered',
            metadata={
                'delivered_at': event['timestamp'],
                'delivery_confirmation': event.get('deliveryConfirmation')
            }
        )
        
        # Start payment tracking if it's an invoice
        if event.get('documentType') == 'invoice':
            self.start_payment_tracking(document_guid, event.get('dueDate'))
        
        logger.info(f"✅ Document {document_guid} delivered")
    
    def handle_document_failed(self, event: Dict[str, Any]) -> None:
        """Handle document delivery failure."""
        document_guid = event['documentGuid']
        failure_reason = event.get('failureReason', 'Unknown error')
        
        self.update_document_status(
            document_guid,
            'failed',
            metadata={
                'failed_at': event['timestamp'],
                'failure_reason': failure_reason,
                'failure_details': event.get('failureDetails')
            }
        )
        
        # Alert administrators
        self.alert_administrators(
            f"Document delivery failed: {document_guid}",
            {'reason': failure_reason}
        )
        
        logger.error(f"❌ Document {document_guid} failed: {failure_reason}")
    
    def handle_legal_validation_failed(self, event: Dict[str, Any]) -> None:
        """Handle legal validation failure."""
        document_guid = event['documentGuid']
        validation_errors = event.get('validationErrors', [])
        
        self.update_document_status(
            document_guid,
            'validation_failed',
            metadata={
                'failed_at': event['timestamp'],
                'validation_errors': validation_errors
            }
        )
        
        # Notify document creator
        self.notify_document_creator(document_guid, validation_errors)
        
        logger.error(f"⚖️ Legal validation failed for {document_guid}")
    
    def handle_document_updated(self, event: Dict[str, Any]) -> None:
        """Handle document update event."""
        document_guid = event['documentGuid']
        updates = event.get('updates', {})
        
        # Sync updates to local database
        self.sync_document_updates(document_guid, updates)
        
        logger.info(f"🔄 Document {document_guid} updated")
    
    def handle_recipient_created(self, event: Dict[str, Any]) -> None:
        """Handle new recipient creation."""
        recipient_id = event.get('recipientId')
        recipient_info = event.get('recipientInfo', {})
        
        # Store recipient information
        self.store_recipient_info(recipient_id, recipient_info)
        
        logger.info(f"👤 New recipient created: {recipient_id}")
    
    def handle_payment_received(self, event: Dict[str, Any]) -> None:
        """Handle payment received event."""
        document_guid = event['documentGuid']
        payment_info = event.get('paymentInfo', {})
        
        # Update payment status
        self.update_payment_status(document_guid, 'paid', payment_info)
        
        # Send payment confirmation
        self.send_payment_confirmation(document_guid, payment_info)
        
        logger.info(f"💰 Payment received for {document_guid}")
    
    # Database operations (implement based on your database)
    def update_document_status(self, document_guid: str, status: str, metadata: Dict = None):
        # Update document status in your database
        logger.info(f"Updating {document_guid} to status: {status}")
        pass
    
    def send_notification(self, legal_entity_id: int, message: str, data: Dict = None):
        # Send notification to users
        logger.info(f"Notification for entity {legal_entity_id}: {message}")
        pass
    
    def start_payment_tracking(self, document_guid: str, due_date: str):
        # Start payment tracking and reminders
        logger.info(f"Starting payment tracking for {document_guid}, due: {due_date}")
        pass
    
    def alert_administrators(self, message: str, data: Dict = None):
        # Alert system administrators
        logger.warning(f"ADMIN ALERT: {message}")
        pass
    
    def notify_document_creator(self, document_guid: str, errors: list):
        # Notify document creator about issues
        logger.info(f"Notifying creator about errors in {document_guid}")
        pass
    
    def sync_document_updates(self, document_guid: str, updates: Dict):
        # Sync document updates
        logger.info(f"Syncing updates for {document_guid}")
        pass
    
    def store_recipient_info(self, recipient_id: str, info: Dict):
        # Store recipient information
        logger.info(f"Storing recipient info for {recipient_id}")
        pass
    
    def update_payment_status(self, document_guid: str, status: str, payment_info: Dict):
        # Update payment status
        logger.info(f"Payment status for {document_guid}: {status}")
        pass
    
    def send_payment_confirmation(self, document_guid: str, payment_info: Dict):
        # Send payment confirmation
        logger.info(f"Sending payment confirmation for {document_guid}")
        pass

# Initialize webhook handler
webhook_handler = StorecoveWebhookHandler(WEBHOOK_SECRET)

@app.route('/webhook/storecove', methods=['POST'])
def handle_webhook():
    try:
        # Get signature from headers
        signature = request.headers.get('X-Storecove-Signature')
        
        if not signature:
            logger.error("Missing webhook signature")
            return jsonify({'error': 'Missing signature'}), 401
        
        # Verify signature
        payload = request.get_data()
        if not webhook_handler.verify_signature(payload, signature):
            logger.error("Invalid webhook signature")
            return jsonify({'error': 'Invalid signature'}), 401
        
        # Parse event
        event = request.get_json()
        if not event:
            logger.error("Invalid JSON payload")
            return jsonify({'error': 'Invalid JSON'}), 400
        
        # Handle event
        webhook_handler.handle_event(event)
        
        return jsonify({'status': 'received'}), 200
        
    except Exception as e:
        logger.error(f"Webhook processing error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/webhook/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)`)])])]),n("div",{id:"webhook-php",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"PHP - WordPress Compatible Webhook Handler"),n("button",{class:"copy-btn",onclick:"copyCode('webhook-php-code')"},"📋 Copy")]),n("pre",{id:"webhook-php-code"},[n("code",null,`<?php

class StorecoveWebhookHandler {
    private $webhookSecret;
    private $logger;
    
    public function __construct($webhookSecret) {
        $this->webhookSecret = $webhookSecret;
        $this->logger = new Logger();
    }
    
    public function handleWebhook() {
        try {
            // Get raw POST data
            $payload = file_get_contents('php://input');
            $signature = $_SERVER['HTTP_X_STORECOVE_SIGNATURE'] ?? '';
            
            if (!$this->verifySignature($payload, $signature)) {
                $this->logger->error('Invalid webhook signature');
                http_response_code(401);
                echo json_encode(['error' => 'Invalid signature']);
                return;
            }
            
            $event = json_decode($payload, true);
            if (!$event) {
                $this->logger->error('Invalid JSON payload');
                http_response_code(400);
                echo json_encode(['error' => 'Invalid JSON']);
                return;
            }
            
            $this->processEvent($event);
            
            http_response_code(200);
            echo json_encode(['status' => 'received']);
            
        } catch (Exception $e) {
            $this->logger->error('Webhook processing error: ' . $e->getMessage());
            http_response_code(500);
            echo json_encode(['error' => 'Internal server error']);
        }
    }
    
    private function verifySignature($payload, $signature) {
        if (empty($signature)) {
            return false;
        }
        
        $computedSignature = 'sha256=' . hash_hmac('sha256', $payload, $this->webhookSecret);
        
        return hash_equals($signature, $computedSignature);
    }
    
    private function processEvent($event) {
        $eventType = $event['eventType'] ?? '';
        $documentGuid = $event['documentGuid'] ?? '';
        
        $this->logger->info("Processing event: $eventType for document: $documentGuid");
        
        switch ($eventType) {
            case 'document.sent':
                $this->handleDocumentSent($event);
                break;
                
            case 'document.delivered':
                $this->handleDocumentDelivered($event);
                break;
                
            case 'document.failed':
                $this->handleDocumentFailed($event);
                break;
                
            case 'document.legal_validation_failed':
                $this->handleLegalValidationFailed($event);
                break;
                
            case 'document.updated':
                $this->handleDocumentUpdated($event);
                break;
                
            default:
                $this->logger->warning("Unhandled event type: $eventType");
        }
    }
    
    private function handleDocumentSent($event) {
        $documentGuid = $event['documentGuid'];
        $recipientInfo = $event['recipientInfo'] ?? [];
        
        // Update database
        $this->updateDocumentStatus($documentGuid, 'sent', [
            'sent_at' => $event['timestamp'],
            'recipient_name' => $recipientInfo['name'] ?? null,
            'delivery_method' => $event['deliveryMethod'] ?? null
        ]);
        
        // Send notification
        $this->sendNotification(
            $event['legalEntityId'],
            "Document sent to " . ($recipientInfo['name'] ?? 'recipient'),
            ['document_guid' => $documentGuid]
        );
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_sent', $event);
        }
        
        $this->logger->info("✅ Document $documentGuid sent successfully");
    }
    
    private function handleDocumentDelivered($event) {
        $documentGuid = $event['documentGuid'];
        
        $this->updateDocumentStatus($documentGuid, 'delivered', [
            'delivered_at' => $event['timestamp'],
            'delivery_confirmation' => $event['deliveryConfirmation'] ?? null
        ]);
        
        // Start payment tracking for invoices
        if (($event['documentType'] ?? '') === 'invoice') {
            $this->startPaymentTracking($documentGuid, $event['dueDate'] ?? null);
        }
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_delivered', $event);
        }
        
        $this->logger->info("✅ Document $documentGuid delivered");
    }
    
    private function handleDocumentFailed($event) {
        $documentGuid = $event['documentGuid'];
        $failureReason = $event['failureReason'] ?? 'Unknown error';
        
        $this->updateDocumentStatus($documentGuid, 'failed', [
            'failed_at' => $event['timestamp'],
            'failure_reason' => $failureReason,
            'failure_details' => $event['failureDetails'] ?? null
        ]);
        
        // Alert administrators
        $this->alertAdministrators(
            "Document delivery failed: $documentGuid",
            ['reason' => $failureReason]
        );
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_failed', $event);
        }
        
        $this->logger->error("❌ Document $documentGuid failed: $failureReason");
    }
    
    private function handleLegalValidationFailed($event) {
        $documentGuid = $event['documentGuid'];
        $validationErrors = $event['validationErrors'] ?? [];
        
        $this->updateDocumentStatus($documentGuid, 'validation_failed', [
            'failed_at' => $event['timestamp'],
            'validation_errors' => $validationErrors
        ]);
        
        $this->notifyDocumentCreator($documentGuid, $validationErrors);
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_validation_failed', $event);
        }
        
        $this->logger->error("⚖️ Legal validation failed for $documentGuid");
    }
    
    private function handleDocumentUpdated($event) {
        $documentGuid = $event['documentGuid'];
        $updates = $event['updates'] ?? [];
        
        $this->syncDocumentUpdates($documentGuid, $updates);
        
        // WordPress action hook
        if (function_exists('do_action')) {
            do_action('storecove_document_updated', $event);
        }
        
        $this->logger->info("🔄 Document $documentGuid updated");
    }
    
    // Database operations
    private function updateDocumentStatus($documentGuid, $status, $metadata = []) {
        global $wpdb;
        
        if ($wpdb) {
            // WordPress database update
            $wpdb->update(
                'storecove_documents',
                [
                    'status' => $status,
                    'metadata' => json_encode($metadata),
                    'updated_at' => current_time('mysql')
                ],
                ['document_guid' => $documentGuid]
            );
        } else {
            // Standard database update
            $pdo = $this->getDatabaseConnection();
            $stmt = $pdo->prepare("
                UPDATE documents 
                SET status = ?, metadata = ?, updated_at = NOW() 
                WHERE document_guid = ?
            ");
            $stmt->execute([$status, json_encode($metadata), $documentGuid]);
        }
        
        $this->logger->info("Updated $documentGuid to status: $status");
    }
    
    private function sendNotification($legalEntityId, $message, $data = []) {
        // WordPress notification
        if (function_exists('wp_mail')) {
            $user = get_user_by('meta_key', 'storecove_legal_entity_id');
            if ($user) {
                wp_mail(
                    $user->user_email,
                    'Storecove Document Update',
                    $message . "\\n\\nDetails: " . json_encode($data)
                );
            }
        }
        
        $this->logger->info("Notification sent for entity $legalEntityId: $message");
    }
    
    private function startPaymentTracking($documentGuid, $dueDate) {
        // Schedule payment reminders
        if (function_exists('wp_schedule_event')) {
            $reminderTime = strtotime($dueDate . ' -7 days');
            wp_schedule_single_event($reminderTime, 'storecove_payment_reminder', [$documentGuid]);
        }
        
        $this->logger->info("Payment tracking started for $documentGuid, due: $dueDate");
    }
    
    private function alertAdministrators($message, $data = []) {
        // Send admin email
        if (function_exists('wp_mail')) {
            $adminEmail = get_option('admin_email');
            wp_mail(
                $adminEmail,
                'Storecove Alert',
                $message . "\\n\\nDetails: " . json_encode($data)
            );
        }
        
        $this->logger->warning("ADMIN ALERT: $message");
    }
    
    private function notifyDocumentCreator($documentGuid, $errors) {
        $this->logger->info("Validation errors for $documentGuid: " . json_encode($errors));
    }
    
    private function syncDocumentUpdates($documentGuid, $updates) {
        $this->logger->info("Syncing updates for $documentGuid: " . json_encode($updates));
    }
    
    private function getDatabaseConnection() {
        // Return PDO connection for non-WordPress environments
        return new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME,
            DB_USER,
            DB_PASSWORD
        );
    }
}

class Logger {
    public function info($message) {
        error_log("[INFO] " . $message);
    }
    
    public function error($message) {
        error_log("[ERROR] " . $message);
    }
    
    public function warning($message) {
        error_log("[WARNING] " . $message);
    }
}

// Usage for WordPress
if (defined('ABSPATH')) {
    // WordPress webhook endpoint
    add_action('wp_ajax_nopriv_storecove_webhook', function() {
        $handler = new StorecoveWebhookHandler(get_option('storecove_webhook_secret'));
        $handler->handleWebhook();
        wp_die();
    });
    
    // Custom WordPress actions
    add_action('storecove_document_sent', function($event) {
        // Custom logic when document is sent
    });
    
    add_action('storecove_document_delivered', function($event) {
        // Custom logic when document is delivered
    });
    
} else {
    // Standalone PHP usage
    $webhookSecret = $_ENV['STORECOVE_WEBHOOK_SECRET'];
    $handler = new StorecoveWebhookHandler($webhookSecret);
    $handler->handleWebhook();
}

?>`)])])]),n("div",{id:"webhook-java",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"Java Spring Boot - Enterprise Webhook Handler"),n("button",{class:"copy-btn",onclick:"copyCode('webhook-java-code')"},"📋 Copy")]),n("pre",{id:"webhook-java-code"},[n("code",null,`@RestController
@RequestMapping("/webhook")
@Slf4j
public class StorecoveWebhookController {
    
    @Value("\${storecove.webhook.secret}")
    private String webhookSecret;
    
    @Autowired
    private StorecoveWebhookService webhookService;
    
    @PostMapping("/storecove")
    public ResponseEntity<Map<String, String>> handleWebhook(
            @RequestBody String payload,
            @RequestHeader("X-Storecove-Signature") String signature) {
        
        try {
            // Verify signature
            if (!verifySignature(payload, signature)) {
                log.error("Invalid webhook signature");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid signature"));
            }
            
            // Parse event
            ObjectMapper mapper = new ObjectMapper();
            JsonNode event = mapper.readTree(payload);
            
            // Process event
            webhookService.processEvent(event);
            
            log.info("Webhook processed successfully");
            return ResponseEntity.ok(Map.of("status", "received"));
            
        } catch (Exception e) {
            log.error("Webhook processing error", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Internal server error"));
        }
    }
    
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        return ResponseEntity.ok(Map.of(
            "status", "healthy",
            "timestamp", Instant.now().toString()
        ));
    }
    
    private boolean verifySignature(String payload, String signature) {
        if (signature == null || signature.isEmpty()) {
            return false;
        }
        
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(
                webhookSecret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            mac.init(secretKey);
            
            byte[] hash = mac.doFinal(payload.getBytes(StandardCharsets.UTF_8));
            String computedSignature = "sha256=" + 
                DatatypeConverter.printHexBinary(hash).toLowerCase();
            
            return MessageDigest.isEqual(
                signature.getBytes(StandardCharsets.UTF_8),
                computedSignature.getBytes(StandardCharsets.UTF_8)
            );
            
        } catch (Exception e) {
            log.error("Error verifying signature", e);
            return false;
        }
    }
}

@Service
@Slf4j
public class StorecoveWebhookService {
    
    @Autowired
    private DocumentRepository documentRepository;
    
    @Autowired
    private NotificationService notificationService;
    
    @Autowired
    private PaymentTrackingService paymentTrackingService;
    
    @EventListener
    @Async
    public void processEvent(JsonNode event) {
        String eventType = event.get("eventType").asText();
        String documentGuid = event.get("documentGuid").asText();
        
        log.info("Processing event: {} for document: {}", eventType, documentGuid);
        
        switch (eventType) {
            case "document.sent":
                handleDocumentSent(event);
                break;
                
            case "document.delivered":
                handleDocumentDelivered(event);
                break;
                
            case "document.failed":
                handleDocumentFailed(event);
                break;
                
            case "document.legal_validation_failed":
                handleLegalValidationFailed(event);
                break;
                
            case "document.updated":
                handleDocumentUpdated(event);
                break;
                
            default:
                log.warn("Unhandled event type: {}", eventType);
        }
        
        // Publish Spring event for other components
        publishApplicationEvent(eventType, event);
    }
    
    private void handleDocumentSent(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        JsonNode recipientInfo = event.get("recipientInfo");
        
        // Update document status
        updateDocumentStatus(documentGuid, DocumentStatus.SENT, Map.of(
            "sentAt", event.get("timestamp").asText(),
            "recipientName", recipientInfo != null ? 
                recipientInfo.get("name").asText() : null,
            "deliveryMethod", event.has("deliveryMethod") ? 
                event.get("deliveryMethod").asText() : null
        ));
        
        // Send notification
        notificationService.sendNotification(
            event.get("legalEntityId").asLong(),
            "Document sent successfully",
            Map.of("documentGuid", documentGuid)
        );
        
        log.info("✅ Document {} sent successfully", documentGuid);
    }
    
    private void handleDocumentDelivered(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        
        updateDocumentStatus(documentGuid, DocumentStatus.DELIVERED, Map.of(
            "deliveredAt", event.get("timestamp").asText(),
            "deliveryConfirmation", event.has("deliveryConfirmation") ? 
                event.get("deliveryConfirmation").asText() : null
        ));
        
        // Start payment tracking for invoices
        if ("invoice".equals(event.get("documentType").asText())) {
            String dueDate = event.has("dueDate") ? event.get("dueDate").asText() : null;
            paymentTrackingService.startTracking(documentGuid, dueDate);
        }
        
        log.info("✅ Document {} delivered", documentGuid);
    }
    
    private void handleDocumentFailed(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        String failureReason = event.has("failureReason") ? 
            event.get("failureReason").asText() : "Unknown error";
        
        updateDocumentStatus(documentGuid, DocumentStatus.FAILED, Map.of(
            "failedAt", event.get("timestamp").asText(),
            "failureReason", failureReason,
            "failureDetails", event.has("failureDetails") ? 
                event.get("failureDetails").toString() : null
        ));
        
        // Alert administrators
        notificationService.alertAdministrators(
            "Document delivery failed: " + documentGuid,
            Map.of("reason", failureReason)
        );
        
        log.error("❌ Document {} failed: {}", documentGuid, failureReason);
    }
    
    private void handleLegalValidationFailed(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        JsonNode validationErrors = event.get("validationErrors");
        
        updateDocumentStatus(documentGuid, DocumentStatus.VALIDATION_FAILED, Map.of(
            "failedAt", event.get("timestamp").asText(),
            "validationErrors", validationErrors != null ? 
                validationErrors.toString() : null
        ));
        
        notificationService.notifyDocumentCreator(documentGuid, validationErrors);
        
        log.error("⚖️ Legal validation failed for {}", documentGuid);
    }
    
    private void handleDocumentUpdated(JsonNode event) {
        String documentGuid = event.get("documentGuid").asText();
        JsonNode updates = event.get("updates");
        
        syncDocumentUpdates(documentGuid, updates);
        
        log.info("🔄 Document {} updated", documentGuid);
    }
    
    @Transactional
    private void updateDocumentStatus(String documentGuid, DocumentStatus status, 
                                     Map<String, Object> metadata) {
        Optional<Document> documentOpt = documentRepository.findByGuid(documentGuid);
        
        if (documentOpt.isPresent()) {
            Document document = documentOpt.get();
            document.setStatus(status);
            document.setMetadata(metadata);
            document.setUpdatedAt(Instant.now());
            documentRepository.save(document);
            
            log.info("Updated {} to status: {}", documentGuid, status);
        } else {
            log.warn("Document not found: {}", documentGuid);
        }
    }
    
    private void syncDocumentUpdates(String documentGuid, JsonNode updates) {
        // Implement document synchronization logic
        log.info("Syncing updates for {}", documentGuid);
    }
    
    private void publishApplicationEvent(String eventType, JsonNode event) {
        // Publish Spring application event for other components
        StorecoveEvent storecoveEvent = new StorecoveEvent(this, eventType, event);
        // applicationEventPublisher.publishEvent(storecoveEvent);
    }
}

@Entity
@Table(name = "documents")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "document_guid", unique = true, nullable = false)
    private String guid;
    
    @Enumerated(EnumType.STRING)
    private DocumentStatus status;
    
    @Convert(converter = JsonConverter.class)
    @Column(columnDefinition = "json")
    private Map<String, Object> metadata;
    
    @CreationTimestamp
    private Instant createdAt;
    
    @UpdateTimestamp
    private Instant updatedAt;
}

public enum DocumentStatus {
    PENDING,
    SENT,
    DELIVERED,
    FAILED,
    VALIDATION_FAILED
}`)])])])],-1)),e[13]||(e[13]=n("div",{id:"recipient-discovery",class:"code-section"},[n("h2",null,"🔍 Recipient Discovery Examples"),n("p",null,"Discover recipient identifiers and capabilities before sending documents."),n("div",{class:"language-tabs"},[n("button",{class:"tab-btn active",onclick:"showTab('discovery-curl')"},"cURL"),n("button",{class:"tab-btn",onclick:"showTab('discovery-js')"},"JavaScript"),n("button",{class:"tab-btn",onclick:"showTab('discovery-python')"},"Python")]),n("div",{id:"discovery-curl",class:"tab-content active"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"cURL - Recipient Discovery"),n("button",{class:"copy-btn",onclick:"copyCode('discovery-curl-code')"},"📋 Copy")]),n("pre",{id:"discovery-curl-code"},[n("code",null,`# Discover recipient by VAT number
curl -X GET "https://api.storecove.com/api/v2/discovery/recipients?identifier=DE:VAT:DE123456789" \\
  -H "Authorization: Bearer $STORECOVE_API_KEY"

# Discover recipient by email domain
curl -X GET "https://api.storecove.com/api/v2/discovery/recipients?identifier=email:company.com" \\
  -H "Authorization: Bearer $STORECOVE_API_KEY"

# Discover multiple recipients
curl -X POST "https://api.storecove.com/api/v2/discovery/recipients/batch" \\
  -H "Authorization: Bearer $STORECOVE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "identifiers": [
      "DE:VAT:DE123456789",
      "NL:VAT:NL123456789B01",
      "email:customer@company.com"
    ]
  }'`)])])]),n("div",{id:"discovery-js",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"JavaScript - Advanced Recipient Discovery"),n("button",{class:"copy-btn",onclick:"copyCode('discovery-js-code')"},"📋 Copy")]),n("pre",{id:"discovery-js-code"},[n("code",null,`class RecipientDiscovery {
  constructor(apiClient) {
    this.api = apiClient;
    this.cache = new Map();
    this.cacheTimeout = 30 * 60 * 1000; // 30 minutes
  }

  async discoverRecipient(identifier) {
    // Check cache first
    const cached = this.getCachedResult(identifier);
    if (cached) {
      console.log('📋 Using cached result for:', identifier);
      return cached;
    }

    try {
      const response = await this.api.get('/discovery/recipients', {
        params: { identifier }
      });

      const result = response.data;
      this.cacheResult(identifier, result);

      console.log('🔍 Discovered recipient:', identifier);
      return result;

    } catch (error) {
      if (error.response?.status === 404) {
        console.log('❌ Recipient not found:', identifier);
        return null;
      }
      throw error;
    }
  }

  async discoverMultipleRecipients(identifiers) {
    try {
      const response = await this.api.post('/discovery/recipients/batch', {
        identifiers
      });

      const results = response.data;
      
      // Cache individual results
      results.forEach(result => {
        if (result.identifier) {
          this.cacheResult(result.identifier, result);
        }
      });

      console.log(\`🔍 Discovered \${results.length} recipients\`);
      return results;

    } catch (error) {
      console.error('❌ Batch discovery failed:', error.message);
      throw error;
    }
  }

  async validateRecipientCapabilities(identifier, documentType = 'invoice') {
    const recipient = await this.discoverRecipient(identifier);
    
    if (!recipient) {
      return {
        canReceive: false,
        reason: 'Recipient not found'
      };
    }

    const capabilities = recipient.capabilities || {};
    const formats = capabilities.supportedFormats || [];
    
    return {
      canReceive: recipient.active && formats.length > 0,
      supportedFormats: formats,
      preferredFormat: capabilities.preferredFormat,
      networkName: recipient.networkName,
      lastSeen: recipient.lastSeen,
      reason: !recipient.active ? 'Recipient inactive' : 
              formats.length === 0 ? 'No supported formats' : null
    };
  }

  async findBestDeliveryMethod(identifiers, documentType = 'invoice') {
    const discoveries = await Promise.all(
      identifiers.map(async (id) => {
        try {
          const validation = await this.validateRecipientCapabilities(id, documentType);
          return { identifier: id, ...validation };
        } catch (error) {
          return { identifier: id, canReceive: false, reason: error.message };
        }
      })
    );

    // Sort by preference: active recipients with electronic delivery first
    const sorted = discoveries.sort((a, b) => {
      if (a.canReceive && !b.canReceive) return -1;
      if (!a.canReceive && b.canReceive) return 1;
      
      // Prefer Peppol over other networks
      if (a.networkName === 'peppol' && b.networkName !== 'peppol') return -1;
      if (a.networkName !== 'peppol' && b.networkName === 'peppol') return 1;
      
      return 0;
    });

    const best = sorted[0];
    
    return {
      recommendedMethod: best.canReceive ? best.identifier : null,
      allMethods: sorted,
      fallbackToEmail: !best.canReceive,
      recommendation: this.getRecommendation(sorted)
    };
  }

  getRecommendation(discoveries) {
    const electronic = discoveries.filter(d => d.canReceive);
    
    if (electronic.length === 0) {
      return 'No electronic delivery options found. Consider email fallback.';
    }
    
    const peppol = electronic.filter(d => d.networkName === 'peppol');
    if (peppol.length > 0) {
      return \`Peppol delivery recommended via \${peppol[0].identifier}\`;
    }
    
    return \`Electronic delivery available via \${electronic[0].identifier}\`;
  }

  getCachedResult(identifier) {
    const cached = this.cache.get(identifier);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  }

  cacheResult(identifier, data) {
    this.cache.set(identifier, {
      data,
      timestamp: Date.now()
    });
  }

  clearCache() {
    this.cache.clear();
  }
}

// Example usage
const discovery = new RecipientDiscovery(storecoveAPI);

// Single recipient discovery
const recipient = await discovery.discoverRecipient('DE:VAT:DE123456789');
console.log('Recipient capabilities:', recipient);

// Validate specific recipient
const validation = await discovery.validateRecipientCapabilities('DE:VAT:DE123456789');
console.log('Can receive invoices:', validation.canReceive);

// Find best delivery method from multiple options
const identifiers = [
  'DE:VAT:DE123456789',
  'email:customer@company.com',
  'NL:VAT:NL123456789B01'
];

const deliveryOptions = await discovery.findBestDeliveryMethod(identifiers);
console.log('Recommended delivery:', deliveryOptions.recommendation);

// Batch discovery
const multipleRecipients = await discovery.discoverMultipleRecipients([
  'DE:VAT:DE123456789',
  'FR:VAT:FR12345678901',
  'IT:VAT:IT12345678901'
]);
console.log('Batch results:', multipleRecipients);`)])])]),n("div",{id:"discovery-python",class:"tab-content"},[n("div",{class:"code-example"},[n("div",{class:"code-header"},[n("span",{class:"code-title"},"Python - Recipient Discovery with Caching"),n("button",{class:"copy-btn",onclick:"copyCode('discovery-python-code')"},"📋 Copy")]),n("pre",{id:"discovery-python-code"},[n("code",null,`import time
import asyncio
from typing import List, Dict, Optional, Tuple
from dataclasses import dataclass
from enum import Enum

class NetworkType(Enum):
    PEPPOL = "peppol"
    EMAIL = "email"
    OTHER = "other"

@dataclass
class RecipientCapability:
    identifier: str
    active: bool
    network_name: str
    supported_formats: List[str]
    preferred_format: Optional[str]
    last_seen: Optional[str]
    can_receive: bool
    reason: Optional[str] = None

class RecipientDiscoveryService:
    def __init__(self, client: StorecoveClient):
        self.client = client
        self.cache = {}
        self.cache_timeout = 30 * 60  # 30 minutes
    
    async def discover_recipient(self, identifier: str) -> Optional[Dict]:
        """Discover a single recipient by identifier."""
        # Check cache first
        cached = self._get_cached_result(identifier)
        if cached:
            print(f"📋 Using cached result for: {identifier}")
            return cached
        
        try:
            response = await self.client.get(
                f"/discovery/recipients",
                params={"identifier": identifier}
            )
            
            result = response.json()
            self._cache_result(identifier, result)
            
            print(f"🔍 Discovered recipient: {identifier}")
            return result
            
        except requests.exceptions.HTTPError as e:
            if e.response.status_code == 404:
                print(f"❌ Recipient not found: {identifier}")
                return None
            raise
    
    async def discover_multiple_recipients(self, identifiers: List[str]) -> List[Dict]:
        """Discover multiple recipients in a batch."""
        try:
            response = await self.client.post(
                "/discovery/recipients/batch",
                json={"identifiers": identifiers}
            )
            
            results = response.json()
            
            # Cache individual results
            for result in results:
                if 'identifier' in result:
                    self._cache_result(result['identifier'], result)
            
            print(f"🔍 Discovered {len(results)} recipients")
            return results
            
        except Exception as e:
            print(f"❌ Batch discovery failed: {e}")
            raise
    
    async def validate_recipient_capabilities(
        self, 
        identifier: str, 
        document_type: str = "invoice"
    ) -> RecipientCapability:
        """Validate if recipient can receive specified document type."""
        recipient = await self.discover_recipient(identifier)
        
        if not recipient:
            return RecipientCapability(
                identifier=identifier,
                active=False,
                network_name="unknown",
                supported_formats=[],
                preferred_format=None,
                last_seen=None,
                can_receive=False,
                reason="Recipient not found"
            )
        
        capabilities = recipient.get('capabilities', {})
        formats = capabilities.get('supportedFormats', [])
        active = recipient.get('active', False)
        
        can_receive = active and len(formats) > 0
        reason = None
        
        if not active:
            reason = "Recipient inactive"
        elif len(formats) == 0:
            reason = "No supported formats"
        
        return RecipientCapability(
            identifier=identifier,
            active=active,
            network_name=recipient.get('networkName', 'unknown'),
            supported_formats=formats,
            preferred_format=capabilities.get('preferredFormat'),
            last_seen=recipient.get('lastSeen'),
            can_receive=can_receive,
            reason=reason
        )
    
    async def find_best_delivery_method(
        self, 
        identifiers: List[str], 
        document_type: str = "invoice"
    ) -> Dict:
        """Find the best delivery method from multiple identifier options."""
        # Validate all identifiers concurrently
        tasks = [
            self.validate_recipient_capabilities(identifier, document_type)
            for identifier in identifiers
        ]
        
        capabilities = await asyncio.gather(*tasks, return_exceptions=True)
        
        # Filter out exceptions and create valid capabilities list
        valid_capabilities = []
        for cap in capabilities:
            if isinstance(cap, Exception):
                print(f"⚠️ Error validating recipient: {cap}")
                continue
            valid_capabilities.append(cap)
        
        # Sort by preference
        sorted_capabilities = self._sort_by_preference(valid_capabilities)
        
        best = sorted_capabilities[0] if sorted_capabilities else None
        
        return {
            'recommended_method': best.identifier if best and best.can_receive else None,
            'all_methods': sorted_capabilities,
            'fallback_to_email': not best or not best.can_receive,
            'recommendation': self._get_recommendation(sorted_capabilities)
        }
    
    def _sort_by_preference(self, capabilities: List[RecipientCapability]) -> List[RecipientCapability]:
        """Sort capabilities by delivery preference."""
        def sort_key(cap):
            # Active recipients first
            if not cap.can_receive:
                return (1, cap.identifier)
            
            # Prefer Peppol network
            if cap.network_name == NetworkType.PEPPOL.value:
                return (0, 0, cap.identifier)
            
            # Then other electronic networks
            if cap.network_name != NetworkType.EMAIL.value:
                return (0, 1, cap.identifier)
            
            # Email fallback last
            return (0, 2, cap.identifier)
        
        return sorted(capabilities, key=sort_key)
    
    def _get_recommendation(self, capabilities: List[RecipientCapability]) -> str:
        """Generate human-readable recommendation."""
        electronic = [cap for cap in capabilities if cap.can_receive]
        
        if not electronic:
            return "No electronic delivery options found. Consider email fallback."
        
        peppol = [cap for cap in electronic if cap.network_name == NetworkType.PEPPOL.value]
        if peppol:
            return f"Peppol delivery recommended via {peppol[0].identifier}"
        
        return f"Electronic delivery available via {electronic[0].identifier}"
    
    def _get_cached_result(self, identifier: str) -> Optional[Dict]:
        """Get cached result if still valid."""
        cached = self.cache.get(identifier)
        if cached and time.time() - cached['timestamp'] < self.cache_timeout:
            return cached['data']
        return None
    
    def _cache_result(self, identifier: str, data: Dict) -> None:
        """Cache discovery result."""
        self.cache[identifier] = {
            'data': data,
            'timestamp': time.time()
        }
    
    def clear_cache(self) -> None:
        """Clear discovery cache."""
        self.cache.clear()

# Example usage
async def main():
    client = StorecoveClient()
    discovery = RecipientDiscoveryService(client)
    
    # Single recipient discovery
    recipient = await discovery.discover_recipient('DE:VAT:DE123456789')
    print('Recipient info:', recipient)
    
    # Validate capabilities
    capabilities = await discovery.validate_recipient_capabilities('DE:VAT:DE123456789')
    print(f'Can receive invoices: {capabilities.can_receive}')
    print(f'Supported formats: {capabilities.supported_formats}')
    
    # Find best delivery method
    identifiers = [
        'DE:VAT:DE123456789',
        'email:customer@company.com', 
        'NL:VAT:NL123456789B01'
    ]
    
    delivery_options = await discovery.find_best_delivery_method(identifiers)
    print('Recommendation:', delivery_options['recommendation'])
    print('Fallback to email:', delivery_options['fallback_to_email'])
    
    # Batch discovery
    batch_results = await discovery.discover_multiple_recipients([
        'DE:VAT:DE123456789',
        'FR:VAT:FR12345678901',
        'IT:VAT:IT12345678901'
    ])
    
    for result in batch_results:
        print(f"Found: {result.get('identifier')} - Active: {result.get('active')}")

# Run the example
if __name__ == "__main__":
    asyncio.run(main())`)])])])],-1))])]),n("section",cv,[n("div",dv,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[14]||(e[14]=[V(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const uv=De(nv,[["render",lv],["__scopeId","data-v-bf1cb0c2"]]);const vv={name:"SandboxTesting",methods:{copyCode(t){const a=document.getElementById(t).textContent;navigator.clipboard.writeText(a).then(()=>{const s=event.target,o=s.textContent;s.textContent="Copied!",setTimeout(()=>{s.textContent=o},2e3)})},copySandboxUrl(){const t="https://sandbox.storecove.com/register";navigator.clipboard.writeText(t).then(()=>{const e=event.target,a=e.textContent;e.textContent="Copied!",setTimeout(()=>{e.textContent=a},2e3)})},downloadSampleInvoices(){const t={"UBL_Invoice_Sample.xml":`<?xml version="1.0" encoding="UTF-8"?>
<Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
  <ID>TEST-INV-001</ID>
  <IssueDate>2024-01-15</IssueDate>
  <DueDate>2024-02-15</DueDate>
  <DocumentCurrencyCode>EUR</DocumentCurrencyCode>
  <!-- Sample UBL invoice structure -->
</Invoice>`,"CII_Invoice_Sample.xml":`<?xml version="1.0" encoding="UTF-8"?>
<rsm:CrossIndustryInvoice xmlns:rsm="urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100">
  <!-- Sample CII invoice structure -->
</rsm:CrossIndustryInvoice>`},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),a=URL.createObjectURL(e),s=document.createElement("a");s.href=a,s.download="storecove-sample-invoices.json",s.click(),URL.revokeObjectURL(a)}}},pv={class:"sandbox-testing"},fv={class:"content-section"},mv={class:"container"},gv={class:"section-content"},hv={class:"setup-steps"},bv={class:"step-item"},yv={class:"step-content"},_v={class:"code-block"},wv={class:"code-header"},kv={class:"step-item"},qv={class:"step-content"},Sv={class:"code-block"},Ev={class:"code-header"},Cv={class:"step-item"},xv={class:"step-content"},Tv={class:"code-block"},Dv={class:"code-header"},Iv={class:"section-content"},Rv={class:"scenarios-grid"},Pv={class:"scenario-card"},Av={class:"scenario-content"},$v={class:"code-block"},Ov={class:"code-header"},Lv={class:"section-content"},Nv={class:"webhook-setup"},jv={class:"code-block"},Mv={class:"code-header"},Uv={class:"section-content"},Bv={class:"tools-grid"},Hv={class:"tool-card"},Fv={class:"tool-content"},Vv={class:"section-content"},Wv={class:"migration-steps"},Gv={class:"migration-step"},Kv={class:"migration-content"},zv={class:"code-block"},Yv={class:"code-header"},Jv={class:"back-navigation"},Qv={class:"container"};function Xv(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",pv,[e[51]||(e[51]=n("section",{class:"hero-section"},[n("div",{class:"container"},[n("div",{class:"hero-content"},[n("h1",null,"Sandbox Environment"),n("p",null,"Complete testing environment with sample data, validation tools, and webhook testing capabilities for safe integration development")])])],-1)),n("section",fv,[n("div",mv,[e[47]||(e[47]=G('<div class="intro-section" data-v-2846cf50><h2 data-v-2846cf50>Storecove Sandbox Environment</h2><p data-v-2846cf50>The Storecove sandbox provides a complete testing environment where you can safely develop and test your e-invoicing integration without affecting real transactions or sending actual invoices to recipients.</p><div class="highlight-box" data-v-2846cf50><h3 data-v-2846cf50>Sandbox Features</h3><ul data-v-2846cf50><li data-v-2846cf50><strong data-v-2846cf50>Safe Testing:</strong> No real invoices are sent to actual recipients</li><li data-v-2846cf50><strong data-v-2846cf50>Complete API Access:</strong> Full access to all Storecove API endpoints</li><li data-v-2846cf50><strong data-v-2846cf50>Test Data:</strong> Pre-configured test recipients and legal entities</li><li data-v-2846cf50><strong data-v-2846cf50>Webhook Testing:</strong> Real webhook events for integration testing</li><li data-v-2846cf50><strong data-v-2846cf50>Format Validation:</strong> Test UBL, CII, and other e-invoice formats</li><li data-v-2846cf50><strong data-v-2846cf50>Network Simulation:</strong> Simulate different delivery networks (Peppol, AS4, etc.)</li></ul></div></div>',1)),n("div",gv,[e[23]||(e[23]=n("h2",{class:"section-title"},"Getting Started with Sandbox",-1)),n("div",hv,[n("div",bv,[e[11]||(e[11]=n("div",{class:"step-number"},"1",-1)),n("div",yv,[e[9]||(e[9]=n("h3",null,"Create Sandbox Account",-1)),e[10]||(e[10]=n("p",null,"Sign up for a free Storecove sandbox account to get access to the testing environment.",-1)),n("div",_v,[n("div",wv,[e[7]||(e[7]=n("span",{class:"code-language"},"Sandbox Registration",-1)),n("button",{onClick:e[0]||(e[0]=(...c)=>i.copySandboxUrl&&i.copySandboxUrl(...c)),class:"copy-btn"},"Copy URL")]),e[8]||(e[8]=n("pre",{id:"sandbox-url"},[n("code",null,`https://www.storecove.com/us/en/start-now/
# Free sandbox account with full API access
# No pyment required for testing`)],-1))])])]),e[22]||(e[22]=G('<div class="step-item" data-v-2846cf50><div class="step-number" data-v-2846cf50>2</div><div class="step-content" data-v-2846cf50><h3 data-v-2846cf50>Get Sandbox API Credentials</h3><p data-v-2846cf50>Generate your sandbox API key from the developer dashboard to authenticate your requests.</p><div class="sandbox-credentials" data-v-2846cf50><div class="credential-item" data-v-2846cf50><strong data-v-2846cf50>Base URL:</strong> <code data-v-2846cf50>https://api.sandbox.storecove.com/api/v2</code></div><div class="credential-item" data-v-2846cf50><strong data-v-2846cf50>Authentication:</strong> <code data-v-2846cf50>Bearer YOUR_SANDBOX_API_KEY</code></div><div class="credential-item" data-v-2846cf50><strong data-v-2846cf50>Rate Limits:</strong> <code data-v-2846cf50>1000 requests/hour (testing)</code></div></div></div></div>',1)),n("div",kv,[e[16]||(e[16]=n("div",{class:"step-number"},"3",-1)),n("div",qv,[e[14]||(e[14]=n("h3",null,"Configure Test Environment",-1)),e[15]||(e[15]=n("p",null,"Set up your development environment to use sandbox endpoints and test credentials.",-1)),n("div",Sv,[n("div",Ev,[e[12]||(e[12]=n("span",{class:"code-language"},"Environment Configuration",-1)),n("button",{onClick:e[1]||(e[1]=c=>i.copyCode("env-config")),class:"copy-btn"},"Copy")]),e[13]||(e[13]=n("pre",{id:"env-config"},[n("code",null,`# Environment Variables (.env)
STORECOVE_API_BASE_URL=https://api.sandbox.storecove.com/api/v2
STORECOVE_API_KEY=your_sandbox_api_key_here
STORECOVE_WEBHOOK_SECRET=your_webhook_secret_here
ENVIRONMENT=sandbox
DEBUG=true`)],-1))])])]),n("div",Cv,[e[21]||(e[21]=n("div",{class:"step-number"},"4",-1)),n("div",xv,[e[19]||(e[19]=n("h3",null,"Test API Connection",-1)),e[20]||(e[20]=n("p",null,"Verify your sandbox setup by making a test API call to check connectivity.",-1)),n("div",Tv,[n("div",Dv,[e[17]||(e[17]=n("span",{class:"code-language"},"Test Connection",-1)),n("button",{onClick:e[2]||(e[2]=c=>i.copyCode("test-connection")),class:"copy-btn"},"Copy")]),e[18]||(e[18]=n("pre",{id:"test-connection"},[n("code",null,`curl -X GET "https://api.sandbox.storecove.com/api/v2/legal_entities" \\
  -H "Authorization: Bearer YOUR_SANDBOX_API_KEY" \\
  -H "Content-Type: application/json"

# Expected Response: List of available test legal entities`)],-1))])])])])]),e[48]||(e[48]=G('<div class="section-content" data-v-2846cf50><h2 class="section-title" data-v-2846cf50>Sandbox Test Data</h2><p class="section-description" data-v-2846cf50>Pre-configured test entities and recipients for comprehensive testing scenarios</p><div class="test-data-grid" data-v-2846cf50><div class="test-data-card" data-v-2846cf50><div class="test-data-icon" data-v-2846cf50>🏢</div><div class="test-data-content" data-v-2846cf50><h3 data-v-2846cf50>Test Legal Entities</h3><p data-v-2846cf50>Ready-to-use legal entities for different countries and business scenarios</p><div class="test-entities" data-v-2846cf50><div class="entity-item" data-v-2846cf50><strong data-v-2846cf50>EU Entity:</strong> <code data-v-2846cf50>entity_eu_test_001</code><br data-v-2846cf50><span class="entity-details" data-v-2846cf50>VAT: NL123456789B01, Country: Netherlands</span></div><div class="entity-item" data-v-2846cf50><strong data-v-2846cf50>US Entity:</strong> <code data-v-2846cf50>entity_us_test_001</code><br data-v-2846cf50><span class="entity-details" data-v-2846cf50>EIN: 12-3456789, Country: United States</span></div><div class="entity-item" data-v-2846cf50><strong data-v-2846cf50>UK Entity:</strong> <code data-v-2846cf50>entity_uk_test_001</code><br data-v-2846cf50><span class="entity-details" data-v-2846cf50>VAT: GB123456789, Country: United Kingdom</span></div><div class="entity-item" data-v-2846cf50><strong data-v-2846cf50>DE Entity:</strong> <code data-v-2846cf50>entity_de_test_001</code><br data-v-2846cf50><span class="entity-details" data-v-2846cf50>VAT: DE123456789, Country: Germany</span></div></div></div></div><div class="test-data-card" data-v-2846cf50><div class="test-data-icon" data-v-2846cf50>👥</div><div class="test-data-content" data-v-2846cf50><h3 data-v-2846cf50>Test Recipients</h3><p data-v-2846cf50>Simulated recipients that respond to different testing scenarios</p><div class="test-recipients" data-v-2846cf50><div class="recipient-item" data-v-2846cf50><strong data-v-2846cf50>Success Recipient:</strong> <code data-v-2846cf50>test-success@storecove.com</code><br data-v-2846cf50><span class="recipient-details" data-v-2846cf50>Always accepts invoices successfully</span></div><div class="recipient-item" data-v-2846cf50><strong data-v-2846cf50>Rejection Recipient:</strong> <code data-v-2846cf50>test-reject@storecove.com</code><br data-v-2846cf50><span class="recipient-details" data-v-2846cf50>Rejects invoices with validation errors</span></div><div class="recipient-item" data-v-2846cf50><strong data-v-2846cf50>Timeout Recipient:</strong> <code data-v-2846cf50>test-timeout@storecove.com</code><br data-v-2846cf50><span class="recipient-details" data-v-2846cf50>Simulates network timeouts and delays</span></div><div class="recipient-item" data-v-2846cf50><strong data-v-2846cf50>Peppol Recipient:</strong> <code data-v-2846cf50>9999:test-peppol@storecove.com</code><br data-v-2846cf50><span class="recipient-details" data-v-2846cf50>Tests Peppol network delivery</span></div></div></div></div><div class="test-data-card" data-v-2846cf50><div class="test-data-icon" data-v-2846cf50>🔢</div><div class="test-data-content" data-v-2846cf50><h3 data-v-2846cf50>Test Identifiers</h3><p data-v-2846cf50>Valid test identifiers for different e-invoicing networks</p><div class="test-identifiers" data-v-2846cf50><div class="identifier-item" data-v-2846cf50><strong data-v-2846cf50>Peppol ID:</strong> <code data-v-2846cf50>9999:test-peppol-001</code><br data-v-2846cf50><span class="identifier-details" data-v-2846cf50>Test Peppol participant identifier</span></div><div class="identifier-item" data-v-2846cf50><strong data-v-2846cf50>VAT Number:</strong> <code data-v-2846cf50>NL999999999B01</code><br data-v-2846cf50><span class="identifier-details" data-v-2846cf50>Netherlands test VAT number</span></div><div class="identifier-item" data-v-2846cf50><strong data-v-2846cf50>GLN:</strong> <code data-v-2846cf50>9999999999999</code><br data-v-2846cf50><span class="identifier-details" data-v-2846cf50>Global Location Number for testing</span></div><div class="identifier-item" data-v-2846cf50><strong data-v-2846cf50>DUNS:</strong> <code data-v-2846cf50>999999999</code><br data-v-2846cf50><span class="identifier-details" data-v-2846cf50>Test DUNS number</span></div></div></div></div></div></div>',1)),n("div",Iv,[e[29]||(e[29]=n("h2",{class:"section-title"},"Common Testing Scenarios",-1)),n("div",Rv,[n("div",Pv,[e[27]||(e[27]=n("div",{class:"scenario-header"},[n("span",{class:"scenario-icon"},"✅"),n("h3",null,"Successful Invoice Flow")],-1)),n("div",Av,[e[26]||(e[26]=G('<p data-v-2846cf50>Test the complete successful invoice delivery process from submission to acceptance.</p><div class="scenario-steps" data-v-2846cf50><div class="scenario-step" data-v-2846cf50>1. Submit invoice to success recipient</div><div class="scenario-step" data-v-2846cf50>2. Receive &quot;document.sent&quot; webhook</div><div class="scenario-step" data-v-2846cf50>3. Receive &quot;document.delivered&quot; webhook</div><div class="scenario-step" data-v-2846cf50>4. Receive &quot;document.accepted&quot; webhook</div></div>',2)),n("div",$v,[n("div",Ov,[e[24]||(e[24]=n("span",{class:"code-language"},"Success Test Example",-1)),n("button",{onClick:e[3]||(e[3]=c=>i.copyCode("success-test")),class:"copy-btn"},"Copy")]),e[25]||(e[25]=n("pre",{id:"success-test"},[n("code",null,`POST /document_submissions
{
  "legalEntityId": "entity_eu_test_001",
  "routing": {
    "emails": ["test-success@storecove.com"]
  },
  "document": {
    "documentType": "Invoice",
    "invoice": {
      "invoiceNumber": "TEST-SUCCESS-001",
      "issueDate": "2024-01-15",
      "dueDate": "2024-02-15",
      "documentCurrencyCode": "EUR",
      "accountingCustomerParty": {
        "party": {
          "companyName": "Test Success Company"
        }
      },
      "invoiceLines": [{
        "lineId": "1",
        "name": "Test Item",
        "quantity": 1,
        "itemPrice": 100.00,
        "amountExcludingTax": 100.00
      }]
    }
  }
}`)],-1))])])]),e[28]||(e[28]=G('<div class="scenario-card" data-v-2846cf50><div class="scenario-header" data-v-2846cf50><span class="scenario-icon" data-v-2846cf50>❌</span><h3 data-v-2846cf50>Invoice Rejection Flow</h3></div><div class="scenario-content" data-v-2846cf50><p data-v-2846cf50>Test how your system handles rejected invoices with validation errors.</p><div class="scenario-steps" data-v-2846cf50><div class="scenario-step" data-v-2846cf50>1. Submit invoice with validation errors</div><div class="scenario-step" data-v-2846cf50>2. Receive &quot;document.sent&quot; webhook</div><div class="scenario-step" data-v-2846cf50>3. Receive &quot;document.rejected&quot; webhook</div><div class="scenario-step" data-v-2846cf50>4. Handle rejection reason in your system</div></div><div class="rejection-reasons" data-v-2846cf50><strong data-v-2846cf50>Common rejection reasons in sandbox:</strong><ul data-v-2846cf50><li data-v-2846cf50>Invalid VAT rate</li><li data-v-2846cf50>Missing mandatory fields</li><li data-v-2846cf50>Incorrect format validation</li><li data-v-2846cf50>Business rule violations</li></ul></div></div></div><div class="scenario-card" data-v-2846cf50><div class="scenario-header" data-v-2846cf50><span class="scenario-icon" data-v-2846cf50>⏱️</span><h3 data-v-2846cf50>Network Timeout Flow</h3></div><div class="scenario-content" data-v-2846cf50><p data-v-2846cf50>Test handling of network delays and timeout scenarios.</p><div class="scenario-steps" data-v-2846cf50><div class="scenario-step" data-v-2846cf50>1. Submit invoice to timeout recipient</div><div class="scenario-step" data-v-2846cf50>2. Experience delayed webhook delivery</div><div class="scenario-step" data-v-2846cf50>3. Receive &quot;document.failed&quot; webhook</div><div class="scenario-step" data-v-2846cf50>4. Implement retry logic testing</div></div><div class="timeout-info" data-v-2846cf50><strong data-v-2846cf50>Timeout scenarios:</strong><ul data-v-2846cf50><li data-v-2846cf50>5-second delay simulation</li><li data-v-2846cf50>30-second timeout test</li><li data-v-2846cf50>Network connectivity issues</li><li data-v-2846cf50>Recipient system unavailable</li></ul></div></div></div><div class="scenario-card" data-v-2846cf50><div class="scenario-header" data-v-2846cf50><span class="scenario-icon" data-v-2846cf50>🔄</span><h3 data-v-2846cf50>Peppol Network Testing</h3></div><div class="scenario-content" data-v-2846cf50><p data-v-2846cf50>Test Peppol network delivery and compliance validation.</p><div class="scenario-steps" data-v-2846cf50><div class="scenario-step" data-v-2846cf50>1. Submit UBL 2.1 invoice</div><div class="scenario-step" data-v-2846cf50>2. Validate Peppol BIS compliance</div><div class="scenario-step" data-v-2846cf50>3. Test SMP lookup simulation</div><div class="scenario-step" data-v-2846cf50>4. Verify AS4 delivery process</div></div><div class="peppol-info" data-v-2846cf50><strong data-v-2846cf50>Peppol test features:</strong><ul data-v-2846cf50><li data-v-2846cf50>BIS 3.0 validation</li><li data-v-2846cf50>Schematron rule testing</li><li data-v-2846cf50>SMP directory simulation</li><li data-v-2846cf50>AS4 protocol testing</li></ul></div></div></div>',3))])]),n("div",Lv,[e[33]||(e[33]=G('<h2 class="section-title" data-v-2846cf50>Webhook Testing in Sandbox</h2><div class="webhook-testing-info" data-v-2846cf50><p data-v-2846cf50>The sandbox environment provides comprehensive webhook testing capabilities to help you develop robust event handling.</p><div class="webhook-features-grid" data-v-2846cf50><div class="webhook-feature" data-v-2846cf50><div class="feature-icon" data-v-2846cf50>🔔</div><h4 data-v-2846cf50>Real Webhook Events</h4><p data-v-2846cf50>Receive actual webhook events for all document lifecycle stages in sandbox</p></div><div class="webhook-feature" data-v-2846cf50><div class="feature-icon" data-v-2846cf50>🔒</div><h4 data-v-2846cf50>Signature Verification</h4><p data-v-2846cf50>Test webhook signature validation with sandbox-specific secrets</p></div><div class="webhook-feature" data-v-2846cf50><div class="feature-icon" data-v-2846cf50>⚡</div><h4 data-v-2846cf50>Event Simulation</h4><p data-v-2846cf50>Trigger specific events on demand for comprehensive testing</p></div><div class="webhook-feature" data-v-2846cf50><div class="feature-icon" data-v-2846cf50>📊</div><h4 data-v-2846cf50>Event Monitoring</h4><p data-v-2846cf50>Monitor webhook delivery success and failure rates in sandbox dashboard</p></div></div></div>',2)),n("div",Nv,[e[32]||(e[32]=n("h3",null,"Setting Up Webhooks in Sandbox",-1)),n("div",jv,[n("div",Mv,[e[30]||(e[30]=n("span",{class:"code-language"},"Webhook Configuration",-1)),n("button",{onClick:e[4]||(e[4]=c=>i.copyCode("webhook-setup")),class:"copy-btn"},"Copy")]),e[31]||(e[31]=n("pre",{id:"webhook-setup"},[n("code",null,`POST /webhooks
{
  "url": "https://your-test-server.ngrok.io/webhooks/storecove",
  "events": [
    "document.sent",
    "document.delivered", 
    "document.accepted",
    "document.rejected",
    "document.failed"
  ],
  "secret": "your-sandbox-webhook-secret"
}

# Use ngrok or similar tools for local webhook testing:
# ngrok http 3000`)],-1))])])]),n("div",Uv,[e[38]||(e[38]=n("h2",{class:"section-title"},"Sandbox Testing Tools",-1)),n("div",Bv,[e[37]||(e[37]=G('<div class="tool-card" data-v-2846cf50><div class="tool-icon" data-v-2846cf50>🔧</div><div class="tool-content" data-v-2846cf50><h3 data-v-2846cf50>ngrok</h3><p data-v-2846cf50>Create secure tunnels to localhost for webhook testing during development.</p><div class="tool-command" data-v-2846cf50><code data-v-2846cf50>ngrok http 3000</code></div><a href="https://ngrok.com/" target="_blank" class="tool-link" data-v-2846cf50>Download ngrok →</a></div></div><div class="tool-card" data-v-2846cf50><div class="tool-icon" data-v-2846cf50>📡</div><div class="tool-content" data-v-2846cf50><h3 data-v-2846cf50>Webhook.site</h3><p data-v-2846cf50>Free tool to inspect and debug incoming webhooks in real-time.</p><a href="https://webhook.site/" target="_blank" class="tool-link" data-v-2846cf50>Try webhook.site →</a></div></div><div class="tool-card" data-v-2846cf50><div class="tool-icon" data-v-2846cf50>🐙</div><div class="tool-content" data-v-2846cf50><h3 data-v-2846cf50>Postman</h3><p data-v-2846cf50>Test your API endpoints and simulate Storecove API calls.</p><a href="https://www.postman.com/" target="_blank" class="tool-link" data-v-2846cf50>Get Postman →</a></div></div>',3)),n("div",Hv,[e[36]||(e[36]=n("div",{class:"tool-icon"},"📋",-1)),n("div",Fv,[e[34]||(e[34]=n("h3",null,"Sample Invoices",-1)),e[35]||(e[35]=n("p",null,"Download UBL and CII sample invoices for testing.",-1)),n("button",{onClick:e[5]||(e[5]=(...c)=>i.downloadSampleInvoices&&i.downloadSampleInvoices(...c)),class:"tool-link"},"Download Samples →")])])])]),e[49]||(e[49]=G('<div class="section-content" data-v-2846cf50><h2 class="section-title" data-v-2846cf50>Sandbox Testing Best Practices</h2><div class="best-practices-grid" data-v-2846cf50><div class="practice-card" data-v-2846cf50><div class="practice-icon" data-v-2846cf50>🎯</div><div class="practice-content" data-v-2846cf50><h3 data-v-2846cf50>Comprehensive Testing</h3><ul data-v-2846cf50><li data-v-2846cf50>Test all supported document formats (UBL, CII)</li><li data-v-2846cf50>Verify different currency and country scenarios</li><li data-v-2846cf50>Test both success and failure scenarios</li><li data-v-2846cf50>Validate webhook event handling</li></ul></div></div><div class="practice-card" data-v-2846cf50><div class="practice-icon" data-v-2846cf50>🔄</div><div class="practice-content" data-v-2846cf50><h3 data-v-2846cf50>Integration Testing</h3><ul data-v-2846cf50><li data-v-2846cf50>Test complete end-to-end workflows</li><li data-v-2846cf50>Verify error handling and retry logic</li><li data-v-2846cf50>Test webhook signature verification</li><li data-v-2846cf50>Validate status tracking and monitoring</li></ul></div></div><div class="practice-card" data-v-2846cf50><div class="practice-icon" data-v-2846cf50>📊</div><div class="practice-content" data-v-2846cf50><h3 data-v-2846cf50>Performance Testing</h3><ul data-v-2846cf50><li data-v-2846cf50>Test API rate limiting behavior</li><li data-v-2846cf50>Verify bulk document submission</li><li data-v-2846cf50>Test webhook delivery reliability</li><li data-v-2846cf50>Monitor response times and errors</li></ul></div></div><div class="practice-card" data-v-2846cf50><div class="practice-icon" data-v-2846cf50>🔒</div><div class="practice-content" data-v-2846cf50><h3 data-v-2846cf50>Security Testing</h3><ul data-v-2846cf50><li data-v-2846cf50>Verify API key authentication</li><li data-v-2846cf50>Test webhook signature validation</li><li data-v-2846cf50>Validate HTTPS requirements</li><li data-v-2846cf50>Test access control and permissions</li></ul></div></div></div></div>',1)),n("div",Vv,[e[46]||(e[46]=n("h2",{class:"section-title"},"Migration to Production",-1)),n("div",Wv,[e[44]||(e[44]=G('<div class="migration-step" data-v-2846cf50><div class="migration-number" data-v-2846cf50>1</div><div class="migration-content" data-v-2846cf50><h3 data-v-2846cf50>Complete Sandbox Testing</h3><p data-v-2846cf50>Ensure all test scenarios pass and your integration handles all edge cases properly.</p><div class="checklist" data-v-2846cf50><div class="checklist-item" data-v-2846cf50>✅ All webhook events handled correctly</div><div class="checklist-item" data-v-2846cf50>✅ Error scenarios tested and handled</div><div class="checklist-item" data-v-2846cf50>✅ Document formats validated</div><div class="checklist-item" data-v-2846cf50>✅ Security implementation verified</div></div></div></div>',1)),n("div",Gv,[e[43]||(e[43]=n("div",{class:"migration-number"},"2",-1)),n("div",Kv,[e[41]||(e[41]=n("h3",null,"Update Configuration",-1)),e[42]||(e[42]=n("p",null,"Switch from sandbox to production endpoints and credentials.",-1)),n("div",zv,[n("div",Yv,[e[39]||(e[39]=n("span",{class:"code-language"},"Production Configuration",-1)),n("button",{onClick:e[6]||(e[6]=c=>i.copyCode("prod-config")),class:"copy-btn"},"Copy")]),e[40]||(e[40]=n("pre",{id:"prod-config"},[n("code",null,`# Production Environment Variables
STORECOVE_API_BASE_URL=https://api.storecove.com/api/v2
STORECOVE_API_KEY=your_production_api_key
STORECOVE_WEBHOOK_SECRET=your_production_webhook_secret
ENVIRONMENT=production
DEBUG=false`)],-1))])])]),e[45]||(e[45]=G('<div class="migration-step" data-v-2846cf50><div class="migration-number" data-v-2846cf50>3</div><div class="migration-content" data-v-2846cf50><h3 data-v-2846cf50>Production Verification</h3><p data-v-2846cf50>Perform final verification with production credentials before going live.</p><div class="verification-list" data-v-2846cf50><div class="verification-item" data-v-2846cf50>🔍 API connectivity test</div><div class="verification-item" data-v-2846cf50>🔍 Webhook endpoint verification</div><div class="verification-item" data-v-2846cf50>🔍 Legal entity configuration</div><div class="verification-item" data-v-2846cf50>🔍 Monitoring and alerting setup</div></div></div></div>',1))])])])]),n("section",Jv,[n("div",Qv,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[50]||(e[50]=[V(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const Zv=De(vv,[["render",Xv],["__scopeId","data-v-2846cf50"]]);const ep={name:"WebhookTesting",data(){return{feedbackSubmitted:!1}},methods:{submitFeedback(t){this.feedbackSubmitted=!0,console.log(`Feedback submitted: ${t}`)},copyCode(t){const a=document.getElementById(t).textContent;navigator.clipboard.writeText(a).then(()=>{const s=event.target,o=s.textContent;s.textContent="Copied!",setTimeout(()=>{s.textContent=o},2e3)})},downloadSamplePayloads(){const t={"document.sent":{type:"document.sent",timestamp:1640995200,data:{id:"doc_123456789",invoice_number:"INV-2024-001",amount:1e3,currency:"EUR",sent_at:"2024-01-01T10:00:00Z"}},"document.delivered":{type:"document.delivered",timestamp:1640998800,data:{id:"doc_123456789",invoice_number:"INV-2024-001",delivered_at:"2024-01-01T11:00:00Z",recipient:{name:"Example Company Ltd",identifier:"1234567890"}}}},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),a=URL.createObjectURL(e),s=document.createElement("a");s.href=a,s.download="storecove-webhook-samples.json",s.click(),URL.revokeObjectURL(a)}}},tp={class:"page-container"},np={class:"page-header"},ap={class:"container"},sp={class:"content-section"},op={class:"container"},ip={class:"setup-steps"},rp={class:"step-item"},cp={class:"step-content"},dp={class:"code-block"},lp={class:"code-header"},up={class:"content-section"},vp={class:"container"},pp={class:"code-example"},fp={class:"code-block"},mp={class:"code-header"},gp={class:"code-example"},hp={class:"code-block"},bp={class:"code-header"},yp={class:"code-example"},_p={class:"code-block"},wp={class:"code-header"},kp={class:"content-section testing-tools-section"},qp={class:"container"},Sp={class:"tools-grid"},Ep={class:"tool-card"},Cp={class:"tool-content"},xp={class:"feedback-section"},Tp={class:"container"},Dp={class:"feedback-buttons"},Ip={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function Rp(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",tp,[n("div",np,[n("div",ap,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[7]||(e[7]=[V("← Back to Toolkit",-1)])]),_:1}),e[8]||(e[8]=n("h1",{class:"page-title"},"Webhook Testing Guide",-1)),e[9]||(e[9]=n("p",{class:"page-description"},"Learn how to implement and test webhooks for real-time e-invoicing status updates using Storecove API",-1))])]),e[36]||(e[36]=G('<section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><div class="intro-section" data-v-a8c1bffc><h2 data-v-a8c1bffc>What are Webhooks?</h2><p data-v-a8c1bffc>Webhooks are HTTP callbacks that Storecove sends to your application when specific events occur during e-invoice processing. Instead of polling our API for status updates, webhooks provide real-time notifications about document delivery, acceptance, rejection, and other important events.</p><div class="highlight-box" data-v-a8c1bffc><h3 data-v-a8c1bffc>Key Benefits</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc><strong data-v-a8c1bffc>Real-time updates:</strong> Get instant notifications when invoice status changes</li><li data-v-a8c1bffc><strong data-v-a8c1bffc>Reduced API calls:</strong> No need for constant polling to check status</li><li data-v-a8c1bffc><strong data-v-a8c1bffc>Better user experience:</strong> Provide immediate feedback to your users</li><li data-v-a8c1bffc><strong data-v-a8c1bffc>Automated workflows:</strong> Trigger business processes based on events</li></ul></div></div></div></section><section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><h2 class="section-title" data-v-a8c1bffc>Webhook Events in Storecove API</h2><p class="section-description" data-v-a8c1bffc>Storecove sends webhooks for various e-invoicing lifecycle events</p><div class="events-grid" data-v-a8c1bffc><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>📤</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Sent</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.sent</code></p><p data-v-a8c1bffc>Triggered when an e-invoice is successfully sent to the recipient&#39;s network or system.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>📥</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Delivered</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.delivered</code></p><p data-v-a8c1bffc>Fired when the recipient&#39;s system confirms receipt of the e-invoice.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>✅</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Accepted</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.accepted</code></p><p data-v-a8c1bffc>Sent when the recipient accepts the e-invoice for processing.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>❌</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Rejected</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.rejected</code></p><p data-v-a8c1bffc>Triggered when the recipient rejects the e-invoice, often with rejection reason.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>⚠️</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Delivery Failed</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.failed</code></p><p data-v-a8c1bffc>Fired when document delivery fails due to network or validation issues.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>🔄</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Status Updated</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.status_changed</code></p><p data-v-a8c1bffc>General status change event for any document lifecycle updates.</p></div></div></div></div></section>',2)),n("section",sp,[n("div",op,[e[16]||(e[16]=n("h2",{class:"section-title"},"Setting Up Webhooks",-1)),n("div",ip,[n("div",rp,[e[14]||(e[14]=n("div",{class:"step-number"},"1",-1)),n("div",cp,[e[12]||(e[12]=n("h3",null,"Configure Webhook URL",-1)),e[13]||(e[13]=n("p",null,"Set up your webhook endpoint URL in the Storecove dashboard or via API. This URL must be publicly accessible and support HTTPS.",-1)),n("div",dp,[n("div",lp,[e[10]||(e[10]=n("span",{class:"code-language"},"API Request",-1)),n("button",{onClick:e[0]||(e[0]=c=>i.copyCode("webhook-config")),class:"copy-btn"},"Copy")]),e[11]||(e[11]=n("pre",{id:"webhook-config"},[n("code",null,`POST /api/v2/webhooks
{
  "url": "https://your-domain.com/webhooks/storecove",
  "events": ["document.sent", "document.delivered", "document.accepted"],
  "secret": "your-webhook-secret"
}`)],-1))])])]),e[15]||(e[15]=G('<div class="step-item" data-v-a8c1bffc><div class="step-number" data-v-a8c1bffc>2</div><div class="step-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Implement Webhook Endpoint</h3><p data-v-a8c1bffc>Create an HTTP endpoint that can receive POST requests from Storecove and process the webhook payload.</p></div></div><div class="step-item" data-v-a8c1bffc><div class="step-number" data-v-a8c1bffc>3</div><div class="step-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Verify Webhook Signatures</h3><p data-v-a8c1bffc>Implement signature verification to ensure webhooks are authentic and from Storecove.</p></div></div><div class="step-item" data-v-a8c1bffc><div class="step-number" data-v-a8c1bffc>4</div><div class="step-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Handle Events Appropriately</h3><p data-v-a8c1bffc>Process different event types and update your application state accordingly.</p></div></div>',3))])])]),n("section",up,[n("div",vp,[e[29]||(e[29]=n("h2",{class:"section-title"},"Python Implementation Examples",-1)),n("div",pp,[e[19]||(e[19]=n("h3",null,"Basic Flask Webhook Handler",-1)),e[20]||(e[20]=n("p",null,"Simple Flask application to receive and process Storecove webhooks:",-1)),n("div",fp,[n("div",mp,[e[17]||(e[17]=n("span",{class:"code-language"},"Python - Flask",-1)),n("button",{onClick:e[1]||(e[1]=c=>i.copyCode("flask-basic")),class:"copy-btn"},"Copy")]),e[18]||(e[18]=n("pre",{id:"flask-basic"},[n("code",null,`from flask import Flask, request, jsonify
import hmac
import hashlib
import json
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

# Your webhook secret from Storecove
WEBHOOK_SECRET = "your-webhook-secret-here"

@app.route('/webhooks/storecove', methods=['POST'])
def handle_storecove_webhook():
    try:
        # Get the payload and signature
        payload = request.get_data()
        signature = request.headers.get('X-Storecove-Signature')
        
        # Verify the webhook signature
        if not verify_signature(payload, signature):
            logging.warning("Invalid webhook signature")
            return jsonify({"error": "Invalid signature"}), 401
        
        # Parse the JSON payload
        event_data = json.loads(payload)
        event_type = event_data.get('type')
        document_data = event_data.get('data', {})
        
        # Process the event based on type
        if event_type == 'document.sent':
            handle_document_sent(document_data)
        elif event_type == 'document.delivered':
            handle_document_delivered(document_data)
        elif event_type == 'document.accepted':
            handle_document_accepted(document_data)
        elif event_type == 'document.rejected':
            handle_document_rejected(document_data)
        elif event_type == 'document.failed':
            handle_document_failed(document_data)
        else:
            logging.info(f"Unhandled event type: {event_type}")
        
        return jsonify({"status": "success"}), 200
        
    except Exception as e:
        logging.error(f"Error processing webhook: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

def verify_signature(payload, signature):
    """Verify the webhook signature using HMAC-SHA256"""
    if not signature:
        return False
    
    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)

def handle_document_sent(data):
    """Handle document sent event"""
    document_id = data.get('id')
    logging.info(f"Document {document_id} was sent successfully")
    # Update your database, notify users, etc.

def handle_document_delivered(data):
    """Handle document delivered event"""
    document_id = data.get('id')
    recipient = data.get('recipient', {})
    logging.info(f"Document {document_id} delivered to {recipient.get('name')}")
    # Update delivery status in your system

def handle_document_accepted(data):
    """Handle document accepted event"""
    document_id = data.get('id')
    logging.info(f"Document {document_id} was accepted by recipient")
    # Trigger payment processes, update invoice status

def handle_document_rejected(data):
    """Handle document rejected event"""
    document_id = data.get('id')
    rejection_reason = data.get('rejection_reason', 'No reason provided')
    logging.warning(f"Document {document_id} rejected: {rejection_reason}")
    # Notify sender, trigger correction workflow

def handle_document_failed(data):
    """Handle document delivery failure"""
    document_id = data.get('id')
    error_message = data.get('error_message', 'Unknown error')
    logging.error(f"Document {document_id} delivery failed: {error_message}")
    # Retry logic, error notification

if __name__ == '__main__':
    app.run(debug=True, port=5000)`)],-1))])]),n("div",gp,[e[23]||(e[23]=n("h3",null,"Advanced Webhook Processor with Database Integration",-1)),e[24]||(e[24]=n("p",null,"More comprehensive example with database updates and error handling:",-1)),n("div",hp,[n("div",bp,[e[21]||(e[21]=n("span",{class:"code-language"},"Python - Advanced Handler",-1)),n("button",{onClick:e[2]||(e[2]=c=>i.copyCode("advanced-handler")),class:"copy-btn"},"Copy")]),e[22]||(e[22]=n("pre",{id:"advanced-handler"},[n("code",null,`import os
import json
import logging
import hmac
import hashlib
from datetime import datetime
from flask import Flask, request, jsonify
from sqlalchemy import create_engine, Column, String, DateTime, Integer, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import requests

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

# Database setup
DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///webhooks.db')
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class WebhookEvent(Base):
    __tablename__ = "webhook_events"
    
    id = Column(Integer, primary_key=True, index=True)
    event_type = Column(String(50), nullable=False)
    document_id = Column(String(100), nullable=False, index=True)
    payload = Column(Text, nullable=False)
    processed_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String(20), default='processed')

class InvoiceStatus(Base):
    __tablename__ = "invoice_status"
    
    id = Column(Integer, primary_key=True, index=True)
    document_id = Column(String(100), unique=True, nullable=False, index=True)
    current_status = Column(String(50), nullable=False)
    last_updated = Column(DateTime, default=datetime.utcnow)
    recipient_name = Column(String(200))
    rejection_reason = Column(Text)

# Create tables
Base.metadata.create_all(bind=engine)

WEBHOOK_SECRET = os.getenv('STORECOVE_WEBHOOK_SECRET')

class WebhookProcessor:
    def __init__(self):
        self.session = SessionLocal()
    
    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.session.close()
    
    def process_webhook(self, event_type, data):
        """Process webhook event and update database"""
        try:
            # Log the webhook event
            webhook_event = WebhookEvent(
                event_type=event_type,
                document_id=data.get('id', ''),
                payload=json.dumps(data)
            )
            self.session.add(webhook_event)
            
            # Update invoice status
            self.update_invoice_status(event_type, data)
            
            # Send notifications if needed
            self.send_notifications(event_type, data)
            
            self.session.commit()
            logging.info(f"Successfully processed {event_type} for document {data.get('id')}")
            
        except Exception as e:
            self.session.rollback()
            logging.error(f"Error processing webhook: {str(e)}")
            raise
    
    def update_invoice_status(self, event_type, data):
        """Update invoice status in database"""
        document_id = data.get('id')
        if not document_id:
            return
        
        # Get or create invoice status record
        invoice_status = self.session.query(InvoiceStatus).filter(
            InvoiceStatus.document_id == document_id
        ).first()
        
        if not invoice_status:
            invoice_status = InvoiceStatus(document_id=document_id)
            self.session.add(invoice_status)
        
        # Update status based on event type
        status_mapping = {
            'document.sent': 'sent',
            'document.delivered': 'delivered',
            'document.accepted': 'accepted',
            'document.rejected': 'rejected',
            'document.failed': 'failed'
        }
        
        invoice_status.current_status = status_mapping.get(event_type, 'unknown')
        invoice_status.last_updated = datetime.utcnow()
        
        # Update additional fields based on event type
        if event_type == 'document.delivered':
            recipient = data.get('recipient', {})
            invoice_status.recipient_name = recipient.get('name')
        elif event_type == 'document.rejected':
            invoice_status.rejection_reason = data.get('rejection_reason')
    
    def send_notifications(self, event_type, data):
        """Send notifications to relevant parties"""
        document_id = data.get('id')
        
        # Define notification logic based on event type
        if event_type == 'document.accepted':
            self.notify_accounting_team(document_id, "Invoice accepted")
        elif event_type == 'document.rejected':
            reason = data.get('rejection_reason', 'No reason provided')
            self.notify_sender(document_id, f"Invoice rejected: {reason}")
        elif event_type == 'document.failed':
            error = data.get('error_message', 'Unknown error')
            self.notify_admin(document_id, f"Delivery failed: {error}")
    
    def notify_accounting_team(self, document_id, message):
        """Send notification to accounting team"""
        # Implement your notification logic (email, Slack, etc.)
        logging.info(f"Notifying accounting team: {message} for {document_id}")
    
    def notify_sender(self, document_id, message):
        """Send notification to invoice sender"""
        logging.info(f"Notifying sender: {message} for {document_id}")
    
    def notify_admin(self, document_id, message):
        """Send notification to system admin"""
        logging.error(f"Admin notification: {message} for {document_id}")

@app.route('/webhooks/storecove', methods=['POST'])
def handle_storecove_webhook():
    try:
        # Verify signature
        payload = request.get_data()
        signature = request.headers.get('X-Storecove-Signature')
        
        if not verify_signature(payload, signature):
            return jsonify({"error": "Invalid signature"}), 401
        
        # Parse event data
        event_data = json.loads(payload)
        event_type = event_data.get('type')
        document_data = event_data.get('data', {})
        
        # Process the webhook
        with WebhookProcessor() as processor:
            processor.process_webhook(event_type, document_data)
        
        return jsonify({"status": "success"}), 200
        
    except Exception as e:
        logging.error(f"Webhook processing error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/invoice-status/<document_id>', methods=['GET'])
def get_invoice_status(document_id):
    """API endpoint to get current invoice status"""
    try:
        with WebhookProcessor() as processor:
            status = processor.session.query(InvoiceStatus).filter(
                InvoiceStatus.document_id == document_id
            ).first()
            
            if not status:
                return jsonify({"error": "Invoice not found"}), 404
            
            return jsonify({
                "document_id": status.document_id,
                "status": status.current_status,
                "last_updated": status.last_updated.isoformat(),
                "recipient_name": status.recipient_name,
                "rejection_reason": status.rejection_reason
            })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def verify_signature(payload, signature):
    """Verify webhook signature"""
    if not signature or not WEBHOOK_SECRET:
        return False
    
    expected_signature = hmac.new(
        WEBHOOK_SECRET.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(f"sha256={expected_signature}", signature)

if __name__ == '__main__':
    app.run(debug=True, port=5000)`)],-1))])]),n("div",yp,[e[27]||(e[27]=n("h3",null,"Testing Your Webhook Handler",-1)),e[28]||(e[28]=n("p",null,"Python script to test your webhook endpoint locally:",-1)),n("div",_p,[n("div",wp,[e[25]||(e[25]=n("span",{class:"code-language"},"Python - Test Script",-1)),n("button",{onClick:e[3]||(e[3]=c=>i.copyCode("test-webhook")),class:"copy-btn"},"Copy")]),e[26]||(e[26]=n("pre",{id:"test-webhook"},[n("code",null,`import requests
import json
import hmac
import hashlib
import time

class WebhookTester:
    def __init__(self, webhook_url, secret):
        self.webhook_url = webhook_url
        self.secret = secret
    
    def create_signature(self, payload):
        """Create HMAC signature for payload"""
        signature = hmac.new(
            self.secret.encode('utf-8'),
            payload.encode('utf-8'),
            hashlib.sha256
        ).hexdigest()
        return f"sha256={signature}"
    
    def send_test_webhook(self, event_type, document_data):
        """Send a test webhook to your endpoint"""
        payload = {
            "type": event_type,
            "timestamp": int(time.time()),
            "data": document_data
        }
        
        payload_json = json.dumps(payload)
        signature = self.create_signature(payload_json)
        
        headers = {
            'Content-Type': 'application/json',
            'X-Storecove-Signature': signature
        }
        
        try:
            response = requests.post(
                self.webhook_url,
                data=payload_json,
                headers=headers,
                timeout=10
            )
            
            print(f"Test webhook sent: {event_type}")
            print(f"Response status: {response.status_code}")
            print(f"Response body: {response.text}")
            return response.status_code == 200
            
        except Exception as e:
            print(f"Error sending webhook: {str(e)}")
            return False
    
    def run_test_suite(self):
        """Run a complete test suite"""
        test_document = {
            "id": "test-doc-123",
            "invoice_number": "INV-2024-001",
            "amount": 1000.00,
            "currency": "EUR",
            "recipient": {
                "name": "Test Company Ltd",
                "identifier": "1234567890"
            }
        }
        
        test_scenarios = [
            ("document.sent", test_document),
            ("document.delivered", {**test_document, "delivered_at": "2024-01-15T10:30:00Z"}),
            ("document.accepted", {**test_document, "accepted_at": "2024-01-15T11:00:00Z"}),
            ("document.rejected", {
                **test_document, 
                "rejection_reason": "Invalid tax rate",
                "rejected_at": "2024-01-15T11:15:00Z"
            }),
            ("document.failed", {
                **test_document, 
                "error_message": "Network timeout",
                "failed_at": "2024-01-15T10:45:00Z"
            })
        ]
        
        print("Starting webhook test suite...")
        print("-" * 50)
        
        for event_type, data in test_scenarios:
            success = self.send_test_webhook(event_type, data)
            print(f"{'✅' if success else '❌'} {event_type}")
            print("-" * 30)
            time.sleep(1)  # Small delay between tests

# Usage example
if __name__ == "__main__":
    # Configure your test parameters
    WEBHOOK_URL = "http://localhost:5000/webhooks/storecove"
    WEBHOOK_SECRET = "your-webhook-secret-here"
    
    tester = WebhookTester(WEBHOOK_URL, WEBHOOK_SECRET)
    tester.run_test_suite()`)],-1))])])])]),e[37]||(e[37]=G('<section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><h2 class="section-title" data-v-a8c1bffc>Best Practices</h2><div class="best-practices-grid" data-v-a8c1bffc><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>🔒</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Security</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Always verify webhook signatures</li><li data-v-a8c1bffc>Use HTTPS endpoints only</li><li data-v-a8c1bffc>Implement rate limiting</li><li data-v-a8c1bffc>Log security events</li></ul></div></div><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>⚡</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Performance</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Process webhooks asynchronously</li><li data-v-a8c1bffc>Respond quickly (&lt; 5 seconds)</li><li data-v-a8c1bffc>Implement proper error handling</li><li data-v-a8c1bffc>Use database transactions</li></ul></div></div><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>🔄</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Reliability</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Handle duplicate events gracefully</li><li data-v-a8c1bffc>Implement idempotent processing</li><li data-v-a8c1bffc>Use retry logic for failures</li><li data-v-a8c1bffc>Monitor webhook health</li></ul></div></div><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>📊</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Monitoring</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Log all webhook events</li><li data-v-a8c1bffc>Track processing times</li><li data-v-a8c1bffc>Monitor error rates</li><li data-v-a8c1bffc>Set up alerts for failures</li></ul></div></div></div></div></section><section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><h2 class="section-title" data-v-a8c1bffc>Common Issues &amp; Troubleshooting</h2><div class="troubleshooting-list" data-v-a8c1bffc><div class="trouble-item" data-v-a8c1bffc><h3 data-v-a8c1bffc>Webhooks Not Being Received</h3><div class="trouble-content" data-v-a8c1bffc><p data-v-a8c1bffc><strong data-v-a8c1bffc>Possible causes:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Incorrect webhook URL configuration</li><li data-v-a8c1bffc>Firewall blocking incoming requests</li><li data-v-a8c1bffc>SSL certificate issues</li><li data-v-a8c1bffc>Endpoint returning non-200 status codes</li></ul><p data-v-a8c1bffc><strong data-v-a8c1bffc>Solutions:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Verify webhook URL is publicly accessible</li><li data-v-a8c1bffc>Check firewall settings and whitelist Storecove IPs</li><li data-v-a8c1bffc>Ensure valid SSL certificate</li><li data-v-a8c1bffc>Return 200 status for successful processing</li></ul></div></div><div class="trouble-item" data-v-a8c1bffc><h3 data-v-a8c1bffc>Signature Verification Failing</h3><div class="trouble-content" data-v-a8c1bffc><p data-v-a8c1bffc><strong data-v-a8c1bffc>Common issues:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Incorrect webhook secret</li><li data-v-a8c1bffc>Wrong signature algorithm</li><li data-v-a8c1bffc>Payload modification before verification</li></ul><p data-v-a8c1bffc><strong data-v-a8c1bffc>Solutions:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Double-check webhook secret configuration</li><li data-v-a8c1bffc>Use raw payload for signature verification</li><li data-v-a8c1bffc>Verify HMAC-SHA256 implementation</li></ul></div></div><div class="trouble-item" data-v-a8c1bffc><h3 data-v-a8c1bffc>Duplicate Webhook Events</h3><div class="trouble-content" data-v-a8c1bffc><p data-v-a8c1bffc><strong data-v-a8c1bffc>Why it happens:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Network timeouts during processing</li><li data-v-a8c1bffc>Endpoint returning error status codes</li><li data-v-a8c1bffc>Storecove retry mechanism</li></ul><p data-v-a8c1bffc><strong data-v-a8c1bffc>Solutions:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Implement idempotent processing</li><li data-v-a8c1bffc>Use unique event IDs for deduplication</li><li data-v-a8c1bffc>Return 200 status quickly</li></ul></div></div></div></div></section>',2)),n("section",kp,[n("div",qp,[e[34]||(e[34]=n("h2",{class:"section-title"},"Testing Tools & Resources",-1)),n("div",Sp,[e[33]||(e[33]=G('<div class="tool-card" data-v-a8c1bffc><div class="tool-icon" data-v-a8c1bffc>🔧</div><div class="tool-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>ngrok</h3><p data-v-a8c1bffc>Create secure tunnels to localhost for webhook testing during development.</p><div class="tool-command" data-v-a8c1bffc><code data-v-a8c1bffc>ngrok http 5000</code></div><a href="https://ngrok.com/" target="_blank" class="tool-link" data-v-a8c1bffc>Download ngrok →</a></div></div><div class="tool-card" data-v-a8c1bffc><div class="tool-icon" data-v-a8c1bffc>📡</div><div class="tool-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Webhook.site</h3><p data-v-a8c1bffc>Free tool to test, inspect, and debug incoming webhooks in real-time.</p><a href="https://webhook.site/" target="_blank" class="tool-link" data-v-a8c1bffc>Try webhook.site →</a></div></div><div class="tool-card" data-v-a8c1bffc><div class="tool-icon" data-v-a8c1bffc>🐙</div><div class="tool-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Postman</h3><p data-v-a8c1bffc>Test your webhook endpoints and simulate Storecove webhook payloads.</p><a href="https://www.postman.com/" target="_blank" class="tool-link" data-v-a8c1bffc>Get Postman →</a></div></div>',3)),n("div",Ep,[e[32]||(e[32]=n("div",{class:"tool-icon"},"📋",-1)),n("div",Cp,[e[30]||(e[30]=n("h3",null,"Sample Payloads",-1)),e[31]||(e[31]=n("p",null,"Download sample webhook payloads for testing different event types.",-1)),n("button",{onClick:e[4]||(e[4]=(...c)=>i.downloadSamplePayloads&&i.downloadSamplePayloads(...c)),class:"tool-link"},"Download Samples →")])])])])]),n("section",xp,[n("div",Tp,[e[35]||(e[35]=n("h3",{class:"feedback-question"},"Was this webhook guide helpful?",-1)),n("div",Dp,[n("button",{class:"feedback-btn",onClick:e[5]||(e[5]=c=>i.submitFeedback("yes"))},"👍 Yes"),n("button",{class:"feedback-btn",onClick:e[6]||(e[6]=c=>i.submitFeedback("no"))},"👎 No")]),o.feedbackSubmitted?(re(),ce("p",Ip," Thank you for your feedback! ")):$t("",!0)])])])}const Pp=De(ep,[["render",Rp],["__scopeId","data-v-a8c1bffc"]]);const Ap={name:"DeveloperDashboard"},$p={class:"developer-dashboard"},Op={class:"back-navigation"},Lp={class:"container"};function Np(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",$p,[e[1]||(e[1]=G(`<div class="hero-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="hero-content" data-v-d3d0b941><h1 data-v-d3d0b941>Developer Dashboard</h1><p data-v-d3d0b941>Monitor your e-invoicing integration with comprehensive administrative tools and real-time insights</p></div></div></div><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Dashboard Components</h2><p data-v-d3d0b941>Essential monitoring and management components for your e-invoicing integration</p></div><div class="metrics-grid" data-v-d3d0b941><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>📊</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>1,247</h3><p class="metric-label" data-v-d3d0b941>Documents Sent</p><span class="metric-change positive" data-v-d3d0b941>+12% this month</span></div></div><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>✅</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>98.5%</h3><p class="metric-label" data-v-d3d0b941>Success Rate</p><span class="metric-change positive" data-v-d3d0b941>+0.3% this month</span></div></div><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>⚠️</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>18</h3><p class="metric-label" data-v-d3d0b941>Failed Deliveries</p><span class="metric-change negative" data-v-d3d0b941>-5 from last week</span></div></div><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>⏱️</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>2.3s</h3><p class="metric-label" data-v-d3d0b941>Avg Response Time</p><span class="metric-change neutral" data-v-d3d0b941>No change</span></div></div></div></div></section><section class="content-section bg-light" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Document Management</h2><p data-v-d3d0b941>Track and manage your e-invoicing documents</p></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Recent Document Submissions</h3><div class="component-actions" data-v-d3d0b941><select class="filter-select" data-v-d3d0b941><option data-v-d3d0b941>All Status</option><option data-v-d3d0b941>Submitted</option><option data-v-d3d0b941>Delivered</option><option data-v-d3d0b941>Failed</option></select><button class="btn-secondary" data-v-d3d0b941>Export</button></div></div><div class="document-table" data-v-d3d0b941><table data-v-d3d0b941><thead data-v-d3d0b941><tr data-v-d3d0b941><th data-v-d3d0b941>Document ID</th><th data-v-d3d0b941>Recipient</th><th data-v-d3d0b941>Type</th><th data-v-d3d0b941>Status</th><th data-v-d3d0b941>Submitted</th><th data-v-d3d0b941>Actions</th></tr></thead><tbody data-v-d3d0b941><tr data-v-d3d0b941><td data-v-d3d0b941><code data-v-d3d0b941>INV-2024-001234</code></td><td data-v-d3d0b941>Acme Corp B.V.</td><td data-v-d3d0b941>Invoice</td><td data-v-d3d0b941><span class="status delivered" data-v-d3d0b941>Delivered</span></td><td data-v-d3d0b941>2024-01-15 14:30</td><td data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>View</button><button class="btn-link" data-v-d3d0b941>Resend</button></td></tr><tr data-v-d3d0b941><td data-v-d3d0b941><code data-v-d3d0b941>CN-2024-000456</code></td><td data-v-d3d0b941>Tech Solutions Ltd.</td><td data-v-d3d0b941>Credit Note</td><td data-v-d3d0b941><span class="status pending" data-v-d3d0b941>Processing</span></td><td data-v-d3d0b941>2024-01-15 13:45</td><td data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>View</button><button class="btn-link" data-v-d3d0b941>Cancel</button></td></tr><tr data-v-d3d0b941><td data-v-d3d0b941><code data-v-d3d0b941>INV-2024-001233</code></td><td data-v-d3d0b941>Global Imports GmbH</td><td data-v-d3d0b941>Invoice</td><td data-v-d3d0b941><span class="status failed" data-v-d3d0b941>Failed</span></td><td data-v-d3d0b941>2024-01-15 12:20</td><td data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>View</button><button class="btn-link" data-v-d3d0b941>Retry</button></td></tr></tbody></table></div></div></div></section><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Webhook Monitoring</h2><p data-v-d3d0b941>Monitor webhook delivery status and manage endpoints</p></div><div class="dashboard-grid" data-v-d3d0b941><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Webhook Endpoints</h3><button class="btn-primary" data-v-d3d0b941>Add Endpoint</button></div><div class="webhook-list" data-v-d3d0b941><div class="webhook-item" data-v-d3d0b941><div class="webhook-info" data-v-d3d0b941><h4 data-v-d3d0b941>Production Webhook</h4><code data-v-d3d0b941>https://api.yourcompany.com/webhooks/storecove</code><span class="webhook-status active" data-v-d3d0b941>Active</span></div><div class="webhook-actions" data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>Test</button><button class="btn-link" data-v-d3d0b941>Edit</button><button class="btn-link" data-v-d3d0b941>Disable</button></div></div><div class="webhook-item" data-v-d3d0b941><div class="webhook-info" data-v-d3d0b941><h4 data-v-d3d0b941>Staging Webhook</h4><code data-v-d3d0b941>https://staging.yourcompany.com/webhooks/storecove</code><span class="webhook-status inactive" data-v-d3d0b941>Inactive</span></div><div class="webhook-actions" data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>Test</button><button class="btn-link" data-v-d3d0b941>Edit</button><button class="btn-link" data-v-d3d0b941>Enable</button></div></div></div></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Recent Webhook Events</h3></div><div class="webhook-events" data-v-d3d0b941><div class="event-item" data-v-d3d0b941><div class="event-icon success" data-v-d3d0b941>✓</div><div class="event-content" data-v-d3d0b941><h4 data-v-d3d0b941>document_submission.succeeded</h4><p data-v-d3d0b941>INV-2024-001234 delivered successfully</p><span class="event-time" data-v-d3d0b941>2 minutes ago</span></div></div><div class="event-item" data-v-d3d0b941><div class="event-icon error" data-v-d3d0b941>✗</div><div class="event-content" data-v-d3d0b941><h4 data-v-d3d0b941>document_submission.failed</h4><p data-v-d3d0b941>INV-2024-001233 delivery failed</p><span class="event-time" data-v-d3d0b941>15 minutes ago</span></div></div><div class="event-item" data-v-d3d0b941><div class="event-icon success" data-v-d3d0b941>✓</div><div class="event-content" data-v-d3d0b941><h4 data-v-d3d0b941>document_submission.succeeded</h4><p data-v-d3d0b941>CN-2024-000455 delivered successfully</p><span class="event-time" data-v-d3d0b941>1 hour ago</span></div></div></div></div></div></div></section><section class="content-section bg-light" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Legal Entity Management</h2><p data-v-d3d0b941>Manage your organization&#39;s legal entities and their configurations</p></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Configured Legal Entities</h3><button class="btn-primary" data-v-d3d0b941>Add Legal Entity</button></div><div class="entity-grid" data-v-d3d0b941><div class="entity-card" data-v-d3d0b941><div class="entity-header" data-v-d3d0b941><h4 data-v-d3d0b941>Your Company B.V.</h4><span class="entity-status active" data-v-d3d0b941>Active</span></div><div class="entity-details" data-v-d3d0b941><p data-v-d3d0b941><strong data-v-d3d0b941>VAT ID:</strong> NL123456789B01</p><p data-v-d3d0b941><strong data-v-d3d0b941>Country:</strong> Netherlands</p><p data-v-d3d0b941><strong data-v-d3d0b941>Network:</strong> Peppol</p><p data-v-d3d0b941><strong data-v-d3d0b941>Documents:</strong> 1,247 sent</p></div><div class="entity-actions" data-v-d3d0b941><button class="btn-secondary" data-v-d3d0b941>Configure</button><button class="btn-link" data-v-d3d0b941>View Details</button></div></div><div class="entity-card" data-v-d3d0b941><div class="entity-header" data-v-d3d0b941><h4 data-v-d3d0b941>Your Company GmbH</h4><span class="entity-status active" data-v-d3d0b941>Active</span></div><div class="entity-details" data-v-d3d0b941><p data-v-d3d0b941><strong data-v-d3d0b941>VAT ID:</strong> DE987654321</p><p data-v-d3d0b941><strong data-v-d3d0b941>Country:</strong> Germany</p><p data-v-d3d0b941><strong data-v-d3d0b941>Network:</strong> Peppol</p><p data-v-d3d0b941><strong data-v-d3d0b941>Documents:</strong> 432 sent</p></div><div class="entity-actions" data-v-d3d0b941><button class="btn-secondary" data-v-d3d0b941>Configure</button><button class="btn-link" data-v-d3d0b941>View Details</button></div></div></div></div></div></section><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>API Usage Analytics</h2><p data-v-d3d0b941>Monitor your API usage, performance, and quotas</p></div><div class="dashboard-grid" data-v-d3d0b941><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>API Call Statistics</h3><select class="filter-select" data-v-d3d0b941><option data-v-d3d0b941>Last 7 days</option><option data-v-d3d0b941>Last 30 days</option><option data-v-d3d0b941>Last 90 days</option></select></div><div class="api-stats" data-v-d3d0b941><div class="stat-item" data-v-d3d0b941><h4 data-v-d3d0b941>Total API Calls</h4><p class="stat-value" data-v-d3d0b941>12,547</p><span class="stat-change positive" data-v-d3d0b941>+8.2%</span></div><div class="stat-item" data-v-d3d0b941><h4 data-v-d3d0b941>Success Rate</h4><p class="stat-value" data-v-d3d0b941>99.2%</p><span class="stat-change positive" data-v-d3d0b941>+0.1%</span></div><div class="stat-item" data-v-d3d0b941><h4 data-v-d3d0b941>Avg Response Time</h4><p class="stat-value" data-v-d3d0b941>234ms</p><span class="stat-change positive" data-v-d3d0b941>-12ms</span></div></div><div class="chart-placeholder" data-v-d3d0b941><p data-v-d3d0b941>📈 API Usage Chart (7 days)</p><div class="mock-chart" data-v-d3d0b941><div class="chart-bar" style="height:60%;" data-v-d3d0b941></div><div class="chart-bar" style="height:80%;" data-v-d3d0b941></div><div class="chart-bar" style="height:45%;" data-v-d3d0b941></div><div class="chart-bar" style="height:90%;" data-v-d3d0b941></div><div class="chart-bar" style="height:70%;" data-v-d3d0b941></div><div class="chart-bar" style="height:55%;" data-v-d3d0b941></div><div class="chart-bar" style="height:85%;" data-v-d3d0b941></div></div></div></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Rate Limits &amp; Quotas</h3></div><div class="quota-list" data-v-d3d0b941><div class="quota-item" data-v-d3d0b941><div class="quota-info" data-v-d3d0b941><h4 data-v-d3d0b941>Document Submissions</h4><p data-v-d3d0b941>Monthly quota usage</p></div><div class="quota-meter" data-v-d3d0b941><div class="quota-bar" data-v-d3d0b941><div class="quota-fill" style="width:67%;" data-v-d3d0b941></div></div><span class="quota-text" data-v-d3d0b941>1,340 / 2,000</span></div></div><div class="quota-item" data-v-d3d0b941><div class="quota-info" data-v-d3d0b941><h4 data-v-d3d0b941>API Requests</h4><p data-v-d3d0b941>Per minute rate limit</p></div><div class="quota-meter" data-v-d3d0b941><div class="quota-bar" data-v-d3d0b941><div class="quota-fill" style="width:23%;" data-v-d3d0b941></div></div><span class="quota-text" data-v-d3d0b941>23 / 100</span></div></div><div class="quota-item" data-v-d3d0b941><div class="quota-info" data-v-d3d0b941><h4 data-v-d3d0b941>Webhook Deliveries</h4><p data-v-d3d0b941>Monthly quota usage</p></div><div class="quota-meter" data-v-d3d0b941><div class="quota-bar" data-v-d3d0b941><div class="quota-fill" style="width:45%;" data-v-d3d0b941></div></div><span class="quota-text" data-v-d3d0b941>4,500 / 10,000</span></div></div></div></div></div></div></section><section class="content-section bg-light" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Dashboard Implementation Examples</h2><p data-v-d3d0b941>Code examples for implementing dashboard components</p></div><div class="code-section" data-v-d3d0b941><h3 data-v-d3d0b941>Fetching Dashboard Metrics</h3><div class="code-block" data-v-d3d0b941><pre data-v-d3d0b941><code data-v-d3d0b941>import requests
from datetime import datetime, timedelta

class StorecoveDashboard:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = &quot;https://api.storecove.com&quot;
        self.headers = {
            &quot;Authorization&quot;: f&quot;Bearer {api_key}&quot;,
            &quot;Content-Type&quot;: &quot;application/json&quot;
        }
    
    def get_document_metrics(self, days=30):
        &quot;&quot;&quot;Get document submission metrics for the dashboard&quot;&quot;&quot;
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days)
        
        params = {
            &quot;start_date&quot;: start_date.isoformat(),
            &quot;end_date&quot;: end_date.isoformat()
        }
        
        response = requests.get(
            f&quot;{self.base_url}/api/v2/document_submissions/metrics&quot;,
            headers=self.headers,
            params=params
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f&quot;API error: {response.status_code}&quot;)
    
    def get_webhook_status(self):
        &quot;&quot;&quot;Get webhook endpoint status&quot;&quot;&quot;
        response = requests.get(
            f&quot;{self.base_url}/api/v2/webhooks&quot;,
            headers=self.headers
        )
        
        return response.json() if response.status_code == 200 else None
    
    def get_legal_entities(self):
        &quot;&quot;&quot;Get configured legal entities&quot;&quot;&quot;
        response = requests.get(
            f&quot;{self.base_url}/api/v2/legal_entities&quot;,
            headers=self.headers
        )
        
        return response.json() if response.status_code == 200 else None

# Usage example
dashboard = StorecoveDashboard(&quot;your-api-key&quot;)

# Get metrics for dashboard
metrics = dashboard.get_document_metrics(days=7)
print(f&quot;Documents sent: {metrics[&#39;total_documents&#39;]}&quot;)
print(f&quot;Success rate: {metrics[&#39;success_rate&#39;]}%&quot;)

# Get webhook status
webhooks = dashboard.get_webhook_status()
for webhook in webhooks:
    print(f&quot;Webhook: {webhook[&#39;url&#39;]} - Status: {webhook[&#39;status&#39;]}&quot;)

# Get legal entities
entities = dashboard.get_legal_entities()
for entity in entities:
    print(f&quot;Entity: {entity[&#39;name&#39;]} - VAT: {entity[&#39;tax_id&#39;]}&quot;)
</code></pre></div></div><div class="code-section" data-v-d3d0b941><h3 data-v-d3d0b941>Real-time Dashboard Updates</h3><div class="code-block" data-v-d3d0b941><pre data-v-d3d0b941><code data-v-d3d0b941>import asyncio
import websockets
import json

class RealtimeDashboard:
    def __init__(self, api_key):
        self.api_key = api_key
        self.websocket_url = &quot;wss://api.storecove.com/ws/dashboard&quot;
        
    async def connect_to_updates(self):
        &quot;&quot;&quot;Connect to real-time dashboard updates&quot;&quot;&quot;
        headers = {&quot;Authorization&quot;: f&quot;Bearer {self.api_key}&quot;}
        
        try:
            async with websockets.connect(self.websocket_url, extra_headers=headers) as websocket:
                print(&quot;Connected to Storecove real-time updates&quot;)
                
                # Subscribe to dashboard events
                subscribe_msg = {
                    &quot;action&quot;: &quot;subscribe&quot;,
                    &quot;events&quot;: [
                        &quot;document_submission.succeeded&quot;,
                        &quot;document_submission.failed&quot;, 
                        &quot;webhook.delivered&quot;,
                        &quot;quota.warning&quot;
                    ]
                }
                
                await websocket.send(json.dumps(subscribe_msg))
                
                # Listen for updates
                async for message in websocket:
                    event = json.loads(message)
                    await self.handle_dashboard_event(event)
                    
        except websockets.exceptions.ConnectionClosed:
            print(&quot;Connection closed, attempting to reconnect...&quot;)
            await asyncio.sleep(5)
            await self.connect_to_updates()
    
    async def handle_dashboard_event(self, event):
        &quot;&quot;&quot;Handle real-time dashboard events&quot;&quot;&quot;
        event_type = event.get(&quot;type&quot;)
        data = event.get(&quot;data&quot;, {})
        
        if event_type == &quot;document_submission.succeeded&quot;:
            print(f&quot;✅ Document {data[&#39;document_id&#39;]} delivered successfully&quot;)
            self.update_success_counter()
            
        elif event_type == &quot;document_submission.failed&quot;:
            print(f&quot;❌ Document {data[&#39;document_id&#39;]} delivery failed: {data[&#39;error&#39;]}&quot;)
            self.update_error_counter()
            
        elif event_type == &quot;webhook.delivered&quot;:
            print(f&quot;🔄 Webhook delivered to {data[&#39;endpoint_url&#39;]}&quot;)
            self.update_webhook_status(data[&#39;endpoint_url&#39;], &#39;delivered&#39;)
            
        elif event_type == &quot;quota.warning&quot;:
            print(f&quot;⚠️ Quota warning: {data[&#39;quota_type&#39;]} at {data[&#39;usage_percentage&#39;]}%&quot;)
            self.show_quota_alert(data)
    
    def update_success_counter(self):
        &quot;&quot;&quot;Update success counter in dashboard UI&quot;&quot;&quot;
        # Implementation depends on your frontend framework
        pass
    
    def update_error_counter(self):
        &quot;&quot;&quot;Update error counter in dashboard UI&quot;&quot;&quot;
        # Implementation depends on your frontend framework  
        pass

# Usage
dashboard = RealtimeDashboard(&quot;your-api-key&quot;)
asyncio.run(dashboard.connect_to_updates())
</code></pre></div></div></div></section><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Dashboard Implementation Tips</h2><p data-v-d3d0b941>Best practices for building effective e-invoicing dashboards</p></div><div class="tips-grid" data-v-d3d0b941><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>⚡</div><h3 data-v-d3d0b941>Real-time Updates</h3><p data-v-d3d0b941>Implement WebSocket connections or periodic polling to keep dashboard data current. Update metrics automatically when document status changes.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>📊</div><h3 data-v-d3d0b941>Key Metrics</h3><p data-v-d3d0b941>Focus on essential KPIs: success rate, average response time, failed deliveries, and quota usage. Avoid information overload.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>🎯</div><h3 data-v-d3d0b941>Actionable Alerts</h3><p data-v-d3d0b941>Set up meaningful alerts for quota limits, delivery failures, and webhook issues. Include clear next steps for resolution.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>🔍</div><h3 data-v-d3d0b941>Detailed Filtering</h3><p data-v-d3d0b941>Provide robust filtering and search capabilities for document lists. Enable filtering by status, date range, recipient, and document type.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>📱</div><h3 data-v-d3d0b941>Mobile Responsive</h3><p data-v-d3d0b941>Ensure your dashboard works well on mobile devices. Administrators often need to check status while away from their desk.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>🔒</div><h3 data-v-d3d0b941>Security &amp; Access</h3><p data-v-d3d0b941>Implement proper authentication and role-based access controls. Log all administrative actions for audit purposes.</p></div></div></div></section>`,8)),n("section",Op,[n("div",Lp,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[0]||(e[0]=[V(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const jp=De(Ap,[["render",Np],["__scopeId","data-v-d3d0b941"]]);const Mp={name:"ErrorHandling"},Up={class:"error-handling"},Bp={class:"back-navigation"},Hp={class:"container"};function Fp(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",Up,[e[1]||(e[1]=G(`<div class="hero-section" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="hero-content" data-v-7fc726d0><h1 data-v-7fc726d0>Error Handling Guide</h1><p data-v-7fc726d0>Comprehensive guide to Storecove API error codes, troubleshooting steps, and resolution strategies</p></div></div></div><section class="content-section" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="section-header" data-v-7fc726d0><h2 data-v-7fc726d0>Understanding Storecove Error Model</h2><p data-v-7fc726d0>Learn about the standardized error response format and how to handle different error types</p></div><div class="error-model-card" data-v-7fc726d0><h3 data-v-7fc726d0>Standard Error Response Format</h3><p data-v-7fc726d0>All Storecove API errors follow a consistent structure for easy parsing and handling:</p><div class="code-block" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;validation_error&quot;,
    &quot;message&quot;: &quot;The provided document contains validation errors&quot;,
    &quot;details&quot;: [
      {
        &quot;field&quot;: &quot;invoice.invoice_number&quot;,
        &quot;message&quot;: &quot;Invoice number is required&quot;,
        &quot;code&quot;: &quot;required_field_missing&quot;
      },
      {
        &quot;field&quot;: &quot;invoice.supplier.name&quot;,
        &quot;message&quot;: &quot;Supplier name exceeds maximum length of 100 characters&quot;,
        &quot;code&quot;: &quot;field_too_long&quot;
      }
    ],
    &quot;source&quot;: {
      &quot;pointer&quot;: &quot;/invoice/invoice_number&quot;,
      &quot;parameter&quot;: &quot;invoice_number&quot;
    },
    &quot;request_id&quot;: &quot;req_1234567890abcdef&quot;
  }
}</code></pre></div><div class="error-fields" data-v-7fc726d0><h4 data-v-7fc726d0>Error Response Fields</h4><div class="field-grid" data-v-7fc726d0><div class="field-item" data-v-7fc726d0><strong data-v-7fc726d0>type</strong><p data-v-7fc726d0>The category of error (validation_error, authentication_error, etc.)</p></div><div class="field-item" data-v-7fc726d0><strong data-v-7fc726d0>message</strong><p data-v-7fc726d0>Human-readable description of the error</p></div><div class="field-item" data-v-7fc726d0><strong data-v-7fc726d0>details</strong><p data-v-7fc726d0>Array of specific validation or field-level errors</p></div><div class="field-item" data-v-7fc726d0><strong data-v-7fc726d0>source</strong><p data-v-7fc726d0>Points to the specific location where the error occurred</p></div><div class="field-item" data-v-7fc726d0><strong data-v-7fc726d0>request_id</strong><p data-v-7fc726d0>Unique identifier for tracking and support purposes</p></div></div></div></div></div></section><section class="content-section bg-light" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="section-header" data-v-7fc726d0><h2 data-v-7fc726d0>HTTP Status Codes</h2><p data-v-7fc726d0>Understanding the meaning of different HTTP status codes returned by the Storecove API</p></div><div class="status-grid" data-v-7fc726d0><div class="status-category" data-v-7fc726d0><h3 data-v-7fc726d0>2xx Success</h3><div class="status-list" data-v-7fc726d0><div class="status-item success" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>200</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>OK</h4><p data-v-7fc726d0>Request succeeded. The response contains the requested data.</p></div></div><div class="status-item success" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>201</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Created</h4><p data-v-7fc726d0>Resource was successfully created (e.g., new document submission).</p></div></div><div class="status-item success" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>204</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>No Content</h4><p data-v-7fc726d0>Request succeeded but no content to return (e.g., successful deletion).</p></div></div></div></div><div class="status-category" data-v-7fc726d0><h3 data-v-7fc726d0>4xx Client Errors</h3><div class="status-list" data-v-7fc726d0><div class="status-item error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>400</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Bad Request</h4><p data-v-7fc726d0>Invalid request format, missing required fields, or validation errors.</p></div></div><div class="status-item error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>401</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Unauthorized</h4><p data-v-7fc726d0>Authentication failed. Check your API key and authorization header.</p></div></div><div class="status-item error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>403</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Forbidden</h4><p data-v-7fc726d0>Authenticated but not authorized to access this resource.</p></div></div><div class="status-item error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>404</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Not Found</h4><p data-v-7fc726d0>Requested resource does not exist or has been deleted.</p></div></div><div class="status-item error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>409</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Conflict</h4><p data-v-7fc726d0>Resource conflict (e.g., duplicate invoice number).</p></div></div><div class="status-item error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>422</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Unprocessable Entity</h4><p data-v-7fc726d0>Request format is correct but contains semantic errors.</p></div></div><div class="status-item error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>429</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Too Many Requests</h4><p data-v-7fc726d0>Rate limit exceeded. Reduce request frequency.</p></div></div></div></div><div class="status-category" data-v-7fc726d0><h3 data-v-7fc726d0>5xx Server Errors</h3><div class="status-list" data-v-7fc726d0><div class="status-item server-error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>500</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Internal Server Error</h4><p data-v-7fc726d0>Unexpected server error. Contact support with request_id.</p></div></div><div class="status-item server-error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>502</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Bad Gateway</h4><p data-v-7fc726d0>Temporary service unavailability. Retry with exponential backoff.</p></div></div><div class="status-item server-error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>503</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Service Unavailable</h4><p data-v-7fc726d0>Service temporarily unavailable. Check service status.</p></div></div><div class="status-item server-error" data-v-7fc726d0><span class="status-code" data-v-7fc726d0>504</span><div class="status-info" data-v-7fc726d0><h4 data-v-7fc726d0>Gateway Timeout</h4><p data-v-7fc726d0>Request timeout. Retry after a delay.</p></div></div></div></div></div></div></section><section class="content-section" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="section-header" data-v-7fc726d0><h2 data-v-7fc726d0>Common Error Types &amp; Solutions</h2><p data-v-7fc726d0>Detailed breakdown of frequent error scenarios and their resolution strategies</p></div><div class="error-types" data-v-7fc726d0><div class="error-type-card" data-v-7fc726d0><div class="error-header" data-v-7fc726d0><span class="error-icon" data-v-7fc726d0>🔐</span><h3 data-v-7fc726d0>Authentication Errors</h3></div><div class="error-content" data-v-7fc726d0><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Invalid API Key</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;authentication_error&quot;,
    &quot;message&quot;: &quot;Invalid API key provided&quot;,
    &quot;code&quot;: &quot;invalid_api_key&quot;
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Verify your API key is correct and active</li><li data-v-7fc726d0>Check the Authorization header format: <code data-v-7fc726d0>Bearer YOUR_API_KEY</code></li><li data-v-7fc726d0>Ensure you&#39;re using the correct environment (sandbox vs production)</li></ul></div></div><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Expired API Key</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;authentication_error&quot;, 
    &quot;message&quot;: &quot;API key has expired&quot;,
    &quot;code&quot;: &quot;api_key_expired&quot;
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Generate a new API key from your dashboard</li><li data-v-7fc726d0>Update your application configuration</li><li data-v-7fc726d0>Implement automatic key rotation if supported</li></ul></div></div></div></div><div class="error-type-card" data-v-7fc726d0><div class="error-header" data-v-7fc726d0><span class="error-icon" data-v-7fc726d0>📝</span><h3 data-v-7fc726d0>Validation Errors</h3></div><div class="error-content" data-v-7fc726d0><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Missing Required Fields</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;validation_error&quot;,
    &quot;message&quot;: &quot;Document validation failed&quot;,
    &quot;details&quot;: [
      {
        &quot;field&quot;: &quot;invoice.invoice_number&quot;,
        &quot;message&quot;: &quot;Invoice number is required&quot;,
        &quot;code&quot;: &quot;required_field_missing&quot;
      }
    ]
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Review the API documentation for required fields</li><li data-v-7fc726d0>Validate your document structure before submission</li><li data-v-7fc726d0>Implement client-side validation to catch errors early</li></ul></div></div><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Invalid Data Format</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;validation_error&quot;,
    &quot;message&quot;: &quot;Invalid date format&quot;,
    &quot;details&quot;: [
      {
        &quot;field&quot;: &quot;invoice.issue_date&quot;,
        &quot;message&quot;: &quot;Date must be in ISO 8601 format (YYYY-MM-DD)&quot;,
        &quot;code&quot;: &quot;invalid_date_format&quot;
      }
    ]
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Use ISO 8601 date format: YYYY-MM-DD</li><li data-v-7fc726d0>Validate currency codes against ISO 4217</li><li data-v-7fc726d0>Ensure country codes follow ISO 3166-1 alpha-2</li></ul></div></div></div></div><div class="error-type-card" data-v-7fc726d0><div class="error-header" data-v-7fc726d0><span class="error-icon" data-v-7fc726d0>🌍</span><h3 data-v-7fc726d0>Country-Specific Errors</h3></div><div class="error-content" data-v-7fc726d0><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Unsupported Country</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;country_not_supported&quot;,
    &quot;message&quot;: &quot;E-invoicing not available for this country&quot;,
    &quot;details&quot;: {
      &quot;country&quot;: &quot;XX&quot;,
      &quot;supported_countries&quot;: [&quot;NL&quot;, &quot;DE&quot;, &quot;FR&quot;, &quot;IT&quot;, &quot;ES&quot;]
    }
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Check the list of supported countries</li><li data-v-7fc726d0>Use alternative delivery methods for unsupported countries</li><li data-v-7fc726d0>Subscribe to updates for country support expansion</li></ul></div></div><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Country-Specific Validation</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;validation_error&quot;,
    &quot;message&quot;: &quot;Country-specific requirements not met&quot;,
    &quot;details&quot;: [
      {
        &quot;field&quot;: &quot;invoice.tax_id&quot;,
        &quot;message&quot;: &quot;Italian tax ID must be exactly 11 digits&quot;,
        &quot;code&quot;: &quot;invalid_tax_id_format&quot;,
        &quot;country&quot;: &quot;IT&quot;
      }
    ]
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Implement country-specific validation rules</li><li data-v-7fc726d0>Reference official tax ID formats for each country</li><li data-v-7fc726d0>Use country-specific field requirements</li></ul></div></div></div></div><div class="error-type-card" data-v-7fc726d0><div class="error-header" data-v-7fc726d0><span class="error-icon" data-v-7fc726d0>🔄</span><h3 data-v-7fc726d0>Webhook Errors</h3></div><div class="error-content" data-v-7fc726d0><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Webhook Delivery Failed</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;event&quot;: &quot;webhook.delivery_failed&quot;,
  &quot;data&quot;: {
    &quot;webhook_id&quot;: &quot;wh_123456789&quot;,
    &quot;endpoint_url&quot;: &quot;https://api.yourcompany.com/webhooks&quot;,
    &quot;failure_reason&quot;: &quot;connection_timeout&quot;,
    &quot;retry_count&quot;: 3,
    &quot;next_retry&quot;: &quot;2024-01-15T15:30:00Z&quot;
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Verify your webhook endpoint is accessible</li><li data-v-7fc726d0>Check SSL certificate validity</li><li data-v-7fc726d0>Ensure response time is under 30 seconds</li><li data-v-7fc726d0>Return 200 status code for successful processing</li></ul></div></div><div class="error-scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Invalid Webhook Signature</h4><div class="code-block small" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
  &quot;error&quot;: {
    &quot;type&quot;: &quot;webhook_verification_failed&quot;,
    &quot;message&quot;: &quot;Webhook signature verification failed&quot;,
    &quot;code&quot;: &quot;invalid_signature&quot;
  }
}</code></pre></div><div class="solution" data-v-7fc726d0><h5 data-v-7fc726d0>Solution:</h5><ul data-v-7fc726d0><li data-v-7fc726d0>Verify webhook signature using HMAC-SHA256</li><li data-v-7fc726d0>Use the correct webhook secret from your dashboard</li><li data-v-7fc726d0>Ensure timestamp tolerance for signature validation</li></ul></div></div></div></div></div></div></section><section class="content-section bg-light" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="section-header" data-v-7fc726d0><h2 data-v-7fc726d0>Implementation Examples</h2><p data-v-7fc726d0>Practical code examples for robust error handling in your integration</p></div><div class="implementation-section" data-v-7fc726d0><h3 data-v-7fc726d0>Python Error Handling</h3><div class="code-block" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>import requests
import time
import logging
from typing import Dict, Any, Optional

class StorecoveClient:
    def __init__(self, api_key: str, base_url: str = &quot;https://api.storecove.com&quot;):
        self.api_key = api_key
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            &quot;Authorization&quot;: f&quot;Bearer {api_key}&quot;,
            &quot;Content-Type&quot;: &quot;application/json&quot;
        })
        
    def submit_document(self, document_data: Dict[str, Any]) -&gt; Dict[str, Any]:
        &quot;&quot;&quot;Submit a document with comprehensive error handling&quot;&quot;&quot;
        max_retries = 3
        backoff_factor = 2
        
        for attempt in range(max_retries):
            try:
                response = self.session.post(
                    f&quot;{self.base_url}/api/v2/document_submissions&quot;,
                    json=document_data,
                    timeout=30
                )
                
                # Handle successful responses
                if response.status_code in [200, 201]:
                    return response.json()
                
                # Handle client errors (4xx)
                elif 400 &lt;= response.status_code &lt; 500:
                    error_data = self._parse_error_response(response)
                    
                    if response.status_code == 401:
                        raise AuthenticationError(&quot;Invalid API key&quot;, error_data)
                    elif response.status_code == 400:
                        raise ValidationError(&quot;Document validation failed&quot;, error_data)
                    elif response.status_code == 409:
                        raise DuplicateDocumentError(&quot;Document already exists&quot;, error_data)
                    elif response.status_code == 422:
                        raise BusinessLogicError(&quot;Business rule violation&quot;, error_data)
                    elif response.status_code == 429:
                        # Rate limiting - implement exponential backoff
                        retry_after = int(response.headers.get(&#39;Retry-After&#39;, 60))
                        logging.warning(f&quot;Rate limited. Waiting {retry_after} seconds&quot;)
                        time.sleep(retry_after)
                        continue
                    else:
                        raise APIError(f&quot;Client error: {response.status_code}&quot;, error_data)
                
                # Handle server errors (5xx) - retry with backoff
                elif 500 &lt;= response.status_code &lt; 600:
                    if attempt == max_retries - 1:
                        error_data = self._parse_error_response(response)
                        raise ServerError(f&quot;Server error: {response.status_code}&quot;, error_data)
                    
                    wait_time = backoff_factor ** attempt
                    logging.warning(f&quot;Server error {response.status_code}. Retrying in {wait_time} seconds&quot;)
                    time.sleep(wait_time)
                    continue
                    
            except requests.exceptions.ConnectionError as e:
                if attempt == max_retries - 1:
                    raise NetworkError(&quot;Connection failed&quot;, str(e))
                wait_time = backoff_factor ** attempt
                logging.warning(f&quot;Connection error. Retrying in {wait_time} seconds&quot;)
                time.sleep(wait_time)
                
            except requests.exceptions.Timeout as e:
                if attempt == max_retries - 1:
                    raise TimeoutError(&quot;Request timeout&quot;, str(e))
                wait_time = backoff_factor ** attempt
                logging.warning(f&quot;Request timeout. Retrying in {wait_time} seconds&quot;)
                time.sleep(wait_time)
    
    def _parse_error_response(self, response: requests.Response) -&gt; Dict[str, Any]:
        &quot;&quot;&quot;Parse error response into structured format&quot;&quot;&quot;
        try:
            error_data = response.json()
            return {
                &quot;status_code&quot;: response.status_code,
                &quot;error&quot;: error_data.get(&quot;error&quot;, {}),
                &quot;request_id&quot;: error_data.get(&quot;error&quot;, {}).get(&quot;request_id&quot;),
                &quot;details&quot;: error_data.get(&quot;error&quot;, {}).get(&quot;details&quot;, [])
            }
        except ValueError:
            return {
                &quot;status_code&quot;: response.status_code,
                &quot;error&quot;: {&quot;message&quot;: response.text},
                &quot;request_id&quot;: response.headers.get(&quot;X-Request-ID&quot;)
            }

# Custom Exception Classes
class StorecoveError(Exception):
    &quot;&quot;&quot;Base exception for Storecove API errors&quot;&quot;&quot;
    def __init__(self, message: str, error_data: Optional[Dict[str, Any]] = None):
        super().__init__(message)
        self.error_data = error_data
        self.request_id = error_data.get(&quot;request_id&quot;) if error_data else None

class AuthenticationError(StorecoveError):
    &quot;&quot;&quot;Authentication failed&quot;&quot;&quot;
    pass

class ValidationError(StorecoveError):
    &quot;&quot;&quot;Document validation failed&quot;&quot;&quot;
    def __init__(self, message: str, error_data: Optional[Dict[str, Any]] = None):
        super().__init__(message, error_data)
        self.validation_errors = error_data.get(&quot;details&quot;, []) if error_data else []

class DuplicateDocumentError(StorecoveError):
    &quot;&quot;&quot;Document already exists&quot;&quot;&quot;
    pass

class BusinessLogicError(StorecoveError):
    &quot;&quot;&quot;Business rule violation&quot;&quot;&quot;
    pass

class NetworkError(StorecoveError):
    &quot;&quot;&quot;Network connection error&quot;&quot;&quot;
    pass

class TimeoutError(StorecoveError):
    &quot;&quot;&quot;Request timeout error&quot;&quot;&quot;
    pass

class ServerError(StorecoveError):
    &quot;&quot;&quot;Server error (5xx)&quot;&quot;&quot;
    pass

class APIError(StorecoveError):
    &quot;&quot;&quot;Generic API error&quot;&quot;&quot;
    pass

# Usage Example
def process_invoice(invoice_data: Dict[str, Any]):
    &quot;&quot;&quot;Example of processing an invoice with error handling&quot;&quot;&quot;
    client = StorecoveClient(&quot;your-api-key&quot;)
    
    try:
        result = client.submit_document(invoice_data)
        logging.info(f&quot;Document submitted successfully: {result[&#39;id&#39;]}&quot;)
        return result
        
    except ValidationError as e:
        logging.error(f&quot;Validation failed: {e}&quot;)
        # Handle validation errors - show user-friendly messages
        for error in e.validation_errors:
            print(f&quot;Field &#39;{error[&#39;field&#39;]}&#39;: {error[&#39;message&#39;]}&quot;)
        raise
        
    except DuplicateDocumentError as e:
        logging.warning(f&quot;Document already exists: {e}&quot;)
        # Handle duplicate - perhaps fetch existing document
        return None
        
    except AuthenticationError as e:
        logging.error(f&quot;Authentication failed: {e}&quot;)
        # Handle auth error - refresh API key
        raise
        
    except NetworkError as e:
        logging.error(f&quot;Network error: {e}&quot;)
        # Handle network issues - queue for retry
        raise
        
    except ServerError as e:
        logging.error(f&quot;Server error: {e.request_id}&quot;)
        # Handle server errors - alert monitoring
        raise
</code></pre></div></div><div class="implementation-section" data-v-7fc726d0><h3 data-v-7fc726d0>JavaScript/Node.js Error Handling</h3><div class="code-block" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>const axios = require(&#39;axios&#39;);

class StorecoveClient {
    constructor(apiKey, baseURL = &#39;https://api.storecove.com&#39;) {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
        this.client = axios.create({
            baseURL: baseURL,
            headers: {
                &#39;Authorization&#39;: \`Bearer \${apiKey}\`,
                &#39;Content-Type&#39;: &#39;application/json&#39;
            },
            timeout: 30000
        });
        
        // Setup response interceptor for error handling
        this.client.interceptors.response.use(
            response =&gt; response,
            error =&gt; this.handleAPIError(error)
        );
    }
    
    async submitDocument(documentData) {
        const maxRetries = 3;
        const backoffFactor = 2;
        
        for (let attempt = 0; attempt &lt; maxRetries; attempt++) {
            try {
                const response = await this.client.post(&#39;/api/v2/document_submissions&#39;, documentData);
                return response.data;
                
            } catch (error) {
                if (this.shouldRetry(error) &amp;&amp; attempt &lt; maxRetries - 1) {
                    const waitTime = Math.pow(backoffFactor, attempt) * 1000;
                    console.warn(\`Retrying in \${waitTime}ms due to: \${error.message}\`);
                    await this.sleep(waitTime);
                    continue;
                }
                throw error;
            }
        }
    }
    
    handleAPIError(error) {
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;
            const errorData = data.error || {};
            
            switch (status) {
                case 400:
                    throw new ValidationError(&#39;Document validation failed&#39;, errorData);
                case 401:
                    throw new AuthenticationError(&#39;Invalid API key&#39;, errorData);
                case 403:
                    throw new AuthorizationError(&#39;Access forbidden&#39;, errorData);
                case 404:
                    throw new NotFoundError(&#39;Resource not found&#39;, errorData);
                case 409:
                    throw new DuplicateDocumentError(&#39;Document already exists&#39;, errorData);
                case 422:
                    throw new BusinessLogicError(&#39;Business rule violation&#39;, errorData);
                case 429:
                    throw new RateLimitError(&#39;Rate limit exceeded&#39;, errorData);
                case 500:
                case 502:
                case 503:
                case 504:
                    throw new ServerError(\`Server error: \${status}\`, errorData);
                default:
                    throw new APIError(\`HTTP \${status}: \${errorData.message}\`, errorData);
            }
        } else if (error.code === &#39;ECONNABORTED&#39;) {
            throw new TimeoutError(&#39;Request timeout&#39;, error);
        } else if (error.code === &#39;ENOTFOUND&#39; || error.code === &#39;ECONNREFUSED&#39;) {
            throw new NetworkError(&#39;Network connection failed&#39;, error);
        } else {
            throw new APIError(&#39;Unknown error occurred&#39;, error);
        }
    }
    
    shouldRetry(error) {
        return error instanceof ServerError || 
               error instanceof NetworkError || 
               error instanceof TimeoutError ||
               (error instanceof RateLimitError &amp;&amp; error.retryAfter);
    }
    
    sleep(ms) {
        return new Promise(resolve =&gt; setTimeout(resolve, ms));
    }
}

// Custom Error Classes
class StorecoveError extends Error {
    constructor(message, errorData = null) {
        super(message);
        this.name = this.constructor.name;
        this.errorData = errorData;
        this.requestId = errorData?.request_id;
    }
}

class ValidationError extends StorecoveError {
    constructor(message, errorData) {
        super(message, errorData);
        this.validationErrors = errorData?.details || [];
    }
}

class AuthenticationError extends StorecoveError {}
class AuthorizationError extends StorecoveError {}
class NotFoundError extends StorecoveError {}
class DuplicateDocumentError extends StorecoveError {}
class BusinessLogicError extends StorecoveError {}
class RateLimitError extends StorecoveError {
    constructor(message, errorData) {
        super(message, errorData);
        this.retryAfter = errorData?.retry_after;
    }
}
class NetworkError extends StorecoveError {}
class TimeoutError extends StorecoveError {}
class ServerError extends StorecoveError {}
class APIError extends StorecoveError {}

// Usage Example
async function processInvoice(invoiceData) {
    const client = new StorecoveClient(&#39;your-api-key&#39;);
    
    try {
        const result = await client.submitDocument(invoiceData);
        console.log(\`Document submitted successfully: \${result.id}\`);
        return result;
        
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(&#39;Validation failed:&#39;);
            error.validationErrors.forEach(err =&gt; {
                console.error(\`Field &#39;\${err.field}&#39;: \${err.message}\`);
            });
        } else if (error instanceof DuplicateDocumentError) {
            console.warn(&#39;Document already exists&#39;);
            // Handle duplicate case
        } else if (error instanceof AuthenticationError) {
            console.error(&#39;Authentication failed - check API key&#39;);
        } else if (error instanceof NetworkError) {
            console.error(&#39;Network error - check connectivity&#39;);
        } else if (error instanceof ServerError) {
            console.error(\`Server error - Request ID: \${error.requestId}\`);
        } else {
            console.error(&#39;Unexpected error:&#39;, error.message);
        }
        throw error;
    }
}
</code></pre></div></div></div></section><section class="content-section" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="section-header" data-v-7fc726d0><h2 data-v-7fc726d0>Troubleshooting Checklist</h2><p data-v-7fc726d0>Step-by-step guide to diagnose and resolve common integration issues</p></div><div class="troubleshooting-grid" data-v-7fc726d0><div class="troubleshooting-card" data-v-7fc726d0><h3 data-v-7fc726d0>🔍 Quick Diagnosis</h3><div class="checklist" data-v-7fc726d0><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check1" data-v-7fc726d0><label for="check1" data-v-7fc726d0>Verify API key is valid and active</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check2" data-v-7fc726d0><label for="check2" data-v-7fc726d0>Check request format and headers</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check3" data-v-7fc726d0><label for="check3" data-v-7fc726d0>Validate document structure against schema</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check4" data-v-7fc726d0><label for="check4" data-v-7fc726d0>Review error response details and request_id</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check5" data-v-7fc726d0><label for="check5" data-v-7fc726d0>Test with sandbox environment first</label></div></div></div><div class="troubleshooting-card" data-v-7fc726d0><h3 data-v-7fc726d0>🛠️ Common Fixes</h3><div class="fix-list" data-v-7fc726d0><div class="fix-item" data-v-7fc726d0><h4 data-v-7fc726d0>Authentication Issues</h4><ul data-v-7fc726d0><li data-v-7fc726d0>Regenerate API key</li><li data-v-7fc726d0>Check environment (sandbox vs production)</li><li data-v-7fc726d0>Verify header format</li></ul></div><div class="fix-item" data-v-7fc726d0><h4 data-v-7fc726d0>Validation Errors</h4><ul data-v-7fc726d0><li data-v-7fc726d0>Review required fields</li><li data-v-7fc726d0>Check data formats (dates, currencies)</li><li data-v-7fc726d0>Validate against country requirements</li></ul></div><div class="fix-item" data-v-7fc726d0><h4 data-v-7fc726d0>Network Issues</h4><ul data-v-7fc726d0><li data-v-7fc726d0>Implement retry logic with backoff</li><li data-v-7fc726d0>Check SSL/TLS configuration</li><li data-v-7fc726d0>Verify firewall settings</li></ul></div></div></div><div class="troubleshooting-card" data-v-7fc726d0><h3 data-v-7fc726d0>📞 When to Contact Support</h3><div class="support-scenarios" data-v-7fc726d0><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Persistent 5xx Errors</h4><p data-v-7fc726d0>Include request_id and timestamp</p></div><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Unexpected Business Logic Errors</h4><p data-v-7fc726d0>Provide document payload and error details</p></div><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Country-Specific Issues</h4><p data-v-7fc726d0>Specify country and regulatory requirements</p></div><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Performance Issues</h4><p data-v-7fc726d0>Include response times and request patterns</p></div></div></div></div></div></section>`,6)),n("section",Bp,[n("div",Hp,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[0]||(e[0]=[V(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const Vp=De(Mp,[["render",Fp],["__scopeId","data-v-7fc726d0"]]);const Wp={name:"APILogs",data(){return{activeTab:"python"}}},Gp={class:"api-logs"},Kp={class:"content-section"},zp={class:"container"},Yp={class:"implementation-tabs"},Jp={class:"tab-buttons"},Qp={class:"tab-content"},Xp={class:"tab-panel"},Zp={class:"tab-panel"},ef={class:"tab-panel"},tf={class:"tab-panel"},nf={class:"back-navigation"},af={class:"container"};function sf(t,e,a,s,o,i){const r=Te("router-link");return re(),ce("div",Gp,[e[10]||(e[10]=G('<div class="hero-section" data-v-11a65d00><div class="container" data-v-11a65d00><div class="hero-content" data-v-11a65d00><h1 data-v-11a65d00>API Logs &amp; Monitoring</h1><p data-v-11a65d00>Best practices for API logging, monitoring approaches, and real-world examples for production systems</p></div></div></div><section class="content-section" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Comprehensive Logging Strategy</h2><p data-v-11a65d00>Essential logging practices for robust e-invoicing integration monitoring</p></div><div class="strategy-grid" data-v-11a65d00><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>📊</div><h3 data-v-11a65d00>Request/Response Logging</h3><p data-v-11a65d00>Log all API interactions including headers, payloads, response times, and status codes for complete audit trails.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Full request context</span><span class="feature" data-v-11a65d00>Response validation</span><span class="feature" data-v-11a65d00>Performance metrics</span></div></div><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>🔄</div><h3 data-v-11a65d00>Event-Driven Logging</h3><p data-v-11a65d00>Capture business events like document submissions, delivery confirmations, and webhook notifications.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Business context</span><span class="feature" data-v-11a65d00>State transitions</span><span class="feature" data-v-11a65d00>Event correlation</span></div></div><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>⚠️</div><h3 data-v-11a65d00>Error &amp; Exception Tracking</h3><p data-v-11a65d00>Detailed error logging with stack traces, context, and automated alerting for critical failures.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Error categorization</span><span class="feature" data-v-11a65d00>Automated alerts</span><span class="feature" data-v-11a65d00>Recovery tracking</span></div></div><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>📈</div><h3 data-v-11a65d00>Performance Monitoring</h3><p data-v-11a65d00>Track API performance metrics, identify bottlenecks, and monitor quota usage patterns.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Response times</span><span class="feature" data-v-11a65d00>Throughput analysis</span><span class="feature" data-v-11a65d00>Resource utilization</span></div></div></div></div></section><section class="content-section bg-light" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Log Levels &amp; Categories</h2><p data-v-11a65d00>Structured approach to categorizing and prioritizing log messages</p></div><div class="log-levels" data-v-11a65d00><div class="level-card error" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>🚨</span><h3 data-v-11a65d00>ERROR</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> API failures, authentication errors, document rejection</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>HTTP 4xx/5xx responses</li><li data-v-11a65d00>Authentication failures</li><li data-v-11a65d00>Document validation errors</li><li data-v-11a65d00>Webhook delivery failures</li></ul></div></div></div><div class="level-card warning" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>⚠️</span><h3 data-v-11a65d00>WARN</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> Recoverable issues, rate limiting, retries</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>Rate limit approached</li><li data-v-11a65d00>Retry attempts</li><li data-v-11a65d00>Quota warnings</li><li data-v-11a65d00>Deprecated API usage</li></ul></div></div></div><div class="level-card info" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>ℹ️</span><h3 data-v-11a65d00>INFO</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> Business events, successful operations, state changes</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>Document submitted</li><li data-v-11a65d00>Delivery confirmed</li><li data-v-11a65d00>Webhook received</li><li data-v-11a65d00>Configuration changes</li></ul></div></div></div><div class="level-card debug" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>🔍</span><h3 data-v-11a65d00>DEBUG</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> Detailed flow tracking, development debugging</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>Request/response details</li><li data-v-11a65d00>Internal state changes</li><li data-v-11a65d00>Performance timings</li><li data-v-11a65d00>Variable values</li></ul></div></div></div></div></div></section>',3)),n("section",Kp,[n("div",zp,[e[8]||(e[8]=n("div",{class:"section-header"},[n("h2",null,"Implementation Examples"),n("p",null,"Production-ready logging implementations for different platforms")],-1)),n("div",Yp,[n("div",Jp,[n("button",{class:"tab-btn active",onClick:e[0]||(e[0]=c=>o.activeTab="python")},"Python"),n("button",{class:"tab-btn",onClick:e[1]||(e[1]=c=>o.activeTab="nodejs")},"Node.js"),n("button",{class:"tab-btn",onClick:e[2]||(e[2]=c=>o.activeTab="java")},"Java"),n("button",{class:"tab-btn",onClick:e[3]||(e[3]=c=>o.activeTab="csharp")},"C#")]),n("div",Qp,[tt(n("div",Xp,[...e[4]||(e[4]=[n("h3",null,"Python Logging with Structured JSON",-1),n("div",{class:"code-block"},[n("pre",null,[n("code",null,`import logging
import json
import time
import uuid
from datetime import datetime
from typing import Dict, Any, Optional
import requests

class StorecoveLogger:
    def __init__(self, name: str = "storecove", level: str = "INFO"):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(getattr(logging, level))
        
        # JSON formatter for structured logs
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        
        # Console handler
        console_handler = logging.StreamHandler()
        console_handler.setFormatter(formatter)
        self.logger.addHandler(console_handler)
        
        # File handler for persistent logs
        file_handler = logging.FileHandler('storecove_api.log')
        file_handler.setFormatter(formatter)
        self.logger.addHandler(file_handler)
    
    def log_request(self, method: str, url: str, headers: Dict, 
                   payload: Optional[Dict] = None, request_id: str = None):
        """Log outgoing API request"""
        log_data = {
            "event_type": "api_request",
            "request_id": request_id or str(uuid.uuid4()),
            "method": method,
            "url": url,
            "headers": self._sanitize_headers(headers),
            "payload_size": len(json.dumps(payload)) if payload else 0,
            "timestamp": datetime.utcnow().isoformat()
        }
        
        # Log payload in debug mode only
        if self.logger.isEnabledFor(logging.DEBUG):
            log_data["payload"] = payload
            
        self.logger.info(json.dumps(log_data))
        return log_data["request_id"]
    
    def log_response(self, request_id: str, status_code: int, 
                    response_time: float, response_data: Optional[Dict] = None):
        """Log API response"""
        log_data = {
            "event_type": "api_response",
            "request_id": request_id,
            "status_code": status_code,
            "response_time_ms": round(response_time * 1000, 2),
            "response_size": len(json.dumps(response_data)) if response_data else 0,
            "timestamp": datetime.utcnow().isoformat()
        }
        
        if self.logger.isEnabledFor(logging.DEBUG) and response_data:
            log_data["response_data"] = response_data
        
        # Log level based on status code
        if 200 <= status_code < 300:
            self.logger.info(json.dumps(log_data))
        elif 400 <= status_code < 500:
            self.logger.warning(json.dumps(log_data))
        else:
            self.logger.error(json.dumps(log_data))
    
    def log_business_event(self, event_type: str, document_id: str, 
                          details: Dict[str, Any]):
        """Log business-level events"""
        log_data = {
            "event_type": f"business.{event_type}",
            "document_id": document_id,
            "details": details,
            "timestamp": datetime.utcnow().isoformat()
        }
        self.logger.info(json.dumps(log_data))
    
    def log_error(self, error: Exception, context: Dict[str, Any] = None):
        """Log error with full context"""
        log_data = {
            "event_type": "error",
            "error_type": type(error).__name__,
            "error_message": str(error),
            "context": context or {},
            "timestamp": datetime.utcnow().isoformat()
        }
        self.logger.error(json.dumps(log_data), exc_info=True)
    
    def log_performance_metric(self, operation: str, duration: float, 
                              metadata: Dict[str, Any] = None):
        """Log performance metrics"""
        log_data = {
            "event_type": "performance_metric",
            "operation": operation,
            "duration_ms": round(duration * 1000, 2),
            "metadata": metadata or {},
            "timestamp": datetime.utcnow().isoformat()
        }
        self.logger.info(json.dumps(log_data))
    
    def _sanitize_headers(self, headers: Dict) -> Dict:
        """Remove sensitive information from headers"""
        sanitized = headers.copy()
        sensitive_keys = ['authorization', 'x-api-key', 'cookie']
        
        for key in sensitive_keys:
            if key.lower() in [k.lower() for k in sanitized.keys()]:
                sanitized[key] = "[REDACTED]"
                
        return sanitized

class StorecoveClientWithLogging:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.storecove.com"
        self.logger = StorecoveLogger()
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        })
    
    def submit_document(self, document_data: Dict[str, Any]) -> Dict[str, Any]:
        """Submit document with comprehensive logging"""
        operation_start = time.time()
        
        # Log business event
        self.logger.log_business_event(
            "document_submission_started",
            document_data.get("invoice_number", "unknown"),
            {
                "recipient": document_data.get("customer", {}).get("name"),
                "amount": document_data.get("invoice_total"),
                "currency": document_data.get("invoice_currency_code")
            }
        )
        
        try:
            # Log request
            request_id = self.logger.log_request(
                "POST",
                f"{self.base_url}/api/v2/document_submissions",
                self.session.headers,
                document_data
            )
            
            # Make API call
            start_time = time.time()
            response = self.session.post(
                f"{self.base_url}/api/v2/document_submissions",
                json=document_data,
                timeout=30
            )
            response_time = time.time() - start_time
            
            # Log response
            response_data = None
            if response.content:
                try:
                    response_data = response.json()
                except ValueError:
                    pass
            
            self.logger.log_response(
                request_id,
                response.status_code,
                response_time,
                response_data
            )
            
            # Log business outcome
            if response.status_code in [200, 201]:
                submission_id = response_data.get("id") if response_data else "unknown"
                self.logger.log_business_event(
                    "document_submission_succeeded",
                    document_data.get("invoice_number", "unknown"),
                    {
                        "submission_id": submission_id,
                        "response_time_ms": round(response_time * 1000, 2)
                    }
                )
            else:
                self.logger.log_business_event(
                    "document_submission_failed",
                    document_data.get("invoice_number", "unknown"),
                    {
                        "status_code": response.status_code,
                        "error": response_data.get("error") if response_data else None
                    }
                )
            
            # Log performance metric
            operation_time = time.time() - operation_start
            self.logger.log_performance_metric(
                "document_submission",
                operation_time,
                {
                    "status_code": response.status_code,
                    "document_size": len(json.dumps(document_data))
                }
            )
            
            return response_data
            
        except Exception as e:
            # Log error with context
            self.logger.log_error(e, {
                "operation": "document_submission",
                "document_id": document_data.get("invoice_number"),
                "request_id": request_id
            })
            
            # Log business event
            self.logger.log_business_event(
                "document_submission_error",
                document_data.get("invoice_number", "unknown"),
                {"error": str(e)}
            )
            raise

# Usage Example
client = StorecoveClientWithLogging("your-api-key")

try:
    result = client.submit_document({
        "invoice_number": "INV-2024-001",
        "customer": {"name": "Acme Corp"},
        "invoice_total": 1000.00,
        "invoice_currency_code": "EUR"
    })
    print(f"Document submitted: {result['id']}")
except Exception as e:
    print(f"Submission failed: {e}")
`)])],-1)])],512),[[hn,o.activeTab==="python"]]),tt(n("div",Zp,[...e[5]||(e[5]=[n("h3",null,"Node.js Logging with Winston",-1),n("div",{class:"code-block"},[n("pre",null,[n("code",null,`const winston = require('winston');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

class StorecoveLogger {
    constructor(options = {}) {
        this.logger = winston.createLogger({
            level: options.level || 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.errors({ stack: true }),
                winston.format.json()
            ),
            transports: [
                new winston.transports.File({ 
                    filename: 'error.log', 
                    level: 'error' 
                }),
                new winston.transports.File({ 
                    filename: 'combined.log' 
                }),
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.simple()
                    )
                })
            ]
        });
    }

    logRequest(method, url, headers, payload = null, requestId = null) {
        const logData = {
            event_type: 'api_request',
            request_id: requestId || uuidv4(),
            method,
            url,
            headers: this.sanitizeHeaders(headers),
            payload_size: payload ? JSON.stringify(payload).length : 0,
            timestamp: new Date().toISOString()
        };

        if (this.logger.level === 'debug' && payload) {
            logData.payload = payload;
        }

        this.logger.info('API Request', logData);
        return logData.request_id;
    }

    logResponse(requestId, statusCode, responseTime, responseData = null) {
        const logData = {
            event_type: 'api_response',
            request_id: requestId,
            status_code: statusCode,
            response_time_ms: Math.round(responseTime),
            response_size: responseData ? JSON.stringify(responseData).length : 0,
            timestamp: new Date().toISOString()
        };

        if (this.logger.level === 'debug' && responseData) {
            logData.response_data = responseData;
        }

        if (statusCode >= 200 && statusCode < 300) {
            this.logger.info('API Response', logData);
        } else if (statusCode >= 400 && statusCode < 500) {
            this.logger.warn('API Response', logData);
        } else {
            this.logger.error('API Response', logData);
        }
    }

    logBusinessEvent(eventType, documentId, details) {
        const logData = {
            event_type: \`business.\${eventType}\`,
            document_id: documentId,
            details,
            timestamp: new Date().toISOString()
        };
        this.logger.info('Business Event', logData);
    }

    logError(error, context = {}) {
        const logData = {
            event_type: 'error',
            error_type: error.constructor.name,
            error_message: error.message,
            stack: error.stack,
            context,
            timestamp: new Date().toISOString()
        };
        this.logger.error('Error occurred', logData);
    }

    logPerformanceMetric(operation, duration, metadata = {}) {
        const logData = {
            event_type: 'performance_metric',
            operation,
            duration_ms: Math.round(duration),
            metadata,
            timestamp: new Date().toISOString()
        };
        this.logger.info('Performance Metric', logData);
    }

    sanitizeHeaders(headers) {
        const sanitized = { ...headers };
        const sensitiveKeys = ['authorization', 'x-api-key', 'cookie'];
        
        Object.keys(sanitized).forEach(key => {
            if (sensitiveKeys.includes(key.toLowerCase())) {
                sanitized[key] = '[REDACTED]';
            }
        });
        
        return sanitized;
    }
}

class StorecoveClientWithLogging {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.storecove.com';
        this.logger = new StorecoveLogger();
        
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization': \`Bearer \${apiKey}\`,
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });

        // Request interceptor
        this.client.interceptors.request.use(
            (config) => {
                config.metadata = { startTime: Date.now() };
                config.requestId = this.logger.logRequest(
                    config.method.toUpperCase(),
                    \`\${this.baseURL}\${config.url}\`,
                    config.headers,
                    config.data
                );
                return config;
            },
            (error) => {
                this.logger.logError(error, { stage: 'request_setup' });
                return Promise.reject(error);
            }
        );

        // Response interceptor
        this.client.interceptors.response.use(
            (response) => {
                const responseTime = Date.now() - response.config.metadata.startTime;
                this.logger.logResponse(
                    response.config.requestId,
                    response.status,
                    responseTime,
                    response.data
                );
                return response;
            },
            (error) => {
                if (error.response) {
                    const responseTime = Date.now() - error.config.metadata.startTime;
                    this.logger.logResponse(
                        error.config.requestId,
                        error.response.status,
                        responseTime,
                        error.response.data
                    );
                } else {
                    this.logger.logError(error, {
                        request_id: error.config?.requestId,
                        stage: 'network'
                    });
                }
                return Promise.reject(error);
            }
        );
    }

    async submitDocument(documentData) {
        const operationStart = Date.now();
        const documentId = documentData.invoice_number || 'unknown';

        try {
            // Log business event
            this.logger.logBusinessEvent('document_submission_started', documentId, {
                recipient: documentData.customer?.name,
                amount: documentData.invoice_total,
                currency: documentData.invoice_currency_code
            });

            const response = await this.client.post('/api/v2/document_submissions', documentData);

            // Log successful business event
            this.logger.logBusinessEvent('document_submission_succeeded', documentId, {
                submission_id: response.data.id,
                response_time_ms: Date.now() - operationStart
            });

            // Log performance metric
            this.logger.logPerformanceMetric('document_submission', Date.now() - operationStart, {
                status_code: response.status,
                document_size: JSON.stringify(documentData).length
            });

            return response.data;

        } catch (error) {
            // Log business failure
            this.logger.logBusinessEvent('document_submission_failed', documentId, {
                error: error.message,
                status_code: error.response?.status
            });

            // Log error with context
            this.logger.logError(error, {
                operation: 'document_submission',
                document_id: documentId
            });

            throw error;
        }
    }
}

// Usage
const client = new StorecoveClientWithLogging('your-api-key');

client.submitDocument({
    invoice_number: 'INV-2024-001',
    customer: { name: 'Acme Corp' },
    invoice_total: 1000.00,
    invoice_currency_code: 'EUR'
}).then(result => {
    console.log(\`Document submitted: \${result.id}\`);
}).catch(error => {
    console.error(\`Submission failed: \${error.message}\`);
});
`)])],-1)])],512),[[hn,o.activeTab==="nodejs"]]),tt(n("div",ef,[...e[6]||(e[6]=[n("h3",null,"Java Logging with SLF4J and Logback",-1),n("div",{class:"code-block"},[n("pre",null,[n("code",null,`import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.time.Instant;
import java.util.Map;
import java.util.UUID;

public class StorecoveLogger {
    private final Logger logger;
    private final ObjectMapper objectMapper;
    
    public StorecoveLogger(String name) {
        this.logger = LoggerFactory.getLogger(name);
        this.objectMapper = new ObjectMapper();
    }
    
    public String logRequest(String method, String url, Map<String, String> headers, 
                           Object payload) {
        String requestId = UUID.randomUUID().toString();
        
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "api_request");
            logData.put("request_id", requestId);
            logData.put("method", method);
            logData.put("url", url);
            logData.set("headers", objectMapper.valueToTree(sanitizeHeaders(headers)));
            logData.put("payload_size", payload != null ? 
                objectMapper.writeValueAsString(payload).length() : 0);
            logData.put("timestamp", Instant.now().toString());
            
            // Set MDC for request correlation
            MDC.put("request_id", requestId);
            
            logger.info("API Request: {}", logData.toString());
            
        } catch (Exception e) {
            logger.error("Failed to log request", e);
        }
        
        return requestId;
    }
    
    public void logResponse(String requestId, int statusCode, long responseTimeMs, 
                          Object responseData) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "api_response");
            logData.put("request_id", requestId);
            logData.put("status_code", statusCode);
            logData.put("response_time_ms", responseTimeMs);
            logData.put("response_size", responseData != null ? 
                objectMapper.writeValueAsString(responseData).length() : 0);
            logData.put("timestamp", Instant.now().toString());
            
            // Set MDC for correlation
            MDC.put("request_id", requestId);
            
            if (statusCode >= 200 && statusCode < 300) {
                logger.info("API Response: {}", logData.toString());
            } else if (statusCode >= 400 && statusCode < 500) {
                logger.warn("API Response: {}", logData.toString());
            } else {
                logger.error("API Response: {}", logData.toString());
            }
            
        } catch (Exception e) {
            logger.error("Failed to log response", e);
        } finally {
            MDC.clear();
        }
    }
    
    public void logBusinessEvent(String eventType, String documentId, Map<String, Object> details) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "business." + eventType);
            logData.put("document_id", documentId);
            logData.set("details", objectMapper.valueToTree(details));
            logData.put("timestamp", Instant.now().toString());
            
            MDC.put("document_id", documentId);
            logger.info("Business Event: {}", logData.toString());
            
        } catch (Exception e) {
            logger.error("Failed to log business event", e);
        } finally {
            MDC.clear();
        }
    }
    
    public void logError(Exception error, Map<String, Object> context) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "error");
            logData.put("error_type", error.getClass().getSimpleName());
            logData.put("error_message", error.getMessage());
            logData.set("context", objectMapper.valueToTree(context));
            logData.put("timestamp", Instant.now().toString());
            
            // Add context to MDC
            context.forEach((key, value) -> 
                MDC.put(key, value != null ? value.toString() : null));
            
            logger.error("Error occurred: {}", logData.toString(), error);
            
        } catch (Exception e) {
            logger.error("Failed to log error", e);
        } finally {
            MDC.clear();
        }
    }
    
    public void logPerformanceMetric(String operation, long durationMs, 
                                   Map<String, Object> metadata) {
        try {
            ObjectNode logData = objectMapper.createObjectNode();
            logData.put("event_type", "performance_metric");
            logData.put("operation", operation);
            logData.put("duration_ms", durationMs);
            logData.set("metadata", objectMapper.valueToTree(metadata));
            logData.put("timestamp", Instant.now().toString());
            
            logger.info("Performance Metric: {}", logData.toString());
            
        } catch (Exception e) {
            logger.error("Failed to log performance metric", e);
        }
    }
    
    private Map<String, String> sanitizeHeaders(Map<String, String> headers) {
        Map<String, String> sanitized = new HashMap<>(headers);
        String[] sensitiveKeys = {"authorization", "x-api-key", "cookie"};
        
        for (String key : sensitiveKeys) {
            if (sanitized.containsKey(key.toLowerCase())) {
                sanitized.put(key, "[REDACTED]");
            }
        }
        
        return sanitized;
    }
}

// Client implementation with logging
public class StorecoveClientWithLogging {
    private final StorecoveLogger logger;
    private final String apiKey;
    private final String baseUrl;
    private final HttpClient httpClient;
    
    public StorecoveClientWithLogging(String apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.storecove.com";
        this.logger = new StorecoveLogger("StorecoveClient");
        this.httpClient = HttpClient.newHttpClient();
    }
    
    public DocumentSubmissionResponse submitDocument(DocumentSubmissionRequest document) 
            throws StorecoveException {
        long operationStart = System.currentTimeMillis();
        String documentId = document.getInvoiceNumber();
        
        try {
            // Log business event
            Map<String, Object> details = Map.of(
                "recipient", document.getCustomer().getName(),
                "amount", document.getInvoiceTotal(),
                "currency", document.getInvoiceCurrencyCode()
            );
            logger.logBusinessEvent("document_submission_started", documentId, details);
            
            // Prepare request
            String requestBody = objectMapper.writeValueAsString(document);
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "/api/v2/document_submissions"))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();
            
            // Log request
            String requestId = logger.logRequest("POST", request.uri().toString(), 
                Map.of("Authorization", "[REDACTED]", "Content-Type", "application/json"),
                document);
            
            // Make request
            long requestStart = System.currentTimeMillis();
            HttpResponse<String> response = httpClient.send(request, 
                HttpResponse.BodyHandlers.ofString());
            long responseTime = System.currentTimeMillis() - requestStart;
            
            // Parse response
            DocumentSubmissionResponse responseData = null;
            if (!response.body().isEmpty()) {
                responseData = objectMapper.readValue(response.body(), 
                    DocumentSubmissionResponse.class);
            }
            
            // Log response
            logger.logResponse(requestId, response.statusCode(), responseTime, responseData);
            
            // Log business outcome
            if (response.statusCode() >= 200 && response.statusCode() < 300) {
                Map<String, Object> successDetails = Map.of(
                    "submission_id", responseData.getId(),
                    "response_time_ms", responseTime
                );
                logger.logBusinessEvent("document_submission_succeeded", documentId, successDetails);
            } else {
                Map<String, Object> failureDetails = Map.of(
                    "status_code", response.statusCode(),
                    "error", response.body()
                );
                logger.logBusinessEvent("document_submission_failed", documentId, failureDetails);
                throw new StorecoveException("API call failed: " + response.statusCode());
            }
            
            // Log performance
            long operationTime = System.currentTimeMillis() - operationStart;
            Map<String, Object> perfMetadata = Map.of(
                "status_code", response.statusCode(),
                "document_size", requestBody.length()
            );
            logger.logPerformanceMetric("document_submission", operationTime, perfMetadata);
            
            return responseData;
            
        } catch (Exception e) {
            // Log error
            Map<String, Object> errorContext = Map.of(
                "operation", "document_submission",
                "document_id", documentId
            );
            logger.logError(e, errorContext);
            
            // Log business failure
            logger.logBusinessEvent("document_submission_error", documentId, 
                Map.of("error", e.getMessage()));
            
            throw new StorecoveException("Document submission failed", e);
        }
    }
}
`)])],-1)])],512),[[hn,o.activeTab==="java"]]),tt(n("div",tf,[...e[7]||(e[7]=[n("h3",null,"C# Logging with Serilog",-1),n("div",{class:"code-block"},[n("pre",null,[n("code",null,`using Serilog;
using Serilog.Context;
using System.Text.Json;
using System.Diagnostics;

public class StorecoveLogger
{
    private readonly ILogger _logger;
    
    public StorecoveLogger()
    {
        _logger = new LoggerConfiguration()
            .WriteTo.Console(formatter: new JsonFormatter())
            .WriteTo.File("logs/storecove-.log", 
                rollingInterval: RollingInterval.Day,
                formatter: new JsonFormatter())
            .Enrich.FromLogContext()
            .CreateLogger();
    }
    
    public string LogRequest(string method, string url, 
        Dictionary<string, string> headers, object payload = null)
    {
        var requestId = Guid.NewGuid().ToString();
        
        var logData = new
        {
            EventType = "api_request",
            RequestId = requestId,
            Method = method,
            Url = url,
            Headers = SanitizeHeaders(headers),
            PayloadSize = payload != null ? JsonSerializer.Serialize(payload).Length : 0,
            Timestamp = DateTime.UtcNow
        };
        
        using (LogContext.PushProperty("RequestId", requestId))
        {
            _logger.Information("API Request {@LogData}", logData);
        }
        
        return requestId;
    }
    
    public void LogResponse(string requestId, int statusCode, 
        long responseTimeMs, object responseData = null)
    {
        var logData = new
        {
            EventType = "api_response",
            RequestId = requestId,
            StatusCode = statusCode,
            ResponseTimeMs = responseTimeMs,
            ResponseSize = responseData != null ? 
                JsonSerializer.Serialize(responseData).Length : 0,
            Timestamp = DateTime.UtcNow
        };
        
        using (LogContext.PushProperty("RequestId", requestId))
        {
            if (statusCode >= 200 && statusCode < 300)
                _logger.Information("API Response {@LogData}", logData);
            else if (statusCode >= 400 && statusCode < 500)
                _logger.Warning("API Response {@LogData}", logData);
            else
                _logger.Error("API Response {@LogData}", logData);
        }
    }
    
    public void LogBusinessEvent(string eventType, string documentId, 
        Dictionary<string, object> details)
    {
        var logData = new
        {
            EventType = $"business.{eventType}",
            DocumentId = documentId,
            Details = details,
            Timestamp = DateTime.UtcNow
        };
        
        using (LogContext.PushProperty("DocumentId", documentId))
        {
            _logger.Information("Business Event {@LogData}", logData);
        }
    }
    
    public void LogError(Exception exception, Dictionary<string, object> context = null)
    {
        var logData = new
        {
            EventType = "error",
            ErrorType = exception.GetType().Name,
            ErrorMessage = exception.Message,
            Context = context ?? new Dictionary<string, object>(),
            Timestamp = DateTime.UtcNow
        };
        
        foreach (var item in context ?? new Dictionary<string, object>())
        {
            LogContext.PushProperty(item.Key, item.Value);
        }
        
        _logger.Error(exception, "Error occurred {@LogData}", logData);
    }
    
    public void LogPerformanceMetric(string operation, long durationMs, 
        Dictionary<string, object> metadata = null)
    {
        var logData = new
        {
            EventType = "performance_metric",
            Operation = operation,
            DurationMs = durationMs,
            Metadata = metadata ?? new Dictionary<string, object>(),
            Timestamp = DateTime.UtcNow
        };
        
        _logger.Information("Performance Metric {@LogData}", logData);
    }
    
    private Dictionary<string, string> SanitizeHeaders(Dictionary<string, string> headers)
    {
        var sanitized = new Dictionary<string, string>(headers);
        var sensitiveKeys = new[] { "authorization", "x-api-key", "cookie" };
        
        foreach (var key in sensitiveKeys)
        {
            if (sanitized.ContainsKey(key))
                sanitized[key] = "[REDACTED]";
        }
        
        return sanitized;
    }
}

public class StorecoveClientWithLogging
{
    private readonly HttpClient _httpClient;
    private readonly StorecoveLogger _logger;
    private readonly string _baseUrl;
    
    public StorecoveClientWithLogging(string apiKey)
    {
        _baseUrl = "https://api.storecove.com";
        _logger = new StorecoveLogger();
        
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        _httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");
    }
    
    public async Task<DocumentSubmissionResponse> SubmitDocumentAsync(
        DocumentSubmissionRequest document)
    {
        var operationStart = Stopwatch.StartNew();
        var documentId = document.InvoiceNumber ?? "unknown";
        
        try
        {
            // Log business event
            var details = new Dictionary<string, object>
            {
                ["recipient"] = document.Customer?.Name,
                ["amount"] = document.InvoiceTotal,
                ["currency"] = document.InvoiceCurrencyCode
            };
            _logger.LogBusinessEvent("document_submission_started", documentId, details);
            
            // Prepare request
            var requestBody = JsonSerializer.Serialize(document);
            var content = new StringContent(requestBody, Encoding.UTF8, "application/json");
            
            // Log request
            var requestId = _logger.LogRequest("POST", 
                $"{_baseUrl}/api/v2/document_submissions",
                new Dictionary<string, string> 
                { 
                    ["Authorization"] = "[REDACTED]",
                    ["Content-Type"] = "application/json"
                },
                document);
            
            // Make request
            var requestStart = Stopwatch.StartNew();
            var response = await _httpClient.PostAsync("/api/v2/document_submissions", content);
            var responseTime = requestStart.ElapsedMilliseconds;
            
            // Parse response
            var responseContent = await response.Content.ReadAsStringAsync();
            DocumentSubmissionResponse responseData = null;
            
            if (!string.IsNullOrEmpty(responseContent))
            {
                responseData = JsonSerializer.Deserialize<DocumentSubmissionResponse>(responseContent);
            }
            
            // Log response
            _logger.LogResponse(requestId, (int)response.StatusCode, responseTime, responseData);
            
            // Log business outcome
            if (response.IsSuccessStatusCode)
            {
                var successDetails = new Dictionary<string, object>
                {
                    ["submission_id"] = responseData?.Id,
                    ["response_time_ms"] = responseTime
                };
                _logger.LogBusinessEvent("document_submission_succeeded", documentId, successDetails);
            }
            else
            {
                var failureDetails = new Dictionary<string, object>
                {
                    ["status_code"] = (int)response.StatusCode,
                    ["error"] = responseContent
                };
                _logger.LogBusinessEvent("document_submission_failed", documentId, failureDetails);
                
                throw new StorecoveException($"API call failed: {response.StatusCode}");
            }
            
            // Log performance
            var perfMetadata = new Dictionary<string, object>
            {
                ["status_code"] = (int)response.StatusCode,
                ["document_size"] = requestBody.Length
            };
            _logger.LogPerformanceMetric("document_submission", 
                operationStart.ElapsedMilliseconds, perfMetadata);
            
            return responseData;
            
        }
        catch (Exception ex)
        {
            // Log error
            var errorContext = new Dictionary<string, object>
            {
                ["operation"] = "document_submission",
                ["document_id"] = documentId
            };
            _logger.LogError(ex, errorContext);
            
            // Log business failure
            _logger.LogBusinessEvent("document_submission_error", documentId,
                new Dictionary<string, object> { ["error"] = ex.Message });
            
            throw;
        }
    }
}
`)])],-1)])],512),[[hn,o.activeTab==="csharp"]])])])])]),e[11]||(e[11]=G(`<section class="content-section bg-light" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Log Analysis &amp; Monitoring</h2><p data-v-11a65d00>Tools and techniques for effective log analysis and monitoring</p></div><div class="analysis-grid" data-v-11a65d00><div class="analysis-card" data-v-11a65d00><h3 data-v-11a65d00>🔍 ELK Stack Integration</h3><p data-v-11a65d00>Elasticsearch, Logstash, and Kibana for powerful log analysis</p><div class="analysis-features" data-v-11a65d00><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Elasticsearch:</strong> Store and index structured logs </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Logstash:</strong> Parse and transform log data </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Kibana:</strong> Visualize and explore log data </div></div><div class="config-example" data-v-11a65d00><h4 data-v-11a65d00>Logstash Configuration:</h4><div class="code-block small" data-v-11a65d00><pre data-v-11a65d00><code data-v-11a65d00>input {
  file {
    path =&gt; &quot;/var/log/storecove/*.log&quot;
    start_position =&gt; &quot;beginning&quot;
    codec =&gt; &quot;json&quot;
  }
}

filter {
  if [event_type] == &quot;api_request&quot; {
    mutate {
      add_tag =&gt; [&quot;api&quot;, &quot;request&quot;]
    }
  }
  
  if [event_type] == &quot;api_response&quot; {
    mutate {
      add_tag =&gt; [&quot;api&quot;, &quot;response&quot;]
    }
    
    if [status_code] &gt;= 400 {
      mutate {
        add_tag =&gt; [&quot;error&quot;]
      }
    }
  }
}

output {
  elasticsearch {
    hosts =&gt; [&quot;localhost:9200&quot;]
    index =&gt; &quot;storecove-logs-%{+YYYY.MM.dd}&quot;
  }
}</code></pre></div></div></div><div class="analysis-card" data-v-11a65d00><h3 data-v-11a65d00>📊 Metrics &amp; Alerting</h3><p data-v-11a65d00>Key metrics to monitor and alert configurations</p><div class="metrics-list" data-v-11a65d00><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Success Rate</h4><p data-v-11a65d00>Alert when below 95% over 5 minutes</p></div><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Response Time</h4><p data-v-11a65d00>Alert when p95 &gt; 5 seconds</p></div><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Error Rate</h4><p data-v-11a65d00>Alert when &gt; 5% over 1 minute</p></div><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Webhook Failures</h4><p data-v-11a65d00>Alert on any webhook delivery failure</p></div></div></div><div class="analysis-card" data-v-11a65d00><h3 data-v-11a65d00>📈 Performance Monitoring</h3><p data-v-11a65d00>Application Performance Monitoring (APM) integration</p><div class="apm-features" data-v-11a65d00><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Request Tracing:</strong> End-to-end request flow </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Error Tracking:</strong> Automatic error detection </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Performance Insights:</strong> Bottleneck identification </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Business Metrics:</strong> Custom KPI tracking </div></div></div></div></div></section><section class="content-section" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Logging Best Practices</h2><p data-v-11a65d00>Industry-standard practices for effective API logging</p></div><div class="practices-grid" data-v-11a65d00><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>🔒</div><h3 data-v-11a65d00>Security &amp; Privacy</h3><ul data-v-11a65d00><li data-v-11a65d00>Never log sensitive data (passwords, API keys, PII)</li><li data-v-11a65d00>Sanitize or mask personal information</li><li data-v-11a65d00>Use secure log transmission (TLS)</li><li data-v-11a65d00>Implement log retention policies</li><li data-v-11a65d00>Encrypt logs at rest</li></ul></div><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>⚡</div><h3 data-v-11a65d00>Performance</h3><ul data-v-11a65d00><li data-v-11a65d00>Use asynchronous logging to avoid blocking</li><li data-v-11a65d00>Implement log level filtering</li><li data-v-11a65d00>Use structured JSON logging</li><li data-v-11a65d00>Batch log writes when possible</li><li data-v-11a65d00>Monitor log volume and performance impact</li></ul></div><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>🎯</div><h3 data-v-11a65d00>Correlation &amp; Context</h3><ul data-v-11a65d00><li data-v-11a65d00>Use unique request IDs for correlation</li><li data-v-11a65d00>Include business context (document ID, customer)</li><li data-v-11a65d00>Add timestamp and timezone information</li><li data-v-11a65d00>Maintain consistent log format</li><li data-v-11a65d00>Include environment and version info</li></ul></div><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>📊</div><h3 data-v-11a65d00>Monitoring &amp; Alerting</h3><ul data-v-11a65d00><li data-v-11a65d00>Set up real-time error alerting</li><li data-v-11a65d00>Monitor key business metrics</li><li data-v-11a65d00>Create operational dashboards</li><li data-v-11a65d00>Implement log-based SLA monitoring</li><li data-v-11a65d00>Use log aggregation tools</li></ul></div></div></div></section>`,2)),n("section",nf,[n("div",af,[L(r,{to:"/",class:"back-link"},{default:F(()=>[...e[9]||(e[9]=[V(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const of=De(Wp,[["render",sf],["__scopeId","data-v-11a65d00"]]),rf=[{path:"/",name:"Home",component:dl},{path:"/integration-basics-faq",name:"IntegrationBasicsFAQ",component:yl},{path:"/getting-started-webinar",name:"GettingStartedWebinar",component:Jl},{path:"/platform-plugins",name:"PlatformPlugins",component:$u},{path:"/sdk-libraries",name:"SDKLibraries",component:Uu},{path:"/implementation-guide",name:"ImplementationGuide",component:tv},{path:"/sample-code",name:"SampleCode",component:uv},{path:"/sandbox-testing",name:"SandboxTesting",component:Zv},{path:"/webhook-testing",name:"WebhookTesting",component:Pp},{path:"/developer-dashboard",name:"DeveloperDashboard",component:jp},{path:"/error-handling",name:"ErrorHandling",component:Vp},{path:"/api-logs",name:"APILogs",component:of}],cf=Hd({history:hd(),routes:rf});$c(Uc).use(cf).mount("#app");
