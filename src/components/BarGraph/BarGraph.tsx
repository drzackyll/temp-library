import React, {ReactElement} from 'react';
import makeStyles from '@mui/styles/makeStyles';

export interface BarGraphProps {
  percentages: number[],
  colors: string[],
  edited: boolean,
  dualBar: boolean,
  squared: boolean,
  dark: boolean
}

const useStyles = makeStyles(() => ({
  container: {
    height: (props: BarGraphProps) => props.dualBar ? '10px' : '8px',
    width: (props: BarGraphProps) => props.edited ? '50px' : '100px',
    paddingRight: '14px',
    display: (props: BarGraphProps) => props.dualBar ? 'block' : 'flex',
    '& #outerDiv:first-of-type': {
      borderRadius: (props: BarGraphProps) => props.squared ? '10px 0 0 10px' : (props.dualBar ? '5px' : '10px')
    },
    '& #outerDiv:last-of-type': {
      borderRadius: (props: BarGraphProps) => props.squared ? '0 10px 10px 0' : (props.dualBar ? '5px' : '10px')
    },
    '& #outerDiv:not(:first-of-type):not(:last-child)': {
      borderRadius: (props: BarGraphProps) => props.dualBar ? '5px' : '10px',
    }
  },
  outerDiv: {
    height: (props: BarGraphProps) => props.dualBar ? '4px' : '100%',
    position: (props: BarGraphProps) => props.dualBar ? 'relative' : 'static',
    marginBottom: '2px'
  },
  innerDiv: {
    position: 'absolute',
    height: '100%',
    borderRadius: '5px 0px 0px 5px'
  }
}))

const BarGraph = (props: BarGraphProps): ReactElement => {
  const classes = useStyles(props);
  return (
    <div
      className={classes.container}
    >
      {props.percentages.map((percentage, index) => {
        return(
          <div
            key={index}
            id="outerDiv"
            className={classes.outerDiv}
            style={{
              backgroundColor: props.dualBar ? props.dark ? '#332D3C' : '#F2F2F2' : props.colors[index],
              width: props.dualBar ? props.edited ? '50px' : '100px' : `${percentage}px`
            }}
          >
            {props.dualBar && 
              <div
                className={classes.innerDiv}
                style={{
                  backgroundColor: props.colors[index],
                  width: `${props.edited ? percentage / 2 : percentage}px`
                }}
              />
            }
          </div>
        )
      })}
    </div>
  );
}

export default BarGraph;