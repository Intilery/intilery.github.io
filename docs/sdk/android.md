---
id: android
title: Android Mobile SDK
sidebar_label: Android Mobile SDK
---

Analytics for Android makes it simple to send your data to Intilery.

All of Intilery's client sources are open-source, so you can [view Analytics for Android on GitHub](https://github.com/Intilery/analytics-android)

Want to stay updated on releases? Subscribe to the [release feed](https://github.com/Intilery/analytics-android/releases.atom).

Analytics for Android only supports any Android device running API 14 (Android 4.0) and higher. This includes Amazon Fire devices.

## Analytics-Android and Unique Identifiers

One of the most important parts of any analytics platform is the ability to consistently and accurately identify users. To do this, the platform must assign and persist some form of identification on the device, so you can analyze user actions effectively. This is especially important for funnel conversion analysis and retention analysis.

Naturally the Analytics SDK needs a unique ID for each user. The very first time an Android app that uses Intilery launches, the Intilery SDK generates a UUID and saves it on the device’s disk. This is used as the `anonymousId` and stays constant for the user on the device. To create a new user on the same device, call `reset` on the Analytics client.

The Intilery SDK also collects the [Advertising ID](https://developer.android.com/google/play-services/id.html) provided by Play Services. Make sure the Play Services Ads library is included as a dependency for your application. This is the ID that should be used for advertising purposes. This value is set to `context.device.advertisingId`.

Intilery also collects the [Android ID](http://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID) as `context.device.id`. Some destinations rely on this field being the Android ID, so double check the destinations’ vendor documentation if you choose to override the default value.

## API call queuing in Analytics-Android

The Analytics-Android library queues API calls and uploads them in batches. This limits the number of network calls made, and helps save battery on the user’s device.

When you send an event, the library saves it to disk. When the queue size reaches the maximum size you specify (20 by default), the library flushes the queue and uploads the events in a single batch. Since the data is saved immediately, it isn’t lost even if the app is killed or the operating system crashes.

### Queue persistance in Analytics-Android

Analytics-Android uses a persistent disk queue, so the events persist even when the app is killed. On app restart, the library reads them from disk and uploads the events. The queue works on top of [Tape](http://square.github.io/tape/), which is designed to even survive process and system crashes.

Analytics-Android saves up to 1000 calls on disk, and these never expire.

## Getting Started

### Step 1: Install the Library

The easiest way to install the Analytics-Android library is using a build system like Gradle. This makes it simple to upgrade versions and add destinations. The library is distributed using [Maven Central](http://maven.org/). Just add the `analytics` module to your `build.gradle` file as in the example lines below:

```
dependencies {
  implementation 'com.intilery.analytics.android:analytics:1.0.0'
  }
```

### Step 2. Initialize the Client

We recommend initializing the client in your `Application` subclass. You’ll need your [Intilery Write Key](/docs/tag/tag1#client-keys) for your Android Source.

#### Java

```java
// Create an analytics client with the given context and Intilery write key.
Analytics analytics = new Analytics.Builder(context, YOUR_WRITE_KEY)
  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!
  .recordScreenViews() // Enable this to record screen views automatically!
  .build();

// Set the initialized instance as a globally accessible instance.
Analytics.setSingletonInstance(analytics);
```

#### Kotlin

```kotlin
// Create an analytics client with the given context and Intilery write key.
val analytics = Analytics.Builder(context, YOUR_WRITE_KEY)
  .trackApplicationLifecycleEvents() // Enable this to record certain application events automatically!
  .recordScreenViews() // Enable this to record screen views automatically!
  .build()

// Set the initialized instance as a globally accessible instance.
Analytics.setSingletonInstance(analytics);
```

**Notes**:

- You can automatically track lifecycle events such as `Application Opened`, `Application Installed`, `Application Updated` to start quickly with core events. These are optional, but highly recommended.

### Customize the Client (Optional)

The entry point of the library is through the `Analytics` class. As you might have seen in the quickstart, here’s how you initialize the Analytics client with it’s defaults.

#### Java

```java
Analytics analytics = new Analytics.Builder(context, writeKey).build();
```

#### Kotlin

```kotlin
val analytics = Analytics.Builder(context, writeKey).build()
```

The `Analytics.Builder` class lets you customize settings for the Analytics client, including things like the flush interval. Refer to the Javadocs for details on customizable parameters.

We also maintain a global default instance which is initialized with defaults suitable to most implementations.

#### Java

```java
// You can also register your custom instance as a global singleton.
Analytics.setSingletonInstance(analytics);
Analytics.with(context).track(...);
```

#### Kotlin

```kotlin
// You can also register your custom instance as a global singleton.
Analytics.setSingletonInstance(analytics)
Analytics.with(context).track(...)
```



In general, Intilery recommends that you use the Builder method because it provides the most flexibility. Remember you can call `Analytics.setSingletonInstance` only *ONCE*, so it’s best to put the initialization code inside your custom Application class.

#### Java

```java
public class MyApp extends Application {
  @Override public void onCreate() {
    Analytics analytics = new Analytics.Builder(context, writeKey).build();
    Analytics.setSingletonInstance(analytics);

    // Safely call Analytics.with(context) from anywhere within your app!
    Analytics.with(context).track("Application Started");
  }
}
```

#### Kotlin

```kotlin
class MyApp : Application() {
  override fun onCreate() {
    val analytics = Analytics.Builder(context, writeKey).build()
    Analytics.setSingletonInstance(analytics)

    // Safely call Analytics.with(context) from anywhere within your app!
    Analytics.with(context).track("Application Started")
  }
}
```



Once you initialize an Analytics client, you can safely call any of its tracking methods from any thread. These events are dispatched asynchronously to the Intilery servers.

**Note:** You should only ever initialize *ONE* instance of the Analytics client. These are expensive to create and throw away, and in most cases, you should stick to Intilery’s singleton implementation to make using the SDK easier.

### Step 3. Add Permissions

Ensure that the necessary permissions are declared in your application’s `AndroidManifest.xml`.

```xml
 <!-- Required for internet. -->
<uses-permission android:name="android.permission.INTERNET"/>
```

## Data Collection - The Basic Intilery API calls

The Intilery API calls include:

- [Identify](#identify)
- [Track](#track)
- [Screen](#screen)

### Identify

**Good to know**: For any of the different methods described in this doc, you can replace the properties and traits in the code samples with variables that represent the data collected.

Identify calls let you tie a user to their actions, and record traits about them. It includes a unique User ID and any optional traits you know about them.

Example `identify` call:

#### Java

```java
Analytics.with(context).identify("a user's id", new Traits().putName("John Doe"), null);
```

#### Kotlin

```kotlin
Analytics.with(context).identify("a user's id", Traits().putName("John Doe"), null)
```



Intilery recommends that you make an Identify call once when the user’s first creates an account, and only using the Identify call later when their traits change. Intilery remembers the previous userIDs and merges the new traits with the old ones.

#### Java

```java
// Initially when you only know the user's name
Analytics.with(context).identify(new Traits().putName("Michael Bolton"));

// Sometime later in your app when the user gives you their email
Analytics.with(context).identify(new Traits().putEmail("mbolton@example.com"));
```

#### Kotlin

```kotlin
// Initially when you only know the user's name
Analytics.with(context).identify(Traits().putName("Michael Bolton"))

// Sometime later in your app when the user gives you their email
Analytics.with(context).identify(Traits().putEmail("mbolton@example.com"))
```

Remember, you can replace the properties and traits in the code samples with variables that represent the data you actually collected.

The Identify call has the following fields:

| `userId` *String,optional*    | The database ID for this user.                               |
| ----------------------------- | ------------------------------------------------------------ |
| `traits` *Traits,optional*    | A map of traits about the user, such as their name, email, address, etc. |
| `options` *Options, optional* | Extra options                                                |

The Android library currently automatically sends the `userId` and `anonymousId` as `traits`. Additionally, `traits` are sent in the `context.traits` field with every message.

### Track

The Track call lets you record the actions your users perform. Every action triggers what we call an “event”, which can also have associated properties.

To get started, the Analytics-Android SDK can automatically tracks a few key common events using the Intilery [Native Mobile Spec](/docs/schema/mobile), such as the `Application Installed`, `Application Updated` and `Application Opened`. You can enable this option during initialization.

You might also want to track events that indicate success for your mobile app, like **Signed Up**, **Item Purchased** or **Article Bookmarked**. Intilery recommends tracking just a few important events. You can always add more later!

Example `track` call:

#### Java

```java
Analytics analytics = new Analytics.Builder(context, writeKey)
  .trackApplicationLifecycleEvents()
  .build();

Analytics.with(context).track("Product Viewed", new Properties().putValue("name", "Moto 360"));
```

#### Kotlin

```kotlin
val analytics = Analytics.Builder(context, writeKey)
  .trackApplicationLifecycleEvents()
  .build()

Analytics.with(context).track("Product Viewed", Properties().putValue("name", "Moto 360"))
```



This example Track call tells us that your user just triggered the **Product Viewed** event with a name of “Moto 360.”

The Track call properties can be anything you want to record, for example:

### Java

```java
Analytics.with(context).track("Purchased Item", new Properties().putValue("sku", "13d31").putRevenue(199.99));
```

#### Kotlin

```kotlin
Analytics.with(context).track("Purchased Item", Properties().putValue("sku", "13d31").putRevenue(199.99))
```

The Track call includes the following fields:

| `name` *String,required*           | A name for the tracked action.                               |
| ---------------------------------- | ------------------------------------------------------------ |
| `properties` *Properties,optional* | A map of properties for this action, e.g. revenue if the action was a purchase. |
| `options` *Options,optional*       | Options                                                      |

### Screen

The [Screen](/docs/schema/screen/) method lets you you record whenever a user sees a screen of your mobile app, along with optional extra information about the page being viewed.

You’ll want to record a screen event an event whenever the user opens a screen in your app. This could be a view, fragment, dialog or activity depending on your app.

Not all services support screen, so when it’s not supported explicitly, the screen method tracks as an event with the same parameters.

Example `screen` call:

### Java

```java
// category "Feed" and a property "Feed Length"
Analytics.with(context).screen("Feed", new Properties().putValue("Feed Length", "26"));

// no category, name "Photo Feed" and a property "Feed Length"
Analytics.with(context).screen(null, "Photo Feed", new Properties().putValue("Feed Length", "26"));

// category "Smartwatches", name "Purchase Screen", and a property "sku"
Analytics.with(context).screen("Smartwatches", "Purchase Screen", new Properties().putValue("sku", "13d31"));
```

#### Kotlin

```kotlin
// category "Feed" and a property "Feed Length"
Analytics.with(context).screen("Feed", Properties().putValue("Feed Length", "26"))

// no category, name "Photo Feed" and a property "Feed Length"
Analytics.with(context).screen(null, "Photo Feed", Properties().putValue("Feed Length", "26"))

// category "Smartwatches", name "Purchase Screen", and a property "sku"
Analytics.with(context).screen("Smartwatches", "Purchase Screen", Properties().putValue("sku", "13d31"))
```



The `screen` call has the following fields:

| `category` *String,optional**      | A category for the screen. Optional if name is provided. |
| ---------------------------------- | -------------------------------------------------------- |
| `name` *String,optional**          | A name for the screen. Optional if category is provided. |
| `properties` *Properties,optional* | A map of properties for this screen.                     |
| `options` *Options,optional*       | Options                                                  |

Find details on the Screen payload in [the Intilery Screen call spec](/docs/schema/screen/).

#### Automatic Screen Tracking

The Intilery SDK can automatically instrument screen calls, using the label of the activity you declared in the `manifest` as the screen’s name. Fragments and views do not trigger screen calls automatically, however you can manually call the Screen method for these.

#### Java

```java
Analytics analytics = new Analytics.Builder(context, writeKey)
  .recordScreenViews()
  .build();
```

#### Kotlin

```kotlin
val analytics = Analytics.Builder(context, writeKey)
  .recordScreenViews()
  .build()
```

## Context

Context is a dictionary of extra information you can provide about a specific API call. You can add any custom data to the context dictionary that you want to have access to in the raw logs. Some keys in the context dictionary [have semantic meaning and are collected for you automatically](/docs/schema/common#context), such as information about the user’s device.

#### Java

```java
AnalyticsContext analyticsContext = Analytics.with(context).getAnalyticsContext();
analyticsContext.putValue(...).putReferrer(...).putCampaign(...);
```

#### Kotlin

```kotlin
val analyticsContext = Analytics.with(context).analyticsContext
analyticsContext.putValue(...).putReferrer(...).putCampaign(...)
```

You can read more about these special fields in the [Intilery Common spec documentation](/docs/schema/common#context).

To alter data specific to the device object you can use the following:

### Java

```java
AnalyticsContext analyticsContext = Analytics.with(context).getAnalyticsContext();
analyticsContext.device().putValue("advertisingId", "1");
```

#### Kotlin

```kotlin
val analyticsContext = Analytics.with(context).analyticsContext
analyticsContext.device().putValue("advertisingId", "1")
```

To opt out of automatic data collection, clear the context after initializing the client. Do this *BEFORE* you send any events.

#### Java

```java
Analytics analytics = new Analytics.Builder(context, writeKey).defaultOptions(defaultOptions).build();
AnalyticsContext context = getAnalyticsContext();
context.clear();
```

### Kotlin

```kotlin
val analytics = Analytics.Builder(context, writeKey).defaultOptions(defaultOptions).build()
val context = analytics.analyticsContext
context.clear()
```

## Utility methods

### Retrieve AnonymousId

You can retrieve the `anonymousId` set by the library by using:

#### Java

```java
Analytics.with(context).getAnalyticsContext().traits().anonymousId();
```

### Kotlin

```kotlin
Analytics.with(context).analyticsContext().traits().anonymousId()
```

### Reset

The `reset` method clears the SDK’s internal stores for the current user and group. This is useful for apps where users log in and out with different identities on the same device over time.

The example code below clears all information about the user.

### Java

```java
Analytics.with(context).reset();
```

#### Kotlin

```kotlin
Analytics.with(context).reset()
```

**Reset does not clear events in the queue**, and any remaining events in the queue are sent the next time the app starts. You might want to call [Flush](#flush) before you call Reset.

**Note**: When you call `reset`, the next time the app opens Intilery generates a new AnonymousId. This can impact the number of Monthly Tracked Users (MTUs) you process.

### Collecting Stats

Local device stats help you quickly see how many events you sent to Intilery, the average time bundled destinations took to run, and similar metrics.

#### Java

```java
StatsSnapshot snapshot = Analytics.with(context).getSnapshot();
log(snapshot.integrationOperationAverageDuration);
log(snapshot.flushCount);
```

#### Kotlin

```kotlin
val snapshot = Analytics.with(context).snapshot()
log(snapshot.integrationOperationAverageDuration)
log(snapshot.flushCount)
```

### Adding debug logging

If you run into issues while using the Android library, you can enable logging to help trace the issue. Logging also helps you see how long destinations take to complete their calls so you can find performance bottlenecks.

The logging is enabled by default in the default singleton instance if your application is running in `debug` mode. If you use a custom instance, attach a `LogLevel` to the `Builder` and set the logging level there, as in the example below.

#### Java

```java
Analytics analytics = new Analytics.Builder(context, writeKey).logLevel(LogLevel.VERBOSE)...build();
```

#### Kotlin

```kotlin
val analytics = Analytics.Builder(context, writeKey).logLevel(LogLevel.VERBOSE)...build()
```

You can choose to disable logging completely (`LogLevel.NONE`), enable basic logging for the SDK (`LogLevel.BASIC`), enable basic logging for Device-mode destination (`LogLevel.INFO`), or simply log everything (`LogLevel.VERBOSE`).

Intilery recommends that you turn logging off in *production* modes of your app.

## Privacy methods

### Opt-out

Depending on the audience for your app (for example, children) or the countries where you sell your app (for example, the EU), you may need to offer the ability for users to opt-out of analytics data collection inside your app. You can turn off ALL destinations including Intilery itself:

#### Java

```java
Analytics.with(this).optOut(true);
```

### Kotlin

```kotlin
Analytics.with(this).optOut(true)
```

Set the opt-out status for the current device and analytics client combination. This flag persists across device reboots, so you can call it once in your application, such as in a screen where a user can opt out of analytics tracking.

### Anonymizing IP

The Intilery iOS, Android, Analytics.js and Xamarin libraries automatically derive and set the IP address for events recorded on the user’s device. The IP is not collected on the device itself, but instead is filled in by Intilery’s servers when they receive a message.

To prevent Intilery from recording the users’ IP in destinations and S3, you can set the event’s `context.ip` field to `0.0.0.0`. The Intilery servers won’t overwrite this data if it comes from the client, and so do not record the IP address of the client.

## Formatting Order Completed Events

Intilery’s Android library provides several helper methods so you can easily construct both properties objects and products lists so your Order Completed events conform to the Intilery [ecommerce specification](/docs/schema/retail). Here’s a code example:

#### Java

```java
import com.segment.analytics.Analytics;
import com.segment.analytics.Properties;
import com.segment.analytics.Properties.Product;

// initialize a new properties object
Properties properties = new Properties();

// add orderId and revenue to the properties object
properties.putValue("orderId", String orderId).putValue("revenue", double revenue);

// initialize a new product
Product product1 = new Product(String id, String sku, double price);

// initialize a second product
Product product2 = new Product(String id, String sku, double price);

// add products to the properties object
properties.putProducts(product1, product2);

// pass the properties object into your Order Completed event
Analytics.with(context).track("Order Completed", properties);
```

#### Kotlin

```kotlin
import com.segment.analytics.Analytics
import com.segment.analytics.Properties
import com.segment.analytics.Properties.Product

// initialize a new properties object
val properties = Properties();

// add orderId and revenue to the properties object
properties.putValue("orderId", orderId).putValue("revenue", revenue)

// initialize a new product
Product product1 = Product(id, sku, price)

// initialize a second product
Product product2 = Product(id, sku, price)

// add products to the properties object
properties.putProducts(product1, product2)

// pass the properties object into your Order Completed event
Analytics.with(context).track("Order Completed", properties)
```

Find details on **best practices in event naming** as well as the **Track method payload** in the [Intilery Track call spec](/docs/schema/track).