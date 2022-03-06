import React, { useState } from 'react';
import { Link } from "react-router-dom";
import SearchFormContainer from '../../Containers/SearchFormContainer';
import { pathURLHome } from "../Router/Path";
import InfoUserWeb from './InfoUser/InfoUserWeb';
import Loginbtn from './Loginbtn/Loginbtn';
import LoginWeb from './Loginbtn/LoginWeb';
import HomePageLoginContainer from '../../Containers/HomePageLoginContainer';


export default function Header(props) {
    return (
        <>
            {
                props.isLogin ? '' : <HomePageLoginContainer />
            }
            <div className="header_root">
                <div className="topbar">
                    <div className="container">
                        <div className="list_link_flex">
                            <div className="list_left_w item_flex_link">
                                <li className="item_list">
                                    <i className="fas fa-link color_icon" />
                                    <Link to="" className="text" href="">
                                        Tham gia với chung tôi để trở thành CTV
                                    </Link>
                                </li>
                            </div>
                            <div className="list_right_w item_flex_link">
                                <li className="item_list">
                                    <i className="fas fa-book color_icon" />
                                    <Link to="" className="text" href="">
                                        Hướng dẫn mua hàng
                                    </Link>
                                </li>
                                <li className="item_list">
                                    <i className="fas fa-gift color_icon" />
                                    <Link to="" className="text" href="">
                                        Ưu đãi khách hàng
                                    </Link>
                                </li>
                                <li className="item_list">
                                    <i className="fas fa-phone-alt color_icon" />
                                    <Link to="" className="text" href="">
                                        Thông tin liên hệ
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <div className="container">
                        <div className="list_flex_navbar top_list">
                            <div className="menu_mobie_fixed">
                                <i onClick={props.onShowMenu} className="fas fa-bars color_icon" />
                                <div id="mobie_wqp">
                                    <div className="bgrd_wp">
                                        <div className="menu_mobie_lw">
                                            <div className="topbar_menu_mb">
                                                <div className="flex_lg_nm">
                                                    <Loginbtn onLogin={props.showFromLogin} />
                                                </div>
                                                <div className="sw_exit_p">
                                                    <i
                                                        onClick={props.onExitMenu}
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
                                <SearchFormContainer />
                            </div>
                            {/* {{'-- LOGIN USER --'}} */}
                            {
                                props.isLogin
                                    ? <InfoUserWeb dataUser={props.dataUser.user} onLogout={props.onLogout} />
                                    : <LoginWeb onLogin={props.showFromLogin} />
                            }
                            <Link to={pathURLHome.CART}>
                                <div className="navbar_cart_user">
                                    <i className="fas fa-shopping-cart color_icon" />
                                    <h4 className="text_cart">Giỏ hàng</h4>
                                    <span className="quanlity_cart">14</span>
                                </div>
                            </Link>
                        </div>
                        <div className=" list_flex_navbar bottom_list">
                            <Link to="" className="navbar_link_iw">
                                <i className="fas color_icon fa-eye" />
                                <h4 className="text_item">Sản phẩm bạn vừa xem</h4>
                            </Link>
                            <Link to="" className="navbar_link_iw">
                                <i className="fas color_icon fa-fire" />
                                <h4 className="text_item">Sản phẩm mua nhiều</h4>
                            </Link>
                            <Link to="" className="navbar_link_iw">
                                <i className="fas color_icon fa-percent" />
                                <h4 className="text_item">Sản phẩm khuyến mại</h4>
                            </Link>
                            <Link to="" className="navbar_link_iw">
                                <i className="fas color_icon fa-map-marked-alt" />
                                <h4 className="text_item">Đại lý giao dịch</h4>
                            </Link>
                            <Link to="" className="navbar_link_iw">
                                <i className="far color_icon fa-credit-card" />
                                <h4 className="text_item">Hình thức thanh toán</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}