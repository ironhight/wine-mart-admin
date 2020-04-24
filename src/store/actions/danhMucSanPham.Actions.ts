import { api_DanhMucSP } from "../../api/index";
import * as types from "../constants/actionsTypes";

export const getDanhMucSP = () => (dispatch: any) => {
  return api_DanhMucSP
    .get("/")
    .then(res => {
      dispatch({
        type: types.GET_DANH_MUC_SAN_PHAM,
        payload: res.data
      });
    })
    .catch(console.log);
};
