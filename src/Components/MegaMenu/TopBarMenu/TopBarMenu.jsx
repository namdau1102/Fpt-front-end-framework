import { Link } from "react-router-dom";

export default function TopBarMenu() {
    return (
        <div className="flex_mn_fw_inner">
            <div className="menu_fw">
                <span className="menu_navbar">
                    <i className="fas fa-bars color_icon" />
                    Danh mục sản phẩm
                </span>
                <div className="primary_menu_image">
                    <li className="menu_item_w">
                        <Link to="" className="item_link" >
                            <i className="fab fa-internet-explorer" />
                            Thông tin mua dịch
                        </Link>
                    </li>
                    <li className="menu_item_w">
                        <Link to="" className="item_link" >
                            <i className="far color_icon fa-credit-card" />
                            Hướng dẫn thanh toán
                        </Link>
                    </li>
                    <li className="menu_item_w">
                        <Link to="" className="item_link" >
                            <i className="fas fa-dolly" />
                            Chính sách bảo hành
                        </Link>
                    </li>
                    <li className="menu_item_w">
                        <Link to="" className="item_link">
                            <i className="fas fa-share-alt" />
                            Giới thiệu bạn bè
                        </Link>
                    </li>
                    <li className="menu_item_w">
                        <Link to="/" className="item_link" >
                            <i className="far fa-address-book" />
                            Liên hệ hợp tác
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}