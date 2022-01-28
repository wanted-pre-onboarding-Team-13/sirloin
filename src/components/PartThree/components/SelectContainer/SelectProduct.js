import React, { useState, useRef } from 'react';
import { FiPlus } from 'react-icons/fi';

import AdditionalProduct from '../AdditionalContainer/AdditionalProduct';
import 'utils/styles/AdditionalProduct.scss';

const SelectProduct = () => {
  const [price, setPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const changefocus = useRef();

  const discountPercent = () => {
    const number = price.replaceAll(',', '');
    const sellingnumber = sellingPrice.replaceAll(',', '');
    const discount = 100 - (sellingnumber / number) * 100;
    return isNaN(Number(discount)) ? 0 : Math.floor(discount);
  };

  const sellingPriceHandler = (e) => {
    if (price.length === 0) {
      alert('정상가를 입력해주세요.');
      e = '';
      changefocus.current.focus();
    }
    return setSellingPrice(e);
  };
  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, '');
    };

    return comma(uncomma(str));
  };

  return (
    <>
      <div className='select-container'>
        <div className='select-container-header'>
          <button className='delete-btn'>삭제</button>
        </div>
        <input type='text' id='option-input' placeholder='옵션명을 입력해 주세요.(필수) ' />
        <div className='input-form-container'>
          <div>
            <input
              className='nomal-price-input'
              type='text'
              ref={changefocus}
              value={price}
              placeholder='상품 정상가(필수)'
              onChange={(e) => setPrice(inputPriceFormat(e.target.value))}
            />
            원
          </div>
          <div className={discountPercent() === 0 ? 'discountzero' : 'discount'}>
            {discountPercent()}%
          </div>
          <input
            className='price-input'
            type='text'
            value={sellingPrice}
            id='selling-price'
            placeholder='상품 판매가(필수)'
            onChange={(e) => sellingPriceHandler(inputPriceFormat(e.target.value))}
          />
          원
          <input type='text' name='' id='inventory-input' placeholder='재고(필수)' />개
          <select name='' id='option-selection'>
            <option value='비과세'>비과세</option>
            <option value='과세'>과세</option>
          </select>
        </div>
        <AdditionalProduct />
        <div className='addit-container'>
          <button id='addit-option-btn'>
            <FiPlus />
          </button>
          <label htmlFor='addit-option-btn' id='option-btn-label'>
            추가 옵션 상품 추가
          </label>
        </div>
      </div>
    </>
  );
};

export default SelectProduct;
