export default function Login(props) {
    return (
        <div onSubmit={props.onLoginBd} method="POST" action="/api/login" className="form-login-admin">
            <form action="">
                <h6 className="title-form">Đăng nhập</h6>
                <div className="item-login-w">
                    <i className="fas fa-user color-icon" />
                    <input onChange={props.onSetDataLogin} type="text" name="username" id="" placeholder="Tài khoản của bạn" />
                </div>
                <div className="item-login-w">
                    <i className="fas fa-key color-icon" />
                    <input
                        onChange={props.onSetDataLogin}
                        type={props.isShowPass.isHide ? 'text' : 'password'}
                        name="password" id="" value={props.passWord}
                        placeholder="Mật khẩu của bạn" />
                    <i onClick={() => props.onPass(!props.isShowPass.isHide)} className="fas fa-eye color-icon" />
                </div>
                <button className="btn btn-login-adm" type="submit">
                    <i className="fas fa-sign-in-alt color-icon" />
                    Đăng nhập
                </button>
            </form>
        </div>

    )
}