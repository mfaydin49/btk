import * as actionTypes from "../actions/ActionTypes";
import initialState from "./InitialState";

export default function changeCategoryReducer(
  state = initialState.currentCategory,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}
