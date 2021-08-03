---
id: identify
title: Identify Schema
sidebar_label: Identify
---

`identify` lets you tie a user to their actions and record traits about them. It includes a unique User ID and any optional traits you know about them like their email, name, etc.

Our recommendation for when and how often you should call `identify` is as follows:

- After a user registers
- After a user logs in
- When a user updates their info (eg changes or adds a new address)
- Upon loading any pages that are accessible by a logged in user (optional)

***Note:** You should configure the accessability of customer traits to non-authenticated APIs (e.g. [Analytics.js](/docs/tag/tag1)) by default, customer traits are not able to be updated via non-authenticated APIs unless the accessor is set to do so.* (coming soon)

Calling `identify` in the [Website Tag](/docs/tag/tag1) or [HTTP API](/docs/apis/api) is the first step to integrating and using Intilery.

Here’s the payload of a typical `identify` call with most [common fields](/docs/schema/common) removed:

```json
{
  "userId": "97980cfea0067",
  "event": "identify",
  "traits": {
    "name": "Peter Gibbons",
    "email": "peter@example.com",
    "plan": "premium",
    "logins": 5,
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

And here’s the corresponding Javascript event that would generate the above payload:

```javascript
analytics.identify("97980cfea0067", {
  name: "Peter Gibbons",
  email: "peter@example.com",
  plan: "premium",
  logins: 5,
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

Beyond the common fields, an `identify` call has the following fields:

| Field    |                                          | Type   | Description                                                  |
| -------- | ---------------------------------------- | ------ | ------------------------------------------------------------ |
| `traits` | *optional*                               | Object | Free-form dictionary of traits of the user, like `email` or `name`. See the [Traits field docs](#traits) for a list of reserved trait names. |
| `userId` | *optional if anonymousID is set instead* | String | Unique identifier for the user in your database. A userId or an anonymousId is required. See the [Identities docs](#identities) for more details. |

### Marketing Preferences

***Note:*** The trait Marketing Preferences is a system trait for setting the channel level subscription to marketing channels

## Example

Here’s a complete example of an `identify` call:

```json
{
  "anonymousId": "507f191e810c19729de860ea",
  "channel": "browser",
  "context": {
    "ip": "8.8.8.8",
    "campaign" : {
      "name" : "campaign name",
      "source" : "Google",
      "medium" : "ppc"
    }
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"
  },
  "messageId": "022bb90c-bbac-11e4-8dfc-aa07a5b093db",
  "receivedAt": "2015-02-23T22:28:55.387Z",
  "sentAt": "2015-02-23T22:28:55.111Z",
  "timestamp": "2015-02-23T22:28:55.111Z",
  "traits": {
    "name": "Peter Gibbons",
    "email": "peter@example.com",
    "plan": "premium",
    "logins": 5,
    "address": {
      "number": "1",
      "street": "Station Road",
      "city": "Chester",
      "county": "Cheshire",
      "postalCode": "CH1",
      "country": "UK"
    }
  },
  "type": "identify",
  "userId": "97980cfea0067",
  "version": "1.1"
}
```

## Identities

The `identify` call specifies a customer identity that you can reference across the customer’s whole lifetime. **Every `identify` call must have a [User ID](#user-id) or an [Anonymous ID](#anonymous-id)**, depending on how much you know about the user in question.

### Anonymous ID

There are certain cases where you don’t actually know who the user is according to your database, but you still want to be able to tie them to traits, events or page views. For example, you may not know who a user is when tracking newsletter signups or anonymous page views.

In these cases, you should use an Anonymous ID.

The Anonymous ID can be any pseudo-unique identifier. For example, on your servers you can use a session id. If you don’t have any readily available identifier, you can always generate a new random one—we recommend [UUIDs](http://en.wikipedia.org/wiki/Universally_unique_identifier).

**Note:** Our [Website Tag](/docs/tag/tag1) **automatically** use Anonymous IDs under the covers to keep track of users as they navigate around your website or app, so you don’t need to worry about them when using those libraries.

Here’s an example of a Javascript event for an anonymous user:

```javascript
analytics.identify({
  subscriptionStatus: 'inactive'
});
```

### User ID

User IDs are a more permanent and robust identifier, like a database ID. Since these IDs are consistent across a customer’s lifetime, `identify` calls should include a User ID as often as possible.

A User ID is usually the unique identifier that you recognize a user by in your own database. For example, if you’re using MongoDB it might look something like `507f191e810c19729de860ea`.

We recommend using database IDs instead of simple email addresses or usernames, because database IDs *never* change. That guarantees that even if the user changes their email address, you can still recognize them as the same person in all of your analytics tools. And even better, you’ll be able to correlate analytics data with your own internal database.

**Instead of using an email address or a username as a User ID, send them along as [traits](#traits).**

***Note:*** When looking at events or customers in the Intilery platform, you may see references to "customerId", this is the internal unique ID for the customer that Intilery assigns. This ID is for Intilery use only.

## Traits

Traits are pieces of information you know about a user that are included in an `identify` call. These could be demographics like `age` or `gender`, account-specific like `plan`, or even things like whether a user has seen a particular A/B test variation. Up to you!

We’ve reserved some traits that have semantic meanings for users, and we handle them in special ways. For example, we always expect `email` to be a string of the user’s email address. We use this when sending emails to the customer

You should **only use reserved traits for their intended meaning**.

Reserved traits we’ve standardized:

| **Trait**              | **Type** | **Description**                                              |
| ---------------------- | -------- | ------------------------------------------------------------ |
| `address`              | Object   | Street address of a user optionally containing: `city`, `country`, `postalCode`, `state` or `street` |
| `age`                  | Number   | Age of a user                                                |
| `avatar`               | String   | URL to an avatar image for the user                          |
| `birthday`             | Date     | User’s birthday                                              |
| `company`              | Object   | Company the user represents, optionally containing: `name` (a String), `id` (a String or Number), `industry` (a String), `employee_count` (a Number) or `plan` (a String) |
| `createdAt`            | Date     | Date the user’s account was first created. We recommend [ISO-8601](http://en.wikipedia.org/wiki/ISO_8601) date strings. |
| `campaign`             | Object   | Dictionary of information about the campaign that resulted in the API call, containing `name`, `source`, `medium`, `term`, `content`, and any other custom UTM parameter. This maps directly to the common UTM campaign parameters. This is set when the customer is initially created and not updated on subsequent identify calls |
| `description`          | String   | Description of the user                                      |
| `email`                | String   | Email address of a user                                      |
| `firstName`            | String   | First name of a user                                         |
| `gender`               | String   | Gender of a user                                             |
| `id`                   | String   | Unique ID in your database for a user                        |
| `lastName`             | String   | Last name of a user                                          |
| `name`                 | String   | Full name of a user. If you only pass a first and last name we’ll automatically fill in the full name for you. |
| `phone`                | String   | Phone number of a user                                       |
| `title`                | String   | Title of a user, usually related to their position at a specific company. Example: “Director of Engineering” |
| `username`             | String   | User’s username. This should be unique to each user, like the usernames of Twitter or GitHub. |
| `website`              | String   | Website of a user                                            |
| `marketingPreferences` | Object   | Array of channels with a channel name and boolean subscribed: - |

marketingPreferences: -

```json
{ 
	"channels": [ 
		{ "channel": "email", "subscribed": true },
		{ "channel": "sms", "subscribed": true },
		{ "channel": "whatsapp", "subscribed": false },
		{ "channel": "facebook", "subscribed": false },
		{ "channel": "push", "subscribed": false }
	] 
}
```

Trait Updates

Traits are designed to store the state of a customer, sending the a value for a trait either by the [Analytics.js identify](/docs/tag/reference#identify) or the [HTTP API identify](/docs/apis/api#identify-action) will result in the value of the trait being updating for the customer.

Changeable/transient values or multi-value traits should not be set as a single trait.

Consider the following example: -

```javascript
analytics.identify("97980cfea0067", {
        "email": "joe.blogs@intilery.com",
        "firstName": "Joe",
        "phone": "123456789",
        "policy": {
            "policyType": "Private Car",
            "policyNumber": "123"
        }
    });
```

The resulting traits of the customer would be 

```json
{
  "traits": {
    "clientReference": "something",
     "email": "joe.blogs@intilery.com",
     "firstName": "Joe",
     "phone": "123456789",
	   "policy": {
       "policyType": "Private Car",
       "policyNumber": "123"
    	}
	}
}
```

If another identify request is made, but it omits traits, then only the traits supplied are updated/set, e.g. calling identify with

```javascript
analytics.identify("97980cfea0067", {
   "lastName": "Bloggs"
});
```

Would result in the `lastName` trait being added to the customer's traits, e.g. resulting in

```json
{
  "traits": {
  	  "clientReference": "something",
    	"email": "joe.blogs@intilery.com",
	    "firstName": "Joe",
      "lastName" : "Bloggs",
  	  "phone": "123456789",
	    "policy": {
  	      "policyType": "Private Car",
    	    "policyNumber": "123"
    	}
	}
}
```

If you pass in a different value for a trait, the value of the trait is updated, i.e. calling identify with

```javascript
analytics.identify("97980cfea0067", {
   "firstName": "Josephh"
});
```

Would result in the fistName trait being updated in the customer's traits, e.g. resulting in

```json
{
  "traits": {
  	  "clientReference": "something",
    	"email": "joe.blogs@intilery.com",
	    "firstName": "Joseph",
      "lastName" : "Bloggs",
  	  "phone": "123456789",
	    "policy": {
  	      "policyType": "Private Car",
    	    "policyNumber": "123"
    	}
	}
}
```

**Note:** Special care should be taken when setting trait values when they are arrays or objects, the value passed in is what is set, example

Starting with a customer that has traits previously set, e.g. resulting in

```json
{
  "traits": {
  	  "clientReference": "something",
    	"email": "joe.blogs@intilery.com",
	    "firstName": "Joe",
      "lastName" : "Bloggs",
  	  "phone": "123456789",
	    "policy": {
  	      "policyType": "Private Car",
    	    "policyNumber": "123"
    	}
	}
}
```

You then call `identify` with the following

```json
{
  "traits": {
	    "policy": {
  	      "policyType": "Private Car"
    	}
	}
}
```

The resulting customer traits would be the following

```json
{
  "traits": {
  	  "clientReference": "something",
    	"email": "joe.blogs@intilery.com",
	    "firstName": "Joe",
      "lastName" : "Bloggs"
  	  "phone": "123456789",
	    "policy": {
  	      "policyType": "Private Car",
    	}
	}
}
```

**Note: ** The value of the `policy` trait has been update to match explicitly what you passed in the `identify` call, note how the `policyNumber` value in the `policy` trait has been removed, as it was not present in the `identify` call for the trait `policy`

#### Multi-value traits

If you require to store multiple traits of a same type, either use arrays or explicit properties for each value, e.g

```javascript
analytics.identify("97980cfea0067", "traits": {
        "email": "joe.blogs@intilery.com",
        "firstName": "Joe",
        "phone": "123456789"
    });
```

.The resulting customer traits would be the following

```javascript
{
  "traits": {
    "clientReference": "something",
     "email": "joe.blogs@intilery.com",
     "firstName": "Joe",
     "phone": "123456789"
	}
}
```

Adding a new policy to a named trait

```javascript
analytics.identify("97980cfea0067", "traits": {
      "car-policy": {
  	      "policyType": "Private Car",
    	    "policyNumber": "123"
    	}
    });
```

.The resulting customer traits would be the following

```javascript
{
  "traits": {
    "clientReference": "something",
     "email": "joe.blogs@intilery.com",
     "firstName": "Joe",
     "phone": "123456789",
      "car-policy": {
  	     "policyType": "Private Car",
    	   "policyNumber": "123"
    	}
	}
}
```

Then to add a different policy

```javascript
analytics.identify("97980cfea0067", "traits": {
      "home-policy": {
  	      "policyType": "Home",
    	    "policyNumber": "456"
    	}
    });
```

.The resulting customer traits would be the following

```javascript
{
  "traits": {
    "clientReference": "something",
     "email": "joe.blogs@intilery.com",
     "firstName": "Joe",
     "phone": "123456789",
      "car-policy": {
  	     "policyType": "Private Car",
    	   "policyNumber": "123"
    	},
        "home-policy": {
        "policyType": "Home",
        "policyNumber": "456"
    	}
	}
}
```

**Note:** Both policies cpould have been set in a single `indentify` call of course.

**Note: ** It is advisable to keep the number of traits for multi value traits to under 20, if you require more values, then use an array, e.g. [products in cart](/docs/schema/retail) which is an array of products

#### Array based traits

To set an array of properties for a trait, e.g. multiple policies

```javascript
analytics.identify("97980cfea0067", {
      "policies": [
       	{
  	        "policyType": "Home",
    	    "policyNumber": "456"
        },
  		{
  	        "policyType": "Private Car",
    	    "policyNumber": "123"
    	}
    ]	
    });
```

**Note:** You must pass in the complete array when setting an array based trait

#### Customer Campaign

The identify method automatically sends the campaign data for the current session, as set via UTM parameters in the URL, as detailed here [common fields](/docs/schema/common#context) (see field campaign).

If the campaign is set on the current context, by including UTM paramters (utm_medium, utm_campaign etc.). a customer trait "campaign" will be created with these details.

The campaign trait is only set on the customer when the customer is initially recognised, either as a known customer or an anonymous visitor, in which case the campaign value is copied over from the visitor to the customer

### Asynchronous Processing

The processing of all requests to the Intilery customer data platform is asynchronous,  each of the methods to call the CDP (Javascript tag or HTTP API) will return an eventID that represents the action requested, the format of the response is

```json
{ 
  "success": true, 
  "eventId": "3e112aa5-2bed-49a9-b1db-ead2b807066d" 
}
```

`code` "success" indicates whether the call was accepted and `eventId` is the unique ID of this call (event). Any errors downstream will report this eventID.

#### Timing

Due to the nature of asynchronous processing, you should leave 500ms between an `identify` call, and further calls that may need to access traits on the customer, for example email merge tags, this gives the asynchronous storage the time to sve the traits.

If it is imperative that the data is available to the campaign asset at the time of the call (not withstanding a 500ms gap between identify and other calls) then we recommend passing the merge tag data as part of the event, as the event object is passed to the downstream processor.

### Should I use Traits or Event Data?

If the data belongs to the customer, and is a semi-immuttable value, then this should be stored in the customer traits, e.g. custome policies. These values change less frequently, than say an order conformation email, where the data for the email/letter is transient and only needed for that communication, e.g.

To send an asset that has tranisent data, for example a renewal quote, you may decide to send this data as part of the event/command to send the asset, rather than implicitly setting it as a trait on the customer.

**Note:** Be aware of [Asynchronous Processing](#asynchronous-processing)

The send an asset with data for that send, which is attached to the event itself and passed down stream to the sending of the asset [API Commands](/docs/apis/commands)

For example: -

POST https://tracking.intilery.com/track/{clientId}/{accountId}/{BRANDID}/v1/track

```json
{
    "userId": "ABC/123",  
    "event": "SEND_PRINT",  
    "assetId": "renewal",  
    "timestamp": "2019-11-18T13:30:12.984Z",
     "renewal" : {
       "price": "123.44",
       "currency": "GBP"
     }
}
```

The value for `renewal` is a transient value that is used for the sending of that asset, if you require to set this on the customer trait first, then see above
