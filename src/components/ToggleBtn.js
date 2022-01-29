import React, { useState } from 'react';
import 'utils/styles/toggleBtn.scss';

function ToggleBtn({ on, setOn }) {
  const toggleBtn = () => {
    setOn(!on);
  };

  return (
    <div className='toggle-btn'>
      <label className='label toggle'>
        <input type='checkbox' className='toggle-input' checked={on} onChange={toggleBtn}></input>
        <div className='toggle-control'></div>
      </label>
    </div>
  );
}

export default ToggleBtn;
