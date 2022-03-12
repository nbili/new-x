import { createSelector } from "reselect";

const fn1 = state => {
  return state.count + 1;
};

export const selectX = createSelector([fn1], count => {
  return count > 5 ? count : 5;
});
