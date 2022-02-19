export default function Login() {
    return (
        <div className="login_pw">
            <div className="login_pw_inner">
                <div className="close_form">
                    <i className="fas fa-times" />
                </div>
                <div className="flex_select_wq">
                    <span className="title_sele active">Đăng nhập</span>
                    <span className="title_sele not_active">Đăng kí</span>
                </div>
                <div className="form_login_qw">
                    <div className="login_pw_left">
                        <form action="" className="form_login_root">
                            <label htmlFor="" className="title_wq">
                                Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và
                                nhận nhiều ưu đãi hấp dẫn
                            </label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Email hoặc tên đăng nhập"
                            />
                            <input type="password" name="" id="" placeholder="Mật khẩu" />
                            <div className="rest_pass">
                                <span>
                                    <a href="">Quên mật khẩu</a>
                                </span>
                            </div>
                            <button className="btn_login" type="button">
                                Đăng nhập
                            </button>
                        </form>
                        <div className="or_login_text">
                            <span>Hoặc đăng nhập bằng</span>
                        </div>
                        <ul className="login_sw_2">
                            <li className="item_login">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                                    alt=""
                                />
                            </li>
                            <li className="item_login">
                                <img
                                    src="https://thuviendohoa.vn/2020/upload/images/items/vector-icon-logo-facebook-4373.jpg?t=20170704_095556"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="image_pw_right">
                        <img
                            src="https://cdn.divineshop.vn/static/368e705d45bfc8742aa9d20dbcf4c78c.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}