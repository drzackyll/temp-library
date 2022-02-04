import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import DonutChart from './DonutChart';

export default {
  title: 'Components/DonutChart',
  component: DonutChart,
  argTypes: {
    colors: {
      description: 'An array of strings of hex colors, in order they should appear clockwise from the top.',
    },
    percentages: {
      description: 'An array of numbers in order they should appear clockwise from the top. These should add to 100.'
    },
    dark: {
      type: {name: 'boolean', required: false},
      description: 'In the event that percentages sum to less than 100, this determines the color of the remaining arc.',
      table: {
        defaultValue: { summary: false }
      }
    },
    index: {
      type: {name: 'number', required: false},
      description: 'If multiple charts are being rendered (e.g. by mapping), provide a unique index/key.',
      table: {
        defaultValue: { summary: 0 }
      }
    }
  }
} as ComponentMeta<typeof DonutChart>;

const Template: ComponentStory<typeof DonutChart> = (args) => <DonutChart {...args} />;

export const LightTotalDriverAmountFull = Template.bind({});
LightTotalDriverAmountFull.args = {
  colors: ['#2D6BFF', '#FFD700', '#E6E6E6'],
  percentages: [50, 25, 25]
}

export const LightFleetVsExternalFull = Template.bind({});
LightFleetVsExternalFull.args = {
  colors: ['#34cb81'],
  percentages: [75]
}

export const LightLoadScore = Template.bind({});
LightLoadScore.args = {
  colors: ['#332D3C', '#FFFFFF'],
  percentages: [75, 25]
}

export const DarkTotalDriverAmountFull = Template.bind({});
DarkTotalDriverAmountFull.args = {
  colors: ['#2D6BFF', '#FFD700', '#FFFFFF'],
  percentages: [50, 25, 25]
}
DarkTotalDriverAmountFull.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkFleetVsExternalFull = Template.bind({});
DarkFleetVsExternalFull.args = {
  colors: ['#34cb81', '#332D3C'],
  percentages: [75, 25]
}
DarkFleetVsExternalFull.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkLoadScore = Template.bind({});
DarkLoadScore.args = {
  colors: ['#FFFFFF', '#332D3C'],
  percentages: [75, 25]
}
DarkLoadScore.parameters = {
  backgrounds: {default: 'dark'}
}