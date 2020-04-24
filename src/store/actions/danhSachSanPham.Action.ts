import * as types from "../constants/actionsTypes";
import { api } from "../../api";
//
export const getDanhSachSP = () => (dispatch: any) => {
  return api
    .get("/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_DANH_SACH_SAN_PHAM,
        payload: res.data
      });
    })
    .catch(console.log);
};
