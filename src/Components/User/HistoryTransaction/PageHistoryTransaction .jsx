import SelectItemTransction from "./SelectItemTransaction/SelectItemTransaction";
import TableTransactionMobile from "./TableTransaction/TableMobile/TableTransactionMobile";
import TableTransaction from "./TableTransaction/TablePC/TableTransaction";

export default function PageHistoryTransaction() {
    return (
        <>
            <div className="info_user">
                <div className="title_info_user">
                    <h2>Lịch sử giao dịch</h2>
                    <p className="in_wq">
                        Hiển thị thông tin các sản phẩm bạn đã mua tại Divine Shop
                    </p>
                </div>
                <ul className="flex_wrap_select_w">
                    <SelectItemTransction />
                </ul>
            </div>
            <div className="table_status_cart">
                <TableTransaction />
            </div>
            <div className="tabe_mobile_cart">
                <TableTransactionMobile />
            </div>
        </>

    )
}