import FormChangeLoginSecurity from "./FormChangeLoginSecurity/FormChangeLoginSecurity";
import FormChangePass from "./FormChangePass/FormChangePass";
import FormOTPpassUser from "./FormOTPpassUser/FormOTPpassUser";

export default function PageChangePass() {
    return (
        <div className="info_user">
            <div className="title_info_user">
                <h2>Mật khẩu và Bảo mật</h2>
                <p className="in_wq">
                    Vì sự an toàn, Shop khuyến khích khách hàng sử dụng mật khẩu mạnh và bảo
                    mật hai lớp
                </p>
            </div>
            <FormChangePass />
            <div className="pass_protected_w">
                <>
                    <div className="title_info_user">
                        <h2>Bảo mật hai lớp</h2>
                        <p className="in_wq">
                            Sử dụng xác thực hai lớp giúp tài khoản của bạn an toàn hơn, tránh được
                            các giao dịch được thực hiện trái phép
                        </p>
                    </div>
                    <ul className="list_pass_protected_w2">
                        <FormChangeLoginSecurity />
                    </ul>
                </>
                <FormOTPpassUser />
            </div>
        </div>

    )
}