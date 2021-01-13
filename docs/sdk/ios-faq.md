---
id: ios-faq
title: iOS Frequently Asked Questions
sidebar_label: iOS FAQs
---

## How big is the Intilery SDK?

The core Intilery SDK is extremely lightweight. It weighs in at about 212kb.

## Can I install the SDK manually using a dynamic framework?

Intilery **highly recommends** using Swift Package Manager or Cocoapods. We cannot guarantee support if you do not use a dependency manager.

However, if you cannot use Swift Package Manager or Cocoapods, you can manually install our dynamic framework allowing you to send data to Intilery.

To install manually:

1. Download the [latest built SDK](https://github.com/Intilery/intilery-analytics-ios/releases/), and unzip the zip file
2. Drag the unzipped `Segment.framework` folder into your XCode project
3. In the **General Tab** for your project, search for `Embedded Binaries` and add the `Segment.framework`

![img](https://segment.com/docs/connections/sources/catalog/libraries/mobile/ios/images/embeddedbinaries.png)

Once you install the framework, import the header file and install as described in [Install the SDK](./ios#install-the-sdk).

If you choose not to use a dependency manager, you must manually keep files up-to-date with regularly scheduled, manual updates.

## How do I use push notifications?

For services that send push notifications, you must first [create a Push SSL certificate](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html). Then configure your application delegate similarly to the example code below, replacing `YOUR_WRITE_KEY` with your own Intilery source write key. Detailed examples of how to complete the process can be found in [Apple’s documentation on the subject](https://developer.apple.com/documentation/usernotifications/handling_notifications_and_notification-related_actions).

#### Swift

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")

    // Use launchOptions to track tapped notifications
    configuration.launchOptions = launchOptions
    Analytics.setup(with: configuration)

    // See the Apple linked above for detailed setup information, as it will vary 
    // based on which versions of iOS are supported and what language is being used.
    ...

    return true
}
```

#### Objective-C

```objectivec
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    SEGAnalyticsConfiguration* configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];

    // Use launchOptions to track tapped notifications
    configuration.launchOptions = launchOptions;
    [SEGAnalytics setupWithConfiguration:configuration];

    // See the Apple documentation linked above for detailed setup information, as it will vary 
    // based on which versions of iOS are supported and what language is being used.
    ...

    return YES;
}
```

Once you’ve passed in the launch options and configured the types of notifications your application should received you can then call into Intilery's library to indicate that a device token and/or notification has been received.

#### Swift

```swift
// Let Intilery Analytics know a device token was received
Analytics.shared().registeredForRemoteNotifications(deviceToken: deviceToken)

...

// Let Intilery Analytics know that a remote notification was received
Analytics.shared().receivedRemoteNotification(userInfo)
```

#### Objective-C

```objectivec
// Let Intilery Analytics know a device token was received
[[SEGAnalytics sharedAnalytics] registeredForRemoteNotificationsWithDeviceToken:deviceToken];

...

// Let Intilery Analytics know that a remote notification was received
[[SEGAnalytics sharedAnalytics] receivedRemoteNotification:userInfo];
```

## Can I set user traits without a User ID?

Yes, you can pass a `nil` value for the `userId` in an [Identify call](/docs/schema/identify), like in the following example:

#### Swift

```swift
Analytics.shared().identify(nil, traits: ["email": "example@example.com", "gender": "F"])
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] identify: nil
    traits:@{ @"email": @"example@example.com",
      @"Gender": @"F" }];
```

## Can I anonymize IP addresses?

Intilery collects IP addresses for device-mode (iOS, Android, Analytics.js and Xamarin) events automatically. If you don’t want to record your tracked users’ IP in destinations (and in storage destinations like S3), you can set the event’s `context.ip` field to `0.0.0.0` . The Intilery servers don’t record the IP address of the client for libraries if the `context.ip` field is already set.

The following examples show how to set a static 0 value for the IP.

#### Swift

```swift
Analytics.shared().track("Clicked Button", properties: nil, options: ["context": ["ip": "0.0.0.0"]])
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] track: @"Clicked Button"
  properties:nil
  options:@{ @"context": @{@"ip": @"0.0.0.0"}}];
```

## How can I get the user’s IDFA?

Some destinations, especially mobile attribution tools (e.g. Kochava), require the IDFA (identifier for advertisers). The IDFA appears in Intilery calls in the debugger as `context.device.advertisingId`. To capture this value with Analytics-iOS, follow the steps in [Ad-tracking and IDFA](./ios#ad-tracking-and-idfa). Remember that Apple now requires that the user consent to your tracking before you can collect the IDFA.

## tvOS / macOS / Catalyst Support

We now supports tvOS, macOS and Catalyst as well. You can follow the [quickstart documentation](./ios-quickstart) to set it up!

## Why have you forked Segment?

We forked the segment client libraries to give you the choice of using segment to send data to Intilery and a Segment destination, or if you do not use Segment you can send the data directly to Intielry with our forked libraries and SDKs. If in the future you decide to use Segment, the change should be as simple as using the Segment library/sdk instead of the Intilery library/sdk