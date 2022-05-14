import { useState } from "react";

const useCount = (): [number, VoidFunction] => {
  const [count, setCount] = useState(0);

  const inc = () => setCount(c => c + 1);

  return [count, inc];
};

export { useCount };
