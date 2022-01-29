import React from 'react';
import ToggleBtn from 'components/ToggleBtn';
import 'utils/styles/EtcSetting.scss';

function EtcSetting() {
  return (
    <div className='etc-container'>
      <div className='etc-head-title'>
        <p>기타 설정</p>
      </div>
      <div className='etc'>
        <div className='etc-title'>
          감사카드 <br /> 제공
        </div>
        <div className='etc-toggle'>
          <ToggleBtn />
        </div>
      </div>
    </div>
  );
}

export default EtcSetting;
