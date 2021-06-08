---
id: android-push
title: Android Push Notifications
sidebar_label: Android Push Notifications
---

## Setup

To send push notifictions to your app, we use [Google Firebase](https://firebase.google.com/) as the messaging SDKs. Google Firebase is the number 1 mobile platform.

In order to send messages from Intilery to your app you should follow the instructions for Android

[setting up android Android notifications](https://firebase.google.com/docs/cloud-messaging/android/client)

For Android you will need to register your app(s) with google firebase and supply Intilery with one of your FCM Keys for each app.

## Registering devices

For each customer device you will need to send the FCM token and optional deviceId to Intilery as part of an identify event, this registers the device to the customers' profile at Intilery.

### Registering Android

Once you have completed the steps at [setting up Andoid notifications](https://firebase.google.com/docs/cloud-messaging/android/client) you can implement the firebase code and Intilery identify code to register the device to the customer.

#### Java

```java
FirebaseMessaging.getInstance().getToken()
    .addOnCompleteListener(new OnCompleteListener<String>() {
        @Override
        public void onComplete(@NonNull Task<String> task) {
          if (!task.isSuccessful()) {
            Log.w(TAG, "Fetching FCM registration token failed", task.getException());
            return;
          }

          // Get new FCM registration token
          String token = task.getResult();

          // Log and toast
          String msg = getString(R.string.msg_token_fmt, token);
          Log.d(TAG, msg);
          Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
          
          //Send to Intilery
          Analytics.with(context).identify("a user's id", 
                                           new Traits()
                                           .putValue("pushToken", "the token from firebase")
                                           .putValue("deviceId", "a meaningful name, e.g. company android App")
                                           , null);
        }
    });
```

**Note:** deviceId is optional but recommended, if not set, push notificatinos will be sent to all devices registered to a customer.

#### Kotlin

```kotlin
FirebaseMessaging.getInstance().token.addOnCompleteListener(OnCompleteListener { task ->
    if (!task.isSuccessful) {
        Log.w(TAG, "Fetching FCM registration token failed", task.exception)
        return@OnCompleteListener
    }

    // Get new FCM registration token
    val token = task.result

    // Log and toast
    val msg = getString(R.string.msg_token_fmt, token)
    Log.d(TAG, msg)
    Toast.makeText(baseContext, msg, Toast.LENGTH_SHORT).show()
		
		//Send to Intilery
		Analytics.with(context).identify("a user's id", Traits()
                                     .putValue("pushToken", "the token from firebase")
                                     .putValue("deviceId", "a meaningful name, e.g. company android App")
                                     , null)
})
```

**Note:** deviceId is optional but recommended, if not set, push notificatinos will be sent to all devices registered to a customer.

### Monitor For New Token Android

You should implement code to monitor for a new token on the device, and send the token to Intilery.

#### Java

```java
/**
 * There are two scenarios when onNewToken is called:
 * 1) When a new token is generated on initial app startup
 * 2) Whenever an existing token is changed
 * Under #2, there are three scenarios when the existing token is changed:
 * A) App is restored to a new device
 * B) User uninstalls/reinstalls the app
 * C) User clears app data
 */
@Override
public void onNewToken(String token) {
    Log.d(TAG, "Refreshed token: " + token);

		//Send to Intilery
    Analytics.with(context).identify("a user's id", 
    	new Traits()
      .putValue("pushToken", "the token from firebase")
      .putValue("deviceId", "a meaningful name, e.g. company android App")  //optional
     	, null);
}
```

#### Kotlin

```kotlin
/**
 * Called if the FCM registration token is updated. This may occur if the security of
 * the previous token had been compromised. Note that this is called when the
 * FCM registration token is initially generated so this is where you would retrieve the token.
 */
override fun onNewToken(token: String) {
    Log.d(TAG, "Refreshed token: $token")

    //Send to Intilery
		Analytics.with(context).identify("a user's id", Traits()
       .putValue("pushToken", "the token from firebase")
       .putValue("deviceId", "a meaningful name, e.g. company android App")
       , null)
}
```

## Receiving Messages

In order to notify Intilery of the receing of the message you need to implement the following as detaild [here](https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages)

### Override `onMessageReceived`

#### Java

```java
@Override
public void onMessageReceived(RemoteMessage remoteMessage) {
    // ...

    // TODO(developer): Handle FCM messages here.
    // Not getting messages here? See why this may be: https://goo.gl/39bRNJ
    Log.d(TAG, "From: " + remoteMessage.getFrom());

    // Check if message contains a data payload.
    if (remoteMessage.getData().size() > 0) {
        Log.d(TAG, "Message data payload: " + remoteMessage.getData());

        if (/* Check if data needs to be processed by long running job */ true) {
            // For long-running tasks (10 seconds or more) use WorkManager.
            scheduleJob();
        } else {
            // Handle message within 10 seconds
            handleNow();
        }

    }

    // Check if message contains a notification payload.
    if (remoteMessage.getNotification() != null) {
        Log.d(TAG, "Message Notification Body: " + remoteMessage.getNotification().getBody());
    }

    // Also if you intend on generating your own notifications as a result of a received FCM
    // message, here is where that should be initiated. See sendNotification method below.
  
  if(remoteMessage.getData().get("notificationId") != null) {
        Analytics.with(context).track("Push Notification Received", 
                                      new Properties().putValue("notificationId", remoteMessage.getData().get("notificationId")));
      }
}
```

#### Kotlin

```kotlin
override fun onMessageReceived(remoteMessage: RemoteMessage) {
    // ...

    // TODO(developer): Handle FCM messages here.
    // Not getting messages here? See why this may be: https://goo.gl/39bRNJ
    Log.d(TAG, "From: ${remoteMessage.from}")

    // Check if message contains a data payload.
    if (remoteMessage.data.isNotEmpty()) {
        Log.d(TAG, "Message data payload: ${remoteMessage.data}")

        if (/* Check if data needs to be processed by long running job */ true) {
            // For long-running tasks (10 seconds or more) use WorkManager.
            scheduleJob()
        } else {
            // Handle message within 10 seconds
            handleNow()
        }
    }

    // Check if message contains a notification payload.
    remoteMessage.notification?.let {
        Log.d(TAG, "Message Notification Body: ${it.body}")
    }
  
    if(remoteMessage.getData().get("notificationId") != null) {

    // Also if you intend on generating your own notifications as a result of a received FCM
    // message, here is where that should be initiated. See sendNotification method below.
  Analytics.with(context).track("Push Notification Received", 
                                Properties().putValue("notificationId", remoteMessage.getData().get("notificationId")))
    }
}
```



![Firebase](https://slack-imgs.com/?c=1&o1=wi32.he32.si&url=https%3A%2F%2Fwww.gstatic.com%2Fdevrel-devsite%2Fprod%2Fve312520032ba2ac0c4d23f7b46fc670cbbe051886a2d1f04563a5e4768ad9787%2Ffirebase%2Fimages%2Ftouchicon-180.png)**Firebase**

**[Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)**

Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.