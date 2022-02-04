import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import TextArea from './TextArea';

export default {
    title: 'Components/TextArea',
    component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextareaLightDefault: ComponentStory<typeof TextArea> = Template.bind({});
TextareaLightDefault.args = {
    label: "Textarea",
    helperText: "Message",
    dark: false,
}

export const TextareaLightError: ComponentStory<typeof TextArea> = Template.bind({});
TextareaLightError.args = {
    label: "Textarea",
    helperText: "Message",
    dark: false,
    error: true,
    value: "Textarea Error"
}

export const TextareaLightDisable: ComponentStory<typeof TextArea> = Template.bind({});
TextareaLightDisable.args = {
    label: "Textarea",
    helperText: "Message",
    dark: false,
    disabled: true,
    value: "Textarea Value"
}

export const TextareaDarkDefault: ComponentStory<typeof TextArea> = Template.bind({});
TextareaDarkDefault.args = {
    label: "Textarea",
    helperText: "Message",
    dark: true,
}
TextareaDarkDefault.parameters = {
    backgrounds: { default: 'dark' }
  }

export const TextareaDarkError: ComponentStory<typeof TextArea> = Template.bind({});
TextareaDarkError.args = {
    label: "Textarea",
    helperText: "Message",
    dark: true,
    error: true,
    value: "Textarea Error"
}
TextareaDarkError.parameters = {
    backgrounds: { default: 'dark' }
  }

export const TextareaDarkDisable: ComponentStory<typeof TextArea> = Template.bind({});
TextareaDarkDisable.args = {
    label: "Textarea",
    helperText: "Message",
    dark: true,
    disabled: true,
    value: "Textarea Value"
}
TextareaDarkDisable.parameters = {
    backgrounds: { default: 'dark' }
  }