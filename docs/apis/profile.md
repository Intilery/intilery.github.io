---
id: profile
title: Profile API
sidebar_label: Profile
---

The Intilery Profile API provides a single API to read user-level customer data. Intilery now allows you to query the entire user object programmatically, including the `external_ids` , `traits` , and `events` that make up a user’s journey through your product.

You can use this API to…

- **Build an in-app recommendation engine** to show users or accounts the last 5 products they viewed but didn’t purchase
- **Train user-level machine learning prediction models** to determine a users next purchase or likelihood to churn
- **Empower your** **sales and** **support associates with the complete customer context** by embedding the user profile in third-party tools like Zendesk or Desk.com
- **Qualify leads faster** by embedding the user event timeline in Pipedrive

This document has four parts…

1. [**Product Highlights**](#product-highlights)
2. [**Quickstart**](#quickstart): Walks you through how to get started querying your user profile in <1 min
3. [**API Reference**](#api-reference): Retrieve a list of users sorted by recent activity or find a particular user
4. [**Personalization**](#recommended-implementation): Example personalization solution built on Personas using server-side personalization

## Product Highlights

1. **Realtime Access** - fetch your entire user profile
2. **Realtime Data** — query streaming data on the user profile that just happened
3. **One Identity** — query an end user’s interactions across web, mobile, server, and third party touch-points
4. **Rich Data** — query any amount of custom events or user traits
5. **Any External ID** — the API supports query from any external ID: email, user_id or intilery ID

## Endpoint

https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/{endpoint}

You will be given you clientId, accountIds and brandIds.

The endpoint expects a GET and returns JSON

Authentication is via a shared secret passed in the auth-token header.

The actions are detailed below.

### Headers

#### Content-Type

You must provide a content-type header of application/json

#### Auth-Token

Authentication to handled by a shared secret that must be passed in a header

### Example Request

```bash
curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/{endpoint}" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

## Permissions

Your Authentication token will be set with permissions at the Account and Brand level, token’s can be created that have access to all Brands within an Account or a token for each Brand (and account).

## Limits

The API is set to 100 requests per second with a burst of 500, limit and burst explained [here](https://en.wikipedia.org/wiki/Token_bucket)

If limits are exceeded you will receive a 429 Error (limit exceeded) response.

The maximum size of any request is 1mb, exceeding this will return a 413 Error.

The event endpoint will return a maximum of 100 events per request, along with a scrollId to scroll through the remainder of the events

## Quickstart

### Set up Access

To access the profile API, you will need you clientID, accountID and brandID, along with the authentication token, these are provided by your account manager (and will shortly be available in the UI).

The profile API expects the authentication token to be supplied in the request headers.

### Find a user’s external id

1. Head over to customers > customer details: `https://{clientID}.{accountID}.intilery.com/customers` (replace clientID and accountID with your details)
2. And press on any interesting custoimer in the list.
3. Copy their `external_id` (ex: `joe.bloggs@intilery.com`) Note: a userID (extneralD) does not have to be an email address, this is your unique id for your customer.

![externalID](/img/externalid.png)

### Query the user’s event history

1. Download and open [Postman](https://www.getpostman.com/), a nice app for exploring HTTP APIs

2. Create your Postman GET request to query the user’s event’s history: i. The URL is: https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/events`

   ii. Replace `clientID, accountID and BRANDID` with your own values along with the id of your customer (Joe.bloggs@intilery.com in this case)

   iii. Replace `{idType}:{ext_id}>` with your external id type (userId) and id pair from the customer detils page

   

![postman](/img/postman1.png)

1. Press the Send button in Postman.

### Explore the user’s event history in the response

![postman](/img/postman2.png)

**E. Explore more of the API**

**Search by an External ID** You can query directly by a customer's email, user_id or intileryID (id):

```http
https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/userId:1234-erty/events
```

**Traits** You can query a user’s traits (first_name, last_name, …):

```http
https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/userId:1234-erty/traits
```

All traits, both standard and computed traits are included

**Metadata** You can query all of a user’s metadata (created_at, updated_at, …):

```http
https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/userId:1234-erty/meta
```

**Audiences** You can query all of a user’s audiences, both static and dynamic

```http
https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/userId:1234-erty/audiences
```

## API Reference

The Intilery API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer). Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. [JSON](http://www.json.org/) is returned by all API responses, including errors.

**Endpoint**

```http
https://tracking.intilery.com/track/
```

### Authentication

The Profile API uses basic authentication for authorization — with the **Authentication Token** as the authorization key. Your **Authentication Token** carries access to all of your customer data, so be sure to keep them secret! Do not share your Access Secret in publicly accessible areas such as GitHub, client-side code, and so forth.

Your Authentication Token will be supplied by your account manager

When making requests to the Profile API, use the Authentication Token as a header with key auth-token.

```bash
curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/{endpoint}" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

### Errors

Intilery uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the `5xx` Intilery's servers.

**HTTP Status**

| **HTTP Status**                        | **Description**                                              |
| -------------------------------------- | ------------------------------------------------------------ |
| **200 - OK**                           | Everything worked as expected.                               |
| **400 - Bad Request**                  | The request was unacceptable, often due to missing a required parameter. |
| **401 - Unauthorized**                 | No valid Access Secret provided.                             |
| **404 - Not Found**                    | The requested resource doesn’t exist.                        |
| **429 - Too Many Requests**            | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| **500, 502, 503, 504 - Server Errors** | Something went wrong on Intilery's side.                     |

**Error Body**

```json
{
  "error": {
    "code": "validation_error",
    "message": "ProfileID must be in format of id_type:id"
  }
}
```

| **Code**                  | **Message**                                                  |
| ------------------------- | ------------------------------------------------------------ |
| **authentication_error**  | Failure to properly authenticate yourself in the request.    |
| **invalid_request_error** | Invalid request errors arise when your request has invalid parameters. |
| **rate_limit_error**      | Too many requests hit the API too quickly.                   |
| **validation_error**      | Errors triggered when failing to validate fields (e.g., when a collection name has invalid characters). |
| **not_found**             | The customer could not be found                              |
| **internal_server_error** | Something went wrong internal to Intilery                    |

### Limits

The API is set to 100 requests per second with a burst of 500, limit and burst explained [here](https://en.wikipedia.org/wiki/Token_bucket)

If limits are exceeded you will receive a 429 Error (limit exceeded) response.

### Pagination

All top-level API resources have support for bulk fetches using “list” API methods. For instance you can list profiles, a profile’s events, a profile’s traits, and a profile’s external_ids. These list API methods share a common structure, taking at least two parameters: `from` and `size`.

#### Request Arguments

| **Argument** | **Description**                                              |
| ------------ | ------------------------------------------------------------ |
| `from`       | An integer representing the page of results to return, default is 0. |
| `size`       | A limit on the number of objects to be returned, between 1 and 100. |

#### Request IDs

Each API request has an associated request identifier. You can find this value in the response headers, under `x-amzn-RequestId`. **If you need to contact us about a specific request, providing the request identifier will ensure the fastest possible resolution.**

```bash
curl -i https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/{endpoint}
HTTP/1.1 200 OK
Date: Mon, 01 Jul 2013 17:27:06 GMT
Status: 200 OK
x-amzn-RequestId: 1111-2222-3333-4444
```

### Routes

| **Name**                  | **Route** https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/ … |
| ------------------------- | ------------------------------------------------------------ |
| Get a Profile’s Traits    | /email:joe.bloggs@intilery.com/traits                        |
| Get a Profile’s Metadata  | /email:joe.bloggs@intilery.com/metadata                      |
| Get a Profile’s Events    | /email:joe.bloggs@intilery.com/events                        |
| Get a Profile’s Audiences | /email:joe.bloggs@intilery.com/audiences                     |

### Get a Profile’s Traits

Get a single customer's traits using an `external_id`.

```http
GET /track/v1/profiles/userId:123-rty/traits
```

**Examples** Here’s what it looks to search for a profile’s traits by an external id, like by an `email`:

```http
GET /track/v1/profiles/email:joe.bloggs@intilery.com/traits
```

Or a id:

```http
GET /v1/spaces/lg8283283/collections/users/profiles/id:1234-5678-asdf-ghjk/traits
```

**Request**

```bash
   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/traits" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

**404 Not Found**

```json
{
  "error": {
    "code": "not_found",
    "message": "Custmer not found."
  }
}
```

**200 OK** (single response)

```json
{
    "lastName": "Bloggs",
    "website": "www.intilery.com",
    "externalId": "joe.bloggs@intilery.com",
    "organisation": "Intilery",
    "industry": "Other",
    "firstName": "Joe",
    "phone": "+44111222333444",
    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
    "computed": {
      "number_email_delivered_all_time": 9,
   	}
    "marketingPreferences": {
        "channels": [
            {
                "subscribed": true,
                "channel": "email"
            },
            {
                "subscribed": true,
                "channel": "sms"
            },
            {
                "subscribed": false,
                "channel": "whatsapp"
            },
            {
                "subscribed": false,
                "channel": "facebook"
            },
            {
                "subscribed": false,
                "channel": "push"
            }
        ]
    },
    "email": "joe.bloggs@intilery.com"
}
```

**200 OK** (multiple response)

```json
{
	"data" : [
    {
        "lastName": "Bloggs",
        "website": "www.intilery.com",
        "externalId": "joe.bloggs@intilery.com",
        "organisation": "Intilery",
        "industry": "Other",
        "firstName": "Joe",
        "phone": "+44111222333444",
        "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
        "computed": {
          "number_email_delivered_all_time": 9,
        }
        "marketingPreferences": {
            "channels": [
                {
                    "subscribed": true,
                    "channel": "email"
                },
                {
                    "subscribed": true,
                    "channel": "sms"
                },
                {
                    "subscribed": false,
                    "channel": "whatsapp"
                },
                {
                    "subscribed": false,
                    "channel": "facebook"
                },
                {
                    "subscribed": false,
                    "channel": "push"
                }
            ]
        },
        "email": "joe.bloggs@intilery.com"
    	}
		]
	}
}
```

***Note***: if you request a customer using userId or Id, the response will be a single customer's traits. For searching by email, as multiple customer records can have the same email (unless you use their email as their userId) an array of results in the data field are returned

### Get a Customer's Events

Get a single profile’s events within a collection using an `external_id`.

```http
    GET /track/v1/profiles/userId:123-rty/events
```

**Request**

```bash
   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/events" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

**404 Not Found**

```json
{
  "error": {
    "code": "not_found",
    "message": "Profile was not found."
  }
}
```

**200 OK**

```json
{
  	"scrollId": "DnF1ZXJ5VGhlbkZldGNoBQAAAAAAMzh3FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4ehZjSS1MbWxmMlRVeVlVNVJPU3JzOTVRAAAAAAAzOHgWY0ktTG1sZjJUVXlZVTVST1Nyczk1UQAAAAAAMzh7FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4eRZjSS1MbWxmMlRVeVlVNVJPU3JzOTVR",
    "data": [
        {
            "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "externalId": "joe.bloggs@intilery.com",
            "email": "joe.bloggs@intilery.com",
            "eventId": "ec717144-924c-4826-981b-848459c39176",
            "eventTime": "2020-11-19T13:39:17.380Z",
            "receivedTime": "2020-11-19T13:39:17.912Z",
            "eventAction": "email_opened",
            "clientId": "intilery",
            "accountId": "marketing",
            "brandId": "MARKETING",
            "customerId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "source": "SEGMENT_API",
            "rawData": {
                "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
                "action": "track",
                "event": "Email Opened",
                "context": {
                    "ip": "217.42.6.253",
                    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15",
                    "traits": {
                        "email": "joe.bloggs@intilery.com"
                    }
                },
                "properties": {
                    "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",
                    "email_subject": "Thanks for requesting an Intilery trial",
                    "campaign_id": "TRIAL_WELCOME"
                },
                "timestamp": "2020-11-19T13:39:17.380Z",
                "sendType": "email"
            }
        },
        {
            "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "externalId": "joe.bloggs@intilery.com",
            "email": "joe.bloggs@intilery.com",
            "eventId": "4b7c99d4-0714-41e0-b285-1ef300634984",
            "clientId": "intilery",
            "source": "SEGMENT_API",
            "rawData": {
                "context": {
                    "traits": {
                        "email": "joe.bloggs@intilery.com"
                    },
                    "ip": "217.42.6.253",
                    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15"
                },
                "sendType": "email",
                "action": "track",
                "event": "Email Opened",
                "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
                "properties": {
                    "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",
                    "email_subject": "Thanks for requesting an Intilery trial",
                    "campaign_id": "TRIAL_WELCOME"
                },
                "timestamp": "2020-11-19T13:37:50.929Z"
            },
            "eventAction": "email_opened",
            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "accountId": "marketing",
            "receivedTime": "2020-11-19T13:37:51.407Z",
            "brandId": "MARKETING",
            "eventTime": "2020-11-19T13:37:50.929Z",
            "customerId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe"
        }
			]
		}
	}
```

***Note***: if you request a customer using userId or Id, the response will the events for a single customer. For searching by email, as multiple customer records can have the same email (unless you use their email as their userId) events for all customers with the email specified will be included

**Query Parameters**

| **Argument** | **Description**                                              | **Example**                   |
| ------------ | ------------------------------------------------------------ | ----------------------------- |
| `include`    | A comma-separated list of event keys to include.             | page,                         |
| `exclude`    | A comma-separated list of event keys to excluse.             | Page Viewed,Experiment Viewed |
| `start`      | Returns all the events that start after `start` (in ISO 8601). | 2006-01-02                    |
| `end`        | Returns all the events that end before `end` (in ISO 8601).  | 2018-01-02                    |
| `sort`       | Determines whether the result is ascending or descending. Defaults to descending. | asc,desc                      |
| `limit`      | The number of results to return, accepts an integer between 1 and 100 inclusive, default is 100 | 50                            |



### Pagination

The events endpoint supports pagination using a scrollId (cursor), to fetch the next "page" of results, replace the query parameters with the scrollId parameter

#### Request Arguments

| **Argument** | **Description**                                    |
| ------------ | -------------------------------------------------- |
| scrollId     | The id of the "cursor" to the next page of results |

#### Example

Given the event request example above, the response included a "scrollId" that can be used to get the next page of results.

***Note:*** a scrollId is always included regardless of whether there are any more results, a request including the scrollId whioch returns an a response with an empty array for the data indicates no more results, or a response with less results than the limit supplied indicates that this is the last page of results

Get a single profile’s events within a collection using an `external_id`.

```http
    GET /track/v1/profiles/userId:123-rty/events
```

**Request**

```bash
   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/events?scrollId={scrollId}" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

***Note:*** it is not required to pass in any of the event parameters again, such as include, exclude, limit, start, end, sort. The scrollId is a cursor to the original request

**400 Invalid Request**

```json
{
    "error": {
        "code": "invalid_request_error",
        "message": "scrollId is invalid or has timed out"
    }
}
```

**200 OK**

```json
{
  	"scrollId": "DnF1ZXJ5VGhlbkZldGNoBQAAAAAAMzh3FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4ehZjSS1MbWxmMlRVeVlVNVJPU3JzOTVRAAAAAAAzOHgWY0ktTG1sZjJUVXlZVTVST1Nyczk1UQAAAAAAMzh7FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4eRZjSS1MbWxmMlRVeVlVNVJPU3JzOTVR",
    "data": [
        {
            "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "externalId": "joe.bloggs@intilery.com",
            "email": "joe.bloggs@intilery.com",
            "eventId": "ec717144-924c-4826-981b-848459c39176",
            "eventTime": "2020-11-19T13:39:17.380Z",
            "receivedTime": "2020-11-19T13:39:17.912Z",
            "eventAction": "email_opened",
            "clientId": "intilery",
            "accountId": "marketing",
            "brandId": "MARKETING",
            "customerId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "source": "SEGMENT_API",
            "rawData": {
                "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
                "action": "track",
                "event": "Email Opened",
                "context": {
                    "ip": "217.42.6.253",
                    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15",
                    "traits": {
                        "email": "joe.bloggs@intilery.com"
                    }
                },
                "properties": {
                    "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",
                    "email_subject": "Thanks for requesting an Intilery trial",
                    "campaign_id": "TRIAL_WELCOME"
                },
                "timestamp": "2020-11-19T13:39:17.380Z",
                "sendType": "email"
            }
        },
        {
            "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "externalId": "joe.bloggs@intilery.com",
            "email": "joe.bloggs@intilery.com",
            "eventId": "4b7c99d4-0714-41e0-b285-1ef300634984",
            "clientId": "intilery",
            "source": "SEGMENT_API",
            "rawData": {
                "context": {
                    "traits": {
                        "email": "joe.bloggs@intilery.com"
                    },
                    "ip": "217.42.6.253",
                    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15"
                },
                "sendType": "email",
                "action": "track",
                "event": "Email Opened",
                "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
                "properties": {
                    "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",
                    "email_subject": "Thanks for requesting an Intilery trial",
                    "campaign_id": "TRIAL_WELCOME"
                },
                "timestamp": "2020-11-19T13:37:50.929Z"
            },
            "eventAction": "email_opened",
            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "accountId": "marketing",
            "receivedTime": "2020-11-19T13:37:51.407Z",
            "brandId": "MARKETING",
            "eventTime": "2020-11-19T13:37:50.929Z",
            "customerId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe"
        }
			]
		}
	}
```

200 OK**

```json
{
  	"scrollId": "DnF1ZXJ5VGhlbkZldGNoBQAAAAAAMzh3FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4ehZjSS1MbWxmMlRVeVlVNVJPU3JzOTVRAAAAAAAzOHgWY0ktTG1sZjJUVXlZVTVST1Nyczk1UQAAAAAAMzh7FmNJLUxtbGYyVFV5WVU1Uk9TcnM5NVEAAAAAADM4eRZjSS1MbWxmMlRVeVlVNVJPU3JzOTVR",
    "data": []
		}
	}
```

***Note:*** The data property will contain an empty array if there are no more results

### Get a Customer's Metadata

Get a single profile’s metadata within a collection using an `external_id`.

```http
     GET /track/v1/profiles/userId:123-rty/meta
```

**Request**

```
   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/meta" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

**404 Not Found**

```json
{
  "error": {
    "code": "not_found",
    "message": "Profile was not found."
  }
}
```

**200 OK**

```json
{
    "lastName": "Bloggs",
    "website": "www.intilery.com",
    "_subscriptionId": "aW50aWxlcnk6bWFya2V0aW5nOjg3MzA1NWVmLTdmYmYtNDYyNS1iMWNkLTEwYjRlNDc5YjIwZA==",
    "externalId": "joe.bloggs@intilery.com",
    "organisation": "Intilery",
    "industry": "Other",
    "firstName": "Joe",
    "createdBy": {
        "filename": "staff listaug20.csv",
        "createdTime": "2020-08-24T15:54:15.323Z",
        "type": "audience-csv"
    },
    "phone": "111222333444",
    "firstEvent": {
        "email_sent": {
            "eventId": "b5148168-928f-4f61-9a3d-ff1be6da5820",
            "receivedTime": "2020-10-20T13:49:43.393Z",
            "context": {
                "traits": {
                    "email": "joe.bloggs@intilery.com"
                }
            },
            "sendType": "email",
            "eventTime": "2020-10-20T13:49:41.697Z",
            "action": "track",
            "event": "Email Sent",
            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "properties": {
                "email_id": "6adec8ad-3663-4c53-b02d-67d69de6da91",
                "email_subject": "Everyone loves a freebie",
                "campaign_id": "FreeTrialEshot"
            },
            "timestamp": "2020-10-20T13:49:41.697Z"
        },
      ...
    },
    "lastEvent": {
        "email_sent": {
            "eventId": "b8be0f1f-e1af-41b8-9f8c-17514f3ccad6",
            "receivedTime": "2020-11-09T10:10:34.653Z",
            "context": {
                "traits": {
                    "email": "joe.bloggs@intilery.com"
                }
            },
            "sendType": "email",
            "eventTime": "2020-11-09T10:10:33.811Z",
            "action": "track",
            "event": "Email Sent",
            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "properties": {
                "email_id": "d67f6825-c560-4186-a2b6-516557e7151e",
                "email_subject": "Everything you need, in one place",
                "campaign_id": "Nov2"
            },
            "timestamp": "2020-11-09T10:10:33.811Z"
        },
        "email_opened": {
            "eventId": "ec717144-924c-4826-981b-848459c39176",
            "receivedTime": "2020-11-19T13:39:17.912Z",
            "context": {
                "ip": "217.42.6.253",
                "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/605.1.15 ",
                "traits": {
                    "email": "joe.bloggs@intilery.com"
                }
            },
            "sendType": "email",
            "eventTime": "2020-11-19T13:39:17.380Z",
            "action": "track",
            "event": "Email Opened",
            "userId": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
            "properties": {
                "email_id": "41937e92-b472-46ae-94e3-f29cc05cda5d",
                "email_subject": "Thanks for requesting an Intilery trial",
                "campaign_id": "TRIAL_WELCOME"
            },
            "timestamp": "2020-11-19T13:39:17.380Z"
        },
      ...
    },
    "audiences": [
        "audience_2_days"
    ],
    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
    "marketingPreferences": {
        "channels": [
            {
                "subscribed": true,
                "channel": "email"
            },
            {
                "subscribed": true,
                "channel": "sms"
            },
            {
                "subscribed": false,
                "channel": "whatsapp"
            },
            {
                "subscribed": false,
                "channel": "facebook"
            },
            {
                "subscribed": false,
                "channel": "push"
            }
        ]
    },
    "audiencesStatic": [
        "audience_board"
    ],
    "lastActivityTime": "2020-11-19T13:39:17.380Z",
    "email": "joe.bloggs@intilery.com"
}
```

### Get a Customer's Audiences

Get a single profile’s metadata within a collection using an `external_id`.

```http
     GET /track/v1/profiles/userId:123-rty/audiences
```

**Request**

```
   curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/profiles/{idType}:{id}/audiences" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

**404 Not Found**

```json
{
  "error": {
    "code": "not_found",
    "message": "Profile was not found."
  }
}
```

**200 OK**

```json
{
    "lastName": "Bloggs",
    "website": "www.intilery.com",
    "externalId": "joe.bloggs@intilery.com",
    "organisation": "Intilery",
    "industry": "Other",
    "firstName": "Joe",
    "phone": "111222333444",
    "audiences": [
        "audience_124516e8-6023-4b3a-8779-bcccb5d10eaf"
    ],
    "id": "4c90b9cf-5e4d-4689-ba57-b0f3e7c813fe",
    "marketingPreferences": {
        "channels": [
            {
                "subscribed": true,
                "channel": "email"
            },
            {
                "subscribed": true,
                "channel": "sms"
            },
            {
                "subscribed": false,
                "channel": "whatsapp"
            },
            {
                "subscribed": false,
                "channel": "facebook"
            },
            {
                "subscribed": false,
                "channel": "push"
            }
        ]
    },
    "audiencesStatic": [
        "audience_board"
    ],
    "email": "joe.bloggs@intilery.com"
}
```

## Personalization

### Recommended Implementation

Intilery provides an API where customers can fetch data about their users given an identifier (e.g email or user id) and an authorized access secret. We recommend you integrate using a server-side personalization pattern.

![Server-side Personalization](https://www.lucidchart.com/publicSegments/view/25df2e70-a666-4581-8f86-1a000dbf1f49/image.png)

Since this API has access to all of a customer’s data, we do not support CORS and ask that you do not expose the access secret (e.g. in a client-side app). We advise customers to create personalization service in their infrastructure that other apps, websites or services communicate with to fetch personalizations about their users.

### Example Workflow

If you want to display the most relevant blog posts given a reader’s favorite blog category:

1. **Create a computed trait** `favorite_blog_category` **in Intilery UI**

2. Create

    

   ```plaintext
   /api/recommended-posts
   ```

    

   in customer-built personalization service

    

   [Engineer]

   - Accept `user_id`, `email` or `anonymous_id` to fetch `favorite_blog_category` using API
   - Return array of most recent posts of that category to render in recommended section

3. Add recommended section to the blog

    

   [Engineer]

   - Client-side by making a request to `/recommended-posts` if it accepts CORS (recommended for static blogs, WordPress plugin, or other CMS solutions)
   - Server-side by collecting all the personalizations you want to make on the blog in a single request to increase the total time to load (recommended for custom blog setup)

Now, users who take a few minutes to read through an article on the blog will find posts recommended using their historical reading pattern including the post they just read.
