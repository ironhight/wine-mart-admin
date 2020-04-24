import React, { Component } from "react";
import _ from "lodash";
// import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import RateReviewIcon from "@material-ui/icons/RateReview";
import VisibilityIcon from "@material-ui/icons/Visibility";

// import * as DSSPAction from "../store/actions/danhSachSanPham.Action"
interface Props {
  DSSP: any;
  holder: string;
  id: string;
  textInput: any;
  keyWord: any;
}
interface State {}

class SearchTest extends Component<Props, State> {
  render() {
    let { DSSP, holder, id, textInput } = this.props;
    !_.isEmpty(DSSP) && id === "search_name"
      ? (DSSP = DSSP.filter((item: any) => {
          return item.name.toLowerCase().indexOf(textInput.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    !_.isEmpty(DSSP) && id === "search_barcode"
      ? (DSSP = DSSP.filter((item: any) => {
          return item.name.toLowerCase().indexOf(textInput.toLowerCase()) > -1;
        }))
      : console.log("ERROR");

    return (
      <div>
        <input
          type="text"
          placeholder={holder}
          id={id}
          onChange={e => {
            this.props.keyWord(e.target.value);
          }}
        />

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
      </div>
    );
  }
}

// const mapStateToProps = (state: any) => {
//   return {
//     DSSP: state.danhSachSpReducer
//   };
// };

// export default connect(mapStateToProps, null)(SearchTest);

export default SearchTest;
