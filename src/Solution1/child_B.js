import React, { useRef, useEffect } from 'react';
import '../App.css';


const ChildSolution1 = (props) => {
  const { id, alpha, rgb, changeRGBA } = props;
  console.log(`SOLUTION 1: CHILD ${id} get's render `);
  const ref = useRef();

  const handleChangeRed = (sign) => {
    if (sign === '+') changeRGBA('red', rgb.red + 10);
    if (sign === '-') changeRGBA('red', rgb.red - 10);
  }
  const handleChangeGreen = (sign) => {
    if (sign === '+') changeRGBA('green', rgb.green + 10);
    if (sign === '-') changeRGBA('green', rgb.green - 10);
  }
  const handleChangeBlue = (sign) => {
    if (sign === '+') changeRGBA('blue', rgb.blue + 10);
    if (sign === '-') changeRGBA('blue', rgb.blue - 10);
  }

  useEffect(() => {
    ref.current.value = +ref.current.value + 1;
  });


  return (
    <div className="childCmp" style={{ backgroundColor: `rgba(${rgb.red},${rgb.green},${rgb.blue},${alpha})` }}>

      <b>{id}</b>
      <div className="">
        <b>Render times</b>
        <input type="text" ref={ref} style={{ margin: '0 5px', width: '50px' }} />
      </div>

      <div className="groupButtons">
        <button onClick={() => handleChangeRed('-')}>-</button>
        <span className="span"><b>{`R: ${rgb.red}`}</b></span>
        <button onClick={() => handleChangeRed('+')}>+</button>
      </div>

      <div className="groupButtons">
        <button onClick={() => handleChangeGreen('-')}>-</button>
        <span className="span"><b>{`G: ${rgb.green}`}</b></span>
        <button onClick={() => handleChangeGreen('+')}>+</button>
      </div>

      <div className="groupButtons">
        <button onClick={() => handleChangeBlue('-')}>-</button>
        <span className="span"><b>{`B: ${rgb.blue}`}</b></span>
        <button onClick={() => handleChangeBlue('+')}>+</button>
      </div>

    </div >
  );

};

export default React.memo(ChildSolution1);
