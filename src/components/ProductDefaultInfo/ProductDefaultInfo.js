import { useState, useRef, useEffect } from 'react';
import CategoryContainer from 'components/ProductDefaultInfo/CategoryContainer';
import ImageUploadModule from 'components/ProductDefaultInfo/ImageUploadModule';
import { TAG } from 'utils/constants/listOfTag';
import 'utils/styles/ProductDefaultInfo.scss';

function ProductDefaultInfo() {
  const [selectedTag, setSelectedTag] = useState([]);
  const [isTagClick, setIsTagClick] = useState(false);
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef(null);
  const [searchTagList, setSearchTagList] = useState(TAG);

  useEffect(() => {
    if (keyword.length) {
      setSearchTagList(TAG.filter((el) => el.match(keyword)));
    } else {
      setSearchTagList(TAG);
    }
  }, [keyword]);

  const focusHandler = (e) => {
    e.target.placeholder = '검색어를 입력하세요.';
    setIsTagClick(true);
  };

  const blurHnadler = (e) => {
    e.target.placeholder = '필터태그를 검색해 주세요.';
    setTimeout(() => {
      inputRef.current.value = '';
      setKeyword('');
      setIsTagClick(false);
    }, 100);
  };

  const changeInput = (e) => {
    setKeyword(e.target.value);
  };

  const addTag = (e) => {
    const newTag = e.target.innerText;
    if (!selectedTag.includes(newTag)) {
      setSelectedTag([...selectedTag, newTag]);
    }
    inputRef.current.value = '';
    setKeyword('');
  };

  const removeTagHandler = (e) => {
    const tagLength = e.target.innerText.length;
    const tag = e.target.innerText.substr(0, tagLength - 2);
    const newTagList = selectedTag.filter((e) => e !== tag);
    setSelectedTag(newTagList);
  };

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
      <div
        className='filter-tag-content'
        onFocus={focusHandler}
        onBlur={blurHnadler}
        onChange={changeInput}
        ref={inputRef}
      >
        <input type='text' placeholder='필터태그를 검색해 주세요.' />
        <button className='search-button' type='submit'>
          검색
        </button>
        {isTagClick && (
          <div className='filter-div'>
            {searchTagList.length ? (
              <div className={searchTagList.length <= 0 ? 'filter-search' : 'flex-start'}>
                {searchTagList.sort().map((el, i) => (
                  <div key={i}>
                    <button className='non-selected-tag' type='button' onClick={addTag}>
                      {el}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className='non-existent-keyword'>
                <span>검색 결과가 존재하지 않습니다.</span>
              </div>
            )}
          </div>
        )}
        {selectedTag.length !== 0 && (
          <div className='selected-tag-wrapper'>
            <div>
              <span>지정된 필터 태그</span>
            </div>
            <div className='selected-tag-list'>
              {selectedTag.map((el, i) => (
                <div key={i}>
                  <button
                    className='selected-tag'
                    type='button'
                    onClick={removeTagHandler}
                  >{`${el} X`}</button>
                </div>
              ))}
            </div>
          </div>
        )}
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
        <span>상품 대표</span>
        <br />
        <span>이미지</span>
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
