(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[5611],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=o(n),k=r,N=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3369:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"common",title:"Common Fields",sidebar_label:"Common"},d={unversionedId:"schema/common",id:"schema/common",isDocsHomePage:!1,title:"Common Fields",description:"In the Intilery Schema all the API calls have a common structure, and a few common fields.",source:"@site/docs/schema/common.md",sourceDirName:"schema",slug:"/schema/common",permalink:"/docs/schema/common",version:"current",sidebar_label:"Common",frontMatter:{id:"common",title:"Common Fields",sidebar_label:"Common"},sidebar:"schema",previous:{title:"Intilery Default Schema",permalink:"/docs/schema/intilery"},next:{title:"Email Schema",permalink:"/docs/schema/email"}},m=[{value:"Structure",id:"structure",children:[]},{value:"Context",id:"context",children:[]},{value:"Context Fields Automatically Collected",id:"context-fields-automatically-collected",children:[]},{value:"Timestamps",id:"timestamps",children:[{value:"Timestamp Overview",id:"timestamp-overview",children:[]},{value:"originalTimestamp",id:"originaltimestamp",children:[]},{value:"sentAt",id:"sentat",children:[]},{value:"receivedAt",id:"receivedat",children:[]},{value:"timestamp",id:"timestamp",children:[]}]}],o={toc:m};function p(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In the Intilery ",(0,l.kt)("a",{parentName:"p",href:"contents"},"Schema")," all the ",(0,l.kt)("a",{parentName:"p",href:"/docs/apis/api"},"API calls")," have a common structure, and a few common fields."),(0,l.kt)("p",null,"Not all fields are required for all events, the required fields for each event are detailed in the corrisponding event schema"),(0,l.kt)("h2",{id:"structure"},"Structure"),(0,l.kt)("p",null,"Every API call has the same core structure and fields. These fields describe user identity, timestamping and mechanical aides like API version."),(0,l.kt)("p",null,"Here\u2019s an example of these common fields in raw JSON:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "507f191e810c19729de860ea",\n  "context": {\n    "active": true,\n    "app": {\n      "name": "InitechGlobal",\n      "version": "545",\n      "build": "3.0.1.545",\n      "namespace": "com.production.intilery"\n    },\n    "campaign": {\n      "name": "TPS Innovation Newsletter",\n      "source": "Newsletter",\n      "medium": "email",\n      "term": "tps reports",\n      "content": "image link"\n    },\n    "device": {\n      "id": "B5372DB0-C21E-11E4-8DFC-AA07A5B093DB",\n      "advertisingId": "7A3CBEA0-BDF5-11E4-8DFC-AA07A5B093DB",\n      "adTrackingEnabled": true,\n      "manufacturer": "Apple",\n      "model": "iPhone7,2",\n      "name": "maguro",\n      "type": "ios",\n      "token": "ff15bc0c20c4aa6cd50854ff165fd265c838e5405bfeb9571066395b8c9da449"\n    },\n    "ip": "8.8.8.8",\n    "library": {\n      "name": "analytics.js",\n      "version": "2.11.1"\n    },\n    "locale": "en-US",\n    "location": {\n      "city": "San Francisco",\n      "country": "United States",\n      "latitude": 40.2964197,\n      "longitude": -76.9411617,\n      "speed": 0\n    },\n    "network": {\n      "bluetooth": false,\n      "carrier": "T-Mobile US",\n      "cellular": true,\n      "wifi": false\n    },\n    "os": {\n      "name": "iPhone OS",\n      "version": "8.1.3"\n    },\n    "page": {\n      "path": "/docs/",\n      "referrer": "",\n      "search": "",\n      "title": "Analytics Academy",\n      "url": "https://intilery.com/docs/"\n    },\n    "referrer": {\n      "id": "ABCD582CDEFFFF01919",\n      "type": "dataxu"\n    },\n    "screen": {\n      "width": 320,\n      "height": 568,\n      "density": 2\n    },\n    "groupId": "12345",\n    "timezone": "Europe/Amsterdam",\n    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"\n  },\n  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",\n  "receivedAt": "2015-12-10T04:08:31.909Z",\n  "sentAt": "2015-12-10T04:08:31.581Z",\n  "timestamp": "2015-12-10T04:08:31.905Z",\n  "type": "track",\n  "userId": "97980cfea0067",\n  "version": 2\n}\n')),(0,l.kt)("p",null,"In more detail these common fields for every API call are:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"anonymousId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"optional if userID is set instead")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A pseudo-unique substitute for a User ID, for cases when you don\u2019t have an absolutely unique identifier. A userId or an anonymousId is required. See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/schema/identify#identities"},"Identities docs")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"context")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like ",(0,l.kt)("inlineCode",{parentName:"td"},"ip")," address or ",(0,l.kt)("inlineCode",{parentName:"td"},"locale")," See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/schema/common#context"},"Context field docs")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"messageId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"implicit")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Automatically collected by Intilery, a unique identifier for each message that lets you find an individual message across the API.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"receivedAt")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"implicit")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Automatically set by Intilery, the timestamp of when a message is received by Intilery It is an ",(0,l.kt)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," date string. See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/schema/common#timestamps"},"Timestamps fields docs")," for more detail.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sentAt")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp of when a message is sent to Intilery, used for clock skew correction It is set automatically by the Intilery tracking libraries. It is an ",(0,l.kt)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," date string. See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/schema/common#timestamps"},"Timestamps fields docs")," for more detail.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp when the message itself took place, defaulted to the current time by the Intilery Tracking API, as a ",(0,l.kt)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," format date string. If the event just happened, leave it out and we\u2019ll use the server\u2019s time. If you\u2019re importing data from the past, make sure you to provide a ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp"),".See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/schema/common#timestamps"},"Timestamps fields docs")," for more detail.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"implicit")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of message, corresponding to the API method: ",(0,l.kt)("inlineCode",{parentName:"td"},"'identify'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'group'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'track'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'page'"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"'screen'")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"'alias'"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"userId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"optional if anonymousID is set instead")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for the user in your database. A userId or an anonymousId is required. See the ",(0,l.kt)("a",{parentName:"td",href:"/docs/schema/identify#identities"},"Identities docs")," for more details.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"version")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"implicit")),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Version of the Tracking API that received the message, automatically set by Intilery.")))),(0,l.kt)("p",null,"Beyond this common structure, each API call adds a few specialized top-level fields."),(0,l.kt)("h2",{id:"context"},"Context"),(0,l.kt)("p",null,"Context is a dictionary of extra information that provides useful context about a datapoint, for example the user\u2019s ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," address or ",(0,l.kt)("inlineCode",{parentName:"p"},"locale"),". Context is a complete and explicit specification, so properties outside the spec are ignored. You should ",(0,l.kt)("strong",{parentName:"p"},"only use")," Context fields for their intended meaning."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Field")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"active")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether a user is active  This is usually used to flag an ",(0,l.kt)("inlineCode",{parentName:"td"},".identify()")," call to just update the traits but not \u201clast seen.\u201d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"app")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"dictionary of information about the current application, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"version")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"build"),".  This is collected automatically from our mobile libraries when possible.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"campaign")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the campaign that resulted in the API call, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"source"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"medium"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"term"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"content"),", and any other custom UTM parameter.  This maps directly to the common UTM campaign parameters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"device")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the device, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"advertisingId"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"manufacturer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"model"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"version"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ip")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Current user\u2019s IP address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"library")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the library making the requests to the API, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"version"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"locale")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Locale string for the current user, for example ",(0,l.kt)("inlineCode",{parentName:"td"},"en-US"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"location")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the user\u2019s current location, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"city"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"country"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"latitude"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"longitude"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"region")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"speed"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"network")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the current network connection, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"bluetooth"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"carrier"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"cellular")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"wifi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"os")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the operating system, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"version"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"page")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the current page in the browser, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"path"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"referrer"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"search"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"title")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"url"),". This is automatically collected by ",(0,l.kt)("a",{parentName:"td",href:"/docs/tag/reference#context--traits"},"Analytics.js"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"referrer")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the way the user was referred to the website or app, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"type"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"url")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"link"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"screen")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of information about the device\u2019s screen, containing ",(0,l.kt)("inlineCode",{parentName:"td"},"density"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"height")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"width"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timezone")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Timezones are sent as tzdata strings to add user timezone information which might be stripped from the timestamp, for example ",(0,l.kt)("inlineCode",{parentName:"td"},"America/New_York"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Group / Account ID.  This is useful in B2B use cases where you need to attribute your non-group calls to a company or account. It is relied on by several Customer Success and CRM tools.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"traits")),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"Dictionary of ",(0,l.kt)("inlineCode",{parentName:"td"},"traits")," of the current user  This is useful in cases where you need to ",(0,l.kt)("inlineCode",{parentName:"td"},"track")," an event, but also associate information from a previous ",(0,l.kt)("inlineCode",{parentName:"td"},"identify")," call. You should fill this object the same way you would fill traits in an ",(0,l.kt)("a",{parentName:"td",href:"/docs/schema/identify/#traits"},"identify call"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"userAgent")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"User agent of the device making the request")))),(0,l.kt)("h2",{id:"context-fields-automatically-collected"},"Context Fields Automatically Collected"),(0,l.kt)("p",null,"Below is a chart that shows you which context variables are populated automatically by our iOS, Android and analytics.js libraries."),(0,l.kt)("p",null,"Other libraries only collect ",(0,l.kt)("inlineCode",{parentName:"p"},"context.library"),", any other context variables must be sent manually."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Context Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Analytics.js"),(0,l.kt)("th",{parentName:"tr",align:null},"Analytics-ios"),(0,l.kt)("th",{parentName:"tr",align:null},"Analytics-android"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.version"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app.build"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign.name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign.source"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign.medium"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign.term"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign.content"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device.type"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device.id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device.advertisingId"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device.adTrackingEnabled"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device.manufacturer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device.model"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"device.name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"library.name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"library.version"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ip*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location.latitude"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location.longitude"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location.speed"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network.bluetooth"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network.carrier"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network.cellular"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network.wifi"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"os.name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"os.version"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page.path"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page.referrer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page.search"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page.title"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page.url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"screen.density"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"screen.height"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"screen.width"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"traits"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userAgent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timezone"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u221a")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IP Address is not collected by our libraries, but instead filled in by our servers when it receives a message for ",(0,l.kt)("strong",{parentName:"li"},"client side events only"),"."),(0,l.kt)("li",{parentName:"ul"},"Our Android library collects ",(0,l.kt)("inlineCode",{parentName:"li"},"screen.density")," with ",(0,l.kt)("a",{parentName:"li",href:"/docs/schema/common/#context-fields-automatically-collected"},"this method"),".")),(0,l.kt)("h2",{id:"timestamps"},"Timestamps"),(0,l.kt)("p",null,"Every API call has four timestamps, ",(0,l.kt)("inlineCode",{parentName:"p"},"originalTimestamp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sentAt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"receivedAt.")," They\u2019re used for very different purposes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"All timestamps are ",(0,l.kt)("a",{parentName:"strong",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," date strings.")),(0,l.kt)("h3",{id:"timestamp-overview"},"Timestamp Overview"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Timestamp")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Calculated")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"originalTimestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"Time on the client device when call was invoked ",(0,l.kt)("strong",{parentName:"td"},"OR")," The ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")," value manually passed in through server-side libraries."),(0,l.kt)("td",{parentName:"tr",align:null},"Used by Intilery to calculate ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp"),".  ",(0,l.kt)("strong",{parentName:"td"},"Note:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"originalTimestamp")," is not useful for analysis since it\u2019s not always trustworthy as it can be easily adjusted and affected by clock skew.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sentAt")),(0,l.kt)("td",{parentName:"tr",align:null},"Time on client device when call was sent ",(0,l.kt)("strong",{parentName:"td"},"OR")," ",(0,l.kt)("inlineCode",{parentName:"td"},"sentAt")," value manually passed in."),(0,l.kt)("td",{parentName:"tr",align:null},"Used by Intilery to calculate ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp"),".  ",(0,l.kt)("strong",{parentName:"td"},"Note:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"sentAt")," is not useful for analysis since it\u2019s not always trustworthy as it can be easily adjusted and affected by clock skew.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"receivedAt")),(0,l.kt)("td",{parentName:"tr",align:null},"time on Intilery server clock when call was received"),(0,l.kt)("td",{parentName:"tr",align:null},"Used by Intilery to calculate ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamp"),", and used as sort key in Warehouses.  ",(0,l.kt)("strong",{parentName:"td"},"Note:")," For max query speed, ",(0,l.kt)("inlineCode",{parentName:"td"},"receivedAt")," is the recommended timestamp for analysis when chronology does not matter as chronology is not ensured.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculated by Intilery to correct client-device clock skew using the following formula: ",(0,l.kt)("inlineCode",{parentName:"td"},"receivedAt")," - (",(0,l.kt)("inlineCode",{parentName:"td"},"sentAt")," - ",(0,l.kt)("inlineCode",{parentName:"td"},"originalTimestamp"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Note:")," Recommended timestamp for analysis when chronology does matter.")))),(0,l.kt)("h3",{id:"originaltimestamp"},"originalTimestamp"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"originalTimestamp")," tells you when call was invoked on the client device or the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp")," that you manually passed in."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The ",(0,l.kt)("inlineCode",{parentName:"p"},"originalTimestamp")," timestamp is not useful for any analysis since it\u2019s not always trustworthy as it can be easily adjusted and affected by clock skew."),(0,l.kt)("h3",{id:"sentat"},"sentAt"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sentAt")," timestamp specifies the clock time for the client\u2019s device when the network request was made to the Intilery API. For libraries and systems that send batched requests, there can be a long gap between a datapoint\u2019s ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"sentAt"),". Combined with ",(0,l.kt)("inlineCode",{parentName:"p"},"receivedAt"),", we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"sentAt")," to correct the original ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp")," in situations where a user\u2019s device clock cannot be trusted (mobile phones and browsers). The ",(0,l.kt)("inlineCode",{parentName:"p"},"sentAt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"receivedAt")," timestamps are assumed to occur at the same time (maximum a few hundred milliseconds), and therefore the difference is the user\u2019s device clock skew, which can be applied back to correct the ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The ",(0,l.kt)("inlineCode",{parentName:"p"},"sentAt")," timestamp is not useful for any analysis since it\u2019s tainted by user\u2019s clock skew."),(0,l.kt)("h3",{id:"receivedat"},"receivedAt"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"receivedAt")," timestamp is added to incoming messages as soon as they hit our API. It\u2019s used in combination with ",(0,l.kt)("inlineCode",{parentName:"p"},"sentAt")," to correct clock skew, and also to aid with debugging libraries and systems that deliver events in batches."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"receivedAt")," timestamp is most important as the sort key in our Warehouses product. Use this for max query speed when retrieving data from your Warehouse!"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," Chronological order of events is not ensured with ",(0,l.kt)("inlineCode",{parentName:"p"},"receivedAt"),"."),(0,l.kt)("h3",{id:"timestamp"},"timestamp"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp")," timestamp specifies when the datapoint occurred, corrected for client-device clock skew. This is the timestamp that is passed to downstream destinations and used for historical replays. It is important to use this timestamp for importing historical data to the API."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp")," field is settable from our server-side libs or if passing info directly to the HTTP endpoints."))}p.isMDXComponent=!0}}]);