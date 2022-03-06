export default function QRBankPay() {
    return (
        <>
            <div className="flex_pay_qr_left">
                <div className="image_qr">
                    <img
                        src="https://chart.googleapis.com/chart?cht=qr&chld=L|1&choe=UTF-8&chs=250x250&chl=00020101021226280010A000000775011001F80092565204799453037045405102005802VN5910DIVINESHOP6005HANOI62390105652440314NEW%20DIVINESHOP0708DIVINE046304B35A"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex_pay_qr_right">
                <div className="title_qr">
                    <span className="wq">
                        Thực hiện theo hướng dẫn sau để thanh toán:{" "}
                    </span>
                    <ul className="list_bw_qq">
                        <li className="wq_bb_p">
                            <span>
                                <b>Bước 1 </b>: Mở ứng dụng <b>Mobile Banking</b> của ngân
                                hàng (Danh sách ngân hàng hỗ trợ)
                            </span>
                        </li>
                        <li className="wq_bb_p">
                            <span>
                                <b>Bước 2</b> : Chọn "Thanh Toán" và quét mã QR tại hướng dẫn
                                này
                            </span>
                        </li>
                        <li className="wq_bb_p">
                            <span>
                                <b>Bước 3</b> : Hoàn thành các bước thanh toán theo hướng dẫn
                                và đợi Divine Shop xử lý trong giây lát{" "}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}