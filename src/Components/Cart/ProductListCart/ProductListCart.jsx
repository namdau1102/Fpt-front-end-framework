import CartItem from "../CartItem/CartItem";

export default function ProductListCart(props) {
    return (
        <ul className="list_product_cart_root">
            {props.children}
        </ul>
    )
}