(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[2369],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4750:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={id:"gaming",title:"Gaming Schema",sidebar_label:"Gaming"},c="Gaming Schema",l={unversionedId:"schema/gaming",id:"schema/gaming",isDocsHomePage:!1,title:"Gaming Schema",description:"Although there is no specific gaming schema, we have additional rules built in that",source:"@site/docs/schema/gaming.md",sourceDirName:"schema",slug:"/schema/gaming",permalink:"/docs/schema/gaming",version:"current",frontMatter:{id:"gaming",title:"Gaming Schema",sidebar_label:"Gaming"},sidebar:"schema",previous:{title:"Retail/Ecommerce",permalink:"/docs/schema/retail"}},s=[{value:"Configure Exclusion Rules",id:"configure-exclusion-rules",children:[{value:"Add Exclusions Object to Identify Traits",id:"add-exclusions-object-to-identify-traits",children:[]},{value:"Add Boolean Values to Exclusions Object",id:"add-boolean-values-to-exclusions-object",children:[]}]}],u={toc:s};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gaming-schema"},"Gaming Schema"),(0,i.kt)("p",null,"Although there is no specific gaming schema, we have additional rules built in that\ncan be enabled for your account. Any exclusion that is set on a customer profile\nwill disable sending of all campaigns, both marketing and\ntransactional to that customer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Speak to your account manager to request these are enabled for your account."),(0,i.kt)("li",{parentName:"ul"},"Set up your exclusion rules as described below"),(0,i.kt)("li",{parentName:"ul"},"Test setting and sending against a test customer to verify")),(0,i.kt)("h2",{id:"configure-exclusion-rules"},"Configure Exclusion Rules"),(0,i.kt)("p",null,"Add an ",(0,i.kt)("inlineCode",{parentName:"p"},"exclusions")," object to your ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," schema. The object should\ncontain boolean flags, and if any one of those flags is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then all campaign\nsends to that customer will be blocked. (Any non-boolean value will also lead to\ncampaigns being blocked)"),(0,i.kt)("h3",{id:"add-exclusions-object-to-identify-traits"},"Add Exclusions Object to Identify Traits"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Exclusions",src:n(1072).Z})),(0,i.kt)("h3",{id:"add-boolean-values-to-exclusions-object"},"Add Boolean Values to Exclusions Object"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Play Break",src:n(5496).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"List of Exclusions",src:n(1681).Z})))}d.isMDXComponent=!0},1072:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add-exclusions-ccacef0a74d2b395da571e5f91c6372c.png"},5496:function(e,t,n){"use strict";t.Z=n.p+"assets/images/add-playBreak-7699a610b2e81006835cd73a98775b96.png"},1681:function(e,t,n){"use strict";t.Z=n.p+"assets/images/list-exclusions-7fe591bfa75bed5e958757c8f579aae8.png"}}]);