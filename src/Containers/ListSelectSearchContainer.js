import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createSearchParams, generatePath, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getProductSelectxd } from "../Actions";
import { getCategoryProduct, getProducts } from "../Actions/product";
import ListSelectSearch from "../Components/SearchProduct/ListSelectSearch/ListSelectSearch";
import { pathnameForm } from "../Components/SearchProduct/ListSelectSearch/pathnameForm";

export default function ListSelectSearchContainer() {
    const [history] = useSearchParams();
    const dispatch = useDispatch()
    const linkHerf = useLocation()
    const dataSelectProducts = useSelector(state => state.getSelectProduct)
    const getDataCategoryProduct = (nameProduct, codeProduct) => dispatch(getCategoryProduct(nameProduct, codeProduct))
    const getDataSelectSearch = (valueSelect) => dispatch(getProductSelectxd(valueSelect));
    const [valueSelect, SetValueSelect] = useState({
        [pathnameForm.NAME_CATEGORY]: -1,
        [pathnameForm.PRICE_LSW1]: 0,
        [pathnameForm.PRICE_LSW2]: 0,
        [pathnameForm.TYPE_PRODUCT]: -1,
        [pathnameForm.SORT_PRODUCT]: -1
    })
    const dataCategoryProduct = useSelector(state => state.getCategoryProduct);
    useEffect(() => {
        getDataCategoryProduct(history.get('keysearch'), history.get('keysearch'))
    }, [history.get('keysearch')])
    const showCategoryProductSearch = () => {
        let resultCategory = null
        if (dataCategoryProduct.arrCategory.categoryProduct) {
            if (dataCategoryProduct.arrCategory.categoryProduct.length > 0) {
                const arrCategory = dataCategoryProduct.arrCategory.categoryProduct
                resultCategory = arrCategory.map((item, index) => {
                    return (
                        <option value={item.maDanhMuc}>{item.tenDanhMuc}</option>
                    )
                })
            }
        }
        return resultCategory;
    }
    const showSelectSearchProduct = (e) => {
        let resultSelectSearchProduct = null
        const arrProduct = dataCategoryProduct.arrCategory.categoryProduct
        const linkSearchProduct = linkHerf.search

        e.preventDefault()
        if (valueSelect)
            if (arrProduct) {
                if (arrProduct.length > 0) {
                    if (dataSelectProducts.objSelect) {

                    }

                }
            }
        return resultSelectSearchProduct
    }
    const onChangeValueSelectSearch = (e) => {
        SetValueSelect({
            ...valueSelect,
            [e.target.name]: e.target.value
        })
        getDataSelectSearch(valueSelect)
    }
    return (
        <ListSelectSearch onSbSelectSb={showSelectSearchProduct} onChangeValue={onChangeValueSelectSearch}>
            {showCategoryProductSearch()}
        </ListSelectSearch>
    )
}