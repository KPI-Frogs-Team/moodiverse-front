import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Fab as FabMUI } from "@mui/material";

import { fab, fabIcon } from "./Fab.styles";

export interface FabProps {
  variant: "add" | "edit";
  color: "primary" | "secondary";
  size: "small" | "medium" | "large";
}

const Fab = ({ variant, color, size }: FabProps) => (
  <FabMUI aria-label={variant} sx={fab(size)} color={color}>
    {variant === "add" ? (
      <AddIcon sx={fabIcon()} />
    ) : (
      <EditIcon sx={fabIcon()} />
    )}
  </FabMUI>
);

export default Fab;
