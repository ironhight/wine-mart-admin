import * as types from "../constants/actionsTypes";

export const datamenu = () => {
  return {
    type: types.GETDATAMENU
  };
};
export const ResultToggle = () => {
  return {
    type: types.GETRESULTTOGGLE
  };
};
export const GetWidthtoSidebar = (width:number) => {
  return {
    type: types.GETWIDTHTOSIDEBAR,
    width

  };
};