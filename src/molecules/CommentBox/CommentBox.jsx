import React from 'react';
import Avatar from '@mui/material/Avatar';
import './CommentBox.css';

const CommentBox = ({ user, text, time }) => {
  return (
    <div className="comment-box">
      <Avatar src={user.avatarUrl} alt={user.name} />
      <div className="comment-content">
        <h4>{user.name}</h4>
        <p>{text}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default CommentBox;
