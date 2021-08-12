# API For Mobile

When sending data to Intilery from a mobile app you can use the same endpoints
that are used by the [JavaScript tag](../tag/tag1) detailed below.

We would recommend that to preserve the users' battery and minimise network
connections, that you batch events up and send them to the batch endpoint. See
our [Native SDKs](./main#integrate-tracking-with-your-app) for examples.

## Write Key

To match the data to your account you need to include a `writeKey` with each call.
You can get your `writeKey` by going to the **Tag** menu and copying it out of
the JavaScript Website Tag from line 3:

```javascript
analytics.load("<this is the writeKey you need to copy>"); 
```

You will pass the `writeKey` in each event or batch sent to Intilery. 

## Endpoints

To send data to Intilery you `POST` a JSON document
with the `content-type` header set to `application/json`.

Send the data as described in the appropriate [schema](../schema/contents) 
passing in the `writeKey` as part of the root object.

### Single Event Endpoint

For a single event, include the `writeKey` as a field in the JSON

```http request
POST https://events.intilery.com/cdp/events/segment/t
```

e.g. sending a [screen](../schema/screen) event you would send:
```json
{
  "type": "screen",
  "name": "Home",
  "writeKey": "<this is your write key>"
}
```

### Batch Event Endpoint

When you batch events up, you send a list of the events in the order they
happened.

The `writeKey` is only passed in the root of the request, along with `batch`.

```http request
POST https://events.intilery.com//cdp/events/segment/mobile/batch
```

```json
{
  "writeKey":  "<this is your write key>",
  "batch": [
    {
      "type": "screen",
      "name": "Home",
      "properties": {
        "Feed Type": "private"
      },
      "timestamp": "2021-08-11T12:58:23.062Z",
      "sentAt": "2021-08-11T12:58:28.374Z"
    },
    {
      "type": "screen",
      "name": "Account",
      "timestamp": "2021-08-11T12:58:28.019Z",
      "sentAt": "2021-08-11T12:58:28.374Z"
    }
  ]
}
```

:::note

`timestamp` and `sentAt` are optional,
and if not provided Intilery will add a timestamp on receipt of the event.
They can be used to help debug and spot time differences between device and
receipt of event. Intilery will add a `receivedAt` timestamp on receipt of the 
event.

:::
