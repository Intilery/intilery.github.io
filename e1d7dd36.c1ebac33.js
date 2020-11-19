(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(s,".").concat(h)]||p[h]||b[h]||r;return n?i.a.createElement(d,o(o({ref:t},l),{},{components:n})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(6),r=(n(0),n(103)),s={id:"tag1",title:"JavaScript Tag Guide",sidebar_label:"Website Tag"},o={unversionedId:"tag/tag1",id:"tag/tag1",isDocsHomePage:!1,title:"JavaScript Tag Guide",description:"When you implement Intilery, you add Intilery code to your website, app, or server. This code generates messages based on specific triggers you define.",source:"@site/docs/tag/tag1.md",permalink:"/docs/tag/tag1",editUrl:"https://github.com/Intilery/intilery.github.io/edit/master/website/docs/tag/tag1.md",sidebar_label:"Website Tag",sidebar:"tag",next:{title:"JavaScript Tag Reference",permalink:"/docs/tag/reference"}},c=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Client Key(s)",id:"client-keys",children:[]},{value:"Step 1: Copy the Snippet",id:"step-1-copy-the-snippet",children:[{value:"Tag Managers",id:"tag-managers",children:[]}]},{value:"Step 2: Identify Customers",id:"step-2-identify-customers",children:[]},{value:"Step 3: Track Actions",id:"step-3-track-actions",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you implement Intilery, you add Intilery code to your website, app, or server. This code generates messages based on specific triggers you define."),Object(r.b)("p",null,"In the simplest implementation, the code can be a snippet of JavaScript that you copy and paste into the HTML of a website to track page views and customer behaviours."),Object(r.b)("p",null,"This tag is based on the Segment javascript analytics tag it has been extended to work in a multinational audience, multiple accounts and brands, along with additional capabilities for personalisation."),Object(r.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(r.b)("p",null,"The full reference of analytics.js (the tag) can be found here ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./reference"}),"Analytics.js")," "),Object(r.b)("h2",{id:"client-keys"},"Client Key(s)"),Object(r.b)("p",null,"Client Key(s) are unique to each Client and Account, the client key for your account(s) are included in the tag snippet within the application. in the tag section."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," If you have multiple accounts with Intilery, each tag has a seperate client key, obtain the tag snippet for each account by switching between accounts when you log in to Intilery."),Object(r.b)("h1",{id:"installing-intilery"},"Installing Intilery"),Object(r.b)("h2",{id:"step-1-copy-the-snippet"},"Step 1: Copy the Snippet"),Object(r.b)("p",null,"Installing Intilery is easy, just paste the snippet from the JavaScript Tag within the tag page in the Intilery app, an screenshot of the tag page is shown below."),Object(r.b)("p",null,"That snippet loads analytics.js onto the page ",Object(r.b)("em",{parentName:"p"},"asynchronously"),", so it won\u2019t affect your page load speed. Once the snippet is running on your site it will record page views and any other events you define."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tag.png",alt:"Tag"}))),Object(r.b)("p",null,"Note: This tag will call the \u201cpage\u201d (page view) function once the tag is loaded."),Object(r.b)("h3",{id:"tag-managers"},"Tag Managers"),Object(r.b)("p",null,"To add the Intilery tag to your site using a tag manager, such as google tag manager, add a HTML type tag and copy the code snippet above into it, deploy the tag to all pages."),Object(r.b)("h2",{id:"step-2-identify-customers"},"Step 2: Identify Customers"),Object(r.b)("p",null,"The identify method is how you tell Intilery who the current user is. It includes a unique User ID, and any optional traits you know about them. You can read more about it in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://intilery.atlassian.net/wiki/spaces/HEA/pages/1868169259/Analytics.js#Identify"}),"identify method reference"),", examples of the identify event are also included on the tag page in the Intilery app."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," You don\u2019t need to call identify for anonymous visitors to your site. Intilery automatically assigns them an anonymousId, so just calling page and track works just fine without identify."),Object(r.b)("p",null,"The format of the javascript identify event is: -"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.identify([userId], [traits], [options], [callback]);\n")),Object(r.b)("p",null,"Here\u2019s what a basic call to identify might look like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.identify({\n  nickname: 'Joe Bloggs',\n  favoriteCompiler: 'A-0',\n  industry: 'Computer Science'\n});\n")),Object(r.b)("p",null,"In this case, you have added traits to the current user (customer) but have not provided an personal data, identifiers or a userID yet."),Object(r.b)("p",null,"A call to identify a user with his details would look like the following"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify(\'123456\', {\n  firstName: \'Joe\',\n  lastName: \'Bloggs\',\n  email: \'joe.bloggs@example.com\',\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),Object(r.b)("p",null,"That identifies Joe by his unique User ID (in this case, 123456, which is what you know him by in your database) and labels him with name and email traits."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," A userID is required for your customers, though this can be the email address if required, in which case the userID is the same as the email, though the email must still be passed in as trait"),Object(r.b)("p",null,"Example with email as the userID"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify(\'joe.bloggs@example.com\', {\n  firstName: \'Joe\',\n  lastName: \'Bloggs\',\n  email: \'joe.bloggs@example.com\',\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:"),' Marketing subscription preferences must be declared in the "marketingPreferences" cutomer trait in the format shown above.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," The customer can have whatever traits you wish to define, these can be simple JSON types, arrays of types. arrays of objects or objects. For arrays of objects it is best to ensure each object in the array is of the same type/structure."),Object(r.b)("p",null,"Example with multiple traits"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify(\'joe.bloggs@example.com\', {\n  firstName: \'Joe\',\n  lastName: \'Bloggs\',\n  email: \'joe.bloggs@example.com\',\n  car: {\n    make:\'Tesla\',\n    model:\'X\'\n  },\n  claims: [\n    {\n      claimID:\'abcdef\',\n      value:1234.56\n    },\n    {\n      claimID:\'opqr\',\n      value:99.99\n    }\n  ],\n  pets:[\n    \'butch\', \'cassidy\'\n  ],\n  "marketingPreferences": { \n      "channels": [ \n        { "channel": "email", "subscribed": true },\n        { "channel": "sms", "subscribed": true },\n        { "channel": "whatsapp", "subscribed": false },\n        { "channel": "facebook", "subscribed": false },\n        { "channel": "push", "subscribed": false }\n      ] \n    }\n});\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code on your site, you need to replace those hard-coded trait values with the variables that represent the details of the currently logged-in user."),Object(r.b)("p",null,"To do that, we recommend that you use a backend template to inject an identify call into the footer of ",Object(r.b)("strong",{parentName:"p"},"every page")," of your site where the user is logged in. That way, no matter what page the user first lands on, they will always be identified. You don\u2019t need to call identify if your unique identifier (userId) is not known. If this is not possible, the identify event should be triggered on user registration and login."),Object(r.b)("p",null,"Depending on your templating language, your actual identify call might look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.identify(' {{user.id}} ', {  name: '{{user.fullname}}',  email: '{{user.email}}' }); \n")),Object(r.b)("p",null,"With that call in your page footer, you successfully identify every user that visits your site."),Object(r.b)("h2",{id:"step-3-track-actions"},"Step 3: Track Actions"),Object(r.b)("p",null,"The track method is how you tell Intilery about the actions your users are performing on your site. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties. You can read more about track in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://intilery.atlassian.net/wiki/spaces/HEA/pages/1868169259/Analytics.js#Track"}),"track method reference"),"."),Object(r.b)("p",null,"Here\u2019s what a call to track might look like when a user signs up:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.track('View Claim', {  cliam: {\n      claimID:'abcdef',\n      value:1234.56\n    }\n}); \n")),Object(r.b)("p",null,"That\u2019s just telling us that your user just triggered the ",Object(r.b)("strong",{parentName:"p"},"View Claim")," event and along with details of the claim viewed. Properties can be anything you want to record, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.track('Article Bookmarked', {  title: 'Snow Fall',  subtitle: 'The Avalanche at Tunnel Creek',  author: 'John Branch' }); \n")),Object(r.b)("p",null,"If you\u2019re just getting started, some of the events you should track are events that indicate the success of your site, like ",Object(r.b)("strong",{parentName:"p"},"Signed Up"),", ",Object(r.b)("strong",{parentName:"p"},"Item Purchased")," or ",Object(r.b)("strong",{parentName:"p"},"Article Bookmarked"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Events for default schema's can be found in the ","[/schema/contents]","(Schema Section) you should choose an industry specific schema and implement those events if possible."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Any event can be sent with any properties, using a default schema saves you having to work out the event names and properties yourself."),Object(r.b)("p",null,"The properties passed in with the events can be simple properties or nested objects"),Object(r.b)("p",null,"Once you add a few track calls, ",Object(r.b)("strong",{parentName:"p"},"you\u2019re done with this tutorial!")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Events are displayed in the Events section on the Intilery app, along with validation."),Object(r.b)("p",null,"You successfully installed analytics.jstracking."))}u.isMDXComponent=!0}}]);