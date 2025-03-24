"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[4306],{7866:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"schema/app","title":"Native App Schema","description":"One of the core components of the Intilery Schema is the track method. It records any arbitrary event that the user has triggered. For Mobile tracking, in addition to screen calls, you\u2019ll want to send specific event names that we recognize semantically. That way, we can transform them correctly before actioning them in the Intilery CDP and Customer Engagement Platform.","source":"@site/docs/schema/app.md","sourceDirName":"schema","slug":"/schema/app","permalink":"/docs/schema/app","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"app","title":"Native App Schema","sidebar_label":"Mobile App"},"sidebar":"schema","previous":{"title":"Screen","permalink":"/docs/schema/screen"},"next":{"title":"B2B SaaS","permalink":"/docs/schema/b2b"}}');var r=i(4848),s=i(8453);const d={id:"app",title:"Native App Schema",sidebar_label:"Mobile App"},c=void 0,l={},a=[{value:"Overview of Events",id:"overview-of-events",level:2},{value:"Lifecycle Events",id:"lifecycle-events",level:2},{value:"Application Installed",id:"application-installed",level:3},{value:"Application Opened",id:"application-opened",level:3},{value:"Application Backgrounded",id:"application-backgrounded",level:3},{value:"Application Updated",id:"application-updated",level:3},{value:"Application Uninstalled",id:"application-uninstalled",level:3},{value:"Application Crashed",id:"application-crashed",level:3},{value:"Campaign Events",id:"campaign-events",level:2},{value:"Install Attributed",id:"install-attributed",level:3},{value:"Push Notification Received",id:"push-notification-received",level:3},{value:"Push Notification Tapped",id:"push-notification-tapped",level:3},{value:"Push Notification Bounced",id:"push-notification-bounced",level:3},{value:"Deep Link Opened",id:"deep-link-opened",level:3},{value:"Deep Link Clicked",id:"deep-link-clicked",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["One of the core components of the Intilery ",(0,r.jsx)(n.a,{href:"./contents",children:"Schema"})," is the ",(0,r.jsx)(n.a,{href:"./track",children:(0,r.jsx)(n.code,{children:"track"})})," method. It records any arbitrary event that the user has triggered. For Mobile tracking, in addition to ",(0,r.jsx)(n.code,{children:"screen"})," calls, you\u2019ll want to send ",(0,r.jsx)(n.strong,{children:"specific event names"})," that we recognize semantically. That way, we can transform them correctly before actioning them in the Intilery CDP and Customer Engagement Platform."]}),"\n",(0,r.jsxs)(n.p,{children:["By standardizing the events that comprise the core ",(0,r.jsx)(n.strong,{children:"mobile application lifecycle"})," and associated ",(0,r.jsx)(n.strong,{children:"mobile campaign and referral events"}),", Intilery can, wherever possible, automatically collect and action these events on your behalf and build downstream actions which take full advantage of the semantic meaning associated with these events and their properties."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you\u2019re already collecting similar events, we recommend migrating to these event names so that you can take advantage of available features in our CDP and Customer Engagement Plarform which depend on the Schema as they become available."]}),"\n",(0,r.jsx)(n.h2,{id:"overview-of-events",children:"Overview of Events"}),"\n",(0,r.jsx)(n.p,{children:"The Intilery Native Mobile Spec includes the following semantic events:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Application Lifecycle Events"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-installed",children:"Application Installed"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-opened",children:"Application Opened"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-backgrounded",children:"Application Backgrounded"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-updated",children:"Application Updated"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-uninstalled",children:"Application Uninstalled"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-crashed",children:"Application Crashed"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Campaign Events"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#install-attributed",children:"Install Attributed"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#push-notification-received",children:"Push Notification Received"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#push-notification-tapped",children:"Push Notification Tapped"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#push-notification-bounced",children:"Push Notification Bounced"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#deep-link-opened",children:"Deep Link Opened"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#deep-link-clicked",children:"Deep Link Clicked"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We recommend using the above event names if you\u2019re going to be integrating the events yourself. This will ensure that they can be mapped effectively in the CDP and Customer Engagement Platform"}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, though they\u2019re not formally part of the Native Mobile Schema, we also collect ",(0,r.jsx)(n.code,{children:"Order Completed"})," from our ecommerce spec automatically upon in-app purchases on iOS and can collect screen views automatically in iOS and Android."]}),"\n",(0,r.jsx)(n.h2,{id:"lifecycle-events",children:"Lifecycle Events"}),"\n",(0,r.jsx)(n.p,{children:"Mobile applications live within a fairly bounded lifecycle. In order to understand and communicate effectively with your users, it\u2019s crucial to instrument the core flows associated with installing and opening your app. The following events, many of which we can capture automatically in the latest versions of our SDKs (whenthey become available), allow you to get a picture of top-line metrics like DAUs, MAUs, Screen Views per session, etc. Automatic tracking of lifecycle events is completely optional."}),"\n",(0,r.jsx)(n.p,{children:"The following events will be tracked automatically when lifecycle events are enabled:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-installed",children:"Application Installed"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-opened",children:"Application Opened"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#application-updated",children:"Application Updated"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"application-installed",children:"Application Installed"}),"\n",(0,r.jsxs)(n.p,{children:["This event fires when a user ",(0,r.jsx)(n.strong,{children:"first"})," opens your mobile application. Note, if the user never opens your app after installing, we will not be able to collect this event. This event does not wait for attribution or campaign information to be received, and is collected automatically by our SDKs."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Installed",\n  "properties": {\n    "version": "1.2.3", "build": "1234"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"version"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The version installed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"build"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The build number of the installed app."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"application-opened",children:"Application Opened"}),"\n",(0,r.jsxs)(n.p,{children:["This event fires when a user launches or foregrounds your mobile application after the first open. It will fire after the ",(0,r.jsx)(n.code,{children:"Application Installed"})," event and again after the app is re-opened after being closed. This event does not wait for attribution information to be received but may include information about referring applications or deep link URLs if available to the application upon open."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Opened",\n  "properties": {\n    "from_background": false,\n    "referring_application": "GMail",\n    "url": "url://location"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"from_background"})}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["If application ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/#//apple_ref/doc/uid/TP40006786-CH3-SW52",children:"transitioned"})," from \u201cBackground\u201d to \u201cInactive\u201d state prior to foregrounding (as opposed to from \u201cNot Running\u201d state)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"url"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["The value of ",(0,r.jsx)(n.code,{children:"UIApplicationLaunchOptionsURLKey"})," from ",(0,r.jsx)(n.code,{children:"launchOptions"}),".",(0,r.jsx)(n.strong,{children:"Collected on iOS only"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"referring_application"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["The value of ",(0,r.jsx)(n.code,{children:"UIApplicationLaunchOptionsSourceApplicationKey"})," from ",(0,r.jsx)(n.code,{children:"launchOptions"}),". ",(0,r.jsx)(n.strong,{children:"Automatically collected on iOS only"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"version"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The version installed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"build"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The build number of the installed app."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"application-backgrounded",children:"Application Backgrounded"}),"\n",(0,r.jsxs)(n.p,{children:["This event should be sent when a user backgrounds the application upon ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/reference/uikit/uiapplicationdelegate/1622997-applicationdidenterbackground",children:(0,r.jsx)(n.code,{children:"applicationDidEnterBackground"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Backgrounded",\n  "properties": {}\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"application-updated",children:"Application Updated"}),"\n",(0,r.jsx)(n.p,{children:"This event fires when a user updates the application. Our SDK will automatically collect this event in lieu of an \u201cApplication Opened\u201d event when we determine that the Open is first since an update."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Updated",\n  "properties": {\n    "previous_version": "1.1.2",\n    "previous_build": "1234",\n    "version": "1.2.0",\n    "build": "1456"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"previous_version"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The previously recorded version."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"previous_build"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The previously recorded build."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"version"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The new version."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"build"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The new build."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"application-uninstalled",children:"Application Uninstalled"}),"\n",(0,r.jsx)(n.p,{children:"Fire this event when a user uninstalls the application. Several destination partners will detect this for you using Silent Push Notifications and send this event to Intilery on your behalf."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Uninstalled",\n  "properties": {}\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"application-crashed",children:"Application Crashed"}),"\n",(0,r.jsx)(n.p,{children:"You can send this event when you receive a crash notification from your app, but is not meant to supplant traditional crash reporting tools. By tracking crashes as an analytics event with device and user information, you can analyze the which types of users are impacted by crashes and how those crashes, in turn, affect their engagement. You may also want to target those customers with tailored communications in other channels if they\u2019ve encountered several crashes."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Application Crashed",\n  "properties": {}\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"campaign-events",children:"Campaign Events"}),"\n",(0,r.jsx)(n.p,{children:"As the walls between apps become increasingly lowered, capturing information about the content and campaigns that drive users to engage with your app is critical to building more targeted, relevant, personalized experiences for your users."}),"\n",(0,r.jsx)(n.h3,{id:"install-attributed",children:"Install Attributed"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Install Attributed",\n  "properties": {\n    "provider": "Tune/Kochava/Branch/AppsFlyer",\n    "campaign": {\n      "source": "Network/FB/AdWords/MoPub/Source",\n      "name": "Campaign Name",\n      "content": "Organic Content Title",\n      "ad_creative": "Red Hello World Ad",\n      "ad_group": "Red Ones"\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"provider"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The attribution provider."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[source]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Campaign source \u2014 attributed ad network"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[name]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The name of the attributed campaign."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[medium]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Identifies what type of link was used."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[content]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The content of the campaign."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[ad_creative]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The ad creative name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[ad_group]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The ad group name."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"push-notification-received",children:"Push Notification Received"}),"\n",(0,r.jsxs)(n.p,{children:["This event can be sent when a push notification is received in the app. It can be automatically enabled on ",(0,r.jsx)(n.a,{href:"/docs/app/ios/",children:"iOS SDK"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Push Notification Received",\n  "properties": {\n    "campaign": {\n      "medium": "Push",\n      "source": "Vendor Name",\n      "name": "Referral Flow",\n      "content": "Your friend invited you to play a match."\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[name]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Campaign Name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[medium]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Identifies what type of link was used (Push Notification)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[content]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Push notification content."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[source]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Designates the push provider. (Optional)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"push-notification-tapped",children:"Push Notification Tapped"}),"\n",(0,r.jsxs)(n.p,{children:["This event can be sent when a user taps on a push notification associated with your app. It can be automatically enabled on ",(0,r.jsx)(n.a,{href:"/docs/app/ios/",children:"iOS SDK"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Push Notification Tapped",\n  "properties": {\n    "action": "Accept",\n    "campaign": {\n      "medium": "Push",\n      "source": "Vendor Name",\n      "name": "Referral Flow",\n      "content": "Your friend invited you to play a match."\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"action"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["If this notification is \u201c",(0,r.jsx)(n.a,{href:"https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/IPhoneOSClientImp.html#//apple_ref/doc/uid/TP40008194-CH103-SW26",children:"actionable"}),"\u201d, the custom action tapped. ",(0,r.jsx)(n.strong,{children:"Default:"})," \u201cOpen\u201d"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[name]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Campaign Name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[medium]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Identifies what type of link was used (Push Notification)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[content]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Push notification content content"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[source]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Designates the push provider. (Optional)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"push-notification-bounced",children:"Push Notification Bounced"}),"\n",(0,r.jsx)(n.p,{children:"This event fires when a push notification from a provider bounces. If your push notification provider forwards push lifecycle events to Intilery, they should include this event in their suite."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event":"Push Notification Bounced",\n  "properties": {\n    "action": "Accept",\n    "campaign": {\n      "medium": "Push",\n      "source": "Vendor Name",\n      "name": "Referral Flow",\n      "content": "Your friend invited you to play a match."\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"action"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsxs)(n.td,{children:["If this notification is \u201c",(0,r.jsx)(n.a,{href:"https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/IPhoneOSClientImp.html#//apple_ref/doc/uid/TP40008194-CH103-SW26",children:"actionable"}),"\u201d, the custom action tapped. ",(0,r.jsx)(n.strong,{children:"Default:"})," \u201cOpen\u201d"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[name]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Campaign Name."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[medium]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Identifies what type of link was used (Push Notification)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[content]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Push notification content content"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"campaign[source]"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"Designates the push provider. (Optional)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"deep-link-opened",children:"Deep Link Opened"}),"\n",(0,r.jsx)(n.p,{children:"When your application is opened using a referring link, Intilery or your packaged deep link partner can fire this event on your behalf."}),"\n",(0,r.jsxs)(n.p,{children:["This event is fired ",(0,r.jsx)(n.em,{children:"in addition"})," to the associated ",(0,r.jsx)(n.code,{children:"Application Opened"})," event."]}),"\n",(0,r.jsxs)(n.p,{children:["Our ",(0,r.jsx)(n.a,{href:"/docs/app/ios/",children:"iOS SDK"})," SDK can collect this event automatically if configured to do so."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Deep Link Opened",\n  "properties": {\n    "provider": "Branch Metrics",\n    "url": "app://landing"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"provider"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The deep link provider."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"url"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The App URL opened."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"deep-link-clicked",children:"Deep Link Clicked"}),"\n",(0,r.jsx)(n.p,{children:"This event may be provided by deep link providers postback mechanisms or an internal redirect service if you use one in order to provide a waypoint funnel step between your content or advertisement and the resulting app open."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "019mr8mf4r",\n  "type": "track",\n  "event": "Deep Link Clicked",\n  "properties": {\n    "provider": "Branch Metrics",\n    "url": "brnch.io/1234"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"provider"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The deep link provider."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"url"})}),(0,r.jsx)(n.td,{children:"String"}),(0,r.jsx)(n.td,{children:"The deep link URL clicked."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>c});var t=i(6540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);