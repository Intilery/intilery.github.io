---
id: protocols
title: Protocols Overview
sidebar_label: Protocols Overview
---

Intilery helps customers collect and integrate customer data from a wide range of 
Sources, and to use that data to power personalised marketing campaigns. To do so 
reliably, the data Intilery receives must be clean, consistent and adhere to a well 
thought out tracking plan.

## Schemas

At the heart of Protocols are schemas, schema's are the details that define the 
events and their properties that your business generates.

Protocols was built to automate and scale the
[data quality best practices](/docs/guides/data-collection) developed over years of
helping customers implement Intilery. Investing in data quality will improve trust in
your data, reduce time spent by your engineering and business teams navigating and
validating data, and ultimately allow your business to grow faster.

## There are four steps to using Protocols

[1. Align teams with a Tracking Plan](/docs/guides/tracking-plan)

Good data quality starts with a well thought out Tracking Plan. With Protocols, 
you can define your events and corresponding properties in a Tracking Plan.
This tracking plan becomes a central source of truth for marketing, product,
engineering, analytics, and business teams.

[2. Enforce data standards with controls](/docs/guides/data-collection)

To maintain a high degree of quality over time, we offer strict controls to block 
non-conforming events. Blocked events are displayed in the event stream.

[3. Validate data quality with violations](/docs/guides/validate)

With your tracking plan living in Intilery, any event or property that does not 
match the tracking plan will generate a violation. Violations are displayed in the
event stream enabling you to validate or fix these. Non conforming events are not 
recorded. All events (apart from the Intilery default events, page, screen etc) are
not recorded until validated.

[4. Resolve data issues with transformations](/docs/guides/protocols)

Even the most exacting data collection processes are subject to human error and
organizational complexity. Transformations can be applied from within Protocols
to change event and property names without touching code. (coming soon)

