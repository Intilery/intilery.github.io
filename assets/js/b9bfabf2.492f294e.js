"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[3707],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4928:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"sms",title:"SMS Schema",sidebar_label:"SMS"},p=void 0,s={unversionedId:"schema/sms",id:"schema/sms",isDocsHomePage:!1,title:"SMS Schema",description:"SMS sent using the Intilery platform will automatically capture all events described here, if you wish to use a different SMS Provider, you should ensure that the provider can send the required events to the Intilery CDP.",source:"@site/docs/schema/sms.md",sourceDirName:"schema",slug:"/schema/sms",permalink:"/docs/schema/sms",tags:[],version:"current",frontMatter:{id:"sms",title:"SMS Schema",sidebar_label:"SMS"},sidebar:"schema",previous:{title:"Email",permalink:"/docs/schema/email"},next:{title:"Identify",permalink:"/docs/schema/identify"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Events",id:"events",children:[{value:"SMS Sent",id:"sms-sent",children:[]},{value:"SMS Not Sent",id:"sms-not-sent",children:[]},{value:"SMS Delivered",id:"sms-delivered",children:[]}]}],m={toc:d};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SMS sent using the Intilery platform will automatically capture all events described here, if you wish to use a different SMS Provider, you should ensure that the provider can send the required events to the Intilery CDP."),(0,i.kt)("p",null,"The semantic events detailed below represent the ideal for SMS events and what Intilery provides by default; not every SMS tool supports all of these events or all of their properties."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"SMS is sent to a customer and will be attempted to be delivered by a network.\nUsually you can expect an SMS to arrive with the customer in a few seconds,\nhowever, due to connectivity issues, it is possible that the SMS can take up to 3 days\nto arrive before the network will cease trying to send."),(0,i.kt)("p",null,"We raise an ",(0,i.kt)("a",{parentName:"p",href:"#sms-sent"},"SMS Sent")," event on sending the SMS to the networks to\ndeliver the message, and based on their feedback of delivery we will raise an\n",(0,i.kt)("a",{parentName:"p",href:"#sms-delivered"},"SMS Delivered")," event."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("p",null,"The email category has the following semantic events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sms-sent"},"SMS Sent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sms-not-sent"},"SMS Not Sent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sms-delivered"},"SMS Delivered"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," All events below are automatically sent to the Intilery CDP by the Intilery\nCustomer Engagement platform if Intilery sends the SMS"),(0,i.kt)("h3",{id:"sms-sent"},"SMS Sent"),(0,i.kt)("p",null,"This event should be fired when the SMS server sends the SMS."),(0,i.kt)("h4",{id:"properties"},"Properties"),(0,i.kt)("p",null,"This event supports the following semantic properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sms_id")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"An ID used to identify the SMS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,i.kt)("h4",{id:"context"},"Context"),(0,i.kt)("p",null,"This event supports the following semantic context properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"An associative array about the email\u2019s intended recipient.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context.traits.phone")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s phone number.")))),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "action": "track",\n  "event": "SMS Sent",\n  "context": {\n    "traits": {\n      "phone": "441234567890"\n    }\n  },\n  "properties": {\n    "sms_id": "290184d0-e7ff-4ea6-a5a2-e122abfe49b4",\n    "campaign_id": "testSMS"\n  },\n  "timestamp": "2019-11-12T16:45:24.772Z"\n}\n')),(0,i.kt)("h3",{id:"sms-not-sent"},"SMS Not Sent"),(0,i.kt)("p",null,"When an SMS is triggered by a Journey, but is not sent due to a configuration reason,\nthen we raise an SMS Not Sent event. This could be because the SMS is not\ntransacational and the customer is not subscribed, so the SMS is not sent."),(0,i.kt)("h4",{id:"properties-1"},"Properties"),(0,i.kt)("p",null,"This event supports the following semantic properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sms_id")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"An ID used to identify the SMS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,i.kt)("h4",{id:"context-1"},"Context"),(0,i.kt)("p",null,"This event supports the following semantic context properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"An associative array about the email\u2019s intended recipient.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context.traits.phone")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s phone number.")))),(0,i.kt)("h5",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "action": "track",\n  "event": "SMS Not Sent",\n  "context": {\n    "traits": {\n      "phone": "441234567890"\n    }\n  },\n  "properties": {\n    "sms_id": "75abe112-0702-4908-bcb7-7c009d0d8c45",\n    "campaign_id": "WDGOOGRV"\n  },\n  "timestamp": "2021-05-24T08:01:17.231Z"\n}\n\n')),(0,i.kt)("h3",{id:"sms-delivered"},"SMS Delivered"),(0,i.kt)("p",null,"This event should be fired when the receiving SMS provider confirms receipt of the SMS."),(0,i.kt)("h4",{id:"properties-2"},"Properties"),(0,i.kt)("p",null,"This event supports the following semantic properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sms_id")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"An ID used to identify the SMS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"campaign_id")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"An id used to identify a campaign")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"campaign_name")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"A name used to identify a campaign")))),(0,i.kt)("h4",{id:"context-2"},"Context"),(0,i.kt)("p",null,"This event supports the following semantic context properties:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context.traits")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"An associative array about the email\u2019s intended recipient.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"context.traits.phone")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The intended recipient\u2019s phone number.")))),(0,i.kt)("h5",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "019mr8mf4r",\n  "action": "track",\n  "event": "SMS Delivered",\n  "context": {\n    "traits": {\n      "phone": "441234567890"\n    }\n  },\n  "properties": {\n    "sms_id": "290184d0-e7ff-4ea6-a5a2-e122abfe49b4",\n    "campaign_id": "testSMS"\n  },\n  "timestamp": "2019-11-12T16:49:02.813Z"\n}\n')))}u.isMDXComponent=!0}}]);