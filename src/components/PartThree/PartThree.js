import React, { useState, useEffect, useRef } from 'react';

import 'utils/styles/PartThree.scss';
import 'utils/styles/ItemOptionLayout.scss';
import ItemLayout from './components/ItemOptionLayout.js';

const PartThree = () => {
  const [layoutInventory, setLayoutInventory] = useState([]);

  const addOptionSet = () => {
    setLayoutInventory(layoutInventory + 1);
  };
  return (
    <>
      <section className="part-three">
        <div className="item-container">
          <div className="container-header">
            <h2>상품 옵션*</h2>
            <button className="add-option-btn" onClick={addOptionSet}>
              + 옵션 세트 추가
            </button>
          </div>
          <ItemLayout />
        </div>
      </section>
    </>
  );
};

export default PartThree;
