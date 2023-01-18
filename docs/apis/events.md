---
id: events
title: Events API
sidebar_label: Events
---

The Intilery Events API provides a single API to read account-level event data. This API enables you to access in real-time all events that your customers are doing, where the event is sent to the Intilery CDP. By default all events are accessed most recent first (data desc) and can be paged to access all events in a polling mechanism.

The API supports filtering of event types, filtering based on event properties, sorting and unique eventIDs.

You can use this API to…

- **Access when a user has clicked on an email** to perform a workflow in an integration tool like zapier (it may make sense to use an Intilery Journey if you do not want to integrate other tools)
- **React to an event raised in a Journey to trigger something in another tool** to connect an agent in a call centre to a customer
- **New Customers** access new customer records and send them to another system (identify event)

## Product Highlights

1. **Realtime Access** - fetch your entire customer events
2. **Realtime Data** - query streaming data on events that just happened
4. **Rich Data** - receive the complete data associated with events

## Endpoint

```http request
GET https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/events/
```

You will be given you clientId, accountIds and brandIds.

The endpoint expects a GET and returns JSON

Authentication is via a shared secret passed in the auth-token header.

The actions are detailed below.

### Headers

#### Content-Type

You must provide a content-type header of application/json

#### Auth-Token

Authentication to handled by a shared secret that must be passed in a header

## Example Request

```bash
curl "https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/events" -i -X GET \ -H "content-type: application/json" \ -H "auth-token: 1234abcd"
```

## Permissions

Your Authentication token will be set with permissions at the Account and Brand level, token’s can be created that have access to all Accounts or specific to a single Account. 

## Limits

The API is set to 100 requests per second with a burst of 500, limit and burst explained [here](https://en.wikipedia.org/wiki/Token_bucket)

If limits are exceeded you will receive a 429 Error (limit exceeded) response.

The maximum size of any request is 1mb, exceeding this will return a 413 Error.


## Optional Request Arguments

| **Query Parameter** | **Description**                                              | **Example**                   |
| ------------ | ------------------------------------------------------------ | ----------------------------- |
| `include`    | The event action to include in the query    | page                         |
| `exclude`    | A comma-separated list of event actions to exclude from the query             | page,logged_in,registered,identify |
| `start`      | Returns all the events that start after `start` (in ISO 8601). | 2006-01-02                    |
| `end`        | Returns all the events that end before `end` (in ISO 8601).  | 2018-01-02                    |
| `sort`       | Determines whether the result is **asc**ending or **desc**ending. Defaults to descending. | asc                      |
| `from`       | Defines the number of hits to skip, defaulting to 0. Together with the size parameter, defines a page of results. | 100 |
| `size`       | A limit on the number of objects to be returned, between 1 and 100. | 10 |

### Pagination
You can use the `from` parameter to page through up to 10,000 results.

You can use the `start` and `end` to pass in a datetime to restrict the result set.

## Quickstart

### Set up Access

To access the events API, you will need you clientID, accountID and brandID, along with the authentication token. Get these from the API Keys section.

The events API expects the authentication token to be supplied in the request headers.

### Access the event stream

1. Download and open [Postman](https://www.getpostman.com/), a nice app for exploring HTTP APIs

2. Create your Postman GET request to query the user’s event’s history: i. The URL is: https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/events`

   ii. Replace `clientID, accountID and BRANDID` with your own values


![postman](/img/postman-events-1.png)

1. Press the Send button in Postman.

### Explore the events returned in date desc order (default)

![postman](/img/postman-events-2.png)
