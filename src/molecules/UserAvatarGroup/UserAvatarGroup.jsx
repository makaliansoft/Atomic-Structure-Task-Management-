import React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';

const UserAvatarGroup = ({ users }) => {
  return (
    <AvatarGroup max={4}>
      {users.map((user, index) => (
        <Avatar key={index} src={user.avatarUrl} alt={user.name} />
      ))}
    </AvatarGroup>
  );
};

export default UserAvatarGroup;
