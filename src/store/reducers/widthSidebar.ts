import * as types from "../constants/actionsTypes";

const initialState: any = 200;

const GetWidthtoSideBar = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GETWIDTHTOSIDEBAR:
      return (state = action.width);
    default:
      return state;
  }
};
export default GetWidthtoSideBar;
