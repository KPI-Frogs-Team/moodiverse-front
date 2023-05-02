import { FC } from "react";
import { Avatar as AvatarMUI } from "@mui/material";

import { avatar } from "@/common/components/avatar/Avatar.styles";

export interface AvatarProps {
  alt?: string;
  src?: string;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "rounded" | "square";
}

const Avatar: FC<AvatarProps> = ({
  alt,
  src = "/avatars/avatar_light.png",
  size = "large",
  variant = "circular",
}) => <AvatarMUI alt={alt} src={src} variant={variant} sx={avatar(size)} />;

export default Avatar;
