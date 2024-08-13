import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

interface dateOfBirth {
  date: string;
}

const DatePickerForms: React.FC = () => {
  const { selectedDate, setSelectedDate } = useState("");
  const handleDateChange = (date: dateOfBirth) => {
    setSelectedDate(date);
  };

  return <div>DatePicker</div>;
};

export default DatePickerForms;
