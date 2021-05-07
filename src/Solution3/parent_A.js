import React, { useRef, useEffect, useState, useCallback } from 'react';
import ChildSolution3 from './child_B';
import '../App.css';

const ParentSolution3 = () => {
  // Dont use useReducer for simplicity
  console.log(`SOLUTION 3: PARENT get's render`);

  const [alpha, setAlpha] = useState(1);
  const [avgColor, setAvgColor] = useState({ red: 250, green: 250, blue: 250 });
  const counterRef = useRef();

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const getState1 = useCallback((fn) => fn(ref1), []);
  const getState2 = useCallback((fn) => fn(ref2), []);
  const getState3 = useCallback((fn) => fn(ref3), []);

  const handleShowState = () => {
    const color1 = ref1.current;
    const color2 = ref2.current;
    const color3 = ref3.current;

    const avgRed = (color1.red + color2.red + color3.red) / 3;
    const avgGreen = (color1.green + color2.green + color3.green) / 3;
    const avgBlue = (color1.blue + color2.blue + color3.blue) / 3;
    setAvgColor({ red: avgRed, green: avgGreen, blue: avgBlue });
  }

  const handleChangeAlpha = (sign) => {
    if (sign === "+" && alpha < 1) setAlpha(+(alpha + 0.1).toFixed(1));
    if (sign === "-" && alpha > 0.1) setAlpha(+(alpha - 0.1).toFixed(1))
  }

  useEffect(() => {
    counterRef.current.value = +counterRef.current.value + 1;
  });

  return (

    <div className="parentCmp" style={{ backgroundColor: `rgb(${avgColor.red},${avgColor.green},${avgColor.blue})` }}>
      <h3>Solution 3: Managing state on child</h3>
      <div>
        <button onClick={() => handleChangeAlpha('-')}>-</button>
        <span className="span">{`ALPHA: ${alpha}`}</span>
        <button onClick={() => handleChangeAlpha('+')}>+</button>
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
        <ChildSolution3 id={1} alpha={alpha} initialBlue={0} initialGreen={128} initialRed={0} getState={getState1} />
        <ChildSolution3 id={2} alpha={alpha} initialBlue={0} initialGreen={0} initialRed={128} getState={getState2} />
        <ChildSolution3 id={3} alpha={alpha} initialBlue={128} initialGreen={0} initialRed={0} getState={getState3} />

      </div>

    </div>

  );

};

export default ParentSolution3;
