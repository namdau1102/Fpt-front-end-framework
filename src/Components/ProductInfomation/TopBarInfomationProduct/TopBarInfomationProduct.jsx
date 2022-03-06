export default function TopBarInfomationProduct(props) {
    return (
        <div className="bd_product_game">
            <div className="container">
                <div className="inner_info_product">
                    <div className="inner_left">
                        <ul className="img_product_slider">
                            <li className="item_img_product">
                                <img
                                    src={props.dataInfoProduct && props.dataInfoProduct[0].linkHinhAnh}
                                    alt=""
                                />
                            </li>
                        </ul>
                        <div className="load_img_wq">
                            <span>Xem thêm hình ảnh</span>
                        </div>
                    </div>
                    <div className="inner_right">
                        <div className="text_product_left">
                            <div className="title_topbar">
                                <span>Sản phẩm</span>
                            </div>
                            <div className="name_product">
                                <h3>{props.dataInfoProduct && props.dataInfoProduct[0].tenSanPham}</h3>
                            </div>
                            <div className="status_product">
                                <i className="fab fa-codepen color_icon" />
                                Tình trạng :<span className="status">{props.checkQuanLityProduct(props.dataInfoProduct && props.dataInfoProduct[0].soLuongSP, props.dataInfoProduct && props.dataInfoProduct[0].tinhTrang)}</span>
                            </div>
                            <div className="tag_list_product">
                                <i className="fas fa-tag color_icon" />
                                Thể loại :<span className="status">{props.resultTypeProduct(props.dataInfoProduct && props.dataInfoProduct[0].theLoaiSP)}</span>
                            </div>
                            <div className="price_product">
                                <span className="text_price price_rw_1">{props.formatPriceVND(props.resultPriceSale(props.dataInfoProduct && props.dataInfoProduct[0].giaSanPham, props.dataInfoProduct && props.dataInfoProduct[0].giamGia))}</span>
                                <span className="text_price price_rw_2">{props.formatPriceVND(props.dataInfoProduct && props.dataInfoProduct[0].giaSanPham)}</span>
                                <div className="pow_sale_q">
                                    <span>-{props.dataInfoProduct && props.dataInfoProduct[0].giamGia}%</span>
                                </div>
                            </div>
                            <div className="list-item-quanlity">
                                <label htmlFor="">Số lượng</label>
                                <div className="flex-quanlity">
                                    <i class="fa-solid fa-minus color-icon color-icon-add"></i>
                                    <input onChange={props.onSetDataProductc} type="number" name="quanlityProduct" id="" />
                                    <i class="fa-solid fa-plus color-icon color-icon-miuns"></i>

                                </div>
                            </div>
                            <div className="list_product_group">
                                <h4 className="title">Sảm phẩm cùng nhóm</h4>
                                <ul className="product_group_info">
                                    {props.showProductGroups(props.dataGroupProductfk && props.dataGroupProductfk)}
                                </ul>
                            </div>

                            <div className="wq_bell_q_like">
                                <li className="item_notifica">
                                    <i className="fas fa-bell" />
                                </li>
                                <li className="item_notifica">
                                    <i className="fas fa-heart" />
                                </li>
                            </div>
                            <div className="active_pack_data">
                                <span>Chọn gói cước</span>
                                <ul className="pack_data_roow">
                                    <li className="item_data_wq active_data">3 tháng</li>
                                    <li className="item_data_wq">6 tháng</li>
                                    <li className="item_data_wq">9 tháng</li>
                                </ul>
                            </div>
                            <div className="btn_buy_add">
                                {
                                    props.dataInfoProduct && props.dataInfoProduct[0].tinhTrang === 0 &&
                                        props.dataInfoProduct && props.dataInfoProduct[0].soLuongSP > 0
                                        ? <>
                                            <button onClick={() => props.postCart('PAY', props.dataInfoProduct && props.dataInfoProduct, props.dataInfoProduct && props.dataInfoProduct[0].maSanPham, props.resultPriceSale(props.dataInfoProduct && props.dataInfoProduct[0].giaSanPham, props.dataInfoProduct && props.dataInfoProduct[0].giamGia))} type="button" className="btn_w btn_buy">
                                                <i className="fas fa-credit-card color_icon" />
                                                Mua ngay
                                            </button>
                                            <button onClick={() => props.postCart('ADD', props.dataInfoProduct && props.dataInfoProduct, props.dataInfoProduct && props.dataInfoProduct[0].maSanPham, props.resultPriceSale(props.dataInfoProduct && props.dataInfoProduct[0].giaSanPham, props.dataInfoProduct && props.dataInfoProduct[0].giamGia))} type="button" className="btn_w btn_add_cart">
                                                <i className="fas fa-cart-plus" />
                                                Thêm vào giỏ hàng
                                            </button>
                                        </>
                                        : <>
                                            <button onClick={() => alert("Sản phẩm hiện tại không mua được nhé")} type="button" className="btn_w btn_error">
                                                <i class="fa-solid fa-triangle-exclamation"></i>
                                                HIỆN ĐANG CẬP NHẬT HOẶC HẾT HÀNG
                                            </button>
                                        </>
                                }


                            </div>

                        </div>

                        <div className="text_product_right">
                            <h3 className="code_product">
                                Mã sản phẩm
                                <p
                                    className="code">{props.dataInfoProduct && props.dataInfoProduct[0].maSanPham}
                                </p>
                            </h3>
                            <div className="shear_profile">
                                <h3 className="w">Giới thiệu bạn bè</h3>
                                <p className="inner_text">
                                    Bạn bè được giảm 5% giá sản phẩm và bạn nhận hoa hồng vĩnh viễn.
                                </p>
                                <div className="text_shear_link">
                                    <input type="text" disabled name="" id="" value={window.location.href} />
                                    <button onClick={() => props.copyLinkShearFriend(window.location.href)} type="button" className="btn btn-copy">
                                        <i className="far fa-copy color_icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}