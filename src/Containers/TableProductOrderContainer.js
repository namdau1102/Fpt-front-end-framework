import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShipCodeProduct } from "../Actions/user";
import DATE_FORMATER from 'dateformat';
import ItemOrderProduct from "../Components/User/HistoryOrderUser/TableProductOrder/ItemOrderProduct/ItemOrderProduct";
import TableProductOrder from "../Components/User/HistoryOrderUser/TableProductOrder/TableOrderPc/TableProductOrder";
import { formatPriceVND } from '../Components/Format/FormatPrice'
import { Link, useSearchParams } from "react-router-dom";
export default function TableProductOrderContainer() {
    const dispatch = useDispatch()
    // var datetime = DATE_FORMATER(new Date(), "yyyy-mm-dd HH:MM:ss");
    const dataUser = useSelector(state => state.loginUser)
    const dataShipCode = useSelector(state => state.getAllShipCode)
    const getDataShip = (page, value) => dispatch(getAllShipCodeProduct(page, value))
    const pageOrderUser = useSelector(state => state.getDataPage)
    const [paramsSearch] = useSearchParams();
    const pageParams = paramsSearch.get('page')
    useEffect(() => {
        if (dataUser.userInfo.loggedIn) {
            getDataShip(pageParams, dataUser.userInfo.user.nhomDonHang)
        }
    }, [pageParams])

    const mapItemOrderProduct = (arrOrder) => {
        let result = null
        if (arrOrder) {
            result = arrOrder.shipCodeUser.length > 0 && arrOrder.shipCodeUser.map((item, index) => {

                return (
                    <ItemOrderProduct
                        ngayDatHang={DATE_FORMATER(item.ngayDatHang, "yyyy-mm-dd HH:MM:ss")}
                        maDonHang={item.maDonHang}
                        tenSanPham={item.tenSanPham}
                        soLuong={item.soLuong}
                        tongTien={formatPriceVND(item.tongTien)}
                        trangThai={item.trangThai}
                        page={pageParams}
                    />
                )
            })
        }
        return result
    }
    const mapTabSelect = (arrOrder) => {
        let resultPage = []
        let result = null;
        for (let i = 1; i <= arrOrder.value; i++) {
            resultPage.push(i)
        }


        result = resultPage.map((item, index) => {
            return (
                <>
                    <Link to={`?page=${item}`} key={index} className="iteam-tab">
                        {item}
                    </Link>
                </>
            )
        })

        return result

    }
    return (
        <TableProductOrder>
            {mapItemOrderProduct(dataShipCode)}
            {mapTabSelect(pageOrderUser)}
        </TableProductOrder>
    )
}