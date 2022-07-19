import { HomeWelcome } from '../HomeWelcome';

export default {
	title: 'Components/HomeWelcome',
	component: HomeWelcome,
};

const Template = (args) => <HomeWelcome {...args} />;

export const Default = Template.bind({});
