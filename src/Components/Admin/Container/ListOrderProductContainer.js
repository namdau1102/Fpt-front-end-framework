import ListOrderProduct from "../BodyPage/OrderProduct/ListOrderProduct/ListOrderProduct";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllOrderKH, updateOrderTTAPI } from "../../../Actions/admin";
import ItemOrderProduct from '../BodyPage/OrderProduct/ItemOrderProduct/ItemOrderProduct'
import { formatPriceVND } from '../../Format/FormatPrice'
import FormNotificationOpw from "../Notification/FormNotificationOpw";
import { updateOrderTT } from "../../../Actions";
import { useSearchParams } from "react-router-dom";
export default function ListOrderProductContainer() {
    const dispatch = useDispatch()
    const [linkPage] = useSearchParams()
    const getAllOrderAdm = (page) => dispatch(getAllOrderKH(page))
    const [maDonHang, SetMaDonHang] = useState(null)
    const onUpdateOrder = (status, codeOrder) => dispatch(updateOrderTTAPI(status, codeOrder))
    const [isDisplay, SetIsPlay] = useState(false)
    const dataOrder = useSelector(state => state.getValueOrderAdm)
    useEffect(() => {
        getAllOrderAdm(linkPage.get('page'))
    }, [linkPage.get('page')])
    const showItemOrder = (arrOrder) => {
        var result = null
        if (arrOrder) {
            result = arrOrder.value.map((item, index) => {
                return (
                    <ItemOrderProduct
                        key={index}
                        id={index}
                        maDonHang={item.maDonHang}
                        date={item.ngayDatHang}
                        tinhTrang={item.trangThai}
                        tenSanPham={item.tenSanPham}
                        tongTien={formatPriceVND(item.tongTien)}
                        onShowFromSw={onShowFromSw}
                    />
                )
            })
        }
        return result
    }
    const onShowFromSw = (value) => {
        SetMaDonHang(value)
        SetIsPlay(!isDisplay)
    }
    const onSuccessNotif = () => {
        onUpdateOrder(0, maDonHang)
        getAllOrderAdm()
        SetIsPlay(!isDisplay)

    }
    return (
        <>
            {isDisplay ? <FormNotificationOpw
                title={"X??c nh???n"}
                valueTitle={"X??c nh???n ????n h??ng n??y"}
                message={"B???n c?? ch???c ch???n mu???n x??c nh???n ????n h??ng n??y ?"}
                notMess={"Sau khi x??c nh???n h??? th??ng s??? cung c???p key game cho ng?????i mua s???n ph???m n??y"}
                onShowFromSw={onShowFromSw}
                onClickOwp={onSuccessNotif}
            /> : ''}
            <ListOrderProduct
            >
                {showItemOrder(dataOrder)}
            </ListOrderProduct>
        </>
    )
}