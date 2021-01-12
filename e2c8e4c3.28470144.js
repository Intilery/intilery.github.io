(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{110:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),o=a(6),r=(a(0),a(120)),i={id:"full",title:"Planning a full implementation",sidebar_label:"Planning A Full implementation"},l={unversionedId:"guides/full",id:"guides/full",isDocsHomePage:!1,title:"Planning a full implementation",description:"Now that we\u2019ve shown you Intilery in action, let\u2019s step back and think through what a full implementation of Intilery for your organization would look like. We know that figuring out what events to track in Intilery can feel overwhelming. You should expect this planning process to have the following steps:",source:"@site/docs/guides/full.md",permalink:"/docs/guides/full",sidebar_label:"Planning A Full implementation",sidebar:"guides",previous:{title:"Simple Integration",permalink:"/docs/guides/simple"},next:{title:"A full Intilery implementation",permalink:"/docs/guides/fullimp"}},s=[{value:"Define Business Objectives",id:"define-business-objectives",children:[]},{value:"Decide what to collect",id:"decide-what-to-collect",children:[{value:"Shortcut! Check if a Business Schema meets your needs",id:"shortcut-check-if-a-business-schema-meets-your-needs",children:[]}]},{value:"Create naming conventions",id:"create-naming-conventions",children:[]},{value:"Develop a Tracking Plan",id:"develop-a-tracking-plan",children:[{value:"Plan your Identify calls",id:"plan-your-identify-calls",children:[]},{value:"Plan your Track events",id:"plan-your-track-events",children:[]},{value:"Define your Track event properties",id:"define-your-track-event-properties",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that we\u2019ve shown you Intilery in action, let\u2019s step back and think through what a full implementation of Intilery for your organization would look like. We know that figuring out what events to track in Intilery can feel overwhelming. You should expect this planning process to have the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#define-business-objectives"}),"Define Business Objectives")),Object(r.b)("li",{parentName:"ul"},"Decide what to collect",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Shortcut! Check if a Business Spec meets your needs",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"[B2B Schema]"," (coming soon)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/schema/retail"}),"Ecommerce Schema")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/schema/mobile"}),"Mobile Spec")),Object(r.b)("li",{parentName:"ul"},"[Video Spec]"," (coming soon)"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#create-naming-conventions"}),"Create naming conventions")),Object(r.b)("li",{parentName:"ul"},"Develop a Tracking Plan",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#plan-your-identify-and-group-calls"}),"Plan your Identify and Group calls")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#plan-your-track-events"}),"Plan your Track events")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#define-your-track-event-properties"}),"Define your Track event properties")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://Intilery.com/docs/getting-started/03-planning-full-install/#plan-for-destination-tools"}),"Plan for destination tools"))),Object(r.b)("p",null,"Be prepared to invest time deciding with stakeholders how to track your data, and planning how you\u2019ll utilise it. The time you spend here will save you lots of time in the future, as following Intilery\u2019s best practices allows you to easily change your tracking later."),Object(r.b)("h2",{id:"define-business-objectives"},"Define Business Objectives"),Object(r.b)("p",null,"Tracking is about learning and taking action. Think about what you want to know about your product or customers. Think about what assumptions need to be tested and what theories need to be proven true or false. Think about how you would like to engage your customers, what campaigns do you want to run? What automation will be useful? Think about the unknowns. Here are some helpful questions to get started:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What kind of events or data best illustrate or explain how your customers use your product?"),Object(r.b)("li",{parentName:"ul"},"How do people discover, start using, and paying for your product?"),Object(r.b)("li",{parentName:"ul"},"What are the most important steps in a customer\u2019s journey?")),Object(r.b)("p",null,"While it may seem obvious, we highly recommend documenting your high-level business objectives. We will ask you tom complete this as part of on boarding, if possible:-"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/success.png",alt:"what to track"}))),Object(r.b)("p",null,"More specifically, ask yourself: what are the measurable business outcomes you want to achieve this year? Do you want to convert new customers? Drive more incremental revenue among your current customer base? Sell more products? Increase average basket value?"),Object(r.b)("p",null,"The best way to answer this question is to interview stakeholders in your organization who will consume the data and plan the journeys and campaigns."),Object(r.b)("p",null,"With your business goals documented, the next step is to map user actions to those business goals. For example, if one of your goals is to activate new signups, you want to think about which activities are related to a signup. Ask yourself, what actions do people take ",Object(r.b)("em",{parentName:"p"},"before")," signing up? Do specific actions predict a user signing up?"),Object(r.b)("p",null,"As an example, you might end up with a list like this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ad Campaign Clicked"),Object(r.b)("li",{parentName:"ul"},"Link Clicked"),Object(r.b)("li",{parentName:"ul"},"Article Completed"),Object(r.b)("li",{parentName:"ul"},"Campaign Opened"),Object(r.b)("li",{parentName:"ul"},"From Initiated"),Object(r.b)("li",{parentName:"ul"},"Form Submitted"),Object(r.b)("li",{parentName:"ul"},"User Signed Up")),Object(r.b)("p",null,"While this list represents a tiny fraction of the user actions you ",Object(r.b)("em",{parentName:"p"},"could")," track, it gives a list focused on your top business objectives. This helps break up the huge project of data collection into smaller chunks."),Object(r.b)("h2",{id:"decide-what-to-collect"},"Decide what to collect"),Object(r.b)("p",null,"With your business objectives documented and mapped to user actions, it\u2019s time to build standards that you can use when deciding what to track. With your stakeholders, make a list of the actual events (page or screen views, and user actions) that you want to track. Think about all of the ways your users can interact with your site or app"),Object(r.b)("p",null,"When you\u2019re first starting out, we recommend that you limit your tracking plan to a few core events, but add lots of properties to provide context about them. We generally see more success with the \u201cless is more\u201d philosophy of tracking data, but you might also decide to take a more liberal \u201ctrack more and analyze later\u201d approach. Like everything, each alternative has pros and cons that are important to consider especially as it relates to your company\u2019s needs."),Object(r.b)("p",null,"(We\u2019ll talk more about Tracking Plans ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#develop-a-tracking-plan"}),"below"),".)"),Object(r.b)("h3",{id:"shortcut-check-if-a-business-schema-meets-your-needs"},"Shortcut! Check if a Business Schema meets your needs"),Object(r.b)("p",null,"Intilery maintains several \u201cBusiness Schemas\u201d, which are recommendations based on your type of business that give recommendations on what to track, what additional traits or properties to collect, and how to format them. The two most common are the B2B (business-to-business) Spec, Ecommerce Spec, and our Mobile and Video specs."),Object(r.b)("p",null,"If these specs meet your business needs, you\u2019re in luck! These specs are built into our tracking plan templates, so you don\u2019t need to start from a blank slate."),Object(r.b)("h4",{id:"b2b-spec"},"B2B Spec"),Object(r.b)("p",null,"If your organization sells a product or services to other businesses, you might have different analytics and marketing needs than most companies. You need to understand your customer behaviors both at the user-level, and also at the company or team-level."),Object(r.b)("h4",{id:"ecommerce-spec"},"Ecommerce Spec"),Object(r.b)("p",null,"If your organization sells products online, the E-commerce Spec covers the customer\u2019s journey as they browse your store, click on promotions, view products, add those products to a cart, and complete a purchase. It also provides recommendations about off-page interactions, including interactions with email promotions, coupons, and other systems. read more about our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/schema/retail"}),"Ecommerce Schema")),Object(r.b)("h4",{id:"mobile-spec"},"Mobile Spec"),Object(r.b)("p",null,"The native Mobile Spec is a common blueprint for the mobile user lifecycle. The Spec outlines the most important events for mobile apps to track, and automatically collects many of these events when you use the ","[Intilery Android and iOS SDKs]"," (coming soon). Read more about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/schema/mobile"}),"the Native Mobile Spec")),Object(r.b)("h2",{id:"create-naming-conventions"},"Create naming conventions"),Object(r.b)("p",null,"Regardless of approach, here are some important best practices to keep in mind:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Pick a casing convention:")," We recommend ",Object(r.b)("em",{parentName:"li"},"Title Case")," for event names and ",Object(r.b)("em",{parentName:"li"},"snake_case")," for property names. Make sure you pick a casing standard and enforce it across your events and properties."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Pick an event name structure:")," As you may have noticed from our ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/schema/contents"}),"schemas"),", we\u2019re big fans of the Object (",Object(r.b)("inlineCode",{parentName:"li"},"Blog Post"),") + Action (",Object(r.b)("inlineCode",{parentName:"li"},"Read"),") framework for event names. Pick a convention and stick to it!"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Don\u2019t create event names dynamically:")," Avoid creating events that pull a dynamic value into the event name (for example, ",Object(r.b)("inlineCode",{parentName:"li"},"User Signed Up (11-01-2019)"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Don\u2019t create events to track properties:")," Avoid adding values to event names when they could be a property. Instead, add values as a property. For example, rather than having an event called \u201cRead Blog Post - Best Tracking Plans Ever\u201d, create a \u201cBlog Post Read\u201d event and with a property like ",Object(r.b)("inlineCode",{parentName:"li"},'"blog_post_title":"Best Tracking Plans Ever"'),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Don\u2019t create property keys dynamically:")," Avoid creating property names like ",Object(r.b)("inlineCode",{parentName:"li"},'"feature_1":"true"'),",",Object(r.b)("inlineCode",{parentName:"li"},'"feature_2":"false"')," as these are ambiguous and very difficult to analyze")),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/goodbad.png",alt:"img"}))),Object(r.b)("p",null,"Got all that? Great! You\u2019re now ready to develop a Tracking Plan."),Object(r.b)("h2",{id:"develop-a-tracking-plan"},"Develop a Tracking Plan"),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./trackingplan"}),"tracking plan")," clarifies what events to track, where those events live in the code base, and why you\u2019re tracking those events (from a business perspective). ",Object(r.b)("strong",{parentName:"p"},"A good tracking plan represents the single source of truth about what data you collect, and why.")),Object(r.b)("p",null,"Your tracking plan is probably maintained in a spreadsheet and serves as a project management tool to get your organization in agreement about what data to use to make decisions. A tracking plan helps build a shared understanding of the data among marketers, product managers, engineers, analysts, and any other data users."),Object(r.b)("h3",{id:"plan-your-identify-calls"},"Plan your Identify calls"),Object(r.b)("p",null,"The Identify call updates all records of the user with a set of traits, and so is extremely important for building your understanding of your users. But how do you choose which traits to include? The example below shows an Identify call using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tag/tag1"}),"analytics.js"),") for Intilery:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.identify({\n  name: 'Jane Kim',\n  email: 'janekim@example.com',\n  login: 'janekay',\n  type: 'user',\n  created: '2016-11-07T16:40:52.238Z',\n});\n")),Object(r.b)("p",null,"The traits represent dimensions in your data that you can group or pivot on. For example, in the above, you can easily create audiences of all types that are ",Object(r.b)("inlineCode",{parentName:"p"},"users")," or accounts created within a time window of your choosing."),Object(r.b)("p",null,"When you plan your deployment, think about what information you can collect as traits that would be useful to you when grouping users together, and plan how you will collect that information."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:"),' In the Intilery Schema page in the Intilery platform, you can set the accessability of properties and traits, so that for example, a users "address" cannot change via the analytics.js call, and what data can be accessed.'),Object(r.b)("h3",{id:"plan-your-track-events"},"Plan your Track events"),Object(r.b)("p",null,"We recommend starting with fewer events that are directly tied to one of your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#define-business-objectives"}),"business objectives"),", to help avoid becoming overwhelmed by endless number of possible actions to track. As you get more comfortable, you can add more events to your tracking plan that can answer more specialized questions."),Object(r.b)("p",null,"At Intilery, we started out tracking these events:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"User Signed Up")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Logged in")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Subscription Started"))),Object(r.b)("p",null,"Then we added some peripheral events to to better understand how we\u2019re performing, for the following reasons:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"User referred")," When users invite more people to their organization, it\u2019s a good indicator that they\u2019re engaged and serious about using the product. This helps us measure growth in organizations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Asset Created")," We can see that customers are using the product"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Journey put live")," We can see that the customer has built, approved and put a journey live.")),Object(r.b)("p",null,"For an Ecommerce company, however, the main events might be something like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Account Created")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Product Added")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Order Completed"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tip"),": As we mentioned Intilery has a set of \u201creserved\u201d event names specifically for ecommerce, called our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/schema/retail"}),"Ecommerce Spec"),". Check it out to see which events we cover and how they are used in our downstream destinations."),Object(r.b)("p",null,"An online community, on the other hand, has an entirely different set of actions that indicate engagement, as listed below. For example, a community might want to track actions like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Content Viewed")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Content Shared")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comment Submitted")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Content Produced")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Content Curated"))),Object(r.b)("p",null,"With these actions tracked, the community can develop metrics around engagement, and understand how users move towards their ultimate conversion events."),Object(r.b)("h3",{id:"define-your-track-event-properties"},"Define your Track event properties"),Object(r.b)("p",null,"Each Track call can accept an optional dictionary of properties, which can contain any key-value pair. These properties act as dimensions that allow creation of audiences, decisions in journeys, integration with other tools/products and the personalisatino of campaigns. They give you additional detail on broader events."),Object(r.b)("p",null,"Events should be generic and high-level, but properties should be specific and detailed. For example, at Intilery, ",Object(r.b)("inlineCode",{parentName:"p"},"Business Tier Workspace Created")," is a horrible event name. Instead, we used ",Object(r.b)("inlineCode",{parentName:"p"},"Workspace Created")," with a ",Object(r.b)("inlineCode",{parentName:"p"},"property")," of ",Object(r.b)("inlineCode",{parentName:"p"},"account_tier")," and value of ",Object(r.b)("inlineCode",{parentName:"p"},"business")," :"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.track('Workspace Created', {\n  account_tier: 'business'\n})\n")),Object(r.b)("p",null,"Similar to the traits in the Identify call, the properties provide a column that you can pivot against or filter on in your analytics tools or allow you to create am audience of customers."),Object(r.b)("p",null,"Don\u2019t create dynamically generated property names in the properties dictionary. Each ",Object(r.b)("inlineCode",{parentName:"p"},"key")," creates a new column in your downstream tools, and dynamically generated keys clutter your tools with fragmented data that makes it difficult and confusing to use later."),Object(r.b)("p",null,"Here is Intilery\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"Lead Captured")," Track call:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.track(userId, 'Lead Captured', {\n  email: 'email',\n  location: 'header navbar'\n  url: 'https://intilery.com/'\n});\n")),Object(r.b)("p",null,"The high-level event is ",Object(r.b)("strong",{parentName:"p"},"Lead Captured"),", and all of the details appear in the properties dictionary. Because of this, we can easily see in our downstream tools how many leads were captured, and from which parts of the site."))}u.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||r;return a?o.a.createElement(m,l(l({ref:t},c),{},{components:a})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);