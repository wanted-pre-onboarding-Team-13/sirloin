import 'utils/styles/Menulist.scss';
function Menulist() {
  return (
    <>
      <ul className='menu-list'>
        <li className='menu-item'>
          <span>기본 설정</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>회원</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>진열</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>상품</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <ul className='menu-sub-list'>
          <li className='menu-sub-item'>
            <span>상품 리스트</span>
          </li>
          <li className='menu-sub-item'>
            <span>상품 재고 관리</span>
          </li>
          <li className='menu-sub-item sub-item-choice'>
            <span>상품 등록</span>
          </li>
        </ul>

        <li className='menu-item'>
          <span>주문</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>배송</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>프로모션</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>혜택</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>고객 센터 관리</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
        <li className='menu-item'>
          <span>알림</span>
          <span style={{ float: 'right' }}>
            <i className='fa-solid fa-angle-down'></i>
          </span>
        </li>
      </ul>
    </>
  );
}

export default Menulist;
