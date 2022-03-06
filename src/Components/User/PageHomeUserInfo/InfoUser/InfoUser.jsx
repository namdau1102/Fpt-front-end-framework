export default function InfoUser({ dataUser }) {
    return (
        <>
            <li className="item_info_user">
                <span className="vw_q title_pow">Email</span>
                <p className="vw_q">{dataUser && dataUser.email.length > 0 ? dataUser.email : 'Chưa có Email'} </p>
            </li>
            <li className="item_info_user">
                <span className="vw_q title_pow">Tên đăng nhập</span>
                <p className="vw_q">{dataUser && dataUser.tenTaiKhoan.length > 0 ? dataUser.tenTaiKhoan : 'Chưa có tên đăng nhập'}</p>
            </li>
            <li className="item_info_user">
                <span className="vw_q vw_q title_pow">Họ và tên</span>
                <p className="vw_q">{dataUser && dataUser.hoVaTen.length > 0 ? dataUser.hoVaTen : 'Chưa có Họ và tên'}</p>
            </li>
            <li className="item_info_user">
                <span className="vw_q title_pow">Nhóm khách hàng</span>
                <p className="vw_q">{dataUser && dataUser.tenLoaiKhachHang.length > 0 ? dataUser.tenLoaiKhachHang : 'Chưa xếp loại nhóm '} </p>
            </li>
            <li className="item_info_user">
                <span className="vw_q title_pow">Số dư</span>
                <p className="vw_q">{dataUser && dataUser.soDu}đ</p>
            </li>
            <li className="item_info_user">
                <span className="vw_q title_pow">Đã tích lũy</span>
                <p className="vw_q">{dataUser && dataUser.diemTichLuy} </p>
            </li>
            <li className="item_info_user">
                <span className="vw_q title_pow">Ngày tham gia</span>
                <p className="vw_q">{dataUser && dataUser.ngayThamGia}</p>
            </li>
        </>
    )
}