import React, { useState, useEffect } from 'react';
import './Calendar.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Calendar({ handleDate }) {
  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  useEffect(() => {
    handleDate(rangeDate[0]);
  }, []);
  return (
    <div>
      <DateRangePicker
        onChange={(item) => {
          setRangeDate([item.selection]);
          handleDate(item.selection);
        }}
        minDate={new Date()}
        rangeColors={['#6F7835']}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        ranges={rangeDate}
        direction="horizontal"
      />
    </div>
  );
}
