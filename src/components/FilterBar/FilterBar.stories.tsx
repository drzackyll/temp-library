import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FilterBar from './FilterBar';
import { LaneIcon } from '../Icons/LaneIcon';

export default {
  title: 'Components/FilterBar',
  component: FilterBar,
} as ComponentMeta<typeof FilterBar>;

const defaultFilterBar = {
  title: 'Fleet Loads',
  icon: (
    <LaneIcon
      style={{
        padding: '4px 16px 0px 16px',
        color: '34cb81',
        width: '18px',
        height: '18px',
      }}
    />
  ),
  options: [{ name: 'View All' }, { name: 'Today' }],
  defaultValue: 0,
  content: null,
};

const Template: ComponentStory<typeof FilterBar> = (args) => (
  <FilterBar {...args} />
);

export const Dark = Template.bind({});
Dark.args = {
  onTabChange: (tabValue: any) => alert(tabValue),
  dark: true,
  filter: defaultFilterBar,
  onFilterClick: () => alert('Filter click'),
};

export const Lite = Template.bind({});
Lite.args = {
  onTabChange: (tabValue: any) => alert(tabValue),
  dark: false,
  filter: defaultFilterBar,
  onFilterClick: () => alert('Filter click'),
};
