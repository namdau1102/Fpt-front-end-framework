import ProductItemTop from "./ProductItemTop/ProductItemTop";

export default function PageProductTop() {
    return (
        <div className="product_game_buy_top">
            <div className="image_w">
                <div className="top_buy_inner_q">
                    <div className="container">
                        <div className="inner_top_buy">
                            <div className="title_top_buy">
                                <span className="title">
                                    <i className="fas fa-chart-line color_icon" />
                                    #Sản phẩm bán chạy nhất
                                </span>
                                <span className="load_game_pro">Khám phá</span>
                            </div>
                            <div className="wq_product_game">
                                <ul className="list_product_game_q">
                                    <ProductItemTop />
                                    <ProductItemTop />
                                    <ProductItemTop />
                                    <ProductItemTop />
                                    <ProductItemTop />
                                    <ProductItemTop />
                                    <ProductItemTop />
                                    <ProductItemTop />
                                </ul>
                                <div className="inner_content_wq">
                                    <i className="fas fa-angle-double-down color_icon" />
                                    <span className="text_wq">Xem thêm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}