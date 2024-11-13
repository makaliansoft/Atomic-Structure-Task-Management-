import React, { useState, useEffect } from "react";
import "./TaskLayout.css";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import Header from "../../organisms/Header/Header";
import CustomIcon from "../../atoms/Icon/CustomIcon";
import SmsFailedOutlinedIcon from "@mui/icons-material/SmsFailedOutlined";
import Label from "../../atoms/Label/Label";
import UserAvatar from "../../atoms/Avatar/UserAvatar";
import { deepPurple } from "@mui/material/colors";
import CustomTable from "../../molecules/Tables/CustomTable";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarWidget from "../../molecules/CalendarWidget/CalendarWidget";
import sectionData from "../../Data/data";
import TaskTable from "../../molecules/Tables/TaskTable";
import CustomDropdown from "../../atoms/CustomDropdown/CustomDropdown";
import CustomSidebar from "../../molecules/CustomSidebar/CustomSidebar";

const recentTasks = [
  { id: 1, taskName: "Meetings", isCompleted: false, date: "2024-11-07" },
  {
    id: 2,
    taskName: "Draft Project Brief",
    isCompleted: true,
    date: "2024-11-06",
  },
  {
    id: 3,
    taskName: "Delegate Project UI components",
    isCompleted: false,
    date: "2024-11-05",
  },
];
const upcomingTasks = [
  {
    id: 1,
    taskName: "Share timeline with teammates",
    isCompleted: false,
    date: "2024-11-08",
  },
  {
    id: 2,
    taskName: "Review announcement blog",
    isCompleted: false,
    date: "2024-11-09",
  },
  {
    id: 3,
    taskName: "Create wireframe",
    isCompleted: false,
    date: "2024-11-10",
  },
  {
    id: 4,
    taskName: "User Interviews",
    isCompleted: false,
    date: "2024-11-11",
  },
  {
    id: 5,
    taskName: "Share timeline with teammates",
    isCompleted: false,
    date: "2024-11-08",
  },
  {
    id: 6,
    taskName: "Review announcement blog",
    isCompleted: false,
    date: "2024-11-09",
  },
  {
    id: 7,
    taskName: "Create wireframe",
    isCompleted: false,
    date: "2024-11-10",
  },
];

const TaskLayout = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [delayedOpen, setDelayedOpen] = useState(false); // State for delayed open class

  // Handle the calendar date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  const handleTabClick = (index) => {
    setActiveSection(index);
  };

  const handleRowClick = (task) => {
    console.log("task in taskLayout:", task);
    setSelectedTask(task);
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    console.log("Sidebar Closing");
    setDelayedOpen(false); // Start closing animation
    setTimeout(() => {
      setSidebarOpen(false); // Complete the close action after animation ends
      setSelectedTask(null);
    }, 300); // Match this with CSS transition duration
  };

  console.log(sidebarOpen);

  useEffect(() => {
    if (sidebarOpen) {
      const timer = setTimeout(() => {
        setDelayedOpen(true); // Apply 'open' class after delay
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [sidebarOpen]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="task-layout">
          <Sidebar />
        </div>
        <div className="content-area">
          <div className="header">
            <Header tabs={["Section", "List"]} />
          </div>
          <div className="comment-area">
            <div className="first-row">
              <div>
                <CustomIcon
                  IconComponent={SmsFailedOutlinedIcon}
                  sx={{ color: "red" }}
                  size="large"
                />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <Label text="Urgent Comment: 3" sx={{ fontSize: "20px" }} />
              </div>
            </div>
            <div className="second-row">
              <UserAvatar sx={{ bgcolor: deepPurple[500] }} initials="MK" />
              <Label
                text="Manav Kaneria"
                sx={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              />{" "}
              |{" "}
              <Label
                text="Share Timelines With Teammates"
                sx={{
                  marginLeft: "10px",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
          <div className="task-cards">
            <div className="recent-task">
              <CustomTable tasks={recentTasks} heading="Recent Tasks" />
            </div>
            <div className="upcoming-task-card">
              <div className="upcoming-task">
                <CustomTable tasks={upcomingTasks} heading="Upcoming Tasks" />
              </div>
              <div className="upcoming-task-date">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CalendarWidget
                    selectedDate={selectedDate}
                    onChange={handleDateChange}
                    sx={{ width: "325px" }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="header">
            <Header
              tabs={["Section 1", "Section 2"]}
              onTabClick={handleTabClick} // Pass the click handler
            />
          </div>
          {/* Section and Task Table */}
          <div className="task-sections">
            {sectionData.map(
              (section, sectionIndex) =>
                sectionIndex === activeSection ? ( // Render only active section
                  <div key={sectionIndex} className="section-container">
                    <CustomDropdown
                      key={section.sectionName}
                      title={section.sectionName}
                      defaultOpen={true}
                    >
                      <TaskTable
                        data={section.tasks}
                        onRowClick={handleRowClick}
                      />
                    </CustomDropdown>
                  </div>
                ) : null // Don't render other sections
            )}
          </div>
        </div>
        {sidebarOpen && (
          <div className={`sidebar-wrapper ${delayedOpen ? "open" : ""}`}>
            <CustomSidebar task={selectedTask} onClose={closeSidebar} />
          </div>
        )}
      </div>
    </>
  );
};

export default TaskLayout;
