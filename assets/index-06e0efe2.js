(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ss(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ee={},Dt=[],Le=()=>{},Wa=()=>!1,$n=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xs=e=>e.startsWith("onUpdate:"),ue=Object.assign,Es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},li=Object.prototype.hasOwnProperty,Q=(e,t)=>li.call(e,t),N=Array.isArray,Pt=e=>ln(e)==="[object Map]",jn=e=>ln(e)==="[object Set]",Ys=e=>ln(e)==="[object Date]",U=e=>typeof e=="function",ce=e=>typeof e=="string",Ke=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",Va=e=>(se(e)||U(e))&&U(e.then)&&U(e.catch),Ka=Object.prototype.toString,ln=e=>Ka.call(e),ui=e=>ln(e).slice(8,-1),za=e=>ln(e)==="[object Object]",Cs=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kt=Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fi=/-\w/g,De=Nn(e=>e.replace(fi,t=>t.slice(1).toUpperCase())),vi=/\B([A-Z])/g,gt=Nn(e=>e.replace(vi,"-$1").toLowerCase()),Fn=Nn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=Nn(e=>e?`on${Fn(e)}`:""),vt=(e,t)=>!Object.is(e,t),_n=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ga=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},xn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Js;const Un=()=>Js||(Js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Is(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],a=ce(s)?hi(s):Is(s);if(a)for(const o in a)t[o]=a[o]}return t}else if(ce(e)||se(e))return e}const pi=/;(?![^(]*\))/g,gi=/:([^]+)/,mi=/\/\*[^]*?\*\//g;function hi(e){const t={};return e.replace(mi,"").split(pi).forEach(n=>{if(n){const s=n.split(gi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ds(e){let t="";if(ce(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const s=Ds(e[n]);s&&(t+=s+" ")}else if(se(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_i=Ss(bi);function Qa(e){return!!e||e===""}function yi(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=Bn(e[s],t[s]);return n}function Bn(e,t){if(e===t)return!0;let n=Ys(e),s=Ys(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Ke(e),s=Ke(t),n||s)return e===t;if(n=N(e),s=N(t),n||s)return n&&s?yi(e,t):!1;if(n=se(e),s=se(t),n||s){if(!n||!s)return!1;const a=Object.keys(e).length,o=Object.keys(t).length;if(a!==o)return!1;for(const i in e){const c=e.hasOwnProperty(i),d=t.hasOwnProperty(i);if(c&&!d||!c&&d||!Bn(e[i],t[i]))return!1}}return String(e)===String(t)}function wi(e,t){return e.findIndex(n=>Bn(n,t))}const Ya=e=>!!(e&&e.__v_isRef===!0),Ja=e=>ce(e)?e:e==null?"":N(e)||se(e)&&(e.toString===Ka||!U(e.toString))?Ya(e)?Ja(e.value):JSON.stringify(e,Xa,2):String(e),Xa=(e,t)=>Ya(t)?Xa(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,a],o)=>(n[Jn(s,o)+" =>"]=a,n),{})}:jn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Jn(n))}:Ke(t)?Jn(t):se(t)&&!N(t)&&!za(t)?String(t):t,Jn=(e,t="")=>{var n;return Ke(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qe;class qi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qe,!t&&qe&&(this.index=(qe.scopes||(qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=qe;try{return qe=this,t()}finally{qe=n}}}on(){++this._on===1&&(this.prevScope=qe,qe=this)}off(){this._on>0&&--this._on===0&&(qe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function ki(){return qe}let ne;const Xn=new WeakSet;class Za{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qe&&qe.active&&qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xn.has(this)&&(Xn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||to(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xs(this),no(this);const t=ne,n=Me;ne=this,Me=!0;try{return this.fn()}finally{so(this),ne=t,Me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ts(t);this.deps=this.depsTail=void 0,Xs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ds(this)&&this.run()}get dirty(){return ds(this)}}let eo=0,zt,Gt;function to(e,t=!1){if(e.flags|=8,t){e.next=Gt,Gt=e;return}e.next=zt,zt=e}function Ps(){eo++}function Rs(){if(--eo>0)return;if(Gt){let t=Gt;for(Gt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;zt;){let t=zt;for(zt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function no(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function so(e){let t,n=e.depsTail,s=n;for(;s;){const a=s.prevDep;s.version===-1?(s===n&&(n=a),Ts(s),Si(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=a}e.deps=t,e.depsTail=n}function ds(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ao(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ao(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===nn)||(e.globalVersion=nn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ds(e))))return;e.flags|=2;const t=e.dep,n=ne,s=Me;ne=e,Me=!0;try{no(e);const a=e.fn(e._value);(t.version===0||vt(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{ne=n,Me=s,so(e),e.flags&=-3}}function Ts(e,t=!1){const{dep:n,prevSub:s,nextSub:a}=e;if(s&&(s.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ts(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Si(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Me=!0;const oo=[];function st(){oo.push(Me),Me=!1}function at(){const e=oo.pop();Me=e===void 0?!0:e}function Xs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ne;ne=void 0;try{t()}finally{ne=n}}}let nn=0;class xi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class As{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!Me||ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ne)n=this.activeLink=new xi(ne,this),ne.deps?(n.prevDep=ne.depsTail,ne.depsTail.nextDep=n,ne.depsTail=n):ne.deps=ne.depsTail=n,io(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ne.depsTail,n.nextDep=void 0,ne.depsTail.nextDep=n,ne.depsTail=n,ne.deps===n&&(ne.deps=s)}return n}trigger(t){this.version++,nn++,this.notify(t)}notify(t){Ps();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rs()}}}function io(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)io(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ls=new WeakMap,wt=Symbol(""),us=Symbol(""),sn=Symbol("");function pe(e,t,n){if(Me&&ne){let s=ls.get(e);s||ls.set(e,s=new Map);let a=s.get(n);a||(s.set(n,a=new As),a.map=s,a.key=n),a.track()}}function Ze(e,t,n,s,a,o){const i=ls.get(e);if(!i){nn++;return}const c=d=>{d&&d.trigger()};if(Ps(),t==="clear")i.forEach(c);else{const d=N(e),p=d&&Cs(n);if(d&&n==="length"){const f=Number(s);i.forEach((v,m)=>{(m==="length"||m===sn||!Ke(m)&&m>=f)&&c(v)})}else switch((n!==void 0||i.has(void 0))&&c(i.get(n)),p&&c(i.get(sn)),t){case"add":d?p&&c(i.get("length")):(c(i.get(wt)),Pt(e)&&c(i.get(us)));break;case"delete":d||(c(i.get(wt)),Pt(e)&&c(i.get(us)));break;case"set":Pt(e)&&c(i.get(wt));break}}Rs()}function Et(e){const t=G(e);return t===e?t:(pe(t,"iterate",sn),Oe(e)?t:t.map(be))}function Ls(e){return pe(e=G(e),"iterate",sn),e}const Ei={__proto__:null,[Symbol.iterator](){return Zn(this,Symbol.iterator,be)},concat(...e){return Et(this).concat(...e.map(t=>N(t)?Et(t):t))},entries(){return Zn(this,"entries",e=>(e[1]=be(e[1]),e))},every(e,t){return Qe(this,"every",e,t,void 0,arguments)},filter(e,t){return Qe(this,"filter",e,t,n=>n.map(be),arguments)},find(e,t){return Qe(this,"find",e,t,be,arguments)},findIndex(e,t){return Qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Qe(this,"findLast",e,t,be,arguments)},findLastIndex(e,t){return Qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return es(this,"includes",e)},indexOf(...e){return es(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return es(this,"lastIndexOf",e)},map(e,t){return Qe(this,"map",e,t,void 0,arguments)},pop(){return Ut(this,"pop")},push(...e){return Ut(this,"push",e)},reduce(e,...t){return Zs(this,"reduce",e,t)},reduceRight(e,...t){return Zs(this,"reduceRight",e,t)},shift(){return Ut(this,"shift")},some(e,t){return Qe(this,"some",e,t,void 0,arguments)},splice(...e){return Ut(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return Ut(this,"unshift",e)},values(){return Zn(this,"values",be)}};function Zn(e,t,n){const s=Ls(e),a=s[t]();return s!==e&&!Oe(e)&&(a._next=a.next,a.next=()=>{const o=a._next();return o.done||(o.value=n(o.value)),o}),a}const Ci=Array.prototype;function Qe(e,t,n,s,a,o){const i=Ls(e),c=i!==e&&!Oe(e),d=i[t];if(d!==Ci[t]){const v=d.apply(e,o);return c?be(v):v}let p=n;i!==e&&(c?p=function(v,m){return n.call(this,be(v),m,e)}:n.length>2&&(p=function(v,m){return n.call(this,v,m,e)}));const f=d.call(i,p,s);return c&&a?a(f):f}function Zs(e,t,n,s){const a=Ls(e);let o=n;return a!==e&&(Oe(e)?n.length>3&&(o=function(i,c,d){return n.call(this,i,c,d,e)}):o=function(i,c,d){return n.call(this,i,be(c),d,e)}),a[t](o,...s)}function es(e,t,n){const s=G(e);pe(s,"iterate",sn);const a=s[t](...n);return(a===-1||a===!1)&&$s(n[0])?(n[0]=G(n[0]),s[t](...n)):a}function Ut(e,t,n=[]){st(),Ps();const s=G(e)[t].apply(e,n);return Rs(),at(),s}const Ii=Ss("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ke));function Di(e){Ke(e)||(e=String(e));const t=G(this);return pe(t,"has",e),t.hasOwnProperty(e)}class co{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const a=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(a?o?Ni:vo:o?fo:uo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=N(t);if(!a){let d;if(i&&(d=Ei[n]))return d;if(n==="hasOwnProperty")return Di}const c=Reflect.get(t,n,me(t)?t:s);if((Ke(n)?ro.has(n):Ii(n))||(a||pe(t,"get",n),o))return c;if(me(c)){const d=i&&Cs(n)?c:c.value;return a&&se(d)?vs(d):d}return se(c)?a?vs(c):Hn(c):c}}class lo extends co{constructor(t=!1){super(!1,t)}set(t,n,s,a){let o=t[n];if(!this._isShallow){const d=qt(o);if(!Oe(s)&&!qt(s)&&(o=G(o),s=G(s)),!N(t)&&me(o)&&!me(s))return d||(o.value=s),!0}const i=N(t)&&Cs(n)?Number(n)<t.length:Q(t,n),c=Reflect.set(t,n,s,me(t)?t:a);return t===G(a)&&(i?vt(s,o)&&Ze(t,"set",n,s):Ze(t,"add",n,s)),c}deleteProperty(t,n){const s=Q(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&s&&Ze(t,"delete",n,void 0),a}has(t,n){const s=Reflect.has(t,n);return(!Ke(n)||!ro.has(n))&&pe(t,"has",n),s}ownKeys(t){return pe(t,"iterate",N(t)?"length":wt),Reflect.ownKeys(t)}}class Pi extends co{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ri=new lo,Ti=new Pi,Ai=new lo(!0);const fs=e=>e,pn=e=>Reflect.getPrototypeOf(e);function Li(e,t,n){return function(...s){const a=this.__v_raw,o=G(a),i=Pt(o),c=e==="entries"||e===Symbol.iterator&&i,d=e==="keys"&&i,p=a[e](...s),f=n?fs:t?ps:be;return!t&&pe(o,"iterate",d?us:wt),{next(){const{value:v,done:m}=p.next();return m?{value:v,done:m}:{value:c?[f(v[0]),f(v[1])]:f(v),done:m}},[Symbol.iterator](){return this}}}}function gn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Mi(e,t){const n={get(a){const o=this.__v_raw,i=G(o),c=G(a);e||(vt(a,c)&&pe(i,"get",a),pe(i,"get",c));const{has:d}=pn(i),p=t?fs:e?ps:be;if(d.call(i,a))return p(o.get(a));if(d.call(i,c))return p(o.get(c));o!==i&&o.get(a)},get size(){const a=this.__v_raw;return!e&&pe(G(a),"iterate",wt),a.size},has(a){const o=this.__v_raw,i=G(o),c=G(a);return e||(vt(a,c)&&pe(i,"has",a),pe(i,"has",c)),a===c?o.has(a):o.has(a)||o.has(c)},forEach(a,o){const i=this,c=i.__v_raw,d=G(c),p=t?fs:e?ps:be;return!e&&pe(d,"iterate",wt),c.forEach((f,v)=>a.call(o,p(f),p(v),i))}};return ue(n,e?{add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear")}:{add(a){!t&&!Oe(a)&&!qt(a)&&(a=G(a));const o=G(this);return pn(o).has.call(o,a)||(o.add(a),Ze(o,"add",a,a)),this},set(a,o){!t&&!Oe(o)&&!qt(o)&&(o=G(o));const i=G(this),{has:c,get:d}=pn(i);let p=c.call(i,a);p||(a=G(a),p=c.call(i,a));const f=d.call(i,a);return i.set(a,o),p?vt(o,f)&&Ze(i,"set",a,o):Ze(i,"add",a,o),this},delete(a){const o=G(this),{has:i,get:c}=pn(o);let d=i.call(o,a);d||(a=G(a),d=i.call(o,a)),c&&c.call(o,a);const p=o.delete(a);return d&&Ze(o,"delete",a,void 0),p},clear(){const a=G(this),o=a.size!==0,i=a.clear();return o&&Ze(a,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=Li(a,e,t)}),n}function Ms(e,t){const n=Mi(e,t);return(s,a,o)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?s:Reflect.get(Q(n,a)&&a in s?n:s,a,o)}const Oi={get:Ms(!1,!1)},$i={get:Ms(!1,!0)},ji={get:Ms(!0,!1)};const uo=new WeakMap,fo=new WeakMap,vo=new WeakMap,Ni=new WeakMap;function Fi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ui(e){return e.__v_skip||!Object.isExtensible(e)?0:Fi(ui(e))}function Hn(e){return qt(e)?e:Os(e,!1,Ri,Oi,uo)}function po(e){return Os(e,!1,Ai,$i,fo)}function vs(e){return Os(e,!0,Ti,ji,vo)}function Os(e,t,n,s,a){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Ui(e);if(o===0)return e;const i=a.get(e);if(i)return i;const c=new Proxy(e,o===2?s:n);return a.set(e,c),c}function Qt(e){return qt(e)?Qt(e.__v_raw):!!(e&&e.__v_isReactive)}function qt(e){return!!(e&&e.__v_isReadonly)}function Oe(e){return!!(e&&e.__v_isShallow)}function $s(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Bi(e){return!Q(e,"__v_skip")&&Object.isExtensible(e)&&Ga(e,"__v_skip",!0),e}const be=e=>se(e)?Hn(e):e,ps=e=>se(e)?vs(e):e;function me(e){return e?e.__v_isRef===!0:!1}function Hi(e){return go(e,!1)}function Wi(e){return go(e,!0)}function go(e,t){return me(e)?e:new Vi(e,t)}class Vi{constructor(t,n){this.dep=new As,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:G(t),this._value=n?t:be(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Oe(t)||qt(t);t=s?t:G(t),vt(t,n)&&(this._rawValue=t,this._value=s?t:be(t),this.dep.trigger())}}function Rt(e){return me(e)?e.value:e}const Ki={get:(e,t,n)=>t==="__v_raw"?e:Rt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const a=e[t];return me(a)&&!me(n)?(a.value=n,!0):Reflect.set(e,t,n,s)}};function mo(e){return Qt(e)?e:new Proxy(e,Ki)}class zi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new As(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=nn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return to(this,!0),!0}get value(){const t=this.dep.track();return ao(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Gi(e,t,n=!1){let s,a;return U(e)?s=e:(s=e.get,a=e.set),new zi(s,a,n)}const mn={},En=new WeakMap;let _t;function Qi(e,t=!1,n=_t){if(n){let s=En.get(n);s||En.set(n,s=[]),s.push(e)}}function Yi(e,t,n=ee){const{immediate:s,deep:a,once:o,scheduler:i,augmentJob:c,call:d}=n,p=A=>a?A:Oe(A)||a===!1||a===0?et(A,1):et(A);let f,v,m,h,I=!1,P=!1;if(me(e)?(v=()=>e.value,I=Oe(e)):Qt(e)?(v=()=>p(e),I=!0):N(e)?(P=!0,I=e.some(A=>Qt(A)||Oe(A)),v=()=>e.map(A=>{if(me(A))return A.value;if(Qt(A))return p(A);if(U(A))return d?d(A,2):A()})):U(e)?t?v=d?()=>d(e,2):e:v=()=>{if(m){st();try{m()}finally{at()}}const A=_t;_t=f;try{return d?d(e,3,[h]):e(h)}finally{_t=A}}:v=Le,t&&a){const A=v,X=a===!0?1/0:a;v=()=>et(A(),X)}const B=ki(),M=()=>{f.stop(),B&&B.active&&Es(B.effects,f)};if(o&&t){const A=t;t=(...X)=>{A(...X),M()}}let R=P?new Array(e.length).fill(mn):mn;const O=A=>{if(!(!(f.flags&1)||!f.dirty&&!A))if(t){const X=f.run();if(a||I||(P?X.some((fe,oe)=>vt(fe,R[oe])):vt(X,R))){m&&m();const fe=_t;_t=f;try{const oe=[X,R===mn?void 0:P&&R[0]===mn?[]:R,h];R=X,d?d(t,3,oe):t(...oe)}finally{_t=fe}}}else f.run()};return c&&c(O),f=new Za(v),f.scheduler=i?()=>i(O,!1):O,h=A=>Qi(A,!1,f),m=f.onStop=()=>{const A=En.get(f);if(A){if(d)d(A,4);else for(const X of A)X();En.delete(f)}},t?s?O(!0):R=f.run():i?i(O.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function et(e,t=1/0,n){if(t<=0||!se(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,me(e))et(e.value,t,n);else if(N(e))for(let s=0;s<e.length;s++)et(e[s],t,n);else if(jn(e)||Pt(e))e.forEach(s=>{et(s,t,n)});else if(za(e)){for(const s in e)et(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&et(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function un(e,t,n,s){try{return s?e(...s):e()}catch(a){Wn(a,t,n)}}function ze(e,t,n,s){if(U(e)){const a=un(e,t,n,s);return a&&Va(a)&&a.catch(o=>{Wn(o,t,n)}),a}if(N(e)){const a=[];for(let o=0;o<e.length;o++)a.push(ze(e[o],t,n,s));return a}}function Wn(e,t,n,s=!0){const a=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ee;if(t){let c=t.parent;const d=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let v=0;v<f.length;v++)if(f[v](e,d,p)===!1)return}c=c.parent}if(o){st(),un(o,null,10,[e,d,p]),at();return}}Ji(e,n,a,s,i)}function Ji(e,t,n,s=!0,a=!1){if(a)throw e;console.error(e)}const _e=[];let We=-1;const Tt=[];let lt=null,Ct=0;const ho=Promise.resolve();let Cn=null;function js(e){const t=Cn||ho;return e?t.then(this?e.bind(this):e):t}function Xi(e){let t=We+1,n=_e.length;for(;t<n;){const s=t+n>>>1,a=_e[s],o=an(a);o<e||o===e&&a.flags&2?t=s+1:n=s}return t}function Ns(e){if(!(e.flags&1)){const t=an(e),n=_e[_e.length-1];!n||!(e.flags&2)&&t>=an(n)?_e.push(e):_e.splice(Xi(t),0,e),e.flags|=1,bo()}}function bo(){Cn||(Cn=ho.then(yo))}function Zi(e){N(e)?Tt.push(...e):lt&&e.id===-1?lt.splice(Ct+1,0,e):e.flags&1||(Tt.push(e),e.flags|=1),bo()}function ea(e,t,n=We+1){for(;n<_e.length;n++){const s=_e[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;_e.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function _o(e){if(Tt.length){const t=[...new Set(Tt)].sort((n,s)=>an(n)-an(s));if(Tt.length=0,lt){lt.push(...t);return}for(lt=t,Ct=0;Ct<lt.length;Ct++){const n=lt[Ct];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lt=null,Ct=0}}const an=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yo(e){const t=Le;try{for(We=0;We<_e.length;We++){const n=_e[We];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),un(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;We<_e.length;We++){const n=_e[We];n&&(n.flags&=-2)}We=-1,_e.length=0,_o(),Cn=null,(_e.length||Tt.length)&&yo()}}let Ee=null,wo=null;function In(e){const t=Ee;return Ee=e,wo=e&&e.type.__scopeId||null,t}function W(e,t=Ee,n){if(!t||e._n)return e;const s=(...a)=>{s._d&&Rn(-1);const o=In(t);let i;try{i=e(...a)}finally{In(o),s._d&&Rn(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function tt(e,t){if(Ee===null)return e;const n=Gn(Ee),s=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,i,c,d=ee]=t[a];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&et(i),s.push({dir:o,instance:n,value:i,oldValue:void 0,arg:c,modifiers:d}))}return e}function ht(e,t,n,s){const a=e.dirs,o=t&&t.dirs;for(let i=0;i<a.length;i++){const c=a[i];o&&(c.oldValue=o[i].value);let d=c.dir[s];d&&(st(),ze(d,n,8,[e.el,c,e,t]),at())}}const er=Symbol("_vte"),tr=e=>e.__isTeleport,nr=Symbol("_leaveCb");function Fs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Fs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function qo(e,t){return U(e)?(()=>ue({name:e.name},t,{setup:e}))():e}function ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Dn=new WeakMap;function Yt(e,t,n,s,a=!1){if(N(e)){e.forEach((I,P)=>Yt(I,t&&(N(t)?t[P]:t),n,s,a));return}if(Jt(s)&&!a){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Yt(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Gn(s.component):s.el,i=a?null:o,{i:c,r:d}=e,p=t&&t.r,f=c.refs===ee?c.refs={}:c.refs,v=c.setupState,m=G(v),h=v===ee?Wa:I=>Q(m,I);if(p!=null&&p!==d){if(ta(t),ce(p))f[p]=null,h(p)&&(v[p]=null);else if(me(p)){p.value=null;const I=t;I.k&&(f[I.k]=null)}}if(U(d))un(d,c,12,[i,f]);else{const I=ce(d),P=me(d);if(I||P){const B=()=>{if(e.f){const M=I?h(d)?v[d]:f[d]:d.value;if(a)N(M)&&Es(M,o);else if(N(M))M.includes(o)||M.push(o);else if(I)f[d]=[o],h(d)&&(v[d]=f[d]);else{const R=[o];d.value=R,e.k&&(f[e.k]=R)}}else I?(f[d]=i,h(d)&&(v[d]=i)):P&&(d.value=i,e.k&&(f[e.k]=i))};if(i){const M=()=>{B(),Dn.delete(e)};M.id=-1,Dn.set(e,M),xe(M,n)}else ta(e),B()}}}function ta(e){const t=Dn.get(e);t&&(t.flags|=8,Dn.delete(e))}Un().requestIdleCallback;Un().cancelIdleCallback;const Jt=e=>!!e.type.__asyncLoader,So=e=>e.type.__isKeepAlive;function sr(e,t){xo(e,"a",t)}function ar(e,t){xo(e,"da",t)}function xo(e,t,n=ge){const s=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Vn(t,s,n),n){let a=n.parent;for(;a&&a.parent;)So(a.parent.vnode)&&or(s,t,n,a),a=a.parent}}function or(e,t,n,s){const a=Vn(t,e,s,!0);Eo(()=>{Es(s[t],a)},n)}function Vn(e,t,n=ge,s=!1){if(n){const a=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{st();const c=fn(n),d=ze(t,n,e,i);return c(),at(),d});return s?a.unshift(o):a.push(o),o}}const ot=e=>(t,n=ge)=>{(!rn||e==="sp")&&Vn(e,(...s)=>t(...s),n)},ir=ot("bm"),rr=ot("m"),cr=ot("bu"),dr=ot("u"),lr=ot("bum"),Eo=ot("um"),ur=ot("sp"),fr=ot("rtg"),vr=ot("rtc");function pr(e,t=ge){Vn("ec",e,t)}const Co="components";function Pe(e,t){return mr(Co,e,!0,t)||e}const gr=Symbol.for("v-ndc");function mr(e,t,n=!0,s=!1){const a=Ee||ge;if(a){const o=a.type;if(e===Co){const c=oc(o,!1);if(c&&(c===t||c===De(t)||c===Fn(De(t))))return o}const i=na(a[e]||o[e],t)||na(a.appContext[e],t);return!i&&s?o:i}}function na(e,t){return e&&(e[t]||e[De(t)]||e[Fn(De(t))])}const gs=e=>e?Ko(e)?Gn(e):gs(e.parent):null,Xt=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gs(e.parent),$root:e=>gs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Us(e),$forceUpdate:e=>e.f||(e.f=()=>{Ns(e.update)}),$nextTick:e=>e.n||(e.n=js.bind(e.proxy)),$watch:e=>$r.bind(e)}),ts=(e,t)=>e!==ee&&!e.__isScriptSetup&&Q(e,t),hr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:a,props:o,accessCache:i,type:c,appContext:d}=e;let p;if(t[0]!=="$"){const h=i[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return a[t];case 4:return n[t];case 3:return o[t]}else{if(ts(s,t))return i[t]=1,s[t];if(a!==ee&&Q(a,t))return i[t]=2,a[t];if((p=e.propsOptions[0])&&Q(p,t))return i[t]=3,o[t];if(n!==ee&&Q(n,t))return i[t]=4,n[t];ms&&(i[t]=0)}}const f=Xt[t];let v,m;if(f)return t==="$attrs"&&pe(e.attrs,"get",""),f(e);if((v=c.__cssModules)&&(v=v[t]))return v;if(n!==ee&&Q(n,t))return i[t]=4,n[t];if(m=d.config.globalProperties,Q(m,t))return m[t]},set({_:e},t,n){const{data:s,setupState:a,ctx:o}=e;return ts(a,t)?(a[t]=n,!0):s!==ee&&Q(s,t)?(s[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:a,propsOptions:o,type:i}},c){let d,p;return!!(n[c]||e!==ee&&c[0]!=="$"&&Q(e,c)||ts(t,c)||(d=o[0])&&Q(d,c)||Q(s,c)||Q(Xt,c)||Q(a.config.globalProperties,c)||(p=i.__cssModules)&&p[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function sa(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ms=!0;function br(e){const t=Us(e),n=e.proxy,s=e.ctx;ms=!1,t.beforeCreate&&aa(t.beforeCreate,e,"bc");const{data:a,computed:o,methods:i,watch:c,provide:d,inject:p,created:f,beforeMount:v,mounted:m,beforeUpdate:h,updated:I,activated:P,deactivated:B,beforeDestroy:M,beforeUnmount:R,destroyed:O,unmounted:A,render:X,renderTracked:fe,renderTriggered:oe,errorCaptured:je,serverPrefetch:it,expose:Ne,inheritAttrs:rt,components:mt,directives:Fe,filters:Nt}=t;if(p&&_r(p,s,null),i)for(const J in i){const V=i[J];U(V)&&(s[J]=V.bind(n))}if(a){const J=a.call(n,n);se(J)&&(e.data=Hn(J))}if(ms=!0,o)for(const J in o){const V=o[J],Ge=U(V)?V.bind(n,n):U(V.get)?V.get.bind(n,n):Le,ct=!U(V)&&U(V.set)?V.set.bind(n):Le,Ue=Ae({get:Ge,set:ct});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:ye=>Ue.value=ye})}if(c)for(const J in c)Io(c[J],s,n,J);if(d){const J=U(d)?d.call(n):d;Reflect.ownKeys(J).forEach(V=>{yn(V,J[V])})}f&&aa(f,e,"c");function de(J,V){N(V)?V.forEach(Ge=>J(Ge.bind(n))):V&&J(V.bind(n))}if(de(ir,v),de(rr,m),de(cr,h),de(dr,I),de(sr,P),de(ar,B),de(pr,je),de(vr,fe),de(fr,oe),de(lr,R),de(Eo,A),de(ur,it),N(Ne))if(Ne.length){const J=e.exposed||(e.exposed={});Ne.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Ge=>n[V]=Ge,enumerable:!0})})}else e.exposed||(e.exposed={});X&&e.render===Le&&(e.render=X),rt!=null&&(e.inheritAttrs=rt),mt&&(e.components=mt),Fe&&(e.directives=Fe),it&&ko(e)}function _r(e,t,n=Le){N(e)&&(e=hs(e));for(const s in e){const a=e[s];let o;se(a)?"default"in a?o=nt(a.from||s,a.default,!0):o=nt(a.from||s):o=nt(a),me(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[s]=o}}function aa(e,t,n){ze(N(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Io(e,t,n,s){let a=s.includes(".")?Uo(n,s):()=>n[s];if(ce(e)){const o=t[e];U(o)&&wn(a,o)}else if(U(e))wn(a,e.bind(n));else if(se(e))if(N(e))e.forEach(o=>Io(o,t,n,s));else{const o=U(e.handler)?e.handler.bind(n):t[e.handler];U(o)&&wn(a,o,e)}}function Us(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:a,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(t);let d;return c?d=c:!a.length&&!n&&!s?d=t:(d={},a.length&&a.forEach(p=>Pn(d,p,i,!0)),Pn(d,t,i)),se(t)&&o.set(t,d),d}function Pn(e,t,n,s=!1){const{mixins:a,extends:o}=t;o&&Pn(e,o,n,!0),a&&a.forEach(i=>Pn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const c=yr[i]||n&&n[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const yr={data:oa,props:ia,emits:ia,methods:Vt,computed:Vt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Vt,directives:Vt,watch:qr,provide:oa,inject:wr};function oa(e,t){return t?e?function(){return ue(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function wr(e,t){return Vt(hs(e),hs(t))}function hs(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?ue(Object.create(null),e,t):t}function ia(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:ue(Object.create(null),sa(e),sa(t??{})):t}function qr(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const s in t)n[s]=he(e[s],t[s]);return n}function Do(){return{app:null,config:{isNativeTag:Wa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kr=0;function Sr(e,t){return function(s,a=null){U(s)||(s=ue({},s)),a!=null&&!se(a)&&(a=null);const o=Do(),i=new WeakSet,c=[];let d=!1;const p=o.app={_uid:kr++,_component:s,_props:a,_container:null,_context:o,_instance:null,version:rc,get config(){return o.config},set config(f){},use(f,...v){return i.has(f)||(f&&U(f.install)?(i.add(f),f.install(p,...v)):U(f)&&(i.add(f),f(p,...v))),p},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),p},component(f,v){return v?(o.components[f]=v,p):o.components[f]},directive(f,v){return v?(o.directives[f]=v,p):o.directives[f]},mount(f,v,m){if(!d){const h=p._ceVNode||j(s,a);return h.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),v&&t?t(h,f):e(h,f,m),d=!0,p._container=f,f.__vue_app__=p,Gn(h.component)}},onUnmount(f){c.push(f)},unmount(){d&&(ze(c,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(f,v){return o.provides[f]=v,p},runWithContext(f){const v=At;At=p;try{return f()}finally{At=v}}};return p}}let At=null;function yn(e,t){if(ge){let n=ge.provides;const s=ge.parent&&ge.parent.provides;s===n&&(n=ge.provides=Object.create(s)),n[e]=t}}function nt(e,t,n=!1){const s=ec();if(s||At){let a=At?At._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(s&&s.proxy):t}}const Po={},Ro=()=>Object.create(Po),To=e=>Object.getPrototypeOf(e)===Po;function xr(e,t,n,s=!1){const a={},o=Ro();e.propsDefaults=Object.create(null),Ao(e,t,a,o);for(const i in e.propsOptions[0])i in a||(a[i]=void 0);n?e.props=s?a:po(a):e.type.props?e.props=a:e.props=o,e.attrs=o}function Er(e,t,n,s){const{props:a,attrs:o,vnode:{patchFlag:i}}=e,c=G(a),[d]=e.propsOptions;let p=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let v=0;v<f.length;v++){let m=f[v];if(Kn(e.emitsOptions,m))continue;const h=t[m];if(d)if(Q(o,m))h!==o[m]&&(o[m]=h,p=!0);else{const I=De(m);a[I]=bs(d,c,I,h,e,!1)}else h!==o[m]&&(o[m]=h,p=!0)}}}else{Ao(e,t,a,o)&&(p=!0);let f;for(const v in c)(!t||!Q(t,v)&&((f=gt(v))===v||!Q(t,f)))&&(d?n&&(n[v]!==void 0||n[f]!==void 0)&&(a[v]=bs(d,c,v,void 0,e,!0)):delete a[v]);if(o!==c)for(const v in o)(!t||!Q(t,v))&&(delete o[v],p=!0)}p&&Ze(e.attrs,"set","")}function Ao(e,t,n,s){const[a,o]=e.propsOptions;let i=!1,c;if(t)for(let d in t){if(Kt(d))continue;const p=t[d];let f;a&&Q(a,f=De(d))?!o||!o.includes(f)?n[f]=p:(c||(c={}))[f]=p:Kn(e.emitsOptions,d)||(!(d in s)||p!==s[d])&&(s[d]=p,i=!0)}if(o){const d=G(n),p=c||ee;for(let f=0;f<o.length;f++){const v=o[f];n[v]=bs(a,d,v,p[v],e,!Q(p,v))}}return i}function bs(e,t,n,s,a,o){const i=e[n];if(i!=null){const c=Q(i,"default");if(c&&s===void 0){const d=i.default;if(i.type!==Function&&!i.skipFactory&&U(d)){const{propsDefaults:p}=a;if(n in p)s=p[n];else{const f=fn(a);s=p[n]=d.call(null,t),f()}}else s=d;a.ce&&a.ce._setProp(n,s)}i[0]&&(o&&!c?s=!1:i[1]&&(s===""||s===gt(n))&&(s=!0))}return s}const Cr=new WeakMap;function Lo(e,t,n=!1){const s=n?Cr:t.propsCache,a=s.get(e);if(a)return a;const o=e.props,i={},c=[];let d=!1;if(!U(e)){const f=v=>{d=!0;const[m,h]=Lo(v,t,!0);ue(i,m),h&&c.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!d)return se(e)&&s.set(e,Dt),Dt;if(N(o))for(let f=0;f<o.length;f++){const v=De(o[f]);ra(v)&&(i[v]=ee)}else if(o)for(const f in o){const v=De(f);if(ra(v)){const m=o[f],h=i[v]=N(m)||U(m)?{type:m}:ue({},m),I=h.type;let P=!1,B=!0;if(N(I))for(let M=0;M<I.length;++M){const R=I[M],O=U(R)&&R.name;if(O==="Boolean"){P=!0;break}else O==="String"&&(B=!1)}else P=U(I)&&I.name==="Boolean";h[0]=P,h[1]=B,(P||Q(h,"default"))&&c.push(v)}}const p=[i,c];return se(e)&&s.set(e,p),p}function ra(e){return e[0]!=="$"&&!Kt(e)}const Bs=e=>e==="_"||e==="_ctx"||e==="$stable",Hs=e=>N(e)?e.map(Ve):[Ve(e)],Ir=(e,t,n)=>{if(t._n)return t;const s=W((...a)=>Hs(t(...a)),n);return s._c=!1,s},Mo=(e,t,n)=>{const s=e._ctx;for(const a in e){if(Bs(a))continue;const o=e[a];if(U(o))t[a]=Ir(a,o,s);else if(o!=null){const i=Hs(o);t[a]=()=>i}}},Oo=(e,t)=>{const n=Hs(t);e.slots.default=()=>n},$o=(e,t,n)=>{for(const s in t)(n||!Bs(s))&&(e[s]=t[s])},Dr=(e,t,n)=>{const s=e.slots=Ro();if(e.vnode.shapeFlag&32){const a=t._;a?($o(s,t,n),n&&Ga(s,"_",a,!0)):Mo(t,s)}else t&&Oo(e,t)},Pr=(e,t,n)=>{const{vnode:s,slots:a}=e;let o=!0,i=ee;if(s.shapeFlag&32){const c=t._;c?n&&c===1?o=!1:$o(a,t,n):(o=!t.$stable,Mo(t,a)),i=t}else t&&(Oo(e,t),i={default:1});if(o)for(const c in a)!Bs(c)&&i[c]==null&&delete a[c]},xe=Vr;function Rr(e){return Tr(e)}function Tr(e,t){const n=Un();n.__VUE__=!0;const{insert:s,remove:a,patchProp:o,createElement:i,createText:c,createComment:d,setText:p,setElementText:f,parentNode:v,nextSibling:m,setScopeId:h=Le,insertStaticContent:I}=e,P=(l,u,g,y=null,b=null,w=null,x=void 0,S=null,k=!!u.dynamicChildren)=>{if(l===u)return;l&&!Bt(l,u)&&(y=_(l),ye(l,b,w,!0),l=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:q,ref:$,shapeFlag:C}=u;switch(q){case zn:B(l,u,g,y);break;case pt:M(l,u,g,y);break;case qn:l==null&&R(u,g,y,x);break;case Xe:mt(l,u,g,y,b,w,x,S,k);break;default:C&1?X(l,u,g,y,b,w,x,S,k):C&6?Fe(l,u,g,y,b,w,x,S,k):(C&64||C&128)&&q.process(l,u,g,y,b,w,x,S,k,T)}$!=null&&b?Yt($,l&&l.ref,w,u||l,!u):$==null&&l&&l.ref!=null&&Yt(l.ref,null,w,l,!0)},B=(l,u,g,y)=>{if(l==null)s(u.el=c(u.children),g,y);else{const b=u.el=l.el;u.children!==l.children&&p(b,u.children)}},M=(l,u,g,y)=>{l==null?s(u.el=d(u.children||""),g,y):u.el=l.el},R=(l,u,g,y)=>{[l.el,l.anchor]=I(l.children,u,g,y,l.el,l.anchor)},O=({el:l,anchor:u},g,y)=>{let b;for(;l&&l!==u;)b=m(l),s(l,g,y),l=b;s(u,g,y)},A=({el:l,anchor:u})=>{let g;for(;l&&l!==u;)g=m(l),a(l),l=g;a(u)},X=(l,u,g,y,b,w,x,S,k)=>{u.type==="svg"?x="svg":u.type==="math"&&(x="mathml"),l==null?fe(u,g,y,b,w,x,S,k):it(l,u,b,w,x,S,k)},fe=(l,u,g,y,b,w,x,S)=>{let k,q;const{props:$,shapeFlag:C,transition:L,dirs:F}=l;if(k=l.el=i(l.type,w,$&&$.is,$),C&8?f(k,l.children):C&16&&je(l.children,k,null,y,b,ns(l,w),x,S),F&&ht(l,null,y,"created"),oe(k,l,l.scopeId,x,y),$){for(const te in $)te!=="value"&&!Kt(te)&&o(k,te,null,$[te],w,y);"value"in $&&o(k,"value",null,$.value,w),(q=$.onVnodeBeforeMount)&&He(q,y,l)}F&&ht(l,null,y,"beforeMount");const H=Ar(b,L);H&&L.beforeEnter(k),s(k,u,g),((q=$&&$.onVnodeMounted)||H||F)&&xe(()=>{q&&He(q,y,l),H&&L.enter(k),F&&ht(l,null,y,"mounted")},b)},oe=(l,u,g,y,b)=>{if(g&&h(l,g),y)for(let w=0;w<y.length;w++)h(l,y[w]);if(b){let w=b.subTree;if(u===w||Ho(w.type)&&(w.ssContent===u||w.ssFallback===u)){const x=b.vnode;oe(l,x,x.scopeId,x.slotScopeIds,b.parent)}}},je=(l,u,g,y,b,w,x,S,k=0)=>{for(let q=k;q<l.length;q++){const $=l[q]=S?ut(l[q]):Ve(l[q]);P(null,$,u,g,y,b,w,x,S)}},it=(l,u,g,y,b,w,x)=>{const S=u.el=l.el;let{patchFlag:k,dynamicChildren:q,dirs:$}=u;k|=l.patchFlag&16;const C=l.props||ee,L=u.props||ee;let F;if(g&&bt(g,!1),(F=L.onVnodeBeforeUpdate)&&He(F,g,u,l),$&&ht(u,l,g,"beforeUpdate"),g&&bt(g,!0),(C.innerHTML&&L.innerHTML==null||C.textContent&&L.textContent==null)&&f(S,""),q?Ne(l.dynamicChildren,q,S,g,y,ns(u,b),w):x||V(l,u,S,null,g,y,ns(u,b),w,!1),k>0){if(k&16)rt(S,C,L,g,b);else if(k&2&&C.class!==L.class&&o(S,"class",null,L.class,b),k&4&&o(S,"style",C.style,L.style,b),k&8){const H=u.dynamicProps;for(let te=0;te<H.length;te++){const Y=H[te],we=C[Y],ve=L[Y];(ve!==we||Y==="value")&&o(S,Y,we,ve,b,g)}}k&1&&l.children!==u.children&&f(S,u.children)}else!x&&q==null&&rt(S,C,L,g,b);((F=L.onVnodeUpdated)||$)&&xe(()=>{F&&He(F,g,u,l),$&&ht(u,l,g,"updated")},y)},Ne=(l,u,g,y,b,w,x)=>{for(let S=0;S<u.length;S++){const k=l[S],q=u[S],$=k.el&&(k.type===Xe||!Bt(k,q)||k.shapeFlag&198)?v(k.el):g;P(k,q,$,null,y,b,w,x,!0)}},rt=(l,u,g,y,b)=>{if(u!==g){if(u!==ee)for(const w in u)!Kt(w)&&!(w in g)&&o(l,w,u[w],null,b,y);for(const w in g){if(Kt(w))continue;const x=g[w],S=u[w];x!==S&&w!=="value"&&o(l,w,S,x,b,y)}"value"in g&&o(l,"value",u.value,g.value,b)}},mt=(l,u,g,y,b,w,x,S,k)=>{const q=u.el=l?l.el:c(""),$=u.anchor=l?l.anchor:c("");let{patchFlag:C,dynamicChildren:L,slotScopeIds:F}=u;F&&(S=S?S.concat(F):F),l==null?(s(q,g,y),s($,g,y),je(u.children||[],g,$,b,w,x,S,k)):C>0&&C&64&&L&&l.dynamicChildren?(Ne(l.dynamicChildren,L,g,b,w,x,S),(u.key!=null||b&&u===b.subTree)&&jo(l,u,!0)):V(l,u,g,$,b,w,x,S,k)},Fe=(l,u,g,y,b,w,x,S,k)=>{u.slotScopeIds=S,l==null?u.shapeFlag&512?b.ctx.activate(u,g,y,x,k):Nt(u,g,y,b,w,x,k):kt(l,u,k)},Nt=(l,u,g,y,b,w,x)=>{const S=l.component=Zr(l,y,b);if(So(l)&&(S.ctx.renderer=T),tc(S,!1,x),S.asyncDep){if(b&&b.registerDep(S,de,x),!l.el){const k=S.subTree=j(pt);M(null,k,u,g),l.placeholder=k.el}}else de(S,l,u,g,b,w,x)},kt=(l,u,g)=>{const y=u.component=l.component;if(Hr(l,u,g))if(y.asyncDep&&!y.asyncResolved){J(y,u,g);return}else y.next=u,y.update();else u.el=l.el,y.vnode=u},de=(l,u,g,y,b,w,x)=>{const S=()=>{if(l.isMounted){let{next:C,bu:L,u:F,parent:H,vnode:te}=l;{const ke=No(l);if(ke){C&&(C.el=te.el,J(l,C,x)),ke.asyncDep.then(()=>{l.isUnmounted||S()});return}}let Y=C,we;bt(l,!1),C?(C.el=te.el,J(l,C,x)):C=te,L&&_n(L),(we=C.props&&C.props.onVnodeBeforeUpdate)&&He(we,H,C,te),bt(l,!0);const ve=ss(l),Te=l.subTree;l.subTree=ve,P(Te,ve,v(Te.el),_(Te),l,b,w),C.el=ve.el,Y===null&&Wr(l,ve.el),F&&xe(F,b),(we=C.props&&C.props.onVnodeUpdated)&&xe(()=>He(we,H,C,te),b)}else{let C;const{el:L,props:F}=u,{bm:H,m:te,parent:Y,root:we,type:ve}=l,Te=Jt(u);if(bt(l,!1),H&&_n(H),!Te&&(C=F&&F.onVnodeBeforeMount)&&He(C,Y,u),bt(l,!0),L&&ae){const ke=()=>{l.subTree=ss(l),ae(L,l.subTree,l,b,null)};Te&&ve.__asyncHydrate?ve.__asyncHydrate(L,l,ke):ke()}else{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(ve);const ke=l.subTree=ss(l);P(null,ke,g,y,l,b,w),u.el=ke.el}if(te&&xe(te,b),!Te&&(C=F&&F.onVnodeMounted)){const ke=u;xe(()=>He(C,Y,ke),b)}(u.shapeFlag&256||Y&&Jt(Y.vnode)&&Y.vnode.shapeFlag&256)&&l.a&&xe(l.a,b),l.isMounted=!0,u=g=y=null}};l.scope.on();const k=l.effect=new Za(S);l.scope.off();const q=l.update=k.run.bind(k),$=l.job=k.runIfDirty.bind(k);$.i=l,$.id=l.uid,k.scheduler=()=>Ns($),bt(l,!0),q()},J=(l,u,g)=>{u.component=l;const y=l.vnode.props;l.vnode=u,l.next=null,Er(l,u.props,y,g),Pr(l,u.children,g),st(),ea(l),at()},V=(l,u,g,y,b,w,x,S,k=!1)=>{const q=l&&l.children,$=l?l.shapeFlag:0,C=u.children,{patchFlag:L,shapeFlag:F}=u;if(L>0){if(L&128){ct(q,C,g,y,b,w,x,S,k);return}else if(L&256){Ge(q,C,g,y,b,w,x,S,k);return}}F&8?($&16&&Ie(q,b,w),C!==q&&f(g,C)):$&16?F&16?ct(q,C,g,y,b,w,x,S,k):Ie(q,b,w,!0):($&8&&f(g,""),F&16&&je(C,g,y,b,w,x,S,k))},Ge=(l,u,g,y,b,w,x,S,k)=>{l=l||Dt,u=u||Dt;const q=l.length,$=u.length,C=Math.min(q,$);let L;for(L=0;L<C;L++){const F=u[L]=k?ut(u[L]):Ve(u[L]);P(l[L],F,g,null,b,w,x,S,k)}q>$?Ie(l,b,w,!0,!1,C):je(u,g,y,b,w,x,S,k,C)},ct=(l,u,g,y,b,w,x,S,k)=>{let q=0;const $=u.length;let C=l.length-1,L=$-1;for(;q<=C&&q<=L;){const F=l[q],H=u[q]=k?ut(u[q]):Ve(u[q]);if(Bt(F,H))P(F,H,g,null,b,w,x,S,k);else break;q++}for(;q<=C&&q<=L;){const F=l[C],H=u[L]=k?ut(u[L]):Ve(u[L]);if(Bt(F,H))P(F,H,g,null,b,w,x,S,k);else break;C--,L--}if(q>C){if(q<=L){const F=L+1,H=F<$?u[F].el:y;for(;q<=L;)P(null,u[q]=k?ut(u[q]):Ve(u[q]),g,H,b,w,x,S,k),q++}}else if(q>L)for(;q<=C;)ye(l[q],b,w,!0),q++;else{const F=q,H=q,te=new Map;for(q=H;q<=L;q++){const Se=u[q]=k?ut(u[q]):Ve(u[q]);Se.key!=null&&te.set(Se.key,q)}let Y,we=0;const ve=L-H+1;let Te=!1,ke=0;const Ft=new Array(ve);for(q=0;q<ve;q++)Ft[q]=0;for(q=F;q<=C;q++){const Se=l[q];if(we>=ve){ye(Se,b,w,!0);continue}let Be;if(Se.key!=null)Be=te.get(Se.key);else for(Y=H;Y<=L;Y++)if(Ft[Y-H]===0&&Bt(Se,u[Y])){Be=Y;break}Be===void 0?ye(Se,b,w,!0):(Ft[Be-H]=q+1,Be>=ke?ke=Be:Te=!0,P(Se,u[Be],g,null,b,w,x,S,k),we++)}const zs=Te?Lr(Ft):Dt;for(Y=zs.length-1,q=ve-1;q>=0;q--){const Se=H+q,Be=u[Se],Gs=u[Se+1],Qs=Se+1<$?Gs.el||Gs.placeholder:y;Ft[q]===0?P(null,Be,g,Qs,b,w,x,S,k):Te&&(Y<0||q!==zs[Y]?Ue(Be,g,Qs,2):Y--)}}},Ue=(l,u,g,y,b=null)=>{const{el:w,type:x,transition:S,children:k,shapeFlag:q}=l;if(q&6){Ue(l.component.subTree,u,g,y);return}if(q&128){l.suspense.move(u,g,y);return}if(q&64){x.move(l,u,g,T);return}if(x===Xe){s(w,u,g);for(let C=0;C<k.length;C++)Ue(k[C],u,g,y);s(l.anchor,u,g);return}if(x===qn){O(l,u,g);return}if(y!==2&&q&1&&S)if(y===0)S.beforeEnter(w),s(w,u,g),xe(()=>S.enter(w),b);else{const{leave:C,delayLeave:L,afterLeave:F}=S,H=()=>{l.ctx.isUnmounted?a(w):s(w,u,g)},te=()=>{w._isLeaving&&w[nr](!0),C(w,()=>{H(),F&&F()})};L?L(w,H,te):te()}else s(w,u,g)},ye=(l,u,g,y=!1,b=!1)=>{const{type:w,props:x,ref:S,children:k,dynamicChildren:q,shapeFlag:$,patchFlag:C,dirs:L,cacheIndex:F}=l;if(C===-2&&(b=!1),S!=null&&(st(),Yt(S,null,g,l,!0),at()),F!=null&&(u.renderCache[F]=void 0),$&256){u.ctx.deactivate(l);return}const H=$&1&&L,te=!Jt(l);let Y;if(te&&(Y=x&&x.onVnodeBeforeUnmount)&&He(Y,u,l),$&6)vn(l.component,g,y);else{if($&128){l.suspense.unmount(g,y);return}H&&ht(l,null,u,"beforeUnmount"),$&64?l.type.remove(l,u,g,T,y):q&&!q.hasOnce&&(w!==Xe||C>0&&C&64)?Ie(q,u,g,!1,!0):(w===Xe&&C&384||!b&&$&16)&&Ie(k,u,g),y&&St(l)}(te&&(Y=x&&x.onVnodeUnmounted)||H)&&xe(()=>{Y&&He(Y,u,l),H&&ht(l,null,u,"unmounted")},g)},St=l=>{const{type:u,el:g,anchor:y,transition:b}=l;if(u===Xe){xt(g,y);return}if(u===qn){A(l);return}const w=()=>{a(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:x,delayLeave:S}=b,k=()=>x(g,w);S?S(l.el,w,k):k()}else w()},xt=(l,u)=>{let g;for(;l!==u;)g=m(l),a(l),l=g;a(u)},vn=(l,u,g)=>{const{bum:y,scope:b,job:w,subTree:x,um:S,m:k,a:q}=l;ca(k),ca(q),y&&_n(y),b.stop(),w&&(w.flags|=8,ye(x,l,u,g)),S&&xe(S,u),xe(()=>{l.isUnmounted=!0},u)},Ie=(l,u,g,y=!1,b=!1,w=0)=>{for(let x=w;x<l.length;x++)ye(l[x],u,g,y,b)},_=l=>{if(l.shapeFlag&6)return _(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=m(l.anchor||l.el),g=u&&u[er];return g?m(g):u};let D=!1;const E=(l,u,g)=>{l==null?u._vnode&&ye(u._vnode,null,null,!0):P(u._vnode||null,l,u,null,null,null,g),u._vnode=l,D||(D=!0,ea(),_o(),D=!1)},T={p:P,um:ye,m:Ue,r:St,mt:Nt,mc:je,pc:V,pbc:Ne,n:_,o:e};let K,ae;return t&&([K,ae]=t(T)),{render:E,hydrate:K,createApp:Sr(E,K)}}function ns({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function bt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ar(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function jo(e,t,n=!1){const s=e.children,a=t.children;if(N(s)&&N(a))for(let o=0;o<s.length;o++){const i=s[o];let c=a[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=a[o]=ut(a[o]),c.el=i.el),!n&&c.patchFlag!==-2&&jo(i,c)),c.type===zn&&c.patchFlag!==-1&&(c.el=i.el),c.type===pt&&!c.el&&(c.el=i.el)}}function Lr(e){const t=e.slice(),n=[0];let s,a,o,i,c;const d=e.length;for(s=0;s<d;s++){const p=e[s];if(p!==0){if(a=n[n.length-1],e[a]<p){t[s]=a,n.push(s);continue}for(o=0,i=n.length-1;o<i;)c=o+i>>1,e[n[c]]<p?o=c+1:i=c;p<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function No(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:No(t)}function ca(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Mr=Symbol.for("v-scx"),Or=()=>nt(Mr);function wn(e,t,n){return Fo(e,t,n)}function Fo(e,t,n=ee){const{immediate:s,deep:a,flush:o,once:i}=n,c=ue({},n),d=t&&s||!t&&o!=="post";let p;if(rn){if(o==="sync"){const h=Or();p=h.__watcherHandles||(h.__watcherHandles=[])}else if(!d){const h=()=>{};return h.stop=Le,h.resume=Le,h.pause=Le,h}}const f=ge;c.call=(h,I,P)=>ze(h,f,I,P);let v=!1;o==="post"?c.scheduler=h=>{xe(h,f&&f.suspense)}:o!=="sync"&&(v=!0,c.scheduler=(h,I)=>{I?h():Ns(h)}),c.augmentJob=h=>{t&&(h.flags|=4),v&&(h.flags|=2,f&&(h.id=f.uid,h.i=f))};const m=Yi(e,t,c);return rn&&(p?p.push(m):d&&m()),m}function $r(e,t,n){const s=this.proxy,a=ce(e)?e.includes(".")?Uo(s,e):()=>s[e]:e.bind(s,s);let o;U(t)?o=t:(o=t.handler,n=t);const i=fn(this),c=Fo(a,o.bind(s),n);return i(),c}function Uo(e,t){const n=t.split(".");return()=>{let s=e;for(let a=0;a<n.length&&s;a++)s=s[n[a]];return s}}const jr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${De(t)}Modifiers`]||e[`${gt(t)}Modifiers`];function Nr(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ee;let a=n;const o=t.startsWith("update:"),i=o&&jr(s,t.slice(7));i&&(i.trim&&(a=n.map(f=>ce(f)?f.trim():f)),i.number&&(a=n.map(xn)));let c,d=s[c=Yn(t)]||s[c=Yn(De(t))];!d&&o&&(d=s[c=Yn(gt(t))]),d&&ze(d,e,6,a);const p=s[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ze(p,e,6,a)}}const Fr=new WeakMap;function Bo(e,t,n=!1){const s=n?Fr:t.emitsCache,a=s.get(e);if(a!==void 0)return a;const o=e.emits;let i={},c=!1;if(!U(e)){const d=p=>{const f=Bo(p,t,!0);f&&(c=!0,ue(i,f))};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!o&&!c?(se(e)&&s.set(e,null),null):(N(o)?o.forEach(d=>i[d]=null):ue(i,o),se(e)&&s.set(e,i),i)}function Kn(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,gt(t))||Q(e,t))}function ss(e){const{type:t,vnode:n,proxy:s,withProxy:a,propsOptions:[o],slots:i,attrs:c,emit:d,render:p,renderCache:f,props:v,data:m,setupState:h,ctx:I,inheritAttrs:P}=e,B=In(e);let M,R;try{if(n.shapeFlag&4){const A=a||s,X=A;M=Ve(p.call(X,A,f,v,h,m,I)),R=c}else{const A=t;M=Ve(A.length>1?A(v,{attrs:c,slots:i,emit:d}):A(v,null)),R=t.props?c:Ur(c)}}catch(A){Zt.length=0,Wn(A,e,1),M=j(pt)}let O=M;if(R&&P!==!1){const A=Object.keys(R),{shapeFlag:X}=O;A.length&&X&7&&(o&&A.some(xs)&&(R=Br(R,o)),O=Ot(O,R,!1,!0))}return n.dirs&&(O=Ot(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&Fs(O,n.transition),M=O,In(B),M}const Ur=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},Br=(e,t)=>{const n={};for(const s in e)(!xs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Hr(e,t,n){const{props:s,children:a,component:o}=e,{props:i,children:c,patchFlag:d}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&d>=0){if(d&1024)return!0;if(d&16)return s?da(s,i,p):!!i;if(d&8){const f=t.dynamicProps;for(let v=0;v<f.length;v++){const m=f[v];if(i[m]!==s[m]&&!Kn(p,m))return!0}}}else return(a||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?da(s,i,p):!0:!!i;return!1}function da(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let a=0;a<s.length;a++){const o=s[a];if(t[o]!==e[o]&&!Kn(n,o))return!0}return!1}function Wr({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ho=e=>e.__isSuspense;function Vr(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Zi(e)}const Xe=Symbol.for("v-fgt"),zn=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),qn=Symbol.for("v-stc"),Zt=[];let Ce=null;function re(e=!1){Zt.push(Ce=e?null:[])}function Kr(){Zt.pop(),Ce=Zt[Zt.length-1]||null}let on=1;function Rn(e,t=!1){on+=e,e<0&&Ce&&t&&(Ce.hasOnce=!0)}function Wo(e){return e.dynamicChildren=on>0?Ce||Dt:null,Kr(),on>0&&Ce&&Ce.push(e),e}function le(e,t,n,s,a,o){return Wo(r(e,t,n,s,a,o,!0))}function zr(e,t,n,s,a){return Wo(j(e,t,n,s,a,!0))}function Tn(e){return e?e.__v_isVNode===!0:!1}function Bt(e,t){return e.type===t.type&&e.key===t.key}const Vo=({key:e})=>e??null,kn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||me(e)||U(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function r(e,t=null,n=null,s=0,a=null,o=e===Xe?0:1,i=!1,c=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vo(t),ref:t&&kn(t),scopeId:wo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ee};return c?(Ws(d,n),o&128&&e.normalize(d)):n&&(d.shapeFlag|=ce(n)?8:16),on>0&&!i&&Ce&&(d.patchFlag>0||o&6)&&d.patchFlag!==32&&Ce.push(d),d}const j=Gr;function Gr(e,t=null,n=null,s=0,a=null,o=!1){if((!e||e===gr)&&(e=pt),Tn(e)){const c=Ot(e,t,!0);return n&&Ws(c,n),on>0&&!o&&Ce&&(c.shapeFlag&6?Ce[Ce.indexOf(e)]=c:Ce.push(c)),c.patchFlag=-2,c}if(ic(e)&&(e=e.__vccOpts),t){t=Qr(t);let{class:c,style:d}=t;c&&!ce(c)&&(t.class=Ds(c)),se(d)&&($s(d)&&!N(d)&&(d=ue({},d)),t.style=Is(d))}const i=ce(e)?1:Ho(e)?128:tr(e)?64:se(e)?4:U(e)?2:0;return r(e,t,n,s,a,i,o,!0)}function Qr(e){return e?$s(e)||To(e)?ue({},e):e:null}function Ot(e,t,n=!1,s=!1){const{props:a,ref:o,patchFlag:i,children:c,transition:d}=e,p=t?Yr(a||{},t):a,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Vo(p),ref:t&&t.ref?n&&o?N(o)?o.concat(kn(t)):[o,kn(t)]:kn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:d,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return d&&s&&Fs(f,d.clone(f)),f}function Z(e=" ",t=0){return j(zn,null,e,t)}function ie(e,t){const n=j(qn,null,e);return n.staticCount=t,n}function Lt(e="",t=!1){return t?(re(),zr(pt,null,e)):j(pt,null,e)}function Ve(e){return e==null||typeof e=="boolean"?j(pt):N(e)?j(Xe,null,e.slice()):Tn(e)?ut(e):j(zn,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function Ws(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(s&65){const a=t.default;a&&(a._c&&(a._d=!1),Ws(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!To(t)?t._ctx=Ee:a===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),s&64?(n=16,t=[Z(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const a in s)if(a==="class")t.class!==s.class&&(t.class=Ds([t.class,s.class]));else if(a==="style")t.style=Is([t.style,s.style]);else if($n(a)){const o=t[a],i=s[a];i&&o!==i&&!(N(o)&&o.includes(i))&&(t[a]=o?[].concat(o,i):i)}else a!==""&&(t[a]=s[a])}return t}function He(e,t,n,s=null){ze(e,t,7,[n,s])}const Jr=Do();let Xr=0;function Zr(e,t,n){const s=e.type,a=(t?t.appContext:e.appContext)||Jr,o={uid:Xr++,vnode:e,type:s,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lo(s,a),emitsOptions:Bo(s,a),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:s.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Nr.bind(null,o),e.ce&&e.ce(o),o}let ge=null;const ec=()=>ge||Ee;let An,_s;{const e=Un(),t=(n,s)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(s),o=>{a.length>1?a.forEach(i=>i(o)):a[0](o)}};An=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),_s=t("__VUE_SSR_SETTERS__",n=>rn=n)}const fn=e=>{const t=ge;return An(e),e.scope.on(),()=>{e.scope.off(),An(t)}},la=()=>{ge&&ge.scope.off(),An(null)};function Ko(e){return e.vnode.shapeFlag&4}let rn=!1;function tc(e,t=!1,n=!1){t&&_s(t);const{props:s,children:a}=e.vnode,o=Ko(e);xr(e,s,o,t),Dr(e,a,n||t);const i=o?nc(e,t):void 0;return t&&_s(!1),i}function nc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,hr);const{setup:s}=n;if(s){st();const a=e.setupContext=s.length>1?ac(e):null,o=fn(e),i=un(s,e,0,[e.props,a]),c=Va(i);if(at(),o(),(c||e.sp)&&!Jt(e)&&ko(e),c){if(i.then(la,la),t)return i.then(d=>{ua(e,d,t)}).catch(d=>{Wn(d,e,0)});e.asyncDep=i}else ua(e,i,t)}else zo(e,t)}function ua(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=mo(t)),zo(e,n)}let fa;function zo(e,t,n){const s=e.type;if(!e.render){if(!t&&fa&&!s.render){const a=s.template||Us(e).template;if(a){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:d}=s,p=ue(ue({isCustomElement:o,delimiters:c},i),d);s.render=fa(a,p)}}e.render=s.render||Le}{const a=fn(e);st();try{br(e)}finally{at(),a()}}}const sc={get(e,t){return pe(e,"get",""),e[t]}};function ac(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,sc),slots:e.slots,emit:e.emit,expose:t}}function Gn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(mo(Bi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Xt)return Xt[n](e)},has(t,n){return n in t||n in Xt}})):e.proxy}function oc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function ic(e){return U(e)&&"__vccOpts"in e}const Ae=(e,t)=>Gi(e,t,rn);function Go(e,t,n){try{Rn(-1);const s=arguments.length;return s===2?se(t)&&!N(t)?Tn(t)?j(e,null,[t]):j(e,t):j(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Tn(n)&&(n=[n]),j(e,t,n))}finally{Rn(1)}}const rc="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ys;const va=typeof window<"u"&&window.trustedTypes;if(va)try{ys=va.createPolicy("vue",{createHTML:e=>e})}catch{}const Qo=ys?e=>ys.createHTML(e):e=>e,cc="http://www.w3.org/2000/svg",dc="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,pa=Je&&Je.createElement("template"),lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const a=t==="svg"?Je.createElementNS(cc,e):t==="mathml"?Je.createElementNS(dc,e):n?Je.createElement(e,{is:n}):Je.createElement(e);return e==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,a,o){const i=n?n.previousSibling:t.lastChild;if(a&&(a===o||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===o||!(a=a.nextSibling)););else{pa.innerHTML=Qo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=pa.content;if(s==="svg"||s==="mathml"){const d=c.firstChild;for(;d.firstChild;)c.appendChild(d.firstChild);c.removeChild(d)}t.insertBefore(c,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},uc=Symbol("_vtc");function fc(e,t,n){const s=e[uc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ln=Symbol("_vod"),Yo=Symbol("_vsh"),hn={name:"show",beforeMount(e,{value:t},{transition:n}){e[Ln]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ht(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Ht(e,!0),s.enter(e)):s.leave(e,()=>{Ht(e,!1)}):Ht(e,t))},beforeUnmount(e,{value:t}){Ht(e,t)}};function Ht(e,t){e.style.display=t?e[Ln]:"none",e[Yo]=!t}const vc=Symbol(""),pc=/(?:^|;)\s*display\s*:/;function gc(e,t,n){const s=e.style,a=ce(n);let o=!1;if(n&&!a){if(t)if(ce(t))for(const i of t.split(";")){const c=i.slice(0,i.indexOf(":")).trim();n[c]==null&&Sn(s,c,"")}else for(const i in t)n[i]==null&&Sn(s,i,"");for(const i in n)i==="display"&&(o=!0),Sn(s,i,n[i])}else if(a){if(t!==n){const i=s[vc];i&&(n+=";"+i),s.cssText=n,o=pc.test(n)}}else t&&e.removeAttribute("style");Ln in e&&(e[Ln]=o?s.display:"",e[Yo]&&(s.display="none"))}const ga=/\s*!important$/;function Sn(e,t,n){if(N(n))n.forEach(s=>Sn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=mc(e,t);ga.test(n)?e.setProperty(gt(s),n.replace(ga,""),"important"):e[s]=n}}const ma=["Webkit","Moz","ms"],as={};function mc(e,t){const n=as[t];if(n)return n;let s=De(t);if(s!=="filter"&&s in e)return as[t]=s;s=Fn(s);for(let a=0;a<ma.length;a++){const o=ma[a]+s;if(o in e)return as[t]=o}return t}const ha="http://www.w3.org/1999/xlink";function ba(e,t,n,s,a,o=_i(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ha,t.slice(6,t.length)):e.setAttributeNS(ha,t,n):n==null||o&&!Qa(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Ke(n)?String(n):n)}function _a(e,t,n,s,a){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Qo(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,d=n==null?e.type==="checkbox"?"on":"":String(n);(c!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Qa(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(a||t)}function yt(e,t,n,s){e.addEventListener(t,n,s)}function hc(e,t,n,s){e.removeEventListener(t,n,s)}const ya=Symbol("_vei");function bc(e,t,n,s,a=null){const o=e[ya]||(e[ya]={}),i=o[t];if(s&&i)i.value=s;else{const[c,d]=_c(t);if(s){const p=o[t]=qc(s,a);yt(e,c,p,d)}else i&&(hc(e,c,i,d),o[t]=void 0)}}const wa=/(?:Once|Passive|Capture)$/;function _c(e){let t;if(wa.test(e)){t={};let s;for(;s=e.match(wa);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let os=0;const yc=Promise.resolve(),wc=()=>os||(yc.then(()=>os=0),os=Date.now());function qc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ze(kc(s,n.value),t,5,[s])};return n.value=e,n.attached=wc(),n}function kc(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>a=>!a._stopped&&s&&s(a))}else return t}const qa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Sc=(e,t,n,s,a,o)=>{const i=a==="svg";t==="class"?fc(e,s,i):t==="style"?gc(e,n,s):$n(t)?xs(t)||bc(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xc(e,t,s,i))?(_a(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ba(e,t,s,i,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ce(s))?_a(e,De(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ba(e,t,s,i))};function xc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&qa(t)&&U(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return qa(t)&&ce(n)?!1:t in e}const Mn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>_n(t,n):t};function Ec(e){e.target.composing=!0}function ka(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),bn={created(e,{modifiers:{lazy:t,trim:n,number:s}},a){e[Mt]=Mn(a);const o=s||a.props&&a.props.type==="number";yt(e,t?"change":"input",i=>{if(i.target.composing)return;let c=e.value;n&&(c=c.trim()),o&&(c=xn(c)),e[Mt](c)}),n&&yt(e,"change",()=>{e.value=e.value.trim()}),t||(yt(e,"compositionstart",Ec),yt(e,"compositionend",ka),yt(e,"change",ka))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:a,number:o}},i){if(e[Mt]=Mn(i),e.composing)return;const c=(o||e.type==="number")&&!/^0\d/.test(e.value)?xn(e.value):e.value,d=t??"";c!==d&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||a&&e.value.trim()===d)||(e.value=d))}},Cc={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const a=jn(t);yt(e,"change",()=>{const o=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?xn(On(i)):On(i));e[Mt](e.multiple?a?new Set(o):o:o[0]),e._assigning=!0,js(()=>{e._assigning=!1})}),e[Mt]=Mn(s)},mounted(e,{value:t}){Sa(e,t)},beforeUpdate(e,t,n){e[Mt]=Mn(n)},updated(e,{value:t}){e._assigning||Sa(e,t)}};function Sa(e,t){const n=e.multiple,s=N(t);if(!(n&&!s&&!jn(t))){for(let a=0,o=e.options.length;a<o;a++){const i=e.options[a],c=On(i);if(n)if(s){const d=typeof c;d==="string"||d==="number"?i.selected=t.some(p=>String(p)===String(c)):i.selected=wi(t,c)>-1}else i.selected=t.has(c);else if(Bn(On(i),t)){e.selectedIndex!==a&&(e.selectedIndex=a);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function On(e){return"_value"in e?e._value:e.value}const Ic=["ctrl","shift","alt","meta"],Dc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ic.some(n=>e[`${n}Key`]&&!t.includes(n))},xa=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(a,...o)=>{for(let i=0;i<t.length;i++){const c=Dc[t[i]];if(c&&c(a,t))return}return e(a,...o)})},Pc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rc=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=a=>{if(!("key"in a))return;const o=gt(a.key);if(t.some(i=>i===o||Pc[i]===o))return e(a)})},Tc=ue({patchProp:Sc},lc);let Ea;function Ac(){return Ea||(Ea=Rr(Tc))}const Lc=(...e)=>{const t=Ac().createApp(...e),{mount:n}=t;return t.mount=s=>{const a=Oc(s);if(!a)return;const o=t._component;!U(o)&&!o.render&&!o.template&&(o.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const i=n(a,!1,Mc(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),i},t};function Mc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Oc(e){return ce(e)?document.querySelector(e):e}const Re=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n},$c={name:"App"},jc={id:"app"};function Nc(e,t,n,s,a,o){const i=Pe("router-view");return re(),le("div",jc,[j(i)])}const Fc=Re($c,[["render",Nc]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const It=typeof document<"u";function Jo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Uc(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Jo(e.default)}const z=Object.assign;function is(e,t){const n={};for(const s in t){const a=t[s];n[s]=$e(a)?a.map(e):e(a)}return n}const en=()=>{},$e=Array.isArray,Xo=/#/g,Bc=/&/g,Hc=/\//g,Wc=/=/g,Vc=/\?/g,Zo=/\+/g,Kc=/%5B/g,zc=/%5D/g,ei=/%5E/g,Gc=/%60/g,ti=/%7B/g,Qc=/%7C/g,ni=/%7D/g,Yc=/%20/g;function Vs(e){return encodeURI(""+e).replace(Qc,"|").replace(Kc,"[").replace(zc,"]")}function Jc(e){return Vs(e).replace(ti,"{").replace(ni,"}").replace(ei,"^")}function ws(e){return Vs(e).replace(Zo,"%2B").replace(Yc,"+").replace(Xo,"%23").replace(Bc,"%26").replace(Gc,"`").replace(ti,"{").replace(ni,"}").replace(ei,"^")}function Xc(e){return ws(e).replace(Wc,"%3D")}function Zc(e){return Vs(e).replace(Xo,"%23").replace(Vc,"%3F")}function ed(e){return e==null?"":Zc(e).replace(Hc,"%2F")}function cn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const td=/\/$/,nd=e=>e.replace(td,"");function rs(e,t,n="/"){let s,a={},o="",i="";const c=t.indexOf("#");let d=t.indexOf("?");return c<d&&c>=0&&(d=-1),d>-1&&(s=t.slice(0,d),o=t.slice(d+1,c>-1?c:t.length),a=e(o)),c>-1&&(s=s||t.slice(0,c),i=t.slice(c,t.length)),s=id(s??t,n),{fullPath:s+(o&&"?")+o+i,path:s,query:a,hash:cn(i)}}function sd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ca(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ad(e,t,n){const s=t.matched.length-1,a=n.matched.length-1;return s>-1&&s===a&&$t(t.matched[s],n.matched[a])&&si(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function $t(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function si(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!od(e[n],t[n]))return!1;return!0}function od(e,t){return $e(e)?Ia(e,t):$e(t)?Ia(t,e):e===t}function Ia(e,t){return $e(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function id(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let o=n.length-1,i,c;for(i=0;i<s.length;i++)if(c=s[i],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(i).join("/")}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var dn;(function(e){e.pop="pop",e.push="push"})(dn||(dn={}));var tn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(tn||(tn={}));function rd(e){if(!e)if(It){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nd(e)}const cd=/^[^#]+#/;function dd(e,t){return e.replace(cd,"#")+t}function ld(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Qn=()=>({left:window.scrollX,top:window.scrollY});function ud(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=ld(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Da(e,t){return(history.state?history.state.position-t:-1)+e}const qs=new Map;function fd(e,t){qs.set(e,t)}function vd(e){const t=qs.get(e);return qs.delete(e),t}let pd=()=>location.protocol+"//"+location.host;function ai(e,t){const{pathname:n,search:s,hash:a}=t,o=e.indexOf("#");if(o>-1){let c=a.includes(e.slice(o))?e.slice(o).length:1,d=a.slice(c);return d[0]!=="/"&&(d="/"+d),Ca(d,"")}return Ca(n,e)+s+a}function gd(e,t,n,s){let a=[],o=[],i=null;const c=({state:m})=>{const h=ai(e,location),I=n.value,P=t.value;let B=0;if(m){if(n.value=h,t.value=m,i&&i===I){i=null;return}B=P?m.position-P.position:0}else s(h);a.forEach(M=>{M(n.value,I,{delta:B,type:dn.pop,direction:B?B>0?tn.forward:tn.back:tn.unknown})})};function d(){i=n.value}function p(m){a.push(m);const h=()=>{const I=a.indexOf(m);I>-1&&a.splice(I,1)};return o.push(h),h}function f(){const{history:m}=window;m.state&&m.replaceState(z({},m.state,{scroll:Qn()}),"")}function v(){for(const m of o)m();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:d,listen:p,destroy:v}}function Pa(e,t,n,s=!1,a=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:a?Qn():null}}function md(e){const{history:t,location:n}=window,s={value:ai(e,n)},a={value:t.state};a.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(d,p,f){const v=e.indexOf("#"),m=v>-1?(n.host&&document.querySelector("base")?e:e.slice(v))+d:pd()+e+d;try{t[f?"replaceState":"pushState"](p,"",m),a.value=p}catch(h){console.error(h),n[f?"replace":"assign"](m)}}function i(d,p){const f=z({},t.state,Pa(a.value.back,d,a.value.forward,!0),p,{position:a.value.position});o(d,f,!0),s.value=d}function c(d,p){const f=z({},a.value,t.state,{forward:d,scroll:Qn()});o(f.current,f,!0);const v=z({},Pa(s.value,d,null),{position:f.position+1},p);o(d,v,!1),s.value=d}return{location:s,state:a,push:c,replace:i}}function hd(e){e=rd(e);const t=md(e),n=gd(e,t.state,t.location,t.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const a=z({location:"",base:e,go:s,createHref:dd.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function bd(e){return typeof e=="string"||e&&typeof e=="object"}function oi(e){return typeof e=="string"||typeof e=="symbol"}const ii=Symbol("");var Ra;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ra||(Ra={}));function jt(e,t){return z(new Error,{type:e,[ii]:!0},t)}function Ye(e,t){return e instanceof Error&&ii in e&&(t==null||!!(e.type&t))}const Ta="[^/]+?",_d={sensitive:!1,strict:!1,start:!0,end:!0},yd=/[.+*?^${}()[\]/\\]/g;function wd(e,t){const n=z({},_d,t),s=[];let a=n.start?"^":"";const o=[];for(const p of e){const f=p.length?[]:[90];n.strict&&!p.length&&(a+="/");for(let v=0;v<p.length;v++){const m=p[v];let h=40+(n.sensitive?.25:0);if(m.type===0)v||(a+="/"),a+=m.value.replace(yd,"\\$&"),h+=40;else if(m.type===1){const{value:I,repeatable:P,optional:B,regexp:M}=m;o.push({name:I,repeatable:P,optional:B});const R=M||Ta;if(R!==Ta){h+=10;try{new RegExp(`(${R})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${I}" (${R}): `+A.message)}}let O=P?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;v||(O=B&&p.length<2?`(?:/${O})`:"/"+O),B&&(O+="?"),a+=O,h+=20,B&&(h+=-8),P&&(h+=-20),R===".*"&&(h+=-50)}f.push(h)}s.push(f)}if(n.strict&&n.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const i=new RegExp(a,n.sensitive?"":"i");function c(p){const f=p.match(i),v={};if(!f)return null;for(let m=1;m<f.length;m++){const h=f[m]||"",I=o[m-1];v[I.name]=h&&I.repeatable?h.split("/"):h}return v}function d(p){let f="",v=!1;for(const m of e){(!v||!f.endsWith("/"))&&(f+="/"),v=!1;for(const h of m)if(h.type===0)f+=h.value;else if(h.type===1){const{value:I,repeatable:P,optional:B}=h,M=I in p?p[I]:"";if($e(M)&&!P)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const R=$e(M)?M.join("/"):M;if(!R)if(B)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):v=!0);else throw new Error(`Missing required param "${I}"`);f+=R}}return f||"/"}return{re:i,score:s,keys:o,parse:c,stringify:d}}function qd(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ri(e,t){let n=0;const s=e.score,a=t.score;for(;n<s.length&&n<a.length;){const o=qd(s[n],a[n]);if(o)return o;n++}if(Math.abs(a.length-s.length)===1){if(Aa(s))return 1;if(Aa(a))return-1}return a.length-s.length}function Aa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kd={type:0,value:""},Sd=/[a-zA-Z0-9_]/;function xd(e){if(!e)return[[]];if(e==="/")return[[kd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${p}": ${h}`)}let n=0,s=n;const a=[];let o;function i(){o&&a.push(o),o=[]}let c=0,d,p="",f="";function v(){p&&(n===0?o.push({type:0,value:p}):n===1||n===2||n===3?(o.length>1&&(d==="*"||d==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:f,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):t("Invalid state to consume buffer"),p="")}function m(){p+=d}for(;c<e.length;){if(d=e[c++],d==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:d==="/"?(p&&v(),i()):d===":"?(v(),n=1):m();break;case 4:m(),n=s;break;case 1:d==="("?n=2:Sd.test(d)?m():(v(),n=0,d!=="*"&&d!=="?"&&d!=="+"&&c--);break;case 2:d===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+d:n=3:f+=d;break;case 3:v(),n=0,d!=="*"&&d!=="?"&&d!=="+"&&c--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),v(),i(),a}function Ed(e,t,n){const s=wd(xd(e.path),n),a=z(s,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Cd(e,t){const n=[],s=new Map;t=$a({strict:!1,end:!0,sensitive:!1},t);function a(v){return s.get(v)}function o(v,m,h){const I=!h,P=Ma(v);P.aliasOf=h&&h.record;const B=$a(t,v),M=[P];if("alias"in v){const A=typeof v.alias=="string"?[v.alias]:v.alias;for(const X of A)M.push(Ma(z({},P,{components:h?h.record.components:P.components,path:X,aliasOf:h?h.record:P})))}let R,O;for(const A of M){const{path:X}=A;if(m&&X[0]!=="/"){const fe=m.record.path,oe=fe[fe.length-1]==="/"?"":"/";A.path=m.record.path+(X&&oe+X)}if(R=Ed(A,m,B),h?h.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),I&&v.name&&!Oa(R)&&i(v.name)),ci(R)&&d(R),P.children){const fe=P.children;for(let oe=0;oe<fe.length;oe++)o(fe[oe],R,h&&h.children[oe])}h=h||R}return O?()=>{i(O)}:en}function i(v){if(oi(v)){const m=s.get(v);m&&(s.delete(v),n.splice(n.indexOf(m),1),m.children.forEach(i),m.alias.forEach(i))}else{const m=n.indexOf(v);m>-1&&(n.splice(m,1),v.record.name&&s.delete(v.record.name),v.children.forEach(i),v.alias.forEach(i))}}function c(){return n}function d(v){const m=Pd(v,n);n.splice(m,0,v),v.record.name&&!Oa(v)&&s.set(v.record.name,v)}function p(v,m){let h,I={},P,B;if("name"in v&&v.name){if(h=s.get(v.name),!h)throw jt(1,{location:v});B=h.record.name,I=z(La(m.params,h.keys.filter(O=>!O.optional).concat(h.parent?h.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),v.params&&La(v.params,h.keys.map(O=>O.name))),P=h.stringify(I)}else if(v.path!=null)P=v.path,h=n.find(O=>O.re.test(P)),h&&(I=h.parse(P),B=h.record.name);else{if(h=m.name?s.get(m.name):n.find(O=>O.re.test(m.path)),!h)throw jt(1,{location:v,currentLocation:m});B=h.record.name,I=z({},m.params,v.params),P=h.stringify(I)}const M=[];let R=h;for(;R;)M.unshift(R.record),R=R.parent;return{name:B,path:P,params:I,matched:M,meta:Dd(M)}}e.forEach(v=>o(v));function f(){n.length=0,s.clear()}return{addRoute:o,resolve:p,removeRoute:i,clearRoutes:f,getRoutes:c,getRecordMatcher:a}}function La(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Ma(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Id(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Id(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Oa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dd(e){return e.reduce((t,n)=>z(t,n.meta),{})}function $a(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Pd(e,t){let n=0,s=t.length;for(;n!==s;){const o=n+s>>1;ri(e,t[o])<0?s=o:n=o+1}const a=Rd(e);return a&&(s=t.lastIndexOf(a,s-1)),s}function Rd(e){let t=e;for(;t=t.parent;)if(ci(t)&&ri(e,t)===0)return t}function ci({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Td(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const o=s[a].replace(Zo," "),i=o.indexOf("="),c=cn(i<0?o:o.slice(0,i)),d=i<0?null:cn(o.slice(i+1));if(c in t){let p=t[c];$e(p)||(p=t[c]=[p]),p.push(d)}else t[c]=d}return t}function ja(e){let t="";for(let n in e){const s=e[n];if(n=Xc(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(s)?s.map(o=>o&&ws(o)):[s&&ws(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Ad(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=$e(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return t}const Ld=Symbol(""),Na=Symbol(""),Ks=Symbol(""),di=Symbol(""),ks=Symbol("");function Wt(){let e=[];function t(s){return e.push(s),()=>{const a=e.indexOf(s);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ft(e,t,n,s,a,o=i=>i()){const i=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((c,d)=>{const p=m=>{m===!1?d(jt(4,{from:n,to:t})):m instanceof Error?d(m):bd(m)?d(jt(2,{from:t,to:m})):(i&&s.enterCallbacks[a]===i&&typeof m=="function"&&i.push(m),c())},f=o(()=>e.call(s&&s.instances[a],t,n,p));let v=Promise.resolve(f);e.length<3&&(v=v.then(p)),v.catch(m=>d(m))})}function cs(e,t,n,s,a=o=>o()){const o=[];for(const i of e)for(const c in i.components){let d=i.components[c];if(!(t!=="beforeRouteEnter"&&!i.instances[c]))if(Jo(d)){const f=(d.__vccOpts||d)[t];f&&o.push(ft(f,n,s,i,c,a))}else{let p=d();o.push(()=>p.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`);const v=Uc(f)?f.default:f;i.mods[c]=f,i.components[c]=v;const h=(v.__vccOpts||v)[t];return h&&ft(h,n,s,i,c,a)()}))}}return o}function Fa(e){const t=nt(Ks),n=nt(di),s=Ae(()=>{const d=Rt(e.to);return t.resolve(d)}),a=Ae(()=>{const{matched:d}=s.value,{length:p}=d,f=d[p-1],v=n.matched;if(!f||!v.length)return-1;const m=v.findIndex($t.bind(null,f));if(m>-1)return m;const h=Ua(d[p-2]);return p>1&&Ua(f)===h&&v[v.length-1].path!==h?v.findIndex($t.bind(null,d[p-2])):m}),o=Ae(()=>a.value>-1&&Nd(n.params,s.value.params)),i=Ae(()=>a.value>-1&&a.value===n.matched.length-1&&si(n.params,s.value.params));function c(d={}){if(jd(d)){const p=t[Rt(e.replace)?"replace":"push"](Rt(e.to)).catch(en);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:s,href:Ae(()=>s.value.href),isActive:o,isExactActive:i,navigate:c}}function Md(e){return e.length===1?e[0]:e}const Od=qo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Fa,setup(e,{slots:t}){const n=Hn(Fa(e)),{options:s}=nt(Ks),a=Ae(()=>({[Ba(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ba(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Md(t.default(n));return e.custom?o:Go("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),$d=Od;function jd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Nd(e,t){for(const n in t){const s=t[n],a=e[n];if(typeof s=="string"){if(s!==a)return!1}else if(!$e(a)||a.length!==s.length||s.some((o,i)=>o!==a[i]))return!1}return!0}function Ua(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ba=(e,t,n)=>e??t??n,Fd=qo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=nt(ks),a=Ae(()=>e.route||s.value),o=nt(Na,0),i=Ae(()=>{let p=Rt(o);const{matched:f}=a.value;let v;for(;(v=f[p])&&!v.components;)p++;return p}),c=Ae(()=>a.value.matched[i.value]);yn(Na,Ae(()=>i.value+1)),yn(Ld,c),yn(ks,a);const d=Hi();return wn(()=>[d.value,c.value,e.name],([p,f,v],[m,h,I])=>{f&&(f.instances[v]=p,h&&h!==f&&p&&p===m&&(f.leaveGuards.size||(f.leaveGuards=h.leaveGuards),f.updateGuards.size||(f.updateGuards=h.updateGuards))),p&&f&&(!h||!$t(f,h)||!m)&&(f.enterCallbacks[v]||[]).forEach(P=>P(p))},{flush:"post"}),()=>{const p=a.value,f=e.name,v=c.value,m=v&&v.components[f];if(!m)return Ha(n.default,{Component:m,route:p});const h=v.props[f],I=h?h===!0?p.params:typeof h=="function"?h(p):h:null,B=Go(m,z({},I,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(v.instances[f]=null)},ref:d}));return Ha(n.default,{Component:B,route:p})||B}}});function Ha(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ud=Fd;function Bd(e){const t=Cd(e.routes,e),n=e.parseQuery||Td,s=e.stringifyQuery||ja,a=e.history,o=Wt(),i=Wt(),c=Wt(),d=Wi(dt);let p=dt;It&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=is.bind(null,_=>""+_),v=is.bind(null,ed),m=is.bind(null,cn);function h(_,D){let E,T;return oi(_)?(E=t.getRecordMatcher(_),T=D):T=_,t.addRoute(T,E)}function I(_){const D=t.getRecordMatcher(_);D&&t.removeRoute(D)}function P(){return t.getRoutes().map(_=>_.record)}function B(_){return!!t.getRecordMatcher(_)}function M(_,D){if(D=z({},D||d.value),typeof _=="string"){const u=rs(n,_,D.path),g=t.resolve({path:u.path},D),y=a.createHref(u.fullPath);return z(u,g,{params:m(g.params),hash:cn(u.hash),redirectedFrom:void 0,href:y})}let E;if(_.path!=null)E=z({},_,{path:rs(n,_.path,D.path).path});else{const u=z({},_.params);for(const g in u)u[g]==null&&delete u[g];E=z({},_,{params:v(u)}),D.params=v(D.params)}const T=t.resolve(E,D),K=_.hash||"";T.params=f(m(T.params));const ae=sd(s,z({},_,{hash:Jc(K),path:T.path})),l=a.createHref(ae);return z({fullPath:ae,hash:K,query:s===ja?Ad(_.query):_.query||{}},T,{redirectedFrom:void 0,href:l})}function R(_){return typeof _=="string"?rs(n,_,d.value.path):z({},_)}function O(_,D){if(p!==_)return jt(8,{from:D,to:_})}function A(_){return oe(_)}function X(_){return A(z(R(_),{replace:!0}))}function fe(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:E}=D;let T=typeof E=="function"?E(_):E;return typeof T=="string"&&(T=T.includes("?")||T.includes("#")?T=R(T):{path:T},T.params={}),z({query:_.query,hash:_.hash,params:T.path!=null?{}:_.params},T)}}function oe(_,D){const E=p=M(_),T=d.value,K=_.state,ae=_.force,l=_.replace===!0,u=fe(E);if(u)return oe(z(R(u),{state:typeof u=="object"?z({},K,u.state):K,force:ae,replace:l}),D||E);const g=E;g.redirectedFrom=D;let y;return!ae&&ad(s,T,E)&&(y=jt(16,{to:g,from:T}),Ue(T,T,!0,!1)),(y?Promise.resolve(y):Ne(g,T)).catch(b=>Ye(b)?Ye(b,2)?b:ct(b):V(b,g,T)).then(b=>{if(b){if(Ye(b,2))return oe(z({replace:l},R(b.to),{state:typeof b.to=="object"?z({},K,b.to.state):K,force:ae}),D||g)}else b=mt(g,T,!0,l,K);return rt(g,T,b),b})}function je(_,D){const E=O(_,D);return E?Promise.reject(E):Promise.resolve()}function it(_){const D=xt.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(_):_()}function Ne(_,D){let E;const[T,K,ae]=Hd(_,D);E=cs(T.reverse(),"beforeRouteLeave",_,D);for(const u of T)u.leaveGuards.forEach(g=>{E.push(ft(g,_,D))});const l=je.bind(null,_,D);return E.push(l),Ie(E).then(()=>{E=[];for(const u of o.list())E.push(ft(u,_,D));return E.push(l),Ie(E)}).then(()=>{E=cs(K,"beforeRouteUpdate",_,D);for(const u of K)u.updateGuards.forEach(g=>{E.push(ft(g,_,D))});return E.push(l),Ie(E)}).then(()=>{E=[];for(const u of ae)if(u.beforeEnter)if($e(u.beforeEnter))for(const g of u.beforeEnter)E.push(ft(g,_,D));else E.push(ft(u.beforeEnter,_,D));return E.push(l),Ie(E)}).then(()=>(_.matched.forEach(u=>u.enterCallbacks={}),E=cs(ae,"beforeRouteEnter",_,D,it),E.push(l),Ie(E))).then(()=>{E=[];for(const u of i.list())E.push(ft(u,_,D));return E.push(l),Ie(E)}).catch(u=>Ye(u,8)?u:Promise.reject(u))}function rt(_,D,E){c.list().forEach(T=>it(()=>T(_,D,E)))}function mt(_,D,E,T,K){const ae=O(_,D);if(ae)return ae;const l=D===dt,u=It?history.state:{};E&&(T||l?a.replace(_.fullPath,z({scroll:l&&u&&u.scroll},K)):a.push(_.fullPath,K)),d.value=_,Ue(_,D,E,l),ct()}let Fe;function Nt(){Fe||(Fe=a.listen((_,D,E)=>{if(!vn.listening)return;const T=M(_),K=fe(T);if(K){oe(z(K,{replace:!0,force:!0}),T).catch(en);return}p=T;const ae=d.value;It&&fd(Da(ae.fullPath,E.delta),Qn()),Ne(T,ae).catch(l=>Ye(l,12)?l:Ye(l,2)?(oe(z(R(l.to),{force:!0}),T).then(u=>{Ye(u,20)&&!E.delta&&E.type===dn.pop&&a.go(-1,!1)}).catch(en),Promise.reject()):(E.delta&&a.go(-E.delta,!1),V(l,T,ae))).then(l=>{l=l||mt(T,ae,!1),l&&(E.delta&&!Ye(l,8)?a.go(-E.delta,!1):E.type===dn.pop&&Ye(l,20)&&a.go(-1,!1)),rt(T,ae,l)}).catch(en)}))}let kt=Wt(),de=Wt(),J;function V(_,D,E){ct(_);const T=de.list();return T.length?T.forEach(K=>K(_,D,E)):console.error(_),Promise.reject(_)}function Ge(){return J&&d.value!==dt?Promise.resolve():new Promise((_,D)=>{kt.add([_,D])})}function ct(_){return J||(J=!_,Nt(),kt.list().forEach(([D,E])=>_?E(_):D()),kt.reset()),_}function Ue(_,D,E,T){const{scrollBehavior:K}=e;if(!It||!K)return Promise.resolve();const ae=!E&&vd(Da(_.fullPath,0))||(T||!E)&&history.state&&history.state.scroll||null;return js().then(()=>K(_,D,ae)).then(l=>l&&ud(l)).catch(l=>V(l,_,D))}const ye=_=>a.go(_);let St;const xt=new Set,vn={currentRoute:d,listening:!0,addRoute:h,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:P,resolve:M,options:e,push:A,replace:X,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:o.add,beforeResolve:i.add,afterEach:c.add,onError:de.add,isReady:Ge,install(_){const D=this;_.component("RouterLink",$d),_.component("RouterView",Ud),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Rt(d)}),It&&!St&&d.value===dt&&(St=!0,A(a.location).catch(K=>{}));const E={};for(const K in dt)Object.defineProperty(E,K,{get:()=>d.value[K],enumerable:!0});_.provide(Ks,D),_.provide(di,po(E)),_.provide(ks,d);const T=_.unmount;xt.add(_),_.unmount=function(){xt.delete(_),xt.size<1&&(p=dt,Fe&&Fe(),Fe=null,d.value=dt,St=!1,J=!1),T()}}};function Ie(_){return _.reduce((D,E)=>D.then(()=>it(E)),Promise.resolve())}return vn}function Hd(e,t){const n=[],s=[],a=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const c=t.matched[i];c&&(e.matched.find(p=>$t(p,c))?s.push(c):n.push(c));const d=e.matched[i];d&&(t.matched.find(p=>$t(p,d))||a.push(d))}return[n,s,a]}const Wd={name:"Home",data(){return{feedbackSubmitted:!1}},methods:{submitFeedback(e){this.feedbackSubmitted=!0,console.log(`Feedback submitted: ${e}`)}}},Vd={class:"nav-header"},Kd={class:"container"},zd={class:"nav-content"},Gd={class:"nav-menu"},Qd={class:"content-section"},Yd={class:"container"},Jd={class:"card-grid"},Xd={class:"content-section"},Zd={class:"container"},el={class:"card-grid"},tl={class:"content-section"},nl={class:"container"},sl={class:"card-grid"},al={class:"feedback-section"},ol={class:"container"},il={class:"feedback-buttons"},rl={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function cl(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",null,[r("nav",Vd,[r("div",Kd,[r("div",zd,[j(i,{to:"/",class:"nav-brand"},{default:W(()=>[...t[2]||(t[2]=[r("img",{src:"https://www.storecove.com/typo3conf/ext/spt_package/Resources/Public/images/common/logo_prev.png",alt:"Storecove"},null,-1)])]),_:1}),r("ul",Gd,[r("li",null,[j(i,{to:"/integration-basics-faq"},{default:W(()=>[...t[3]||(t[3]=[Z("FAQ",-1)])]),_:1})]),r("li",null,[j(i,{to:"/implementation-guide"},{default:W(()=>[...t[4]||(t[4]=[Z("Guide",-1)])]),_:1})]),r("li",null,[j(i,{to:"/developer-dashboard"},{default:W(()=>[...t[5]||(t[5]=[Z("Dashboard",-1)])]),_:1})]),r("li",null,[j(i,{to:"/webhook-testing"},{default:W(()=>[...t[6]||(t[6]=[Z("Webhooks",-1)])]),_:1})])]),t[7]||(t[7]=r("div",{class:"nav-actions"},[r("a",{href:"https://www.storecove.com/us/en/start-now/",target:"_blank",class:"start-now-btn"},"Start now")],-1)),t[8]||(t[8]=r("input",{type:"text",class:"search-box",placeholder:"Search documentation..."},null,-1))])])]),t[24]||(t[24]=ie('<section class="hero"><div class="container"><div class="hero-content"><div class="hero-text"><h1>E-Invoicing Integration Toolkit</h1><p>Everything you need to integrate e-invoicing capabilities into your platform and help your clients go digital</p></div><div class="hero-image"><div class="hero-icon">🧾</div></div></div></div></section>',1)),r("section",Qd,[r("div",Yd,[t[15]||(t[15]=r("div",{class:"section-header"},[r("h2",null,"Get Started with E-invoicing"),r("p",null,"Comprehensive tools and resources to help you build your e-invoicing integration with the Storecove platform")],-1)),r("div",Jd,[j(i,{to:"/integration-basics-faq",class:"card"},{default:W(()=>[...t[9]||(t[9]=[r("div",{class:"card-icon"},"❓",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"FAQ"),r("h3",{class:"card-title"},"Integration Basics"),r("p",{class:"card-description"},"Frequently asked questions about e-invoicing integration fundamentals and common implementation patterns")],-1)])]),_:1}),j(i,{to:"/getting-started-webinar",class:"card"},{default:W(()=>[...t[10]||(t[10]=[r("div",{class:"card-icon"},"🎥",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Video"),r("h3",{class:"card-title"},"Getting Started Webinar"),r("p",{class:"card-description"},"Learn the basics of e-invoicing and how to set up your first integration with our platform")],-1)])]),_:1}),j(i,{to:"/platform-plugins",class:"card"},{default:W(()=>[...t[11]||(t[11]=[r("div",{class:"card-icon"},"🔌",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Coming Soon"),r("h3",{class:"card-title"},"Platform Plugins"),r("p",{class:"card-description"},"Pre-built integrations for popular accounting platforms and ERP systems")],-1)])]),_:1}),j(i,{to:"/sdk-libraries",class:"card"},{default:W(()=>[...t[12]||(t[12]=[r("div",{class:"card-icon"},"💻",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Code"),r("h3",{class:"card-title"},"SDK Libraries"),r("p",{class:"card-description"},"Server-side libraries and SDKs available in multiple programming languages for faster integration")],-1)])]),_:1}),j(i,{to:"/implementation-guide",class:"card"},{default:W(()=>[...t[13]||(t[13]=[r("div",{class:"card-icon"},"📖",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Guide"),r("h3",{class:"card-title"},"Implementation Guide"),r("p",{class:"card-description"},"Comprehensive guide covering legal entities, identifiers, and compliance requirements")],-1)])]),_:1}),j(i,{to:"/sample-code",class:"card"},{default:W(()=>[...t[14]||(t[14]=[r("div",{class:"card-icon"},"📋",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Examples"),r("h3",{class:"card-title"},"Sample Code"),r("p",{class:"card-description"},"Real-world examples and code snippets for common e-invoicing scenarios and use cases")],-1)])]),_:1})])])]),r("section",Xd,[r("div",Zd,[t[18]||(t[18]=r("div",{class:"section-header"},[r("h2",null,"Test Your Implementation"),r("p",null,"Learn how to test your e-invoicing integration before going live with real transactions")],-1)),r("div",el,[t[17]||(t[17]=ie('<div class="card coming-soon-card"><div class="card-icon">🧪</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Sandbox Environment</h3><p class="card-description">Test your e-invoicing integration in a safe sandbox environment before going live with real transactions</p></div></div><div class="card coming-soon-card"><div class="card-icon">✅</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Invoice Validation</h3><p class="card-description">Comprehensive validation rules from our platform to ensure your e-invoice formats are compliant before sending</p></div></div>',2)),j(i,{to:"/webhook-testing",class:"card"},{default:W(()=>[...t[16]||(t[16]=[r("div",{class:"card-icon"},"🔄",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Guide"),r("h3",{class:"card-title"},"Webhook Testing"),r("p",{class:"card-description"},"Learn how to implement and test webhooks for real-time e-invoicing status updates with Python examples")],-1)])]),_:1})])])]),r("section",tl,[r("div",nl,[t[22]||(t[22]=r("div",{class:"section-header"},[r("h2",null,"Go Live & Maintain"),r("p",null,"Tools and resources to help you maintain and troubleshoot your e-invoicing integration in production")],-1)),r("div",sl,[j(i,{to:"/developer-dashboard",class:"card"},{default:W(()=>[...t[19]||(t[19]=[r("div",{class:"card-icon"},"📊",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Dashboard"),r("h3",{class:"card-title"},"Developer Dashboard"),r("p",{class:"card-description"},"Monitor e-invoicing activity, track delivery status, and manage your integration with comprehensive administrative tools")],-1)])]),_:1}),j(i,{to:"/error-handling",class:"card"},{default:W(()=>[...t[20]||(t[20]=[r("div",{class:"card-icon"},"⚠️",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Troubleshooting"),r("h3",{class:"card-title"},"Error Handling"),r("p",{class:"card-description"},"Comprehensive guide to Storecove API error codes, troubleshooting steps, and resolution strategies")],-1)])]),_:1}),j(i,{to:"/api-logs",class:"card"},{default:W(()=>[...t[21]||(t[21]=[r("div",{class:"card-icon"},"📝",-1),r("div",{class:"card-content"},[r("span",{class:"card-label"},"Monitoring"),r("h3",{class:"card-title"},"API Logs"),r("p",{class:"card-description"},"Best practices for API logging, monitoring approaches, and real-world examples for production systems")],-1)])]),_:1})])])]),t[25]||(t[25]=ie('<section class="content-section"><div class="container"><div class="section-header"><h2>Stay Compliant &amp; Updated</h2><p>Keep informed about regulatory changes, new features, and best practices in e-invoicing</p></div><div class="card-grid"><div class="card coming-soon-card"><div class="card-icon">📧</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Developer Updates</h3><p class="card-description">Monthly newsletter with API updates, new features, and e-invoicing regulatory changes</p></div></div><div class="card coming-soon-card"><div class="card-icon">🔄</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Platform Updates</h3><p class="card-description">Stay informed about new features, API improvements, and supported e-invoicing formats</p></div></div><div class="card coming-soon-card"><div class="card-icon">📰</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Technical Blog</h3><p class="card-description">Deep-dive articles on e-invoicing trends, compliance updates, and integration best practices</p></div></div></div></div></section><section class="content-section"><div class="container"><div class="section-header"><h2>Advanced Developer Resources</h2><p>Comprehensive developer tools, examples, and advanced integration patterns in one place</p></div><div class="card-grid"><div class="card coming-soon-card"><div class="card-icon">🛠️</div><div class="card-content"><span class="card-label coming-soon-label">Coming Soon</span><h3 class="card-title">Advanced Tools</h3><p class="card-description">Advanced integration examples, specialized tools, and complex e-invoicing scenarios documentation</p></div></div></div></div></section>',2)),r("section",al,[r("div",ol,[t[23]||(t[23]=r("h3",{class:"feedback-question"},"Was this toolkit helpful?",-1)),r("div",il,[r("button",{class:"feedback-btn",onClick:t[0]||(t[0]=c=>o.submitFeedback("yes"))},"👍 Yes"),r("button",{class:"feedback-btn",onClick:t[1]||(t[1]=c=>o.submitFeedback("no"))},"👎 No")]),a.feedbackSubmitted?(re(),le("p",rl," Thank you for your feedback! ")):Lt("",!0)])]),t[26]||(t[26]=ie('<footer class="footer"><div class="container"><div class="footer-content"><div class="footer-section"><h3>Solutions</h3><ul class="footer-links"><li><a href="https://www.storecove.com/us/en/solutions/e-invoicing-api/" target="_blank">E-invoicing API</a></li><li><a href="https://www.storecove.com/us/en/solutions/peppol-access-point/" target="_blank">PEPPOL Access Point</a></li><li><a href="https://www.storecove.com/us/en/solutions/global-e-invoicing/" target="_blank">Global E-invoicing</a></li><li><a href="https://www.storecove.com/us/en/integrators/become-an-integrator/" target="_blank">Become an Integrator</a></li></ul></div><div class="footer-section"><h3>Networks</h3><ul class="footer-links"><li><a href="https://www.storecove.com/us/en/peppol/" target="_blank">Peppol</a></li><li><a href="https://www.storecove.com/us/en/solutions/dbna/" target="_blank">DBNAlliance (USA)</a></li><li><a href="https://www.storecove.com/us/en/solutions/finland/" target="_blank">Finvoice</a></li></ul></div><div class="footer-section"><h3>Resources</h3><ul class="footer-links"><li><a href="https://www.storecove.com/blog/" target="_blank">Blog</a></li><li><a href="https://www.storecove.com/us/en/webinars/" target="_blank">Webinars</a></li><li><a href="https://www.storecove.com/us/en/whitepapers/" target="_blank">White Papers</a></li></ul></div><div class="footer-section"><h3>Support</h3><ul class="footer-links"><li><a href="https://help.storecove.com/en/" target="_blank">Help Center</a></li><li><a href="https://www.storecove.com/us/en/contact/" target="_blank">Contact Us</a></li><li><a href="mailto:info@storecove.com">info@storecove.com</a></li><li><a href="https://app.storecove.com/users/sign_in" target="_blank">Login</a></li></ul></div></div><div class="footer-bottom"><div style="display:flex;align-items:center;justify-content:center;margin-bottom:1rem;"><img src="https://www.storecove.com/fileadmin/user_upload/Logo_white_3325x765.png" alt="Storecove" style="height:40px;width:auto;"></div><p>© 2024 Storecove. All rights reserved.</p></div></div></footer>',1))])}const dl=Re(Wd,[["render",cl]]);const ll={name:"IntegrationBasicsFAQ",mounted(){this.setupFAQInteractivity()},methods:{setupFAQInteractivity(){document.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",()=>{const n=t.nextElementSibling,s=n.style.display==="block";document.querySelectorAll(".faq-answer").forEach(a=>{a.style.display="none"}),s||(n.style.display="block")})})}}},ul={class:"faq-page"},fl={class:"nav-header"},vl={class:"container"},pl={class:"nav-content"},gl={class:"breadcrumb-section"},ml={class:"container"},hl={class:"breadcrumb"};function bl(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",ul,[r("nav",fl,[r("div",vl,[r("div",pl,[j(i,{to:"/",class:"nav-brand"},{default:W(()=>[...t[0]||(t[0]=[r("img",{src:"https://www.storecove.com/typo3conf/ext/spt_package/Resources/Public/images/common/logo_prev.png",alt:"Storecove"},null,-1)])]),_:1}),t[1]||(t[1]=ie('<ul class="nav-menu" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/docs/" target="_blank" data-v-c2dcc444>Docs</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/" target="_blank" data-v-c2dcc444>Solutions</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/integrators/" target="_blank" data-v-c2dcc444>Integrators</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/mystorecove/" target="_blank" data-v-c2dcc444>Resources</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/contact/" target="_blank" data-v-c2dcc444>Contact</a></li></ul><div class="nav-actions" data-v-c2dcc444><a href="https://www.storecove.com/us/en/start-now/" target="_blank" class="start-now-btn" data-v-c2dcc444>Start now</a></div><input type="text" class="search-box" placeholder="Search documentation..." data-v-c2dcc444>',3))])])]),r("section",gl,[r("div",ml,[r("nav",hl,[j(i,{to:"/"},{default:W(()=>[...t[2]||(t[2]=[Z("Integration Toolkit",-1)])]),_:1}),t[3]||(t[3]=r("span",{class:"separator"},">",-1)),t[4]||(t[4]=r("span",{class:"current"},"Integration Basics FAQ",-1))])])]),t[5]||(t[5]=ie(`<section class="main-content" data-v-c2dcc444><div class="container" data-v-c2dcc444><div class="content-wrapper" data-v-c2dcc444><h1 class="page-title" data-v-c2dcc444>Integration Basics FAQ</h1><p class="page-description" data-v-c2dcc444> Frequently asked questions about e-invoicing integration fundamentals and common implementation patterns with Storecove. </p><div class="faq-sections" data-v-c2dcc444><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🚀 Getting Started</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is Storecove and how does e-invoicing work?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove is a global e-invoicing platform that enables businesses to send and receive electronic invoices worldwide. We provide:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Global Compliance:</strong> Automatic compliance with local tax authorities and regulations</li><li data-v-c2dcc444><strong data-v-c2dcc444>Multiple Networks:</strong> Connection to Peppol, DBNAlliance, and country-specific networks</li><li data-v-c2dcc444><strong data-v-c2dcc444>Format Conversion:</strong> Automatic conversion to local e-invoice formats (UBL, CII, FatturaPA, etc.)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Unified API:</strong> Single integration point for worldwide e-invoicing</li></ul></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How long does it take to integrate with Storecove?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Integration typically takes <strong data-v-c2dcc444>1-6 weeks</strong> depending on your requirements:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Basic Integration:</strong> 1-2 weeks for simple sending functionality</li><li data-v-c2dcc444><strong data-v-c2dcc444>Full Integration:</strong> 3-4 weeks including receiving and advanced features</li><li data-v-c2dcc444><strong data-v-c2dcc444>Enterprise Integration:</strong> 4-6 weeks with custom workflows and multiple legal entities</li></ul><p data-v-c2dcc444>We recommend using our sandbox environment for development and testing.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What are the prerequisites for integration?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>To integrate with Storecove, you need:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Technical:</strong> RESTful JSON experience and HTTPS capability</li><li data-v-c2dcc444><strong data-v-c2dcc444>Business:</strong> Working ERP or accounting system</li><li data-v-c2dcc444><strong data-v-c2dcc444>Access:</strong> Storecove sandbox account and API key</li><li data-v-c2dcc444><strong data-v-c2dcc444>Legal Entity:</strong> Registered business with valid tax identifiers</li></ul></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🔐 API &amp; Authentication</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I authenticate with the Storecove API?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove uses Bearer token authentication:</p><div class="code-block" data-v-c2dcc444><pre data-v-c2dcc444><code data-v-c2dcc444>Authorization: Bearer YOUR_API_KEY_HERE</code></pre></div><p data-v-c2dcc444>Create API keys in your Storecove dashboard under <strong data-v-c2dcc444>API Keys</strong>. Never expose API keys in client-side code.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is the difference between Sandbox and Production environments?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444><strong data-v-c2dcc444>Sandbox Environment:</strong></p><ul data-v-c2dcc444><li data-v-c2dcc444>Free testing environment with test networks</li><li data-v-c2dcc444>Webhook simulation capabilities</li><li data-v-c2dcc444>Connected to test instances of Peppol, DBNAlliance, and tax authorities</li><li data-v-c2dcc444>Use for development and testing</li></ul><p data-v-c2dcc444><strong data-v-c2dcc444>Production Environment:</strong></p><ul data-v-c2dcc444><li data-v-c2dcc444>Live environment for real business transactions</li><li data-v-c2dcc444>Connected to live networks and tax authorities</li><li data-v-c2dcc444>Requires separate API keys and legal entity approval</li></ul></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I handle API errors and rate limiting?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Follow these best practices:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>HTTP 4xx errors:</strong> Client-side errors, check your request format</li><li data-v-c2dcc444><strong data-v-c2dcc444>HTTP 5xx errors:</strong> Server-side errors, retry with exponential backoff</li><li data-v-c2dcc444><strong data-v-c2dcc444>Rate Limiting:</strong> Implement job queues for high-volume sending</li><li data-v-c2dcc444><strong data-v-c2dcc444>Idempotency:</strong> Use the idempotencyGuid field to prevent duplicate submissions</li></ul></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🏢 Legal Entities &amp; Identifiers</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is a Legal Entity and why do I need one?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>A Legal Entity represents your company in the e-invoicing ecosystem:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Identity:</strong> Contains your company&#39;s legal and tax identifiers</li><li data-v-c2dcc444><strong data-v-c2dcc444>Sending:</strong> Required to send invoices (acts_as_sender: true)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Receiving:</strong> Advertises your identifiers on networks to receive invoices</li><li data-v-c2dcc444><strong data-v-c2dcc444>Compliance:</strong> Ensures proper business identification for tax authorities</li></ul><p data-v-c2dcc444>Create Legal Entities through the Storecove UI at <a href="https://app.storecove.com/senders" target="_blank" data-v-c2dcc444>app.storecove.com/senders</a></p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What identifiers do I need for my country?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Required identifiers vary by country. Common examples:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>EU Countries:</strong> VAT number (e.g., NL:VAT, DE:VAT)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Netherlands:</strong> KVK number + VAT number</li><li data-v-c2dcc444><strong data-v-c2dcc444>Germany:</strong> VAT number (for business) or LWID (for government)</li><li data-v-c2dcc444><strong data-v-c2dcc444>United States:</strong> EIN number, DUNS, or GLN</li><li data-v-c2dcc444><strong data-v-c2dcc444>Singapore:</strong> UEN number</li><li data-v-c2dcc444><strong data-v-c2dcc444>Australia:</strong> ABN number</li></ul><p data-v-c2dcc444>Check our <a href="https://www.storecove.com/docs/#sender-identifiers" target="_blank" data-v-c2dcc444>Sender Identifiers guide</a> for complete requirements.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How long does Legal Entity approval take?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Legal Entity approval typically takes:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Standard countries:</strong> Up to 24 hours</li><li data-v-c2dcc444><strong data-v-c2dcc444>Special countries (SG, IT, FI, ES, PT):</strong> May require additional setup - contact support first</li><li data-v-c2dcc444><strong data-v-c2dcc444>Peppol advertisement:</strong> Additional 24-48 hours to appear in network directory</li></ul><p data-v-c2dcc444>You can start testing immediately, but wait for approval before going live.</p></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>📤 Sending Documents</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What is the invoice sending workflow?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove follows a 5-phase sending workflow:</p><ol data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>CTC Compliance:</strong> Tax authority clearance (for countries like Italy, India)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Tax Compliance:</strong> Integration with tax filing systems</li><li data-v-c2dcc444><strong data-v-c2dcc444>Exchange Networks:</strong> Peppol, DBNAlliance routing</li><li data-v-c2dcc444><strong data-v-c2dcc444>Static Routes:</strong> Direct connections (Finvoice, etc.)</li><li data-v-c2dcc444><strong data-v-c2dcc444>Email Fallback:</strong> Email with country-specific attachments</li></ol><p data-v-c2dcc444>Storecove automatically determines the best route for each invoice.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What tax systems are supported?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove supports two tax calculation systems:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>tax_line_percentages (Recommended):</strong> Tax calculated from percentages</li><li data-v-c2dcc444><strong data-v-c2dcc444>tax_line_amounts:</strong> Pre-calculated tax amounts</li></ul><p data-v-c2dcc444>Most receivers only support percentage-based taxes, so use <code data-v-c2dcc444>tax_line_percentages</code> when possible.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I know if my invoice was delivered successfully?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove provides multiple delivery confirmations:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Webhooks:</strong> Real-time status updates via HTTP callbacks</li><li data-v-c2dcc444><strong data-v-c2dcc444>Status Events:</strong> cleared, succeeded, acknowledged, accepted, etc.</li><li data-v-c2dcc444><strong data-v-c2dcc444>Sending Evidence:</strong> Retrieve delivery proof via API</li><li data-v-c2dcc444><strong data-v-c2dcc444>Response Documents:</strong> Invoice responses from recipients</li></ul><p data-v-c2dcc444>Configure webhooks for automatic status notifications.</p></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🌐 Networks &amp; Routing</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>What e-invoicing networks does Storecove support?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Storecove connects to major global networks:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Peppol:</strong> European and international network</li><li data-v-c2dcc444><strong data-v-c2dcc444>DBNAlliance:</strong> US-based network</li><li data-v-c2dcc444><strong data-v-c2dcc444>Country-specific:</strong> Italy SDI, Singapore IRAS, Malaysia LHDNM</li><li data-v-c2dcc444><strong data-v-c2dcc444>Legacy networks:</strong> Finvoice (Finland), Svefaktura (Sweden)</li></ul><p data-v-c2dcc444>If the recipient isn&#39;t on a network, we send via email with compliant attachments.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I find out if a recipient can receive e-invoices?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Use the Discovery API to check recipient capabilities:</p><div class="code-block" data-v-c2dcc444><pre data-v-c2dcc444><code data-v-c2dcc444>POST /api/v2/discovery/receives
{
  &quot;documentTypes&quot;: [&quot;invoice&quot;],
  &quot;network&quot;: &quot;peppol&quot;,
  &quot;scheme&quot;: &quot;NL:VAT&quot;,
  &quot;identifier&quot;: &quot;NL123456789B01&quot;
}</code></pre></div><p data-v-c2dcc444>Returns whether the recipient can receive electronic invoices and via which networks.</p></div></div></div><div class="faq-section" data-v-c2dcc444><h2 class="section-title" data-v-c2dcc444>🔧 Troubleshooting</h2><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>Why is my invoice not being sent?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Common issues and solutions:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Invalid Legal Entity:</strong> Ensure your Legal Entity is approved</li><li data-v-c2dcc444><strong data-v-c2dcc444>Missing identifiers:</strong> Check recipient has valid routing identifiers</li><li data-v-c2dcc444><strong data-v-c2dcc444>No routing found:</strong> Add email address as fallback</li><li data-v-c2dcc444><strong data-v-c2dcc444>Invalid JSON:</strong> Validate your invoice structure</li><li data-v-c2dcc444><strong data-v-c2dcc444>Tax calculation errors:</strong> Ensure amounts add up correctly</li></ul><p data-v-c2dcc444>Check the webhook events for detailed error messages.</p></div></div><div class="faq-item" data-v-c2dcc444><h3 class="faq-question" data-v-c2dcc444>How do I debug webhook issues?</h3><div class="faq-answer" data-v-c2dcc444><p data-v-c2dcc444>Webhook troubleshooting steps:</p><ul data-v-c2dcc444><li data-v-c2dcc444><strong data-v-c2dcc444>Endpoint accessibility:</strong> Ensure your webhook URL is publicly accessible</li><li data-v-c2dcc444><strong data-v-c2dcc444>HTTP 200 response:</strong> Always return 200 OK for successful processing</li><li data-v-c2dcc444><strong data-v-c2dcc444>Retry mechanism:</strong> Storecove retries for 5 days if non-200 response</li><li data-v-c2dcc444><strong data-v-c2dcc444>Testing:</strong> Use webhook.site for development testing</li></ul><p data-v-c2dcc444>For pull-mode webhooks, use the WebhookInstances API to retrieve events.</p></div></div></div></div><div class="support-section" data-v-c2dcc444><h2 data-v-c2dcc444>Need More Help?</h2><div class="support-cards" data-v-c2dcc444><div class="support-card" data-v-c2dcc444><h3 data-v-c2dcc444>📚 Documentation</h3><p data-v-c2dcc444>Comprehensive API documentation and guides</p><a href="https://www.storecove.com/docs/" target="_blank" class="support-link" data-v-c2dcc444>View Docs</a></div><div class="support-card" data-v-c2dcc444><h3 data-v-c2dcc444>💬 Support</h3><p data-v-c2dcc444>Get help from our technical support team</p><a href="mailto:apisupport@storecove.com" class="support-link" data-v-c2dcc444>Contact Support</a></div><div class="support-card" data-v-c2dcc444><h3 data-v-c2dcc444>🎯 Sandbox</h3><p data-v-c2dcc444>Test your integration in our sandbox environment</p><a href="https://app.storecove.com/" target="_blank" class="support-link" data-v-c2dcc444>Access Sandbox</a></div></div></div></div></div></section><footer class="footer" data-v-c2dcc444><div class="container" data-v-c2dcc444><div class="footer-content" data-v-c2dcc444><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Solutions</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/e-invoicing-api/" target="_blank" data-v-c2dcc444>E-invoicing API</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/peppol-access-point/" target="_blank" data-v-c2dcc444>PEPPOL Access Point</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/global-e-invoicing/" target="_blank" data-v-c2dcc444>Global E-invoicing</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/integrators/become-an-integrator/" target="_blank" data-v-c2dcc444>Become an Integrator</a></li></ul></div><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Networks</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/peppol/" target="_blank" data-v-c2dcc444>Peppol</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/dbna/" target="_blank" data-v-c2dcc444>DBNAlliance (USA)</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/solutions/finland/" target="_blank" data-v-c2dcc444>Finvoice</a></li></ul></div><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Resources</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://www.storecove.com/docs/" target="_blank" data-v-c2dcc444>API Documentation</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/blog/" target="_blank" data-v-c2dcc444>Blog</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/webinars/" target="_blank" data-v-c2dcc444>Webinars</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/whitepapers/" target="_blank" data-v-c2dcc444>White Papers</a></li></ul></div><div class="footer-section" data-v-c2dcc444><h3 data-v-c2dcc444>Support</h3><ul class="footer-links" data-v-c2dcc444><li data-v-c2dcc444><a href="https://help.storecove.com/en/" target="_blank" data-v-c2dcc444>Help Center</a></li><li data-v-c2dcc444><a href="https://www.storecove.com/us/en/contact/" target="_blank" data-v-c2dcc444>Contact Us</a></li><li data-v-c2dcc444><a href="mailto:info@storecove.com" data-v-c2dcc444>info@storecove.com</a></li><li data-v-c2dcc444><a href="https://app.storecove.com/users/sign_in" target="_blank" data-v-c2dcc444>Login</a></li></ul></div></div><div class="footer-bottom" data-v-c2dcc444><div style="display:flex;align-items:center;justify-content:center;margin-bottom:1rem;" data-v-c2dcc444><img src="https://www.storecove.com/fileadmin/user_upload/Logo_white_3325x765.png" alt="Storecove" style="height:40px;width:auto;" data-v-c2dcc444></div><p data-v-c2dcc444>© 2024 Storecove. All rights reserved.</p></div></div></footer>`,2))])}const _l=Re(ll,[["render",bl],["__scopeId","data-v-c2dcc444"]]);const yl={name:"GettingStartedWebinar",data(){return{feedbackSubmitted:!1}},methods:{submitFeedback(e){this.feedbackSubmitted=!0,console.log(`Feedback submitted: ${e}`)},downloadSlides(e){alert(`Slides for ${e} webinar would be downloaded. This is a demo implementation.`)}}},wl={class:"page-container"},ql={class:"page-header"},kl={class:"container"},Sl={class:"content-section"},xl={class:"container"},El={class:"webinar-grid"},Cl={class:"webinar-card"},Il={class:"webinar-content"},Dl={class:"webinar-actions"},Pl={class:"webinar-card"},Rl={class:"webinar-content"},Tl={class:"webinar-actions"},Al={class:"webinar-card"},Ll={class:"webinar-content"},Ml={class:"webinar-actions"},Ol={class:"content-section"},$l={class:"container"},jl={class:"resource-grid"},Nl={class:"resource-card"},Fl={class:"resource-content"},Ul={class:"resource-card"},Bl={class:"resource-content"},Hl={class:"resource-card"},Wl={class:"resource-content"},Vl={class:"feedback-section"},Kl={class:"container"},zl={class:"feedback-buttons"},Gl={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function Ql(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",wl,[r("div",ql,[r("div",kl,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[5]||(t[5]=[Z("← Back to Toolkit",-1)])]),_:1}),t[6]||(t[6]=r("h1",{class:"page-title"},"Getting Started Webinar",-1)),t[7]||(t[7]=r("p",{class:"page-description"},"Watch our comprehensive webinars to learn about e-invoicing requirements and implementation strategies for different regions",-1))])]),t[40]||(t[40]=ie('<section class="content-section" data-v-b0cb9b24><div class="container" data-v-b0cb9b24><div class="intro-section" data-v-b0cb9b24><div class="intro-content" data-v-b0cb9b24><h2 data-v-b0cb9b24>Welcome to E-invoicing Training</h2><p data-v-b0cb9b24>These webinars provide essential knowledge about e-invoicing compliance, implementation strategies, and region-specific requirements. Whether you&#39;re just getting started or looking to expand to new markets, these sessions will help you understand the landscape and plan your integration accordingly.</p><div class="highlight-box" data-v-b0cb9b24><h3 data-v-b0cb9b24>What You&#39;ll Learn</h3><ul data-v-b0cb9b24><li data-v-b0cb9b24>Regional e-invoicing mandates and compliance requirements</li><li data-v-b0cb9b24>Implementation timelines and preparation strategies</li><li data-v-b0cb9b24>Technical requirements and API integration approaches</li><li data-v-b0cb9b24>Real-world demo of Storecove&#39;s e-invoicing platform</li><li data-v-b0cb9b24>Best practices for different market scenarios</li></ul></div></div></div></div></section>',1)),r("section",Sl,[r("div",xl,[t[24]||(t[24]=r("h2",{class:"section-title"},"Featured Training Sessions",-1)),r("div",El,[r("div",Cl,[t[13]||(t[13]=r("div",{class:"webinar-header"},[r("div",{class:"webinar-tag"},"🇧🇪 Belgium"),r("span",{class:"webinar-duration"},"45 min")],-1)),r("div",Il,[t[10]||(t[10]=r("h3",{class:"webinar-title"},"Belgium's E-Invoicing Mandate: How to Prepare for 1 January 2026",-1)),t[11]||(t[11]=r("p",{class:"webinar-description"},"Comprehensive overview of Belgium's upcoming e-invoicing mandate, including timeline, technical requirements, and preparation strategies for businesses and software providers.",-1)),t[12]||(t[12]=r("div",{class:"webinar-topics"},[r("h4",null,"Key Topics Covered:"),r("ul",null,[r("li",null,"Belgium's e-invoicing mandate timeline and phases"),r("li",null,"Technical requirements and supported formats"),r("li",null,"PEPPOL integration for Belgian market"),r("li",null,"Compliance strategies for different business sizes"),r("li",null,"Implementation roadmap and key milestones")])],-1)),r("div",Dl,[t[9]||(t[9]=r("a",{href:"https://my.demio.com/recording/FCk2cxxP",target:"_blank",class:"primary-btn"},[r("span",{class:"btn-icon"},"▶️"),Z(" Watch Recording ")],-1)),r("button",{class:"secondary-btn",onClick:t[0]||(t[0]=c=>o.downloadSlides("belgium"))},[...t[8]||(t[8]=[r("span",{class:"btn-icon"},"📄",-1),Z(" Download Slides ",-1)])])])])]),r("div",Pl,[t[19]||(t[19]=r("div",{class:"webinar-header"},[r("div",{class:"webinar-tag"},"🇸🇬 Singapore"),r("span",{class:"webinar-duration"},"40 min")],-1)),r("div",Rl,[t[16]||(t[16]=r("h3",{class:"webinar-title"},"C5 Compliance in Singapore",-1)),t[17]||(t[17]=r("p",{class:"webinar-description"},"Deep dive into Singapore's C5 compliance framework for e-invoicing, covering technical specifications, implementation guidelines, and regulatory requirements.",-1)),t[18]||(t[18]=r("div",{class:"webinar-topics"},[r("h4",null,"Key Topics Covered:"),r("ul",null,[r("li",null,"Understanding C5 compliance framework"),r("li",null,"Singapore's e-invoicing regulatory landscape"),r("li",null,"Technical implementation requirements"),r("li",null,"Integration with local accounting systems"),r("li",null,"Compliance verification and audit trails")])],-1)),r("div",Tl,[t[15]||(t[15]=r("a",{href:"https://my.demio.com/recording/HGxNtbOd",target:"_blank",class:"primary-btn"},[r("span",{class:"btn-icon"},"▶️"),Z(" Watch Recording ")],-1)),r("button",{class:"secondary-btn",onClick:t[1]||(t[1]=c=>o.downloadSlides("singapore"))},[...t[14]||(t[14]=[r("span",{class:"btn-icon"},"📄",-1),Z(" Download Slides ",-1)])])])])]),r("div",Al,[t[23]||(t[23]=r("div",{class:"webinar-header"},[r("div",{class:"webinar-tag"},"🇲🇾 Malaysia"),r("span",{class:"webinar-duration"},"50 min")],-1)),r("div",Ll,[t[22]||(t[22]=ie('<h3 class="webinar-title" data-v-b0cb9b24>Malaysia e-Invoicing: Storecove e-Invoicing API DEMO</h3><p class="webinar-description" data-v-b0cb9b24>Live demonstration of implementing e-invoicing for the Malaysian market using Storecove&#39;s API, including practical examples and code walkthroughs.</p><div class="webinar-topics" data-v-b0cb9b24><h4 data-v-b0cb9b24>Key Topics Covered:</h4><ul data-v-b0cb9b24><li data-v-b0cb9b24>Malaysia&#39;s e-invoicing mandate overview</li><li data-v-b0cb9b24>Live API demonstration and implementation</li><li data-v-b0cb9b24>Document format requirements and validation</li><li data-v-b0cb9b24>Integration patterns and best practices</li><li data-v-b0cb9b24>Real-world use cases and scenarios</li><li data-v-b0cb9b24>Q&amp;A with technical implementation examples</li></ul></div>',3)),r("div",Ml,[t[21]||(t[21]=r("a",{href:"https://my.demio.com/recording/eojMpBFi",target:"_blank",class:"primary-btn"},[r("span",{class:"btn-icon"},"▶️"),Z(" Watch Recording ")],-1)),r("button",{class:"secondary-btn",onClick:t[2]||(t[2]=c=>o.downloadSlides("malaysia"))},[...t[20]||(t[20]=[r("span",{class:"btn-icon"},"📄",-1),Z(" Download Slides ",-1)])])])])])])])]),r("section",Ol,[r("div",$l,[t[38]||(t[38]=r("h2",{class:"section-title"},"Additional Learning Resources",-1)),r("div",jl,[r("div",Nl,[t[28]||(t[28]=r("div",{class:"resource-icon"},"📚",-1)),r("div",Fl,[t[26]||(t[26]=r("h3",null,"E-invoicing Fundamentals",-1)),t[27]||(t[27]=r("p",null,"Start with the basics of e-invoicing, understanding different formats, networks, and compliance requirements.",-1)),j(i,{to:"/integration-basics-faq",class:"resource-link"},{default:W(()=>[...t[25]||(t[25]=[Z("View FAQ →",-1)])]),_:1})])]),r("div",Ul,[t[32]||(t[32]=r("div",{class:"resource-icon"},"💻",-1)),r("div",Bl,[t[30]||(t[30]=r("h3",null,"Technical Implementation",-1)),t[31]||(t[31]=r("p",null,"Detailed guides on API integration, document formats, and technical implementation patterns.",-1)),j(i,{to:"/implementation-guide",class:"resource-link"},{default:W(()=>[...t[29]||(t[29]=[Z("View Guide →",-1)])]),_:1})])]),r("div",Hl,[t[36]||(t[36]=r("div",{class:"resource-icon"},"📋",-1)),r("div",Wl,[t[34]||(t[34]=r("h3",null,"Sample Code Examples",-1)),t[35]||(t[35]=r("p",null,"Ready-to-use code examples in multiple programming languages for common integration scenarios.",-1)),j(i,{to:"/sample-code",class:"resource-link"},{default:W(()=>[...t[33]||(t[33]=[Z("View Examples →",-1)])]),_:1})])]),t[37]||(t[37]=r("div",{class:"resource-card"},[r("div",{class:"resource-icon"},"🌐"),r("div",{class:"resource-content"},[r("h3",null,"Regional Compliance"),r("p",null,"Stay updated on e-invoicing mandates and requirements across different countries and regions."),r("a",{href:"https://www.storecove.com/blog/",target:"_blank",class:"resource-link"},"Read Blog →")])],-1))])])]),t[41]||(t[41]=ie('<section class="content-section next-steps-section" data-v-b0cb9b24><div class="container" data-v-b0cb9b24><div class="next-steps-content" data-v-b0cb9b24><h2 data-v-b0cb9b24>Ready to Get Started?</h2><p data-v-b0cb9b24>After watching these webinars, you&#39;ll have a solid understanding of e-invoicing requirements and implementation strategies. Here&#39;s what you can do next:</p><div class="steps-grid" data-v-b0cb9b24><div class="step-card" data-v-b0cb9b24><div class="step-number" data-v-b0cb9b24>1</div><div class="step-content" data-v-b0cb9b24><h3 data-v-b0cb9b24>Explore the Documentation</h3><p data-v-b0cb9b24>Dive deeper into our comprehensive API documentation to understand the technical details.</p><a href="https://www.storecove.com/docs/" target="_blank" class="step-link" data-v-b0cb9b24>View Docs →</a></div></div><div class="step-card" data-v-b0cb9b24><div class="step-number" data-v-b0cb9b24>2</div><div class="step-content" data-v-b0cb9b24><h3 data-v-b0cb9b24>Try the Sandbox</h3><p data-v-b0cb9b24>Test your integration in our sandbox environment before going live with real transactions.</p><a href="https://app.storecove.com/" target="_blank" class="step-link" data-v-b0cb9b24>Access Sandbox →</a></div></div><div class="step-card" data-v-b0cb9b24><div class="step-number" data-v-b0cb9b24>3</div><div class="step-content" data-v-b0cb9b24><h3 data-v-b0cb9b24>Contact Our Team</h3><p data-v-b0cb9b24>Get personalized support and guidance from our integration specialists.</p><a href="https://www.storecove.com/us/en/contact/" target="_blank" class="step-link" data-v-b0cb9b24>Contact Us →</a></div></div></div></div></div></section>',1)),r("section",Vl,[r("div",Kl,[t[39]||(t[39]=r("h3",{class:"feedback-question"},"Was this webinar content helpful?",-1)),r("div",zl,[r("button",{class:"feedback-btn",onClick:t[3]||(t[3]=c=>o.submitFeedback("yes"))},"👍 Yes"),r("button",{class:"feedback-btn",onClick:t[4]||(t[4]=c=>o.submitFeedback("no"))},"👎 No")]),a.feedbackSubmitted?(re(),le("p",Gl," Thank you for your feedback! ")):Lt("",!0)])])])}const Yl=Re(yl,[["render",Ql],["__scopeId","data-v-b0cb9b24"]]);const Jl={name:"PlatformPlugins",data(){return{email:"",subscribed:!1,feedbackSubmitted:!1,showRequestForm:!1,platformRequest:{name:"",type:"",useCase:"",email:""}}},methods:{subscribeToUpdates(){this.email&&!this.subscribed&&(this.subscribed=!0,console.log(`Subscribed email: ${this.email}`))},submitFeedback(e){this.feedbackSubmitted=!0,console.log(`Platform feedback: ${e}`)},submitPlatformRequest(){console.log("Platform request submitted:",this.platformRequest),this.showRequestForm=!1,alert("Thank you for your request! We'll consider it for our roadmap and get back to you."),this.platformRequest={name:"",type:"",useCase:"",email:""}}}},Xl={class:"page-container"},Zl={class:"page-header"},eu={class:"container"},tu={class:"coming-soon-section"},nu={class:"container"},su={class:"coming-soon-content"},au={class:"notify-section"},ou={class:"notify-form"},iu=["disabled"],ru={key:0,class:"success-message"},cu={class:"content-section"},du={class:"container"},lu={class:"custom-options-grid"},uu={class:"custom-option-card"},fu={class:"custom-content"},vu={class:"custom-option-card"},pu={class:"custom-content"},gu={class:"modal-header"},mu={class:"modal-body"},hu={class:"form-group"},bu={class:"form-group"},_u={class:"form-group"},yu={class:"form-group"},wu={class:"form-actions"},qu={class:"content-section alternatives-section"},ku={class:"container"},Su={class:"alternatives-grid"},xu={class:"alternative-card"},Eu={class:"alternative-content"},Cu={class:"alternative-card"},Iu={class:"alternative-content"},Du={class:"feedback-section"},Pu={class:"container"},Ru={class:"feedback-buttons"},Tu={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function Au(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",Xl,[r("div",Zl,[r("div",eu,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[17]||(t[17]=[Z("← Back to Toolkit",-1)])]),_:1}),t[18]||(t[18]=r("h1",{class:"page-title"},"Platform Plugins",-1)),t[19]||(t[19]=r("p",{class:"page-description"},"Pre-built integrations for popular accounting platforms and ERP systems",-1))])]),r("section",tu,[r("div",nu,[r("div",su,[t[22]||(t[22]=r("div",{class:"coming-soon-icon"},"🚀",-1)),t[23]||(t[23]=r("h2",null,"Coming Soon",-1)),t[24]||(t[24]=r("p",null,"We're working hard to bring you ready-to-use plugins for the most popular accounting and ERP platforms. These plugins will make e-invoicing integration even easier by providing pre-built connectors that require minimal configuration.",-1)),r("div",au,[t[20]||(t[20]=r("h3",null,"Get Notified When Available",-1)),t[21]||(t[21]=r("p",null,"Be the first to know when our platform plugins are ready. We'll send you an email with installation instructions and setup guides.",-1)),r("div",ou,[tt(r("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=c=>a.email=c),placeholder:"Enter your email address",class:"email-input",onKeyup:t[1]||(t[1]=Rc((...c)=>o.subscribeToUpdates&&o.subscribeToUpdates(...c),["enter"]))},null,544),[[bn,a.email]]),r("button",{onClick:t[2]||(t[2]=(...c)=>o.subscribeToUpdates&&o.subscribeToUpdates(...c)),class:"notify-btn",disabled:!a.email||a.subscribed},Ja(a.subscribed?"✓ Subscribed":"Notify Me"),9,iu)]),a.subscribed?(re(),le("p",ru," Thanks! We'll notify you when platform plugins are available. ")):Lt("",!0)])])])]),t[56]||(t[56]=ie('<section class="content-section" data-v-b1966f3a><div class="container" data-v-b1966f3a><h2 class="section-title" data-v-b1966f3a>Planned Platform Integrations</h2><p class="section-description" data-v-b1966f3a>Here&#39;s what we&#39;re working on to make e-invoicing integration seamless across different platforms</p><div class="plugin-grid" data-v-b1966f3a><div class="plugin-category" data-v-b1966f3a><h3 class="category-title" data-v-b1966f3a><span class="category-icon" data-v-b1966f3a>💰</span> Accounting Software </h3><div class="plugin-list" data-v-b1966f3a><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/quickbooks.intuit.com" alt="QuickBooks" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>QuickBooks Online</h4><p data-v-b1966f3a>Direct integration with QuickBooks Online for automated e-invoice sending and receiving</p></div></div><span class="plugin-status" data-v-b1966f3a>Q2 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/xero.com" alt="Xero" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Xero</h4><p data-v-b1966f3a>Seamless e-invoicing integration with Xero accounting platform</p></div></div><span class="plugin-status" data-v-b1966f3a>Q2 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/sage.com" alt="Sage" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Sage Business Cloud</h4><p data-v-b1966f3a>Plugin for Sage Business Cloud Accounting with full e-invoicing support</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><div class="plugin-logo plugin-placeholder" data-v-b1966f3a>FW</div><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>FreshBooks</h4><p data-v-b1966f3a>E-invoicing capabilities integrated directly into FreshBooks workflow</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div></div></div><div class="plugin-category" data-v-b1966f3a><h3 class="category-title" data-v-b1966f3a><span class="category-icon" data-v-b1966f3a>🏢</span> ERP Systems </h3><div class="plugin-list" data-v-b1966f3a><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/sap.com" alt="SAP" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>SAP Business One</h4><p data-v-b1966f3a>Enterprise-grade e-invoicing integration for SAP Business One systems</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/oracle.com" alt="Oracle" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Oracle NetSuite</h4><p data-v-b1966f3a>Comprehensive e-invoicing solution for Oracle NetSuite environments</p></div></div><span class="plugin-status" data-v-b1966f3a>Q4 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Microsoft Dynamics 365</h4><p data-v-b1966f3a>Native e-invoicing integration for Microsoft Dynamics 365 Business Central</p></div></div><span class="plugin-status" data-v-b1966f3a>Q4 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/odoo.com" alt="Odoo" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Odoo</h4><p data-v-b1966f3a>Open-source ERP integration with full e-invoicing compliance features</p></div></div><span class="plugin-status" data-v-b1966f3a>Q1 2025</span></div></div></div><div class="plugin-category" data-v-b1966f3a><h3 class="category-title" data-v-b1966f3a><span class="category-icon" data-v-b1966f3a>🛒</span> E-commerce Platforms </h3><div class="plugin-list" data-v-b1966f3a><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/shopify.com" alt="Shopify" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Shopify</h4><p data-v-b1966f3a>Automated e-invoicing for Shopify stores with compliance features</p></div></div><span class="plugin-status" data-v-b1966f3a>Q2 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/woocommerce.com" alt="WooCommerce" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>WooCommerce</h4><p data-v-b1966f3a>WordPress e-commerce plugin with integrated e-invoicing capabilities</p></div></div><span class="plugin-status" data-v-b1966f3a>Q3 2024</span></div><div class="plugin-item" data-v-b1966f3a><div class="plugin-info" data-v-b1966f3a><img src="https://logo.clearbit.com/magento.com" alt="Magento" class="plugin-logo" data-v-b1966f3a><div class="plugin-details" data-v-b1966f3a><h4 data-v-b1966f3a>Magento Commerce</h4><p data-v-b1966f3a>Enterprise e-commerce solution with comprehensive e-invoicing integration</p></div></div><span class="plugin-status" data-v-b1966f3a>Q4 2024</span></div></div></div></div></div></section>',1)),r("section",cu,[r("div",du,[t[33]||(t[33]=r("h2",{class:"section-title"},"Need Something Custom?",-1)),r("div",lu,[t[32]||(t[32]=r("div",{class:"custom-option-card"},[r("div",{class:"custom-icon"},"🔧"),r("div",{class:"custom-content"},[r("h3",null,"Custom Plugin Development"),r("p",null,"We can develop custom plugins for your specific platform or system. Our team has experience integrating with various APIs and can create tailored solutions."),r("a",{href:"https://www.storecove.com/us/en/contact/",target:"_blank",class:"custom-link"},"Discuss Custom Development →")])],-1)),r("div",uu,[t[27]||(t[27]=r("div",{class:"custom-icon"},"📋",-1)),r("div",fu,[t[25]||(t[25]=r("h3",null,"Request a Platform",-1)),t[26]||(t[26]=r("p",null,"Don't see your platform listed? Let us know what you need and we'll consider it for our roadmap based on demand and feasibility.",-1)),r("button",{onClick:t[3]||(t[3]=c=>a.showRequestForm=!0),class:"custom-link"},"Request Platform →")])]),r("div",vu,[t[31]||(t[31]=r("div",{class:"custom-icon"},"💻",-1)),r("div",pu,[t[29]||(t[29]=r("h3",null,"Direct API Integration",-1)),t[30]||(t[30]=r("p",null,"For maximum flexibility, you can always integrate directly with our REST API. We provide comprehensive documentation and code examples.",-1)),j(i,{to:"/implementation-guide",class:"custom-link"},{default:W(()=>[...t[28]||(t[28]=[Z("View Implementation Guide →",-1)])]),_:1})])])])])]),a.showRequestForm?(re(),le("div",{key:0,class:"modal-overlay",onClick:t[12]||(t[12]=c=>a.showRequestForm=!1)},[r("div",{class:"modal-content",onClick:t[11]||(t[11]=xa(()=>{},["stop"]))},[r("div",gu,[t[34]||(t[34]=r("h3",null,"Request a Platform Plugin",-1)),r("button",{onClick:t[4]||(t[4]=c=>a.showRequestForm=!1),class:"close-btn"},"×")]),r("div",mu,[t[41]||(t[41]=r("p",null,"Help us prioritize our plugin development by telling us which platform you need:",-1)),r("form",{onSubmit:t[10]||(t[10]=xa((...c)=>o.submitPlatformRequest&&o.submitPlatformRequest(...c),["prevent"]))},[r("div",hu,[t[35]||(t[35]=r("label",{for:"platform-name"},"Platform Name *",-1)),tt(r("input",{type:"text",id:"platform-name","onUpdate:modelValue":t[5]||(t[5]=c=>a.platformRequest.name=c),placeholder:"e.g., Salesforce, HubSpot, etc.",required:""},null,512),[[bn,a.platformRequest.name]])]),r("div",bu,[t[37]||(t[37]=r("label",{for:"platform-type"},"Platform Type *",-1)),tt(r("select",{id:"platform-type","onUpdate:modelValue":t[6]||(t[6]=c=>a.platformRequest.type=c),required:""},[...t[36]||(t[36]=[ie('<option value="" data-v-b1966f3a>Select type...</option><option value="accounting" data-v-b1966f3a>Accounting Software</option><option value="erp" data-v-b1966f3a>ERP System</option><option value="ecommerce" data-v-b1966f3a>E-commerce Platform</option><option value="crm" data-v-b1966f3a>CRM System</option><option value="other" data-v-b1966f3a>Other</option>',6)])],512),[[Cc,a.platformRequest.type]])]),r("div",_u,[t[38]||(t[38]=r("label",{for:"use-case"},"Use Case *",-1)),tt(r("textarea",{id:"use-case","onUpdate:modelValue":t[7]||(t[7]=c=>a.platformRequest.useCase=c),placeholder:"Describe how you would use this integration...",rows:"3",required:""},null,512),[[bn,a.platformRequest.useCase]])]),r("div",yu,[t[39]||(t[39]=r("label",{for:"contact-email"},"Contact Email *",-1)),tt(r("input",{type:"email",id:"contact-email","onUpdate:modelValue":t[8]||(t[8]=c=>a.platformRequest.email=c),placeholder:"your@email.com",required:""},null,512),[[bn,a.platformRequest.email]])]),r("div",wu,[r("button",{type:"button",onClick:t[9]||(t[9]=c=>a.showRequestForm=!1),class:"secondary-btn"},"Cancel"),t[40]||(t[40]=r("button",{type:"submit",class:"primary-btn"},"Submit Request",-1))])],32)])])])):Lt("",!0),r("section",qu,[r("div",ku,[t[53]||(t[53]=r("h2",{class:"section-title"},"Current Integration Options",-1)),t[54]||(t[54]=r("p",{class:"section-description"},"While we work on these plugins, here are the current ways to integrate e-invoicing:",-1)),r("div",Su,[t[52]||(t[52]=ie('<div class="alternative-card" data-v-b1966f3a><div class="alternative-icon" data-v-b1966f3a>🔌</div><div class="alternative-content" data-v-b1966f3a><h3 data-v-b1966f3a>REST API Integration</h3><p data-v-b1966f3a>Our comprehensive REST API provides full access to all e-invoicing features. Perfect for custom integrations and existing applications.</p><div class="alternative-features" data-v-b1966f3a><span class="feature-tag" data-v-b1966f3a>Full Control</span><span class="feature-tag" data-v-b1966f3a>Real-time</span><span class="feature-tag" data-v-b1966f3a>Scalable</span></div><a href="https://www.storecove.com/docs/" target="_blank" class="alternative-link" data-v-b1966f3a>Explore API →</a></div></div>',1)),r("div",xu,[t[46]||(t[46]=r("div",{class:"alternative-icon"},"📚",-1)),r("div",Eu,[t[43]||(t[43]=r("h3",null,"SDK Libraries",-1)),t[44]||(t[44]=r("p",null,"Use our SDK libraries in various programming languages to speed up your integration development process.",-1)),t[45]||(t[45]=r("div",{class:"alternative-features"},[r("span",{class:"feature-tag"},"Multiple Languages"),r("span",{class:"feature-tag"},"Type Safe"),r("span",{class:"feature-tag"},"Well Documented")],-1)),j(i,{to:"/sdk-libraries",class:"alternative-link"},{default:W(()=>[...t[42]||(t[42]=[Z("View SDKs →",-1)])]),_:1})])]),r("div",Cu,[t[51]||(t[51]=r("div",{class:"alternative-icon"},"📋",-1)),r("div",Iu,[t[48]||(t[48]=r("h3",null,"Sample Code & Examples",-1)),t[49]||(t[49]=r("p",null,"Ready-to-use code examples and implementation patterns to help you get started quickly with common scenarios.",-1)),t[50]||(t[50]=r("div",{class:"alternative-features"},[r("span",{class:"feature-tag"},"Copy & Paste"),r("span",{class:"feature-tag"},"Best Practices"),r("span",{class:"feature-tag"},"Production Ready")],-1)),j(i,{to:"/sample-code",class:"alternative-link"},{default:W(()=>[...t[47]||(t[47]=[Z("View Examples →",-1)])]),_:1})])])])])]),r("section",Du,[r("div",Pu,[t[55]||(t[55]=r("h3",{class:"feedback-question"},"Which platform integration would be most valuable to you?",-1)),r("div",Ru,[r("button",{class:"feedback-btn",onClick:t[13]||(t[13]=c=>o.submitFeedback("accounting"))},"💰 Accounting Software"),r("button",{class:"feedback-btn",onClick:t[14]||(t[14]=c=>o.submitFeedback("erp"))},"🏢 ERP Systems"),r("button",{class:"feedback-btn",onClick:t[15]||(t[15]=c=>o.submitFeedback("ecommerce"))},"🛒 E-commerce Platforms"),r("button",{class:"feedback-btn",onClick:t[16]||(t[16]=c=>o.submitFeedback("other"))},"🔧 Other/Custom")]),a.feedbackSubmitted?(re(),le("p",Tu," Thank you for your input! This helps us prioritize our development. ")):Lt("",!0)])])])}const Lu=Re(Jl,[["render",Au],["__scopeId","data-v-b1966f3a"]]);const Mu={name:"SDKLibraries"},Ou={class:"sdk-libraries"},$u={class:"back-navigation"},ju={class:"container"};function Nu(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",Ou,[t[1]||(t[1]=ie('<div class="hero-section" data-v-15d35fb4><div class="container" data-v-15d35fb4><div class="hero-content" data-v-15d35fb4><h1 data-v-15d35fb4>SDK Libraries</h1><p data-v-15d35fb4>Official and community-maintained SDKs for Storecove integration</p></div></div></div><section class="content-section" data-v-15d35fb4><div class="container" data-v-15d35fb4><div class="coming-soon" data-v-15d35fb4><h2 data-v-15d35fb4>Coming Soon</h2><p data-v-15d35fb4>SDK libraries documentation is being prepared. Check back soon!</p></div></div></section>',2)),r("section",$u,[r("div",ju,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[0]||(t[0]=[Z(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const Fu=Re(Mu,[["render",Nu],["__scopeId","data-v-15d35fb4"]]);const Uu={name:"ImplementationGuide"},Bu={class:"implementation-guide"},Hu={class:"back-navigation"},Wu={class:"container"};function Vu(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",Bu,[t[1]||(t[1]=ie('<div class="hero-section" data-v-1d991c1f><div class="container" data-v-1d991c1f><div class="hero-content" data-v-1d991c1f><h1 data-v-1d991c1f>Implementation Guide</h1><p data-v-1d991c1f>Step-by-step guide to implementing Storecove e-invoicing</p></div></div></div><section class="content-section" data-v-1d991c1f><div class="container" data-v-1d991c1f><div class="coming-soon" data-v-1d991c1f><h2 data-v-1d991c1f>Coming Soon</h2><p data-v-1d991c1f>Implementation guide is being prepared. Check back soon!</p></div></div></section>',2)),r("section",Hu,[r("div",Wu,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[0]||(t[0]=[Z(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const Ku=Re(Uu,[["render",Vu],["__scopeId","data-v-1d991c1f"]]);const zu={name:"SampleCode"},Gu={class:"sample-code"},Qu={class:"back-navigation"},Yu={class:"container"};function Ju(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",Gu,[t[1]||(t[1]=ie('<div class="hero-section" data-v-99c1b9d1><div class="container" data-v-99c1b9d1><div class="hero-content" data-v-99c1b9d1><h1 data-v-99c1b9d1>Sample Code</h1><p data-v-99c1b9d1>Ready-to-use code examples for Storecove integration</p></div></div></div><section class="content-section" data-v-99c1b9d1><div class="container" data-v-99c1b9d1><div class="coming-soon" data-v-99c1b9d1><h2 data-v-99c1b9d1>Coming Soon</h2><p data-v-99c1b9d1>Sample code examples are being prepared. Check back soon!</p></div></div></section>',2)),r("section",Qu,[r("div",Yu,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[0]||(t[0]=[Z(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const Xu=Re(zu,[["render",Ju],["__scopeId","data-v-99c1b9d1"]]);const Zu={name:"WebhookTesting",data(){return{feedbackSubmitted:!1}},methods:{submitFeedback(e){this.feedbackSubmitted=!0,console.log(`Feedback submitted: ${e}`)},copyCode(e){const n=document.getElementById(e).textContent;navigator.clipboard.writeText(n).then(()=>{const s=event.target,a=s.textContent;s.textContent="Copied!",setTimeout(()=>{s.textContent=a},2e3)})},downloadSamplePayloads(){const e={"document.sent":{type:"document.sent",timestamp:1640995200,data:{id:"doc_123456789",invoice_number:"INV-2024-001",amount:1e3,currency:"EUR",sent_at:"2024-01-01T10:00:00Z"}},"document.delivered":{type:"document.delivered",timestamp:1640998800,data:{id:"doc_123456789",invoice_number:"INV-2024-001",delivered_at:"2024-01-01T11:00:00Z",recipient:{name:"Example Company Ltd",identifier:"1234567890"}}}},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download="storecove-webhook-samples.json",s.click(),URL.revokeObjectURL(n)}}},ef={class:"page-container"},tf={class:"page-header"},nf={class:"container"},sf={class:"content-section"},af={class:"container"},of={class:"setup-steps"},rf={class:"step-item"},cf={class:"step-content"},df={class:"code-block"},lf={class:"code-header"},uf={class:"content-section"},ff={class:"container"},vf={class:"code-example"},pf={class:"code-block"},gf={class:"code-header"},mf={class:"code-example"},hf={class:"code-block"},bf={class:"code-header"},_f={class:"code-example"},yf={class:"code-block"},wf={class:"code-header"},qf={class:"content-section testing-tools-section"},kf={class:"container"},Sf={class:"tools-grid"},xf={class:"tool-card"},Ef={class:"tool-content"},Cf={class:"feedback-section"},If={class:"container"},Df={class:"feedback-buttons"},Pf={key:0,style:{"margin-top":"1rem",color:"var(--primary-color)"}};function Rf(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",ef,[r("div",tf,[r("div",nf,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[7]||(t[7]=[Z("← Back to Toolkit",-1)])]),_:1}),t[8]||(t[8]=r("h1",{class:"page-title"},"Webhook Testing Guide",-1)),t[9]||(t[9]=r("p",{class:"page-description"},"Learn how to implement and test webhooks for real-time e-invoicing status updates using Storecove API",-1))])]),t[36]||(t[36]=ie('<section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><div class="intro-section" data-v-a8c1bffc><h2 data-v-a8c1bffc>What are Webhooks?</h2><p data-v-a8c1bffc>Webhooks are HTTP callbacks that Storecove sends to your application when specific events occur during e-invoice processing. Instead of polling our API for status updates, webhooks provide real-time notifications about document delivery, acceptance, rejection, and other important events.</p><div class="highlight-box" data-v-a8c1bffc><h3 data-v-a8c1bffc>Key Benefits</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc><strong data-v-a8c1bffc>Real-time updates:</strong> Get instant notifications when invoice status changes</li><li data-v-a8c1bffc><strong data-v-a8c1bffc>Reduced API calls:</strong> No need for constant polling to check status</li><li data-v-a8c1bffc><strong data-v-a8c1bffc>Better user experience:</strong> Provide immediate feedback to your users</li><li data-v-a8c1bffc><strong data-v-a8c1bffc>Automated workflows:</strong> Trigger business processes based on events</li></ul></div></div></div></section><section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><h2 class="section-title" data-v-a8c1bffc>Webhook Events in Storecove API</h2><p class="section-description" data-v-a8c1bffc>Storecove sends webhooks for various e-invoicing lifecycle events</p><div class="events-grid" data-v-a8c1bffc><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>📤</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Sent</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.sent</code></p><p data-v-a8c1bffc>Triggered when an e-invoice is successfully sent to the recipient&#39;s network or system.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>📥</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Delivered</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.delivered</code></p><p data-v-a8c1bffc>Fired when the recipient&#39;s system confirms receipt of the e-invoice.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>✅</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Accepted</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.accepted</code></p><p data-v-a8c1bffc>Sent when the recipient accepts the e-invoice for processing.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>❌</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Document Rejected</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.rejected</code></p><p data-v-a8c1bffc>Triggered when the recipient rejects the e-invoice, often with rejection reason.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>⚠️</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Delivery Failed</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.failed</code></p><p data-v-a8c1bffc>Fired when document delivery fails due to network or validation issues.</p></div></div><div class="event-card" data-v-a8c1bffc><div class="event-icon" data-v-a8c1bffc>🔄</div><div class="event-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Status Updated</h3><p data-v-a8c1bffc><code data-v-a8c1bffc>document.status_changed</code></p><p data-v-a8c1bffc>General status change event for any document lifecycle updates.</p></div></div></div></div></section>',2)),r("section",sf,[r("div",af,[t[16]||(t[16]=r("h2",{class:"section-title"},"Setting Up Webhooks",-1)),r("div",of,[r("div",rf,[t[14]||(t[14]=r("div",{class:"step-number"},"1",-1)),r("div",cf,[t[12]||(t[12]=r("h3",null,"Configure Webhook URL",-1)),t[13]||(t[13]=r("p",null,"Set up your webhook endpoint URL in the Storecove dashboard or via API. This URL must be publicly accessible and support HTTPS.",-1)),r("div",df,[r("div",lf,[t[10]||(t[10]=r("span",{class:"code-language"},"API Request",-1)),r("button",{onClick:t[0]||(t[0]=c=>o.copyCode("webhook-config")),class:"copy-btn"},"Copy")]),t[11]||(t[11]=r("pre",{id:"webhook-config"},[r("code",null,`POST /api/v2/webhooks
{
  "url": "https://your-domain.com/webhooks/storecove",
  "events": ["document.sent", "document.delivered", "document.accepted"],
  "secret": "your-webhook-secret"
}`)],-1))])])]),t[15]||(t[15]=ie('<div class="step-item" data-v-a8c1bffc><div class="step-number" data-v-a8c1bffc>2</div><div class="step-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Implement Webhook Endpoint</h3><p data-v-a8c1bffc>Create an HTTP endpoint that can receive POST requests from Storecove and process the webhook payload.</p></div></div><div class="step-item" data-v-a8c1bffc><div class="step-number" data-v-a8c1bffc>3</div><div class="step-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Verify Webhook Signatures</h3><p data-v-a8c1bffc>Implement signature verification to ensure webhooks are authentic and from Storecove.</p></div></div><div class="step-item" data-v-a8c1bffc><div class="step-number" data-v-a8c1bffc>4</div><div class="step-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Handle Events Appropriately</h3><p data-v-a8c1bffc>Process different event types and update your application state accordingly.</p></div></div>',3))])])]),r("section",uf,[r("div",ff,[t[29]||(t[29]=r("h2",{class:"section-title"},"Python Implementation Examples",-1)),r("div",vf,[t[19]||(t[19]=r("h3",null,"Basic Flask Webhook Handler",-1)),t[20]||(t[20]=r("p",null,"Simple Flask application to receive and process Storecove webhooks:",-1)),r("div",pf,[r("div",gf,[t[17]||(t[17]=r("span",{class:"code-language"},"Python - Flask",-1)),r("button",{onClick:t[1]||(t[1]=c=>o.copyCode("flask-basic")),class:"copy-btn"},"Copy")]),t[18]||(t[18]=r("pre",{id:"flask-basic"},[r("code",null,`from flask import Flask, request, jsonify
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
    app.run(debug=True, port=5000)`)],-1))])]),r("div",mf,[t[23]||(t[23]=r("h3",null,"Advanced Webhook Processor with Database Integration",-1)),t[24]||(t[24]=r("p",null,"More comprehensive example with database updates and error handling:",-1)),r("div",hf,[r("div",bf,[t[21]||(t[21]=r("span",{class:"code-language"},"Python - Advanced Handler",-1)),r("button",{onClick:t[2]||(t[2]=c=>o.copyCode("advanced-handler")),class:"copy-btn"},"Copy")]),t[22]||(t[22]=r("pre",{id:"advanced-handler"},[r("code",null,`import os
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
    app.run(debug=True, port=5000)`)],-1))])]),r("div",_f,[t[27]||(t[27]=r("h3",null,"Testing Your Webhook Handler",-1)),t[28]||(t[28]=r("p",null,"Python script to test your webhook endpoint locally:",-1)),r("div",yf,[r("div",wf,[t[25]||(t[25]=r("span",{class:"code-language"},"Python - Test Script",-1)),r("button",{onClick:t[3]||(t[3]=c=>o.copyCode("test-webhook")),class:"copy-btn"},"Copy")]),t[26]||(t[26]=r("pre",{id:"test-webhook"},[r("code",null,`import requests
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
    tester.run_test_suite()`)],-1))])])])]),t[37]||(t[37]=ie('<section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><h2 class="section-title" data-v-a8c1bffc>Best Practices</h2><div class="best-practices-grid" data-v-a8c1bffc><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>🔒</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Security</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Always verify webhook signatures</li><li data-v-a8c1bffc>Use HTTPS endpoints only</li><li data-v-a8c1bffc>Implement rate limiting</li><li data-v-a8c1bffc>Log security events</li></ul></div></div><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>⚡</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Performance</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Process webhooks asynchronously</li><li data-v-a8c1bffc>Respond quickly (&lt; 5 seconds)</li><li data-v-a8c1bffc>Implement proper error handling</li><li data-v-a8c1bffc>Use database transactions</li></ul></div></div><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>🔄</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Reliability</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Handle duplicate events gracefully</li><li data-v-a8c1bffc>Implement idempotent processing</li><li data-v-a8c1bffc>Use retry logic for failures</li><li data-v-a8c1bffc>Monitor webhook health</li></ul></div></div><div class="practice-card" data-v-a8c1bffc><div class="practice-icon" data-v-a8c1bffc>📊</div><div class="practice-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Monitoring</h3><ul data-v-a8c1bffc><li data-v-a8c1bffc>Log all webhook events</li><li data-v-a8c1bffc>Track processing times</li><li data-v-a8c1bffc>Monitor error rates</li><li data-v-a8c1bffc>Set up alerts for failures</li></ul></div></div></div></div></section><section class="content-section" data-v-a8c1bffc><div class="container" data-v-a8c1bffc><h2 class="section-title" data-v-a8c1bffc>Common Issues &amp; Troubleshooting</h2><div class="troubleshooting-list" data-v-a8c1bffc><div class="trouble-item" data-v-a8c1bffc><h3 data-v-a8c1bffc>Webhooks Not Being Received</h3><div class="trouble-content" data-v-a8c1bffc><p data-v-a8c1bffc><strong data-v-a8c1bffc>Possible causes:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Incorrect webhook URL configuration</li><li data-v-a8c1bffc>Firewall blocking incoming requests</li><li data-v-a8c1bffc>SSL certificate issues</li><li data-v-a8c1bffc>Endpoint returning non-200 status codes</li></ul><p data-v-a8c1bffc><strong data-v-a8c1bffc>Solutions:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Verify webhook URL is publicly accessible</li><li data-v-a8c1bffc>Check firewall settings and whitelist Storecove IPs</li><li data-v-a8c1bffc>Ensure valid SSL certificate</li><li data-v-a8c1bffc>Return 200 status for successful processing</li></ul></div></div><div class="trouble-item" data-v-a8c1bffc><h3 data-v-a8c1bffc>Signature Verification Failing</h3><div class="trouble-content" data-v-a8c1bffc><p data-v-a8c1bffc><strong data-v-a8c1bffc>Common issues:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Incorrect webhook secret</li><li data-v-a8c1bffc>Wrong signature algorithm</li><li data-v-a8c1bffc>Payload modification before verification</li></ul><p data-v-a8c1bffc><strong data-v-a8c1bffc>Solutions:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Double-check webhook secret configuration</li><li data-v-a8c1bffc>Use raw payload for signature verification</li><li data-v-a8c1bffc>Verify HMAC-SHA256 implementation</li></ul></div></div><div class="trouble-item" data-v-a8c1bffc><h3 data-v-a8c1bffc>Duplicate Webhook Events</h3><div class="trouble-content" data-v-a8c1bffc><p data-v-a8c1bffc><strong data-v-a8c1bffc>Why it happens:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Network timeouts during processing</li><li data-v-a8c1bffc>Endpoint returning error status codes</li><li data-v-a8c1bffc>Storecove retry mechanism</li></ul><p data-v-a8c1bffc><strong data-v-a8c1bffc>Solutions:</strong></p><ul data-v-a8c1bffc><li data-v-a8c1bffc>Implement idempotent processing</li><li data-v-a8c1bffc>Use unique event IDs for deduplication</li><li data-v-a8c1bffc>Return 200 status quickly</li></ul></div></div></div></div></section>',2)),r("section",qf,[r("div",kf,[t[34]||(t[34]=r("h2",{class:"section-title"},"Testing Tools & Resources",-1)),r("div",Sf,[t[33]||(t[33]=ie('<div class="tool-card" data-v-a8c1bffc><div class="tool-icon" data-v-a8c1bffc>🔧</div><div class="tool-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>ngrok</h3><p data-v-a8c1bffc>Create secure tunnels to localhost for webhook testing during development.</p><div class="tool-command" data-v-a8c1bffc><code data-v-a8c1bffc>ngrok http 5000</code></div><a href="https://ngrok.com/" target="_blank" class="tool-link" data-v-a8c1bffc>Download ngrok →</a></div></div><div class="tool-card" data-v-a8c1bffc><div class="tool-icon" data-v-a8c1bffc>📡</div><div class="tool-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Webhook.site</h3><p data-v-a8c1bffc>Free tool to test, inspect, and debug incoming webhooks in real-time.</p><a href="https://webhook.site/" target="_blank" class="tool-link" data-v-a8c1bffc>Try webhook.site →</a></div></div><div class="tool-card" data-v-a8c1bffc><div class="tool-icon" data-v-a8c1bffc>🐙</div><div class="tool-content" data-v-a8c1bffc><h3 data-v-a8c1bffc>Postman</h3><p data-v-a8c1bffc>Test your webhook endpoints and simulate Storecove webhook payloads.</p><a href="https://www.postman.com/" target="_blank" class="tool-link" data-v-a8c1bffc>Get Postman →</a></div></div>',3)),r("div",xf,[t[32]||(t[32]=r("div",{class:"tool-icon"},"📋",-1)),r("div",Ef,[t[30]||(t[30]=r("h3",null,"Sample Payloads",-1)),t[31]||(t[31]=r("p",null,"Download sample webhook payloads for testing different event types.",-1)),r("button",{onClick:t[4]||(t[4]=(...c)=>o.downloadSamplePayloads&&o.downloadSamplePayloads(...c)),class:"tool-link"},"Download Samples →")])])])])]),r("section",Cf,[r("div",If,[t[35]||(t[35]=r("h3",{class:"feedback-question"},"Was this webhook guide helpful?",-1)),r("div",Df,[r("button",{class:"feedback-btn",onClick:t[5]||(t[5]=c=>o.submitFeedback("yes"))},"👍 Yes"),r("button",{class:"feedback-btn",onClick:t[6]||(t[6]=c=>o.submitFeedback("no"))},"👎 No")]),a.feedbackSubmitted?(re(),le("p",Pf," Thank you for your feedback! ")):Lt("",!0)])])])}const Tf=Re(Zu,[["render",Rf],["__scopeId","data-v-a8c1bffc"]]);const Af={name:"DeveloperDashboard"},Lf={class:"developer-dashboard"},Mf={class:"back-navigation"},Of={class:"container"};function $f(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",Lf,[t[1]||(t[1]=ie(`<div class="hero-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="hero-content" data-v-d3d0b941><h1 data-v-d3d0b941>Developer Dashboard</h1><p data-v-d3d0b941>Monitor your e-invoicing integration with comprehensive administrative tools and real-time insights</p></div></div></div><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Dashboard Components</h2><p data-v-d3d0b941>Essential monitoring and management components for your e-invoicing integration</p></div><div class="metrics-grid" data-v-d3d0b941><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>📊</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>1,247</h3><p class="metric-label" data-v-d3d0b941>Documents Sent</p><span class="metric-change positive" data-v-d3d0b941>+12% this month</span></div></div><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>✅</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>98.5%</h3><p class="metric-label" data-v-d3d0b941>Success Rate</p><span class="metric-change positive" data-v-d3d0b941>+0.3% this month</span></div></div><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>⚠️</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>18</h3><p class="metric-label" data-v-d3d0b941>Failed Deliveries</p><span class="metric-change negative" data-v-d3d0b941>-5 from last week</span></div></div><div class="metric-card" data-v-d3d0b941><div class="metric-icon" data-v-d3d0b941>⏱️</div><div class="metric-content" data-v-d3d0b941><h3 class="metric-value" data-v-d3d0b941>2.3s</h3><p class="metric-label" data-v-d3d0b941>Avg Response Time</p><span class="metric-change neutral" data-v-d3d0b941>No change</span></div></div></div></div></section><section class="content-section bg-light" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Document Management</h2><p data-v-d3d0b941>Track and manage your e-invoicing documents</p></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Recent Document Submissions</h3><div class="component-actions" data-v-d3d0b941><select class="filter-select" data-v-d3d0b941><option data-v-d3d0b941>All Status</option><option data-v-d3d0b941>Submitted</option><option data-v-d3d0b941>Delivered</option><option data-v-d3d0b941>Failed</option></select><button class="btn-secondary" data-v-d3d0b941>Export</button></div></div><div class="document-table" data-v-d3d0b941><table data-v-d3d0b941><thead data-v-d3d0b941><tr data-v-d3d0b941><th data-v-d3d0b941>Document ID</th><th data-v-d3d0b941>Recipient</th><th data-v-d3d0b941>Type</th><th data-v-d3d0b941>Status</th><th data-v-d3d0b941>Submitted</th><th data-v-d3d0b941>Actions</th></tr></thead><tbody data-v-d3d0b941><tr data-v-d3d0b941><td data-v-d3d0b941><code data-v-d3d0b941>INV-2024-001234</code></td><td data-v-d3d0b941>Acme Corp B.V.</td><td data-v-d3d0b941>Invoice</td><td data-v-d3d0b941><span class="status delivered" data-v-d3d0b941>Delivered</span></td><td data-v-d3d0b941>2024-01-15 14:30</td><td data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>View</button><button class="btn-link" data-v-d3d0b941>Resend</button></td></tr><tr data-v-d3d0b941><td data-v-d3d0b941><code data-v-d3d0b941>CN-2024-000456</code></td><td data-v-d3d0b941>Tech Solutions Ltd.</td><td data-v-d3d0b941>Credit Note</td><td data-v-d3d0b941><span class="status pending" data-v-d3d0b941>Processing</span></td><td data-v-d3d0b941>2024-01-15 13:45</td><td data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>View</button><button class="btn-link" data-v-d3d0b941>Cancel</button></td></tr><tr data-v-d3d0b941><td data-v-d3d0b941><code data-v-d3d0b941>INV-2024-001233</code></td><td data-v-d3d0b941>Global Imports GmbH</td><td data-v-d3d0b941>Invoice</td><td data-v-d3d0b941><span class="status failed" data-v-d3d0b941>Failed</span></td><td data-v-d3d0b941>2024-01-15 12:20</td><td data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>View</button><button class="btn-link" data-v-d3d0b941>Retry</button></td></tr></tbody></table></div></div></div></section><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Webhook Monitoring</h2><p data-v-d3d0b941>Monitor webhook delivery status and manage endpoints</p></div><div class="dashboard-grid" data-v-d3d0b941><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Webhook Endpoints</h3><button class="btn-primary" data-v-d3d0b941>Add Endpoint</button></div><div class="webhook-list" data-v-d3d0b941><div class="webhook-item" data-v-d3d0b941><div class="webhook-info" data-v-d3d0b941><h4 data-v-d3d0b941>Production Webhook</h4><code data-v-d3d0b941>https://api.yourcompany.com/webhooks/storecove</code><span class="webhook-status active" data-v-d3d0b941>Active</span></div><div class="webhook-actions" data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>Test</button><button class="btn-link" data-v-d3d0b941>Edit</button><button class="btn-link" data-v-d3d0b941>Disable</button></div></div><div class="webhook-item" data-v-d3d0b941><div class="webhook-info" data-v-d3d0b941><h4 data-v-d3d0b941>Staging Webhook</h4><code data-v-d3d0b941>https://staging.yourcompany.com/webhooks/storecove</code><span class="webhook-status inactive" data-v-d3d0b941>Inactive</span></div><div class="webhook-actions" data-v-d3d0b941><button class="btn-link" data-v-d3d0b941>Test</button><button class="btn-link" data-v-d3d0b941>Edit</button><button class="btn-link" data-v-d3d0b941>Enable</button></div></div></div></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Recent Webhook Events</h3></div><div class="webhook-events" data-v-d3d0b941><div class="event-item" data-v-d3d0b941><div class="event-icon success" data-v-d3d0b941>✓</div><div class="event-content" data-v-d3d0b941><h4 data-v-d3d0b941>document_submission.succeeded</h4><p data-v-d3d0b941>INV-2024-001234 delivered successfully</p><span class="event-time" data-v-d3d0b941>2 minutes ago</span></div></div><div class="event-item" data-v-d3d0b941><div class="event-icon error" data-v-d3d0b941>✗</div><div class="event-content" data-v-d3d0b941><h4 data-v-d3d0b941>document_submission.failed</h4><p data-v-d3d0b941>INV-2024-001233 delivery failed</p><span class="event-time" data-v-d3d0b941>15 minutes ago</span></div></div><div class="event-item" data-v-d3d0b941><div class="event-icon success" data-v-d3d0b941>✓</div><div class="event-content" data-v-d3d0b941><h4 data-v-d3d0b941>document_submission.succeeded</h4><p data-v-d3d0b941>CN-2024-000455 delivered successfully</p><span class="event-time" data-v-d3d0b941>1 hour ago</span></div></div></div></div></div></div></section><section class="content-section bg-light" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Legal Entity Management</h2><p data-v-d3d0b941>Manage your organization&#39;s legal entities and their configurations</p></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Configured Legal Entities</h3><button class="btn-primary" data-v-d3d0b941>Add Legal Entity</button></div><div class="entity-grid" data-v-d3d0b941><div class="entity-card" data-v-d3d0b941><div class="entity-header" data-v-d3d0b941><h4 data-v-d3d0b941>Your Company B.V.</h4><span class="entity-status active" data-v-d3d0b941>Active</span></div><div class="entity-details" data-v-d3d0b941><p data-v-d3d0b941><strong data-v-d3d0b941>VAT ID:</strong> NL123456789B01</p><p data-v-d3d0b941><strong data-v-d3d0b941>Country:</strong> Netherlands</p><p data-v-d3d0b941><strong data-v-d3d0b941>Network:</strong> Peppol</p><p data-v-d3d0b941><strong data-v-d3d0b941>Documents:</strong> 1,247 sent</p></div><div class="entity-actions" data-v-d3d0b941><button class="btn-secondary" data-v-d3d0b941>Configure</button><button class="btn-link" data-v-d3d0b941>View Details</button></div></div><div class="entity-card" data-v-d3d0b941><div class="entity-header" data-v-d3d0b941><h4 data-v-d3d0b941>Your Company GmbH</h4><span class="entity-status active" data-v-d3d0b941>Active</span></div><div class="entity-details" data-v-d3d0b941><p data-v-d3d0b941><strong data-v-d3d0b941>VAT ID:</strong> DE987654321</p><p data-v-d3d0b941><strong data-v-d3d0b941>Country:</strong> Germany</p><p data-v-d3d0b941><strong data-v-d3d0b941>Network:</strong> Peppol</p><p data-v-d3d0b941><strong data-v-d3d0b941>Documents:</strong> 432 sent</p></div><div class="entity-actions" data-v-d3d0b941><button class="btn-secondary" data-v-d3d0b941>Configure</button><button class="btn-link" data-v-d3d0b941>View Details</button></div></div></div></div></div></section><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>API Usage Analytics</h2><p data-v-d3d0b941>Monitor your API usage, performance, and quotas</p></div><div class="dashboard-grid" data-v-d3d0b941><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>API Call Statistics</h3><select class="filter-select" data-v-d3d0b941><option data-v-d3d0b941>Last 7 days</option><option data-v-d3d0b941>Last 30 days</option><option data-v-d3d0b941>Last 90 days</option></select></div><div class="api-stats" data-v-d3d0b941><div class="stat-item" data-v-d3d0b941><h4 data-v-d3d0b941>Total API Calls</h4><p class="stat-value" data-v-d3d0b941>12,547</p><span class="stat-change positive" data-v-d3d0b941>+8.2%</span></div><div class="stat-item" data-v-d3d0b941><h4 data-v-d3d0b941>Success Rate</h4><p class="stat-value" data-v-d3d0b941>99.2%</p><span class="stat-change positive" data-v-d3d0b941>+0.1%</span></div><div class="stat-item" data-v-d3d0b941><h4 data-v-d3d0b941>Avg Response Time</h4><p class="stat-value" data-v-d3d0b941>234ms</p><span class="stat-change positive" data-v-d3d0b941>-12ms</span></div></div><div class="chart-placeholder" data-v-d3d0b941><p data-v-d3d0b941>📈 API Usage Chart (7 days)</p><div class="mock-chart" data-v-d3d0b941><div class="chart-bar" style="height:60%;" data-v-d3d0b941></div><div class="chart-bar" style="height:80%;" data-v-d3d0b941></div><div class="chart-bar" style="height:45%;" data-v-d3d0b941></div><div class="chart-bar" style="height:90%;" data-v-d3d0b941></div><div class="chart-bar" style="height:70%;" data-v-d3d0b941></div><div class="chart-bar" style="height:55%;" data-v-d3d0b941></div><div class="chart-bar" style="height:85%;" data-v-d3d0b941></div></div></div></div><div class="dashboard-component" data-v-d3d0b941><div class="component-header" data-v-d3d0b941><h3 data-v-d3d0b941>Rate Limits &amp; Quotas</h3></div><div class="quota-list" data-v-d3d0b941><div class="quota-item" data-v-d3d0b941><div class="quota-info" data-v-d3d0b941><h4 data-v-d3d0b941>Document Submissions</h4><p data-v-d3d0b941>Monthly quota usage</p></div><div class="quota-meter" data-v-d3d0b941><div class="quota-bar" data-v-d3d0b941><div class="quota-fill" style="width:67%;" data-v-d3d0b941></div></div><span class="quota-text" data-v-d3d0b941>1,340 / 2,000</span></div></div><div class="quota-item" data-v-d3d0b941><div class="quota-info" data-v-d3d0b941><h4 data-v-d3d0b941>API Requests</h4><p data-v-d3d0b941>Per minute rate limit</p></div><div class="quota-meter" data-v-d3d0b941><div class="quota-bar" data-v-d3d0b941><div class="quota-fill" style="width:23%;" data-v-d3d0b941></div></div><span class="quota-text" data-v-d3d0b941>23 / 100</span></div></div><div class="quota-item" data-v-d3d0b941><div class="quota-info" data-v-d3d0b941><h4 data-v-d3d0b941>Webhook Deliveries</h4><p data-v-d3d0b941>Monthly quota usage</p></div><div class="quota-meter" data-v-d3d0b941><div class="quota-bar" data-v-d3d0b941><div class="quota-fill" style="width:45%;" data-v-d3d0b941></div></div><span class="quota-text" data-v-d3d0b941>4,500 / 10,000</span></div></div></div></div></div></div></section><section class="content-section bg-light" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Dashboard Implementation Examples</h2><p data-v-d3d0b941>Code examples for implementing dashboard components</p></div><div class="code-section" data-v-d3d0b941><h3 data-v-d3d0b941>Fetching Dashboard Metrics</h3><div class="code-block" data-v-d3d0b941><pre data-v-d3d0b941><code data-v-d3d0b941>import requests
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
</code></pre></div></div></div></section><section class="content-section" data-v-d3d0b941><div class="container" data-v-d3d0b941><div class="section-header" data-v-d3d0b941><h2 data-v-d3d0b941>Dashboard Implementation Tips</h2><p data-v-d3d0b941>Best practices for building effective e-invoicing dashboards</p></div><div class="tips-grid" data-v-d3d0b941><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>⚡</div><h3 data-v-d3d0b941>Real-time Updates</h3><p data-v-d3d0b941>Implement WebSocket connections or periodic polling to keep dashboard data current. Update metrics automatically when document status changes.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>📊</div><h3 data-v-d3d0b941>Key Metrics</h3><p data-v-d3d0b941>Focus on essential KPIs: success rate, average response time, failed deliveries, and quota usage. Avoid information overload.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>🎯</div><h3 data-v-d3d0b941>Actionable Alerts</h3><p data-v-d3d0b941>Set up meaningful alerts for quota limits, delivery failures, and webhook issues. Include clear next steps for resolution.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>🔍</div><h3 data-v-d3d0b941>Detailed Filtering</h3><p data-v-d3d0b941>Provide robust filtering and search capabilities for document lists. Enable filtering by status, date range, recipient, and document type.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>📱</div><h3 data-v-d3d0b941>Mobile Responsive</h3><p data-v-d3d0b941>Ensure your dashboard works well on mobile devices. Administrators often need to check status while away from their desk.</p></div><div class="tip-card" data-v-d3d0b941><div class="tip-icon" data-v-d3d0b941>🔒</div><h3 data-v-d3d0b941>Security &amp; Access</h3><p data-v-d3d0b941>Implement proper authentication and role-based access controls. Log all administrative actions for audit purposes.</p></div></div></div></section>`,8)),r("section",Mf,[r("div",Of,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[0]||(t[0]=[Z(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const jf=Re(Af,[["render",$f],["__scopeId","data-v-d3d0b941"]]);const Nf={name:"ErrorHandling"},Ff={class:"error-handling"},Uf={class:"back-navigation"},Bf={class:"container"};function Hf(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",Ff,[t[1]||(t[1]=ie(`<div class="hero-section" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="hero-content" data-v-7fc726d0><h1 data-v-7fc726d0>Error Handling Guide</h1><p data-v-7fc726d0>Comprehensive guide to Storecove API error codes, troubleshooting steps, and resolution strategies</p></div></div></div><section class="content-section" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="section-header" data-v-7fc726d0><h2 data-v-7fc726d0>Understanding Storecove Error Model</h2><p data-v-7fc726d0>Learn about the standardized error response format and how to handle different error types</p></div><div class="error-model-card" data-v-7fc726d0><h3 data-v-7fc726d0>Standard Error Response Format</h3><p data-v-7fc726d0>All Storecove API errors follow a consistent structure for easy parsing and handling:</p><div class="code-block" data-v-7fc726d0><pre data-v-7fc726d0><code data-v-7fc726d0>{
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
</code></pre></div></div></div></section><section class="content-section" data-v-7fc726d0><div class="container" data-v-7fc726d0><div class="section-header" data-v-7fc726d0><h2 data-v-7fc726d0>Troubleshooting Checklist</h2><p data-v-7fc726d0>Step-by-step guide to diagnose and resolve common integration issues</p></div><div class="troubleshooting-grid" data-v-7fc726d0><div class="troubleshooting-card" data-v-7fc726d0><h3 data-v-7fc726d0>🔍 Quick Diagnosis</h3><div class="checklist" data-v-7fc726d0><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check1" data-v-7fc726d0><label for="check1" data-v-7fc726d0>Verify API key is valid and active</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check2" data-v-7fc726d0><label for="check2" data-v-7fc726d0>Check request format and headers</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check3" data-v-7fc726d0><label for="check3" data-v-7fc726d0>Validate document structure against schema</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check4" data-v-7fc726d0><label for="check4" data-v-7fc726d0>Review error response details and request_id</label></div><div class="checklist-item" data-v-7fc726d0><input type="checkbox" id="check5" data-v-7fc726d0><label for="check5" data-v-7fc726d0>Test with sandbox environment first</label></div></div></div><div class="troubleshooting-card" data-v-7fc726d0><h3 data-v-7fc726d0>🛠️ Common Fixes</h3><div class="fix-list" data-v-7fc726d0><div class="fix-item" data-v-7fc726d0><h4 data-v-7fc726d0>Authentication Issues</h4><ul data-v-7fc726d0><li data-v-7fc726d0>Regenerate API key</li><li data-v-7fc726d0>Check environment (sandbox vs production)</li><li data-v-7fc726d0>Verify header format</li></ul></div><div class="fix-item" data-v-7fc726d0><h4 data-v-7fc726d0>Validation Errors</h4><ul data-v-7fc726d0><li data-v-7fc726d0>Review required fields</li><li data-v-7fc726d0>Check data formats (dates, currencies)</li><li data-v-7fc726d0>Validate against country requirements</li></ul></div><div class="fix-item" data-v-7fc726d0><h4 data-v-7fc726d0>Network Issues</h4><ul data-v-7fc726d0><li data-v-7fc726d0>Implement retry logic with backoff</li><li data-v-7fc726d0>Check SSL/TLS configuration</li><li data-v-7fc726d0>Verify firewall settings</li></ul></div></div></div><div class="troubleshooting-card" data-v-7fc726d0><h3 data-v-7fc726d0>📞 When to Contact Support</h3><div class="support-scenarios" data-v-7fc726d0><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Persistent 5xx Errors</h4><p data-v-7fc726d0>Include request_id and timestamp</p></div><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Unexpected Business Logic Errors</h4><p data-v-7fc726d0>Provide document payload and error details</p></div><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Country-Specific Issues</h4><p data-v-7fc726d0>Specify country and regulatory requirements</p></div><div class="scenario" data-v-7fc726d0><h4 data-v-7fc726d0>Performance Issues</h4><p data-v-7fc726d0>Include response times and request patterns</p></div></div></div></div></div></section>`,6)),r("section",Uf,[r("div",Bf,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[0]||(t[0]=[Z(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const Wf=Re(Nf,[["render",Hf],["__scopeId","data-v-7fc726d0"]]);const Vf={name:"APILogs",data(){return{activeTab:"python"}}},Kf={class:"api-logs"},zf={class:"content-section"},Gf={class:"container"},Qf={class:"implementation-tabs"},Yf={class:"tab-buttons"},Jf={class:"tab-content"},Xf={class:"tab-panel"},Zf={class:"tab-panel"},ev={class:"tab-panel"},tv={class:"tab-panel"},nv={class:"back-navigation"},sv={class:"container"};function av(e,t,n,s,a,o){const i=Pe("router-link");return re(),le("div",Kf,[t[10]||(t[10]=ie('<div class="hero-section" data-v-11a65d00><div class="container" data-v-11a65d00><div class="hero-content" data-v-11a65d00><h1 data-v-11a65d00>API Logs &amp; Monitoring</h1><p data-v-11a65d00>Best practices for API logging, monitoring approaches, and real-world examples for production systems</p></div></div></div><section class="content-section" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Comprehensive Logging Strategy</h2><p data-v-11a65d00>Essential logging practices for robust e-invoicing integration monitoring</p></div><div class="strategy-grid" data-v-11a65d00><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>📊</div><h3 data-v-11a65d00>Request/Response Logging</h3><p data-v-11a65d00>Log all API interactions including headers, payloads, response times, and status codes for complete audit trails.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Full request context</span><span class="feature" data-v-11a65d00>Response validation</span><span class="feature" data-v-11a65d00>Performance metrics</span></div></div><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>🔄</div><h3 data-v-11a65d00>Event-Driven Logging</h3><p data-v-11a65d00>Capture business events like document submissions, delivery confirmations, and webhook notifications.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Business context</span><span class="feature" data-v-11a65d00>State transitions</span><span class="feature" data-v-11a65d00>Event correlation</span></div></div><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>⚠️</div><h3 data-v-11a65d00>Error &amp; Exception Tracking</h3><p data-v-11a65d00>Detailed error logging with stack traces, context, and automated alerting for critical failures.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Error categorization</span><span class="feature" data-v-11a65d00>Automated alerts</span><span class="feature" data-v-11a65d00>Recovery tracking</span></div></div><div class="strategy-card" data-v-11a65d00><div class="strategy-icon" data-v-11a65d00>📈</div><h3 data-v-11a65d00>Performance Monitoring</h3><p data-v-11a65d00>Track API performance metrics, identify bottlenecks, and monitor quota usage patterns.</p><div class="strategy-features" data-v-11a65d00><span class="feature" data-v-11a65d00>Response times</span><span class="feature" data-v-11a65d00>Throughput analysis</span><span class="feature" data-v-11a65d00>Resource utilization</span></div></div></div></div></section><section class="content-section bg-light" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Log Levels &amp; Categories</h2><p data-v-11a65d00>Structured approach to categorizing and prioritizing log messages</p></div><div class="log-levels" data-v-11a65d00><div class="level-card error" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>🚨</span><h3 data-v-11a65d00>ERROR</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> API failures, authentication errors, document rejection</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>HTTP 4xx/5xx responses</li><li data-v-11a65d00>Authentication failures</li><li data-v-11a65d00>Document validation errors</li><li data-v-11a65d00>Webhook delivery failures</li></ul></div></div></div><div class="level-card warning" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>⚠️</span><h3 data-v-11a65d00>WARN</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> Recoverable issues, rate limiting, retries</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>Rate limit approached</li><li data-v-11a65d00>Retry attempts</li><li data-v-11a65d00>Quota warnings</li><li data-v-11a65d00>Deprecated API usage</li></ul></div></div></div><div class="level-card info" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>ℹ️</span><h3 data-v-11a65d00>INFO</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> Business events, successful operations, state changes</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>Document submitted</li><li data-v-11a65d00>Delivery confirmed</li><li data-v-11a65d00>Webhook received</li><li data-v-11a65d00>Configuration changes</li></ul></div></div></div><div class="level-card debug" data-v-11a65d00><div class="level-header" data-v-11a65d00><span class="level-icon" data-v-11a65d00>🔍</span><h3 data-v-11a65d00>DEBUG</h3></div><div class="level-content" data-v-11a65d00><p data-v-11a65d00><strong data-v-11a65d00>When to use:</strong> Detailed flow tracking, development debugging</p><div class="level-examples" data-v-11a65d00><h4 data-v-11a65d00>Examples:</h4><ul data-v-11a65d00><li data-v-11a65d00>Request/response details</li><li data-v-11a65d00>Internal state changes</li><li data-v-11a65d00>Performance timings</li><li data-v-11a65d00>Variable values</li></ul></div></div></div></div></div></section>',3)),r("section",zf,[r("div",Gf,[t[8]||(t[8]=r("div",{class:"section-header"},[r("h2",null,"Implementation Examples"),r("p",null,"Production-ready logging implementations for different platforms")],-1)),r("div",Qf,[r("div",Yf,[r("button",{class:"tab-btn active",onClick:t[0]||(t[0]=c=>a.activeTab="python")},"Python"),r("button",{class:"tab-btn",onClick:t[1]||(t[1]=c=>a.activeTab="nodejs")},"Node.js"),r("button",{class:"tab-btn",onClick:t[2]||(t[2]=c=>a.activeTab="java")},"Java"),r("button",{class:"tab-btn",onClick:t[3]||(t[3]=c=>a.activeTab="csharp")},"C#")]),r("div",Jf,[tt(r("div",Xf,[...t[4]||(t[4]=[r("h3",null,"Python Logging with Structured JSON",-1),r("div",{class:"code-block"},[r("pre",null,[r("code",null,`import logging
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
`)])],-1)])],512),[[hn,a.activeTab==="python"]]),tt(r("div",Zf,[...t[5]||(t[5]=[r("h3",null,"Node.js Logging with Winston",-1),r("div",{class:"code-block"},[r("pre",null,[r("code",null,`const winston = require('winston');
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
`)])],-1)])],512),[[hn,a.activeTab==="nodejs"]]),tt(r("div",ev,[...t[6]||(t[6]=[r("h3",null,"Java Logging with SLF4J and Logback",-1),r("div",{class:"code-block"},[r("pre",null,[r("code",null,`import org.slf4j.Logger;
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
`)])],-1)])],512),[[hn,a.activeTab==="java"]]),tt(r("div",tv,[...t[7]||(t[7]=[r("h3",null,"C# Logging with Serilog",-1),r("div",{class:"code-block"},[r("pre",null,[r("code",null,`using Serilog;
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
`)])],-1)])],512),[[hn,a.activeTab==="csharp"]])])])])]),t[11]||(t[11]=ie(`<section class="content-section bg-light" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Log Analysis &amp; Monitoring</h2><p data-v-11a65d00>Tools and techniques for effective log analysis and monitoring</p></div><div class="analysis-grid" data-v-11a65d00><div class="analysis-card" data-v-11a65d00><h3 data-v-11a65d00>🔍 ELK Stack Integration</h3><p data-v-11a65d00>Elasticsearch, Logstash, and Kibana for powerful log analysis</p><div class="analysis-features" data-v-11a65d00><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Elasticsearch:</strong> Store and index structured logs </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Logstash:</strong> Parse and transform log data </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Kibana:</strong> Visualize and explore log data </div></div><div class="config-example" data-v-11a65d00><h4 data-v-11a65d00>Logstash Configuration:</h4><div class="code-block small" data-v-11a65d00><pre data-v-11a65d00><code data-v-11a65d00>input {
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
}</code></pre></div></div></div><div class="analysis-card" data-v-11a65d00><h3 data-v-11a65d00>📊 Metrics &amp; Alerting</h3><p data-v-11a65d00>Key metrics to monitor and alert configurations</p><div class="metrics-list" data-v-11a65d00><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Success Rate</h4><p data-v-11a65d00>Alert when below 95% over 5 minutes</p></div><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Response Time</h4><p data-v-11a65d00>Alert when p95 &gt; 5 seconds</p></div><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Error Rate</h4><p data-v-11a65d00>Alert when &gt; 5% over 1 minute</p></div><div class="metric-item" data-v-11a65d00><h4 data-v-11a65d00>Webhook Failures</h4><p data-v-11a65d00>Alert on any webhook delivery failure</p></div></div></div><div class="analysis-card" data-v-11a65d00><h3 data-v-11a65d00>📈 Performance Monitoring</h3><p data-v-11a65d00>Application Performance Monitoring (APM) integration</p><div class="apm-features" data-v-11a65d00><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Request Tracing:</strong> End-to-end request flow </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Error Tracking:</strong> Automatic error detection </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Performance Insights:</strong> Bottleneck identification </div><div class="feature-item" data-v-11a65d00><strong data-v-11a65d00>Business Metrics:</strong> Custom KPI tracking </div></div></div></div></div></section><section class="content-section" data-v-11a65d00><div class="container" data-v-11a65d00><div class="section-header" data-v-11a65d00><h2 data-v-11a65d00>Logging Best Practices</h2><p data-v-11a65d00>Industry-standard practices for effective API logging</p></div><div class="practices-grid" data-v-11a65d00><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>🔒</div><h3 data-v-11a65d00>Security &amp; Privacy</h3><ul data-v-11a65d00><li data-v-11a65d00>Never log sensitive data (passwords, API keys, PII)</li><li data-v-11a65d00>Sanitize or mask personal information</li><li data-v-11a65d00>Use secure log transmission (TLS)</li><li data-v-11a65d00>Implement log retention policies</li><li data-v-11a65d00>Encrypt logs at rest</li></ul></div><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>⚡</div><h3 data-v-11a65d00>Performance</h3><ul data-v-11a65d00><li data-v-11a65d00>Use asynchronous logging to avoid blocking</li><li data-v-11a65d00>Implement log level filtering</li><li data-v-11a65d00>Use structured JSON logging</li><li data-v-11a65d00>Batch log writes when possible</li><li data-v-11a65d00>Monitor log volume and performance impact</li></ul></div><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>🎯</div><h3 data-v-11a65d00>Correlation &amp; Context</h3><ul data-v-11a65d00><li data-v-11a65d00>Use unique request IDs for correlation</li><li data-v-11a65d00>Include business context (document ID, customer)</li><li data-v-11a65d00>Add timestamp and timezone information</li><li data-v-11a65d00>Maintain consistent log format</li><li data-v-11a65d00>Include environment and version info</li></ul></div><div class="practice-card" data-v-11a65d00><div class="practice-icon" data-v-11a65d00>📊</div><h3 data-v-11a65d00>Monitoring &amp; Alerting</h3><ul data-v-11a65d00><li data-v-11a65d00>Set up real-time error alerting</li><li data-v-11a65d00>Monitor key business metrics</li><li data-v-11a65d00>Create operational dashboards</li><li data-v-11a65d00>Implement log-based SLA monitoring</li><li data-v-11a65d00>Use log aggregation tools</li></ul></div></div></div></section>`,2)),r("section",nv,[r("div",sv,[j(i,{to:"/",class:"back-link"},{default:W(()=>[...t[9]||(t[9]=[Z(" ← Back to Integration Toolkit ",-1)])]),_:1})])])])}const ov=Re(Vf,[["render",av],["__scopeId","data-v-11a65d00"]]),iv=[{path:"/",name:"Home",component:dl},{path:"/integration-basics-faq",name:"IntegrationBasicsFAQ",component:_l},{path:"/getting-started-webinar",name:"GettingStartedWebinar",component:Yl},{path:"/platform-plugins",name:"PlatformPlugins",component:Lu},{path:"/sdk-libraries",name:"SDKLibraries",component:Fu},{path:"/implementation-guide",name:"ImplementationGuide",component:Ku},{path:"/sample-code",name:"SampleCode",component:Xu},{path:"/webhook-testing",name:"WebhookTesting",component:Tf},{path:"/developer-dashboard",name:"DeveloperDashboard",component:jf},{path:"/error-handling",name:"ErrorHandling",component:Wf},{path:"/api-logs",name:"APILogs",component:ov}],rv=Bd({history:hd(),routes:iv});Lc(Fc).use(rv).mount("#app");
