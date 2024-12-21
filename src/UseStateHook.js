import { useState } from "react";
function UseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>useState Hooks</h1>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        &nbsp;
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default UseStateHook;
