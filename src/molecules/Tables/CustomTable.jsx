import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import CustomCheckbox from "../../atoms/Checkbox/CustomCheckbox";

const CustomTable = ({ heading, tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleCheckboxChange = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div>
      {/* Header Title */}
      <Typography variant="h6" sx={{ padding: 0, fontWeight: "bold" }}>
        {heading}
      </Typography>

      <Table>
        {/* Table Body */}
        <TableBody>
          {taskList.map((task) => (
            <TableRow
              key={task.id}
              sx={{
                fontSize: "20px",
              }}
            >
              <TableCell sx={{ fontSize: "18px" }}>{task.taskName}</TableCell>
              <TableCell align="center">
                <CustomCheckbox
                  checked={task.isCompleted}
                  onChange={() => handleCheckboxChange(task.id)}
                  sx={{ borderRadius: "50px" }}
                />
              </TableCell>
              <TableCell align="center">{task.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

CustomTable.defaultProps = {
  tasks: [
    { id: 1, taskName: "Task 1", isCompleted: false, date: "2024-11-07" },
    { id: 2, taskName: "Task 2", isCompleted: true, date: "2024-11-06" },
    { id: 3, taskName: "Task 3", isCompleted: false, date: "2024-11-05" },
  ],
};

export default CustomTable;
