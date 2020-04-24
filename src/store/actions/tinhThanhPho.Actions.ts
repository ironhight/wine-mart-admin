import * as types from "../constants/actionsTypes";
import { api_quocGia } from "../../api/index";

export const getTinhThanhPho = () => (dispatch: any) => {
  return api_quocGia.get("/").then(res => {
    dispatch({
      type: types.GET_TINH_THANH_PHO,
      payload: res.data
    });
  });
};
