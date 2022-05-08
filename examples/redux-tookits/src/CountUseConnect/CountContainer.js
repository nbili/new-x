import { connect } from "react-redux";
import { setCount } from "./actions";
import { Count } from "./InputName";

const mapStateToProps = state => {
  return {
    count: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCount: () => dispatch(setCount())
  };
};

export const CountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count);
