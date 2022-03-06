import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pathURLAdmin } from "../../Router/Path";

export default function MenuLeft({ active, onActiveLink, valueNotiOrder }) {
    const [scroll, setScroll] = useState(0)
    const listenToScroll = () => {
        const position = window.pageYOffset;
        setScroll(position)
    }
    useEffect(() => {
        listenToScroll()
        window.addEventListener("scroll", listenToScroll);

        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, [scroll]);
    return (
        <div className="menu-left-w">
            <div className="menu-bar-top">
                <ul className="menu-top-lw">
                    <li className={active.isActive === 0 ? 'item-menu-w  active-menu' : 'item-menu-w'}>
                        <Link onClick={() => onActiveLink(0, 1)} to={pathURLAdmin.HOME} className="link-menu">
                            <div className="item-menu-pp">
                                <i className="fa-solid fa-bars-progress widget-color" />
                                <p>Trang quản lí</p>
                                <i className="fas fa-caret-right arrow-op-fd" />
                            </div>
                        </Link>
                        <ul className="root-item-menu-w2">
                            <Link
                                onClick={() => onActiveLink(0, 0)}
                                to={pathURLAdmin.HOME}
                                className={active.isActive === 0 && active.activeMenu === 0 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fa-solid fa-user color-icon" />
                                <p>Bảng điều khiển </p>
                            </Link>
                            <Link
                                onClick={() => onActiveLink(0, 1)}
                                to={pathURLAdmin.HOME}
                                className={active.isActive === 0 && active.activeMenu === 1 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fa-solid fa-clock-rotate-left color-icon" />
                                <p>Lịch sử giao dịch</p>
                            </Link>
                            <Link onClick={() => onActiveLink(0, 2)}
                                to={pathURLAdmin.PROFILE_USER_CTV}
                                className={active.isActive === 0 && active.activeMenu === 2 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fa-solid fa-money-bill color-icon" />
                                <p>Tài khoản của bạn</p>
                            </Link>
                            <li className="item-menu-w-v2">
                                <i className="fa-solid fa-bell color-icon" />
                                <p>Thông báo</p>
                            </li>
                        </ul>
                    </li>
                    <li className={active.isActive === 1 ? 'item-menu-w  active-menu' : 'item-menu-w'}>
                        <Link to={pathURLAdmin.MANAGER_ACCOUNT_USER} onClick={() => onActiveLink(1, 0)} href="" className="link-menu">
                            <div className="item-menu-pp">
                                <i className="fa-solid fa-address-book widget-color" />
                                <p>Tài khoản</p>
                                <i className="fas fa-caret-right arrow-op-fd" />
                            </div>
                        </Link>
                        <ul className="root-item-menu-w2">
                            <Link to={pathURLAdmin.MANAGER_ACCOUNT_USER}
                                onClick={() => onActiveLink(1, 0)}
                                className={active.isActive === 1 && active.activeMenu === 0 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fas fa-play color-icon" />
                                <p>Danh sách tài khoản</p>
                            </Link>
                            <li className="item-menu-w-v2">
                                <i className="fas fa-play color-icon" />
                                <p>Tài khoản nhân viên</p>
                            </li>
                            <li className="item-menu-w-v2">
                                <i className="fas fa-play color-icon" />
                                <p>Tài khoản quản trị</p>
                            </li>
                            <li className="item-menu-w-v2">
                                <i className="fas fa-play color-icon" />
                                <p>Tài khoản khách hàng</p>
                            </li>
                        </ul>
                    </li>
                    <li className={active.isActive === 2 ? 'item-menu-w  active-menu' : 'item-menu-w'}>
                        <Link onClick={() => onActiveLink(2, 0)} to={pathURLAdmin.MANAGER_ACCOUNT_GAME} className="link-menu">
                            <div className="item-menu-pp">
                                <i className="fa-solid fa-gamepad widget-color" />
                                <p>Sản phẩm</p>
                                <i className="fas fa-caret-right arrow-op-fd" />
                            </div>
                        </Link>
                        <ul className="root-item-menu-w2">
                            <Link
                                onClick={() => onActiveLink(2, 0)}
                                to={pathURLAdmin.MANAGER_ACCOUNT_GAME}
                                className={active.isActive === 2 && active.activeMenu === 0 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fas fa-play color-icon" />
                                <p>Toàn bộ sản phẩm</p>
                            </Link>
                            <Link
                                onClick={() => onActiveLink(2, 1)}
                                to={pathURLAdmin.ADD_ACCOUNT_GAME}
                                className={active.isActive === 2 && active.activeMenu === 1 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fas fa-play color-icon" />
                                <p>Thêm tài khoản</p>
                            </Link>
                            <Link
                                onClick={() => onActiveLink(2, 2)}
                                to={pathURLAdmin.ADD_ACCOUNT_GAME}
                                className={active.isActive === 2 && active.activeMenu === 2 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fas fa-play color-icon" />
                                <p>Sản phẩm đã xóa</p>
                            </Link>
                            <Link
                                onClick={() => onActiveLink(2, 3)}
                                to={pathURLAdmin.ADD_ACCOUNT_GAME}
                                className={active.isActive === 2 && active.activeMenu === 3 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                            >
                                <i className="fas fa-play color-icon" />
                                <p>Danh mục sản phẩm</p>
                            </Link>
                        </ul>
                    </li>
                    <li className={active.isActive === 3 ? 'item-menu-w  active-menu' : 'item-menu-w'}>
                        <li className="item-menu-w ">
                            <Link
                                onClick={() => onActiveLink(3, 0)}
                                to={pathURLAdmin.MANAGER_ORDER_PRODUCT}
                                className="link-menu">
                                <div className="item-menu-pp">
                                    <i className="fas fa-columns widget-color" />
                                    <p>Đơn hàng
                                        <p className="info-bell">
                                            {valueNotiOrder()}
                                        </p>
                                    </p>
                                    <i className="fas fa-caret-right arrow-op-fd" />
                                </div>

                            </Link>
                            <ul className="root-item-menu-w2">
                                <Link
                                    onClick={() => onActiveLink(3, 0)}

                                    to={pathURLAdmin.MANAGER_ORDER_PRODUCT}
                                    className={active.isActive === 3 && active.activeMenu === 0 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                                >
                                    <i className="fas fa-play color-icon" />
                                    <p>Danh sách đơn hàng</p>
                                </Link>
                                {/* <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Đơn hàng đang giao</p>
                                </li>
                                <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Đơn hàng bị hủy</p>
                                </li>
                                <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Đơn hàng đang chờ xác nhận</p>
                                </li> */}
                            </ul>
                        </li>
                    </li>
                    <li className={active.isActive === 4 ? 'item-menu-w  active-menu' : 'item-menu-w'}>
                        <li className="item-menu-w ">
                            <Link
                                onClick={() => onActiveLink(4, 0)}
                                to={pathURLAdmin.MANAGER_HISTORY_PRODUCT}
                                className="link-menu">
                                <div className="item-menu-pp">
                                    <i className="fas fa-columns widget-color" />
                                    <p>Lịch sử</p>
                                    <i className="fas fa-caret-right arrow-op-fd" />
                                </div>
                            </Link>
                            <ul className="root-item-menu-w2">
                                <Link
                                    onClick={() => onActiveLink(4, 0)}

                                    to={pathURLAdmin.MANAGER_HISTORY_PRODUCT}
                                    className={active.isActive === 4 && active.activeMenu === 0 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                                >
                                    <i className="fas fa-play color-icon" />
                                    <p>Lịch sử giao dịch</p>
                                </Link>
                                <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Đơn hàng đang giao</p>
                                </li>
                                <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Đơn hàng bị hủy</p>
                                </li>
                                <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Đơn hàng đang chờ xác nhận</p>
                                </li>
                            </ul>
                        </li>
                    </li>
                    <li className={active.isActive === 5 ? 'item-menu-w  active-menu' : 'item-menu-w'}>
                        <li className="item-menu-w ">
                            <Link
                                onClick={() => onActiveLink(5, 0)}
                                to={pathURLAdmin.MANAGER_HISTORY_PRODUCT}
                                className="link-menu">
                                <div className="item-menu-pp">
                                    <i class="fa-solid fa-images widget-color"></i>
                                    <p>Hình ảnh</p>
                                    <i className="fas fa-caret-right arrow-op-fd" />
                                </div>
                            </Link>
                            <ul className="root-item-menu-w2">
                                <Link
                                    onClick={() => onActiveLink(5, 0)}

                                    to={pathURLAdmin.MANAGER_HISTORY_PRODUCT}
                                    className={active.isActive === 5 && active.activeMenu === 0 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                                >
                                    <i className="fas fa-play color-icon" />
                                    <p>Quản lí kho hình ảnh</p>
                                </Link>
                                <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Quản lí thư mục</p>
                                </li>
                            </ul>
                        </li>
                    </li>
                    <li className={active.isActive === 6 ? 'item-menu-w  active-menu' : 'item-menu-w'}>
                        <li className="item-menu-w ">
                            <Link
                                onClick={() => onActiveLink(6, 0)}
                                to={pathURLAdmin.MANAGER_HISTORY_PRODUCT}
                                className="link-menu">
                                <div className="item-menu-pp">
                                    <i class="fa-solid fa-credit-card widget-color" ></i>
                                    <p>Thanh toán</p>
                                    <i className="fas fa-caret-right arrow-op-fd" />
                                </div>
                            </Link>
                            <ul className="root-item-menu-w2">
                                <Link
                                    onClick={() => onActiveLink(6, 0)}

                                    to={pathURLAdmin.MANAGER_HISTORY_PRODUCT}
                                    className={active.isActive === 6 && active.activeMenu === 0 ? 'item-menu-w-v2 active-menu-item' : 'item-menu-w-v2'}
                                >
                                    <i className="fas fa-play color-icon" />
                                    <p>Danh sách thanh toán</p>
                                </Link>
                                <li className="item-menu-w-v2">
                                    <i className="fas fa-play color-icon" />
                                    <p>Thanh toán chưa xử lí</p>
                                </li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    )
}