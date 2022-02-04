import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { LibraryAddCheck, Folder, KeyboardArrowDown, ArrowForward, SaveAlt, Add } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import IconButton from "../IconButton/IconButton";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    dark: {
      description: 'Applies styling for dark mode.',
      table: {
        defaultValue: { summary: false }
      }
    },
    text: {
      description: 'Button text.',
    },
    endIcon: {
      description: 'Icon that appears on the right side of the button.',
      control: { type: 'element' }
    },
    width: {
      description: 'Desired width of the button.',
      table: { category: 'Sizes' },
      control: { type: 'text' }
    },
    height: {
      description: 'Desired height of the button.',
      table: { category: 'Sizes' },
      control: { type: 'text' }
    },
    justifyContent: {
      description: 'Justification of the button content.',
      table: {
        defaultValue: { summary: 'space-between' }
      },
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit'],
      control: { type: 'select' }
    },
    backgroundColor: {
      description: 'Background color of the button.',
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    textColor: {
      description: 'Text/font color of the button.',
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    backgroundHover: {
      description: 'Color set for the button background on mouseover.',
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    textColorHover: {
      description: 'Color set for the button text on mouseover.',
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
    outline: {
      description: 'Color that, if proviided, is set as the border color for the button, always 1px and solid.',
      control: 'color',
      table: {
        category: 'Colors'
      }
    },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SlideOutDarkDefault: ComponentStory<typeof Button> = Template.bind({});
SlideOutDarkDefault.args = {
  width: '392px',
  height: '48px',
  dark: true,
  text: "Save",
  justifyContent: "space-between",
  endIcon: <ArrowForward style={{ height: '18px', width: '18px' }} />,
}

export const SlideOutDisable: ComponentStory<typeof Button> = Template.bind({});
SlideOutDisable.args = {
  width: '392px',
  height: '48px',
  dark: true,
  text: "Save",
  justifyContent: "space-between",
  endIcon: <ArrowForward style={{ height: '18px', width: '18px' }} />,
  disabled: true,
  backgroundColor: "#B3B3B3",
  textColor: "#808080",
  textColorHover: "#808080",
  backgroundHover: "#B3B3B3",
}

export const SlideOutLightDefault: ComponentStory<typeof Button> = Template.bind({});
SlideOutLightDefault.args = {
  width: '392px',
  height: '48px',
  dark: false,
  text: "Save",
  justifyContent: "space-between",
  endIcon: <ArrowForward style={{ height: '18px', width: '18px' }} />
}

export const Button900Default: ComponentStory<typeof Button> = Template.bind({});
Button900Default.args = {
  height: '40px',
  dark: true,
  justifyContent: "flex-start",
  startIcon: <LibraryAddCheck style={{ height: '18px', width: '18px' }} />,
  text: 'Button',
}

export const Button900Disable: ComponentStory<typeof Button> = Template.bind({});
Button900Disable.args = {
  height: '40px',
  dark: true,
  text: "Button",
  justifyContent: "flex-start",
  startIcon: <LibraryAddCheck style={{ height: '18px', width: '18px' }} />,
  disabled: true,
  backgroundColor: "#B3B3B3",
  textColor: "#808080",
  textColorHover: "#808080",
  backgroundHover: "#B3B3B3",
}

export const Button900Active: ComponentStory<typeof Button> = Template.bind({});
Button900Active.args = {
  height: '40px',
  dark: true,
  text: "Button",
  justifyContent: "flex-start",
  startIcon: <LibraryAddCheck style={{ height: '18px', width: '18px' }} />,
  active: true,
  backgroundColor: "#FFFFFF",
  textColor: "#000000",
  textColorHover: "#000000",
  backgroundHover: "#FFFFFF",
}
Button900Active.parameters = {
  backgrounds: { default: 'dark' }
}

export const Button900WithTwoIcons: ComponentStory<typeof Button> = Template.bind({});
Button900WithTwoIcons.args = {
  height: '40px',
  dark: true,
  text: "Two Icon",
  justifyContent: "flex-start",
  startIcon: <Folder style={{ height: '18px', width: '18px' }} />,
  endIcon: <ArrowForward style={{ height: '18px', width: '18px' }} />,
}

export const Button900WithLeftIcon: ComponentStory<typeof Button> = Template.bind({});
Button900WithLeftIcon.args = {
  height: '40px',
  dark: true,
  text: "Left Icon",
  justifyContent: "flex-start",
  startIcon: <Folder style={{ height: '18px', width: '18px' }} />,
}

export const Button900WithRightIcon: ComponentStory<typeof Button> = Template.bind({});
Button900WithRightIcon.args = {
  height: '40px',
  dark: true,
  text: "Right Icon",
  justifyContent: "flex-start",
  endIcon: <ArrowForward style={{ height: '18px', width: '18px' }} />,
}

export const Button900Plain: ComponentStory<typeof Button> = Template.bind({});
Button900Plain.args = {
  height: '40px',
  dark: true,
  text: "Plain",
  justifyContent: "flex-start",
}

export const Button100Default: ComponentStory<typeof Button> = Template.bind({});
Button100Default.args = {
  height: '40px',
  dark: false,
  justifyContent: "flex-start",
  startIcon: <SaveAlt style={{ height: '18px', width: '18px' }} />,
  backgroundColor: "#F2F2F2",
  textColor: "#000000",
  textColorHover: "#000000",
  backgroundHover: "#E6E6E6",
  text: "Button"
}

export const Button100Active: ComponentStory<typeof Button> = Template.bind({});
Button100Active.args = {
  height: '40px',
  dark: false,
  justifyContent: "flex-start",
  startIcon: <SaveAlt style={{ height: '18px', width: '18px' }} />,
  text: "Button",
  active: true
}

export const Button100WithTwoIcons: ComponentStory<typeof Button> = Template.bind({});
Button100WithTwoIcons.args = {
  height: '40px',
  dark: true,
  text: "Two Icon",
  justifyContent: "flex-start",
  startIcon: <Folder style={{ height: '18px', width: '18px' }} />,
  endIcon: <KeyboardArrowDown style={{ height: '18px', width: '18px' }} />,
  backgroundColor: "#F2F2F2",
  textColor: "#000000",
  textColorHover: "#000000",
  backgroundHover: "#E6E6E6",
}

export const Button100WithLeftIcon: ComponentStory<typeof Button> = Template.bind({});
Button100WithLeftIcon.args = {
  height: '40px',
  dark: true,
  text: "Left Icon",
  justifyContent: "flex-start",
  startIcon: <Folder style={{ height: '18px', width: '18px' }} />,
  backgroundColor: "#F2F2F2",
  textColor: "#000000",
  textColorHover: "#000000",
  backgroundHover: "#E6E6E6",
}

export const Button100WithRightIcon: ComponentStory<typeof Button> = Template.bind({});
Button100WithRightIcon.args = {
  height: '40px',
  dark: true,
  text: "Right Icon",
  justifyContent: "flex-start",
  endIcon: <ArrowForward style={{ height: '18px', width: '18px' }} />,
  backgroundColor: "#F2F2F2",
  textColor: "#000000",
  textColorHover: "#000000",
  backgroundHover: "#E6E6E6",
}

export const Button100Plain: ComponentStory<typeof Button> = Template.bind({});
Button100Plain.args = {
  height: '40px',
  dark: true,
  text: "Plain",
  justifyContent: "flex-start",
  backgroundColor: "#F2F2F2",
  textColor: "#000000",
  textColorHover: "#000000",
  backgroundHover: "#E6E6E6",
}

export const Button200Default: ComponentStory<typeof Button> = Template.bind({});
Button200Default.args = {
  height: '40px',
  dark: false,
  backgroundColor: '#E6E6E6',
  backgroundHover: '#CCCCCC',
  justifyContent: "flex-start",
  startIcon: <SaveAlt style={{ height: '18px', width: '18px' }} />,
  text: "Button"
}

export const WhiteButton: ComponentStory<typeof Button> = Template.bind({});
WhiteButton.args = {
  height: '40px',
  dark: false,
  backgroundColor: '#FFFFFF',
  backgroundHover: '#F2F2F2',
  justifyContent: "space-between",
  startIcon: <SaveAlt style={{ height: '18px', width: '18px' }} />,
  text: "Button"
}
WhiteButton.parameters = {
  backgrounds: { default: 'dark' }
}

export const TransparentButtonOnWhite: ComponentStory<typeof Button> = Template.bind({});
TransparentButtonOnWhite.args = {
  height: '40px',
  dark: false,
  backgroundColor: 'transparent',
  backgroundHover: '#F2F2F2',
  justifyContent: "space-between",
  startIcon: <SaveAlt style={{ height: '18px', width: '18px' }} />,
  text: "Button"
}

export const TransparentButtonOnDark: ComponentStory<typeof Button> = Template.bind({});
TransparentButtonOnDark.args = {
  height: '40px',
  dark: false,
  backgroundColor: 'transparent',
  backgroundHover: '#F2F2F2',
  textColor: "#FFFFFF",
  textColorHover: "#000000",
  justifyContent: "space-between",
  startIcon: <SaveAlt style={{ height: '18px', width: '18px' }} />,
  text: "Button"
}
TransparentButtonOnDark.parameters = {
  backgrounds: { default: 'dark' }
}

export const LargeButtonLight: ComponentStory<typeof Button> = Template.bind({});
LargeButtonLight.args = {
  height: '56px',
  dark: false,
  backgroundColor: '#F2F2F2',
  backgroundHover: '#E6E6E6',
  textColor: "#000000",
  textColorHover: "#000000",
  justifyContent: "space-between",
  endIcon: <IconButton
    icon={<Add style={{ backgroundColor: "transparent" }} type="100" />}
    hoverBackground="#CCCCCC"
    size="large" />,
  text: "Large Button",
  borderRadius: "4px",
  width: "885px"
}

export const LargeButtonDisable: ComponentStory<typeof Button> = Template.bind({});
LargeButtonDisable.args = {
  height: '56px',
  dark: false,
  backgroundColor: '#B3B3B3',
  textColor: "#808080",
  justifyContent: "space-between",
  endIcon: <IconButton icon={<Add style={{ color: "#808080" }} />} size="large" />,
  text: "Large Button",
  borderRadius: "4px",
  width: "885px",
  disabled: true
}

export const LargeButtonDark: ComponentStory<typeof Button> = Template.bind({});
LargeButtonDark.args = {
  height: '56px',
  dark: true,
  backgroundColor: '#332D3C',
  backgroundHover: '#453D51',
  textColor: "#FFFFFF",
  textColorHover: "#FFFFFF",
  justifyContent: "space-between",
  endIcon: <IconButton
    icon={<Add style={{ backgroundColor: "transparent", color: "#FFFFFF" }} type="900" />}
    hoverBackground="#4F465D"
    size="large" />,
  text: "Large Button",
  borderRadius: "4px",
  width: "885px"
}

export const BlueButtonDefault: ComponentStory<typeof Button> = Template.bind({});
BlueButtonDefault.args = {
  height: '40px',
  dark: false,
  justifyContent: "flex-start",
  endIcon: < ArrowForward />,
  text: "Button",
  backgroundColor: '#2D6BFF',
  backgroundHover: '#2456CC',
  textColor: "#FFFFFF",
  textColorHover: "#FFFFFF",
}

export const BlueStrokeButtonDefault: ComponentStory<typeof Button> = Template.bind({});
BlueStrokeButtonDefault.args = {
  height: '40px',
  dark: false,
  justifyContent: "flex-start",
  startIcon: <SvgIcon viewBox='0 0 18 18'>
    <path d="M6.875 15.5V10.716L3.4922 14.0988L1.90121 12.5078L5.28404 9.125H0.5V6.875H5.28402L1.90123 3.4922L3.49222 1.90121L6.875 5.284V0.5H9.125V5.28404L12.5078 1.90123L14.0988 3.49222L10.716 6.875H15.5V9.125H10.716L14.0988 12.5078L12.5078 14.0988L9.125 10.716V15.5H6.875Z" />
  </SvgIcon>,
  text: "Button",
  backgroundColor: '#FFFFFF',
  backgroundHover: '#2D6BFF',
  textColor: "#000000",
  textColorHover: "#FFFFFF",
  outline: "#2D6BFF"
}

export const AlertButtonDefault: ComponentStory<typeof Button> = Template.bind({});
AlertButtonDefault.args = {
  height: '40px',
  dark: false,
  justifyContent: "flex-start",
  startIcon: <SvgIcon viewBox='0 0 18 18'>
    <path d="M0.75 14.75H17.25L9 0.5L0.75 14.75Z" />
  </SvgIcon>,
  text: "Button",
  backgroundColor: '#F82A2A',
  backgroundHover: '#C62222',
  textColor: "#FFFFFF",
  textColorHover: "#FFFFFF",
}