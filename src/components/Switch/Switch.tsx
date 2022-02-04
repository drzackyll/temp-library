import React from 'react';
import { Switch as SwitchComponent, Grid } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';

const useStyles = makeStyles(_theme => ({
  textLeft: (dark) => ({
    marginRight: "8px",
    fontSize: "14px",
    color: !dark ? "#000000" : "#FFFFFF",
    fontFamily: "IBM Plex Sans,sans-serif"
  }),
  textRight: (dark) => ({
    marginLeft: "8px",
    fontSize: "14px",
    color: !dark ? "#000000" : "#FFFFFF",
    fontFamily: "IBM Plex Sans,sans-serif"
  }),
}));

export default function CheckboxInput(props: any) {
  const { dark, text, textPlacement, ...rest } = props;
  const classes = useStyles(dark);
  const ToggleSwitch = withStyles((theme) => ({
    root: {
      width: 24,
      height: 14,
      overflow: "visible",
      padding: 0,
      display: "flex",
    },
    switchBase: {
      padding: 3,
      color: theme.palette.common.white,
      "&$checked": {
        transform: "translateX(7.5px)",
        color: theme.palette.common.white,
        "& + $track": {
          opacity: 1,
          backgroundColor: "#34CB81",
          borderColor: "#34CB81",
        },
      },
    },
    thumb: {
      width: 10,
      height: 10,
      boxShadow: "none",
    },
    track: {
      border: !dark ? "1px solid #808080" : "1px solid #CCCCCC",
      borderRadius: "100px",
      opacity: 1,
      backgroundColor: !dark ? "#808080" : "#CCCCCC",
    },
    checked: {},
  }))(SwitchComponent);

  return (
    <Grid container alignItems="center">
      {text && textPlacement === "left" && <Grid item className={classes.textLeft}>{text}</Grid>}
      <ToggleSwitch {...rest} />
      {text && textPlacement === "right" && <Grid item className={classes.textRight}>{text}</Grid>}
    </Grid>
  );
}