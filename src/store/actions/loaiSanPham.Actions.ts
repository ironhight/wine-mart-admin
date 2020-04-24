import * as types from "../constants/actionsTypes";
import { api_LoaiSP } from "../../api";

export const getLoaiSP = () => (dispatch: any) => {
  return api_LoaiSP
    .get("/")
    .then(res => {
      dispatch({
        type: types.GET_LOAI_SAN_PHAM,
        payload: res.data
      });
    })
    .catch(console.log);
};
