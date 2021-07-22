---
id: api
title: Event Tracking API Guide
sidebar_label: API Guide
---

The Intilery HTTP Tracking API lets you record analytics data from
any website or application. The requests hit our servers, and we action
this in the Intilery CDP and Customer Engagement Platform

Intilery has native libraries for integration for [websites with JavaScript](../tag/tag1), 
and mobile devices running [iOS](../sdk/ios) and [Android](../sdk/android) that are all 
built for high-performance. But sometimes you may want to send to the 
HTTP API directly — that’s what this reference is for.

## Endpoint

```http request
https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/{action}
```

You can determine the values of your clientId, accountId and BRANDID from the URL
of your login to the Intilery platform:

If you have only a single account this will be: `clientId.intilery.com` and your `accountid`
will be the same as your `clientId`.

If you have multiple accounts this will be: `accountid.clientid.intilery.com`.

| Field | |
| --- | --- |
| **clientId** |  The value in your login URL before `intilery.com`. It will be lower case. |
| **accountId** | The value in your login URL before your clientId, or the same as your clientId. It will be lower case |
| **BRANDID** | Unless you have multiple brands configured, this will be your accountId in upper case |

The endpoint expects a POST of JSON data.

Authentication is via a shared secret passed in the auth-token header.

The actions are detailed below.

### Headers

#### Content-Type

You must provide a content-type header of application/json

#### Auth-Token

Authentication to handled by a shared secret that must be passed in a header

### Example Request

```bash
curl "https://tracking.intilery.com/track/client/account/BRAND/v1/{action}" -i -X POST \
-H "content-type: application/json" \
-H "auth-token: 1234abcd" \
-d @event.json
```

## Permissions

Your Authentication token will be set with permissions at the Account and Brand level, token’s can be created that have access to all Brands within an Account or a token for each Brand (and account).

## Limits

