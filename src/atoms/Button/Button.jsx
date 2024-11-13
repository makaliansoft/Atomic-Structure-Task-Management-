import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ variant, color, onClick, children }) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      classname="custom-button"
    >
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
  onClick: () => {},
};

export default CustomButton;
