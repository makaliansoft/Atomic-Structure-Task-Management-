import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      className="input-field"
    />
  );
};

InputField.defaultProps = {
  label: "",
  type: "text",
  placeholder: "",
};

export default InputField;
