import { SvgIcon, SvgIconProps } from "@mui/material";

export const Circle = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="8"></circle>
    </SvgIcon>
  )
}

export default Circle;

