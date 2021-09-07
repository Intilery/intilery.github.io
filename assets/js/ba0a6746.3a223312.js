"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[3186],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"android-quickstart",title:"Quickstart Android",sidebar_label:"Android Quickstart tutorial"},s=void 0,p={unversionedId:"app/android-quickstart",id:"app/android-quickstart",isDocsHomePage:!1,title:"Quickstart Android",description:"This tutorial will help you start sending analytics data from your Android app to Intilery.",source:"@site/docs/app/android-quick.md",sourceDirName:"app",slug:"/app/android-quickstart",permalink:"/docs/app/android-quickstart",tags:[],version:"current",frontMatter:{id:"android-quickstart",title:"Quickstart Android",sidebar_label:"Android Quickstart tutorial"},sidebar:"app",previous:{title:"Android Mobile SDK",permalink:"/docs/app/android"},next:{title:"Troubleshooting Android",permalink:"/docs/app/android-trouble"}},c=[{value:"Step 1: Install the Library",id:"step-1-install-the-library",children:[]},{value:"Step 2. Initialize the Client",id:"step-2-initialize-the-client",children:[]},{value:"Step 3. Add Permissions",id:"step-3-add-permissions",children:[]},{value:"Step 4. Identify Users",id:"step-4-identify-users",children:[]},{value:"Step 5. Track Actions",id:"step-5-track-actions",children:[]},{value:"What\u2019s Next?",id:"whats-next",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will help you start sending analytics data from your Android app to Intilery."),(0,i.kt)("p",null,"If you want to dive deeper at any point, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/android"},"Android Source Reference"),"."),(0,i.kt)("h2",{id:"step-1-install-the-library"},"Step 1: Install the Library"),(0,i.kt)("p",null,"The recommended way to install the library for Android is with a build system like Gradle. This makes it simple to upgrade versions and add destinations. The library is distributed using ",(0,i.kt)("a",{parentName:"p",href:"http://maven.org/"},"Maven Central"),". Simply add the ",(0,i.kt)("inlineCode",{parentName:"p"},"analytics")," SDK to your module\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"dependencies {\n  implementation 'com.intilery.analytics.android:analytics:1.0.0'\n}\n")),(0,i.kt)("h2",{id:"step-2-initialize-the-client"},"Step 2. Initialize the Client"),(0,i.kt)("p",null,"We recommend initializing the client in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," subclass."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Create an analytics client with the given context and Intilery write key.\nAnalytics analytics = new Analytics.Builder(context, YOUR_WRITE_KEY)\n  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!\n  .recordScreenViews() // Enable this to record screen views automatically!\n  .build();\n\n// Set the initialized instance as a globally accessible instance.\nAnalytics.setSingletonInstance(analytics);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automatically tracking lifecycle events (",(0,i.kt)("inlineCode",{parentName:"li"},"Application Opened"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Installed"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Application Updated"),") and is optional, but highly recommended to hit the ground running with core events! See ",(0,i.kt)("a",{parentName:"li",href:"#step-5-track-actions"},"below")," for more info!")),(0,i.kt)("h2",{id:"step-3-add-permissions"},"Step 3. Add Permissions"),(0,i.kt)("p",null,"Ensure that the necessary permissions are declared in your application\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="your.package.name">\n  ...\n  \x3c!-- Required for internet. --\x3e\n  <uses-permission android:name="android.permission.INTERNET"/>\n</manifest>\n')),(0,i.kt)("h2",{id:"step-4-identify-users"},"Step 4. Identify Users"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Good to know"),": For any of the different methods described in this quickstart, you can replace the properties and traits in the code samples with variables that represent the data collected."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," method is one of our core API methods. It\u2019s how you tie one of your users and their actions to a recognizable userId. It also lets you record traits about the user, like their email, name, account type, etc. You can read more about it in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/android#identify"},"identify reference"),"."),(0,i.kt)("p",null,"When and where you call ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," depends on how your users are authenticated, but doing it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate")," method of your ",(0,i.kt)("a",{parentName:"p",href:"http://developer.android.com/reference/android/app/Application.html"},"Application")," class would be most common, as long as you know who your user is. If your user is still anonymous, you should skip this part and we\u2019ll attribute the subsequent events to an ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymousId")," instead."),(0,i.kt)("p",null,"Here\u2019s what a basic call to ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Analytics.with(context).identify("f4ca124298", new Traits().putName("Michael Bolton").putEmail("mbolton@example.com"));\n')),(0,i.kt)("p",null,"That\u2019s identifying Michael by his unique User ID (the one you know him by in your database) and labeling him with ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," traits."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hold up though!")," When you actually put that code in your Android app, you\u2019ll need to replace all those hard-coded strings with details about the currently logged-in user."),(0,i.kt)("p",null,"Once you\u2019ve added an ",(0,i.kt)("inlineCode",{parentName:"p"},"identify")," call, you\u2019re ready to move on to\u2026"),(0,i.kt)("h2",{id:"step-5-track-actions"},"Step 5. Track Actions"),(0,i.kt)("p",null,"The track method is how you record any actions your users perform. Each action is known by a name, like \u201cPurchased a T-Shirt\u201d. You can also record properties specific to those actions. You can read more about ",(0,i.kt)("inlineCode",{parentName:"p"},"track")," in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/android#track"},"track reference"),"."),(0,i.kt)("p",null,"To get started, our SDK can automatically track a few key common events, such as the ",(0,i.kt)("strong",{parentName:"p"},"Application Installed"),", ",(0,i.kt)("strong",{parentName:"p"},"Application Updated")," and ",(0,i.kt)("strong",{parentName:"p"},"Application Opened"),". Simply enable this option during initialization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Analytics analytics = new Analytics.Builder(context, writeKey)\n  .trackApplicationLifecycleEvents()\n  .build();\n")),(0,i.kt)("p",null,"You\u2019ll also want to track events that are indicators of success for your mobile app, like ",(0,i.kt)("strong",{parentName:"p"},"Signed Up"),", ",(0,i.kt)("strong",{parentName:"p"},"Purchased Item")," or ",(0,i.kt)("strong",{parentName:"p"},"Bookmarked Article"),". We recommend tracking just a few important events. You can always add more later!"),(0,i.kt)("p",null,"Here\u2019s what a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"track")," might look like when a user signs up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Analytics.with(context).track("Signed up", new Properties().putValue("plan", "Enterprise"));\n')),(0,i.kt)("p",null,"That\u2019s just telling us that your user just triggered the ",(0,i.kt)("strong",{parentName:"p"},"Signed Up")," event and chose your hypothetical ",(0,i.kt)("inlineCode",{parentName:"p"},"'Enterprise'")," plan. Properties are simple key-value pairs that can be anything you want to record, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Analytics.with(context).track("Bookmarked Article", new Properties()\n  .putValue("title", "Snow Fall")\n  .putValue("subtitle", "The Avalance at Tunnel Creek")\n  .putValue("author", "John Branch"));\n')),(0,i.kt)("p",null,"You\u2019ll want to track events that are indicators of success for your mobile app, like ",(0,i.kt)("strong",{parentName:"p"},"Signed Up"),", ",(0,i.kt)("strong",{parentName:"p"},"Purchased Item")," or ",(0,i.kt)("strong",{parentName:"p"},"Bookmarked Article"),"."),(0,i.kt)("p",null,"To get started, we recommend tracking just a few important events. You can always add more later!"),(0,i.kt)("p",null,"Once you\u2019ve added a few ",(0,i.kt)("inlineCode",{parentName:"p"},"track")," calls, ",(0,i.kt)("strong",{parentName:"p"},"you\u2019re done!")," You successfully instrumented your app! Now you\u2019re ready to turn on any destination you fancy from our interface, margarita in hand."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"whats-next"},"What\u2019s Next?"),(0,i.kt)("p",null,"We just walked through the quickest way to get started with Intilery using Analytics for Android. You might also want to check out our full ",(0,i.kt)("a",{parentName:"p",href:"/docs/app/android"},"Analytics for Android reference")," to see what else is possible, or read about the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/api"},"Tracking API methods")," to get a sense for the bigger picture."))}u.isMDXComponent=!0}}]);