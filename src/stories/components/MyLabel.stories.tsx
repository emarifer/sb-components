import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		color: { control: 'select' },
		customFontColor: { control: 'color' },
	},
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	size: 'normal',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: 'normal',
	allCaps: true, // If allCaps is true, capitalize the label text
	color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
	size: 'h1',
	customFontColor: '#5bf8e3',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
	size: 'h1',
	customFontColor: 'white',
	backgroundColor: '#8a1899'
};
