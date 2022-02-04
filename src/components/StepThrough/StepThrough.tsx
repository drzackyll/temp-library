import React, { ReactNode, useEffect, useState } from 'react';
import { Avatar, Grid, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import theme from '../../Theme';

export interface StepThroughProps {
  title: string,
  icon: ReactNode,
  text: string,
  onClickPrev: () => null,
  onClickNext: () => null,
  index: number,
  count: number,
  dark: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiTypography-root': {
      fontSize: '14px'
    }
  },
  mapKeyText: {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      paddingLeft: '8px'
    },
    '& svg:first-of-type': {
      paddingLeft: '16px'
    }
  },
}))

const StepThrough = (props: StepThroughProps) => {
  const {title, icon, text, onClickPrev, onClickNext, index, count, dark=false} = props;
  const classes = useStyles();
  const [backwardDisabled, setBackwardDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(true);

  useEffect(() => {
    if (index === 0) {
      setBackwardDisabled(true)
    } else {
      setBackwardDisabled(false)
    }
    if (index === (count - 1)) {
      setForwardDisabled(true)
    } else {
      setForwardDisabled(false)
    }
  }, [index, count])

  return (
    <Grid
      className={classes.root}
      item
      xs={12}
      style={{
        height: '40px',
        display: 'flex',
      }}
    >
      <Grid>
        <Avatar
          id="avt-next-calendar-days"
          variant="square"
          style={{
            borderRadius: '4px',
            backgroundColor: 
              dark
                ? (backwardDisabled ? '#F2F2F2' : '#332D3C')
                : (backwardDisabled ? '#B3B3B3' : '#F2F2F2'),
            border: backwardDisabled ? '1px solid #F2F2F2' : '',
            boxSizing: 'border-box',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
          }}
          onClick={onClickPrev}
        >
          <ArrowBack
            id="load-move-back"
            style={{ 
              height: '18px',
              width: '18px',
              color: 
                dark
                  ? (backwardDisabled ? '#292929' : '#FFFFFF')
                  : (backwardDisabled ? '#808080' : '#000000')
            }}
          />
        </Avatar>
      </Grid>
      <Grid
        style={{
          backgroundColor: dark ? '#332D3C' : '#F2F2F2',
          borderRadius: 4,
          margin: '0 2px',
          width: '100%',
          height: '40px',
          color: dark ? '#FFFFFF' : '#000000',
          display: 'flex',
        }}
      >
        <Grid item className={classes.mapKeyText}>
          {icon}
          <Typography
            style={{
              fontWeight: 600,
              paddingLeft: '8px'
            }}
          >
            {title}:&nbsp;
          </Typography>
          <Typography>
            {text}
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Avatar
          id="load-move-fwd"
          variant="square"
          style={{
            borderRadius: '4px',
            backgroundColor: 
              dark
                ? (forwardDisabled ? '#F2F2F2' : '#332D3C')
                : (forwardDisabled ? '#B3B3B3' : '#F2F2F2'),
            border: forwardDisabled ? '1px solid #F2F2F2' : '',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
          }}
          onClick={onClickNext}
        >
          <ArrowForward
            id="icon-next-calendar-days"
            style={{
              height: '18px',
              width: '18px',
              color: 
                dark
                  ? (forwardDisabled ? '#292929' : '#FFFFFF')
                  : (forwardDisabled ? '#808080' : '#000000')}}
          />
        </Avatar>
      </Grid>
    </Grid>
  )
}

export default StepThrough;