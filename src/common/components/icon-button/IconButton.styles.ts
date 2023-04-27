import { grey } from "@mui/material/colors";
import { SxProps, Theme } from "@mui/system";

export const iconButton = (
  size: "small" | "medium" | "large"
): SxProps<Theme> => ({
  height: size === "small" ? "40px" : size === "medium" ? "50px" : "60px",
  width: size === "small" ? "40px" : size === "medium" ? "50px" : "60px",
  cursor: "pointer",
  color: grey[900],
  svg: {
    width: "250%",
    height: "250%",
  },
});
