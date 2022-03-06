import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchSelectProduct } from '../../../Actions';
import { fromNotification } from '../../../Actions/from';
import { getProducts, removeProduct } from '../../../Actions/product';
import { pathURLAdmin, pathURLHome } from '../../Router/Path';
import ItemAccountGame from '../BodyPage/AccountGameShop/ManagerAccount/ItemAccountGame';
import ManagerAccount from '../BodyPage/AccountGameShop/ManagerAccount/ManagerAccount';
import FormNotificationOpwContainer from './FormNotificationOpwContainer';

export default function ManagerAccountContainer() {
    const dispatch = useDispatch()
    const navation = useNavigate()
    const allProduct = useSelector(state => state.getAllProducts)
    const [arrProductw, SetArrProductw] = useState(allProduct)
    const onShowFromSw = (value) => dispatch(fromNotification(value))
    const onAPIRemoveProduct = (codeProduct) => dispatch(removeProduct(codeProduct))
    const onSearchIsProduct = (value) => dispatch(searchSelectProduct(value))
    const valueForm = useSelector(state => state.formNotification)
    const isDisplayForm = useSelector(state => state.formNotification)
    const [searchData, SetSearchData] = useState({
        search: '',
        status: -1,
        group: -1
    })
    const getAllProducts = () => dispatch(getProducts())
    const onFormSetting = (codeProduct) => {
        navation(`${pathURLAdmin.MANAGER_SETTING_PRODUCT}/${codeProduct}`)
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    useEffect(() => {
        SetArrProductw(allProduct)
    }, [allProduct])
    // ? Map Product API GET 
    const owpnMapProcut = (arrProduct) => {
        let resultProduct = []
        var result = null
        if (arrProduct && arrProduct.products.length > 0) {
            arrProduct.products.map((item, index) => {
                if (item.tinhTrang !== -1)
                    return resultProduct.push(item)
            })
        }
        resultProduct = resultProduct.filter(item =>
            item.tenSanPham.toLowerCase().indexOf(searchData.search.toLowerCase()) !== -1 || item.maSanPham.toLowerCase().indexOf(searchData.search.toLowerCase()) !== -1

        )
        if (Number(searchData.status) !== -1) {
            resultProduct = resultProduct.filter(item => item.tinhTrang === Number(searchData.status))
        }

        result = resultProduct.map((item, index) => {
            return (
                <ItemAccountGame
                    key={index}
                    id={index}
                    maSP={item.maSanPham}
                    tenSP={item.tenSanPham}
                    giaSP={item.giaSanPham}
                    dvt={item.tenDVT}
                    nhomSP={item.tenNhomSP}
                    soLuong={item.soLuongSP}
                    theLoai={item.theLoaiSP}
                    tinhTrang={item.tinhTrang}
                    maNhomDonHang={item.maNhomDonHang}
                    onShowFromSw={onShowFromSw}
                    onFormSetting={onFormSetting}
                />
            )
        })

        return result
    }
    const onRemoveProduct = (codeProduct) => {
        onAPIRemoveProduct(codeProduct)
        var result = []
        onShowFromSw()
        if (arrProductw) {
            result = arrProductw.products.filter(item => item.maSanPham !== codeProduct)
        }
        SetArrProductw({
            ...arrProductw,
            products: result,
        })
    }
    const onChangeData = (e) => {

        SetSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            {
                isDisplayForm.isDisplay
                    ? <FormNotificationOpwContainer
                        onShowFromSw={onShowFromSw}
                        title={"Bạn có chắc chắn"}
                        valueTitle={"Xác nhận hành động"}
                        message={"Bạn có muốn xóa sản phẩm này"}
                        notMess={"Sản phẩm bị xóa có thể khôi phục lại "}
                        onClickOwp={() => onRemoveProduct(valueForm.value)}
                    /> : ''
            }
            <ManagerAccount
                onShowFrom={onShowFromSw}
                onData={onChangeData}
            >
                {owpnMapProcut(arrProductw)}
            </ManagerAccount>
        </>

    )

}