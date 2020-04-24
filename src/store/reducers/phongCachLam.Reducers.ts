import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const phongCachLamReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_PHONG_CACH_LAM:
      return action.payload;

    default:
      return state;
  }
};

export default phongCachLamReducers;
