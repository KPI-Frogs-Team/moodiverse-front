import { Box } from "@mui/system";

import { wrapper } from "@/common/pages/test/input-dropdown-page/InputDropdownPage.style";

import InputDropdown from "../../../components/inputs/input-dropdown";

const InputDropdownPage = () => {
  return (
    <Box sx={wrapper}>
      <InputDropdown placeholder="Choose sex" size="large" isDisabled />
      <br />
      <InputDropdown placeholder="Choose sex" isRequired />
      <br />
      <InputDropdown placeholder="Choose sex" variant="standard" />
      <br />
      <InputDropdown placeholder="Choose sex" variant="standard" isDisabled />
      <br />
      <InputDropdown placeholder="Choose sex" variant="standard" size="small" />
    </Box>
  );
};

export default InputDropdownPage;
