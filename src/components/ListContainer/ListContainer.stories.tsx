import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ListContainer from './ListContainer';

export default {
  title: 'Components/ListContainer',
  component: ListContainer,
} as ComponentMeta<typeof ListContainer>;

const Template: ComponentStory<typeof ListContainer> = (args) => <ListContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
}