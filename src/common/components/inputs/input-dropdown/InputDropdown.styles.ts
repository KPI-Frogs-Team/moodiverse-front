import { blue, lightBlue } from "@mui/material/colors";
import { SxProps, Theme } from "@mui/system";

export const inputDropdown = (
  size: "small" | "medium" | "large"
): SxProps<Theme> => {
  return {
    maxWidth: "100vw",
    height:
      size === "small" ? "41.83px" : size === "medium" ? "41.83px" : "47.8px",
    width: size === "small" ? "280px" : size === "medium" ? "330px" : "380px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid" + lightBlue.A400 + "!important",
      borderRadius: "15px",
    },
    "& .MuiInput-root:before, & .MuiInput-root:after": {
      borderBottom: "2px solid" + lightBlue.A400 + "!important",
    },
  };
};

export const dropdown = (): SxProps<Theme> => {
  return {
    "&:hover, :focus": {
      backgroundColor: blue[50],
    },
  };
};
