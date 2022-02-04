import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import SideNav from './SideNav';

export default {
  title: 'Components/SideNav',
  component: SideNav,
  argTypes: {
    anchor: {
      options: ['left', 'right'],
      control: { type: 'select'}
    },
  },
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    showSideMenu: true,
    onMenuItemClick: () => null,
    menuItem: [{icon: null, title: 'Title'}],
    anchor: 'left',
    onClose: () => null
};