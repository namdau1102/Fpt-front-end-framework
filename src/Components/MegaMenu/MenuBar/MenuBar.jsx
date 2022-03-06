import { Link } from "react-router-dom";

export default function MenuBar() {
    return (
        <nav className="menu_bar_root">
            <ul className="mega_menu_bar">
                <li className="item_menu_bar">
                    <Link to="" className="item_link_mn">
                        <i className="fab fa-xbox color_icon" />
                        <span>Giải trí</span>
                    </Link>
                </li>
                <li className="item_menu_bar">
                    <Link to="" className="item_link_mn">
                        <i className="fas fa-atlas color_icon" />
                        <span>Làm việc</span>
                    </Link>
                </li>
                <li className="item_menu_bar">
                    <Link to="" className="item_link_mn">
                        <i className="fas fa-user-graduate color_icon" />
                        <span>Học tập</span>
                    </Link>
                </li>
                <li className="item_menu_bar">
                    <Link to="" className="item_link_mn">
                        <i className="fab fa-steam color_icon" />
                        <span>Game Stream</span>
                    </Link>
                </li>
                <li className="item_menu_bar">
                    <Link to="" className="item_link_mn">
                        <i className="fas fa-gamepad color_icon" />
                        <span>Game Origin</span>
                    </Link>
                </li>
                <li className="item_menu_bar">
                    <Link to="" className="item_link_mn">
                        <i className="fas fa-gamepad color_icon" />
                        <span>PUBG</span>
                    </Link>
                </li>
                <li className="item_menu_bar">
                    <Link to="" className="item_link_mn">
                        <i className="fab fa-xbox color_icon" />
                        <span>Google Play, iTunes</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}