import { bindActionCreators, createStore } from "redux";

const initialState = {
  value: 0
};

const ADD = "ADD";
const INCREMENT = "INCREMENT";

const add = () => ({
  type: ADD
});

const increment = (num = 1) => ({ type: INCREMENT, payload: num });

const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return {
      value: state.value + 1
    };
  }

  if (action.type === INCREMENT) {
    return {
      value: state.value + action.payload
    };
  }

  return state;
};

const monitorEnhancer = createStore => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const newState = reducer(state, action);
    console.log("newState: ", newState);
    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

const store = createStore(reducer, monitorEnhancer);

const subscriber = () => console.log(`sub: `, store.getState());

store.subscribe(subscriber);

const actions = bindActionCreators({ increment, add }, store.dispatch);

actions.add();
actions.increment(100);
