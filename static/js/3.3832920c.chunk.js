"use strict";(self.webpackChunkchatgemini=self.webpackChunkchatgemini||[]).push([[3],{2792:(e,t,n)=>{n.d(t,{s:()=>a});const a=async e=>{const t=navigator.clipboard||{writeText:e=>{const t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}};return!!t&&(t.writeText(e),!0)}},3:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var a=n(8467),s=n(364),l=n(9785),r=n(1731),c=n(6934),i=n(6087),o=(n(1973),n(5673)),d=n(2792),m=n(7523);const u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=Date.now();return function(){if(Date.now()-n>=t){for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];e.apply(null,s),n=Date.now()}}};var g=n(6417);const p=u((async(e,t)=>{const n=await(0,d.s)(e),a=t.innerHTML;t.innerHTML=n?"\u590d\u5236\u6210\u529f":"\u590d\u5236\u5931\u8d25",setTimeout((()=>{t.innerHTML=a}),1e3)}),1200),h=e=>{const{className:t,typingEffect:n,children:a}=e;return(0,g.jsx)(s.U,{className:"prose text-sm lg:prose-base max-w-[100%] break-words ".concat(null!==t&&void 0!==t?t:""),children:a,components:{a:e=>{let{node:t,...n}=e;return(0,g.jsx)("a",{href:n.href,target:"_blank",rel:"noreferrer",...n,children:n.children})},pre:e=>{let{node:t,...n}=e;return(0,g.jsx)("pre",{className:"bg-transparent p-2",...n})},code:e=>{let{className:t,children:a}=e;const s=/language-(\w+)/.exec(null!==t&&void 0!==t?t:""),l=String(a).replace(n,"\u275a");return s?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.Z,{PreTag:"div",style:m.Z,language:null!==s&&(null===s||void 0===s?void 0:s.length)>1?s[1]:"",children:l.replace(/\n$/,"")}),(0,g.jsx)("button",{className:"text-gray-700/100 text-xs hover:opacity-50",onClick:e=>{let{currentTarget:t}=e;return p(l,t)},children:"\u590d\u5236\u4ee3\u7801"})]}):(0,g.jsx)("code",{className:"text-gray-700",children:l.replace(/\n$/,"")})},table:e=>{let{node:t,...n}=e;return(0,g.jsx)("table",{className:"overflow-x-auto block whitespace-nowrap",...n})}},urlTransform:e=>e,rehypePlugins:[r.Z,i.Z],remarkPlugins:[l.Z,c.Z]})};var x=n(7313);const f=n.p+"static/media/wand-magic-sparkles-solid.b85c9c00c06c7ce7f5afa005c270a4e2.svg";const b=n.p+"static/media/user-regular.29db6a1f607a24b769df338cded3a768.svg";const v=n.p+"static/media/pen-to-square-solid.323a05100783991ea833e21daa2c0798.svg";const y=n.p+"static/media/trash-solid.65e8f8fd4029e1db2f655e77aab432af.svg";const j=n.p+"static/media/arrows-rotate-solid.814c55263931133090f94e8a0e4d3c9b.svg";const w=n.p+"static/media/clipboard-regular.087182556a42a3609963076f55a76062.svg";var N=n(4452),C=n(6099);let k=function(e){return e.Model="model",e.User="user",e}({}),D=function(e){return e[e.Edit=0]="Edit",e[e.Done=1]="Done",e[e.Cancel=2]="Cancel",e}({});const T=e=>{const{index:t,prompt:n,editState:a,role:s,children:l,onEdit:r,onDelete:c,onRefresh:i}=e,o=(0,x.useRef)(null);return(0,g.jsxs)("div",{className:"p-5 mb-3 mr-3 space-y-3 rounded-lg hover:bg-gray-100 transition-all",children:[(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsxs)("div",{className:"size-6 rounded-full flex justify-center items-center ".concat(s===k.Model?"bg-purple-600":"bg-lime-700"),children:[(0,g.jsx)("img",{className:s===k.Model?"size-3":"hidden",src:f,alt:""}),(0,g.jsx)("img",{className:s===k.User?"size-3":"hidden",src:b,alt:""})]}),(0,g.jsx)("span",{className:"ml-2 font-semibold text-gray-800/100",children:s===k.Model?"AI":"\u60a8"})]}),(0,g.jsx)("div",{className:"px-7",children:a.state===D.Edit&&t===a.index?(0,g.jsxs)("div",{className:"flex flex-col space-y-2 lg:text-base text-sm",children:[(0,g.jsx)("textarea",{className:"bg-transparent text-gray-800 rounded-lg p-2 overflow-y-scroll resize-none !outline-none",placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9...",defaultValue:n,ref:o,onInput:e=>{let{currentTarget:t}=e;return(0,N.J)(t,60,200)}}),(0,g.jsxs)("div",{className:"flex gap-2 justify-center",children:[(0,g.jsx)("button",{className:"px-3 py-2 border font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700",onClick:()=>{const{current:e}=o,{value:a}=e;r(t,D.Done,a!==n?a:"")},children:"\u50a8\u5b58\u5e76\u63d0\u4ea4"}),(0,g.jsx)("button",{className:"px-3 py-2 border font-medium rounded-lg hover:bg-gray-300",onClick:()=>r(t,D.Cancel,""),children:"\u53d6\u6d88"})]})]}):(0,g.jsx)(g.Fragment,{children:l})}),(0,g.jsxs)("div",{className:"flex ml-6 gap-1",children:[(0,g.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:async()=>{const e=l.props.children;await(0,d.s)(e)?(0,C.L)("\u5185\u5bb9\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"):(0,C.L)("\u5185\u5bb9\u590d\u5236\u5931\u8d25",!0)},children:(0,g.jsx)("img",{src:w,className:"size-4",alt:""})}),s===k.User&&a.state!==D.Edit&&(0,g.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:()=>{(0,N.J)(o.current,60,200),r(t,D.Edit,"")},children:(0,g.jsx)("img",{src:v,className:"size-4",alt:""})}),s===k.Model&&(0,g.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:()=>i(t),children:(0,g.jsx)("img",{src:j,className:"size-4",alt:""})}),s===k.Model&&1!==t&&(0,g.jsx)("button",{className:"size-6 rounded-lg hover:bg-gray-200 flex justify-center items-center",onClick:()=>c(t),children:(0,g.jsx)("img",{src:y,className:"size-4",alt:""})})]})]})};var z=n(5537),E=n(5138),L=n(9705),M=n(4074),A=n(6244),R=n(6406),U=n(1109),I=n(6242);var S=n(6349);n(4300);const Z=e=>{const{delegate:t,options:n,children:a}=e;return(0,x.useEffect)((()=>(S.KR.bind(null!==t&&void 0!==t?t:"[data-image-view]",n),()=>S.KR.destroy())),[t,n]),(0,g.jsx)(g.Fragment,{children:a})};var H=n(844);const B="\u91cd\u65b0\u751f\u6210\u4e2d...",F=e=>{var t,n;const s=null!==(t=null===(n=e.refs)||void 0===n?void 0:n.mainSectionRef.current)&&void 0!==t?t:null,{site:l}=R.globalConfig.title,r=(0,z.I0)(),c=(0,z.v9)((e=>e.sessions.sessions)),i=(0,z.v9)((e=>e.ai.ai)),{id:o}=(0,a.UO)(),[d,m]=(0,x.useState)([]),[u,p]=(0,x.useState)({index:0,state:D.Cancel}),[f,b]=(0,x.useState)({}),v=(0,x.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(i.busy||e)&&(null===s||void 0===s||s.scrollTo({top:s.scrollHeight,behavior:"smooth"}))}),[i,s]),y=async(e,t)=>{const n=null!==t&&void 0!==t?t:c;if(!i.busy&&o&&o in n){var a;let t={...n,[o]:[...n[o].slice(0,e),{role:"model",parts:B,timestamp:Date.now()}]};r((0,E.f0)({...i,busy:!0})),r((0,L.f0)(t));const s=(n,a)=>{a&&r((0,E.f0)({...i,busy:!1}));const s=t[o][e].parts!==B?t[o][e].parts:"",l=Date.now();t={...t,[o]:[...t[o].slice(0,e),{role:"model",parts:"".concat(s).concat(n),timestamp:l}]},m(t[o]),r((0,L.f0)(t))};null!==(a=t[o][e-1].attachment)&&void 0!==a&&a.data.length?await(0,I.H)(i.model.vision,t[o][e-1].parts,t[o][e-1].attachment,R.globalConfig.sse,s):await(0,M.B)(i.model.pro,t[o].slice(0,e-1),t[o][e-1].parts,R.globalConfig.sse,A.W,s)}else i.busy&&(0,C.L)("AI \u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",!0)},j=(e,t,n)=>{if(i.busy||p({index:e,state:t}),!i.busy&&o&&o in c&&n.length&&t===D.Done){const t={...c,[o]:[...c[o].slice(0,e),{...c[o][e],parts:n},{role:"model",parts:B,timestamp:Date.now()}]};m(t[o]),y(e+1,t)}else i.busy&&(0,C.L)("AI \u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",!0)},w=e=>{!i.busy&&o&&o in c?(0,H.D)("\u8fd9\u5219\u56de\u5e94\u548c\u5bf9\u5e94\u63d0\u95ee\u90fd\u5c06\u88ab\u79fb\u9664\uff0c\u8981\u7ee7\u7eed\u5417\uff1f",(()=>{const t={...c,[o]:[...c[o].slice(0,e-1),...c[o].slice(e+1)]};r((0,L.f0)(t)),m(t[o])})):i.busy&&(0,C.L)("AI \u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",!0)};return(0,x.useEffect)((()=>{if(o&&o in c){m(c[o]);let e=c[o][0].parts;e.length>20&&(e="".concat(e.substring(0,20)," ...")),document.title="".concat(e," | ").concat(l)}else document.title="\u4f1a\u8bdd\u65e0\u6548 | ".concat(l),m([{role:"model",parts:"\u60a8\u5f53\u524d\u7684\u4f1a\u8bdd ID \u4f3c\u4e4e\u65e0\u6548\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u5740\uff0c\u60a8\u4e5f\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a\u4f1a\u8bdd\u3002",timestamp:0}]);setTimeout((()=>v(!0)),300)}),[l,o,c,s,v]),(0,g.jsx)(U.W,{className:"max-w-[calc(100%)] py-5 pl-3 mb-auto mx-1 md:mx-[4rem] lg:mx-[8rem]",children:(0,g.jsx)(Z,{children:d.map(((e,t)=>{let{role:n,parts:a,attachment:s,timestamp:l}=e;const{mimeType:r,data:c}=null!==s&&void 0!==s?s:{mimeType:"",data:""};let o="";c.length&&l in f?o=f[l]:c.length&&(o=(e=>{try{let t="image/png";if(e.indexOf("data:image")>=0){let n=e.split(",");t=n[0].match(/:(.*?);/)[1]||"image/png",e=n[1]}let n=window.atob(e),a=new ArrayBuffer(n.length),s=new Uint8Array(a);for(let e=0;e<n.length;e++)s[e]=n.charCodeAt(e);let l=new Blob([a],{type:t});return URL.createObjectURL(l)}catch(t){return""}})("data:".concat(r,";base64,").concat(c)),b((e=>({...e,[l]:o}))));const m='<div class="inline-block text-center overflow-hidden">\n                        <a data-image-view="gallery" href="'.concat(o,'">\n                            <img src="').concat(o,'" style="\n                                max-width: 10rem;\n                                margin-top: 0;\n                                margin-bottom: 0.2rem;\n                                border-radius: 0.25rem;\n                            " alt="\u56fe\u7247\u9644\u4ef6" />\n                        </a>\n                        <span class="text-xs text-gray-400">\n                            \u70b9\u51fb\u67e5\u770b\u5927\u56fe\n                        </span>\n                    </div>'),p='<div class="inline px-1 bg-gray-900 animate-pulse animate-duration-700"></div>';return i.busy&&n===k.Model&&t===d.length-1&&(a+=p),(0,g.jsx)(T,{index:t,prompt:a,editState:u,role:n,onRefresh:y,onDelete:w,onEdit:j,children:(0,g.jsx)(h,{typingEffect:p,children:"".concat(a).concat(c.length?"\n\n---\n\n".concat(m):"")})},t)}))})})}}}]);