import { useEffect } from "react"
import CartFormContainer from "../../Containers/CartFormContainer"
import ProductListCartContainer from "../../Containers/ProductListCartContainer"
import StatusCart from "./StatusCart/StatusCart"

export default function PageCart(props) {
    useEffect(() => {
        document.title = "Giỏ hàng"
    }, [])
    return (
        <div className="bd_cart_shop">
            <div className="container">
                <StatusCart />
                <div className="lop_cart_w_q">
                    <div className="flex_cart">
                        <div className="flex_cart_left_wq">
                            <h2 className="title_cart">
                                Giỏ hàng <p>( {props.dataCartUser.cartUser.length} Sản phẩm )</p>
                            </h2>
                            <div className="list_product_cart">
                                <ProductListCartContainer />
                            </div>
                        </div>
                        <div className="flex_cart_right_wq">
                            <CartFormContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}