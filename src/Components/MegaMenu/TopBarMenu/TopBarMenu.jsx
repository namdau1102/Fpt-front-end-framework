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
                        <a className="item_link" href="">
                            <i className="fab fa-internet-explorer" />
                            Thông tin mua dịch
                        </a>
                    </li>
                    <li className="menu_item_w">
                        <a className="item_link" href="">
                            <i className="far color_icon fa-credit-card" />
                            Hướng dẫn thanh toán
                        </a>
                    </li>
                    <li className="menu_item_w">
                        <a className="item_link" href="">
                            <i className="fas fa-dolly" />
                            Chính sách bảo hành
                        </a>
                    </li>
                    <li className="menu_item_w">
                        <a href="" className="item_link">
                            <i className="fas fa-share-alt" />
                            Giới thiệu bạn bè
                        </a>
                    </li>
                    <li className="menu_item_w">
                        <a className="item_link" href="">
                            <i className="far fa-address-book" />
                            Liên hệ hợp tác
                        </a>
                    </li>
                </div>
            </div>
        </div>
    )
}