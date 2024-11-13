import React from "react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarWidget = ({ selectedDate, onChange, sx}) => {
  return <DateCalendar value={selectedDate} onChange={onChange} sx={sx}/>;
};

export default CalendarWidget;
