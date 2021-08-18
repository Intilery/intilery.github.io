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

:::note

A customer can have more than one device, but the device is only every linked to
one customer. If a customer has more than one device, when a push is sent, it is
sent to all the customer's devices.

:::

## Managing the FCM Token on the Device

To ensure that your app audience is up-to-date you need to make sure your [FCM
token is refreshed regularly](https://firebase.google.com/docs/cloud-messaging/manage-tokens#ensuring-registration-token-freshness).

Intilery will remove stale tokens that are more than 2 months old.
You should configure your app to refresh the FCM token once every 30 - 45 days.

When we attempt to send a push message if we get an error back from firebase
indicating that the token is no longer valid the token will be removed by Intilery.

## Sending the FCM Token to Intilery

When a user first installs the app and you ask them to accept push messages, 
send a `Register Push` event to Intilery. As the customer is not signed in, there
will be no `userId`, so don't pass one.

When a user has push enabled and have not yet signed in,  send
events to Intilery using the FCM Device ID as the `userId` in subsequent events.

When a user does not have push enabled, they are anonymous, so send events
to Intilery with only a `anonymousId`. You can use the FCM Device ID as the
`anonymousId`.

When a customer Signs In or Registers, send an `Identify` as you normally would
to identify the customer, then if push is enabled send a `Register Push` with the
`userId` in the event.

### Register Push Event

A `Register Push` event has these properties:
  * The `deviceId` from firebase to uniquely identify the device
  * The `fcmToken` from firebase enabling push notifications
  * A `deviceType` of `iOS` or `Android` or `Web`

If the user has signed in or registered, the `userId` will be your unique customer
identifier. If they haven't, but have push enabled, then use the `deviceId`.

```json
{
   "userId": "<deviceId|userId>",
   "event": "register push",
   "type": "track",
   "properties": {
      "deviceId":"<deviceId>",
      "fcmToken":"<fcmToken>",
      "deviceType":"iOS|Android|Web"
   },
   "writeKey": "<writeKey>"
}
```


