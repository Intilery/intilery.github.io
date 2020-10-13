(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,u=s["".concat(b,".").concat(m)]||s[m]||d[m]||i;return a?r.a.createElement(u,c(c({ref:t},o),{},{components:a})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<i;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(101)),b={id:"api1",title:"API Guide",sidebar_label:"API Guide"},c={unversionedId:"apis/api1",id:"apis/api1",isDocsHomePage:!1,title:"API Guide",description:"Intilery Event Tracking API",source:"@site/docs/apis/api1.md",permalink:"/docs/apis/api1",editUrl:"https://github.com/Intilery/intilery.github.io/edit/master/website/docs/apis/api1.md",sidebar_label:"API Guide",sidebar:"apis",next:{title:"API Actions",permalink:"/docs/apis/actions"}},l=[{value:"Endpoint",id:"endpoint",children:[{value:"Headers",id:"headers",children:[]},{value:"Example Request",id:"example-request",children:[]}]},{value:"Permissions",id:"permissions",children:[]},{value:"Limits",id:"limits",children:[]},{value:"Response",id:"response",children:[{value:"Response Error Codes",id:"response-error-codes",children:[]}]},{value:"Screen",id:"screen",children:[]},{value:"Historical Import",id:"historical-import",children:[]},{value:"Batch",id:"batch",children:[]},{value:"Collecting IP Address",id:"collecting-ip-address",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"No events in my debugger",id:"no-events-in-my-debugger",children:[]}]}],o={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"intilery-event-tracking-api"},"Intilery Event Tracking API"),Object(i.b)("p",null,"The Intilery HTTP Tracking API lets you record analytics data from any website or application. The requests hit our servers, and we action this in the Intilery CDP and Customer Engagement Platform"),Object(i.b)("p",null,"Intilery has native for most use cases (Javascript, iOS and Android comming soon)  that are all built for high-performance.e. But sometimes you may want to send to the HTTP API directly\u2014that\u2019s what this reference is for."),Object(i.b)("h2",{id:"endpoint"},"Endpoint"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tracking.intilery.com/track/%7BclientId%7D/%7BaccountId%7D/%7BBRANDID%7D/v1/%7Baction%7D"}),"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/{action}")),Object(i.b)("p",null,"You will be given you clientId, accountIds and brandIDs."),Object(i.b)("p",null,"The endpoint expects a POST of JSON data."),Object(i.b)("p",null,"Authentication is via a shared secret passed in the auth-token header."),Object(i.b)("p",null,"The actions are detailed below."),Object(i.b)("h3",{id:"headers"},"Headers"),Object(i.b)("h4",{id:"content-type"},"Content-Type"),Object(i.b)("p",null,"You must provide a content-type header of application/json"),Object(i.b)("h4",{id:"auth-token"},"Auth-Token"),Object(i.b)("p",null,"Authentication to handled by a shared secret that must be passed in a header"),Object(i.b)("h3",{id:"example-request"},"Example Request"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl "https://tracking.intilery.com/track/hea/hea/HEA/v1/{action}" -i -X POST \\ -H "content-type: application/json" \\ -H "auth-token: 1234abcd" \\ -d @event.json\n')),Object(i.b)("h2",{id:"permissions"},"Permissions"),Object(i.b)("p",null,"Your Authentication token will be set with permissions at the Account and Brand level, token\u2019s can be created that have access to all Brands within an Account or a token for each Brand (and account)."),Object(i.b)("h2",{id:"limits"},"Limits"),Object(i.b)("p",null,"The API is set to 100 requests per second with a burst of 500, limit and burst explained ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Token_bucket"}),"here")),Object(i.b)("p",null,"If limits are exceeded you will receive a 429 Error (limit exceeded) response."),Object(i.b)("p",null,"The maximum size of any request is 1mb, exceeding this will return a 413 Error."),Object(i.b)("h2",{id:"response"},"Response"),Object(i.b)("p",null,"The API will respond with the appropriate HTTP response code, along with a body in the form of: -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n    "success": true,\n    "eventId": "7f7211bf-94c8-4bfc-afb2-8a319d045cd6"\n}\n')),Object(i.b)("p",null,"The eventID is a unique ID that is passed to all systems within the platform, this eventID can be used to query the status of the request (event) and receive any errors that occur"),Object(i.b)("h3",{id:"response-error-codes"},"Response Error Codes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"403"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"No Token Supplied"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"403"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Token Not Authorised (for the Account/Brand you are trying to access)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"429"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rate limit exceeded (there is a limit of 100 request/second, with a burst to 500)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"413"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Request to large (there is a maximum size of 6Mb for a request)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"502"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API returned an invalid response")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"503"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API Unavailable")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"504"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"API timed out")))),Object(i.b)("h1",{id:"identify-action"},"Identify Action"),Object(i.b)("p",null,"identify lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them."),Object(i.b)("p",null,"We recommend calling identify a single time when the user\u2019s account is first created, and only identifying again later when their traits change."),Object(i.b)("p",null,"POST ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tracking.intilery.com/track/%7BclientId%7D/%7BaccountId%7D/%7BBRANDID%7D/v1/identify"}),"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/identify")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "userId": "123456",\n    "event":"identify",\n    "traits": {\n        firstName: \'Joe\',\n        lastName: \'Bloggs\',\n        email: \'joe.bloggs@example.com\',\n        "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n  },  \n  "context": {\n    "ip": "24.5.68.47"\n  },\n  "timestamp": "2019-11-18T13:30:11.444Z" \n }\n')),Object(i.b)("p",null,"This call is identifying the user by their unique User ID (the one you know him by in your database) and setting their traits (attributes) with the values supplied."),Object(i.b)("p",null,"Traits can be any valid JSON."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"userId")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"required")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the user in your database"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"event")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"must be \u201c",Object(i.b)("strong",{parentName:"td"},"identify"),"\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"traits")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Free-form dictionary of traits of the user, like email or firstName or an object like address")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"timestamp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601 UTC Timestamp")," (e.g. 2019-11-18T13:30:11.444Z)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"context")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like ip address or locale")))),Object(i.b)("h1",{id:"track-action"},"Track Action"),Object(i.b)("p",null,"track lets you record the actions your users perform, record analytics for them or issue commands. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties."),Object(i.b)("p",null,"You\u2019ll want to track events that are indicators of success for your site, like registered, item purchased or logged in."),Object(i.b)("p",null,"To get started, we recommend tracking just a few important events. You can always add more later!"),Object(i.b)("p",null,"POST ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tracking.intilery.com/track/%7BclientID%7D/%7Baccountid%7D/%7BBRANDID%7D/v1/track"}),"https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/track")),Object(i.b)("p",null,"Example added to basket event"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "userId":"ABC/123",  \n    "event":"Product Added",\n    "context":{\n        "page":{\n            "path":"/simplygosimplygo-pure-inulin/p-19868604-44086200",\n            "referrer":"",\n            "search":"",\n            "title":"Simplygo/simplygo-pure-inulin | Fruugo",\n            "url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200"\n        },\n        "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"\n    },\n    "properties":{\n        "name":"Simplygo/simplygo-pure-inulin",\n        "product_id":"p-19868604-44086200",\n        "price":"11.99",\n        "cart_id":"1234",\n        "image_url":"https://img.fruugo.com/product/3/55/98531553_max.jpg",\n        "quantity":"1",\n        "url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200",\n        "currency":"GBP"\n    },\n    "timestamp":"2019-11-28T14:31:58.596Z"\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"userId")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"required")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the user in your database"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"event")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the action that a user has performed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"timestamp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601 UTC Timestamp")," (e.g. 2019-11-18T13:30:11.444Z) for then the event happened")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"properties")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Free-form dictionary of properties of the event, like price or sku")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"context")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like page or userAgent")))),Object(i.b)("p",null,"The track endpoint can also be used to pass specific ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./actions"}),"Track Action Commands"),"  to trigger campaign sends."),Object(i.b)("h1",{id:"page-action"},"Page Action"),Object(i.b)("p",null,"The page action lets you record page views on your website, along with optional extra information about the page being viewed. The JavaScript tag will raise a page event whenever a new page is loaded."),Object(i.b)("p",null,"POST ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tracking.intilery.com/track/%7BclientID%7D/%7Baccountid%7D/%7BBRANDID%7D/v1/page"}),"https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/page")),Object(i.b)("p",null,"Example page call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "event":"page", "userId":"ABC/123",\n    "anonymousId":"14834fb6-e82e-47f9-a7e0-892c45064d89",\n    "context":{\n        "page":{\n            "path":"/simplygosimplygo-pure-inulin/p-19868604-44086200",\n            "referrer":"",\n            "search":"",\n            "title":"Simplygo/simplygo-pure-inulin | Fruugo",\n            "url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200" \n        }, \n    "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",\n    "properties":{\n        "path":"/simplygosimplygo-pure-inulin/p-19868604-44086200",\n        "referrer":"", \n        "search":"", \n        "title":"Simplygo/simplygo-pure-inulin | Fruugo",\n        "url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200" \n    },\n    "timestamp":"2019-11-28T14:50:16.519Z" \n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"userId")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"optional*"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the user in your database. If not known, you must pass anonymousId"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"anonymousId")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A pseudo-unique substitute for a userId, for cases when you don't know who the customer is at present.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"event")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"must be \u201c",Object(i.b)("strong",{parentName:"td"},"page"),"\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"timestamp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"required")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601 UTC Timestamp")," (e.g. 2019-11-18T13:30:11.444Z) for then the event happened")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"properties")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Free-form dictionary of properties of the event, like price or sku")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"context")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optional"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like page or userAgent")))),Object(i.b)("h2",{id:"screen"},"Screen"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../schema/screen"}),"screen")," method let you record whenever a user sees a screen of your mobile app."),Object(i.b)("p",null,"You\u2019ll want to send the ",Object(i.b)("inlineCode",{parentName:"p"},"screen")," message whenever a user requests a page of your app."),Object(i.b)("p",null,"Example ",Object(i.b)("inlineCode",{parentName:"p"},"screen")," call:"),Object(i.b)("p",null,"POST ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tracking.intilery.com/track/%7BclientID%7D/%7Baccountid%7D/%7BBRANDID%7D/v1/screen"}),"https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/screen")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "userId": "019mr8mf4r",\n  "name": "Home",\n  "timestamp": "2012-12-02T00:31:29.738Z"\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"screen")," call has the following fields:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"anonymousId")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional if userID is set instead")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A pseudo-unique substitute for a User ID, for cases when you don\u2019t have an absolutely unique identifier. A userId or an anonymousId is required. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../schema/identify#identities"}),"Identities docs")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"context")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like ",Object(i.b)("inlineCode",{parentName:"td"},"ip")," address or ",Object(i.b)("inlineCode",{parentName:"td"},"locale")," See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../schema/common#context"}),"Context field docs")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the screen See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../schema/screen#name"}),"Name field docs")," for more details.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"properties")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Free-form dictionary of properties of the screen, like ",Object(i.b)("inlineCode",{parentName:"td"},"name")," See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../schema/screen#properties"}),"Properties field docs")," for a list of reserved property names.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"timestamp")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timestamp when the message itself took place, defaulted to the current time by the Intilery Tracking API, as a ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601")," format date string. If the event just happened, leave it out and we\u2019ll use the server\u2019s time. If you\u2019re importing data from the past, make sure you to provide a ",Object(i.b)("inlineCode",{parentName:"td"},"timestamp"),".See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../schema/common#timestamps"}),"Timestamps fields docs")," for more detail.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"userId")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional if anonymousID is set instead")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the user in your database. A userId or an anonymousId is required. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../schema/identify#identities"}),"Identities docs")," for more details.")))),Object(i.b)("p",null,"Find details on the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"screen")," payload")," in our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../schema/screen"}),"Spec"),"."),Object(i.b)("h2",{id:"historical-import"},"Historical Import"),Object(i.b)("p",null,"You can import historical data by adding the ",Object(i.b)("inlineCode",{parentName:"p"},"timestamp")," argument to any of your method calls. This can be helpful if you\u2019ve just switched to Intilery."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," If you\u2019re tracking things that are happening right now, leave out the ",Object(i.b)("inlineCode",{parentName:"p"},"timestamp")," and our servers will timestamp the requests for you."),Object(i.b)("h2",{id:"batch"},"Batch"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"batch")," method lets you send a series of ",Object(i.b)("inlineCode",{parentName:"p"},"identify"),", ",Object(i.b)("inlineCode",{parentName:"p"},"group"),", ",Object(i.b)("inlineCode",{parentName:"p"},"track"),", ",Object(i.b)("inlineCode",{parentName:"p"},"page")," and ",Object(i.b)("inlineCode",{parentName:"p"},"screen")," requests in a single batch, saving on outbound requests."),Object(i.b)("p",null,"There is a maximum of ",Object(i.b)("inlineCode",{parentName:"p"},"1mb")," per batch request and ",Object(i.b)("inlineCode",{parentName:"p"},"32KB")," per call."),Object(i.b)("p",null,"Here\u2019s the what the ",Object(i.b)("inlineCode",{parentName:"p"},"batch")," request signature looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'POST https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/batch\n{\n  "batch": [\n    {\n      "type": "identify",\n      "userId": "019mr8mf4r",\n      "traits": {\n        "email": "jake@yahoo.com",\n        "name": "Jake Peterson",\n        "age": 26\n      },\n      "timestamp": "2012-12-02T00:30:08.276Z"\n    },\n    {\n      "type": "track",\n      "userId": "019mr8mf4r",\n      "event": "Song Played",\n      "properties": {\n        "name": "Fallin for You",\n        "artist": "Dierks Bentley"\n      },\n      "timestamp": "2012-12-02T00:30:12.984Z"\n    },\n    {\n      "type": "identify",\n      "userId": "971mj8mk7p",\n      "traits": {\n        "email": "cindy@example.com",\n        "name": "Cindy Gonzalez",\n        "age": 23\n      },\n      "timestamp": "2015-2-02T00:30:08.276Z"\n    },\n    {\n      "type": "track",\n      "userId": "971mj8mk7p",\n      "event": "Song Played",\n      "properties": {\n        "name": "Get Right",\n        "artist": "Jennifer Lopez"\n      },\n      "timestamp": "2015-2-02T00:30:12.984Z"\n    }\n  ],\n  "context": {\n    "device": {\n      "type": "phone",\n      "name": "Apple iPhone 6"\n    }\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"batch")," ",Object(i.b)("em",{parentName:"td"},"Array")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An array of ",Object(i.b)("inlineCode",{parentName:"td"},"identify"),", ",Object(i.b)("inlineCode",{parentName:"td"},"group"),", ",Object(i.b)("inlineCode",{parentName:"td"},"track"),", ",Object(i.b)("inlineCode",{parentName:"td"},"page")," and ",Object(i.b)("inlineCode",{parentName:"td"},"screen")," method calls. Each call ",Object(i.b)("strong",{parentName:"td"},"must")," have an ",Object(i.b)("inlineCode",{parentName:"td"},"type")," property with a valid method name."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"context")," ",Object(i.b)("em",{parentName:"td"},"Object, optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The same as ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../schema/common#context"}),"Context")," for other calls, but it will be merged with any context inside each of the items in the batch."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h2",{id:"collecting-ip-address"},"Collecting IP Address"),Object(i.b)("p",null,"When sending a HTTP call from a user\u2019s device, you can collect the IP address by setting ",Object(i.b)("inlineCode",{parentName:"p"},"context.direct")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("p",null,"If you\u2019re having trouble we have a few tips that help common problems."),Object(i.b)("h3",{id:"no-events-in-my-debugger"},"No events in my debugger"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Double check that you\u2019ve set up the library correctly."),Object(i.b)("li",{parentName:"ol"},"Make sure that you\u2019re calling one of our API methods once the library is successfully installed\u2014",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./api1/#identify"}),Object(i.b)("inlineCode",{parentName:"a"},"identify")),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"./api1#track"}),Object(i.b)("inlineCode",{parentName:"a"},"track")),", etc.")))}p.isMDXComponent=!0}}]);