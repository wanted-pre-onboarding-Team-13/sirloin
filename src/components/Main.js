import React from 'react';

import Menulist from './Menulist';
import Durationconfig from './Durationconfig';
import 'utils/styles/Main.scss';
import PartThree from './PartThree/PartThree';
import DeliveryDeparture from './DeliveryDeparture';

function Main() {
  return (
    <div className='main-layout'>
      <div className='sirloin-logo'>
        <span>
          <img src='https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo.png'></img>
        </span>
      </div>
      <div className='sirloin-menu '>
        <Menulist />
      </div>
      <div className='sirloin-save'>
        <div className='save-container'>
          <span>상품 등록</span>
          <button className='btn-save'>저장하기</button>
        </div>
      </div>
      <div className='sirloin-form'>
        <PartThree />
        <DeliveryDeparture />
        <div className='test'></div>
        <div className='test'></div>
        <div className='test'></div>
      </div>
    </div>
  );
}

export default Main;
