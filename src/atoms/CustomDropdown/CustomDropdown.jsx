import React, { useState } from "react";
import { Collapse, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomDropdown = ({ title, children, sx, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen ||false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ margin: "10px 0", ...sx }}>
      {/* Section Header with Toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          cursor: "pointer",
        }}
        onClick={handleToggle}
      >
        <Typography variant="h6">{title}</Typography>
        <IconButton>
          <ExpandMoreIcon
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </IconButton>
      </div>

      {/* Collapsible Content */}
      <Collapse in={isOpen}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
};

CustomDropdown.defaultProps = {
  sx: {},
};

export default CustomDropdown;
