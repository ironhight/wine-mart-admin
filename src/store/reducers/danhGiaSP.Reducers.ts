import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const danhGiaSpReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DANH_GIA_SP:
      return action.payload;

    default:
      return state;
  }
};

export default danhGiaSpReducers;
