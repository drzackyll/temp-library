import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavTabs, { TabProps } from '../NavTabs/NavTabs';
import { Grid, Avatar } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export interface FilterButton {
  filterButton: JSX.Element
}

export interface PageNavigationProps {
  tabValue: number,
  onTabChange: (value: string | number) => void,
  onViewTypeChange: (value: string | number) => void,
  viewType: any,
  dark: boolean,
  tabs: TabProps[],
  filterButtons: FilterButton[],
  viewTypes: TabProps[],
  showViewType: boolean,
  isExpanded: boolean,
  showMenuItem: () => void,
}

const useStyles = (dark: boolean) =>
  makeStyles(() => ({
    root: {
      width: '100%',
    },
    avatar: {
      backgroundColor: () => {
        if (dark) return '#332d3c';
        return '#F2F2F2';
      },
      cursor: 'pointer',
      width: '40px',
      height: '40px',
    },
    avatarIcon: {
      color: () => {
        if (dark) return '#ffffff';
        return '#000000';
      },
    },
    navBar: {
      boxShadow: 'none',
      borderBottom: () => {
        if (dark) return '1px solid #332d3c';
        return '1px solid #F2F2F2';
      },
      display: 'flex',
      backgroundColor: () => {
        if (dark) return '#26222d';
        return '#FFFFFF';
      },
    },
    filterBar: {
      boxShadow: 'none',
      borderBottom: () => {
        if (dark) return '1px solid #332d3c';
        return '1px solid #f2f2f2';
      },
      display: 'flex',
      height: '56px',
      padding: '8px 0px 0px 16px',
      backgroundColor: () => {
        if (dark) return '#26222d';
        return '#FFFFFF';
      },
    },
  }));

const PageNavigation = (props: PageNavigationProps) => {
  const {
    tabValue,
    onTabChange,
    onViewTypeChange,
    viewType = 'List',
    dark = false,
    tabs,
    filterButtons,
    viewTypes,
    showViewType = true,
    isExpanded = true,
    showMenuItem,
  } = props;
  const classes = useStyles(dark)();

  const toggleTabs = () => {
    showMenuItem();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} className={classes.navBar}>
        <Grid item xs={11}>
          <NavTabs
            handleTabChange={(value: string | number) => onTabChange(value)}
            tabValue={tabValue}
            tabList={tabs}
            dark={dark}
            handleViewTypeChange={(viewType: number | string) => onViewTypeChange(viewType)}
            viewType={viewType}
            viewTypes={viewTypes}
            showViewType={showViewType}
          />
        </Grid>
        <Grid
          item
          xs={1}
          style={{
            textAlign: 'right',
            display: 'flex',
            justifyContent: 'end',
            padding: '8px 32px 0px 0px',
          }}
        >
          {!isExpanded && (
            <Avatar className={classes.avatar} onClick={toggleTabs}>
              <ExpandMoreIcon className={classes.avatarIcon} />
            </Avatar>
          )}
          {isExpanded && (
            <Avatar className={classes.avatar} onClick={toggleTabs}>
              <ExpandLessIcon className={classes.avatarIcon} />
            </Avatar>
          )}
        </Grid>
      </Grid>
      {isExpanded && (
        <Grid item xs={12} className={classes.filterBar}>
          {filterButtons.map((item: any, id: number) => (
            <Grid key={id}>{item.filterButton}</Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default PageNavigation;
