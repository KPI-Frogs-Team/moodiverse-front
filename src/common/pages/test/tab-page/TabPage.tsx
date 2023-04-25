import * as React from "react";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";

import { Tab, TabList, TabPanel } from "@/common/components/tabs";

import * as styles from "./TabPage.style";

const TabPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.wrapper}>
      <TabList value={value} onChange={handleChange} scroll="scrollable">
        <Tab text={"Account Settings"} icon={<PersonIcon />} value={0} />
        <Tab text={"Security Settings"} icon={<LockIcon />} value={1} />
      </TabList>

      <TabList value={value} orientation="vertical" onChange={handleChange}>
        <Tab text={"Account Settings"} icon={<PersonIcon />} value={0} />
        <Tab text={"Security Settings"} icon={<LockIcon />} value={1} />
      </TabList>

      <TabPanel value={value} index={0}>
        Account Settings
      </TabPanel>
      <TabPanel value={value} index={1}>
        Security Settings
      </TabPanel>
    </Box>
  );
};

export default TabPage;
