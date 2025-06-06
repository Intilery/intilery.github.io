---
id: screen
title: Screen Schema
sidebar_label: Screen
---

The `screen` call lets you record whenever a user sees a screen, the mobile equivalent of `page`, in your mobile app, along with any properties about the screen. Calling `page` or `screen` in one of our APIs is the first step in getting started with Intilery.

Here’s the payload of a typical `screen` call, with most [common fields](/docs/schema/common) removed:

```json
{
  "type": "screen",
  "name": "Home",
  "properties": {
    "Feed Type": "private"
  }
}
```

And here’s the corresponding Objective-C event that would generate the above payload:

```objective-c
[[SEGAnalytics sharedAnalytics] screen:@"Home"
                            properties:@{ @"Feed Type": @"private" }];
```

Beyond the common fields, the `screen` call takes the following fields:

_

| Field        |            | Type   | Description                                                  |
| ------------ | ---------- | ------ | ------------------------------------------------------------ |
| `name`       | *optional* | String | Name of the screen See the [Name field docs](#name) for more details. |
| `properties` | *optional* | Object | Free-form dictionary of properties of the screen, like `name` See the [Properties field docs](#properties) for a list of reserved property names. |

## Example

Here’s a complete example of a `screen` call:

```json
{
  "anonymousId": "3a12eab0-bca7-11e4-8dfc-aa07a5b093db",
  "channel": "mobile",
  "context": {
    "ip": "8.8.8.8"
  },
  "integrations": {
    "All": true,
    "Mixpanel": false,
    "Salesforce": false
  },
  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",
  "name": "Home",
  "properties": {
    "variation": "blue signup button"
  },
  "sentAt": "2015-02-23T22:28:55.111Z",
  "timestamp": "2015-02-23T22:28:55.111Z",
  "type": "screen",
  "userId": "97980cfea0067",
  "version": "1.1"
}
```

## Identities

The User ID is a unique identifier for the user performing the actions. Check out the [User ID docs](/docs/schema/identify#user-id) for more detail.

The Anonymous ID can be any pseudo-unique identifier, for cases where you don’t know who the user is, but you still want to tie them to an event. Check out the [Anonymous ID docs](/docs/schema/identify#anonymous-id) for more detail.

**Note: In our browser and mobile libraries a User ID is automatically added** from the state stored by a previous [`identify`](/docs/schema/identify/) call, so you do not need to add it yourself. They will also automatically handle Anonymous ID’s under the covers.

## Name

Each screen can be tagged with a `name`. For example, many apps have a “Signup” screen that can be useful to tag so that you can see users as they move through your funnel.

## Properties

Properties are extra pieces of information that describe the screen. They can be anything you want.

We’ve reserved some properties that have semantic meanings, and we handle them in special ways. You should **only use reserved properties for their intended meaning**.

Reserved properties we have standardized:

| **Property** | **Type** | **Description**                                      |
| ------------ | -------- | ---------------------------------------------------- |
| `name`       | String   | Name of the screen. This is reserved for future use. |
