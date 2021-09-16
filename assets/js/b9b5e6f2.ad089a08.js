(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[5978],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9434:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s={id:"marketing-preferences-hosting",title:"Hosting your own Marketing Preferences page",sidebar_label:"Self Hosting"},o="Self Hosting Marketing Preferences",c={unversionedId:"guides/marketing-preferences-hosting",id:"guides/marketing-preferences-hosting",isDocsHomePage:!1,title:"Hosting your own Marketing Preferences page",description:"If you want to host and brand your marketing preferences page yourself, then you",source:"@site/docs/guides/marketing-preferences-hosting.md",sourceDirName:"guides",slug:"/guides/marketing-preferences-hosting",permalink:"/docs/guides/marketing-preferences-hosting",version:"current",frontMatter:{id:"marketing-preferences-hosting",title:"Hosting your own Marketing Preferences page",sidebar_label:"Self Hosting"},sidebar:"guides",previous:{title:"Intilery Hosted",permalink:"/docs/guides/marketing-preferences"}},p=[{value:"What your page will need to do",id:"what-your-page-will-need-to-do",children:[]},{value:"Generating the Subscription ID",id:"generating-the-subscription-id",children:[{value:"Reading the Subscription ID",id:"reading-the-subscription-id",children:[]},{value:"Reading the Asset ID / UTM Campaign",id:"reading-the-asset-id--utm-campaign",children:[]}]},{value:"Retrieving marketing preferences for the customer",id:"retrieving-marketing-preferences-for-the-customer",children:[{value:"HTTP endpoint",id:"http-endpoint",children:[]},{value:"Example response",id:"example-response",children:[]}]},{value:"Update the marketing preferences for the customer",id:"update-the-marketing-preferences-for-the-customer",children:[{value:"HTTP endpoint",id:"http-endpoint-1",children:[]},{value:"Tracking Unsubscribes by Campaign",id:"tracking-unsubscribes-by-campaign",children:[]},{value:"Example code",id:"example-code",children:[]},{value:"Example response",id:"example-response-1",children:[]}]},{value:"Unsubscribing from all communications",id:"unsubscribing-from-all-communications",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"self-hosting-marketing-preferences"},"Self Hosting Marketing Preferences"),(0,i.kt)("p",null,"If you want to host and brand your marketing preferences page yourself, then you\nneed to edit the link in the email. We'd recommend you create a standard row\ncontaining the link so you can drag and drop it in for each email you build rather\nthan editing the link each time."),(0,i.kt)("h2",{id:"what-your-page-will-need-to-do"},"What your page will need to do"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Retrieve marketing preferences for the customer from the Intilery endpoint"),(0,i.kt)("li",{parentName:"ul"},"Update the marketing preferences for the customer by building a new preferences object and POSTing to our endpoint")),(0,i.kt)("h2",{id:"generating-the-subscription-id"},"Generating the Subscription ID"),(0,i.kt)("p",null,"The default page is hosted by Intilery ",(0,i.kt)("a",{parentName:"p",href:"https://marketingprefs.intilery.com/content?s=aW50aWxlcnk6bWFya2V0aW5nOjg1MWZlMjM1LWY3MTEtNGVkZS05N2ZkLWFhOWUxNWIzOTg0YQ=="},"(see example here)"),":"),(0,i.kt)("p",null,"We pass a customer specific ",(0,i.kt)("strong",{parentName:"p"},"Subscription ID")," as a parameter on the\nquerystring (",(0,i.kt)("inlineCode",{parentName:"p"},"s"),").  For custom hosting, this parameter can be named as desired.\nThe merge tag for a customer's ",(0,i.kt)("em",{parentName:"p"},"subscription id")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-freemarker"},'{(customer._subscriptionId)!""}\n')),(0,i.kt)("p",null,"So the link above is generated using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-freemarker"},'https://marketingprefs.intilery.com/content?s={(customer._subscriptionId)!""}\n')),(0,i.kt)("p",null,"For self-hosting replace with the URL with your own hosted page.  "),(0,i.kt)("p",null,"The URL ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," parameter name can be changed to suit,\nbut the merge tag ",(0,i.kt)("strong",{parentName:"p"},"must")," remain the same as this property of the\ncustomer cannot be renamed."),(0,i.kt)("p",null,"When you have replaced the link with ",(0,i.kt)("inlineCode",{parentName:"p"},"your-domain")," Intilery will embed the link in the\nemail with appropriate UTM tracking parameters, e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"https://your-domain.com/marketing-preferences/<subscriptionId>?utm_campaign=MyCampaign&utm_medium=email&utm_source=Intilery\n")),(0,i.kt)("h3",{id:"reading-the-subscription-id"},"Reading the Subscription ID"),(0,i.kt)("p",null,"e.g. If the link to your marketing preferences page is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-freemarker"},'https://your-domain.com/marketing-preferences/{(customer._subscriptionId)!""}\n')),(0,i.kt)("p",null,"you can read the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionId")," with some JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"window.location.href.split('/')[window.location.href.split('/').length-1]\n")),(0,i.kt)("p",null,"or if the link to you marketing preferences page is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-freemarker"},'https://your-domain.com/marketing-preferences?s={(customer._subscriptionId)!""}\n')),(0,i.kt)("p",null,"you can read the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionId")," with this JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"new URLSearchParams(window.location.search).get('s')\n")),(0,i.kt)("h3",{id:"reading-the-asset-id--utm-campaign"},"Reading the Asset ID / UTM Campaign"),(0,i.kt)("p",null,"Retrieve the asset ID for the campaign by reading it from the ",(0,i.kt)("inlineCode",{parentName:"p"},"utm_campaign")," search parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"new URLSearchParams(window.location.search).get('utm_campaign')\n")),(0,i.kt)("h2",{id:"retrieving-marketing-preferences-for-the-customer"},"Retrieving marketing preferences for the customer"),(0,i.kt)("p",null,'A single endpoint returns the customers marketing preferences with the list of\nknown channels and subscription categories. Note that channels are "opt-in" and\ncategories are "opt-out".  If a new subscription category is added, the default\nstatus of that category for the customer will be ',(0,i.kt)("em",{parentName:"p"},"subscribed"),"."),(0,i.kt)("h3",{id:"http-endpoint"},"HTTP endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET https://events.intilery.com/cdp/marketing-preferences/<subscriptionId>\n")),(0,i.kt)("p",null,"For example..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"GET https://events.intilery.com/cdp/marketing-preferences/276db9bf-ac46-4dc3-bb7d-e94a7eb1de51\n")),(0,i.kt)("h3",{id:"example-response"},"Example response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "writeKey": "ZXhhbXBsZTpleGFtcGxlOkVYQU1QTEU=",\n    "customerId": "276db9bf-ac46-4dc3-bb7d-e94a7eb1de51",\n    "channels": [{\n        "channel": "email",\n        "name": "Email",\n        "subscribed": true\n    }, {\n        "channel": "sms",\n        "name": "SMS",\n        "subscribed": false\n    }],\n    "categories": [{\n        "category": "marketing tricks",\n        "name": "marketing_tricks",\n        "subscribed": true\n    }, {\n        "category": "new product alerts",\n        "name": "new_product_alerts",\n        "subscribed": true\n    }],\n    "unsubscribeAll": false\n}\n')),(0,i.kt)("h2",{id:"update-the-marketing-preferences-for-the-customer"},"Update the marketing preferences for the customer"),(0,i.kt)("h3",{id:"http-endpoint-1"},"HTTP endpoint"),(0,i.kt)("p",null,"The same endpoint used to retrieve the customer marketing preferences is also used to update. Only the method is different."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},"POST https://events.intilery.com/cdp/marketing-preferences/<subscription id>?assetId=<campaign name>\n")),(0,i.kt)("h3",{id:"tracking-unsubscribes-by-campaign"},"Tracking Unsubscribes by Campaign"),(0,i.kt)("p",null,"The parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"assetId")," is optional, but recommended. Pass this back to Intilery to\nensure that unsubscribes are attributed to the right campaign."),(0,i.kt)("h3",{id:"example-code"},"Example code"),(0,i.kt)("p",null,"The example POST below updates the example customers marketing preferences as follows:-"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unsubscribe from the new_product_alerts subscription category"),(0,i.kt)("li",{parentName:"ul"},"Subscribe to the SMS channel\nNote that the category/channel fields match up to those in the retrieved preferences.\nWe recommend calling this endpoint from your servers to avoid any browser related CORS or blocking issues.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const data = {\n    "categories": [{\n        "category": "marketing_tricks",\n        "subscribed": true\n    }, {\n        "category": "new_product_alerts",\n        "subscribed": false\n    }],\n    "channels": [{\n        "channel": "email",\n        "subscribed": true\n    }, {\n        "channel": "sms",\n        "subscribed": true\n    }],\n    "unsubscribeAll": false,\n    "unsubscribeReason": ""\n};\n$.ajax({\n    type: \'POST\',\n    url: `https://events.intilery.com/cdp/marketing-preferences/276db9bf-ac46-4dc3-bb7d-e94a7eb1de51?assetId=MyCampaign`,\n    crossDomain: true,\n    contentType: \'application/json; charset=utf-8\',\n    data: JSON.stringify(data),\n    success: function () {\n        alert("marketing preferences updated");\n    }\n});\n')),(0,i.kt)("h3",{id:"example-response-1"},"Example response"),(0,i.kt)("p",null,"The endpoint will return a 200 response to indicate success."),(0,i.kt)("h2",{id:"unsubscribing-from-all-communications"},"Unsubscribing from all communications"),(0,i.kt)("p",null,"Send the following data to the endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json5"},'{\n    "categories": [],\n    "channels": [],\n    "unsubscribeAll": true,\n    "unsubscribeReason": "" // can be set to a string value to be recorded against the customer for your own records\n}\n')))}u.isMDXComponent=!0}}]);