export default function CartItem() {
    return (
        <li className="item_cart_product">
            <div className="image">
                <img
                    src="https://cdn.divineshop.vn/image/catalog/Anh/Grammarly%20Premium%201%20n%C4%83m.png?hash=1623645444"
                    alt=""
                />
            </div>
            <div className="rw_cl_text">
                <h6 className="name_product">
                    Tài khoản Grammarly Premium 1 năm
                </h6>
                <div className="type_product">
                    <a href="">Movie</a>
                    <a href="">Học tập</a>
                </div>
                <div className="line_row_wid" />
                <div className="stt_product_rm">
                    <div className="status_w">
                        <i className="far fa-square" />
                        <div className="status_product">
                            Tình trạng :
                            <span className="status active_w">Còn hàng</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quanlity_product">
                <form action="">
                    <button type="button" className="btn_w add_product">
                        -
                    </button>
                    <input
                        type="text"
                        defaultValue={1}
                        className="ipn_product"
                    />
                    <button type="button" className="btn_w rm_product">
                        +
                    </button>
                </form>
            </div>
            <div className="price_product">
                <div className="price">
                    <h5 className="price_wq">490.000 đ</h5>
                    <div className="price_root_wq">
                        <div className="sale_q">49%</div>
                        <div className="price_qw">1.500.000 đ</div>
                    </div>
                </div>
                <div className="rm_pr">
                    <button type="button" className="remove_pr">
                        <i className="fas fa-trash-alt color_icon" />
                    </button>
                </div>
            </div>
        </li>
    )
}