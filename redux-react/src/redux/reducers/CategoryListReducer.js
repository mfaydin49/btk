import * as actionTypes from "../actions/ActionTypes";
import initialState from "./InitialState";

export default function changeCategoryReducer(
  state = initialState.currentCategory,
  action
) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
