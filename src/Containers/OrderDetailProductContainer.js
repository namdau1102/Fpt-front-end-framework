import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getAllShipCodeProduct } from "../Actions/user";
import OrderDetailProduct from "../Components/User/HistoryOrderUser/OrderDetailProduct/OrderDetailProduct";
import DATE_FORMATER from 'dateformat';
import { formatPriceVND } from "../Components/Format/FormatPrice";

export default function OrderDetailProductContainer() {
    const linkParams = useParams()
    const dispatch = useDispatch()
    // var datetime = DATE_FORMATER(new Date(), "yyyy-mm-dd HH:MM:ss");
    const dataUser = useSelector(state => state.loginUser)
    const dataShipCode = useSelector(state => state.getAllShipCode)
    const [dataOder, SetDataOrder] = useState()
    const [paramsSearch] = useSearchParams();
    const pageParams = paramsSearch.get('page')
    const getDataShip = (page, value) => dispatch(getAllShipCodeProduct(page, value))
    useEffect(() => {
        if (dataUser.userInfo.loggedIn) {
            getDataShip(pageParams, dataUser.userInfo.user.nhomDonHang)
        }
    }, [])
    useEffect(() => {
        if (dataShipCode.shipCodeUser) {
            if (linkParams.codeCart) {
                const dataResult = dataShipCode.shipCodeUser.filter(item => item.maDonHang.toUpperCase() === linkParams.codeCart.toUpperCase())
                SetDataOrder(dataResult)
            }

        }
    }, [dataShipCode, linkParams.codeCart])
    console.log(dataOder)
    return (
        <OrderDetailProduct
            maDonHang={dataOder && dataOder[0] && dataOder[0].maDonHang}
            ngayMuaHang={dataOder && dataOder[0] && DATE_FORMATER(dataOder[0].ngayDatHang, "yyyy-mm-dd HH:MM:ss")}
            tinhTrang={dataOder && dataOder[0] && dataOder[0].trangThai}
            tongTien={dataOder && dataOder[0] && formatPriceVND(dataOder[0].tongTien)}
            hinhAnh={dataOder && dataOder[0] && dataOder[0].linkHinhAnh}
            tenSP={dataOder && dataOder[0] && dataOder[0].tenSanPham}
            soLuong={dataOder && dataOder[0] && dataOder[0].soLuong}
            giaSP={dataOder && dataOder[0] && formatPriceVND(dataOder[0].giaSanPham)}
        >

        </OrderDetailProduct>
    )
}