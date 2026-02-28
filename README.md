# @softkit/strapi-plugin-populate-deep

Strapi v5 plugin that populates nested content structures using the REST API.

# Installation

`pnpm add @softkit/strapi-plugin-populate-deep`

# Usages

## Examples

Populate a request with the default max depth.

`/api/articles?pLevel`

Populate a request with a custom depth.

`/api/articles?pLevel=10`

Populate a single entry with a custom depth.

`/api/articles/1?pLevel=10`

## Good to know

The default max depth is 5 levels deep.

The populate deep option is available for all collections and single types using the findOne and findMany methods.

# Configuration

The default depth can be customized via the plugin config. To do so create or edit your `config/plugins.js` file.

## Example configuration

`config/plugins.js`

```js
module.exports = ({ env }) => ({
  '@softkit/strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, // Default is 5
    }
  },
});
```

# Contributions

The original idea for getting the populate structure was created by [tomnovotny7](https://github.com/tomnovotny7) and can be found in [this](https://github.com/strapi/strapi/issues/11836) github thread.

Strapi v5 migration based on work by [NEDDL](https://github.com/NEDDL/strapi-v5-plugin-populate-deep).
