(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(94)),l={id:"identify",title:"Identify Schema",sidebar_label:"Identify"},c={unversionedId:"schema/identify",id:"schema/identify",isDocsHomePage:!1,title:"Identify Schema",description:"identify lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them like their email, name, etc.",source:"@site/docs/schema/identify.md",permalink:"/docs/schema/identify",editUrl:"https://github.com/Intilery/intilery.github.io/edit/master/website/docs/schema/identify.md",sidebar_label:"Identify",sidebar:"schema",previous:{title:"Email Schema",permalink:"/docs/schema/email"},next:{title:"Track Schema",permalink:"/docs/schema/track"}},b=[{value:"Example",id:"example",children:[]},{value:"Identities",id:"identities",children:[{value:"Anonymous ID",id:"anonymous-id",children:[]},{value:"User ID",id:"user-id",children:[]}]},{value:"Traits",id:"traits",children:[{value:"Trait Updates",id:"trait-updates",children:[]},{value:"Asynchronous Processing",id:"asynchronous-processing",children:[]},{value:"Should I use Traits or Event Data?",id:"should-i-use-traits-or-event-data",children:[]}]}],o={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"identify")," lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them like their email, name, etc."),Object(i.b)("p",null,"Our recommendation for when and how often you should call ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," is as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"After a user registers"),Object(i.b)("li",{parentName:"ul"},"After a user logs in"),Object(i.b)("li",{parentName:"ul"},"When a user updates their info (eg changes or adds a new address)"),Object(i.b)("li",{parentName:"ul"},"Upon loading any pages that are accessible by a logged in user (optional)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"*Note:")," You should configure the accessability of customer traits to non-authenticated APIs (e.g. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../tag/tag1"}),"Analytics.js"),") by default, customer traits are not able to be updated via non-authenticated APIs unless the accessor is set to do so.* (coming soon)"),Object(i.b)("p",null,"Calling ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../tag/tag1"}),"Website Tag")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../apis/api1"}),"HTTP API")," is the first step to integrating and using Intilery."),Object(i.b)("p",null,"Here\u2019s the payload of a typical ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call with most ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../schema/common"}),"common fields")," removed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "type": "identify",\n  "traits": {\n    "name": "Peter Gibbons",\n    "email": "peter@example.com",\n    "plan": "premium",\n    "logins": 5\n  },\n  "userId": "97980cfea0067"\n}\n')),Object(i.b)("p",null,"And here\u2019s the corresponding Javascript event that would generate the above payload:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", {\n  name: "Peter Gibbons",\n  email: "peter@example.com",\n  plan: "premium",\n  logins: 5\n});\n')),Object(i.b)("p",null,"Beyond the common fields, an ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call has the following fields:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"traits")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Free-form dictionary of traits of the user, like ",Object(i.b)("inlineCode",{parentName:"td"},"email")," or ",Object(i.b)("inlineCode",{parentName:"td"},"name"),". See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#traits"}),"Traits field docs")," for a list of reserved trait names.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"userId")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"optional if anonymousID is set instead")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique identifier for the user in your database. A userId or an anonymousId is required. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#identities"}),"Identities docs")," for more details.")))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Here\u2019s a complete example of an ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "anonymousId": "507f191e810c19729de860ea",\n  "channel": "browser",\n  "context": {\n    "ip": "8.8.8.8",\n    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"\n  },\n  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",\n  "receivedAt": "2015-02-23T22:28:55.387Z",\n  "sentAt": "2015-02-23T22:28:55.111Z",\n  "timestamp": "2015-02-23T22:28:55.111Z",\n  "traits": {\n    "name": "Peter Gibbons",\n    "email": "peter@example.com",\n    "plan": "premium",\n    "logins": 5,\n    "address": {\n      "number": "1",\n      "street": "Station Road",\n      "city": "Chester",\n      "county": "Cheshire",\n      "postalCode": "CH1",\n      "country": "UK"\n    }\n  },\n  "type": "identify",\n  "userId": "97980cfea0067",\n  "version": "1.1"\n}\n')),Object(i.b)("h2",{id:"identities"},"Identities"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call specifies a customer identity that you can reference across the customer\u2019s whole lifetime. ",Object(i.b)("strong",{parentName:"p"},"Every ",Object(i.b)("inlineCode",{parentName:"strong"},"identify")," call must have a ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#user-id"}),"User ID")," or an ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#anonymous-id"}),"Anonymous ID")),", depending on how much you know about the user in question."),Object(i.b)("h3",{id:"anonymous-id"},"Anonymous ID"),Object(i.b)("p",null,"There are certain cases where you don\u2019t actually know who the user is according to your database, but you still want to be able to tie them to traits, events or page views. For example, you may not know who a user is when tracking newsletter signups or anonymous page views."),Object(i.b)("p",null,"In these cases, you should use an Anonymous ID."),Object(i.b)("p",null,"The Anonymous ID can be any pseudo-unique identifier. For example, on your servers you can use a session id. If you don\u2019t have any readily available identifier, you can always generate a new random one\u2014we recommend ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Universally_unique_identifier"}),"UUIDs"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../tag/tag1"}),"Website Tag")," ",Object(i.b)("strong",{parentName:"p"},"automatically")," use Anonymous IDs under the covers to keep track of users as they navigate around your website or app, so you don\u2019t need to worry about them when using those libraries."),Object(i.b)("p",null,"Here\u2019s an example of a Javascript event for an anonymous user:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"analytics.identify({\n  subscriptionStatus: 'inactive'\n});\n")),Object(i.b)("h3",{id:"user-id"},"User ID"),Object(i.b)("p",null,"User IDs are a more permanent and robust identifier, like a database ID. Since these IDs are consistent across a customer\u2019s lifetime, ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," calls should include a User ID as often as possible."),Object(i.b)("p",null,"A User ID is usually the unique identifier that you recognize a user by in your own database. For example, if you\u2019re using MongoDB it might look something like ",Object(i.b)("inlineCode",{parentName:"p"},"507f191e810c19729de860ea"),"."),Object(i.b)("p",null,"We recommend using database IDs instead of simple email addresses or usernames, because database IDs ",Object(i.b)("em",{parentName:"p"},"never")," change. That guarantees that even if the user changes their email address, you can still recognize them as the same person in all of your analytics tools. And even better, you\u2019ll be able to correlate analytics data with your own internal database."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Instead of using an email address or a username as a User ID, send them along as ",Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"#traits"}),"traits"),".")),Object(i.b)("h2",{id:"traits"},"Traits"),Object(i.b)("p",null,"Traits are pieces of information you know about a user that are included in an ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call. These could be demographics like ",Object(i.b)("inlineCode",{parentName:"p"},"age")," or ",Object(i.b)("inlineCode",{parentName:"p"},"gender"),", account-specific like ",Object(i.b)("inlineCode",{parentName:"p"},"plan"),", or even things like whether a user has seen a particular A/B test variation. Up to you!"),Object(i.b)("p",null,"We\u2019ve reserved some traits that have semantic meanings for users, and we handle them in special ways. For example, we always expect ",Object(i.b)("inlineCode",{parentName:"p"},"email")," to be a string of the user\u2019s email address. We use this when sending emails to the customer"),Object(i.b)("p",null,"You should ",Object(i.b)("strong",{parentName:"p"},"only use reserved traits for their intended meaning"),"."),Object(i.b)("p",null,"Reserved traits we\u2019ve standardized:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Trait")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Type")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"address")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Street address of a user optionally containing: ",Object(i.b)("inlineCode",{parentName:"td"},"city"),", ",Object(i.b)("inlineCode",{parentName:"td"},"country"),", ",Object(i.b)("inlineCode",{parentName:"td"},"postalCode"),", ",Object(i.b)("inlineCode",{parentName:"td"},"state")," or ",Object(i.b)("inlineCode",{parentName:"td"},"street"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"age")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Age of a user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"avatar")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL to an avatar image for the user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"birthday")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User\u2019s birthday")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"company")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Company the user represents, optionally containing: ",Object(i.b)("inlineCode",{parentName:"td"},"name")," (a String), ",Object(i.b)("inlineCode",{parentName:"td"},"id")," (a String or Number), ",Object(i.b)("inlineCode",{parentName:"td"},"industry")," (a String), ",Object(i.b)("inlineCode",{parentName:"td"},"employee_count")," (a Number) or ",Object(i.b)("inlineCode",{parentName:"td"},"plan")," (a String)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"createdAt")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date the user\u2019s account was first created. We recommend ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"http://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601")," date strings.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"description")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Description of the user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"email")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email address of a user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"firstName")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"First name of a user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"gender")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Gender of a user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"id")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique ID in your database for a user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"lastName")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Last name of a user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Full name of a user. If you only pass a first and last name we\u2019ll automatically fill in the full name for you.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"phone")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Phone number of a user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"title")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Title of a user, usually related to their position at a specific company. Example: \u201cDirector of Engineering\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"username")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User\u2019s username. This should be unique to each user, like the usernames of Twitter or GitHub.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"website")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Website of a user")))),Object(i.b)("h3",{id:"trait-updates"},"Trait Updates"),Object(i.b)("p",null,"Traits are designed to store the state of a customer, sending the a value for a trait either by the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../tag/reference#identify"}),"Analytics.js identify")," or the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../apis/api1#identify-action"}),"HTTP API identify")," will result in the value of the trait being updating for the customer."),Object(i.b)("p",null,"Changeable/transient values or multi-value traits should not be set as a single trait."),Object(i.b)("p",null,"Consider the following example: -"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", "traits": {\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n        "phone": "123456789",\n        "policy": {\n            "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    });\n')),Object(i.b)("p",null,"The resulting traits of the customer would be "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789",\n       "policy": {\n       "policyType": "Private Car",\n       "policyNumber": "123"\n        }\n    }\n}\n')),Object(i.b)("p",null,"If another identify reques is made, but it omits traits, then only the traits supplied are updated/set, e.g. calling identify with"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", "traits": {\n   "lastName": "Bloggs",\n});\n')),Object(i.b)("p",null,"Would result in the ",Object(i.b)("inlineCode",{parentName:"p"},"lastName")," trait being added to the customer's traits, e.g. resulting in"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n      "lastName" : "Bloggs"\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    }\n}\n')),Object(i.b)("p",null,"If you pass in a different value for a trait, the value of the trait is updated, i.e. calling identify with"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", "traits": {\n   "firstName": "Josephh",\n});\n')),Object(i.b)("p",null,"Would result in the fistName trait being updated in the customer's traits, e.g. resulting in"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joseph",\n      "lastName" : "Bloggs"\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Special care should be taken when setting trait values when they are arrays or objects, the value passed in is what is set, example"),Object(i.b)("p",null,"Starting with a customer that has traits previously set, e.g. resulting in"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n      "lastName" : "Bloggs"\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    }\n}\n')),Object(i.b)("p",null,"You then call ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," with the following"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n        "policy": {\n          "policyType": "Private Car"\n        }\n    }\n}\n')),Object(i.b)("p",null,"The resulting customer traits would be the following"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n      "clientReference": "something",\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n      "lastName" : "Bloggs"\n      "phone": "123456789",\n        "policy": {\n          "policyType": "Private Car",\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note: ")," The value of the ",Object(i.b)("inlineCode",{parentName:"p"},"policy")," trait has been update to match explicitly what you passed in the ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call, note how the ",Object(i.b)("inlineCode",{parentName:"p"},"policyNumber")," value in the ",Object(i.b)("inlineCode",{parentName:"p"},"policy")," trait has been removed, as it was not present in the ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call for the trait ",Object(i.b)("inlineCode",{parentName:"p"},"policy")),Object(i.b)("h4",{id:"multi-value-traits"},"Multi-value traits"),Object(i.b)("p",null,"If you require to store multiple traits of a same type, either use arrays or explicit properties for each value, e.g"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", "traits": {\n        "email": "joe.blogs@intilery.com",\n        "firstName": "Joe",\n        "phone": "123456789"\n    });\n')),Object(i.b)("p",null,".The resulting customer traits would be the following"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789"\n    }\n}\n')),Object(i.b)("p",null,"Adding a new policy to a named trait"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", "traits": {\n      "car-policy": {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n        }\n    });\n')),Object(i.b)("p",null,".The resulting customer traits would be the following"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789",\n      "car-policy": {\n         "policyType": "Private Car",\n           "policyNumber": "123"\n        }\n    }\n}\n')),Object(i.b)("p",null,"Then to add a different policy"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", "traits": {\n      "home-policy": {\n          "policyType": "Home",\n            "policyNumber": "456"\n        }\n    });\n')),Object(i.b)("p",null,".The resulting customer traits would be the following"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "traits": {\n    "clientReference": "something",\n     "email": "joe.blogs@intilery.com",\n     "firstName": "Joe",\n     "phone": "123456789",\n      "car-policy": {\n         "policyType": "Private Car",\n           "policyNumber": "123"\n        },\n        "home-policy": {\n        "policyType": "Home",\n        "policyNumber": "456"\n        }\n    }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Both policies cpould have been set in a single ",Object(i.b)("inlineCode",{parentName:"p"},"indentify")," call of course."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note: ")," It is advisable to keep the number of traits for multi value traits to under 20, if you require more values, then use an array, e.g. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../schema/retail"}),"products in cart")," which is an array of products"),Object(i.b)("h4",{id:"array-based-traits"},"Array based traits"),Object(i.b)("p",null,"To set an array of properties for a triat, e.g. multiple policies"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'analytics.identify("97980cfea0067", "traits": {\n      "policies": [\n        {\n          "policyType": "Home",\n            "policyNumber": "456"\n            },\n            {\n          "policyType": "Private Car",\n            "policyNumber": "123"\n            }\n    });\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," You must pass in the complete array when setting an array based trait"),Object(i.b)("h3",{id:"asynchronous-processing"},"Asynchronous Processing"),Object(i.b)("p",null,"The processing of all requests to the Intilery customer data platform is asynchronous,  each of the methods to call the CDP (Javascript tag or HTTP API) will return an eventID that represents the action requested, the format of the response is"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{ \n  "success": true, \n  "eventId": "3e112aa5-2bed-49a9-b1db-ead2b807066d" \n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"code"),' "success" indicates whether the call was accepted and ',Object(i.b)("inlineCode",{parentName:"p"},"eventId")," is the unique ID of this call (event). Any errors downstream will report this eventID."),Object(i.b)("h4",{id:"timing"},"Timing"),Object(i.b)("p",null,"Due to the nature of asynchronous processing, you should leave 500ms between an ",Object(i.b)("inlineCode",{parentName:"p"},"identify")," call, and further calls that may need to access traits on the customer, for example email merge tags, this gives the asynchronous storage the time to sve the traits."),Object(i.b)("p",null,"If it is imperative that the data is available to the campaign asset at the time of the call (not withstanding a 500ms gap between identify and other calls) then we recommend passing the merge tag data as part of the event, as the event object is passed to the downstream processor."),Object(i.b)("h3",{id:"should-i-use-traits-or-event-data"},"Should I use Traits or Event Data?"),Object(i.b)("p",null,"If the data belongs to the customer, and is a semi-immuttable value, then this should be stored in the customer traits, e.g. custome policies. These values change less frequently, than say an order conformation email, where the data for the email/letter is transient and only needed for that communication, e.g."),Object(i.b)("p",null,"To send an asset that has tranisent data, for example a renewal quote, you may decide to send this data as part of the event/command to send the asset, rather than implicitly setting it as a trait on the customer."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Be aware of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#asynchronous-processing"}),"Asynchronous Processing")),Object(i.b)("p",null,"The send an asset with data for that send, which is attached to the event itself and passed down stream to the sending of the asset ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../apis/actions"}),"API Actions")),Object(i.b)("p",null,"For example: -"),Object(i.b)("p",null,"POST ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tracking.intilery.com/track/%7BclientId%7D/%7BaccountId%7D/%7BBRANDID%7D/v1/track"}),"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n    "userId": "ABC/123",  \n    "event": "SEND_PRINT",  \n    "assetId": "renewal",  \n    "timestamp": "2019-11-18T13:30:12.984Z",\n     "renewal" : {\n       "price": "123.44",\n       "currency": "GBP"\n     }\n}\n')),Object(i.b)("p",null,"The value for ",Object(i.b)("inlineCode",{parentName:"p"},"renewal")," is a transient value that is used for the sending of that asset, if you require to set this on the customer trait first, then see above"))}s.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);