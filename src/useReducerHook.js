import { useReducer } from "react";
import "./styles.css";

export default function UseReducerHook() {
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h1>useReducer Hooks</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
}
