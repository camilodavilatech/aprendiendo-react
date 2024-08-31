/* eslint-disable react/prop-types */
import React from "react";

export const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [count, setCount] = React.useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <AppContext.Provider value={{ count, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
}
