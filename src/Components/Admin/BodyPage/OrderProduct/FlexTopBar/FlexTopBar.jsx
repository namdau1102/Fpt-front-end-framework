export default function FlexTopBar() {
    return (
        <div className="flex-topbar-w">
            <div className="search-order">
                <input type="search" name="" id="" placeholder="Tìm kiếm đơn hàng" />
            </div>
            <div className="btn-wq-p">
                <button type="button">
                    <i className="fa-solid fa-plus color-icon" />
                    Thêm đơn hàng mới
                </button>
                <button type="button">
                    <i className="fa-solid fa-list" />
                </button>
            </div>
        </div>
    )
}