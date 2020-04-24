import * as types from "../constants/actionsTypes";

const initialState: any = true;

const ToggleHeader = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GETRESULTTOGGLE:
      return !state;
    default:
      return state;
  }
};
export default ToggleHeader;
