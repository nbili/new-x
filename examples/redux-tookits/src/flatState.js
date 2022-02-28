import { combineReducers, createStore } from "redux";

const initialState = {
  users: [
    { id: 1, name: "Kent" },
    { id: 2, name: "Nbili" }
  ],
  tasks: [
    {
      title: "Leaning English"
    },
    {
      title: "Coding programming"
    },
    {
      title: "Interview"
    }
  ]
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addTask = title => ({ type: ADD_TASK, payload: title });
const addUser = user => ({ type: ADD_USER, payload: user });

const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }

  return users;
};

const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }

  return tasks;
};

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const store = createStore(reducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTask({ title: `new Title` }));
store.dispatch(addUser({ id: 3, name: `new Name` }));

