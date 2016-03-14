Package.describe({
    name: 'webpack:react',
    version: '1.1.3',
    summary: 'Integrate React with Webpack',
    git: 'https://github.com/thereactivestack/meteor-webpack.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'webpack:core-config@1.0.0'
  ]);

  api.add_files(['webpack.config.js']);
});
