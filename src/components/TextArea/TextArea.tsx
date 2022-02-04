import React from 'react'
import clsx from 'clsx'
import { TextareaAutosize, InputLabel, FormHelperText } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((_theme) => ({
    label: (dark) => ({
      fontFamily: 'IBM Plex Sans,sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      color: !dark ? '#808080' : '#CCCCCC',
      textAlign: 'left',
      margin: 0,
      '&.disabled': {
        color: !dark ? '#B3B3B3' : '#CCCCCC'
      },
      '&.error': {
        color: '#F82A2A'
      }
    }),
    textarea: (dark) => ({
      marginTop: '4px',
      width: 'calc(100% - 34px)',
      padding: '16px',
      fontFamily: 'IBM Plex Sans,sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      color: !dark ? '#808080' : '#CCCCCC',
      height: '120px!important',
      resize: 'none',
      border: `1px solid ${!dark ? '#E6E6E6' : '#453D51'}`,
      backgroundColor: "transparent",
      '&:hover,&:active,&:focus,&.error':
        {
          backgroundColor: !dark ? '#F2F2F2' : '#332D3C'
        },
      '&:active': {
        borderColor: !dark ? '#000000' : '#FFFFFF',
        color: !dark ? '#000000' : '#FFFFFF'
      },
      '&:focus': {
        borderColor: '#2D6BFF',
        color: !dark ? '#000000' : '#FFFFFF'
      },
      '&:focus-visible':{
        outline: 0
      },
      '&.error': {
        color: '#F82A2A',
        borderColor: '#F82A2A'
      },
      '&.disabled': {
        color: '#808080',
        backgroundColor: '#B3B3B3'
      }
    })
  }))
  
  export default function Textarea(props: any) {
    const { dark, label, helperText, error, disabled, ...rest } = props
    const classes = useStyles(dark)
  
    return (
      <React.Fragment>
        <InputLabel className={clsx(classes.label, disabled && 'disabled')}>
          {label}:
        </InputLabel>
        <TextareaAutosize
          {...rest}
          className={clsx(
            classes.textarea,
            error && 'error',
            disabled && 'disabled'
          )}
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
  