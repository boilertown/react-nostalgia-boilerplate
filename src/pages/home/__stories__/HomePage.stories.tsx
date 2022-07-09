import { ComponentMeta, Story } from '@storybook/react';
import HomePage from '../HomePage';

export default {
	title: 'Pages/HomePage',
	component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Default: Story = () => <HomePage />;
