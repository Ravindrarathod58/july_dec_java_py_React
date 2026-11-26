import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";
/*
const initialState = 0;
function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    case "INCREMENT-BY":
      return (state = state + action.payload);
    case "DECREMENT-BY":
      return (state = state - action.payload);
  }
}
*/
function Counter() {
  //const [count, dispatch] = useReducer(CounterReducer, initialState);
  const { count, dispatch } = useContext(CounterContext);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Incr</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decr</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT-BY", payload: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT-BY", payload: 5 })}>
        Decrement By 5
      </button>
    </>
  );
}
export default Counter;
