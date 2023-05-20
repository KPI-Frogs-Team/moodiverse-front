import { ReactElement } from "react";
import { Tab as TabMUI } from "@mui/material";

import { tab } from "./Tab.styles";

export interface TabProps {
  value?: number;
  text?: string;
  size?: "large" | "medium" | "small";
  icon?: ReactElement;
  iconPosition?: "top" | "start" | "end" | "bottom";
  isDisabled?: boolean;
  isWrapped?: boolean;
  link?: string;
}

const Tab = ({
  value = 1,
  text = "tab",
  size = "medium",
  icon,
  iconPosition = "start",
  isDisabled = false,
  link,
  ...rest
}: TabProps) =>
  link ? (
    <TabMUI
      value={value}
      label={text}
      icon={icon}
      iconPosition={iconPosition}
      disabled={isDisabled}
      sx={tab(size)}
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
      sx={tab(size)}
      {...rest}
    />
  );

export default Tab;
