import React from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material/';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = ({}) =>
  makeStyles((_theme) => ({
    root: {
      // paddingLeft: 16,
      width: 100,
      borderLeft: '1px solid #332D3C'
    }
  }))

const TableCellContainer = ({
  isCheckbox = false,
  children = '',
  dark = null,
  style = {}
  // ...props
}) => {
  const classes = useStyles({
    dark,
    isCheckbox
  })()
  return (
    <TableCell className={classes.root} style={style} padding='none'>
      {children}
    </TableCell>
  )
}

export {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCellContainer,
  TablePagination
}