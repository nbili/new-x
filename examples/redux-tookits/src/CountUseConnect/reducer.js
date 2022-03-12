import { INCREMENT, DECREMENT, SET } from "./actions";
import { produce } from "immer";

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
