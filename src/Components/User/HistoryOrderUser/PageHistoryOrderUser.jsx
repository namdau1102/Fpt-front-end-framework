import { useEffect } from "react";
import TableProductOrderContainer from "../../../Containers/TableProductOrderContainer";
import SelectItemOrder from "./SelectItemOrder/SelectItemOrder";
import TableProductOrderMobile from "./TableProductOrder/TableOrderMobile/TableProductOrderMobile";

export default function PageHistoryOrderUser() {

    useEffect(() => {

    }, [])
    return (
        <>
            <div className="info_user">
                <div className="title_info_user">
                    <h2>Lịch sử đơn hàng</h2>
                    <p className="in_wq">
                        Hiển thị thông tin các sản phẩm bạn đã mua tại Divine Shop
                    </p>
                </div>
                <ul className="flex_wrap_select_w">
                    <SelectItemOrder />
                </ul>
            </div>
            <div class="table_status_cart">
                <TableProductOrderContainer />
            </div>
            <div className="tabe_mobile_cart">
                <TableProductOrderMobile />
            </div>
        </>

    )
}