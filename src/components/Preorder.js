import React, { useEffect, useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import Calendar from 'components/Calendar';
import 'utils/styles/Preorder.scss';
import 'utils/styles/Calendar.scss';

function Preorder() {
  const [order, setOrder] = useState({ start_date: new Date(), end_date: new Date() });

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log(order);
  }, [order]);

  return (
    <div className='preorder-container'>
      <div className='time title'>
        주문 시간
        <Calendar mode='show' config={order} setConfig={setOrder} />
      </div>

      <div className='delivery-option'>
        <div className='title'>
          새벽 배송
          <div className='calendar-wrapper'>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='yyyy-MM-dd' local={ko} customInput={<Calendarcustom />} />
          </div>
        </div>

        <div className='title'>
          일반 배송
          <div className='calendar-wrapper'>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='yyyy-MM-dd' local={ko} customInput={<Calendarcustom />} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Calendarcustom = forwardRef(({ value, onClick }, ref) => {
  return (
    <>
      <button className='custom-input' onClick={onClick} ref={ref}>
        {value}
      </button>
    </>
  );
});
export default Preorder;
