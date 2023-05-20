import { Box } from "@mui/material";

import Button from "@/common/components/button";

import { wrapper } from "./ButtonPage.style";

const ButtonPage = () => (
  <Box sx={wrapper}>
    <Button text="Save" size="small" variant="contained" />
    <Button text="Save" size="small" variant="outlined" />
    <Button text="Save" size="small" variant="text" />

    <Button text="Save" size="medium" variant="contained" />
    <Button text="Save" size="medium" variant="outlined" />
    <Button text="Save" size="medium" variant="text" />

    <Button text="Save" size="large" variant="contained" />
    <Button text="Save" size="large" variant="outlined" />
    <Button text="Save" size="large" variant="text" />

    <Button text="Save" size="small" variant="contained" color="error" />
    <Button text="Save" size="small" variant="outlined" color="error" />
    <Button text="Save" size="small" variant="text" color="error" />

    <Button text="Save" size="medium" variant="contained" color="error" />
    <Button text="Save" size="medium" variant="outlined" color="error" />
    <Button text="Save" size="medium" variant="text" color="error" />

    <Button text="Save" size="large" variant="contained" color="error" />
    <Button text="Save" size="large" variant="outlined" color="error" />
    <Button text="Save" size="large" variant="text" color="error" />
  </Box>
);

export default ButtonPage;
