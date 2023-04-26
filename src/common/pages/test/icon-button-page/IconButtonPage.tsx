import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { Box } from "@mui/material";

import IconButton from "@/common/components/icon-button";

import { wrapper } from "./IconButtonPage.style";

const IconButtonPage: React.FC = () => {
  return (
    <Box sx={wrapper}>
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="small"
        isDisabled={true}
        reactionOnClick={false}
        link="https://www.google.com/"
      />
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="small"
        isDisabled={false}
        reactionOnClick={false}
      />
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="medium"
        isDisabled={true}
        reactionOnClick={false}
      />
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="large"
        isDisabled={false}
        reactionOnClick={false}
        link="https://www.google.com/"
      />
      <IconButton
        icon={<ArrowRightRoundedIcon />}
        size="large"
        isDisabled={false}
        reactionOnClick={true}
      />
    </Box>
  );
};

export default IconButtonPage;
