export default function LoginWeb({ onLogin }) {
    return (
        <div onClick={() => onLogin(true)} className="navbar_user_info_w">
            <i className="fas fa-user color_icon" />
            <h4 className="text_user">Đăng nhập / Đăng ký</h4>
        </div>
    )
}