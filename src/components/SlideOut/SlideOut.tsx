import React from 'react';
import { makeStyles } from '@mui/styles';
import { Drawer, Grid, DrawerProps } from '@mui/material';
import { Close } from '@mui/icons-material';
import { ButtonProps } from '../Button/Button';
import IconButton from "../IconButton/IconButton";

export interface SlideOutProps extends DrawerProps {
  dark: boolean,
  open: boolean,
  onClose: () => null,
  title: string,
  subTitle: string,
  content: Element,
  button: ButtonProps,
  clearButton: ButtonProps
}

const useStyles = makeStyles(_theme => ({
  root: (dark) => !dark ? ({
    "& .MuiDrawer-paper": {
      width: "456px",
      backgroundColor: "#FFFFFF",
      padding: "0px 32px 32px 32px",
      fontFamily: "IBM Plex Sans,sans-serif",
      fontWeight: 400,
    },
  }) : ({
    border: "1px solid #E6E6E6",
    "& .MuiDrawer-paper": {
      width: "456px",
      backgroundColor: "#26222D",
      padding: "0px 32px 32px 32px",
      borderLeft: "1px solid #4F465D",
      fontFamily: "IBM Plex Sans,sans-serif",
      fontWeight: 400,
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent"
    }
  }),
  container: () => ({
    height: "40px",
    margin: "36px 0px",
  }),
  title: (dark) => ({
    fontSize: "18px",
    color: !dark ? "#000000" : "#FFFFFF"
  }),
  close: () => ({
    marginLeft: "16px",
  }),
  subContainer: (dark) => ({
    height: "40px",
    fontSize: "14px",
    fontWeight: 600,
    color: !dark ? "#000000" : "#FFFFFF",
    margin: "16px 0px",
    alignContent: "center"
  }),
  content: (dark) => ({
    marginBottom: "32px",
    color: !dark ? "#000000" : "#FFFFFF",
    fontSize: "14px",
    fontWeight: "600",
    alignItems: "center",
    height: '40px',
    backgroundColor: !dark ? "#F2F2F2" : "#332D3C",
    borderRadius: "4px",
  }),
}));

export default function SlideOut(props: any) {
  const { dark, open, onClose, title, subTitle, content, button, clearButton } = props;
  const classes = useStyles(dark);

  return (
    <Drawer
      anchor="right"
      open={open}
      className={classes.root}
    >
      <Grid container justifyContent="space-between" alignItems="center" className={classes.container}>
        <Grid item className={classes.title}>
          {title}
        </Grid>
        <Grid item>
          <Grid container>
            {clearButton &&
              <Grid item>
                {clearButton}
              </Grid>}
            <Grid item className={classes.close}>
              <IconButton
                icon={<Close />}
                type={dark ? "900" : "100"}
                onClick={onClose}
                size="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {subTitle &&
        <Grid container className={classes.subContainer}>
          {subTitle}
        </Grid>}
      <Grid container className={classes.content}>
        {content}
      </Grid>
      {button &&
        <Grid container>
          {button}
        </Grid>}
    </Drawer>
  );
}
