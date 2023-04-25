import { SxProps, Theme } from "@mui/system";

export const tab = (size: "large" | "medium" | "small"): SxProps<Theme> => ({
  textTransform: "none",
  fontWeight: "400",
  fontFamily: "Roboto",
  minWidth: "0",
  minHeight: "50px",

  ...(size === "small" && {
    fontSize: "14px",
  }),

  ...(size === "medium" && {
    fontSize: "16px",
  }),

  ...(size === "large" && {
    fontSize: "18px",
  }),
});
