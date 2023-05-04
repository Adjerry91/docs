"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[7593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(6010),a=n(3438),i=n(9960),c=n(3919),l=n(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},n)}function m(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function u(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(p,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},2503:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),o=n(7294),a=n(6010),i=n(5999),c=n(6668),l=n(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},d,{id:void 0}));const u=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return o.createElement(t,(0,r.Z)({},d,{className:(0,a.Z)("anchor",m?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,d.className),id:n}),d.children,o.createElement(l.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},5130:(e,t,n)=>{n.d(t,{b:()=>i,k:()=>c});var r=n(7294),o=n(902);const a=r.createContext(null);function i(e){let{children:t,content:n}=e;const o=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return r.createElement(a.Provider,{value:o},t)}function c(){const e=(0,r.useContext)(a);if(null===e)throw new o.i6("DocProvider");return e}},4928:(e,t,n)=>{n.d(t,{Ue:()=>s,xc:()=>c});var r=n(7294),o=n(9960),a=n(2503),i=n(6010);function c(e){let{name:t,url:n,description:i}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement(o.Z,{class:"card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module",to:n},r.createElement(a.Z,{as:"h2",class:"text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"},t),r.createElement("p",{class:"text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"},i)))}function l(e){let{name:t,image:n,url:c,description:l}=e;return r.createElement("div",{className:"col col--6 margin-bottom--lg"},r.createElement("div",{className:(0,i.Z)("card")},r.createElement("div",{className:(0,i.Z)("card__image")},r.createElement(o.Z,{to:c},r.createElement("img",{src:n,alt:`${t}'s image`}))),r.createElement("div",{className:"card__body"},r.createElement(a.Z,{as:"h3"},t),r.createElement("p",null,l)),r.createElement("div",{className:"card__footer"},r.createElement("div",{className:"button-group button-group--block"},r.createElement(o.Z,{className:"button button--secondary",to:c},"Download")))))}function s(){return r.createElement("div",{class:"row",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.createElement(l,{name:"VRCFaceTracking AppInstaller",url:"https://github.com/benaclejames/VRCFaceTracking/releases/latest/download/VRCFaceTracking_x64.appinstaller",image:n(2648).Z,description:"Get the latest Release lightweight Windows AppInstaller, just run and install!"}))}},351:(e,t,n)=>{n.d(t,{F4:()=>i,d9:()=>l,xb:()=>c,y$:()=>s});var r=n(5130),o=n(7294),a=n(2263);function i(e){let{children:t}=e;const{metadata:n}=(0,r.k)(),{editUrl:a}=n;return o.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)}function c(e){let{children:t,to:n,append:r=""}=e;const{siteConfig:i}=(0,a.Z)(),c=i.customFields[n.toLowerCase()];return o.createElement("a",{href:c.href+r,target:"_blank",rel:"noopener noreferrer"},t??c.label)}const l=e=>{let{children:t,color:n}=e;return o.createElement("span",{style:{color:n}},t)},s=e=>{let{children:t,color:n}=e;return o.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},5420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var r=n(7462),o=(n(7294),n(3905)),a=n(351),i=n(4928);n(2991);const c={sidebar_position:1},l="Introduction",s={unversionedId:"intro/intro",id:"intro/intro",title:"Introduction",description:"\ud83d\udc40 Welcome to VRCFT Docs",source:"@site/docs/intro/intro.mdx",sourceDirName:"intro",slug:"/intro/",permalink:"/docs/intro/",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/intro/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\udee0\ufe0f Getting Started",permalink:"/docs/intro/getting-started"}},d={},m=[{value:"\ud83d\udc40 Welcome to VRCFT Docs",id:"-welcome-to-vrcft-docs",level:2},{value:"\u2754 Resources",id:"-resources",level:2}],u={toc:m},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"-welcome-to-vrcft-docs"},"\ud83d\udc40 Welcome to VRCFT Docs"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some pages on this doc website may be partially outdated or imcomplete, and other information may still be only found in the ",(0,o.kt)(a.xb,{to:"discord",mdxType:"CustomLink"})," / old wiki!\nPlease bear with us as we work towards consolidating the VRCFaceTracking knowledge base.")),(0,o.kt)("p",null,"You have made it to the VRCFaceTracking Docs!\nVRCFaceTracking makes it easy to use your eye and or face tracking hardware of choice in VRChat, without needing to worry about whether an avatar is compatible with their headset.\nHere you will find useful documentation, guides, and tips for setting up and using the VRCFaceTracking software."),(0,o.kt)("div",{class:"row",style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,o.kt)(i.xc,{name:"\ud83d\udee0 Getting Started",url:"./",description:"Follow this short guide to start using face tracking in VRChat",mdxType:"PageCard"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-resources"},"\u2754 Resources"),(0,o.kt)("p",null,"Join the ",(0,o.kt)(a.xb,{to:"discord",mdxType:"CustomLink"})," for the community, discussion, and live support."),(0,o.kt)("p",null,"Visit the ",(0,o.kt)(a.xb,{to:"github",mdxType:"CustomLink"})," to view the ",(0,o.kt)("strong",{parentName:"p"},"source code")," and to ",(0,o.kt)("strong",{parentName:"p"},"download new releases"),"!"),(0,o.kt)("admonition",{title:"Joining the Discord is highly recommended",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Discord is the best place to get help with VRCFT, and to stay up to date with the latest news and announcements.\nThere might be a couple of links places throughout the documentation that will require you to be a member of the Discord to access."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Please Remember"),(0,o.kt)("br",null),"\nThis is a community driven project created by the community and provided for ",(0,o.kt)("strong",{parentName:"p"},"free"),".\nPlease don't join the Discord ",(0,o.kt)("strong",{parentName:"p"},"expecting")," to get help, and consider helping others out when you can."),(0,o.kt)("p",{parentName:"admonition"},"A good place to start would be ",(0,o.kt)(a.F4,{mdxType:"EditUrl"},"by editing these docs")," or even contributing to the project itself!")))}h.isMDXComponent=!0},2648:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vrcft_installer-ee91e492bc58e5982831a43ad159fa6e.png"}}]);