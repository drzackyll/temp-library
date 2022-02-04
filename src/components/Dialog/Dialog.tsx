import React, {ReactElement} from 'react';
import {
  Box,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  Theme,
  Typography,
  Avatar,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Close } from '@mui/icons-material';
import { Circle } from '../Icons';

export interface DialogProps extends MuiDialogProps {
  dark?: boolean,
  title: string,
  handleClose: () => void,
  fullScreen: boolean,
  open: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  rootLight: {
    '& .MuiPaper-root': {
      backgroundColor: '#FFFFFF',
      padding: '0 32px 32px 32px',
      width: '33vw'
    },
    '& .MuiAvatar-root': {
      backgroundColor: '#F2F2F2',
      '& .MuiSvgIcon-root': {
        color: '#000000'
      }
    }
  },
  rootDark: {
    '& .MuiPaper-root': {
      backgroundColor: '#26222D',
      padding: '0 32px 32px 32px',
      width: '33vw'
    },
    '& .MuiTypography-root': {
      color: '#FFFFFF'
    },
    '& .MuiAvatar-root': {
      backgroundColor: '#332d3c',
      '& .MuiSvgIcon-root': {
        color: '#FFFFFF'
      }
    }
  },
  titleContainer: {
    height: '112px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  closeIcon: {
    width: '40px',
		height: '40px',
		marginLeft: '16px',
		cursor: 'pointer',
	},
  fullSizeRootLight: {
    '& .MuiDialog-container': {
      height: 'calc(100vh - 32px)',
      margin: '16px',
    },
    '& .MuiAvatar-root': {
      backgroundColor: '#F2F2F2',
      '& .MuiSvgIcon-root': {
        color: '#000000',
        height: '16px',
        width: '16px'
      }
    }
  },
  fullSizeRootDark: {
    '& .MuiDialog-container': {
      margin: '16px',
      height: 'calc(100vh - 32px)'
    },
    '& .MuiPaper-root': {
      backgroundColor: '#26222D'
    },
    '& .MuiTypography-root': {
      color: '#FFFFFF'
    },
    '& .MuiAvatar-root': {
      backgroundColor: '#332D3C',
      '& .MuiSvgIcon-root': {
        color: '#FFFFFF',
        height: '16px',
        width: '16px'
      }
    }
  },
  fullSizeTitleContainer: {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    borderBottom: '1px solid #F2F2F2'
  },
  fullSizeTitleContainerDark: {
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    borderBottom: '1px solid #332D3C'
  },
  titleSection: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      paddingRight: '16px',
      height: '15px',
      width: '15px'
    }
  }
}))

const Dialog = (props: DialogProps): ReactElement => {
  const {title, handleClose, dark, children, ...rest} = props;
  const classes = useStyles();
  return (
    <>
      {!props.fullScreen && (
        <MuiDialog className={dark ? classes.rootDark : classes.rootLight} {...rest}>
          <Box className={classes.titleContainer}>
            <Typography style={{fontSize: '18px'}}>{title}</Typography>
            <Avatar className={classes.closeIcon} onClick={handleClose}>
              <Close />
            </Avatar>
          </Box>
          <div style={{paddingTop: '16px'}}>
            {children}
          </div>
        </MuiDialog>
      )}
      {props.fullScreen && (
        <MuiDialog className={dark ? classes.fullSizeRootDark : classes.fullSizeRootLight} {...rest}>
          <Box className={dark ? classes.fullSizeTitleContainerDark : classes.fullSizeTitleContainer}>
            <Box className={classes.titleSection}>
              <Circle htmlColor={dark ? '#FFFFFF' : '#000000'} />
              <Typography style={{fontSize: '14px', fontWeight: 600}}>{title}</Typography>
            </Box>
            <Avatar className={classes.closeIcon} onClick={handleClose}>
              <Close />
            </Avatar>
          </Box>
          <div style={{padding: '16px'}}>
            {children}
          </div>
        </MuiDialog>
      )}
    </>
  )
}

export default Dialog;