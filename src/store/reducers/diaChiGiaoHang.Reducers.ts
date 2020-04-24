import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const diaChiGiaoHang = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DIA_CHI_GIAO_HANG:
      return action.payload;
    default:
      return state;
  }
};

export default diaChiGiaoHang;
