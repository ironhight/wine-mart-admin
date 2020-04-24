import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const quocGiaReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_QUOC_GIA:
      return action.payload;

    default:
      return state;
  }
};

export default quocGiaReducers;
