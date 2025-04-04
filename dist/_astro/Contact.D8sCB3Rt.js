import{j as u}from"./jsx-runtime.CRkqtJS5.js";import{r as d}from"./index.B52nOzfP.js";import{c as ee}from"./createLucideIcon.DB5FI9h-.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=ee("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);class N{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const re=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},f={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:re()},z=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},se=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=z(e);f.publicKey=r.publicKey,f.blockHeadless=r.blockHeadless,f.storageProvider=r.storageProvider,f.blockList=r.blockList,f.limitRate=r.limitRate,f.origin=r.origin||t},A=async(e,t,r={})=>{const a=await fetch(f.origin+e,{method:"POST",headers:r,body:t}),i=await a.text(),s=new N(a.status,i);if(a.ok)return s;throw s},q=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},ae=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},B=e=>e.webdriver||!e.languages||e.languages.length===0,K=()=>new N(451,"Unavailable For Headless Browser"),ie=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},oe=e=>!e.list?.length||!e.watchVariable,ne=(e,t)=>e instanceof FormData?e.get(t):e[t],U=(e,t)=>{if(oe(e))return!1;ie(e.list,e.watchVariable);const r=ne(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},Z=()=>new N(403,"Forbidden"),le=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},ce=async(e,t,r)=>{const a=Number(await r.get(e)||0);return t-Date.now()+a},J=async(e,t,r)=>{if(!t.throttle||!r)return!1;le(t.throttle,t.id);const a=t.id||e;return await ce(a,t.throttle,r)>0?!0:(await r.set(a,Date.now().toString()),!1)},Q=()=>new N(429,"Too Many Requests"),de=async(e,t,r,a)=>{const i=z(a),s=i.publicKey||f.publicKey,n=i.blockHeadless||f.blockHeadless,o=i.storageProvider||f.storageProvider,l={...f.blockList,...i.blockList},c={...f.limitRate,...i.limitRate};return n&&B(navigator)?Promise.reject(K()):(q(s,e,t),ae(r),r&&U(l,r)?Promise.reject(Z()):await J(location.pathname,c,o)?Promise.reject(Q()):A("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},ue=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},me=e=>typeof e=="string"?document.querySelector(e):e,pe=async(e,t,r,a)=>{const i=z(a),s=i.publicKey||f.publicKey,n=i.blockHeadless||f.blockHeadless,o=f.storageProvider||i.storageProvider,l={...f.blockList,...i.blockList},c={...f.limitRate,...i.limitRate};if(n&&B(navigator))return Promise.reject(K());const m=me(r);q(s,e,t),ue(m);const p=new FormData(m);return U(l,p)?Promise.reject(Z()):await J(location.pathname,c,o)?Promise.reject(Q()):(p.append("lib_version","4.4.1"),p.append("service_id",e),p.append("template_id",t),p.append("user_id",s),A("/api/v1.0/email/send-form",p))},D={init:se,send:de,sendForm:pe,EmailJSResponseStatus:N};let fe={data:""},ge=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||fe,he=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,be=/\/\*[^]*?\*\/|  +/g,V=/\n+/g,w=(e,t)=>{let r="",a="",i="";for(let s in e){let n=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+n+";":a+=s[1]=="f"?w(n,s):s+"{"+w(n,s[1]=="k"?"":t)+"}":typeof n=="object"?a+=w(n,t?t.replace(/([^,])+/g,o=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):s):n!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=w.p?w.p(s,n):s+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},x={},W=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+W(e[r]);return t}return e},ye=(e,t,r,a,i)=>{let s=W(e),n=x[s]||(x[s]=(l=>{let c=0,m=11;for(;c<l.length;)m=101*m+l.charCodeAt(c++)>>>0;return"go"+m})(s));if(!x[n]){let l=s!==e?e:(c=>{let m,p,g=[{}];for(;m=he.exec(c.replace(be,""));)m[4]?g.shift():m[3]?(p=m[3].replace(V," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][m[1]]=m[2].replace(V," ").trim();return g[0]})(e);x[n]=w(i?{["@keyframes "+n]:l}:l,r?"":"."+n)}let o=r&&x.g?x.g:null;return r&&(x.g=x[n]),((l,c,m,p)=>{p?c.data=c.data.replace(p,l):c.data.indexOf(l)===-1&&(c.data=m?l+c.data:c.data+l)})(x[n],t,a,o),n},xe=(e,t,r)=>e.reduce((a,i,s)=>{let n=t[s];if(n&&n.call){let o=n(r),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;n=l?"."+l:o&&typeof o=="object"?o.props?"":w(o,""):o===!1?"":o}return a+i+(n??"")},"");function F(e){let t=this||{},r=e.call?e(t.p):e;return ye(r.unshift?r.raw?xe(r,[].slice.call(arguments,1),t.p):r.reduce((a,i)=>Object.assign(a,i&&i.call?i(t.p):i),{}):r,ge(t.target),t.g,t.o,t.k)}let Y,R,O;F.bind({g:1});let v=F.bind({k:1});function ve(e,t,r,a){w.p=t,Y=e,R=r,O=a}function j(e,t){let r=this||{};return function(){let a=arguments;function i(s,n){let o=Object.assign({},s),l=o.className||i.className;r.p=Object.assign({theme:R&&R()},o),r.o=/ *go\d+/.test(l),o.className=F.apply(r,a)+(l?" "+l:"");let c=e;return e[0]&&(c=o.as||e,delete o.as),O&&c[0]&&O(o),Y(c,o)}return i}}var we=e=>typeof e=="function",L=(e,t)=>we(e)?e(t):e,je=(()=>{let e=0;return()=>(++e).toString()})(),G=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ke=20,S=new Map,Ee=1e3,I=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),k({type:4,toastId:e})},Ee);S.set(e,t)},Ne=e=>{let t=S.get(e);t&&clearTimeout(t)},C=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ke)};case 1:return t.toast.id&&Ne(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?C(e,{type:1,toast:r}):C(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?I(a):e.toasts.forEach(s=>{I(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},T=[],$={toasts:[],pausedAt:void 0},k=e=>{$=C($,e),T.forEach(t=>{t($)})},Pe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_e=(e={})=>{let[t,r]=d.useState($);d.useEffect(()=>(T.push(r),()=>{let i=T.indexOf(r);i>-1&&T.splice(i,1)}),[t]);let a=t.toasts.map(i=>{var s,n;return{...e,...e[i.type],...i,duration:i.duration||((s=e[i.type])==null?void 0:s.duration)||e?.duration||Pe[i.type],style:{...e.style,...(n=e[i.type])==null?void 0:n.style,...i.style}}});return{...t,toasts:a}},Se=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||je()}),P=e=>(t,r)=>{let a=Se(t,e,r);return k({type:2,toast:a}),a.id},h=(e,t)=>P("blank")(e,t);h.error=P("error");h.success=P("success");h.loading=P("loading");h.custom=P("custom");h.dismiss=e=>{k({type:3,toastId:e})};h.remove=e=>k({type:4,toastId:e});h.promise=(e,t,r)=>{let a=h.loading(t.loading,{...r,...r?.loading});return e.then(i=>(h.success(L(t.success,i),{id:a,...r,...r?.success}),i)).catch(i=>{h.error(L(t.error,i),{id:a,...r,...r?.error})}),e};var Te=(e,t)=>{k({type:1,toast:{id:e,height:t}})},$e=()=>{k({type:5,time:Date.now()})},Le=e=>{let{toasts:t,pausedAt:r}=_e(e);d.useEffect(()=>{if(r)return;let s=Date.now(),n=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(s-o.createdAt);if(l<0){o.visible&&h.dismiss(o.id);return}return setTimeout(()=>h.dismiss(o.id),l)});return()=>{n.forEach(o=>o&&clearTimeout(o))}},[t,r]);let a=d.useCallback(()=>{r&&k({type:6,time:Date.now()})},[r]),i=d.useCallback((s,n)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:c}=n||{},m=t.filter(b=>(b.position||c)===(s.position||c)&&b.height),p=m.findIndex(b=>b.id===s.id),g=m.filter((b,y)=>y<p&&b.visible).length;return m.filter(b=>b.visible).slice(...o?[g+1]:[0,g]).reduce((b,y)=>b+(y.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:Te,startPause:$e,endPause:a,calculateOffset:i}}},Fe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,He=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Re=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Oe=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${He} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Re} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ce=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ze=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ce} 1s linear infinite;
`,De=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ve=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ie=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${De} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Me=j("div")`
  position: absolute;
