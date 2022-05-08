import { INCREMENT, DECREMENT, SET, SET_COUNT, INPUT_NAME } from "./actions";
import { produce } from "immer";
import { combineReducers } from "redux";

export const initialState = { count: 38 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return produce(state, draftState => {
      draftState.count += 2;
    });
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) };
  }

  return state;
};

export const userInfo = { name: "", count: 88 };

export const userReducer = (state = userInfo, action) => {
  if (action.type === SET_COUNT) {
    return {
      ...state,
      count: state.count + 1
    };
  }

  if (action.type === INPUT_NAME) {
    return {
      ...state,
      name: action.payload
    };
  }

  return state;
};

export const allReducers = combineReducers({ reducer, userReducer });
