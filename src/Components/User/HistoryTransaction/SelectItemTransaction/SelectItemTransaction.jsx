export default function SelectItemTransction() {
    return (
        <>
            <li className="item_input_w">
                <input type="text" name="" id="" />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Mã đơn hàng
                </label>
            </li>
            <li className="item_input_w">
                <input type="text" name="" id="" />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Số tiền từ
                </label>
            </li>
            <li className="item_input_w">
                <input type="text" name="" id="" />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Số tiền đến
                </label>
            </li>
            <li className="item_input_w">
                <input type="date" name="" id="" />
                <label htmlFor="" className="label_text_topbar">
                    Từ ngày
                </label>
            </li>
            <li className="item_input_w">
                <input type="date" name="" id="" />
                <label htmlFor="" className="label_text_topbar">
                    Đến ngày
                </label>
            </li>
            <li className="item_input_w">
                <button className="btn_select_product" type="submit">
                    <i className="fas fa-filter color_icon" />
                    Lọc
                </button>
            </li>
        </>
    )
}