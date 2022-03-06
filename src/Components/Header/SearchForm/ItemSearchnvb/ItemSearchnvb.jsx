import { Link } from "react-router-dom";
import { pathURLHome } from "../../../Router/Path";
import { Slug } from "../../../Slug/Slug";

export default function ItemSearchnvb({ item, textSearch }) {
    return (
        <Link to={pathURLHome.SEARCH_PRODUCT_KEY + "?keysearch=" + (textSearch) + "&page=2"} className="item_txt_seach">
            <p className="text">{item.tenSanPham}</p>
            <i className="far fa-trash-alt" />
        </Link>
    )
}