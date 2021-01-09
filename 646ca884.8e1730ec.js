(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||d[u]||c;return n?i.a.createElement(h,o(o({ref:t},b),{},{components:n})):i.a.createElement(h,o({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var b=2;b<c;b++)r[b]=n[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),c=(n(0),n(111)),r={id:"ios",title:"Intilery iOS Mobile SDK",sidebar_label:"iOS Mobile SDK"},o={unversionedId:"sdk/ios",id:"sdk/ios",isDocsHomePage:!1,title:"Intilery iOS Mobile SDK",description:"Intilery for iOS makes it simple to send your data to Intilery.",source:"@site/docs/sdk/ios.md",permalink:"/docs/sdk/ios",sidebar_label:"iOS Mobile SDK",sidebar:"sdk",next:{title:"Quickstart iOS",permalink:"/docs/sdk/ios-quickstart"}},l=[{value:"Intilery-iOS and Unique Identifiers",id:"intilery-ios-and-unique-identifiers",children:[]},{value:"API call queueing in Intilery-iOS",id:"api-call-queueing-in-intilery-ios",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Install the SDK",id:"install-the-sdk",children:[]},{value:"Configure and set up the SDK",id:"configure-and-set-up-the-sdk",children:[]},{value:"Application Lifecycle Tracking",id:"application-lifecycle-tracking",children:[]},{value:"Automatic Screen Tracking",id:"automatic-screen-tracking",children:[]},{value:"Automatic Push Notification Tracking",id:"automatic-push-notification-tracking",children:[]},{value:"Automatic Deep Link Tracking",id:"automatic-deep-link-tracking",children:[]},{value:"Flushing",id:"flushing",children:[]}]},{value:"Data Collection",id:"data-collection",children:[{value:"Identify",id:"identify",children:[]},{value:"Track",id:"track",children:[]},{value:"Screen",id:"screen",children:[]},{value:"AnonymousId",id:"anonymousid",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Disabling Data Collection for Users who opt out",id:"disabling-data-collection-for-users-who-opt-out",children:[]}]},{value:"Logging",id:"logging",children:[]},{value:"Ad Tracking and IDFA",id:"ad-tracking-and-idfa",children:[{value:"CocoaPods",id:"cocoapods",children:[]}]}],b={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Intilery for iOS makes it simple to send your data to Intilery."),Object(c.b)("p",null,"All of Intilery;s libraries are open-source, so you can ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Intilery/analytics-ios"}),"view Intilery for iOS on GitHub")),Object(c.b)("p",null,"Want to stay updated on releases? Subscribe to the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Intilery/analytics-ios/tags.atom"}),"release feed"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," Intilery does not currently support tracking of watchkit extensions for the Apple Watch. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"email:support@intilery.com"}),"Email us")," if you\u2019re interested in a Watchkit SDK. For now we recommend tracking watch interactions using the iPhone app code."),Object(c.b)("h2",{id:"intilery-ios-and-unique-identifiers"},"Intilery-iOS and Unique Identifiers"),Object(c.b)("p",null,"One of the most important parts of any analytics platform is the ability to consistently and accurately identify users. To do this, the platform must assign and persist some form of identification on the device, so you can analyze user actions effectively."),Object(c.b)("p",null,"Naturally the Intilery SDK needs a unique ID for each user. To protect end-users\u2019 privacy, Apple places restrictions on how these IDs can be generated and used. This section explains Apple\u2019s policies, and how Intilery generates IDs in compliance with these policies."),Object(c.b)("p",null,"Before iOS 5 developers had access to ",Object(c.b)("inlineCode",{parentName:"p"},"uniqueIdentifier"),", which was a hardware-specific serial number that was consistent across different apps, vendors and installs. Starting with iOS 5, however, ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/news/?id=3212013a"}),"Apple deprecated access to this identifier"),". In iOS 6 Apple introduced the ",Object(c.b)("inlineCode",{parentName:"p"},"identifierForVendor")," which protects end-users from cross-app identification. In iOS 7 Apple ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://techcrunch.com/2013/06/14/ios-7-eliminates-mac-address-as-tracking-option-signaling-final-push-towards-apples-own-ad-identifier-technology/"}),"restricted access to the device\u2019s MAC address"),", which many developers used as a workaround to get a similar device-specific serial number to replace ",Object(c.b)("inlineCode",{parentName:"p"},"uniqueIdentifier"),"."),Object(c.b)("p",null,"Intilery's iOS library supports iOS 7+ by generating a UUID and storing it on disk. This complies with Apple\u2019s required privacy policies, maintains compatibility, and also enables correct tracking in situations where multiple people use the same device, since the UUID can be regenerated."),Object(c.b)("h2",{id:"api-call-queueing-in-intilery-ios"},"API call queueing in Intilery-iOS"),Object(c.b)("p",null,"The Intilery SDK queues API calls rather than making a network request for each event tracked, to help improve the user\u2019s battery life."),Object(c.b)("p",null,"Batches are sent either:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"when there are 20 or more events in the queue"),Object(c.b)("li",{parentName:"ul"},"on a scheduled timer, every 30 seconds"),Object(c.b)("li",{parentName:"ul"},"when the app goes to the background")),Object(c.b)("p",null,"To limit memory and disk usage, Intilery only queues up to 1000 events. When the app is terminated, Intielry saves the queue to disk, and loads that data again at app launch so there is no data loss."),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("h3",{id:"install-the-sdk"},"Install the SDK"),Object(c.b)("p",null,"The recommended way to install Intilery for iOS is using ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://cocoapods.org/"}),"Cocoapods"),", since it means you can create a build with specific destinations, and because it makes it simple to install and upgrade."),Object(c.b)("p",null,"First, add the ",Object(c.b)("inlineCode",{parentName:"p"},"Analytics")," dependency to your ",Object(c.b)("inlineCode",{parentName:"p"},"Podfile"),", like so:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"pod 'IntileryAnalytics', '~> 4.1'\n")),Object(c.b)("p",null,"Then in your application delegate\u2019s ",Object(c.b)("inlineCode",{parentName:"p"},"- application:didFinishLaunchingWithOptions:")," method, set up the SDK like so:"),Object(c.b)("h4",{id:"swift"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackApplicationLifecycleEvents = true // Enable this to record certain application events automatically!\nconfiguration.recordScreenViews = true // Enable this to record screen views automatically!\nAnalytics.setup(with: configuration)\n')),Object(c.b)("h4",{id:"objective-c"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES; // Enable this to record certain application events automatically!\nconfiguration.recordScreenViews = YES; // Enable this to record screen views automatically!\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," Automatically tracking lifecycle events (",Object(c.b)("inlineCode",{parentName:"p"},"Application Opened"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Application Installed"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Application Updated"),") and screen views is optional using initialization config parameters, but highly recommended to hit the ground running with core events!"),Object(c.b)("p",null,"And of course, import the SDK in the files that you use it with:"),Object(c.b)("h4",{id:"swift-1"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"import Segment\n")),Object(c.b)("h4",{id:"objective-c-1"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"import Segment\n")),Object(c.b)("h3",{id:"configure-and-set-up-the-sdk"},"Configure and set up the SDK"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"SEGAnalyticsConfiguration")," class provides a set of properties that control various policies of the ",Object(c.b)("inlineCode",{parentName:"p"},"SEGAnalytics")," instance. You initialize it with a ",Object(c.b)("inlineCode",{parentName:"p"},"writeKey")," as in the examples below:"),Object(c.b)("h4",{id:"swift-2"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'Analytics.setup(with: AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY"))\n')),Object(c.b)("h4",{id:"objective-c-2"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'[SEGAnalytics setupWithConfiguration:[SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"]];\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"writeKey")," *NSString **"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Your Intilery ",Object(c.b)("strong",{parentName:"th"},"Write Key"),"."))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h3",{id:"application-lifecycle-tracking"},"Application Lifecycle Tracking"),Object(c.b)("p",null,"The Intilery-iOS SDK can automatically instrument ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../schema/mobile/"}),"common application lifecycle events")," such as \u201cApplication Installed\u201d, \u201cApplication Updated\u201d and \u201cApplication Opened\u201d. Simply enable this option when you initialize the SDK."),Object(c.b)("h4",{id:"swift-3"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackApplicationLifecycleEvents = true\nAnalytics.setup(with: configuration)\n')),Object(c.b)("h4",{id:"objective-c-3"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(c.b)("h3",{id:"automatic-screen-tracking"},"Automatic Screen Tracking"),Object(c.b)("p",null,"The Intilery-iOS SDK can automatically instrument screen calls. It uses method swizzling to detect when ",Object(c.b)("inlineCode",{parentName:"p"},"ViewController"),"s are loaded, and uses the label of the view controller (or the class name if a label is not available) as the screen name. It removes the string \u201cViewController\u201d from the name if one is present."),Object(c.b)("h4",{id:"swift-4"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.recordScreenViews = true\nAnalytics.setup(with: configuration)\n')),Object(c.b)("h4",{id:"objective-c-4"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.recordScreenViews = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(c.b)("h3",{id:"automatic-push-notification-tracking"},"Automatic Push Notification Tracking"),Object(c.b)("p",null,"When you set ",Object(c.b)("inlineCode",{parentName:"p"},"trackPushNotifications")," to ",Object(c.b)("inlineCode",{parentName:"p"},"YES"),", the SDK automatically sends a Track event for ",Object(c.b)("inlineCode",{parentName:"p"},"Push Notification Received")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Push Notification Tapped"),"."),Object(c.b)("h4",{id:"switft"},"Switft"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackPushNotifications = true\nAnalytics.setup(with: configuration)\n')),Object(c.b)("h4",{id:"objective-c-5"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'EGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackPushNotifications = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(c.b)("h3",{id:"automatic-deep-link-tracking"},"Automatic Deep Link Tracking"),Object(c.b)("p",null,"When you set ",Object(c.b)("inlineCode",{parentName:"p"},"trackDeepLinks")," to ",Object(c.b)("inlineCode",{parentName:"p"},"YES"),", the SDK automatically sends a Track event for ",Object(c.b)("inlineCode",{parentName:"p"},"Deep Link Opened"),"."),Object(c.b)("h4",{id:"swift-5"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.trackDeepLinks = true\nAnalytics.setup(with: configuration)\n')),Object(c.b)("h4",{id:"objective-c-6"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackDeepLinks = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(c.b)("h3",{id:"flushing"},"Flushing"),Object(c.b)("p",null,"You can set the number of events that should queue before flushing. Setting this to ",Object(c.b)("inlineCode",{parentName:"p"},"1")," will send events as they come in (i.e. not send batched events) and will use more battery. ",Object(c.b)("inlineCode",{parentName:"p"},"20")," by default."),Object(c.b)("h4",{id:"swift-6"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\nconfiguration.flushAt = 1\nAnalytics.setup(with: configuration)\n')),Object(c.b)("h4",{id:"objective-c-7"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.flushAt = 1;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(c.b)("p",null,"You can also manually ",Object(c.b)("inlineCode",{parentName:"p"},"flush")," the queue:"),Object(c.b)("h4",{id:"switft-1"},"Switft"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'Analytics.shared().alias("glenncoco")\nAnalytics.shared().flush()\n')),Object(c.b)("h4",{id:"objective-c-8"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'[[SEGAnalytics sharedAnalytics] alias:@"glenncoco"];\n[[SEGAnalytics sharedAnalytics] flush]\n')),Object(c.b)("h2",{id:"data-collection"},"Data Collection"),Object(c.b)("p",null,"Now that the Intilery SDK and is installed, you\u2019re ready to collect some data!"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Good to know"),": For any of the methods described in this doc, you can replace the properties and traits in the code samples with variables that represent the data collected."),Object(c.b)("h3",{id:"identify"},"Identify"),Object(c.b)("p",null,"Intielry's Identify method lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them."),Object(c.b)("p",null,"Intilery recommends that you call Identify once when you first create the user\u2019s account, and only call it again later when they update their traits or you change them."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," Intilery automatically assigns an ",Object(c.b)("inlineCode",{parentName:"p"},"anonymousId")," to users before you identify them. The ",Object(c.b)("inlineCode",{parentName:"p"},"userId")," is what connects anonymous activities across devices (for example, iPhone and iPad)."),Object(c.b)("p",null,"Example ",Object(c.b)("inlineCode",{parentName:"p"},"identify")," call:"),Object(c.b)("h4",{id:"swift-7"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'Analytics.shared().identify("a user\'s id", traits: ["email": "a user\'s email address"])\n')),Object(c.b)("h4",{id:"objective-c-9"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'[[SEGAnalytics sharedAnalytics] identify:@"a user\'s id"\n                                traits:@{ @"email": @"a user\'s email address" }];\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"userId")," ",Object(c.b)("em",{parentName:"th"},"NSString ","*",", optional")),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"The database ID for this user. If you don\u2019t know who the user is yet, you can omit the ",Object(c.b)("inlineCode",{parentName:"th"},"userId")," and just record ",Object(c.b)("inlineCode",{parentName:"th"},"traits"),". You can read more in the ",Object(c.b)("a",Object(a.a)({parentName:"th"},{href:"../schema/identify"}),"identify reference"),"."))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"traits")," ",Object(c.b)("em",{parentName:"td"},"NSDictionary ","*",", optional")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A dictionary of traits you know about the user, like their ",Object(c.b)("inlineCode",{parentName:"td"},"email")," or ",Object(c.b)("inlineCode",{parentName:"td"},"name"),". You can read more about traits in the ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"../schema/identify"}),"identify reference"),".")))),Object(c.b)("p",null,"Intilery for iOS works on its own background thread, so it will never block the main thread for the UI or the calling thread."),Object(c.b)("p",null,"Calling ",Object(c.b)("inlineCode",{parentName:"p"},"- identify:")," with a ",Object(c.b)("inlineCode",{parentName:"p"},"userId")," will write that ID to disk to be used in subsequent calls. That ID can be removed either by uninstalling the app or by calling ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#reset"}),Object(c.b)("inlineCode",{parentName:"a"},"reset")),"."),Object(c.b)("p",null,"Find details on the identify method payload in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../schema/identify/"}),"Identify Schema documentation"),"."),Object(c.b)("h3",{id:"track"},"Track"),Object(c.b)("p",null,"Intielry's Track method lets you record the actions your users perform. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties."),Object(c.b)("p",null,"To get started, the Intilery iOS SDK can automatically track a few key common events with the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../schema/mobile/"}),"Intilery Native Mobile Schema"),", such as the ",Object(c.b)("inlineCode",{parentName:"p"},"Application Installed"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Application Updated")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Application Opened"),". Enable this option during initialization."),Object(c.b)("p",null,"You might also want to track events that are indicators of success for your mobile app, like ",Object(c.b)("strong",{parentName:"p"},"Signed Up"),", ",Object(c.b)("strong",{parentName:"p"},"Item Purchased")," or ",Object(c.b)("strong",{parentName:"p"},"Article Bookmarked"),". Intilery recommends tracking just a few important events to start out. You can always add more later! An example Track call might look like this:"),Object(c.b)("h4",{id:"swift-8"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'Analytics.shared().track("Item Purchased", properties: ["item": "Sword of Heracles", "revenue": 2.95])\n')),Object(c.b)("h4",{id:"objective-c-10"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'[[SEGAnalytics sharedAnalytics] track:@"Item Purchased"\n                            properties:@{ @"item": @"Sword of Heracles", @"revenue": @2.95 }];\n')),Object(c.b)("p",null,"This example Track call above tells you that your user just triggered the ",Object(c.b)("strong",{parentName:"p"},"Item Purchased")," event, and records the ",Object(c.b)("inlineCode",{parentName:"p"},"item")," name of \u201cSword of Heracles\u201d and ",Object(c.b)("inlineCode",{parentName:"p"},"revenue")," of 2.95."),Object(c.b)("p",null,"Track event properties can be anything you want to record. In this case, item and revenue."),Object(c.b)("p",null,"The Track call has the following fields:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"event")," *NSString **"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"The name of the event. We recommend human-readable names like ",Object(c.b)("strong",{parentName:"th"},"Song Played")," or ",Object(c.b)("strong",{parentName:"th"},"Status Updated"),"."))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"properties")," ",Object(c.b)("em",{parentName:"td"},"NSDictionary ","*",", optional")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A dictionary of properties for the event. If the event was ",Object(c.b)("inlineCode",{parentName:"td"},"Product Added")," to cart, it might have properties like ",Object(c.b)("inlineCode",{parentName:"td"},"price")," and ",Object(c.b)("inlineCode",{parentName:"td"},"productType"),".")))),Object(c.b)("h3",{id:"screen"},"Screen"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../schema/screen/"}),"Screen")," method lets you you record whenever a user sees a screen of your mobile app, along with optional extra information about the page being viewed."),Object(c.b)("p",null,"You\u2019ll want to record a screen event an event whenever the user opens a screen in your app. This could be a view, fragment, dialog or activity depending on your app."),Object(c.b)("p",null,"Example Screen call:"),Object(c.b)("h4",{id:"swift-9"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'Analytics.shared().screen("Photo Feed", properties: ["Feed Type": "private"])\n')),Object(c.b)("h4",{id:"objective-c-11"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'[[SEGAnalytics sharedAnalytics] screen:@"Photo Feed"\n                            properties:@{ @"Feed Type": @"private" }];\n')),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"screen")," call has the following fields:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"The name of the screen, for example ",Object(c.b)("strong",{parentName:"th"},"Signup")," or ",Object(c.b)("strong",{parentName:"th"},"Home"),"."))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A dictionary of properties for the screen. A screen ",Object(c.b)("strong",{parentName:"td"},"Photo Feed")," might have properties like ",Object(c.b)("inlineCode",{parentName:"td"},"Feed Type")," or ",Object(c.b)("inlineCode",{parentName:"td"},"Sort Order"),".")))),Object(c.b)("p",null,"Find details on the Screen payload in the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../schema/screen/"}),"Screen Schema documentation"),"."),Object(c.b)("h3",{id:"anonymousid"},"AnonymousId"),Object(c.b)("p",null,"You can retrieve the ",Object(c.b)("inlineCode",{parentName:"p"},"anonymousId")," set by the library by using:"),Object(c.b)("h4",{id:"swift-10"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"Analytics.shared().getAnonymousId\n")),Object(c.b)("h4",{id:"objective-c-12"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"[[SEGAnalytics sharedAnalytics] getAnonymousId];\n")),Object(c.b)("h3",{id:"reset"},"Reset"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"- reset")," method clears the SDK\u2019s internal stores for the current ",Object(c.b)("inlineCode",{parentName:"p"},"user"),". This is useful for apps where users can log in and out with different identities over time."),Object(c.b)("p",null,"The example code below clears all information about the user."),Object(c.b)("h4",{id:"swift-11"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"Analytics.shared().reset()\n")),Object(c.b)("h4",{id:"objective-c-13"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"[[SEGAnalytics sharedAnalytics] reset];\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Reset does not clear events in the queue"),", and any remaining events in the queue are sent the next time the app starts. You might want to call ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#flushing"}),"Flush")," before you call Reset."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note"),": Each time you call ",Object(c.b)("inlineCode",{parentName:"p"},"reset"),", a new AnonymousId is generated, therefore only recommended when a user logs out or similair"),Object(c.b)("h3",{id:"disabling-data-collection-for-users-who-opt-out"},"Disabling Data Collection for Users who opt out"),Object(c.b)("p",null,"Depending on the audience for your app (for example, children) or the countries where you sell your app (for example, the EU), you might need to offer the ability for users to opt-out of analytics data collection from inside your app. You can turn off forwarding to ALL destinations including Intilery itself using the following code:"),Object(c.b)("h4",{id:"swift-12"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"[[SEGAnalytics sharedAnalytics] disable];\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"Analytics.shared().disable()\n")),Object(c.b)("p",null,"Or if the user opts back in, you can re-enable data collection:"),Object(c.b)("h4",{id:"swift-13"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"Analytics.shared().enable()\n")),Object(c.b)("h4",{id:"objective-c-14"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"[[SEGAnalytics sharedAnalytics] enable];\n")),Object(c.b)("p",null,"If you disable the Intilery SDK in response to user opt-out, all Intilery method invocations (Track, Screen, Identify, etc) are ignored. "),Object(c.b)("h2",{id:"logging"},"Logging"),Object(c.b)("p",null,"To see a trace of your data going through the SDK, you can enable debug logging with ",Object(c.b)("inlineCode",{parentName:"p"},"- debug:"),":"),Object(c.b)("h4",{id:"swift-14"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"Analytics.debug(true)\n")),Object(c.b)("h4",{id:"objective-c-15"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"[SEGAnalytics debug:YES];\n")),Object(c.b)("p",null,"Or disable it like this:"),Object(c.b)("h4",{id:"swift-15"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"Analytics.debug(false)\n")),Object(c.b)("h4",{id:"objective-c-16"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"[SEGAnalytics debug:NO];\n")),Object(c.b)("p",null,"By default debug logging is disabled."),Object(c.b)("h2",{id:"ad-tracking-and-idfa"},"Ad Tracking and IDFA"),Object(c.b)("p",null,"Starting iOS 14, applications must prompt users if that app needs to collect their Identifier for Advertisers (IDFA). Going forward with analytics-ios-4.1 and later, Intilery doesn\u2019t auto-collect IDFA. If your app or any integrations require the use of IDFA, you need to:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"import the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.apple.com/documentation/adsupport"}),"AdSupport")," and ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.apple.com/documentation/apptrackingtransparency"}),"App Tracking Transparency")," Frameworks by Apple"),Object(c.b)("li",{parentName:"ol"},"pass the below code snippet to Intilery config and start tracking events"),Object(c.b)("li",{parentName:"ol"},"prompt the user for consent and collect the IDFA")),Object(c.b)("p",null,"You can use the following closure snippet to pass the value to ",Object(c.b)("inlineCode",{parentName:"p"},"intilery-ios")," as configurations:"),Object(c.b)("h4",{id:"swift-16"},"Swift"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'import AdSupport\n\n...\n\nlet configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\n\n// Enable advertising collection\nconfiguration.enableAdvertisingTracking = true\n// Set the block to be called when the advertisingID is needed\n// NOTE: In iOS 14, you\'ll need to manually do authorization elsewhere and only when it has been authorized, return the advertisingIdentifier to intilery via the block below\nconfiguration.adSupportBlock = { () -> String in\n    return ASIdentifierManager.shared().advertisingIdentifier\n}\n\nAnalytics.setup(with: configuration)\n')),Object(c.b)("h4",{id:"objective-c-17"},"Objective-C"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'@import AdSupport;\n\n...\n\nSEGAnalyticsConfiguration* configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\n\n// Enable advertising collection\nconfiguration.enableAdvertisingTracking = YES;\n// Set the block to be called when the advertisingID is needed\n// NOTE: In iOS 14, you\'ll need to manually do authorization elsewhere and only when it has been authorized, return the advertisingIdentifier to intilery via the block below\nconfiguration.adSupportBlock = ^{\n    return [[ASIdentifierManager sharedManager] advertisingIdentifier];\n}\n\n[SEGAnalytics setupWithConfiguration:configuration];\n')),Object(c.b)("p",null,"The same value for IDFA will used across all (device and cloud-mode) integrations."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note:")," intilery-ios can continue to collect events without the IDFA until user is prompted and only upon user consent the ",Object(c.b)("inlineCode",{parentName:"p"},"advertisingId")," field is added to the event payload"),Object(c.b)("p",null,"Ad-tracking affects two keys under the ",Object(c.b)("inlineCode",{parentName:"p"},"context")," object of every event:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"device.adTrackingEnabled")),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"true")," if SDK is setup with closure and user has consented, ",Object(c.b)("inlineCode",{parentName:"th"},"false")," otherwise"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"device.advertisingId")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"idfa_value")," if user opts-in otherwise this key is skipped from event payload")))),Object(c.b)("p",null,"If your use cases don\u2019t require the need for IDFA collection you can skip this setup and under your event context you will see not see the ",Object(c.b)("inlineCode",{parentName:"p"},"device.adTrackingEnabled")," and ",Object(c.b)("inlineCode",{parentName:"p"},"device.advertisingId")," key/value in your event payload."),Object(c.b)("h3",{id:"cocoapods"},"CocoaPods"),Object(c.b)("p",null,"Add this line in your ",Object(c.b)("inlineCode",{parentName:"p"},"Podfile"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pod 'IntileryAnalytics', :git => 'https://github.com/Intilery/intilery-analytics-ios', :branch => 'master'\n")))}s.isMDXComponent=!0}}]);