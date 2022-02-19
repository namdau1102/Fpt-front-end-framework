export default function SupportEmail() {
    return (
        <div className="support_mail_send">
            <div className="container">
                <div className="inner_text_mail">
                    <span className="title_mail">
                        Liện hệ mới với chúng tôi để được cung cấp các sản phẩm mới nhât
                    </span>
                    <div className="ipn_mail_wq">
                        <input
                            type="text"
                            className="text_mail_user"
                            placeholder="Nhập địa chỉ email của bạn"
                        />
                        <button type="submit" className="btn_send">
                            Gửi
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}