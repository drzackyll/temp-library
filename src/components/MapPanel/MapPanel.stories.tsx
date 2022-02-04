import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MapPanel from './MapPanel';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/icons-material/List';
import Settings from '@mui/icons-material/Settings';

const SideTitle = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <List style={{color: '#FFFFFF', height: '18px', width: '18px'}} />
        <Typography
          style={{
            paddingLeft: '16px',
            color: '#ffffff',
          }}
        >
          Title
        </Typography>
      </Box>
      <Box>
        <Avatar
          style={{
            backgroundColor: '#332D3C',
            cursor: 'pointer',
            width: '40px',
            height: '40px'
          }}
          onClick={() => null}
        >
          <Settings style={{color: '#FFFFFF', height: '18px', width: '18px'}} />
        </Avatar>
      </Box>
    </Box>
  )
}

const SideContent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography style={{color: 'white'}}>
        Content
      </Typography>
    </Box>
  )
}

export default {
  title: 'Components/MapPanel',
  component: MapPanel,
  argTypes: {
    type: {
      description: 'The type variant of MapPanel. This determines direction of open/close buttons.',
      options: ['side', 'bottom'],
      control: { type: 'radio'}
    },
    titleSection: {
      description: 'Section of the element for title, icons, and any additional buttons. Should be provided as JSX.',
      control: { type: 'element' }
    },
    contentSection: {
      description: 'Section of the element for the content of the panel. Should be provided as JSX.',
      control: { type: 'element' }
    }
  },
} as ComponentMeta<typeof MapPanel>;

const Template: ComponentStory<typeof MapPanel> = (args) => <MapPanel {...args} />;

export const MapPanelSide = Template.bind({});
MapPanelSide.args = {
  titleSection: <SideTitle />,
  contentSection: <SideContent />,
  type: 'side'
}
MapPanelSide.decorators = [
  story => <div style = {{ width: '456px' }}>{story()}</div>
]

export const MapPanelBottom = Template.bind({});
MapPanelBottom.args = {
  titleSection: <SideTitle />,
  contentSection: <SideContent />,
  type: 'bottom'
}
MapPanelBottom.decorators = [
  story => <div style = {{ display: 'flex', alignItems: 'flex-end', height: 'calc(100vh - 32px)' }}>{story()}</div>
]