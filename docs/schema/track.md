---
id: track
title: Track Schema
sidebar_label: Track
---

The `track` API call is how you record any actions your users perform, along with any properties that describe the action.

Each action is known as an event. Each event has a name, like **User Registered**, and properties, for example a **User Registered** event might have properties like `plan` or `accountType`. Calling `track` in the [Website Tag](../tag/tag1) or [HTTP API](../apis/api1) is the first step to integrating and using Intilery.

Here’s the payload of a typical `track` call with most [common fields](../schema/common) removed:

```json
{
  "type": "track",
  "event": "User Registered",
  "properties": {
    "plan": "Pro Annual",
    "accountType" : "Facebook"
  }
}
```

And here’s the corresponding Javascript event that would generate the above payload:

```javascript
analytics.track("User Registered", {
  plan: "Pro Annual",
  accountType: "Facebook"
});
```

Beyond the common fields, the `track` call has the following fields:

| Field        |            | Type   | Description                                                  |
| ------------ | ---------- | ------ | ------------------------------------------------------------ |
| `event`      | *required* | String | Name of the action that a user has performed. See the [Event field docs](#event) for more details. |
| `properties` | *optional* | Object | Free-form dictionary of properties of the event, like `revenue` See the [Properties docs](#properties) for a list of reserved property names. |

## Example

Here’s a complete example of a `track` call:

```json
{
  "anonymousId": "23adfd82-aa0f-45a7-a756-24f2a7a4c895",
  "context": {
    "library": {
      "name": "analytics.js",
      "version": "2.11.1"
    },
    "page": {
      "path": "/academy/",
      "referrer": "",
      "search": "",
      "title": "Analytics Academy",
      "url": "https://segment.com/academy/"
    },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36",
    "ip": "108.0.78.21"
  },
  "event": "Course Clicked",
  "integrations": {},
  "messageId": "ajs-f8ca1e4de5024d9430b3928bd8ac6b96",
  "properties": {
    "title": "Intro to Analytics"
  },
  "receivedAt": "2015-12-12T19:11:01.266Z",
  "sentAt": "2015-12-12T19:11:01.169Z",
  "timestamp": "2015-12-12T19:11:01.249Z",
  "type": "track",
  "userId": "AiUGstSDIg",
  "originalTimestamp": "2015-12-12T19:11:01.152Z"
}
```

## Identities

The User ID is a unique identifier for the user performing the actions. Check out the [User ID docs](../schema/identify#user-id) for more detail.

The Anonymous ID can be any pseudo-unique identifier, for cases where you don’t know who the user is, but you still want to tie them to an event. Check out the [Anonymous ID docs](../schema/identify#anonymous-id) for more detail.

**Note: In ourwebsite tag and mobile libraries (coming soon) a User ID is automatically added** from the state stored by a previous [`identify`](../schema/identify/) call, so you do not need to add it yourself. They will also automatically handle Anonymous ID’s under the covers.

## Event

Every `track` call records a single user action. We call these “events”. We recommend that you make your event names human-readable, so that everyone on your team (even you, after all that caffeine) can know what they mean instantly.

Do not use nondescript names like **Event 12** or **TMDropd**. Instead, use unique but recognizable names like **Video Recorded** and **Order Completed**.

**We recommend event names built from a noun and past-tense verb.**

We have standardized a series of reserved event names that have special semantic meaning. See the [Semantic Events docs](../schema/intilery) for more detail.

## Properties

Properties are extra pieces of information you can tie to events you track. They can be anything that will be useful while analyzing the events later. We recommend sending properties whenever possible because they give you a more complete picture of what your users are doing.

We’ve reserved some properties that have semantic meanings, and we handle them in special ways. For example, we always expect `revenue` to be a dollar amount that we send to tools that handle revenue tracking.

You should **only use reserved properties for their intended meaning**.

The following is all the reserved properties we have standardized that apply to all events. Check out the [Semantic Events docs](../schema/intilery) for properties specific to individual reserved events.

| **Property** | **Type** | **Description**                                              |
| ------------ | -------- | ------------------------------------------------------------ |
| `revenue`    | Number   | Amount of revenue an event resulted in. This should be a decimal value, so a shirt worth £19.99 would result in a `revenue` of `19.99`. |
| `currency`   | String   | Currency of the revenue an event resulted in This should be sent in the [ISO 4127 format](http://en.wikipedia.org/wiki/ISO_4217). If this is not set, we assume the revenue to be in US dollars. |
| `value`      | Number   | An abstract “value” to associate with an event. This is typically used in situations where the event doesn’t generate real-dollar revenue, but has an intrinsic value to a marketing team, like newsletter signups. |

**Note:** You might be used to some destinations recognizing special properties differently. For example, Mixpanel has a special `track_charges` method for accepting revenue. Luckily, you don’t have to worry about those inconsistencies. Just pass us `revenue`. **We’ll handle all of the destination-specific conversions for you automatically.** Same goes for the rest of the reserved properties.
