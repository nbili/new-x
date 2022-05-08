export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = value => ({ type: SET, payload: value });

export const INPUT_NAME = "INPUT_NAME";
export const SET_COUNT = "SET_COUNT";

export const inputName = value => ({ type: INPUT_NAME, payload: value });
export const setCount = () => ({ type: SET_COUNT });
