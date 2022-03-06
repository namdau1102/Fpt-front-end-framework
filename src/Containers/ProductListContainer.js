import { useSelector } from "react-redux";
import ItemProduct from "../Components/PageProduct/ItemProduct/ItemProduct";
import ProductList from "../Components/PageProduct/ProductList/ProductList";

export default function ProductListContainer() {
    const dataProducts = useSelector(state => state.getAllProducts)
    const showProductItem = (dataProducts) => {
        var result = null
        if (dataProducts.products.length > 0) {
            result = dataProducts.products.map((item, index) => {
                if (item.tinhTrang !== -1)
                    return (
                        <ItemProduct key={index} item={item} />
                    )
            })
        }
        return result
    }
    return (
        <ProductList>
            {showProductItem(dataProducts)}
        </ProductList>
    )
}