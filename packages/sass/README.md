# webpack:sass by [The Reactive Stack](https://thereactivestack.com)
Meteor package to integrate SASS (.scss and .sass) import with [Webpack](https://github.com/thereactivestack/meteor-webpack)

## WARNING: If you are getting "ERROR in Missing binding"
You just have to run this command:
```sh
meteor npm rebuild node-sass
```

It includes `sass-resources-loader`
This loader will `@import` your SASS resources into every required SASS module.
So you can use your shared variables & mixins across all SASS styles without manually importing them in each file. Made to work with CSS Modules!

## Settings (webpack.json)
- `css.modules`: Enable local CSS by default
- `sass`: Setting object with node-sass options
- `sass.includePaths`: Set an array of includedPaths for the import
- `sassResources`: Set an single or array of paths of shared variables & mixins.
