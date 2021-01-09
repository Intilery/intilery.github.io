---
id: android-trouble
title: Troubleshooting Intilery-android
sidebar_label: Troubleshooting Intilery-android
---

## Target has transitive dependencies that include static binaries

This was due to an old [CocoaPods limitation](https://github.com/CocoaPods/CocoaPods/issues/2926).

1. Verify you are not using any previously needed workarounds

2. Verify you are using at least CocoaPods 1.4

   ```
    $ pod --version
    1.5.3
   ```

3. Verify you are using the latest Segment pods

   ```
    $ pod outdated 
    The following pod updates are available:
      Segment-GoogleAnalytics 1.1.7 -> 1.1.7 (latest version 1.1.8)
   ```

## No events in my debugger

1. Verify you have followed all [Getting Started](./ios#getting-started) steps
2. Verify you have entered the correct writeKey for your source
   - If the writeKey you have entered is something other than a string or an empty string your app may crash
   - If the writeKey you have entered is a valid form but is not the correct value, Intielry will return an error
3. [Enable logging](./ios#logging) to confirm if call is being sent to Intilery

## Still having issues?

Contact [Segment Product Support](email:support@intilery.com) with the following information:

- The version of our SDK you are using
- Logs of the call in question
- Screenshots of the event in the Intielry Events debugger

