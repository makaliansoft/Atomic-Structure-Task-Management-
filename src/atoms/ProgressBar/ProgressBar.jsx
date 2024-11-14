import React, { useEffect, useState } from "react";
import { LinearProgress, Box, Typography } from "@mui/material";
import Label from "../Label/Label";

const ProgressBar = ({ section }) => {
  // Calculate the target progress value
  const completedTasks = section.tasks.filter(task => task.status).length;
  const totalTasks = section.tasks.length;
  const targetValue = (completedTasks / totalTasks) * 100;

  // State to control the animated progress
  const [progress, setProgress] = useState(0);

  // Animate from 0 to target value
  useEffect(() => {
    const increment = targetValue / 50; // Adjust the speed by changing the divisor
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= targetValue) {
          clearInterval(timer);
          return targetValue;
        }
        return prev + increment;
      });
    }, 20); // Adjust the interval duration to control animation speed

    return () => clearInterval(timer); // Clean up the interval on unmount
  }, [targetValue]);

  return (
    <Box display="flex" alignItems="center" width="100%">
      {/* Progress bar */}
      <Box flexGrow={1} mx={2} marginBottom="20px">
        <Label text="Progress:" sx={{fontWeight: "600", color: "grey"}}/>
        <LinearProgress
          variant="determinate"
          value={progress}
          color="success"
        />
      </Box>
      {/* Display percentage
      <Typography variant="body2" color="textSecondary">
        {Math.round(progress)}%
      </Typography> */}
    </Box>
  );
};

export default ProgressBar;
