---
id: trackingplan
title: What is a tracking plan?
sidebar_label: Tracking Plan
---

A tracking plan is a document or spreadsheet used across an organization to standardize how it tracks data. Often serving as both a project management tool and a reference document, a tracking plan aligns multiple teams around one strategy for customer data collection.

Essentially, a tracking plan consists of a list of events (i.e., user actions) accompanied by a description for each event. These events are used to map the most important steps of the customer journey, from free trial sign-up to recurring subscription to churn.

This central list of events can grow and change alongside your company. All the while, it will provide a consistent road map for what data is important, where it’s being tracked, and why. In the end, your tracking plan can help you create an airtight process for scaling data collection across a growing company.

## **What is the role of a tracking plan?**

Your tracking plan serves as the single source of truth across your organization for understanding **what** data you’re tracking, **where** you’re tracking that data, and **why**. A tracking plan usually has columns for each of these values, like this:

![what to track](/img/cols.jpg)

In this example, the “what” is the events and properties you track, which are logged in the NAME and PROPERTIES columns above. The “where” (logged under LOCATION) is the location and time at which the event is being tracked. Finally, the “why” (logged under WHY) is a short description of the business purpose that justifies tracking the event.

Not all tracking plans look exactly like this. They’re living documents that are built to suit the needs of the businesses they serve. You might use a different naming convention for event names and event properties, you might be more detailed in your “why” entries, or you might need to add new events. And as your business objectives evolve, so will the data you track. For instance, your naming convention might need to change as you add new features to your product.

No matter how it shapes up in the end or how it changes, the core purpose of a tracking plan remains the same: to coordinate your data collection in a central reference. Every team that touches customer data will be able to access and use this central reference, keeping them aligned with your current business objectives.

Over time, an airtight process will emerge for customer data tracking that’s consistent, compliant, and customized to your exact needs. All made possible with one document.

## **What are the benefits of a tracking plan?**

A tracking plan is a collaborative document, taking input from every department that touches customer data. This process of collaboration forces your business to think of analytics as a team sport, where everyone agrees to play within a certain set of guidelines and work together toward a shared goal. Working together this way will help ensure your business utilizes higher-quality data, gains alignment across teams, and establishes a framework for consistent growth.

In the short term, the quality of your data will improve, and your teams will be more efficient, thanks to a codified process for tracking customer data.

- Your **data will be cleaner** because every team is using the same process for collecting it.
- Your **data will be** **compliant** with regulations because you’ve documented the what, why, where, and how of your customer data tracking.
- The **whole organization will gain alignment** around one clearly documented and easy-to-understand plan for tracking data.

In the long term, a tracking plan becomes a living part of your company’s infrastructure and one of the primary drivers of growth.

- Tracking plans are living documents that will provide a **flexible framework** for your customer data that grows and changes alongside your company.
- For launches and update releases, a tracking plan will help you set metrics-driven goals that can **help your teams build a better product**.

A tracking plan is a long-term investment into the future of how your business collects data, the benefits of which are both immediate and long-lasting.

## What events should I track?

The specific events you decide to track are unique to your business and depend on a lot of factors, like how your product is designed, who your audience is, your overall business goals, and more.

In short, you should track events that provide answers to questions you have about your customers, like who they are, how they behave, and what they want. To identify your questions, you need to decide on what exactly you want to learn, that is, what questions do you have that, if answered, will help your business grow by better engaging with your customers.

Consider the question, “When do people who sign up for a free trial decide to purchase a full subscription?” In this case, you might start by tracking the events “Signed up” and “Subscription started” to hone in on that conversion rate by automating a series of prompts and A/B testing incentives.

Start broad then narrow in on opportunities for improvement. The first question you might ask could be, “What are the key steps to our customer journey?” Once you have your answer, you can move on to “Where is our conversion funnel inefficient?” Then, you can get really specific with questions like, “How does our new subscriber rate change if we change in-product navigation?”

In the early days at Intilery, we started by tracking three simple events:

- Signed up
- Trial Requested
- Logged in

These events provided answers to our questions around who was signing up, how many of them were active in our product, and when to make how often (or not) they logged in, enabling us to act upon this data to better serve our customers.

![Zoom with margin](/img/events.png)

## **Ready to get started?**

Fair warning: Creating a tracking plan is a lot of work, but it’s well worth it in the end. As we’ve outlined here, start by approaching analytics as a learning process. With this approach, your customer data collection will center around finding answers to important questions.

Once you’re in that mindset, you’re ready to start forming your plan. Here are a few resources to get things rolling:

Use the [Intilery Tracking Plan Template](https://docs.google.com/spreadsheets/d/13D0nG-_5RmEmUj8LHraH4Ndv0oQunXHzdN9NRJNFqsM/edit?usp=sharing) to create your tracking plan

### Tracking Plan Columns

The Tracking Plan editor is organized as a spreadsheet to help you add new events and properties, and edit the relevant fields for each. Like a spreadsheet, you can navigate across cells in a single event with your arrow keys and press enter to edit a cell.

| COLUMN NAME      | DETAILS                                                      |
| ---------------- | ------------------------------------------------------------ |
| Name             | Specify the name of your event or property.                  |
| Description      | Enter a description for your event or property. These descriptions are helpful for both engineers instrumenting Intilery and consumers of the data. |
| Status           | Specify whether a property is required or optional. You can’t require a `.track()` call because Intilery is unable to verify when a `.track()` call should be fired. |
| Data Type        | Specify the data type of the property. Data type options include `any, array, object, boolean, integer, number, string`. |
| Permitted Values | Enter simple regular expressions to validate property values. This works when a property data type is set to `string`. For example, you can add pipe delimited strings to the regex column to generate violations when a property value does not match fall, winter or spring. |

The Status, Data Type, and Permitted Values columns appear as you add a track call property.

### Add a new track call

To add a new track call:

1. Click **Add Event** to add a new row.
2. Click into the row to add an event name and description. The event name strictly validates the name passed in your `.track()` calls. Casing, spacing and spelling matter!

### Add a track call property

To add a track call property:

1. Click on the **(+)** next to the event name to add a new row below the event name.
2. Click into the row to add the property name and also specify the description, status, data type and permitted values when applicable.
   - You can use your keyboard arrow and enter keys to navigate across the cells, or use your mouse.

### Add a track call object or array property

Intilery supports object and array data types in the Tracking Plan editor. These complex data structures have limited use cases and should be used sparingly as some destinations aren’t able to ingest the data structures. To add an object or array:

1. Create a new property row and set the Data Type to `Object` or `Array`.
2. Click the **(+)** next to the property name to add key value pairs in the object, or objects to an array of objects.

### Add a label

You can apply `key:value` labels to each event to help organize your tracking plan. These labels are helpful when multiple teams are managing a single tracking plan, or if you want to specify a priority, platform, product, or similar meta-data for each event. You can filter by label from the Tracking Plan, Schema, Data Validation and Violations Summary views.

For consistency purposes, it’s best that you create a standard way of labeling events and share it with all parts of your organization that will use Intilery.

![img](https://intilery.com/docs/protocols/tracking-plan/images/labels.png)

### Filter track calls in the Tracking Plan

You can filter the Tracking Plan events by keyword or by label. The applied filter generates a permanent link so you can share specific events with teammates. Label filters also persist after you leave the Tracking Plan.

### Extend the Tracking Plan

Some customers prefer to manage the Tracking Plan with outside tools and resources. See the [APIs and extensions](https://intilery.com/docs/protocols/apis-and-extensions/) section to learn more.