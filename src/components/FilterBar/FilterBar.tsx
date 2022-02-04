import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Avatar, SvgIcon } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const useStyles = (props: any) =>
  makeStyles(() => ({
    root: {
      width: '100%',
      height: '56px',
    },
    avatar: {
      backgroundColor: () => {
        if (props.dark) return '#453d51';
        return '#E6E6E6';
      },
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      marginTop: '8px',
    },
    avatarIcon: {
      width: '18px',
      height: '18px',
      color: () => {
        if (props.dark) return '#ffffff';
        return '#000000';
      },
    },
    activeAvatar: {
      backgroundColor: () => {
        if (props.dark) return '#ffffff';
        else return '#332D3C';
      },
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      marginTop: '8px',
    },
    activeAvatarIcon: {
      width: '18px',
      height: '18px',
      color: () => {
        if (props.dark) return '#332D3C';
        else return '#ffffff';
      },
    },
    navBar: {
      width: '100%',
      height: '56px',
      boxShadow: 'none',
      display: 'flex',
      borderBottom: () => {
        if (props.dark) return '1px solid #332d3c';
        else return '1px solid #F2F2F2';
      },
      backgroundColor: () => {
        if (props.dark) return '#332d3c';
        return '#F2F2F2';
      },
      borderRadius: '4px',
    },
    filterRoot: {
      flexGrow: 1,
      backgroundColor: () => {
        if (props.dark) return '#332d3c';
        return '#f2f2f2';
      },
      display: 'flex',
      borderRadius: '4px',
      height: '56px',
    },
    tabs: {
      minWidth: '225px',
      height: '56px',
      padding: '0px 32px 0px 32px',
      borderRight: () => {
        if (props.dark) return '1px solid #26222d';
        return '1px solid #E6E6E6';
      },
      borderLeft: () => {
        if (props.dark) return '1px solid #26222d';
        return '1px solid #E6E6E6';
      },
      fontSize: '14px',
      lineHeight: '18px',
      alignItems: 'center',
      color: () => {
        if (props.dark) return '#ffffff';
        return '#000000';
      },
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      backgroundColor: () => {
        if (props.dark) return '#332d3c';
        return '#F2F2F2';
      },
      marginTop: '-2px',
    },
    indicator: {
      backgroundColor: '#2D6BFF',
      height: '3px',
    },
    labelContainer: {
      width: 'auto',
      padding: 0,
      height: '56px',
    },
    iconLabelWrapper: {
      flexDirection: 'row',
    },
    filterTitle: {
      opacity: 1,
      width: '225px',
      margin: '18px 32px 0px 32px',
      borderRight: () => {
        if (props.dark) return '1px solid #332d3c';
        return '1px solid #E6E6E6';
      },

      height: '56px',
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '18px',
      alignItems: 'center',
      color: () => {
        if (props.dark) return '#ffffff';
        return '#000000';
      },
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      backgroundColor: () => {
        if (props.dark) return '#332d3c';
        return '#F2F2F2';
      },
    },
    filterIcon: {
      position: 'absolute',
      right: '32px',
      backgroundColor: () => {
        if (props.dark) return '#332d3c';
        return '#F2F2F2';
      },
    },
    filterHeader: {
      height: '56px',
      width: '225px',
      // borderRight: () => {
      //   if (props.dark) return '1px solid #332d3c';
      //   return '1px solid #E6E6E6';
      // },
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '18px',
      alignItems: 'center',
      color: () => {
        if (props.dark) return '#ffffff';
        return '#000000';
      },
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      backgroundColor: () => {
        if (props.dark) return '#332d3c';
        return '#F2F2F2';
      },
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
      display: 'flex',
    },
  }));

const FilterBar = (props: any) => {
  const {
    filter,
    dark = false,
    onFilterClick,
    isFilterApplied,
    showFilterIcon = true,
  } = props;
  const classes = useStyles({
    dark,
  })();
  const [tabValue, setTabValue] = React.useState(filter.defaultValue);

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: any) => {
    event.preventDefault();
    setTabValue(newValue);
    props.onTabChange(newValue);
  };

  const a11yProps = (index: any) => {
    return {
      id: `filter-tab-${index}`,
      'aria-controls': `filter-tabpanel-${index}`,
    };
  };
  return (
    <div className={classes.root}>
      <Grid item xs={12} className={classes.navBar}>
        <Grid item xs={10}>
          <div className={classes.filterRoot}>
            {filter.options.length === 0 && <Grid>{filter.content}</Grid>}
            {!filter.content && (
              <Grid className={classes.filterHeader}>
                <Grid>{filter.icon}</Grid>
                <Grid>{filter.title}</Grid>
              </Grid>
            )}
            {filter.options.length > 0 && (
              <Tabs
                value={tabValue}
                onChange={handleChange}
                aria-label="simple tabs example"
                classes={{
                  indicator: classes.indicator,
                }}
              >
                {filter.options.map((item: any, id: number) => (
                  <Tab
                    icon={item.icon}
                    className={classes.tabs}
                    label={item.name}
                    {...a11yProps(id)}
                    key={id}
                  />
                ))}
              </Tabs>
            )}
          </div>
        </Grid>
        {showFilterIcon && (
          <Grid item xs={2} className={classes.filterIcon}>
            <Avatar
              className={
                isFilterApplied ? classes.activeAvatar : classes.avatar
              }
              onClick={() => onFilterClick()}
            >
              <FilterIcon
                className={
                  isFilterApplied
                    ? classes.activeAvatarIcon
                    : classes.avatarIcon
                }
              />
            </Avatar>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default FilterBar;

export const FilterIcon = (props: any) => {
  return (
    <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2 2L7 9 7 12.5 9 14 9 9 14 2z" />
    </SvgIcon>
  );
};
