import { Counter } from '../Counter';

export default {
	title: 'Components/Counter',
	component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});
