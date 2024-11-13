import React, { useState } from "react";
import { Tabs } from "@mui/material";
import TabItem from "../../atoms/TabItem/TabItem";

const TabsGroup = ({ tabs, onTabClick }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabClick(newValue); // Notify parent of the new selected tab
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="primary"
      indicatorColor="primary"
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {tabs.map((label, index) => (
        <TabItem key={index} label={label} />
      ))}
    </Tabs>
  );
};

export default TabsGroup;
