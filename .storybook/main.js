module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
	features: {
		storyStoreV7: true,
	},
	webpackFinal: async (config) => {
		config.stats = 'errors-only';
		config.resolve.modules.push('src');

		return config;
	},
};
