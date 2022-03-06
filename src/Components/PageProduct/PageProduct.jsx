import ProductListContainer from "../../Containers/ProductListContainer";
import FormInfoReg from "../InfoPage/FormInfoReg";
import PaymentInfo from "../InfoPage/PaymentInfo";
import SupportEmail from "../InfoPage/SupportEmail";
import PageProductTop from "./PageProductTop/PageProductTop";
import PriceProductList from "./ProductList/PriceProductList";
import ProductList from "./ProductList/ProductList";

export default function PageProduct({ dataProducts }) {
    return (
        <>
            <div className="content_product_w">
                <div className="container">
                    <ProductListContainer />
                </div>
            </div>
            <PageProductTop />
            <div className="content_product_w">
                <div className="container">
                    <PriceProductList />
                    <ProductList />
                </div>
            </div>
            <FormInfoReg />
            <SupportEmail />
            <PaymentInfo />
        </>

    )
}