import React, { useRef, useEffect, useContext } from 'react';
import ChildSolution2 from './child_B';
import { StateContext } from './context';
import '../App.css';

const ParentSolution2 = (props) => {
  console.log(`SECOND SOLUTION: PARENT get's render`);
  const { color1, color2, color3, alpha, avgColor, handleChangeApha, handleChangeColor1, handleChangeColor2, handleChangeColor3, setAvgColor } = useContext(StateContext);
  const counterRef = useRef();

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
      <h3>Solution 2: Global State with Context-API</h3>
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
        <ChildSolution2 id="1" alpha={alpha} rgb={color1} changeRGBA={handleChangeColor1} />
        <ChildSolution2 id="2" alpha={alpha} rgb={color2} changeRGBA={handleChangeColor2} />
        <ChildSolution2 id="3" alpha={alpha} rgb={color3} changeRGBA={handleChangeColor3} />
      </div>
    </div>

  );

};

export default React.memo(ParentSolution2);
