import { ReactElement, SyntheticEvent } from "react";
import { Tabs as TabsMUI } from "@mui/material";

import { tabList } from "./TabList.styles";

export interface TabListProps {
  value: number;
  orientation?: "horizontal" | "vertical";
  color?: "primary" | "secondary";
  scroll?: "scrollable";
  onChange(event: SyntheticEvent, newValue: number): void;
  children?: ReactElement[] | ReactElement;
}

const TabList = ({
  value = 1,
  orientation = "horizontal",
  color = "primary",
  scroll,
  onChange,
  children,
}: TabListProps) => (
  <TabsMUI
    value={value}
    orientation={orientation}
    textColor={color}
    variant={scroll}
    sx={tabList()}
    scrollButtons="auto"
    onChange={onChange}
  >
    {children}
  </TabsMUI>
);
export default TabList;
