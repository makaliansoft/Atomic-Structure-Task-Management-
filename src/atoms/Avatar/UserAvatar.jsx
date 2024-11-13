import React from "react";
import { Avatar } from "@mui/material";

const UserAvatar = ({ src, alt, initials, sx }) => {
  return (
    <Avatar src={src} alt={alt} sx={sx}>
      {initials}
    </Avatar>
  );
};

UserAvatar.defaultProps = {
  src: "",
};

export default UserAvatar;
