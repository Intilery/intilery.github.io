"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[211],{2896:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postman-39fe400ef89eae58e824570898cf3439.png"},5810:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"apis/profiles","title":"Profiles API","description":"The Intilery Profile API provides a single API to read user-level customer data.","source":"@site/docs/apis/profiles.md","sourceDirName":"apis","slug":"/apis/profiles","permalink":"/docs/apis/profiles","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"profiles","title":"Profiles API","sidebar_label":"Profiles"},"sidebar":"apis","previous":{"title":"Events","permalink":"/docs/apis/events"}}');var t=s(4848),i=s(8453);const l={id:"profiles",title:"Profiles API",sidebar_label:"Profiles"},a=void 0,d={},c=[{value:"Product Highlights",id:"product-highlights",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Set up Access",id:"set-up-access",level:3},{value:"Find a user\u2019s external id",id:"find-a-users-external-id",level:3},{value:"Query the user\u2019s event history",id:"query-the-users-event-history",level:3},{value:"Explore more of the API",id:"explore-more-of-the-api",level:3},{value:"Search by Any ID",id:"search-by-any-id",level:4},{value:"Traits",id:"traits",level:4},{value:"Metadata",id:"metadata",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Headers",id:"headers",level:3},{value:"Content-Type",id:"content-type",level:4},{value:"Auth-Token",id:"auth-token",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Limits",id:"limits",level:3},{value:"Errors",id:"errors",level:3},{value:"Pagination",id:"pagination",level:3},{value:"Request Arguments",id:"request-arguments",level:3},{value:"Request IDs",id:"request-ids",level:3},{value:"Routes",id:"routes",level:3},{value:"Get a Profile\u2019s Traits",id:"get-a-profiles-traits",level:3},{value:"Get a Customer&#39;s Events",id:"get-a-customers-events",level:3},{value:"Pagination",id:"pagination-1",level:3},{value:"Get a Customer&#39;s Metadata",id:"get-a-customers-metadata",level:3},{value:"Listing all Customer Profiles",id:"listing-all-customer-profiles",level:3},{value:"Initial Request",id:"initial-request",level:4},{value:"Scroll Request",id:"scroll-request",level:4},{value:"Personalization",id:"personalization",level:2},{value:"Recommended Implementation",id:"recommended-implementation",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The Intilery Profile API provides a single API to read user-level customer data.\nIntilery now allows you to query the entire user object programmatically,\nincluding your ",(0,t.jsx)(n.code,{children:"userId"}),", customer ",(0,t.jsx)(n.code,{children:"traits"}),", and ",(0,t.jsx)(n.code,{children:"events"})," that make up a user\u2019s\njourney through your product."]}),"\n",(0,t.jsx)(n.p,{children:"You can use this API to\u2026"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Build an in-app recommendation engine"})," to show users or accounts the\nlast 5 products they viewed but didn\u2019t purchase"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Train user-level machine learning prediction models"})," to determine a\nusers next purchase or likelihood to churn"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Empower your sales and support associates with the complete\ncustomer context"})," by embedding the user profile in third-party tools like\nZendesk or Desk.com"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Qualify leads faster"})," by embedding the user event timeline in Pipedrive"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This document has four parts\u2026"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#product-highlights",children:(0,t.jsx)(n.strong,{children:"Product Highlights"})})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#quickstart",children:(0,t.jsx)(n.strong,{children:"Quickstart"})}),": Walks you through how to get started\nquerying your user profile in <1 min"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#api-reference",children:(0,t.jsx)(n.strong,{children:"API Reference"})}),": Retrieve a list of users sorted by\nrecent activity or find a particular user"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#recommended-implementation",children:(0,t.jsx)(n.strong,{children:"Personalization"})}),": Example\npersonalization solution built on Personas using server-side personalization"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"product-highlights",children:"Product Highlights"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Realtime Access"})," - fetch your entire user profile"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Realtime Data"})," \u2014 query streaming data on the user profile that just happened"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"One Identity"})," \u2014 query an end user\u2019s interactions across web, mobile,\nserver, and third party touch-points"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Rich Data"})," \u2014 query any amount of custom events or user traits"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Query On Any ID"})," \u2014 the API supports query by: email, userId or intileryId"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsx)(n.h3,{id:"set-up-access",children:"Set up Access"}),"\n",(0,t.jsx)(n.p,{children:"To access the profile API, you will need your clientID, accountID and brandID,\nalong with the authentication token, these are provided by your account\nmanager. Generate your API Key from the API Keys menu available if you have\nthe development policy as part of your role."}),"\n",(0,t.jsx)(n.h3,{id:"find-a-users-external-id",children:"Find a user\u2019s external id"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Login and head over to Customers"}),"\n",(0,t.jsx)(n.li,{children:"And press on any interesting customer in the list."}),"\n",(0,t.jsxs)(n.li,{children:["Copy their ",(0,t.jsx)(n.strong,{children:"External Id"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Note: a userId is passed in through the API and is stored as an External Id.\nThis is your unique id for your customer."}),"\n",(0,t.jsxs)(n.p,{children:["In the example below the external ID is ",(0,t.jsx)(n.code,{children:"qrc-117322"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"externalID",src:s(9553).A+"",width:"1148",height:"832"})}),"\n",(0,t.jsx)(n.h3,{id:"query-the-users-event-history",children:"Query the user\u2019s event history"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download and open ",(0,t.jsx)(n.a,{href:"https://www.getpostman.com/",children:"Postman"}),", a nice app for exploring HTTP APIs"]}),"\n",(0,t.jsx)(n.li,{children:"Create your Postman GET request to query the user\u2019s event\u2019s history"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The URL is: ",(0,t.jsx)(n.code,{children:"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/events"})]}),"\n",(0,t.jsxs)(n.li,{children:["Replace ",(0,t.jsx)(n.code,{children:"clientID, accountID and BRANDID"})," with your own values along with the id of your customer (qrc-117322 in this case)"]}),"\n",(0,t.jsxs)(n.li,{children:["Set the headers for ",(0,t.jsx)(n.code,{children:"content-type"})," to be ",(0,t.jsx)(n.code,{children:"application/json"})," and ",(0,t.jsx)(n.code,{children:"auth-token"})," to be your generated API Key"]}),"\n",(0,t.jsxs)(n.li,{children:["Replace ",(0,t.jsx)(n.code,{children:"{idType}:{external_id}"})," with your external id type (userId) and external id pair from the customer details page"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Press the Send button in Postman."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"postman",src:s(2896).A+"",width:"2504",height:"1068"})}),"\n",(0,t.jsx)(n.h3,{id:"explore-more-of-the-api",children:"Explore more of the API"}),"\n",(0,t.jsx)(n.h4,{id:"search-by-any-id",children:"Search by Any ID"}),"\n",(0,t.jsx)(n.p,{children:"You can query directly by a customer's email, userId (External Id) or Intilery generated ID (id):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"User ID (External ID)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/userId:qrc-117322/events\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Email"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/email:joe.bloggs@intilery.com/events\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Intilery ID"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/id:725722e8-83a3-45fc-a212-7ee05e97e9dc/events\n"})}),"\n",(0,t.jsx)(n.h4,{id:"traits",children:"Traits"}),"\n",(0,t.jsx)(n.p,{children:"You can query a user\u2019s traits (first_name, last_name, \u2026):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/userId:1234-erty/traits\n"})}),"\n",(0,t.jsx)(n.p,{children:"All traits are included"}),"\n",(0,t.jsx)(n.h4,{id:"metadata",children:"Metadata"}),"\n",(0,t.jsx)(n.p,{children:"You can query all of a user\u2019s metadata (created_at, updated_at, \u2026):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/userId:1234-erty/meta\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,t.jsx)(n.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/{endpoint}"})}),"\n",(0,t.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsx)(n.h4,{id:"content-type",children:"Content-Type"}),"\n",(0,t.jsxs)(n.p,{children:["You must provide a ",(0,t.jsx)(n.code,{children:"content-type"})," header of ",(0,t.jsx)(n.code,{children:"application/json"})]}),"\n",(0,t.jsx)(n.h4,{id:"auth-token",children:"Auth-Token"}),"\n",(0,t.jsx)(n.p,{children:"Authentication via a shared secret API Key must be passed in a header"}),"\n",(0,t.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/{endpoint}" -i -X GET \\\n   -H "content-type: application/json" \\\n   -H "auth-token: 1234abcd"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,t.jsxs)(n.p,{children:["The API is set to 100 requests per second with a burst of 500,\nlimit and burst explained ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Token_bucket",children:"here"})]}),"\n",(0,t.jsx)(n.p,{children:"If limits are exceeded you will receive a 429 Error (limit exceeded) response."}),"\n",(0,t.jsx)(n.p,{children:"The maximum size of any request is 1mb, exceeding this will return a 413 Error."}),"\n",(0,t.jsx)(n.p,{children:"The event endpoint will return a maximum of 100 events per request."}),"\n",(0,t.jsxs)(n.p,{children:["The Intilery API is organized around ",(0,t.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Representational_State_Transfer",children:"REST"}),". Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. ",(0,t.jsx)(n.a,{href:"http://www.json.org/",children:"JSON"})," is returned by all API responses, including errors."]}),"\n",(0,t.jsx)(n.h3,{id:"errors",children:"Errors"}),"\n",(0,t.jsxs)(n.p,{children:["Intilery uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the ",(0,t.jsx)(n.code,{children:"2xx"})," range indicate success, codes in the ",(0,t.jsx)(n.code,{children:"4xx"})," range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the ",(0,t.jsx)(n.code,{children:"5xx"})," Intilery's servers."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"HTTP Status"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"HTTP Status"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"200 - OK"})}),(0,t.jsx)(n.td,{children:"Everything worked as expected."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"400 - Bad Request"})}),(0,t.jsx)(n.td,{children:"The request was unacceptable, often due to missing a required parameter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"401 - Unauthorized"})}),(0,t.jsx)(n.td,{children:"No valid Access Secret provided."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"404 - Not Found"})}),(0,t.jsx)(n.td,{children:"The requested resource doesn\u2019t exist."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"429 - Too Many Requests"})}),(0,t.jsx)(n.td,{children:"Too many requests hit the API too quickly. We recommend an exponential backoff of your requests."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"500, 502, 503, 504 - Server Errors"})}),(0,t.jsx)(n.td,{children:"Something went wrong on Intilery's side."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Error Body"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "error": {\n    "code": "validation_error",\n    "message": "ProfileID must be in format of id_type:id"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Code"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Message"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"authentication_error"})}),(0,t.jsx)(n.td,{children:"Failure to properly authenticate yourself in the request."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"invalid_request_error"})}),(0,t.jsx)(n.td,{children:"Invalid request errors arise when your request has invalid parameters."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"rate_limit_error"})}),(0,t.jsx)(n.td,{children:"Too many requests hit the API too quickly."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"validation_error"})}),(0,t.jsx)(n.td,{children:"Errors triggered when failing to validate fields (e.g., when a collection name has invalid characters)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"not_found"})}),(0,t.jsx)(n.td,{children:"The customer could not be found"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"internal_server_error"})}),(0,t.jsx)(n.td,{children:"Something went wrong internal to Intilery"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"pagination",children:"Pagination"}),"\n",(0,t.jsxs)(n.p,{children:["All top-level API resources have support for bulk fetches using \u201clist\u201d API methods. For instance you can list profiles, a profile\u2019s events, a profile\u2019s traits, and a profile\u2019s external_ids. These list API methods share a common structure, taking at least two parameters: ",(0,t.jsx)(n.code,{children:"from"})," and ",(0,t.jsx)(n.code,{children:"size"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"request-arguments",children:"Request Arguments"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Argument"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"from"})}),(0,t.jsx)(n.td,{children:"Defines the number of hits to skip, defaulting to 0. Together with the size parameter, defines a page of results."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"size"})}),(0,t.jsx)(n.td,{children:"A limit on the number of objects to be returned, between 1 and 100."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"request-ids",children:"Request IDs"}),"\n",(0,t.jsxs)(n.p,{children:["Each API request has an associated request identifier. You can find this value in the response headers, under ",(0,t.jsx)(n.code,{children:"x-amzn-RequestId"}),". ",(0,t.jsx)(n.strong,{children:"If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -i https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/{endpoint}\nHTTP/1.1 200 OK\nDate: Mon, 01 Jul 2013 17:27:06 GMT\nStatus: 200 OK\nx-amzn-RequestId: 1111-2222-3333-4444\n"})}),"\n",(0,t.jsx)(n.h3,{id:"routes",children:"Routes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Name"})}),(0,t.jsxs)(n.th,{children:[(0,t.jsx)(n.strong,{children:"Route"})," ",(0,t.jsx)(n.a,{href:"https://tracking.intilery.com/track/%7BclientId%7D/%7BaccountId%7D/%7BBRANDID%7D/v1/profiles/",children:"https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/"})," \u2026"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Get a Profile\u2019s Traits"}),(0,t.jsxs)(n.td,{children:["/email",":joe",(0,t.jsx)(n.a,{href:"mailto:.bloggs@intilery.com",children:".bloggs@intilery.com"}),"/traits"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Get a Profile\u2019s Metadata"}),(0,t.jsxs)(n.td,{children:["/email",":joe",(0,t.jsx)(n.a,{href:"mailto:.bloggs@intilery.com",children:".bloggs@intilery.com"}),"/metadata"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Get a Profile\u2019s Events"}),(0,t.jsxs)(n.td,{children:["/email",":joe",(0,t.jsx)(n.a,{href:"mailto:.bloggs@intilery.com",children:".bloggs@intilery.com"}),"/events"]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"get-a-profiles-traits",children:"Get a Profile\u2019s Traits"}),"\n",(0,t.jsxs)(n.p,{children:["Get a single customer's traits using an ",(0,t.jsx)(n.code,{children:"external_id"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"GET /track/v1/profiles/userId:123-rty/traits\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Examples"})," Here\u2019s what it looks to search for a profile\u2019s traits by an external id, like by an ",(0,t.jsx)(n.code,{children:"email"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"GET /track/v1/profiles/email:joe.bloggs@intilery.com/traits\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or a id:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"GET /v1/spaces/lg8283283/collections/users/profiles/id:1234-5678-asdf-ghjk/traits\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/traits" -i -X GET \\ -H "content-type: application/json" \\ -H "auth-token: 1234abcd"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"404 Not Found"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "error": {\n    "code": "not_found",\n    "message": "Custmer not found."\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"200 OK"})," (single response)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "lastName": "Bloggs",\n    "website": "www.intilery.com",\n    "externalId": "joe.bloggs@intilery.com",\n    "organisation": "Intilery",\n    "industry": "Other",\n    "firstName": "Joe",\n    "phone": "+44111222333444",\n    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n    "marketingPreferences": {\n        "channels": [\n            {\n                "subscribed": true,\n                "channel": "email"\n            },\n            {\n                "subscribed": true,\n                "channel": "sms"\n            },\n            {\n                "subscribed": false,\n                "channel": "whatsapp"\n            },\n            {\n                "subscribed": false,\n                "channel": "facebook"\n            },\n            {\n                "subscribed": false,\n                "channel": "push"\n            }\n        ]\n    },\n    "email": "joe.bloggs@intilery.com"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"200 OK"})," (multiple response)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n\t"data" : [\n    {\n        "lastName": "Bloggs",\n        "website": "www.intilery.com",\n        "externalId": "joe.bloggs@intilery.com",\n        "organisation": "Intilery",\n        "industry": "Other",\n        "firstName": "Joe",\n        "phone": "+44111222333444",\n        "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n        "marketingPreferences": {\n            "channels": [\n                {\n                    "subscribed": true,\n                    "channel": "email"\n                },\n                {\n                    "subscribed": true,\n                    "channel": "sms"\n                },\n                {\n                    "subscribed": false,\n                    "channel": "whatsapp"\n                },\n                {\n                    "subscribed": false,\n                    "channel": "facebook"\n                },\n                {\n                    "subscribed": false,\n                    "channel": "push"\n                }\n            ]\n        },\n        "email": "joe.bloggs@intilery.com"\n    \t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Note"})}),": if you request a customer using userId or Id, the response will be a single customer's traits. For searching by email, as multiple customer records can have the same email (unless you use their email as their userId) an array of results in the data field are returned"]}),"\n",(0,t.jsx)(n.h3,{id:"get-a-customers-events",children:"Get a Customer's Events"}),"\n",(0,t.jsxs)(n.p,{children:["Get a single profile\u2019s events within a collection using an ",(0,t.jsx)(n.code,{children:"external_id"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"    GET /track/v1/profiles/userId:123-rty/events\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/events" -i -X GET \\ -H "content-type: application/json" \\ -H "auth-token: 1234abcd"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"404 Not Found"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "error": {\n    "code": "not_found",\n    "message": "Profile was not found."\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"200 OK"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  \t"scrollId": "DnF1ZXJ5VGhlbkZldGNoBQAAAAAAMzh3FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4ehZjSS1MbWxmMlRVeVlVNVJPU3JzOTVRAAAAAAAzOHgWY0ktTG1sZjJUVXlZVTVST1Nyczk1UQAAAAAAMzh7FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4eRZjSS1MbWxmMlRVeVlVNVJPU3JzOTVR",\n    "data": [\n        {\n            "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "externalId": "joe.bloggs@intilery.com",\n            "email": "joe.bloggs@intilery.com",\n            "eventId": "ec717144-924c-4826-981b-848459c39176",\n            "eventTime": "2020-11-19T13:39:17.380Z",\n            "receivedTime": "2020-11-19T13:39:17.912Z",\n            "eventAction": "email_opened",\n            "clientId": "intilery",\n            "accountId": "marketing",\n            "brandId": "MARKETING",\n            "customerId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "source": "SEGMENT_API",\n            "rawData": {\n                "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n                "action": "track",\n                "event": "Email Opened",\n                "context": {\n                    "ip": "217.42.6.253",\n                    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15",\n                    "traits": {\n                        "email": "joe.bloggs@intilery.com"\n                    }\n                },\n                "properties": {\n                    "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",\n                    "email_subject": "Thanks for requesting an Intilery trial",\n                    "campaign_id": "TRIAL_WELCOME"\n                },\n                "timestamp": "2020-11-19T13:39:17.380Z",\n                "sendType": "email"\n            }\n        },\n        {\n            "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "externalId": "joe.bloggs@intilery.com",\n            "email": "joe.bloggs@intilery.com",\n            "eventId": "4b7c99d4-0714-41e0-b285-1ef300634984",\n            "clientId": "intilery",\n            "source": "SEGMENT_API",\n            "rawData": {\n                "context": {\n                    "traits": {\n                        "email": "joe.bloggs@intilery.com"\n                    },\n                    "ip": "217.42.6.253",\n                    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15"\n                },\n                "sendType": "email",\n                "action": "track",\n                "event": "Email Opened",\n                "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n                "properties": {\n                    "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",\n                    "email_subject": "Thanks for requesting an Intilery trial",\n                    "campaign_id": "TRIAL_WELCOME"\n                },\n                "timestamp": "2020-11-19T13:37:50.929Z"\n            },\n            "eventAction": "email_opened",\n            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "accountId": "marketing",\n            "receivedTime": "2020-11-19T13:37:51.407Z",\n            "brandId": "MARKETING",\n            "eventTime": "2020-11-19T13:37:50.929Z",\n            "customerId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe"\n        }\n\t\t\t]\n\t\t}\n\t}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Note"})}),": if you request a customer using userId or Id, the response will the events for a single customer. For searching by email, as multiple customer records can have the same email (unless you use their email as their userId) events for all customers with the email specified will be included"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Query Parameters"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Query Parameter"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Example"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"include"})}),(0,t.jsx)(n.td,{children:"The event action to include in the query"}),(0,t.jsx)(n.td,{children:"page"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"exclude"})}),(0,t.jsx)(n.td,{children:"A comma-separated list of event actions to exclude from the query"}),(0,t.jsx)(n.td,{children:"page,logged_in,registered,identify"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start"})}),(0,t.jsxs)(n.td,{children:["Returns all the events that start after ",(0,t.jsx)(n.code,{children:"start"})," (in ISO 8601)."]}),(0,t.jsx)(n.td,{children:"2006-01-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"end"})}),(0,t.jsxs)(n.td,{children:["Returns all the events that end before ",(0,t.jsx)(n.code,{children:"end"})," (in ISO 8601)."]}),(0,t.jsx)(n.td,{children:"2018-01-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sort"})}),(0,t.jsxs)(n.td,{children:["Determines whether the result is ",(0,t.jsx)(n.strong,{children:"asc"}),"ending or ",(0,t.jsx)(n.strong,{children:"desc"}),"ending. Defaults to descending."]}),(0,t.jsx)(n.td,{children:"asc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"from"})}),(0,t.jsx)(n.td,{children:"Defines the number of hits to skip, defaulting to 0. Together with the size parameter, defines a page of results."}),(0,t.jsx)(n.td,{children:"100"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"size"})}),(0,t.jsx)(n.td,{children:"A limit on the number of objects to be returned, between 1 and 100."}),(0,t.jsx)(n.td,{children:"10"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"pagination-1",children:"Pagination"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"from"})," parameter to page through up to 10,000 results."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"start"})," and ",(0,t.jsx)(n.code,{children:"end"})," to pass in a datetime to restrict the result set."]}),"\n",(0,t.jsx)(n.h3,{id:"get-a-customers-metadata",children:"Get a Customer's Metadata"}),"\n",(0,t.jsxs)(n.p,{children:["Get a single profile\u2019s metadata within a collection using an ",(0,t.jsx)(n.code,{children:"external_id"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"GET /track/v1/profiles/userId:123-rty/meta\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Request"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/meta" -i -X GET \\ -H "content-type: application/json" \\ -H "auth-token: 1234abcd"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"404 Not Found"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "error": {\n    "code": "not_found",\n    "message": "Profile was not found."\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"200 OK"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "lastName": "Bloggs",\n    "website": "www.intilery.com",\n    "_subscriptionId": "aW50aWxlcnk6bWFya2V0aW5nOjg3MzA1NWVmLTdmYmYtNDYyNS1iMWNkLTEwYjRlNDc5YjIwZA==",\n    "externalId": "joe.bloggs@intilery.com",\n    "organisation": "Intilery",\n    "industry": "Other",\n    "firstName": "Joe",\n    "createdBy": {\n        "filename": "staff listaug20.csv",\n        "createdTime": "2020-08-24T15:54:15.323Z",\n        "type": "audience-csv"\n    },\n    "phone": "111222333444",\n    "firstEvent": {\n        "email_sent": {\n            "eventId": "b5148168-928f-4f61-9a3d-ff1be6da5820",\n            "receivedTime": "2020-10-20T13:49:43.393Z",\n            "context": {\n                "traits": {\n                    "email": "joe.bloggs@intilery.com"\n                }\n            },\n            "sendType": "email",\n            "eventTime": "2020-10-20T13:49:41.697Z",\n            "action": "track",\n            "event": "Email Sent",\n            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "properties": {\n                "email_id": "6adec8ad-3663-4c53-b02d-67d69de6da91",\n                "email_subject": "Everyone loves a freebie",\n                "campaign_id": "FreeTrialEshot"\n            },\n            "timestamp": "2020-10-20T13:49:41.697Z"\n        },\n      ...\n    },\n    "lastEvent": {\n        "email_sent": {\n            "eventId": "b8be0f1f-e1af-41b8-9f8c-17514f3ccad6",\n            "receivedTime": "2020-11-09T10:10:34.653Z",\n            "context": {\n                "traits": {\n                    "email": "joe.bloggs@intilery.com"\n                }\n            },\n            "sendType": "email",\n            "eventTime": "2020-11-09T10:10:33.811Z",\n            "action": "track",\n            "event": "Email Sent",\n            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "properties": {\n                "email_id": "d67f6825-c560-4186-a2b6-516557e7151e",\n                "email_subject": "Everything you need, in one place",\n                "campaign_id": "Nov2"\n            },\n            "timestamp": "2020-11-09T10:10:33.811Z"\n        },\n        "email_opened": {\n            "eventId": "ec717144-924c-4826-981b-848459c39176",\n            "receivedTime": "2020-11-19T13:39:17.912Z",\n            "context": {\n                "ip": "217.42.6.253",\n                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15 ",\n                "traits": {\n                    "email": "joe.bloggs@intilery.com"\n                }\n            },\n            "sendType": "email",\n            "eventTime": "2020-11-19T13:39:17.380Z",\n            "action": "track",\n            "event": "Email Opened",\n            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n            "properties": {\n                "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",\n                "email_subject": "Thanks for requesting an Intilery trial",\n                "campaign_id": "TRIAL_WELCOME"\n            },\n            "timestamp": "2020-11-19T13:39:17.380Z"\n        },\n      ...\n    },\n    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",\n    "marketingPreferences": {\n        "channels": [\n            {\n                "subscribed": true,\n                "channel": "email"\n            },\n            {\n                "subscribed": true,\n                "channel": "sms"\n            },\n            {\n                "subscribed": false,\n                "channel": "whatsapp"\n            },\n            {\n                "subscribed": false,\n                "channel": "facebook"\n            },\n            {\n                "subscribed": false,\n                "channel": "push"\n            }\n        ]\n    },\n    "audiencesStatic": [\n        "audience_board"\n    ],\n    "lastActivityTime": "2020-11-19T13:39:17.380Z",\n    "email": "joe.bloggs@intilery.com"\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"listing-all-customer-profiles",children:"Listing all Customer Profiles"}),"\n",(0,t.jsx)(n.p,{children:"If you request the endpoint:"}),"\n",(0,t.jsx)(n.h4,{id:"initial-request",children:"Initial Request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You will get back the first 100 customers, and a ",(0,t.jsx)(n.code,{children:"scrollId"})," which will allow you to\nmake additional requests to stream through the full results set."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",children:'{\n  "scrollId":"dsfmLKHJosidjflksjflksjfonawlefnEWOILKsdlfjlsjfpoiwhfekln",\n  "data": [\n    {\n      // customer data\n    },\n    {\n      // customer data\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"scroll-request",children:"Scroll Request"}),"\n",(0,t.jsxs)(n.p,{children:["To scroll through the rest of the results, add the ",(0,t.jsx)(n.code,{children:"scrollId"})," as a query parameter:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",metastring:"request",children:"GET https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles?scrollId=<your-scroll-id>\n"})}),"\n",(0,t.jsx)(n.p,{children:"If data is returned, record the scroll Id and make another request until their are\nno more customer profiles."}),"\n",(0,t.jsx)(n.h2,{id:"personalization",children:"Personalization"}),"\n",(0,t.jsx)(n.h3,{id:"recommended-implementation",children:"Recommended Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Intilery provides an API where customers can fetch data about their users given an identifier (e.g email or user id) and an authorized access secret. We recommend you integrate using a server-side personalization pattern."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://www.lucidchart.com/publicSegments/view/25df2e70-a666-4581-8f86-1a000dbf1f49/image.png",alt:"Server-side Personalization"})}),"\n",(0,t.jsx)(n.p,{children:"Since this API has access to all of a customer\u2019s data, we do not support CORS and ask that you do not expose the access secret (e.g. in a client-side app). We advise customers to create personalization service in their infrastructure that other apps, websites or services communicate with to fetch personalizations about their users."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},9553:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/externalid-0fd2dbdeed77fde7a16bb3ca2f56a319.png"}}]);