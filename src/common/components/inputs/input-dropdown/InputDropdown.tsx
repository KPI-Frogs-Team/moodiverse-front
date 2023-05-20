import { MenuItem, TextField } from "@mui/material";

import { sex } from "@/const/sex";
import { useDropdownHTML } from "@/hooks/useDropdownHTML";
import useLabel from "@/hooks/useLabel";

import { dropdown, inputDropdown } from "./InputDropdown.styles";

export interface InputDropdownProps {
  placeholder: string;
  size?: "small" | "medium" | "large";
  variant?: "standard" | "outlined";
  isDisabled?: boolean;
  isRequired?: boolean;
}

const InputDropdown = ({
  placeholder,
  size = "medium",
  variant = "outlined",
  isDisabled = false,
  isRequired = false,
}: InputDropdownProps) => {
  const [label, setLabel] = useLabel(placeholder);
  const [menuItemRef, setStyles] = useDropdownHTML();

  return (
    <TextField
      select
      label={label}
      InputLabelProps={{ shrink: false }}
      variant={variant}
      disabled={isDisabled}
      required={isRequired}
      sx={inputDropdown(size)}
      onChange={setLabel}
      onFocus={setStyles}
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
