import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const danhSachKHReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DANH_SACH_KHACH_HANG:
      return action.payload;

    default:
      return state;
  }
};

export default danhSachKHReducers;
