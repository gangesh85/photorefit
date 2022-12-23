import React, { useState } from "react";

function HookCounter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
    
  const incrementFive = () => {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>count: +1</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>count: -1</button>
      <button onClick={incrementFive}>count: +5</button>
      <button onClick={() => setCount(initialState)}>Reset</button>
    </div>
  );
}

export default HookCounter;
