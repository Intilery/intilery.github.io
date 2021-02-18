---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQs
---

These are the most frequently asked questions. Please read these if you are new to Intilery. 

### How do I back fill / back populate my customers?

In order to back populate your customers, you should first upload your existing customer records with the Audience Upload feature from an .csv file or [batch](/docs/apis/api#batch) send a set of [identify](/docs/apis/api#identify-action) events to the API

Once your customers have been uploaded, you can then [batch](/docs/apis/api#batch) upload the events with the [track api](/docs/apis/api#track-action) for your customers in the format matching the schema you created and validated, see [tracking events](/docs/guides/protocols)

### What triats (fields/properties) can I add to my customer?

There are a set of reserved trait names that can be used, these are detailed at [common traits](/docs/schema/identify#traits), traits are set as using the [identify tag event](/docs/tag/reference#identify) or the [identify api event](/docs/apis/api#identify-action) or an identify event from one of our SDKs.

The [common traits](/docs/schema/identify#traits) do not need to be validated.

Any addtional traits that you send that you have not validated, will need to be validated before they are saved against the customer, see [validate schema](/docs/guides/validate-schema) for adding new traits.
