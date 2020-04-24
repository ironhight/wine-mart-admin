import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const thucAnKemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_THUC_AN_KEM:
      return action.payload;

    default:
      return state;
  }
};

export default thucAnKemReducer;
