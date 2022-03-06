export default function Loginbtn({ onLogin }) {
    return (
        <>
            <div className="image">
                <img src="https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"
                    alt="" />

            </div>
            <div className="col_row_nm">

                <button onClick={() => onLogin(true)} className="btn_login_rg" type="button">
                    Đăng nhập / Đăng kí
                </button>
            </div>
        </>
    )
}