import React from 'react';
import { SvgIconProps } from "@mui/material";
import CompanyFullLogo from './CompanyFullLogo';
import CompanyLogoMark from './CompanyLogoMark';
import NewCompanyFullLogo from './NewCompanyFullLogo';
import NewCompanyLogoMark from './NewCompanyLogoMark';
import AlertIcon from './AlertIcon';
import Circle from './Circle';

const AllIcons: any = (props: SvgIconProps) => {
	return (
		<>
			<CompanyFullLogo style={{width: '200px', height: '20px'}} {...props} />
			<p />
			<CompanyLogoMark {...props} />
			<p />
			<NewCompanyFullLogo style={{width: '200px', height: '20px'}} {...props} />
			<p />
			<NewCompanyLogoMark {...props} />
			<p />
			<AlertIcon style={{width: '18px', height: '18px'}} {...props} />
			<p />
			<Circle style={{width: '18px', height: '18px', color: 'rgb(52, 203, 129)' }} {...props} />
			<p />
		</>
	)
}

export default AllIcons;