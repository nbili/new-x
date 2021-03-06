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

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const ADD_GOAL = "ADD_GOAL";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

    default:
      return state;
  }
}

function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.todo]);

    default:
      return state;
  }
}

function app(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action)
  };
}

const store = createStore(app);

const unsubscribe = store.subscribe(() => {
  console.log(`the store is : `, store.getState());
});

store.dispatch({
  type: ADD_TODO,
  todo: {
    id: 0,
    name: `todo 0`,
    complete: true
  }
});

store.dispatch({
  type: ADD_TODO,
  todo: {
    id: 1,
    name: `todo 1`,
    complete: true
  }
});

unsubscribe();
