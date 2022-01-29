import React, { useState } from 'react';
import ToggleBtn from 'components/ToggleBtn';
import 'utils/styles/ProductBenefit.scss';

function ProductBenefit() {
  const [on, setOn] = useState(true);

  return (
    <div className='benefit-container'>
      <div className='benefit-head-title'>
        <p>상품 혜택 허용 설정</p>
      </div>
      <div className='benefit'>
        <div className='benefit-title'>마일리지 적립</div>
        <div className='benefit-toggle'>
          <ToggleBtn checked='checked' on={on} setOn={setOn} />
        </div>
      </div>
    </div>
  );
}

export default ProductBenefit;
