import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { makeStyles } from "@mui/styles/";
import { ExpandMore } from "@mui/icons-material";

export interface ButtonProps {
  dark: boolean;
  disable: boolean;
  width: string;
  height: string;
}

const useStyles = (props: ButtonProps) =>
  makeStyles((_theme) => ({
    root: () => ({
      "&.MuiPaper-root": {
        borderRadius: "4px",
        boxShadow: "none",
        marginBottom: "2px",
        width: props.width || "100%",
        "& .MuiAccordionSummary-root": {
          backgroundColor: props.disable
            ? "#B3B3B3"
            : !props.dark
              ? "#F2F2F2"
              : "#332D3C",
          minHeight: props.height || "40px",
          height: props.height || "40px",
          color: props.disable
            ? "#808080"
            : !props.dark
              ? "#000000"
              : "#FFFFFF",
          paddingRight: "0px",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "IBM Plex Sans,sans-serif",
          lineHeight: "20px",
          opacity: 1,
          "&.Mui-disabled": {
            opacity: 1,
            backgroundColor: "#B3B3B3",
            color: "#808080",
            "& svg": {
              fill: "#808080",
            },
          },
          "& svg": {
            margin: "0px 16px",
            padding: "0px",
            fill: props.disable
              ? "#808080"
              : !props.dark
                ? "#000000"
                : "#FFFFFF",
            height: "18px",
            width: "18px",
          },
          "&:hover": {
            backgroundColor: props.disable
              ? "#B3B3B3"
              : !props.dark
                ? "#E6E6E6"
                : "#453D51",
          },
        },
        "& .MuiAccordionSummary-root.Mui-expanded": {
          minHeight: "40px",
          height: "40px",
          margin: "0px",
        },
        "& .MuiAccordionDetails-root": {
          color: !props.dark ? "#000000" : "#FFFFFF",
          backgroundColor: !props.dark
            ? "#FFFFFF"
            : "#26222D",
          padding: "16px 0px",
          fontSize: "14px",
          fontWeight: 600,
          fontFamily: "IBM Plex Sans,sans-serif",
          "& .fullWidth": {
            width: "100%",
          },
        },
        "&.MuiAccordion-root.Mui-expanded": {
          margin: "0px",
        },
      },
    }),
  }));

export default function AccordionButton(props: any) {
  const { dark, id, heading, content, disable, height, width, ...rest } = props;
  const classes = useStyles({ dark, disable, height, width })();

  return (
    <Accordion className={classes.root} {...rest}>
      <AccordionSummary expandIcon={<ExpandMore />} id={id}>
        <span>{heading}</span>
      </AccordionSummary>
      <AccordionDetails>
        <div className="fullWidth">{content}</div>
      </AccordionDetails>
    </Accordion>
  );
}
