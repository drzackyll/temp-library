import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import BarGraph from './BarGraph';

export default {
  title: 'Components/BarGraph',
  component: BarGraph,
  argTypes: {
    colors: {
      description: 'An array of strings of hex colors, in order they should appear from the left.',
    },
    percentages: {
      description: 'An array of numbers in order they should appear from the left. These should add to 100.'
    },
    dark: {
      type: {name: 'boolean', required: false},
      description: 'In the event that percentages sum to less than 100, this determines the color of the remaining bar.',
      table: {
        defaultValue: { summary: false }
      }
    },
    edited: {
      type: {name: 'boolean', required: false},
      description: 'Determines if the normal 100px width should be narrowed to 50px.',
      table: {
        defaultValue: { summary: false }
      }
    },
    dualBar: {
      type: {name: 'boolean', required: false},
      description: 'Determines if graph appears as two bars, with two percentages, each out of 100.',
      table: {
        defaultValue: { summary: false }
      }
    },
    squared: {
      type: {name: 'boolean', required: false},
      description: 'Determines if the bar should appear squared or rounded (default).',
      table: {
        defaultValue: { summary: false }
      }
    }
  }
} as ComponentMeta<typeof BarGraph>;

const Template: ComponentStory<typeof BarGraph> = (args) => <BarGraph {...args} />;

export const LightTotalDriverAmountFull = Template.bind({});
LightTotalDriverAmountFull.args = {
  colors: ['#2D6BFF', '#E6E6E6', '#FFD700'],
  percentages: [50, 25, 25]
}

export const LightTotalDriverAmountSplit = Template.bind({});
LightTotalDriverAmountSplit.args = {
  colors: ['#2D6BFF', '#F2F2F2'],
  percentages: [50, 50]
}

export const LightTotalDriverAmountEdited = Template.bind({});
LightTotalDriverAmountEdited.args = {
  colors: ['#2D6BFF', '#FFD700', '#E6E6E6'],
  percentages: [50, 25, 25],
  edited: true
}

export const LightFleetVsExteralFull = Template.bind({});
LightFleetVsExteralFull.args = {
  colors: ['#34CB81', '#F82A2A'],
  percentages: [50, 25],
  dualBar: true
}

export const LightFleetVsExteralSplit = Template.bind({});
LightFleetVsExteralSplit.args = {
  colors: ['#34CB81', '#F2F2F2'],
  percentages: [50, 50],
  squared: true
}

export const LightFleetVsExteralEdited = Template.bind({});
LightFleetVsExteralEdited.args = {
  colors: ['#34CB81', '#F82A2A'],
  percentages: [50, 25],
  dualBar: true,
  edited: true
}

export const LightLoadScore = Template.bind({});
LightLoadScore.args = {
  colors: ['#332D3C', '#F2F2F2'],
  percentages: [90, 10],
  squared: true
}

export const DarkTotalDriverAmountFull = Template.bind({});
DarkTotalDriverAmountFull.args = {
  colors: ['#2D6BFF', '#FFFFFF', '#FFD700'],
  percentages: [50, 25, 25]
}
DarkTotalDriverAmountFull.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkTotalDriverAmountSplit = Template.bind({});
DarkTotalDriverAmountSplit.args = {
  colors: ['#2D6BFF', '#26222D'],
  percentages: [50, 50]
}
DarkTotalDriverAmountSplit.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkTotalDriverAmountEdited = Template.bind({});
DarkTotalDriverAmountEdited.args = {
  colors: ['#2D6BFF', '#FFFFFF', '#FFD700'],
  percentages: [50, 25, 25],
  edited: true
}
DarkTotalDriverAmountEdited.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkFleetVsExteralFull = Template.bind({});
DarkFleetVsExteralFull.args = {
  colors: ['#34CB81', '#F82A2A'],
  percentages: [50, 25],
  dualBar: true,
  dark: true
}
DarkFleetVsExteralFull.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkFleetVsExteralSplit = Template.bind({});
DarkFleetVsExteralSplit.args = {
  colors: ['#34CB81', '#332D3C'],
  percentages: [50, 50],
  squared: true
}
DarkFleetVsExteralSplit.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkFleetVsExteralEdited = Template.bind({});
DarkFleetVsExteralEdited.args = {
  colors: ['#34CB81', '#F82A2A'],
  percentages: [50, 25],
  dualBar: true,
  edited: true,
  dark: true
}
DarkFleetVsExteralEdited.parameters = {
  backgrounds: {default: 'dark'}
}

export const DarkLoadScore = Template.bind({});
DarkLoadScore.args = {
  colors: ['#FFFFFF', '#332D3C'],
  percentages: [90, 10],
  squared: true
}
DarkLoadScore.parameters = {
  backgrounds: {default: 'dark'}
}