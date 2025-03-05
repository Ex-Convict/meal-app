"use client";
import React, { useEffect, useState } from "react";
import Button, { type ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Icon,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import { useRouter } from "next/router";
import CustomTooltip from "./Tooltip";

export interface IButtonProps extends ButtonProps {
  text: string | React.ReactNode;
  disabled?: boolean;
  blockAction?: boolean;
  loading?: boolean;
  loadingText?: string;
  sx?: SxProps<Theme> | undefined;
  breakpoint?: Record<"sm" | "md" | "lg" | "xl", number>;
  hover?: boolean;
  variant?: "text" | "outlined" | "contained";
  focusSelected?: boolean;
  iconOnly?: boolean;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  route?: string;
  textColor?: string;
  externalStyle?: React.CSSProperties;
}

const IButton = ({
  text,
  disabled,
  blockAction,
  loading,
  sx,
  loadingText,
  hover = true,
  variant = "contained",
  focusSelected,
  iconOnly,
  icon,
  endIcon,
  route,
  textColor,
  breakpoint = { sm: 600, md: 960, lg: 1280, xl: 1920 },
  externalStyle,
  ...rest
}: IButtonProps) => {
  const router = useRouter();
  const [windowInnerWidth, setWindowInnerWidth] = useState(0);

  const [, setButtonState] = useState<
    "default" | "focused" | "disabled" | "hover"
  >(disabled ? "disabled" : "default");

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    rest.onClick?.(event);

    if (route) {
      router.push(route);
    }
  };

  const backgroundColorMap = {
    default: {
      contained: "rgba(249, 115, 22, 1)",
      text: "transparent",
      outlined: "transparent",
    },
    hover: {
      contained: "rgba(218, 111, 3, 0.99)",
      outlined: "rgba(249, 115, 22, 1)",
      text: "#F5F5FA",
    },
    disabled: "rgba(251, 163, 75, 0.3)",
  };

  const colorMap = {
    disabled: "rgba(61, 30, 1, 0.3)",
    contained: "#FFF",
    text: "#000",
    outlined: "#000",
  };

  const color = textColor ?? colorMap[variant];

  const getPadding = (size: number) => {
    if (size >= breakpoint.xl) {
      return "1rem 2rem";
    } else if (size >= breakpoint.lg) {
      return "0.8rem 1.5rem";
    } else if (size >= breakpoint.md) {
      return "0.75rem 1rem";
    } else {
      return "0.5rem 0.75rem";
    }
  };

  const handleMouseEnter = () => {
    setButtonState("hover");
  };

  const handleMouseLeave = () => {
    setButtonState(disabled ? "disabled" : "default");
  };

  const handleFocus = () => {
    setButtonState("focused");
  };

  const handleBlur = () => {
    setButtonState(disabled ? "disabled" : "default");
  };

  useEffect(() => {
    const innerWidth = window.innerWidth;
    setWindowInnerWidth(innerWidth);
  }, []);

  return (
    <Button
      {...rest}
      onClick={handleButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={blockAction || disabled || loading}
      variant={variant}
      sx={{
        borderRadius: "8px",
        padding: getPadding(windowInnerWidth),
        minWidth: "fit-content",
        fontSize: ".875rem",
        fontWeight: 500,
        letterSpacing: 0.5,
        display: "flex",
        alignItems: "center",
        lineHeight: "20px",
        textTransform: "capitalize",
        fontFamily: "Montserrat",
        backgroundColor: iconOnly
          ? "transparent"
          : backgroundColorMap.default[variant],
        boxShadow: "none",
        cursor: "pointer",
        color,
        border: variant === "outlined" ? "1px solid  rgba(249, 115, 22, 1)" : "none",
        "&:disabled": {
          cursor: "not-allowed",
          pointerEvents: "all !important",
          backgroundColor: backgroundColorMap.disabled,
        },
        ...(hover && {
          "&:hover": {
            boxShadow: "none",
            backgroundColor:
              !blockAction && !disabled
                ? backgroundColorMap.hover[variant]
                : backgroundColorMap.disabled,
            ...(iconOnly && {
              backgroundColor:
                !blockAction && !disabled
                  ? backgroundColorMap.default[variant]
                  : backgroundColorMap.disabled,
              color: "#FFF",
            }),
          },
        }),
        ...(focusSelected && {
          "&.Mui-selected": {
            backgroundColor: backgroundColorMap.hover[variant],
            border: "2px solid #FDD6AF",
            boxShadow: "none",
          },
        }),
        ...sx,
      }}
      startIcon={!iconOnly && icon}
      endIcon={endIcon}
    >
      {loading ? (
        <>
          <CircularProgress size={20} sx={{ marginRight: "0.5rem" }} />
          <Typography>{loadingText ?? text}</Typography>
        </>
      ) : iconOnly ? (
        <Icon>{icon}</Icon>
      ) : (
        text
      )}
    </Button>
  );
};
const CustomButton = ({
  text,
  disabled,
  blockAction,
  ...rest
}: IButtonProps) => {
  const CustomButtonParams = {
    text,
    disabled,
    blockAction,
    ...rest,
  };
  return (
    <Box sx={{ minWidth: "fit-content" }}>
      {blockAction ? (
        <CustomTooltip
          title={
            blockAction ? (
              <Typography color="inherit">This action is blocked</Typography>
            ) : (
              ""
            )
          }
        >
          <span>
            <IButton {...CustomButtonParams} />
          </span>
        </CustomTooltip>
      ) : (
        <IButton {...CustomButtonParams} />
      )}
    </Box>
  );
};
export default CustomButton;
