import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DanhMucSanPham from "./pages/DanhMucSanPham.Page";
import DanhSachSanPham from "./pages/DanhSachSanPham.Page";
import LoaiSanPham from "./pages/LoaiSanPham.Page";
import QuocGia from "./pages/QuocGia.Page";
import LoaiNho from "./pages/LoaiNho.Page";
import ThucAnKem from "./pages/ThucAnKem.Page";
import NhaMay from "./pages/NhayMaySXRuou.Page";
import PhongCachLam from "./pages/PhongCachLam.Page";
import DanhGiaSP from "./pages/DanhGiaSP.Page";
import DanhGiaThucAn from "./pages/DanhGiaThucAn.Page";
import Vung from "./pages/Vung.Page";
import TaoMoiDonHang from "./pages/TaoMoiDonHang.Page";
import QuanLyTaiKhoan from "./pages/QuanLyTaiKhoan.Page";
import DanhSachKH from "./pages/DanhSachKH.Page";
import DiaChiGiaoHang from "./pages/DiaChiGiaoHang.Page";
import TinhThanhPho from "./pages/TinhThanhPho.Page";
import QuanHuyen from "./pages/QuanHuyen.Page";
import DanhSachDH from "./pages/DanhSachDonHang.Page";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
// import ManagerCustomer from "./components/Manager/ManagerCustomer";

import { connect } from "react-redux";
import "./App.css"; // Note: style content
import Login from "./components/Login/Login";

interface Props {
  toggleHeader: boolean;
  WidthSideBar: number;
  ResultLogin: any;
}
interface State {
  ResultLoginState: boolean;
}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ResultLoginState: false
    };
  }

  // UNSAFE_componentWillReceiveProps(nextProps:any){
  //     if(nextProps && nextProps.ResultLogin)
  //     {
  //         this.setState({
  //            ResultLoginState:nextProps.ResultLogin.loginsucsses
  //         });
  //     }

  // }

  render() {
    let { toggleHeader, WidthSideBar, ResultLogin } = this.props;
    console.log(ResultLogin);

    var Loginsucsses = ResultLogin.loginsucsses;
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container-fluid">
            {Loginsucsses ? (
              <Login />
            ) : (
              <div>
                {/* PAGE ADMIN */}
                <div className="row Menu_appears">
                  <div
                    className={
                      toggleHeader
                        ? "col-md-10 col-sm-10 Menu_appears_header"
                        : "col-md-12 col-sm-12 Menu_appears_header"
                    }
                    style={{
                      marginLeft: `${
                        toggleHeader ? `${WidthSideBar - 2}px` : "0px"
                      }`
                    }}
                  >
                    <Header />
                  </div>
                  <div>{toggleHeader ? <Sidebar /> : <div></div>} </div>
                  <div
                    className={`${
                      toggleHeader
                        ? "col-md-10 col-sm-10 content"
                        : "col-md-12 col-sm-12 content"
                    }`}
                    style={{
                      marginLeft: `${
                        toggleHeader ? `${WidthSideBar + 1}px` : "0px"
                      }`
                    }}
                  >
                    <Switch>
                      {/* quanlykhachhang */}

                      <Route
                        path="/quanlytaikhoan"
                        exact
                        component={QuanLyTaiKhoan}
                      />
                      <Route
                        path="/quanlykhachhang"
                        exact
                        component={DanhSachKH}
                      />

                      <Route
                        path="/quanlysanpham/danhSachSanPham"
                        exact
                        component={DanhSachSanPham}
                      />
                      <Route
                        path="/quanlysanpham/danhMucSanPham"
                        exact
                        component={DanhMucSanPham}
                      />
                      <Route
                        path="/quanlysanpham/loaiSanPham"
                        exact
                        component={LoaiSanPham}
                      />
                      <Route
                        path="/quanlysanpham/quocGia"
                        exact
                        component={QuocGia}
                      />
                      <Route
                        path="/quanlysanpham/loaiNho"
                        exact
                        component={LoaiNho}
                      />
                      <Route
                        path="/quanlysanpham/thucAnKem"
                        exact
                        component={ThucAnKem}
                      />
                      <Route
                        path="/quanlysanpham/vungTieuVung"
                        exact
                        component={Vung}
                      />
                      <Route
                        path="/quanlysanpham/nhaMay"
                        exact
                        component={NhaMay}
                      />
                      <Route
                        path="/quanlysanpham/phongCachLam"
                        exact
                        component={PhongCachLam}
                      />
                      <Route
                        path="/quanlysanpham/danhGiaSP"
                        exact
                        component={DanhGiaSP}
                      />
                      <Route
                        path="/quanlysanpham/danhGiaThucAn"
                        exact
                        component={DanhGiaThucAn}
                      />

                      <Route
                        path="/quanlydonhang/taodonhang"
                        exact
                        component={TaoMoiDonHang}
                      />

                      <Route
                        path="/quanlydiachigiaohang/diachi"
                        exact
                        component={DiaChiGiaoHang}
                      />

                      <Route
                        path="/quanlydiachigiaohang/thanhpho"
                        exact
                        component={TinhThanhPho}
                      />

                      <Route
                        path="/quanlydiachigiaohang/quanhuyen"
                        exact
                        component={QuanHuyen}
                      />

                      <Route
                        path="/quanlydonhang/danhsachDH"
                        exact
                        component={DanhSachDH}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
              // END ADMIN
            )}
          </div>
        </BrowserRouter>
        {/* <ModalDanhSachSanPham /> */}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    toggleHeader: state.ToggleHeader,
    WidthSideBar: state.GetWidthtoSideBar,
    ResultLogin: state.CheckLogin
  };
};

export default connect(mapStateToProps, {})(App);
