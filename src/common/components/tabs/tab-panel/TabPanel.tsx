import { ReactNode } from "react";

export interface TabPanelProps {
  value: number;
  index: number;
  children: ReactNode;
}

const TabPanel = ({ value, index, children }: TabPanelProps) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && children}
  </div>
);

export default TabPanel;
