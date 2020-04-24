import { api_DanhMucSP } from "../../api/index";
import * as types from "../constants/actionsTypes";

export const getDanhGiaThucAn = () => (dispatch: any) => {
  return api_DanhMucSP
    .get("/")
    .then(res => {
      dispatch({
        type: types.GET_DANH_GIA_THUC_AN,
        payload: res.data
      });
    })
    .catch(console.log);
};
