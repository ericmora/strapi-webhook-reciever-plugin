# strapi-webhook-reciever-plugin
It's a plugin for strapi4 that allows you be informed of any other strapi entity update

## How to install manually?
1. Copy files all files of this project to ./src/plugins/webhook-reciever
2. Create file ./config/plugins.js (if not exist) and copy next:

```
module.exports = {
    webhook-reciever: {
      enabled: true,
      resolve: './src/plugins/enki',
    }
  };
```

## Configuration of Strapi webhooks
* *Headers:* you must add origin header with the value of your integration service plugin.
* *URL:* [[API-URL]]/webhook-reciever/from-other-strapi (first *webhook-receiver* is related with plugin.js file configuration key and second one *from-other-strapi* is related with routes file)

## Integration Service
On the reciever strapi you need create a plugin with methods of each entity action that you want to react.

## Tested with
* Strapi 4.3.2 (node v18.7.0)  