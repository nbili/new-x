import { connect } from "react-redux";
import { inputName, setCount } from "./actions";
import { InputName } from "./InputName";

const mapStateToProps = state => {
  return {
    name: state.userReducer.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputName: name => dispatch(inputName(name))
  };
};

export const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputName);
