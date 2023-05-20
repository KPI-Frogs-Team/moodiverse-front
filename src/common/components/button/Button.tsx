import { Button as ButtonMUI, Typography } from "@mui/material";

import { button } from "./Button.styles";

export interface ButtonProps {
  text: string;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "info" | "error" | "warning";
  size?: "large" | "medium" | "small";
  isDisabled?: boolean;
}

const Button = ({
  text,
  variant = "contained",
  color = "primary",
  size = "medium",
  isDisabled = false,
}: ButtonProps) => (
  <ButtonMUI
    disableRipple
    disabled={isDisabled}
    variant={variant}
    color={color}
    sx={button(size)}
  >
    <Typography>{text}</Typography>
  </ButtonMUI>
);

export default Button;
