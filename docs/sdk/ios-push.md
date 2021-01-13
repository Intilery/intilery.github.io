---
id: ios-push
title: iOS Push Notifications
sidebar_label: iOS Push Notifications
---

## Setup

To send push notifictions to your app, we use [Google Firebase](https://firebase.google.com/) as the messaging SDKs. Google Firebase is the number 1 mobile platform.

In order to send messages from Intilery to your app you should follow the instructions for iOS [setting up iOS notifications](https://firebase.google.com/docs/cloud-messaging/ios/client)

iOS you will need to register your app(s) with google firebase and supply Intilery with one of your FCM Keys for each app.

## Registering devices

For each customer device you will need to send the FCM token and optional deviceId to Intilery as part of an identify event, this registers the device to the customers' profile at Intilery.

### Registering iOS

Once you have completed the steps at [setting up iOS notifications](https://firebase.google.com/docs/cloud-messaging/ios/client) you can implement the firebase code and Intielry identify code to register the device to the customer.

#### Swift

```swift
if #available(iOS 10.0, *) {
  // For iOS 10 display notification (sent via APNS)
  UNUserNotificationCenter.current().delegate = self

  let authOptions: UNAuthorizationOptions = [.alert, .badge, .sound]
  UNUserNotificationCenter.current().requestAuthorization(
    options: authOptions,
    completionHandler: {_, _ in })
} else {
  let settings: UIUserNotificationSettings =
  UIUserNotificationSettings(types: [.alert, .badge, .sound], categories: nil)
  application.registerUserNotificationSettings(settings)
}

application.registerForRemoteNotifications()

Analytics.shared().identify("a user's id", traits: [
  "pushToken": "the token from firebase",
  "deviceId" : "a meaningful name, e.g. company iOS App" //optional
])

```

**Note:** deviceId is optional but recommended, if not set, push notificatinos will be sent to all devices registered to a customer.

#### Objective-C

```objective-c
if ([UNUserNotificationCenter class] != nil) {
  // iOS 10 or later
  // For iOS 10 display notification (sent via APNS)
  [UNUserNotificationCenter currentNotificationCenter].delegate = self;
  UNAuthorizationOptions authOptions = UNAuthorizationOptionAlert |
      UNAuthorizationOptionSound | UNAuthorizationOptionBadge;
  [[UNUserNotificationCenter currentNotificationCenter]
      requestAuthorizationWithOptions:authOptions
      completionHandler:^(BOOL granted, NSError * _Nullable error) {
        // ...
      }];
} else {
  // iOS 10 notifications aren't available; fall back to iOS 8-9 notifications.
  UIUserNotificationType allNotificationTypes =
  (UIUserNotificationTypeSound | UIUserNotificationTypeAlert | UIUserNotificationTypeBadge);
  UIUserNotificationSettings *settings =
  [UIUserNotificationSettings settingsForTypes:allNotificationTypes categories:nil];
  [application registerUserNotificationSettings:settings];
}

[application registerForRemoteNotifications];

[[SEGAnalytics sharedAnalytics] identify:@"a user's id"
                                traits:@{ @"pushToken": @"the token from firebase",
                                          @"deviceId": @"a meaningful name, e.g. company iOS App"}];
```

**Note:** deviceId is optional but recommended, if not set, push notificatinos will be sent to all devices registered to a customer.

### Monitor For New Token iOS

You should implement code to monitor for a new token on the device, and send the token to Intilery.

#### Swift

```swift
func messaging(_ messaging: Messaging, didReceiveRegistrationToken fcmToken: String?) {
  print("Firebase registration token: \(String(describing: fcmToken))")

  let dataDict:[String: String] = ["token": fcmToken ?? ""]
  NotificationCenter.default.post(name: Notification.Name("FCMToken"), object: nil, userInfo: dataDict)
  
  Analytics.shared().identify("a user's id", traits: [
  "pushToken": "the token from firebase",
  "deviceId" : "a meaningful name, e.g. company iOS App" //optional
])
}
```

#### Objective-C

```objective-c
- (void)messaging:(FIRMessaging *)messaging didReceiveRegistrationToken:(NSString *)fcmToken {
    NSLog(@"FCM registration token: %@", fcmToken);
    // Notify about received token.
    NSDictionary *dataDict = [NSDictionary dictionaryWithObject:fcmToken forKey:@"token"];
    [[NSNotificationCenter defaultCenter] postNotificationName:
     @"FCMToken" object:nil userInfo:dataDict];
    
  [[SEGAnalytics sharedAnalytics] identify:@"a user's id"
                                traits:@{ @"pushToken": @"the token from firebase",
                                          @"deviceId": @"a meaningful name, e.g. company iOS App"}];
}
```

## Receiving Messages

In order to notify Intilery of the receing of the message you need to implement the following as detaild [here](https://firebase.google.com/docs/cloud-messaging/ios/receive#handle_messages)

Implement `AppDelegate application:didReceiveRemoteNotification:` 

#### Swift

```swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any]) {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification

  // With swizzling disabled you must let Messaging know about the message, for Analytics
  // Messaging.messaging().appDidReceiveMessage(userInfo)

  // Print message ID.
  if let messageID = userInfo[gcmMessageIDKey] {
    print("Message ID: \(messageID)")
  }

  // Print full message.
  print(userInfo)
}

func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any],
                 fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification

  // With swizzling disabled you must let Messaging know about the message, for Analytics
  // Messaging.messaging().appDidReceiveMessage(userInfo)

  // Print message ID.
  if let messageID = userInfo[gcmMessageIDKey] {
    print("Message ID: \(messageID)")
  }

  // Print full message.
  print(userInfo)
  
  //send to Intilery
	Analytics.shared().track("Push Notification Received", properties: ["notificationId": messageID])
  completionHandler(UIBackgroundFetchResult.newData)
}
```

#### Objective-C

```objective-c
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification

  // With swizzling disabled you must let Messaging know about the message, for Analytics
  // [[FIRMessaging messaging] appDidReceiveMessage:userInfo];

  // Print message ID.
  if (userInfo[kGCMMessageIDKey]) {
    NSLog(@"Message ID: %@", userInfo[kGCMMessageIDKey]);
  }

  // Print full message.
  NSLog(@"%@", userInfo);
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
    fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
  // If you are receiving a notification message while your app is in the background,
  // this callback will not be fired till the user taps on the notification launching the application.
  // TODO: Handle data of notification

  // With swizzling disabled you must let Messaging know about the message, for Analytics
  // [[FIRMessaging messaging] appDidReceiveMessage:userInfo];

  // Print message ID.
  if (userInfo[kGCMMessageIDKey]) {
    NSLog(@"Message ID: %@", userInfo[kGCMMessageIDKey]);
  }

  // Print full message.
  NSLog(@"%@", userInfo);
      
  //Call Intilery
  [[SEGAnalytics sharedAnalytics] track:@"Push Notification Received"
                            properties:@{ @"notificationId": userInfo[kGCMMessageIDKey] }];

  completionHandler(UIBackgroundFetchResultNewData);
}
```

### Handle messages with method swizzling disabled

See the instructions [here](https://firebase.google.com/docs/cloud-messaging/ios/receive#handle-swizzle) and add the relevant code to call Intilery

![Firebase](https://slack-imgs.com/?c=1&o1=wi32.he32.si&url=https%3A%2F%2Fwww.gstatic.com%2Fdevrel-devsite%2Fprod%2Fve312520032ba2ac0c4d23f7b46fc670cbbe051886a2d1f04563a5e4768ad9787%2Ffirebase%2Fimages%2Ftouchicon-180.png)**Firebase**

**[Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging)**

Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.