---
id: marketing-preferences-hosting
title: Hosting your own Marketing Preferences page
sidebar_label: Hosting
---

# Marketing Preferences Hosting

Intilery host a basic marketing preferences page which is linked to in all of our email communications.  This can be used by the customer to subscribe or opt out of communications based on communication medium (channel) or subscription category (interests).

If a custom version of this page is required, it can be self-hosted.

# What the page will need to do
 * Retrieve marketing preferences for the customer from the Intilery endpoint
 * Update the marketing preferences for the customer by building a new preferences object and POSTing to our endpoint

## Page URL
The default page is hosted by Intilery [(see example here)](https://marketingprefs.intilery.com/content?s=aW50aWxlcnk6bWFya2V0aW5nOjg1MWZlMjM1LWY3MTEtNGVkZS05N2ZkLWFhOWUxNWIzOTg0YQ==):

We pass a customer specific **Subscription ID** as a parameter on the querystring (`s`).  For custom hosting, this parameter can be named as desired.  The merge tag for a customer's _subscription id_ is:

```freemarker
{(customer._subscriptionId)!""}
```

So the link above is generated using:

```freemarker
https://marketingprefs.intilery.com/content?s={(customer._subscriptionId)!""}
```

For self hosting replace with the URL with your own hosted page.  The URL `s` parameter name can be changed to suit, but the merge tag **must** remain the same as this property of the customer cannot be renamed.


## Retrieving marketing preferences for the customer
A single endpoint returns the customers marketing preferences with the list of known channels and subscription categories.
Note that channels are "opt-in" and categories are "opt-out".  If a new subscription category is added, the default status of that category for the customer will be *subscribed*.

### Request endpoint
```http request
GET https://events.intilery.com/cdp/marketing-preferences/<subscriptionId>
```

For example...
```http request
GET https://events.intilery.com/cdp/marketing-preferences/276db9bf-ac46-4dc3-bb7d-e94a7eb1de51
```

### Example response
```json
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
```http request
POST https://events.intilery.com/cdp/marketing-preferences/<subscription id>
```

### Example code
The example POST below updates the example customers marketing preferences as follows:-
 * Unsubscribe from the new_product_alerts subscription category
 * Subscribe to the SMS channel
Note that the category/channel fields match up to those in the retrieved preferences.
We recommend calling this endpoint from your servers to avoid any browser related CORS or blocking issues.

```javascript
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

### Campaign Reporting

To tie the unsubscribe/subscribe to a campaign for reporting, add the parameter`?assetId=XXX`

The assetID can be found in the URL parameter `utm_campaign`

E.g. the for the url

```http request
https://yourdomain.com/prefs?s<subscriptionId>&utm_campaign=July-1&utm_medium=email&utm_source=Intilery
```

The assetId is `July-1` you should POST to

```http request
POST https://events.intilery.com/cdp/marketing-preferences/<subscription id>?assetId=July-1
```



### Example response

The endpoint will return a 200 response to indicate success.

## Unsubscribing from all communications
Send the following data to the endpoint
```json5
{
    "categories": [],
    "channels": [],
    "unsubscribeAll": true,
    "unsubscribeReason": "" // can be set to a string value to be recorded against the customer for your own records
}
```









