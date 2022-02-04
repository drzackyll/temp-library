import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from './IconButton';
import { Avatar } from '@mui/material/';
import { Person } from '@mui/icons-material';


export default {
    title: 'Components/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} size="large" />;

export const IconButton900WithText: ComponentStory<typeof IconButton> = Template.bind({});
IconButton900WithText.args = {
    icon: <Avatar><span className='text'>OO</span></Avatar>,
    type: '900'
};

export const IconButton900WithIcon: ComponentStory<typeof IconButton> = Template.bind({});
IconButton900WithIcon.args = {
    icon: <Avatar><Person /></Avatar>,
    type: '900'
};

export const IconButton100WithText: ComponentStory<typeof IconButton> = Template.bind({});
IconButton100WithText.args = {
    icon: <Avatar><span className='text'>OO</span></Avatar>,
    type: '100',
    height: '32px',
    width: '32px'
};

export const IconButton100WithIcon: ComponentStory<typeof IconButton> = Template.bind({});
IconButton100WithIcon.args = {
    icon: <Avatar><Person /></Avatar>,
    type: '100',
    height: '32px',
    width: '32px'
};