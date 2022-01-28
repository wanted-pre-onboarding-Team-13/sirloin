import React, { useEffect, useState } from 'react';
import Calendar from 'components/Calendar';
import 'utils/styles/Preorder.scss';

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
      <div className='time title'>
        주문 시간
        <Calendar mode='show' config={order} setConfig={setOrder} />
      </div>

      <div className='delivery-option'>
        <div className='title'>
          새벽 배송
          <Calendar config={midnight} setConfig={setMidnight} />
        </div>

        <div className='title'>
          일반 배송
          <Calendar config={normal} setConfig={setNormal} />
        </div>
      </div>
    </div>
  );
}

export default Preorder;
