import React from 'react';
import Durationbtn from './Durationbtn';

import { displayDuration, salesDuration } from 'utils/constants/durationlist';
import 'utils/styles/Durationconfig.scss';
function Durationconfig() {
  return (
    <div className='duration-config-container'>
      <div className='duration-config-title'>
        <h2>노출 및 판매기간 설정</h2>
      </div>
      <div className='duration-config'>
        <div className='duration-title display'>상품 노출 기한</div>
        <div className='duration-config-detail display'>
          <Durationbtn durationList={displayDuration} />
        </div>
        <div className='duration-title sales'>상품 판매 기한</div>
        <div className='duration-config-detail sales'>
          <Durationbtn durationList={salesDuration} />
        </div>
      </div>
    </div>
  );
}

export default Durationconfig;
