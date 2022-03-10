import { connect } from "react-redux";
import { CountNumber } from "./Count";

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export const CountNumberContainer = connect(mapStateToProps)(CountNumber);
