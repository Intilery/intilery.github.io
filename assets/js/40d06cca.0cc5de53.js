"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[6670],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2439:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={id:"validate",title:"Review And Validate Events And violations",sidebar_label:"Review And Validate"},s=void 0,c={unversionedId:"guides/validate",id:"guides/validate",isDocsHomePage:!1,title:"Review And Validate Events And violations",description:"Upon sending data to Intilery, you will be able to view all events and violations in the event stream. To view violations, click on the Violations button located on the Schema tab in a Source. A filter can be applied to only show events with violations within the past 24 hrs, 7 days and 30 days.",source:"@site/docs/guides/validate.md",sourceDirName:"guides",slug:"/guides/validate",permalink:"/docs/guides/validate",tags:[],version:"current",frontMatter:{id:"validate",title:"Review And Validate Events And violations",sidebar_label:"Review And Validate"},sidebar:"guides",previous:{title:"Data Collection Best Practices",permalink:"/docs/guides/data-collection"},next:{title:"Validate Schemas",permalink:"/docs/guides/validate-schema"}},u=[{value:"Schema Details",id:"schema-details",children:[]},{value:"Correcting Violations",id:"correcting-violations",children:[{value:"A new event",id:"a-new-event",children:[]},{value:"Setting Validation",id:"setting-validation",children:[]}]},{value:"Schema",id:"schema-1",children:[{value:"Core",id:"core",children:[]},{value:"Custom",id:"custom",children:[]}]}],p={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Upon sending data to Intilery, you will be able to view all events and violations in the event stream. To view violations, click on the Violations button located on the Schema tab in a Source. A filter can be applied to only show events with violations within the past 24 hrs, 7 days and 30 days."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vaidate",src:a(6604).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Note:"))," The event stream shows valid and invalid events"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"alert",src:a(3307).Z})," The event has new properties not found on the schema, this event is recorded"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"error",src:a(9969).Z})," An event that fails the required validation or a new event, this event is not recorded"),(0,l.kt)("p",null,"To view detailed violations for an event, click on the specific event. Specific violations include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A new event type"),(0,l.kt)("li",{parentName:"ul"},"Missing required properties"),(0,l.kt)("li",{parentName:"ul"},"Invalid property value data types"),(0,l.kt)("li",{parentName:"ul"},"Property values that do not pass applied conditional filtering")),(0,l.kt)("p",null,"To view a specific violation, simply mouseover on the violation icon to see details of the violation."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"violation",src:a(4238).Z})),(0,l.kt)("h3",{id:"schema-details"},"Schema Details"),(0,l.kt)("p",null,'In this example we are validating a "Product Removed" event from the ',(0,l.kt)("a",{parentName:"p",href:"/docs/schema/retail"},"ecommerce schema"),". Note even though the events are part of the standard Intilery ecommerce schema, you still need to validate them to ensure that they match what you expect."),(0,l.kt)("p",null,"To crrect a violation, click on the event in the event stream. Details of the event will be displayed in the right hand pane."),(0,l.kt)("h4",{id:"raw"},"Raw"),(0,l.kt)("p",null,"The raw data that was sent to Intilery"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"raw",src:a(1356).Z})),(0,l.kt)("h4",{id:"schema"},"Schema"),(0,l.kt)("p",null,"This is the schema that Intilery has extracted from the data sent for the event."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"schema",src:a(5607).Z})),(0,l.kt)("h4",{id:"analytics"},"Analytics"),(0,l.kt)("p",null,"This shows the data as it was sent from the ",(0,l.kt)("a",{parentName:"p",href:"/docs/tag/tag1"},"analytics.js")," tag"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"analytics",src:a(9494).Z})),(0,l.kt)("h4",{id:"edit"},"Edit"),(0,l.kt)("p",null,"This enables you to set the requirements of the schema and it's properties"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"edit",src:a(975).Z})),(0,l.kt)("h2",{id:"correcting-violations"},"Correcting Violations"),(0,l.kt)("h3",{id:"a-new-event"},"A new event"),(0,l.kt)("p",null,"Navigate to the Schema tab and review the properties of the schema, check that each property has the correct type and whether a property is required. You can change the type/required in the Edit tab."),(0,l.kt)("p",null,'Click "Mark as valid" to recognise as a valid event, all subsequent events of that type that meet the validation will now be recorded. You can amend or further enhance the validatino requirements of event properties in the Edit tab.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"valid",src:a(7393).Z})),(0,l.kt)("h3",{id:"setting-validation"},"Setting Validation"),(0,l.kt)("p",null,'Each property can be marked at "Required", meaning that if an event is sent to Intilery without containing this required property, the event is not recorded. This helps to keep your data clean and consistent.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Note:")),' Do not forget to click "Save" at the bottom of the list of properties to save any changes to property validation'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"required",src:a(6541).Z})),(0,l.kt)("h4",{id:"property-validation"},"Property Validation"),(0,l.kt)("p",null,"Each property can have optional validation settings"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strings:-")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Max Length - This keyword's (property value) must have a length of less than or equal to this value (the max length)"),(0,l.kt)("li",{parentName:"ul"},"Min Length - This keyword's (property value) must have a length of greater than or equal to this value (the min length)"),(0,l.kt)("li",{parentName:"ul"},"Pattern - A regex pattern to match against")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"strings",src:a(4328).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Note:"))," If the string is a valid date according to the ",(0,l.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/ISO_8601"},"ISO-8601 UTC Timestamp")," datew format, Intilery will recognise the data type as a Date"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Numbers: -")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Multiple Of - This value must be greater than 0 and is only valid if the value divisible by the setting (i.e. validation of 0.25 will only be valid for values that are divisable by 0.25 and produce a whole number; 1 is divisible by 0.25 = 4 where as 1.1 is not divisible by 0.25)"),(0,l.kt)("li",{parentName:"ul"},"Maximum - The value must be less than or equal to this value (the max value)"),(0,l.kt)("li",{parentName:"ul"},"Exclusive Maximum - The value must be less that this value (the max value)"),(0,l.kt)("li",{parentName:"ul"},"Minimum - The value must be greater than or equal to this value (the min value)"),(0,l.kt)("li",{parentName:"ul"},"Exclusive Minimum - The value must be greater than this value (the min value)")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"numbers",src:a(6542).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Booleans: -")),(0,l.kt)("p",null,"There are no options to validate booleans, you must pass in true or false (no quotes)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arrays: -")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Max Items - The array can only contain less than or equal to the number of items specified"),(0,l.kt)("li",{parentName:"ul"},"Min Items - The array can only contain more than or equal to the number of items specified"),(0,l.kt)("li",{parentName:"ul"},"Unique Items - All items in the array must be unique (object unique)")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"arrays",src:a(7719).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Note:"))," It is not currently possible to apply validation to objects within an array, Intilery will recognise the properties of objects within an array and make them available in ",(0,l.kt)("a",{parentName:"p",href:"/docs/customers/audiences"},"audiences")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/customers/computed-traits"},"computed traits")),(0,l.kt)("h2",{id:"schema-1"},"Schema"),(0,l.kt)("p",null,"All events and their properties can be accessed in the schema section of Intilery, "),(0,l.kt)("h3",{id:"core"},"Core"),(0,l.kt)("p",null,"These are the core events recorded via the Intilery tag or SDKs."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"default",src:a(9718).Z})),(0,l.kt)("h3",{id:"custom"},"Custom"),(0,l.kt)("p",null,"These are the events thay you have added and approved. Any recent new fields that require your action will also be shown."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"your",src:a(6639).Z})))}d.isMDXComponent=!0},3307:function(e,t,a){t.Z=a.p+"assets/images/alert-4e71abec54ec933ce659d5c3339233c1.png"},9494:function(e,t,a){t.Z=a.p+"assets/images/analytics-3784b83328990da9659304b12a9a688a.png"},7719:function(e,t,a){t.Z=a.p+"assets/images/arrays-28b4a90da49d3fc247df3b6716803aba.png"},9718:function(e,t,a){t.Z=a.p+"assets/images/default-09ba7c8327f68af547a81d6dfa4c48bf.png"},975:function(e,t,a){t.Z=a.p+"assets/images/edit-990cdf49f3bce7fc08059fbca098180d.png"},9969:function(e,t){t.Z="data:image/png;base64,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"},6542:function(e,t,a){t.Z=a.p+"assets/images/numbers-79f887faf653d2e909dd31b819fc562e.png"},1356:function(e,t,a){t.Z=a.p+"assets/images/raw-06612a786882e0f1daca11302731ffc1.png"},6541:function(e,t,a){t.Z=a.p+"assets/images/required-98349435e78f9e970eac21e9d4c74035.png"},5607:function(e,t,a){t.Z=a.p+"assets/images/schema-71f23f6fe0f04da8a515897f5828b619.png"},4328:function(e,t,a){t.Z=a.p+"assets/images/strings-584d215f29a4950b96707de91455518f.png"},7393:function(e,t,a){t.Z=a.p+"assets/images/valid-accae8260fb73d7c4a582e8a798b9f50.png"},6604:function(e,t,a){t.Z=a.p+"assets/images/validate-1a473da16c455ed98a043834fc2d700a.png"},4238:function(e,t,a){t.Z=a.p+"assets/images/violation-c6fb1f38e10d9dac38b2f49b1e8c40c2.png"},6639:function(e,t,a){t.Z=a.p+"assets/images/your-b9f47debf1918fb1e54944beb4a9bebf.png"}}]);