'use strict';

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const passthroughFiles = ['src/robots.txt',
                          'src/sitemap.xml',
                          'src/assets/fonts',
                          'src/assets/img',
                          'src/assets/js',
                          'src/assets/odp',
                          'src/assets/pdf',
                          'src/assets/special',
                          'src/assets/styles.css',
                          'src/assets/styles.css.map',
                         ];


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
  config.addCollection('enArticles', collectionApi => collectionApi.getFilteredByGlob('./src/content/en/articles/*.md'));
  config.addCollection('esArticles', collectionApi => collectionApi.getFilteredByGlob('./src/content/es/articles/*.md'));
  config.addCollection('frArticles', collectionApi => collectionApi.getFilteredByGlob('./src/content/fr/articles/*.md'));
  config.addCollection('enExercises', collectionApi => collectionApi.getFilteredByGlob('./src/content/en/exercises/*.md').sort((a, b) => {
    if (a.data.title > b.data.title) return 1;
    else if (a.data.title < b.data.title) return -1;
    else return 0;
  }));

  passthroughFiles.forEach(item => config.addPassthroughCopy(item));

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
