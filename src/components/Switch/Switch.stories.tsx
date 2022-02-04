import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Switch from './Switch';

export default {
    title: 'Components/Switch',
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchLightSelected: ComponentStory<typeof Switch> = Template.bind({});
SwitchLightSelected.args = {
    checked: true,
    dark: false
}

export const SwitchLightSelectedWithText: ComponentStory<typeof Switch> = Template.bind({});
SwitchLightSelectedWithText.args = {
    checked: true,
    dark: false,
    text: "Text",
    textPlacement: "left"
}

export const SwitchLightUnselected: ComponentStory<typeof Switch> = Template.bind({});
SwitchLightUnselected.args = {
    checked: false,
    dark: false
}

export const SwitchDarkSelected: ComponentStory<typeof Switch> = Template.bind({});
SwitchDarkSelected.args = {
    checked: true,
    dark: true
}
SwitchDarkSelected.parameters = {
    backgrounds: { default: 'dark' }
  }

  export const SwitchDarkSelectedWithText: ComponentStory<typeof Switch> = Template.bind({});
  SwitchDarkSelectedWithText.args = {
      checked: true,
      dark: true,
      text: "Text",
      textPlacement: "right"
  }
  SwitchDarkSelectedWithText.parameters = {
      backgrounds: { default: 'dark' }
    }

export const SwitchDarkUnselected: ComponentStory<typeof Switch> = Template.bind({});
SwitchDarkUnselected.args = {
    checked: false,
    dark: true
}
SwitchDarkUnselected.parameters = {
    backgrounds: { default: 'dark' }
  }
