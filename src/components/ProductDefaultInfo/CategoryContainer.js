import { useState } from 'react';
import CategorySelectList from 'components/ProductDefaultInfo/CategorySelectList';
import CategoryList from 'components/ProductDefaultInfo/CategoryList';
import 'utils/styles/CategoryContainer.scss';

function CategoryContainer() {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.value, target.checked);
  };

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    return checkedItems;
  };

  const cancleButtonHandler = (e) => {
    setIsChecked(!isChecked);
    checkedItemHandler(e, e.checked);
  };

  return (
    <div className='category-container'>
      <CategoryList className='category-list' checkHandler={checkHandler} checkedItems={checkedItems} />
      <CategorySelectList className='category-select-list' checkedItems={checkedItems} cancleButtonHandler={cancleButtonHandler} />
    </div>
  );
}

export default CategoryContainer;
