import React from "react";
import { IconButton as IconButtonMUI } from "@mui/material";

import { iconButton } from "./IconButton.styles";

export interface IconButtonProps {
  icon: React.ReactElement;
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  reactionOnClick?: boolean;
  link?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = "medium",
  isDisabled = false,
  reactionOnClick = false,
  link,
}) =>
  link ? (
    <IconButtonMUI
      disableRipple={reactionOnClick}
      disabled={isDisabled}
      sx={iconButton(size)}
      href={link}
    >
      {icon}
    </IconButtonMUI>
  ) : (
    <IconButtonMUI
      disableRipple={reactionOnClick}
      disabled={isDisabled}
      sx={iconButton(size)}
    >
      {icon}
    </IconButtonMUI>
  );

export default IconButton;
