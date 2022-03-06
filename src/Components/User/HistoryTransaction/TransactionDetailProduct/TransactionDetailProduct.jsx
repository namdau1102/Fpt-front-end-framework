import { useState } from "react";
import { Link } from "react-router-dom";

export default function TransactionDetailProduct() {
    const [showKeyGame, SetShowKeyGame] = useState(false)
    return (
        <div className="detail_product">
            <div className="title_detail_user">
                <h2>
                    Chi tiết Sản phẩm # <b>214124124124</b>{" "}
                </h2>
                <p className="in_wq">Thông tin sản phẩm đã mua</p>
            </div>
            <div className="flex_detail_product">
                <div className="flex_detail_product_left flex_detail_item">
                    <h2 className="title_detail" >
                        Thông tin đơn hàng
                    </h2>
                    <ul className="list_detail_user">
                        <li className="item_detail">
                            <span>Mã sản phẩm : </span>
                            <p>#5274565</p>
                        </li>
                        <li className="item_detail">
                            <span>Ngày mua :</span>
                            <p> 2022-01-19 10:51:47</p>
                        </li>
                        <li className="item_detail">
                            <span>Key ứng dụng :</span>
                            <p className="pass_product_w">
                                {/* 2022-01-19 10:51:47 */}
                                {
                                    showKeyGame ? 'WRQ214124WJSMXA' : ''
                                }
                                <button onClick={() => SetShowKeyGame(!showKeyGame)} className="btn btn-hide-pass" type="button">
                                    {showKeyGame ? 'Tắt mã key' : 'Xem mã key'}
                                </button>
                            </p>
                        </li>
                        <li className="item_detail">
                            <span />
                            <p className="pass_product_w">
                                2022-01-19 10:51:47
                                <button className="btn btn-hide-pass" type="button">
                                    Báo lỗi
                                </button>
                            </p>
                        </li>
                        <li className="item_detail">
                            <span>Người nhận :</span>
                            <p>dnam4508@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="flex_detail_product_right flex_detail_item">
                    <h2 className="title_detail">Giá trị sản phẩm</h2>
                    <ul className="list_detail">
                        <li className="item_detail price_sum_cart">
                            Tổng giá trị sản phẩm : <p>240.000.000đ</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item_product_buy">
                <div className="image_text_w item_vwl_q">
                    <div className="image">
                        <img
                            src="https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Tien/Anh%20SP/7.7/G%20COIN%201000.png?hash=1625652188"
                            alt=""
                        />
                    </div>
                    <div className="name_w_prod item_vwl_q">
                        <h4>PUBG 1000 G-COIN</h4>
                        <p className="status_w">Đang chờ thanh toán </p>
                    </div>
                </div>
                <div className="quanlity item_vwl_q">
                    <span>Số lượng : 1</span>
                </div>
                <div className="price_product item_vwl_q">
                    <span>
                        Giá : <b>225.000đ</b>
                    </span>
                    <button button="button" className="btn btn-hd-key">
                        <i className="fas fa-info-circle" />
                        <Link to="" href="">Hướng dẫn nhập key</Link>
                    </button>
                </div>
            </div>
        </div>

    )
}