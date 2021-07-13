---
id: sms
title: SMS Schema
sidebar_label: SMS
---

SMS sent using the Intilery platform will automatically capture all events described here, if you wish to use a different SMS Provider, you should ensure that the provider can send the required events to the Intilery CDP.

The semantic events detailed below represent the ideal for SMS events and what Intilery provides by default; not every SMS tool supports all of these events or all of their properties.

## Overview

SMS is sent to a customer and will be attempted to be delivered by a network. 
Usually you can expect an SMS to arrive with the customer in a few seconds,
however, due to connectivity issues, it is possible that the SMS can take up to 3 days
to arrive before the network will cease trying to send.

We raise an [SMS Sent](#sms-sent) event on sending the SMS to the networks to 
deliver the message, and based on their feedback of delivery we will raise an
[SMS Delivered](#sms-delivered) event.


## Events

The email category has the following semantic events:

- [SMS Sent](#sms-sent)
- [SMS Not Sent](#sms-not-sent)
- [SMS Delivered](#sms-delivered)

**Note:** All events below are automatically sent to the Intilery CDP by the Intilery
Customer Engagement platform if Intilery sends the SMS

### SMS Sent

This event should be fired when the SMS server sends the SMS.

#### Properties

This event supports the following semantic properties:

| Property        | Type   | Description                        |
| --------------- | ------ | ---------------------------------- |
| `sms_id`      | String | An ID used to identify the SMS.  |
| `campaign_id`   | String | An id used to identify a campaign  |
| `campaign_name` | String | A name used to identify a campaign |

#### Context

This event supports the following semantic context properties:

| Property               | Type   | Description                                                |
| ---------------------- | ------ | ---------------------------------------------------------- |
| `context.traits`       | Object | An associative array about the email’s intended recipient. |
| `context.traits.phone` | String | The intended recipient’s phone number.                    |

##### Example

```json
{
  "userId": "019mr8mf4r",
  "action": "track",
  "event": "SMS Sent",
  "context": {
    "traits": {
      "phone": "441234567890"
    }
  },
  "properties": {
    "sms_id": "290184d0-e7ff-4ea6-a5a2-e122abfe49b4",
    "campaign_id": "testSMS"
  },
  "timestamp": "2019-11-12T16:45:24.772Z"
}
```


### SMS Not Sent

When an SMS is triggered by a Journey, but is not sent due to a configuration reason,
then we raise an SMS Not Sent event. This could be because the SMS is not 
transacational and the customer is not subscribed, so the SMS is not sent.


#### Properties

This event supports the following semantic properties:

| Property        | Type   | Description                        |
| --------------- | ------ | ---------------------------------- |
| `sms_id`      | String | An ID used to identify the SMS.  |
| `campaign_id`   | String | An id used to identify a campaign  |
| `campaign_name` | String | A name used to identify a campaign |


#### Context

This event supports the following semantic context properties:

| Property               | Type   | Description                                                |
| ---------------------- | ------ | ---------------------------------------------------------- |
| `context.traits`       | Object | An associative array about the email’s intended recipient. |
| `context.traits.phone` | String | The intended recipient’s phone number.                    |

##### Example

```json
{
  "userId": "019mr8mf4r",
  "action": "track",
  "event": "SMS Not Sent",
  "context": {
    "traits": {
      "phone": "441234567890"
    }
  },
  "properties": {
    "sms_id": "75abe112-0702-4908-bcb7-7c009d0d8c45",
    "campaign_id": "WDGOOGRV"
  },
  "timestamp": "2021-05-24T08:01:17.231Z"
}

```

### SMS Delivered

This event should be fired when the receiving SMS provider confirms receipt of the SMS.

#### Properties

This event supports the following semantic properties:

| Property        | Type   | Description                        |
| --------------- | ------ | ---------------------------------- |
| `sms_id`      | String | An ID used to identify the SMS.  |
| `campaign_id`   | String | An id used to identify a campaign  |
| `campaign_name` | String | A name used to identify a campaign |

#### Context

This event supports the following semantic context properties:

| Property               | Type   | Description                                                |
| ---------------------- | ------ | ---------------------------------------------------------- |
| `context.traits`       | Object | An associative array about the email’s intended recipient. |
| `context.traits.phone` | String | The intended recipient’s phone number.                 |

##### Example

```json
{
  "userId": "019mr8mf4r",
  "action": "track",
  "event": "SMS Delivered",
  "context": {
    "traits": {
      "phone": "441234567890"
    }
  },
  "properties": {
    "sms_id": "290184d0-e7ff-4ea6-a5a2-e122abfe49b4",
    "campaign_id": "testSMS"
  },
  "timestamp": "2019-11-12T16:49:02.813Z"
}
```
