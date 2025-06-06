---
id: commands
title: API Commands
sidebar_label: Commands
---

The **track action** on the API Event Endpoint will accept a number of **event** values that act as **commands** to trigger
the sending of a specific asset. In these cases there is no need to pass a separate properties section, as every value under
the root of the object forms the start of data for use as a merge tag in the campaign, though the properties of the 
customer are available as usual in the merge tags.

Each event must provide the `assetId` property to identify the asset code of the asset to be sent.

When the asset is sent, the current state of the **customer** is added by the Intilery CDP as a root merge tag,
so does not need to be passed in on the track event.

Note that you can only send to a **customer** who has been [identified](./api#identify-action) via the [HTTP API](/docs/apis/api).

## Commands

| **event**      | **action**                |
| :------------- | :------------------------ |
| **send_email** | send the specified email  |
| **send_sms**   | send the specified sms    |
| **send_print** | send the specified letter |
| **send_push** | send the specified push to all customers devices |
| **start_journey** | start a journey |

## Event Data for send_ commands

| **field**        | **required** | description              |
| ----------------- | ------------ | ------------------------------------------------------------ |
| **userId**        | **required** | Unique identifier for the user in your database              |
| **event**         | **required** | One of the commands listed above.                            |
| **assetId**       | **required** | The code of the Campaign (Asset)                             |
| **timestamp**     | **optional** | [ISO-8601 UTC Timestamp](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2019-11-18T13:30:11.444Z) for then the event happened |
| `<anything else>` | optional     | Any valid JSON that is then available for use in the asset using merge tags |

### Example

```http request
POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track
```

```json
{
	"userId": "ABC/123",  
	"event": "SEND_SMS",  
	"assetId": "202007-B-AbandonedBooking",  
	"timestamp": "2019-11-18T13:30:12.984Z",  
	"bookingId" : "1234" 
}
```

## Event Data for start_journey command


| **field**        | **required** | description              |
| ----------------- | ------------ | ------------------------------------------------------------ |
| **userId**        | **required** | Unique identifier for the user in your database              |
| **event**         | **required** | `start_journey`                            |
| **properties.journeyIdToTrigger** | **required** | The ID of the Journey to start. You can get this from the URL when you view a journey, e.g. if the URL is: `/journeys/view/6046429d73096e3b2dca973d/1`, then the journey ID is `6046429d73096e3b2dca973d` |
| **properties.stepIdToTrigger** | **optional** | The ID of the step to insert the customer at. Copy this from your journey steps by clicking the barcode icon at top right of any step |
| **timestamp**     | **optional** | [ISO-8601 UTC Timestamp](http://en.wikipedia.org/wiki/ISO_8601) (e.g. 2019-11-18T13:30:11.444Z) for then the event happened |
| `<anything else>` | optional     | Any valid JSON that is then available for use in the journey or for forwarding on to assets when sending a campaign |



### Example

```http request
POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track
```

```json
{
    "userId": "ABC/123",  
    "event": "start_journey",
    "properties": {
      "journeyIdToTrigger": "6046429d73096e3b2dca973d",
	  "stepIdToTrigger": "01c318b8-1f16-40b3-9808-709c5c1b44f6"
    }
}
```

---

***Note:*** When looking at events or customers in the Intilery platform, you may see references to "customerId", this is the internal unique ID for the customer that Intilery assigns. This ID is for Intilery use only.
