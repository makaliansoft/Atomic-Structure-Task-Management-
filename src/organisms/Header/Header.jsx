import React from "react";
import { Box } from "@mui/material";
import TabsGroup from "../../molecules/TabsGroup/TabsGroup";

const Header = ({ tabs, onTabClick, ...props }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
      }}
      {...props}
    >
      {/* Tabs Section */}
      <TabsGroup tabs={tabs} onTabClick={onTabClick} />
    </Box>
  );
};

export default Header;
