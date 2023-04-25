import React, { FC } from "react";
import { Tab as TabMUI } from "@mui/material";

import * as styles from "./Tab.styles";

export interface TabProps {
  value?: number;
  text?: string;
  size?: "large" | "medium" | "small";
  icon?: React.ReactElement;
  iconPosition?: "top" | "start" | "end" | "bottom";
  isDisabled?: boolean;
  isWrapped?: boolean;
  link?: string;
}

const Tab: FC<TabProps> = ({
  value = 1,
  text = "tab",
  size = "medium",
  icon,
  iconPosition = "start",
  isDisabled = false,
  link,
  ...rest
}) =>
  link ? (
    <TabMUI
      value={value}
      label={text}
      icon={icon}
      iconPosition={iconPosition}
      disabled={isDisabled}
      sx={styles.tab(size)}
      href={link}
      {...rest}
    />
  ) : (
    <TabMUI
      value={value}
      label={text}
      icon={icon}
      iconPosition={iconPosition}
      disabled={isDisabled}
      sx={styles.tab(size)}
      {...rest}
    />
  );

export default Tab;
