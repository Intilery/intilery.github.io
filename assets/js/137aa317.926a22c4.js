(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[5558],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=o,p=m["".concat(u,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(p,r(r({ref:t},c),{},{components:n})):a.createElement(p,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},303:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={},s="Roadmap",u={unversionedId:"roadmap/roadmap",id:"roadmap/roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Q3 2021",source:"@site/docs/roadmap/roadmap.md",sourceDirName:"roadmap",slug:"/roadmap/roadmap",permalink:"/docs/roadmap/roadmap",version:"current",frontMatter:{}},l=[{value:"Q3 2021",id:"q3-2021",children:[{value:"Journeys",id:"journeys",children:[]},{value:"Schema",id:"schema",children:[]}]},{value:"Q4 2021",id:"q4-2021",children:[{value:"Aggregations",id:"aggregations",children:[]},{value:"Customer Grouping",id:"customer-grouping",children:[]}]},{value:"Q1 2022",id:"q1-2022",children:[{value:"Push Notifications",id:"push-notifications",children:[]},{value:"Campaign Scheduling and Limits",id:"campaign-scheduling-and-limits",children:[]}]},{value:"Q2 2022",id:"q2-2022",children:[{value:"SMS Enhancements",id:"sms-enhancements",children:[]}]},{value:"Q3 2022",id:"q3-2022",children:[{value:"AB/MVC Testing",id:"abmvc-testing",children:[]}]},{value:"Future Plans",id:"future-plans",children:[{value:"Administer the Platform",id:"administer-the-platform",children:[]},{value:"Asset Management",id:"asset-management",children:[]},{value:"Data Analysis",id:"data-analysis",children:[]},{value:"Web/App Personalisation",id:"webapp-personalisation",children:[]},{value:"Journeys, enhancements",id:"journeys-enhancements",children:[]},{value:"Schema Configuration",id:"schema-configuration",children:[]},{value:"Integration/Platform",id:"integrationplatform",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"roadmap"},"Roadmap"),(0,i.kt)("h2",{id:"q3-2021"},"Q3 2021"),(0,i.kt)("h3",{id:"journeys"},"Journeys"),(0,i.kt)("p",null,"Minor enhancements to Journeys including the ability to terminate a journey on an incoming event and the display of the active journeys against the customer as live data not reporting."),(0,i.kt)("h3",{id:"schema"},"Schema"),(0,i.kt)("p",null,"UX Enhancements for usability of updating and viewing schema."),(0,i.kt)("h2",{id:"q4-2021"},"Q4 2021"),(0,i.kt)("h3",{id:"aggregations"},"Aggregations"),(0,i.kt)("p",null,"Enable communications to include grouping of data passed into the system from events, e.g. future bookings, order history, current basket, next delivery, first policy."),(0,i.kt)("p",null,"Add configuration to link in your data warehouse or APIs so that it can be pulled into communications sent to your customers. e.g. stock availability, up to date pricing."),(0,i.kt)("p",null,"The use of the event aggregations and data warehouse to be made available for use in journeys, audiences and personalisations."),(0,i.kt)("h3",{id:"customer-grouping"},"Customer Grouping"),(0,i.kt)("p",null,"Sometimes you\u2019re not talking to a customer, but an account or other \u2018group\u2019 with multiple customers attached. We\u2019re making this grouping available so you can create and talk to the groups."),(0,i.kt)("h2",{id:"q1-2022"},"Q1 2022"),(0,i.kt)("h3",{id:"push-notifications"},"Push Notifications"),(0,i.kt)("p",null,"Integration of Mobile Push and Web Push messages into Campaign Delivery"),(0,i.kt)("h3",{id:"campaign-scheduling-and-limits"},"Campaign Scheduling and Limits"),(0,i.kt)("p",null,"We\u2019re adding advanced campaign scheduling to handle repeated schedules and follow up actions on not opening/open/click events without having to build a Journey. There will be controls to allow you to flexibly manage the volume or communications a customer can receive based on static audiences or limits on sends from groups of campaigns."),(0,i.kt)("h2",{id:"q2-2022"},"Q2 2022"),(0,i.kt)("h3",{id:"sms-enhancements"},"SMS Enhancements"),(0,i.kt)("p",null,"We\u2019re adding new ways to send SMS direct to customers and giving you the ability to interact with them through reply services and building SMS surveys."),(0,i.kt)("h2",{id:"q3-2022"},"Q3 2022"),(0,i.kt)("h3",{id:"abmvc-testing"},"AB/MVC Testing"),(0,i.kt)("p",null,"So you have lots of good ideas for content, but which ones are great? Which audience works best with which content? You\u2019ll be able to build your variations and let the Intilery system find the best combinations across Campaigns and Landing Pages."),(0,i.kt)("p",null,"Want to figure out the most successful customer Journey from a set of choices - this will help you optimise your Journeys? "),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("h3",{id:"administer-the-platform"},"Administer the Platform"),(0,i.kt)("p",null,"Whilst we\u2019re all about automating your customer journeys and marketing campaigns, sometimes we want to focus on making sure the platform stays easy to use, so we\u2019re making some changes to make it easier to manage the assets, users, exceptions and other parts of the platform. We\u2019re looking at what you do and we\u2019re going to make it easier."),(0,i.kt)("h3",{id:"asset-management"},"Asset Management"),(0,i.kt)("p",null,"Adding some more spice to the way you can send Campaigns. Want to send bespoke content out to one customer? Want to make sure you\u2019ve got the Campaign setup right to go out? Share and improve the way you use content in your campaigns."),(0,i.kt)("h3",{id:"data-analysis"},"Data Analysis"),(0,i.kt)("p",null,"You\u2019ve been collecting all this data, building audiences and sending campaigns. Now go to the next level of data insight and ability to take action on that knowledge of your customers with easy integration to your other data tools and make use of our ML models."),(0,i.kt)("h3",{id:"webapp-personalisation"},"Web/App Personalisation"),(0,i.kt)("p",null,"Land your customers on personalised pages as part of their end to end journey after clicking on an email."),(0,i.kt)("h3",{id:"journeys-enhancements"},"Journeys, enhancements"),(0,i.kt)("p",null,"We\u2019re adding more advanced options to Journeys to direct customers into the right funnel. We\u2019re adding better ways to test and validate the Journey before it goes live."),(0,i.kt)("h3",{id:"schema-configuration"},"Schema Configuration"),(0,i.kt)("p",null,"Setting up schema and getting the data right is hard, it\u2019s important, that\u2019s why it\u2019s hard. Let our system interrogate and help you build and manage your data better."),(0,i.kt)("h3",{id:"integrationplatform"},"Integration/Platform"),(0,i.kt)("p",null,"We know you can meet all your marketing needs using the Intilery Platform, but hey, you still have some systems running that are deeply integrated with another platform, don\u2019t worry, we got you covered as we allow you to integrate with other systems directly or through platforms like zapier."))}d.isMDXComponent=!0}}]);