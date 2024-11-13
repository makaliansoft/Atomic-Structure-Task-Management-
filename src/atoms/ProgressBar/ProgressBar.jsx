import React from "react";
import { LinearProgress } from "@mui/material";

const ProgressBar = ({ value }) => {
  return <LinearProgress variant="determinate" value={value} />;
};

export default ProgressBar;
