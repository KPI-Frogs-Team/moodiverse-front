import { lightBlue } from "@mui/material/colors";
import { SxProps, Theme } from "@mui/system";

export const input = (size: "small" | "medium" | "large"): SxProps<Theme> => {
  return {
    height:
      size === "small" ? "41.83px" : size === "medium" ? "41.83px" : "47.8px",
    width: size === "small" ? "280px" : size === "medium" ? "330px" : "380px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid",
      borderColor: lightBlue.A100 + "!important",
      borderRadius: "15px",
    },
    "& .MuiInput-root:before, & .MuiInput-root:after, & .MuiFilledInput-root:before, & .MuiFilledInput-root:after":
      {
        borderBottom: "2px solid",
        borderBottomColor: lightBlue.A100 + "!important",
      },
  };
};
