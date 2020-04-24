import * as types from "../constants/actionsTypes";
const initialState: [] = [];

const loaiNhoReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_LOAI_NHO:
      return action.payload;
    default:
      return state;
  }
};

export default loaiNhoReducers;