`,Ae=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,qe=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Be=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${qe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ke=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?d.createElement(Be,null,t):t:r==="blank"?null:d.createElement(Ae,null,d.createElement(ze,{...a}),r!=="loading"&&d.createElement(Me,null,r==="error"?d.createElement(Oe,{...a}):d.createElement(Ie,{...a})))},Ue=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ze=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Je="0%{opacity:0;} 100%{opacity:1;}",Qe="0%{opacity:1;} 100%{opacity:0;}",We=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ye=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ge=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=G()?[Je,Qe]:[Ue(r),Ze(r)];return{animation:t?`${v(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Xe=d.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?Ge(e.position||t||"top-center",e.visible):{opacity:0},s=d.createElement(Ke,{toast:e}),n=d.createElement(Ye,{...e.ariaProps},L(e.message,e));return d.createElement(We,{className:e.className,style:{...i,...r,...e.style}},typeof a=="function"?a({icon:s,message:n}):d.createElement(d.Fragment,null,s,n))});ve(d.createElement);var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let s=d.useCallback(n=>{if(n){let o=()=>{let l=n.getBoundingClientRect().height;a(e,l)};o(),new MutationObserver(o).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return d.createElement("div",{ref:s,className:t,style:r},i)},tt=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...i}},rt=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,_=16,st=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:o,handlers:l}=Le(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:_,left:_,right:_,bottom:_,pointerEvents:"none",...s},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(c=>{let m=c.position||t,p=l.calculateOffset(c,{reverseOrder:e,gutter:a,defaultPosition:t}),g=tt(m,p);return d.createElement(et,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?rt:"",style:g},c.type==="custom"?L(c.message,c):i?i(c):d.createElement(Xe,{toast:c,position:m}))}))},M=h;const nt=()=>{const e=d.useRef(null),[t,r]=d.useState(!1),[a,i]=d.useState({user_name:"",user_email:"",message:""}),[s,n]=d.useState(""),[o,l]=d.useState(""),c=y=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)?(n(""),!0):(n("Dubbelcheck je e-mailadres, zodat we je kunnen bereiken."),!1),m=y=>y.length>0&&y.length<15?(l("Nog een beetje meer info alsjeblieft 😊"),!1):(l(""),!0),p=()=>a.user_name.trim()!==""&&a.user_email.trim()!==""&&a.message.trim()!==""&&!s&&!o&&a.message.length>=15,g=y=>{const{name:E,value:H}=y.target;i(X=>({...X,[E]:H})),E==="user_email"?c(H):E==="message"&&m(H)},b=async y=>{if(y.preventDefault(),!(!e.current||!p())){r(!0);try{await D.sendForm("service_zot77kc","template_k8cdgrq",e.current,"E-jPUZxl8ctmaHoxQ"),await D.sendForm("service_zot77kc","template_7zgx4ym",e.current,"E-jPUZxl8ctmaHoxQ"),M.success("Bericht succesvol verzonden. Tot snel!",{duration:4e3}),e.current.reset(),i({user_name:"",user_email:"",message:""})}catch{M.error("Versturen mislukt. Probeer het even opnieuw.",{duration:4e3})}finally{r(!1)}}};return u.jsxs("section",{id:"contact",className:"py-20 bg-primary",children:[u.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"Contacteer mij"}),u.jsx("p",{className:"text-gray-300 max-w-2xl mx-auto",children:"Klaar om jouw digitale strategie uit te werken? Let's talk!"})]}),u.jsxs("form",{ref:e,onSubmit:b,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsxs("label",{htmlFor:"user_name",className:"block text-sm font-medium text-gray-300 mb-2",children:["Naam ",u.jsx("span",{className:"text-red-500",children:"*"})]}),u.jsx("input",{type:"text",id:"user_name",name:"user_name",value:a.user_name,onChange:g,required:!0,className:"w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent"})]}),u.jsxs("div",{children:[u.jsxs("label",{htmlFor:"user_email",className:"block text-sm font-medium text-gray-300 mb-2",children:["E-mail ",u.jsx("span",{className:"text-red-500",children:"*"})]}),u.jsx("input",{type:"email",id:"user_email",name:"user_email",value:a.user_email,onChange:g,required:!0,className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent ${s?"border-red-500":"border-gray-600"}`}),s&&u.jsx("p",{className:"mt-1 text-sm text-red-500",children:s})]}),u.jsxs("div",{children:[u.jsxs("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:["Bericht ",u.jsx("span",{className:"text-red-500",children:"*"})]}),u.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:g,required:!0,rows:4,className:`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent ${o?"border-red-500":"border-gray-600"}`}),o&&u.jsx("p",{className:"mt-1 text-sm text-red-500",children:o})]}),u.jsx("div",{className:"relative",children:u.jsx("button",{type:"submit",disabled:!p()||t,className:`w-full px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${p()&&!t?"bg-highlight hover:bg-highlight/90 text-white":"bg-accent cursor-not-allowed text-gray-600"}`,title:p()?"":"Vul het formulier aub correct in",children:t?"Versturen...":u.jsxs(u.Fragment,{children:["Verstuur bericht",u.jsx(te,{size:20})]})})})]})]}),u.jsx(st,{position:"top-right"})]})};export{nt as default};
