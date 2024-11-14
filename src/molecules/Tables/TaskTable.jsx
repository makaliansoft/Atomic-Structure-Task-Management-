import React from "react";
import {
  AvatarGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Paper,
} from "@mui/material";
import UserAvatar from "../../atoms/Avatar/UserAvatar";
import CustomCheckbox from "../../atoms/Checkbox/CustomCheckbox";
import DateDisplay from "../../atoms/Date/DateDisplay";
import CustomIcon from "../../atoms/Icon/CustomIcon";
import Label from "../../atoms/Label/Label";
import styles from "./TaskTable.module.css";
import CustomChip from "../../atoms/CustomChip/CustomChip";

const TaskTable = ({ data, onRowClick }) => {
  return (
    <>
      <Table sx={{ padding: "5px" }}>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableHeadCell}>Task</TableCell>
            <TableCell className={styles.tableHeadCell}>Status</TableCell>
            <TableCell className={styles.tableHeadCell}>Due Date</TableCell>
            <TableCell className={styles.tableHeadCell}>Organization</TableCell>
            <TableCell className={styles.tableHeadCell}>Assignee</TableCell>
            <TableCell className={styles.tableHeadCell}>Comments</TableCell>
            <TableCell className={styles.tableHeadCell}>Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((section, sectionIndex) => (
            <TableRow
              key={sectionIndex}
              className={styles.tableRow}
              onClick={() => onRowClick(section)}
              style={{ cursor: "pointer" }}
            >
              {/* Task Column */}
              <TableCell className={styles.tableCell}>
                <Typography variant="body2" className={styles.taskName}>
                  {section.task}
                </Typography>
              </TableCell>

              {/* Status Column */}
              <TableCell className={styles.tableCell}>
                <CustomCheckbox checked={section.status} />
              </TableCell>

              {/* Due Date Column */}
              <TableCell>
                <DateDisplay date={section.dueDate} />
              </TableCell>

              {/* Organization Column */}
              <TableCell>
                <Label
                  text={section.organization}
                  className={styles.organization}
                />
              </TableCell>

              {/* Assignee Column */}
              <TableCell>
                <div className={styles.assigneeContainer}>
                  <AvatarGroup>
                    {section.assignees.map((assignee, idx) => (
                      <UserAvatar
                        key={idx}
                        src={assignee.avatar}
                        alt={assignee.name}
                        initials={assignee.name.charAt(0)}
                      />
                    ))}
                  </AvatarGroup>
                </div>
              </TableCell>

              {/* Comments Column */}
              <TableCell>
                {section.comments.length > 0 && (
                  <CustomIcon
                    IconComponent={() => <span>💬</span>}
                    className={styles.commentIcon}
                  />
                )}
              </TableCell>

              {/* Tags Column */}
              <TableCell>
                <div className={styles.tagsContainer}>
                  {section.tags.map((tag, idx) => (
                    <CustomChip
                      key={idx}
                      label={tag}
                      color="grey"
                      variant="filled"
                      sx={{ Padding: 1, margin: "5px" }}
                    />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TaskTable;
