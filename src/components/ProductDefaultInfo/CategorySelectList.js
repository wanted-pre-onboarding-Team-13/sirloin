import 'utils/styles/CategorySelectList.scss';

function CategorySelectList({ checkedItems, cancleButtonHandler }) {
  return (
    <div className={`category-select-list-wrapper ${[...checkedItems].length ? 'category-not-selected' : null}`}>
      {[...checkedItems].length ? (
        [...checkedItems].map((el, idx) => (
          <div key={idx} value={el} className='category-select-div-wrapper'>
            <span>{el}</span>
            <span onClick={() => cancleButtonHandler(el)}> X</span>
          </div>
        ))
      ) : (
        <div>
          <span>카테고리를 지정해 주세요.</span>
        </div>
      )}
    </div>
  );
}

export default CategorySelectList;
