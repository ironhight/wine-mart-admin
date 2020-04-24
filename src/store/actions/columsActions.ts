import * as types from "../constants/actionsTypes";

export const columsDanhMucSanPham = (payload: any) => {
  return {
    type: types.GET_COLUMS_DANH_MUC_SAN_PHAM,
    payload
  };
};

export const columsDanhSachSanPham = (payload: any) => {
  return {
    type: types.GET_COLUMS_DANH_SACH_SAN_PHAM,
    payload
  };
};

export const columsLoaiSanPham = (payload: any) => {
  return { type: types.GET_COLUMS_LOAI_SAN_PHAM, payload };
};

export const columsQuocGia = (payload: any) => {
  return { type: types.GET_COLUMS_QUOC_GIA, payload };
};

export const columsLoaiNho = (payload: any) => {
  return { type: types.GET_COLUMS_LOAI_NHO, payload };
};

export const columsThucAnKem = (payload: any) => {
  return { type: types.GET_COLUMS_THUC_AN_KEM, payload };
};

export const columsVung = (payload: any) => {
  return { type: types.GET_COLUMS_VUNG, payload };
};

export const columsNhaMay = (payload: any) => {
  return { type: types.GET_COLUMS_NHA_MAY, payload };
};

export const columsPhongCachLam = (payload: any) => {
  return { type: types.GET_COLUMS_PHONG_CACH_LAM, payload };
};

export const columsDanhGiaSP = (payload: any) => {
  return { type: types.GET_COLUMS_DANH_GIA_SP, payload };
};

export const columsDanhGiaThucAn = (payload: any) => {
  return { type: types.GET_COLUMS_DANH_GIA_THUC_AN, payload };
};

export const columsDanhSachKH = (payload: any) => {
  return {
    type: types.GET_COLUMS_DANH_SACH_KH,
    payload
  };
};

export const columsDiaChiGiaoHang = (payload: any) => {
  return {
    type: types.GET_COLUMS_DIA_CHI_GIAO_HANG,
    payload
  };
};

export const columsTinhThanhPho = (payload: any) => {
  return { type: types.GET_COLUMS_TINH_THANH_PHO, payload };
};

export const columsQuanHuyen = (payload: any) => {
  return { type: types.GET_COLUMS_QUAN_HUYEN, payload };
};

export const columsDanhSachDH = (payload: any) => {
  return { type: types.GET_COLUMS_DANH_SACH_DON_HANG, payload };
};
