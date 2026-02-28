"use strict";
const { getFullPopulateObject } = require("./helpers");

module.exports = ({ strapi }) => {
  strapi.db.lifecycles.subscribe((event) => {
    if (event.action === "beforeFindMany" || event.action === "beforeFindOne") {
      const level = event.params?.pLevel;

      const defaultDepth =
        strapi
          .plugin("strapi-plugin-populate-deep")
          ?.config("defaultDepth") || 5;

      if (level !== undefined) {
        const depth = level ?? defaultDepth;
        const modelObject = getFullPopulateObject(event.model.uid, depth, []);
        event.params.populate = modelObject.populate;
      }
    }
  });
};
