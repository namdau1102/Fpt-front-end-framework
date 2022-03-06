import ListAccountGame from "./ListAccountGame";

export default function ManagerAccount(props) {
    return (
        <div className="manager-list-account">
            <div className="flex-topbar-w">
                <div className="search-product">
                    <input onChange={props.onData} type="search" name="search" id="" placeholder="Tìm kiếm sản phẩm" />
                </div>
                <div className="select-search">
                    <div className="item-select">
                        <select onChange={props.onData} name="status" id="">
                            <option value={-1}>Tình trạng</option>
                            <option value={-1}>Tất cả</option>
                            <option value={0}>Hoạt động</option>
                            <option value={1}>Đang cập nhật </option>
                            <option value={2}>Không hoạt động</option>
                        </select>
                        <select onChange={props.onData} name="group" id="">
                            <option value="">Nhóm sản phẩm</option>
                            <option value="">Đang cập nhật </option>
                            <option value="">Đang cập nhật </option>
                        </select>
                    </div>
                </div>
            </div>
            <table className="table-account-root">
                <ListAccountGame>
                    {props.children}
                </ListAccountGame>
            </table>
        </div>

    )
}