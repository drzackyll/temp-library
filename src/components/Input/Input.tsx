import React from 'react'
import clsx from 'clsx'
import { TextField, InputLabel, FormHelperText } from '@mui/material'
import { makeStyles } from '@mui/styles'

export interface InputProps {
  dark: boolean;
  variant: string;
  width: string;
  height: string;
}

const useStyles = (props: InputProps) => makeStyles((_theme) => ({
  label: {
    fontFamily: 'IBM Plex Sans,sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    color: !props.dark ? '#808080' : '#CCCCCC',
    textAlign: 'left',
    '&.disabled': {
      color: !props.dark ? '#B3B3B3' : '#CCCCCC'
    },
    '&.error': {
      color: '#F82A2A'
    }
  },
  input: {
    marginTop: '4px',
    width: props.width || '100%',
    '& fieldset,& .MuiInput-underline:after,& .MuiInput-underline:before,& .MuiInput-underline:hover:not(.Mui-disabled):before':
    {
      border: 0,
      outline: 0
    },
    '& .MuiFilledInput-underline:after,& .MuiFilledInput-underline:before,& .MuiFilledInput-underline:hover:not(.Mui-disabled):before':
    {
      border: 0,
      outline: 0,
    },
    '& input': {
      padding: 0,
      margin: 0
    },
    '& .MuiInputBase-root': {
      padding: '0px 16px',
      fontFamily: 'IBM Plex Sans,sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      color: !props.dark ? '#808080' : '#CCCCCC',
      height: props.height || '40px',
      borderBottom: props.variant !== "outlined" && `1px solid ${!props.dark ? '#E6E6E6' : '#453D51'}`,
      border: props.variant === "outlined" && `1px solid ${!props.dark ? '#E6E6E6' : '#453D51'}`,
      backgroundColor: props.variant === "filled" ? "#F2F2F2" : "transparent",
      '& .MuiSvgIcon-root': {
        width: '12px',
        color: !props.dark ? '#808080' : '#CCCCCC'
      }
    },
    '& .MuiInputBase-root:hover,& .MuiInputBase-root:active,& .MuiInputBase-root.Mui-focused,& .MuiInputBase-root:focus,&.error .MuiInputBase-root': {
      backgroundColor: !props.dark ? '#F2F2F2' : '#332D3C'
    },
    '& .MuiInputBase-root:active': {
      borderColor: !props.dark ? '#000000' : '#FFFFFF',
      color: !props.dark ? '#000000' : '#FFFFFF',
      '& .MuiSvgIcon-root': {
        color: !props.dark ? '#000000' : '#FFFFFF'
      }
    },
    '& .MuiInputBase-root.Mui-focused,& .MuiInputBase-root:focus': {
      borderColor: '#2D6BFF',
      color: !props.dark ? '#000000' : '#FFFFFF',
      '& .MuiSvgIcon-root': {
        color: !props.dark ? '#000000' : '#FFFFFF'
      }
    },
    '&.error .MuiInputBase-root': {
      color: '#F82A2A',
      borderColor: '#F82A2A',
      '& .MuiSvgIcon-root': {
        color: '#F82A2A'
      }
    },
    '&.disabled .MuiInputBase-root': {
      color: '#808080',
      backgroundColor: '#B3B3B3',
      '& .MuiSvgIcon-root': {
        color: '#808080'
      }
    },
  }
}))

export default function Input(props: any) {
  const {
    dark,
    variant,
    label,
    helperText,
    error,
    disabled,
    startIcon,
    endIcon,
    width,
    height,
    ...rest
  } = props
  const classes = useStyles({ dark, variant, width, height })()

  return (
    <React.Fragment>
      <InputLabel className={clsx(classes.label, disabled && 'disabled')}>
        {label}:
      </InputLabel>
      <TextField
        {...rest}
        variant={variant}
        disabled={disabled}
        className={clsx(
          classes.input,
          error && 'error',
          disabled && 'disabled'
        )}
        InputProps={{
          endAdornment: endIcon,
          startAdornment: startIcon
        }}
      />
      <FormHelperText
        className={clsx(
          classes.label,
          error && 'error',
          disabled && 'disabled'
        )}
      >
        {helperText}
      </FormHelperText>
    </React.Fragment>
  )
}
