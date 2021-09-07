"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[9098],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3983:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"tracking-plan",title:"What is a tracking plan?",sidebar_label:"Tracking Plan"},s=void 0,c={unversionedId:"guides/tracking-plan",id:"guides/tracking-plan",isDocsHomePage:!1,title:"What is a tracking plan?",description:"A tracking plan is a document or spreadsheet used across an organization to standardize how it tracks data. Often serving as both a project management tool and a reference document, a tracking plan aligns multiple teams around one strategy for customer data collection.",source:"@site/docs/guides/tracking-plan.md",sourceDirName:"guides",slug:"/guides/tracking-plan",permalink:"/docs/guides/tracking-plan",tags:[],version:"current",frontMatter:{id:"tracking-plan",title:"What is a tracking plan?",sidebar_label:"Tracking Plan"},sidebar:"guides",previous:{title:"Protocols Overview",permalink:"/docs/guides/protocols"},next:{title:"Data Collection Best Practices",permalink:"/docs/guides/data-collection"}},u=[{value:"<strong>What is the role of a tracking plan?</strong>",id:"what-is-the-role-of-a-tracking-plan",children:[]},{value:"<strong>What are the benefits of a tracking plan?</strong>",id:"what-are-the-benefits-of-a-tracking-plan",children:[]},{value:"What events should I track?",id:"what-events-should-i-track",children:[]},{value:"<strong>Ready to get started?</strong>",id:"ready-to-get-started",children:[{value:"Tracking Plan Columns",id:"tracking-plan-columns",children:[]},{value:"Add a new track call",id:"add-a-new-track-call",children:[]},{value:"Add a track call property",id:"add-a-track-call-property",children:[]},{value:"Add a track call object or array property",id:"add-a-track-call-object-or-array-property",children:[]},{value:"Add a label",id:"add-a-label",children:[]},{value:"Filter track calls in the Tracking Plan",id:"filter-track-calls-in-the-tracking-plan",children:[]},{value:"Extend the Tracking Plan",id:"extend-the-tracking-plan",children:[]}]}],d={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A tracking plan is a document or spreadsheet used across an organization to standardize how it tracks data. Often serving as both a project management tool and a reference document, a tracking plan aligns multiple teams around one strategy for customer data collection."),(0,o.kt)("p",null,"Essentially, a tracking plan consists of a list of events (i.e., user actions) accompanied by a description for each event. These events are used to map the most important steps of the customer journey, from free trial sign-up to recurring subscription to churn."),(0,o.kt)("p",null,"This central list of events can grow and change alongside your company. All the while, it will provide a consistent road map for what data is important, where it\u2019s being tracked, and why. In the end, your tracking plan can help you create an airtight process for scaling data collection across a growing company."),(0,o.kt)("h2",{id:"what-is-the-role-of-a-tracking-plan"},(0,o.kt)("strong",{parentName:"h2"},"What is the role of a tracking plan?")),(0,o.kt)("p",null,"Your tracking plan serves as the single source of truth across your organization for understanding ",(0,o.kt)("strong",{parentName:"p"},"what")," data you\u2019re tracking, ",(0,o.kt)("strong",{parentName:"p"},"where")," you\u2019re tracking that data, and ",(0,o.kt)("strong",{parentName:"p"},"why"),". A tracking plan usually has columns for each of these values, like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"what to track",src:a(838).Z})),(0,o.kt)("p",null,"In this example, the \u201cwhat\u201d is the events and properties you track, which are logged in the NAME and PROPERTIES columns above. The \u201cwhere\u201d (logged under LOCATION) is the location and time at which the event is being tracked. Finally, the \u201cwhy\u201d (logged under WHY) is a short description of the business purpose that justifies tracking the event."),(0,o.kt)("p",null,"Not all tracking plans look exactly like this. They\u2019re living documents that are built to suit the needs of the businesses they serve. You might use a different naming convention for event names and event properties, you might be more detailed in your \u201cwhy\u201d entries, or you might need to add new events. And as your business objectives evolve, so will the data you track. For instance, your naming convention might need to change as you add new features to your product."),(0,o.kt)("p",null,"No matter how it shapes up in the end or how it changes, the core purpose of a tracking plan remains the same: to coordinate your data collection in a central reference. Every team that touches customer data will be able to access and use this central reference, keeping them aligned with your current business objectives."),(0,o.kt)("p",null,"Over time, an airtight process will emerge for customer data tracking that\u2019s consistent, compliant, and customized to your exact needs. All made possible with one document."),(0,o.kt)("h2",{id:"what-are-the-benefits-of-a-tracking-plan"},(0,o.kt)("strong",{parentName:"h2"},"What are the benefits of a tracking plan?")),(0,o.kt)("p",null,"A tracking plan is a collaborative document, taking input from every department that touches customer data. This process of collaboration forces your business to think of analytics as a team sport, where everyone agrees to play within a certain set of guidelines and work together toward a shared goal. Working together this way will help ensure your business utilizes higher-quality data, gains alignment across teams, and establishes a framework for consistent growth."),(0,o.kt)("p",null,"In the short term, the quality of your data will improve, and your teams will be more efficient, thanks to a codified process for tracking customer data."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your ",(0,o.kt)("strong",{parentName:"li"},"data will be cleaner")," because every team is using the same process for collecting it."),(0,o.kt)("li",{parentName:"ul"},"Your ",(0,o.kt)("strong",{parentName:"li"},"data will be")," ",(0,o.kt)("strong",{parentName:"li"},"compliant")," with regulations because you\u2019ve documented the what, why, where, and how of your customer data tracking."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"whole organization will gain alignment")," around one clearly documented and easy-to-understand plan for tracking data.")),(0,o.kt)("p",null,"In the long term, a tracking plan becomes a living part of your company\u2019s infrastructure and one of the primary drivers of growth."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tracking plans are living documents that will provide a ",(0,o.kt)("strong",{parentName:"li"},"flexible framework")," for your customer data that grows and changes alongside your company."),(0,o.kt)("li",{parentName:"ul"},"For launches and update releases, a tracking plan will help you set metrics-driven goals that can ",(0,o.kt)("strong",{parentName:"li"},"help your teams build a better product"),".")),(0,o.kt)("p",null,"A tracking plan is a long-term investment into the future of how your business collects data, the benefits of which are both immediate and long-lasting."),(0,o.kt)("h2",{id:"what-events-should-i-track"},"What events should I track?"),(0,o.kt)("p",null,"The specific events you decide to track are unique to your business and depend on a lot of factors, like how your product is designed, who your audience is, your overall business goals, and more."),(0,o.kt)("p",null,"In short, you should track events that provide answers to questions you have about your customers, like who they are, how they behave, and what they want. To identify your questions, you need to decide on what exactly you want to learn, that is, what questions do you have that, if answered, will help your business grow by better engaging with your customers."),(0,o.kt)("p",null,"Consider the question, \u201cWhen do people who sign up for a free trial decide to purchase a full subscription?\u201d In this case, you might start by tracking the events \u201cSigned up\u201d and \u201cSubscription started\u201d to hone in on that conversion rate by automating a series of prompts and A/B testing incentives."),(0,o.kt)("p",null,"Start broad then narrow in on opportunities for improvement. The first question you might ask could be, \u201cWhat are the key steps to our customer journey?\u201d Once you have your answer, you can move on to \u201cWhere is our conversion funnel inefficient?\u201d Then, you can get really specific with questions like, \u201cHow does our new subscriber rate change if we change in-product navigation?\u201d"),(0,o.kt)("p",null,"In the early days at Intilery, we started by tracking three simple events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Signed up"),(0,o.kt)("li",{parentName:"ul"},"Trial Requested"),(0,o.kt)("li",{parentName:"ul"},"Logged in")),(0,o.kt)("p",null,"These events provided answers to our questions around who was signing up, how many of them were active in our product, and when to make how often (or not) they logged in, enabling us to act upon this data to better serve our customers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Zoom with margin",src:a(1980).Z})),(0,o.kt)("h2",{id:"ready-to-get-started"},(0,o.kt)("strong",{parentName:"h2"},"Ready to get started?")),(0,o.kt)("p",null,"Fair warning: Creating a tracking plan is a lot of work, but it\u2019s well worth it in the end. As we\u2019ve outlined here, start by approaching analytics as a learning process. With this approach, your customer data collection will center around finding answers to important questions."),(0,o.kt)("p",null,"Once you\u2019re in that mindset, you\u2019re ready to start forming your plan. Here are a few resources to get things rolling:"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/13D0nG-_5RmEmUj8LHraH4Ndv0oQunXHzdN9NRJNFqsM/edit?usp=sharing"},"Intilery Tracking Plan Template")," to create your tracking plan"),(0,o.kt)("h3",{id:"tracking-plan-columns"},"Tracking Plan Columns"),(0,o.kt)("p",null,"The Tracking Plan editor is organized as a spreadsheet to help you add new events and properties, and edit the relevant fields for each. Like a spreadsheet, you can navigate across cells in a single event with your arrow keys and press enter to edit a cell."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"COLUMN NAME"),(0,o.kt)("th",{parentName:"tr",align:null},"DETAILS"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the name of your event or property.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter a description for your event or property. These descriptions are helpful for both engineers instrumenting Intilery and consumers of the data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Status"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify whether a property is required or optional. You can\u2019t require a ",(0,o.kt)("inlineCode",{parentName:"td"},".track()")," call because Intilery is unable to verify when a ",(0,o.kt)("inlineCode",{parentName:"td"},".track()")," call should be fired.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the data type of the property. Data type options include ",(0,o.kt)("inlineCode",{parentName:"td"},"any, array, object, boolean, integer, number, string"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Permitted Values"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter simple regular expressions to validate property values. This works when a property data type is set to ",(0,o.kt)("inlineCode",{parentName:"td"},"string"),". For example, you can add pipe delimited strings to the regex column to generate violations when a property value does not match fall, winter or spring.")))),(0,o.kt)("p",null,"The Status, Data Type, and Permitted Values columns appear as you add a track call property."),(0,o.kt)("h3",{id:"add-a-new-track-call"},"Add a new track call"),(0,o.kt)("p",null,"To add a new track call:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Event")," to add a new row."),(0,o.kt)("li",{parentName:"ol"},"Click into the row to add an event name and description. The event name strictly validates the name passed in your ",(0,o.kt)("inlineCode",{parentName:"li"},".track()")," calls. Casing, spacing and spelling matter!")),(0,o.kt)("h3",{id:"add-a-track-call-property"},"Add a track call property"),(0,o.kt)("p",null,"To add a track call property:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"(+)")," next to the event name to add a new row below the event name."),(0,o.kt)("li",{parentName:"ol"},"Click into the row to add the property name and also specify the description, status, data type and permitted values when applicable.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can use your keyboard arrow and enter keys to navigate across the cells, or use your mouse.")))),(0,o.kt)("h3",{id:"add-a-track-call-object-or-array-property"},"Add a track call object or array property"),(0,o.kt)("p",null,"Intilery supports object and array data types in the Tracking Plan editor. These complex data structures have limited use cases and should be used sparingly as some destinations aren\u2019t able to ingest the data structures. To add an object or array:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new property row and set the Data Type to ",(0,o.kt)("inlineCode",{parentName:"li"},"Object")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Array"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"(+)")," next to the property name to add key value pairs in the object, or objects to an array of objects.")),(0,o.kt)("h3",{id:"add-a-label"},"Add a label"),(0,o.kt)("p",null,"You can apply ",(0,o.kt)("inlineCode",{parentName:"p"},"key:value")," labels to each event to help organize your tracking plan. These labels are helpful when multiple teams are managing a single tracking plan, or if you want to specify a priority, platform, product, or similar meta-data for each event. You can filter by label from the Tracking Plan, Schema, Data Validation and Violations Summary views."),(0,o.kt)("p",null,"For consistency purposes, it\u2019s best that you create a standard way of labeling events and share it with all parts of your organization that will use Intilery."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://intilery.com/docs/protocols/tracking-plan/images/labels.png",alt:"img"})),(0,o.kt)("h3",{id:"filter-track-calls-in-the-tracking-plan"},"Filter track calls in the Tracking Plan"),(0,o.kt)("p",null,"You can filter the Tracking Plan events by keyword or by label. The applied filter generates a permanent link so you can share specific events with teammates. Label filters also persist after you leave the Tracking Plan."),(0,o.kt)("h3",{id:"extend-the-tracking-plan"},"Extend the Tracking Plan"),(0,o.kt)("p",null,"Some customers prefer to manage the Tracking Plan with outside tools and resources. See the ",(0,o.kt)("a",{parentName:"p",href:"https://intilery.com/docs/protocols/apis-and-extensions/"},"APIs and extensions")," section to learn more."))}p.isMDXComponent=!0},838:function(e,t,a){t.Z=a.p+"assets/images/cols-c9aba8cbbe6819805eb566dadedbb54c.jpg"},1980:function(e,t,a){t.Z=a.p+"assets/images/events-206337229ec1e36ef029b2a06834cb08.png"}}]);