import { Link } from "react-router-dom";

export default function OrderDetailProduct({ maDonHang, ngayMuaHang, tinhTrang, tongTien, soLuong, hinhAnh, tenSP, giaSP }) {
    return (
        <div className="detail_product">
            <div className="title_detail_user">
                <h2>
                    Chi tiết đơn hàng #<b>{maDonHang}</b>{" "}
                </h2>
                <p className="in_wq">
                    Hiển thị thông tin các sản phẩm bạn đã mua tại Divine Shop
                </p>
            </div>
            <div className="flex_detail_product">
                <div className="flex_detail_product_left flex_detail_item">
                    <h2 className="title_detail">Thông tin đơn hàng</h2>
                    <ul className="list_detail">
                        <li className="item_detail">
                            <span>Mã đơn hàng : </span>
                            <p>#{maDonHang}</p>
                        </li>
                        <li className="item_detail">
                            <span>Ngày tạo :</span>
                            <p> {ngayMuaHang}</p>
                        </li>
                        <li className="item_detail">
                            <span>Trạng thái đơn hàng :</span>
                            <p className="status_cart">
                                {
                                    tinhTrang === 2 || tinhTrang === 1 ? <>
                                        <div className="lds-dual-ring" />
                                        <p>Đang chờ thanh toán </p>
                                    </> : <p style={{ color: 'var(--bs-danger)' }}> Thanh toán thành công</p>
                                }
                            </p>
                            {/* <div className="lds-dual-ring" />
                            {tinhTrang === 2 ? "Đang chờ thanh toán" : 'Lỗi'} */}
                            <p />
                        </li>
                        <li className="item_detail">
                            <span>Người nhận :</span>
                            <p>dnam4508@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="flex_detail_product_right flex_detail_item">
                    <h2 className="title_detail">Giá trị đơn hàng</h2>
                    <ul className="list_detail">
                        <li className="item_detail price_sum_cart">
                            Tổng giá trị sản phẩm : <p>{tongTien}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="item_product_buy">
                <div className="image_text_w item_vwl_q">
                    <div className="image">
                        <img
                            src={hinhAnh}
                            alt=""
                        />
                    </div>
                    <div className="name_w_prod item_vwl_q">
                        <h4>{tenSP}</h4>
                        <p className="status_w">Đang chờ thanh toán </p>
                    </div>
                </div>
                <div className="quanlity item_vwl_q">
                    <span>Số lượng : {soLuong}</span>
                </div>
                <div className="price_product item_vwl_q">
                    <span>
                        Giá : <b>{giaSP}</b>
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