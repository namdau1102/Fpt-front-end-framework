import LoadingBtn from '../../LoadingForm/LoadingBtn'
export default function Login(props) {
    return (
        // login_pw
        <div className="form_login_qw">
            <div className="login_pw_left">
                <form onSubmit={props.onLoginUser} action="/api/login" method="POST" className="form_login_root">
                    <label htmlFor="" className="title_wq">
                        Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích và
                        nhận nhiều ưu đãi hấp dẫn
                    </label>
                    <div className="item-ipw">
                        <input
                            onChange={props.onSetData}
                            type="text"
                            name="username"
                            className={props.userInfo.error ? "border-error" : ""}
                            id=""
                            value={props.dataLogin.username}
                            placeholder="Email hoặc tên đăng nhập"
                        />
                        <p className={props.userInfo.error ? "error-text-w error-text-active " : 'error-text-w'}>
                            Tên đăng nhập hoặc email không đúng
                        </p>
                    </div>
                    <div className="item-ipw">

                        <input
                            className={props.userInfo.error ? "border-error" : ""}
                            value={props.dataLogin.password}
                            onChange={props.onSetData}
                            type="password" name="password"
                            id=""
                            placeholder="Mật khẩu" />
                        <p className={props.userInfo.error ? "error-text-w error-text-active " : 'error-text-w'}>
                            Mật khẩu không đúng
                        </p>
                    </div>
                    <div className="rest_pass">
                        <span>
                            <a href="">Quên mật khẩu</a>
                        </span>
                    </div>
                    <button className="btn_login" type="submit">
                        {/*  */}
                        {props.userInfo.pending ?
                            <LoadingBtn />
                            : 'Đăng nhập'
                        }

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
    )
}