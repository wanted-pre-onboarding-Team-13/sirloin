import CategoryContainer from 'components/ProductDefaultInfo/CategoryContainer';
import ImageUploadModule from 'components/ProductDefaultInfo/ImageUploadModule';
import 'utils/styles/ProductDefaultInfo.scss';

function ProductDefaultInfo() {
  return (
    <div className='defaultinfo-wrapper'>
      <div className='title'>
        <h2>상품 기본 정보</h2>
      </div>
      <div className='category-title'>
        <span>카테고리</span>
      </div>
      <div className='category-content'>
        <CategoryContainer />
      </div>
      <div className='filter-tag-title'>
        <span>필터 태그</span>
      </div>
      <div className='filter-tag-content'>
        <input type='text' placeholder='필터태그를 검색해 주세요.' />
      </div>
      <div className='product-name-title'>
        <span>상품명</span>
      </div>
      <div className='product-name-content'>
        <input type='text' placeholder='상품명을 입력해 주세요.' />
      </div>
      <div className='product-code-title'>
        <span>상품 코드</span>
      </div>
      <div className='product-code-content'>
        <span>201701081957</span>
      </div>
      <div className='product-detail-title'>
        <span>상품 구성 소개 정보</span>
      </div>
      <div className='product-detail-content'>
        <input type='text' placeholder='상품 구성 소개 정보를 입력해 주세요.' />
      </div>
      <div className='product-thumbnail-title'>
        <span>상품 썸네일</span>
      </div>
      <div className='product-thumbnail-content'>
        <ImageUploadModule ImgButtonName={'이미지 첨부'} />
      </div>
      <div className='product-image-title'>
        <span>상품 대표 이미지</span>
      </div>
      <div className='product-image-content'>
        <ImageUploadModule ImgButtonName={'이미지 첨부'} />
      </div>
      <div className='product-total-stock-title'>
        <span>상품 총 재고</span>
      </div>
      <div className='product-total-stock-content'>
        <span>99개</span>
      </div>
    </div>
  );
}

export default ProductDefaultInfo;
