import { useEffect } from "react"
import CartForm from "./CartForm/CartForm"
import ProductListCart from "./ProductListCart/ProductListCart"
import StatusCart from "./StatusCart/StatusCart"

export default function PageCart() {
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
                                Giỏ hàng <p>( 1 Sản phẩm )</p>
                            </h2>
                            <div className="list_product_cart">
                                <ProductListCart />
                            </div>
                        </div>
                        <div className="flex_cart_right_wq">
                            <CartForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}