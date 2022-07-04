---
aid: simple
title: Simple Integration
sidebar_label: Simple Integration
---

When you implement Intilery, you add Intilery code to your website, app, or server. 
This code generates messages based on specific triggers you define.

In the simplest implementation, the code can be a snippet of Javascript that you copy 
and paste into the HTML of a website to track page views. It can also be as complex as
Intilery calls embedded in a React mobile app to send messages when the app is opened
or closed, when the user performs different actions, or when time based conditions are
met (for example “ticket reservation expired” or “cart abandoned after 2 hours”).

The best way to learn about how Intilery works is to see it in action. This tutorial walks
you though an installation using one of our libraries: either our Javascript, PHP,
or iOS library.

## Before you begin

Before you start, you need a Intilery user account and a with the required 
role/permissions to access the tag and event setup. If you’re not already part of an
organization with an Intilery account, you can [sign up here](https://www.intilery.com/?utm_source=docs).

For the quickstart portion below, you also need access to the code 
for a basic website, PHP website, or an iOS app.

**Tip**! If you don’t have any of those things, you might consider creating 
a simple [GitHub Pages website](https://pages.github.com/).

## Accessing the Javascript Tag

Go to your Intilery account, and navigate to Customers -> Tag

![img](/img/tag.png)

Add the code provided to your site, see [Installing Intilery](#installing-intilery)

**Note: ** The HTML code snippet provided should be copied and pasted exactly as
provided as it includes your clientKey

## REST API

With the `Developer Admin` policy on your role, you can create an API Key for use
with the REST API. See [API](/docs/apis/api) for more details.

## Installing Intilery

Click a tab below to see the tutorial content for the specific library you chose.

[iOS Mobile quickstart] (comming soon)

[PHP quickstart] (coming soon)

## Javascript Quickstart

### Step 1: Copy the Snippet

Installing Intilery is easy, just paste the snippet from the Javascript tag page into
the `<head>` tag of your site.

That snippet loads Analytics.js onto the page *asynchronously*, so it won’t affect 
your page load speed. Once the snippet is running on your site, page data is collected
automatically, along with campaign data.

### Step 2: Identify Users

The `identify` method is how you tell Intilery who the current user is. It includes a 
unique User ID, and any optional traits you know about them. You can read more 
about it in the [identify method reference](/docs/tag/tag1#step-2-identify-customers).

**Note:** You don’t need to call `identify` for anonymous visitors to your site. 
Intilery automatically assigns them an `anonymousId`, so just calling `page` and
`track` works just fine without `identify`.

Here’s what a basic call to `identify` might look like:

```javascript
analytics.identify('f4ca124298', {
  name: 'Michael Brown',
  email: 'mbrown@example.com'
});
```

That identifies Michael by his unique User ID (in this case, `f4ca124298`, which 
is what you know him by in your database) and labels him with `name` and `email`
traits.

**Hold up though!** When you actually put that code on your site, you need to 
replace those hard-coded trait values with the variables that represent the details 
of the currently logged-in user.

To do that, we recommend that you use a backend template to inject an `identify` 
call into the footer of **every page** of your site where the user is logged in. 
That way, no matter what page the user first lands on, they will always be identified.
You don’t need to call `identify` if your unique identifier (`userId`) is not known.

Depending on your templating language, your actual identify call might look 
something like this:

```javascript
analytics.identify(' {{user.id}} ', {
  name: '{{user.fullname}}',
  email: '{{user.email}}'
});
```

With that call in your page footer, you successfully identify every user that visits
your site.

### Step 3: Track Actions

The `track` method is how you tell Intilery about the actions your users are performing
on your site. Every action triggers what we call an “event”, which can also have 
associated properties. You can read more about `track`
in the [track method reference](/docs/tag/tag1#step-3-track-actions).

Here’s what a call to `track` might look like when a user signs up:

```javascript
analytics.track('Signed Up', {
  plan: 'Enterprise'
});
```

That’s just telling us that your user just triggered the **Signed Up** event and
chose your hypothetical `'Enterprise'` plan. Properties can be anything you 
want to record, for example:

```javascript
analytics.track('Article Bookmarked', {
  title: 'Snow Fall',
  subtitle: 'The Avalanche at Tunnel Creek',
  author: 'John Branch'
});
```

If you’re just getting started, some of the events you should track are events 
that indicate the success of your site, like **Signed Up**, 
**Item Purchased** or **Article Bookmarked**.

To get started, we recommend that you track just a few important events. 
You can always add more later!

Once you add a few `track` calls, **you’re done with this tutorial!**.
You successfully installed Analytics.js tracking. 
Check that all is ok wth the [Test that it's working](#test-that-its-working) section below

### iOS Mobile Quickstart

### Step 1: Install the SDK

The recommended way to install Intilery for iOS is 
using [Cocoapods](http://cocoapods.org/), since it means you can create a build 
with specific bundled destinations, and because it makes it simple to install and upgrade.

First, add the `Intilery` dependency to your `Podfile` by adding the following line:

```
pod 'Intilery', '~> 3.0'
```

Then in your application delegate’s `- application:didFinishLaunchingWithOptions:`
method, set up the SDK like so:

```objective-c
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackApplicationLifecycleEvents = YES; // Enable this to record certain application events automatically!
configuration.recordScreenViews = YES; // Enable this to record screen views automatically!
[SEGAnalytics setupWithConfiguration:configuration];
```

**Note**: YOUR_WRITE_KEY can be found in the JavaScript tag in the
`annalytics.load('YOUR_WRITE_KEY')` line

**Tip**: You don’t *need* to use initialization config parameters to track lifecycle
events (`Application Opened`, `Application Installed`, `Application Updated`) and 
screen views automatically, but we highly recommend that you do so you can start 
off already tracking some important core events.

And of course, import the SDK in the files that you use it by adding the following line:

```objective-c
#import <Intilery/SEGAnalytics.h>
```

### Step 2: Identify Users

The `identify` method is how you tell Intilery who the current user is. It takes a 
unique User ID, and any optional traits you know about them. You can read more 
about it in the [identify reference](/docs/app/ios#identify).

Here’s what a basic call to `identify` might look like:

```objective-c
[[SEGAnalytics sharedAnalytics] identify:@"f4ca124298"
                                  traits:@{ @"name": @"Michael Brown",
                                    @"email": @"mbrown@example.com" }];
```

That call identifies Michael by his unique User ID (`f4ca124298`, which is the one
you know him by in your database) and labels him with `name` and `email` traits.

**Hold up though!** When you actually put that code in your iOS app, you need
to replace those hard-coded trait values with the variables that represent the details
of the currently logged-in user.

Once you’ve added an `identify` call, you’re ready to move on to tracking!

### Step 3: Track Actions

The `track` method is how you tell Intilery about the actions your users are 
performing in your app. Every action triggers what we call an “event”, which 
can also have associated properties. You can read more about `track` in 
the [track method reference](/docs/app/ios#track).

To get started, the Intilery iOS SDK can automatically track a few important common
events, such as **Application Installed**, **Application Updated** and
**Application Opened**. You can enable this option during initialization by adding
the following lines.

```swift
SEGAnalyticsConfiguration *configuration = [SEGAnalyticsConfiguration configurationWithWriteKey:@"YOUR_WRITE_KEY"];
configuration.trackApplicationLifecycleEvents = YES;
[SEGAnalytics setupWithConfiguration:configuration];
```

You should also track events that indicate success in your mobile app, like
**Signed Up**, **Item Purchased** or **Article Bookmarked**. 
We recommend tracking just a few important events. You can always add more later!

Here’s what a `track` call might look like when a user signs up:

```swift
[[SEGAnalytics sharedAnalytics] track:@"Signed Up"
                           properties:@{ @"plan": @"Enterprise" }];
```

That tells us that your user triggered the **Signed Up** event, and chose your
hypothetical `'Enterprise'` plan. Properties can be anything you want to record,
for example:

```swift
[[SEGAnalytics sharedAnalytics] track:@"Article Bookmarked"
                           properties:@{
                               @"title": @"Snow Fall",
                               @"subtitle": @"The Avalanche at Tunnel Creek",
                               @"author": @"John Branch" }];
```

Once you’ve added a few `track` calls, **you’re set up!** You successfully 
instrumented your app, and can enable destinations from your Segment workspace.

## Test that it’s working

Once you’ve set up your Intilery tag, and instrumented at least one call,
you can look at the Event Debugger page in the Intilery app to check that
it produces data as you expected.

The Event Debugger is a real-time tool that helps you confirm that API calls made
from your website, mobile app, or servers arrive at the Intilery platform, so you
can quickly see how calls are received by Intilery  so you can troubleshoot quickly
without having to wait for data processing.

![img](/img/event.png)

The Debugger is separate from your Intilery account's data pipeline, and is not an
exhaustive view of all the events ever sent to your Intilery account. The Debugger
only shows a sample of the events that the Source receives in real time, with a cap
of the last 20 event. The Debugger is a great way to test specific parts of your 
implementation to validate that events are being fired successfully and arriving at Intilery.

The Debugger shows a live stream of sampled events arriving at the Source, but 
you can also toggled from “Live” to “Pause”, to stop the stream and prevent it from
displaying new events. Events continue to arrive to Intilery, they are just not 
displayed in the Debugger.

You can filter for spectic events that you know are sent to Intiery.

Three views are available when viewing a payload:

- The **Raw view** is the complete JSON object Intilery received from the calls
  you sent. These calls include all the details about what is being tracked: 
  timestamps, properties, traits, ids,
  and [contextual information Intilery automatically collects](/docs/schema/common/#context-fields-automatically-collected) the moment the data is sent.
- The **Schema view** is a recreation of the API call you made that was sent to Intilery.
- The **Analytics view** is a recreation of the JavaScript call that was called 
  **Note:** the analytics tab is shown even if the call was made from a non 
  JavaScript source, such as REST or iOS.

We’ll talk more about debugging and troubleshooting in a later section
