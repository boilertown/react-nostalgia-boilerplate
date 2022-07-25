import { ComponentMeta, Story } from '@storybook/react';
import HomePage from '../HomePage';

export default {
	title: 'Pages/HomePage',
	component: HomePage,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof HomePage>;

export const Default: Story = () => <HomePage />;
