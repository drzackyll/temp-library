import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AccordionButton from './AccordionButton';


export default {
    title: 'Components/AccordionButton',
    component: AccordionButton,
} as ComponentMeta<typeof AccordionButton>;

const Template: ComponentStory<typeof AccordionButton> = (args) => <AccordionButton {...args} />;

export const AccordionDarkDefault: ComponentStory<typeof AccordionButton> = Template.bind({});
AccordionDarkDefault.args = {
    dark: true,
    width: '424px',
    heading: "Accordion Button",
    content: <div style={{textAlign: 'center'}}>Element</div>   
}
AccordionDarkDefault.parameters = {
  backgrounds: { default: 'dark' }
}

export const AccordionLightDefault: ComponentStory<typeof AccordionButton> = Template.bind({});
AccordionLightDefault.args = {
    dark: false,
    width: '424px',
    heading: "Accordion Button",
    content: <div style={{textAlign: 'center'}}>Element</div>   
}