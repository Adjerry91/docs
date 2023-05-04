"use strict";(self.webpackChunkvrcft_docs=self.webpackChunkvrcft_docs||[]).push([[5167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,m=s["".concat(l,".").concat(f)]||s[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Android MeowFace",c={unversionedId:"hardware/meowface",id:"hardware/meowface",title:"Android MeowFace",description:"An Android phone (or realistically any Android-running device with a camera) can generate ARKit-like face tracking data for VRCFT using the MeowFace app by Suvidriel.",source:"@site/docs/hardware/meowface.mdx",sourceDirName:"hardware",slug:"/hardware/meowface",permalink:"/docs/hardware/meowface",draft:!1,editUrl:"https://github.com/VRCFaceTracking/docs/edit/master/docs/hardware/meowface.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iPhone ARKit",permalink:"/docs/hardware/iphone-arkit"},next:{title:"Pico 4 Pro / Enterprise",permalink:"/docs/hardware/pico4pe"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Module",id:"module",level:2},{value:"Startup Instructions",id:"startup-instructions",level:3}],d={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-meowface"},"Android MeowFace"),(0,a.kt)("p",null,"An Android phone (or realistically any Android-running device with a camera) can generate ARKit-",(0,a.kt)("em",{parentName:"p"},"like")," face tracking data for VRCFT using the MeowFace app by Suvidriel.\nDue to the nature of how the app works, this method of face tracking is intended only for desktop mode, as the app cannot track only the bottom of your face while you are wearing a VR headset."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.suvidriel.meowface&hl=en_US&gl=US&pli=1"},"Meowface")," app onto your Android phone.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Like in any other "VTubing" situation, you will probably want to get a sturdy phone stand (or even head mount!) to hold your phone when using this app for face tracking. ')),(0,a.kt)("h2",{id:"module"},"Module"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("strong",{parentName:"p"},'"MeowFaceTrackingModule"')," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/vrcft-software/vrcft#module-registry"},"VRCFaceTracking Module Registry"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/regzo2/VRCFaceTracking-MeowFace"},"MeowFaceTrackingModule source repository")),(0,a.kt)("h3",{id:"startup-instructions"},"Startup Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get your PC's (the computer on which VRCFaceTracking is running) ",(0,a.kt)("a",{parentName:"li",href:"https://www.whatismybrowser.com/detect/what-is-my-local-ip-address"},"local IP address")),(0,a.kt)("li",{parentName:"ol"},"Run the installed Meowface app, then tap the upper left corner where it says ",(0,a.kt)("inlineCode",{parentName:"li"},"Waiting for connection or Click to enter PC ip.")," Enter the PC IP Address you found in the previous step."),(0,a.kt)("li",{parentName:"ol"},"Start VRCFaceTracking with the MeowFace module initialized.")))}u.isMDXComponent=!0}}]);