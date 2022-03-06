import { Link } from "react-router-dom";

export default function TableProductOrderMobile() {
    return (
        <>
            <div className="flex_cd_sts">
                <span className="code">
                    Mã đơn hàng : #5274565
                    <Link to="" href="">Chi tiết</Link>
                </span>
                <span className="status">
                    Tình trạng : <b>Đang chờ thanh toán</b>
                </span>
            </div>
            <div className="flex_date_sumPr">
                <span className="code">
                    Ngày đặt : <b>2022-01-09 10:51:27</b>
                </span>
                <span className="status">
                    Tổng tiền : <b>209.000đ</b>
                </span>
            </div>
            <div className="image_product">
                <div className="image_in_w">
                    <img
                        src="https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Tien/Anh%20SP/7.7/G%20COIN%201000.png?hash=1625652188"
                        alt=""
                    />
                </div>
            </div>
        </>

    )
}