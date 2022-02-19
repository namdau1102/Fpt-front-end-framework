import CartItem from "../CartItem/CartItem";

export default function ProductListCart() {
    return (
        <ul className="list_product_cart_root">
            <CartItem />
            <CartItem />
        </ul>
    )
}