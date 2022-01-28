import React, { useState } from 'react';
import 'utils/styles/toggleBtn.scss';

function ToggleBtn({ checked }) {
  const [on, setOn] = useState(false);

  console.log(on);

  return (
    <div className='toggle-btn'>
      <label className='label toggle'>
        <input type='checkbox' className='toggle-input' checked={checked === 'checked' ? true : null} onChange={() => setOn(!on)}></input>
        <div className='toggle-control'></div>
      </label>
    </div>
  );
}

export default ToggleBtn;
