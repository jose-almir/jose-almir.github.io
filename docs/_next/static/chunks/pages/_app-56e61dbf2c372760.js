(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{91118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(98745)}])},20091:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var i=n(85893),r=n(32506),a=n.n(r);function o(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("hr",{}),(0,i.jsx)("footer",{className:a().footer,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:a()["social-icons"],children:[(0,i.jsx)("a",{href:"https://github.com/jose-almir/jose-almir.github.io",children:(0,i.jsx)("i",{className:"bi bi-github"})}),(0,i.jsx)("a",{href:"/feed.xml",title:"Inscrever no feed",children:(0,i.jsx)("i",{className:"bi bi-rss-fill"})})]}),(0,i.jsx)("p",{className:a().copyright,children:"\xa9 2023 Your Website. All rights reserved."})]})})]})}},93740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,r=n(92648).Z,a=n(91598).Z,o=n(17273).Z,s=a(n(67294)),l=r(n(42636)),c=n(97757),d=n(3735),u=n(83341);n(34210);var m=r(n(57746));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,r,a,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let b=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:m,fill:h,placeholder:f,loading:g,srcString:b,config:v,unoptimized:y,loader:w,onLoadRef:x,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:S,onLoad:E,onError:C}=e,k=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=m?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},k,{loading:g,width:a,height:r,decoding:"async","data-nimg":h?"fill":"1",className:c,style:i({},d,u)},n,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,b,f,x,j,_,y))},[b,f,x,j,_,C,y,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,f,x,j,_,y)},onError:e=>{S(!0),"blur"===f&&_(!0),C&&C(e)}})))}),v=s.forwardRef((e,t)=>{let n,r;var a,{src:p,sizes:v,unoptimized:y=!1,priority:w=!1,loading:x,className:j,quality:_,width:S,height:E,fill:C,style:k,onLoad:N,onLoadingComplete:$,placeholder:T="empty",blurDataURL:z,layout:I,objectFit:O,objectPosition:L,lazyBoundary:M,lazyRoot:R}=e,P=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=s.useContext(u.ImageConfigContext),F=s.useMemo(()=>{let e=h||A||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[A]),B=P,W=B.loader||m.default;delete B.loader;let D="__next_img_default"in W;if(D){if("custom"===F.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:n}=t,i=o(t,["config"]);return e(i)}}if(I){"fill"===I&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(k=i({},k,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!v&&(v=t)}let q="",G=g(S),V=g(E);if("object"==typeof(a=p)&&(f(a)||void 0!==a.src)){let e=f(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,z=z||e.blurDataURL,q=e.src,!C){if(G||V){if(G&&!V){let t=G/e.width;V=Math.round(e.height*t)}else if(!G&&V){let t=V/e.height;G=Math.round(e.width*t)}}else G=e.width,V=e.height}}let Z=!w&&("lazy"===x||void 0===x);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(y=!0,Z=!1),F.unoptimized&&(y=!0),D&&p.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(y=!0);let[J,H]=s.useState(!1),[K,U]=s.useState(!1),Y=g(_),X=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:L}:{},K?{}:{color:"transparent"},k),Q="blur"===T&&z&&!J?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:V,blurWidth:n,blurHeight:r,blurDataURL:z,objectFit:X.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:a,sizes:o,loader:s}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:a,kind:"x"}}(t,r,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:n,quality:a,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:n,quality:a,width:l[d]})}}({config:F,src:p,unoptimized:y,width:G,quality:Y,sizes:v,loader:W}),et=p,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},ei=s.useRef(N);s.useEffect(()=>{ei.current=N},[N]);let er=s.useRef($);s.useEffect(()=>{er.current=$},[$]);let ea=i({isLazy:Z,imgAttributes:ee,heightInt:V,widthInt:G,qualityInt:Y,className:j,imgStyle:X,blurStyle:Q,loading:x,config:F,fill:C,unoptimized:y,placeholder:T,loader:W,srcString:et,onLoadRef:ei,onLoadingCompleteRef:er,setBlurComplete:H,setShowAltText:U},B);return s.default.createElement(s.default.Fragment,null,s.default.createElement(b,Object.assign({},ea,{ref:t})),w?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:a,objectFit:o}=e,s=i||t,l=r||n,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},57746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},98745:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var i=n(85893),r=n(20091),a=n(25675),o=n.n(a),s=n(14341),l=n.n(s),c=n(67294);let d=["light","dark"],u="(prefers-color-scheme: dark)",m="undefined"==typeof window,h=(0,c.createContext)(void 0),f={setTheme:e=>{},themes:[]},g=()=>{var e;return null!==(e=(0,c.useContext)(h))&&void 0!==e?e:f},p=e=>(0,c.useContext)(h)?c.createElement(c.Fragment,null,e.children):c.createElement(v,e),b=["light","dark"],v=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:r="theme",themes:a=b,defaultTheme:o=n?"system":"light",attribute:s="data-theme",value:l,children:m,nonce:f})=>{let[g,p]=(0,c.useState)(()=>w(r,o)),[v,_]=(0,c.useState)(()=>w(r)),S=l?Object.values(l):a,E=(0,c.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=j());let a=l?l[r]:r,c=t?x():null,u=document.documentElement;if("class"===s?(u.classList.remove(...S),a&&u.classList.add(a)):a?u.setAttribute(s,a):u.removeAttribute(s),i){let e=d.includes(o)?o:null,t=d.includes(r)?r:e;u.style.colorScheme=t}null==c||c()},[]),C=(0,c.useCallback)(e=>{p(e);try{localStorage.setItem(r,e)}catch(e){}},[e]),k=(0,c.useCallback)(t=>{let i=j(t);_(i),"system"===g&&n&&!e&&E("system")},[g,e]);(0,c.useEffect)(()=>{let e=window.matchMedia(u);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,c.useEffect)(()=>{let e=e=>{e.key===r&&C(e.newValue||o)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,c.useEffect)(()=>{E(null!=e?e:g)},[e,g]);let N=(0,c.useMemo)(()=>({theme:g,setTheme:C,forcedTheme:e,resolvedTheme:"system"===g?v:g,themes:n?[...a,"system"]:a,systemTheme:n?v:void 0}),[g,C,e,v,n,a]);return c.createElement(h.Provider,{value:N},c.createElement(y,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:r,themes:a,defaultTheme:o,attribute:s,value:l,children:m,attrs:S,nonce:f}),m)},y=(0,c.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:a,value:o,attrs:s,nonce:l})=>{let m="system"===a,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${s.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=r?d.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=(e,t=!1,i=!0)=>{let a=o?o[e]:e,s=t?e+"|| ''":`'${a}'`,l="";return r&&i&&!t&&d.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||a?`c.add(${s})`:"null":a&&(l+=`d[s](n,${s})`),l},p=e?`!function(){${h}${g(e)}}()`:i?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${u}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${g(o?"x[e]":"e",!0)}}${m?"":"else{"+g(a,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${g(o?"x[e]":"e",!0)}}else{${g(a,!1,!1)};}${f}}catch(t){}}();`;return c.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})},()=>!0),w=(e,t)=>{let n;if(!m){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},x=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},j=e=>(e||(e=window.matchMedia(u)),e.matches?"dark":"light");function _(){let{theme:e,setTheme:t}=g(),[n,r]=(0,c.useState)(!1);return((0,c.useEffect)(()=>r(!0),[]),n)?(0,i.jsxs)("header",{className:l().navbar,children:[(0,i.jsx)("div",{className:l().brand,children:(0,i.jsx)(o(),{src:"/brand.png",width:42,height:42,alt:"Brand"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:l().themeicon,children:(0,i.jsx)("button",{className:l().themebutton,onClick:()=>t("dark"===e?"light":"dark"),children:"dark"===e?(0,i.jsx)("i",{className:"bi bi-moon-fill"}):(0,i.jsx)("i",{className:"bi bi-moon"})})}),(0,i.jsx)("span",{className:l().githubicon,children:(0,i.jsx)("a",{href:"https://github.com/jose-almir/jose-almir.github.io",children:(0,i.jsx)("i",{className:"bi bi-github"})})})]})]}):null}function S(e){let{children:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{}),(0,i.jsx)("main",{className:"pt-md",children:t})]})}n(64627);var E=n(9008),C=n.n(E);function k(e){let{Component:t,pageProps:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(p,{defaultTheme:"dark",enableSystem:!1,children:(0,i.jsxs)(S,{children:[(0,i.jsxs)(C(),{children:[(0,i.jsx)("title",{children:"jose-almir"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("base",{target:"_blank"})]}),(0,i.jsx)(t,{...n}),(0,i.jsx)(r.$,{})]})})})}},64627:function(){},32506:function(e){e.exports={footer:"Footer_footer__BH5s_","social-icons":"Footer_social-icons__bW90v",copyright:"Footer_copyright__1_0lf"}},14341:function(e){e.exports={navbar:"Navbar_navbar__VkIDk",brand:"Navbar_brand__uqBik",githubicon:"Navbar_githubicon__8GLBo",themeicon:"Navbar_themeicon__WZ6kC",themebutton:"Navbar_themebutton__FmIlT"}},9008:function(e,t,n){e.exports=n(42636)},25675:function(e,t,n){e.exports=n(93740)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(91118),t(96885)}),_N_E=e.O()}]);