import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, set } from "./actions";

function Count() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="Count">
      <h1>{count}</h1>
      <div className="Operator">
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(set(0))}>reset</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export { Count };
