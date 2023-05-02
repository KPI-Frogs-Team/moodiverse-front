import { SxProps, Theme } from "@mui/system";

export const avatar = (size: "small" | "medium" | "large"): SxProps<Theme> => ({
  height: size === "small" ? "40px" : size === "medium" ? "100px" : "170px",
  width: size === "small" ? "40px" : size === "medium" ? "100px" : "170px",
});
