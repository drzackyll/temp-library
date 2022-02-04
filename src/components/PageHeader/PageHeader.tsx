import React from 'react'
import { Grid, Avatar, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles';

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const useStyles = (props: any) =>
  makeStyles((_theme: any) => ({
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
    pageTitle: {
      color: () => {
        if (props.dark) return '#FFFFFF'
        return props.backgroundColor || '#000000'
      },
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '20px',
      padding: '18px 0px 0px 0px'
    },
    pageButton: {
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'end'
    },
    headerBack: {
      display: 'flex',
      cursor: 'pointer',
      padding: '8px 0px 18px 0px'
    },
    avatar: {
      backgroundColor: () => {
        if (props.dark) return '#F2F2F2'
        return props.backgroundColor || '#332D3C'
      },
      cursor: 'pointer'
    },
    avatarIcon: {
      color: () => {
        if (props.dark) return '#000000'
        return props.backgroundColor || '#ffffff'
      }
    },
    backText: {
      padding: '8px 0px 0px 10px',
      fontWeight: 600,
      color: () => {
        if (props.dark) return '#FFFFFF'
        return props.backgroundColor || '#000000'
      }
    }
  }))

const PageHeader = (props: any) => {
  const {
    dark = false,
    headerButtons = [],
    showHeaderBack = false,
    onHeaderBack = () => null
  } = props
  const classes = useStyles({
    dark
  })()

  const renderPageHeader = () => {
    if (showHeaderBack) {
      return (
        <Grid className={classes.headerBack} onClick={onHeaderBack}>
          <Avatar className={classes.avatar}>
            <ArrowBackIcon className={classes.avatarIcon} />
          </Avatar>
          <Typography className={classes.backText}>Back</Typography>
        </Grid>
      )
    } else {
      return (
        <Grid className={classes.pageTitle}>
          {props.pageTitle || 'Page Title'}
        </Grid>
      )
    }
  }

  return (
    <Grid item xs={12} className={classes.topAppBar}>
      <Grid container spacing={0}>
        <Grid item xs={12} style={{ display: 'flex' }}>
          <Grid item xs={3} style={{ textAlign: 'left' }}>
            {renderPageHeader()}
          </Grid>
          <Grid item xs={9} className={classes.pageButton}>
            {headerButtons.map((item: any, idx: number) => (
              <Grid
                style={{
                  margin:
                    idx === headerButtons.length - 1
                      ? '0px 0px 0px 0px'
                      : '0px 16px 0px 0px'
                }}
              >
                {item.headerButton}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PageHeader;