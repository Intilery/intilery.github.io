# Mobile App Integration

## Create a Tracking Plan

Refer to or update your [tracking plan](../guides/tracking-plan). Make sure you
know what to track and why. What events will trigger journeys. What data you
need for merge tags in campaigns. What traits do you capture about the customer.

Use the [Intilery core schema](../schema/common). Include the additional lifecycle
events from the [app schema](../schema/app). If you are using transactions use
the [e-commerce schema](../schema/retail) Add your own custom events if
needed so you can build audiences and target customers with the right campaigns.

## Integrate Tracking with your App

We provide native libraries that wrap the Intilery API endpoints with some easy to 
use track, identify and screen view calls. The libraries are all open source and the
SDKs queues API calls rather than making a network request for each event
tracked, to help improve the user’s battery life.

Batches are sent either:

- when there are 20 or more events in the queue
- on a scheduled timer, every 30 seconds
- when the app goes to the background

To limit memory and disk usage, Intilery only queues up to 1000 events.
When the app is terminated, Intilery saves the queue to disk,
and loads that data again at app launch so there is no data loss.

  * [iOS Native SDK](./ios)
  * [Android Native SDK](./android)

If you develop your app using [flutter](https://flutter.dev),
[react-native](https://reactnative.dev/), or another cross-platform development
kit you can either integrate using the native libraries or build your own 
connection to the [API direct](./api).

## Integrate Push Notifications with your App

To send [push notifications](./push) to your app, we use
[Google Firebase](https://firebase.google.com/) 
as the messaging SDKs.
