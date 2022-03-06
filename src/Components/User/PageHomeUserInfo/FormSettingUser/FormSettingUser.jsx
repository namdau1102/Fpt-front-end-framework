export default function FormSettingUser({ dataUser, onSelectQH, onSelectXP, children }) {
    return (
        <form action="">
            <li className="item_info_user_stt">
                <input
                    className="input_text_sett"
                    type="text"
                    name=""
                    id=""
                    value={dataUser && dataUser.hoVaTen}
                    placeholder={dataUser && dataUser.hoVaTen.length === 0 ? 'Chưa có tên ' : ''}
                />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Họ và tên
                </label>
            </li>
            <li className="item_info_user_stt">
                <input
                    value={dataUser && dataUser.tenTaiKhoan}
                    className={dataUser && dataUser.tenTaiKhoan.length > 0 ? "input_text_sett" : 'label_text_topbar_not_text'}
                    type="text" name="" id="" />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Tên đăng nhập
                </label>
            </li>
            <li className="item_info_user_stt">
                <input
                    className="input_text_sett"
                    type="text" name="" id=""
                    placeholder={dataUser && dataUser.soDienThoai.length === 0 ? 'Chưa có sô điện thoại ' : ''}
                />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Số điện thoại
                </label>
            </li>
            <li className="item_info_user_stt">
                <input
                    className="input_text_sett" type="text" name="" id=""
                    placeholder={dataUser && dataUser.CMND.length === 0 ? 'Chưa có CMND ' : ''}
                />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Chứng minh nhân dân
                </label>
            </li>
            <li className="item_info_user_stt">
                <select name="" id="" defaultValue={dataUser && dataUser.GioiTinh.data[0]}>
                    <option value={0}>Nam</option>
                    <option value={1}>Nữ</option>
                </select>
                <label htmlFor="" className="label_text_topbar">
                    Giới tính
                </label>
            </li>
            <li className="item_info_user_stt">
                <select name="thanhpho" id="" defaultValue={dataUser && dataUser.matp} onChange={(e) => onSelectQH(e.target.value)}>
                    <option value={null}>Chọn</option>
                    {

                        children && children[0]
                    }
                </select>
                <label htmlFor="" className="label_text_topbar">
                    Tỉnh - Thành phố
                </label>
            </li>
            <li className="item_info_user_stt">
                <select name="quanhuyen" id=" " defaultValue={dataUser && dataUser.qh} onChange={(e) => onSelectXP(e.target.value)}>
                    <option value={null}>Chọn</option>
                    {
                        children && children[1]
                    }
                </select>
                <label htmlFor="" className="label_text_topbar">
                    Quận - Huyện
                </label>
            </li>
            <li className="item_info_user_stt">
                {<select name="" id="" defaultValue={dataUser && dataUser.xaid}>
                    <option value={null}>Chọn</option>
                    {
                        children && children[2]

                    }
                </select>}
                <label htmlFor="" className="label_text_topbar">
                    Xã - Phường
                </label>
            </li>
            <li className="item_info_user_stt">
                <input className="input_text_sett" type="text" name="" id="" />
                <label htmlFor="" className="label_text_topbar_not_text">
                    Số nhà - Đường
                </label>
            </li>
            <li className="item_info_user_stt">
                <button className="btn_save_profile" type="button">
                    <i className="fas fa-save" />
                    Lưu thay đổi
                </button>
            </li>
        </form >
    )
}