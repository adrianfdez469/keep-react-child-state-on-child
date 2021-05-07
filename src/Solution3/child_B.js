import React, { useRef, useEffect, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import '../App.css';

const ChildSolution3 = forwardRef(({ id, alpha, initialRed, initialGreen, initialBlue }, ref) => {

  console.log(`SOLUTION 3: CHILD ${id} get's render`);
  const [rgb, setRgbColor] = useState({ red: initialRed, green: initialGreen, blue: initialBlue });
  const _ref = useRef();

  const handleChangeColor = useCallback((color, sign) => {
    if (rgb[color] >= 0 && rgb[color] <= 255) {
      if (sign === '+') setRgbColor((state) => ({
        ...state,
        [color]: state[color] + 10
      }));
      if (sign === '-') setRgbColor((state) => ({
        ...state,
        [color]: state[color] - 10
      }));
    }
  }, [rgb]);

  useImperativeHandle(ref, () => ({
    getRGB: () => {
      return rgb;
    },
  }));

  useEffect(() => {
    _ref.current.value = +_ref.current.value + 1;
  });

  return (
    <div className="childCmp" style={{ backgroundColor: `rgba(${rgb.red},${rgb.green},${rgb.blue},${alpha})` }}>

      <b>{id}</b>
      <div className="">
        <b>Render times</b>
        <input type="text" ref={_ref} style={{ margin: '0 5px', width: '50px' }} />
      </div>

      <div className="groupButtons">
        <button onClick={() => handleChangeColor('red', '-')}>-</button>
        <span className="span"><b>{`R: ${rgb.red}`}</b></span>
        <button onClick={() => handleChangeColor('red', '+')}>+</button>
      </div>

      <div className="groupButtons">
        <button onClick={() => handleChangeColor('green', '-')}>-</button>
        <span className="span"><b>{`G: ${rgb.green}`}</b></span>
        <button onClick={() => handleChangeColor('green', '+')}>+</button>
      </div>

      <div className="groupButtons">
        <button onClick={() => handleChangeColor('blue', '-')}>-</button>
        <span className="span"><b>{`B: ${rgb.blue}`}</b></span>
        <button onClick={() => handleChangeColor('blue', '+')}>+</button>
      </div>
    </div >
  );
});

export default React.memo(ChildSolution3);
