(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[8793],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9970:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQs"},s=void 0,c={unversionedId:"guides/faq",id:"guides/faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"These are the most frequently asked questions. Please read these if you are new to Intilery.",source:"@site/docs/guides/faq.md",sourceDirName:"guides",slug:"/guides/faq",permalink:"/docs/guides/faq",version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQs"},sidebar:"guides",previous:{title:"Full implementation",permalink:"/docs/guides/fullimp"},next:{title:"Best practices in identifying customers",permalink:"/docs/guides/identifying-customers"}},u=[{value:"How do I back fill / back populate my customers?",id:"how-do-i-back-fill--back-populate-my-customers",children:[]},{value:"What traits (fields/properties) can I add to my customer?",id:"what-traits-fieldsproperties-can-i-add-to-my-customer",children:[]}],d={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These are the most frequently asked questions. Please read these if you are new to Intilery. "),(0,o.kt)("h3",{id:"how-do-i-back-fill--back-populate-my-customers"},"How do I back fill / back populate my customers?"),(0,o.kt)("p",null,"In order to back populate your customers, you should first upload your existing customer records with the Audience Upload feature from an .csv file or ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api#batch"},"batch")," send a set of ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api#identify-action"},"identify")," events to the API"),(0,o.kt)("p",null,"Once your customers have been uploaded, you can then ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api#batch"},"batch")," upload the events with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api#track-action"},"track api")," for your customers in the format matching the schema you created and validated, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/protocols"},"tracking events")),(0,o.kt)("h3",{id:"what-traits-fieldsproperties-can-i-add-to-my-customer"},"What traits (fields/properties) can I add to my customer?"),(0,o.kt)("p",null,"There are a set of reserved trait names that can be used, these are detailed at ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/identify#traits"},"common traits"),", traits are set as using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/reference#identify"},"identify tag event")," or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api#identify-action"},"identify api event")," or an identify event from one of our SDKs."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/identify#traits"},"common traits")," do not need to be validated."),(0,o.kt)("p",null,"Any addtional traits that you send that you have not validated, will need to be validated before they are saved against the customer, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/validate-schema"},"validate schema")," for adding new traits."))}l.isMDXComponent=!0}}]);