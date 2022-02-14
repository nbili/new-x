```js
Redux.createStore(
  Redux.combineReducers({
    // reducers
  }),
  Redux
    .applyMiddleware
    // middleware
    ()
);
```

```js
const logger = store => next => action => {};
```
