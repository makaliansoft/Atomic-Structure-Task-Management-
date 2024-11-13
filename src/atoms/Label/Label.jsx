import React from "react";
import { Typography } from "@mui/material";

const Label = ({ text, color, sx }) => {
  return (
    <Typography variant="body2" color={color} className="label" sx={sx}>
      {text}
    </Typography>
  );
};

Label.defaultProps = {
  color: "textPrimary",
};

export default Label;
