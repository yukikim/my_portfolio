module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addPassthroughCopy('src/js');
	eleventyConfig.addWatchTarget('src/css');
	eleventyConfig.addWatchTarget('src/js');

	eleventyConfig.addCollection('projects', (collection) => {
		return collection.getFilteredByGlob('src/projects/*.md');
	});

	eleventyConfig.addCollection('resumes', (collection) => {
		return collection.getFilteredByGlob('src/resumes/*.md');
	});

	eleventyConfig.addShortcode('year', () => {
		return `${new Date().getFullYear()}`;
	});

	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
