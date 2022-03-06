export default function FormAddGroupProduct(props) {
    return (
        <div
            className={props.isPage ? "form-fixed-setting animation-left-form-fixed" : 'animation-left-close-form-fixed'}>
            <div className="inner-form">
                <div onClick={props.addGroupProduct} className="exit-form">
                    <i class="fa-solid fa-square-xmark"></i>
                </div>
                <form action="">
                    <h4 className="title">Thêm nhóm sản phẩm</h4>
                    <ul className="pw-os-item-w">
                        <li className="item-w">
                            <input onChange={(e) => props.onSetDataPost({
                                ...props.dataPost,
                                maNhomSP: e.target.value
                            })} type="text" name="codeSP" id="" />
                            <label htmlFor="">Mã nhóm sản phẩm</label>
                        </li>
                        <li className="item-w">
                            <input type="text" name="nhomsp" id=""
                                onChange={(e) => props.onSetDataPost({
                                    ...props.dataPost,
                                    tenNhomSP: e.target.value
                                })}
                            />
                            <label htmlFor="">Tên nhóm sản phẩm</label>
                        </li>
                        <li className="item-w">
                            <textarea type="text" name="moTa" id="" defaultValue={""}
                                onChange={(e) => props.onSetDataPost({
                                    ...props.dataPost,
                                    moTa: e.target.value
                                })}
                            />
                            <label htmlFor="">Mô tả </label>
                        </li>
                        <li className="item-w">
                            <label htmlFor="">Hình ảnh nhóm sản phẩm</label>
                            {props.children}
                        </li>
                        <li className="item-w">
                            <select name="" id=""
                                onChange={(e) => props.onSetDataPost({
                                    ...props.dataPost,
                                    tinhTrang: e.target.value
                                })}

                            >
                                <option value={-1}>Tình trạng</option>
                                <option value={0}>Hoạt động</option>
                                <option value={1}>Không hoạt động</option>
                            </select>
                        </li>
                    </ul>
                    <div className="btn-w">
                        <button type="reset">
                            <i class="fa-solid fa-retweet"></i>
                            Đặt lại</button>
                        <button onClick={props.postData} type="button">
                            <i class="fa-solid fa-plus"></i>
                            Thêm danh mục</button>
                    </div>
                </form>
            </div>
        </div>

    )
}