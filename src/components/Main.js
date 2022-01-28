import React from 'react';
import ImageUpload from 'components/ImageUpload';
import Menulist from 'components/Menulist';
import Durationconfig from 'components/Durationconfig';
import PartThree from 'components/PartThree/PartThree';
import Productinfo from 'components/Productinfo';
import DeliverySetting from 'components/DeliverySetting';
import 'utils/styles/Main.scss';
function Main() {
  return (
    <div className='main-layout'>
      <div className='sirloin-logo'>
        <span>
          <img src='https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo.png'></img>
        </span>
      </div>
      <div className='sirloin-menu '>
        <Menulist />
      </div>
      <div className='sirloin-save'>
        <div className='save-container'>
          <span>상품 등록</span>
          <button className='btn-save'>저장하기</button>
        </div>
      </div>
      <div className='sirloin-form'>
        <Durationconfig />
        <PartThree />
        <DeliverySetting />
        <PartThree />
        <ImageUpload title='상품 소개' />
        <ImageUpload title='구매자 추천' />
        <Productinfo />
        <div className='test'></div>
      </div>
    </div>
  );
}

export default Main;
