(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{91118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(98745)}])},93740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,r=n(92648).Z,a=n(91598).Z,o=n(17273).Z,l=a(n(67294)),s=r(n(42636)),c=n(97757),d=n(3735),u=n(83341);n(34210);var m=r(n(57746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,r,a,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let b=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:m,fill:f,placeholder:h,loading:g,srcString:b,config:v,unoptimized:w,loader:y,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:S,onLoad:E,onError:C}=e,k=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=m?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},k,{loading:g,width:a,height:r,decoding:"async","data-nimg":f?"fill":"1",className:c,style:i({},d,u)},n,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,b,h,x,_,j,w))},[b,h,x,_,j,C,w,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,h,x,_,j,w)},onError:e=>{S(!0),"blur"===h&&j(!0),C&&C(e)}})))}),v=l.forwardRef((e,t)=>{let n,r;var a,{src:p,sizes:v,unoptimized:w=!1,priority:y=!1,loading:x,className:_,quality:j,width:S,height:E,fill:C,style:k,onLoad:N,onLoadingComplete:$,placeholder:T="empty",blurDataURL:z,layout:O,objectFit:I,objectPosition:L,lazyBoundary:M,lazyRoot:R}=e,P=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=l.useContext(u.ImageConfigContext),F=l.useMemo(()=>{let e=f||A||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[A]),B=P,D=B.loader||m.default;delete B.loader;let W="__next_img_default"in D;if(W){if("custom"===F.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:n}=t,i=o(t,["config"]);return e(i)}}if(O){"fill"===O&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(k=i({},k,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!v&&(v=t)}let q="",G=g(S),V=g(E);if("object"==typeof(a=p)&&(h(a)||void 0!==a.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,z=z||e.blurDataURL,q=e.src,!C){if(G||V){if(G&&!V){let t=G/e.width;V=Math.round(e.height*t)}else if(!G&&V){let t=V/e.height;G=Math.round(e.width*t)}}else G=e.width,V=e.height}}let Z=!y&&("lazy"===x||void 0===x);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(w=!0,Z=!1),F.unoptimized&&(w=!0),W&&p.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0);let[J,K]=l.useState(!1),[U,H]=l.useState(!1),X=g(j),Y=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:L}:{},U?{}:{color:"transparent"},k),Q="blur"===T&&z&&!J?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:V,blurWidth:n,blurHeight:r,blurDataURL:z,objectFit:Y.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:a,sizes:o,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:a,kind:"x"}}(t,r,o),d=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:n,quality:a,width:s[d]})}}({config:F,src:p,unoptimized:w,width:G,quality:X,sizes:v,loader:D}),et=p,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},ei=l.useRef(N);l.useEffect(()=>{ei.current=N},[N]);let er=l.useRef($);l.useEffect(()=>{er.current=$},[$]);let ea=i({isLazy:Z,imgAttributes:ee,heightInt:V,widthInt:G,qualityInt:X,className:_,imgStyle:Y,blurStyle:Q,loading:x,config:F,fill:C,unoptimized:w,placeholder:T,loader:D,srcString:et,onLoadRef:ei,onLoadingCompleteRef:er,setBlurComplete:K,setShowAltText:H},B);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},ea,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:a,objectFit:o}=e,l=i||t,s=r||n,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},57746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},98745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var i=n(85893),r=n(25675),a=n.n(r),o=n(14341),l=n.n(o),s=n(67294);let c=["light","dark"],d="(prefers-color-scheme: dark)",u="undefined"==typeof window,m=(0,s.createContext)(void 0),f={setTheme:e=>{},themes:[]},h=()=>{var e;return null!==(e=(0,s.useContext)(m))&&void 0!==e?e:f},g=e=>(0,s.useContext)(m)?s.createElement(s.Fragment,null,e.children):s.createElement(b,e),p=["light","dark"],b=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:r="theme",themes:a=p,defaultTheme:o=n?"system":"light",attribute:l="data-theme",value:u,children:f,nonce:h})=>{let[g,b]=(0,s.useState)(()=>w(r,o)),[_,j]=(0,s.useState)(()=>w(r)),S=u?Object.values(u):a,E=(0,s.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=x());let a=u?u[r]:r,s=t?y():null,d=document.documentElement;if("class"===l?(d.classList.remove(...S),a&&d.classList.add(a)):a?d.setAttribute(l,a):d.removeAttribute(l),i){let e=c.includes(o)?o:null,t=c.includes(r)?r:e;d.style.colorScheme=t}null==s||s()},[]),C=(0,s.useCallback)(e=>{b(e);try{localStorage.setItem(r,e)}catch(e){}},[e]),k=(0,s.useCallback)(t=>{let i=x(t);j(i),"system"===g&&n&&!e&&E("system")},[g,e]);(0,s.useEffect)(()=>{let e=window.matchMedia(d);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,s.useEffect)(()=>{let e=e=>{e.key===r&&C(e.newValue||o)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,s.useEffect)(()=>{E(null!=e?e:g)},[e,g]);let N=(0,s.useMemo)(()=>({theme:g,setTheme:C,forcedTheme:e,resolvedTheme:"system"===g?_:g,themes:n?[...a,"system"]:a,systemTheme:n?_:void 0}),[g,C,e,_,n,a]);return s.createElement(m.Provider,{value:N},s.createElement(v,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:r,themes:a,defaultTheme:o,attribute:l,value:u,children:f,attrs:S,nonce:h}),f)},v=(0,s.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:a,value:o,attrs:l,nonce:u})=>{let m="system"===a,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${l.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=r?c.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,i=!0)=>{let a=o?o[e]:e,l=t?e+"|| ''":`'${a}'`,s="";return r&&i&&!t&&c.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||a?`c.add(${l})`:"null":a&&(s+=`d[s](n,${l})`),s},p=e?`!function(){${f}${g(e)}}()`:i?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${d}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${g(o?"x[e]":"e",!0)}}${m?"":"else{"+g(a,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${g(o?"x[e]":"e",!0)}}else{${g(a,!1,!1)};}${h}}catch(t){}}();`;return s.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:p}})},()=>!0),w=(e,t)=>{let n;if(!u){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(d)),e.matches?"dark":"light");function _(){let{theme:e,setTheme:t}=h();console.log(e);let[n,r]=(0,s.useState)(!1);return((0,s.useEffect)(()=>r(!0),[]),n)?(0,i.jsxs)("header",{className:l().navbar,children:[(0,i.jsx)("div",{className:l().brand,children:(0,i.jsx)(a(),{src:"/brand.png",width:42,height:42,alt:"Brand"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:l().themeicon,children:(0,i.jsx)("button",{className:l().themebutton,onClick:()=>t("dark"===e?"light":"dark"),children:"dark"===e?(0,i.jsx)("i",{className:"bi bi-moon-fill"}):(0,i.jsx)("i",{className:"bi bi-moon"})})}),(0,i.jsx)("span",{className:l().githubicon,children:(0,i.jsx)("a",{href:"https://github.com/jose-almir/jose-almir.github.io",children:(0,i.jsx)("i",{className:"bi bi-github"})})})]})]}):null}function j(e){let{children:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{}),(0,i.jsx)("main",{className:"pt-md pb-md",children:t})]})}n(64627);var S=n(9008),E=n.n(S);function C(e){let{Component:t,pageProps:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(g,{defaultTheme:"dark",enableSystem:!1,children:(0,i.jsxs)(j,{children:[(0,i.jsxs)(E(),{children:[(0,i.jsx)("title",{children:"jose-almir"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("base",{target:"_blank"})]}),(0,i.jsx)(t,{...n})]})})})}},64627:function(){},14341:function(e){e.exports={navbar:"Navbar_navbar__VkIDk",brand:"Navbar_brand__uqBik",githubicon:"Navbar_githubicon__8GLBo",themeicon:"Navbar_themeicon__WZ6kC",themebutton:"Navbar_themebutton__FmIlT"}},9008:function(e,t,n){e.exports=n(42636)},25675:function(e,t,n){e.exports=n(93740)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(91118),t(96885)}),_N_E=e.O()}]);