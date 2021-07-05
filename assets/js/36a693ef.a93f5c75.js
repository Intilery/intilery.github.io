(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[1740],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5003:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"contents",title:"Schema Overview",sidebar_label:"Introduction"},l=void 0,s={unversionedId:"schema/contents",id:"schema/contents",isDocsHomePage:!1,title:"Schema Overview",description:"The Intilery schema provides guidance on meaningful data to capture, and the best format for it, across all of Intilery's libraries and APIs. If you implement Intilery using these formats, it\u2019s simple to utilise your data within the Intilery CDP and Customer Engagement Platform",source:"@site/docs/schema/contents.md",sourceDirName:"schema",slug:"/schema/contents",permalink:"/docs/schema/contents",version:"current",frontMatter:{id:"contents",title:"Schema Overview",sidebar_label:"Introduction"},sidebar:"schema",next:{title:"Intilery Schema",permalink:"/docs/schema/intilery"}},c=[{value:"APIs",id:"apis",children:[]},{value:"Engagement Channels",id:"engagement-channels",children:[]},{value:"Industry Specs",id:"industry-specs",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Intilery schema provides guidance on meaningful data to capture, and the best format for it, across all of Intilery's libraries and APIs. If you implement Intilery using these formats, it\u2019s simple to utilise your data within the Intilery CDP and Customer Engagement Platform"),(0,i.kt)("p",null,"This schema is based on the Segment specs, they have been extended to work in a multinational audience and multi-account setup."),(0,i.kt)("p",null,"The Intilery Schema has three components."),(0,i.kt)("h3",{id:"apis"},"APIs"),(0,i.kt)("p",null,"First, it ",(0,i.kt)("strong",{parentName:"p"},"outlines the semantic definition of the customer data we capture across all of Intilery's libraries and APIs"),". There are four API calls in the Schema. They each represent a distinct type of semantic information about a customer. Every call shares the same ",(0,i.kt)("a",{parentName:"p",href:"common"},"common fields"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./identify"},"Identify"),": who is the customer?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./track"},"Track"),": what are they doing?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/schema/page"},"Page"),": what web page are they on?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./screen"},"Screen"),": what app screen are they on?")),(0,i.kt)("h3",{id:"engagement-channels"},"Engagement Channels"),(0,i.kt)("p",null,"Second, it ",(0,i.kt)("strong",{parentName:"p"},"details the event data we capture across customer engagement channels"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./email"},"Email")),(0,i.kt)("li",{parentName:"ul"},"SMS"),(0,i.kt)("li",{parentName:"ul"},"[Live Chat]"),(0,i.kt)("li",{parentName:"ul"},"[A/B Testing]")),(0,i.kt)("h2",{id:"industry-specs"},"Industry Specs"),(0,i.kt)("p",null,"Third, it ",(0,i.kt)("strong",{parentName:"p"},"shares the events we recommend you track for a particular industry based on our experience working with many customers"),". When you respect these specs, it makes your data more robust and portable, as well as enabling you to choose other technologies to move data to and from Intilery, such as Google, Facebook, Segment, Zapier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"./mobile"},"Mobile"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"./retail"},"E-Commerce"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[Video]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"[B2B SaaS]"))))}m.isMDXComponent=!0}}]);