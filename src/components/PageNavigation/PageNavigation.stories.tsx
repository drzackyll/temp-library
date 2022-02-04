import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageNavigation from './PageNavigation';
import Button from '../Button/Button';
import MapIcon from '@mui/icons-material/Map';
import ListIcon from '@mui/icons-material/List';
import { LaneIcon } from '../Icons/LaneIcon';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Avatar from '../Avatar/Avatar';
import GetAppIcon from '@mui/icons-material/GetApp';

const tabs = [
  {
    name: 'Fleet Loads',
    icon: (
      <LaneIcon
        style={{
          margin: '0px 16px 0px 32px',
          color: '#34cb81',
          height: '18px',
          width: '18px',
        }}
      />
    ),
  },
  {
    name: 'External Loads',
    icon: (
      <LaneIcon
        style={{
          margin: '0px 16px 0px 32px',
          color: '#f82a2a',
          height: '18px',
          width: '18px',
        }}
      />
    ),
  },
  {
    name: 'Shippers',
    icon: (
      <LocalShippingIcon
        style={{ margin: '0px 16px 0px 32px', height: '18px', width: '18px' }}
      />
    ),
  },
];

const filterButtonsDark = [
  {
    filterButton: (
      <Button
        width="209px"
        height="40px"
        justifyContent="center"
        variant="contained"
        text="Assgnd w/ Fleet"
        dark={true}
        onClick={() => alert('Clicked')}
        style={{
          marginRight: '16px',
          boxShadow: 'none',
        }}
        startIcon={<CheckIcon style={{ height: '18px', width: '18px' }} />}
      />
    ),
  },
  {
    filterButton: (
      <Button
        justifyContent="center"
        width="209px"
        height="40px"
        variant="contained"
        text="Assgnd w/ Extrnl"
        dark={true}
        onClick={() => {
          alert('Clicked');
        }}
        style={{
          marginRight: '16px',

          boxShadow: 'none',
        }}
        startIcon={<CloseIcon style={{ height: '18px', width: '18px' }} />}
      />
    ),
  },
  {
    filterButton: (
      <Button
        width="209px"
        height="40px"
        variant="contained"
        justifyContent="center"
        text="List of Rules"
        dark={true}
        onClick={() => alert('Clicked')}
        style={{
          marginRight: '16px',
          boxShadow: 'none',
        }}
        startIcon={
          <PlaylistAddCheckIcon style={{ height: '18px', width: '18px' }} />
        }
      />
    ),
  },
  {
    filterButton: (
      <>
        <Avatar
          icon={<TrendingUpIcon style={{ height: '18px', width: '18px' }} />}
          dark={true}
        ></Avatar>
      </>
    ),
  },
  {
    filterButton: (
      <>
        <Avatar
          icon={<GetAppIcon style={{ height: '18px', width: '18px' }} />}
          dark={true}
          onClick={() => {
            alert('clicked');
          }}
        ></Avatar>
      </>
    ),
  },
];
const filterButtonsLite = [
  {
    filterButton: (
      <Button
        width="209px"
        height="40px"
        justifyContent="center"
        variant="contained"
        text="Assgnd w/ Fleet"
        dark={false}
        onClick={() => alert('Clicked')}
        style={{
          marginRight: '16px',
          boxShadow: 'none',
        }}
        startIcon={<CheckIcon style={{ height: '18px', width: '18px' }} />}
      />
    ),
  },
  {
    filterButton: (
      <Button
        width="209px"
        height="40px"
        justifyContent="center"
        variant="contained"
        text="Assgnd w/ Extrnl"
        dark={false}
        onClick={() => {
          alert('Clicked');
        }}
        style={{
          marginRight: '16px',
          boxShadow: 'none',
        }}
        startIcon={<CloseIcon style={{ height: '18px', width: '18px' }} />}
      />
    ),
  },
  {
    filterButton: (
      <Button
        width="209px"
        height="40px"
        justifyContent="center"
        variant="contained"
        text="List of Rules"
        dark={false}
        onClick={() => alert('Clicked')}
        style={{
          marginRight: '16px',
          boxShadow: 'none',
        }}
        startIcon={
          <PlaylistAddCheckIcon style={{ height: '18px', width: '18px' }} />
        }
      />
    ),
  },
  {
    filterButton: (
      <>
        <Avatar
          icon={<TrendingUpIcon style={{ height: '18px', width: '18px' }} />}
          dark={false}
        ></Avatar>
      </>
    ),
  },
  {
    filterButton: (
      <>
        <Avatar
          icon={<GetAppIcon style={{ height: '18px', width: '18px' }} />}
          dark={false}
          onClick={() => {
            alert('clicked');
          }}
        ></Avatar>
      </>
    ),
  },
];

export default {
  title: 'Components/Page Navigation',
  component: PageNavigation,
} as ComponentMeta<typeof PageNavigation>;

const Template: ComponentStory<typeof PageNavigation> = (args) => (
  <PageNavigation {...args} />
);

const viewTypes = [
  {
    name: 'Map View',
    icon: (
      <MapIcon
        style={{ margin: '0px 16px 0px 32px', height: '18px', width: '18px' }}
      />
    ),
  },
  {
    name: 'List View',
    icon: (
      <ListIcon
        style={{ margin: '0px 16px 0px 32px', height: '18px', width: '18px' }}
      />
    ),
  },
];
export const Dark = Template.bind({});
Dark.args = {
  dark: true,
  tabs: tabs,
  filterButtons: filterButtonsDark,
  onTabChange: (tabValue: number | string) => {
    alert(tabValue);
  },
  tabValue: 0,
  onViewTypeChange: (type: number | string) => alert(type),
  viewType: 0,
  viewTypes: viewTypes,
  showViewType: true,
  isExpanded: true,
  showMenuItem: () => alert('Show Menu'),
};

export const Lite = Template.bind({});
Lite.args = {
  dark: false,
  tabs: tabs,
  filterButtons: filterButtonsLite,
  onTabChange: (tabValue: number | string) => {
    alert(tabValue);
  },
  tabValue: 0,
  onViewTypeChange: (type: number | string) => alert(type),
  viewType: 0,
  viewTypes: viewTypes,
  showViewType: true,
  isExpanded: true,
  showMenuItem: () => alert('Show Menu'),
};
