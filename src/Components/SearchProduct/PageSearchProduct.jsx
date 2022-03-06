import { useSelector } from "react-redux";
import ListSelectSearchContainer from "../../Containers/ListSelectSearchContainer";
import TabePageSelectContainer from "../../Containers/TabePageSelectContainer";
import LoadingProduct from "../LoadingForm/LoadingProduct";
import ProductSearch from "./ProductSearch/ProductSearch";
import TabePageSelect from "./TabePageSelect/TabePageSelect";

export default function PageSearchProduct(props) {
    const dataProductSearch = useSelector(state => state.searcProductText)
    return (
        <div className="bd_search_product">
            <div className="container">
                <h2 className="title_search">
                    Tìm kiếm sản phẩm :<p className="text_search">{dataProductSearch.textSearch}</p>
                </h2>
                <ListSelectSearchContainer />
                <div className="rest_list_select">
                    <span>
                        <i className="fas fa-undo-alt" />
                        Khôi phục bộ lọc
                    </span>
                </div>
                <div className="pw_product_game">
                    <div className="wq_product_game">
                        {
                            props.dataProducts.pending ?
                                <LoadingProduct />
                                : <ProductSearch showItemProductSearch={props.children} />
                        }
                        <div className="inner_games_load_w">
                            <i className="fas fa-angle-double-down" />
                            <span className="text_load">Xem thêm</span>
                        </div>
                    </div>
                    <div className="list_paging_wo">
                        <TabePageSelectContainer />
                    </div>
                </div>
            </div>
        </div>

    )
}