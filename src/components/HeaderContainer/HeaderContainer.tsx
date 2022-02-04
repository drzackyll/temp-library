import React from 'react'
import { Grid } from '@mui/material/';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = (props: any) =>
  makeStyles((_theme) => {
    return {
      root: {
        height: 56,
        paddingRight: props.noPadding ? 0 : 32,
        paddingLeft: props.noPadding ? 0 : 32,
        fontWeight: 600,
        fontSize: 16,
        backgroundColor: props.dark ? '#26222D' : '#FFF',
        color: props.dark ? '#FFF' : '#000',
        borderBottom: '1px solid #332D3C'
      },
      verticalAlignCenter: {
        display: 'flex',
        alignItems: 'center'
      }
    }
  })

const HeaderContainer = ({
  header = '',
  headerIcon = '',
  endComponent = '',
  children = '',
  noPadding = false,
  headerStyle = {},
  ...props
}) => {
  const { dark = true } = props
  const classes = useStyles({
    dark,
    noPadding
  })()
  console.log(' Rest Props ', props)
  return (
    <div className={classes.root} style={headerStyle}>
      <Grid
        container
        direction='row'
        alignItems='center'
        {...props}
        style={{ height: '100%', width: '100%' }}
      >
        {header && (
          <Grid item className={classes.verticalAlignCenter}>
            {headerIcon && (
              <span style={{ paddingRight: 16 }}>{headerIcon}</span>
            )}
            <span style={{ paddingBottom: 5 }}> {header}</span>
          </Grid>
        )}
        {endComponent && (
          <Grid item className={classes.verticalAlignCenter}>
            {endComponent}
          </Grid>
        )}
        {children}
      </Grid>
    </div>
  )
}

export default HeaderContainer;