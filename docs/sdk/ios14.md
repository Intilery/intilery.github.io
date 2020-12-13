---
id: ios14
title: iOS 14 Guide
sidebar_label: iOS 14 Guide
---

Note:** You should update your `intilery-ios` and device-mode destinations to adapt to iOS 14 changes explained in this guide.

In June 2020, Apple made several privacy-related announcements at WWDC20 about its upcoming iOS 14 release, including [changes to the collection and use of Identifier for Advertising (IDFA)](https://developer.apple.com/app-store/user-privacy-and-data-use/). These changes require developers to ask for user consent *before* collecting IDFA to track users across multiple applications.

Intilery fundamentally agrees with Apple’s stance. The world is becoming more privacy-conscious, and we believe that every single one of us will have right to own our own data. The best companies are the ones using this data in responsible ways.

Apple released iOS 14 in the autumn of 2020, but [delayed the IDFA changes until early 2021](https://developer.apple.com/news/?id=hx9s63c5&1599152522). Segment products, including Connections, Protocols, Personas (including Identity Resolution), and Privacy, Data Lakes, and Cloud Sources, do not rely on IDFA and so are not affected by these platform changes. However, Segment’s iOS Source SDK (`analytics-ios`) and any destinations that previously used IDFA require that you update them so they continue to work with iOS 14.

Intilery updated the iOS Source SDK (`intilery-ios`) and any affected destinations so they support Apple’s iOS platform changes. The Intilery iOS SDK (`intilery-ios`) has been updated to version 4 with v4.1 released as stable.

This major version release includes the following (API compatible) updates:

## Intilery no longer automatically collects IDFA.

Previously, the Intilery SDK collected the IDFA as the `context.device.advertisingId` value for each event if the user enabled ad-tracking. The Intilery SDK no longer automatically collects the IDFA after version 4. (If your implementation requires the IDFA for compatibility with specific destinations, see the section below.)

Due to this major change, **you should upgrade to the latest stable version of `intilery-ios`**. v4.1

## You can manually pass the IDFA to the Intilery SDK.

If you need to collect the user’s IDFA you can follow the steps for Ad Tracking and IDFA in the [iOS documentation](./ios#ad-tracking-and-idfa) to collect and pass IDFA as a configuration item to the Segment SDK.

Remember, under iOS 14, applications can only collect the IDFA from a user if they consent to make it available. The Intilery example code, used along with Apple’s documentation, make it easy for developers to collect and pass the IDFA to the Intilery SDK as a configuration item on app load.

