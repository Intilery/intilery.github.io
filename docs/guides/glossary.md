---
id: glossary
title: Glossary of Terms
sidebar_label: Glossary
---

# Glossary of Terms

## General Terms

### Account

A segregated account within your Intilery instance with nothing shared between
accounts.

### Brand

A brand is a way to differentiate different _products_ or _brands_ used by the same
set of customers. If you don't have multiple products, when using the
API your _brand ID_ will be the same as your _client ID_ but in all upper case.

### Client

You are the client. If you have multiple segregated groups of customers you will have
multiple [accounts](#account). 

When using the API your _account ID_ will the same as your _client ID_ if you only
have one account. 

### Tracking

The act of recording what your visitors and customers do on a tagged channel.


## Campaigns and Communications

### Asset

A message template to send to a customer through a channel. This will contain your
merge tags to generate personalisation when the [message](#message) is sent.

### Dynamic Content

Reusable blocks of content that can be build for use in the asset editor.

### Message

An instance of an [asset](#asset) send to a customer through a channel.
e.g. an email or SMS.

### Row

A row of columns in an [asset](#asset)

### Row Condition

A rule to display or hide a [row](#row).

### Saved Row

A row of content you can drag onto an [asset](#asset) or asset [template](#template).

### Schedule

The configuration to send an [asset](#asset) to an [audience](#audience)
at a given date/time.

### Status

The status of an asset

#### Draft

A new [asset](#asset) or edit to an exiting asset starts in Draft status.
Once the draft is ready, you can _Request Approval_

#### Approval

An [asset](#asset) with a change that is waiting to be reviewed and approved. A
reviewer can add comments and chose to _Reject_, or can _Approve_ the asset.

#### Rejected

A change to an [asset](#asset) can be rejected with a comment, so the editor can 
fix and re-submit for approval.

#### Approved

An [asset](#asset) that has been created or changed and has been approved for use.
The asset will not be sent out until it is changed to a [live](#live) status by choosing to
_Go Live_.

#### Live

An [approved](#approved) asset that is live and will be sent out to customers. Only 
one [version](#version) of an [asset](#asset) can be live at a time.
If you make a new version live, any previous version is [archived](#archived).

You can choose to _Archive_ a live asset.

If no version of an asset is live, then the asset cannot be sent.

#### Archived

A [version](#version) of an asset that is no longer being sent.


### Template

A reusable staring point for creating an [asset](#asset)/[message](#message). 

### Version

The version number given to an [asset](#asset). This will increment with each
change to the asset.

### Whitelist

List of email or SMS that can be applied to an [asset](#asset) to restrict who can be sent that asset.

## Customers and Customer Data

### Anonymous User

A customer you cannot identify yet. Also known as a [visitor](#visitor).

### Audience

A set of customers based on static (an upload) or dynamic (a query) rules.

### Computed Traits

Traits to apply to customers based on aggregation or calculations against events and
properties that track customer behaviour for reuse in multiple [audience](#audience) 
definitions.

### Customer

A single identifiable customer record.

### External ID

Shown in the Intilery Platform Customer details page. This is your 
[User ID](#user-id) passed in through the API.

### User ID

Your unique identifier for a customer. This will not change over time.

### Schema

Events and their properties that you send to Intilery.

#### Core Schema

The standard events and properties defined and tracked by Intilery.

### Traits

The customer properties that are set using and _identify_ event. These are facts
that you pass to Intilery about the customer and are not expected to change 
frequently.

### Visitor

Synonym for an [anonymous user](#anonymous-user).

## Controlling Access

### User

Identification details for someone who have access to the platform.

### Permission

Allows or denies access to a specific action in the platform.

### Policy

A policy groups a set of permissions for use in creating roles, or escalating a user's 
access.

### Role

A [user](#user) has a role which determines what access to the platform they have.

You can define and manage which users are in which roles.

There are two roles defined to start with, and Administrator for you and an Intilery
Support role for our support team if they need to access your account. You cannot
change the policies assigned to these default roles.


## Other Parts of the Platform

### Errors

Any errors that have occurred are reported here. This will indicate reasons why e.g.
an [asset](#asset) didn't send if the merge data didn't match what was set up.

### Events

Live view of the events as you send them to Intilery.

### Integrations

Configuration for calling out to other systems through an API (REST) call.

### Journeys

A set of automated activities that are triggered on the actions of a customer.

Note that a journey has a [status](#status) and [version](#version)
like an [asset](#asset). 

#### Journey Instance/Execution

An instance of the journey as applied to an individual customer.

### Regulations

Where you can setup rules to block tracking for a [User ID](#user-id) or carry out
GDPR right to access/right to be forgotton requests.

### Reporting / BI

Advanced campaign/journey reporting and dashboards

### Tag

The Intilery Tag to add to your website.

### Test Customers

Example records to assist testing [integrations](#integrations) or [asset](#asset) merge tags. 
