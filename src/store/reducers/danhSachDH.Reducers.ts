import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const danhSachDHReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DANH_SACH_DON_HANG:
      return action.payload;
    default:
      return state;
  }
};

export default danhSachDHReducer;
