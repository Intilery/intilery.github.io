"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[296],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4094:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={id:"identify",title:"Identify Schema",sidebar_label:"Identify"},o=void 0,p={unversionedId:"schema/identify",id:"schema/identify",isDocsHomePage:!1,title:"Identify Schema",description:"identify lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them like their email, name, etc.",source:"@site/docs/schema/identify.md",sourceDirName:"schema",slug:"/schema/identify",permalink:"/docs/schema/identify",tags:[],version:"current",frontMatter:{id:"identify",title:"Identify Schema",sidebar_label:"Identify"},sidebar:"schema",previous:{title:"SMS",permalink:"/docs/schema/sms"},next:{title:"Track",permalink:"/docs/schema/track"}},d=[{value:"Marketing Preferences",id:"marketing-preferences",children:[]},{value:"Example",id:"example",children:[]},{value:"Identities",id:"identities",children:[{value:"Anonymous ID",id:"anonymous-id",children:[]},{value:"User ID",id:"user-id",children:[]}]},{value:"Traits",id:"traits",children:[{value:"Asynchronous Processing",id:"asynchronous-processing",children:[]},{value:"Should I use Traits or Event Data?",id:"should-i-use-traits-or-event-data",children:[]}]}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"identify")," lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them like their email, name, etc."),(0,i.kt)("p",null,"Our recommendation for when and how often you should call ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After a user registers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You should set the source, medium and campaign traits at this time"))),(0,i.kt)("li",{parentName:"ul"},"After a user logs in"),(0,i.kt)("li",{parentName:"ul"},"When a user updates their info (eg changes or adds a new address)"),(0,i.kt)("li",{parentName:"ul"},"Upon loading any pages that are accessible by a logged in user (optional)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"*Note:")," You should configure the accessability of customer traits to non-authenticated APIs (e.g. ",(0,i.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"Analytics.js"),") by default, customer traits are not able to be updated via non-authenticated APIs unless the accessor is set to do so.* (coming soon)"),(0,i.kt)("p",null,"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"Website Tag")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/api"},"HTTP API")," is the first step to integrating and using Intilery."),(0,i.kt)("p",null,"Here\u2019s the payload of a typical ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call with most ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/common"},"common fields")," removed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "userId": "97980cfea0067",\n  "event": "identify",\n  "traits": {\n    "name": "Peter Gibbons",\n    "email": "peter@example.com",\n    "plan": "premium",\n    "source" : "google",\n    "medium" : "cpc",\n    "campaign" : "free trial",\n    "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n  }\n}\n')),(0,i.kt)("p",null,"And here\u2019s the corresponding Javascript event that would generate the above payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", {\n  name: "Peter Gibbons",\n  email: "peter@example.com",\n  plan: "premium",\n  source : "google",\n  medium : "cpc",\n  campaign : "free trial",\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),(0,i.kt)("p",null,"Beyond the common fields, an ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call has the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"traits")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"optional")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Free-form dictionary of traits of the user, like ",(0,i.kt)("inlineCode",{parentName:"td"},"email")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"name"),". See the ",(0,i.kt)("a",{parentName:"td",href:"#traits"},"Traits field docs")," for a list of reserved trait names.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"userId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"optional if anonymousID is set instead")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier for the user in your database. A userId or an anonymousId is required. See the ",(0,i.kt)("a",{parentName:"td",href:"#identities"},"Identities docs")," for more details.")))),(0,i.kt)("h3",{id:"marketing-preferences"},"Marketing Preferences"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:"))," The trait Marketing Preferences is a system trait for setting the channel level subscription to marketing channels"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here\u2019s a complete example of an ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "507f191e810c19729de860ea",\n  "channel": "browser",\n  "context": {\n    "ip": "8.8.8.8",\n    "campaign" : {\n      "name" : "campaign name",\n      "source" : "Google",\n      "medium" : "ppc"\n    }\n    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"\n  },\n  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",\n  "receivedAt": "2015-02-23T22:28:55.387Z",\n  "sentAt": "2015-02-23T22:28:55.111Z",\n  "timestamp": "2015-02-23T22:28:55.111Z",\n  "traits": {\n    "name": "Peter Gibbons",\n    "email": "peter@example.com",\n    "plan": "premium",\n    "logins": 5,\n    "address": {\n      "number": "1",\n      "street": "Station Road",\n      "city": "Chester",\n      "county": "Cheshire",\n      "postalCode": "CH1",\n      "country": "UK"\n    }\n  },\n  "type": "identify",\n  "userId": "97980cfea0067",\n  "version": "1.1"\n}\n')),(0,i.kt)("h2",{id:"identities"},"Identities"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call specifies a customer identity that you can reference across the customer\u2019s whole lifetime. ",(0,i.kt)("strong",{parentName:"p"},"Every ",(0,i.kt)("inlineCode",{parentName:"strong"},"identify")," call must have a ",(0,i.kt)("a",{parentName:"strong",href:"#user-id"},"User ID")," or an ",(0,i.kt)("a",{parentName:"strong",href:"#anonymous-id"},"Anonymous ID")),", depending on how much you know about the user in question."),(0,i.kt)("h3",{id:"anonymous-id"},"Anonymous ID"),(0,i.kt)("p",null,"There are certain cases where you don\u2019t actually know who the user is according to your database, but you still want to be able to tie them to traits, events or page views. For example, you may not know who a user is when tracking newsletter signups or anonymous page views."),(0,i.kt)("p",null,"In these cases, you should use an Anonymous ID."),(0,i.kt)("p",null,"The Anonymous ID can be any pseudo-unique identifier. For example, on your servers you can use a session id. If you don\u2019t have any readily available identifier, you can always generate a new random one\u2014we recommend ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUIDs"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Our ",(0,i.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"Website Tag")," ",(0,i.kt)("strong",{parentName:"p"},"automatically")," use Anonymous IDs under the covers to keep track of users as they navigate around your website or app, so you don\u2019t need to worry about them when using those libraries."),(0,i.kt)("p",null,"Here\u2019s an example of a Javascript event for an anonymous user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify({\n  subscriptionStatus: 'inactive'\n});\n")),(0,i.kt)("h3",{id:"user-id"},"User ID"),(0,i.kt)("p",null,"User IDs are a more permanent and robust identifier, like a database ID. Since these IDs are consistent across a customer\u2019s lifetime, ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," calls should include a User ID as often as possible."),(0,i.kt)("p",null,"A User ID is usually the unique identifier that you recognize a user by in your own database. For example, if you\u2019re using MongoDB it might look something like ",(0,i.kt)("inlineCode",{parentName:"p"},"507f191e810c19729de860ea"),"."),(0,i.kt)("p",null,"We recommend using database IDs instead of simple email addresses or usernames, because database IDs ",(0,i.kt)("em",{parentName:"p"},"never")," change. That guarantees that even if the user changes their email address, you can still recognize them as the same person in all of your analytics tools. And even better, you\u2019ll be able to correlate analytics data with your own internal database."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Instead of using an email address or a username as a User ID, send them along as ",(0,i.kt)("a",{parentName:"strong",href:"#traits"},"traits"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Note:")),' When looking at events or customers in the Intilery platform, you may see references to "customerId", this is the internal unique ID for the customer that Intilery assigns. This ID is for Intilery use only.'),(0,i.kt)("h2",{id:"traits"},"Traits"),(0,i.kt)("p",null,"Traits are pieces of information you know about a user that are included in an ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call. These could be demographics like ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"gender"),", account-specific like ",(0,i.kt)("inlineCode",{parentName:"p"},"plan"),", or even things like whether a user has seen a particular A/B test variation. Up to you!"),(0,i.kt)("p",null,"We\u2019ve reserved some traits that have semantic meanings for users, and we handle them in special ways. For example, we always expect ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," to be a string of the user\u2019s email address. We use this when sending emails to the customer"),(0,i.kt)("p",null,"You should ",(0,i.kt)("strong",{parentName:"p"},"only use reserved traits for their intended meaning"),"."),(0,i.kt)("p",null,"Reserved traits we\u2019ve standardized:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Trait")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Type")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Description")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Street address of a user optionally containing: ",(0,i.kt)("inlineCode",{parentName:"td"},"city"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"country"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"postalCode"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"state")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"street"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"age")),(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"Age of a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"avatar")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"URL to an avatar image for the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"birthday")),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"User\u2019s birthday")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"company")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Company the user represents, optionally containing: ",(0,i.kt)("inlineCode",{parentName:"td"},"name")," (a String), ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," (a String or Number), ",(0,i.kt)("inlineCode",{parentName:"td"},"industry")," (a String), ",(0,i.kt)("inlineCode",{parentName:"td"},"employee_count")," (a Number) or ",(0,i.kt)("inlineCode",{parentName:"td"},"plan")," (a String)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"createdAt")),(0,i.kt)("td",{parentName:"tr",align:null},"Date"),(0,i.kt)("td",{parentName:"tr",align:null},"Date the user\u2019s account was first created. We recommend ",(0,i.kt)("a",{parentName:"td",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601")," date strings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies which site sent the traffic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"medium")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies what type of link was used, such as ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Cost_per_click"},"cost per click")," or email.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"campaign")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies a specific product promotion or strategic campaign.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"content")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Identifies what specifically was clicked to bring the user to the site, such as a ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Banner_ad"},"banner ad")," or a ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Hyperlink"},"text link"),". It is often used for ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/A/B_testing"},"A/B testing")," and ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Contextual_advertising"},"content-targeted ads"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Description of the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Email address of a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"firstName")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"First name of a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gender")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Gender of a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique ID in your database for a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lastName")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Last name of a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Full name of a user. If you only pass a first and last name we\u2019ll automatically fill in the full name for you.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"phone")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Phone number of a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"title")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Title of a user, usually related to their position at a specific company. Example: \u201cDirector of Engineering\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"User\u2019s username. This should be unique to each user, like the usernames of Twitter or GitHub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"website")),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Website of a user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"marketingPreferences")),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Array of channels with a channel name and boolean subscribed: -")))),(0,i.kt)("p",null,"marketingPreferences: -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n    ] \n}\n')),(0,i.kt)("p",null,"Trait Updates"),(0,i.kt)("p",null,"Traits are designed to store the state of a customer, sending the a value for a trait either by the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tag/reference#identify"},"Analytics.js identify")," or the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/api#identify-action"},"HTTP API identify")," will result in the value of the trait being updating for the customer."),(0,i.kt)("p",null,"Changeable/transient values or multi-value traits should not be set as a single trait."),(0,i.kt)("p",null,"Consider the following example: -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", {\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n        "phone": "123456789",\n        "policy": {\n            "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    });\n')),(0,i.kt)("p",null,"The resulting traits of the customer would be "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789",\n       "policy": {\n       "policyType": "Private Car",\n       "policyNumber": "123"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"If another identify request is made, but it omits traits, then only the traits supplied are updated/set, e.g. calling identify with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", {\n   "lastName": "Bloggs"\n});\n')),(0,i.kt)("p",null,"Would result in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lastName")," trait being added to the customer's traits, e.g. resulting in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n      "lastName" : "Bloggs",\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"If you pass in a different value for a trait, the value of the trait is updated, i.e. calling identify with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", {\n   "firstName": "Josephh"\n});\n')),(0,i.kt)("p",null,"Would result in the fistName trait being updated in the customer's traits, e.g. resulting in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joseph",\n      "lastName" : "Bloggs",\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Special care should be taken when setting trait values when they are arrays or objects, the value passed in is what is set, example"),(0,i.kt)("p",null,"Starting with a customer that has traits previously set, e.g. resulting in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n      "lastName" : "Bloggs",\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"You then call ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," with the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n        "policy": {\n          "policyType": "Private Car"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The resulting customer traits would be the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n      "lastName" : "Bloggs"\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: ")," The value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy")," trait has been update to match explicitly what you passed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call, note how the ",(0,i.kt)("inlineCode",{parentName:"p"},"policyNumber")," value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"policy")," trait has been removed, as it was not present in the ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call for the trait ",(0,i.kt)("inlineCode",{parentName:"p"},"policy")),(0,i.kt)("h4",{id:"multi-value-traits"},"Multi-value traits"),(0,i.kt)("p",null,"If you require to store multiple traits of a same type, either use arrays or explicit properties for each value, e.g"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", "traits": {\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n        "phone": "123456789"\n    });\n')),(0,i.kt)("p",null,".The resulting customer traits would be the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789"\n    }\n}\n')),(0,i.kt)("p",null,"Adding a new policy to a named trait"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", "traits": {\n      "car-policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    });\n')),(0,i.kt)("p",null,".The resulting customer traits would be the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789",\n      "car-policy": {\n         "policyType": "Private Car",\n           "policyNumber": "123"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Then to add a different policy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", "traits": {\n      "home-policy": {\n          "policyType": "Home",\n            "policyNumber": "456"\n        }\n    });\n')),(0,i.kt)("p",null,".The resulting customer traits would be the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789",\n      "car-policy": {\n         "policyType": "Private Car",\n           "policyNumber": "123"\n        },\n        "home-policy": {\n        "policyType": "Home",\n        "policyNumber": "456"\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Both policies cpould have been set in a single ",(0,i.kt)("inlineCode",{parentName:"p"},"indentify")," call of course."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: ")," It is advisable to keep the number of traits for multi value traits to under 20, if you require more values, then use an array, e.g. ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/retail"},"products in cart")," which is an array of products"),(0,i.kt)("h4",{id:"array-based-traits"},"Array based traits"),(0,i.kt)("p",null,"To set an array of properties for a trait, e.g. multiple policies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'analytics.identify("97980cfea0067", {\n      "policies": [\n        {\n            "policyType": "Home",\n            "policyNumber": "456"\n        },\n        {\n            "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    ]   \n    });\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," You must pass in the complete array when setting an array based trait"),(0,i.kt)("h4",{id:"customer-campaign"},"Customer Campaign"),(0,i.kt)("p",null,"The identify method automatically sends the campaign data for the current session, as set via UTM parameters in the URL, as detailed here ",(0,i.kt)("a",{parentName:"p",href:"/docs/schema/common#context"},"common fields")," (see field campaign)."),(0,i.kt)("p",null,'If the campaign is set on the current context, by including UTM paramters (utm_medium, utm_campaign etc.). a customer trait "campaign" will be created with these details.'),(0,i.kt)("p",null,"The campaign trait is only set on the customer when the customer is initially recognised, either as a known customer or an anonymous visitor, in which case the campaign value is copied over from the visitor to the customer"),(0,i.kt)("h3",{id:"asynchronous-processing"},"Asynchronous Processing"),(0,i.kt)("p",null,"The processing of all requests to the Intilery customer data platform is asynchronous,  each of the methods to call the CDP (Javascript tag or HTTP API) will return an eventID that represents the action requested, the format of the response is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "success": true, \n  "eventId": "3e112aa5-2bed-49a9-b1db-ead2b807066d" \n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"code"),' "success" indicates whether the call was accepted and ',(0,i.kt)("inlineCode",{parentName:"p"},"eventId")," is the unique ID of this call (event). Any errors downstream will report this eventID."),(0,i.kt)("h4",{id:"timing"},"Timing"),(0,i.kt)("p",null,"Due to the nature of asynchronous processing, you should leave 500ms between an ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call, and further calls that may need to access traits on the customer, for example email merge tags, this gives the asynchronous storage the time to sve the traits."),(0,i.kt)("p",null,"If it is imperative that the data is available to the campaign asset at the time of the call (not withstanding a 500ms gap between identify and other calls) then we recommend passing the merge tag data as part of the event, as the event object is passed to the downstream processor."),(0,i.kt)("h3",{id:"should-i-use-traits-or-event-data"},"Should I use Traits or Event Data?"),(0,i.kt)("p",null,"If the data belongs to the customer, and is a semi-immuttable value, then this should be stored in the customer traits, e.g. custome policies. These values change less frequently, than say an order conformation email, where the data for the email/letter is transient and only needed for that communication, e.g."),(0,i.kt)("p",null,"To send an asset that has tranisent data, for example a renewal quote, you may decide to send this data as part of the event/command to send the asset, rather than implicitly setting it as a trait on the customer."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Be aware of ",(0,i.kt)("a",{parentName:"p",href:"#asynchronous-processing"},"Asynchronous Processing")),(0,i.kt)("p",null,"The send an asset with data for that send, which is attached to the event itself and passed down stream to the sending of the asset ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/commands"},"API Commands")),(0,i.kt)("p",null,"For example: -"),(0,i.kt)("p",null,"POST ",(0,i.kt)("a",{parentName:"p",href:"https://tracking.intilery.com/track/%7BclientId%7D/%7BaccountId%7D/%7BBRANDID%7D/v1/track"},"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "userId": "ABC/123",  \n    "event": "SEND_PRINT",  \n    "assetId": "renewal",  \n    "timestamp": "2019-11-18T13:30:12.984Z",\n     "renewal" : {\n       "price": "123.44",\n       "currency": "GBP"\n     }\n}\n')),(0,i.kt)("p",null,"The value for ",(0,i.kt)("inlineCode",{parentName:"p"},"renewal")," is a transient value that is used for the sending of that asset, if you require to set this on the customer trait first, then see above"))}u.isMDXComponent=!0}}]);