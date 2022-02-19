export default function CartForm() {
    return (
        <form className="check_cart">
            <div className="form_qw_product">
                <h6 className="title_pr">
                    Bạn có mã ưu đãi?
                    <i className="fas fa-gift" />
                </h6>
                <div className="flex_ipn">
                    <input type="text" name="" id="" placeholder="Mã giảm giá" />
                    <button type="button" className="add_gif">
                        Áp dụng
                    </button>
                </div>
            </div>
            <div className="form_qw_product">
                <h6 className="title_pr">
                    Bạn muốn tặng cho bạn bè?
                    <i className="fas fa-gift" />
                </h6>
                <div className="flex_ipn">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Email của bạn bè"
                    />
                    <button type="button" className="add_gif">
                        Áp dụng
                    </button>
                </div>
            </div>
            <div className="sum_price_all">
                <h6 className="title_sw_q">Thanh toán</h6>
                <div className="sum_all_product">
                    Tổng giá trị sản phẩm
                    <span>225.000đ</span>
                </div>
            </div>
            <div className="list_price_sum">
                <div className="sum_all_product">
                    Tổng giá trị phải thanh toán
                    <span>225.000đ</span>
                </div>
                <div className="sum_all_product">
                    Số dư hiện tại
                    <span>225.000đ</span>
                </div>
                <div className="sum_all_product">
                    Số tiền cần nạp thêm
                    <span>225.000đ</span>
                </div>
            </div>
            <div className="sbm_price_w w_1">
                <button type="button" className="btn_wq_tt add_tt">
                    <i className="fas fa-donate" />
                    Nạp thêm tiền vào vào tài khoản
                </button>
                <div className="or_wq">
                    Quét mã. Thanh toán. Không cần nạp tiền.{" "}
                </div>
                <button type="button" className="btn_wq_tt bank_king">
                    <i className="fas fa-qrcode" />
                    Mua siêu tốc qua Mobile Banking
                </button>
                <button type="button" className="btn_wq_tt momo_wq">
                    <i className="fas fa-qrcode" />
                    Mua siêu tốc với MOMO
                </button>
            </div>
            {/* <div class="sbm_price_w w_2">
            <button type="button" class="btn_wq_tt momo_wq">
                <i class="fas fa-qrcode"></i>
                Xác nhận thanh toán
            </button>
        </div> */}
        </form>
    )
}