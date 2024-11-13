import React from 'react';
import Chip from '@mui/material/Chip';

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Chip key={index} label={tag} />
      ))}
    </div>
  );
};

export default TagList;
