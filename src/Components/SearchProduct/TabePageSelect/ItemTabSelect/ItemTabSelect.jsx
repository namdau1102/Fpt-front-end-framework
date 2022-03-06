import { Link } from "react-router-dom";

export default function ItemTabSelect(props) {
    return (
        <>
            <Link to={"?" + props.linkPath} className="item_page_list">
                <p >{props.id}</p>
            </Link>
        </>
    )
}