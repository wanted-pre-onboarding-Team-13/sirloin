import React, { useState } from 'react';
import Calendar from './Calendar';
function Durationbtn({ durationList }) {
  const [btnChecked, setBtnChecked] = useState(durationList[0]);

  const radioBtnHandler = (btnName) => {
    setBtnChecked(btnName);
  };
  return (
    <>
      <ul>
        {durationList.map((each, idx) => {
          return (
            <li key={idx}>
              <input type='radio' id={each} checked={btnChecked === each && true} onChange={() => radioBtnHandler(each)}></input>
              <label htmlFor={each}>{each}</label>
            </li>
          );
        })}
      </ul>
      <Calendar mode='show'></Calendar>
    </>
  );
}

export default Durationbtn;
