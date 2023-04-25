import { SxProps, Theme } from "@mui/system";

export const fabIcon = (): SxProps<Theme> => ({
  height: "60%",
  width: "60%",
});

export const fab = (size: "small" | "medium" | "large"): SxProps<Theme> => ({
  minWidth: "unset",
  minHeight: "unset",
  lineHeight: 0,
  height: size === "small" ? "30px" : size === "medium" ? "40px" : "50px",
  width: size === "small" ? "30px" : size === "medium" ? "40px" : "50px",
});
