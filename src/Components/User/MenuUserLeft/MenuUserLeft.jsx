import { Link } from "react-router-dom";
import { pathURLHome } from "../../Router/Path";

export default function MenuUserLeft(props) {
    return (

        <div className="mega_menu_list">
            <ul className="root_menu_slider">
                <Link to={pathURLHome.INFORMATION_USER} className={props.isPageID === 0 ? 'item_menu_slider active_menu' : 'item_menu_slider'}>
                    <i className="fas fa-user color_icon" />
                    <span>Tài khoản</span>
                </Link>
                <Link to={pathURLHome.INFORMATION_CART_LOG} className={props.isPageID === 1 ? 'item_menu_slider active_menu' : 'item_menu_slider'}>
                    <i className="fas fa-shopping-cart color_icon" />
                    <span>Lịch sử đơn hàng</span>
                </Link>
                <Link to={pathURLHome.INFORMATION_TRANSACTION} className={props.isPageID === 2 ? 'item_menu_slider active_menu' : 'item_menu_slider'}>
                    <i className="fas fa-credit-card color_icon" />
                    <span>Lịch sử giao dịch</span>
                </Link>
                <Link to={pathURLHome.CHANGE_PASSWORD_USER} className={props.isPageID === 3 ? 'item_menu_slider active_menu' : 'item_menu_slider'}>
                    <i className="fas fa-user-lock color_icon" />
                    <span>Mật khẩu và bảo mật</span>
                </Link>
                <Link to={pathURLHome.PRODUCT_FAVOURITE} className={props.isPageID === 4 ? 'item_menu_slider active_menu' : 'item_menu_slider'}>
                    <i className="fas fa-heart color_icon" />
                    <span>Sản phẩm yêu thích</span>
                </Link>
                <Link to={pathURLHome.ADD_PRICE_USER_MENU} className={props.isPageID === 5 ? 'item_menu_slider active_menu' : 'item_menu_slider'}>
                    <i class="fa-solid fa-coins color_icon"></i>
                    <span>Nạp tiền</span>
                </Link>
                <li className="item_menu_slider">
                    <i className="fas fa-share-alt color_icon" />
                    <span>Giới thiệu bạn bè</span>
                </li>
            </ul>
        </div>

    )
}