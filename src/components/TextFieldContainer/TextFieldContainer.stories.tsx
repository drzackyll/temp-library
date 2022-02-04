import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TextFieldContainer from './TextFieldContainer';

export default {
  title: 'Components/TextFieldContainer',
  component: TextFieldContainer,
} as ComponentMeta<typeof TextFieldContainer>;

const Template: ComponentStory<typeof TextFieldContainer> = (args) => <TextFieldContainer {...args} />;

export const Dark = Template.bind({});
Dark.args = {
  title: "Title",
  type: null,
  style: null,
  value: null,
  placeholder: null,
  variant: 'outlined',
  handleChange: () => null,
  disableUnderline: false,
  endAdornment: null,
  disabled: false
}