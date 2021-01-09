---
id: ios
title: Intilery iOS Mobile SDK
sidebar_label: iOS Mobile SDK
---

Intilery for iOS makes it simple to send your data to Intilery.

All of Intilery;s libraries are open-source, so you can [view Intilery for iOS on GitHub](https://github.com/Intilery/analytics-ios)

Want to stay updated on releases? Subscribe to the [release feed](https://github.com/Intilery/analytics-ios/tags.atom).

**Note:** Intilery does not currently support tracking of watchkit extensions for the Apple Watch. [Email us](email:support@intilery.com) if you’re interested in a Watchkit SDK. For now we recommend tracking watch interactions using the iPhone app code.

## Intilery-iOS and Unique Identifiers

One of the most important parts of any analytics platform is the ability to consistently and accurately identify users. To do this, the platform must assign and persist some form of identification on the device, so you can analyze user actions effectively.

Naturally the Intilery SDK needs a unique ID for each user. To protect end-users’ privacy, Apple places restrictions on how these IDs can be generated and used. This section explains Apple’s policies, and how Intilery generates IDs in compliance with these policies.

Before iOS 5 developers had access to `uniqueIdentifier`, which was a hardware-specific serial number that was consistent across different apps, vendors and installs. Starting with iOS 5, however, [Apple deprecated access to this identifier](https://developer.apple.com/news/?id=3212013a). In iOS 6 Apple introduced the `identifierForVendor` which protects end-users from cross-app identification. In iOS 7 Apple [restricted access to the device’s MAC address](http://techcrunch.com/2013/06/14/ios-7-eliminates-mac-address-as-tracking-option-signaling-final-push-towards-apples-own-ad-identifier-technology/), which many developers used as a workaround to get a similar device-specific serial number to replace `uniqueIdentifier`.

Intilery's iOS library supports iOS 7+ by generating a UUID and storing it on disk. This complies with Apple’s required privacy policies, maintains compatibility, and also enables correct tracking in situations where multiple people use the same device, since the UUID can be regenerated.

## API call queueing in Intilery-iOS

The Intilery SDK queues API calls rather than making a network request for each event tracked, to help improve the user’s battery life.

Batches are sent either:

- when there are 20 or more events in the queue
- on a scheduled timer, every 30 seconds
- when the app goes to the background

To limit memory and disk usage, Intilery only queues up to 1000 events. When the app is terminated, Intielry saves the queue to disk, and loads that data again at app launch so there is no data loss.

## Getting Started

### Install the SDK

The recommended way to install Intilery for iOS is using [Cocoapods](http://cocoapods.org/), since it means you can create a build with specific destinations, and because it makes it simple to install and upgrade.

First, add the `Analytics` dependency to your `Podfile`, like so:

```
pod 'IntileryAnalytics', '~> 4.1'
```

Then in your application delegate’s `- application:didFinishLaunchingWithOptions:` method, set up the SDK like so:

#### Swift

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.trackApplicationLifecycleEvents = true // Enable this to record certain application events automatically!
configuration.recordScreenViews = true // Enable this to record screen views automatically!
Analytics.setup(with: configuration)
```

#### Objective-C

```objectivec
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackApplicationLifecycleEvents = YES; // Enable this to record certain application events automatically!
configuration.recordScreenViews = YES; // Enable this to record screen views automatically!
[SEGAnalytics setupWithConfiguration:configuration];
```

**Note:** Automatically tracking lifecycle events (`Application Opened`, `Application Installed`, `Application Updated`) and screen views is optional using initialization config parameters, but highly recommended to hit the ground running with core events!

And of course, import the SDK in the files that you use it with:

#### Swift

```swift
import Segment
```

#### Objective-C

```objectivec
import Segment
```

### Configure and set up the SDK

The `SEGAnalyticsConfiguration` class provides a set of properties that control various policies of the `SEGAnalytics` instance. You initialize it with a `writeKey` as in the examples below:

#### Swift

```swift
Analytics.setup(with: AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY"))
```

#### Objective-C

```objectivec
[SEGAnalytics setupWithConfiguration:[SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"]];
```

| `writeKey` *NSString ** | Your Intilery **Write Key**. |
| ----------------------- | ---------------------------- |
|                         |                              |

### Application Lifecycle Tracking

The Intilery-iOS SDK can automatically instrument [common application lifecycle events](../schema/mobile/) such as “Application Installed”, “Application Updated” and “Application Opened”. Simply enable this option when you initialize the SDK.

#### Swift

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.trackApplicationLifecycleEvents = true
Analytics.setup(with: configuration)
```

#### Objective-C

```objectivec
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackApplicationLifecycleEvents = YES;
[SEGAnalytics setupWithConfiguration:configuration];
```

### Automatic Screen Tracking

The Intilery-iOS SDK can automatically instrument screen calls. It uses method swizzling to detect when `ViewController`s are loaded, and uses the label of the view controller (or the class name if a label is not available) as the screen name. It removes the string “ViewController” from the name if one is present.

#### Swift

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.recordScreenViews = true
Analytics.setup(with: configuration)
```

#### Objective-C

```objectivec
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.recordScreenViews = YES;
[SEGAnalytics setupWithConfiguration:configuration];
```

### Automatic Push Notification Tracking

When you set `trackPushNotifications` to `YES`, the SDK automatically sends a Track event for `Push Notification Received` and `Push Notification Tapped`.

#### Switft

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.trackPushNotifications = true
Analytics.setup(with: configuration)
```

#### Objective-C

```objectivec
EGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackPushNotifications = YES;
[SEGAnalytics setupWithConfiguration:configuration];
```

### Automatic Deep Link Tracking

When you set `trackDeepLinks` to `YES`, the SDK automatically sends a Track event for `Deep Link Opened`.

#### Swift

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.trackDeepLinks = true
Analytics.setup(with: configuration)
```

#### Objective-C

```objectivec
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackDeepLinks = YES;
[SEGAnalytics setupWithConfiguration:configuration];
```

### Flushing

You can set the number of events that should queue before flushing. Setting this to `1` will send events as they come in (i.e. not send batched events) and will use more battery. `20` by default.

#### Swift

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.flushAt = 1
Analytics.setup(with: configuration)
```

#### Objective-C

```objectivec
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.flushAt = 1;
[SEGAnalytics setupWithConfiguration:configuration];
```

You can also manually `flush` the queue:

#### Switft

```swift
Analytics.shared().alias("glenncoco")
Analytics.shared().flush()
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] alias:@"glenncoco"];
[[SEGAnalytics sharedAnalytics] flush]
```

## Data Collection

Now that the Intilery SDK and is installed, you’re ready to collect some data!

**Good to know**: For any of the methods described in this doc, you can replace the properties and traits in the code samples with variables that represent the data collected.

### Identify

Intielry's Identify method lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them.

Intilery recommends that you call Identify once when you first create the user’s account, and only call it again later when they update their traits or you change them.

**Note:** Intilery automatically assigns an `anonymousId` to users before you identify them. The `userId` is what connects anonymous activities across devices (for example, iPhone and iPad).

Example `identify` call:

#### Swift

```swift
Analytics.shared().identify("a user's id", traits: ["email": "a user's email address"])
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] identify:@"a user's id"
                                traits:@{ @"email": @"a user's email address" }];
```

| `userId` *NSString \*, optional*     | The database ID for this user. If you don’t know who the user is yet, you can omit the `userId` and just record `traits`. You can read more in the [identify reference](../schema/identify). |
| ------------------------------------ | ------------------------------------------------------------ |
| `traits` *NSDictionary \*, optional* | A dictionary of traits you know about the user, like their `email` or `name`. You can read more about traits in the [identify reference](../schema/identify). |

Intilery for iOS works on its own background thread, so it will never block the main thread for the UI or the calling thread.

Calling `- identify:` with a `userId` will write that ID to disk to be used in subsequent calls. That ID can be removed either by uninstalling the app or by calling [`reset`](#reset).

Find details on the identify method payload in the [Identify Schema documentation](../schema/identify/).

### Track

Intielry's Track method lets you record the actions your users perform. Every action triggers what we call an “event”, which can also have associated properties.

To get started, the Intilery iOS SDK can automatically track a few key common events with the [Intilery Native Mobile Schema](../schema/mobile/), such as the `Application Installed`, `Application Updated` and `Application Opened`. Enable this option during initialization.

You might also want to track events that are indicators of success for your mobile app, like **Signed Up**, **Item Purchased** or **Article Bookmarked**. Intilery recommends tracking just a few important events to start out. You can always add more later! An example Track call might look like this:

#### Swift

```swift
Analytics.shared().track("Item Purchased", properties: ["item": "Sword of Heracles", "revenue": 2.95])
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] track:@"Item Purchased"
                            properties:@{ @"item": @"Sword of Heracles", @"revenue": @2.95 }];
```

This example Track call above tells you that your user just triggered the **Item Purchased** event, and records the `item` name of “Sword of Heracles” and `revenue` of 2.95.

Track event properties can be anything you want to record. In this case, item and revenue.

The Track call has the following fields:

| `event` *NSString **                     | The name of the event. We recommend human-readable names like **Song Played** or **Status Updated**. |
| ---------------------------------------- | ------------------------------------------------------------ |
| `properties` *NSDictionary \*, optional* | A dictionary of properties for the event. If the event was `Product Added` to cart, it might have properties like `price` and `productType`. |

### Screen

The [Screen](../schema/screen/) method lets you you record whenever a user sees a screen of your mobile app, along with optional extra information about the page being viewed.

You’ll want to record a screen event an event whenever the user opens a screen in your app. This could be a view, fragment, dialog or activity depending on your app.

Example Screen call:

#### Swift

```swift
Analytics.shared().screen("Photo Feed", properties: ["Feed Type": "private"])
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] screen:@"Photo Feed"
                            properties:@{ @"Feed Type": @"private" }];
```

The `screen` call has the following fields:

| The name of the screen, for example **Signup** or **Home**.  |
| ------------------------------------------------------------ |
| A dictionary of properties for the screen. A screen **Photo Feed** might have properties like `Feed Type` or `Sort Order`. |

Find details on the Screen payload in the [Screen Schema documentation](../schema/screen/).

### AnonymousId

You can retrieve the `anonymousId` set by the library by using:

#### Swift

```swift
Analytics.shared().getAnonymousId
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] getAnonymousId];
```

### Reset

The `- reset` method clears the SDK’s internal stores for the current `user`. This is useful for apps where users can log in and out with different identities over time.

The example code below clears all information about the user.

#### Swift

```swift
Analytics.shared().reset()
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] reset];
```

**Reset does not clear events in the queue**, and any remaining events in the queue are sent the next time the app starts. You might want to call [Flush](#flushing) before you call Reset.

**Note**: Each time you call `reset`, a new AnonymousId is generated, therefore only recommended when a user logs out or similair

### Disabling Data Collection for Users who opt out

Depending on the audience for your app (for example, children) or the countries where you sell your app (for example, the EU), you might need to offer the ability for users to opt-out of analytics data collection from inside your app. You can turn off forwarding to ALL destinations including Intilery itself using the following code:

#### Swift

```swift
[[SEGAnalytics sharedAnalytics] disable];
```

```objectivec
Analytics.shared().disable()
```

Or if the user opts back in, you can re-enable data collection:

#### Swift

```swift
Analytics.shared().enable()
```

#### Objective-C

```objectivec
[[SEGAnalytics sharedAnalytics] enable];
```

If you disable the Intilery SDK in response to user opt-out, all Intilery method invocations (Track, Screen, Identify, etc) are ignored. 

## Logging

To see a trace of your data going through the SDK, you can enable debug logging with `- debug:`:

#### Swift

```swift
Analytics.debug(true)
```

#### Objective-C

```objectivec
[SEGAnalytics debug:YES];
```

Or disable it like this:

#### Swift

```swift
Analytics.debug(false)
```

#### Objective-C

```objectivec
[SEGAnalytics debug:NO];
```

By default debug logging is disabled.

## Ad Tracking and IDFA

Starting iOS 14, applications must prompt users if that app needs to collect their Identifier for Advertisers (IDFA). Going forward with analytics-ios-4.1 and later, Intilery doesn’t auto-collect IDFA. If your app or any integrations require the use of IDFA, you need to:

1. import the [AdSupport](https://developer.apple.com/documentation/adsupport) and [App Tracking Transparency](https://developer.apple.com/documentation/apptrackingtransparency) Frameworks by Apple
2. pass the below code snippet to Intilery config and start tracking events
3. prompt the user for consent and collect the IDFA

You can use the following closure snippet to pass the value to `intilery-ios` as configurations:

#### Swift

```swift
import AdSupport

...

let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")

// Enable advertising collection
configuration.enableAdvertisingTracking = true
// Set the block to be called when the advertisingID is needed
// NOTE: In iOS 14, you'll need to manually do authorization elsewhere and only when it has been authorized, return the advertisingIdentifier to intilery via the block below
configuration.adSupportBlock = { () -> String in
    return ASIdentifierManager.shared().advertisingIdentifier
}

Analytics.setup(with: configuration)
```

#### Objective-C

```objectivec
@import AdSupport;

...

SEGAnalyticsConfiguration* configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];

// Enable advertising collection
configuration.enableAdvertisingTracking = YES;
// Set the block to be called when the advertisingID is needed
// NOTE: In iOS 14, you'll need to manually do authorization elsewhere and only when it has been authorized, return the advertisingIdentifier to intilery via the block below
configuration.adSupportBlock = ^{
    return [[ASIdentifierManager sharedManager] advertisingIdentifier];
}

[SEGAnalytics setupWithConfiguration:configuration];
```

The same value for IDFA will used across all (device and cloud-mode) integrations.

**Note:** intilery-ios can continue to collect events without the IDFA until user is prompted and only upon user consent the `advertisingId` field is added to the event payload

Ad-tracking affects two keys under the `context` object of every event:

| `device.adTrackingEnabled` | `true` if SDK is setup with closure and user has consented, `false` otherwise |
| -------------------------- | ------------------------------------------------------------ |
| `device.advertisingId`     | `idfa_value` if user opts-in otherwise this key is skipped from event payload |

If your use cases don’t require the need for IDFA collection you can skip this setup and under your event context you will see not see the `device.adTrackingEnabled` and `device.advertisingId` key/value in your event payload.

### CocoaPods

Add this line in your `Podfile`:

```bash
pod 'IntileryAnalytics', :git => 'https://github.com/Intilery/intilery-analytics-ios', :branch => 'master'
```

