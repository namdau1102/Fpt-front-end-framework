import { Link } from "react-router-dom";
import { pathURLHome } from "../../Router/Path";
import { Slug } from "../../Slug/Slug";

export default function ItemProduct({ item }) {
    return (
        <Link to={pathURLHome.INFORMATION_PRODUCT + '/' + item.maSanPham + "/" + Slug(item.tenSanPham)} className="item_game_w">
            <div className="image_game">
                <img
                    src={item.linkHinhAnh}
                    alt=""
                />
            </div>
            <div className="status_game">
                <span>Hết hàng</span>
            </div>
            <div className="name_game_product">
                <p className="text">{item.tenSanPham}</p>
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