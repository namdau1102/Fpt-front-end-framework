export default function FormChangePass() {
    return (
        <form action="" className="flex_ress_pass">
            <fieldset className="fds_ress_p">
                <h4 className="title_w">Đổi mật khẩu</h4>
                <div className="Ip">
                    <div className="vw_Ip">
                        <input type="password" name="passswordRoot" id="" />
                        <label htmlFor="">Mật khẩu cũ</label>
                    </div>
                    <div className="vw_Ip">
                        <input type="password" name="passswordNew" id="" />
                        <label htmlFor="">Mật khẩu mới</label>
                    </div>
                    <div className="vw_Ip">
                        <input type="password" name="enterPassword" id="" />
                        <label htmlFor="">Nhập lại Mật khẩu mới</label>
                    </div>
                </div>
                <button type="submit" className="btn_sv_pass">
                    Lưu thay đổi
                </button>
            </fieldset>
            <div className="inner_text_pw">
                <h4 className="title_w">Mật khẩu của bạn</h4>
                <div className="text_w">
                    <li className="item_wq">Phải từ 8 ký tự trở lên</li>
                    <li className="item_wq">Nên có ít nhất 1 số hoặc 1 ký tự đặc biệt </li>
                    <li className="item_wq">
                        Không nên giống với mật khẩu được sử dụng gần đây
                    </li>
                </div>
            </div>
        </form>
    )
}