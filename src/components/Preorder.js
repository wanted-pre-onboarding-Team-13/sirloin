import React, { useEffect, useState } from 'react';
import Calendar from 'components/Calendar';

function Preorder() {
  const [order, setOrder] = useState({ start_date: new Date(), end_date: new Date() });
  const [midnight, setMidnight] = useState({ start_date: new Date() });
  const [normal, setNormal] = useState({ start_date: new Date() });

  useEffect(() => {
    console.log(order);
  }, [order]);

  useEffect(() => {
    console.log(midnight);
  }, [midnight]);

  return (
    <div className='preorder-container'>
      <div className='time'>주문 시간</div>
      <Calendar mode='show' config={order} setConfig={setOrder} />
      <div className='delivery-option'>
        <div>새벽 배송</div>
        <Calendar config={midnight} setConfig={setMidnight} />
        <div>일반 배송</div>
        <Calendar config={normal} setConfig={setNormal} />
      </div>
    </div>
  );
}

export default Preorder;
