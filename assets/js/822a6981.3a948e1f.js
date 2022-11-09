(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[7152],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2671:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l=["components"],i={id:"page",title:"Page Schema",sidebar_label:"Page"},p=void 0,s={unversionedId:"schema/page",id:"schema/page",isDocsHomePage:!1,title:"Page Schema",description:"The page call lets you record whenever a user sees a page of your website, along with any optional properties about the page. Calling page or screen the Website Tag or HTTP API is the first step to integrating and using Intilery.",source:"@site/docs/schema/page.md",sourceDirName:"schema",slug:"/schema/page",permalink:"/docs/schema/page",version:"current",frontMatter:{id:"page",title:"Page Schema",sidebar_label:"Page"},sidebar:"schema",previous:{title:"Track",permalink:"/docs/schema/track"},next:{title:"Screen",permalink:"/docs/schema/screen"}},d=[{value:"Example",id:"example",children:[]},{value:"Identities",id:"identities",children:[]},{value:"Properties",id:"properties",children:[]}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," call lets you record whenever a user sees a page of your website, along with any optional properties about the page. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," or ",(0,o.kt)("a",{parentName:"p",href:"./screen/"},(0,o.kt)("inlineCode",{parentName:"a"},"screen"))," the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"Website Tag")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/api"},"HTTP API")," is the first step to integrating and using Intilery."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: In ",(0,o.kt)("inlineCode",{parentName:"strong"},"analytics.js")," a ",(0,o.kt)("inlineCode",{parentName:"strong"},"page")," call is included in the snippet by default")," just after ",(0,o.kt)("inlineCode",{parentName:"p"},"analytics.load"),". We do that because you ",(0,o.kt)("strong",{parentName:"p"},"must")," call this method at least once per page load. However, you can choose to add an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," to the default call, or call it multiple times if you have a single-page application."),(0,o.kt)("p",null,"Here\u2019s the payload of a typical ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," call with most ",(0,o.kt)("a",{parentName:"p",href:"./common/"},"common fields")," removed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "name": "Home",\n  "properties": {\n    "title": "Welcome | Initech",\n    "url": "http://www.example.com"\n  }\n}\n')),(0,o.kt)("p",null,"And here\u2019s the corresponding Javascript event that would generate the above payload. If you\u2019re using Intilery's Javascript library, the page name and URL are automatically gathered and passed as properties into the event payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'analytics.page("Home");\n')),(0,o.kt)("p",null,"Beyond the common fields, the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," call takes the following fields:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the page For example, most sites have a \u201cSignup\u201d page that can be useful to tag, so you can see users as they move through your funnel.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"properties")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"optional")),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Free-form dictionary of properties of the page, like ",(0,o.kt)("inlineCode",{parentName:"td"},"url")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"referrer")," See the ",(0,o.kt)("a",{parentName:"td",href:"#properties"},"Properties field docs")," for a list of reserved property names.")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here\u2019s a complete example of a ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "507f191e810c19729de860ea",\n  "channel": "browser",\n  "context": {\n    "ip": "8.8.8.8",\n    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"\n  },\n  "integrations": {\n    "All": true,\n    "Mixpanel": false,\n    "Salesforce": false\n  },\n  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",\n  "name": "Home",\n  "properties": {\n    "title": "Welcome | Initech",\n    "url": "http://www.example.com"\n  },\n  "receivedAt": "2015-02-23T22:28:55.387Z",\n  "sentAt": "2015-02-23T22:28:55.111Z",\n  "timestamp": "2015-02-23T22:28:55.111Z",\n  "type": "page",\n  "userId": "97980cfea0067",\n  "version": "1.1"\n}\n')),(0,o.kt)("h2",{id:"identities"},"Identities"),(0,o.kt)("p",null,"The User ID is a unique identifier for the user performing the actions. Check out the ",(0,o.kt)("a",{parentName:"p",href:"./identify#user-id"},"User ID docs")," for more detail."),(0,o.kt)("p",null,"The Anonymous ID can be any pseudo-unique identifier, for cases where you don\u2019t know who the user is, but you still want to tie them to an event. Check out the ",(0,o.kt)("a",{parentName:"p",href:"./identify#anonymous-id"},"Anonymous ID docs")," for more detail."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: In our browser and mobile libraries a User ID is automatically added")," from the state stored by a previous ",(0,o.kt)("a",{parentName:"p",href:"./identify"},(0,o.kt)("inlineCode",{parentName:"a"},"identify"))," call, so you do not need to add it yourself. They will also automatically handle Anonymous ID\u2019s under the covers."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"Properties are extra pieces of information that describe the page. They can be anything you want."),(0,o.kt)("p",null,"We\u2019ve reserved some properties that have semantic meanings, and we handle them in special ways. For example, we always expect ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," to be the URL path of a page, and ",(0,o.kt)("inlineCode",{parentName:"p"},"referrer")," to be the URL of the previous page."),(0,o.kt)("p",null,"You should ",(0,o.kt)("strong",{parentName:"p"},"only use reserved properties for their intended meaning"),"."),(0,o.kt)("p",null,"Reserved properties we have standardized:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Property")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Type")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the page. This is reserved for future use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"path")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Path portion of the URL of the page, which defaults to ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Location"},(0,o.kt)("inlineCode",{parentName:"a"},"location.pathname"))," from the DOM API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"referrer")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Full URL of the previous page. Equivalent to ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer"},(0,o.kt)("inlineCode",{parentName:"a"},"document.referrer"))," from the DOM API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"search")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Query string portion of the URL of the page. Equivalent to ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Location"},(0,o.kt)("inlineCode",{parentName:"a"},"location.search"))," from the DOM API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"title")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Title of the page. Equivalent to ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/title"},(0,o.kt)("inlineCode",{parentName:"a"},"document.title"))," from the DOM API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"url")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Full URL of the page. First we look for the canonical url. If the canonical url is not provided, we use ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Location"},(0,o.kt)("inlineCode",{parentName:"a"},"location.href"))," from the DOM API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"keywords")),(0,o.kt)("td",{parentName:"tr",align:null},"Array","[String]"),(0,o.kt)("td",{parentName:"tr",align:null},"A list/array of keywords describing the content of the page. The keywords would most likely be the same as, or similar to, the keywords you would find in an html ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes"},"meta")," tag for SEO purposes. This property is mainly used by content publishers that rely heavily on pageview tracking. This is not automatically collected.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"analytics.js")," we automatically send the following properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"referrer"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"search"),"."))}u.isMDXComponent=!0}}]);