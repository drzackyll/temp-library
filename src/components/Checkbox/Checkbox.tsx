import React from 'react';
import { Checkbox as CheckboxComponent  } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = (props:any) => makeStyles(_theme => ({
    root: () => ({
        color: !props.dark ? "#808080" : "#CCCCCC",
        padding: 0,
        margin: 0,
        "& .MuiSvgIcon-root": {
            fontSize: "14px",
        },
        "&.MuiCheckbox-root.Mui-checked": {
            color: !props.dark ? "#000000" : "#FFFFFF"
        }
    }),
}));

export default function Checkbox(props: any) {
    const { dark, ...rest } = props;
    const classes = useStyles({dark})();

    return (
        <CheckboxComponent {...rest} className={classes.root} />
    );
}