import React from 'react'
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import Tooltip from '@mui/material/Tooltip'

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: `'IBM Plex Sans', sans-serif`,
  },
  clearTooltipStyle: {
    border: 'none !important',
    backgroundColor: '#635874',
    // padding: '0',
    maxWidth: '120px',
    padding: '8px',
  },
  containerStyle: {
    // padding: '8px',
    backgroundColor: '#635874',
    color: '#ffffff',
    fontSize: '12px',
    minWidth: '80px',
    maxWidth: '240px',
    borderRadius: '2px'
  },
  iconStyle: {
    height: 'auto',
    width: '10px'
  },
  innerPaddingStyle: {
    padding: '8px'
  },
  headerStyle: {
    margin: '0',
    paddingBottom: '4px',
    fontFamily: `'IBM Plex Sans', sans-serif`,
    fontWeight: 600,
    height: '20px',
    lineHeight: 1.67,
    fontSize: '14px !important'
  },
  messageStyle: {
    fontSize: 'inherit !important',
    fontFamily: `'IBM Plex Sans', sans-serif`,
    margin: '0',
    lineHeight: '1.5em',
  }
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HtmlTooltip = withStyles((_theme) => ({
  tooltip: {
    backgroundColor: '#635874',
    // color: 'rgba(0, 0, 0, 0.87)',
    width: 'fitContent',
    // fontSize: theme.typography.pxToRem(12),
    border: 'none',
  },
}))(Tooltip);

const getIconPadding = (maxWidth: number, iconWidth: number): number => Math.floor( (maxWidth - iconWidth) /2)

const ToolTipWHeader = (props: any) => {
  const { message, header, classes } = props;

  return (<div className={classes.innerPaddingStyle}>
    <p className={classes.headerStyle} style={{ wordBreak: 'break-word', display: 'inline-block' }}>
      { header }
    </p>
    <p className={classes.messageStyle} style={{ wordBreak: 'break-word', display: 'inline-block' }}>
        { message }
    </p>
  </div>);
}

const TooltipWIcons = (props: any) => {
  const { iconMessages, classes, hasHeader, hasHeadIcon } = props;
  const _headerClasses = !!hasHeader ? [classes.messageStyle, classes.headerStyle].join(' ') : '';
  let maxWidth = 0;
  if(!!iconMessages && iconMessages.length > 1) {
    maxWidth = [...iconMessages].map(x => x.iconWidth || 0).reduce((max, currWidth) => {
      return currWidth > max ? currWidth : max;
    }, 0);
  }

  return (<div className={classes.innerPaddingStyle}>
    <Grid container spacing={1}>

      {
        !!iconMessages
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? iconMessages.map((iconMsg: any, idx: number) => {
              const { icon, message, altText, iconWidth } = iconMsg;
              const overrideStyle = !!iconWidth
                ? { width: `${iconWidth}px`, height: 'auto', margin: '0px' }
                : {  margin: '0px' };

              const sideMargin: number | boolean = maxWidth > 0
                ? !!iconWidth && maxWidth > iconWidth || 10 < maxWidth
                  ? getIconPadding(maxWidth, iconWidth || 10)
                  : false
                : false;
              
              !!sideMargin && (() => { overrideStyle.margin = `0 ${sideMargin}px` })()

              return (
                <Grid 
                  container 
                  spacing={1} 
                  alignItems="center" 
                  key={`grid-${idx}`} 
                >
                  { 
                    !!hasHeader && idx === 0 && !hasHeadIcon 
                      ? <></>
                      :
                      <Grid item>
                      <img 
                        src={icon} 
                        alt={`icon-${!!altText ? altText : icon}-pic`} 
                        className={!!iconWidth ? '' :  `${classes.iconStyle}`} 
                        style={!!iconWidth || !!sideMargin ? overrideStyle : {}}
                      />
                    </Grid>
                  }
                  <Grid item>
                    {
                      !!hasHeader && idx === 0
                      ? <p className={_headerClasses} style={{ wordBreak: 'break-word' }}>
                          { message }
                        </p>
                      : <p 
                          className={classes.messageStyle} 
                          style={{ wordBreak: 'break-word' }}
                        >
                          { message }
                        </p>
                    }
                  </Grid>
                </Grid>
              )
          })
          : <></>
      }
    </Grid>
  </div>)
}

const Contents = (props: any) => {
  const { message, header, classes, iconMessages, tooltipWidth=120, hasHeader=false, hasHeadIcon=false} = props;
  return (
    <div className={classes.containerStyle} style={{ width: `${tooltipWidth}px`, overflowWrap: 'break-word', boxSizing: 'border-box' }}>
    {
      !!header
        ? <ToolTipWHeader
            className={classes.clearTooltipStyle}
            style={{ width: `${tooltipWidth}px` }}
            classes={classes}
            header={header}
            message={message}
            />
            : !!message
            ?  <p className={classes.messageStyle} style={{ overflowWrap: 'break-word' }}> { message } </p>
            : !!iconMessages && iconMessages.length > 0
            ?  <TooltipWIcons 
                tooltipWidth={tooltipWidth}
                hasHeader={hasHeader}
                classes={classes}
                iconMessages={iconMessages}
                hasHeadIcon={hasHeadIcon}
              />
            : <></>
    }
    </div>
  )
}

const _Tooltip = (props: any) => {
  const { message, header, iconMessages, tooltipWidth=120, hasHeader=false, hasHeadIcon=false, placement, children } = props;
  const  classes = useStyles();

  return (
    <HtmlTooltip
      placement={!!placement ? placement : 'left-end'}
      title={
        <Contents
          message={message}
          header={header}
          iconMessages={iconMessages}
          tooltipWidth={tooltipWidth}
          hasHeader={hasHeader}
          hasHeadIcon={hasHeadIcon}
          classes={classes}
        />
      }
    >
      <div style={{ display: 'flex' }}>{children}</div>
    </HtmlTooltip>
  )
}
// eslint-disable-next-line
export default _Tooltip