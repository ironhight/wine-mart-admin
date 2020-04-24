import { combineReducers } from "redux";
import columsReducers from "./columsReducers";
import danhSachSpReducer from "./danhSachSP.Reducers";
import danhMucSpReducer from "./danhMucSP.Reducers";
import loaiSpReducer from "./loaiSP.Reducers";
import quocGiaReducer from "./quocGia.Reducers";
import loaiNhoReducer from "./loaiNho.Reducers";
import thucAnKemReducer from "./thucAnKem.Reducers";
import vungReducer from "./vung.Reducers";
import nhaMayReducer from "./nhaMay.Reducers";
import phongCachLamReducer from "./phongCachLam.Reducers";
import danhGiaSpReducer from "./danhGiaSP.Reducers";
import danhGiaThucAnReducer from "./danhGiaThucAn.Reducers";
import danhSachKHReducer from "./danhSachKH.Reducers";
import diaChiGiaoHangReducer from "./diaChiGiaoHang.Reducers";
import searchReducer from "./search.Reducers";
import selectReducer from "./select.Reducers";
import tinhThanhPhoReducer from "./tinhThanhPho.Reducers";
import danhSachDHReducer from "./danhSachDH.Reducers";

import GetWidthtoSideBar from "./widthSidebar";
import MenuData from "./menu.Reducers";
import ToggleHeader from "./header.Reducers";

import CheckLogin from "./Login";

const rootReducer = combineReducers({
  columsReducers,
  danhSachSpReducer,
  danhMucSpReducer,
  loaiSpReducer,
  quocGiaReducer,
  loaiNhoReducer,
  thucAnKemReducer,
  vungReducer,
  nhaMayReducer,
  phongCachLamReducer,
  danhGiaSpReducer,
  danhGiaThucAnReducer,
  searchReducer,
  selectReducer,
  danhSachKHReducer,
  diaChiGiaoHangReducer,
  tinhThanhPhoReducer,
  danhSachDHReducer,
  MenuData,
  ToggleHeader,
  GetWidthtoSideBar,
  CheckLogin
});

export default rootReducer;
