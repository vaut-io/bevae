const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {

  // config.addCollection('da', collectionApi => collectionApi.getFilteredByGlob('./src/content/da/*'));
  config.addCollection('en', collectionApi => collectionApi.getFilteredByGlob('./src/content/en/*'));
  config.addCollection('es', collectionApi => collectionApi.getFilteredByGlob('./src/content/es/*'));
  config.addCollection('en_articles', collectionApi => collectionApi.getFilteredByGlob('./src/content/en/articles/*'));
  config.addCollection('es_articles', collectionApi => collectionApi.getFilteredByGlob('./src/content/es/articles/*'));

  config.setNunjucksEnvironmentOptions({
    autoescape: false
  });

  config.addPlugin(eleventyNavigationPlugin);

  // These files get "passed through" to the build
  config.addPassthroughCopy('src/assets/fonts');
  config.addPassthroughCopy('src/assets/img');
  config.addPassthroughCopy('src/assets/pdf');
  config.addPassthroughCopy('src/assets/styles.css');
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};