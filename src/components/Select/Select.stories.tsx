import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Select from './Select';
import { Add } from '@mui/icons-material';
import Button from '../Button/Button'

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options = [,
    { name: 'April Henry' },
    { name: 'Van Tucker' },
    { name: 'Ralph Hubbard' },
    { name: 'Omar Alexander' },
    { name: 'Carlos Abbott' },
    { name: 'Miriam Wagner' },
    { name: 'Bradley Wilkerson' },
    { name: 'Virginia Andrews' },
    { name: 'Kelly Snyder' }
  ]

export const SelectLightDefault: ComponentStory<typeof Select> = Template.bind({});
SelectLightDefault.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: false,
  options: options,
  optionLabel: "name",
  multiple: true,
  value: ['Miriam Wagner'],
  maxHeight: 'calc(100% - 120px)',
  onChange: () => null
}

export const SelectLightError: ComponentStory<typeof Select> = Template.bind({});
SelectLightError.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: false,
  options: options,
  optionLabel: "name",
  error: true,
  value: ['Miriam Wagner'],
  maxHeight: 'calc(100% - 120px)',
  onChange: () => null
}

export const SelectLightDisable: ComponentStory<typeof Select> = Template.bind({});
SelectLightDisable.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: false,
  options: options,
  optionLabel: "name",
  disabled: true,
  value: ['Miriam Wagner'],
}

export const SelectLightWithButton: ComponentStory<typeof Select> = Template.bind({});
SelectLightWithButton.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: false,
  options: options,
  optionLabel: "name",
  value: ['Miriam Wagner'],
  button: <Button dark={true} width="100%" height="40px" borderRadius="4px" text="Add Button" endIcon={<Add />} justifyContent="space-between" />,
  maxHeight: 'calc(100% - 120px)',
  onChange: () => null
}

export const SelectDarkDefault: ComponentStory<typeof Select> = Template.bind({});
SelectDarkDefault.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: true,
  options: options,
  optionLabel: "name",
  multiple: true,
  value: ['Miriam Wagner'],
  maxHeight: 'calc(100% - 120px)',
  onChange: () => null
}
SelectDarkDefault.parameters = {
  backgrounds: { default: 'dark' }
}

export const SelectDarkError: ComponentStory<typeof Select> = Template.bind({});
SelectDarkError.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: true,
  options: options,
  optionLabel: "name",
  error: true,
  value: ['Miriam Wagner'],
  maxHeight: 'calc(100% - 120px)',
  onChange: () => null
}
SelectDarkError.parameters = {
  backgrounds: { default: 'dark' }
}

export const SelectDarkDisable: ComponentStory<typeof Select> = Template.bind({});
SelectDarkDisable.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: true,
  options: options,
  optionLabel: "name",
  disabled: true,
  value: ['Miriam Wagner'],
}
SelectDarkDisable.parameters = {
  backgrounds: { default: 'dark' }
}

export const SelectDarkWithButton: ComponentStory<typeof Select> = Template.bind({});
SelectDarkWithButton.args = {
  variant: "standard",
  label: "Select",
  helperText: "Message",
  dark: true,
  options: options,
  optionLabel: "name",
  value: ['Miriam Wagner'],
  button: <Button dark={false} width="100%" height="40px" borderRadius="4px" text="Add Button" endIcon={<Add />} justifyContent="space-between" />,
  maxHeight: 'calc(100% - 120px)',
  onChange: () => null
}
SelectDarkWithButton.parameters = {
  backgrounds: { default: 'dark' }
}