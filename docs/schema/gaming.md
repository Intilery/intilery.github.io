---
id: gaming
title: Gaming Schema
sidebar_label: Gaming
---

# Gaming Schema

Although there is no specific gaming schema, we have additional rules built in that
can be enabled for your account. Any exclusion that is set on a customer profile
will disable sending of all campaigns, both marketing and
transactional to that customer.

  * Speak to your account manager to request these are enabled for your account.
  * Set up your exclusion rules as described below
  * Test setting and sending against a test customer to verify

## Configure Exclusion Rules

Add an `exclusions` object to your `identify` schema. The object should
contain boolean flags, and if any one of those flags is `true`, then all campaign
sends to that customer will be blocked. (Any non-boolean value will also lead to 
campaigns being blocked)

### Add Exclusions Object to Identify Traits

![Add Exclusions](/img/gaming/add-exclusions.png)

### Add Boolean Values to Exclusions Object

![Add Play Break](/img/gaming/add-playBreak.png)

### Ensure the Exclusions is Protected

So that the Exclusions block can only be updated through the authenticated 
REST API and not from a JS Tag, make sure you tick the **protected** box.

![List of Exclusions](/img/gaming/list-exclusions.png)
