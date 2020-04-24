import { api_DanhMucSP } from "../../api/index";
import * as types from "../constants/actionsTypes";

export const getDanhGiaSP = () => (dispatch: any) => {
  return api_DanhMucSP
    .get("/")
    .then(res => {
      dispatch({
        type: types.GET_DANH_GIA_SP,
        payload: res.data
      });
    })
    .catch(console.log);
};
