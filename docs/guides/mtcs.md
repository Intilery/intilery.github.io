---
id: mtcs
title: MTCs, MTVs, Throughput and Billing
sidebar_label: MTCs, MTVs, Throughput and Billing
---

## What is an MTC?

MTC stands for “monthly tracked customer”. (Keep reading to learn [how Intilery counts MTCs](#how-does-intilery-calculate-mtcs).)

## What is an MTV?

MTV stands for “monthly tracked visitors”. (Keep reading to learn [how Intilery counts MTCs](#how-does-intilery-calculate-mtvs).)

## What is an API call?

When you use Intilery to collect your data, you use the Intilery tracking methods (Track, Page, Screen, Identify, Group (coming soon), and Alias (coming soon)) which collect the data [in a structured way](/docs/schema/contents), and then send it to `events.intilery.com`. If you are using the Intilery HTTP API, or sending batched data using a cloud-source, that data also goes through this Intilery API endpoint.

Each data blob (with its properties or traits) goes through this endpoint, and is considered one “API call”.

## What is throughput?

Depending on your Intilery account type, your plan might include a throughput limit. The throughput limit tells you how many API calls and objects Intilery allows you per MTC.

For example, if your throughput limit is set to 250, this means that you can send a combined total of 250 API calls and objects to Intilery each month per MTC you’ve paid for in your plan. If you have a 10,000 MTC plan, this means you can send up to a total of 2.5 million API calls and objects each month.

These objects and API calls are not tied to a specific user, but are an aggregate number applied to your workspace. Most customers never hit this limit, and Business tier plans often have custom limits.

Other combinations of throughput limits exist and are detailed on your order form.

You may also not have any throughput limits on your account.

#### Batching and throughput limits

You can sometimes “batch” API calls to reduce send times, however batching doesn’t reduce your throughput usage. Batched calls are unpacked as they are received, and the objects and calls the batch contains are counted individually. While batching does not reduce your throughput, it does reduce the possibility of rate limit errors.

## How does Intilery calculate MTCs?

Intilery counts the number of **unique** `userId`s, and then adds the number of **unique** `anonymousId`s that were not associated with a `userId` during the billing period. Intilery counts these IDs over all calls made from all sources in your workspace, over a billing month. Intilery only counts each user once per month, even if they perform more than one action or are active across more than one source.

#### Example MTC counts

Imagine that you have both a website and a mobile app. Both the website and mobile app have pages that you can use without being logged in, and both send Identify calls when a user *does* log in.

##### Deduplication across sources

As a simple example, imagine that a user is already logged in on both the website and the mobile app. When the user’s activity generates events on the website, these events are sent using Analytics.js, and include the user’s `userId`. When they do things on the mobile app, these events are sent from a mobile source, and also include the `userId`. When Intilery counts the MTCs, all the events from the same `userId` only generate one MTC, regardless of the source it came from.

##### Deduplication after log-in

Now imagine a new user, who has never logged in. At first, they have two `anonymousId`s, one for the mobile app and one for the website. However, if they log in during the course of the month, you now know who they are, and can attach their `anonymousId` to a `userId`.

If the user logs in on *just* the app, you would still see two MTCs: one `anonymousId` for the website source, and one `anonymousId` with an attached `userId` from the mobile app source. If the user logs in on *both* the app and website, they would count as one MTC: two different `anonymousId`s attached to one `userId`.

## How does Intilery calculate MTVs?

Intilery counts the number of **unique** **unique** `anonymousId`s that were not associated with a `userId` during the billing period. Intilery counts these IDs over all calls made from all sources in your workspace, over a billing month. Intilery only counts each user once per month, even if they perform more than one action or are active across more than one source.

## What is the difference between an event and an object?

We know this sounds like a non-sequitur, but understanding the difference between events and objects helps you understand how MTCs are calculated.

An event is a data collection triggered in response to a user action: a [Track call](/docs/tag/tag1#step-3-track-actions) (or a [Page](/docs/schema/page)/[Screen](/docs/schema/screen) call if the action was to navigate to a new page). Events take place in a single moment in time, and include a name, timestamp, and **properties**. When an event happens more than once, it creates a new Event record (with a new timestamp) rather than updating an existing one. For example, a user browsing a product catalog might generate several “Product Viewed” events, which might include the product name, price, and category.

This is in contrast to “Objects” which represent a single thing that persists over time and can be updated. Objects have “traits” (instead of properties) which record information about that object, and which can change over time. For example a “user” object could have a trait of “email” which doesn’t change often, but could also have a [computed trait](/docs/customers/computed-traits/) like `logged_in_last_7_days` that changes between `true` and `false` based on how much they use your site.