/*
*
*	Global config
*
*/ 

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

	// Add navigation plugin
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	// Copy files from root css/ directory to build
	eleventyConfig.addPassthroughCopy('css');

	// Copy script files from root js/ to build
	eleventyConfig.addPassthroughCopy('js');

	// Copy all files in the img directories for each post
	eleventyConfig.addPassthroughCopy("articles/*/img/*");

	// Register .md files as templates
	eleventyConfig.setTemplateFormats("md");


	return {
		passthroughFileCopy: true
	}
};