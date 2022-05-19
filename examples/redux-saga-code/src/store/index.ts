import { AnyAction, combineReducers, createStore } from "redux";

const countReducer = (state = 9, action: AnyAction) => {
  if (action.type === "increment") {
    return state + 1;
  }

  if (action.type === "decrement") {
    return state - 1;
  }
};

const rootReducer = combineReducers({
  count: countReducer
});

const store = createStore(rootReducer);

export { store };
