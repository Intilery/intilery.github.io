---
id: ios-quickstart
title: Quickstart iOS
sidebar_label: iOS Quickstart tutorial
---

This tutorial gets you started sending data from your iOS app to Intilery.

If you want to dive deeper at any point, check out the [iOS Library Reference](./ios).

## Before you begin

## Client Key(s)

Client Key(s) are unique to each Client and Account, the client key for your account(s) are included in the tag snippet within the application. in the tag section.

**Note**: YOUR_WRITE_KEY canbe found in the JavaScript tag in the `annalytics.load('YOUR_WRITE_KEY')` line

**Note:** If you have multiple accounts with Intilery, each tag has a seperate client key, obtain the tag snippet for each account by switching between accounts when you log in to Intilery.

## Step 1: Install the SDK

The recommended way to install Analytics for iOS is using [Cocoapods](http://cocoapods.org/), since it means you can create a build with specific bundled destinations, and because it makes it simple to install and upgrade.

First, add the `Analytics` dependency to your `Podfile` by adding the following line:

```
pod 'Analytics', '~> 4.1'
```

Then in your application delegate’s `- application:didFinishLaunchingWithOptions:` method, set up the SDK like so:

#### Switft

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.trackApplicationLifecycleEvents = true // Enable this to record certain application events automatically!
configuration.recordScreenViews = true // Enable this to record screen views automatically!
Analytics.setup(with: configuration)
```

#### Objective-C

```objective-c
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackApplicationLifecycleEvents = YES; // Enable this to record certain application events automatically!
configuration.recordScreenViews = YES; // Enable this to record screen views automatically!
[SEGAnalytics setupWithConfiguration:configuration];
```

**Tip**: You don’t need to use initialization config parameters to track lifecycle events (`Application Opened`, `Application Installed`, `Application Updated`) and screen views automatically, but we highly recommend that you do so you can start off already tracking some important core events. See [the track call info](#track) for more info.

Import the SDK in the files that you use it by adding the following line:

#### Swift

```swift
import Segment
```

#### Objective-C

```objective-c
#import <Analytics/SEGAnalytics.h>
```

## Step 3: Identify Users

**Good to know**: For any of the different methods described in this quickstart, you can replace the properties and traits in the code samples with variables that represent the data collected.

The `identify` method informs Intilery who the current user is. It takes a unique User ID, and any optional traits you know about them. You can read more about it in the [identify reference](./ios#identify).

Here’s what a basic call to `identify` might look like:

#### Swift

```swift
Analytics.shared().identify("f4ca124298", traits: ["name": "Michael Smith", "email": "msmith@example.com"])
```

#### Objective-C

```objective-c
[[SEGAnalytics sharedAnalytics] identify:@"f4ca124298"
                                    traits:@{ @"name": @"Michael Brown",
                                    @"email": @"mbrown@example.com" }];
```

That call identifies Michael by his unique User ID (`f4ca124298`, which is the one you know him by in your database) and labels him with `name` and `email` traits.

**Hold up though!** When you put that code in your iOS app, you need to replace those hard-coded trait values with the variables that represent the details of the currently logged-in user.

Once you’ve added an `identify` call, you’re ready to move on to tracking!

## Step 4: Track Actions

The `track` method is tells Intilery about the actions your users perform in your app. Every action triggers an “event”, which can also have associated properties. You can read more about `track` in the [track method](./ios#track) reference.

To get started, the Intilery iOS SDK can automatically track a few important common events, such as **Application Installed**, **Application Updated** and **Application Opened**. You can enable this option during initialization by adding the following lines.

#### Swift

```swift
AnalyticsConfiguration configuration = AnalyticsConfiguration(writeKey:"YOUR_WRITE_KEY")
configuration.trackApplicationLifecycleEvents = true
Analytics.setup(with: configuration)
```

#### Objective-C

```objective-c
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackApplicationLifecycleEvents = YES;
[SEGAnalytics setupWithConfiguration:configuration];
```

You should also track events that indicate success in your mobile app, like **Signed Up**, **Item Purchased** or **Article Bookmarked**. We recommend tracking just a few important events. You can always add more later!

Here’s what a `track` call might look like when a user signs up:

#### Swift

```swift
Analytics.shared().track("Signed Up", properties: ["plan": "Enterprise"])
```

#### Objective-C

```objective-c
[[SEGAnalytics sharedAnalytics] track:@"Signed Up"
                            properties:@{ @"plan": @"Enterprise" }];
```

That tells us that your user triggered the **Signed Up** event, and chose your hypothetical `'Enterprise'` plan. Properties can be anything you want to record, for example:

#### Swift

```swift
Analytics.shared().track("Article Bookmarked", properties: ["title": "Snow Fall", "subtitle": "The Avalanche at Tunnel Creek", "author": "John Branch"])
```

#### Objective-C

```objective-c
[[SEGAnalytics sharedAnalytics] track:@"Article Bookmarked"
                            properties:@{
                                @"title": @"Snow Fall",
                                @"subtitle": @"The Avalanche at Tunnel Creek",
                                @"author": @"John Branch" }];
```

Once you’ve added a few `track` calls, **you’re set up!** You successfully instrumented your app. However, there are a few important things to know about for mobile app instrumentation, so read on!

## Step 5: Flushing

By default, Intilery sends (“flushes”) events from the iOS library in batches of `20`, however this is configurable. You can set the `flushAt` value to change the batch size, or you can set it to `1` to disable batching completely.

**Note**: When you disable batching, Intilery sends events as they occur. This increases battery use.

#### Swift

```swift
let configuration = AnalyticsConfiguration(writeKey: "YOUR_WRITE_KEY")
configuration.flushAt = 1
Analytics.setup(with: configuration)
```

#### Objective-C

```objective-c
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.flushAt = 1;
[SEGAnalytics setupWithConfiguration:configuration];
```

You can also manually call `flush` in your code to send all the messages in the queue:

#### Swift

```swift
Analytics.shared().alias("glenncoco")
Analytics.shared().flush()
```

#### Objective-C

```objective-c
[[SEGAnalytics sharedAnalytics] alias:@"glenncoco"];
[[SEGAnalytics sharedAnalytics] flush]
```

## What’s Next?

We just walked through the quickest way to get started with Intilery using Analytics for iOS. You might also want to check out our full [Analytics for iOS reference](./ios) to see what else is possible, or read about the [Tracking API methods](../apis/api1) to get a sense for the bigger picture.