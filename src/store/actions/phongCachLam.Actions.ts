import { api_DanhMucSP } from "../../api/index";
import * as types from "../constants/actionsTypes";

export const getPhongCachLam = () => (dispatch: any) => {
  return api_DanhMucSP
    .get("/")
    .then(res => {
      dispatch({
        type: types.GET_PHONG_CACH_LAM,
        payload: res.data
      });
    })
    .catch(console.log);
};
