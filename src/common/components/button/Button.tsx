import React, { ReactNode } from "react";
import { Box, Button as ButtonMaterial, Typography } from "@mui/material";

import * as styles from "./Button.styles";

export interface ButtonProps {
  text?: string;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "info" | "error" | "warning";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: "large" | "medium" | "small";
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "contained",
  color = "primary",
  size = "medium",
  startIcon,
  endIcon,
  isDisabled = false,
}) => (
  <ButtonMaterial
    disableRipple
    disabled={isDisabled}
    variant={variant}
    color={color}
    sx={styles.button(size)}
  >
    {startIcon && <Box>{startIcon}</Box>}
    <Typography>{text}</Typography>
    {endIcon && <Box>{endIcon}</Box>}
  </ButtonMaterial>
);

export default Button;
