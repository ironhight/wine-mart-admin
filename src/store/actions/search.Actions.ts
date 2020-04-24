import * as types from "../constants/actionsTypes";

export const searchName = (keyWord: any) => {
  return {
    type: types.SEARCH_NAME,
    keyWord
  };
};

export const searchID = (keyWord: any) => {
  return {
    type: types.SEARCH_ID,
    keyWord
  };
};
