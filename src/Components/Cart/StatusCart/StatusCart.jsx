export default function StatusCart() {
    return (
        <div className="flex_status_checkout Tf">
            <div className="sts_w active_sw">
                <i className="fas fa-shopping-cart color_icon" />
                <span> Giỏ hàng</span>
            </div>
            <div className="line_row_q" />
            <div className="sts_w not_active_sw">
                <i className="fas fa-record-vinyl color_icon" />
                <span> Xác nhận</span>
            </div>
            <div className="line_row_q" />
            <div className="sts_w not_active_sw">
                <i className="fas fa-credit-card color_icon" />
                <span>Thanh toán</span>
            </div>
        </div>
    )
}   