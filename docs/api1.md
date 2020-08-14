---
id: api1
title: API Guide
sidebar_label: API Guide
---

## Introduction

The Intilery Event API lets you record customer data from any website or application.

In order to track events or issue commands against a customer, the customer must be first be identified to the system using an identify event which will add the customer to the Intilery CDP.

## API Overview

### Endpoint

`https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/{action}`

You will be given you clientId, accountIds and brandIDs.

The endpoint expects a POST of JSON data.

Authentication is via a shared secret passed in the auth-token header.

The actions are detailed below.

### Headers

#### Content-Type

You must provide a content-type header of application/json

#### Auth-Token

Authentication to handled by a shared secret that must be passed in a header

#### Example Request

```shell script
curl "https://tracking.intilery.com/track/hea/hea/HEA/v1/{action}" -i -X POST \
-H "content-type: application/json" \
-H "auth-token: 1234abcd" \
-d @event.json
```

#### Permissions

Your Authentication token will be set with permissions at the Account and Brand level, token’s can be created that have access to all Brands within an Account or a token for each Brand (and account).

#### Limits

The API is set to 100 requests per second with a burst of 500, limit and burst explained here

If limits are exceeded you will receive a 429 Error (limit exceeded) response.

The maximum size of any request is 6mb, exceeding this will return a 413 Error.

#### Response

The API will respond with the appropriate HTTP response code, along with a body in the form of: -

```json
{
    "success": true,
    "eventId": "7f7211bf-94c8-4bfc-afb2-8a319d045cd6"
}
```

The eventID is a unique ID that is passed to all systems within the platform, this eventID can be used to query the status of the request (event) and receive any errors that occur

Response Error Codes

403 

No Token Supplied

403 

Token Not Authorised (for the Account/Brand you are trying to access)

429

Rate limit exceeded (there is a limit of 100 request/second, with a burst to 500)

413

Request to large (there is a maximum size of 6Mb for a request)

502

API returned an invalid response

503

API Unavailable

504

API timed out

Identify Action

identify lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them.

We recommend calling identify a single time when the user’s account is first created, and only identifying again later when their traits change.

POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/identify

{
  "userId": "ABC/123",
  "event":"identify",
  "traits": {
    "marketingPreferences": { 
      "channels": [ 
        { 
          "channel": "email", 
          "subscribed": true 
        } ,
        { 
          "channel": "sms", 
          "subscribed": true 
        },
        { 
          "channel": "whatsapp", 
          "subscribed": true 
        },
        { 
          "channel": "facebook", 
          "subscribed": true 
        },
        { 
          "channel": "push", 
          "subscribed": true 
        }
      ] 
    },
    "clientReference": "ABC/123",
    "email": "email@example.com",
    "title": "Mr",
    "firstName": "Fred",
    "lastName": "Flintsonte",
    "phone": "+44123456789",
    "address": {
        "houseNumberOrName": "56",
        "addressLine1": "A Road",
        "addressLine2": "Chester",
        "addressLine3": "Cheshire",
        "postalCode": "CH1ABC"
    }
  },
  "context": {
    "ip": "24.5.68.47"
  },
  "timestamp": "2019-11-18T13:30:11.444Z"
}

This call is identifying the user by their unique User ID (the one you know him by in your database) and setting their traits (attributes) with the values supplied.

Traits can be any valid JSON.

userId

required

Unique identifier for the user in your database

event

required

must be “identify”

traits

required

Free-form dictionary of traits of the user, like email or firstName or an object like address

timestamp

required

ISO-8601 UTC Timestamp (e.g. 2019-11-18T13:30:11.444Z)

context

optional

Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like ip address or locale

Track Action

track lets you record the actions your users perform, record analytics for them or issue commands. Every action triggers what we call an “event”, which can also have associated properties.

You’ll want to track events that are indicators of success for your site, like registered, item purchased or logged in.

To get started, we recommend tracking just a few important events. You can always add more later!

POST https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/track

Example added to basket event

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
    "price":"£11.99",
    "cart_id":"1234",
    "image_url":"https://img.fruugo.com/product/3/55/98531553_max.jpg",
    "quantity":"1",
    "url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200"
  },
  "timestamp":"2019-11-28T14:31:58.596Z"
}

userId

required

Unique identifier for the user in your database

event

required

Name of the action that a user has performed.

timestamp

required

ISO-8601 UTC Timestamp (e.g. 2019-11-18T13:30:11.444Z) for then the event happened

properties

optional

Free-form dictionary of properties of the event, like price or sku

context

optional

Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like page or userAgent

The track endpoint can also be used to pass specific   to trigger campaign sends.

Page Action

The page action lets you record page views on your website, along with optional extra information about the page being viewed. The JavaScript tag will raise a page event whenever a new page is loaded.

POST https://tracking.intilery.com/track/{clientID}/{accountid}/{BRANDID}/v1/page

Example page call:

{
	"event":"page",
	"userId":"ABC/123",
	"anonymousId":"14834fb6-e82e-47f9-a7e0-892c45064d89",
	"context":{
		"page":{
			"path":"/simplygosimplygo-pure-inulin/p-19868604-44086200",
			"referrer":"",
			"search":"",
			"title":"Simplygo/simplygo-pure-inulin | Fruugo",
			"url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200"
	},
	"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
	"properties":{
		"path":"/simplygosimplygo-pure-inulin/p-19868604-44086200",
		"referrer":"",
		"search":"",
		"title":"Simplygo/simplygo-pure-inulin | Fruugo",
		"url":"https://www.fruugo.co.uk/simplygosimplygo-pure-inulin/p-19868604-44086200"
	},
	"timestamp":"2019-11-28T14:50:16.519Z"
}

userId

optional*

Unique identifier for the user in your database. If not known, you must pass anonymousId

anonymousId

optional*

A pseudo-unique substitute for a userId, for cases when you don't know who the customer is at present.

event

required

must be “page”

timestamp

required

ISO-8601 UTC Timestamp (e.g. 2019-11-18T13:30:11.444Z) for then the event happened

properties

optional

Free-form dictionary of properties of the event, like price or sku

context

optional

Dictionary of extra information that provides useful context about a message, but is not directly related to the API call like page or userAgent
