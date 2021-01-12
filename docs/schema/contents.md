---
id: contents
title: Schema Overview
sidebar_label: Introduction
---

The Intilery schema provides guidance on meaningful data to capture, and the best format for it, across all of Intilery's libraries and APIs. If you implement Intilery using these formats, it’s simple to utilise your data within the Intilery CDP and Customer Engagement Platform

This schema is based on the Segment specs, they have been extended to work in a multinational audience and multi-account setup.

The Intilery Schema has three components.

### APIs

First, it **outlines the semantic definition of the customer data we capture across all of Intilery's libraries and APIs**. There are four API calls in the Schema. They each represent a distinct type of semantic information about a customer. Every call shares the same [common fields](common).

- [Identify](./identify): who is the customer?
- [Track](./track): what are they doing?
- [Page](/docs/schema/page): what web page are they on?
- [Screen](./screen): what app screen are they on?

### Engagement Channels

Second, it **details the event data we capture across customer engagement channels**.

- [Email](./email)
- SMS
- [Live Chat]
- [A/B Testing]

## Industry Specs

Third, it **shares the events we recommend you track for a particular industry based on our experience working with many customers**. When you respect these specs, it makes your data more robust and portable, as well as enabling you to choose other technologies to move data to and from Intilery, such as Google, Facebook, Segment, Zapier

- [Mobile](./mobile)

- [E-Commerce](./retail)

- [Video]

- [B2B SaaS]