import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Counter } from '../Counter';

export default {
	title: 'Components/Counter',
	component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const Default = Template.bind({});
