(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[439],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,y=h["".concat(s,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2643:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],l={id:"android-faq",title:"Android Frequently Asked Questions",sidebar_label:"Android FAQs"},s=void 0,c={unversionedId:"app/android-faq",id:"app/android-faq",isDocsHomePage:!1,title:"Android Frequently Asked Questions",description:"What is the latest version of the library?",source:"@site/docs/app/android-faq.md",sourceDirName:"app",slug:"/app/android-faq",permalink:"/docs/app/android-faq",version:"current",frontMatter:{id:"android-faq",title:"Android Frequently Asked Questions",sidebar_label:"Android FAQs"},sidebar:"app",previous:{title:"Troubleshooting Android",permalink:"/docs/app/android-trouble"}},u=[{value:"What is the latest version of the library?",id:"what-is-the-latest-version-of-the-library",children:[]},{value:"Where is the changelog for the library?",id:"where-is-the-changelog-for-the-library",children:[]},{value:"Can I use the library with Maven?",id:"can-i-use-the-library-with-maven",children:[]},{value:"How big is the Intilery SDK?",id:"how-big-is-the-intilery-sdk",children:[]},{value:"How can I swap out debugging and production keys?",id:"how-can-i-swap-out-debugging-and-production-keys",children:[]},{value:"How should I configure Proguard?",id:"how-should-i-configure-proguard",children:[{value:"Need support?",id:"need-support",children:[]}]},{value:"Why have you forked Segment?",id:"why-have-you-forked-segment",children:[]}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-the-latest-version-of-the-library"},"What is the latest version of the library?"),(0,a.kt)("p",null,"Analytics-Android is published to ",(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=intilery%20analytics%22"},"Maven Central")," where you can see all published releases."),(0,a.kt)("h2",{id:"where-is-the-changelog-for-the-library"},"Where is the changelog for the library?"),(0,a.kt)("p",null,"You can see a changelog in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Intilery/analytics-android/blob/master/CHANGELOG.md"},"GitHub repository"),", detailing the changes made in each release."),(0,a.kt)("h2",{id:"can-i-use-the-library-with-maven"},"Can I use the library with Maven?"),(0,a.kt)("p",null,"Yes! You can use the Intilery library with Maven, or any other custom build system because the ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," SDK is simply a JAR."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.intilery.analytics.android:analytics</groupId>\n    <artifactId>analytics</artifactId>\n    <version>LATEST</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"how-big-is-the-intilery-sdk"},"How big is the Intilery SDK?"),(0,a.kt)("p",null,"The core Intilery SDK is extremely lightweight! It contains just under 1k methods, the JAR weighs in at 123kb and the dex size is 113kb."),(0,a.kt)("h2",{id:"how-can-i-swap-out-debugging-and-production-keys"},"How can I swap out debugging and production keys?"),(0,a.kt)("p",null,"If you\u2019re using Gradle and build flavors, you can provide an ",(0,a.kt)("inlineCode",{parentName:"p"},"analytics.xml")," for each configuration with different Writekeys in each."),(0,a.kt)("p",null,"For other cases, you can also construct custom instances of the client and pass in a different key for each instance. Set it as the singleton instance, and use the same API everywhere else."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class MyApp extends Application {\n  @Override public void onCreate() {\n    Analytics analytics;\n    if(BuildConfig.DEBUG) {\n      analytics = new Analytics.Builder(this, debugWriteKey)...build();\n    } else {\n      analytics = new Analytics.Builder(this, releaseWriteKey)...build();\n    }\n    Analytics.setSingletonInstance(analytics); // Must be called before any calls to Analytics.with(context)\n\n    // Now Analytics.with will return the custom instance\n    Analytics.with(this).track("App Launched");\n  }\n}\n')),(0,a.kt)("h2",{id:"how-should-i-configure-proguard"},"How should I configure Proguard?"),(0,a.kt)("p",null,"For the Intilery SDKs, you can add the following snippet to your Proguard configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"-keep class com.segment.analytics.** { *; }\n-keep class androidx.lifecycle.DefaultLifecycleObserver\n")),(0,a.kt)("p",null,"You should also check the vendor documentation for any Device-mode destinations you are bundling, to see if they include any recommended Proguard configurations."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"need-support"},"Need support?"),(0,a.kt)("p",null,"Questions? Problems? Need more info? Contact us, and we can help!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://segment.com/help/contact/"},"Visit our Support page")),(0,a.kt)("h2",{id:"why-have-you-forked-segment"},"Why have you forked Segment?"),(0,a.kt)("p",null,"We forked the segment client libraries to give you the choice of using segment to send data to Intilery and a Segment destination, or if you do not use Segment you can send the data directly to Intilery with our forked libraries and SDKs. If in the future you decide to use Segment, the change should be as simple as using the Segment library/sdk instead of the Intilery library/sdk"))}h.isMDXComponent=!0}}]);