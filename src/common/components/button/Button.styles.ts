import { SxProps, Theme } from "@mui/system";

export const button = (size: "small" | "medium" | "large"): SxProps<Theme> => ({
  borderRadius: "12px",
  fontSize: "18px",
  textTransform: "none",
  minHeight: "fit-content",
  minWidth: "fit-content",

  ...(size === "small" && {
    width: "190px",
    height: "40px",
  }),

  ...(size === "medium" && {
    width: "200px",
    height: "40px",
  }),

  ...(size === "large" && {
    width: "260px",
    height: "50px",
  }),
});
