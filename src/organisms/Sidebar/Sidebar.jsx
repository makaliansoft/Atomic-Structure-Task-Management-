import React from "react";
import UserAvatar from "../../atoms/Avatar/UserAvatar";
import CustomButton from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";
import { Box, Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 80,
        height: "95vh", // Ensure the sidebar has a fixed height
        position: "sticky", // Makes it sticky
        top: 0, // Keeps it at the top of its container
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#f6f7fa",
        borderRight: "1px solid #ddd",
      }}
    >
      {/* Sidebar Links */}
      <Box sx={{ marginTop: "20px" }}>
        <CustomButton variant="outlined" color="primary" onClick={() => {}}>
          <Label text="Task" color="textSecondary" />
        </CustomButton>
        <CustomButton variant="outlined" color="primary" onClick={() => {}}>
          <Label text="User" color="textSecondary" />
        </CustomButton>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 3 }} />

      {/* Avatar Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <UserAvatar src="https://via.placeholder.com/150" alt="User Avatar" />
        <CustomButton variant="outlined" color="primary" onClick={() => {}}>
          <Label text="Logout" color="textSecondary" />
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
