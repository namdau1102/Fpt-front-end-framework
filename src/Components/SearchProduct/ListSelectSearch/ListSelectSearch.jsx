import { pathnameForm } from "./pathnameForm";

export default function ListSelectSearch(props) {
    return (
        <form onSubmit={props.onSbSelectSb} className="flex_select_list">
            <div className="select_list_wq">
                <select onChange={props.onChangeValue} name={pathnameForm.NAME_CATEGORY} id="" className="item_select">
                    <option value={-1}>Tất cả</option>
                    {props.children}
                </select>
                <label htmlFor="">Danh mục</label>
            </div>
            <div className="select_list_wq">
                <div className="input_price_sw">
                    <input onChange={props.onChangeValue} type="number" name={pathnameForm.PRICE_LSW1} id="" placeholder="Mức giá từ" />
                    -
                    <input onChange={props.onChangeValue} type="number" name={pathnameForm.PRICE_LSW2} id="" placeholder="Mức giá đến" />
                </div>
            </div>
            <div className="select_list_wq">
                <select onChange={props.onChangeValue} name={pathnameForm.TYPE_PRODUCT} id="" className="item_select">
                    <option value="">Tất cả</option>
                </select>
                <label htmlFor="">Thể loại</label>
            </div>
            <div className="select_list_wq">
                <select onChange={props.onChangeValue} name={pathnameForm.SORT_PRODUCT} id="" className="item_select">
                    <option value={-1}>Tất cả</option>
                    <option value={1}>Giá thấp đến Cao</option>
                    <option value={2}>Theo tên A-Z</option>
                    <option value={3}>Giá Cao xuống thấp</option>
                    <option value={4}>Theo tên Z-A</option>
                    <option value={5}>Sản phẩm mới nhất</option>

                </select>
                <label htmlFor="">Sắp xếp</label>
            </div>
            <div className="select_list_wq">
                <button type="submit" className="">Lọc</button>
            </div>
        </form>
    )
}