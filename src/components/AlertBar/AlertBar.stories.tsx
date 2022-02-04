import React from 'react';
import { Add, ArrowForward, Notifications } from '@mui/icons-material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AlertBar from './AlertBar';
import AlertIcon from '../Icons/AlertIcon';
import { Circle } from '../Icons/Circle';
import Button from '../Button/Button';

export default {
  title: 'Components/AlertBar',
  component: AlertBar,
  argTypes: {
    type: {
      description: 'The type of alert bar. This determines dimensions and placement of children.',
      options: ['alertBar', 'listActionBar', 'mapActionSingle', 'mapActionMulti'],
      control: { type: 'radio'}
    },
    icon: {
      description: 'The particular icon that should appear on the left of the bar.',
      control: { type: 'string' }
    },
    title: {
      description: 'Bolded text on the left side.'
    },
    message: {
      description: 'Normal font weight text after the title, or an element passed in.'
    },
    handleClose: {
      description: 'A function that determines the action upon clicking the close icon. The close icon only appears if this function is provided.',
      control: { type: 'object' }
    }
  },
} as ComponentMeta<typeof AlertBar>;

const Template: ComponentStory<typeof AlertBar> = (args) => <AlertBar {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  type: 'alertBar',
  icon: <AlertIcon />,
  title: 'Alert',
  message: 'Your current view has been updated. A new set of recommendations have been processed.',
  handleClose: () => alert("Close clicked")
}

export const ListAction = Template.bind({});
ListAction.args = {
  type: 'listActionBar',
  icon: <Notifications />,
  handleClose: () => alert("Close clicked"),
  title: '203448720',
  children: (
    <>
      <Button text='Move to External' transparent='true' />
      <Button text='Create Rule'/>
      <Button text='Assign with Fleet'/>
      <Button text='View Detail'><ArrowForward style={{height: '18px', width: '18px'}} /></Button>
    </>
  )
}

export const MapActionSingle = Template.bind({});
MapActionSingle.args = {
  type: 'mapActionSingle',
  icon: <Circle style={{color: '#34cb81'}} />,
  title: '203448720',
  children: <Button text='Select Action' />
}

export const MapActionMulti = Template.bind({});
MapActionMulti.args = {
  type: 'mapActionMulti',
  title: '203448720',
  icon: <Circle style={{color: '#34cb81'}} />,
  children: (
    <>
      <Button text='Create Rule'><Add style={{height: '18px', width: '18px'}} /></Button>
      <Button text='Assign with External' />
    </>
  )
}