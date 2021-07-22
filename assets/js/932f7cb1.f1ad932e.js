(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[1487],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},273:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],l={id:"ios-trouble",title:"Troubleshooting iOS",sidebar_label:"Troubleshooting iOS"},s=void 0,u={unversionedId:"sdk/ios-trouble",id:"sdk/ios-trouble",isDocsHomePage:!1,title:"Troubleshooting iOS",description:"Target has transitive dependencies that include static binaries",source:"@site/docs/sdk/ios-trouble.md",sourceDirName:"sdk",slug:"/sdk/ios-trouble",permalink:"/docs/sdk/ios-trouble",version:"current",frontMatter:{id:"ios-trouble",title:"Troubleshooting iOS",sidebar_label:"Troubleshooting iOS"},sidebar:"sdk",previous:{title:"iOS 14 Guide",permalink:"/docs/sdk/ios14"},next:{title:"iOS FAQs",permalink:"/docs/sdk/ios-faq"}},c=[{value:"Target has transitive dependencies that include static binaries",id:"target-has-transitive-dependencies-that-include-static-binaries",children:[]},{value:"No events in my debugger",id:"no-events-in-my-debugger",children:[]},{value:"Still having issues?",id:"still-having-issues",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"target-has-transitive-dependencies-that-include-static-binaries"},"Target has transitive dependencies that include static binaries"),(0,o.kt)("p",null,"This was due to an old ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CocoaPods/CocoaPods/issues/2926"},"CocoaPods limitation"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify you are not using any previously needed workarounds")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify you are using at least CocoaPods 1.4"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," $ pod --version\n 1.5.3\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify you are using the latest Intilery pods"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," $ pod outdated \n The following pod updates are available:\n   Segment-GoogleAnalytics 1.1.7 -> 1.1.7 (latest version 1.1.8)\n")))),(0,o.kt)("h2",{id:"no-events-in-my-debugger"},"No events in my debugger"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify you have followed all ",(0,o.kt)("a",{parentName:"li",href:"./ios#getting-started"},"Getting Started")," steps"),(0,o.kt)("li",{parentName:"ol"},"Verify you have entered the correct writeKey for your source",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the writeKey you have entered is something other than a string or an empty string your app may crash"),(0,o.kt)("li",{parentName:"ul"},"If the writeKey you have entered is a valid form but is not the correct value, Intilery will return an error"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"./ios#logging"},"Enable logging")," to confirm if call is being sent to Intilery")),(0,o.kt)("h2",{id:"still-having-issues"},"Still having issues?"),(0,o.kt)("p",null,"Contact ",(0,o.kt)("a",{parentName:"p",href:"email:support@intilery.com"},"Intilery Product Support")," with the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The version of our SDK you are using"),(0,o.kt)("li",{parentName:"ul"},"Logs of the call in question"),(0,o.kt)("li",{parentName:"ul"},"Screenshots of the event in the Intilery Events debugger")))}d.isMDXComponent=!0}}]);