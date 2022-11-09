(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[2075],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7031:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"data-collection",title:"Data Collection Best Practices",sidebar_label:"Data Collection Best Practices"},l=void 0,c={unversionedId:"guides/data-collection",id:"guides/data-collection",isDocsHomePage:!1,title:"Data Collection Best Practices",description:"Let\u2019s face it, figuring out what events to track in Intilery can feel overwhelming.",source:"@site/docs/guides/data-collection.md",sourceDirName:"guides",slug:"/guides/data-collection",permalink:"/docs/guides/data-collection",version:"current",frontMatter:{id:"data-collection",title:"Data Collection Best Practices",sidebar_label:"Data Collection Best Practices"},sidebar:"guides",previous:{title:"Tracking Plan",permalink:"/docs/guides/tracking-plan"},next:{title:"Review And Validate",permalink:"/docs/guides/validate"}},u=[{value:"Data Tracking Philosophy",id:"data-tracking-philosophy",children:[]},{value:"Define Business Objectives",id:"define-business-objectives",children:[]},{value:"Formalize Your Naming and Collection Standards",id:"formalize-your-naming-and-collection-standards",children:[]},{value:"Create a Tracking Plan",id:"create-a-tracking-plan",children:[]},{value:"Tracking Plan Google Sheets Template",id:"tracking-plan-google-sheets-template",children:[]},{value:"Identify your users",id:"identify-your-users",children:[]},{value:"Define your Track events",id:"define-your-track-events",children:[]},{value:"Define your Track event properties",id:"define-your-track-event-properties",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let\u2019s face it, figuring out what events to track in Intilery can feel overwhelming.\nFortunately, we\u2019ve helped 100s of customers through this process and have amassed a\nton of resources to help you get started. Whether you\u2019re a small team just getting your\napp off the ground, or a highly complex enterprise with 100s of stakeholders, these resources can help!"),(0,o.kt)("p",null,"That being said, be prepared to invest time defining how you want to track data.\nAny investment in improving data quality will reap massive rewards, and compound over\ntime by allowing your analytics teams to produce better insights, your marketing teams\nto run better campaigns and so much more."),(0,o.kt)("h2",{id:"data-tracking-philosophy"},"Data Tracking Philosophy"),(0,o.kt)("p",null,"Tracking is about learning and taking action. Think about what you want to know about your product\nor customers. Think about what assumptions need to be tested or invalidated.\nThink about the unknowns. Here are some helpful questions to get started:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What kind of events or data will shed light on the how your customers use your product?"),(0,o.kt)("li",{parentName:"ul"},"How do people discover, start using, and paying for your product?"),(0,o.kt)("li",{parentName:"ul"},"What are the most important steps in a customers journey?")),(0,o.kt)("h2",{id:"define-business-objectives"},"Define Business Objectives"),(0,o.kt)("p",null,"While it may seem obvious, we highly recommend documenting your high level business objectives.\nMore specifically, what are the measurable business outcomes you want to achieve this year.\nAre you looking to acquire new customers, activate new signups, drive incremental revenues among\nyour current customer base, etc? Answering this question is best done by interviewing stakeholders who\nwould consume the data in your organization."),(0,o.kt)("p",null,"With your business goals documented, you now need to map user actions to those business goals.\nFor example, if one of your goals is to activate new signups, you want to think about which activities are\nrelated to a signup. Ask yourself, what actions do people take before signing up? Are there specific actions that can predict a user signing up?"),(0,o.kt)("p",null,"As an example, you may end up with a list like the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ad Campaign Clicked"),(0,o.kt)("li",{parentName:"ul"},"Link Clicked"),(0,o.kt)("li",{parentName:"ul"},"Article Completed"),(0,o.kt)("li",{parentName:"ul"},"Campaign Opened"),(0,o.kt)("li",{parentName:"ul"},"Form Initiated"),(0,o.kt)("li",{parentName:"ul"},"Form Submitted"),(0,o.kt)("li",{parentName:"ul"},"User Signed Up")),(0,o.kt)("p",null,"While the above represents a small portion of the total user actions you will track,\nfocusing on business objectives helps break up the overwhelmingness of data collection into smaller chunks."),(0,o.kt)("h2",{id:"formalize-your-naming-and-collection-standards"},"Formalize Your Naming and Collection Standards"),(0,o.kt)("p",null,"With your business objectives documented, it\u2019s time to build a set of standards that you\nand your team will use when determining what to track. Our most successful customers\nlimit their tracking plan to a minimal number of core events with rich properties to provide\ncontext. While we\u2019ve generally seen more success with the \u201cless is more\u201d philosophy of\ntracking data, we\u2019ve had plenty of customers take a more liberal \u201ctrack more and analyze\nlater\u201d approach. Like everything, each alternative has pros and cons that are important to\nconsider especially as it relates to your company\u2019s needs."),(0,o.kt)("p",null,"Regardless of approach, here are some important notes to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pick a casing convention:")," We recommend ",(0,o.kt)("em",{parentName:"li"},"Title Case")," for event names and ",(0,o.kt)("em",{parentName:"li"},"snake_case")," for property names.\nMake sure you pick a casing standard and enforce it across your events and properties."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pick an event name structure:")," As you may have noticed from our ",(0,o.kt)("a",{parentName:"li",href:"/docs/schema/contents"},"schemas"),",\nwe\u2019re big fans of the Object (",(0,o.kt)("inlineCode",{parentName:"li"},"Blog Post"),") + Action (",(0,o.kt)("inlineCode",{parentName:"li"},"Read"),") framework for event names.\nPick a convention and stick to it!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Don\u2019t create event names dynamically:")," Avoid creating events that pull a dynamic\nvalue into the event name (ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"User Signed Up (11-01-2019)"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Don\u2019t create events to track properties:")," Avoid adding values to event names that\ncould be a property. Instead, add values a property (ex. ",(0,o.kt)("inlineCode",{parentName:"li"},'"blog_post_title":"Best Tracking Plans Ever"'),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Don\u2019t create property keys dynamically:")," Avoid creating property names like\n",(0,o.kt)("inlineCode",{parentName:"li"},'"feature_1":"true"'),",",(0,o.kt)("inlineCode",{parentName:"li"},'"feature_2":"false"')," as these are ambiguous and very difficult to analyze")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Good and Bad",src:n(238).Z})),(0,o.kt)("h2",{id:"create-a-tracking-plan"},"Create a Tracking Plan"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/tracking-plan"},"tracking plan")," clarifies what events to track, where those events\nlive in the code base, and why those events are necessary from a business perspective.\nThe tracking plan served as a project management tool to align an entire organization around\ndata as the basis on which to make decisions. The tracking plan helps marketers,\nproduct managers, engineers, analysts, etc. get on the same page. It represents the\nsingle source of truth for what data to collect and why."),(0,o.kt)("p",null,"The tracking plan has been so instrumental in helping organizations reclaim their own\ndata efforts that we invested years of product development to create ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/protocols"},"Protocols"),"."),(0,o.kt)("p",null,"In the following, we share how to build a tracking plan from the ground up using a\nGoogle Sheet template. Note that you can use any tool to create the tracking plan!"),(0,o.kt)("h2",{id:"tracking-plan-google-sheets-template"},"Tracking Plan Google Sheets Template"),(0,o.kt)("p",null,"To help you get started, we developed a Tracking Plan template in\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/13D0nG-_5RmEmUj8LHraH4Ndv0oQunXHzdN9NRJNFqsM/edit?usp=sharing"},"Google Sheets")," . The template includes all of our semantic schemas including ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/retail"},"eCommerce"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/b2b"},"B2B SaaS"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/app"},"Mobile")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/video"},"Video"),", and a collection of common properties."),(0,o.kt)("p",null,"We highly recommend you start by ",(0,o.kt)("a",{parentName:"p",href:"#define-business-objectives"},"defining your business objectives"),", and have included a template in the ",(0,o.kt)("strong",{parentName:"p"},"Goals")," tab to guide that process."),(0,o.kt)("p",null,"With your business goals defined, start by defining how you want to track Page/Screen, Identify and Group events. Most customers use ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/reference#page"},"default page tracking")," and skip over that tab. The identify tab is where you specify which user traits you intend to collect like ",(0,o.kt)("inlineCode",{parentName:"p"},"first_name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"last_name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"email"),", etc. Read more about the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/reference#identify"},"identify call below"),"."),(0,o.kt)("p",null,"From there, we recommend you specify Track events in the ",(0,o.kt)("strong",{parentName:"p"},"Track (Custom)")," tab. Note that we pre-created events with varying numbers of grouped properties (1 Prop Event, 2 Prop Event, etc). While more challenging to manage at first, this structure allows you to use the ",(0,o.kt)("strong",{parentName:"p"},"Minimize Rows")," button at the top to organize and view all events."),(0,o.kt)("p",null,"Once completed, the Google Sheet tracking plan can be shared with your stakeholders to either review, comment, edit or simply reference for implementation."),(0,o.kt)("h2",{id:"identify-your-users"},"Identify your users"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".identify()")," call is important, because it updates all records of the user with a set of traits. But how do you choose which traits to include?"),(0,o.kt)("p",null,"Here is a sample ",(0,o.kt)("inlineCode",{parentName:"p"},".identify()")," call (with ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"analytics.js"),") for Intilery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify({\n  name: 'Kanye West',\n  email: 'kanye@iamawesome.com',\n  login: 'kanyew',\n  type: 'user',\n  created: '2016-11-07T16:40:52.238Z',\n});\n")),(0,o.kt)("p",null,"The traits represent dimensions in your data that you can group or pivot on. For example, in the above, you can easily create cohorts of all types that are ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," or accounts created within a time window of your choosing."),(0,o.kt)("h2",{id:"define-your-track-events"},"Define your Track events"),(0,o.kt)("p",null,"After you\u2019ve documented your ",(0,o.kt)("a",{parentName:"p",href:"#formalize-your-naming-and-collection-standards"},"event naming and collection standards"),"  it\u2019s time to add events to your tracking plan. We recommend starting with fewer events that are directly tied to one of your ",(0,o.kt)("a",{parentName:"p",href:"#define-business-objectives"},"business objectives"),". This focused effort helps avoid a situation where you become overwhelmed by endless  number of possible actions to track. As you get more comfortable, you can add more events to your tracking plan that can answer peripheral questions."),(0,o.kt)("p",null,"At Intilery, we started out tracking these events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User Signed Up")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Collected")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Asset Created"))),(0,o.kt)("p",null,"Then we added some peripheral events to to better understand how we\u2019re performing,\nfor the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User Added")," When users invite more people to their organization, it\u2019s a\ngood indicator that they\u2019re engaged and serious about using the product. This helps us measure growth in organizations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Audience Created")," Creating audiences is a key value driver for our customers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Event Validated")," When we see that a certain customer has used the\nlive event stream feature a number of times, we can contact them to see if we can help them debug.")),(0,o.kt)("p",null,"For an ecommerce company, however, the main events might be something like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Account Created")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Product Added")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Order Completed"))),(0,o.kt)("p",null,"Note that Intilery has a set of \u201creserved\u201d event names specifically for ecommerce, called our ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/retail"},"ecommerce schema"),". Check it out to see which events\nwe cover and how they are used in our downstream destinations."),(0,o.kt)("p",null,"For a community, on the other hand, there is an entirely different set of actions that\nindicate engagement, listed in the below pyramid. For example, a community like\n",(0,o.kt)("a",{parentName:"p",href:"https://growthhackers.com/"},"GrowthHackers")," may want to track actions like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content Viewed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content Shared")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Comment Submitted")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content Produced")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content Curated"))),(0,o.kt)("p",null,"With this, they\u2019re able to measure key metrics around engagement and understand\nhow users are moving towards their ultimate conversion event: curation content for others."),(0,o.kt)("h2",{id:"define-your-track-event-properties"},"Define your Track event properties"),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},".track()")," call can accept an optional dictionary of ",(0,o.kt)("inlineCode",{parentName:"p"},"properties"),", which can\ncontain any key-value pair you want. These ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," act as dimensions that\nallow Intilery to group, filter, and analyze the events. They give you additional\ndetail on broader events."),(0,o.kt)("p",null,"As mentioned earlier, events should be generic and high level, whereas properties\nare specific and detailed. For example, at Intilery, ",(0,o.kt)("inlineCode",{parentName:"p"},"Business Tier Asset Created"),"\nis a horrible event name. Instead, we used Asset Created\n",(0,o.kt)("inlineCode",{parentName:"p"},"with a"),"property",(0,o.kt)("inlineCode",{parentName:"p"},"of"),"account_tier",(0,o.kt)("inlineCode",{parentName:"p"},"and value of"),"business` :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Workspace Created', {\n  account_tier: 'business'\n})\n")),(0,o.kt)("p",null,"Similar to the traits in the ",(0,o.kt)("inlineCode",{parentName:"p"},".identify()")," call, the properties provide you a column\nthat you can pivot against or filter on in your analytics tools or allow you to create a\ncohort of users in email tools."),(0,o.kt)("p",null,"There also shouldn\u2019t be any dynamically generated ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"\u2019s in the ",(0,o.kt)("inlineCode",{parentName:"p"},"properties"),"\ndictionary, as each ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," will create a new column in your downstream tools.\nDynamically generated ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"\u2019s will clutter your tools with tons of data that will\nmake it difficult and confusing to use later."),(0,o.kt)("p",null,"Here is Intilery'\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Lead Captured")," ",(0,o.kt)("inlineCode",{parentName:"p"},".track()")," call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track(userId, 'Lead Captured', {\n  email: 'email',\n  location: 'header navbar'\n  url: 'https://intilery.com/'\n});\n")),(0,o.kt)("p",null,"The high level event is ",(0,o.kt)("strong",{parentName:"p"},"Lead Captured")," and all of the details are tucked into\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," dictionary. In our downstream tools, we\u2019ll be able to easily look at\nhow many leads were captured in different locations on our site."))}d.isMDXComponent=!0},238:function(e,t,n){"use strict";t.Z=n.p+"assets/images/goodbad-b9f44c0b7e81dba7e1efc7e9c88e3a06.png"}}]);