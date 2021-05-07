import React, { useRef, useEffect, useState } from 'react';
import ChildSolution4 from './child_B';
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

  const handleShowState = () => {
    const color1 = ref1.current.getRGB();
    const color2 = ref2.current.getRGB();
    const color3 = ref3.current.getRGB();

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
      <h3>Solution 4: Managing state on child</h3>
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
        <ChildSolution4 id={1} ref={ref1} alpha={alpha} initialBlue={0} initialGreen={128} initialRed={0} />
        <ChildSolution4 id={2} ref={ref2} alpha={alpha} initialBlue={0} initialGreen={0} initialRed={128} />
        <ChildSolution4 id={3} ref={ref3} alpha={alpha} initialBlue={128} initialGreen={0} initialRed={0} />

      </div>

    </div>

  );

};

export default ParentSolution3;
