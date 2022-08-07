# strapi-webhook-reciever-plugin
It's a plugin for strapi4 that allows you be informed of any other strapi entity update.
You can use this plugin to split a monolith with strapi in some micro-headless and having all of them syncronized and unacopled.
Or, simply if you need syncronize 2 strapis, using this connector you will get all the information sync with webhooks.

## How to install using npm?
Simply write:
```
npm i strapi-webhook-reciever-plugin
```

## Configuration of Strapi webhooks
You can go to /admin/settings/webhooks and create a new webhook

![Webhook Creation](https://github.com/ericmora/strapi-webhook-reciever-plugin/blob/main/_docs/new-webhook.png?raw=true)

* *Headers:* you must add *strapiname* header. The value of the name is the same that you will use in your integration service plugin.
* *URL:* [[API-URL]]/webhook-reciever/from-other-strapi (first *webhook-receiver* is related with plugin.js file configuration key and second one *from-other-strapi* is related with routes file)

## Integration Service
On the reciever strapi you need create a plugin with methods of each entity action that you want to react.

* Check this sample for more information https://github.com/ericmora/strapi-integration-service-example

## How to install manually?
1. Copy files all files of this project to ./src/plugins/webhook-reciever
2. Create file ./config/plugins.js (if not exist) and copy next:

```
module.exports = {
    webhook-reciever: {
      enabled: true,
      resolve: './src/plugins/webhook-reciever',
    }
  };
```

## Tested with
* Strapi 4.3.2 (node v18.7.0)  