---
id: android-faq
title: Android Frequently Asked Questions
sidebar_label: Android FAQs
---

## What is the latest version of the library?

Analytics-Android is published to [Maven Central](https://search.maven.org/search?q=intilery%20analytics") where you can see all published releases.

## Where is the changelog for the library?

You can see a changelog in the [GitHub repository](https://github.com/Intilery/analytics-android/blob/master/CHANGELOG.md), detailing the changes made in each release.

## Can I use the library with Maven?

Yes! You can use the Intilery library with Maven, or any other custom build system because the `core` SDK is simply a JAR.

```xml
<dependency>
    <groupId>com.intilery.analytics.android:analytics</groupId>
    <artifactId>analytics</artifactId>
    <version>LATEST</version>
</dependency>
```

## How big is the Intilery SDK?

The core Intilery SDK is extremely lightweight! It contains just under 1k methods, the JAR weighs in at 123kb and the dex size is 113kb.

## How can I swap out debugging and production keys?

If you’re using Gradle and build flavors, you can provide an `analytics.xml` for each configuration with different Writekeys in each.

For other cases, you can also construct custom instances of the client and pass in a different key for each instance. Set it as the singleton instance, and use the same API everywhere else.

```java
class MyApp extends Application {
  @Override public void onCreate() {
    Analytics analytics;
    if(BuildConfig.DEBUG) {
      analytics = new Analytics.Builder(this, debugWriteKey)...build();
    } else {
      analytics = new Analytics.Builder(this, releaseWriteKey)...build();
    }
    Analytics.setSingletonInstance(analytics); // Must be called before any calls to Analytics.with(context)

    // Now Analytics.with will return the custom instance
    Analytics.with(this).track("App Launched");
  }
}
```

## How should I configure Proguard?

For the Intilery SDKs, you can add the following snippet to your Proguard configuration:

```java
-keep class com.segment.analytics.** { *; }
-keep class androidx.lifecycle.DefaultLifecycleObserver
```

You should also check the vendor documentation for any Device-mode destinations you are bundling, to see if they include any recommended Proguard configurations.

------

### Need support?

Questions? Problems? Need more info? Contact us, and we can help!

[Visit our Support page](https://segment.com/help/contact/)

## Why have you forked Segment?

We forked the segment client libraries to give you the choice of using segment to send data to Intilery and a Segment destination, or if you do not use Segment you can send the data directly to Intilery with our forked libraries and SDKs. If in the future you decide to use Segment, the change should be as simple as using the Segment library/sdk instead of the Intilery library/sdk