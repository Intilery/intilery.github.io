(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[6296],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,d=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6738:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"gtm-ecommerce",title:"GTM Advanced Ecommerce (UA)",sidebar_label:"GTM Advanced Ecommerce"},l=void 0,m={unversionedId:"tag/gtm-ecommerce",id:"tag/gtm-ecommerce",isDocsHomePage:!1,title:"GTM Advanced Ecommerce (UA)",description:"Intilery supports GTM Enhanced Ecommerce by integrating ecommerce events via Google Tag Manager",source:"@site/docs/tag/gtm-ecommerce.mdx",sourceDirName:"tag",slug:"/tag/gtm-ecommerce",permalink:"/docs/tag/gtm-ecommerce",version:"current",frontMatter:{id:"gtm-ecommerce",title:"GTM Advanced Ecommerce (UA)",sidebar_label:"GTM Advanced Ecommerce"},sidebar:"tag",previous:{title:"Google Tag Manager Data Layer",permalink:"/docs/tag/gtm-datalayer"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Update Intilery Tag",id:"update-intilery-tag",children:[]}],p={toc:s};function u(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Intilery supports ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/tag-manager/enhanced-ecommerce"},"GTM Enhanced Ecommerce")," by integrating ecommerce events via Google Tag Manager"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have installed the Intilery tag via GTM or any other way, you must remove it before following these instructions, as this setup also adds the Intilery tag"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("a",{target:"_blank",href:"/assets/gtm-ecommerce.json",download:"gtm-ecommerce.json"},"Intilery Container JSON")," file and save to your computer"),(0,o.kt)("li",{parentName:"ol"},"Login to your GTM account"),(0,o.kt)("li",{parentName:"ol"},"Navigate to your account and container - the contaioner needs to be on every page of your ecommerce site"),(0,o.kt)("li",{parentName:"ol"},'Go to Admin, for your container, click "Import Container" (this will import the Intilery integration for commerce)')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Container",src:n(6994).Z})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Select the JSON file you downloaded at step 1"),(0,o.kt)("li",{parentName:"ol"},'Choose ecisting workspace and select "Default Workspace"'),(0,o.kt)("li",{parentName:"ol"},'Select "Merge" and "Rename conflicting tags, triggers, and variables."'),(0,o.kt)("li",{parentName:"ol"},"Confirm there are 8 new Tags, 9 new Triggers, 33 new Variables"),(0,o.kt)("li",{parentName:"ol"},"There should be NO conflicts (if so do not continue)")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tag",src:n(5556).Z})),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},'Click "Confirm" to import the container')),(0,o.kt)("h2",{id:"update-intilery-tag"},"Update Intilery Tag"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Log in to your Intilery account, navigate to "Tag"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tag",src:n(3315).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'Then click "Add Intilery to your website" to open the tag snippet')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tag",src:n(7106).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},'Click "Copy Snippet" to copy the tag code to your clipboard.'),(0,o.kt)("li",{parentName:"ol"},'In GTM, navigate to "Tags"'),(0,o.kt)("li",{parentName:"ol"},'Select the "Intilery Tag"'),(0,o.kt)("li",{parentName:"ol"},"Click to edit the tag")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tag",src:n(7607).Z})),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the tag HTML with the Tag you copied from the Intilery account")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It should not look like this"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Tag",src:n(683).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click Save")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit your changes and publish")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify events are being sent to Intilery"))))}u.isMDXComponent=!0},6994:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gtm-ecommerce-1d7907cb8fae0d84b78e9ab8ea7b1b73.png"},5556:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gtm-ecommerce2-6795c194e8cde715c4d31ff428467cff.png"},7607:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gtm-ecommerce3-4c3fd4f6b65bfd8434597ec69ae80a8c.png"},683:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gtm-ecommerce4-77fcd3a50b2951aeb95cc5b3da1b6d4b.png"},7106:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tag-copy-328a344a12ca6312d441c325133a16c1.png"},3315:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tag-f2e47027794c9c467687ae5190a097d4.png"}}]);