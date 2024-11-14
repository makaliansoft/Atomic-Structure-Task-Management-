import React from "react";
import { IconButton, Typography } from "@mui/material";
import UserAvatar from "../../atoms/Avatar/UserAvatar";
import CustomChip from "../../atoms/CustomChip/CustomChip";
import DateDisplay from "../../atoms/Date/DateDisplay";
import InputField from "../../atoms/InputField/InputField";
import Label from "../../atoms/Label/Label";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./CustomSidebar.css";
import { BorderBottom } from "@mui/icons-material";

const CustomSidebar = ({ task, open, onClose, sectionName }) => {
  console.log("open", open);
  console.log(task);

  return (
    <div
      className={`custom-sidebar`}
      // className="custom-sidebar"
      // style={{
      //   marginLeft: "20px",
      //   padding: "10px",
      //   boxShadow: "0px -10px 20px rgba(0, 0, 0, 0.3)",
      // }}
    >
      {/* Header */}
      <div className="custom-sidebar-header">
        <div className="custom-sidebar-icons">
          <IconButton className="custom-sidebar-close-button" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <Typography
          className="custom-sidebar-title"
          sx={{ fontSize: "2.25rem", color: "grey", fontWeight: "600" }}
        >
          Task Details
        </Typography>
      </div>

      {/* Task Title */}
      <Typography
        variant="h5"
        style={{ marginTop: "16px", color: "grey", fontWeight: "600" }}
      >
        {task.task}
      </Typography>

      <div className="custom-sidebar-content">
        {/* Assignee */}
        <div className="custom-sidebar-assignee" style={{ marginTop: "16px" }}>
          <Label
            text="Assignees: "
            sx={{ color: "grey", fontWeight: "600", marginRight: "5px" }}
          />
          {task.assignees.map((assignee, index) => (
            <UserAvatar key={index} src={assignee.avatar} alt={assignee.name} />
          ))}
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <Label
            text="Due Date: "
            sx={{ color: "grey", fontWeight: "600", marginRight: "5px" }}
          />
          <DateDisplay date={task.dueDate} />
        </div>

        {/* Section and Tags */}
        <div className="custom-sidebar-section">
          <div>
            <Label
              text="Section: "
              sx={{ color: "grey", fontWeight: "600", marginRight: "5px" }}
            />
          </div>
          <div>
            <CustomChip label={sectionName} />
          </div>
        </div>

        <div className="custom-sidebar-tags" style={{ marginTop: "16px" }}>
          <Label
            text="Tags:"
            sx={{ color: "grey", fontWeight: "600", marginRight: "5px" }}
          />
          <div className="custom-sidebar-tag-container">
            {task.tags.map((tag, index) => (
              <CustomChip
                key={index}
                label={tag}
                className="custom-sidebar-chip"
              />
            ))}
          </div>
        </div>

        {/* Subtask Input */}
        <div className="custom-sidebar-subtask">
          <Label
            text="Subtask:"
            sx={{ color: "grey", fontWeight: "600", marginRight: "5px" }}
          />
          <InputField
            placeholder="Enter Task Name"
            className="custom-sidebar-input-field"
          />
        </div>

        {/* Description */}
        <div
          className="custom-sidebar-description"
          style={{ marginTop: "16px" }}
        >
          <Label
            text="Description:"
            sx={{ color: "grey", fontWeight: "600", marginRight: "5px" }}
          />
          <InputField
            value={task.description}
            placeholder="What is the task about?"
            multiline
            rows={3}
            className="custom-sidebar-input-field"
          />
        </div>

        {/* Image Carousel */}
        {/* <div
          className="custom-sidebar-image-carousel"
          style={{ marginTop: "16px" }}
        >
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <div style={{ display: "flex", overflow: "auto" }}></div>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div> */}
      </div>

      {/* Comments Section */}
      <div
        className="custom-sidebar-comments-list"
        style={{ marginTop: "16px" }}
      >
        <Label
          text="Comments"
          sx={{
            borderBottom: "1px solid #b9b9b9",
            color: "grey",
            fontWeight: "600",
          }}
        />
        <div style={{ marginTop: "8px" }}>
          {task.comments.map((comment, index) => (
            <div key={index} className="custom-sidebar-comment">
              <UserAvatar src={comment.avatar} alt={comment.user} />
              <Typography
                variant="body2"
                className="custom-sidebar-comment-text"
                sx={{
                  margin: "10px",
                  border: "1px solid #d7d7d7",
                  background: "white",
                  borderRadius: "5px",
                  padding: "4px",
                }}
              >
                {comment.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;
