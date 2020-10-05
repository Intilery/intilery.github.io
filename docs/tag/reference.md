---
id: reference
title: JavaScript Tag Reference
sidebar_label: Tag Reference
---

# Analytics.js

Analytics.js, Intilery’s JavaScript tag, makes it simple to send your data to Intilery from any website.

## Getting Started

This reference is based on the Segment Analytics Javascript Reference

Head over to our [Website Tagging](tag1) QuickStart Guide which walks you through adding Analytics.js to your site in just a few minutes. Once you’ve installed the library, read on for the detailed API reference!

## Identify

The identify method is how you associate your customers and their actions to a recognisable userId and traits. You can see an identify example in the [Website Tagging](tag1) or [Intilery Event Tracking API](https://intilery.atlassian.net/wiki/spaces/HEA/pages/1858437127/Intilery+Event+Tracking+API).

We recommend against using identify for anonymous visitors to your site. analytics.js automatically retrieves an anonymousId from localStorage or assigns one for new visitors. It is attached to all page and track events both before and after an identify.

identify method definition:

```javascript
1 analytics.identify([userId], [traits], [options], [callback]);
```

The identify call has the following fields:

| userId   | optional | String   | The database ID for the customer. If you don’t know who the customer is yet, you can omit the userId and just record traits. You can read more about identities in the [identify reference](../schema/identify). |
| -------- | -------- | -------- | ------------------------------------------------------------ |
| traits   | optional | Object   | A dictionary of traits you know about the customer, like their email or name. You can read more about traits in the [identify reference](../schema/identify). |
| options  | optional | Object   | {}Mostly not required, though see anonymous ID below         |
| callback | optional | Function | A function executed after a short timeout, giving the browser time to make outbound requests first. |

For example, you might call Identify when someone signs up for a newsletter, but hasn’t yet created an account on your site. The example below shows an Identify call (using hard-coded traits) that you might send in this case.

Example identify with hard-coded information:

```javascript
analytics.identify({
  nickname: 'Joe',
  favoriteCompiler: 'A-0',
  industry: 'Computer Science'
});
```

and when the user completes signup:

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

The traits object for the second call also includes `nickname`, `favoriteCompiler`, and `industry`, along with marketingPreferences which sets the customer’s subscription setting for the given marketing channel.

You may omit both traits and options, and pass the callback as the second argument.

```javascript
analytics.identify('12091906-01011992', function(){  
	// Do something after the identify request has been sent  
	// Note: site-critical functionality should not depend on your website tag 
});
```

## Track

The track method lets you record any actions your users perform. You can [see an example of the track event in the guide](https://intilery.atlassian.net/wiki/spaces/HEA/pages/1868136516/Website+Tagging) or find details on [Intilery Event Tracking API](https://intilery.atlassian.net/wiki/spaces/HEA/pages/1858437127/Intilery+Event+Tracking+API).

track method definition:

```javascript
1 analytics.track(event, [properties], [options], [callback]);
```

The track call has the following fields:

| event      | required | String   | The name of the event you’re tracking. You can read more about the [track method](../schema/track) and what event names we recommend. |
| ---------- | -------- | -------- | ------------------------------------------------------------ |
| properties | optional | Object   | A dictionary of [properties](../schema/track#properties) for the event. If the event was 'Added to Cart', it might have properties like price and productType. |
| options    | optional | Object   | {}Mostly not required, though see anonymous ID below         |
| callback   | optional | Function | A function that is executed after a short timeout, giving the browser time to make outbound requests first. |

The only required argument to track in analytics.js is an event name string. You can read more about [how we recommend naming your events](../schema//track#event).

Example track call:

```javascript
analytics.track('Article Completed', {  
	title: 'How to Create a Tracking Plan',  
	course: 'Intro to Analytics', 
});
```

The only required argument to track in analytics.js is an event name string. Read more about how we recommend [naming your events](../schema/track#event).

## Page

The page method lets you record page views on your website, along with optional extra information about the page being viewed.

A page call is included by default as the final line in the analytics.js [snippet](../tag/tag1#installing-intilery). You may modify this page call within the guidelines below.

page method definition:

```javascript
analytics.page([category], [name], [properties], [options], [callback]);
```

The page call has the following fields:

| category   | optional | String   | The category of the page. Useful for cases like e-commerce where many pages might live under a single category. *Note: if you pass only one string to* page it is assumed to be name. You **must** include a name to send a category. |
| ---------- | -------- | -------- | ------------------------------------------------------------ |
| name       | optional | String   | The name of the page.                                        |
| properties | optional | Object   | A dictionary of properties of the page. Note: url, title, referrer and path are collected automatically! Additionally this defaults to a canonical url, if available, and falls back to document.location.href. |
| options    | optional | Object   | {}Mostly not required, though see anonymous ID below         |
| callback   | optional | Function | A function that is executed after a short timeout, giving the browser time to make outbound requests first. |

### Default Page Properties

A few properties are automatically added to each page call.

```javascript
1analytics.page('Boiler & Heating Cover');
```

We translate that to the following without any extra work from you:

```javascript
analytics.page('Boiler & Heating Cover', {  
	title: 'Boiler & Heating Cover',  
	url: 'https://www.homeemergencyassist.com/cover/boiler-heating/',  
	path: '/cover/boiler-heating/',  
	referrer: 'https://somesite.com' 
});
```

You can override these values. For example:

```javascript
analytics.page('Boiler & Heating Cover', {  
	title: 'Cover',  
	path: 'products/boiler/view' 
});
```

Translates to:

```javascript
analytics.page('Boiler & Heating Cover', {  
	title: 'Cover',  
	url: 'ttps://www.homeemergencyassist.com/cover/boiler-heating/',  
	path: 'products/boiler/view',  
	referrer: 'https://somesite.com' 
});
```

## Ready

The ready method allows you to pass in a callback that is called once analytics.js finishes initialising. It’s like jQuery’s ready method.

Code inside the ready function only executes after ready has been emitted.

**Note:** It is recommended to render the event properties using server side templates, if this is not possible, client side javascript will acheive the same but be bound to your HTML code.

You may want bind client side events to UI elements, instead of templating at the server side, for example

```javascript
analytics.ready(function() { 
	$('#add-to-basket').click(function(){ 	
		analytics.track('Product Added', { 		
			name: $('.skuname').html(), 		
			product_id: window.location.pathname.match(/p-(\d+\-\d+)+/)[0],  			
			price: $('.price').html(),  			
			cart_id: window.cartID,  			
			image_url: $('.product-image > div > img').attr('src'),  			
			quantity: $('#qtySelect').val(),  			
			url: window.location.href,
      currency: 'GBP'
		}); 
	}); 
});
```

ready method definition:

```javascript
analytics.ready(callback);
```

The ready method has the following fields:

| callback | Function | A function to be executed after all enabled destinations have loaded. |
| -------- | -------- | ------------------------------------------------------------ |
|          |          |                                                              |

## Querystring API

analytics.js can trigger track and identify events based on the URL querystring. This is helpful for tracking email click throughs, social media clicks, and digital advertising. Email and SMS messages sent via the Intilery platform automatically tracking, you do not need to append these values to those campaigns.

Here are the query parameters to use:

| **param**                 | description                             | triggers                                                     |
| :------------------------ | :-------------------------------------- | :----------------------------------------------------------- |
| ajs_uid                   | The userId to pass to an identify call. | This triggers an identify call.                              |
| ajs_event                 | The event name to pass to a track call. | This triggers a track call.                                  |
| ajs_aid                   | The anonymousId to set for the user.    | This triggers an analytics.user().anonymousId() call.        |
| ajs_prop_```<property>``` | A property to pass to the track call    | This won’t implicitly trigger an event and is dependent on you also passing ajs_event - this property be included in the resulting track call |
| ajs_trait_```<trait>```   | A trait to pass to the identify call    | This won’t implicitly trigger any call and is dependent on you also passing ajs_uid - this trait is included in the resulting identify call |

So for example, this URL:

```javascript
https://www.homeemergencyassist.com/cover/boiler-heating/?ajs_uid=123456789abcd&ajs_event=Clicked%20Email&ajs_aid=abc123&ajs_prop_emailCampaign=First+Touch&ajs_trait_name=Karl+Jr.
```

would trigger the following events on the page:

```javascript
analytics.identify('123456789abcd', { 
	name: 'Karl Jr.' 
}); 
analytics.track('Clicked Email', { 
	'emailCampaign': 'First Touch' 
}); 
analytics.user().anonymousId('abc123');
```

You can pass up to **one of each trigger parameter** as shown in the example above.

**Note:** Email tracking is enabled by default for campaigns sent by Intilery, this can be usesful for emails sent with another provider.

## User Information

Once analytics.js loads, executing the user method functions returns information about the currently identified customer

**Note:** To ensure these methods are available, wrap any reference to user() in a ready function block.

Examples:

```javascript
analytics.ready(function() {
	var user = analytics.user();  
	var id = user.id();  
	var traits = user.traits(); 
});
```

## Clearing Traits

Passing an empty object to the traits object clears all cached traits for a customer. Remember, traits are cached by default by identify method. You can clear the traits object for the customer by passing traits an empty object:

```javascript
analytics.user().traits({});
```

## Reset / Logout

Calling reset resets the id, including anonymousId, and clear traits for the currently identified user.

```javascript
analytics.reset();
```

The reset method only clears the cookies and localStorage created by Intilery. It does not clear data from other integrated tools, as their native libraries might set their own cookies to manage user tracking, sessions, and manage state. To completely clear out the user session, see the documentation provided by those tools.

Intilery does not share localStorage across subdomains. If you use Intilery tracking on multiple subdomains, you must call analytics.reset() for each subdomain to completely clear out the user session.

## Anonymous ID

analytics.js generates a UUID and sets this as anonymousId for all new visitors to your site.

Example:

```javascript
2239ee7ea5-b6d8-4174-b612-04e1ef3fa952
```

### Retrieving the Anonymous ID

Retrieve the of the current user anonymousId:

```javascript
analytics.user().anonymousId();
```

**NOTE:** If an anonymousId is null, calling the above function automatically sets the new anonymousId.

### Setting the Anonymous ID

Override the assigned anonymousId for the current user:

```javascript
analytics.user().anonymousId('ABC-123-XYZ');
```

**Note:** It is not required to set an anonymousID yourself, though this be done if required

Or in the options object of identify, page, or track calls, like this:

```javascript
analytics.identify('user_123', { name: 'Jane Kim' },{ anonymousId: 'ABC-123-XYZ' });
analytics.page({}, { anonymousId: 'ABC-123-XYZ' });
analytics.track('Email Clicked', {  callToAction: 'Signup' }, {  anonymousId: 'ABC-123-XYZ' }); 
```

You can also set the anonymousId immediately inside your Intilery snippet, even before the ready method has returned:

```javascript
analytics.load('clientKey');
analytics.page();
analytics.setAnonymousId('ABC-123-XYZ'); 
```

### Refreshing the Anonymous ID

A user’s anonymousId refreshes on any of the following conditions:

- A user clears their cookies *and* localstorage
- analytics.reset() is called during in the user’s browser session
- analytics.identify() is called with a userId that differs from the current userId

## Debug

Calling the debug method turns on debug mode, logging helpful messages to the console. You’ll have to refresh the page after invoking debug to see the messages.

Enable:

```javascript
1 analytics.debug();
```

Disable:

```javascript
analytics.debug(false);
```

## Emitter

The global analytics object emits events whenever you call identify, track or page. Using the on method You can set listeners for these events and run your own custom code. Useful for sending data to a other services.

```javascript
analytics.on(method, callback);
```

| method   | String   | Name of the method to listen for                             |
| -------- | -------- | ------------------------------------------------------------ |
| callback | Function | A function to execute after each the emitted method, taking three arguments: event, properties, options |

Example:

```javascript
analytics.on('track', function(event, properties, options) {  otherTool.push(['recordEvent', event]); });
```

Note that this emits events before they are processed by the Intilery integration, and may not include some of the normalisation we do on the client before uploading the data to Intilery’s servers.

**Note:** Page event properties are stored in the options object.

## Track Link

trackLink is a helper method that attaches the track call as a handler to a link. With trackLink a small timeout (300 ms) is inserted to give the track call more time. This is useful when a page would redirect before the track method could complete all requests.

trackLink method definition:

```javascript
analytics.trackLink(element, event, [properties])
```

| element(s)          | Element or Array   | DOM element to be bound with track method. You may pass an array of elements or jQuery objects. *Note: This must be an element, **not** a CSS selector.* |
| ------------------- | ------------------ | ------------------------------------------------------------ |
| event               | String or Function | The name of the event, passed to the track method. Or a **function** that returns a string to be used as the name of the track event. |
| properties optional | Object or Function | A dictionary of properties to pass with the track method. Or a **function** that returns an object to be used as the properties of the event. |

Example:

```javascript
var link = document.getElementById('free-trial-link'); 
analytics.trackLink(link, 'Clicked Free-Trial Link', {  plan: 'Enterprise' });
```

## Track Form

trackForm is a helper method that binds a track call to a form submission. With trackForm a small timeout (300 ms) is inserted to give the track call more time. Useful when a page would redirect before the track method can complete all requests.

```javascript
analytics.trackForm(form, event, [properties])
```

| form(s)             | Element or Array   | The form element to track or an array of form elements or jQuery objects. *Note: trackForm takes an element, not a CSS selector.* |
| ------------------- | ------------------ | ------------------------------------------------------------ |
| event               | String or Function | The name of the event, passed to the track method. Or a **function** that returns a string to be used as the name of the track event. |
| properties optional | Object or Function | A dictionary of properties to pass with the track method. Or a **function** that returns an object to be used as the properties of the event. |

Example:

```javascript
var form = document.getElementById('signup-form'); 
analytics.trackForm(form, 'Signed Up', {  plan: 'Premium',  revenue: 99.00 });
```

## Extending Timeout

The timeout method sets the length (in milliseconds) of the callbacks and helper functions:

```javascript
analytics.timeout(500);
```

Set the timeout to 500ms. This is helpful if you have multiple scripts that need to fire in your callback or trackLink, trackForm helper function. We recommend extending to 500ms if you’re triggering ad network conversion pixels since those are often a bit slower to load.

## Performance

The analytics.js library is loaded with the [HTML script ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async)async tag. This also means that Intilery methods are fired asynchronously, so you should adjust your code accordingly if you require that events be sent from the browser in a particular order.

### File size

Intilery’s JavaScript snippet has minimal impact on the size of the pages, and only increases the page size by about 1.1KB.

However, the snippet then asynchronously requests and loads a customized JavaScript file (analytics.js), which contains the code and settings needed to load the tracking, the file is about 62KB.

## Retries

When enabled, analytics.js automatically retries network and server errors. With persistent retries, analytics.js can:

- Support offline tracking. analytics.js queues your events and delivers them when the user comes back online.
- Better handle network issues. If there happens to be a time where your application can’t connect to Intilery’s API, we’ll continue to store the events on the browser to ensure you don’t lose any data.

Analytics.js stores events in localStorage (falling back to in-memory storage when localStorage is unavailable), and retries up to 10 times with an incrementally increasing backoff between each retry. Analytics.js queues up to 100 events at a time to avoid using too much of the device’s local storage.

## Anonymizing IP

We collect IP address for client-side events automatically.

Passing a value for options.context.ip prevents our server from recording the IP address associated with the request.

Example:

```javascript
analytics.track("Order Completed", {}, { context: { ip: "0.0.0.0" }});
```

## Context & Traits

Within the options dictionary, a sub-dictionary, context, exists. The context dictionary captures various data automatically depending on the event type and what your source type is. You can read more about the context dictionary [here](../schema/common/#context). Within context is an optional traits dictionary that contains traits about the current user. This is useful for associating information about a user from previous identify calls to a track or page event.

Consider this identify event:

```javascript
analytics.identify('12091906-01011992', { 
	plan_id: 'Paid, Tier 2' 
	email: 'grace@usnavy.gov' 
});
```

The traits on this event are plan_id. If you want these traits to appear on a subsequent track or page event that this user triggers, you can get this association by passing those traits into context.traits as follows:

```javascript
analytics.track('Clicked Email', { emailCampaign: 'First Touch'  },  { 
	traits: {
		plan_id: 'Paid, Tier 2'
	}  
} ); 
```

This would append the plan_id trait to this track, but not name or email since they do not exist in context. This must be done for every subsequent event you want these traits to appear on.

## Intilery ID Persistence

In order to ensure high fidelity, first-party customer data, we persist the Intilery ID to local storage and use it as the Intilery ID on the cookie whenever possible. Local Storage is meant for storing this type of first-party customer information.

If a user comes back to your site after a cookie has expired, Analytics.js checks localStorage to see if an ID exists, and resets it as the user’s ID in the cookie. If a user clears their cookies and local storage, all of the IDs are removed.

## Troubleshooting

The console reveals all! [Learn how to access the Javascript console in each browser](#how-do-i-open-the-javascript-console-in-your-debugger). Any analytics.js methods may be executed manually. Use the Network tab to inspect requests.

### Are you loading analytics.js?

Open the Javascript console and enter analytics. Does it return an object, as seen below?

![img](/img/console-a.gif)

The object means that you are successfully loading analytics.js onto your website. If you get an undefined error, analytics.js is not loading successfully:

![img](/img/console-b.gif)

Solution: Follow the analytics.js [Quickstart Guide](../tag/tag1)

### Are you loading two instances of analytics.js?

Note that you *cannot* load analytics.js twice on the same page, even if you’re using different client keys. You might encounter Uncaught RangeError: Maximum call stack size exceeded. You can conditionally set the clientkey based on an environment variable.

Example:

```javascript
1 var writeKey; ENV === 'production' ? clientKey = 'A' : clientKey = 'B';
```

### Do you see events appear in your debugger?

When you reload the page, does your debugger show a new page and an identify call? You can also check the Javascript console in the browser and manually fire an identify call as such, which would show up in the debugger.

![img](/img/console-c.gif)

If the call doesn’t appear in the debugger, open up the Javascript console and check the Network tab to see if the outbound web services requests are being initiated:

![img](/img/console1.png)

![img](/img/console2.png)

In the above, the p is a page call and the. If you don’t at least see the p, then check if you are loading analytics.js correctly, and that the page() method is called. Other calls such as t or i should be displayed if you call track or identify

### Do you have any ad blockers enabled in your browser?

Intilery use cookies/local storage to store information about users in the browser. Ad blockers prevent cookies and other data these tools rely on to make valid analytics requests. Some portion of your users are probably using ad blockers, which prevent the Intilery script from fully executing. Both desktop and mobile browsers are impacted.

One particular issue is Safari private browsing mode which allows analytics.js identify calls to be made, but the traits object is stripped from the call. This results in identify calls missing email address and other traits.

### Internet Explorer Support

We guarantee support for Internet Explorer 9 and higher for analytics.js. Keep in mind that different tools may have different compatibility guarantees for their own products. Refer to the vendor’s documents to see what their browser compatibility looks like.

### **Is your web site deployed under a domain on the Public Suffix List?**

The [Public Suffix List](https://publicsuffix.org/list/) is a catalog of certain Internet effective top-level domains–enumerating all domain suffixes controlled by registrars.

The implications of these domain suffixes is that first party cookies cannot be set on them. Meaning, foo.example.co.uk can share cookie access with bar.example.co.uk, but example.co.uk should be walled off from cookies at example2.co.uk. The latter two domains could be registered by different owners.

Examples of domains on the Public Suffix List that are common in troubleshooting include:

- *.github.io
- *.herokuapp.com
- *.appspot.com

### How do I open the Javascript console in your debugger?

The Javascript console reveals all requests, outbound and inbound, to your browser. Additionally, you may execute valid Javascript.

- **Chrome**: COMMAND+OPTION+J (Mac) or CTRL+SHIFT+J (Windows).
- **Firefox**: COMMAND+OPTION+K (Mac) or CTRL+SHIFT+K (Windows) and then click on the **Console** tab.
- **Safari**: COMMAND+OPTION+I (Mac) or CTRL+ALT+I (Windows) and then click on the **Console** tab.
- **IE**: F12 and then click on the **Console** tab.

### Is there a size limit on requests?

Yes, 32KB per message.

### If analytics.js fails to load, are callbacks not fired?

In the event that analytics.js does not load, callbacks passed into your API calls do not fire. This is as designed, because the purpose of callbacks are to provide an estimate that the event was delivered and if the library never loads, the events won’t be delivered.

### Why do I see a network request to /m?

We  collect data that allows us to collect client side performance metrics in analytics.js. This includes metrics such as:

- When client side integrations are initialized and when they fail
- When messages are sent to client side integrations and when they fail

We added these metrics so that we can proactively identify and resolve issues with individual client-side integrations. These metrics are connected to alerts that notify our on-call engineers so we can take action on these quickly.

There should be no noticeable impact to your data flow. You may notice analytics.js make an extra network request in the network tab to carry the metrics data to our servers. This should be very infrequent since the data is sampled and batched every 30 seconds, and should not have any impact of website performance.

### How are properties with null and undefined values treated?

We use the JSON.stringify() method under the hood. Property values set to null or undefined are treated in accordance with the expected behaviour for the standard method:

```javascript
console.log(JSON.stringify({ x: null, y: 6 })); // expected output: "{"x":null,"y":6}" console.log(JSON.stringify({ x: undefined, y: 6 })); // expected output: "{"y":6}"
```

