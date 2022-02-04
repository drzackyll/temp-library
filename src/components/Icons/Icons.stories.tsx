import React from 'react';
import { SvgIconProps } from "@mui/material";
import { ComponentStory } from '@storybook/react';
import Icons from './Icons';

export default {
  title: 'Components/Icons',
  component: Icons,
};

const Template: ComponentStory<typeof Icons>  = (args: SvgIconProps) => <Icons {...args} />;

export const Primary = Template.bind({});
Primary.args = {
		fill: 'black'
};
