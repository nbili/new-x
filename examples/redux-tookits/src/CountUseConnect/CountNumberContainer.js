import { connect } from "react-redux";
import { CountNumber, ComputedCount } from "./Count";
import { selectX } from "./selecters";

const mapStateToProps = state => {
  return {
    count: state.count,
    computedCount: selectX(state)
  };
};

export const CountNumberContainer = connect(mapStateToProps)(CountNumber);

export const ComputedCountContainer = connect(mapStateToProps)(ComputedCount);
