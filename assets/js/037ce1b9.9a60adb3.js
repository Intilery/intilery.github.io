(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[315],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4170:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i={id:"gtm-datalayer",title:"Google Tag Manager Data Layer",sidebar_label:"Google Tag Manager Data Layer"},l={unversionedId:"tag/gtm-datalayer",id:"tag/gtm-datalayer",isDocsHomePage:!1,title:"Google Tag Manager Data Layer",description:"Google Tag Manager (GTM) is a tag management system that allows you to quickly and easily update tags and code snippets on your website or mobile apps. Once you add the Tag Manager snippet to your website or mobile app, you can configure tags using a web-based user interface without having to alter and deploy additional code. This reduces errors and frees you from having to involve a developer whenever you need to make changes. The Google Tag Manager Destination is open-source. You can browse the code on GitHub.",source:"@site/docs/tag/gtm-dataLayer.md",sourceDirName:"tag",slug:"/tag/gtm-datalayer",permalink:"/docs/tag/gtm-datalayer",version:"current",sidebar_label:"Google Tag Manager Data Layer",frontMatter:{id:"gtm-datalayer",title:"Google Tag Manager Data Layer",sidebar_label:"Google Tag Manager Data Layer"},sidebar:"tag",previous:{title:"Google Tag Manager",permalink:"/docs/tag/gtm"},next:{title:"GTM Advanced Ecommerce (UA)",permalink:"/docs/tag/gtm-ecommerce"}},s=[{value:"Identify",id:"identify",children:[{value:"Querystring API",id:"querystring-api",children:[]}]},{value:"Track",id:"track",children:[]}],c={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/tagmanager"},"Google Tag Manager")," (GTM) is a tag management system that allows you to quickly and easily update tags and code snippets on your website or mobile apps. Once you add the Tag Manager snippet to your website or mobile app, you can configure tags using a web-based user interface without having to alter and deploy additional code. This reduces errors and frees you from having to involve a developer whenever you need to make changes. The Google Tag Manager Destination is open-source. You can browse the code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/segment-integrations/analytics.js-integration-google-tag-manager"},"on GitHub"),"."),(0,o.kt)("p",null,"Google Tag Manager functions best when deployed alongside a data layer, if enabled in your Intilery tag, Intilery will publish events to the dataLayer."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/tagmanager/answer/6164391"},"Data Layer")),(0,o.kt)("p",null,"To enable publishing of events to the GTM dataLayer, go to the tag page in Intilery, enable GTM dataLayer integration and enter the container-ID of your GTM container."),(0,o.kt)("h2",{id:"identify"},"Identify"),(0,o.kt)("p",null,"If you\u2019re not familiar with the Intilery Schema, take a look to understand what the ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/identify"},"Identify method")," does. An example call would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify({\n  nickname: 'Joe',\n  favoriteCompiler: 'A-0',\n  industry: 'Computer Science'\n});\n")),(0,o.kt)("p",null,"When you make an Identify call in with GTM enabled through Intilery, we will push the event data to the GTM ",(0,o.kt)("inlineCode",{parentName:"p"},"dataLayer"),"."),(0,o.kt)("p",null,"For example, if you make this ",(0,o.kt)("inlineCode",{parentName:"p"},"track")," call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify(\'12091906-01011992\', {\n  firstName: \'Joe\',\n  lastName: \'Bloggs\',\n  email: \'joe.bloggs@example.com\',\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),(0,o.kt)("p",null,"We will pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataLayer")," as an object like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "identify",\n  "userId": "12091906-01011992",\n  "traits": {\n    "firstName": "Joe",\n    "lastName": "Bloggs",\n    "email": "joe.bloggs@example.com",\n    "marketingPreferences": { \n         "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n    }\n}\n')),(0,o.kt)("h3",{id:"querystring-api"},"Querystring API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))," if you use any of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/reference#querystring-api"},"querystring API")," methods the identify/track data will be sent to the dataLayer accordingly, e.g."),(0,o.kt)("p",null,"visiting ",(0,o.kt)("a",{parentName:"p",href:"https://www.yoursite.com/?ajs_uid=1234-5678"},"https://www.yoursite.com/?ajs_uid=1234-5678")),(0,o.kt)("p",null,"will result an identify event being sent to the dataLayer, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  "event": \'identify\',\n  "userId": \'12091906-01011992\',\n  "traits": {\n    // <if traits previously set, these are included>\n  }\n}\n')),(0,o.kt)("h2",{id:"track"},"Track"),(0,o.kt)("p",null,"If you\u2019re not familiar with the Intilery Schema, take a look to understand what the ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/track"},"Track method")," does. An example call would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Article Completed', {\n  title: 'How to Create a Tracking Plan',\n  course: 'Intro to Analytics',\n});\n")),(0,o.kt)("p",null,"When you make a Track call in with GTM enabled through Intilery, we will push the event data to the GTM ",(0,o.kt)("inlineCode",{parentName:"p"},"dataLayer"),"."),(0,o.kt)("p",null,"For example, if you make this ",(0,o.kt)("inlineCode",{parentName:"p"},"track")," call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Played Video', {\n  title: 'How to Dance the Tango',\n  location: 'Tango FAQ Page'\n})\n")),(0,o.kt)("p",null,"We will pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataLayer")," as an object like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "Played Video",\n  "title": "How to Dance the Tango",\n  "location": "Tango FAQ Page"\n}\n')))}u.isMDXComponent=!0}}]);