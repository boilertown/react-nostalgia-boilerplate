import { ComponentMeta, Story } from '@storybook/react';
import NotFoundPage from '../NotFoundPage';

export default {
	title: 'Pages/NotFoundPage',
	component: NotFoundPage,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof NotFoundPage>;

export const Default: Story = () => <NotFoundPage />;
