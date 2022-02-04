import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Input from './Input';
import { Lock, PriorityHigh } from '@mui/icons-material';

export default {
    title: 'Components/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLightDefault: ComponentStory<typeof Input> = Template.bind({});
InputLightDefault.args = {
    variant: "standard",
    label: "Input",
    helperText: "Message",
    dark: false,
    endIcon: <Lock />,
    width: "392px"
}

export const InputLightError: ComponentStory<typeof Input> = Template.bind({});
InputLightError.args = {
    variant: "standard",
    label: "Input",
    helperText: "Message",
    dark: false,
    endIcon: <PriorityHigh />,
    width: "392px",
    error: true,
    value: "Input Error"
}

export const InputLightDisable: ComponentStory<typeof Input> = Template.bind({});
InputLightDisable.args = {
    variant: "standard",
    label: "Input",
    helperText: "Message",
    dark: false,
    endIcon: <Lock />,
    width: "392px",
    disabled: true,
    value: "Input Value"
}

export const InputDarkDefault: ComponentStory<typeof Input> = Template.bind({});
InputDarkDefault.args = {
    variant: "standard",
    label: "Input",
    helperText: "Message",
    dark: true,
    endIcon: <Lock />,
    width: "392px"
}
InputDarkDefault.parameters = {
    backgrounds: { default: 'dark' }
  }

export const InputDarkError: ComponentStory<typeof Input> = Template.bind({});
InputDarkError.args = {
    variant: "standard",
    label: "Input",
    helperText: "Message",
    dark: true,
    endIcon: <PriorityHigh />,
    width: "392px",
    error: true,
    value: "Input Error"
}
InputDarkError.parameters = {
    backgrounds: { default: 'dark' }
  }

export const InputDarkDisable: ComponentStory<typeof Input> = Template.bind({});
InputDarkDisable.args = {
    variant: "standard",
    label: "Input",
    helperText: "Message",
    dark: true,
    endIcon: <Lock />,
    width: "392px",
    disabled: true,
    value: "Input Value"
}
InputDarkDisable.parameters = {
    backgrounds: { default: 'dark' }
  }