import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const danhGiaThucAnReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DANH_GIA_THUC_AN:
      return action.payload;

    default:
      return state;
  }
};

export default danhGiaThucAnReducers;
