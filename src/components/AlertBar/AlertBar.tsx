import React, { ReactElement } from 'react';
import { Avatar, Box, IconProps, Alert, AlertProps } from '@mui/material';
import Close from '@mui/icons-material/Close'
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

export interface AlertBarProps extends AlertProps {
	type: string,
	title?: string,
	message?: Element | string,
	handleClose?: () => void,
	icon?: JSX.Element,
	children?: JSX.Element
}

const useStyles = makeStyles(() => ({
	root: {
		height: '40px',
		padding: '8px 32px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 0
	},
	alertStyles: {
		backgroundColor: '#FFD700',
		'& .MuiAlert-icon': {
			alignItems: 'center',
			color: 'black',
			marginRight: '16px',
			'& svg':{
				width: '18px',
				height: '18px',
			}
		},
		'& .MuiAlert-message': {
			display: 'flex',
			width: '100%',
			justifyContent: 'space-between',
			alignItems: 'center',
			color: 'black',
			'& button': {
				height: '40px',
				marginLeft: '16px'
			}
		},
	},
	actionStyles: {
		borderRadius: 0,
		backgroundColor: '#2D6BFF',
		'& .MuiAlert-icon': {
			alignItems: 'center',
			color: 'white',
			marginRight: '16px',
			'& svg':{
				width: '18px',
				height: '18px',
			}
		},
		'& .MuiAlert-message': {
			display: 'flex',
			width: '100%',
			justifyContent: 'space-between',
			alignItems: 'center',
			color: 'white',
			'& button': {
				height: '40px',
				marginLeft: '16px'
			}
		}
	},
	mapActionRootStyles: {
		width: '392px',
		margin: '8px',
		'& .MuiAlert-icon': {
			marginRight: '16px',
			'& svg':{
				width: '18px',
				height: '18px',
			}
		}
	},
	mapActionSingleStyles: {
		padding: '8px 24px',
		'& .MuiAlert-message': {
			color: 'white',
			display: 'flex',
			width: '100%',
			justifyContent: 'space-between',
			padding: 0,
			'& button': {
				height: '40px'
			},
			'& div': {
				alignItems: 'center',
				display: 'flex'
			}
		}
	},
	mapActionMultiStyles: {
		padding: '16px 24px',
		minHeight: '75px',
		height: '100%',
		'& .MuiAlert-message': {
			color: 'white',
			width: '100%',
			padding: 0,
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'normal',
			'& button': {
				height: '40px',
				marginTop: '16px',
				width: 'calc(50% - 8px)',
				marginLeft: 0
			},
			'& button:nth-of-type(even)': {
				marginLeft: '16px'
			}
		},
		'& .icon-box': {
			paddingTop: '3px',
			display: 'flex',
			marginRight: '16px',
			'& svg': {
				width: '18px',
				height: '18px'
			}
		}
	},
	closeIcon: {
		width: '40px',
		height: '40px',
		backgroundColor: '#332D3C',
		marginLeft: '16px',
		cursor: 'pointer',
	}
}))

const AlertBar = (props: AlertBarProps): ReactElement => {
	const {type = 'alert', children, handleClose = null, icon, title = '', message, ...rest} = props;
	// maintains styling when no icon is shown
	const altIcon: IconProps = icon ? icon : <Box />;
	const styledTitle = title && (<span style={{fontWeight: 600}}>{message ? title + `: ` : title}</span>);
	const classes = useStyles();

  return (
		<>
			{(type === 'alertBar' || type === 'listActionBar') &&
				<Alert className={type === 'alertBar' ? clsx(classes.root, classes.alertStyles) : clsx(classes.root, classes.actionStyles)}  icon={altIcon} {...rest}>
					<Box>{styledTitle}{message}</Box>
					<Box style={{display: 'flex'}}>
						{children}
						{handleClose && (
							<Avatar className={classes.closeIcon} onClick={() => {handleClose();}}>
								<Close style={{ color: '#ffffff' }} />
							</Avatar>
						)}
					</Box>
				</Alert>
			}
			{(type === 'mapActionSingle') &&
				<Alert className={clsx(classes.actionStyles, classes.mapActionRootStyles, classes.mapActionSingleStyles)} icon={altIcon} {...rest}>
					<Box>{styledTitle}</Box>
					<Box>{children}</Box>
				</Alert>
			}
			{(type === 'mapActionMulti') &&
				<Alert className={clsx(classes.actionStyles, classes.mapActionRootStyles, classes.mapActionMultiStyles)} icon={false} {...rest}>
					<Box className="icon-box">{altIcon}</Box>
					<Box sx={{paddingTop: '2px'}}>{styledTitle}</Box>
					<Box style={{width: '100%'}} />
					<Box sx={{display: 'flex', width: '100%'}}>{children}</Box>
				</Alert>
			}
		</>
	)
}

export default AlertBar;