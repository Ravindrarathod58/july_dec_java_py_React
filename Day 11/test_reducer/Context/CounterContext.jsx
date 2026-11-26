import { createContext, useReducer } from "react";
const CounterContext = createContext();
const initialState = 0;
function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      // Statement

      return state + 1;
    }
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

function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
export { CounterProvider, CounterContext };
