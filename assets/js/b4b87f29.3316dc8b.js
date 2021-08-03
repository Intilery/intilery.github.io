(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[5216],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1635:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"commands",title:"API Commands",sidebar_label:"Commands"},l=void 0,s={unversionedId:"apis/commands",id:"apis/commands",isDocsHomePage:!1,title:"API Commands",description:"The track action on the API Event Endpoint will accept a number of event values that act as commands to trigger",source:"@site/docs/apis/commands.md",sourceDirName:"apis",slug:"/apis/commands",permalink:"/docs/apis/commands",version:"current",frontMatter:{id:"commands",title:"API Commands",sidebar_label:"Commands"},sidebar:"apis",previous:{title:"API Guide",permalink:"/docs/apis/api"},next:{title:"Events",permalink:"/docs/apis/events"}},p=[{value:"Commands",id:"commands",children:[]},{value:"Event Data for send_ commands",id:"event-data-for-send_-commands",children:[{value:"Example",id:"example",children:[]}]},{value:"Event Data for start_journey command",id:"event-data-for-start_journey-command",children:[{value:"Example",id:"example-1",children:[]}]}],d={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"track action")," on the API Event Endpoint will accept a number of ",(0,o.kt)("strong",{parentName:"p"},"event")," values that act as ",(0,o.kt)("strong",{parentName:"p"},"commands")," to trigger\nthe sending of a specific asset. In these cases there is no need to pass a separate properties section, as every value under\nthe root of the object forms the start of data for use as a merge tag in the campaign, though the properties of the\ncustomer are available as usual in the merge tags."),(0,o.kt)("p",null,"Each event must provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"assetId")," property to identify the asset code of the asset to be sent."),(0,o.kt)("p",null,"When the asset is sent, the current state of the ",(0,o.kt)("strong",{parentName:"p"},"customer")," is added by the Intilery CDP as a root merge tag,\nso does not need to be passed in on the track event."),(0,o.kt)("p",null,"Note that you can only send to a ",(0,o.kt)("strong",{parentName:"p"},"customer")," who has been ",(0,o.kt)("a",{parentName:"p",href:"./api#identify-action"},"identified")," via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api"},"HTTP API"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/reference#identify"},"identified")," via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"Analytics.js tag")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"event")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"action")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"send_email")),(0,o.kt)("td",{parentName:"tr",align:"left"},"send the specified email")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"send_sms")),(0,o.kt)("td",{parentName:"tr",align:"left"},"send the specified sms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"send_print")),(0,o.kt)("td",{parentName:"tr",align:"left"},"send the specified letter")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"start_journey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"start a journey")))),(0,o.kt)("h2",{id:"event-data-for-send_-commands"},"Event Data for send_ commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"field")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"required")),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"userId")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifier for the user in your database")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"event")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required")),(0,o.kt)("td",{parentName:"tr",align:null},"One of the commands listed above.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"assetId")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required")),(0,o.kt)("td",{parentName:"tr",align:null},"The code of the Campaign (Asset)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"timestamp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601 UTC Timestamp")," (e.g. 2019-11-18T13:30:11.444Z) for then the event happened")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<anything else>")),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Any valid JSON that is then available for use in the asset using merge tags")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "userId": "ABC/123",  \n    "event": "SEND_SMS",  \n    "assetId": "202007-B-AbandonedBooking",  \n    "timestamp": "2019-11-18T13:30:12.984Z",  \n    "bookingId" : "1234" \n}\n')),(0,o.kt)("h2",{id:"event-data-for-start_journey-command"},"Event Data for start_journey command"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"field")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"required")),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"userId")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required")),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifier for the user in your database")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"event")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"start_journey"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"properties.journeyIdToTrigger")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required")),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the Journey to start. You can get this from the URL when you view a journey, e.g. if the URL is: ",(0,o.kt)("inlineCode",{parentName:"td"},"/journeys/view/6046429d73096e3b2dca973d/1"),", then the journey ID is ",(0,o.kt)("inlineCode",{parentName:"td"},"6046429d73096e3b2dca973d"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"timestamp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601 UTC Timestamp")," (e.g. 2019-11-18T13:30:11.444Z) for then the event happened")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<anything else>")),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},"Any valid JSON that is then available for use in the journey or for forwarding on to assets when sending a campaign")))),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "userId": "ABC/123",  \n    "event": "start_journey",\n    "properties": {\n      "journeyIdToTrigger": "6046429d73096e3b2dca973d"\n    }\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:")),' When looking at events or customers in the Intilery platform, you may see references to "customerId", this is the internal unique ID for the customer that Intilery assigns. This ID is for Intilery use only.'))}m.isMDXComponent=!0}}]);