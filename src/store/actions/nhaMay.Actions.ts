import * as types from "../constants/actionsTypes";
import { api_quocGia } from "../../api/index";

export const getNhaMay = () => (dispatch: any) => {
  return api_quocGia.get("/").then(res => {
    dispatch({
      type: types.GET_NHA_MAY,
      payload: res.data
    });
  });
};
