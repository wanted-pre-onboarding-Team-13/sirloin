import React, { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import 'utils/styles/Calendar.scss';
function Calendar({ mode, config, setConfig }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setConfig({ ...config, start_date: startDate });
  }, [startDate]);

  useEffect(() => {
    setConfig({ ...config, end_date: endDate });
  }, [endDate]);

  return (
    <div className='calendar-wrapper'>
      <DatePicker
        dateFormat={mode === 'show' ? 'yyyy-MM-dd h:mm' : 'yyyy-MM-dd'}
        showTimeSelect={mode === 'show' && true}
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        locale={ko}
        onChange={(date) => setStartDate(date)}
        customInput={<Calendarcustom />}
      ></DatePicker>
      <span>~</span>
      <DatePicker
        dateFormat='yyyy-MM-dd h:mm'
        showTimeSelect
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        local={ko}
        onChange={(date) => setEndDate(date)}
        customInput={<Calendarcustom />}
      ></DatePicker>
    </div>
  );
}

const Calendarcustom = forwardRef(({ value, onClick }, ref) => {
  return (
    <>
      <button className='custom-input' onClick={onClick} ref={ref}>
        {value}
        <i className='fa-solid fa-angle-down'></i>
      </button>
    </>
  );
});
export default Calendar;
