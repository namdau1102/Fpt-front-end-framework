export default function FormInfoReg() {
    return (
        <div className="info_reg_user">
            <div className="container">
                <div className="flex_info_reg">
                    <div className="image">
                        <img
                            src="https://cdn.divineshop.vn/static/528b91cfa29c7ffd85418f4b1e8cc8ce.svg"
                            alt=""
                        />
                    </div>
                    <div className="text_info">
                        <div className="text_info_title">
                            <span>Bạn chưa có tài khoản?</span>
                        </div>
                        <div className="text_info_inner">
                            <p className="text_w">
                                Hãy tạo ngay một tài khoản để sử dụng đầy đủ các tính năng, tích lũy
                                ưu đãi khi thanh toán các sản phẩm và tham gia vào chương trình Giới
                                thiệu bạn bè nhận hoa hồng vĩnh viễn tại Divine Shop.
                            </p>
                        </div>
                        <div className="flex_btn_link">
                            <button type="button" className="btn_reg_user">
                                Đăng kí ngay
                            </button>
                            <span className="text_wq_oo">
                                Hoặc bạn đã có tài khoản?
                                <a href=""> Đăng nhập</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}