import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StepThrough from './StepThrough';
import { Circle } from '../Icons';

const singleDetail = [{number: '0012377'}]
const detail = [{number: '0012366'}, {number: '0012377'}, {number: '0012388'}]

export default {
  title: 'Components/StepThrough',
  component: StepThrough,
  parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } },
  decorators: [
    story => <div style = {{ width: '375px' }}>{story()}</div>
  ],
  argTypes: {
    dark: {
      description: 'Styling for dark mode.',
      table: {
        defaultValue: { summary: false}
      }
    },
    title: {
      description: 'Bolded title of component.'
    },
    text: {
      description: 'Normal font weight text for compoenent.'
    },
    icon: {
      description: 'Icon displayed 8px left of the title.',
      control: { type: 'element' }
    },
    index: {
      description: 'The index of the current step through `item`; used for determining button disabled status.'
    },
    count: {
      description: 'The count of all objects being stepped through; used for determining button disabled status.'
    },
    onClickPrev: {
      description: 'Event to be triggered by clicking the previous button.',
      table: { category: 'Events'}
    },
    onClickNext: {
      description: 'Event to be triggered by clicking the next button.',
      table: { category: 'Events'}
    }
  }
} as ComponentMeta<typeof StepThrough>

const Template: ComponentStory<typeof StepThrough> = (args) => <StepThrough {...args} />

export const LightDefault = Template.bind({});
LightDefault.args = {
  title: 'Load ID',
  text: '0012388',
  icon: <Circle style={{color: '#34cb81', height: '18px', width: '18px'}} />
}

export const DarkDefault = Template.bind({});
DarkDefault.args = {
  title: 'Load ID',
  text: '0012388',
  dark: true,
  icon: <Circle style={{color: '#34cb81', height: '18px', width: '18px'}} />
}

export const LightFirstStep = Template.bind({});
LightFirstStep.args = {
  title: 'Load ID',
  text: '0012388',
  icon: <Circle style={{color: '#34cb81', height: '18px', width: '18px'}} />,
  index: 0,
  count: 3
}

export const LightLastStep = Template.bind({});
LightLastStep.args = {
  title: 'Load ID',
  text: '0012388',
  icon: <Circle style={{color: '#34cb81', height: '18px', width: '18px'}} />,
  index: 2,
  count: 3
}

export const LightSingleDisplay = Template.bind({});
LightSingleDisplay.args = {
  title: 'Load ID',
  text: '0012388',
  icon: <Circle style={{color: '#34cb81', height: '18px', width: '18px'}} />,
  index: 0,
  count: 1
}