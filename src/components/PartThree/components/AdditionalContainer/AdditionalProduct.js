import React, { Component, useRef, useState } from 'react';

import { FiCornerDownRight } from 'react-icons/fi';

const AdditionalProduct = (additRef) => {
  const [deleteAddit, setDeleteAddit] = useState(false);
  console.log(additRef.additLayout);
  const box = () => {
    return additRef.additLayout === false;
  };
  return (
    <>
      <div className="addit-product">
        <div className="addit-input-container">
          <FiCornerDownRight size={'1.5em'} style={{ marginLeft: '20px' }} />
          <input className="input-addit-name" type="text" placeholder="추가 옵션명(필수)" />
          <input className="input-addit-name" type="text" placeholder="추가 옵션 정상가(필수)" /> 원
        </div>
        <button className="addit-delete-btn" onClick={box}>
          삭제
        </button>
      </div>
    </>
  );
};

export default AdditionalProduct;
