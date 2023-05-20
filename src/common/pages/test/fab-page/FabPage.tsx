import { Box } from "@mui/material";

import Fab from "@/common/components/fab";

import { wrapper } from "./FabPage.style";

const FabPage = () => (
  <Box sx={wrapper}>
    <Fab variant="add" color="primary" size="large" />
    <Fab variant="edit" color="primary" size="large" />
    <Fab variant="add" color="primary" size="medium" />
    <Fab variant="edit" color="primary" size="medium" />
    <Fab variant="add" color="primary" size="small" />
    <Fab variant="edit" color="primary" size="small" />
    <Fab variant="add" color="secondary" size="large" />
    <Fab variant="edit" color="secondary" size="medium" />
    <Fab variant="add" color="secondary" size="small" />
  </Box>
);

export default FabPage;
