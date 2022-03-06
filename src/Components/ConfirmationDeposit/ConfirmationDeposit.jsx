import { useEffect } from "react";
import ItemBankPrice from "./ItemBankPrice/ItemBankPrice";
import QRBankPay from "./QRBankPay/QRBankPay";

export default function ConfirmationDeposit() {
    useEffect(() => {
        document.title = "Xác nhận thanh toán"
    }, [])
    return (
        <div className="bd_check_out">
            <div className="container">
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
                <div className="inner_list_pw">
                    <ul className="list_addprice_root">
                        <ItemBankPrice />
                    </ul>
                    <ul className="list_price_sum">
                        <li className="item_price_wq">
                            Số tiền : <b>10.000 đ</b>
                        </li>
                        <li className="item_price_wq">
                            Phí giao dịch: : <b>200đ (2%)</b>
                        </li>
                        <li className="item_price_wq">
                            Tổng tiền : <b>10.000 đ</b>
                        </li>
                    </ul>
                    <div className="flex_pay_qr">
                        <QRBankPay />
                    </div>
                </div>
            </div>
        </div>

    )
}