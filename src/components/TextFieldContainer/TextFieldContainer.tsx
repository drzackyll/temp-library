import React from 'react'
import { FormControl, InputLabel, InputBase } from '@mui/material/'

const TextFieldContainer = (props: any) => {
  const {
    title = null,
    type,
    style,
    value,
    placeholder = '',
    variant = 'outlined',
    handleChange,
    // disableUnderline,
    endAdornment = null,
    disabled
  } = props
  return (
    <FormControl variant={variant} style={{ width: '100%', ...style }}>
      {title && (
        <InputLabel shrink htmlFor={`${type}-native-label-placeholder`}>
          {title}
        </InputLabel>
      )}
      <InputBase
        id={`${type}-adornment-weight`}
        value={value}
        // disableUnderline={disableUnderline}
        disabled={disabled}
        endAdornment={endAdornment}
        placeholder={placeholder}
        onChange={handleChange}
        style={{
          backgroundColor: '#1D1A22',
          color: '#666',
          padding: '5px 10px',
          borderRadius: 5
        }}
        aria-describedby='standard-weight-helper-text'
        inputProps={{
          'aria-label': 'weight'
        }}
      />
    </FormControl>
  )
}

export default TextFieldContainer;