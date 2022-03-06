import ListProductFavourite from "./ListProductFavourite/ListProductFavourite";

export default function PageProductFavourite() {
    return (
        <div className="info_user">
            <div className="title_info_user">
                <h2>Sản phẩm yêu thích</h2>
                <p className="in_wq">
                    Danh sách các sản phẩm mà bạn đã đánh dấu "yêu thích"
                </p>
            </div>
            <div className="pw_product_game">
                <div className="wq_product_game">
                    <ListProductFavourite />
                    <div className="inner_games_load_w">
                        <i className="fas fa-angle-double-down" />
                        <span className="text_load">Xem thêm</span>
                    </div>
                </div>
            </div>
        </div>

    )
}