The API is set to 100 requests per second with a burst of 500, limit and burst explained [here](https://en.wikipedia.org/wiki/Token_bucket)

If limits are exceeded you will receive a 429 Error (limit exceeded) response.

The maximum size of any request is 1mb, exceeding this will return a 413 Error.

## Response

The API will respond with the appropriate HTTP response code, along with a body in the form of: -

```json
{
	"success": true,
	"eventId": "7f7211bf-94c8-4bfc-afb2-8a319d045cd6"
}
```

The eventID is a unique ID that is passed to all systems within the platform, this eventID can be used to query the status of the request (event) and receive any errors that occur

### Response Error Codes

| Code  | Reason                                            |
| ---- | ------------------------------------------------------------ |
| 400 | Client Error |
| 403  | No Token Supplied                                            |
| 403  | Token Not Authorised (for the Account/Brand you are trying to access) |
| 429  | Rate limit exceeded (there is a limit of 100 request/second, with a burst to 500) |
| 413  | Request to large (there is a maximum size of 6Mb for a request) |
| 502  | API returned an invalid response                             |
| 503  | API Unavailable                                              |
| 504  | API timed out                                                |

A `400` error response will return a JSON object with additional information on the error:


```json
{
	"success": false,
	"message": "userId must not be empty"
}
```

# Identify Action

identify lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them.

We recommend calling identify a single time when the user’s account is first created, and only identifying again later when their traits change.

```http request
POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/identify
```

```json
{
	"userId": "123456",
	"event":"identify",
	"traits": {
		"firstName": "Joe",
		"lastName": "Bloggs",
		"email": "joe.bloggs@example.com",
		"marketingPreferences": { 
      "channels": [ 
        { "channel": "email", "subscribed": true },
        { "channel": "sms", "subscribed": true },
        { "channel": "whatsapp", "subscribed": false },
        { "channel": "facebook", "subscribed": false },
        { "channel": "push", "subscribed": false }
      ] 
    }
  },  
  "context": {
  	"ip": "24.5.68.47"
  },
  "timestamp": "2019-11-18T13:30:11.444Z" 
 }
```

This call is identifying the user by their unique User ID (the one you know him by in your database) and setting their traits (attributes) with the values supplied.

Traits can be any valid JSON.

| Field | | Type | Description |
| ------------- | ------------ | ------------------------------------------------------------ |--|
| **anonymousId** | *optional if userID is set instead* | String | A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. A userId or an anonymousId is required.<br/>See the [Identities docs](/docs/schema/identify#identities) for more details. |
| **userId**    | *optional if anonymousID is set instead* | String | Unique identifier for the user in your database. A userId or an anonymousId is required. See the [Identities docs](/docs/schema/identify#identities) for more details. |
| **event**     | **required** | String |  must be “**identify**”                                       |
| **traits**    | **required** | Object | Free-form dictionary of traits of the user, like email or firstName or an object like address |
| **timestamp** | optional | String | [ISO-8601 UTC Timestamp](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2019-11-18T13:30:11.444Z), if not provided, it will be set at the time the event arrives at the server |
| **context**   | optional     | Object | Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like ip address or locale |

# Track Action

track lets you record the actions your users perform, record analytics for them or issue commands. Every action triggers what we call an “event”, which can also have associated properties.

You’ll want to track events that are indicators of success for your site, like registered, item purchased or logged in.

To get started, we recommend tracking just a few important events. You can always add more later!

```http request
POST https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/track
```

Example added to basket event

```json
{
	"userId":"ABC/123",  
	"event":"Product Added",
	"context":{
		"page":{
			"path":"/simplygosimplygo-pure-inulin/p-19868604-44086200",
			"referrer":"",
			"search":"",
			"title":"Simplygo/simplygo-pure-inulin | Fruugo",
			"url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200"
		},
		"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
	},
	"properties":{
		"name":"Simplygo/simplygo-pure-inulin",
		"product_id":"p-19868604-44086200",
		"price":"11.99",
		"cart_id":"1234",
		"image_url":"https://img.fruugo.com/product/3/55/98531553_max.jpg",
		"quantity":"1",
		"url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200",
		"currency":"GBP"
	},
	"timestamp":"2019-11-28T14:31:58.596Z"
}
```

| Field |  | Type | Description |
| -------------- | ------------ | ------------------------------------------------------------ |--|
| **anonymousId** | *optional if userID is set instead* | String | A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. A userId or an anonymousId is required.<br/>See the [Identities docs](/docs/schema/identify#identities) for more details. |
| **userId**    | *optional if anonymousID is set instead* | String | Unique identifier for the user in your database. A userId or an anonymousId is required. See the [Identities docs](/docs/schema/identify#identities) for more details. |
| **event**      | **required** | String | Name of the action that a user has performed.                |
| **timestamp**  | optional | String | [ISO-8601 UTC Timestamp](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2019-11-18T13:30:11.444Z) for then the event happened, if not set, it is set by the server at the time the event is received |
| **properties** | optional     | Object | Free-form dictionary of properties of the event, like price or sku |
| **context**    | optional     | Object | Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like page or userAgent |

The track endpoint can also be used to pass specific [Track Action Commands](./commands)  to trigger campaign sends.

# Page Action

The page action lets you record page views on your website, along with optional extra information
about the page being viewed. The JavaScript tag will raise a page event whenever a new page is loaded.

```http request
POST https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/page
```

Example page call:

```json
{
	"event":"page", 
  "userId":"ABC/123",
	"anonymousId":"14834fb6-e82e-47f9-a7e0-892c45064d89",
	"context": {
      "page": {
        "path": "/simplygosimplygo-pure-inulin/p-19868604-44086200",
        "referrer": "",
        "search": "",
        "title": "Simplygo/simplygo-pure-inulin | Fruugo",
        "url": "https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200"
      },
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    },
	"properties":{
		"path":"/simplygosimplygo-pure-inulin/p-19868604-44086200",
		"referrer":"", 
		"search":"", 
		"title":"Simplygo/simplygo-pure-inulin | Fruugo",
		"url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200" 
	},
	"timestamp":"2019-11-28T14:50:16.519Z" 
}
```

| Field | | Type | Description |
| --------------- | ------------ | ------------------------------------------------------------ |--|
| **anonymousId** | *optional if userID is set instead* | String | A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. A userId or an anonymousId is required.<br/>See the [Identities docs](/docs/schema/identify#identities) for more details. |
| **userId**      | *optional if anonymousID is set instead* | String | Unique identifier for the user in your database. A userId or an anonymousId is required. See the [Identities docs](/docs/schema/identify#identities) for more details. |
| **event**       | **required** | String | must be “**page**”                                           |
| **timestamp**   | optional | String | [ISO-8601 UTC Timestamp](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2019-11-18T13:30:11.444Z) for then the event happened, set on receipt if not provided |
| **properties**  | optional     | Object | Free-form dictionary of properties of the event, like price or sku |
| **context**     | optional     | Object | Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like page or userAgent |

## Screen Action

The [screen](/docs/schema/screen) method let you record whenever a user sees a screen of your mobile app.

You’ll want to send the `screen` message whenever a user requests a page of your app.

Example `screen` call:

```http request
POST https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/screen
```

```json
{
  "userId": "019mr8mf4r",
  "name": "Home",
  "timestamp": "2012-12-02T00:31:29.738Z"
}
```

The `screen` call has the following fields:

| Field         |                                          | Type   | Description                                                  |
| ------------- | ---------------------------------------- | ------ | ------------------------------------------------------------ |
| `anonymousId` | *optional if userID is set instead*      | String | A pseudo-unique substitute for a User ID, for cases when you don’t have an absolutely unique identifier. A userId or an anonymousId is required. See the [Identities docs](/docs/schema/identify#identities) for more details. |
| `context`     | *optional*                               | Object | Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like `ip` address or `locale` See the [Context field docs](/docs/schema/common#context) for more details. |
| `name`        | *optional*                               | String | Name of the screen See the [Name field docs](/docs/schema/screen#name) for more details. |
| `properties`  | *optional*                               | Object | Free-form dictionary of properties of the screen, like `name` See the [Properties field docs](/docs/schema/screen#properties) for a list of reserved property names. |
| `timestamp`   | *optional*                               | Date   | Timestamp when the message itself took place, defaulted to the current time by the Intilery Tracking API, as a [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) format date string. If the event just happened, leave it out and we’ll use the server’s time. If you’re importing data from the past, make sure you to provide a `timestamp`.See the [Timestamps fields docs](/docs/schema/common#timestamps) for more detail. |
| `userId`      | *optional if anonymousID is set instead* | String | Unique identifier for the user in your database. A userId or an anonymousId is required. See the [Identities docs](/docs/schema/identify#identities) for more details. |

Find details on the **`screen` payload** in our [Spec](/docs/schema/screen).

## Historical Import

You can import historical data by adding the `timestamp` argument to any of your method calls. This can be helpful if you’ve just switched to Intilery.

**Note:** If you’re tracking things that are happening right now, leave out the `timestamp` and our servers will timestamp the requests for you.

## Batch

The `batch` method lets you send a series of `identify`, `group`, `track`, `page` and `screen` requests in a single batch, saving on outbound requests.

There is a maximum of `1mb` per batch request and `32KB` per call.

Here’s the what the `batch` request signature looks like:

```http request
POST https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/batch
```

```json
{
  "batch": [
    {
      "event": "identify",
      "userId": "019mr8mf4r",
      "traits": {
        "email": "jake@yahoo.com",
        "name": "Jake Peterson",
        "age": 26
      },
      "timestamp": "2012-12-02T00:30:08.276Z"
    },
    {
      "event": "Song Played",
      "userId": "019mr8mf4r",
      "properties": {
        "name": "Fallin for You",
        "artist": "Dierks Bentley"
      },
      "timestamp": "2012-12-02T00:30:12.984Z"
    },
    {
      "event": "identify",
      "userId": "971mj8mk7p",
      "traits": {
        "email": "cindy@example.com",
        "name": "Cindy Gonzalez",
        "age": 23
      },
      "timestamp": "2015-2-02T00:30:08.276Z"
    },
    {
      "event": "Song Played",
      "userId": "971mj8mk7p",
      "properties": {
        "name": "Get Right",
        "artist": "Jennifer Lopez"
      },
      "timestamp": "2015-2-02T00:30:12.984Z"
    }
  ],
  "context": {
    "device": {
      "type": "phone",
      "name": "Apple iPhone 6"
    }
  }
}
```

| Field                        |   Type | Description |
| ------------ | ------------ | ----------- |
| `batch` | *Array*              | An array of `identify`, `group`, `track`, `page` and `screen` method calls. Each call **must** have an `event` property with a valid method name. |
| `context` | *Object, optional* | The same as [Context](/docs/schema/common#context) for other calls, but it will be merged with any context inside each of the items in the batch. |

## Collecting IP Address

When sending a HTTP call from a user’s device, you can collect the IP address by setting `context.direct` to `true`.

## Deletion and Suppression

In keeping with our commitment to support GDPR and future privacy regulations such as the CCPA,
we offer the ability to delete and suppress data about end users if they are identified by a `userId`,
should they revoke or alter their consent to data collection. For instance, if an end user in the EU invokes
their Right to Object or Right to Erasure under the GDPR, you can use the following features in Intilery to block
ongoing data collection about the user, and additionally to delete all historical data across Intilery's systems,
connected S3 buckets and warehouses.

All deletion and suppression actions within Intilery are asynchronous, and fall under the umbrella of what we call “Regulations.” 
Regulations are requests to Intilery to impart control over your data flow.

Regulations enable you to issue a single request to delete and suppress data about a user by `userId`.

### Regulation types

| Type                 | Description                                           |
| :------------------- | :---------------------------------------------------- |
| Suppress and Delete | Suppress new data and delete existing data            |
| Delete               | Delete existing data (only available when suppressed) |
| Unsuppress           | Stop an ongoing suppression                           |
| Suppress             | Suppress new data without deleting existing data      |
| NoTrack              | Stops track events, but you can still send messages (emails, SMS, etc...) and send commands and identify via the API, but not via the JS Tag |
| Track                  | Undo the NoTrack |
| Access                | Request the data held on the user to be supplied as a zip file |


## Troubleshooting

If you’re having trouble we have a few tips that help common problems.

### No events in my debugger

1. Double check that you’ve set up the library correctly.
2. Make sure that you’re calling one of our API methods once the library is successfully installed—[`identify`](./api/#identify), [`track`](./api#track), etc.

