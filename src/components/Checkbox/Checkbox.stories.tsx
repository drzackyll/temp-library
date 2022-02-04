import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxLightChecked: ComponentStory<typeof Checkbox> = Template.bind({});
CheckboxLightChecked.args = {
    checked: true,
    dark: false
}

export const CheckboxLightUnchecked: ComponentStory<typeof Checkbox> = Template.bind({});
CheckboxLightUnchecked.args = {
    checked: false,
    dark: false
}

export const CheckboxDarkChecked: ComponentStory<typeof Checkbox> = Template.bind({});
CheckboxDarkChecked.args = {
    checked: true,
    dark: true
}
CheckboxDarkChecked.parameters = {
    backgrounds: { default: 'dark' }
  }

export const CheckboxDarkUnchecked: ComponentStory<typeof Checkbox> = Template.bind({});
CheckboxDarkUnchecked.args = {
    checked: false,
    dark: true
}
CheckboxDarkUnchecked.parameters = {
    backgrounds: { default: 'dark' }
  }
