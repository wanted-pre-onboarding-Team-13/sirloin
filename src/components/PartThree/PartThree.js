import React, { useState, useEffect, useRef } from 'react';

import ItemOptionLayout from './components/ItemOptionLayout.js';
import 'utils/styles/PartThree.scss';
import 'utils/styles/ItemOptionLayout.scss';

const PartThree = () => {
  const [layoutInventory, setLayoutInventory] = useState([]);

  const addOptionSet = () => {
    setLayoutInventory(layoutInventory.concat(<ItemOptionLayout key={layoutInventory.length} layoutInventory={layoutInventory} length={layoutInventory.length} />));
  };

  const myRef = useRef(null);

  const removeOptionSet = (e) => {
    setLayoutInventory(layoutInventory.splice(0, e.target.id));
  };

  console.log(layoutInventory);
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
            {layoutInventory.length === 0 ? (
              <div className="inven-empty">
                <p>옵션세트를 추가하여 옵션을 구성해 주세요.</p>
              </div>
            ) : (
              layoutInventory.map((invenEdifice, index) => (
                <li key={index} id={index} ref={myRef}>
                  <div className="delete-inven-area">
                    <button className="delete-btn" id={index} onClick={removeOptionSet}>
                      삭제
                    </button>
                  </div>
                  {invenEdifice}
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PartThree;
