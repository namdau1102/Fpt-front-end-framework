import ItemProduct from "../ItemProduct/ItemProduct";

export default function ProductList() {
    return (
        <div className="pw_product_game">
            <div className="wq_text">
                <div className="title_wq_text">
                    <h4 className="text_wq">
                        <i className="fas fa-dice-d6" />
                        Sản phẩm nổi bật
                    </h4>
                    <a href="" className="load_game_w">
                        Khám phá
                    </a>
                </div>
                <div className="inner_text_title">
                    <p className="text">
                        Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích
                    </p>
                </div>
            </div>
            <div className="wq_product_game">
                <ul className="list_product_game_q">
                    <ItemProduct />
                </ul>
            </div>
        </div>
    )
}