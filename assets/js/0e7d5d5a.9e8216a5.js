(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[4088],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4706:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={id:"fullimp",title:"A full Intilery implementation",sidebar_label:"Full implementation"},o=void 0,s={unversionedId:"guides/fullimp",id:"guides/fullimp",isDocsHomePage:!1,title:"A full Intilery implementation",description:"Before you start implementing from your tracking plan, let\u2019s review the Intilery methods, what they do, and when you should use each.",source:"@site/docs/guides/fullimp.md",sourceDirName:"guides",slug:"/guides/fullimp",permalink:"/docs/guides/fullimp",version:"current",frontMatter:{id:"fullimp",title:"A full Intilery implementation",sidebar_label:"Full implementation"},sidebar:"guides",previous:{title:"Planning A Full implementation",permalink:"/docs/guides/full"},next:{title:"FAQs",permalink:"/docs/guides/faq"}},c=[{value:"Intilery methods in detail",id:"intilery-methods-in-detail",children:[]},{value:"Anatomy of a Intilery message",id:"anatomy-of-a-intilery-message",children:[]},{value:"Identify calls",id:"identify-calls",children:[{value:"When to call Identify",id:"when-to-call-identify",children:[]}]},{value:"Traits in Identify calls",id:"traits-in-identify-calls",children:[]},{value:"How to Call Identify",id:"how-to-call-identify",children:[]},{value:"Using analytics.reset()",id:"using-analyticsreset",children:[]},{value:"Page and Screen",id:"page-and-screen",children:[{value:"Page and Screen call properties",id:"page-and-screen-call-properties",children:[]},{value:"Named Page &amp; Screen Calls",id:"named-page--screen-calls",children:[]},{value:"When to Call Page",id:"when-to-call-page",children:[]},{value:"When to call Screen",id:"when-to-call-screen",children:[]}]},{value:"Track calls",id:"track-calls",children:[{value:"When to call Track",id:"when-to-call-track",children:[]},{value:"Events and Properties",id:"events-and-properties",children:[]}]},{value:"Event Naming Best Practices",id:"event-naming-best-practices",children:[{value:"Objects are Nouns",id:"objects-are-nouns",children:[]},{value:"Actions are Verbs",id:"actions-are-verbs",children:[]},{value:"Property naming best practices",id:"property-naming-best-practices",children:[]},{value:"Common properties to send with Track call",id:"common-properties-to-send-with-track-call",children:[]},{value:"How to call Track",id:"how-to-call-track",children:[]}]}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Before you start implementing from your tracking plan, let\u2019s review the Intilery methods, what they do, and when you should use each."),(0,l.kt)("h2",{id:"intilery-methods-in-detail"},"Intilery methods in detail"),(0,l.kt)("p",null,"Intilery\u2019s libraries generate and send messages to our tracking API in JSON format, and provide a standard structure for the basic API calls. We also provide recommended JSON structure (also known as a schema, or \u2018schema\u2019) that helps keep the most important parts of your data consistent, while allowing great flexibility in what other information you collect and where."),(0,l.kt)("p",null,"There are six calls in the basic tracking API, which answer schemaific questions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/schema/identify"},"Identify"),": Who is the user?"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/schema/track"},"Track"),": What are they doing?"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/schema/page"},"Page"),": What web page are they on?"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/schema/screen"},"Screen"),": What app screen are they on?")),(0,l.kt)("p",null,"You can think of Identify, to do with updating our understanding of the user who is triggering Intilery messages (api calls to Intilery). You can think of these calls as adding information to, or updating an object record in a database. ",(0,l.kt)("strong",{parentName:"p"},"Objects")," are described using \u201ctraits\u201d, which you can collect as part of your calls."),(0,l.kt)("p",null,"The other three, Track, Page, and Screen, can be considered as increasingly schemaific types of events. ",(0,l.kt)("strong",{parentName:"p"},"Events")," can occur multiple times, but generate separate records which append to a list, instead of being updated over time."),(0,l.kt)("p",null,"A Track call is the most basic type of call, and can represent any type of event. Page and Screen are similar and are triggered by a user viewing a page or screen, however Page calls can come from both web and mobile-web views, while Screen calls ",(0,l.kt)("em",{parentName:"p"},"only")," occur on mobile devices. Because of the difference in platform, the context information collected is very different between the two types of calls."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tip"),"! Intilery recommends that you always use the Page and Screen calls when recording a page-view, rather than creating a \u201cPage Viewed\u201d event, because the Page/Screen calls automatically collect much better context information."),(0,l.kt)("h2",{id:"anatomy-of-a-intilery-message"},"Anatomy of a Intilery message"),(0,l.kt)("p",null,"The most basic Intilery message requires only a ",(0,l.kt)("inlineCode",{parentName:"p"},"userID")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"anonymousID"),"; all other fields are optional to allow for maximum flexibility. However, a normal Intilery message has three main parts: the ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/common"},"common fields"),", the ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/common#context"},"\u201ccontext\u201d object"),", and the properties (if it\u2019s an event) or traits (if it\u2019s an object)."),(0,l.kt)("p",null,"The common fields include information schemaific to how the call was generated, like the timestamp and library name and version. The fields in the context object are usually generated by the library, and include information about the environment in which the call was generated: page path, user agent, OS, locale settings, etc. The properties and traits are optional and are where you customize the information you want to collect for your implementation."),(0,l.kt)("h2",{id:"identify-calls"},"Identify calls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", {\n  name: "Peter Gibbons",\n  email: "peter@example.com",\n  plan: "premium",\n  logins: 5\n});\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," call allows Intilery to know ",(0,l.kt)("strong",{parentName:"p"},"who")," is triggering an event."),(0,l.kt)("h3",{id:"when-to-call-identify"},"When to call Identify"),(0,l.kt)("p",null,"Call ",(0,l.kt)("inlineCode",{parentName:"p"},"Identify")," when the user first provides identifying information about themselves (usually during log in), or when a they update their profile information."),(0,l.kt)("p",null,"When called as part of the login experience, you should call ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," as soon as possible after the user logs in. When possible, follow the ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," call with a ",(0,l.kt)("inlineCode",{parentName:"p"},"track")," event that records what caused the user to be identified."),(0,l.kt)("p",null,"When you make an ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," call as part of a profile update, you only need to send the changed information to Intilery. You can send all profile info on every ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," call if that makes implementation easier, but this is optional."),(0,l.kt)("h2",{id:"traits-in-identify-calls"},"Traits in Identify calls"),(0,l.kt)("p",null,"These are called \u201cTraits\u201d for Identify calls, and \u201cProperties\u201d for all other methods."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The most important trait to pass as part of the identify() call is userId"),", which uniquely identifies a user across all applications."),(0,l.kt)("p",null,"You should use a hash value to ensure uniqueness, although other values are acceptable; for example, email address isn\u2019t the best thing to use as a userid, but is usually acceptable since it will be unique, and doesn\u2019t change often."),(0,l.kt)("p",null,"Beyond that, the Identify call is your opportunity to provide information about the user that can be used for future reporting, so you should try to send any fields that you might want to report on later."),(0,l.kt)("p",null,"Consider using Identify and traits when:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gathering user profile data (for example, company, city/state, job title, or other user-level data)"),(0,l.kt)("li",{parentName:"ul"},"Gathering company-level data (for example, company size, number of seats, etc)")),(0,l.kt)("h2",{id:"how-to-call-identify"},"How to Call Identify"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("12345abcde", {\n  "email": "michael.phillips@Intilery.com",\n  "name": "Michael Phillips",\n  "city": "New York",\n  "state": "NY",\n  "internal": True\n});\n')),(0,l.kt)("h2",{id:"using-analyticsreset"},"Using analytics.reset()"),(0,l.kt)("p",null,"When a user explicitly signs out of one of your applications, you can call ",(0,l.kt)("inlineCode",{parentName:"p"},"analytics.reset()")," to stop logging further event activity to that user, and create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"anonymousId")," for subsequent activity (until the user logins in again and is subsequently ",(0,l.kt)("inlineCode",{parentName:"p"},"identify"),"-ed). ",(0,l.kt)("strong",{parentName:"p"},"This call is most relevant for client-side Intilery libraries"),", as it clears cookies in the user\u2019s browser."),(0,l.kt)("p",null,"Make a ",(0,l.kt)("inlineCode",{parentName:"p"},"Reset()")," call as soon as possible after sign-out occurs, and only after it succeeds (not immediately when the user clicks sign out). For more info on this call, ",(0,l.kt)("a",{parentName:"p",href:"/docs/tag/reference#reset--logout"},"see the Javascript source documentation")),(0,l.kt)("h2",{id:"page-and-screen"},"Page and Screen"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Page")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Screen")," calls tell Intilery what web page or mobile screen the user is on. This call automatically captures important context traits, so you don\u2019t have to manually implement and send this data."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Page context")," auto-captured"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Screen context")," auto-captured"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"window.location.title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"app")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"build, name, namespace, version"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"window.location.url")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"device")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"adTrackingEnabled, advertisingId (IDFA/AAID), device ID, manufacturer, model, type (android/ios)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"window.location.path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"library")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"name, version"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"referrer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"window.document.referrer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"locale")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"window.document.referrer"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"search")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"window.location.search")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"network")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"cellular, wifi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ip")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ip")),(0,l.kt)("td",{parentName:"tr",align:null},"address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"userAgent")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"os")),(0,l.kt)("td",{parentName:"tr",align:null},"name, version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"campaign")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"utm_source, utm_medium, utm_campaign, utm_content")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"screen")),(0,l.kt)("td",{parentName:"tr",align:null},"height, width")))),(0,l.kt)("h3",{id:"page-and-screen-call-properties"},"Page and Screen call properties"),(0,l.kt)("p",null,"You can always ",(0,l.kt)("a",{parentName:"p",href:"/docs/tag/reference#default-page-properties"},"override the auto-collected Page/Screen properties")," with your own, and set additional custom page or screen properties."),(0,l.kt)("h3",{id:"named-page--screen-calls"},"Named Page & Screen Calls"),(0,l.kt)("p",null,"You can schemaify a page \u201cName\u201d at the start of the page or screen call, which is eschemaially useful to make list of page names into something more succinct for analytics. For example, on an ecommerce site you might want to call ",(0,l.kt)("inlineCode",{parentName:"p"},'analytics.page( "Product" )')," and then provide properties for that product:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.page("Product", {\n  "category": "Smartwatches",\n  "sku": "13d31"\n});\n')),(0,l.kt)("h3",{id:"when-to-call-page"},"When to Call Page"),(0,l.kt)("p",null,"Intilery automatically calls a ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," event whenever a web page loads. This might be enough for most of your needs, but if you change the URL path without reloading the page, for example in single page web apps, you must call ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," manually ."),(0,l.kt)("p",null,"If the presentation of user interface components don\u2019t substantially change the user\u2019s context (for example, if a menu is displayed, search results are sorted/filtered, or an information panel is displayed on the exiting UI) ",(0,l.kt)("strong",{parentName:"p"},"measure the event with a Track call, not a Page call.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": When you trigger a Page call manually, make sure the call happens ",(0,l.kt)("em",{parentName:"p"},"after")," the UI element is successfully displayed, not when it is called. It shouldn\u2019t be called as part of the click event that initiates it."),(0,l.kt)("p",null,"For more info on Page calls, review ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/page/"},"Page schema")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/tag/reference#page"},"Analytics.js docs")),(0,l.kt)("h3",{id:"when-to-call-screen"},"When to call Screen"),(0,l.kt)("p",null,"Intilery Screen calls are essentially the Page method, except for mobile apps. Mobile Screen calls are treated similarly to standard Page tracking, only they contain more context traits about the device. The goal is to have as much consistency between web and mobile as is feasible."),(0,l.kt)("h2",{id:"track-calls"},"Track calls"),(0,l.kt)("p",null,"The Track call allows Intilery to know ",(0,l.kt)("strong",{parentName:"p"},"what")," the user is doing."),(0,l.kt)("h3",{id:"when-to-call-track"},"When to call Track"),(0,l.kt)("p",null,"The Track call is used to track user and system events, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The user interacting with a UI component (for example, \u201cButton Clicked\u201d)"),(0,l.kt)("li",{parentName:"ul"},"A significant UI component appearing, other than a page (for example, search results or a payment dialog)")),(0,l.kt)("h3",{id:"events-and-properties"},"Events and Properties"),(0,l.kt)("p",null,"Your track calls should include both events and properties. ",(0,l.kt)("strong",{parentName:"p"},"Events are the actions you want to track"),", and ",(0,l.kt)("strong",{parentName:"p"},"properties are the data ","*","about","*"," the event that are sent with each event"),"."),(0,l.kt)("p",null,"Properties are powerful. They enable you to capture as much context about the event as you\u2019d like, and then cross-tabulate or filter your downstream tools. For example, let\u2019s say an eLearning website is tracking whenever a user bookmarks an educational article on a page. Here\u2019s what a robust analytics.js Track call could look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Article Bookmarked', {\n  \"title\": 'How to Create a Tracking Plan',\n  \"course\": 'Intro to Data Strategy',\n  \"author\": 'Dr. Anna Lytics',\n  \"publish_year\": '2019',\n  \"publish_month\": '03',\n  \"length\": 'Medium - 1000-2000 words',\n  \"assets\": {'Infographics','Interactive Charts'},\n  \"topics\": {'Data Planning','Intilery','Data Flow'},\n  \"button_location\": 'Subheader - 3rd Column'\n});\n")),(0,l.kt)("p",null,"With this track call, we can analyze which authors had the most popular articles, which months and years led to the greatest volume of bookmarking overall, which button locations drive the most bookmark clicks, or which users gravitate towards infographics related to Data Planning."),(0,l.kt)("h2",{id:"event-naming-best-practices"},"Event Naming Best Practices"),(0,l.kt)("p",null,"Each event you track must have a name that describes the event, like \u2018Article Bookmarked\u2019 above. That name is passed in at the beginning of the track call, and should be standardized across all your properties so you can compare the same actions on different properties."),(0,l.kt)("p",null,"Intilery\u2019s best practice is to use an \u201cObject Action\u201d (Noun-Verb) naming convention for all ",(0,l.kt)("strong",{parentName:"p"},"Track")," events, for example, \u2018Article Bookmarked\u2019."),(0,l.kt)("p",null,"Intilery maintains a set of ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/contents"},(0,l.kt)("strong",{parentName:"a"},"Business schemas"))," which follow this naming convention around different use cases such as eCommerce, B2B SaaS, and Mobile."),(0,l.kt)("p",null,"Let\u2019s dive deeper into the Object Action syntax that all Intilery Track events should use."),(0,l.kt)("h3",{id:"objects-are-nouns"},"Objects are Nouns"),(0,l.kt)("p",null,"Nouns are the entities or objects that the user or the system acts upon."),(0,l.kt)("p",null,"It\u2019s important to be thoughtful when naming objects so that they are referred to consistently within an application, and so that you refer to the same objects that might exist in multiple applications or sites by the same name."),(0,l.kt)("p",null,"Use the following list of objects to see if there is a logical match with your application. If you have objects that aren\u2019t in this list, name it in a way that makes sense if it were to appear in other applications, and/or run it by Product Analytics."),(0,l.kt)("h4",{id:"some-suggested-nouns"},"Some suggested Nouns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Menu"),(0,l.kt)("li",{parentName:"ul"},"Navigation Drawer (the \u201cHamburger\u201d menu in the upper left corner of a UI)"),(0,l.kt)("li",{parentName:"ul"},"Profile"),(0,l.kt)("li",{parentName:"ul"},"Account"),(0,l.kt)("li",{parentName:"ul"},"Video")),(0,l.kt)("h3",{id:"actions-are-verbs"},"Actions are Verbs"),(0,l.kt)("p",null,"Verbs indicate the action taken by either a user on your site. When you name a new track event, consider if you can describe the current interaction using a verb from the list below."),(0,l.kt)("p",null,"If you can\u2019t, choose a verb that describes what the user is trying to in your schemaific case, but try to be flexible enough so that you could use is in other scenarios."),(0,l.kt)("h4",{id:"some-suggested-verbs"},"Some suggested Verbs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Applied")," - Applying a new format to the UI results."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Clicked")," - Catch-all for events where a user activated some part of the UI but no other verb captures the intent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Created/Deleted")," - The user- or system-initiated action of creating or deleting an object (e.g., new search, favorite, post)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Displayed/Hidden")," - The user- or system-initiated action of hiding or displaying an element"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Enabled/Disabled")," - Enabling or disabling some feature (e.g., audible alarms, emails, etc)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Refreshed")," - When a set of search results is refreshed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Searched")," - When an app is searched"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Selected")," - User clicked on an individual search result."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sorted")," - The user or UI action that causes data in a table, for example, to be sorted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Unposted")," - Making a previously publicly-viewable posting private."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Updated")," - The user action that initiates an update to an object (profile, password, search, etc.; typically be making a call to the backend), or the they system having actually completed the update (often this tracking call will be made in response to a server-side response indicating that the object was updated, which may or may not have an impact on the UI)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Viewed")," - (exactly what it says on the tin)")),(0,l.kt)("h3",{id:"property-naming-best-practices"},"Property naming best practices"),(0,l.kt)("p",null,"Intilery recommends that you record property names using ",(0,l.kt)("strong",{parentName:"p"},"snake case")," (for example ",(0,l.kt)("inlineCode",{parentName:"p"},"property_name"),"), and that you format property values to match how they are captured. For example, a ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," value would be captured in whatever case it the user typed it in as."),(0,l.kt)("p",null,"Ultimately, you can decide to use a casing different from our recommendations; however, ",(0,l.kt)("strong",{parentName:"p"},"the single most important aschemat is that you\u2019re consistent across your entire tracking with one casing method"),"."),(0,l.kt)("p",null,"All of the basic ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/contents"},"Intilery methods")," have a common structure and common fields which are automatically collected on every call. You can see these in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/common"},"common fields documentation")),(0,l.kt)("h3",{id:"common-properties-to-send-with-track-call"},"Common properties to send with Track call"),(0,l.kt)("p",null,"The following properties should be sent with every Track call:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Event Context")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Property Name")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Any Track call",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"initiator")," - ",(0,l.kt)("em",{parentName:"li"},"Was the event initiated by the user (\u201cUser\u201d) or the system (\u201cSystem\u201d)?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"display_format")," - ",(0,l.kt)("em",{parentName:"li"},"Responsive or not (or some other indicator of the current page layout template)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Search Initiated or Search Results Displayed")," - ",(0,l.kt)("strong",{parentName:"li"},"[Search Parameters]")," - ",(0,l.kt)("em",{parentName:"li"},"All search parameters, with the names being the snake case version of the internal names.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Search Results Displayed"),": ",(0,l.kt)("strong",{parentName:"li"},"total_result_count")," - ",(0,l.kt)("em",{parentName:"li"},"The total number of results returned that match the search parameters. This number represents the number of results that could be returned to the user even if only a subset of those were actually returned (e.g., if results are paginated).")),(0,l.kt)("li",{parentName:"ul"},"Paginated List Displayed",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"total_items_pages")," - ",(0,l.kt)("em",{parentName:"li"},"The total number of pages of items available to be viewed by the user.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"items_per_page")," - ",(0,l.kt)("em",{parentName:"li"},"The number of possible items in each page of items (e.g., if the UI is showing 50 search results per page). The actual number of items in the current page may be less than this number if, for example, the system is displaying the last page of results and there aren\u2019t enough results to fill to the page\u2019s maximum (e.g., if there are 27 results when the page could display as many as 50).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"current_item_page")," - ",(0,l.kt)("em",{parentName:"li"},"The current page number being displayed to the user.")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"External Link Clicked")," : ",(0,l.kt)("strong",{parentName:"li"},"destination_url")," - ",(0,l.kt)("em",{parentName:"li"},"The URL that the user will be taken to when clicked. ","*","Ideally this will be the final destination (e.g., after any redirects), but only the immediate destination is likely in most cases.")),(0,l.kt)("li",{parentName:"ul"},"Item List Sorted",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sort_column")," - ",(0,l.kt)("em",{parentName:"li"},"The internal name of the column that was sorted on.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sort_direction"),": ",(0,l.kt)("em",{parentName:"li"},"ascending or descending"))))),(0,l.kt)("h3",{id:"how-to-call-track"},"How to call Track"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Article Bookmarked', {\n  \"title\": 'How to Create a Tracking Plan',\n  \"course\": 'Intro to Data Strategy',\n  \"author\": 'Dr. Anna Lytics',\n});\n")))}m.isMDXComponent=!0}}]);