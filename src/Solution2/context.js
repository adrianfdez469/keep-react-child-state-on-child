import { useState, createContext, useCallback } from 'react';

export const StateContext = createContext();

export const Provider = (props) => {
  // Dont use useReducer for simplicity
  const [color1, setColor1] = useState({ red: 0, green: 128, blue: 0 });
  const [color2, setColor2] = useState({ red: 0, green: 0, blue: 128 });
  const [color3, setColor3] = useState({ red: 128, green: 0, blue: 0 });
  const [alpha, setAlpha] = useState(1);
  const [avgColor, setAvgColor] = useState({ red: 255, green: 255, blue: 255 });

  const handleChangeApha = (sign) => {
    if (sign === "+" && alpha < 1) setAlpha(+(alpha + 0.1).toFixed(1));
    if (sign === "-" && alpha > 0.1) setAlpha(+(alpha - 0.1).toFixed(1))
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


  return (
    <StateContext.Provider value={{
      color1, color2, color3, alpha, avgColor, handleChangeApha, handleChangeColor1, handleChangeColor2, handleChangeColor3, setAvgColor
    }}>
      {props.children}
    </StateContext.Provider>
  );
}

