(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[9891],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(u,".").concat(m)]||h[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2082:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={},p="Mobile App Integration",u={unversionedId:"app/main",id:"app/main",isDocsHomePage:!1,title:"Mobile App Integration",description:"Create a Tracking Plan",source:"@site/docs/app/main.md",sourceDirName:"app",slug:"/app/main",permalink:"/docs/app/main",version:"current",frontMatter:{},sidebar:"app",next:{title:"API For Mobile",permalink:"/docs/app/api"}},c=[{value:"Create a Tracking Plan",id:"create-a-tracking-plan",children:[]},{value:"Integrate Tracking with your App",id:"integrate-tracking-with-your-app",children:[]},{value:"Integrate Push Notifications with your App",id:"integrate-push-notifications-with-your-app",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mobile-app-integration"},"Mobile App Integration"),(0,i.kt)("h2",{id:"create-a-tracking-plan"},"Create a Tracking Plan"),(0,i.kt)("p",null,"Refer to or update your ",(0,i.kt)("a",{parentName:"p",href:"../guides/tracking-plan"},"tracking plan"),". Make sure you\nknow what to track and why. What events will trigger journeys. What data you\nneed for merge tags in campaigns. What traits do you capture about the customer."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"../schema/common"},"Intilery core schema"),". Include the additional lifecycle\nevents from the ",(0,i.kt)("a",{parentName:"p",href:"../schema/app"},"app schema"),". If you are using transactions use\nthe ",(0,i.kt)("a",{parentName:"p",href:"../schema/retail"},"e-commerce schema")," Add your own custom events if\nneeded so you can build audiences and target customers with the right campaigns."),(0,i.kt)("h2",{id:"integrate-tracking-with-your-app"},"Integrate Tracking with your App"),(0,i.kt)("p",null,"We provide native libraries that wrap the Intilery API endpoints with some easy to\nuse track, identify and screen view calls. The libraries are all open source and the\nSDKs queues API calls rather than making a network request for each event\ntracked, to help improve the user\u2019s battery life."),(0,i.kt)("p",null,"Batches are sent either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"when there are 20 or more events in the queue"),(0,i.kt)("li",{parentName:"ul"},"on a scheduled timer, every 30 seconds"),(0,i.kt)("li",{parentName:"ul"},"when the app goes to the background")),(0,i.kt)("p",null,"To limit memory and disk usage, Intilery only queues up to 1000 events.\nWhen the app is terminated, Intilery saves the queue to disk,\nand loads that data again at app launch so there is no data loss."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./ios"},"iOS Native SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./android"},"Android Native SDK"))),(0,i.kt)("p",null,"If you develop your app using ",(0,i.kt)("a",{parentName:"p",href:"https://flutter.dev"},"flutter"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"react-native"),", or another cross-platform development\nkit you can either integrate using the native libraries or build your own\nconnection to the ",(0,i.kt)("a",{parentName:"p",href:"./api"},"API direct"),"."),(0,i.kt)("h2",{id:"integrate-push-notifications-with-your-app"},"Integrate Push Notifications with your App"),(0,i.kt)("p",null,"To send ",(0,i.kt)("a",{parentName:"p",href:"./push"},"push notifications")," to your app, we use\n",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Google Firebase"),"\nas the messaging SDKs."))}s.isMDXComponent=!0}}]);