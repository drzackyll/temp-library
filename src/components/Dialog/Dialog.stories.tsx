import React from 'react';
import { Typography } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dialog from './Dialog';
import Button from '../Button';
import { useState } from '@storybook/addons';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    title: {
      description: 'Title portion of the dialog, displayed in bold.'
    },
    open: {
      description: 'Boolean that determines whether dialog element is open or not.',
      table: {
        defaultValue: { summary: false}
      }
    },
    dark: {
      description: 'Styling for dark mode.',
      table: {
        defaultValue: { summary: false}
      }
    },
    children: {
      description: 'The content of the dialog, supplied as children elements.',
      control: { type: 'element' }
    },
    fullScreen: {
      description: 'Makes the dialog fullscreen.',
      table: {
        defaultValue: { summary: false}
      }
    }
  }
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button dark={false} text='Open Dialog' onClick={() => setOpen(true)} />
      <Dialog {...args} open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

const DefaultChildren = (props: any) => {
  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', height: '40px', justifyContent: 'center', width: '100%', backgroundColor: props.boxBackgroundColor}}>
        <Typography style={{fontWeight: 600}}>Element</Typography>
      </div>
      <div style={{display: 'flex', paddingTop: '32px'}}>
        <Button
          style={{width: '100%', marginRight: '8px'}}
          text='Button'
          outline={props.dark ? '#332D3C' : ''}
          textColorHover={props.textColorHover}
          backgroundColor={props.backgroundColor}
          backgroundHover={props.backgroundHover} />
        <Button
          style={{width: '100%', marginLeft: '8px'}}
          text='Button'
          outline={props.dark ? '#332D3C' : ''}
          dark={props.dark}
          textColorHover={props.textColorHover}
          backgroundColor={props.backgroundColor}
          backgroundHover={props.backgroundHover} />
      </div>
    </>
  )
}

export const LightDefault = Template.bind({});
LightDefault.args = {
  dark: false,
  title: 'Modal Title',
  children: <DefaultChildren dark={false} backgroundHover='#453d51' textColorHover='#FFFFFF' boxBackgroundColor='#F2F2F2' />
}

export const DarkDefault = Template.bind({});
DarkDefault.args = {
  dark: true,
  title: 'Modal Title',
  children: <DefaultChildren dark={true} backgroundColor='#26222D' backgroundHover='#453d51' boxBackgroundColor='#332D3C' />
}

export const ExpandedLightDefault = Template.bind({});
ExpandedLightDefault.args = {
  dark: false,
  title: 'Modal Title',
  fullScreen: true
}

export const ExpandedDarkDefault = Template.bind({});
ExpandedDarkDefault.args = {
  dark: true,
  title: 'Modal Title',
  fullScreen: true
}