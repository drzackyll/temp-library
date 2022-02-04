import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button/Button';
import PageHeader from './PageHeader';
const myButtons = [
	{
			headerButton: (
			<Button
					variant='contained'
					text='Primary'
					dark={true}
					onClick={() => alert('Primary')}
			/>
			)
	},
	{
			headerButton: (
			<Button
					variant='contained'
					text='Secondary'
					dark={true}
					onClick={() => alert('Secondary')}
			/>
			)
	}
]

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: false,
  headerButtons: myButtons,
  showHeaderBack: true,
  onHeaderBack: () => alert('Header back')
}

export const Dark = Template.bind({});
Dark.args = {
    dark: true,
    headerButtons: myButtons,
    showHeaderBack: true,
    onHeaderBack: () => alert('Header back')
};