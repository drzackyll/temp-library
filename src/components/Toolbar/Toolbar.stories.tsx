import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toolbar from './Toolbar';
import Button from '../Button/Button';

export default {
  title: 'Components/Toolbar',
  component: Toolbar
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => <Toolbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  dark: true
}
