import React from 'react';

import 'utils/styles/Optioninput.scss';
function Optioninput({ option_name, option_description }) {
  return (
    <li className='option-item default-option'>
      <p> {option_name}</p> <input className='default-option-input' type='text' placeholder={option_description}></input>
    </li>
  );
}

export default React.memo(Optioninput);
