import { ComponentMeta, Story } from '@storybook/react';
import NotFoundPage from '../NotFoundPage';

export default {
	title: 'Pages/NotFoundPage',
	component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

export const Default: Story = () => <NotFoundPage />;
