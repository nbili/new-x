import { useSelector } from "react-redux";
import { useActions } from "./useActions";
import { increment, decrement, set } from "./actions";
import { useMemo } from "react";

export function useCount() {
  const count = useSelector(state => state.count);
  const actions = useActions({ increment, decrement, set });

  return useMemo(() => ({ count, ...actions }), [count, actions]);
}
