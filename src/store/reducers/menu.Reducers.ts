import * as types from "../constants/actionsTypes";

import icon_user from "../../assets/images/user.png";
import icon_user_act from "../../assets/images/user_act.png";

import icon_car from "../../assets/images/car.png";
import icon_car_act from "../../assets/images/car_act.png";

import icon_customer from "../../assets/images/customer.png";
import icon_customer_act from "../../assets/images/customer_act.png";

import icon_product_act from "../../assets/images/product_act.png";
import icon_product from "../../assets/images/product.png";

import icon_cart_act from "../../assets/images/cart_act.png";
import icon_cart from "../../assets/images/cart_def.png";

import icon_giftcard_act from "../../assets/images/giftcard_act.png";
import icon_giftcard from "../../assets/images/giftcard_def.png";

const MenuList = [
  {
    path: "/quanlytaikhoan",
    title: "Quản lý tài khoản",
    icons: [{ active: icon_user_act, inActive: icon_user }]
  },
  {
    path: "/quanlykhachhang",
    title: "Quản lý khách hàng",
    icons: [{ active: icon_customer_act, inActive: icon_customer }]
  },
  {
    path: "/quanlysanpham",
    title: "Quản lý sản phẩm",
    icons: [{ active: icon_product_act, inActive: icon_product }],
    childrens: [
      { path: "/danhSachSanPham", nameVi: "Danh sách sản phẩm" },
      { path: "/danhMucSanPham", nameVi: "Danh mục sản phẩm" },
      { path: "/loaiSanPham", nameVi: "Loại sản phẩm" },
      { path: "/quocGia", nameVi: "Quốc gia" },
      { path: "/loaiNho", nameVi: "Loại nho" },
      { path: "/thucAnKem", nameVi: "Thức ăn kèm" },
      { path: "/vungTieuVung", nameVi: "Vùng, tiểu vùng" },
      { path: "/nhaMay", nameVi: "Nhà máy sản xuất rượu" },
      { path: "/phongCachLam", nameVi: "Phong cách làm" },
      { path: "/danhGiaSP", nameVi: "Đánh giá sản phẩm" },
      { path: "/danhGiaThucAn", nameVi: "Đánh giá thức ăn kèm" }
    ]
  },
  {
    path: "/quanlydiachigiaohang",
    title: "Quản lý địa chỉ giao hàng",
    icons: [{ active: icon_car_act, inActive: icon_car }],
    childrens: [
      { path: "/diachi", nameVi: "Địa chỉ giao hàng" },
      { path: "/thanhpho", nameVi: "Tỉnh/Thành phố" },
      { path: "/quanhuyen", nameVi: "Quận/Huyện" }
    ]
  },
  {
    path: "/quanlydonhang",
    title: "Quản lý đơn hàng",
    icons: [{ active: icon_cart_act, inActive: icon_cart }],
    childrens: [
      { path: "/taodonhang", nameVi: "Tạo đơn hàng" },
      { path: "/danhsachDH", nameVi: "Danh sách đơn hàng" }
    ]
  },
  {
    path: "/quanlykhuyenmai",
    title: "Quản lý khuyến mãi",
    icons: [{ active: icon_giftcard_act, inActive: icon_giftcard }],
    childrens: [
      { path: "/taokhuyenmai", nameVi: "Tạo mới khuyến mãi" },
      { path: "/danhsachKM", nameVi: "Danh sách khuyến mãi" }
    ]
  }
];

const initialState: any = MenuList;

const MenuData = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GETDATAMENU:
      return state;
    default:
      return state;
  }
};
export default MenuData;
