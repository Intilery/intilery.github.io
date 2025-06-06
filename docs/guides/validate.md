---
id: validate
title: Review And Validate Events And violations
sidebar_label: Review And Validate
---

Upon sending data to Intilery, you will be able to view all events and violations in the event stream. To view violations, click on the Violations button located on the Schema tab in a Source. A filter can be applied to only show events with violations within the past 24 hrs, 7 days and 30 days.

![Vaidate](/img/validate.png)

***Note:*** The event stream shows valid and invalid events

![alert](/img/alert.png) The event has new properties not found on the schema, this event is recorded

![error](/img/error.png) An event that fails the required validation or a new event, this event is not recorded

To view detailed violations for an event, click on the specific event. Specific violations include:

- A new event type
- Missing required properties
- Invalid property value data types
- Property values that do not pass applied conditional filtering

To view a specific violation, simply mouseover on the violation icon to see details of the violation.

![violation](/img/violation.png)

### Schema Details

In this example we are validating a "Product Removed" event from the [ecommerce schema](/docs/schema/retail). Note even though the events are part of the standard Intilery ecommerce schema, you still need to validate them to ensure that they match what you expect.

To crrect a violation, click on the event in the event stream. Details of the event will be displayed in the right hand pane.

#### Raw

The raw data that was sent to Intilery

![raw](/img/raw.png)

#### Schema

This is the schema that Intilery has extracted from the data sent for the event.

![schema](/img/schema.png)

#### Edit

This enables you to set the requirements of the schema and it's properties

![edit](/img/edit.png)

## Correcting Violations

### A new event

Navigate to the Schema tab and review the properties of the schema, check that each property has the correct type and whether a property is required. You can change the type/required in the Edit tab.

Click "Mark as valid" to recognise as a valid event, all subsequent events of that type that meet the validation will now be recorded. You can amend or further enhance the validatino requirements of event properties in the Edit tab.

![valid](/img/valid.png)

### Setting Validation

Each property can be marked at "Required", meaning that if an event is sent to Intilery without containing this required property, the event is not recorded. This helps to keep your data clean and consistent.

***Note:*** Do not forget to click "Save" at the bottom of the list of properties to save any changes to property validation

![required](/img/required.png)

#### Property Validation

Each property can have optional validation settings

**Strings:-**

- Max Length - This keyword's (property value) must have a length of less than or equal to this value (the max length)
- Min Length - This keyword's (property value) must have a length of greater than or equal to this value (the min length)
- Pattern - A regex pattern to match against

![strings](/img/strings.png)

***Note:*** If the string is a valid date according to the [ISO-8601 UTC Timestamp](http://en.wikipedia.org/wiki/ISO_8601) datew format, Intilery will recognise the data type as a Date

**Numbers: -**

- Multiple Of - This value must be greater than 0 and is only valid if the value divisible by the setting (i.e. validation of 0.25 will only be valid for values that are divisable by 0.25 and produce a whole number; 1 is divisible by 0.25 = 4 where as 1.1 is not divisible by 0.25)
- Maximum - The value must be less than or equal to this value (the max value)
- Exclusive Maximum - The value must be less that this value (the max value)
- Minimum - The value must be greater than or equal to this value (the min value)
- Exclusive Minimum - The value must be greater than this value (the min value)

![numbers](/img/numbers.png)

**Booleans: -**

There are no options to validate booleans, you must pass in true or false (no quotes)

**Arrays: -**

- Max Items - The array can only contain less than or equal to the number of items specified
- Min Items - The array can only contain more than or equal to the number of items specified
- Unique Items - All items in the array must be unique (object unique)

![arrays](/img/arrays.png)

***Note:*** It is not currently possible to apply validation to objects within an array, Intilery will recognise the properties of objects within an array and make them available in [audiences](/docs/customers/audiences) and [computed traits](/docs/customers/computed-traits)

## Schema

All events and their properties can be accessed in the schema section of Intilery, 

### Core

These are the core events recorded via the Intilery tag or SDKs.

![default](/img/default.png)

### Custom

These are the events thay you have added and approved. Any recent new fields that require your action will also be shown.

![your](/img/your.png)