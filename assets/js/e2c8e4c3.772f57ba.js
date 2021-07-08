(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[4642],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9815:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],l={id:"full",title:"Planning a full implementation",sidebar_label:"Planning A Full implementation"},s=void 0,u={unversionedId:"guides/full",id:"guides/full",isDocsHomePage:!1,title:"Planning a full implementation",description:"Now that we\u2019ve shown you Intilery in action, let\u2019s step back and think through what a full implementation of Intilery for your organization would look like. We know that figuring out what events to track in Intilery can feel overwhelming. You should expect this planning process to have the following steps:",source:"@site/docs/guides/full.md",sourceDirName:"guides",slug:"/guides/full",permalink:"/docs/guides/full",version:"current",frontMatter:{id:"full",title:"Planning a full implementation",sidebar_label:"Planning A Full implementation"},sidebar:"guides",previous:{title:"Simple Integration",permalink:"/docs/guides/simple"},next:{title:"Full implementation",permalink:"/docs/guides/fullimp"}},c=[{value:"Define Business Objectives",id:"define-business-objectives",children:[]},{value:"Decide what to collect",id:"decide-what-to-collect",children:[{value:"Shortcut! Check if a Business Schema meets your needs",id:"shortcut-check-if-a-business-schema-meets-your-needs",children:[]}]},{value:"Create naming conventions",id:"create-naming-conventions",children:[]},{value:"Develop a Tracking Plan",id:"develop-a-tracking-plan",children:[{value:"Plan your Identify calls",id:"plan-your-identify-calls",children:[]},{value:"Plan your Track events",id:"plan-your-track-events",children:[]},{value:"Define your Track event properties",id:"define-your-track-event-properties",children:[]}]}],p={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we\u2019ve shown you Intilery in action, let\u2019s step back and think through what a full implementation of Intilery for your organization would look like. We know that figuring out what events to track in Intilery can feel overwhelming. You should expect this planning process to have the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#define-business-objectives"},"Define Business Objectives")),(0,r.kt)("li",{parentName:"ul"},"Decide what to collect",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Shortcut! Check if a Business Spec meets your needs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/schema/b2b"},"B2B Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/schema/retail"},"Ecommerce Schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/schema/mobile"},"Mobile Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/schema/video"},"Video Spec")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-naming-conventions"},"Create naming conventions")),(0,r.kt)("li",{parentName:"ul"},"Develop a Tracking Plan",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#plan-your-identify-and-group-calls"},"Plan your Identify and Group calls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#plan-your-track-events"},"Plan your Track events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#define-your-track-event-properties"},"Define your Track event properties"))))),(0,r.kt)("p",null,"Be prepared to invest time deciding with stakeholders how to track your data, and planning how you\u2019ll utilise it. The time you spend here will save you lots of time in the future, as following Intilery\u2019s best practices allows you to easily change your tracking later."),(0,r.kt)("h2",{id:"define-business-objectives"},"Define Business Objectives"),(0,r.kt)("p",null,"Tracking is about learning and taking action. Think about what you want to know about your product or customers. Think about what assumptions need to be tested and what theories need to be proven true or false. Think about how you would like to engage your customers, what campaigns do you want to run? What automation will be useful? Think about the unknowns. Here are some helpful questions to get started:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What kind of events or data best illustrate or explain how your customers use your product?"),(0,r.kt)("li",{parentName:"ul"},"How do people discover, start using, and paying for your product?"),(0,r.kt)("li",{parentName:"ul"},"What are the most important steps in a customer\u2019s journey?")),(0,r.kt)("p",null,"While it may seem obvious, we highly recommend documenting your high-level business objectives. We will ask you tom complete this as part of on boarding, if possible:-"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"what to track",src:a(864).Z})),(0,r.kt)("p",null,"More specifically, ask yourself: what are the measurable business outcomes you want to achieve this year? Do you want to convert new customers? Drive more incremental revenue among your current customer base? Sell more products? Increase average basket value?"),(0,r.kt)("p",null,"The best way to answer this question is to interview stakeholders in your organization who will consume the data and plan the journeys and campaigns."),(0,r.kt)("p",null,"With your business goals documented, the next step is to map user actions to those business goals. For example, if one of your goals is to activate new signups, you want to think about which activities are related to a signup. Ask yourself, what actions do people take ",(0,r.kt)("em",{parentName:"p"},"before")," signing up? Do specific actions predict a user signing up?"),(0,r.kt)("p",null,"As an example, you might end up with a list like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ad Campaign Clicked"),(0,r.kt)("li",{parentName:"ul"},"Link Clicked"),(0,r.kt)("li",{parentName:"ul"},"Article Completed"),(0,r.kt)("li",{parentName:"ul"},"Campaign Opened"),(0,r.kt)("li",{parentName:"ul"},"From Initiated"),(0,r.kt)("li",{parentName:"ul"},"Form Submitted"),(0,r.kt)("li",{parentName:"ul"},"User Signed Up")),(0,r.kt)("p",null,"While this list represents a tiny fraction of the user actions you ",(0,r.kt)("em",{parentName:"p"},"could")," track, it gives a list focused on your top business objectives. This helps break up the huge project of data collection into smaller chunks."),(0,r.kt)("h2",{id:"decide-what-to-collect"},"Decide what to collect"),(0,r.kt)("p",null,"With your business objectives documented and mapped to user actions, it\u2019s time to build standards that you can use when deciding what to track. With your stakeholders, make a list of the actual events (page or screen views, and user actions) that you want to track. Think about all of the ways your users can interact with your site or app"),(0,r.kt)("p",null,"When you\u2019re first starting out, we recommend that you limit your tracking plan to a few core events, but add lots of properties to provide context about them. We generally see more success with the \u201cless is more\u201d philosophy of tracking data, but you might also decide to take a more liberal \u201ctrack more and analyze later\u201d approach. Like everything, each alternative has pros and cons that are important to consider especially as it relates to your company\u2019s needs."),(0,r.kt)("p",null,"(We\u2019ll talk more about Tracking Plans ",(0,r.kt)("a",{parentName:"p",href:"#develop-a-tracking-plan"},"below"),".)"),(0,r.kt)("h3",{id:"shortcut-check-if-a-business-schema-meets-your-needs"},"Shortcut! Check if a Business Schema meets your needs"),(0,r.kt)("p",null,"Intilery maintains several \u201cBusiness Schemas\u201d, which are recommendations based on your type of business that give recommendations on what to track, what additional traits or properties to collect, and how to format them. The two most common are the B2B (business-to-business) Spec, Ecommerce Spec, and our Mobile and Video specs."),(0,r.kt)("p",null,"If these specs meet your business needs, you\u2019re in luck! These specs are built into our tracking plan templates, so you don\u2019t need to start from a blank slate."),(0,r.kt)("h4",{id:"b2b-spec"},"B2B Spec"),(0,r.kt)("p",null,"If your organization sells a product or services to other businesses, you might have different analytics and marketing needs than most companies. You need to understand your customer behaviors both at the user-level, and also at the company or team-level."),(0,r.kt)("h4",{id:"ecommerce-spec"},"Ecommerce Spec"),(0,r.kt)("p",null,"If your organization sells products online, the E-commerce Spec covers the customer\u2019s journey as they browse your store, click on promotions, view products, add those products to a cart, and complete a purchase. It also provides recommendations about off-page interactions, including interactions with email promotions, coupons, and other systems. read more about our ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/retail"},"Ecommerce Schema")),(0,r.kt)("h4",{id:"mobile-spec"},"Mobile Spec"),(0,r.kt)("p",null,"The native Mobile Spec is a common blueprint for the mobile user lifecycle. The Spec outlines the most important events for mobile apps to track, and automatically collects many of these events when you use the ","[Intilery Android and iOS SDKs]"," (coming soon). Read more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/mobile"},"the Native Mobile Spec")),(0,r.kt)("h2",{id:"create-naming-conventions"},"Create naming conventions"),(0,r.kt)("p",null,"Regardless of approach, here are some important best practices to keep in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pick a casing convention:")," We recommend ",(0,r.kt)("em",{parentName:"li"},"Title Case")," for event names and ",(0,r.kt)("em",{parentName:"li"},"snake_case")," for property names. Make sure you pick a casing standard and enforce it across your events and properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pick an event name structure:")," As you may have noticed from our ",(0,r.kt)("a",{parentName:"li",href:"/docs/schema/contents"},"schemas"),", we\u2019re big fans of the Object (",(0,r.kt)("inlineCode",{parentName:"li"},"Blog Post"),") + Action (",(0,r.kt)("inlineCode",{parentName:"li"},"Read"),") framework for event names. Pick a convention and stick to it!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don\u2019t create event names dynamically:")," Avoid creating events that pull a dynamic value into the event name (for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"User Signed Up (11-01-2019)"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don\u2019t create events to track properties:")," Avoid adding values to event names when they could be a property. Instead, add values as a property. For example, rather than having an event called \u201cRead Blog Post - Best Tracking Plans Ever\u201d, create a \u201cBlog Post Read\u201d event and with a property like ",(0,r.kt)("inlineCode",{parentName:"li"},'"blog_post_title":"Best Tracking Plans Ever"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don\u2019t create property keys dynamically:")," Avoid creating property names like ",(0,r.kt)("inlineCode",{parentName:"li"},'"feature_1":"true"'),",",(0,r.kt)("inlineCode",{parentName:"li"},'"feature_2":"false"')," as these are ambiguous and very difficult to analyze")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(8900).Z})),(0,r.kt)("p",null,"Got all that? Great! You\u2019re now ready to develop a Tracking Plan."),(0,r.kt)("h2",{id:"develop-a-tracking-plan"},"Develop a Tracking Plan"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"./trackingplan"},"tracking plan")," clarifies what events to track, where those events live in the code base, and why you\u2019re tracking those events (from a business perspective). ",(0,r.kt)("strong",{parentName:"p"},"A good tracking plan represents the single source of truth about what data you collect, and why.")),(0,r.kt)("p",null,"Your tracking plan is probably maintained in a spreadsheet and serves as a project management tool to get your organization in agreement about what data to use to make decisions. A tracking plan helps build a shared understanding of the data among marketers, product managers, engineers, analysts, and any other data users."),(0,r.kt)("h3",{id:"plan-your-identify-calls"},"Plan your Identify calls"),(0,r.kt)("p",null,"The Identify call updates all records of the user with a set of traits, and so is extremely important for building your understanding of your users. But how do you choose which traits to include? The example below shows an Identify call using ",(0,r.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"analytics.js"),") for Intilery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify({\n  name: 'Jane Kim',\n  email: 'janekim@example.com',\n  login: 'janekay',\n  type: 'user',\n  created: '2016-11-07T16:40:52.238Z',\n});\n")),(0,r.kt)("p",null,"The traits represent dimensions in your data that you can group or pivot on. For example, in the above, you can easily create audiences of all types that are ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," or accounts created within a time window of your choosing."),(0,r.kt)("p",null,"When you plan your deployment, think about what information you can collect as traits that would be useful to you when grouping users together, and plan how you will collect that information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),' In the Intilery Schema page in the Intilery platform, you can set the accessability of properties and traits, so that for example, a users "address" cannot change via the analytics.js call, and what data can be accessed.'),(0,r.kt)("h3",{id:"plan-your-track-events"},"Plan your Track events"),(0,r.kt)("p",null,"We recommend starting with fewer events that are directly tied to one of your ",(0,r.kt)("a",{parentName:"p",href:"#define-business-objectives"},"business objectives"),", to help avoid becoming overwhelmed by endless number of possible actions to track. As you get more comfortable, you can add more events to your tracking plan that can answer more specialized questions."),(0,r.kt)("p",null,"At Intilery, we started out tracking these events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Signed Up")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Logged in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Subscription Started"))),(0,r.kt)("p",null,"Then we added some peripheral events to to better understand how we\u2019re performing, for the following reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User referred")," When users invite more people to their organization, it\u2019s a good indicator that they\u2019re engaged and serious about using the product. This helps us measure growth in organizations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Asset Created")," We can see that customers are using the product"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Journey put live")," We can see that the customer has built, approved and put a journey live.")),(0,r.kt)("p",null,"For an Ecommerce company, however, the main events might be something like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Account Created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Product Added")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Order Completed"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip"),": As we mentioned Intilery has a set of \u201creserved\u201d event names specifically for ecommerce, called our ",(0,r.kt)("a",{parentName:"p",href:"/docs/schema/retail"},"Ecommerce Spec"),". Check it out to see which events we cover and how they are used in our downstream destinations."),(0,r.kt)("p",null,"An online community, on the other hand, has an entirely different set of actions that indicate engagement, as listed below. For example, a community might want to track actions like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content Viewed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content Shared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Comment Submitted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content Produced")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content Curated"))),(0,r.kt)("p",null,"With these actions tracked, the community can develop metrics around engagement, and understand how users move towards their ultimate conversion events."),(0,r.kt)("h3",{id:"define-your-track-event-properties"},"Define your Track event properties"),(0,r.kt)("p",null,"Each Track call can accept an optional dictionary of properties, which can contain any key-value pair. These properties act as dimensions that allow creation of audiences, decisions in journeys, integration with other tools/products and the personalisatino of campaigns. They give you additional detail on broader events."),(0,r.kt)("p",null,"Events should be generic and high-level, but properties should be specific and detailed. For example, at Intilery, ",(0,r.kt)("inlineCode",{parentName:"p"},"Business Tier Workspace Created")," is a horrible event name. Instead, we used ",(0,r.kt)("inlineCode",{parentName:"p"},"Workspace Created")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"property")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"account_tier")," and value of ",(0,r.kt)("inlineCode",{parentName:"p"},"business")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Workspace Created', {\n  account_tier: 'business'\n})\n")),(0,r.kt)("p",null,"Similar to the traits in the Identify call, the properties provide a column that you can pivot against or filter on in your analytics tools or allow you to create am audience of customers."),(0,r.kt)("p",null,"Don\u2019t create dynamically generated property names in the properties dictionary. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," creates a new column in your downstream tools, and dynamically generated keys clutter your tools with fragmented data that makes it difficult and confusing to use later."),(0,r.kt)("p",null,"Here is Intilery\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"Lead Captured")," Track call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track(userId, 'Lead Captured', {\n  email: 'email',\n  location: 'header navbar'\n  url: 'https://intilery.com/'\n});\n")),(0,r.kt)("p",null,"The high-level event is ",(0,r.kt)("strong",{parentName:"p"},"Lead Captured"),", and all of the details appear in the properties dictionary. Because of this, we can easily see in our downstream tools how many leads were captured, and from which parts of the site."))}d.isMDXComponent=!0},8900:function(e,t,a){"use strict";t.Z=a.p+"assets/images/goodbad-b9f44c0b7e81dba7e1efc7e9c88e3a06.png"},864:function(e,t,a){"use strict";t.Z=a.p+"assets/images/success-d99ce7a5cd10936fa5f192a1cfb297a3.png"}}]);