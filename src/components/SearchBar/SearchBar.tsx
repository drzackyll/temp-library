import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import { InputBaseProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Close from '@mui/icons-material/Close';
import Search from '@mui/icons-material/Search';

export type SearchBarProps = InputBaseProps & {
  dark: boolean
}

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputBase-root': {
      height: '48px',
      backgroundColor: '#F8F8F8',
      padding: '0 16px',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: '#F2F2F2'
      }
    },
    '& .MuiInputBase-input': {
      fontSize: '14px'
    },
    '& .Mui-focused': {
      backgroundColor: '#F2F2F2'
    },
    '& .MuiSvgIcon-root': {
      color: '#000000',
      height: '18px',
      width: '18px'
    },
  },
  rootDark: {
    '& .MuiInputBase-root': {
      height: '48px',
      backgroundColor: '#1D1A22',
      padding: '0 16px',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: '#332D3C'
      }
    },
    '& .MuiInputBase-input': {
      color: '#FFFFFF',
      caretColor: '#FFFFFF',
      fontSize: '14px'
    },
    '& .Mui-focused': {
      backgroundColor: '#332D3C'
    },
    '& .MuiSvgIcon-root': {
      color: '#FFFFFF',
      height: '18px',
      width: '18px'
    },
    '& #Search::-webkit-search-cancel-button': {
      position: 'relative',
      right: '20px',
      color: 'white'
    }
  }
}))

const SearchBar = (props: SearchBarProps) => {
  const [value, setValue] = useState('');
  const {dark} = props;
  const classes = useStyles();

  return (
    <Box className={dark ? classes.rootDark : classes.root}>
      <InputBase
        fullWidth
        value={value}
        placeholder='Search'
        onChange={(e) => setValue(e.target.value)}
        endAdornment={
          !(value.length > 0) ? (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ) : (
            <InputAdornment
              position="end"
              onClick={() => setValue("")}
            >
              <Close style={{cursor: 'pointer'}} />
            </InputAdornment>
          )
        }
      />
    </Box>
  )
}

export default SearchBar;