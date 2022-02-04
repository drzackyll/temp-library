import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SlideOut from './SlideOut';
import Button from '../Button';
import { Grid } from '@mui/material';

export default {
  title: 'Components/SlideOut',
  component: SlideOut,
  argTypes: {
    dark: {
      description: 'Styling for dark mode.',
      table: {
        defaultValue: { summary: false }
      }
    },
    title: {
      description: 'Bolded title of component.'
    },
  }
} as ComponentMeta<typeof SlideOut>

const Template: ComponentStory<typeof SlideOut> = (args) => <SlideOut {...args} />

export const Light = Template.bind({});
Light.args = {
  title: 'Slide Out Title',
  subTitle: 'Slide Out Subtitle',
  dark: false,
  open: true,
  button: <Button dark text='Action button' height="40px" width="100%" justifyContent="center" />,
  content: <Grid container justifyContent='center'>Elements</Grid>
}

export const LightWithClearButton = Template.bind({});
LightWithClearButton.args = {
  title: 'Slide Out Title',
  subTitle: 'Slide Out Subtitle',
  dark: false,
  open: true,
  button: <Button dark text='Action button' height="40px" width="100%" justifyContent="center" />,
  clearButton: <Button variant='contained' text='Clear' dark={false} height="40px" />,
  content: <Grid container justifyContent='center'>Elements</Grid>
}

export const Dark = Template.bind({});
Dark.args = {
  title: 'Slide Out Title',
  subTitle: 'Slide Out Subtitle',
  dark: true,
  open: true,
  button: <Button dark={false} text='Action button' height="40px" width="100%" justifyContent="center" />,
  content: <Grid container justifyContent='center'>Elements</Grid>
}

export const DarkWithClearButton = Template.bind({});
DarkWithClearButton.args = {
  title: 'Slide Out Title',
  subTitle: 'Slide Out Subtitle',
  dark: true,
  open: true,
  button: <Button dark={false} text='Action button' height="40px" width="100%" justifyContent="center" />,
  clearButton: <Button variant='contained' text='Clear' dark={true} height="40px" />,
  content: <Grid container justifyContent='center'>Elements</Grid>
}