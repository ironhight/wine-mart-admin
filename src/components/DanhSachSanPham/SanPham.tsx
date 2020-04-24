import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import RateReviewIcon from "@material-ui/icons/RateReview";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { connect } from "react-redux";
import _ from "lodash";
import * as DSSPAction from "../../store/actions/danhSachSanPham.Action";

interface Props {
  // index: number;
  // product: any;
  // getDSSP: any;
  DSSP: any;
}

interface State {}

class SanPham extends Component<Props, State> {
  // componentDidMount() {
  //   this.props.getDSSP();
  // }

  render() {
    const { DSSP } = this.props;
    console.log(DSSP);
    // console.log("Product -> render -> product", product);
    // console.log("Product -> render -> index", index);
    return (
      <>
        {!_.isEmpty(DSSP)
          ? DSSP.map((product: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{product.maSP}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.hinhAnh} width="100px" alt="" />
                </td>
                <td>{product.gia}</td>
                <td>{product.diemReview}</td>
                <td>{product.soLuong}</td>
                <td>
                  {product.state ? (
                    <div className="status-success">Đã kích hoạt</div>
                  ) : (
                    <div className="status-fail">Chưa kích hoạt</div>
                  )}
                </td>
                <td>
                  <RateReviewIcon />
                  <VisibilityIcon />
                  <EditIcon />
                  <DeleteIcon />
                </td>
              </tr>
            ))
          : null}
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     getDSSP: () => {
//       dispatch(DSSPAction.getDanhSachSP());
//     }
//   };
// };

// const mapStateToProps = (state: any) => {
//   return {
//     DSSP: state.danhSachSpReducer
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SanPham);
export default SanPham;
