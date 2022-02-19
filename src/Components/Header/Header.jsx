import { Link } from "react-router-dom";
import Login from "../Form/Login/Login";
import { pathURLHome } from "../Router/Path";

export default function Header() {
    return (
        <>
            <Login />
            <div className="header_root">
                <div className="topbar">
                    <div className="container">
                        <div className="list_link_flex">
                            <div className="list_left_w item_flex_link">
                                <li className="item_list">
                                    <i className="fas fa-link color_icon" />
                                    <a className="text" href="">
                                        Tham gia với chung tôi để trở thành CTV
                                    </a>
                                </li>
                            </div>
                            <div className="list_right_w item_flex_link">
                                <li className="item_list">
                                    <i className="fas fa-book color_icon" />
                                    <a className="text" href="">
                                        Hướng dẫn mua hàng
                                    </a>
                                </li>
                                <li className="item_list">
                                    <i className="fas fa-gift color_icon" />
                                    <a className="text" href="">
                                        Ưu đãi khách hàng
                                    </a>
                                </li>
                                <li className="item_list">
                                    <i className="fas fa-phone-alt color_icon" />
                                    <a className="text" href="">
                                        Thông tin liên hệ
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <div className="container">
                        <div className="list_flex_navbar top_list">
                            <div className="menu_mobie_fixed">
                                <i onclick="showMenu()" className="fas fa-bars color_icon" />
                                <div id="mobie_wqp">
                                    <div className="bgrd_wp">
                                        <div className="menu_mobie_lw">
                                            <div className="topbar_menu_mb">
                                                <div className="flex_lg_nm">
                                                    <div className="image">
                                                        {/* <img src="https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"
                                                  alt=""> */}
                                                        <img
                                                            src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                    {/* <div class="col_row_nm">
                                              <h4 class="name">namdau1102</h4>
                                              <span class="price_us">Số dư : 0 đ</span>
                                          </div> */}
                                                    <div className="col_row_nm">
                                                        {/* <h4 class="name">namdau1102</h4>
                                              <span class="price_us">Số dư : 0 đ</span> */}
                                                        <button className="btn_login_rg" type="submit">
                                                            Đăng nhập / Đăng kí
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="sw_exit_p">
                                                    <i
                                                        onclick="showMenu()"
                                                        className="fas fa-times color_icon"
                                                    />
                                                </div>
                                            </div>
                                            <div className="bd_menu_wq">
                                                <ul className="list_menu_root">
                                                    <div className="hm_id_q">
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-home color_icon" />
                                                            <span className="text">Trang chủ</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-plus-circle color_icon" />
                                                            <span className="text">Nạp tiền vào tài khoản</span>
                                                        </li>
                                                    </div>
                                                    <div className="op_id_q">
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-user color_icon" />
                                                            <span className="text">Quản lí tài khoản</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-shopping-cart color_icon" />
                                                            <span className="text">Lịch sử đơn hàng</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-credit-card color_icon" />
                                                            <span className="text">Lịch sử giao dịch</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-heart color_icon" />
                                                            <span className="text">Sản phẩm yêu thích</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-share-alt-square color_icon" />
                                                            <span className="text">Giới thiệu bạn bè</span>
                                                        </li>
                                                    </div>
                                                    <div className="op_id_q">
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-gamepad color_icon" />
                                                            <span className="text">Giải trí</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-toolbox color_icon" />
                                                            <span className="text">Làm việc</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-book color_icon" />
                                                            <span className="text">Học tập</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fab fa-steam-square color_icon" />
                                                            <span className="text">Game Stream</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-home color_icon" />
                                                            <span className="text">Game Origin</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-gamepad color_icon" />
                                                            <span className="text">PUBG</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-plus-circle color_icon" />
                                                            <span className="text">Stream Wallet</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-gamepad color_icon" />
                                                            <span className="text">Gói Data Mobile</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fab fa-google-play color_icon" />
                                                            <span className="text">Google Play, iTunes</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fab fa-xbox color_icon" />
                                                            <span className="text">Xbox Gift Card</span>
                                                        </li>
                                                    </div>
                                                    <div className="op_id_q">
                                                        <li className="item_menu_q">
                                                            <i className="far fa-file-alt color_icon" />
                                                            <span className="text">Hướng dẫn mua hàng</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-gift color_icon" />
                                                            <span className="text">Ưu đãi khách hàng</span>
                                                        </li>
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-question-circle color_icon" />
                                                            <span className="text">Thông tin liên hệ</span>
                                                        </li>
                                                    </div>
                                                    <div className="op_id_q">
                                                        <li className="item_menu_q">
                                                            <i className="fas fa-sign-out-alt color_icon" />
                                                            <span className="text">Đăng xuất</span>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/" className="navbar_logo_brand">
                                <img
                                    className="logo_brand"
                                    src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg"
                                    alt=""
                                />
                            </Link>
                            <div className="navbar_search_pw">
                                <div className="search_list_wq_o">
                                    <input
                                        className="ipn_text_search"
                                        type="search"
                                        name=""
                                        id=""
                                        placeholder="Tìm kiếm sản phẩm"
                                    />
                                    <div className="list_search_nvb">
                                        <ul className="root_list_w">
                                            <li className="item_txt_seach">
                                                <p className="text">Tài khoản PUBG</p>
                                                <i className="far fa-trash-alt" />
                                            </li>
                                            <li className="item_txt_seach">
                                                <p className="text">Tài khoản PUBG</p>
                                                <i className="far fa-trash-alt" />
                                            </li>
                                            <li className="item_txt_seach">
                                                <p className="text">Tài khoản PUBG</p>
                                                <i className="far fa-trash-alt" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <i className="fas fa-search color_icon" />
                            </div>
                            <div className="navbar_user_info_w">
                                <i className="fas fa-user color_icon" />
                                <h4 className="text_user">Đăng nhập / Đăng ký</h4>
                            </div>
                            <Link to={pathURLHome.CART}>
                                <div className="navbar_cart_user">
                                    <i className="fas fa-shopping-cart color_icon" />
                                    <h4 className="text_cart">Giỏ hàng</h4>
                                    <span className="quanlity_cart">14</span>
                                </div>
                            </Link>
                        </div>
                        <div className=" list_flex_navbar bottom_list">
                            <a className="navbar_link_iw">
                                <i className="fas color_icon fa-eye" />
                                <h4 className="text_item">Sản phẩm bạn vừa xem</h4>
                            </a>
                            <a className="navbar_link_iw">
                                <i className="fas color_icon fa-fire" />
                                <h4 className="text_item">Sản phẩm mua nhiều</h4>
                            </a>
                            <a className="navbar_link_iw">
                                <i className="fas color_icon fa-percent" />
                                <h4 className="text_item">Sản phẩm khuyến mại</h4>
                            </a>
                            <a className="navbar_link_iw">
                                <i className="fas color_icon fa-map-marked-alt" />
                                <h4 className="text_item">Đại lý giao dịch</h4>
                            </a>
                            <a className="navbar_link_iw">
                                <i className="far color_icon fa-credit-card" />
                                <h4 className="text_item">Hình thức thanh toán</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}