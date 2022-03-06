import { Link } from "react-router-dom";
import { pathURLHome } from "../../../../Router/Path";

export default function ItemOrderProduct({ ngayDatHang, maDonHang, tenSanPham, soLuong, tongTien, trangThai, page }) {
    return (
        <tr className="col_cart_t" tabIndex={1}>
            <td className="item_cart">
                <p className="date">{ngayDatHang}</p>
            </td>
            <td className="item_cart">{maDonHang}</td>
            <td className="item_cart ">
                <div className="flex_name_q">
                    <span className="name_cart">{tenSanPham}</span>
                    <span className="quanlity_cart">x{soLuong}</span>
                </div>
            </td>
            <td className="item_cart">
                <span className="sum_cart">{tongTien}</span>
            </td>
            <td className="item_cart">
                <span className="status_cart suggest_status">

                    {
                        trangThai === 2 || trangThai === 1 ? <>
                            <div className="lds-dual-ring" />
                            <p>Đang chờ thanh toán </p>
                        </> : <p style={{ color: 'var(--bs-danger)' }}> Thanh toán thành công</p>
                    }

                </span>
            </td>

            <td className="item_cart info_cart">
                <Link to={pathURLHome.DETAIL_ORDER_PRODUCT + "/" + maDonHang + "?page=" + page}>
                    Chi tiết
                </Link>
            </td>
        </tr>
    )
}
