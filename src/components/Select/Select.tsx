import React from 'react'
import clsx from 'clsx'
import { Select as SelectComponent, MenuItem, InputLabel, FormHelperText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ExpandMore } from "@mui/icons-material"
import Checkbox from '../Checkbox/Checkbox'

const useStyles = (props: any) => makeStyles((_theme) => ({
  label: {
    '&.MuiFormLabel-root,&.MuiFormHelperText-root': {
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
    }
  },
  select: {
    '&.MuiInputBase-root': {
      marginTop: '4px',
      width: '100%',
      fontFamily: 'IBM Plex Sans,sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      color: !props.dark ? '#808080' : '#CCCCCC',
      height: '40px',
      borderBottom: props.variant !== "outlined" ? `1px solid ${!props.dark ? '#E6E6E6' : '#453D51'}` : "initial",
      border: props.variant === "outlined" ? `1px solid ${!props.dark ? '#E6E6E6' : '#453D51'}` : "initial",
      backgroundColor: props.variant === "filled" ? "#F2F2F2" : "transparent",
      '& .MuiSelect-select': {
        padding: '0px 16px',
        textAlign: 'left'
      },
      '& .MuiSvgIcon-root,& .MuiSelect-icon': {
        width: '18px',
        marginRight: '16px',
        color: !props.dark ? '#808080' : '#FFFFFF'
      },
      '& fieldset,&.MuiInput-underline:after,&.MuiInput-underline:before,&.MuiInput-underline:hover:not(.Mui-disabled):before':
      {
        border: 0,
        outline: 0
      },
      '&.MuiFilledInput-underline:after,&.MuiFilledInput-underline:before,&.MuiFilledInput-underline:hover:not(.Mui-disabled):before':
      {
        border: 0,
        outline: 0,
      },
      '& .MuiSelect-select:focus,& .MuiSelect-select:focus-visible': {
        backgroundColor: 'transparent',
        border: 0,
        outline: 0
      },
      '&:hover,&.Mui-focused,&:focus,&.error': {
        backgroundColor: !props.dark ? '#F2F2F2' : '#332D3C'
      },
      '&.Mui-focused,&:focus': {
        borderColor: !props.dark ? '#000000' : '#FFFFFF',
        color: !props.dark ? '#000000' : '#FFFFFF',
        '& .MuiSvgIcon-root,& .MuiSelect-icon': {
          color: !props.dark ? '#000000' : '#FFFFFF'
        }
      },
      '&.error': {
        color: '#FFFFFF',
        backgroundColor: '#F82A2A',
        borderColor: '#F82A2A',
        '& .MuiSvgIcon-root,& .MuiSelect-icon': {
          color: '#FFFFFF'
        }
      },
      '&.disabled': {
        color: '#808080',
        backgroundColor: '#B3B3B3',
        '& .MuiSvgIcon-root,& .MuiSelect-icon': {
          color: '#808080'
        }
      }
    }
  },
  menuPaper: {
    '&.MuiPaper-root.MuiPopover-paper': {
      maxHeight: props.maxHeight || "auto",
      marginTop: '12px',
      backgroundColor: !props.dark ? '#F2F2F2' : '#332D3C',
      '& .MuiList-root.MuiMenu-list': {
        padding: 0,
        '& .MuiMenuItem-root.MuiButtonBase-root': {
          backgroundColor: !props.dark ? '#F2F2F2!' : '#332D3C',
          padding: '0px 16px',
          height: '40px',
          '& .optionText': {
            color: !props.dark ? '#000000' : '#FFFFFF',
            fontFamily: 'IBM Plex Sans,sans-serif',
            fontSize: '14px',
            fontWeight: 400
          },
          '& .MuiIconButton-root': {
            paddingRight: '16px'
          },
          '&:hover': {
            backgroundColor: !props.dark ? '#E6E6E6' : '#453D51'
          }
        }
      }
    }
  },
  menuButton: {
    padding: '0px 4px!important',
    margin: '4px 0px',
    borderBottom: `1px solid ${!props.dark ? '#E6E6E6' : '#453D51'}`,
  },
}))

export default function Select(props: any) {
  const {
    dark,
    id,
    name,
    variant,
    label,
    helperText,
    error,
    disabled,
    value,
    multiple,
    options,
    optionLabel,
    onChange,
    maxHeight,
    button
  } = props
  const classes = useStyles({ dark, variant, maxHeight })()

  return (
    <React.Fragment>
      <InputLabel className={clsx(classes.label, disabled && 'disabled')}>
        {label}:
      </InputLabel>
      <SelectComponent
        id={id}
        name={name}
        variant={variant}
        value={value}
        disabled={disabled}
        multiple={multiple}
        className={clsx(
          classes.select,
          error && 'error',
          disabled && 'disabled'
        )}
        onChange={(e) => {
          const selectedValue = e.target.value;
          onChange(typeof selectedValue === 'string' ? selectedValue.split(',') : selectedValue)
        }}
        renderValue={(value: any) => multiple ? value.join(', ') : value}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          //getContentAnchorEl: null,
          classes: {
            paper: classes.menuPaper
          },
        }}
        IconComponent={ExpandMore}
      >
        {button && (<MenuItem className={classes.menuButton}> {button} </MenuItem>)}
        {options?.length &&
          options.map(
            (option: any) =>
              option && (
                <MenuItem key={option[optionLabel]} value={option[optionLabel]}>
                  {multiple && (
                    <Checkbox
                      dark={dark}
                      id='selectCheck'
                      name='selectCheck'
                      checked={value?.length && value.includes(option[optionLabel]) ? true : false}
                      style={{paddingRight: '16px'}}
                    />
                  )}
                  <span className='optionText'>{option[optionLabel]}</span>
                </MenuItem>
              )
          )}
      </SelectComponent>
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
