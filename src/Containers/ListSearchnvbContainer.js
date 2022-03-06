import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ItemSearchnvb from "../Components/Header/SearchForm/ItemSearchnvb/ItemSearchnvb";
import ListSearchnvb from "../Components/Header/SearchForm/ListSearchnvb/ListSearchnvb";

export default function ListSearchnvbContainer() {
    const dataProductSearch = useSelector(state => state.searcProductText)
    const [linkparm] = useSearchParams();
    const listItemSearchProduct = (products) => {
        let resultSearchProduct = null
        if (products.productsSearch) {
            resultSearchProduct = products.productsSearch.map((item, index) => {
                if (index <= 8) {
                    return (
                        <ItemSearchnvb textSearch={dataProductSearch.textSearch} item={item} key={index} />
                    )
                }

            })
        }
        return resultSearchProduct
    }
    // useEffect(() => {

    // },[linkparm.get('page')])
    return (
        <ListSearchnvb>
            {listItemSearchProduct(dataProductSearch)}
        </ListSearchnvb>
    )
}