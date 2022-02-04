import React from 'react'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((_theme) => ({
  root: {
    overflow: 'auto',
    padding: '10px 32px',
    borderRight: '1px solid #332D3C'
  }
}))

const ListContainer = ({
  // dark = true,
  style = {},
  children = ''
  // ...props
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root} style={style}>
      {children}
    </div>
  )
}

export default ListContainer;