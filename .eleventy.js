const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {

  config.setNunjucksEnvironmentOptions({
    autoescape: false
  });

  config.addPlugin(eleventyNavigationPlugin);

  // These files get "passed through" to the build
  config.addPassthroughCopy('src/assets/fonts');
  config.addPassthroughCopy('src/assets/img');
  config.addPassthroughCopy('src/assets/style.css');
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'build'
    }
  };
};