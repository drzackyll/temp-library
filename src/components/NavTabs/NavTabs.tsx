import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export interface TabProps {
  icon: JSX.Element,
  name: string
}

interface NavTabProps {
  tabValue: string | number,
  tabList: TabProps[],
  viewType: string,
  viewTypes: TabProps[],
  dark: boolean,
  showViewType: boolean,
  handleTabChange: (value: number | string) => void,
  handleViewTypeChange: (value: number | string) => void
}

function a11yProps(index: number | string) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const useStyles = (dark: boolean) =>
  makeStyles(() => ({
    root: {
      flexGrow: 1,
      backgroundColor: () => {
        if (dark) return '#26222d';
        return '#FFFFFF';
      },
      display: 'flex',
      height: '56px',
    },
    tabs: {
      minWidth: '230px',
      marginTop: '-8px',
      borderRight: () => {
        if (dark) return '1px solid #332d3c';
        return '1px solid #F2F2F2';
      },
      height: '56px',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '18px',
      alignItems: 'center',
      color: () => {
        if (dark) return '#ffffff';
        return '#000000';
      },
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      backgroundColor: () => {
        if (dark) return '#26222d';
        return '#FFFFFF';
      },
      padding: '0px 32px 0px 0px',
    },
    indicator: {
      backgroundColor: '#2D6BFF',
      height: '3px',
    },
    labelContainer: {
      width: 'auto',
      padding: 0,
    },
    iconLabelWrapper: {
      flexDirection: 'row',
      justifyContent: 'flex-start !important',
    },
  }));

export default function NavTabs(props: NavTabProps) {
  const {
    tabValue,
    tabList,
    viewType,
    viewTypes,
    dark = false,
    showViewType = true,
  } = props;
  const classes = useStyles(dark)();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    event.preventDefault();
    props.handleTabChange(newValue);
  };
  const handleViewTypeChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    event.preventDefault();
    props.handleViewTypeChange(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="simple tabs example"
        classes={{
          indicator: classes.indicator,
        }}
        style={{ height: '56px' }}
      >
        {tabList.map((item: TabProps, id: number) => (
          <Tab
            icon={item.icon}
            className={classes.tabs}
            label={item.name}
            {...a11yProps(`tablist-${id}`)}
            key={id}
          />
        ))}
      </Tabs>
      {showViewType && (
        <Tabs
          value={viewType}
          onChange={handleViewTypeChange}
          aria-label="simple tabs example"
          classes={{
            indicator: classes.indicator,
          }}
          style={{ height: '56px' }}
        >
          {viewTypes.map((item: TabProps, idx: number) => (
            <Tab
              icon={item.icon}
              className={classes.tabs}
              label={item.name}
              {...a11yProps(`viewtypes-${idx}`)}
              key={idx}
            />
          ))}
        </Tabs>
      )}
    </div>
  );
}
