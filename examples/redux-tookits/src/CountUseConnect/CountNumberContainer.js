import { connect } from "react-redux";
import { CountNumber, ComputedCount } from "./Count";

const mapStateToProps = state => {
  return {
    count: state.count,
    computedCount: state.count * 2
  };
};

export const CountNumberContainer = connect(mapStateToProps)(CountNumber);

export const ComputedCountContainer = connect(mapStateToProps)(ComputedCount);
