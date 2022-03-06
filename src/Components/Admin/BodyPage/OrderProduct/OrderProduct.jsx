import ListOrderProductContainer from "../../Container/ListOrderProductContainer";
import FlexTopBar from "./FlexTopBar/FlexTopBar";
export default function OrderProduct(props) {
    return (
        <div className="manager-order-product">
            <FlexTopBar />
            <table className="root-order">
                <ListOrderProductContainer />
            </table>
            <ul className="page-order-item">
                {props.children}
            </ul>
        </div>

    )
}