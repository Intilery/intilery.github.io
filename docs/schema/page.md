---
id: page
title: Page Schema
sidebar_label: Page
---

The `page` call lets you record whenever a user sees a page of your website, along with any optional properties about the page. Calling `page` or [`screen`](./screen/) the [Website Tag](../tag/tag1) or [HTTP API](../apis/api1) is the first step to integrating and using Intilery.

**Note: In `analytics.js` a `page` call is included in the snippet by default** just after `analytics.load`. We do that because you **must** call this method at least once per page load. However, you can choose to add an optional `name` or `properties` to the default call, or call it multiple times if you have a single-page application.

Here’s the payload of a typical `page` call with most [common fields](./common/) removed:

```json
{
  "type": "page",
  "name": "Home",
  "properties": {
    "title": "Welcome | Initech",
    "url": "http://www.example.com"
  }
}
```

And here’s the corresponding Javascript event that would generate the above payload. If you’re using Segment’s Javascript library, the page name and URL are automatically gathered and passed as properties into the event payload:

```java
analytics.page("Home");
```

Beyond the common fields, the `page` call takes the following fields:

| Field        |            | Type   | Description                                                  |
| ------------ | ---------- | ------ | ------------------------------------------------------------ |
| `name`       | *optional* | String | Name of the page For example, most sites have a “Signup” page that can be useful to tag, so you can see users as they move through your funnel. |
| `properties` | *optional* | Object | Free-form dictionary of properties of the page, like `url` and `referrer` See the [Properties field docs](#properties) for a list of reserved property names. |

## Example

Here’s a complete example of a `page` call:

```json
{
  "anonymousId": "507f191e810c19729de860ea",
  "channel": "browser",
  "context": {
    "ip": "8.8.8.8",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"
  },
  "integrations": {
    "All": true,
    "Mixpanel": false,
    "Salesforce": false
  },
  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",
  "name": "Home",
  "properties": {
    "title": "Welcome | Initech",
    "url": "http://www.example.com"
  },
  "receivedAt": "2015-02-23T22:28:55.387Z",
  "sentAt": "2015-02-23T22:28:55.111Z",
  "timestamp": "2015-02-23T22:28:55.111Z",
  "type": "page",
  "userId": "97980cfea0067",
  "version": "1.1"
}
```

## Identities

The User ID is a unique identifier for the user performing the actions. Check out the [User ID docs](./identify#user-id) for more detail.

The Anonymous ID can be any pseudo-unique identifier, for cases where you don’t know who the user is, but you still want to tie them to an event. Check out the [Anonymous ID docs](./identify#anonymous-id) for more detail.

**Note: In our browser and mobile libraries a User ID is automatically added** from the state stored by a previous [`identify`](./identify) call, so you do not need to add it yourself. They will also automatically handle Anonymous ID’s under the covers.

## Properties

Properties are extra pieces of information that describe the page. They can be anything you want.

We’ve reserved some properties that have semantic meanings, and we handle them in special ways. For example, we always expect `path` to be the URL path of a page, and `referrer` to be the URL of the previous page.

You should **only use reserved properties for their intended meaning**.

Reserved properties we have standardized:

| **Property** | **Type**      | **Description**                                              |
| ------------ | ------------- | ------------------------------------------------------------ |
| `name`       | String        | Name of the page. This is reserved for future use.           |
| `path`       | String        | Path portion of the URL of the page, which defaults to [`location.pathname`](https://developer.mozilla.org/en-US/docs/Web/API/Location) from the DOM API. |
| `referrer`   | String        | Full URL of the previous page. Equivalent to [`document.referrer`](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) from the DOM API. |
| `search`     | String        | Query string portion of the URL of the page. Equivalent to [`location.search`](https://developer.mozilla.org/en-US/docs/Web/API/Location) from the DOM API. |
| `title`      | String        | Title of the page. Equivalent to [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) from the DOM API. |
| `url`        | String        | Full URL of the page. First we look for the canonical url. If the canonical url is not provided, we use [`location.href`](https://developer.mozilla.org/en-US/docs/Web/API/Location) from the DOM API. |
| `keywords`   | Array[String] | A list/array of keywords describing the content of the page. The keywords would most likely be the same as, or similar to, the keywords you would find in an html [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes) tag for SEO purposes. This property is mainly used by content publishers that rely heavily on pageview tracking. This is not automatically collected. |

**Note:** In [analytics.js](../tag/tag1) we automatically send the following properties: `title`, `path`, `url`, `referrer`, and `search`.