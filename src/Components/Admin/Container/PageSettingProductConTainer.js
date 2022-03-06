import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProductAPI } from '../../../Actions/admin'
import { fromNotification } from '../../../Actions/from';
import { useNavigate } from 'react-router-dom'
import { getBuyPrice, getDanhMucSP, getDiscountType, getProducts, getpswGroupProduct, getUnitPrice } from "../../../Actions/product";
import PageSettingProduct from "../BodyPage/PageFunctionProduct/PageSettingProduct";
import FormNotificationOpw from "../Notification/FormNotificationOpw";
import { pathURLAdmin } from '../../Router/Path'
export default function PageSettingProductConTainer() {
    const navigate = useNavigate();
    const atGetDataUnitPrice = () => dispatch(getUnitPrice())
    const atGetDataDiscountType = () => dispatch(getDiscountType())
    const atGetDataGroupProduct = () => dispatch(getpswGroupProduct())
    const atGetDataBuyPrice = () => dispatch(getBuyPrice())
    const onShowFromSw = (value) => dispatch(fromNotification(value))
    const atGetDataDMSP = () => dispatch(getDanhMucSP())
    const onUpdateProduct = (value) => dispatch(updateProductAPI(value))
    const isDisplayForm = useSelector(state => state.formNotification)
    const dataUnitPrice = useSelector(state => state.getUnitPrice)
    const dataDiscountType = useSelector(state => state.getDiscountType)
    const dataGroupProduct = useSelector(state => state.getpswGroupProduct)
    const dataBuyPrice = useSelector(state => state.getBuyPrice)
    const dataDMSP = useSelector(state => state.getDanhMucSP)
    const linkParams = useParams()
    const dispatch = useDispatch()
    const allProduct = useSelector(state => state.getAllProducts)
    const getAllProducts = () => dispatch(getProducts())
    const [valueStt, SetValueStt] = useState({
        maSanPham: null,
        tenSanPham: null,
        giaSanPham: 0,
        maDVT: null,
        tinhTrang: -1,
        maNhomSP: null,
        maThanhToan: null,
        giamGia: 0,
        luuYSP: null,
        thongTinSP: null
    })
    useEffect(() => {
        getAllProducts()
        atGetDataUnitPrice()
        atGetDataDiscountType()
        atGetDataGroupProduct()
        atGetDataBuyPrice()
        atGetDataDMSP()
    }, [])
    useEffect(() => {
        resultSPSetting()
    }, [allProduct])
    const resultSPSetting = () => {
        let result = []
        if (allProduct.products && allProduct.products.length > 0 && linkParams.codeProduct) {
            result = allProduct.products.filter(item => item.maSanPham.toLowerCase() === linkParams.codeProduct.toLowerCase())
            SetValueStt({
                ...valueStt,
                maSanPham: result[0].maSanPham,
                tenSanPham: result[0].tenSanPham,
                giaSanPham: result[0].giaSanPham,
                maDVT: result[0].maDVT,
                tinhTrang: result[0].tinhTrang,
                maNhomSP: result[0].maNhomSP,
                maThanhToan: result[0].maThanhToan,
                giamGia: result[0].giamGia,
                luuYSP: result[0].luuYSP,
                thongTinSP: result[0].thongTinSP,
            })
        }
        return result
    }
    const onChangeValue = (e) => {
        SetValueStt({
            ...valueStt,
            [e.target.name]: e.target.value
        })
    }
    const onEditor = (data) => {
        SetValueStt({
            ...valueStt,
            thongTinSP: data
        })
    }
    const UnitPriceSelect = (dataUnitPrice) => {
        let result = null
        if (dataUnitPrice && dataUnitPrice.value.length > 0) {
            result = dataUnitPrice.value.map((item, index) => {
                return (
                    <option key={index} value={item.maDVT}>{item.tenDVT}</option>
                )
            })

        }
        return result
    }
    const DiscountTypeSelect = (dataDiscountType) => {
        let result = null
        if (dataDiscountType && dataDiscountType.value.length > 0) {
            result = dataDiscountType.value.map((item, index) => {
                return (
                    <option key={index} value={item.maLoaiGiamGia}>{item.tenLoaiGiamGia}</option>
                )
            })
        }
        return result
    }
    const dataGroupProductSelect = (dataGroupProduct) => {
        let result = null
        if (dataGroupProduct && dataGroupProduct.value.length > 0) {
            result = dataGroupProduct.value.map((item, index) => {
                return (
                    <option key={index} value={item.maNhomSP}>{item.tenNhomSP}</option>
                )
            })
        }
        return result
    }
    const dataBuyPriceSelect = (dataBuyPrice) => {
        let result = null
        if (dataBuyPrice && dataBuyPrice.value.length > 0) {
            result = dataBuyPrice.value.map((item, index) => {
                return (
                    <option key={index} value={item.maThanhToan}>{item.tenThanhToan}</option>
                )
            })
        }
        return result
    }
    const onClickOwp = () => {
        onShowFromSw()
        onUpdateProduct(valueStt)
        navigate(pathURLAdmin.MANAGER_ACCOUNT_GAME)
    }
    return (
        <>
            {isDisplayForm.isDisplay ? <FormNotificationOpw
                title={"Xác nhận"}
                valueTitle={"Vui lòng xác nhận"}
                message={"Bạn chắc chắn muốn cập nhật sản phẩm này"}
                notMess={"Khi cập nhật hay reset lại trang để xem cập nhật mới"}
                onShowFromSw={onShowFromSw}
                onClickOwp={onClickOwp}
            /> : ''}
            <PageSettingProduct
                codeProduct={linkParams.codeProduct}
                valueStt={valueStt}
                onChangeValue={onChangeValue}
                onEditor={onEditor}
                onShowFromSw={onShowFromSw}
            >
                {dataGroupProductSelect(dataGroupProduct)}
                {dataBuyPriceSelect(dataBuyPrice)}
                {UnitPriceSelect(dataUnitPrice)}
            </PageSettingProduct>
        </>
    )
}