import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const tinhThanhPhoReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_TINH_THANH_PHO:
      return action.payload;

    default:
      return state;
  }
};

export default tinhThanhPhoReducers;
