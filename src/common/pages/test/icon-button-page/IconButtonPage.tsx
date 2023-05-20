import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { Box } from "@mui/material";

import IconButton from "@/common/components/icon-button";

import { wrapper } from "./IconButtonPage.style";

const IconButtonPage = () => {
  return (
    <Box sx={wrapper}>
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="small"
        isDisabled
        link="https://www.google.com/"
      />
      <IconButton icon={<ArrowRightRoundedIcon />} size="small" />
      <IconButton icon={<ArrowRightRoundedIcon />} size="medium" isDisabled />
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="large"
        link="https://www.google.com/"
      />
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="large"
        reactionOnClick
      />
    </Box>
  );
};

export default IconButtonPage;
