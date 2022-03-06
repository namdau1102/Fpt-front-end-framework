import { Link } from "react-router-dom";
import { pathURLHome } from "../../../../Router/Path";

export default function TableTransaction() {
    return (
        <table>
            <thead>
                <tr className="row_title">
                    <th className="title_t">Thời gian</th>
                    <th className="title_t">Mã đơn hàng</th>
                    <th className="title_t">Sản phẩm</th>
                    <th className="title_t">Tổng tiền</th>
                    <th className="title_t"></th>
                </tr>
            </thead>
            <tbody>

                <tr className="col_cart_t">
                    <td className="item_cart">2022-01-19 10:51:47</td>
                    <td className="item_cart">5274565</td>
                    <td className="item_cart ">
                        <div className="flex_name_q">
                            <span className="name_cart">PUBG 1000 G-COIN</span>
                            <span className="quanlity_cart">x1</span>
                        </div>
                    </td>
                    <td className="item_cart">
                        <span className="sum_cart">225.000đ</span>
                    </td>
                    <td className="item_cart info_cart">
                        <Link to={pathURLHome.DETAIL_BUY_PRODUCT_TK}>
                            Chi tiết
                        </Link>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}