(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[7721],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3733:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={},s="Push Notifications",l={unversionedId:"app/push",id:"app/push",isDocsHomePage:!1,title:"Push Notifications",description:"We use Google Firebase as the messaging channel",source:"@site/docs/app/push.md",sourceDirName:"app",slug:"/app/push",permalink:"/docs/app/push",version:"current",frontMatter:{},sidebar:"app",previous:{title:"API For Mobile",permalink:"/docs/app/api"},next:{title:"iOS Mobile SDK",permalink:"/docs/app/ios"}},p=[{value:"Managing the FCM Token on the Device",id:"managing-the-fcm-token-on-the-device",children:[]},{value:"Sending the FCM Token to Intilery",id:"sending-the-fcm-token-to-intilery",children:[{value:"Register Push Event",id:"register-push-event",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"push-notifications"},"Push Notifications"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com"},"Google Firebase")," as the messaging channel\nto make it easier to integrate push across multiple mobile platforms."),(0,o.kt)("p",null,"You will need to register your app(s) with ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase")),(0,o.kt)("p",null,"In order to send messages from Intilery to your app you should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"register your app with ",(0,o.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/"},"Firebase")),(0,o.kt)("li",{parentName:"ul"},"add the Cloud Messaging Client to your app:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cloud-messaging/ios/client"},"iOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cloud-messaging/android/client"},"Android"))))),(0,o.kt)("p",null,"You then supply Intilery with the FCM key to enable push notifications to be sent."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A customer can have more than one device, but the device is only every linked to\none customer. If a customer has more than one device, when a push campaign is\nscheduled it is sent to all the customer's devices."))),(0,o.kt)("h2",{id:"managing-the-fcm-token-on-the-device"},"Managing the FCM Token on the Device"),(0,o.kt)("p",null,"To ensure that your app audience is up-to-date you need to make sure your ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/manage-tokens#ensuring-registration-token-freshness"},"FCM\ntoken is refreshed regularly"),"."),(0,o.kt)("p",null,"Intilery will remove stale tokens that are more than 2 months old.\nYou should configure your app to refresh the FCM token once every 30 - 45 days."),(0,o.kt)("p",null,"When we attempt to send a push message, if we get an error back from firebase\nindicating that the token is no longer valid, the token will be removed by Intilery."),(0,o.kt)("h2",{id:"sending-the-fcm-token-to-intilery"},"Sending the FCM Token to Intilery"),(0,o.kt)("p",null,"When a user first installs the app, you can ask them to accept push messages."),(0,o.kt)("p",null,"If the user accepts, send a ",(0,o.kt)("inlineCode",{parentName:"p"},"Register Push")," event to Intilery. As the customer is\nnot signed in at this point, there will be no ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),", so use the FCM generated\n",(0,o.kt)("inlineCode",{parentName:"p"},"deviceId"),"."),(0,o.kt)("p",null,"Continue to use the FCM Device ID as the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," in subsequent events."),(0,o.kt)("p",null,"When a user does ",(0,o.kt)("strong",{parentName:"p"},"not enable push"),", they are anonymous, so send\nevents to Intilery with only an ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymousId"),". You can use the FCM Device ID as\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"anonymousId"),"."),(0,o.kt)("p",null,"When a customer Signs In or Registers, send an ",(0,o.kt)("inlineCode",{parentName:"p"},"Identify")," as you normally would\nto identify the customer, then if push is enabled send a ",(0,o.kt)("inlineCode",{parentName:"p"},"Register Push")," with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," matching your unique user identifier."),(0,o.kt)("h3",{id:"register-push-event"},"Register Push Event"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Register Push")," event has these properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"deviceId")," from firebase to uniquely identify the device"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"fcmToken")," from firebase enabling push notifications"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"deviceType")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"iOS")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Android")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Web"))),(0,o.kt)("p",null,"If the user has signed in or registered, the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," will be your unique customer\nidentifier. If they haven't, but have push enabled, then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"deviceId"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "userId": "<deviceId|userId>",\n   "event": "register push",\n   "type": "track",\n   "properties": {\n      "deviceId":"<deviceId>",\n      "fcmToken":"<fcmToken>",\n      "deviceType":"iOS|Android|Web"\n   },\n   "writeKey": "<writeKey>"\n}\n')))}c.isMDXComponent=!0}}]);