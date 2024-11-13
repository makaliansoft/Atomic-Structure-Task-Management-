import React from "react";
import { Tab } from "@mui/material";

const TabItem = ({ label, ...props }) => {
  return (
    <Tab
      label={label}
      sx={{
        minWidth: 100,
        fontWeight: "bold",
        textTransform: "none",
      }}
      {...props} // Forward props, such as `value`
    />
  );
};

export default TabItem;
