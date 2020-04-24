import * as types from "../constants/actionsTypes";

export const getSelectLoaiSP = (payload: any) => {
  return {
    type: types.GET_LOAI_DANH_SACH_SAN_PHAM,
    payload
  };
};
