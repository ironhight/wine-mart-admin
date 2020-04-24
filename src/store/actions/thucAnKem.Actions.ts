import * as types from "../constants/actionsTypes";
import { api_thucAn } from "../../api";
//
export const getThucAnKem = () => (dispatch: any) => {
  return api_thucAn
    .get("/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.GET_THUC_AN_KEM,
        payload: res.data
      });
    })
    .catch(console.log);
};
