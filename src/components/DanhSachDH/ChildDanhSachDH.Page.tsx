import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import RateReviewIcon from "@material-ui/icons/RateReview";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PrintIcon from "@material-ui/icons/Print";
import { connect } from "react-redux";
import _ from "lodash";
import * as DSSPAction from "../../store/actions/danhSachSanPham.Action";

interface Props {
  DSDH: any;
}

interface State {}

class ChildDanhSachDH extends Component<Props, State> {
  render() {
    const { DSDH } = this.props;
    console.log(DSDH);
    return (
      <>
        {!_.isEmpty(DSDH)
          ? DSDH.map((product: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{product.maDH}</td>
                <td>{product.nguon}</td>
                <td>{product.khachHang}</td>
                <td>{product.phoneNumber}</td>
                <td>{product.soLuong}</td>
                <td>{product.soLuong}</td>
                <td>{product.ngayGiao}</td>
                <td></td>
                <td>{product.hinhThucMua}</td>
                <td>
                  {product.phuongThuc ? (
                    <div className="status-success">Online</div>
                  ) : (
                    <div className="status-fail">Offline</div>
                  )}
                </td>
                <td>{product.trangThai}</td>
                <td>
                  <VisibilityIcon />
                  <PrintIcon />
                </td>
              </tr>
            ))
          : null}
      </>
    );
  }
}

export default ChildDanhSachDH;
