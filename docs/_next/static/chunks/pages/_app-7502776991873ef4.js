(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{82010:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var r=n(67294);let a=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:s},u=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:s="theme",themes:c=d,defaultTheme:u=n?"system":"light",attribute:f="data-theme",value:b,children:g,nonce:y})=>{let[_,j]=(0,r.useState)(()=>h(s,u)),[x,w]=(0,r.useState)(()=>h(s)),N=b?Object.values(b):c,k=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let o=b?b[r]:r,i=t?p():null,s=document.documentElement;if("class"===f?(s.classList.remove(...N),o&&s.classList.add(o)):o?s.setAttribute(f,o):s.removeAttribute(f),l){let e=a.includes(u)?u:null,t=a.includes(r)?r:e;s.style.colorScheme=t}null==i||i()},[]),C=(0,r.useCallback)(e=>{j(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),E=(0,r.useCallback)(t=>{let r=v(t);w(r),"system"===_&&n&&!e&&k("system")},[_,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&C(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{k(null!=e?e:_)},[e,_]);let S=(0,r.useMemo)(()=>({theme:_,setTheme:C,forcedTheme:e,resolvedTheme:"system"===_?x:_,themes:n?[...c,"system"]:c,systemTheme:n?x:void 0}),[_,C,e,x,n,c]);return r.createElement(i.Provider,{value:S},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:s,themes:c,defaultTheme:u,attribute:f,value:b,children:g,attrs:N,nonce:y}),g)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:i,defaultTheme:s,value:c,attrs:u,nonce:d})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?a.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let o=c?c[e]:e,l=t?e+"|| ''":`'${o}'`,s="";return i&&r&&!t&&a.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${l})`:"null":o&&(s+=`d[s](n,${l})`),s},v=e?`!function(){${m}${p(e)}}()`:l?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${f?"":"else{"+p(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(s,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},91118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(72921)}])},81516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(92648).Z,a=n(17273).Z,o=r(n(67294)),l=n(14532),i=n(83353),s=n(61410),c=n(79064),u=n(370),d=n(69955),f=n(24224),m=n(80508),h=n(81516),p=n(64266);let v=new Set;function b(e,t,n,r,a){if(a||i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+a;if(v.has(o))return;v.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:s.formatUrl(e)}let y=o.default.forwardRef(function(e,t){let n,r;let{href:s,as:v,children:y,prefetch:_,passHref:j,replace:x,shallow:w,scroll:N,locale:k,onClick:C,onMouseEnter:E,onTouchStart:S,legacyBehavior:T=!1}=e,M=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,T&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let $=!1!==_,L=o.default.useContext(d.RouterContext),O=o.default.useContext(f.AppRouterContext),P=null!=L?L:O,I=!L,{href:R,as:K}=o.default.useMemo(()=>{if(!L){let e=g(s);return{href:e,as:v?g(v):e}}let[e,t]=l.resolveHref(L,s,!0);return{href:e,as:v?l.resolveHref(L,v):t||e}},[L,s,v]),F=o.default.useRef(R),A=o.default.useRef(K);T&&(r=o.default.Children.only(n));let D=T?r&&"object"==typeof r&&r.ref:t,[H,J,U]=m.useIntersection({rootMargin:"200px"}),G=o.default.useCallback(e=>{(A.current!==K||F.current!==R)&&(U(),A.current=K,F.current=R),H(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[K,D,R,U,H]);o.default.useEffect(()=>{P&&J&&$&&b(P,R,K,{locale:k},I)},[K,R,J,k,$,null==L?void 0:L.locale,P,I]);let V={ref:G,onClick(e){T||"function"!=typeof C||C(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,a,l,s,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:l,locale:c,scroll:s}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?o.default.startTransition(h):h()}(e,P,R,K,x,w,N,k,I,$)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&($||!I)&&b(P,R,K,{locale:k,priority:!0,bypassPrefetchedCheck:!0},I)},onTouchStart(e){T||"function"!=typeof S||S(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&($||!I)&&b(P,R,K,{locale:k,priority:!0,bypassPrefetchedCheck:!0},I)}};if(c.isAbsoluteUrl(K))V.href=K;else if(!T||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==k?k:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&h.getDomainLocale(K,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);V.href=t||p.addBasePath(u.addLocale(K,e,null==L?void 0:L.defaultLocale))}return T?o.default.cloneElement(r,V):o.default.createElement("a",Object.assign({},M,V),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!o,[u,d]=r.useState(!1),f=r.useRef(null),m=r.useCallback(e=>{f.current=e},[]);r.useEffect(()=>{if(o){if(c||u)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let a=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:a},i.push(n),l.set(n,t),t}(n);return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=a.requestIdleCallback(()=>d(!0));return()=>a.cancelIdleCallback(e)}},[c,n,t,u,f.current]);let h=r.useCallback(()=>{d(!1)},[]);return[m,u,h]};var r=n(67294),a=n(10029);let o="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},72921:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(85893),a=n(4108),o=n.n(a);function l(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{className:"hr"}),(0,r.jsx)("footer",{className:o().footer,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:o()["social-icons"],children:[(0,r.jsx)("a",{href:"https://github.com/jose-almir/jose-almir.github.io",target:"_blank",children:(0,r.jsx)("i",{className:"bi bi-github"})}),(0,r.jsx)("a",{href:"/feed.xml",target:"_blank",title:"Inscrever no feed",children:(0,r.jsx)("i",{className:"bi bi-rss-fill"})}),(0,r.jsx)("a",{href:"/sitemap.xml",target:"_blank",title:"Mapa do site",children:(0,r.jsx)("i",{className:"bi bi-diagram-3-fill"})})]}),(0,r.jsxs)("p",{className:o().copyright,children:["\xa9 ",new Date().getFullYear()," jose-almir. Todos os direitos reservados."]})]})})]})}var i=n(7830),s=n.n(i),c=n(82010),u=n(67294),d=n(41664),f=n.n(d);function m(){let{theme:e,setTheme:t}=(0,c.F)(),[n,a]=(0,u.useState)(!0),[o,l]=(0,u.useState)(0),[i,d]=(0,u.useState)(!1),m=()=>{window.scrollY>o?a(!1):a(!0),l(window.scrollY)};if((0,u.useEffect)(()=>d(!0),[]),(0,u.useEffect)(()=>(window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}),[o]),!i)return null;let h=n?"":" ".concat(s().hidden);return(0,r.jsxs)("header",{className:s().navbar+h,children:[(0,r.jsx)("div",{className:s().brand,children:(0,r.jsx)(f(),{href:"/",title:"Navegar para tela principal",children:(0,r.jsx)("div",{className:s().avatar})})}),(0,r.jsx)("nav",{className:s().navlinks,children:(0,r.jsx)(f(),{href:"/blog",title:"Navegar para tela sobre",children:"Blog"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:s().themeicon,children:(0,r.jsx)("button",{className:s().themebutton,onClick:()=>t("dark"===e?"light":"dark"),children:"dark"===e?(0,r.jsx)("i",{className:"bi bi-moon-fill"}):(0,r.jsx)("i",{className:"bi bi-moon"})})}),(0,r.jsx)("span",{className:s().githubicon,children:(0,r.jsx)("a",{href:"https://github.com/jose-almir/jose-almir.github.io",children:(0,r.jsx)("i",{className:"bi bi-github"})})})]})]})}function h(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{}),(0,r.jsx)("main",{children:t})]})}n(64627);var p=n(9008),v=n.n(p),b=n(4298),g=n.n(b);function y(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-KV71RHKNM9"}),(0,r.jsx)(g(),{id:"google-analytics",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-KV71RHKNM9', {\n            page_path: window.location.pathname,\n          });\n        "}}),(0,r.jsx)(c.f,{defaultTheme:"dark",enableSystem:!1,children:(0,r.jsxs)(h,{children:[(0,r.jsxs)(v(),{children:[(0,r.jsx)("title",{children:"jose-almir"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,r.jsx)(t,{...n}),(0,r.jsx)(l,{})]})})]})}},64627:function(){},4108:function(e){e.exports={footer:"Footer_footer__Dhw_9","social-icons":"Footer_social-icons__QJPab",copyright:"Footer_copyright__lw16R"}},7830:function(e){e.exports={navbar:"Navbar_navbar___JEvD",avatar:"Navbar_avatar__zUZA7",brand:"Navbar_brand__OGPL_",githubicon:"Navbar_githubicon__C1gP1",themeicon:"Navbar_themeicon__6GNJ3",themebutton:"Navbar_themebutton__qtiPI",navlinks:"Navbar_navlinks__clVQG",hidden:"Navbar_hidden__Ja1ib"}},9008:function(e,t,n){e.exports=n(42636)},41664:function(e,t,n){e.exports=n(95569)},4298:function(e,t,n){e.exports=n(85442)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(91118),t(96885)}),_N_E=e.O()}]);