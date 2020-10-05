---
id: identify
title: Identify Schema
sidebar_label: Identify
---

`identify` lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them like their email, name, etc.

Our recommendation for when and how often you should call `identify` is as follows:

- After a user registers
- After a user logs in
- When a user updates their info (eg changes or adds a new address)
- Upon loading any pages that are accessible by a logged in user (optional)

**Note:** You should configure the accessability of customer traits to non-authenticated APIs (e.g. [Analytics.js](../tag/tag1)) by default, customer traits are not able to be updated via non-authenticated APIs unless the accessor is set to do so.

The first three examples are pretty self-explanatory, but many might ask: why you would call identify on every page load if we’re storing the userId in the cookie/local storage?

Let’s imagine this scenario:

Calling `identify` in the [Website Tag](../tag/tag1) or [HTTP API](../apis/api1) is the first step to integrating and using Intilery.

Here’s the payload of a typical `identify` call with most [common fields](../schema/common) removed:

```javascript
{
  "type": "identify",
  "traits": {
    "name": "Peter Gibbons",
    "email": "peter@example.com",
    "plan": "premium",
    "logins": 5
  },
  "userId": "97980cfea0067"
}
```

And here’s the corresponding Javascript event that would generate the above payload:

```javascript
analytics.identify("97980cfea0067", {
  name: "Peter Gibbons",
  email: "peter@example.com",
  plan: "premium",
  logins: 5
});
```

Beyond the common fields, an `identify` call has the following fields:

| Field    |                                          | Type   | Description                                                  |
| -------- | ---------------------------------------- | ------ | ------------------------------------------------------------ |
| `traits` | *optional*                               | Object | Free-form dictionary of traits of the user, like `email` or `name`. See the [Traits field docs](#traits) for a list of reserved trait names. |
| `userId` | *optional if anonymousID is set instead* | String | Unique identifier for the user in your database. A userId or an anonymousId is required. See the [Identities docs](#identities) for more details. |

## Example

Here’s a complete example of an `identify` call:

```javascript
{
  "anonymousId": "507f191e810c19729de860ea",
  "channel": "browser",
  "context": {
    "ip": "8.8.8.8",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"
  },
  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",
  "receivedAt": "2015-02-23T22:28:55.387Z",
  "sentAt": "2015-02-23T22:28:55.111Z",
  "timestamp": "2015-02-23T22:28:55.111Z",
  "traits": {
    "name": "Peter Gibbons",
    "email": "peter@example.com",
    "plan": "premium",
    "logins": 5,
    "address": {
      "number": "1",
      "street": "Station Road",
      "city": "Chester",
      "county": "Cheshire",
      "postalCode": "CH1",
      "country": "UK"
    }
  },
  "type": "identify",
  "userId": "97980cfea0067",
  "version": "1.1"
}
```

## Identities

The `identify` call specifies a customer identity that you can reference across the customer’s whole lifetime. **Every `identify` call must have a [User ID](#user-id) or an [Anonymous ID](#anonymous-id)**, depending on how much you know about the user in question.

### Anonymous ID

There are certain cases where you don’t actually know who the user is according to your database, but you still want to be able to tie them to traits, events or page views. For example, you may not know who a user is when tracking newsletter signups or anonymous page views.

In these cases, you should use an Anonymous ID.

The Anonymous ID can be any pseudo-unique identifier. For example, on your servers you can use a session id. If you don’t have any readily available identifier, you can always generate a new random one—we recommend [UUIDs](http://en.wikipedia.org/wiki/Universally_unique_identifier).

**Note:** Our [Website Tag](../tag/tag1) **automatically** use Anonymous IDs under the covers to keep track of users as they navigate around your website or app, so you don’t need to worry about them when using those libraries.

Here’s an example of a Javascript event for an anonymous user:

```javascript
analytics.identify({
  subscriptionStatus: 'inactive'
});
```

### User ID

User IDs are a more permanent and robust identifier, like a database ID. Since these IDs are consistent across a customer’s lifetime, `identify` calls should include a User ID as often as possible.

A User ID is usually the unique identifier that you recognize a user by in your own database. For example, if you’re using MongoDB it might look something like `507f191e810c19729de860ea`.

We recommend using database IDs instead of simple email addresses or usernames, because database IDs *never* change. That guarantees that even if the user changes their email address, you can still recognize them as the same person in all of your analytics tools. And even better, you’ll be able to correlate analytics data with your own internal database.

**Instead of using an email address or a username as a User ID, send them along as [traits](#traits).**

## Traits

Traits are pieces of information you know about a user that are included in an `identify` call. These could be demographics like `age` or `gender`, account-specific like `plan`, or even things like whether a user has seen a particular A/B test variation. Up to you!

We’ve reserved some traits that have semantic meanings for users, and we handle them in special ways. For example, we always expect `email` to be a string of the user’s email address. We use this when sending emails to the customer

You should **only use reserved traits for their intended meaning**.

Reserved traits we’ve standardized:

| **Trait**     | **Type** | **Description**                                              |
| ------------- | -------- | ------------------------------------------------------------ |
| `address`     | Object   | Street address of a user optionally containing: `city`, `country`, `postalCode`, `state` or `street` |
| `age`         | Number   | Age of a user                                                |
| `avatar`      | String   | URL to an avatar image for the user                          |
| `birthday`    | Date     | User’s birthday                                              |
| `company`     | Object   | Company the user represents, optionally containing: `name` (a String), `id` (a String or Number), `industry` (a String), `employee_count` (a Number) or `plan` (a String) |
| `createdAt`   | Date     | Date the user’s account was first created. We recommend [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) date strings. |
| `description` | String   | Description of the user                                      |
| `email`       | String   | Email address of a user                                      |
| `firstName`   | String   | First name of a user                                         |
| `gender`      | String   | Gender of a user                                             |
| `id`          | String   | Unique ID in your database for a user                        |
| `lastName`    | String   | Last name of a user                                          |
| `name`        | String   | Full name of a user. If you only pass a first and last name we’ll automatically fill in the full name for you. |
| `phone`       | String   | Phone number of a user                                       |
| `title`       | String   | Title of a user, usually related to their position at a specific company. Example: “Director of Engineering” |
| `username`    | String   | User’s username. This should be unique to each user, like the usernames of Twitter or GitHub. |
| `website`     | String   | Website of a user                                            |
