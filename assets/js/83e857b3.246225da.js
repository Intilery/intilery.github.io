"use strict";(self.webpackChunkintilery=self.webpackChunkintilery||[]).push([[6034],{3041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"guides/mtcs","title":"MTCs, MTVs, Throughput and Billing","description":"What is an MTC?","source":"@site/docs/guides/mtcs.md","sourceDirName":"guides","slug":"/guides/mtcs","permalink":"/docs/guides/mtcs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"mtcs","title":"MTCs, MTVs, Throughput and Billing","sidebar_label":"MTCs, MTVs, Throughput and Billing"},"sidebar":"guides","previous":{"title":"Best practices in identifying customers","permalink":"/docs/guides/identifying-customers"},"next":{"title":"Protocols Overview","permalink":"/docs/guides/protocols"}}');var a=n(4848),o=n(8453);const i={id:"mtcs",title:"MTCs, MTVs, Throughput and Billing",sidebar_label:"MTCs, MTVs, Throughput and Billing"},r=void 0,c={},l=[{value:"What is an MTC?",id:"what-is-an-mtc",level:2},{value:"What is an MTV?",id:"what-is-an-mtv",level:2},{value:"What is an API call?",id:"what-is-an-api-call",level:2},{value:"What is throughput?",id:"what-is-throughput",level:2},{value:"Batching and throughput limits",id:"batching-and-throughput-limits",level:4},{value:"How does Intilery calculate MTCs?",id:"how-does-intilery-calculate-mtcs",level:2},{value:"Example MTC counts",id:"example-mtc-counts",level:4},{value:"Deduplication across sources",id:"deduplication-across-sources",level:5},{value:"Deduplication after log-in",id:"deduplication-after-log-in",level:5},{value:"How does Intilery calculate MTVs?",id:"how-does-intilery-calculate-mtvs",level:2},{value:"What is the difference between an event and an object?",id:"what-is-the-difference-between-an-event-and-an-object",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",h5:"h5",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"what-is-an-mtc",children:"What is an MTC?"}),"\n",(0,a.jsxs)(t.p,{children:["MTC stands for \u201cmonthly tracked customer\u201d. (Keep reading to learn ",(0,a.jsx)(t.a,{href:"#how-does-intilery-calculate-mtcs",children:"how Intilery counts MTCs"}),".)"]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-an-mtv",children:"What is an MTV?"}),"\n",(0,a.jsxs)(t.p,{children:["MTV stands for \u201cmonthly tracked visitors\u201d. (Keep reading to learn ",(0,a.jsx)(t.a,{href:"#how-does-intilery-calculate-mtvs",children:"how Intilery counts MTCs"}),".)"]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-an-api-call",children:"What is an API call?"}),"\n",(0,a.jsxs)(t.p,{children:["When you use Intilery to collect your data, you use the Intilery tracking methods (Track, Page, Screen, Identify, Group (coming soon), and Alias (coming soon)) which collect the data ",(0,a.jsx)(t.a,{href:"/docs/schema/contents",children:"in a structured way"}),", and then send it to ",(0,a.jsx)(t.code,{children:"events.intilery.com"}),". If you are using the Intilery HTTP API, or sending batched data using a cloud-source, that data also goes through this Intilery API endpoint."]}),"\n",(0,a.jsx)(t.p,{children:"Each data blob (with its properties or traits) goes through this endpoint, and is considered one \u201cAPI call\u201d."}),"\n",(0,a.jsx)(t.h2,{id:"what-is-throughput",children:"What is throughput?"}),"\n",(0,a.jsx)(t.p,{children:"Depending on your Intilery account type, your plan might include a throughput limit. The throughput limit tells you how many API calls and objects Intilery allows you per MTC."}),"\n",(0,a.jsx)(t.p,{children:"For example, if your throughput limit is set to 250, this means that you can send a combined total of 250 API calls and objects to Intilery each month per MTC you\u2019ve paid for in your plan. If you have a 10,000 MTC plan, this means you can send up to a total of 2.5 million API calls and objects each month."}),"\n",(0,a.jsx)(t.p,{children:"These objects and API calls are not tied to a specific user, but are an aggregate number applied to your workspace. Most customers never hit this limit, and Business tier plans often have custom limits."}),"\n",(0,a.jsx)(t.p,{children:"Other combinations of throughput limits exist and are detailed on your order form."}),"\n",(0,a.jsx)(t.p,{children:"You may also not have any throughput limits on your account."}),"\n",(0,a.jsx)(t.h4,{id:"batching-and-throughput-limits",children:"Batching and throughput limits"}),"\n",(0,a.jsx)(t.p,{children:"You can sometimes \u201cbatch\u201d API calls to reduce send times, however batching doesn\u2019t reduce your throughput usage. Batched calls are unpacked as they are received, and the objects and calls the batch contains are counted individually. While batching does not reduce your throughput, it does reduce the possibility of rate limit errors."}),"\n",(0,a.jsx)(t.h2,{id:"how-does-intilery-calculate-mtcs",children:"How does Intilery calculate MTCs?"}),"\n",(0,a.jsxs)(t.p,{children:["Intilery counts the number of ",(0,a.jsx)(t.strong,{children:"unique"})," ",(0,a.jsx)(t.code,{children:"userId"}),"s, and then adds the number of ",(0,a.jsx)(t.strong,{children:"unique"})," ",(0,a.jsx)(t.code,{children:"anonymousId"}),"s that were not associated with a ",(0,a.jsx)(t.code,{children:"userId"})," during the billing period. Intilery counts these IDs over all calls made from all sources in your workspace, over a billing month. Intilery only counts each user once per month, even if they perform more than one action or are active across more than one source."]}),"\n",(0,a.jsx)(t.h4,{id:"example-mtc-counts",children:"Example MTC counts"}),"\n",(0,a.jsxs)(t.p,{children:["Imagine that you have both a website and a mobile app. Both the website and mobile app have pages that you can use without being logged in, and both send Identify calls when a user ",(0,a.jsx)(t.em,{children:"does"})," log in."]}),"\n",(0,a.jsx)(t.h5,{id:"deduplication-across-sources",children:"Deduplication across sources"}),"\n",(0,a.jsxs)(t.p,{children:["As a simple example, imagine that a user is already logged in on both the website and the mobile app. When the user\u2019s activity generates events on the website, these events are sent using Analytics.js, and include the user\u2019s ",(0,a.jsx)(t.code,{children:"userId"}),". When they do things on the mobile app, these events are sent from a mobile source, and also include the ",(0,a.jsx)(t.code,{children:"userId"}),". When Intilery counts the MTCs, all the events from the same ",(0,a.jsx)(t.code,{children:"userId"})," only generate one MTC, regardless of the source it came from."]}),"\n",(0,a.jsx)(t.h5,{id:"deduplication-after-log-in",children:"Deduplication after log-in"}),"\n",(0,a.jsxs)(t.p,{children:["Now imagine a new user, who has never logged in. At first, they have two ",(0,a.jsx)(t.code,{children:"anonymousId"}),"s, one for the mobile app and one for the website. However, if they log in during the course of the month, you now know who they are, and can attach their ",(0,a.jsx)(t.code,{children:"anonymousId"})," to a ",(0,a.jsx)(t.code,{children:"userId"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If the user logs in on ",(0,a.jsx)(t.em,{children:"just"})," the app, you would still see two MTCs: one ",(0,a.jsx)(t.code,{children:"anonymousId"})," for the website source, and one ",(0,a.jsx)(t.code,{children:"anonymousId"})," with an attached ",(0,a.jsx)(t.code,{children:"userId"})," from the mobile app source. If the user logs in on ",(0,a.jsx)(t.em,{children:"both"})," the app and website, they would count as one MTC: two different ",(0,a.jsx)(t.code,{children:"anonymousId"}),"s attached to one ",(0,a.jsx)(t.code,{children:"userId"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"how-does-intilery-calculate-mtvs",children:"How does Intilery calculate MTVs?"}),"\n",(0,a.jsxs)(t.p,{children:["Intilery counts the number of ",(0,a.jsx)(t.strong,{children:"unique"})," ",(0,a.jsx)(t.strong,{children:"unique"})," ",(0,a.jsx)(t.code,{children:"anonymousId"}),"s that were not associated with a ",(0,a.jsx)(t.code,{children:"userId"})," during the billing period. Intilery counts these IDs over all calls made from all sources in your workspace, over a billing month. Intilery only counts each user once per month, even if they perform more than one action or are active across more than one source."]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-the-difference-between-an-event-and-an-object",children:"What is the difference between an event and an object?"}),"\n",(0,a.jsx)(t.p,{children:"We know this sounds like a non-sequitur, but understanding the difference between events and objects helps you understand how MTCs are calculated."}),"\n",(0,a.jsxs)(t.p,{children:["An event is a data collection triggered in response to a user action: a ",(0,a.jsx)(t.a,{href:"/docs/tag/tag1#step-3-track-actions",children:"Track call"})," (or a ",(0,a.jsx)(t.a,{href:"/docs/schema/page",children:"Page"}),"/",(0,a.jsx)(t.a,{href:"/docs/schema/screen",children:"Screen"})," call if the action was to navigate to a new page). Events take place in a single moment in time, and include a name, timestamp, and ",(0,a.jsx)(t.strong,{children:"properties"}),". When an event happens more than once, it creates a new Event record (with a new timestamp) rather than updating an existing one. For example, a user browsing a product catalog might generate several \u201cProduct Viewed\u201d events, which might include the product name, price, and category."]}),"\n",(0,a.jsxs)(t.p,{children:["This is in contrast to \u201cObjects\u201d which represent a single thing that persists over time and can be updated. Objects have \u201ctraits\u201d (instead of properties) which record information about that object, and which can change over time. For example a \u201cuser\u201d object could have a trait of \u201cemail\u201d which doesn\u2019t change often, but could also have a ",(0,a.jsx)(t.a,{href:"/docs/customers/computed-traits/",children:"computed trait"})," like ",(0,a.jsx)(t.code,{children:"logged_in_last_7_days"})," that changes between ",(0,a.jsx)(t.code,{children:"true"})," and ",(0,a.jsx)(t.code,{children:"false"})," based on how much they use your site."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);