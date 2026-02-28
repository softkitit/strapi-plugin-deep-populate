"use strict";
const requestContext = require("./request-context");

module.exports = ({ strapi }) => {
  strapi.server.use(async (ctx, next) => {
    const pLevel = ctx.request.query?.pLevel;
    if (pLevel !== undefined) {
      const depth = Number(pLevel) || undefined;
      return requestContext.run({ pLevel: depth }, async () => {
        await next();
      });
    }
    await next();
  });
};
