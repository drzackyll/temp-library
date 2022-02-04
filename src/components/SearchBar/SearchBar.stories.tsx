import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    dark: {
      description: 'Applies styling for dark mode.',
      table: {
        defaultValue: { summary: false}
      }
    }
  }
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const SearchBarLight = Template.bind({});
SearchBarLight.args = {
  dark: false
}

export const SearchBarDark = Template.bind({});
SearchBarDark.args = {
  dark: true
}
