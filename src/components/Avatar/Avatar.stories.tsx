import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from './Avatar';
import GetAppIcon from '@mui/icons-material/GetApp';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    dark: {
      description: 'Styled for dark mode',
    },
    icon: {
      description: 'The particular icon that should appear on the left of the bar.',
      control: { type: 'string' }
    },
    onClick: {
      description: 'Event triggered by clicking on the element.'
    }
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {
  dark: false,
  icon: <GetAppIcon style={{ height: '18px', width: '18px' }} />,
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  icon: <GetAppIcon style={{ height: '18px', width: '18px' }} />,
};
Dark.parameters = {
  backgrounds: {default: 'dark'}
}
