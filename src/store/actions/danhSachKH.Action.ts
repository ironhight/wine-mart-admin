import * as types from "../constants/actionsTypes";
import { api_danhSachKH } from "../../api";
// import { CardActions } from "@material-ui/core"

export const getDanhSachKH = () => (dispatch: any) => {
  return api_danhSachKH
    .get("/")
    .then(res => {
      dispatch({
        type: types.GET_DANH_SACH_KHACH_HANG,
        payload: res.data
      });
    })
    .catch(console.log);
};
