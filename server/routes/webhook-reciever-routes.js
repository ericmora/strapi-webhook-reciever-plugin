module.exports = {
    type: 'content-api', 
    routes: [
      {
      method: 'POST',
      path: '/from-other-strapi',
      handler: 'webhookReciever.index',
      config: {
        policies: [],
        auth: false
      },
    },
  ],
  };
  