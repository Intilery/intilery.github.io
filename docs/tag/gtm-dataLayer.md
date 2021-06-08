---
id: gtm-datalayer
title: Google Tag Manager Data Layer
sidebar_label: Google Tag Manager Data Layer
---

[Google Tag Manager](https://support.google.com/tagmanager) (GTM) is a tag management system that allows you to quickly and easily update tags and code snippets on your website or mobile apps. Once you add the Tag Manager snippet to your website or mobile app, you can configure tags using a web-based user interface without having to alter and deploy additional code. This reduces errors and frees you from having to involve a developer whenever you need to make changes. The Google Tag Manager Destination is open-source. You can browse the code [on GitHub](https://github.com/segment-integrations/analytics.js-integration-google-tag-manager).

Google Tag Manager functions best when deployed alongside a data layer, if enabled in your Intilery tag, Intilery will publish events to the dataLayer.

[Data Layer](https://support.google.com/tagmanager/answer/6164391)

To enable publishing of events to the GTM dataLayer, go to the tag page in Intilery, enable GTM dataLayer integration and enter the container-ID of your GTM container.

## Identify

If you’re not familiar with the Intilery Schema, take a look to understand what the [Identify method](/docs/schema/identify) does. An example call would look like:

```javascript
analytics.identify({
  nickname: 'Joe',
  favoriteCompiler: 'A-0',
  industry: 'Computer Science'
});
```

When you make an Identify call in with GTM enabled through Intilery, we will push the event data to the GTM `dataLayer`.

For example, if you make this `track` call:

```javascript
analytics.identify('12091906-01011992', {
  firstName: 'Joe',
  lastName: 'Bloggs',
  email: 'joe.bloggs@example.com',
  "marketingPreferences": { 
      "channels": [ 
        { "channel": "email", "subscribed": true },
        { "channel": "sms", "subscribed": true },
        { "channel": "whatsapp", "subscribed": false },
        { "channel": "facebook", "subscribed": false },
        { "channel": "push", "subscribed": false }
      ] 
    }
});
```

We will pass it to the `dataLayer` as an object like this:

```json
{
  "event": "identify",
  "userId": "12091906-01011992",
  "traits": {
  	"firstName": "Joe",
  	"lastName": "Bloggs",
  	"email": "joe.bloggs@example.com",
  	"marketingPreferences": { 
     	 "channels": [ 
       	{ "channel": "email", "subscribed": true },
        { "channel": "sms", "subscribed": true },
        { "channel": "whatsapp", "subscribed": false },
        { "channel": "facebook", "subscribed": false },
        { "channel": "push", "subscribed": false }
      ] 
    }
	}
}
```

### Querystring API

***Note:*** if you use any of the [querystring API](/docs/tag/reference#querystring-api) methods the identify/track data will be sent to the dataLayer accordingly, e.g.

visiting https://www.yoursite.com/?ajs_uid=1234-5678

will result an identify event being sent to the dataLayer, e.g.

```json5
{
  "event": 'identify',
  "userId": '12091906-01011992',
  "traits": {
    // <if traits previously set, these are included>
  }
}
```



## Track

If you’re not familiar with the Intilery Schema, take a look to understand what the [Track method](/docs/schema/track) does. An example call would look like:

```javascript
analytics.track('Article Completed', {
  title: 'How to Create a Tracking Plan',
  course: 'Intro to Analytics',
});
```

When you make a Track call in with GTM enabled through Intilery, we will push the event data to the GTM `dataLayer`.

For example, if you make this `track` call:

```javascript
analytics.track('Played Video', {
  title: 'How to Dance the Tango',
  location: 'Tango FAQ Page'
})
```

We will pass it to the `dataLayer` as an object like this:

```json
{
  "event": "Played Video",
  "title": "How to Dance the Tango",
  "location": "Tango FAQ Page"
}
```

