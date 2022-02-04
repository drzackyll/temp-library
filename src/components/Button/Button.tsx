import React from 'react';
import { Button as ButtonComponent, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface ButtonProps {
  // dark: boolean;
  width: string;
  height: string;
  justifyContent: string;
  backgroundColor: string;
  textColor: string;
  backgroundHover: string;
  textColorHover: string;
  outline: string;
  disabled: boolean;
  active: boolean;
  borderRadius: string;
}

const useStyles = (props: ButtonProps) =>
  makeStyles((_theme: any) => ({
    root: {
      '&.MuiButton-root':{
      // color: () => {
      //   return props.textColor ? `${props.textColor}${(props.disabled || props.active) ? '!important' : ""}` : !props.dark ? '#000000' : '#FFFFFF'
      // },
      borderRadius: props.borderRadius || '100px',
      // backgroundColor: () => {
      //   return props.backgroundColor ? `${props.backgroundColor}${(props.disabled || props.active) ? '!important' : ""}` : !props.dark ? '#F2F2F2' : '#332D3C'
      // },
      textTransform: 'capitalize',
      padding: '14px 24px',
      width: props.width || 'auto',
      height: props.height || 'auto',
      border: () => {
        if (props.outline) return `solid 1px ${props.outline}`;
      },
      fontSize: '14px',
      fontFamily: 'IBM Plex Sans,sans-serif',
      fontWeight: '400',
      justifyContent: props.justifyContent || 'space-between',
      boxShadow: 'none',
      '&:hover': {
        // backgroundColor: () => {
        //   return props.backgroundHover ? props.backgroundHover : !props.dark ? '#E6E6E6' : '#453D51'
        // },
        // color: () => {
        //   return props.textColorHover ? props.textColorHover : !props.dark ? '#000000' : '#FFFFFF'
        // },
        boxShadow: 'none',
      },
      '& .MuiSvgIcon-root': {
        height: '18px',
        width: '18px',
      },
      '& .MuiButton-startIcon': {
        marginLeft: '0px',
        marginRight: '16px'
      },
      '& .MuiButton-endIcon': {
        marginLeft: '16px',
        marginRight: '0px'
      },
    }
    },
  }));

const Button = (props: any) => {
  const {
    // dark = true,
    width,
    height,
    justifyContent,
    backgroundColor,
    textColor,
    text,
    backgroundHover,
    textColorHover,
    outline,
    disabled,
    active,
    borderRadius,
    ...rest
  } = props;
  const classes = useStyles({
    // dark,
    width,
    height,
    justifyContent,
    backgroundColor,
    textColor,
    backgroundHover,
    textColorHover,
    outline,
    disabled,
    active,
    borderRadius
  })();
  const theme = useTheme();
  console.log(theme);
  return (
    // <ButtonComponent {...rest} disabled={disabled} className={classes.root}>
    //   {text}
    // </ButtonComponent>
    <ButtonComponent />
  );
};

export default Button;
