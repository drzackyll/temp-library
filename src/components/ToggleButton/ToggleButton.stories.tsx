import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToggleButton from './ToggleButton';
import { SvgIcon } from '@mui/material/';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const ToggleLightDefault: ComponentStory<typeof ToggleButton> = Template.bind({});
ToggleLightDefault.args = {
  textOne: 'List',
  textTwo: 'Map',
  startIcon: <SvgIcon>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
  </SvgIcon>,
  mode: 'light',
  value: 'List',
  onChange: () => null
};

export const ToggleLightAlternate: ComponentStory<typeof ToggleButton> = Template.bind({});
ToggleLightAlternate.args = {
  textOne: 'List',
  textTwo: 'Map',
  mode: 'light',
  value: 'List',
  onChange: () => null
};

export const ToggleLightHighlight: ComponentStory<typeof ToggleButton> = Template.bind({});
ToggleLightHighlight.args = {
  textOne: 'List',
  textTwo: 'Map',
  startIcon: <SvgIcon>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
  </SvgIcon>,
  mode: 'lightHighlighted',
  value: 'List',
  onChange: () => null
};

export const ToggleDarkDefault: ComponentStory<typeof ToggleButton> = Template.bind({});
ToggleDarkDefault.args = {
  textOne: 'List',
  textTwo: 'Map',
  startIcon: <SvgIcon>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
  </SvgIcon>,
  mode: 'dark',
  value: 'List',
  onChange: () => null
};
ToggleDarkDefault.parameters = {
  backgrounds: { default: 'dark' }
}

export const ToggleDarkHighlight: ComponentStory<typeof ToggleButton> = Template.bind({});
ToggleDarkHighlight.args = {
  textOne: 'List',
  textTwo: 'Map',
  startIcon: <SvgIcon>
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
  </SvgIcon>,
  mode: 'darkHighlighted',
  value: 'List',
  onChange: () => null
};
ToggleDarkHighlight.parameters = {
  backgrounds: { default: 'dark' }
}