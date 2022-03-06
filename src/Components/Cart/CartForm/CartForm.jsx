export default function CartForm(props) {
    return (
        <form className="check_cart">
            <div className="form_qw_product">
                <h6 className="title_pr">
                    Bạn có mã ưu đãi?
                    <i className="fas fa-gift" />
                </h6>
                <div className="flex_ipn">
                    <input type="text" name="" id="" placeholder="Mã giảm giá" />
                    <button type="button" className="add_gif">
                        Áp dụng
                    </button>
                </div>
            </div>
            <div className="form_qw_product">
                <h6 className="title_pr">
                    Bạn muốn tặng cho bạn bè?
                    <i className="fas fa-gift" />
                </h6>
                <div className="flex_ipn">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Email của bạn bè"
                    />
                    <button type="button" className="add_gif">
                        Áp dụng
                    </button>
                </div>
            </div>
            {props.children[0]}
            {props.children[1]}

        </form>
    )
}