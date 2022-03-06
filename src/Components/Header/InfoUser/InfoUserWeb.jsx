import { Link } from "react-router-dom";
import { formatPriceVND } from "../../Format/FormatPrice";
import { pathURLHome } from "../../Router/Path";

export default function InfoUserWeb({ dataUser, onLogout }) {
    return (
        <div className="navbar_user_info_w">
            <div className="col-user">
                <Link to={pathURLHome.INFORMATION_USER} className="fow-user">
                    <h4 className="text_user">Tài khoản : {dataUser && dataUser.hoVaTen}</h4>
                    <p>Số dư : {dataUser && formatPriceVND(dataUser.soDu)}</p>
                </Link>
                <ul className="menu-lv2-user">
                    <li className="item-menu-lv2">
                        <i class="fa-solid fa-coins color-icon"></i>
                        Số dư tài khoản
                    </li>
                    <li className="item-menu-lv2">
                        <b>{dataUser && formatPriceVND(dataUser.soDu)}</b>
                        <i class="fa-solid fa-circle-plus color-icon-add"></i>
                    </li>
                    <Link to={pathURLHome.INFORMATION_USER} className="item-menu-lv2">
                        <i class="fa-solid fa-bars-progress color-icon"></i>
                        Quản lí tài khoản
                    </Link>
                    <Link to={pathURLHome.INFORMATION_CART_LOG} className="item-menu-lv2">
                        <i class="fa-solid fa-cart-flatbed color-icon"></i>
                        Lịch sử đơn hàng
                    </Link>
                    <Link to={pathURLHome.INFORMATION_PRODUCT_FAVOURITE} className="item-menu-lv2">
                        <i class="fa-solid fa-heart color-icon"></i>
                        Sản phẩm yêu thích
                    </Link>
                    <li onClick={onLogout} className="item-menu-lv2">
                        <i class="fa-solid fa-arrow-right-from-bracket color-icon"></i>
                        Đăng xuất
                    </li>
                </ul>
            </div>

        </div>
    )
}