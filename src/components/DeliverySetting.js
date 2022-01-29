import React, { useEffect, useState } from 'react';
import ToggleBtn from 'components/ToggleBtn';
import Preorder from 'components/Preorder';
import 'utils/styles/DeliverySetting.scss';

function DeliverySetting() {
  const [departure, setDeparture] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [preorder, setPreorder] = useState(false);

  useEffect(() => {
    if (departure || pickup) {
      setPreorder(false);
    }
  }, [departure, pickup]);

  useEffect(() => {
    if (preorder) {
      setDeparture(false);
      setPickup(false);
    }
  }, [preorder]);

  return (
    <div className='delivery-setting-container'>
      <div className='delivery-setting-title'>
        <h2>상품 배송 설정</h2>
      </div>
      <div className='delivery-setting'>
        <div className='delivery-title'>사용자 배송일 출발일 지정</div>
        <div className='delivery-toggle'>
          <ToggleBtn on={departure} setOn={setDeparture} />
        </div>
        <div className='delivery-title border-top'>방문 수령</div>
        <div className='delivery-toggle border-top'>
          <ToggleBtn on={pickup} setOn={setPickup} />
        </div>
        <div className='delivery-title'>
          <span>선 주문</span>
          <br />
          <span>예약배송</span>
        </div>
        <div className='delivery-toggle preOrder'>
          <div>
            <ToggleBtn on={preorder} setOn={setPreorder} />
          </div>
          <div className='preorder-container'>
            <Preorder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliverySetting;
