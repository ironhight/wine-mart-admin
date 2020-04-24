import axios from "axios";

export const api = axios.create({
  baseURL: "http://5dd690cfce4c300014403a93.mockapi.io/api/danh-sach-san-pham"
});

export const api_DanhMucSP = axios.create({
  baseURL: "http://5e5f5af7b5c43c0014ef980f.mockapi.io/loai-san-pham"
});

export const api_LoaiSP = axios.create({
  baseURL: "http://5e5f5af7b5c43c0014ef980f.mockapi.io/loai-san-pham"
});

export const api_quocGia = axios.create({
  baseURL: "http://5e5f5af7b5c43c0014ef980f.mockapi.io/danh-sach-quoc-gia"
});

export const api_loaiNho = axios.create({
  baseURL: "http://5e5f5af7b5c43c0014ef980f.mockapi.io/danh-sach-quoc-gia"
});

export const api_thucAn = axios.create({
  baseURL: "http://5dd690cfce4c300014403a93.mockapi.io/api/danh-sach-san-pham"
});

export const api_danhSachKH = axios.create({
  baseURL: "http://5e5f5af7b5c43c0014ef980f.mockapi.io/danh-sach-khach-hang"
});

export const api_diaChiGiaoHang = axios.create({
  baseURL: "http://5e69d7efdc2a4b0016da3159.mockapi.io/dia-chi-giao-hang"
});

export const api_danhSachDH = axios.create({
  baseURL: "http://5e69d7efdc2a4b0016da3159.mockapi.io/danh-sach-don-hang"
});
