import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HomeWelcome } from '../HomeWelcome';

export default {
	title: 'Components/HomeWelcome',
	component: HomeWelcome,
} as ComponentMeta<typeof HomeWelcome>;

const Template: ComponentStory<typeof HomeWelcome> = () => <HomeWelcome />;

export const Default = Template.bind({});
