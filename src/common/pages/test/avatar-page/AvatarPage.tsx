import { Box } from "@mui/material";

import Avatar from "@/common/components/avatar";

import { wrapper } from "./AvatarPage.style";

const AvatarPage = () => (
  <Box sx={wrapper}>
    <Avatar src="/avatars/avatar_filled.png" />
    <Avatar size="medium" />
    <Avatar alt="Avatar" src="/avatars/avatar_dark.png" size="small" />
    <Avatar variant="rounded" />
    <Avatar src="/avatars/avatar_filled.png" variant="square" />
  </Box>
);

export default AvatarPage;
