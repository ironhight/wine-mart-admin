import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const danhMucSpReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DANH_MUC_SAN_PHAM:
      return action.payload;
    default:
      return state;
  }
};

export default danhMucSpReducers;
