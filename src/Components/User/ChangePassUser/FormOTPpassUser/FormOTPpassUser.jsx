export default function FormOTPpassUser() {
    return (
        <>
            <div className="title_info_user">
                <h2>Nhập mã xác thực</h2>
                <p className="in_wq">
                    Vui lòng nhập mã OTP được gửi tới email của bạn để xác thực
                </p>
            </div>
            <form action="" className="active_otp_email">
                <label htmlFor="">Phương thức xác thực</label>
                <input type="text" name="" id="" placeholder="Mã xác nhận" />
                <button type="submit" className="btn_check_otp">
                    Tiếp tục
                </button>
            </form>
        </>
    )
}