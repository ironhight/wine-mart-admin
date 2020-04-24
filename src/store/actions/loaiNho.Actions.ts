import * as types from "../constants/actionsTypes";
import { api_loaiNho } from "../../api/index";

export const getLoaiNho = () => (dispatch: any) => {
  return api_loaiNho.get("/").then(res => {
    dispatch({
      type: types.GET_LOAI_NHO,
      payload: res.data
    });
  });
};
