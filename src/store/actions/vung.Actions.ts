import * as types from "../constants/actionsTypes";
import { api_quocGia } from "../../api/index";

export const getVung = () => (dispatch: any) => {
  return api_quocGia.get("/").then((res:any) => {
    dispatch({
      type: types.GET_VUNG,
      payload: res.data
    });
  });
};
