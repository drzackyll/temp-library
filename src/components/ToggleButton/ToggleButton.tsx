import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material/";
import { makeStyles } from "@mui/styles/";

const colorCode: any = {
  light: { color: '#000000', selectedColor: '#000000', selectedBackground: '#E6E6E6', unselectedBackground: '#F2F2F2', selectedHoverBackground: '#CCCCCC', unselectedHoverBackground: '#E6E6E6' },
  lightHighlighted: { color: '#000000', selectedColor: '#FFFFFF', selectedBackground: '#332D3C', unselectedBackground: '#F2F2F2', selectedHoverBackground: '#453D51', unselectedHoverBackground: '#E6E6E6' },
  dark: { color: '#FFFFFF', selectedColor: '#FFFFFF', selectedBackground: '#453D51', unselectedBackground: '#332D3C', selectedHoverBackground: '#4F465D', unselectedHoverBackground: '#453D51' },
  darkHighlighted: { color: '#FFFFFF', selectedColor: '#000000', selectedBackground: '#FFFFFF', unselectedBackground: '#332D3C', selectedHoverBackground: '#F2F2F2', unselectedHoverBackground: '#453D51' },
}

export interface ButtonProps {
  mode: string,
  height: string,
  width: string,
  disabled: boolean
}

const useStyles = (props: ButtonProps) =>
  makeStyles((_theme: any) => ({
    root: {
      "&.MuiToggleButtonGroup-root": {
        backgroundColor: colorCode?.[props.mode]?.unselectedBackground,
        borderRadius: "100px",
        height: props.height || "40px",
        width: props.width || "auto",
        "& .MuiButtonBase-root": {
          border: 0,
          fontFamily: "IBM Plex Sans,sans-serif",
          fontSize: "14px",
          textTransform: "capitalize",
          padding: "0px 24px",
          borderRadius: "100px",
          color: colorCode?.[props.mode]?.color,
          width: "50%",
          height: "auto",
          "&.MuiToggleButtonGroup-grouped": {
            borderRadius: "100px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "18px",
            marginRight: "16px",
          },
          // '&:hover':{
          //   backgroundColor: 'transparent'  //TODO: removed commented lines once approved by Bryan
          // }
        },
        "& .MuiButtonBase-root.Mui-selected": {
          backgroundColor: colorCode?.[props.mode]?.selectedBackground,
          color: colorCode?.[props.mode]?.selectedColor,
        },
        "&:hover": {
          backgroundColor: colorCode?.[props.mode]?.unselectedHoverBackground,
          "& .MuiButtonBase-root.MuiToggleButton-root.Mui-selected": {
            backgroundColor: colorCode?.[props.mode]?.selectedHoverBackground,
          },
        },
      },
    },
  }));

const CustomComponent = (props: any) => {
  const { mode, textOne, textTwo, startIcon, width, height, disabled, value, onChange } = props;
  const classes = useStyles({
    mode,
    width,
    height,
    disabled,
  })();
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      className={classes.root}
      onChange={(_event, value) => {
        if (value !== null) onChange(value);
      }}
    >
      <ToggleButton
        value={textOne}
      >
        {startIcon}{textOne}
      </ToggleButton>
      <ToggleButton
        value={textTwo}
      >
        {startIcon}{textTwo}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default CustomComponent;
