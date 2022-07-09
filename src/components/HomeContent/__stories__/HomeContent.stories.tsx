import { HomeContent } from '../HomeContent';

export default {
	title: 'Components/HomeContent',
	component: HomeContent,
};

const Template = (args) => <HomeContent {...args} />;

export const Default = Template.bind({});
