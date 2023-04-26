import { SxProps, Theme } from "@mui/system";

export const iconButton = (
  size: "small" | "medium" | "large"
): SxProps<Theme> => ({
  height: size === "small" ? "50px" : size === "medium" ? "80px" : "110px",
  width: size === "small" ? "50px" : size === "medium" ? "80px" : "110px",
  cursor: "pointer",
  "& .MuiSvgIcon-root": {
    width: "100%",
    height: "100%",
  },
});
