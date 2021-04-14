---
id: subscription
title: Subscription Schema
sidebar_label: Subscription
---

`subscription` events lets you know when your customer subscribes or unsubscribes from a channel or subscription category

Note: The event is generated from the Manage Subscription page only, this is a system generated event for when a customer manually subscribes or unsubscribes.

## Unsubscribe From Channel

| Field       |          | Type   | Description                                                  |
| ----------- | -------- | ------ | ------------------------------------------------------------ |
| `channel`   | Required | String | The channel the customer has unsubscribed/subscribed from/to, e.g. Email, SMS |
| campaign_id | optional | String | The assetID (campaign_id) that the user clicked the Manage Subscription Preferences from. If this is present, the campaign report will be updated with an unsubscribe if applicable |

## Subscribe To Channel

| Field       |          | Type   | Description                                                  |
| ----------- | -------- | ------ | ------------------------------------------------------------ |
| `channel`   | Required | String | The channel the customer has unsubscribed/subscribed from/to, e.g. Email, SMS |
| campaign_id | optional | String | The assetID (campaign_id) that the user clicked the Manage Subscription Preferences from. If this is present, the campaign report will be updated with an unsubscribe if applicable |

## Unsubscribe From Category

| Field       |          | Type   | Description                                                  |
| ----------- | -------- | ------ | ------------------------------------------------------------ |
| `category`  | Required | String | The category the customer has unsubscribed/subscribed from/to, e.g. Email, SMS |
| campaign_id | optional | String | The assetID (campaign_id) that the user clicked the Manage Subscription Preferences from. |

## Subscribe To Category

| Field       |          | Type   | Description                                                  |
| ----------- | -------- | ------ | ------------------------------------------------------------ |
| `category`  | Required | String | The category the customer has unsubscribed/subscribed from/to, e.g. Email, SMS |
| campaign_id | optional | String | The assetID (campaign_id) that the user clicked the Manage Subscription Preferences from. |

