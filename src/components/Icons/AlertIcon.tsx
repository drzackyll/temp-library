import { SvgIcon, SvgIconProps } from "@mui/material";

const AlertIcon = (props: SvgIconProps) => {
	return (
		<SvgIcon {...props} viewBox='0 0 18 18'>
      <path d='M.75 15.75h16.5L9 1.5.75 15.75z' />
    </SvgIcon>
	)
}

export default AlertIcon;