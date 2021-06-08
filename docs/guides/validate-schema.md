---
id: validate-schema
title: Validate Schemas
sidebar_label: Validate Schemas

---

Standard events, those detailed at [Intilery Default Schema](/docs/schema/intilery) do not need to be validated in order for these events to be recorded. The event's cannot be modified except for the [Identify event](/docs/schema/identify) in order to validate addtional customer traits.

## Validating Traits

Apart from the [default traits](/docs/schema/identify#traits) all additional traits will need to be validated before those traits are recognised.

To access the schema for core events (schemas), and custom events (schemas) that you have validated, navigate to Schemas

![Schemas](/img/default-validate1.png)

**Note:** The image above shows the schamas for core schemas and your custom schemas.

### Adding traits

It is possible to validate new traits in either the event stram or the schema view

#### Event Stream

Schema viloation for the event are shown below in the event stream, clicking on the violation will show "new fields", where you can set the validation requirements and click "Add Field" to recognise this new trait

**Note:** Don't forget to click "Save" at the bottom of the screen, new traits are not recorded until you validate and save them to the schema.

![Event identify](/img/event-identify.png)

#### Schema View

Schema violation for the event are shown below in the schema view, clicking on the violation will show "new fields", where you can set the validation requirements and click the save button to recognise the new trait.

**Note:** Don't forget to click "Save" at the bottom of the screen, new traits are not recorded until you validate and save them to the schema.

![Schema identify](/img/schema-identify.png)

