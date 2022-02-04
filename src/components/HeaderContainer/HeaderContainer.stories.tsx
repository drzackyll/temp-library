import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import HeaderContainer from './HeaderContainer';

export default {
  title: 'Components/HeaderContainer',
  component: HeaderContainer,
} as ComponentMeta<typeof HeaderContainer>;

const Template: ComponentStory<typeof HeaderContainer> = (args) => <HeaderContainer {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  dark: true
}