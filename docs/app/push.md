# Push Notifications

We use [Google Firebase](https://firebase.google.com) as the messaging channel
to make it easier to integrate push across multiple mobile platforms.

You will need to register your app(s) with [Firebase](https://console.firebase.google.com/)

In order to send messages from Intilery to your app you should:
 - register your app with [Firebase](https://console.firebase.google.com/)
 - add the Cloud Messaging Client to your app:
   - [iOS](https://firebase.google.com/docs/cloud-messaging/ios/client)
   - [Android](https://firebase.google.com/docs/cloud-messaging/android/client)

You then supply Intilery with the FCM key to enable push notifications to be sent.

## Managing the FCM Token on the Device

To ensure that your app audience is up-to-date you need to make sure your [FCM
token is refreshed regularly](https://firebase.google.com/docs/cloud-messaging/manage-tokens#ensuring-registration-token-freshness).

Intilery will remove stale tokens that are more than 2 months old.

## Sending the FCM Token to Intilery

