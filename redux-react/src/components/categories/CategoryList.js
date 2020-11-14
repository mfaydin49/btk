import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/CategoryActions";

const CategoryList = (props) => {
  return (
    <div>
      <h3>Categories{props.actions.getCategories().length}</h3>
      <h5>Seçili kategory: {props.currentCategory}</h5>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
};

const mapStateToProps = (state) => {
  return {
    currentCategory: state.changeCategoryReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
