const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {

	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addCollection("posts", (collection) => {
		return collection.getFilteredByGlob("_posts/**/*.md");
	});

	eleventyConfig.addCollection("games", (collection) => {
		return collection.getFilteredByGlob("_games/**/*.md");
	});

	return {
		templateFormats: [
			"md",
			"ejs",
			"css",
			"svg",
			"png",
			"mpds",
			"jpg"
		],
		passthroughFileCopy: true,
	};
};
