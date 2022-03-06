export default function FormChangeLoginSecurity() {
    return (
        <form action="" className="form_pass_w2">
            <li className="item_pass_select">
                <label htmlFor="">Xác thực khi thanh toán </label>
                <select name="" id="">
                    <option value="">Áp dụng với mọi IP</option>
                    <option value="">Không sử dụng OTP</option>
                </select>
            </li>
            <li className="item_pass_select">
                <label htmlFor="">Xác thực khi đăng nhập</label>
                <select name="" id="">
                    <option value="">Không sử dụng OTP</option>
                    <option value="">Áp dụng với mọi IP</option>
                    <option value="">Chỉ áp dụng với IP lạ</option>
                </select>
            </li>
            <li className="item_pass_select">
                <label htmlFor="">Phương thức xác thực</label>
                <select name="" id="">
                    <option value="">Bảo mật bằng Email</option>
                </select>
            </li>
            <button type="submit" className="btn_save_pass_w_o">
                Tiếp tục
            </button>
        </form>
    )
}