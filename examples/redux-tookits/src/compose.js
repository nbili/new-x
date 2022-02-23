import { compose, createStore } from "redux";

const makeLouder = str => str.toUpperCase();
const repeatThreeTimes = str => str.repeat(3);
const embolden = str => str.bold();

// [makeLouder, repeatThreeTimes, embolden]

const process1 = str => embolden(repeatThreeTimes(makeLouder(str)));

const process2 = compose(embolden, repeatThreeTimes, makeLouder);

console.log(process1("hello"));
console.log(process2("hello"));

console.log(`-------------`);

const INCREMENT = `INCREMENT`;

const initialState = {
  value: 0
};

const incrementAction = {
  type: INCREMENT,
  payload: 5
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

console.log(store);
