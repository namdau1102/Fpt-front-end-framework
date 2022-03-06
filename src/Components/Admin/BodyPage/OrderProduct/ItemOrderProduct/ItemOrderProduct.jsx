import LoadingBtn from '../../../../LoadingForm/LoadingBtn'
export default function ItemOrderProduct({ id, maDonHang, tinhTrang, tenSanPham, tongTien, onShowFromSw }) {
    return (
        <tr tabIndex={0} className="item-col-w">
            <td className="item-col check-box">
                <input type="checkbox" name="" id="" />
            </td>
            <td className="item-head th-td-id">{id}</td>
            <td className="item-col th-td-code-order">{maDonHang}</td>
            <td className="item-col th-td-nameorder">
                <p>{tenSanPham}</p>
            </td>
            <td className="item-col th-td-date">
                <p>Thứ Năm 17 tháng 2, 2022</p>
            </td>
            <td className="item-col th-td-status">
                <div className={tinhTrang === 2 ? "text-w-shipping load-warring-w" : tinhTrang === 1 ? "text-w-shipping load-danger-w" : tinhTrang === 0 ? "text-w-shipping load-shipping-w" : ''}>
                    {
                        tinhTrang === 2 ? <>
                            <LoadingBtn />
                            <p>Đang chờ</p>
                        </> : tinhTrang === 1 ? '222' : tinhTrang === 0 ? <>
                            <i class="fa-solid fa-circle-check"></i>
                            <p className="success-load">Đã xác nhận</p>
                        </> : ''
                    }
                </div>
            </td>

            <td className="item-col th-td-deal-product">
                <p>
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ut
                    atque enim totam laboriosam voluptatibus corporis veniam ullam
                    adipisci dicta deleniti itaque nobis obcaecati minus ipsa culpa,
                    doloremque ab repellat? */}
                </p>
            </td>
            <td className="item-col th-td-total-price">{tongTien}</td>
            <td className="item-col th-td-setting-oder">
                <div className="flex-setting-oder">
                    <i onClick={() => onShowFromSw(maDonHang)} className="fa-solid fa-rocket color-icon color-icon-rocket" />
                    <i className="fa-solid fa-gear color-icon color-icon-setting" />
                </div>
            </td>
        </tr>
    )
}