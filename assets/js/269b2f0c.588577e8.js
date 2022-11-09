(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[7730],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8818:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={id:"contents",title:"Contents",sidebar_label:"Contents"},l=void 0,c={unversionedId:"guides/contents",id:"guides/contents",isDocsHomePage:!1,title:"Contents",description:"How to use these docs",source:"@site/docs/guides/contents.md",sourceDirName:"guides",slug:"/guides/contents",permalink:"/docs/guides/contents",version:"current",frontMatter:{id:"contents",title:"Contents",sidebar_label:"Contents"},sidebar:"guides",next:{title:"Simple Integration",permalink:"/docs/guides/simple"}},d=[{value:"How to use these docs",id:"how-to-use-these-docs",children:[]},{value:"What Is Intilery?",id:"what-is-intilery",children:[]},{value:"What does it do?",id:"what-does-it-do",children:[]},{value:"How does Intilery work?",id:"how-does-intilery-work",children:[{value:"Intilery Messages",id:"intilery-messages",children:[]},{value:"Anatomy of an Intilery message",id:"anatomy-of-an-intilery-message",children:[]}]},{value:"Where you can track",id:"where-you-can-track",children:[]},{value:"The Intilery Methods",id:"the-intilery-methods",children:[]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-use-these-docs"},"How to use these docs"),(0,o.kt)("p",null,"These docs are aimed at those who are integrating Intilery into their marketing stack and will give you a guide to getting started, what you need to prepare to make sure you can build the best customer engagement automations for your business. "),(0,o.kt)("h2",{id:"what-is-intilery"},"What Is Intilery?"),(0,o.kt)("p",null,"Intilery is a modern Customer Engagement Platform, combining a Customer Data Platform, Single Customer View, Dynamic Content, Audiences, Journeys and Campaign delivery, which means that we provide a platform that simplifies the collecting and using of data from customers of your digital (and offline) properties (websites, apps, EPOs, telematics, policy systems, etc). With Intilery , you can collect, transform, utilise, and send first-party customer data in a GDPR complaint we, with privacy at the heart of what we do. We simplify the process of collecting data and using it effectively, allowing you to spend more time using your data, and less time trying to format, transport and collect it."),(0,o.kt)("p",null,"You can also enrich the customer data you collect by connecting data from your other tools and integrations, and then aggregate it to monitor performance, inform decision-making processes, and create uniquely customized user experiences."),(0,o.kt)("h2",{id:"what-does-it-do"},"What does it do?"),(0,o.kt)("p",null,"In its very simplest form, Intilery generates messages about what\u2019s happening in your site or app, then translates the content of those messages into different formats for use by the products within the Intilery platform (email, journeys, audiences etc.). The Intilery servers also archive a copy of the data to build up the Intilery Single Customer View."),(0,o.kt)("h2",{id:"how-does-intilery-work"},"How does Intilery work?"),(0,o.kt)("p",null,"Intilery's libraries generate and send messages to our tracking API in JSON format. We provide a standard structure for the basic API calls, along with a recommended JSON structure (also known as the \u2018Schema\u2019) that helps keep the most important parts of your data consistent, while allowing great flexibility in what other information you collect and where."),(0,o.kt)("h3",{id:"intilery-messages"},"Intilery Messages"),(0,o.kt)("p",null,"When you implement Intilery, you add our code to your website, app, or server, which generates messages based on specific triggers you define. At its very simplest, this code can be a snippet that you copy and paste into the HTML of a website to track page views. It can also be as complex as Intilery calls embedded in a React mobile app to send messages when the app is opened or closed, when the user performs different actions, or when time based conditions are met (for example \u201cticket reservation expired\u201d or \u201ccart abandoned after 2 hours\u201d)."),(0,o.kt)("p",null,"Messages can be sent using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"Website Tag")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api"},"REST API")),(0,o.kt)("h3",{id:"anatomy-of-an-intilery-message"},"Anatomy of an Intilery message"),(0,o.kt)("p",null,"The most basic Intilery message requires only a ",(0,o.kt)("inlineCode",{parentName:"p"},"userID")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymousID"),"; all other fields are optional to allow for maximum flexibility. However, a normal Intilery message has three main parts: the ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/common"},"common fields"),", the ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/common#context"},"\u201ccontext\u201d object"),", and the properties (if it\u2019s an event) or traits (if it\u2019s an object)."),(0,o.kt)("p",null,"The common fields include information specific to how the call was generated, like the timestamp and library name and version. The fields in the context object are usually generated by the library, and include information about the environment in which the call was generated: page path, user agent, OS, locale settings, etc. The properties and traits are optional and are where you customize the information you want to collect for your implementation."),(0,o.kt)("h2",{id:"where-you-can-track"},"Where you can track"),(0,o.kt)("p",null,"Intilery supports several ways to implement tracking. The two most common are to use ",(0,o.kt)("em",{parentName:"p"},"device-based")," or ",(0,o.kt)("em",{parentName:"p"},"server-based")," libraries. You can use Intilery device-based libraries, such as JavaScript, iOS, and Android (iOS and Android comming soon), to make calls on users\u2019 browsers or mobile devices. You can also track data server side by calling the Intilery REST API."),(0,o.kt)("h2",{id:"the-intilery-methods"},"The Intilery Methods"),(0,o.kt)("p",null,"The Intilery libraries generate messages about what happens on your interface, translate those messages into different formats for use by destinations, and transmit the messages to those tools."),(0,o.kt)("p",null,"There are several ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/contents"},"tracking API methods"),", which can be called to generate messages. The four most important methods are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/schema/identify"},"Identify"),": who is the user?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/schema/page/"},"Page")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/schema/screen"},"Screen"),": what web page or app screen are they on?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/schema/track"},"Track"),": what are they doing?")),(0,o.kt)("p",null,"Every call shares the same ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/common"},"common fields"),". When you use these methods it allows Intilery to detect specific type of data, and correctly translate it to send it on to the Intilery platform."))}m.isMDXComponent=!0}}]);