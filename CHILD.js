import React, { useState, forwardRef, useImperativeHandle } from 'react';
import '../App.css';

const ChildSolution3 = forwardRef((props, _ref) => {

  const [count, setCount] = useState(0);

  const handleChangeAdd = () => {
    setCount(count + 1);
  }

  const handleChangeSub = () => {
    setCount(count - 1);
  }

  useImperativeHandle(_ref, () => ({
    getChildCount: () => {
      return count;
    },
  }));

  return (
    <div>
      {/* MORE CODE HERE */}
      <button onClick={handleChangeAdd}>+</button>
      {count}
      <button onClick={handleChangeSub}>-</button>
    </div>
  );
});

export default React.memo(ChildSolution3);
