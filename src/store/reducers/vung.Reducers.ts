import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const vungReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_VUNG:
      return action.payload;

    default:
      return state;
  }
};

export default vungReducers;
