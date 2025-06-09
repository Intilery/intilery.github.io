# Mobile App Integration

## Create a Tracking Plan

Refer to or update your [tracking plan](../guides/tracking-plan). Make sure you
know what to track and why. What events will trigger journeys. What data you
need for merge tags in campaigns. What traits do you capture about the customer.

Use the [Intilery core schema](../schema/common). Include the additional lifecycle
events from the [app schema](../schema/app). If you are using transactions use
the [e-commerce schema](../schema/retail). Add your own custom events if
needed so you can build audiences and target customers with the right campaigns.

## Integrate Tracking with your App

We suggest you integrate with our server-side API and queue requests or use the batch endpoints rather making a network request for each event
tracked. This helps improve the user’s battery life over a more chatty protocol.

Send batches either:

- when there are 20 or more events in your queue
- on a scheduled timer, every 30 seconds
- when the app goes to the background


## Integrate Push Notifications with your App

To send [push notifications](./push) to your app, we use [Google Firebase](https://firebase.google.com/) as the messaging SDKs.
