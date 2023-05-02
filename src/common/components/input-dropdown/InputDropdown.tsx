import { ChangeEvent, FC, useRef, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import { dropdown, inputDropdown } from "./InputDropdown.styles";

export interface InputDropdownProps {
  placeholder: string;
  size?: "small" | "medium" | "large";
  variant?: "standard" | "outlined";
  isDisabled?: boolean;
  isRequired?: boolean;
}

const sex = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const InputDropdown: FC<InputDropdownProps> = ({
  placeholder,
  size = "medium",
  variant = "outlined",
  isDisabled = false,
  isRequired = false,
}) => {
  const [label, setLabel] = useState(placeholder);
  const menuItemRef = useRef<HTMLLIElement | null>(null);

  const dropdownHTML = () => {
    const ulElement = menuItemRef.current?.parentNode as HTMLElement;
    if (ulElement) {
      const divElement = ulElement.parentNode as HTMLElement;
      divElement.style.border = "2px solid" + lightBlue.A400 + "!important";
      divElement.style.borderRadius = "10px";
    }
  };

  const labelToPlaceholder = (event: ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value ? "" : placeholder);
  };
  return (
    <TextField
      select
      label={label}
      InputLabelProps={{ shrink: false }}
      variant={variant}
      disabled={isDisabled}
      required={isRequired}
      sx={inputDropdown(size)}
      onChange={labelToPlaceholder}
      onFocus={dropdownHTML}
    >
      {sex.map((option) => (
        <MenuItem
          ref={menuItemRef}
          key={option.value}
          value={option.value}
          sx={dropdown()}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default InputDropdown;
