import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

export function useActions(actions) {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [actions, dispatch]);
}
