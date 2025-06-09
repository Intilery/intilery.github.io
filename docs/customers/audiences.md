---
id: audiences
title: Audiences
sidebar_label: Audiences
---

Audiences allow you to define cohorts of customers based on their event behavior and traits that Intilery then keeps up-to-date over time. Audiences can be built from your core **tracking events** or **traits**. These audiences can then be used to target and personalise marketing campaigns as well as audience membership being availavle in the [Profile API](/docs/apis/profiles)

## Building an Audience

When building an audience you can use existing events or traits.

![Events](/img/audience1.png)![Events](/img/audience2.png)

### Events

You can build an audience from any of the events that are sent to Intilery. This includes any [track](/docs/schema/track), [page](/docs/schema/page), or [screen](/docs/schema/screen) calls. You can use select fields of the event to refine the audience on specific event properties as well. Select either `required`, `Not Required` or `Optional` to indicate customers that `have`, `have not` or `have optionally` performed an event. For example, you might want to look at all customers that have viewed a product above a certain price point, but not completed the order.

![Audience Builder](/img/audience3.png)

You can also specify time-windows, `in range (quick)`, `in range (realative)`, `in rage (absolute)`, `is before` and `is after` . A common use case is to look at all customers that were active 30 to 90 days ago, but have not completed an action in the last 30 days.

### Custom Traits

You can also build audiences based on custom traits. These traits can be collected from your apps when a customer completes a form, or signs up, using an [identify](/docs/schema/identify) call. You can also check out the Customer Activity Viewer to see examples of these traits.
