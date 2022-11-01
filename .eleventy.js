'use strict';

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const passthroughFiles = ['src/robots.txt',
                          'src/robots.txt',
                          'src/assets/fonts',
                          'src/assets/img',
                          'src/assets/pdf',
                          'src/assets/styles.css',];


module.exports = config => {

  // Plugins
  config.addPlugin(eleventyNavigationPlugin);

  // Turn offf autoescaping
  config.setNunjucksEnvironmentOptions({
    autoescape: false
  });

  /* config.addCollection('da', collectionApi => collectionApi.getFilteredByGlob('./src/content/da/*')); */
  config.addCollection('en', collectionApi => collectionApi.getFilteredByGlob('./src/content/en/*'));
  config.addCollection('es', collectionApi => collectionApi.getFilteredByGlob('./src/content/es/*'));
  config.addCollection('en_articles', collectionApi => collectionApi.getFilteredByGlob('./src/content/en/articles/*'));
  config.addCollection('es_articles', collectionApi => collectionApi.getFilteredByGlob('./src/content/es/articles/*'));

  passthroughFiles.forEach(element => config.addPassthroughCopy(element));

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