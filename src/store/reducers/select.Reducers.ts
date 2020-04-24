import * as types from "../constants/actionsTypes";

const initialState = {
  optionName: [""]
};

const selectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_LOAI_DANH_SACH_SAN_PHAM:
      action.payload === "loaiDanhSachSanPham"
        ? (state.optionName = ["abcd", "xyzt", "cocktails"])
        : console.log("error");
      return { ...state };
    default:
      return state;
  }
};

export default selectReducer;
