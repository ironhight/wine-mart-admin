import * as types from "../constants/actionsTypes";
const initialState = {
  columsName: [""]
};

const columsReducers = (state = initialState, action: any) => {
  // let columsName: string[] = [];

  switch (action.type) {
    case types.GET_COLUMS_DANH_SACH_SAN_PHAM:
      action.payload === "danhSachSanPham"
        ? (state.columsName = [
            "Mã sản phẩm",
            "Tên sản phẩm",
            "Ảnh",
            "Giá",
            "Điểm review",
            "Số lượng",
            "Trạng thái"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_DANH_MUC_SAN_PHAM:
      // console.log(action.payload);
      action.payload === "danhMucSanPham"
        ? (state.columsName = [
            "Tên danh mục",
            "Ảnh nền",
            "Ngày tạo",
            "Ngày chỉnh sửa"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_LOAI_SAN_PHAM:
      action.payload === "loaiSanPham"
        ? (state.columsName = [
            "Danh mục sp",
            "Tên loại sp",
            "Ảnh nền",
            "Ngày tạo",
            "Ngày chỉnh sửa"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_QUOC_GIA:
      action.payload === "quocGia"
        ? (state.columsName = ["Tên quốc gia", "Ngày tạo", "Ngày chỉnh sửa"])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_LOAI_NHO:
      action.payload === "loaiNho"
        ? (state.columsName = ["Tên loại nho", "Ngày tạo", "Ngày chỉnh sửa"])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_THUC_AN_KEM:
      action.payload === "thucAnKem"
        ? (state.columsName = [
            "Tên món ăn",
            "Giá",
            "Ảnh",
            "Trạng thái bán hàng",
            "Ngày tạo"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_VUNG:
      action.payload === "vung"
        ? (state.columsName = ["Tên khu vực", "Ngày tạo", "Ngày chỉnh sửa"])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_NHA_MAY:
      action.payload === "nhaMay"
        ? (state.columsName = ["Tên nhà máy", "Ngày tạo", "Ngày chỉnh sửa"])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_PHONG_CACH_LAM:
      action.payload === "phongCachLam"
        ? (state.columsName = [
            "Tên phong cách làm",
            "Ảnh đại diện",
            "Ngày tạo",
            "Ngày chỉnh sửa"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_DANH_GIA_SP:
      action.payload === "danhGiaSP"
        ? (state.columsName = [
            "Khách hàng",
            "Mã sản phẩm",
            "Tên sản phẩm",
            "Nội dung",
            "Điểm",
            "Ngày tạo"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_DANH_GIA_THUC_AN:
      action.payload === "danhGiaThucAn"
        ? (state.columsName = [
            "Khách hàng",
            "Tên thức ăn",
            "Nội dung",
            "Điểm",
            "Ngày tạo"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_DANH_SACH_KH:
      action.payload === "danhSachKH"
        ? (state.columsName = [
            "Khách hàng",
            "Avatar",
            "Số điện thoại",
            "Email",
            "Ví",
            "Ngày tạo"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_DIA_CHI_GIAO_HANG:
      action.payload === "diaChiGiaoHang"
        ? (state.columsName = [
            "SDT ng nhận",
            "Tên ng nhận",
            "Tỉnh thành",
            "Quận huyện",
            "Phường xã",
            "Địa chỉ"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_TINH_THANH_PHO:
      action.payload === "tinhThanhPho"
        ? (state.columsName = ["Tên tỉnh thành", "Ngày tạo", "Ngày chỉnh sửa"])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_QUAN_HUYEN:
      action.payload === "quanHuyen"
        ? (state.columsName = [
            "Tỉnh thành",
            "Tên quận huyện",
            "Ngày tạo",
            "Ngày chỉnh sửa"
          ])
        : console.log("error");
      return { ...state };

    case types.GET_COLUMS_DANH_SACH_DON_HANG:
      action.payload === "danhSachDonHang"
        ? (state.columsName = [
            "Mã đơn hàng",
            "Nguồn",
            "Khách hàng",
            "Số điện thoại",
            "Tổng tiền",
            "Số lượng",
            "Ngày giao",
            "Ghi chú",
            "Hình thức mua hàng",
            "Phương thức",
            "Trạng thái"
          ])
        : console.log("ERROR");
      return { ...state };

    default:
      return state;
  }
};

export default columsReducers;
