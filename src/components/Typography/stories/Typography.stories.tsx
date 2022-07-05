import { ComponentStory } from '@storybook/react';
import { Typography } from '../Typography';

export default {
	title: 'Components/Typography',
	component: Typography,
};

export const Default = () => {
	return (
		<>
			<Typography.Title>Heading</Typography.Title>
			<Typography.Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</Typography.Paragraph>
		</>
	);
};

export const Title: ComponentStory<typeof Typography.Title> = (args) => (
	<Typography.Title {...args} />
);
Title.args = {
	level: 1,
	size: 'big',
	children: 'Heading',
};
Title.argTypes = {
	level: {
		options: [1, 2, 3, 4, 5, 6],
		control: {
			type: 'select',
		},
	},
	size: {
		options: ['standard', 'medium', 'big'],
		control: {
			type: 'radio',
		},
	},
	weight: {
		options: ['normal', 'bold'],
		control: {
			type: 'radio',
		},
	},
};

export const Paragraph: ComponentStory<typeof Typography.Paragraph> = (
	args,
) => <Typography.Paragraph {...args} />;
Paragraph.args = {
	size: 'standard',
	weight: 'normal',
	children:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
Paragraph.argTypes = {
	size: {
		options: ['standard', 'medium', 'big'],
		control: {
			type: 'radio',
		},
	},
	weight: {
		options: ['normal', 'bold'],
		control: {
			type: 'radio',
		},
	},
};
