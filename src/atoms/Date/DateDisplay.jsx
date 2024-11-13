import React from "react";
import { Typography } from "@mui/material";

const DateDisplay = ({ date }) => {
  return (
    <Typography variant="body2" color="textSecondary">
      {date}
    </Typography>
  );
};

export default DateDisplay;
