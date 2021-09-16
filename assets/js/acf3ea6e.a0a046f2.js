(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[9911],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9164:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={aid:"simple",title:"Simple Integration",sidebar_label:"Simple Integration"},l=void 0,s={unversionedId:"guides/simple",id:"guides/simple",isDocsHomePage:!1,title:"Simple Integration",description:"When you implement Intilery, you add Intilery code to your website, app, or server.",source:"@site/docs/guides/simple.md",sourceDirName:"guides",slug:"/guides/simple",permalink:"/docs/guides/simple",version:"current",frontMatter:{aid:"simple",title:"Simple Integration",sidebar_label:"Simple Integration"},sidebar:"guides",previous:{title:"Contents",permalink:"/docs/guides/contents"},next:{title:"Planning A Full implementation",permalink:"/docs/guides/full"}},p=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Accessing the Javascript Tag",id:"accessing-the-javascript-tag",children:[]},{value:"REST API",id:"rest-api",children:[]},{value:"Installing Intilery",id:"installing-intilery",children:[]},{value:"Javascript Quickstart",id:"javascript-quickstart",children:[{value:"Step 1: Copy the Snippet",id:"step-1-copy-the-snippet",children:[]},{value:"Step 2: Identify Users",id:"step-2-identify-users",children:[]},{value:"Step 3: Track Actions",id:"step-3-track-actions",children:[]},{value:"iOS Mobile Quickstart",id:"ios-mobile-quickstart",children:[]},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",children:[]},{value:"Step 2: Identify Users",id:"step-2-identify-users-1",children:[]},{value:"Step 3: Track Actions",id:"step-3-track-actions-1",children:[]}]},{value:"Test that it\u2019s working",id:"test-that-its-working",children:[]}],c={toc:p};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you implement Intilery, you add Intilery code to your website, app, or server.\nThis code generates messages based on specific triggers you define."),(0,r.kt)("p",null,"In the simplest implementation, the code can be a snippet of Javascript that you copy\nand paste into the HTML of a website to track page views. It can also be as complex as\nIntilery calls embedded in a React mobile app to send messages when the app is opened\nor closed, when the user performs different actions, or when time based conditions are\nmet (for example \u201cticket reservation expired\u201d or \u201ccart abandoned after 2 hours\u201d)."),(0,r.kt)("p",null,"The best way to learn about how Intilery works is to see it in action. This tutorial walks\nyou though an installation using one of our libraries: either our Javascript, PHP,\nor iOS library."),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"Before you start, you need a Intilery user account and a with the required\nrole/permissions to access the tag and event setup. If you\u2019re not already part of an\norganization with an Intilery account, you can ",(0,r.kt)("a",{parentName:"p",href:"https://www.intilery.com/?utm_source=docs"},"sign up here"),"."),(0,r.kt)("p",null,"For the quickstart portion below, you also need access to the code\nfor a basic website, PHP website, or an iOS app."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip"),"! If you don\u2019t have any of those things, you might consider creating\na simple ",(0,r.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages website"),"."),(0,r.kt)("h2",{id:"accessing-the-javascript-tag"},"Accessing the Javascript Tag"),(0,r.kt)("p",null,"Go to your Intilery account, and navigate to Customers -> Tag"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(3315).Z})),(0,r.kt)("p",null,"Add the code provided to your site, see ",(0,r.kt)("a",{parentName:"p",href:"#installing-intilery"},"Installing Intilery")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: ")," The HTML code snippet provided should be copied and pasted exactly as\nprovided as it includes your clientKey"),(0,r.kt)("h2",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer Admin")," policy on your role, you can create an API Key for use\nwith the REST API. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/api"},"API")," for more details."),(0,r.kt)("h2",{id:"installing-intilery"},"Installing Intilery"),(0,r.kt)("p",null,"Click a tab below to see the tutorial content for the specific library you chose."),(0,r.kt)("p",null,"[iOS Mobile quickstart]"," (comming soon)"),(0,r.kt)("p",null,"[PHP quickstart]"," (coming soon)"),(0,r.kt)("h2",{id:"javascript-quickstart"},"Javascript Quickstart"),(0,r.kt)("h3",{id:"step-1-copy-the-snippet"},"Step 1: Copy the Snippet"),(0,r.kt)("p",null,"Installing Intilery is easy, just paste the snippet from the Javascript tag page into\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," tag of your site."),(0,r.kt)("p",null,"That snippet loads Analytics.js onto the page ",(0,r.kt)("em",{parentName:"p"},"asynchronously"),", so it won\u2019t affect\nyour page load speed. Once the snippet is running on your site, page data is collected\nautomatically, along with campaign data."),(0,r.kt)("h3",{id:"step-2-identify-users"},"Step 2: Identify Users"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," method is how you tell Intilery who the current user is. It includes a\nunique User ID, and any optional traits you know about them. You can read more\nabout it in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tag/tag1#step-2-identify-customers"},"identify method reference"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," You don\u2019t need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," for anonymous visitors to your site.\nIntilery automatically assigns them an ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymousId"),", so just calling ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"track")," works just fine without ",(0,r.kt)("inlineCode",{parentName:"p"},"identify"),"."),(0,r.kt)("p",null,"Here\u2019s what a basic call to ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify('f4ca124298', {\n  name: 'Michael Brown',\n  email: 'mbrown@example.com'\n});\n")),(0,r.kt)("p",null,"That identifies Michael by his unique User ID (in this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"f4ca124298"),", which\nis what you know him by in your database) and labels him with ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"email"),"\ntraits."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code on your site, you need to\nreplace those hard-coded trait values with the variables that represent the details\nof the currently logged-in user."),(0,r.kt)("p",null,"To do that, we recommend that you use a backend template to inject an ",(0,r.kt)("inlineCode",{parentName:"p"},"identify"),"\ncall into the footer of ",(0,r.kt)("strong",{parentName:"p"},"every page")," of your site where the user is logged in.\nThat way, no matter what page the user first lands on, they will always be identified.\nYou don\u2019t need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," if your unique identifier (",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),") is not known."),(0,r.kt)("p",null,"Depending on your templating language, your actual identify call might look\nsomething like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.identify(' {{user.id}} ', {\n  name: '{{user.fullname}}',\n  email: '{{user.email}}'\n});\n")),(0,r.kt)("p",null,"With that call in your page footer, you successfully identify every user that visits\nyour site."),(0,r.kt)("h3",{id:"step-3-track-actions"},"Step 3: Track Actions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," method is how you tell Intilery about the actions your users are performing\non your site. Every action triggers what we call an \u201cevent\u201d, which can also have\nassociated properties. You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"track"),"\nin the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tag/tag1#step-3-track-actions"},"track method reference"),"."),(0,r.kt)("p",null,"Here\u2019s what a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," might look like when a user signs up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Signed Up', {\n  plan: 'Enterprise'\n});\n")),(0,r.kt)("p",null,"That\u2019s just telling us that your user just triggered the ",(0,r.kt)("strong",{parentName:"p"},"Signed Up")," event and\nchose your hypothetical ",(0,r.kt)("inlineCode",{parentName:"p"},"'Enterprise'")," plan. Properties can be anything you\nwant to record, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"analytics.track('Article Bookmarked', {\n  title: 'Snow Fall',\n  subtitle: 'The Avalanche at Tunnel Creek',\n  author: 'John Branch'\n});\n")),(0,r.kt)("p",null,"If you\u2019re just getting started, some of the events you should track are events\nthat indicate the success of your site, like ",(0,r.kt)("strong",{parentName:"p"},"Signed Up"),",\n",(0,r.kt)("strong",{parentName:"p"},"Item Purchased")," or ",(0,r.kt)("strong",{parentName:"p"},"Article Bookmarked"),"."),(0,r.kt)("p",null,"To get started, we recommend that you track just a few important events.\nYou can always add more later!"),(0,r.kt)("p",null,"Once you add a few ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," calls, ",(0,r.kt)("strong",{parentName:"p"},"you\u2019re done with this tutorial!"),".\nYou successfully installed Analytics.js tracking.\nCheck that all is ok wth the ",(0,r.kt)("a",{parentName:"p",href:"#test-that-its-working"},"Test that it's working")," section below"),(0,r.kt)("h3",{id:"ios-mobile-quickstart"},"iOS Mobile Quickstart"),(0,r.kt)("h3",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),(0,r.kt)("p",null,"The recommended way to install Intilery for iOS is\nusing ",(0,r.kt)("a",{parentName:"p",href:"http://cocoapods.org/"},"Cocoapods"),", since it means you can create a build\nwith specific bundled destinations, and because it makes it simple to install and upgrade."),(0,r.kt)("p",null,"First, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Intilery")," dependency to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile")," by adding the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pod 'Intilery', '~> 3.0'\n")),(0,r.kt)("p",null,"Then in your application delegate\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"- application:didFinishLaunchingWithOptions:"),"\nmethod, set up the SDK like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES; // Enable this to record certain application events automatically!\nconfiguration.recordScreenViews = YES; // Enable this to record screen views automatically!\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": YOUR_WRITE_KEY can be found in the JavaScript tag in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"annalytics.load('YOUR_WRITE_KEY')")," line"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip"),": You don\u2019t ",(0,r.kt)("em",{parentName:"p"},"need")," to use initialization config parameters to track lifecycle\nevents (",(0,r.kt)("inlineCode",{parentName:"p"},"Application Opened"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Installed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Application Updated"),") and\nscreen views automatically, but we highly recommend that you do so you can start\noff already tracking some important core events."),(0,r.kt)("p",null,"And of course, import the SDK in the files that you use it by adding the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},"#import <Intilery/SEGAnalytics.h>\n")),(0,r.kt)("h3",{id:"step-2-identify-users-1"},"Step 2: Identify Users"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," method is how you tell Intilery who the current user is. It takes a\nunique User ID, and any optional traits you know about them. You can read more\nabout it in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/ios#identify"},"identify reference"),"."),(0,r.kt)("p",null,"Here\u2019s what a basic call to ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},'[[SEGAnalytics sharedAnalytics] identify:@"f4ca124298"\n                                  traits:@{ @"name": @"Michael Brown",\n                                    @"email": @"mbrown@example.com" }];\n')),(0,r.kt)("p",null,"That call identifies Michael by his unique User ID (",(0,r.kt)("inlineCode",{parentName:"p"},"f4ca124298"),", which is the one\nyou know him by in your database) and labels him with ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," traits."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code in your iOS app, you need\nto replace those hard-coded trait values with the variables that represent the details\nof the currently logged-in user."),(0,r.kt)("p",null,"Once you\u2019ve added an ",(0,r.kt)("inlineCode",{parentName:"p"},"identify")," call, you\u2019re ready to move on to tracking!"),(0,r.kt)("h3",{id:"step-3-track-actions-1"},"Step 3: Track Actions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," method is how you tell Intilery about the actions your users are\nperforming in your app. Every action triggers what we call an \u201cevent\u201d, which\ncan also have associated properties. You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/app/ios#track"},"track method reference"),"."),(0,r.kt)("p",null,"To get started, the Intilery iOS SDK can automatically track a few important common\nevents, such as ",(0,r.kt)("strong",{parentName:"p"},"Application Installed"),", ",(0,r.kt)("strong",{parentName:"p"},"Application Updated")," and\n",(0,r.kt)("strong",{parentName:"p"},"Application Opened"),". You can enable this option during initialization by adding\nthe following lines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];\nconfiguration.trackApplicationLifecycleEvents = YES;\n[SEGAnalytics setupWithConfiguration:configuration];\n')),(0,r.kt)("p",null,"You should also track events that indicate success in your mobile app, like\n",(0,r.kt)("strong",{parentName:"p"},"Signed Up"),", ",(0,r.kt)("strong",{parentName:"p"},"Item Purchased")," or ",(0,r.kt)("strong",{parentName:"p"},"Article Bookmarked"),".\nWe recommend tracking just a few important events. You can always add more later!"),(0,r.kt)("p",null,"Here\u2019s what a ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," call might look like when a user signs up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'[[SEGAnalytics sharedAnalytics] track:@"Signed Up"\n                           properties:@{ @"plan": @"Enterprise" }];\n')),(0,r.kt)("p",null,"That tells us that your user triggered the ",(0,r.kt)("strong",{parentName:"p"},"Signed Up")," event, and chose your\nhypothetical ",(0,r.kt)("inlineCode",{parentName:"p"},"'Enterprise'")," plan. Properties can be anything you want to record,\nfor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'[[SEGAnalytics sharedAnalytics] track:@"Article Bookmarked"\n                           properties:@{\n                               @"title": @"Snow Fall",\n                               @"subtitle": @"The Avalanche at Tunnel Creek",\n                               @"author": @"John Branch" }];\n')),(0,r.kt)("p",null,"Once you\u2019ve added a few ",(0,r.kt)("inlineCode",{parentName:"p"},"track")," calls, ",(0,r.kt)("strong",{parentName:"p"},"you\u2019re set up!")," You successfully\ninstrumented your app, and can enable destinations from your Segment workspace."),(0,r.kt)("h2",{id:"test-that-its-working"},"Test that it\u2019s working"),(0,r.kt)("p",null,"Once you\u2019ve set up your Intilery tag, and instrumented at least one call,\nyou can look at the Event Debugger page in the Intilery app to check that\nit produces data as you expected."),(0,r.kt)("p",null,"The Event Debugger is a real-time tool that helps you confirm that API calls made\nfrom your website, mobile app, or servers arrive at the Intilery platform, so you\ncan quickly see how calls are received by Intilery  so you can troubleshoot quickly\nwithout having to wait for data processing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(3312).Z})),(0,r.kt)("p",null,"The Debugger is separate from your Intilery account's data pipeline, and is not an\nexhaustive view of all the events ever sent to your Intilery account. The Debugger\nonly shows a sample of the events that the Source receives in real time, with a cap\nof the last 20 event. The Debugger is a great way to test specific parts of your\nimplementation to validate that events are being fired successfully and arriving at Intilery."),(0,r.kt)("p",null,"The Debugger shows a live stream of sampled events arriving at the Source, but\nyou can also toggled from \u201cLive\u201d to \u201cPause\u201d, to stop the stream and prevent it from\ndisplaying new events. Events continue to arrive to Intilery, they are just not\ndisplayed in the Debugger."),(0,r.kt)("p",null,"You can filter for spectic events that you know are sent to Intiery."),(0,r.kt)("p",null,"Three views are available when viewing a payload:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Raw view")," is the complete JSON object Intilery received from the calls\nyou sent. These calls include all the details about what is being tracked:\ntimestamps, properties, traits, ids,\nand ",(0,r.kt)("a",{parentName:"li",href:"/docs/schema/common/#context-fields-automatically-collected"},"contextual information Intilery automatically collects")," the moment the data is sent."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Schema view")," is a recreation of the API call you made that was sent to Intilery."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Analytics view")," is a recreation of the JavaScript call that was called\n",(0,r.kt)("strong",{parentName:"li"},"Note:")," the analytics tab is shown even if the call was made from a non\nJavaScript source, such as REST or iOS.")),(0,r.kt)("p",null,"We\u2019ll talk more about debugging and troubleshooting in a later section"))}u.isMDXComponent=!0},3312:function(e,t,n){"use strict";t.Z=n.p+"assets/images/event-b1f4e2e39cd5c22859d1097ada096c22.png"},3315:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tag-f2e47027794c9c467687ae5190a097d4.png"}}]);