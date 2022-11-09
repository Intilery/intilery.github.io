(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[1418],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||l;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(2122),i=n(9756),l=(n(7294),n(3905)),r=["components"],o={id:"android",title:"Android Mobile SDK",sidebar_label:"Android Mobile SDK"},s=void 0,c={unversionedId:"app/android",id:"app/android",isDocsHomePage:!1,title:"Android Mobile SDK",description:"Analytics for Android makes it simple to send your data to Intilery.",source:"@site/docs/app/android.md",sourceDirName:"app",slug:"/app/android",permalink:"/docs/app/android",version:"current",frontMatter:{id:"android",title:"Android Mobile SDK",sidebar_label:"Android Mobile SDK"},sidebar:"app",previous:{title:"iOS FAQs",permalink:"/docs/app/ios-faq"},next:{title:"Android Quickstart tutorial",permalink:"/docs/app/android-quickstart"}},d=[{value:"Analytics-Android and Unique Identifiers",id:"analytics-android-and-unique-identifiers",children:[]},{value:"API call queuing in Analytics-Android",id:"api-call-queuing-in-analytics-android",children:[{value:"Queue persistance in Analytics-Android",id:"queue-persistance-in-analytics-android",children:[]}]},{value:"Getting Started",id:"getting-started",children:[{value:"Step 1: Install the Library",id:"step-1-install-the-library",children:[]},{value:"Step 2. Initialize the Client",id:"step-2-initialize-the-client",children:[]},{value:"Customize the Client (Optional)",id:"customize-the-client-optional",children:[]},{value:"Step 3. Add Permissions",id:"step-3-add-permissions",children:[]}]},{value:"Data Collection - The Basic Intilery API calls",id:"data-collection---the-basic-intilery-api-calls",children:[{value:"Identify",id:"identify",children:[]},{value:"Track",id:"track",children:[]},{value:"Java",id:"java-7",children:[]},{value:"Screen",id:"screen",children:[]},{value:"Java",id:"java-8",children:[]}]},{value:"Context",id:"context",children:[{value:"Java",id:"java-11",children:[]},{value:"Kotlin",id:"kotlin-12",children:[]}]},{value:"Utility methods",id:"utility-methods",children:[{value:"Retrieve AnonymousId",id:"retrieve-anonymousid",children:[]},{value:"Kotlin",id:"kotlin-13",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Java",id:"java-14",children:[]},{value:"Collecting Stats",id:"collecting-stats",children:[]},{value:"Adding debug logging",id:"adding-debug-logging",children:[]}]},{value:"Privacy methods",id:"privacy-methods",children:[{value:"Opt-out",id:"opt-out",children:[]},{value:"Kotlin",id:"kotlin-17",children:[]},{value:"Anonymizing IP",id:"anonymizing-ip",children:[]}]},{value:"Formatting Order Completed Events",id:"formatting-order-completed-events",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Analytics for Android makes it simple to send your data to Intilery."),(0,l.kt)("p",null,"All of Intilery's client sources are open-source, so you can ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Intilery/analytics-android"},"view Analytics for Android on GitHub")),(0,l.kt)("p",null,"Want to stay updated on releases? Subscribe to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Intilery/analytics-android/releases.atom"},"release feed"),"."),(0,l.kt)("p",null,"Analytics for Android only supports any Android device running API 14 (Android 4.0) and higher. This includes Amazon Fire devices."),(0,l.kt)("h2",{id:"analytics-android-and-unique-identifiers"},"Analytics-Android and Unique Identifiers"),(0,l.kt)("p",null,"One of the most important parts of any analytics platform is the ability to consistently and accurately identify users. To do this, the platform must assign and persist some form of identification on the device, so you can analyze user actions effectively. This is especially important for funnel conversion analysis and retention analysis."),(0,l.kt)("p",null,"Naturally the Analytics SDK needs a unique ID for each user. The very first time an Android app that uses Intilery launches, the Intilery SDK generates a UUID and saves it on the device\u2019s disk. This is used as the ",(0,l.kt)("inlineCode",{parentName:"p"},"anonymousId")," and stays constant for the user on the device. To create a new user on the same device, call ",(0,l.kt)("inlineCode",{parentName:"p"},"reset")," on the Analytics client."),(0,l.kt)("p",null,"The Intilery SDK also collects the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.android.com/google/play-services/id.html"},"Advertising ID")," provided by Play Services. Make sure the Play Services Ads library is included as a dependency for your application. This is the ID that should be used for advertising purposes. This value is set to ",(0,l.kt)("inlineCode",{parentName:"p"},"context.device.advertisingId"),"."),(0,l.kt)("p",null,"Intilery also collects the ",(0,l.kt)("a",{parentName:"p",href:"http://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID"},"Android ID")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"context.device.id"),". Some destinations rely on this field being the Android ID, so double check the destinations\u2019 vendor documentation if you choose to override the default value."),(0,l.kt)("h2",{id:"api-call-queuing-in-analytics-android"},"API call queuing in Analytics-Android"),(0,l.kt)("p",null,"The Analytics-Android library queues API calls and uploads them in batches. This limits the number of network calls made, and helps save battery on the user\u2019s device."),(0,l.kt)("p",null,"When you send an event, the library saves it to disk. When the queue size reaches the maximum size you specify (20 by default), the library flushes the queue and uploads the events in a single batch. Since the data is saved immediately, it isn\u2019t lost even if the app is killed or the operating system crashes."),(0,l.kt)("h3",{id:"queue-persistance-in-analytics-android"},"Queue persistance in Analytics-Android"),(0,l.kt)("p",null,"Analytics-Android uses a persistent disk queue, so the events persist even when the app is killed. On app restart, the library reads them from disk and uploads the events. The queue works on top of ",(0,l.kt)("a",{parentName:"p",href:"http://square.github.io/tape/"},"Tape"),", which is designed to even survive process and system crashes."),(0,l.kt)("p",null,"Analytics-Android saves up to 1000 calls on disk, and these never expire."),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("h3",{id:"step-1-install-the-library"},"Step 1: Install the Library"),(0,l.kt)("p",null,"The easiest way to install the Analytics-Android library is using a build system like Gradle. This makes it simple to upgrade versions and add destinations. The library is distributed using ",(0,l.kt)("a",{parentName:"p",href:"http://maven.org/"},"Maven Central"),". Just add the ",(0,l.kt)("inlineCode",{parentName:"p"},"analytics")," module to your ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle")," file as in the example lines below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dependencies {\n  implementation 'com.intilery.analytics.android:analytics:1.0.0'\n  }\n")),(0,l.kt)("h3",{id:"step-2-initialize-the-client"},"Step 2. Initialize the Client"),(0,l.kt)("p",null,"We recommend initializing the client in your ",(0,l.kt)("inlineCode",{parentName:"p"},"Application")," subclass. You\u2019ll need your ",(0,l.kt)("a",{parentName:"p",href:"/docs/tag/tag1#client-keys"},"Intilery Write Key")," for your Android Source."),(0,l.kt)("h4",{id:"java"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Create an analytics client with the given context and Intilery write key.\nAnalytics analytics = new Analytics.Builder(context, YOUR_WRITE_KEY)\n  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!\n  .recordScreenViews() // Enable this to record screen views automatically!\n  .build();\n\n// Set the initialized instance as a globally accessible instance.\nAnalytics.setSingletonInstance(analytics);\n")),(0,l.kt)("h4",{id:"kotlin"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Create an analytics client with the given context and Intilery write key.\nval analytics = Analytics.Builder(context, YOUR_WRITE_KEY)\n  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!\n  .recordScreenViews() // Enable this to record screen views automatically!\n  .build()\n\n// Set the initialized instance as a globally accessible instance.\nAnalytics.setSingletonInstance(analytics);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can automatically track lifecycle events such as ",(0,l.kt)("inlineCode",{parentName:"li"},"Application Opened"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Application Installed"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Application Updated")," to start quickly with core events. These are optional, but highly recommended.")),(0,l.kt)("h3",{id:"customize-the-client-optional"},"Customize the Client (Optional)"),(0,l.kt)("p",null,"The entry point of the library is through the ",(0,l.kt)("inlineCode",{parentName:"p"},"Analytics")," class. As you might have seen in the quickstart, here\u2019s how you initialize the Analytics client with it\u2019s defaults."),(0,l.kt)("h4",{id:"java-1"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey).build();\n")),(0,l.kt)("h4",{id:"kotlin-1"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey).build()\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Analytics.Builder")," class lets you customize settings for the Analytics client, including things like the flush interval. Refer to the Javadocs for details on customizable parameters."),(0,l.kt)("p",null,"We also maintain a global default instance which is initialized with defaults suitable to most implementations."),(0,l.kt)("h4",{id:"java-2"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// You can also register your custom instance as a global singleton.\nAnalytics.setSingletonInstance(analytics);\nAnalytics.with(context).track(...);\n")),(0,l.kt)("h4",{id:"kotlin-2"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// You can also register your custom instance as a global singleton.\nAnalytics.setSingletonInstance(analytics)\nAnalytics.with(context).track(...)\n")),(0,l.kt)("p",null,"In general, Intilery recommends that you use the Builder method because it provides the most flexibility. Remember you can call ",(0,l.kt)("inlineCode",{parentName:"p"},"Analytics.setSingletonInstance")," only ",(0,l.kt)("em",{parentName:"p"},"ONCE"),", so it\u2019s best to put the initialization code inside your custom Application class."),(0,l.kt)("h4",{id:"java-3"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class MyApp extends Application {\n  @Override public void onCreate() {\n    Analytics analytics = new Analytics.Builder(context, writeKey).build();\n    Analytics.setSingletonInstance(analytics);\n\n    // Safely call Analytics.with(context) from anywhere within your app!\n    Analytics.with(context).track("Application Started");\n  }\n}\n')),(0,l.kt)("h4",{id:"kotlin-3"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyApp : Application() {\n  override fun onCreate() {\n    val analytics = Analytics.Builder(context, writeKey).build()\n    Analytics.setSingletonInstance(analytics)\n\n    // Safely call Analytics.with(context) from anywhere within your app!\n    Analytics.with(context).track("Application Started")\n  }\n}\n')),(0,l.kt)("p",null,"Once you initialize an Analytics client, you can safely call any of its tracking methods from any thread. These events are dispatched asynchronously to the Intilery servers."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You should only ever initialize ",(0,l.kt)("em",{parentName:"p"},"ONE")," instance of the Analytics client. These are expensive to create and throw away, and in most cases, you should stick to Intilery\u2019s singleton implementation to make using the SDK easier."),(0,l.kt)("h3",{id:"step-3-add-permissions"},"Step 3. Add Permissions"),(0,l.kt)("p",null,"Ensure that the necessary permissions are declared in your application\u2019s ",(0,l.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},' \x3c!-- Required for internet. --\x3e\n<uses-permission android:name="android.permission.INTERNET"/>\n')),(0,l.kt)("h2",{id:"data-collection---the-basic-intilery-api-calls"},"Data Collection - The Basic Intilery API calls"),(0,l.kt)("p",null,"The Intilery API calls include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#identify"},"Identify")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#track"},"Track")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#screen"},"Screen"))),(0,l.kt)("h3",{id:"identify"},"Identify"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Good to know"),": For any of the different methods described in this doc, you can replace the properties and traits in the code samples with variables that represent the data collected."),(0,l.kt)("p",null,"Identify calls let you tie a user to their actions, and record traits about them. It includes a unique User ID and any optional traits you know about them."),(0,l.kt)("p",null,"Example ",(0,l.kt)("inlineCode",{parentName:"p"},"identify")," call:"),(0,l.kt)("h4",{id:"java-4"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Analytics.with(context).identify("a user\'s id", new Traits().putName("John Doe"), null);\n')),(0,l.kt)("h4",{id:"kotlin-4"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'Analytics.with(context).identify("a user\'s id", Traits().putName("John Doe"), null)\n')),(0,l.kt)("p",null,"Intilery recommends that you make an Identify call once when the user\u2019s first creates an account, and only using the Identify call later when their traits change. Intilery remembers the previous userIDs and merges the new traits with the old ones."),(0,l.kt)("h4",{id:"java-5"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Initially when you only know the user\'s name\nAnalytics.with(context).identify(new Traits().putName("Michael Bolton"));\n\n// Sometime later in your app when the user gives you their email\nAnalytics.with(context).identify(new Traits().putEmail("mbolton@example.com"));\n')),(0,l.kt)("h4",{id:"kotlin-5"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Initially when you only know the user\'s name\nAnalytics.with(context).identify(Traits().putName("Michael Bolton"))\n\n// Sometime later in your app when the user gives you their email\nAnalytics.with(context).identify(Traits().putEmail("mbolton@example.com"))\n')),(0,l.kt)("p",null,"Remember, you can replace the properties and traits in the code samples with variables that represent the data you actually collected."),(0,l.kt)("p",null,"The Identify call has the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"userId")," ",(0,l.kt)("em",{parentName:"th"},"String,optional")),(0,l.kt)("th",{parentName:"tr",align:null},"The database ID for this user."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"traits")," ",(0,l.kt)("em",{parentName:"td"},"Traits,optional")),(0,l.kt)("td",{parentName:"tr",align:null},"A map of traits about the user, such as their name, email, address, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("em",{parentName:"td"},"Options, optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Extra options")))),(0,l.kt)("p",null,"The Android library currently automatically sends the ",(0,l.kt)("inlineCode",{parentName:"p"},"userId")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"anonymousId")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"traits"),". Additionally, ",(0,l.kt)("inlineCode",{parentName:"p"},"traits")," are sent in the ",(0,l.kt)("inlineCode",{parentName:"p"},"context.traits")," field with every message."),(0,l.kt)("h3",{id:"track"},"Track"),(0,l.kt)("p",null,"The Track call lets you record the actions your users perform. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties."),(0,l.kt)("p",null,"To get started, the Analytics-Android SDK can automatically tracks a few key common events using the Intilery ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/app"},"Native Mobile Spec"),", such as the ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Installed"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Updated")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Opened"),". You can enable this option during initialization."),(0,l.kt)("p",null,"You might also want to track events that indicate success for your mobile app, like ",(0,l.kt)("strong",{parentName:"p"},"Signed Up"),", ",(0,l.kt)("strong",{parentName:"p"},"Item Purchased")," or ",(0,l.kt)("strong",{parentName:"p"},"Article Bookmarked"),". Intilery recommends tracking just a few important events. You can always add more later!"),(0,l.kt)("p",null,"Example ",(0,l.kt)("inlineCode",{parentName:"p"},"track")," call:"),(0,l.kt)("h4",{id:"java-6"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Analytics analytics = new Analytics.Builder(context, writeKey)\n  .trackApplicationLifecycleEvents()\n  .build();\n\nAnalytics.with(context).track("Product Viewed", new Properties().putValue("name", "Moto 360"));\n')),(0,l.kt)("h4",{id:"kotlin-6"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val analytics = Analytics.Builder(context, writeKey)\n  .trackApplicationLifecycleEvents()\n  .build()\n\nAnalytics.with(context).track("Product Viewed", Properties().putValue("name", "Moto 360"))\n')),(0,l.kt)("p",null,"This example Track call tells us that your user just triggered the ",(0,l.kt)("strong",{parentName:"p"},"Product Viewed")," event with a name of \u201cMoto 360.\u201d"),(0,l.kt)("p",null,"The Track call properties can be anything you want to record, for example:"),(0,l.kt)("h3",{id:"java-7"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Analytics.with(context).track("Purchased Item", new Properties().putValue("sku", "13d31").putRevenue(199.99));\n')),(0,l.kt)("h4",{id:"kotlin-7"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'Analytics.with(context).track("Purchased Item", Properties().putValue("sku", "13d31").putRevenue(199.99))\n')),(0,l.kt)("p",null,"The Track call includes the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"name")," ",(0,l.kt)("em",{parentName:"th"},"String,required")),(0,l.kt)("th",{parentName:"tr",align:null},"A name for the tracked action."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")," ",(0,l.kt)("em",{parentName:"td"},"Properties,optional")),(0,l.kt)("td",{parentName:"tr",align:null},"A map of properties for this action, e.g. revenue if the action was a purchase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("em",{parentName:"td"},"Options,optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Options")))),(0,l.kt)("h3",{id:"screen"},"Screen"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/screen/"},"Screen")," method lets you you record whenever a user sees a screen of your mobile app, along with optional extra information about the page being viewed."),(0,l.kt)("p",null,"You\u2019ll want to record a screen event an event whenever the user opens a screen in your app. This could be a view, fragment, dialog or activity depending on your app."),(0,l.kt)("p",null,"Not all services support screen, so when it\u2019s not supported explicitly, the screen method tracks as an event with the same parameters."),(0,l.kt)("p",null,"Example ",(0,l.kt)("inlineCode",{parentName:"p"},"screen")," call:"),(0,l.kt)("h3",{id:"java-8"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// category "Feed" and a property "Feed Length"\nAnalytics.with(context).screen("Feed", new Properties().putValue("Feed Length", "26"));\n\n// no category, name "Photo Feed" and a property "Feed Length"\nAnalytics.with(context).screen(null, "Photo Feed", new Properties().putValue("Feed Length", "26"));\n\n// category "Smartwatches", name "Purchase Screen", and a property "sku"\nAnalytics.with(context).screen("Smartwatches", "Purchase Screen", new Properties().putValue("sku", "13d31"));\n')),(0,l.kt)("h4",{id:"kotlin-8"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// category "Feed" and a property "Feed Length"\nAnalytics.with(context).screen("Feed", Properties().putValue("Feed Length", "26"))\n\n// no category, name "Photo Feed" and a property "Feed Length"\nAnalytics.with(context).screen(null, "Photo Feed", Properties().putValue("Feed Length", "26"))\n\n// category "Smartwatches", name "Purchase Screen", and a property "sku"\nAnalytics.with(context).screen("Smartwatches", "Purchase Screen", Properties().putValue("sku", "13d31"))\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"screen")," call has the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"category")," *String,optional**"),(0,l.kt)("th",{parentName:"tr",align:null},"A category for the screen. Optional if name is provided."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")," *String,optional**"),(0,l.kt)("td",{parentName:"tr",align:null},"A name for the screen. Optional if category is provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")," ",(0,l.kt)("em",{parentName:"td"},"Properties,optional")),(0,l.kt)("td",{parentName:"tr",align:null},"A map of properties for this screen.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," ",(0,l.kt)("em",{parentName:"td"},"Options,optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Options")))),(0,l.kt)("p",null,"Find details on the Screen payload in ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/screen/"},"the Intilery Screen call spec"),"."),(0,l.kt)("h4",{id:"automatic-screen-tracking"},"Automatic Screen Tracking"),(0,l.kt)("p",null,"The Intilery SDK can automatically instrument screen calls, using the label of the activity you declared in the ",(0,l.kt)("inlineCode",{parentName:"p"},"manifest")," as the screen\u2019s name. Fragments and views do not trigger screen calls automatically, however you can manually call the Screen method for these."),(0,l.kt)("h4",{id:"java-9"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey)\n  .recordScreenViews()\n  .build();\n")),(0,l.kt)("h4",{id:"kotlin-9"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey)\n  .recordScreenViews()\n  .build()\n")),(0,l.kt)("h2",{id:"context"},"Context"),(0,l.kt)("p",null,"Context is a dictionary of extra information you can provide about a specific API call. You can add any custom data to the context dictionary that you want to have access to in the raw logs. Some keys in the context dictionary ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/common#context"},"have semantic meaning and are collected for you automatically"),", such as information about the user\u2019s device."),(0,l.kt)("h4",{id:"java-10"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"AnalyticsContext analyticsContext = Analytics.with(context).getAnalyticsContext();\nanalyticsContext.putValue(...).putReferrer(...).putCampaign(...);\n")),(0,l.kt)("h4",{id:"kotlin-10"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val analyticsContext = Analytics.with(context).analyticsContext\nanalyticsContext.putValue(...).putReferrer(...).putCampaign(...)\n")),(0,l.kt)("p",null,"You can read more about these special fields in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/common#context"},"Intilery Common spec documentation"),"."),(0,l.kt)("p",null,"To alter data specific to the device object you can use the following:"),(0,l.kt)("h3",{id:"java-11"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'AnalyticsContext analyticsContext = Analytics.with(context).getAnalyticsContext();\nanalyticsContext.device().putValue("advertisingId", "1");\n')),(0,l.kt)("h4",{id:"kotlin-11"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val analyticsContext = Analytics.with(context).analyticsContext\nanalyticsContext.device().putValue("advertisingId", "1")\n')),(0,l.kt)("p",null,"To opt out of automatic data collection, clear the context after initializing the client. Do this ",(0,l.kt)("em",{parentName:"p"},"BEFORE")," you send any events."),(0,l.kt)("h4",{id:"java-12"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey).defaultOptions(defaultOptions).build();\nAnalyticsContext context = getAnalyticsContext();\ncontext.clear();\n")),(0,l.kt)("h3",{id:"kotlin-12"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey).defaultOptions(defaultOptions).build()\nval context = analytics.analyticsContext\ncontext.clear()\n")),(0,l.kt)("h2",{id:"utility-methods"},"Utility methods"),(0,l.kt)("h3",{id:"retrieve-anonymousid"},"Retrieve AnonymousId"),(0,l.kt)("p",null,"You can retrieve the ",(0,l.kt)("inlineCode",{parentName:"p"},"anonymousId")," set by the library by using:"),(0,l.kt)("h4",{id:"java-13"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Analytics.with(context).getAnalyticsContext().traits().anonymousId();\n")),(0,l.kt)("h3",{id:"kotlin-13"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"Analytics.with(context).analyticsContext().traits().anonymousId()\n")),(0,l.kt)("h3",{id:"reset"},"Reset"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"reset")," method clears the SDK\u2019s internal stores for the current user and group. This is useful for apps where users log in and out with different identities on the same device over time."),(0,l.kt)("p",null,"The example code below clears all information about the user."),(0,l.kt)("h3",{id:"java-14"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Analytics.with(context).reset();\n")),(0,l.kt)("h4",{id:"kotlin-14"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"Analytics.with(context).reset()\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Reset does not clear events in the queue"),", and any remaining events in the queue are sent the next time the app starts. You might want to call ",(0,l.kt)("a",{parentName:"p",href:"#flush"},"Flush")," before you call Reset."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": When you call ",(0,l.kt)("inlineCode",{parentName:"p"},"reset"),", the next time the app opens Intilery generates a new AnonymousId. This can impact the number of Monthly Tracked Users (MTUs) you process."),(0,l.kt)("h3",{id:"collecting-stats"},"Collecting Stats"),(0,l.kt)("p",null,"Local device stats help you quickly see how many events you sent to Intilery, the average time bundled destinations took to run, and similar metrics."),(0,l.kt)("h4",{id:"java-15"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"StatsSnapshot snapshot = Analytics.with(context).getSnapshot();\nlog(snapshot.integrationOperationAverageDuration);\nlog(snapshot.flushCount);\n")),(0,l.kt)("h4",{id:"kotlin-15"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val snapshot = Analytics.with(context).snapshot()\nlog(snapshot.integrationOperationAverageDuration)\nlog(snapshot.flushCount)\n")),(0,l.kt)("h3",{id:"adding-debug-logging"},"Adding debug logging"),(0,l.kt)("p",null,"If you run into issues while using the Android library, you can enable logging to help trace the issue. Logging also helps you see how long destinations take to complete their calls so you can find performance bottlenecks."),(0,l.kt)("p",null,"The logging is enabled by default in the default singleton instance if your application is running in ",(0,l.kt)("inlineCode",{parentName:"p"},"debug")," mode. If you use a custom instance, attach a ",(0,l.kt)("inlineCode",{parentName:"p"},"LogLevel")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Builder")," and set the logging level there, as in the example below."),(0,l.kt)("h4",{id:"java-16"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey).logLevel(LogLevel.VERBOSE)...build();\n")),(0,l.kt)("h4",{id:"kotlin-16"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey).logLevel(LogLevel.VERBOSE)...build()\n")),(0,l.kt)("p",null,"You can choose to disable logging completely (",(0,l.kt)("inlineCode",{parentName:"p"},"LogLevel.NONE"),"), enable basic logging for the SDK (",(0,l.kt)("inlineCode",{parentName:"p"},"LogLevel.BASIC"),"), enable basic logging for Device-mode destination (",(0,l.kt)("inlineCode",{parentName:"p"},"LogLevel.INFO"),"), or simply log everything (",(0,l.kt)("inlineCode",{parentName:"p"},"LogLevel.VERBOSE"),")."),(0,l.kt)("p",null,"Intilery recommends that you turn logging off in ",(0,l.kt)("em",{parentName:"p"},"production")," modes of your app."),(0,l.kt)("h2",{id:"privacy-methods"},"Privacy methods"),(0,l.kt)("h3",{id:"opt-out"},"Opt-out"),(0,l.kt)("p",null,"Depending on the audience for your app (for example, children) or the countries where you sell your app (for example, the EU), you may need to offer the ability for users to opt-out of analytics data collection inside your app. You can turn off ALL destinations including Intilery itself:"),(0,l.kt)("h4",{id:"java-17"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Analytics.with(this).optOut(true);\n")),(0,l.kt)("h3",{id:"kotlin-17"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"Analytics.with(this).optOut(true)\n")),(0,l.kt)("p",null,"Set the opt-out status for the current device and analytics client combination. This flag persists across device reboots, so you can call it once in your application, such as in a screen where a user can opt out of analytics tracking."),(0,l.kt)("h3",{id:"anonymizing-ip"},"Anonymizing IP"),(0,l.kt)("p",null,"The Intilery iOS, Android, Analytics.js and Xamarin libraries automatically derive and set the IP address for events recorded on the user\u2019s device. The IP is not collected on the device itself, but instead is filled in by Intilery\u2019s servers when they receive a message."),(0,l.kt)("p",null,"To prevent Intilery from recording the users\u2019 IP in destinations and S3, you can set the event\u2019s ",(0,l.kt)("inlineCode",{parentName:"p"},"context.ip")," field to ",(0,l.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),". The Intilery servers won\u2019t overwrite this data if it comes from the client, and so do not record the IP address of the client."),(0,l.kt)("h2",{id:"formatting-order-completed-events"},"Formatting Order Completed Events"),(0,l.kt)("p",null,"Intilery\u2019s Android library provides several helper methods so you can easily construct both properties objects and products lists so your Order Completed events conform to the Intilery ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/retail"},"ecommerce specification"),". Here\u2019s a code example:"),(0,l.kt)("h4",{id:"java-18"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import com.segment.analytics.Analytics;\nimport com.segment.analytics.Properties;\nimport com.segment.analytics.Properties.Product;\n\n// initialize a new properties object\nProperties properties = new Properties();\n\n// add orderId and revenue to the properties object\nproperties.putValue("orderId", String orderId).putValue("revenue", double revenue);\n\n// initialize a new product\nProduct product1 = new Product(String id, String sku, double price);\n\n// initialize a second product\nProduct product2 = new Product(String id, String sku, double price);\n\n// add products to the properties object\nproperties.putProducts(product1, product2);\n\n// pass the properties object into your Order Completed event\nAnalytics.with(context).track("Order Completed", properties);\n')),(0,l.kt)("h4",{id:"kotlin-18"},"Kotlin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.segment.analytics.Analytics\nimport com.segment.analytics.Properties\nimport com.segment.analytics.Properties.Product\n\n// initialize a new properties object\nval properties = Properties();\n\n// add orderId and revenue to the properties object\nproperties.putValue("orderId", orderId).putValue("revenue", revenue)\n\n// initialize a new product\nProduct product1 = Product(id, sku, price)\n\n// initialize a second product\nProduct product2 = Product(id, sku, price)\n\n// add products to the properties object\nproperties.putProducts(product1, product2)\n\n// pass the properties object into your Order Completed event\nAnalytics.with(context).track("Order Completed", properties)\n')),(0,l.kt)("p",null,"Find details on ",(0,l.kt)("strong",{parentName:"p"},"best practices in event naming")," as well as the ",(0,l.kt)("strong",{parentName:"p"},"Track method payload")," in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/schema/track"},"Intilery Track call spec"),"."))}u.isMDXComponent=!0}}]);