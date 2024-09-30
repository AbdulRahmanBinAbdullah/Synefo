import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for styling

const Calendar = ({ selectedDate, onSelectDate }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onSelectDate(date)}
      inline // This makes the calendar always visible
    />
  );
};

export default Calendar;