import React from 'react';
import ToggleBtn from 'components/ToggleBtn';
import Preorder from 'components/Preorder';
import 'utils/styles/DeliverySetting.scss';

function DeliverySetting() {
  return (
    <div className='delivery-setting-container'>
      <div className='delivery-setting-title'>
        <p>상품 배송 설정</p>
      </div>
      <div className='delivery-setting'>
        <div className='delivery-title'>사용자 배송일 출발일 지정</div>
        <div className='delivery-toggle'>
          <ToggleBtn />
        </div>
        <div className='delivery-title'>방문 수령</div>
        <div className='delivery-toggle'>
          <ToggleBtn />
        </div>
        <div className='delivery-title'>선 주문 예약 배송</div>
        <div className='delivery-toggle preOrder'>
          <ToggleBtn />
          <Preorder />
        </div>
      </div>
    </div>
  );
}

export default DeliverySetting;
