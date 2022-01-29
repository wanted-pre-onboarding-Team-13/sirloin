import { listOfCategory } from 'utils/constants/ListOfCategory';
import 'utils/styles/CategoryList.scss';

function CategoryList({ checkHandler, checkedItems }) {
  return (
    <div className='category-list-wrapper'>
      {listOfCategory.map((el) => (
        <div key={el.id}>
          <label className='checkbox'>
            <input
              type='checkbox'
              value={el.name}
              onChange={(e) => checkHandler(e)}
              checked={[...checkedItems].includes(el.name)}
            />
            <span className='checkbox_icon'></span>
            <span className='checkbox_text'>{el.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
