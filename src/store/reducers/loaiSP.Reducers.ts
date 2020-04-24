import * as types from "../constants/actionsTypes";
const initialState: [] = [];

const loaiSpReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_LOAI_SAN_PHAM:
      return action.payload;
    default:
      return state;
  }
};

export default loaiSpReducers;
