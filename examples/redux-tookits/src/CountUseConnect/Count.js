import {
  ComputedCountContainer,
  CountNumberContainer
} from "./CountNumberContainer";
import { OperatorContainer } from "./OperatorContainer";

function CountNumber({ count }) {
  return <h1>{count}</h1>;
}

function ComputedCount({ computedCount }) {
  return <h1>{computedCount}</h1>;
}

function Operator({ increment, set, decrement }) {
  return (
    <div className="Operator">
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => set(0)}>reset</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
}

function Count() {
  return (
    <div className="Count">
      <CountNumberContainer />
      <OperatorContainer ownProps={`ownProps`} />

      <ComputedCountContainer />
    </div>
  );
}

export { Count, CountNumber, Operator, ComputedCount };
