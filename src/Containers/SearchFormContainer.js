import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProductText } from "../Actions";
import { getProducts } from "../Actions/product";
import SearchForm from "../Components/Header/SearchForm/SearchForm";
import { pathURLHome } from "../Components/Router/Path";
import { Slug } from "../Components/Slug/Slug";

export default function SearchFormContainer() {
    const dispatch = useDispatch();
    const linkSearch = useNavigate();
    const [textSearch, SetTextSearch] = useState('')
    const dataProducts = useSelector(state => state.getAllProducts)
    const onSearchProduct = (arrProduct, txtSearch) => dispatch(searchProductText(arrProduct, txtSearch));
    const onChangSearchProduct = (txtSearchProduct) => {
        const resultTextSearch = txtSearchProduct.target.value.toLowerCase()
        onSearchProduct(dataProducts.products, resultTextSearch)
        SetTextSearch(resultTextSearch)
    }
    const onEnterSearchInput = (e) => {
        if (e.key === 'Enter') {
            linkSearch(pathURLHome.SEARCH_PRODUCT_KEY + "?keysearch=" + (textSearch) + "&page=1")
        }
    }
    const onSearchText = () => {
        linkSearch(pathURLHome.SEARCH_PRODUCT_KEY + "?keysearch=" + (textSearch) + "&page=1")
    }
    return (
        <SearchForm
            onSearchText={onSearchText}
            onEnterSearchInput={onEnterSearchInput}
            onChangSearchProduct={onChangSearchProduct}
            textSearch={textSearch}
        />
    )
}