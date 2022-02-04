import React, { useState } from 'react'
import { Grid, Avatar, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import SettingsIcon from '@mui/icons-material/Settings'
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
const useStyles = (props: any) =>
  makeStyles((_theme) => ({
    topAppBar: {
      width: '100%',
      boxShadow: 'none',
      backgroundColor: () => {
        if (props.dark) return '#26222D'
        return props.backgroundColor || '#ffffff'
      },
      borderBottom: () => {
        if (props.dark) return '1px solid #332D3C'
        return props.backgroundColor || '1px solid #F2F2F2'
      },
      height: 56,
      padding: '0px 32px 0px 32px'
    },
    sectionOne: {
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'start'
    },
    sectionTwo: {
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'end',
      paddingTop: '8px'
    },
    avatar: {
      backgroundColor: () => {
        if (props.dark) return '#332D3C'
        return props.backgroundColor || '#F2F2F2'
      },
      cursor: 'pointer'
    },
    avatarIcon: {
      color: () => {
        if (props.dark) return '#ffffff'
        return '#000000'
      }
    },
    toggleButtonGroupFocused: {
      backgroundColor: () => {
        if (props.dark) return '#332D3C'
        return props.backgroundColor || '#F2F2F2'
      },
      borderRadius: '100px',
      marginRight: '16px',
      height: '40px',
      '&:hover': {
        backgroundColor: () => {
          if (props.dark) return '#332D3C'
          else return '#E6E6E6'
        }
      }
    },
    toggleButtonFocused: {
      backgroundColor: () => {
        if (props.dark) return '#332D3C'
        return props.backgroundColor || '#F2F2F2'
      },
      height: '40px',
      borderRadius: '100px',
      fontWeight: 600,
      color: '#000000',
      padding: '10px 15px',
      border: '0px solid #231f29',
      cursor: 'pointer',
      '&.Mui-selected': {
        backgroundColor: () => {
          if (props.dark) return '#453D51'
          return '#E6E6E6'
        },
        color: () => {
          if (props.dark) return '#FFFFFF'
          return '#000000'
        },
        borderRadius: '100px',
        '&:hover': {
          backgroundColor: () => {
            if (props.dark) return '#332D3C'
            return '#E6E6E6'
          },
          color: () => {
            if (props.dark) return '#FFFFFF'
            return '#000000'
          }
        }
      },
      '&:hover': {
        backgroundColor: () => {
          if (props.dark) return '#332D3C'
          return '#E6E6E6'
        },
        color: () => {
          if (props.dark) return '#FFFFFF'
          return '#000000'
        }
      }
    }
  }))

const ToolBar = (props: any) => {
  const {
    dark = false,
    toggleValue,
    buttonValueOne,
    buttonValueTwo,
    onSettingsIconClick,
    onToggleViewChange,
    buttonOneIcon,
    buttonTwoIcon
  } = props
  const classes = useStyles({
    dark
  })()

  const [toggleView, settoggleView] = useState(toggleValue)

  const onViewChange = (e: any, nextView: string) => {
    if (!e || nextView === null) {
      return
    }
    settoggleView(nextView)
    onToggleViewChange(nextView)
  }

  return (
    <Grid item xs={12} className={classes.topAppBar}>
      <Grid container spacing={0}>
        <Grid item xs={12} style={{ display: 'flex' }}>
          <Grid item xs={6} className={classes.sectionOne}></Grid>
          <Grid item xs={6} className={classes.sectionTwo}>
            <ToggleButtonGroup
              exclusive
              className={classes.toggleButtonGroupFocused}
              value={toggleView}
              onChange={onViewChange}
              aria-label='toggle-View'
            >
              <ToggleButton
                className={classes.toggleButtonFocused}
                value={buttonValueOne}
                aria-label={buttonValueOne}
              >
                {buttonOneIcon}
                <Typography
                  className={classes.avatarIcon}
                  style={{ padding: '0px 5px 0px 19px' }}
                >
                  {buttonValueOne}
                </Typography>
              </ToggleButton>
              <ToggleButton
                className={classes.toggleButtonFocused}
                value={buttonValueTwo}
                aria-label={buttonValueTwo}
              >
                {buttonTwoIcon}
                <Typography
                  className={classes.avatarIcon}
                  style={{ padding: '0px 5px 0px 19px' }}
                >
                  {buttonValueTwo}
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            <Avatar
              className={classes.avatar}
              onClick={onSettingsIconClick}
              id='avt-table-settings'
            >
              <SettingsIcon
                className={classes.avatarIcon}
                id='icon-table-settings'
              />
            </Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ToolBar;
