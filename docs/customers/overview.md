---
id: overview
title: Customer Data Platform
sidebar_label: Customers
---

Intilery is a powerful Customer Data Platform that enables you to create unified customer profiles in Intilery, to build and enrich audiences and send marketing campaigns to those customers and audiences, along with personalisation.

### What can you do with Customers?

#### Enrich profiles with new traits

Add detail to customer profiles with new traits, and use them to power personalised marketing campaigns. You can add new traits to your customer in Intilery using:

- [**Computed Traits:**](/docs/customers/computed-traits/) Use the Customers drag-and-drop interface to build per-customer profiles (for example, “lifetime value” or “most viewed category”).
- [**SQL Traits:**](/docs/customers/sql-traits/) Run custom queries on your data warehouse using the Personas SQL editor, and import the results into Intilery. This allows you to pull rich customer data that you aren’t capturing using your Intilery implementation, back into Intilery. (coming soon)
- API Traits: Call out to external APIs to add rich custoemr data to the profile in Intilery (coming soon)

#### Build Audiences

Create a list of customers match specific criteria, for example “inactive accounts” (paying accounts who haven’t logged in in 60 days), and use that Audience for automagted marketing activites. Learn more about [audiences](/docs/customers/audiences).

## Customers core components

Before you start setting up Customers, here are some features and terms that we’ll use in this documentation. The main parts of Customers are your Intilery account, Audiences, Customer Activity Viewer, Schemas, and Traits (Computed, SQL, and API).

## Audiences

An [Audience](/docs/customers/audiences/) is a list of customers who match a specific criteria. An example of a basic Audience that Intilery's Marketing team might build is an “active sign ups” audience for an email marketing campaign. This Audience is contains all customers who signed up in the last seven days on the free plan. The example below shows how you could define this audience in the Audience Builder.

![Fre Plan Audicne](/img/audience-signup.png)

## Customer Activity Viewer and Traits

The customer activity viewier is the single view of your customer in Intilery. *Traits* are customer attributes that you can see in the activity viewer.

- The **Activity Viewer** contains all of the data that you have on a customer - from their event history to their traits and identifiers.
- **Computed Traits** are per-customer traits that you create or “compute” in Intilery using a drag-and-drop interface. When you build a Computed Trait, Intilery adds it to relevant customer profiles. Customers recomputes these traits once every 5 minutes to make they are always accurate. See the [Computed traits documentation](/docs/customers/computed-traits/) for more detailed information.
- **SQL Traits** are per-customer traits that you create by running queries against your data warehouse, which can include data not captured using your Intilery implementation. Intilery imports the results into Customers, and appends these traits to the customer profile. Intilery recomputes these traits every 12 hours to make sure they are always accurate. See the [SQL trait documentation](/docs/customers/sql-traits/) for more detailed information. (coming soon)
- **Custom Traits** are customer properties collected from all the events you send to Intilery. For example, you can add any properties that you send as a part of your track calls or identify calls (`email`, `first_name`, `last_name`) as custom traits. You can then view them in the customer activity viewer, and use them in your audiences, computed traits and SQL traits.
- **API Traits** are custoemr properties that are collected from an external API (coming soon)

![Customer Activity Viewer](/img/customer-activity.png)