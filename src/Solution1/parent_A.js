import React, { useRef, useEffect, useState, useCallback } from 'react';
import ChildSolution1 from './child_B';
import '../App.css';

const ParentSolution1 = (props) => {
  // Dont use useReducer for simplicity
  const [color1, setColor1] = useState({ red: 0, green: 128, blue: 0 });
  const [color2, setColor2] = useState({ red: 0, green: 0, blue: 128 });
  const [color3, setColor3] = useState({ red: 128, green: 0, blue: 0 });
  const [alpha, setAlpha] = useState(1);
  const [avgColor, setAvgColor] = useState({ red: 250, green: 250, blue: 250 });
  const counterRef = useRef();
  console.log(`SOLUTION 1: PARENT get's render`);

  const handleChangeApha = (sign) => {
    if (sign === "+" && alpha < 1) setAlpha(+(alpha + 0.1).toFixed(1));
    if (sign === "-" && alpha > 0.1) setAlpha(+(alpha - 0.1).toFixed(1));
  }

  const handleChangeColor1 = useCallback((color, value) => {
    if (value >= 0 && value <= 255) {
      setColor1((state) => ({
        ...state,
        [color]: value
      }))
    }
  }, [])
  const handleChangeColor2 = useCallback((color, value) => {
    if (value >= 0 && value <= 255) {
      setColor2((state) => ({
        ...state,
        [color]: value
      }))
    }
  }, [])
  const handleChangeColor3 = useCallback((color, value) => {
    if (value >= 0 && value <= 255) {
      setColor3((state) => ({
        ...state,
        [color]: value
      }))
    }
  }, [])
  const handleShowState = () => {
    const avgRed = color1.red + color2.red + color3.red / 3;
    const avgGreen = color1.green + color2.green + color3.green / 3;
    const avgBlue = color1.blue + color2.blue + color3.blue / 3;
    setAvgColor({ red: avgRed, green: avgGreen, blue: avgBlue });
  }

  useEffect(() => {
    counterRef.current.value = +counterRef.current.value + 1;
  });

  return (

    <div className="parentCmp" style={{ backgroundColor: `rgb(${avgColor.red},${avgColor.green},${avgColor.blue})` }}>
      <h3>Solution 1: Elevating state to the parent</h3>
      <div>
        <button onClick={() => handleChangeApha('-')}>-</button>
        <span className="span">{`ALPHA: ${alpha}`}</span>
        <button onClick={() => handleChangeApha('+')}>+</button>
      </div>

      <div>
        <button onClick={handleShowState}>AVERAGE CHILD COLOR</button>
        <p>Average Red: <b>{`${avgColor.red.toFixed()}`}</b></p>
        <p>Average Green: <b>{`${avgColor.green.toFixed()}`}</b></p>
        <p>Average Blue: <b>{`${avgColor.blue.toFixed()}`}</b></p>
      </div>

      <div>
        <h4>Parent Component Render Times</h4>
        <input type="text" ref={counterRef} />
      </div>

      <div className="childWrapper">
        <ChildSolution1 id="1" alpha={alpha} rgb={color1} changeRGBA={handleChangeColor1} />
        <ChildSolution1 id="2" alpha={alpha} rgb={color2} changeRGBA={handleChangeColor2} />
        <ChildSolution1 id="3" alpha={alpha} rgb={color3} changeRGBA={handleChangeColor3} />

      </div>

    </div>

  );

};

export default React.memo(ParentSolution1);
