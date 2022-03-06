import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import PageSearchProduct from "../Components/SearchProduct/PageSearchProduct";
import ItemProductSearch from "../Components/SearchProduct/ItemProduct/ItemProductSearch";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Actions/product";
import LoadingProduct from '../Components/LoadingForm/LoadingProduct'
export default function PageSearchProductContainer() {
    const [history] = useSearchParams()
    const dataProducts = useSelector(state => state.getAllProducts)
    const dataSelectProducts = useSelector(state => state.getSelectProduct)
    const dataPage = useSelector(state => state.getDataPage)
    // const dataProductSearch = useSelector(state => state.searcProductText)
    const dispatch = useDispatch();
    const getDataProducts = (value) => dispatch(getProducts(value));
    useEffect(() => {
        getDataProducts(Number(history.get('page')))
        document.title = `Tìm kiếm sản phẩm : ${history.get('keysearch')}`
    }, [history.get('page')])
    // let query = useQuery();
    const productSearchKey = (dataProduct) => {
        let result = null
        let resutProductSw = null
        if (dataProduct.products.length > 0) {
            if (history.get('keysearch') !== null) {
                if (history.get('keysearch').length > 0) {
                    resutProductSw = dataProduct.products.filter(item => item.tenSanPham.toLowerCase().indexOf(history.get('keysearch').toLowerCase()) !== -1)
                } else {
                    resutProductSw = dataProduct.products
                }
                if (resutProductSw.length > 0) {
                    result = resutProductSw.map((item, index) => {
                        if (item.tinhTrang !== -1)
                            return (
                                <>
                                    {
                                        <ItemProductSearch item={item} key={index} />
                                    }
                                </>
                            )
                    })
                }
                else
                    return (
                        <div style={{ textAlign: 'center' }}>KHONG CON SAN PHAM</div>
                    )
            }

        }
        return result
    }
    return (
        <PageSearchProduct dataPage={dataPage} dataProducts={dataProducts}>
            {productSearchKey(dataProducts, dataSelectProducts)}
        </PageSearchProduct>
    )
}