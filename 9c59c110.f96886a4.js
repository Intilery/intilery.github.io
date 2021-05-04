(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),i=(r(0),r(142)),o={id:"overview",title:"Customer Data Platform",sidebar_label:"Customers"},s={unversionedId:"customers/overview",id:"customers/overview",isDocsHomePage:!1,title:"Customer Data Platform",description:"Intilery is a powerful Customer Data Platform that enables you to create unified customer profiles in Intilery, to build and enrich audiences and send marketing campaigns to those customers and audiences, along with personalisation.",source:"@site/docs/customers/overview.md",slug:"/customers/overview",permalink:"/docs/customers/overview",version:"current",sidebar_label:"Customers",sidebar:"customers",next:{title:"Computed Traits",permalink:"/docs/customers/computed-traits"}},c=[{value:"What can you do with Customers?",id:"what-can-you-do-with-customers",children:[]},{value:"Customers core components",id:"customers-core-components",children:[]},{value:"Audiences",id:"audiences",children:[]},{value:"Customer Activity Viewer and Traits",id:"customer-activity-viewer-and-traits",children:[]}],u={toc:c};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Intilery is a powerful Customer Data Platform that enables you to create unified customer profiles in Intilery, to build and enrich audiences and send marketing campaigns to those customers and audiences, along with personalisation."),Object(i.b)("h3",{id:"what-can-you-do-with-customers"},"What can you do with Customers?"),Object(i.b)("h4",{id:"enrich-profiles-with-new-traits"},"Enrich profiles with new traits"),Object(i.b)("p",null,"Add detail to customer profiles with new traits, and use them to power personalised marketing campaigns. You can add new traits to your customer in Intilery using:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/customers/computed-traits/"},Object(i.b)("strong",{parentName:"a"},"Computed Traits:"))," Use the Customers drag-and-drop interface to build per-customer profiles (for example, \u201clifetime value\u201d or \u201cmost viewed category\u201d)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/customers/sql-traits/"},Object(i.b)("strong",{parentName:"a"},"SQL Traits:"))," Run custom queries on your data warehouse using the Personas SQL editor, and import the results into Intilery. This allows you to pull rich customer data that you aren\u2019t capturing using your Intilery implementation, back into Intilery. (coming soon)"),Object(i.b)("li",{parentName:"ul"},"API Traits: Call out to external APIs to add rich custoemr data to the profile in Intilery (coming soon)")),Object(i.b)("h4",{id:"build-audiences"},"Build Audiences"),Object(i.b)("p",null,"Create a list of customers match specific criteria, for example \u201cinactive accounts\u201d (paying accounts who haven\u2019t logged in in 60 days), and use that Audience for automagted marketing activites. Learn more about ",Object(i.b)("a",{parentName:"p",href:"/docs/customers/audiences"},"audiences"),"."),Object(i.b)("h2",{id:"customers-core-components"},"Customers core components"),Object(i.b)("p",null,"Before you start setting up Customers, here are some features and terms that we\u2019ll use in this documentation. The main parts of Customers are your Intilery account, Audiences, Customer Activity Viewer, Schemas, and Traits (Computed, SQL, and API)."),Object(i.b)("h2",{id:"audiences"},"Audiences"),Object(i.b)("p",null,"An ",Object(i.b)("a",{parentName:"p",href:"/docs/customers/audiences/"},"Audience")," is a list of customers who match a specific criteria. An example of a basic Audience that Intilery's Marketing team might build is an \u201cactive sign ups\u201d audience for an email marketing campaign. This Audience is contains all customers who signed up in the last seven days on the free plan. The example below shows how you could define this audience in the Audience Builder."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Fre Plan Audicne",src:r(256).default})),Object(i.b)("h2",{id:"customer-activity-viewer-and-traits"},"Customer Activity Viewer and Traits"),Object(i.b)("p",null,"The customer activity viewier is the single view of your customer in Intilery. ",Object(i.b)("em",{parentName:"p"},"Traits")," are customer attributes that you can see in the activity viewer."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("strong",{parentName:"li"},"Activity Viewer")," contains all of the data that you have on a customer - from their event history to their traits and identifiers."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Computed Traits")," are per-customer traits that you create or \u201ccompute\u201d in Intilery using a drag-and-drop interface. When you build a Computed Trait, Intilery adds it to relevant customer profiles. Customers recomputes these traits once every 5 minutes to make they are always accurate. See the ",Object(i.b)("a",{parentName:"li",href:"/docs/customers/computed-traits/"},"Computed traits documentation")," for more detailed information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"SQL Traits")," are per-customer traits that you create by running queries against your data warehouse, which can include data not captured using your Intilery implementation. Intilery imports the results into Customers, and appends these traits to the customer profile. Intilery recomputes these traits every 12 hours to make sure they are always accurate. See the ",Object(i.b)("a",{parentName:"li",href:"/docs/customers/sql-traits/"},"SQL trait documentation")," for more detailed information. (coming soon)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Custom Traits")," are customer properties collected from all the events you send to Intilery. For example, you can add any properties that you send as a part of your track calls or identify calls (",Object(i.b)("inlineCode",{parentName:"li"},"email"),", ",Object(i.b)("inlineCode",{parentName:"li"},"first_name"),", ",Object(i.b)("inlineCode",{parentName:"li"},"last_name"),") as custom traits. You can then view them in the customer activity viewer, and use them in your audiences, computed traits and SQL traits."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"API Traits")," are custoemr properties that are collected from an external API (coming soon)")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Customer Activity Viewer",src:r(257).default})))}l.isMDXComponent=!0},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=a,b=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return r?n.a.createElement(b,s(s({ref:t},u),{},{components:r})):n.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},256:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/audience-signup-090b4016650ca7088e3841ae914a94b0.png"},257:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/customer-activity-80367b0f404a12194b4d6406c7d7651b.png"}}]);