(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return a?r.a.createElement(d,o(o({ref:t},s),{},{components:a})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(142)),i={id:"fullimp",title:"A full Intilery implementation",sidebar_label:"Full implementation"},o={unversionedId:"guides/fullimp",id:"guides/fullimp",isDocsHomePage:!1,title:"A full Intilery implementation",description:"Before you start implementing from your tracking plan, let\u2019s review the Intilery methods, what they do, and when you should use each.",source:"@site/docs/guides/fullimp.md",slug:"/guides/fullimp",permalink:"/docs/guides/fullimp",version:"current",sidebar_label:"Full implementation",sidebar:"guides",previous:{title:"Planning a full implementation",permalink:"/docs/guides/full"},next:{title:"Frequently Asked Questions",permalink:"/docs/guides/faq"}},c=[{value:"Intilery methods in detail",id:"intilery-methods-in-detail",children:[]},{value:"Anatomy of a Intilery message",id:"anatomy-of-a-intilery-message",children:[]},{value:"Identify calls",id:"identify-calls",children:[{value:"When to call Identify",id:"when-to-call-identify",children:[]}]},{value:"Traits in Identify calls",id:"traits-in-identify-calls",children:[]},{value:"How to Call Identify",id:"how-to-call-identify",children:[]},{value:"Using analytics.reset()",id:"using-analyticsreset",children:[]},{value:"Page and Screen",id:"page-and-screen",children:[{value:"Page and Screen call properties",id:"page-and-screen-call-properties",children:[]},{value:"Named Page &amp; Screen Calls",id:"named-page--screen-calls",children:[]},{value:"When to Call Page",id:"when-to-call-page",children:[]},{value:"When to call Screen",id:"when-to-call-screen",children:[]}]},{value:"Track calls",id:"track-calls",children:[{value:"When to call Track",id:"when-to-call-track",children:[]},{value:"Events and Properties",id:"events-and-properties",children:[]}]},{value:"Event Naming Best Practices",id:"event-naming-best-practices",children:[{value:"Objects are Nouns",id:"objects-are-nouns",children:[]},{value:"Actions are Verbs",id:"actions-are-verbs",children:[]},{value:"Property naming best practices",id:"property-naming-best-practices",children:[]},{value:"Common properties to send with Track call",id:"common-properties-to-send-with-track-call",children:[]},{value:"How to call Track",id:"how-to-call-track",children:[]}]}],s={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Before you start implementing from your tracking plan, let\u2019s review the Intilery methods, what they do, and when you should use each."),Object(l.b)("h2",{id:"intilery-methods-in-detail"},"Intilery methods in detail"),Object(l.b)("p",null,"Intilery\u2019s libraries generate and send messages to our tracking API in JSON format, and provide a standard structure for the basic API calls. We also provide recommended JSON structure (also known as a schema, or \u2018schema\u2019) that helps keep the most important parts of your data consistent, while allowing great flexibility in what other information you collect and where."),Object(l.b)("p",null,"There are six calls in the basic tracking API, which answer schemaific questions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/schema/identify"},"Identify"),": Who is the user?"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/schema/track"},"Track"),": What are they doing?"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/schema/page"},"Page"),": What web page are they on?"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/schema/screen"},"Screen"),": What app screen are they on?")),Object(l.b)("p",null,"You can think of Identify, to do with updating our understanding of the user who is triggering Intilery messages (api calls to Intilery). You can think of these calls as adding information to, or updating an object record in a database. ",Object(l.b)("strong",{parentName:"p"},"Objects")," are described using \u201ctraits\u201d, which you can collect as part of your calls."),Object(l.b)("p",null,"The other three, Track, Page, and Screen, can be considered as increasingly schemaific types of events. ",Object(l.b)("strong",{parentName:"p"},"Events")," can occur multiple times, but generate separate records which append to a list, instead of being updated over time."),Object(l.b)("p",null,"A Track call is the most basic type of call, and can represent any type of event. Page and Screen are similar and are triggered by a user viewing a page or screen, however Page calls can come from both web and mobile-web views, while Screen calls ",Object(l.b)("em",{parentName:"p"},"only")," occur on mobile devices. Because of the difference in platform, the context information collected is very different between the two types of calls."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Tip"),"! Intilery recommends that you always use the Page and Screen calls when recording a page-view, rather than creating a \u201cPage Viewed\u201d event, because the Page/Screen calls automatically collect much better context information."),Object(l.b)("h2",{id:"anatomy-of-a-intilery-message"},"Anatomy of a Intilery message"),Object(l.b)("p",null,"The most basic Intilery message requires only a ",Object(l.b)("inlineCode",{parentName:"p"},"userID")," or ",Object(l.b)("inlineCode",{parentName:"p"},"anonymousID"),"; all other fields are optional to allow for maximum flexibility. However, a normal Intilery message has three main parts: the ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/common"},"common fields"),", the ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/common#context"},"\u201ccontext\u201d object"),", and the properties (if it\u2019s an event) or traits (if it\u2019s an object)."),Object(l.b)("p",null,"The common fields include information schemaific to how the call was generated, like the timestamp and library name and version. The fields in the context object are usually generated by the library, and include information about the environment in which the call was generated: page path, user agent, OS, locale settings, etc. The properties and traits are optional and are where you customize the information you want to collect for your implementation."),Object(l.b)("h2",{id:"identify-calls"},"Identify calls"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", {\n  name: "Peter Gibbons",\n  email: "peter@example.com",\n  plan: "premium",\n  logins: 5\n});\n')),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"identify")," call allows Intilery to know ",Object(l.b)("strong",{parentName:"p"},"who")," is triggering an event."),Object(l.b)("h3",{id:"when-to-call-identify"},"When to call Identify"),Object(l.b)("p",null,"Call ",Object(l.b)("inlineCode",{parentName:"p"},"Identify")," when the user first provides identifying information about themselves (usually during log in), or when a they update their profile information."),Object(l.b)("p",null,"When called as part of the login experience, you should call ",Object(l.b)("inlineCode",{parentName:"p"},"identify")," as soon as possible after the user logs in. When possible, follow the ",Object(l.b)("inlineCode",{parentName:"p"},"identify")," call with a ",Object(l.b)("inlineCode",{parentName:"p"},"track")," event that records what caused the user to be identified."),Object(l.b)("p",null,"When you make an ",Object(l.b)("inlineCode",{parentName:"p"},"identify")," call as part of a profile update, you only need to send the changed information to Intilery. You can send all profile info on every ",Object(l.b)("inlineCode",{parentName:"p"},"identify")," call if that makes implementation easier, but this is optional."),Object(l.b)("h2",{id:"traits-in-identify-calls"},"Traits in Identify calls"),Object(l.b)("p",null,"These are called \u201cTraits\u201d for Identify calls, and \u201cProperties\u201d for all other methods."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"The most important trait to pass as part of the identify() call is userId"),", which uniquely identifies a user across all applications."),Object(l.b)("p",null,"You should use a hash value to ensure uniqueness, although other values are acceptable; for example, email address isn\u2019t the best thing to use as a userid, but is usually acceptable since it will be unique, and doesn\u2019t change often."),Object(l.b)("p",null,"Beyond that, the Identify call is your opportunity to provide information about the user that can be used for future reporting, so you should try to send any fields that you might want to report on later."),Object(l.b)("p",null,"Consider using Identify and traits when:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Gathering user profile data (for example, company, city/state, job title, or other user-level data)"),Object(l.b)("li",{parentName:"ul"},"Gathering company-level data (for example, company size, number of seats, etc)")),Object(l.b)("h2",{id:"how-to-call-identify"},"How to Call Identify"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("12345abcde", {\n  "email": "michael.phillips@Intilery.com",\n  "name": "Michael Phillips",\n  "city": "New York",\n  "state": "NY",\n  "internal": True\n});\n')),Object(l.b)("h2",{id:"using-analyticsreset"},"Using analytics.reset()"),Object(l.b)("p",null,"When a user explicitly signs out of one of your applications, you can call ",Object(l.b)("inlineCode",{parentName:"p"},"analytics.reset()")," to stop logging further event activity to that user, and create a new ",Object(l.b)("inlineCode",{parentName:"p"},"anonymousId")," for subsequent activity (until the user logins in again and is subsequently ",Object(l.b)("inlineCode",{parentName:"p"},"identify"),"-ed). ",Object(l.b)("strong",{parentName:"p"},"This call is most relevant for client-side Intilery libraries"),", as it clears cookies in the user\u2019s browser."),Object(l.b)("p",null,"Make a ",Object(l.b)("inlineCode",{parentName:"p"},"Reset()")," call as soon as possible after sign-out occurs, and only after it succeeds (not immediately when the user clicks sign out). For more info on this call, ",Object(l.b)("a",{parentName:"p",href:"/docs/tag/reference#reset--logout"},"see the Javascript source documentation")),Object(l.b)("h2",{id:"page-and-screen"},"Page and Screen"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Page")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Screen")," calls tell Intilery what web page or mobile screen the user is on. This call automatically captures important context traits, so you don\u2019t have to manually implement and send this data."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Page context")," auto-captured"),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Screen context")," auto-captured"),Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"title")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"window.location.title")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"app")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"build, name, namespace, version"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"url")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"window.location.url")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"device")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"adTrackingEnabled, advertisingId (IDFA/AAID), device ID, manufacturer, model, type (android/ios)"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"path")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"window.location.path")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"library")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"name, version"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"referrer")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"window.document.referrer")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"locale")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"window.document.referrer"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"search")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"window.location.search")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"network")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"cellular, wifi"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"ip")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"address")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"ip")),Object(l.b)("td",{parentName:"tr",align:null},"address")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"userAgent")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"string")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"os")),Object(l.b)("td",{parentName:"tr",align:null},"name, version")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"campaign")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("em",{parentName:"td"},"utm_source, utm_medium, utm_campaign, utm_content")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"screen")),Object(l.b)("td",{parentName:"tr",align:null},"height, width")))),Object(l.b)("h3",{id:"page-and-screen-call-properties"},"Page and Screen call properties"),Object(l.b)("p",null,"You can always ",Object(l.b)("a",{parentName:"p",href:"/docs/tag/reference#default-page-properties"},"override the auto-collected Page/Screen properties")," with your own, and set additional custom page or screen properties."),Object(l.b)("h3",{id:"named-page--screen-calls"},"Named Page & Screen Calls"),Object(l.b)("p",null,"You can schemaify a page \u201cName\u201d at the start of the page or screen call, which is eschemaially useful to make list of page names into something more succinct for analytics. For example, on an ecommerce site you might want to call ",Object(l.b)("inlineCode",{parentName:"p"},'analytics.page( "Product" )')," and then provide properties for that product:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'analytics.page("Product", {\n  "category": "Smartwatches",\n  "sku": "13d31"\n});\n')),Object(l.b)("h3",{id:"when-to-call-page"},"When to Call Page"),Object(l.b)("p",null,"Intilery automatically calls a ",Object(l.b)("inlineCode",{parentName:"p"},"page")," event whenever a web page loads. This might be enough for most of your needs, but if you change the URL path without reloading the page, for example in single page web apps, you must call ",Object(l.b)("inlineCode",{parentName:"p"},"page")," manually ."),Object(l.b)("p",null,"If the presentation of user interface components don\u2019t substantially change the user\u2019s context (for example, if a menu is displayed, search results are sorted/filtered, or an information panel is displayed on the exiting UI) ",Object(l.b)("strong",{parentName:"p"},"measure the event with a Track call, not a Page call.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),": When you trigger a Page call manually, make sure the call happens ",Object(l.b)("em",{parentName:"p"},"after")," the UI element is successfully displayed, not when it is called. It shouldn\u2019t be called as part of the click event that initiates it."),Object(l.b)("p",null,"For more info on Page calls, review ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/page/"},"Page schema")," and ",Object(l.b)("a",{parentName:"p",href:"/docs/tag/reference#page"},"Analytics.js docs")),Object(l.b)("h3",{id:"when-to-call-screen"},"When to call Screen"),Object(l.b)("p",null,"Intilery Screen calls are essentially the Page method, except for mobile apps. Mobile Screen calls are treated similarly to standard Page tracking, only they contain more context traits about the device. The goal is to have as much consistency between web and mobile as is feasible."),Object(l.b)("h2",{id:"track-calls"},"Track calls"),Object(l.b)("p",null,"The Track call allows Intilery to know ",Object(l.b)("strong",{parentName:"p"},"what")," the user is doing."),Object(l.b)("h3",{id:"when-to-call-track"},"When to call Track"),Object(l.b)("p",null,"The Track call is used to track user and system events, such as:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The user interacting with a UI component (for example, \u201cButton Clicked\u201d)"),Object(l.b)("li",{parentName:"ul"},"A significant UI component appearing, other than a page (for example, search results or a payment dialog)")),Object(l.b)("h3",{id:"events-and-properties"},"Events and Properties"),Object(l.b)("p",null,"Your track calls should include both events and properties. ",Object(l.b)("strong",{parentName:"p"},"Events are the actions you want to track"),", and ",Object(l.b)("strong",{parentName:"p"},"properties are the data ","*","about","*"," the event that are sent with each event"),"."),Object(l.b)("p",null,"Properties are powerful. They enable you to capture as much context about the event as you\u2019d like, and then cross-tabulate or filter your downstream tools. For example, let\u2019s say an eLearning website is tracking whenever a user bookmarks an educational article on a page. Here\u2019s what a robust analytics.js Track call could look like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Article Bookmarked', {\n  \"title\": 'How to Create a Tracking Plan',\n  \"course\": 'Intro to Data Strategy',\n  \"author\": 'Dr. Anna Lytics',\n  \"publish_year\": '2019',\n  \"publish_month\": '03',\n  \"length\": 'Medium - 1000-2000 words',\n  \"assets\": {'Infographics','Interactive Charts'},\n  \"topics\": {'Data Planning','Intilery','Data Flow'},\n  \"button_location\": 'Subheader - 3rd Column'\n});\n")),Object(l.b)("p",null,"With this track call, we can analyze which authors had the most popular articles, which months and years led to the greatest volume of bookmarking overall, which button locations drive the most bookmark clicks, or which users gravitate towards infographics related to Data Planning."),Object(l.b)("h2",{id:"event-naming-best-practices"},"Event Naming Best Practices"),Object(l.b)("p",null,"Each event you track must have a name that describes the event, like \u2018Article Bookmarked\u2019 above. That name is passed in at the beginning of the track call, and should be standardized across all your properties so you can compare the same actions on different properties."),Object(l.b)("p",null,"Intilery\u2019s best practice is to use an \u201cObject Action\u201d (Noun-Verb) naming convention for all ",Object(l.b)("strong",{parentName:"p"},"Track")," events, for example, \u2018Article Bookmarked\u2019."),Object(l.b)("p",null,"Intilery maintains a set of ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/contents"},Object(l.b)("strong",{parentName:"a"},"Business schemas"))," which follow this naming convention around different use cases such as eCommerce, B2B SaaS, and Mobile."),Object(l.b)("p",null,"Let\u2019s dive deeper into the Object Action syntax that all Intilery Track events should use."),Object(l.b)("h3",{id:"objects-are-nouns"},"Objects are Nouns"),Object(l.b)("p",null,"Nouns are the entities or objects that the user or the system acts upon."),Object(l.b)("p",null,"It\u2019s important to be thoughtful when naming objects so that they are referred to consistently within an application, and so that you refer to the same objects that might exist in multiple applications or sites by the same name."),Object(l.b)("p",null,"Use the following list of objects to see if there is a logical match with your application. If you have objects that aren\u2019t in this list, name it in a way that makes sense if it were to appear in other applications, and/or run it by Product Analytics."),Object(l.b)("h4",{id:"some-suggested-nouns"},"Some suggested Nouns"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Menu"),Object(l.b)("li",{parentName:"ul"},"Navigation Drawer (the \u201cHamburger\u201d menu in the upper left corner of a UI)"),Object(l.b)("li",{parentName:"ul"},"Profile"),Object(l.b)("li",{parentName:"ul"},"Account"),Object(l.b)("li",{parentName:"ul"},"Video")),Object(l.b)("h3",{id:"actions-are-verbs"},"Actions are Verbs"),Object(l.b)("p",null,"Verbs indicate the action taken by either a user on your site. When you name a new track event, consider if you can describe the current interaction using a verb from the list below."),Object(l.b)("p",null,"If you can\u2019t, choose a verb that describes what the user is trying to in your schemaific case, but try to be flexible enough so that you could use is in other scenarios."),Object(l.b)("h4",{id:"some-suggested-verbs"},"Some suggested Verbs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Applied")," - Applying a new format to the UI results."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Clicked")," - Catch-all for events where a user activated some part of the UI but no other verb captures the intent."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Created/Deleted")," - The user- or system-initiated action of creating or deleting an object (e.g., new search, favorite, post)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Displayed/Hidden")," - The user- or system-initiated action of hiding or displaying an element"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Enabled/Disabled")," - Enabling or disabling some feature (e.g., audible alarms, emails, etc)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Refreshed")," - When a set of search results is refreshed."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Searched")," - When an app is searched"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Selected")," - User clicked on an individual search result."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Sorted")," - The user or UI action that causes data in a table, for example, to be sorted"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Unposted")," - Making a previously publicly-viewable posting private."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Updated")," - The user action that initiates an update to an object (profile, password, search, etc.; typically be making a call to the backend), or the they system having actually completed the update (often this tracking call will be made in response to a server-side response indicating that the object was updated, which may or may not have an impact on the UI)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Viewed")," - (exactly what it says on the tin)")),Object(l.b)("h3",{id:"property-naming-best-practices"},"Property naming best practices"),Object(l.b)("p",null,"Intilery recommends that you record property names using ",Object(l.b)("strong",{parentName:"p"},"snake case")," (for example ",Object(l.b)("inlineCode",{parentName:"p"},"property_name"),"), and that you format property values to match how they are captured. For example, a ",Object(l.b)("inlineCode",{parentName:"p"},"username")," value would be captured in whatever case it the user typed it in as."),Object(l.b)("p",null,"Ultimately, you can decide to use a casing different from our recommendations; however, ",Object(l.b)("strong",{parentName:"p"},"the single most important aschemat is that you\u2019re consistent across your entire tracking with one casing method"),"."),Object(l.b)("p",null,"All of the basic ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/contents"},"Intilery methods")," have a common structure and common fields which are automatically collected on every call. You can see these in the ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/common"},"common fields documentation")),Object(l.b)("h3",{id:"common-properties-to-send-with-track-call"},"Common properties to send with Track call"),Object(l.b)("p",null,"The following properties should be sent with every Track call:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Event Context")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Property Name")),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"th"},"Description")))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Any Track call",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"initiator")," - ",Object(l.b)("em",{parentName:"li"},"Was the event initiated by the user (\u201cUser\u201d) or the system (\u201cSystem\u201d)?")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"display_format")," - ",Object(l.b)("em",{parentName:"li"},"Responsive or not (or some other indicator of the current page layout template)")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Search Initiated or Search Results Displayed")," - ",Object(l.b)("strong",{parentName:"li"},"[Search Parameters]")," - ",Object(l.b)("em",{parentName:"li"},"All search parameters, with the names being the snake case version of the internal names.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Search Results Displayed"),": ",Object(l.b)("strong",{parentName:"li"},"total_result_count")," - ",Object(l.b)("em",{parentName:"li"},"The total number of results returned that match the search parameters. This number represents the number of results that could be returned to the user even if only a subset of those were actually returned (e.g., if results are paginated).")),Object(l.b)("li",{parentName:"ul"},"Paginated List Displayed",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"total_items_pages")," - ",Object(l.b)("em",{parentName:"li"},"The total number of pages of items available to be viewed by the user.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"items_per_page")," - ",Object(l.b)("em",{parentName:"li"},"The number of possible items in each page of items (e.g., if the UI is showing 50 search results per page). The actual number of items in the current page may be less than this number if, for example, the system is displaying the last page of results and there aren\u2019t enough results to fill to the page\u2019s maximum (e.g., if there are 27 results when the page could display as many as 50).")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"current_item_page")," - ",Object(l.b)("em",{parentName:"li"},"The current page number being displayed to the user.")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"External Link Clicked")," : ",Object(l.b)("strong",{parentName:"li"},"destination_url")," - ",Object(l.b)("em",{parentName:"li"},"The URL that the user will be taken to when clicked. ","*","Ideally this will be the final destination (e.g., after any redirects), but only the immediate destination is likely in most cases.")),Object(l.b)("li",{parentName:"ul"},"Item List Sorted",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"sort_column")," - ",Object(l.b)("em",{parentName:"li"},"The internal name of the column that was sorted on.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"sort_direction"),": ",Object(l.b)("em",{parentName:"li"},"ascending or descending"))))),Object(l.b)("h3",{id:"how-to-call-track"},"How to call Track"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Article Bookmarked', {\n  \"title\": 'How to Create a Tracking Plan',\n  \"course\": 'Intro to Data Strategy',\n  \"author\": 'Dr. Anna Lytics',\n});\n")))}b.isMDXComponent=!0}}]);