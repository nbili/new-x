import { State, Action, Reducer, Listener, Listeners } from "@newx/types";

function createStore(reducer: Reducer) {
  let state: State = undefined;

  let listeners: Listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener: Listener) {
    listeners?.push(listener);

    return function () {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  function dispatch(action: Action) {
    state = reducer(state, action);

    listeners.forEach(listener => listener());
  }

  return {
    getState,
    subscribe,
    dispatch
  };
}

export { createStore };
