# BEVAE

## Video Demo

https://vimeo.com/760674773

## Description

I'm choosing to submit my personal website/blog as the final project for CS50x. There are a few interesting tools and techniques implemented in this website which I'd like to showcase:

- Static site generation
- Multilingual capability
- Git-based deployment
- CSS framework

### Static site generation

Eleventy (11ty) is a JavaScript/node.js-based static site generator. It's very minimal out of the box, but very powerful. It is made to handle a variety of templating languages, with Nunjucks (a JS version of Jinja) being the most widely used, and the one I'm using. I am able to write articles in Markdown, and then input those files into HTML/Nunjucks templates in order to generate the website pages.

**src/** is where the source files are contained, within which there's a site data file in **_data/**, templates in **_includes/**, **assets/** for CSS, images, and other static files, and **content/** for the HTML and markdown files which define individual pages on the site.

**.eleventy.js** is where the 11ty is configurated. I can choose which files to "pass through" 11ty without any processing, such as static files.

I can define data on a page level (using YAML front matter), a folder level (e.g., **src/content/en/articles/articles.json**), or a site-wide level (seen in **src/_data/site.js**) and use these key: value pairs to generate my site's pages dynamically.

### Multilingual capability

I've leveraged the ways 11ty allows me to define data in order to create a multilinngual site. In **src/content/**, I split my website into en (english) and es(spanish). In the articles subfolder for each language, I have a blog article which I've linked using a translationKey.

Using this key, I've implemented a feature where you can switch between the english and spanish versions of the page (the link is generated automatically) in **src/_includes/partials/header.html**.

### Git-based deployment

The site files taken from **src/** are run through 11ty's processing and are output to **dist/**. The command to do this which I've defined in **package.json** is 'npm run rebuild'.

I am using Netlify to deploy the site (https://bevae.com). Whenever I push changes to GitHub, Netlify senses this and runs the build command, and then takes the static files and distributes them to their CDN automatically.

### CSS framework

I am using SASS to write my CSS. One of the cool things I've been developing over the past couple of months is a CSS framework which will allow me to enforce a consistent, but custom structure when styling websites. It can be seen in **src/assets/scss/**.

I've taken the global-composition-utility-block structure from Andy Bell's [CUBE CSS methodology](https://cube.fyi).

**global/** contains "global" site CSS. CSS variables defining standard colors, font sizes, spacing, etc. can be found in **_root.scss**, while **_elements.scss** is where general HTML element styling takes place.

In **composition/** I've defined a variety of layout components, intended as "building blocks" which can be fitted together like LEGO blocks to create any layout skeleton imaginable. These are based on [Every Layout](https://every-layout.dev).

**utility/** is where all of my custom-made utility classes can be found, each of which (in the words of Andy Bell) "does one job and does it well."

**block/**, the final set of files, is where I define unique classes specific to this project. The navigation header, various forms—an example of which can be found on https://bevae.com/en/oemsq-12/, the spanish version of which I've set up to automatically calculate the questionnaire score and send the data to my email inbox—and blogpost-specific CSS can be found here.

All of the files are compiled in styles.scss in order, and then SASS processes the .scss files and minifies the CSS to the final output file.