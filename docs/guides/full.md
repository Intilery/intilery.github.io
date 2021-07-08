---
id: full
title: Planning a full implementation
sidebar_label: Planning A Full implementation
---

Now that we’ve shown you Intilery in action, let’s step back and think through what a full implementation of Intilery for your organization would look like. We know that figuring out what events to track in Intilery can feel overwhelming. You should expect this planning process to have the following steps:

- [Define Business Objectives](#define-business-objectives)
- Decide what to collect
  - Shortcut! Check if a Business Spec meets your needs
    - [B2B Schema](/docs/schema/b2b)
    - [Ecommerce Schema](/docs/schema/retail)
    - [Mobile Spec](/docs/schema/mobile)
    - [Video Spec](/docs/schema/video)
- [Create naming conventions](#create-naming-conventions)
- Develop a Tracking Plan
  - [Plan your Identify and Group calls](#plan-your-identify-and-group-calls)
  - [Plan your Track events](#plan-your-track-events)
  - [Define your Track event properties](#define-your-track-event-properties)

Be prepared to invest time deciding with stakeholders how to track your data, and planning how you’ll utilise it. The time you spend here will save you lots of time in the future, as following Intilery’s best practices allows you to easily change your tracking later.

## Define Business Objectives

Tracking is about learning and taking action. Think about what you want to know about your product or customers. Think about what assumptions need to be tested and what theories need to be proven true or false. Think about how you would like to engage your customers, what campaigns do you want to run? What automation will be useful? Think about the unknowns. Here are some helpful questions to get started:

- What kind of events or data best illustrate or explain how your customers use your product?
- How do people discover, start using, and paying for your product?
- What are the most important steps in a customer’s journey?

While it may seem obvious, we highly recommend documenting your high-level business objectives. We will ask you tom complete this as part of on boarding, if possible:-

![what to track](/img/success.png)

More specifically, ask yourself: what are the measurable business outcomes you want to achieve this year? Do you want to convert new customers? Drive more incremental revenue among your current customer base? Sell more products? Increase average basket value?

The best way to answer this question is to interview stakeholders in your organization who will consume the data and plan the journeys and campaigns.

With your business goals documented, the next step is to map user actions to those business goals. For example, if one of your goals is to activate new signups, you want to think about which activities are related to a signup. Ask yourself, what actions do people take *before* signing up? Do specific actions predict a user signing up?

As an example, you might end up with a list like this:

- Ad Campaign Clicked
- Link Clicked
- Article Completed
- Campaign Opened
- From Initiated
- Form Submitted
- User Signed Up

While this list represents a tiny fraction of the user actions you *could* track, it gives a list focused on your top business objectives. This helps break up the huge project of data collection into smaller chunks.

## Decide what to collect

With your business objectives documented and mapped to user actions, it’s time to build standards that you can use when deciding what to track. With your stakeholders, make a list of the actual events (page or screen views, and user actions) that you want to track. Think about all of the ways your users can interact with your site or app

When you’re first starting out, we recommend that you limit your tracking plan to a few core events, but add lots of properties to provide context about them. We generally see more success with the “less is more” philosophy of tracking data, but you might also decide to take a more liberal “track more and analyze later” approach. Like everything, each alternative has pros and cons that are important to consider especially as it relates to your company’s needs.

(We’ll talk more about Tracking Plans [below](#develop-a-tracking-plan).)

### Shortcut! Check if a Business Schema meets your needs

Intilery maintains several “Business Schemas”, which are recommendations based on your type of business that give recommendations on what to track, what additional traits or properties to collect, and how to format them. The two most common are the B2B (business-to-business) Spec, Ecommerce Spec, and our Mobile and Video specs.

If these specs meet your business needs, you’re in luck! These specs are built into our tracking plan templates, so you don’t need to start from a blank slate.

#### B2B Spec

If your organization sells a product or services to other businesses, you might have different analytics and marketing needs than most companies. You need to understand your customer behaviors both at the user-level, and also at the company or team-level.

#### Ecommerce Spec

If your organization sells products online, the E-commerce Spec covers the customer’s journey as they browse your store, click on promotions, view products, add those products to a cart, and complete a purchase. It also provides recommendations about off-page interactions, including interactions with email promotions, coupons, and other systems. read more about our [Ecommerce Schema](/docs/schema/retail)

#### Mobile Spec

The native Mobile Spec is a common blueprint for the mobile user lifecycle. The Spec outlines the most important events for mobile apps to track, and automatically collects many of these events when you use the [Intilery Android and iOS SDKs] (coming soon). Read more about [the Native Mobile Spec](/docs/schema/mobile)

## Create naming conventions

Regardless of approach, here are some important best practices to keep in mind:

- **Pick a casing convention:** We recommend *Title Case* for event names and *snake_case* for property names. Make sure you pick a casing standard and enforce it across your events and properties.
- **Pick an event name structure:** As you may have noticed from our [schemas](/docs/schema/contents), we’re big fans of the Object (`Blog Post`) + Action (`Read`) framework for event names. Pick a convention and stick to it!
- **Don’t create event names dynamically:** Avoid creating events that pull a dynamic value into the event name (for example, `User Signed Up (11-01-2019)`).
- **Don’t create events to track properties:** Avoid adding values to event names when they could be a property. Instead, add values as a property. For example, rather than having an event called “Read Blog Post - Best Tracking Plans Ever”, create a “Blog Post Read” event and with a property like `"blog_post_title":"Best Tracking Plans Ever"`.
- **Don’t create property keys dynamically:** Avoid creating property names like `"feature_1":"true"`,`"feature_2":"false"` as these are ambiguous and very difficult to analyze

![img](/img/goodbad.png)

Got all that? Great! You’re now ready to develop a Tracking Plan.

## Develop a Tracking Plan

A [tracking plan](./tracking-plan) clarifies what events to track, where those events live in the code base, and why you’re tracking those events (from a business perspective). **A good tracking plan represents the single source of truth about what data you collect, and why.**

Your tracking plan is probably maintained in a spreadsheet and serves as a project management tool to get your organization in agreement about what data to use to make decisions. A tracking plan helps build a shared understanding of the data among marketers, product managers, engineers, analysts, and any other data users.

### Plan your Identify calls

The Identify call updates all records of the user with a set of traits, and so is extremely important for building your understanding of your users. But how do you choose which traits to include? The example below shows an Identify call using [analytics.js](/docs/tag/tag1)) for Intilery:

```javascript
analytics.identify({
  name: 'Jane Kim',
  email: 'janekim@example.com',
  login: 'janekay',
  type: 'user',
  created: '2016-11-07T16:40:52.238Z',
});
```

The traits represent dimensions in your data that you can group or pivot on. For example, in the above, you can easily create audiences of all types that are `users` or accounts created within a time window of your choosing.

When you plan your deployment, think about what information you can collect as traits that would be useful to you when grouping users together, and plan how you will collect that information.

**Note:** In the Intilery Schema page in the Intilery platform, you can set the accessability of properties and traits, so that for example, a users "address" cannot change via the analytics.js call, and what data can be accessed.

### Plan your Track events

We recommend starting with fewer events that are directly tied to one of your [business objectives](#define-business-objectives), to help avoid becoming overwhelmed by endless number of possible actions to track. As you get more comfortable, you can add more events to your tracking plan that can answer more specialized questions.

At Intilery, we started out tracking these events:

- **User Signed Up**
- **Logged in**
- **Subscription Started**

Then we added some peripheral events to to better understand how we’re performing, for the following reasons:

- **User referred** When users invite more people to their organization, it’s a good indicator that they’re engaged and serious about using the product. This helps us measure growth in organizations.
- **Asset Created** We can see that customers are using the product
- **Journey put live** We can see that the customer has built, approved and put a journey live.

For an Ecommerce company, however, the main events might be something like:

- **Account Created**
- **Product Added**
- **Order Completed**

**Tip**: As we mentioned Intilery has a set of “reserved” event names specifically for ecommerce, called our [Ecommerce Spec](/docs/schema/retail). Check it out to see which events we cover and how they are used in our downstream destinations.

An online community, on the other hand, has an entirely different set of actions that indicate engagement, as listed below. For example, a community might want to track actions like:

- **Content Viewed**
- **Content Shared**
- **Comment Submitted**
- **Content Produced**
- **Content Curated**

With these actions tracked, the community can develop metrics around engagement, and understand how users move towards their ultimate conversion events.

### Define your Track event properties

Each Track call can accept an optional dictionary of properties, which can contain any key-value pair. These properties act as dimensions that allow creation of audiences, decisions in journeys, integration with other tools/products and the personalisatino of campaigns. They give you additional detail on broader events.

Events should be generic and high-level, but properties should be specific and detailed. For example, at Intilery, `Business Tier Workspace Created` is a horrible event name. Instead, we used `Workspace Created` with a `property` of `account_tier` and value of `business` :

```javascript
analytics.track('Workspace Created', {
  account_tier: 'business'
})
```

Similar to the traits in the Identify call, the properties provide a column that you can pivot against or filter on in your analytics tools or allow you to create am audience of customers.

Don’t create dynamically generated property names in the properties dictionary. Each `key` creates a new column in your downstream tools, and dynamically generated keys clutter your tools with fragmented data that makes it difficult and confusing to use later.

Here is Intilery’s `Lead Captured` Track call:

```javascript
analytics.track(userId, 'Lead Captured', {
  email: 'email',
  location: 'header navbar'
  url: 'https://intilery.com/'
});
```

The high-level event is **Lead Captured**, and all of the details appear in the properties dictionary. Because of this, we can easily see in our downstream tools how many leads were captured, and from which parts of the site.
