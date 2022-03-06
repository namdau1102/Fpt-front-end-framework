import { Link } from "react-router-dom"
import { pathURLHome } from "../../Router/Path"
import { Slug } from "../../Slug/Slug"

export default function CartItem({ maSanPham, tenSanPham, giaSanPham, giamGia, giaGoc, hinhAnh, soLuong, onRemove, maGioHang }) {
    return (
        <li className="item_cart_product">
            <Link to={pathURLHome.INFORMATION_PRODUCT + '/' + maSanPham + "/" + Slug(tenSanPham)}>
                <div className="image">
                    <img
                        src={hinhAnh}
                        alt=""
                    />
                </div>
            </Link>
            <div className="rw_cl_text">
                <h6 className="name_product">
                    {tenSanPham}
                </h6>
                <div className="type_product">
                    <a href="">Movie</a>
                    <a href="">Học tập</a>
                </div>
                <div className="line_row_wid" />
                <div className="stt_product_rm">
                    <div className="status_w">
                        <i className="far fa-square" />
                        <div className="status_product">
                            Tình trạng :
                            <span className="status active_w">Còn hàng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quanlity_product">
                <form action="">
                    <button type="button" className="btn_w add_product">
                        -
                    </button>
                    <input
                        type="text"
                        defaultValue={soLuong}
                        className="ipn_product"
                    />
                    <button type="button" className="btn_w rm_product">
                        +
                    </button>
                </form>
            </div>
            <div className="price_product">
                <div className="price">
                    <h5 className="price_wq">{giaSanPham}</h5>
                    <div className="price_root_wq">
                        <div className="sale_q">{giamGia}%</div>
                        <div className="price_qw">{giaGoc}</div>
                    </div>
                </div>
                <div className="rm_pr">
                    <button type="button" onClick={() => onRemove(maGioHang)} className="remove_pr">
                        <i className="fas fa-trash-alt color_icon" />
                    </button>
                </div>
            </div>
        </li>
    )
}