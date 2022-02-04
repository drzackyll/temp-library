import React, { ReactNode } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Accordion, {AccordionProps} from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export interface MapPanelProps extends AccordionProps {
  titleSection: ReactNode | string,
  contentSection: ReactNode,
  type: 'side' | 'bottom'
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    padding: '16px',
    '& .MuiAccordion-root': {
      backgroundColor: '#332D3C'
    },
    '& .MuiAccordionSummary-root': {
      height: '56px',
      borderRadius: '4px',
      backgroundColor: '#26222D'
    },
    '& .MuiAccordionSummary-root.Mui-expanded': {
      minHeight: '56px',
      borderRadius: '4px',
      backgroundColor: '#332D3C'
    },
    '& .MuiAccordionDetails-root': {
      borderRadius: '4px',
      backgroundColor: '#26222D'
    },
    '& .MuiAccordionSummary-content': {
      margin: 0
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      margin: 0,
    },
    '& .MuiDivider-root': {
      color: '#332D3C'
    },
    '& .MuiAvatar-root': {
      backgroundColor: '#332D3C',
      cursor: 'pointer',
      width: theme.spacing(5),
      height: theme.spacing(5),
    }
  }
}));

const MapPanel = (props: MapPanelProps) => {
  const {titleSection, contentSection, type} = props;
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <Avatar>
              {type === 'side' && <ExpandMore />}
              {type === 'bottom' && <ExpandLess />}
            </Avatar>
          }
        >
          {titleSection}
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          {contentSection}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MapPanel;
