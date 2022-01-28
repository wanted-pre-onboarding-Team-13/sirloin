import React, { useState, useEffect, useRef } from 'react';

import SelectProduct from './SelectContainer/SelectProduct';
import 'utils/styles/SelectProduct.scss';

const ItemOptionLayout = () => {
  return (
    <section className="item-layout">
      <div className="delete-btn-area">
        <button>삭제</button>
      </div>
      <div className="item-set-container">
        <div className="image-container">
          <form method="POST">
            <label className="input-image-btn" htmlFor="input-image">
              + 이미지 첨부
            </label>
            <input type="file" id="input-image" accept="image/*" alt="" />
          </form>
        </div>
        <SelectProduct />
        <div>
          <footer>
            <button className="add-option-btn">&#43;&#32; 옵션 추가</button>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ItemOptionLayout;
