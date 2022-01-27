import React, { useState, useEffect, useRef } from 'react';
import '../PartThree/PartThree.scss';
import './components/ItemOptionLayout.scss';
import ItemLayout from '../PartThree/components/ItemOptionLayout';

const PartThree = () => {
  return (
    <>
      <section className="part-three">
        <div className="item-container">
          <div className="container-header">
            <h2>상품 옵션*</h2>
            <button className="add-option-btn">+ 옵션 세트 추가</button>
          </div>
          <ItemLayout />
        </div>
      </section>
    </>
  );
};

export default PartThree;
