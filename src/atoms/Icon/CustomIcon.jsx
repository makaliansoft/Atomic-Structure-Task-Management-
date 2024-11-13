import React from "react";
import { Icon } from "@mui/material";

const CustomIcon = ({
  IconComponent,
  color = "primary",
  size = "medium",
  sx,
  ...props
}) => {
  return (
    <div>
      <IconComponent color={color} fontSize={size} sx={sx} {...props} />
    </div>
  );
};

CustomIcon.defaultProps = {
  color: "inherit",
};

export default CustomIcon;
