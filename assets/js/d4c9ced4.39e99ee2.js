(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[2534],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5948:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r=["components"],s={id:"ios-faq",title:"iOS Frequently Asked Questions",sidebar_label:"iOS FAQs"},l=void 0,c={unversionedId:"sdk/ios-faq",id:"sdk/ios-faq",isDocsHomePage:!1,title:"iOS Frequently Asked Questions",description:"How big is the Intilery SDK?",source:"@site/docs/sdk/ios-faq.md",sourceDirName:"sdk",slug:"/sdk/ios-faq",permalink:"/docs/sdk/ios-faq",version:"current",frontMatter:{id:"ios-faq",title:"iOS Frequently Asked Questions",sidebar_label:"iOS FAQs"},sidebar:"sdk",previous:{title:"Troubleshooting iOS",permalink:"/docs/sdk/ios-trouble"},next:{title:"iOS Push Notifications",permalink:"/docs/sdk/ios-push"}},d=[{value:"How big is the Intilery SDK?",id:"how-big-is-the-intilery-sdk",children:[]},{value:"Can I install the SDK manually using a dynamic framework?",id:"can-i-install-the-sdk-manually-using-a-dynamic-framework",children:[]},{value:"How do I use push notifications?",id:"how-do-i-use-push-notifications",children:[]},{value:"Can I set user traits without a User ID?",id:"can-i-set-user-traits-without-a-user-id",children:[]},{value:"Can I anonymize IP addresses?",id:"can-i-anonymize-ip-addresses",children:[]},{value:"How can I get the user\u2019s IDFA?",id:"how-can-i-get-the-users-idfa",children:[]},{value:"tvOS / macOS / Catalyst Support",id:"tvos--macos--catalyst-support",children:[]},{value:"Why have you forked Segment?",id:"why-have-you-forked-segment",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-big-is-the-intilery-sdk"},"How big is the Intilery SDK?"),(0,o.kt)("p",null,"The core Intilery SDK is extremely lightweight. It weighs in at about 212kb."),(0,o.kt)("h2",{id:"can-i-install-the-sdk-manually-using-a-dynamic-framework"},"Can I install the SDK manually using a dynamic framework?"),(0,o.kt)("p",null,"Intilery ",(0,o.kt)("strong",{parentName:"p"},"highly recommends")," using Swift Package Manager or Cocoapods. We cannot guarantee support if you do not use a dependency manager."),(0,o.kt)("p",null,"However, if you cannot use Swift Package Manager or Cocoapods, you can manually install our dynamic framework allowing you to send data to Intilery."),(0,o.kt)("p",null,"To install manually:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Intilery/intilery-analytics-ios/releases/"},"latest built SDK"),", and unzip the zip file"),(0,o.kt)("li",{parentName:"ol"},"Drag the unzipped ",(0,o.kt)("inlineCode",{parentName:"li"},"Segment.framework")," folder into your XCode project"),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"General Tab")," for your project, search for ",(0,o.kt)("inlineCode",{parentName:"li"},"Embedded Binaries")," and add the ",(0,o.kt)("inlineCode",{parentName:"li"},"Segment.framework"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/images/embeddedbinaries.png",alt:"img"})),(0,o.kt)("p",null,"Once you install the framework, import the header file and install as described in ",(0,o.kt)("a",{parentName:"p",href:"./ios#install-the-sdk"},"Install the SDK"),"."),(0,o.kt)("p",null,"If you choose not to use a dependency manager, you must manually keep files up-to-date with regularly scheduled, manual updates."),(0,o.kt)("h2",{id:"how-do-i-use-push-notifications"},"How do I use push notifications?"),(0,o.kt)("p",null,"For services that send push notifications, you must first ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html"},"create a Push SSL certificate"),". Then configure your application delegate similarly to the example code below, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_WRITE_KEY")," with your own Intilery source write key. Detailed examples of how to complete the process can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/usernotifications/handling_notifications_and_notification-related_actions"},"Apple\u2019s documentation on the subject"),"."),(0,o.kt)("h4",{id:"swift"},"Swift"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")\n\n    // Use launchOptions to track tapped notifications\n    configuration.launchOptions = launchOptions\n    Analytics.setup(with: configuration)\n\n    // See the Apple linked above for detailed setup information, as it will vary \n    // based on which versions of iOS are supported and what language is being used.\n    ...\n\n    return true\n}\n')),(0,o.kt)("h4",{id:"objective-c"},"Objective-C"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    SEGAnalyticsConfiguration* configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\n\n    // Use launchOptions to track tapped notifications\n    configuration.launchOptions = launchOptions;\n    [SEGAnalytics setupWithConfiguration:configuration];\n\n    // See the Apple documentation linked above for detailed setup information, as it will vary \n    // based on which versions of iOS are supported and what language is being used.\n    ...\n\n    return YES;\n}\n')),(0,o.kt)("p",null,"Once you\u2019ve passed in the launch options and configured the types of notifications your application should received you can then call into Intilery's library to indicate that a device token and/or notification has been received."),(0,o.kt)("h4",{id:"swift-1"},"Swift"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// Let Intilery Analytics know a device token was received\nAnalytics.shared().registeredForRemoteNotifications(deviceToken: deviceToken)\n\n...\n\n// Let Intilery Analytics know that a remote notification was received\nAnalytics.shared().receivedRemoteNotification(userInfo)\n")),(0,o.kt)("h4",{id:"objective-c-1"},"Objective-C"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Let Intilery Analytics know a device token was received\n[[SEGAnalytics sharedAnalytics] registeredForRemoteNotificationsWithDeviceToken:deviceToken];\n\n...\n\n// Let Intilery Analytics know that a remote notification was received\n[[SEGAnalytics sharedAnalytics] receivedRemoteNotification:userInfo];\n")),(0,o.kt)("h2",{id:"can-i-set-user-traits-without-a-user-id"},"Can I set user traits without a User ID?"),(0,o.kt)("p",null,"Yes, you can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," in an ",(0,o.kt)("a",{parentName:"p",href:"/docs/schema/identify"},"Identify call"),", like in the following example:"),(0,o.kt)("h4",{id:"swift-2"},"Swift"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'Analytics.shared().identify(nil, traits: ["email": "example@example.com", "gender": "F"])\n')),(0,o.kt)("h4",{id:"objective-c-2"},"Objective-C"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[SEGAnalytics sharedAnalytics] identify: nil\n    traits:@{ @"email": @"example@example.com",\n      @"Gender": @"F" }];\n')),(0,o.kt)("h2",{id:"can-i-anonymize-ip-addresses"},"Can I anonymize IP addresses?"),(0,o.kt)("p",null,"Intilery collects IP addresses for device-mode (iOS, Android, Analytics.js and Xamarin) events automatically. If you don\u2019t want to record your tracked users\u2019 IP in destinations (and in storage destinations like S3), you can set the event\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"context.ip")," field to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," . The Intilery servers don\u2019t record the IP address of the client for libraries if the ",(0,o.kt)("inlineCode",{parentName:"p"},"context.ip")," field is already set."),(0,o.kt)("p",null,"The following examples show how to set a static 0 value for the IP."),(0,o.kt)("h4",{id:"swift-3"},"Swift"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'Analytics.shared().track("Clicked Button", properties: nil, options: ["context": ["ip": "0.0.0.0"]])\n')),(0,o.kt)("h4",{id:"objective-c-3"},"Objective-C"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'[[SEGAnalytics sharedAnalytics] track: @"Clicked Button"\n  properties:nil\n  options:@{ @"context": @{@"ip": @"0.0.0.0"}}];\n')),(0,o.kt)("h2",{id:"how-can-i-get-the-users-idfa"},"How can I get the user\u2019s IDFA?"),(0,o.kt)("p",null,"Some destinations, especially mobile attribution tools (e.g. Kochava), require the IDFA (identifier for advertisers). The IDFA appears in Intilery calls in the debugger as ",(0,o.kt)("inlineCode",{parentName:"p"},"context.device.advertisingId"),". To capture this value with Analytics-iOS, follow the steps in ",(0,o.kt)("a",{parentName:"p",href:"./ios#ad-tracking-and-idfa"},"Ad-tracking and IDFA"),". Remember that Apple now requires that the user consent to your tracking before you can collect the IDFA."),(0,o.kt)("h2",{id:"tvos--macos--catalyst-support"},"tvOS / macOS / Catalyst Support"),(0,o.kt)("p",null,"We now supports tvOS, macOS and Catalyst as well. You can follow the ",(0,o.kt)("a",{parentName:"p",href:"./ios-quickstart"},"quickstart documentation")," to set it up!"),(0,o.kt)("h2",{id:"why-have-you-forked-segment"},"Why have you forked Segment?"),(0,o.kt)("p",null,"We forked the segment client libraries to give you the choice of using segment to send data to Intilery and a Segment destination, or if you do not use Segment you can send the data directly to Intilery with our forked libraries and SDKs. If in the future you decide to use Segment, the change should be as simple as using the Segment library/sdk instead of the Intilery library/sdk"))}p.isMDXComponent=!0}}]);