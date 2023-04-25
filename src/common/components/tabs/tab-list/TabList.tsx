import React, { FC, ReactElement } from "react";
import { Tabs as TabsMUI } from "@mui/material";

import * as styles from "./TabList.styles";

export interface TabListProps {
  value: number;
  orientation?: "horizontal" | "vertical";
  color?: "primary" | "secondary";
  scroll?: "scrollable";
  onChange(event: React.SyntheticEvent, newValue: number): void;
  children?: ReactElement[] | ReactElement;
}

const TabList: FC<TabListProps> = ({
  value = 1,
  orientation = "horizontal",
  color = "primary",
  scroll,
  onChange,
  children,
}) => (
  <TabsMUI
    value={value}
    orientation={orientation}
    textColor={color}
    variant={scroll}
    sx={styles.tabList()}
    scrollButtons="auto"
    onChange={onChange}
  >
    {children}
  </TabsMUI>
);
export default TabList;
