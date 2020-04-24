import * as types from "../constants/actionsTypes";
import { api_diaChiGiaoHang } from "../../api";

export const getDiaChiGiaoHang = () => (dispatch: any) => {
  return api_diaChiGiaoHang
    .get("/")
    .then(res => {
      dispatch({ type: types.GET_DIA_CHI_GIAO_HANG, payload: res.data });
    })
    .catch(console.log);
};
