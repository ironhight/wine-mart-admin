import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import _ from "lodash";
import * as loaiSpActions from "../../store/actions/loaiSanPham.Actions";
import { connect } from "react-redux";

interface Props {
  // getLoaiSP: any;
  loaiSP: any;
}
interface State {}

class ChildLoaiSanPham extends Component<Props, State> {
  // componentDidMount() {
  //   this.props.getLoaiSP();
  // }

  render() {
    const { loaiSP } = this.props;
    console.log("ChildLoaiSanPham -> render -> loaiSP", loaiSP);

    return (
      <>
        {!_.isEmpty(loaiSP)
          ? loaiSP.map((product: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{product.danhMuc}</td>
                <td>{product.name}</td>
                <td>
                  <img src={product.hinhAnh} width="120px" alt="" />
                </td>
                <td>{product.ngayTao}</td>
                <td>{product.ngaySua}</td>

                <td>
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
//     getLoaiSP: () => {
//       dispatch(loaiSpActions.getLoaiSP());
//     }
//   };
// };

// const mapStateToProps = (state: any) => {
//   return {
//     loaiSP: state.loaiSpReducer
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ChildLoaiSanPham);

export default ChildLoaiSanPham;
