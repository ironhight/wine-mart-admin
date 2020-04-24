import * as types from "../constants/actionsTypes";

const initialState: [] = [];

const nhaMayReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_NHA_MAY:
      return action.payload;

    default:
      return state;
  }
};

export default nhaMayReducers;
