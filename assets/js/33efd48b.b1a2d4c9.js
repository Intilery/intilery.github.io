(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[6590],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1869:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],s={id:"computed-traits",title:"Computed Traits",sidebar_label:"Computed Traits"},l=void 0,u={unversionedId:"customers/computed-traits",id:"customers/computed-traits",isDocsHomePage:!1,title:"Computed Traits",description:"Computed Traits allow you to quickly create customer-level calculations that Intilery keeps up-to-date over time. These can be computations like the totalnumorders a customer has completed, the lifetimerevenue of a customer, the mostfrequent_category to determine which category the customer most frequently pruchases. These computations are based on your events and event properties that you are sending through Intilery on the page and track calls.",source:"@site/docs/customers/computed-traits.md",sourceDirName:"customers",slug:"/customers/computed-traits",permalink:"/docs/customers/computed-traits",version:"current",frontMatter:{id:"computed-traits",title:"Computed Traits",sidebar_label:"Computed Traits"},sidebar:"customers",previous:{title:"Customers",permalink:"/docs/customers/overview"},next:{title:"SQL Traits",permalink:"/docs/customers/sql-traits"}},p=[{value:"Processing",id:"processing",children:[]},{value:"Types of Computed Traits",id:"types-of-computed-traits",children:[{value:"Event Counter",id:"event-counter",children:[]},{value:"Aggregation",id:"aggregation",children:[]},{value:"Most Frequent",id:"most-frequent",children:[]},{value:"First",id:"first",children:[]},{value:"Last",id:"last",children:[]},{value:"Unique List",id:"unique-list",children:[]},{value:"Unique List Count",id:"unique-list-count",children:[]}]},{value:"Conditions",id:"conditions",children:[]},{value:"Accessing your Computed Traits using the Profiles API",id:"accessing-your-computed-traits-using-the-profiles-api",children:[]}],c={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Computed Traits allow you to quickly create customer-level calculations that Intilery keeps up-to-date over time. These can be computations like the ",(0,i.kt)("inlineCode",{parentName:"p"},"total_num_orders")," a customer has completed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"lifetime_revenue")," of a customer, the ",(0,i.kt)("inlineCode",{parentName:"p"},"most_frequent_category")," to determine which category the customer most frequently pruchases. These computations are based on your events and event properties that you are sending through Intilery on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/page"},"page")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/track"},"track")," calls."),(0,i.kt)("h2",{id:"processing"},"Processing"),(0,i.kt)("p",null,"Computed traits are updated every 30 minutes. Therefore if you are using the value of a computed trait in a journey, in a split for example, add a wait step of 30 minutes proceeding the use of the computed trait to ensure the value is up to date"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:"))," It is not currently possible to trigger a journey from the change of a value of a computed trait"),(0,i.kt)("h2",{id:"types-of-computed-traits"},"Types of Computed Traits"),(0,i.kt)("p",null,"Customers currently supports the following types of computed traits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Types of Computed Traits",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#event-counter"},"Event Counter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#aggregation"},"Aggregation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#most-frequent"},"Most Frequent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#first"},"First")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#last"},"Last")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#unique-list"},"Unique List")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#unique-list-count"},"Unique List Count")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#conditions"},"Conditions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#accessing-your-computed-traits-using-the-profiles-api"},"Accessing your Computed Traits using the Profiles API"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Computed Traits",src:r(900).Z})),(0,i.kt)("h3",{id:"event-counter"},"Event Counter"),(0,i.kt)("p",null,"An Event Counter trait stores a count of an ",(0,i.kt)("strong",{parentName:"p"},"event")," over a period of time. For example, you can create a trait called ",(0,i.kt)("inlineCode",{parentName:"p"},"number_logins_90_days")," based on a ",(0,i.kt)("inlineCode",{parentName:"p"},"User Logged In")," event. You can also use event properties to only specific types of events."),(0,i.kt)("p",null,"Customer-level examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Orders Completed Last 30 Days"),(0,i.kt)("li",{parentName:"ul"},"Pricing Page Views Last 30 Days")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event Counter",src:r(6192).Z})),(0,i.kt)("h3",{id:"aggregation"},"Aggregation"),(0,i.kt)("p",null,"An aggregation computes a ",(0,i.kt)("strong",{parentName:"p"},"sum, average, minimum, or maximum")," of a numeric ",(0,i.kt)("strong",{parentName:"p"},"event property"),". A good example is a ",(0,i.kt)("inlineCode",{parentName:"p"},"sum_games_revenue_90_days")," if you\u2019re sending an ",(0,i.kt)("inlineCode",{parentName:"p"},"Order Completed")," event with a ",(0,i.kt)("inlineCode",{parentName:"p"},"revenue")," property. In the example we\u2019re refining the revenue even further based on another event property: ",(0,i.kt)("inlineCode",{parentName:"p"},"category = 'games'"),". Note that you can only compute an aggregation trait for event properties that have a numeric value."),(0,i.kt)("p",null,"Customer-level examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Order Revenue Last 14 Days"),(0,i.kt)("li",{parentName:"ul"},"Max Ride Distance Last 60 Days")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Aggregation",src:r(9408).Z})),(0,i.kt)("h3",{id:"most-frequent"},"Most Frequent"),(0,i.kt)("p",null,"A most frequent customer-level computed trait will return the ",(0,i.kt)("strong",{parentName:"p"},"most common value")," for an ",(0,i.kt)("strong",{parentName:"p"},"event property"),". This is helpful to create traits like ",(0,i.kt)("inlineCode",{parentName:"p"},"preferred_product_viewed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"most_commonly_viewed_category")," that tell you what a customer's preferred product, or content category might be. Note that the most frequent computed trait requires the event property to have been tracked at least twice. In the case of a tie, we return the first alphabetical value."),(0,i.kt)("p",null,"Customer-level examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Favorite Blog Post"),(0,i.kt)("li",{parentName:"ul"},"Top Purchase Category")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Most Frequent",src:r(8198).Z})),(0,i.kt)("h3",{id:"first"},"First"),(0,i.kt)("p",null,"The first customer-level trait returns the first event property value we have seen. This is common for creating traits like ",(0,i.kt)("inlineCode",{parentName:"p"},"first_page_visited")," based on the page name."),(0,i.kt)("p",null,"Customer-level examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First seen timestamp"),(0,i.kt)("li",{parentName:"ul"},"First utm parameter")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"First",src:r(972).Z})),(0,i.kt)("h3",{id:"last"},"Last"),(0,i.kt)("p",null,"The last trait returns the last event property value we have seen. This is common for creating traits like ",(0,i.kt)("inlineCode",{parentName:"p"},"last_utm_campaign")," to help you calculate last-touch attribution for paid advertising."),(0,i.kt)("p",null,"Customer-level examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Last seen at"),(0,i.kt)("li",{parentName:"ul"},"Last utm parameter")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Last",src:r(6783).Z})),(0,i.kt)("h3",{id:"unique-list"},"Unique List"),(0,i.kt)("p",null,"Unique list computed traits will output a ",(0,i.kt)("strong",{parentName:"p"},"list of unique values")," for an ",(0,i.kt)("strong",{parentName:"p"},"event property"),". This is helpful to understand the different types of products or content that a customer has interacted with or purchased. You can create a triat like ",(0,i.kt)("inlineCode",{parentName:"p"},"unique_product_categories_viewed")," and send marketing communications based on the categories viewed."),(0,i.kt)("p",null,"Example use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unique products purchased"),(0,i.kt)("li",{parentName:"ul"},"Unique categories"),(0,i.kt)("li",{parentName:"ul"},"Unique games played")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unique List",src:r(9662).Z})),(0,i.kt)("h3",{id:"unique-list-count"},"Unique List Count"),(0,i.kt)("p",null,"Unique list count computed traits will output a ",(0,i.kt)("strong",{parentName:"p"},"count of the unique list of values")," for an ",(0,i.kt)("strong",{parentName:"p"},"event property"),". You can create a traits like ",(0,i.kt)("inlineCode",{parentName:"p"},"unique_product_categories_viewed_count")," to understand the variety of products that a customer is viewing."),(0,i.kt)("p",null,"Customer-level examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unique products viewed count"),(0,i.kt)("li",{parentName:"ul"},"Unique categories count")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Unique List Count",src:r(3058).Z})),(0,i.kt)("h2",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"All computed trait types support a common \u201cAdd Conditions\u201d section. Conditions defined here restrict the messages considered when calculating the final value of the computed trait by looking at a property of the events. For example, you could limits events to only those where \u201cprice\u201d is greater than 30.00 or where \u201cpage.url\u201d contains \u201cpricing\u201d."),(0,i.kt)("p",null,"The following operators are available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"equals"),(0,i.kt)("li",{parentName:"ul"},"not equals -"),(0,i.kt)("li",{parentName:"ul"},"less than"),(0,i.kt)("li",{parentName:"ul"},"greater than"),(0,i.kt)("li",{parentName:"ul"},"less than or equal"),(0,i.kt)("li",{parentName:"ul"},"greater than or equal"),(0,i.kt)("li",{parentName:"ul"},"contains"),(0,i.kt)("li",{parentName:"ul"},"does not contain"),(0,i.kt)("li",{parentName:"ul"},"starts with"),(0,i.kt)("li",{parentName:"ul"},"ends with"),(0,i.kt)("li",{parentName:"ul"},"exists"),(0,i.kt)("li",{parentName:"ul"},"not exists"),(0,i.kt)("li",{parentName:"ul"},"before date"),(0,i.kt)("li",{parentName:"ul"},"after date"),(0,i.kt)("li",{parentName:"ul"},"within last (x days)"),(0,i.kt)("li",{parentName:"ul"},"with next (x days)"),(0,i.kt)("li",{parentName:"ul"},"before last (x days)"),(0,i.kt)("li",{parentName:"ul"},"after next (x days)")),(0,i.kt)("h2",{id:"accessing-your-computed-traits-using-the-profiles-api"},"Accessing your Computed Traits using the Profiles API"),(0,i.kt)("p",null,"You can access your computed traits using the Profile API by querying the ",(0,i.kt)("inlineCode",{parentName:"p"},"/traits")," endpoint. All types of traits are returned for the customer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://tracking.intilery.com/track/intilery/marketing/MARKETING/v1/profiles/email:xxx.xxx@intilery.com/traits\n")),(0,i.kt)("p",null,"returns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "lastName": "Bloggs",\n    "website": "www.intilery.com",\n    "externalId": "joe.bloggs@intilery.com",\n    "organisation": "Intilery",\n    "industry": "Other",\n    "firstName": "Joe",\n    "phone": "+44111222333444",\n    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n    "computed": {\n      "number_logins_90_days": 9,\n      "sum_games_revenue_90_days":99.99\n    },\n    "email": "joe.bloggs@intilery.com"\n}\n')),(0,i.kt)("p",null,"You can read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/profiles"},"full Profile API docs")," to learn more."))}m.isMDXComponent=!0},9408:function(e,t,r){"use strict";t.Z=r.p+"assets/images/aggregation-c4badff2468c42e63185fa9b55bd1857.png"},900:function(e,t,r){"use strict";t.Z=r.p+"assets/images/computed-traits-9f6b26cab227d3eec009a2bec4febb13.png"},6192:function(e,t,r){"use strict";t.Z=r.p+"assets/images/event-counter-9589063c928eef40475855f56cc10505.png"},972:function(e,t,r){"use strict";t.Z=r.p+"assets/images/first-c2b12f0eb2738b1c5dc6c1d98d5164a8.png"},6783:function(e,t,r){"use strict";t.Z=r.p+"assets/images/last-8f6f76504f8123baf188ccc7ced8ef7a.png"},8198:function(e,t,r){"use strict";t.Z=r.p+"assets/images/most-frequent-3d31d2482fcd47b8707f4b74dab92318.png"},3058:function(e,t,r){"use strict";t.Z=r.p+"assets/images/unique-list-count-3b5d173ef8f67c37101f7ac1f39507c8.png"},9662:function(e,t,r){"use strict";t.Z=r.p+"assets/images/unique-list-276621b786a691bbf9a693af3ad35279.png"}}]);