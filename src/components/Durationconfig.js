import React, { useEffect, useState } from 'react';
import Durationbtn from './Durationbtn';

import { displayDuration, salesDuration } from 'utils/constants/durationlist';
import 'utils/styles/Durationconfig.scss';
function Durationconfig() {
  const [displayConfig, setDisplayConfig] = useState({ option: '제한없음', start_date: new Date(), end_date: new Date() });
  const [salesConfig, setSalesConfig] = useState({ option: '제한없음', start_date: new Date(), end_date: new Date() });

  useEffect(() => {
    console.log(displayConfig);
  }, [displayConfig]);

  useEffect(() => {
    console.log(salesConfig);
  }, [salesConfig]);
  return (
    <div className='duration-config-container'>
      <div className='duration-config-title'>
        <p>노출 및 판매기간 설정</p>
      </div>
      <div className='duration-config'>
        <div className='duration-title display'>상품 노출 기한</div>
        <div className='duration-config-detail display'>
          <Durationbtn durationList={displayDuration} config={displayConfig} setConfig={setDisplayConfig} />
        </div>
        <div className='duration-title sales'>상품 판매 기한</div>
        <div className='duration-config-detail sales'>
          <Durationbtn durationList={salesDuration} config={salesConfig} setConfig={setSalesConfig} />
        </div>
      </div>
    </div>
  );
}

export default Durationconfig;
