function todos(state = [], action) {
  switch (action.type) {
    case "add_todo":
      return state.concat([action.todo]);

    case "remove_todo":
      return state.filter(todo => todo.id !== action.id);

    case "toggle_todo":
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

    default:
      return state;
  }
}

function createStore(reducer) {
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

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  return {
    getState,
    subscribe,
    dispatch
  };
}

const store = createStore(todos);

const unsubscribe = store.subscribe(() => {
  console.log(`the store is : `, store.getState());
});

store.dispatch({
  type: "add_todo",
  todo: {
    id: 0,
    name: `todo 0`,
    complete: true
  }
});

store.dispatch({
  type: "add_todo",
  todo: {
    id: 1,
    name: `todo 1`,
    complete: true
  }
});

unsubscribe();
