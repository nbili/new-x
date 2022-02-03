function createStore() {
  let state;

  let listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function () {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  return {
    getState,
    subscribe
  };
}

createStore()
