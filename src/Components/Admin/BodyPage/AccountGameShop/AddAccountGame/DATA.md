<script>

      <div className="manager-account-add">
                <form onSubmit={props.getDataFormProduct} action="" method="post" className="upload-product">
                    <div className="upload-images item-form-w1">
                        <div className="ipn-upload">
                            {
                                props.isUpload.isLoading ? <LoadingUpload /> : ''
                            }
                            <img src={props.isUpload.data && props.isUpload.data.url} alt="" />
                            {props.children[6]}
                            <div className="text-upload">Tải hình ảnh sản phẩm lên</div>
                        </div>
                        <ul className="list-image-product">
                            {props.children[7]}
                        </ul>
                    </div>
                    <div className="note-add-product item-form-w2">
                        <h4 className="tile-note">Lưu ý khi đăng sản phẩm</h4>
                        <ul className="list-note-product">
                            <li className="item-note">
                                <p className="tiw">1 : Hình ảnh sản phẩm nhỏ hơn 5MB</p>
                            </li>
                            <li className="item-note">
                                <p className="tiw">
                                    2 : Mã sản phẩm có thể tự động tạo ( Không nhất thiết phải điền)
                                </p>
                            </li>
                            <li className="item-note">
                                <p className="tiw">
                                    3 : Mã giảm giá sẽ tạo có thẻ tạo đinh cho sản phẩm hoặc lựa chọn
                                </p>
                            </li>
                            <li className="item-note">
                                <p className="tiw">
                                    4 : Video giới thiệu sản phẩm nhỏ hơn 50MB và giới hạn là 5 video
                                    cho sản phẩm
                                </p>
                            </li>
                            <li className="item-note">
                                <p className="tiw">
                                    5 : Lựa chọn thanh toán phù hợp để thanh toán sản phẩm
                                </p>
                            </li>
                        </ul>
                    </div>
                    <ul className="text-input-w item-form-w3">
                        <li className="item-input-w">
                            <ul className="flex-price">
                                // <li className="item-price-w2">
                                //     <label className="text-product" htmlFor="name-product">
                                //         <i className="fa-solid fa-spell-check color-icon" />
                                //         Tên sản phẩm
                                //     </label>
                                //     <input onChange={props.onData} className="price-product-w1" type="text" name="tenSanPham" id="" />
                                // </li>
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-keyboard color-icon" />
                                        Mã sản phẩm
                                    </label>
                                    <input onChange={props.onData} className="code-sale-input" type="text" name="maSanPham" id="" />
                                </li>
                            </ul>
                        </li>
                        <li className="item-input-w">
                            <ul className="flex-price">
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-money-bill-wave color-icon" />
                                        Giá sản phẩm
                                    </label>
                                    <input onChange={props.onData} className="price-product-w1" type="text" name="giaSanPham" id="" />
                                </li>
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-percent color-icon" />
                                        Giảm giá
                                    </label>
                                    <input onChange={props.onData} className="code-sale-input" type="text" name="giamGia" id="" />
                                </li>
                                <li className="item-price-w2">
                                    <label
                                        className="text-product text-product-w2"
                                        htmlFor="name-product"
                                    >
                                        <i className="fa-solid fa-cube color-icon" />
                                        Mã giảm giá / Quà tặng
                                    </label>
                                    <input onChange={props.onData} className="code-sale-input-w2" type="text" name="maGiamGia" id="" />
                                </li>
                                <li className="item-price-w2">
                                    <label
                                        className="text-product text-product-w3"
                                        htmlFor="name-product"
                                    >
                                        <i className="fa-solid fa-money-check color-icon" />
                                        Đơn Vị Tiền
                                    </label>
                                    <select onChange={props.onData} name="donViTien" id="">
                                        <option value="">Chọn</option>
                                        {props.children[0]}
                                    </select>
                                </li>
                            </ul>
                            <div className="select-sale">
                                <ul className="flex-price">
                                    <li className="item-price-w2">
                                        <label className="text-product" htmlFor="">
                                            <i className="fa-solid fa-check-to-slot color-icon" />
                                            Loại Giảm Giá
                                        </label>
                                        <select onChange={props.onData} name="loaiGiamGia" id="">
                                            <option value={null}>Chọn</option>
                                            {props.children[1]}
                                        </select>
                                    </li>
                                    <li className="item-price-w2">
                                        <label className="text-product" htmlFor="">
                                            <i className="fa-solid fa-check-to-slot color-icon" />
                                            Danh mục
                                        </label>
                                        <select onChange={props.onData} name="danhMucSP" id="">
                                            <option value={null}>Chọn</option>
                                            {props.children[8]}
                                        </select>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li className="item-input-w">
                            <ul className="flex-price">
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-baseball color-icon" />
                                        Loại sản phẩm
                                    </label>
                                    <select onChange={props.onData} className="tinhTrang" name="gameBuy" id="">
                                        <option value={-1}>Chọn </option>
                                        <option value={0}>Tài khoản - Mật Khẩu cung cáp </option>
                                        <option value={1}>Key Game nhà phát hành</option>
                                        <option value={2}>Gửi thông tin qua Mail</option>
                                    </select>
                                </li>
                            </ul>
                        </li>
                        <li className="item-input-w select-acc-pw">
                            {props.children[9]}
                        </li>
                        <li className="item-input-w">
                            <ul className="flex-price">
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-layer-group color-icon" />
                                        Nhóm sản phẩm
                                    </label>
                                    <select onChange={props.onData} className="list-group-product" name="nhomSP" id="">
                                        {props.children[2]}
                                    </select>
                                    <button onClick={props.addGroupProduct} type="button" className="btn btn-add-group">
                                        <i className="fa-solid fa-circle-plus color-icon" />
                                        Thêm nhóm sản phẩm
                                    </button>
                                </li>
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-share-nodes color-icon" />
                                        Giới thiệu bạn bè
                                    </label>
                                    <ul className="checkbox-rw">
                                        <li className="item-checkbox">
                                            <h4>Có</h4>
                                            <input type="checkbox" name="shearFriendYes" id="" />
                                        </li>
                                        <li className="item-checkbox">
                                            <h4>Không</h4>
                                            <input type="checkbox" name="shearFriendNo" id="" />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item-input-w">
                            <ul className="flex-price">
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-list-ol color-icon" />
                                        Số lượng sản phẩm
                                    </label>
                                    <input onChange={props.onData} type="number" name="soLuongSanPham" id="" />
                                </li>
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-baseball color-icon" />
                                        Tình trạng
                                    </label>
                                    <select onChange={props.onData} className="tinhTrang" name="tinhTrang" id="">
                                        <option value={-1}>Chọn </option>
                                        <option value={0}>Hoạt động </option>
                                        <option value={1}>Không hoạt động </option>
                                    </select>
                                </li>
                            </ul>
                        </li>

                        <li className="item-input-w">
                            <ul className="flex-price">
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-layer-group color-icon" />
                                        Thanh toán
                                    </label>
                                    <select onChange={props.onData} className="list-wq-buy" name="thanhToan" id="">
                                        <option value={null}>Chọn</option>

                                        {props.children[3]}
                                    </select>
                                    <button className="btn-add-we" type="button" id="" name="">
                                        <i className="fa-solid fa-circle-plus color-icon" />
                                        Thêm thanh toán
                                    </button>
                                </li>
                                <li className="item-price-w2">
                                    <label className="text-product" htmlFor="name-product">
                                        <i className="fa-solid fa-credit-card color-icon" />
                                        Thanh toán qua thẻ
                                    </label>
                                    <ul className="checkbox-rw">
                                        <li className="item-checkbox">
                                            <h4>Có</h4>
                                            <input type="checkbox" name="payCardYes" id="" />
                                        </li>
                                        <li className="item-checkbox">
                                            <h4>Không</h4>
                                            <input type="checkbox" name="payCardNo" id="" />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="item-input-w">
                            <label className="text-product" htmlFor="name-product">
                                <i className="fa-solid fa-triangle-exclamation color-icon" />
                                Lưu ý
                            </label>
                            <textarea
                                onChange={props.onData}
                                className="text-not-product"
                                name="luuY"
                                id=""
                                cols={30}
                                rows={10}
                                defaultValue={""}
                            />
                        </li>
                        <li className="item-input-w-d editor-w">
                            {props.children[4]}
                        </li>
                    </ul>
                    <div className="btn-wop-w">
                        <div className="leftt-w">
                            <button type="button">
                                <i className="fa-solid fa-rotate-left color-icon" />
                                Xem sản phẩm trước
                            </button>
                        </div>
                        <div className="right-w">
                            <button type="reset">
                                <i className="fa-solid fa-rotate-left color-icon" />
                                Đặt lại toàn bộ
                            </button>
                            <button type="submit">
                                <i className="fa-solid fa-file-arrow-up color-icon" />
                                Đăng sản phẩm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
