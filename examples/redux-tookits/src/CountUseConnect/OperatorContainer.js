import { connect } from "react-redux";
import { Operator } from "./Count";
import { increment, decrement, set } from "./actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: () => {
      console.log(ownProps, "<<< ownProps");
      return dispatch(increment());
    },
    decrement: () => dispatch(decrement()),
    set: val => dispatch(set(val))
  };
};

export const OperatorContainer = connect(null, mapDispatchToProps)(Operator);
