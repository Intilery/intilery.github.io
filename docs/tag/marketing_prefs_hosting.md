---
id: marketing_prefs_hosting
title: Hosting your own Marketing Preferences page
sidebar_label: Hosting Marprefs
---

# Marketing Preferences Hosting

Intilery host a basic marketing preferences page which is linked to in all of our email communications.  This can be used by the customer to subscribe or opt out of communications based on communication medium (channel) or subscription category (interests).

If a custom version of this page is required, it can be self-hosted.

# What the page will need to do
 * Retrieve marketing preferences for the customer using a http GET
 * Render a list of channels and subscription categories on the page
 * Update the marketing preferences for the customer by building a new preferences object and performing a http POST

## Page URL
The default page is hosted at:
https://marketingprefs.intilery.com/content?s=aW50aWxlcnk6bWFya2V0aW5nOjg1MWZlMjM1LWY3MTEtNGVkZS05N2ZkLWFhOWUxNWIzOTg0YQ==

The *s* parameter is an important property applied to all customers called the *Subscription ID*.  For custom hosting, this parameter can of course be named as desired.  The merge tag for a customers subscription id is:
```
{(customer._subscriptionId)!""}
```
So the example link above might be generated in our email editor with...
```
https://marketingprefs.intilery.com/content?s={(customer._subscriptionId)!""}
```

The above would be replaced with the URL of your own hosted page.  The URL parameter name can of course be changed to suit.

## Example page
![Marketing Preferences](/img/marprefs_eg.png)

## Retrieving marketing preferences for the customer
A single endpoint returns the customers marketing preferences with the list of known channels and subscription categories.
Note that channels are "opt-in" and categories are "opt-out".  If a new subscription category is added, the default status of that category for the customer will be *subscribed*.

### Request endpoint
```
GET https://events.intilery.com/cdp/marketing-preferences/<subscription id>
```
For example...
```
GET https://events.intilery.com/cdp/marketing-preferences/276db9bf-ac46-4dc3-bb7d-e94a7eb1de51
```

### Example response
```
{
    "writeKey": "ZXhhbXBsZTpleGFtcGxlOkVYQU1QTEU=",
    "customerId": "276db9bf-ac46-4dc3-bb7d-e94a7eb1de51",
    "channels": [{
        "channel": "email",
        "name": "Email",
        "subscribed": true
    }, {
        "channel": "sms",
        "name": "SMS",
        "subscribed": false
    }],
    "categories": [{
        "category": "marketing tricks",
        "name": "marketing_tricks",
        "subscribed": true
    }, {
        "category": "new product alerts",
        "name": "new_product_alerts",
        "subscribed": true
    }],
    "unsubscribeAll": false
}
```

## Update the marketing preferences for the customer

### Request endpoint
The same endpoint used to retrieve the customer marketing preferences is also used to update. Only the method is different.
```
POST https://events.intilery.com/cdp/marketing-preferences/<subscription id>
```

### Example code
The example POST below updates the example customers marketing preferences as follows:-
 * Unsubscribe from the new_product_alerts subscription category
 * Subscribe to the SMS channel
Note that the category/channel fields match up to those in the retrieved preferences.

```
const data = {
    "categories": [{
        "category": "marketing_tricks",
        "subscribed": true
    }, {
        "category": "new_product_alerts",
        "subscribed": false
    }],
    "channels": [{
        "channel": "email",
        "subscribed": true
    }, {
        "channel": "sms",
        "subscribed": true
    }],
    "unsubscribeAll": false,
    "unsubscribeReason": ""
};
$.ajax({
    type: 'POST',
    url: `https://events.intilery.com/cdp/marketing-preferences/276db9bf-ac46-4dc3-bb7d-e94a7eb1de51`,
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(data),
    success: function () {
        alert("marketing preferences updated");
    }
});
```

### Example response
The endpoint will return a 200 response to indicate success.

## Unsubscribing from all communications
Send the following data to the endpoint
```
{
    "categories": [],
    "channels": [],
    "unsubscribeAll": true,
    "unsubscribeReason": "" // can be set to a string value to be recorded against the customer
};
```









