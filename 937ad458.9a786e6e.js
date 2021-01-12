(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{122:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return b}));var o=t(0),i=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=i.a.createContext({}),l=function(e){var n=i.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=l(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),g=l(t),p=o,b=g["".concat(r,".").concat(p)]||g[p]||u[p]||a;return t?i.a.createElement(b,s(s({ref:n},d),{},{components:t})):i.a.createElement(b,s({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=t[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var o=t(2),i=t(6),a=(t(0),t(122)),r={},s={unversionedId:"sdk/android-push",id:"sdk/android-push",isDocsHomePage:!1,title:"android-push",description:"id: android-push",source:"@site/docs/sdk/android-push.md",permalink:"/docs/sdk/android-push",sidebar:"sdk",previous:{title:"Intilery-android Frequently Asked Questions",permalink:"/docs/sdk/android-faq"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Registering devices",id:"registering-devices",children:[{value:"Registering android",id:"registering-android",children:[]},{value:"Monitor For New Token Android",id:"monitor-for-new-token-android",children:[]}]},{value:"Receiving Messages",id:"receiving-messages",children:[{value:"Override <code>onMessageReceived</code>",id:"override-onmessagereceived",children:[]}]}],d={rightToc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"id: android-push\ntitle: android Push Notifications\nsidebar_label: android Push Notifications"),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"To send push notifictions to your app, we use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://firebase.google.com/"}),"Google Firebase")," as the messaging SDKs. Google Firebase is the number 1 mobile platform."),Object(a.b)("p",null,"In order to send messages from Intilery to your app you should follow the instructions for android"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://firebase.google.com/docs/cloud-messaging/ios/client"}),"setting up android iOS notifications")),Object(a.b)("p",null,"For both iOS you will need to register your app(s) with google firebase and supply Intilery with one of your FCM Keys for each app."),Object(a.b)("h2",{id:"registering-devices"},"Registering devices"),Object(a.b)("p",null,"For each customer device you will need to send the FCM token and optional deviceId to Intilery as part of an identify event, this registers the device to the customers' profile at Intilery."),Object(a.b)("h3",{id:"registering-android"},"Registering android"),Object(a.b)("p",null,"Once you have completed the steps at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://firebase.google.com/docs/cloud-messaging/android/client"}),"setting up andoid notifications")," you can implement the firebase code and Intielry identify code to register the device to the customer."),Object(a.b)("h4",{id:"java"},"Java"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'FirebaseMessaging.getInstance().getToken()\n    .addOnCompleteListener(new OnCompleteListener<String>() {\n        @Override\n        public void onComplete(@NonNull Task<String> task) {\n          if (!task.isSuccessful()) {\n            Log.w(TAG, "Fetching FCM registration token failed", task.getException());\n            return;\n          }\n\n          // Get new FCM registration token\n          String token = task.getResult();\n\n          // Log and toast\n          String msg = getString(R.string.msg_token_fmt, token);\n          Log.d(TAG, msg);\n          Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();\n          \n          //Send to Intilery\n          Analytics.with(context).identify("a user\'s id", \n                                           new Traits()\n                                           .putValue("pushToken", "the token from firebase")\n                                           .putValue("deviceId", "a meaningful name, e.g. company android App")\n                                           , null);\n        }\n    });\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," deviceId is optional but recommended, if not set, push notificatinos will be sent to all devices registered to a customer."),Object(a.b)("h4",{id:"kotlin"},"Kotlin"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'FirebaseMessaging.getInstance().token.addOnCompleteListener(OnCompleteListener { task ->\n    if (!task.isSuccessful) {\n        Log.w(TAG, "Fetching FCM registration token failed", task.exception)\n        return@OnCompleteListener\n    }\n\n    // Get new FCM registration token\n    val token = task.result\n\n    // Log and toast\n    val msg = getString(R.string.msg_token_fmt, token)\n    Log.d(TAG, msg)\n    Toast.makeText(baseContext, msg, Toast.LENGTH_SHORT).show()\n        \n        //Send to Intilery\n        Analytics.with(context).identify("a user\'s id", Traits()\n                                     .putValue("pushToken", "the token from firebase")\n                                     .putValue("deviceId", "a meaningful name, e.g. company android App")\n                                     , null)\n})\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," deviceId is optional but recommended, if not set, push notificatinos will be sent to all devices registered to a customer."),Object(a.b)("h3",{id:"monitor-for-new-token-android"},"Monitor For New Token Android"),Object(a.b)("p",null,"You should implement code to monitor for a new token on the device, and send the token to Intilery."),Object(a.b)("h4",{id:"java-1"},"Java"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'/**\n * There are two scenarios when onNewToken is called:\n * 1) When a new token is generated on initial app startup\n * 2) Whenever an existing token is changed\n * Under #2, there are three scenarios when the existing token is changed:\n * A) App is restored to a new device\n * B) User uninstalls/reinstalls the app\n * C) User clears app data\n */\n@Override\npublic void onNewToken(String token) {\n    Log.d(TAG, "Refreshed token: " + token);\n\n        //Send to Intilery\n    Analytics.with(context).identify("a user\'s id", \n        new Traits()\n      .putValue("pushToken", "the token from firebase")\n      .putValue("deviceId", "a meaningful name, e.g. company android App")  //optional\n        , null);\n}\n')),Object(a.b)("h4",{id:"kotlin-1"},"Kotlin"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'/**\n * Called if the FCM registration token is updated. This may occur if the security of\n * the previous token had been compromised. Note that this is called when the\n * FCM registration token is initially generated so this is where you would retrieve the token.\n */\noverride fun onNewToken(token: String) {\n    Log.d(TAG, "Refreshed token: $token")\n\n    //Send to Intilery\n        Analytics.with(context).identify("a user\'s id", Traits()\n       .putValue("pushToken", "the token from firebase")\n       .putValue("deviceId", "a meaningful name, e.g. company android App")\n       , null)\n}\n')),Object(a.b)("h2",{id:"receiving-messages"},"Receiving Messages"),Object(a.b)("p",null,"In order to notify Intilery of the receing of the message you need to implement the following as detaild ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages"}),"here")),Object(a.b)("h3",{id:"override-onmessagereceived"},"Override ",Object(a.b)("inlineCode",{parentName:"h3"},"onMessageReceived")),Object(a.b)("h4",{id:"java-2"},"Java"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@Override\npublic void onMessageReceived(RemoteMessage remoteMessage) {\n    // ...\n\n    // TODO(developer): Handle FCM messages here.\n    // Not getting messages here? See why this may be: https://goo.gl/39bRNJ\n    Log.d(TAG, "From: " + remoteMessage.getFrom());\n\n    // Check if message contains a data payload.\n    if (remoteMessage.getData().size() > 0) {\n        Log.d(TAG, "Message data payload: " + remoteMessage.getData());\n\n        if (/* Check if data needs to be processed by long running job */ true) {\n            // For long-running tasks (10 seconds or more) use WorkManager.\n            scheduleJob();\n        } else {\n            // Handle message within 10 seconds\n            handleNow();\n        }\n\n    }\n\n    // Check if message contains a notification payload.\n    if (remoteMessage.getNotification() != null) {\n        Log.d(TAG, "Message Notification Body: " + remoteMessage.getNotification().getBody());\n    }\n\n    // Also if you intend on generating your own notifications as a result of a received FCM\n    // message, here is where that should be initiated. See sendNotification method below.\n  \n  if(remoteMessage.getData().get("notificationId") != null) {\n        Analytics.with(context).track("Push Notification Received", \n                                      new Properties().putValue("notificationId", remoteMessage.getData().get("notificationId")));\n      }\n}\n')),Object(a.b)("h4",{id:"kotlin-2"},"Kotlin"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-kotlin"}),'override fun onMessageReceived(remoteMessage: RemoteMessage) {\n    // ...\n\n    // TODO(developer): Handle FCM messages here.\n    // Not getting messages here? See why this may be: https://goo.gl/39bRNJ\n    Log.d(TAG, "From: ${remoteMessage.from}")\n\n    // Check if message contains a data payload.\n    if (remoteMessage.data.isNotEmpty()) {\n        Log.d(TAG, "Message data payload: ${remoteMessage.data}")\n\n        if (/* Check if data needs to be processed by long running job */ true) {\n            // For long-running tasks (10 seconds or more) use WorkManager.\n            scheduleJob()\n        } else {\n            // Handle message within 10 seconds\n            handleNow()\n        }\n    }\n\n    // Check if message contains a notification payload.\n    remoteMessage.notification?.let {\n        Log.d(TAG, "Message Notification Body: ${it.body}")\n    }\n  \n    if(remoteMessage.getData().get("notificationId") != null) {\n\n    // Also if you intend on generating your own notifications as a result of a received FCM\n    // message, here is where that should be initiated. See sendNotification method below.\n  Analytics.with(context).track("Push Notification Received", \n                                Properties().putValue("notificationId", remoteMessage.getData().get("notificationId")))\n    }\n}\n')),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://slack-imgs.com/?c=1&o1=wi32.he32.si&url=https%3A%2F%2Fwww.gstatic.com%2Fdevrel-devsite%2Fprod%2Fve312520032ba2ac0c4d23f7b46fc670cbbe051886a2d1f04563a5e4768ad9787%2Ffirebase%2Fimages%2Ftouchicon-180.png",alt:"Firebase"})),Object(a.b)("strong",{parentName:"p"},"Firebase")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(o.a)({parentName:"strong"},{href:"https://firebase.google.com/docs/cloud-messaging"}),"Firebase Cloud Messaging"))),Object(a.b)("p",null,"Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost."))}l.isMDXComponent=!0}}]);