import React, { useState } from 'react';
import 'utils/styles/toggleBtn.scss';

function ToggleBtn() {
  const [on, setOn] = useState(false);

  console.log(on);

  return (
    <div className="toggle-btn">
      <label className="label toggle">
        <input type="checkbox" className="toggle-input"></input>
        <div className="toggle-control" onClick={() => setOn(!on)}></div>
      </label>
    </div>
  );
}

export default ToggleBtn;
