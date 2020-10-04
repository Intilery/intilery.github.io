---
id: common
title: Common Fields
sidebar_label: Common
---

# Spec: Common Fields

In the Intilery [Schema](contents) all the [API calls](/apis/api1) have a common structure, and a few common fields.

Not all fields are required for all events, the required fields for each event are detailed in the corrisponding event schema

## Structure

Every API call has the same core structure and fields. These fields describe user identity, timestamping and mechanical aides like API version.

Here’s an example of these common fields in raw JSON:

```json
{
  "anonymousId": "507f191e810c19729de860ea",
  "context": {
    "active": true,
    "app": {
      "name": "InitechGlobal",
      "version": "545",
      "build": "3.0.1.545",
      "namespace": "com.production.intilery"
    },
    "campaign": {
      "name": "TPS Innovation Newsletter",
      "source": "Newsletter",
      "medium": "email",
      "term": "tps reports",
      "content": "image link"
    },
    "device": {
      "id": "B5372DB0-C21E-11E4-8DFC-AA07A5B093DB",
      "advertisingId": "7A3CBEA0-BDF5-11E4-8DFC-AA07A5B093DB",
      "adTrackingEnabled": true,
      "manufacturer": "Apple",
      "model": "iPhone7,2",
      "name": "maguro",
      "type": "ios",
      "token": "ff15bc0c20c4aa6cd50854ff165fd265c838e5405bfeb9571066395b8c9da449"
    },
    "ip": "8.8.8.8",
    "library": {
      "name": "analytics.js",
      "version": "2.11.1"
    },
    "locale": "en-US",
    "location": {
      "city": "San Francisco",
      "country": "United States",
      "latitude": 40.2964197,
      "longitude": -76.9411617,
      "speed": 0
    },
    "network": {
      "bluetooth": false,
      "carrier": "T-Mobile US",
      "cellular": true,
      "wifi": false
    },
    "os": {
      "name": "iPhone OS",
      "version": "8.1.3"
    },
    "page": {
      "path": "/docs/",
      "referrer": "",
      "search": "",
      "title": "Analytics Academy",
      "url": "https://intilery.com/docs/"
    },
    "referrer": {
      "id": "ABCD582CDEFFFF01919",
      "type": "dataxu"
    },
    "screen": {
      "width": 320,
      "height": 568,
      "density": 2
    },
    "groupId": "12345",
    "timezone": "Europe/Amsterdam",
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
  },
  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",
  "receivedAt": "2015-12-10T04:08:31.909Z",
  "sentAt": "2015-12-10T04:08:31.581Z",
  "timestamp": "2015-12-10T04:08:31.905Z",
  "type": "track",
  "userId": "97980cfea0067",
  "version": 2
}
```

In more detail these common fields for every API call are:

