export default function ListOrderProduct(props) {
    return (
        <>
            <thead>
                <tr>
                    <th className="item-head check-box">
                        <input type="checkbox" name="" id="" />
                    </th>
                    <th className="item-head th-td-id">ID</th>
                    <th className="item-head th-td-code-order">Mã đơn hàng</th>
                    <th className="item-head th-td-nameorder">Tên sản phẩm</th>
                    <th className="item-head th-td-date">Ngày mua</th>
                    <th className="item-head th-td-status">Tình trạng</th>
                    <th className="item-head th-td-address-ship">Địa chỉ giao</th>
                    <th className="item-head th-td-total-price">Tổng tiền</th>
                    <th className="item-head th-td-setting-oder">Cài đặt</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </>
    )
}