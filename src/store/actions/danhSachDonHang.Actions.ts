import * as types from "../constants/actionsTypes";
import { api_danhSachDH } from "../../api";

export const getDanhSachDH = () => (dispatch: any) => {
  return api_danhSachDH
    .get("/")
    .then(res =>
      dispatch({ type: types.GET_DANH_SACH_DON_HANG, payload: res.data })
    )
    .catch(console.log);
};
