import * as types from "../constants/actionsTypes";
import { api_quocGia } from "../../api/index";

export const getQuocGia = () => (dispatch: any) => {
  return api_quocGia.get("/").then(res => {
    dispatch({
      type: types.GET_QUOC_GIA,
      payload: res.data
    });
  });
};
