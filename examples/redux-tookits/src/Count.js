import { useCount } from "./useCount";

function Count() {
  const { count, increment, decrement, set } = useCount();

  return (
    <div className="Count">
      <h1>{count}</h1>
      <div className="Operator">
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => set(0)}>reset</button>
        <button onClick={() => decrement()}>decrement</button>
      </div>
    </div>
  );
}

export { Count };
