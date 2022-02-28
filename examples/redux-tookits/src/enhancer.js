import { createStore } from "redux";

const reducer = (state = { count: 1 }) => state;

const monitorEnhancer = createStore => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();

    const newState = reducer(state, action);

    const end = performance.now();

    const diff = end - start;

    console.log("->", diff);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

const store = createStore(reducer, monitorEnhancer);

store.dispatch({ type: "Test" });