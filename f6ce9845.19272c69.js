(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),l=(n(0),n(142)),r={id:"android",title:"Android Mobile SDK",sidebar_label:"Android Mobile SDK"},o={unversionedId:"sdk/android",id:"sdk/android",isDocsHomePage:!1,title:"Android Mobile SDK",description:"Analytics for Android makes it simple to send your data to Intilery.",source:"@site/docs/sdk/android.md",slug:"/sdk/android",permalink:"/docs/sdk/android",version:"current",sidebar_label:"Android Mobile SDK",sidebar:"sdk",previous:{title:"iOS Push Notifications",permalink:"/docs/sdk/ios-push"},next:{title:"Quickstart Android",permalink:"/docs/sdk/android-quickstart"}},c=[{value:"Analytics-Android and Unique Identifiers",id:"analytics-android-and-unique-identifiers",children:[]},{value:"API call queuing in Analytics-Android",id:"api-call-queuing-in-analytics-android",children:[{value:"Queue persistance in Analytics-Android",id:"queue-persistance-in-analytics-android",children:[]}]},{value:"Getting Started",id:"getting-started",children:[{value:"Step 1: Install the Library",id:"step-1-install-the-library",children:[]},{value:"Step 2. Initialize the Client",id:"step-2-initialize-the-client",children:[]},{value:"Customize the Client (Optional)",id:"customize-the-client-optional",children:[]},{value:"Step 3. Add Permissions",id:"step-3-add-permissions",children:[]}]},{value:"Data Collection - The Basic Intilery API calls",id:"data-collection---the-basic-intilery-api-calls",children:[{value:"Identify",id:"identify",children:[]},{value:"Track",id:"track",children:[]},{value:"Java",id:"java-7",children:[]},{value:"Screen",id:"screen",children:[]},{value:"Java",id:"java-8",children:[]}]},{value:"Context",id:"context",children:[{value:"Java",id:"java-11",children:[]},{value:"Kotlin",id:"kotlin-12",children:[]}]},{value:"Utility methods",id:"utility-methods",children:[{value:"Retrieve AnonymousId",id:"retrieve-anonymousid",children:[]},{value:"Kotlin",id:"kotlin-13",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Java",id:"java-14",children:[]},{value:"Collecting Stats",id:"collecting-stats",children:[]},{value:"Adding debug logging",id:"adding-debug-logging",children:[]}]},{value:"Privacy methods",id:"privacy-methods",children:[{value:"Opt-out",id:"opt-out",children:[]},{value:"Kotlin",id:"kotlin-17",children:[]},{value:"Anonymizing IP",id:"anonymizing-ip",children:[]}]},{value:"Formatting Order Completed Events",id:"formatting-order-completed-events",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Analytics for Android makes it simple to send your data to Intilery."),Object(l.b)("p",null,"All of Intilery's client sources are open-source, so you can ",Object(l.b)("a",{parentName:"p",href:"https://github.com/Intilery/analytics-android"},"view Analytics for Android on GitHub")),Object(l.b)("p",null,"Want to stay updated on releases? Subscribe to the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/Intilery/analytics-android/releases.atom"},"release feed"),"."),Object(l.b)("p",null,"Analytics for Android only supports any Android device running API 14 (Android 4.0) and higher. This includes Amazon Fire devices."),Object(l.b)("h2",{id:"analytics-android-and-unique-identifiers"},"Analytics-Android and Unique Identifiers"),Object(l.b)("p",null,"One of the most important parts of any analytics platform is the ability to consistently and accurately identify users. To do this, the platform must assign and persist some form of identification on the device, so you can analyze user actions effectively. This is especially important for funnel conversion analysis and retention analysis."),Object(l.b)("p",null,"Naturally the Analytics SDK needs a unique ID for each user. The very first time an Android app that uses Intilery launches, the Intilery SDK generates a UUID and saves it on the device\u2019s disk. This is used as the ",Object(l.b)("inlineCode",{parentName:"p"},"anonymousId")," and stays constant for the user on the device. To create a new user on the same device, call ",Object(l.b)("inlineCode",{parentName:"p"},"reset")," on the Analytics client."),Object(l.b)("p",null,"The Intilery SDK also collects the ",Object(l.b)("a",{parentName:"p",href:"https://developer.android.com/google/play-services/id.html"},"Advertising ID")," provided by Play Services. Make sure the Play Services Ads library is included as a dependency for your application. This is the ID that should be used for advertising purposes. This value is set to ",Object(l.b)("inlineCode",{parentName:"p"},"context.device.advertisingId"),"."),Object(l.b)("p",null,"Intilery also collects the ",Object(l.b)("a",{parentName:"p",href:"http://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID"},"Android ID")," as ",Object(l.b)("inlineCode",{parentName:"p"},"context.device.id"),". Some destinations rely on this field being the Android ID, so double check the destinations\u2019 vendor documentation if you choose to override the default value."),Object(l.b)("h2",{id:"api-call-queuing-in-analytics-android"},"API call queuing in Analytics-Android"),Object(l.b)("p",null,"The Analytics-Android library queues API calls and uploads them in batches. This limits the number of network calls made, and helps save battery on the user\u2019s device."),Object(l.b)("p",null,"When you send an event, the library saves it to disk. When the queue size reaches the maximum size you specify (20 by default), the library flushes the queue and uploads the events in a single batch. Since the data is saved immediately, it isn\u2019t lost even if the app is killed or the operating system crashes."),Object(l.b)("h3",{id:"queue-persistance-in-analytics-android"},"Queue persistance in Analytics-Android"),Object(l.b)("p",null,"Analytics-Android uses a persistent disk queue, so the events persist even when the app is killed. On app restart, the library reads them from disk and uploads the events. The queue works on top of ",Object(l.b)("a",{parentName:"p",href:"http://square.github.io/tape/"},"Tape"),", which is designed to even survive process and system crashes."),Object(l.b)("p",null,"Analytics-Android saves up to 1000 calls on disk, and these never expire."),Object(l.b)("h2",{id:"getting-started"},"Getting Started"),Object(l.b)("h3",{id:"step-1-install-the-library"},"Step 1: Install the Library"),Object(l.b)("p",null,"The easiest way to install the Analytics-Android library is using a build system like Gradle. This makes it simple to upgrade versions and add destinations. The library is distributed using ",Object(l.b)("a",{parentName:"p",href:"http://maven.org/"},"Maven Central"),". Just add the ",Object(l.b)("inlineCode",{parentName:"p"},"analytics")," module to your ",Object(l.b)("inlineCode",{parentName:"p"},"build.gradle")," file as in the example lines below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"dependencies {\n  implementation 'com.intilery.analytics.android:analytics:1.0.0'\n  }\n")),Object(l.b)("h3",{id:"step-2-initialize-the-client"},"Step 2. Initialize the Client"),Object(l.b)("p",null,"We recommend initializing the client in your ",Object(l.b)("inlineCode",{parentName:"p"},"Application")," subclass. You\u2019ll need your ",Object(l.b)("a",{parentName:"p",href:"/docs/tag/tag1#client-keys"},"Intilery Write Key")," for your Android Source."),Object(l.b)("h4",{id:"java"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// Create an analytics client with the given context and Intilery write key.\nAnalytics analytics = new Analytics.Builder(context, YOUR_WRITE_KEY)\n  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!\n  .recordScreenViews() // Enable this to record screen views automatically!\n  .build();\n\n// Set the initialized instance as a globally accessible instance.\nAnalytics.setSingletonInstance(analytics);\n")),Object(l.b)("h4",{id:"kotlin"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"// Create an analytics client with the given context and Intilery write key.\nval analytics = Analytics.Builder(context, YOUR_WRITE_KEY)\n  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!\n  .recordScreenViews() // Enable this to record screen views automatically!\n  .build()\n\n// Set the initialized instance as a globally accessible instance.\nAnalytics.setSingletonInstance(analytics);\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Notes"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can automatically track lifecycle events such as ",Object(l.b)("inlineCode",{parentName:"li"},"Application Opened"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Application Installed"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Application Updated")," to start quickly with core events. These are optional, but highly recommended.")),Object(l.b)("h3",{id:"customize-the-client-optional"},"Customize the Client (Optional)"),Object(l.b)("p",null,"The entry point of the library is through the ",Object(l.b)("inlineCode",{parentName:"p"},"Analytics")," class. As you might have seen in the quickstart, here\u2019s how you initialize the Analytics client with it\u2019s defaults."),Object(l.b)("h4",{id:"java-1"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey).build();\n")),Object(l.b)("h4",{id:"kotlin-1"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey).build()\n")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Analytics.Builder")," class lets you customize settings for the Analytics client, including things like the flush interval. Refer to the Javadocs for details on customizable parameters."),Object(l.b)("p",null,"We also maintain a global default instance which is initialized with defaults suitable to most implementations."),Object(l.b)("h4",{id:"java-2"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"// You can also register your custom instance as a global singleton.\nAnalytics.setSingletonInstance(analytics);\nAnalytics.with(context).track(...);\n")),Object(l.b)("h4",{id:"kotlin-2"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"// You can also register your custom instance as a global singleton.\nAnalytics.setSingletonInstance(analytics)\nAnalytics.with(context).track(...)\n")),Object(l.b)("p",null,"In general, Intilery recommends that you use the Builder method because it provides the most flexibility. Remember you can call ",Object(l.b)("inlineCode",{parentName:"p"},"Analytics.setSingletonInstance")," only ",Object(l.b)("em",{parentName:"p"},"ONCE"),", so it\u2019s best to put the initialization code inside your custom Application class."),Object(l.b)("h4",{id:"java-3"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'public class MyApp extends Application {\n  @Override public void onCreate() {\n    Analytics analytics = new Analytics.Builder(context, writeKey).build();\n    Analytics.setSingletonInstance(analytics);\n\n    // Safely call Analytics.with(context) from anywhere within your app!\n    Analytics.with(context).track("Application Started");\n  }\n}\n')),Object(l.b)("h4",{id:"kotlin-3"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'class MyApp : Application() {\n  override fun onCreate() {\n    val analytics = Analytics.Builder(context, writeKey).build()\n    Analytics.setSingletonInstance(analytics)\n\n    // Safely call Analytics.with(context) from anywhere within your app!\n    Analytics.with(context).track("Application Started")\n  }\n}\n')),Object(l.b)("p",null,"Once you initialize an Analytics client, you can safely call any of its tracking methods from any thread. These events are dispatched asynchronously to the Intilery servers."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," You should only ever initialize ",Object(l.b)("em",{parentName:"p"},"ONE")," instance of the Analytics client. These are expensive to create and throw away, and in most cases, you should stick to Intilery\u2019s singleton implementation to make using the SDK easier."),Object(l.b)("h3",{id:"step-3-add-permissions"},"Step 3. Add Permissions"),Object(l.b)("p",null,"Ensure that the necessary permissions are declared in your application\u2019s ",Object(l.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-xml"},' \x3c!-- Required for internet. --\x3e\n<uses-permission android:name="android.permission.INTERNET"/>\n')),Object(l.b)("h2",{id:"data-collection---the-basic-intilery-api-calls"},"Data Collection - The Basic Intilery API calls"),Object(l.b)("p",null,"The Intilery API calls include:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#identify"},"Identify")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#track"},"Track")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#screen"},"Screen"))),Object(l.b)("h3",{id:"identify"},"Identify"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Good to know"),": For any of the different methods described in this doc, you can replace the properties and traits in the code samples with variables that represent the data collected."),Object(l.b)("p",null,"Identify calls let you tie a user to their actions, and record traits about them. It includes a unique User ID and any optional traits you know about them."),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"identify")," call:"),Object(l.b)("h4",{id:"java-4"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'Analytics.with(context).identify("a user\'s id", new Traits().putName("John Doe"), null);\n')),Object(l.b)("h4",{id:"kotlin-4"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'Analytics.with(context).identify("a user\'s id", Traits().putName("John Doe"), null)\n')),Object(l.b)("p",null,"Intilery recommends that you make an Identify call once when the user\u2019s first creates an account, and only using the Identify call later when their traits change. Intilery remembers the previous userIDs and merges the new traits with the old ones."),Object(l.b)("h4",{id:"java-5"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// Initially when you only know the user\'s name\nAnalytics.with(context).identify(new Traits().putName("Michael Bolton"));\n\n// Sometime later in your app when the user gives you their email\nAnalytics.with(context).identify(new Traits().putEmail("mbolton@example.com"));\n')),Object(l.b)("h4",{id:"kotlin-5"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'// Initially when you only know the user\'s name\nAnalytics.with(context).identify(Traits().putName("Michael Bolton"))\n\n// Sometime later in your app when the user gives you their email\nAnalytics.with(context).identify(Traits().putEmail("mbolton@example.com"))\n')),Object(l.b)("p",null,"Remember, you can replace the properties and traits in the code samples with variables that represent the data you actually collected."),Object(l.b)("p",null,"The Identify call has the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"userId")," ",Object(l.b)("em",{parentName:"th"},"String,optional")),Object(l.b)("th",{parentName:"tr",align:null},"The database ID for this user."))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"traits")," ",Object(l.b)("em",{parentName:"td"},"Traits,optional")),Object(l.b)("td",{parentName:"tr",align:null},"A map of traits about the user, such as their name, email, address, etc.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"options")," ",Object(l.b)("em",{parentName:"td"},"Options, optional")),Object(l.b)("td",{parentName:"tr",align:null},"Extra options")))),Object(l.b)("p",null,"The Android library currently automatically sends the ",Object(l.b)("inlineCode",{parentName:"p"},"userId")," and ",Object(l.b)("inlineCode",{parentName:"p"},"anonymousId")," as ",Object(l.b)("inlineCode",{parentName:"p"},"traits"),". Additionally, ",Object(l.b)("inlineCode",{parentName:"p"},"traits")," are sent in the ",Object(l.b)("inlineCode",{parentName:"p"},"context.traits")," field with every message."),Object(l.b)("h3",{id:"track"},"Track"),Object(l.b)("p",null,"The Track call lets you record the actions your users perform. Every action triggers what we call an \u201cevent\u201d, which can also have associated properties."),Object(l.b)("p",null,"To get started, the Analytics-Android SDK can automatically tracks a few key common events using the Intilery ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/mobile"},"Native Mobile Spec"),", such as the ",Object(l.b)("inlineCode",{parentName:"p"},"Application Installed"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Application Updated")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Application Opened"),". You can enable this option during initialization."),Object(l.b)("p",null,"You might also want to track events that indicate success for your mobile app, like ",Object(l.b)("strong",{parentName:"p"},"Signed Up"),", ",Object(l.b)("strong",{parentName:"p"},"Item Purchased")," or ",Object(l.b)("strong",{parentName:"p"},"Article Bookmarked"),". Intilery recommends tracking just a few important events. You can always add more later!"),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"track")," call:"),Object(l.b)("h4",{id:"java-6"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'Analytics analytics = new Analytics.Builder(context, writeKey)\n  .trackApplicationLifecycleEvents()\n  .build();\n\nAnalytics.with(context).track("Product Viewed", new Properties().putValue("name", "Moto 360"));\n')),Object(l.b)("h4",{id:"kotlin-6"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'val analytics = Analytics.Builder(context, writeKey)\n  .trackApplicationLifecycleEvents()\n  .build()\n\nAnalytics.with(context).track("Product Viewed", Properties().putValue("name", "Moto 360"))\n')),Object(l.b)("p",null,"This example Track call tells us that your user just triggered the ",Object(l.b)("strong",{parentName:"p"},"Product Viewed")," event with a name of \u201cMoto 360.\u201d"),Object(l.b)("p",null,"The Track call properties can be anything you want to record, for example:"),Object(l.b)("h3",{id:"java-7"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'Analytics.with(context).track("Purchased Item", new Properties().putValue("sku", "13d31").putRevenue(199.99));\n')),Object(l.b)("h4",{id:"kotlin-7"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'Analytics.with(context).track("Purchased Item", Properties().putValue("sku", "13d31").putRevenue(199.99))\n')),Object(l.b)("p",null,"The Track call includes the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"name")," ",Object(l.b)("em",{parentName:"th"},"String,required")),Object(l.b)("th",{parentName:"tr",align:null},"A name for the tracked action."))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"properties")," ",Object(l.b)("em",{parentName:"td"},"Properties,optional")),Object(l.b)("td",{parentName:"tr",align:null},"A map of properties for this action, e.g. revenue if the action was a purchase.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"options")," ",Object(l.b)("em",{parentName:"td"},"Options,optional")),Object(l.b)("td",{parentName:"tr",align:null},"Options")))),Object(l.b)("h3",{id:"screen"},"Screen"),Object(l.b)("p",null,"The ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/screen/"},"Screen")," method lets you you record whenever a user sees a screen of your mobile app, along with optional extra information about the page being viewed."),Object(l.b)("p",null,"You\u2019ll want to record a screen event an event whenever the user opens a screen in your app. This could be a view, fragment, dialog or activity depending on your app."),Object(l.b)("p",null,"Not all services support screen, so when it\u2019s not supported explicitly, the screen method tracks as an event with the same parameters."),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"screen")," call:"),Object(l.b)("h3",{id:"java-8"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'// category "Feed" and a property "Feed Length"\nAnalytics.with(context).screen("Feed", new Properties().putValue("Feed Length", "26"));\n\n// no category, name "Photo Feed" and a property "Feed Length"\nAnalytics.with(context).screen(null, "Photo Feed", new Properties().putValue("Feed Length", "26"));\n\n// category "Smartwatches", name "Purchase Screen", and a property "sku"\nAnalytics.with(context).screen("Smartwatches", "Purchase Screen", new Properties().putValue("sku", "13d31"));\n')),Object(l.b)("h4",{id:"kotlin-8"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'// category "Feed" and a property "Feed Length"\nAnalytics.with(context).screen("Feed", Properties().putValue("Feed Length", "26"))\n\n// no category, name "Photo Feed" and a property "Feed Length"\nAnalytics.with(context).screen(null, "Photo Feed", Properties().putValue("Feed Length", "26"))\n\n// category "Smartwatches", name "Purchase Screen", and a property "sku"\nAnalytics.with(context).screen("Smartwatches", "Purchase Screen", Properties().putValue("sku", "13d31"))\n')),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"screen")," call has the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"th"},"category")," *String,optional**"),Object(l.b)("th",{parentName:"tr",align:null},"A category for the screen. Optional if name is provided."))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"name")," *String,optional**"),Object(l.b)("td",{parentName:"tr",align:null},"A name for the screen. Optional if category is provided.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"properties")," ",Object(l.b)("em",{parentName:"td"},"Properties,optional")),Object(l.b)("td",{parentName:"tr",align:null},"A map of properties for this screen.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"options")," ",Object(l.b)("em",{parentName:"td"},"Options,optional")),Object(l.b)("td",{parentName:"tr",align:null},"Options")))),Object(l.b)("p",null,"Find details on the Screen payload in ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/screen/"},"the Intilery Screen call spec"),"."),Object(l.b)("h4",{id:"automatic-screen-tracking"},"Automatic Screen Tracking"),Object(l.b)("p",null,"The Intilery SDK can automatically instrument screen calls, using the label of the activity you declared in the ",Object(l.b)("inlineCode",{parentName:"p"},"manifest")," as the screen\u2019s name. Fragments and views do not trigger screen calls automatically, however you can manually call the Screen method for these."),Object(l.b)("h4",{id:"java-9"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey)\n  .recordScreenViews()\n  .build();\n")),Object(l.b)("h4",{id:"kotlin-9"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey)\n  .recordScreenViews()\n  .build()\n")),Object(l.b)("h2",{id:"context"},"Context"),Object(l.b)("p",null,"Context is a dictionary of extra information you can provide about a specific API call. You can add any custom data to the context dictionary that you want to have access to in the raw logs. Some keys in the context dictionary ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/common#context"},"have semantic meaning and are collected for you automatically"),", such as information about the user\u2019s device."),Object(l.b)("h4",{id:"java-10"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"AnalyticsContext analyticsContext = Analytics.with(context).getAnalyticsContext();\nanalyticsContext.putValue(...).putReferrer(...).putCampaign(...);\n")),Object(l.b)("h4",{id:"kotlin-10"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"val analyticsContext = Analytics.with(context).analyticsContext\nanalyticsContext.putValue(...).putReferrer(...).putCampaign(...)\n")),Object(l.b)("p",null,"You can read more about these special fields in the ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/common#context"},"Intilery Common spec documentation"),"."),Object(l.b)("p",null,"To alter data specific to the device object you can use the following:"),Object(l.b)("h3",{id:"java-11"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'AnalyticsContext analyticsContext = Analytics.with(context).getAnalyticsContext();\nanalyticsContext.device().putValue("advertisingId", "1");\n')),Object(l.b)("h4",{id:"kotlin-11"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'val analyticsContext = Analytics.with(context).analyticsContext\nanalyticsContext.device().putValue("advertisingId", "1")\n')),Object(l.b)("p",null,"To opt out of automatic data collection, clear the context after initializing the client. Do this ",Object(l.b)("em",{parentName:"p"},"BEFORE")," you send any events."),Object(l.b)("h4",{id:"java-12"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey).defaultOptions(defaultOptions).build();\nAnalyticsContext context = getAnalyticsContext();\ncontext.clear();\n")),Object(l.b)("h3",{id:"kotlin-12"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey).defaultOptions(defaultOptions).build()\nval context = analytics.analyticsContext\ncontext.clear()\n")),Object(l.b)("h2",{id:"utility-methods"},"Utility methods"),Object(l.b)("h3",{id:"retrieve-anonymousid"},"Retrieve AnonymousId"),Object(l.b)("p",null,"You can retrieve the ",Object(l.b)("inlineCode",{parentName:"p"},"anonymousId")," set by the library by using:"),Object(l.b)("h4",{id:"java-13"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Analytics.with(context).getAnalyticsContext().traits().anonymousId();\n")),Object(l.b)("h3",{id:"kotlin-13"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"Analytics.with(context).analyticsContext().traits().anonymousId()\n")),Object(l.b)("h3",{id:"reset"},"Reset"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"reset")," method clears the SDK\u2019s internal stores for the current user and group. This is useful for apps where users log in and out with different identities on the same device over time."),Object(l.b)("p",null,"The example code below clears all information about the user."),Object(l.b)("h3",{id:"java-14"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Analytics.with(context).reset();\n")),Object(l.b)("h4",{id:"kotlin-14"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"Analytics.with(context).reset()\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Reset does not clear events in the queue"),", and any remaining events in the queue are sent the next time the app starts. You might want to call ",Object(l.b)("a",{parentName:"p",href:"#flush"},"Flush")," before you call Reset."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note"),": When you call ",Object(l.b)("inlineCode",{parentName:"p"},"reset"),", the next time the app opens Intilery generates a new AnonymousId. This can impact the number of Monthly Tracked Users (MTUs) you process."),Object(l.b)("h3",{id:"collecting-stats"},"Collecting Stats"),Object(l.b)("p",null,"Local device stats help you quickly see how many events you sent to Intilery, the average time bundled destinations took to run, and similar metrics."),Object(l.b)("h4",{id:"java-15"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"StatsSnapshot snapshot = Analytics.with(context).getSnapshot();\nlog(snapshot.integrationOperationAverageDuration);\nlog(snapshot.flushCount);\n")),Object(l.b)("h4",{id:"kotlin-15"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"val snapshot = Analytics.with(context).snapshot()\nlog(snapshot.integrationOperationAverageDuration)\nlog(snapshot.flushCount)\n")),Object(l.b)("h3",{id:"adding-debug-logging"},"Adding debug logging"),Object(l.b)("p",null,"If you run into issues while using the Android library, you can enable logging to help trace the issue. Logging also helps you see how long destinations take to complete their calls so you can find performance bottlenecks."),Object(l.b)("p",null,"The logging is enabled by default in the default singleton instance if your application is running in ",Object(l.b)("inlineCode",{parentName:"p"},"debug")," mode. If you use a custom instance, attach a ",Object(l.b)("inlineCode",{parentName:"p"},"LogLevel")," to the ",Object(l.b)("inlineCode",{parentName:"p"},"Builder")," and set the logging level there, as in the example below."),Object(l.b)("h4",{id:"java-16"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey).logLevel(LogLevel.VERBOSE)...build();\n")),Object(l.b)("h4",{id:"kotlin-16"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"val analytics = Analytics.Builder(context, writeKey).logLevel(LogLevel.VERBOSE)...build()\n")),Object(l.b)("p",null,"You can choose to disable logging completely (",Object(l.b)("inlineCode",{parentName:"p"},"LogLevel.NONE"),"), enable basic logging for the SDK (",Object(l.b)("inlineCode",{parentName:"p"},"LogLevel.BASIC"),"), enable basic logging for Device-mode destination (",Object(l.b)("inlineCode",{parentName:"p"},"LogLevel.INFO"),"), or simply log everything (",Object(l.b)("inlineCode",{parentName:"p"},"LogLevel.VERBOSE"),")."),Object(l.b)("p",null,"Intilery recommends that you turn logging off in ",Object(l.b)("em",{parentName:"p"},"production")," modes of your app."),Object(l.b)("h2",{id:"privacy-methods"},"Privacy methods"),Object(l.b)("h3",{id:"opt-out"},"Opt-out"),Object(l.b)("p",null,"Depending on the audience for your app (for example, children) or the countries where you sell your app (for example, the EU), you may need to offer the ability for users to opt-out of analytics data collection inside your app. You can turn off ALL destinations including Intilery itself:"),Object(l.b)("h4",{id:"java-17"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"Analytics.with(this).optOut(true);\n")),Object(l.b)("h3",{id:"kotlin-17"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"Analytics.with(this).optOut(true)\n")),Object(l.b)("p",null,"Set the opt-out status for the current device and analytics client combination. This flag persists across device reboots, so you can call it once in your application, such as in a screen where a user can opt out of analytics tracking."),Object(l.b)("h3",{id:"anonymizing-ip"},"Anonymizing IP"),Object(l.b)("p",null,"The Intilery iOS, Android, Analytics.js and Xamarin libraries automatically derive and set the IP address for events recorded on the user\u2019s device. The IP is not collected on the device itself, but instead is filled in by Intilery\u2019s servers when they receive a message."),Object(l.b)("p",null,"To prevent Intilery from recording the users\u2019 IP in destinations and S3, you can set the event\u2019s ",Object(l.b)("inlineCode",{parentName:"p"},"context.ip")," field to ",Object(l.b)("inlineCode",{parentName:"p"},"0.0.0.0"),". The Intilery servers won\u2019t overwrite this data if it comes from the client, and so do not record the IP address of the client."),Object(l.b)("h2",{id:"formatting-order-completed-events"},"Formatting Order Completed Events"),Object(l.b)("p",null,"Intilery\u2019s Android library provides several helper methods so you can easily construct both properties objects and products lists so your Order Completed events conform to the Intilery ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/retail"},"ecommerce specification"),". Here\u2019s a code example:"),Object(l.b)("h4",{id:"java-18"},"Java"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'import com.segment.analytics.Analytics;\nimport com.segment.analytics.Properties;\nimport com.segment.analytics.Properties.Product;\n\n// initialize a new properties object\nProperties properties = new Properties();\n\n// add orderId and revenue to the properties object\nproperties.putValue("orderId", String orderId).putValue("revenue", double revenue);\n\n// initialize a new product\nProduct product1 = new Product(String id, String sku, double price);\n\n// initialize a second product\nProduct product2 = new Product(String id, String sku, double price);\n\n// add products to the properties object\nproperties.putProducts(product1, product2);\n\n// pass the properties object into your Order Completed event\nAnalytics.with(context).track("Order Completed", properties);\n')),Object(l.b)("h4",{id:"kotlin-18"},"Kotlin"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'import com.segment.analytics.Analytics\nimport com.segment.analytics.Properties\nimport com.segment.analytics.Properties.Product\n\n// initialize a new properties object\nval properties = Properties();\n\n// add orderId and revenue to the properties object\nproperties.putValue("orderId", orderId).putValue("revenue", revenue)\n\n// initialize a new product\nProduct product1 = Product(id, sku, price)\n\n// initialize a second product\nProduct product2 = Product(id, sku, price)\n\n// add products to the properties object\nproperties.putProducts(product1, product2)\n\n// pass the properties object into your Order Completed event\nAnalytics.with(context).track("Order Completed", properties)\n')),Object(l.b)("p",null,"Find details on ",Object(l.b)("strong",{parentName:"p"},"best practices in event naming")," as well as the ",Object(l.b)("strong",{parentName:"p"},"Track method payload")," in the ",Object(l.b)("a",{parentName:"p",href:"/docs/schema/track"},"Intilery Track call spec"),"."))}d.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||b[u]||l;return n?i.a.createElement(h,o(o({ref:t},s),{},{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);