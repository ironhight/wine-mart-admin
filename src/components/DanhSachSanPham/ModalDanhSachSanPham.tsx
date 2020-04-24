import React, { Component } from "react";

class ModalDanhSachSanPham extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelDanhSachSanPham"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Thêm mới sản phẩm</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-6">
                    <div className="row form-group">
                      <label className="col-4 text-right">Loại sản phẩm</label>
                      <div className="col-8">
                        <select
                          name="typeID"
                          className="form-control"
                          required={true}
                        >
                          <option value="0">--Chọn loại sản phẩm</option>
                          <option value="1">abcd</option>
                          <option value="2">xyzt</option>
                          <option value="3">Rum</option>
                          <option value="4">Volca</option>
                          <option value="5">Gin</option>
                          <option value="6">Brandy</option>
                          <option value="7">Whisky</option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Mã sản phẩm</label>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control"
                          name="productBarcode"
                          required={true}
                          placeholder="Nhập mã sản phẩm"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Tên sản phẩm</label>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control"
                          name="productName"
                          required={true}
                          placeholder="Nhập tên sản phẩm"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Giá sản phẩm</label>
                      <div className="col-8">
                        <input
                          type="text"
                          className="form-control autoNum"
                          name="productPrice"
                          required={true}
                          placeholder="Nhập giá sản phẩm"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Số lượng</label>
                      <div className="col-8">
                        <input
                          type="number"
                          className="form-control"
                          name="productQuatily"
                          required={true}
                          placeholder="Nhập số lượng sản phẩm"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Dung tích</label>
                      <div className="col-8">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            name="productCapactily"
                            required={true}
                            placeholder="Nhập dung tích"
                          />
                          <div className="input-group-prepend">
                            <span className="input-group-text">ml</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">
                        Sản phẩm tốt nhất
                      </label>
                      <div className="col-8">
                        <select
                          name="productIsBestwine"
                          className="form-control"
                        >
                          <option value="0">Không</option>
                          <option value="1">Có</option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Ảnh Background</label>
                      <div className="col-8">
                        <input
                          type="file"
                          id="productImgBackground"
                          name="productImgBackground"
                          required={true}
                          style={{ fontSize: "13px", marginTop: "7px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4"></div>
                      <div className="col-8">
                        <img src="" alt="#" className="noming  " />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row form-group">
                      <label className="col-4 text-right">Loại nho</label>
                      <div className="col-8">
                        <select name="grapeID" className="form-control">
                          <option value="0">--Chọn loại nho--</option>
                          <option value="1">abc</option>
                          <option value="2">Pinot Meunier</option>
                          <option value="3">xyz</option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Quốc gia</label>
                      <div className="col-8">
                        <select name="countryID" className="form-control">
                          <option value="0">--Chọn quốc gia--</option>
                          <option value="1">Việt Nam</option>
                          <option value="2">Úc</option>
                          <option value="3">Singapore</option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">
                        Nhà máy sản xuất
                      </label>
                      <div className="col-8">
                        <select name="wineryID" className="form-control">
                          <option value="0">--Chọn nhà máy sản xuất--</option>
                          <option value="1">abc</option>
                          <option value="2">Pinot Meunier</option>
                          <option value="3">xyz</option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Năm hái nho</label>
                      <div className="col-8">
                        <input
                          type="number"
                          className="form-control"
                          name="productVintage"
                          placeholder="Nhập năm hái nho"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Nồng độ cồn</label>
                      <div className="col-8">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            name="productABV"
                            placeholder="Nhập nồng độ cồn"
                          />
                          <div className="input-group-prepend">
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">
                        Sản phẩm mạnh nhất
                      </label>
                      <div className="col-8">
                        <select
                          name="productIsBestspirit"
                          className="form-control"
                        >
                          <option value="0">Không</option>
                          <option value="1">Có</option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Sản phẩm thuộc</label>
                      <div className="col-8">
                        <select
                          name="productOfWinemart"
                          className="form-control"
                        >
                          <option value="0">Sản phẩm của Winemart</option>
                          <option value="1">Sản phẩm từ nguồn khác</option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-4 text-right">Ảnh sản phẩm</label>
                      <div className="col-8">
                        <input
                          type="file"
                          name="productImgBottle"
                          id="productImgBottle"
                          style={{ fontSize: "13px", marginTop: "7px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-8">
                      <img
                        src=""
                        alt="#"
                        className="noming  "
                        id="uploadImgBottle"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label style={{ fontWeight: "bold" }}>Thức ăn kèm</label>
                    <div className="row">
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="11" name="pairings[]" />
                          <span className="checkmark"></span>
                          Gỏi sứa
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="10" name="pairings[]" />
                          <span className="checkmark"></span>
                          Rau củ
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="9" name="pairings[]" />
                          <span className="checkmark"></span>
                          Pasta
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="8" name="pairings[]" />
                          <span className="checkmark"></span>
                          Cá ngừ đại dương
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="7" name="pairings[]" />
                          <span className="checkmark"></span>
                          Cá hồi
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="6" name="pairings[]" />
                          <span className="checkmark"></span>
                          Thịt gà
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="5" name="pairings[]" />
                          <span className="checkmark"></span>
                          Thịt heo
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="3" name="pairings[]" />
                          <span className="checkmark"></span>
                          Thịt cừu
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="2" name="pairings[]" />
                          <span className="checkmark"></span>
                          Thịt bê
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="1" name="pairings[]" />
                          <span className="checkmark"></span>
                          Thịt bò
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label style={{ fontWeight: "bold" }}>Phong cách làm</label>
                    <div className="row">
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="10" name="styles[]" />
                          <span className="checkmark"></span>
                          Alsace Gewurztraminer
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="11" name="styles[]" />
                          <span className="checkmark"></span>
                          New Zealand Sauvignon Blanc
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="10" name="styles[]" />
                          <span className="checkmark"></span>
                          Northern Italy White
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="9" name="styles[]" />
                          <span className="checkmark"></span>
                          Californian Zinfandel
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="8" name="styles[]" />
                          <span className="checkmark"></span>
                          Portuguese Port
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="7" name="styles[]" />
                          <span className="checkmark"></span>
                          Northern Italia Pinot Grigio
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="6" name="styles[]" />
                          <span className="checkmark"></span>
                          France Champagne
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="5" name="styles[]" />
                          <span className="checkmark"></span>
                          Californian Merlot
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="4" name="styles[]" />
                          <span className="checkmark"></span>
                          Southwest France Malbec
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="3" name="styles[]" />
                          <span className="checkmark"></span>
                          Bordeaux Saint-Émilion
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="2" name="styles[]" />
                          <span className="checkmark"></span>
                          Chilean Cabernet Sauvignon
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="1" name="styles[]" />
                          <span className="checkmark"></span>
                          Spanish Rioja Red
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label style={{ fontWeight: "bold" }}>Vùng/Tiểu vùng</label>
                    <div className="row">
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="10" name="regions[]" />
                          <span className="checkmark"></span>
                          Alsace Gewurztraminer
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="11" name="regions[]" />
                          <span className="checkmark"></span>
                          New Zealand Sauvignon Blanc
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="10" name="regions[]" />
                          <span className="checkmark"></span>
                          Northern Italy White
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="9" name="regions[]" />
                          <span className="checkmark"></span>
                          Californian Zinfandel
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="8" name="regions[]" />
                          <span className="checkmark"></span>
                          Portuguese Port
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="7" name="regions[]" />
                          <span className="checkmark"></span>
                          Northern Italia Pinot Grigio
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="6" name="regions[]" />
                          <span className="checkmark"></span>
                          France Champagne
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="5" name="regions[]" />
                          <span className="checkmark"></span>
                          Californian Merlot
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="4" name="regions[]" />
                          <span className="checkmark"></span>
                          Southwest France Malbec
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="3" name="regions[]" />
                          <span className="checkmark"></span>
                          Bordeaux Saint-Émilion
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="2" name="regions[]" />
                          <span className="checkmark"></span>
                          Chilean Cabernet Sauvignon
                        </label>
                      </div>
                      <div className="col-4">
                        <label className="divCheck">
                          <input type="checkbox" value="1" name="regions[]" />
                          <span className="checkmark"></span>
                          Spanish Rioja Red
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="switch">
                      <input type="checkbox" value="1" name="productIsActive" />
                      <span className="slider round"></span>
                      <div
                        style={{
                          fontWeight: "bold",
                          left: "5%",
                          position: "absolute",
                          top: "41%"
                        }}
                      >
                        Kích hoạt bán hàng
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Hủy
                </button>
                <button type="submit" className="btn btn-success">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDanhSachSanPham;
