// src/atoms/Chip/CustomChip.js

import React from "react";
import { Chip } from "@mui/material";

const CustomChip = ({
  label,
  color = "default",
  variant = "filled",
  ...props
}) => {
  return (
    <Chip
      label={label}
      variant={variant}
      {...props}
    />
  );
};

export default CustomChip;
