import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles'

export interface AppBarProps {
  dark: boolean,
  backgroundColor: string,
  barContent: JSX.Element[]
}

const useStyles = (props: any) =>
  makeStyles((_theme) => ({
    appBar: {
      width: '100%',
      boxShadow: 'none',
      backgroundColor: () => {
        if (props.dark) return '#26222D'
        return props.backgroundColor || '#ffffff'
      },
      borderBottom: () => {
        if (props.dark) return '1px solid #332D3C'
        return props.backgroundColor || '1px solid #F2F2F2'
      },
      height: 56,
      padding: '0px 16px 0px 16px',
      textAlign: 'left',
      color: () => {
        if (props.dark) return '#ffffff'
        return '#000000'
      }
    }
  }))

const AppBar = (props: AppBarProps): JSX.Element => {
  const { dark = false } = props
  const classes = useStyles({
    dark
  })()

  return (
    <Grid item xs={12} className={classes.appBar}>
      {props.barContent}
    </Grid>
  )
}

export default AppBar;