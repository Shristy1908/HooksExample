import React, { useEffect, useRef, useState } from "react";

const UseRefHooks = () => {
  const [count, setCount] = useState(0);
  const incref = useRef();
  const decref = useRef();

  useEffect(() => {
    incref.current.style.background = "red";
    decref.current.style.background = "blue";
  });

  return (
    <>
      <div className="App">
        <h1>useRef Hooks</h1>
        <h3>Count: {count}</h3>
        <button ref={incref}>Increment</button>
        &nbsp;
        <button ref={decref}>Decrement</button>
      </div>
    </>
  );
};

export default UseRefHooks;
