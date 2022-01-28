import React, { useState, useEffect, useRef } from 'react';

import ItemLayout from './components/ItemOptionLayout.js';
import 'utils/styles/PartThree.scss';
import 'utils/styles/ItemOptionLayout.scss';

const PartThree = () => {
  const [layoutInventory, setLayoutInventory] = useState([]);

  const addOptionSet = () => {
    setLayoutInventory(layoutInventory.concat(<ItemLayout key={layoutInventory.length} />));
    console.log(layoutInventory.length);
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
          <ul>
            {layoutInventory.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PartThree;
