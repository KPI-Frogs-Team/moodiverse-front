import React from "react";
import { Button as ButtonMUI, Typography } from "@mui/material";

import * as styles from "./Button.styles";

export interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "info" | "error" | "warning";
  size?: "large" | "medium" | "small";
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "contained",
  color = "primary",
  size = "medium",
  isDisabled = false,
}) => (
  <ButtonMUI
    disableRipple
    disabled={isDisabled}
    variant={variant}
    color={color}
    sx={styles.button(size)}
  >
    <Typography>{text}</Typography>
  </ButtonMUI>
);

export default Button;
