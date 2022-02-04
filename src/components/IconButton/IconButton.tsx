import React from 'react'
import { IconButton as IconButtonComponent } from '@mui/material'
import { makeStyles } from '@mui/styles/'
import clsx from "clsx"

const colorCode: any = {
  900: {
    color: '#FFFFFF',
    background: '#332D3C',
    hoverColor: '#FFFFFF',
    hoverBackground: '#453D51',
    disabledColor: '#808080', disabledBackground: '#B3B3B3',
  },
  100: {
    color: '#000000',
    background: '#F2F2F2',
    hoverColor: '#000000',
    hoverBackground: '#E6E6E6',
    disabledColor: '#808080', disabledBackground: '#B3B3B3',
  }
}

export interface ButtonProps {
  type: string,
  width: string,
  height: string,
  disabled: boolean,
  hoverBackground: string,
}

const useStyles = (props: ButtonProps) =>
  makeStyles((_theme: any) => ({
    iconRoot: {
      '& .MuiAvatar-root,&.MuiIconButton-root': {
        color: colorCode[props.type]?.color,
        backgroundColor: colorCode[props.type]?.background,
        textTransform: 'capitalize',
        width: props.width || '40px',
        height: props.height || '40px'
      },
      '&:hover': {
        backgroundColor: 'transparent',
        '& .MuiAvatar-root,&.MuiIconButton-root': {
          backgroundColor: props.hoverBackground || colorCode[props.type]?.hoverBackground,
          color: colorCode[props.type]?.hoverColor,
          '& .MuiSvgIcon-root,& .text': {
            color: colorCode[props.type]?.hoverColor
          }
        }
      },
      '& .MuiSvgIcon-root': {
        fontSize: '18px',
        color: colorCode[props.type]?.color
      },
      '& .text': {
        fontSize: '12px',
        fontFamily: "IBM Plex Sans,sans-serif",
        color: colorCode[props.type]?.color
      },
      '&.disabled': {
        backgroundColor: 'transparent!important',
        '& .MuiAvatar-root,&.MuiIconButton-root': {
          color: colorCode[props.type]?.disabledColor,
          backgroundColor: colorCode[props.type]?.disabledBackground,
          '& .MuiSvgIcon-root,& .text': {
            color: colorCode[props.type]?.disabledColor
          },
        }
      }
    }
  }))

const IconButton = (props: any) => {
  const { width, height, type, icon, disabled, hoverBackground } = props
  const classes = useStyles({
    type,
    width,
    height,
    disabled,
    hoverBackground
  })()
  return <IconButtonComponent className={clsx(classes.iconRoot, disabled && "disabled")}>{icon}</IconButtonComponent>
}

export default IconButton
