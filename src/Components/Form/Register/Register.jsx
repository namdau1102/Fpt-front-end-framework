import LoadingBtn from '../../LoadingForm/LoadingBtn'
export default function Register(props) {
    return (
        // login_pw
        <div className="form_login_qw">
            <div className="login_pw_left">
                <form action="/api/register" method="POST" className="form_login_root">
                    <label htmlFor="" className="title_wq">
                        Đăng kí để tham gia các chương trình ưu đãi cho khách hàng , Mua bán ,
                    </label>
                    <div className="item-ipw">
                        <input
                            onChange={props.onSetData}
                            type="text"
                            name="username"
                            id=""
                            className={props.getInfoReg.err ? "border-error" : ""}
                            value={props.dataReg.username}
                            placeholder="Email hoặc tên tài khoản đăng kí"
                        />
                        <p className={props.getInfoReg.err === 1102 ? "error-text-w error-text-active " : 'error-text-w'}>
                            Tên tài khoản đã tồn tại
                        </p>
                    </div>
                    <div className="item-ipw">
                        <input
                            value={props.dataReg.password}
                            onChange={props.onSetData}

                            type="password" name="password"
                            id=""
                            placeholder="Mật khẩu" />
                    </div>
                    <div className="rest_pass">
                        <span>
                            <li href="">Báo lỗi</li>
                        </span>
                    </div>
                    <button onClick={props.onReg} className="btn_login" type="submit">
                        {/*  */}
                        Đăng kí
                    </button>
                </form>

                <div className="or_login_text">
                    <span>Hoặc đăng kí bằng</span>
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