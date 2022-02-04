import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Tooltip } from '@mui/material'
import { AppBar, Avatar, Drawer, Grid, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { NewCompanyFullLogo, NewCompanyLogoMark } from '../Icons'
import SettingsIcon from '@mui/icons-material/Settings'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import NotificationsIcon from '@mui/icons-material/Notifications'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((_theme: any) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    width: '56px',
    height: '100vh',
    background: '#1D1A22'
  },
  logoSmall: {
    width: '56px',
    height: '56px',
    margin: '18px 11px 0px 11px'
  },
  menuLogoContainer: {
    width: '56px',
    height: '56px',
    margin: '8px 8px 0px 8px'
  },
  avatar: {
    width: '32px',
    height: '32px',
    padding: '4px',
    border: 'solid 1px #26222d',
    backgroundColor: '#1D1A22',
    cursor: 'pointer'
  },
  avatarSelected: {
    width: '32px',
    height: '32px',
    padding: '4px',
    backgroundColor: '#26222d',
    cursor: 'pointer'
  },
  sideMenu: {
    width: '456px',
    overflowX: 'hidden',
    backgroundColor: '#1D1A22',
    height: '100%'
  },
  icon: {
    backgroundColor: '#26222D',
    color: '#ffffff',
    fontWeight: 500,
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    padding: '4px',
    '&:hover': {
      backgroundColor: '#26222D'
    }
  },
  menuItem: {
    width: '392px',
    height: '48px',
    flexGrow: 0,
    borderRadius: '4px',
    paddingBottom: '2px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#26222D'
    }
  },
  menuTitle: {
    fontFamily: 'IBM Plex Sans',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#FFFFFF',
    padding: '16px 0px 0px 16px'
  },
  sideAppBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#1D1A22',
    boxShadow: 'none'
  }
}))

const SideNav = (props: any) => {
  const { onMenuItemClick } = props
  const classes = useStyles()
  const [toggleSideMenu, setToggleSideMenu] = useState(false)
  const [menuItem, setmenuItem] = useState([])

  useEffect(() => {
    setmenuItem(props.menuItem)
  }, [menuItem])

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} style={{ display: 'flex' }}>
          <SideAppBar
            showSideMenu={() => {
              setToggleSideMenu(!toggleSideMenu)
            }}
            classes={classes}
            menuItem={menuItem}
            onMenuItemClick={onMenuItemClick}
          />
          <SideMenu
            classes={classes}
            toggleSideMenu={toggleSideMenu}
            onClose={() => setToggleSideMenu(false)}
            menuItem={menuItem}
            onMenuItemClick={onMenuItemClick}
          />
        </Grid>
      </Grid>
    </div>
  )
}

const SideAppBar = (props: any) => {
  const { classes, showSideMenu, onMenuItemClick } = props
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Grid className={classes.logoSmall}>
          <NewCompanyLogoMark />
        </Grid>
        <Grid className={classes.menuLogoContainer}>
          <Tooltip title='Menu'>
            <Avatar
              className={classes.avatarSelected}
              onClick={() => showSideMenu()}
            >
              <MenuIcon />
            </Avatar>
          </Tooltip>
        </Grid>
        {applicationFixedMenu.map((menu: any) => (
          <Grid
            className={classes.menuLogoContainer}
            onClick={() => onMenuItemClick(menu)}
          >
            <Tooltip title={menu.title}>
              <Avatar
                className={
                  menu.isSelected ? classes.avatarSelected : classes.avatar
                }
              >
                {menu.icon}
              </Avatar>
            </Tooltip>
          </Grid>
        ))}
      </AppBar>
    </div>
  )
}

const SideMenu = (props: any) => {
  const {
    toggleSideMenu,
    onClose,
    menuItem,
    anchor,
    classes,
    onMenuItemClick
  } = props

  const renderMenu = (menu: any) => {
    if (menu.isSideBarItem) {
      return
    }
    return (
      <Grid
        item
        xs={12}
        className={classes.menuItem}
        style={{ marginBottom: '4px' }}
        onClick={() => onMenuItemClick(menu)}
      >
        <Grid style={{ display: 'flex' }}>
          <Grid style={{ color: '#ffffff', padding: '10px' }}>{menu.icon}</Grid>
          <Grid>
            <Typography
              className={classes.menuTitle}
              style={{ padding: '12px 0px 0px 12px' }}
            >
              {menu.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return (
    <Drawer
      anchor={anchor || 'left'}
      open={toggleSideMenu}
      onClose={(e) => onClose(e)}
    >
      <div className={classes.sideMenu}>
        <Grid container justifyContent='flex-end'>
          <Grid item xs={8} style={{ padding: '46px 32px 0px 32px' }}>
            <NewCompanyFullLogo />
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              padding: '40px 32px 0px 0px',
              display: 'flex',
              justifyContent: 'end'
            }}
          >
            <Avatar className={classes.icon} onClick={(e) => onClose(e)}>
              <Close />
            </Avatar>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: '46px 32px 0px 32px' }}>
          <Grid container>
            {menuItem.map((menu: any) => (
              <Grid
                item
                xs={12}
                className={classes.menuItem}
                onClick={() => onMenuItemClick(menu)}
              >
                <Grid style={{ display: 'flex' }}>
                  {menu.icon && (
                    <Grid style={{ color: '#ffffff', padding: '10px' }}>
                      {menu.icon}
                    </Grid>
                  )}
                  <Grid>
                    <Typography
                      className={classes.menuTitle}
                      style={{ padding: '12px 0px 0px 12px' }}
                    >
                      {menu.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ padding: 0, margin: 0 }}>
          <div
            style={{
              margin: '16px 32px 0px 32px',
              border: '1px solid #332D3C',
              borderRadius: '4px'
            }}
          ></div>
        </Grid>
        <Grid item xs={12} style={{ padding: '16px 32px 0px 32px' }}>
          <Grid container>
            {applicationFixedMenu.map((menu: any) => renderMenu(menu))}
          </Grid>
        </Grid>
      </div>
    </Drawer>
  )
}

export default SideNav

const applicationFixedMenu = [
  {
    title: 'Notificatios',
    icon: <NotificationsIcon />,
    isSideBarItem: true
  },
  {
    title: 'Alerts',
    icon: <PlayArrowIcon style={{ transform: 'rotate(270deg)' }} />,
    isSideBarItem: true
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />
  },
  {
    title: 'Log out',
    icon: <ExitToAppIcon />
  }
]