| Field         |                                          | Type   | Description                                                  |
| ------------- | ---------------------------------------- | ------ | ------------------------------------------------------------ |
| `anonymousId` | *optional if userID is set instead*      | String | A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. A userId or an anonymousId is required. See the [Identities docs](/schema/identify#identities) for more details. |
| `context`     | *optional*                               | Object | Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like `ip` address or `locale` See the [Context field docs](/schema/common#context) for more details. |
| `messageId`   | *implicit*                               | String | Automatically collected by Segment, a unique identifier for each message that lets you find an individual message across the API. |
| `receivedAt`  | *implicit*                               | Date   | Automatically set by Segment, the timestamp of when a message is received by Segment It is an [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) date string. See the [Timestamps fields docs](https://segment.com/docs/connections/spec/common#timestamps) for more detail. |
| `sentAt`      | *optional*                               | Date   | Timestamp of when a message is sent to Segment, used for clock skew correction It is set automatically by the Segment tracking libraries. It is an [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) date string. See the [Timestamps fields docs](https://segment.com/docs/connections/spec/common#timestamps) for more detail. |
| `timestamp`   | *optional*                               | Date   | Timestamp when the message itself took place, defaulted to the current time by the Segment Tracking API, as a [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) format date string. If the event just happened, leave it out and we’ll use the server’s time. If you’re importing data from the past, make sure you to provide a `timestamp`.See the [Timestamps fields docs](https://segment.com/docs/connections/spec/common#timestamps) for more detail. |
| `type`        | *implicit*                               | String | Type of message, corresponding to the API method: `'identify'`, `'group'`, `'track'`, `'page'`, `'screen'` or `'alias'`. |
| `userId`      | *optional if anonymousID is set instead* | String | Unique identifier for the user in your database. A userId or an anonymousId is required. See the [Identities docs](/schema/identify#identities) for more details. |
| `version`     | *implicit*                               | Number | Version of the Tracking API that received the message, automatically set by Segment. |

Beyond this common structure, each API call adds a few specialized top-level fields.

## Context

Context is a dictionary of extra information that provides useful context about a datapoint, for example the user’s `ip` address or `locale`. Context is a complete and explicit specification, so properties outside the spec are ignored. You should **only use** Context fields for their intended meaning.

| **Field**   | **Type** | **Description**                                              |
| ----------- | -------- | ------------------------------------------------------------ |
| `active`    | Boolean  | Whether a user is active  This is usually used to flag an `.identify()` call to just update the traits but not “last seen.” |
| `app`       | Object   | dictionary of information about the current application, containing `name`, `version` and `build`.  This is collected automatically from our mobile libraries when possible. |
| `campaign`  | Object   | Dictionary of information about the campaign that resulted in the API call, containing `name`, `source`, `medium`, `term`, `content`, and any other custom UTM parameter.  This maps directly to the common UTM campaign parameters. |
| `device`    | Object   | Dictionary of information about the device, containing `id`, `advertisingId`, `manufacturer`, `model`, `name`, `type` and `version`. |
| `ip`        | String   | Current user’s IP address.                                   |
| `library`   | Object   | Dictionary of information about the library making the requests to the API, containing `name` and `version`. |
| `locale`    | String   | Locale string for the current user, for example `en-US`.     |
| `location`  | Object   | Dictionary of information about the user’s current location, containing `city`, `country`, `latitude`, `longitude`, `region` and `speed`. |
| `network`   | Object   | Dictionary of information about the current network connection, containing `bluetooth`, `carrier`, `cellular` and `wifi` |
| `os`        | Object   | Dictionary of information about the operating system, containing `name` and `version` |
| `page`      | Object   | Dictionary of information about the current page in the browser, containing `path`, `referrer`, `search`, `title` and `url`. This is automatically collected by [Analytics.js](/tag/reference#context--traits). |
| `referrer`  | Object   | Dictionary of information about the way the user was referred to the website or app, containing `type`, `name`, `url` and `link` |
| `screen`    | Object   | Dictionary of information about the device’s screen, containing `density`, `height` and `width` |
| `timezone`  | String   | Timezones are sent as tzdata strings to add user timezone information which might be stripped from the timestamp, for example `America/New_York` |
| `groupId`   | String   | Group / Account ID.  This is useful in B2B use cases where you need to attribute your non-group calls to a company or account. It is relied on by several Customer Success and CRM tools. |
| `traits`    | Object   | Dictionary of `traits` of the current user  This is useful in cases where you need to `track` an event, but also associate information from a previous `identify` call. You should fill this object the same way you would fill traits in an [identify call](/schema/identify/#traits). |
| `userAgent` | String   | User agent of the device making the request                  |

## Context Fields Automatically Collected

Below is a chart that shows you which context variables are populated automatically by our iOS, Android and analytics.js libraries.

Other libraries only collect `context.library`, any other context variables must be sent manually.

| Context Field            | Analytics.js | Analytics-ios | Analytics-android |
| ------------------------ | ------------ | ------------- | ----------------- |
| app.name                 |              | √             | √                 |
| app.version              |              | √             | √                 |
| app.build                |              | √             | √                 |
| campaign.name            | √            |               |                   |
| campaign.source          | √            |               |                   |
| campaign.medium          | √            |               |                   |
| campaign.term            | √            |               |                   |
| campaign.content         | √            |               |                   |
| device.type              |              |               | √                 |
| device.id                |              | √             | √                 |
| device.advertisingId     |              | √             | √                 |
| device.adTrackingEnabled |              | √             | √                 |
| device.manufacturer      |              | √             | √                 |
| device.model             |              | √             | √                 |
| device.name              |              |               | √                 |
| library.name             | √            | √             | √                 |
| library.version          | √            | √             | √                 |
| ip*                      | √            | √             | √                 |
| locale                   |              | √             | √                 |
| location.latitude        |              |               |                   |
| location.longitude       |              |               |                   |
| location.speed           |              |               |                   |
| network.bluetooth        |              |               | √                 |
| network.carrier          |              | √             | √                 |
| network.cellular         |              | √             | √                 |
| network.wifi             |              | √             | √                 |
| os.name                  |              | √             | √                 |
| os.version               |              | √             | √                 |
| page.path                | √            |               |                   |
| page.referrer            | √            |               |                   |
| page.search              | √            |               |                   |
| page.title               | √            |               |                   |
| page.url                 | √            |               |                   |
| screen.density           |              |               | √                 |
| screen.height            |              | √             | √                 |
| screen.width             |              | √             | √                 |
| traits                   |              | √             | √                 |
| userAgent                | √            |               | √                 |
| timezone                 |              | √             | √                 |

- IP Address is not collected by our libraries, but instead filled in by our servers when it receives a message for **client side events only**.
- Our Android library collects `screen.density` with [this method](https://segment.com/docs/connections/spec/common/#context-fields-automatically-collected).

## Timestamps

Every API call has four timestamps, `originalTimestamp`, `timestamp`, `sentAt` and `receivedAt.` They’re used for very different purposes.

**All timestamps are [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) date strings.**

### Timestamp Overview

| **Timestamp**       | **Calculated**                                               | **Description**                                              |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `originalTimestamp` | Time on the client device when call was invoked **OR** The `timestamp` value manually passed in through server-side libraries. | Used by Segment to calculate `timestamp`.  **Note:** `originalTimestamp` is not useful for analysis since it’s not always trustworthy as it can be easily adjusted and affected by clock skew. |
| `sentAt`            | Time on client device when call was sent **OR** `sentAt` value manually passed in. | Used by Segment to calculate `timestamp`.  **Note:** `sentAt` is not useful for analysis since it’s not always trustworthy as it can be easily adjusted and affected by clock skew. |
| `receivedAt`        | time on Segment server clock when call was received          | Used by Segment to calculate `timestamp`, and used as sort key in Warehouses.  **Note:** For max query speed, `receivedAt` is the recommended timestamp for analysis when chronology does not matter as chronology is not ensured. |
| `timestamp`         | Calculated by Segment to correct client-device clock skew using the following formula: `receivedAt` - (`sentAt` - `originalTimestamp`) | Used by Segment to send to downstream destinations, and used for historical replays.  **Note:** Recommended timestamp for analysis when chronology does matter. |

### originalTimestamp

The `originalTimestamp` tells you when call was invoked on the client device or the value of `timestamp` that you manually passed in.

**Note:** The `originalTimestamp` timestamp is not useful for any analysis since it’s not always trustworthy as it can be easily adjusted and affected by clock skew.

### sentAt

The `sentAt` timestamp specifies the clock time for the client’s device when the network request was made to the Segment API. For libraries and systems that send batched requests, there can be a long gap between a datapoint’s `timestamp` and `sentAt`. Combined with `receivedAt`, we can use `sentAt` to correct the original `timestamp` in situations where a user’s device clock cannot be trusted (mobile phones and browsers). The `sentAt` and `receivedAt` timestamps are assumed to occur at the same time (maximum a few hundred milliseconds), and therefore the difference is the user’s device clock skew, which can be applied back to correct the `timestamp`.

**Note:** The `sentAt` timestamp is not useful for any analysis since it’s tainted by user’s clock skew.

### receivedAt

The `receivedAt` timestamp is added to incoming messages as soon as they hit our API. It’s used in combination with `sentAt` to correct clock skew, and also to aid with debugging libraries and systems that deliver events in batches.

The `receivedAt` timestamp is most important as the sort key in our Warehouses product. Use this for max query speed when retrieving data from your Warehouse!

**Note:** Chronological order of events is not ensured with `receivedAt`.

### timestamp

The `timestamp` timestamp specifies when the datapoint occurred, corrected for client-device clock skew. This is the timestamp that is passed to downstream destinations and used for historical replays. It is important to use this timestamp for importing historical data to the API.

The `timestamp` field is settable from our server-side libs or if passing info directly to the HTTP endpoints.