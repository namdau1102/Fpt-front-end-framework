
export default function TableProductOrder(props) {
    return (
        <>
            <table>
                <thead>
                    <tr className="row_title">
                        <th className="title_t">Thời gian</th>
                        <th className="title_t">Mã đơn hàng</th>
                        <th className="title_t">Sản phẩm</th>
                        <th className="title_t">Tổng tiền</th>
                        <th className="title_t">Trạng thái</th>
                        <th className="title_t"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.children[0]}
                </tbody>

            </table>
            <ul className="list-tab-select">
                {props.children[1]}
            </ul>
        </>


    )
}