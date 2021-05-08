import React, { useRef } from 'react';
import CHILD from './CHILD';

const PARENT = () => {
  // References, can be changed withoit trigger a render on the component
  const childStateRef = useRef();

  const getChildState = () => {
    const childState = childStateRef.current.getChildCount()
    console.log(`THE CHILD STATE IS: `, childState);
  }

  return (

    <div>
      {/* MORE CODE HERE */}
      <CHILD ref={childStateRef} />
      <button onClick={getChildState}>GET CHIL STATE</button>
    </div>
  );
};

export default PARENT;
