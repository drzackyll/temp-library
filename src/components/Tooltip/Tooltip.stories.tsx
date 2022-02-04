import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';
import codeBracketsImage from '../introduction/code-brackets.svg';
import colorsImage from '../introduction/colors.svg';
import directionImage from '../introduction/direction.svg';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ position:'absolute', top: '120px', left: '300px' }}>
        <Story/>
      </div>
    )
  ]
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const SingleLine = Template.bind({});
SingleLine.storyName = 'Single Line';
SingleLine.args = {
  message: 'Consequat fugiat elit nostrud Lorem elit consequat.',
  tooltipWidth: null,
  placement: null,
  children: 'hello'
};

export const HeaderTooltip = Template.bind({});
HeaderTooltip.storyName = 'Header';
HeaderTooltip.args = {
  header: '14px Semibold',
  message: 'Laboris aute anim pariatur sunt.',
  tooltipWidth: null,
  placement: 'top',
  children: 'hello'
};

export const TooltipWIcons = Template.bind({});
TooltipWIcons.storyName = 'With Icon';
TooltipWIcons.args = {
  tooltipWidth: null,
  iconMessages: [
    {
      icon: codeBracketsImage,
      message: 'Mollit',
      iconWidth: null
    },
    {
      icon: colorsImage,
      message: 'Cupidatat',
      iconWidth: null
    },
    {
      icon: directionImage,
      message: 'Et ad',
      iconWidth: null
    },
  ],
  placement: 'bottom',
  children: 'hello'
};

export const HeaderTooltipWIcons = Template.bind({});
HeaderTooltipWIcons.storyName = 'Header With Icons';
HeaderTooltipWIcons.args = {
  hasHeader: true,
  hasHeadIcon: true,
  tooltipWidth: null,
  iconMessages: [
    {
      icon: codeBracketsImage,
      message: 'Mollit',
      iconWidth: 15
    },
    {
      icon: colorsImage,
      message: 'Cupidatat',
      iconWidth: null
    },
    {
      icon: directionImage,
      message: 'Et ad',
      iconWidth: null
    },
  ],
  placement: 'right-start',
  children: 'hello'
};