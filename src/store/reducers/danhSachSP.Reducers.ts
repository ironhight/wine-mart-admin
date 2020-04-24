import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const danhSachSpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DANH_SACH_SAN_PHAM:
      console.log("danhSachSpReducer -> action.payload", action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default danhSachSpReducer;
