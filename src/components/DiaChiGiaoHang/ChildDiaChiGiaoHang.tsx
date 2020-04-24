import React, { Component } from "react";
import _ from "lodash";

interface Props {
  DCGH: any;
}

interface State {}

class ChildDiaChiGiaoHang extends Component<Props, State> {
  render() {
    const { DCGH } = this.props;
    return (
      <>
        {!_.isEmpty(DCGH)
          ? DCGH.map((product: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{product.phoneNumber}</td>
                <td>{product.name}</td>
                <td>{product.province}</td>
                <td>{product.county}</td>
                <td>{product.subCounty}</td>
                <td>{product.address}</td>
              </tr>
            ))
          : null}
      </>
    );
  }
}

export default ChildDiaChiGiaoHang;
