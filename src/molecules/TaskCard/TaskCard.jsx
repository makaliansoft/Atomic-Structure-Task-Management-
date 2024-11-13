import React from 'react';
import './TaskCard.css';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';

const TaskCard = ({ taskName, dueDate, assignees, comments, tags }) => {
  return (
    <div className="task-card">
      <Checkbox />
      <div className="task-details">
        <h4>{taskName}</h4>
        <p>Due Date: {dueDate}</p>
      </div>
      <AvatarGroup max={3}>
        {assignees.map((user, index) => (
          <Avatar key={index} src={user.avatarUrl} />
        ))}
      </AvatarGroup>
      <div className="tags">
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} />
        ))}
      </div>
      <span>{comments} Comments</span>
    </div>
  );
};

export default TaskCard;
