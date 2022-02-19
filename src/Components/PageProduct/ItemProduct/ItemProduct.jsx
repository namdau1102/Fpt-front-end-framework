import { Link } from "react-router-dom";
import { pathURLHome } from "../../Router/Path";

export default function ItemProduct() {
    return (
        <Link to={pathURLHome.INFORMATION_PRODUCT} className="item_game_w">
            <div className="image_game">
                <img
                    src="https://cdn.divineshop.vn/image/catalog/Anh/Banner/Spotify%201%20nam.png?hash=1623646056"
                    alt=""
                />
            </div>
            <div className="status_game">
                <span>Hết hàng</span>
            </div>
            <div className="name_game_product">
                <p className="text">Far Cry 6 ( Ubisoft ) - Standard Edition</p>
            </div>
            <div className="price_game">
                <div className="price_game_ww_q">
                    <p className="price_w1">299.000đ</p>
                    <p className="price_w2">1.099.000đ</p>
                </div>
                <div className="sale_game_i">
                    <span>52%</span>
                </div>
            </div>
        </Link>
    )
}