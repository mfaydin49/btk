import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";

const IncreaseByTwoCounter = (props) => {
  return (
    <div>
      <button
        onClick={(e) => {
          props.dispatch(increaseByTwoCounter());
        }}
      >
        2 arttır
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };
};
export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
