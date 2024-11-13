import React from "react";
import { Checkbox } from "@mui/material"; // Correcting the import

const CustomCheckbox = ({ checked, onChange }) => {
  return <Checkbox checked={checked} onChange={onChange} />;
};

CustomCheckbox.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default CustomCheckbox;
