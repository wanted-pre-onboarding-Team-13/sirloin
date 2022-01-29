import React, { useState, useEffect, useRef } from 'react';
import { FiPlus } from 'react-icons/fi';

import AdditionalProduct from '../AdditionalContainer/AdditionalProduct';
import 'utils/styles/AdditionalProduct.scss';

const SelectProduct = () => {
  const [additLayout, setAdditLayout] = useState(false);

  const additHandle = () => {
    setAdditLayout(!additLayout);
  };
  return (
    <>
      <div className="select-container">
        <div className="select-container-header"></div>
        <input type="text" id="option-input" placeholder="옵션명을 입력해 주세요.(필수) " />
        <div className="input-form-container">
          <div>
            <input className="nomal-price-input" type="text" placeholder="상품 정상가(필수)" /> 원
          </div>
          <div>
            <label htmlFor="selling-price">&#123;&#123;할인율&#125;&#125; &#37; </label>
            <input className="price-input" type="text" id="selling-price" placeholder="상품 판매가(필수)" />
          </div>
          원
          <div>
            <input type="text" name="" id="inventory-input" placeholder="재고(필수)" />
          </div>
          개
          <div>
            <select name="" id="option-selection">
              <option value="비과세">비과세</option>
            </select>
          </div>
        </div>
        {additLayout ? <AdditionalProduct additHandle={additHandle} /> : ''}

        <div className="addit-container">
          <button id="addit-option-btn">
            <FiPlus />
          </button>
          <label htmlFor="addit-option-btn" id="option-btn-label" onClick={() => setAdditLayout(true)}>
            추가 옵션 상품 추가
          </label>
        </div>
      </div>
    </>
  );
};

export default SelectProduct;
