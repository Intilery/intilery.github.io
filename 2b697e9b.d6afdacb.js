(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,m=u["".concat(o,".").concat(f)]||u[f]||b[f]||i;return a?r.a.createElement(m,c(c({ref:t},d),{},{components:a})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/default-validate1-69ed0518f0ddae5bab45c23d672d6c94.png"},218:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/event-identify-b00215652cba4cafb22d91e02042a68e.png"},219:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/schema-identify-8d41d4c7e24f4a520c44aab7b111132a.png"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(142)),o={id:"validate-schema",title:"Validate Schemas",sidebar_label:"Validate Schemas"},c={unversionedId:"guides/validate-schema",id:"guides/validate-schema",isDocsHomePage:!1,title:"Validate Schemas",description:"Standard events, those detailed at Intilery Default Schema do not need to be validated in order for these events to be recorded. The event's cannot be modified except for the Identify event in order to validate addtional customer traits.",source:"@site/docs/guides/validate-schema.md",slug:"/guides/validate-schema",permalink:"/docs/guides/validate-schema",version:"current",sidebar_label:"Validate Schemas",sidebar:"guides",previous:{title:"Review And Validate Events And violations",permalink:"/docs/guides/validate"}},s=[{value:"Validating Traits",id:"validating-traits",children:[{value:"Adding traits",id:"adding-traits",children:[]}]}],d={toc:s};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Standard events, those detailed at ",Object(i.b)("a",{parentName:"p",href:"/docs/schema/intilery"},"Intilery Default Schema")," do not need to be validated in order for these events to be recorded. The event's cannot be modified except for the ",Object(i.b)("a",{parentName:"p",href:"/docs/schema/identify"},"Identify event")," in order to validate addtional customer traits."),Object(i.b)("h2",{id:"validating-traits"},"Validating Traits"),Object(i.b)("p",null,"Apart from the ",Object(i.b)("a",{parentName:"p",href:"/docs/schema/identify#traits"},"default traits")," all additional traits will need to be validated before those traits are recognised."),Object(i.b)("p",null,"To access the schema for default events (schemas), and events (schemas) that you have validated, navigate to Schemas"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Schemas",src:a(217).default})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," The image above shows the schamas for default schemas and your validated schemas."),Object(i.b)("h3",{id:"adding-traits"},"Adding traits"),Object(i.b)("p",null,"It is possible to validate new traits in either the event stram or the schema view"),Object(i.b)("h4",{id:"event-stream"},"Event Stream"),Object(i.b)("p",null,'Schema viloation for the event are shown below in the event stream, clicking on the violation will show "new fields", where you can set the validation requirements and click "Add Field" to recognise this new trait'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:"),' Don\'t forget to click "Save" at the bottom of the screen, new traits are not recorded until you validate and save them to the schema.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"Event identify",src:a(218).default})),Object(i.b)("h4",{id:"schema-view"},"Schema View"),Object(i.b)("p",null,'Schema viloation for the event are shown below in the schema view, clicking on the violation will show "new fields", where you can set the validation requirements and click "Add Field" to recognise this new trait'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:"),' Don\'t forget to click "Save" at the bottom of the screen, new traits are not recorded until you validate and save them to the schema.'),Object(i.b)("p",null,Object(i.b)("img",{alt:"Schema identify",src:a(219).default})))}l.isMDXComponent=!0}}]);