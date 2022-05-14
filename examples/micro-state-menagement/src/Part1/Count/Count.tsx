import { useEffect, useState } from "react";
import { useCount } from "./useCount.hooks";

const Component = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount(c => c + 1), 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(c => (c % 2 === 0 ? c : c + 1))}>
        Increment Count if it makes the result even
      </button>
    </div>
  );
};

function Count() {
  // const [count, addCount] = useCount();

  const [state, setState] = useState({ code: "code" });

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        setCount to {count + 1}
      </button>
    </div>
  );
}

export { Count, Component };
