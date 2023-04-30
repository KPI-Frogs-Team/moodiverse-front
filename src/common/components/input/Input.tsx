import React from "react";
import { TextField } from "@mui/material";

import { input } from "./Input.styles";

export interface InputProps {
  placeholder: string;
  size?: "small" | "medium" | "large";
  variant?: "standard" | "outlined" | "filled";
  isDisabled?: boolean;
  isRequired?: boolean;
  type?: "password" | "email" | "date";
}

const Input: React.FC<InputProps> = ({
  placeholder,
  size = "medium",
  variant = "outlined",
  isDisabled = false,
  isRequired = false,
  type,
}) => (
  <TextField
    placeholder={placeholder}
    variant={variant}
    disabled={isDisabled}
    required={isRequired}
    type={type}
    sx={input(size)}
  />
);

export default Input;
