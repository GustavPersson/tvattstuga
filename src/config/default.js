module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 5000,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Tvättstugan!',
    titleTemplate: 'Tvättstuga - %s',
    meta: [
      { name: 'description', content: 'The best tvättstugebokning in the world.' },
    ],
  },
};
