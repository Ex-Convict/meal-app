import React from "react";
import Tooltip, {
  type TooltipProps,
  tooltipClasses,
} from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))<{
  backgroundcolor?: string;
  color?: string;
  maxwidth?: number | string;
  padding?: string;
}>(
  ({
    theme,
    backgroundcolor = "rgba(0, 0, 0, 0.12)",
    color = "#fff",
    maxwidth = 220,
    padding = "8px",
  }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: backgroundcolor,
      color,
      maxWidth: maxwidth,
      fontSize: theme.typography.pxToRem(4),
      fontWeight: 400,
      padding,
      borderRadius: "4px",
      textAlign: "center",
      lineHeight: "16px",
    },
  })
);

export default CustomTooltip;
