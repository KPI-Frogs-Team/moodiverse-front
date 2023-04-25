import { SxProps, Theme } from "@mui/system";

export const tabList = (): SxProps<Theme> => ({
  "& .MuiTabs-indicator": {
    height: "5px",
    width: "5px",
    borderRadius: "5px",
    backgroundColor: "#106CFF",
  },
});
