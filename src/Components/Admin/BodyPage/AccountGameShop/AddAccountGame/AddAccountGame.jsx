// Import Sun Editor's 
import LoadingUpload from "../../../LoadingUpload/LoadingUpload";
import FormAddGroupProduct from "../../FormFixed/FormAddGroupProduct";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function AddAccountGame(props) {
    return (
        <>
            <div className="manager-setting-product">
                <div className="text-topbar">
                    <h4 className="title">Thêm sản phẩm sản phẩm : {props.codeProduct} </h4>
                    <p className="title-cl">Cấu hình các thông tin sản phẩm</p>
                </div>
                <div className="col-form">
                    <form action="">
                        <div className="flex-topbar-w">
                            <h4 className="title">Dữ liệu sản phẩm</h4>
                            <div className="flex-wq">
                                <button type="button" className="">
                                    Đặt lại
                                </button>
                            </div>
                        </div>
                        <div className="col-value-w">
                            <ul className="flex-col-ow">
                                {/* <li className="item-col item-wq-col col-image-upload">
                                    <label htmlFor="">Hình ảnh sản phẩm</label>
                                    <input type="file"> 
                                </li> */}
                                <div className="row-upload">
                                    <li className="item-col-fw item-wq-col col-image-upload">
                                        <label htmlFor="">Hình ảnh <i class="fa-solid fa-circle-question"></i></label>
                                        <div className="upload-file">
                                            {props.children[6]}
                                            <div className="text-upload">
                                                <img src={props.linkHinhAnh} alt="" />
                                                <b>Thêm hình ảnh</b>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="item-col-fw item-wq-col col-image-upload">
                                        <label htmlFor="">Video sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                        <div className="upload-file">
                                            <input type="file" />
                                            <div className="text-upload">
                                                <b>Thêm video</b>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div className="row-col">
                                    <li className="item-col item-wq-col col-image-upload">
                                        <label htmlFor="">Mã sản phẩm</label>
                                        <input type="text" onChange={props.onSetDataPost} name="maSanPham" id="" />
                                    </li>
                                    <li className="item-col item-wq-col col-image-upload">
                                        <label htmlFor="">Tên sản phẩm</label>
                                        <input type="text" onChange={props.onSetDataPost} name="tenSanPham" id="" />
                                    </li>
                                </div>
                                <div className="row-col">
                                    <li className="item-col item-wq-col col-image-upload">
                                        <label htmlFor="">Giá sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                        <input type="text" onChange={props.onSetDataPost} name="giaSanPham" id="" />
                                    </li>
                                    <li className="item-col item-wq-col col-image-upload">
                                        <label htmlFor="">Đơn vị tính sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                        <select onChange={props.onSetDataPost} name="donViTien" id="" >
                                            <option>Chọn</option>
                                            {props.children[0]}
                                        </select>
                                    </li>
                                </div>
                                <div className="row-col">
                                    <li className="item-col-w3 item-wq-col ">
                                        <label htmlFor="">Loại giảm giá <i class="fa-solid fa-circle-question"></i></label>
                                        <select onChange={props.onSetDataPost} name="loaiGiamGia" id="">
                                            <option value="-1">Chọn</option>
                                            {props.children[1]}
                                        </select>
                                    </li>
                                    <li className="item-col-w3 item-wq-col ">
                                        <label htmlFor="">Giảm giá <i class="fa-solid fa-circle-question"></i></label>
                                        <input onChange={props.onSetDataPost} type="text" name="giamGia" id="" />

                                    </li>
                                    <li className="item-col-w3 item-wq-col ">
                                        <label htmlFor="">Số lượng sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                        <input onChange={props.onSetDataPost} type="text" name="soLuongSanPham" id="" />
                                    </li>
                                    <li className="item-col-w3 item-wq-col ">
                                        <label htmlFor="">Thanh toán <i class="fa-solid fa-circle-question"></i></label>
                                        <select onChange={props.onSetDataPost} name="thanhToan" id="">
                                            <option value={-1}>Chọn</option>
                                            {props.children[3]}
                                        </select>
                                    </li>
                                </div>
                                <li className="item-col-fw item-wq-col col-image-upload">
                                    <label htmlFor="">Trạng thái của sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                    <select onChange={props.onSetDataPost} name="tinhTrang" id="">
                                        <option value={-1}>Chọn</option>
                                        <option value={0}>Hoạt động</option>
                                        <option value={1}>Không Hoạt động</option>
                                        <option value={2}>Đang cập nhật</option>
                                    </select>
                                </li>
                                <li className="item-col item-wq-col  col-image-upload">
                                    <label htmlFor="">Nhóm sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                    <select onChange={props.onSetDataPost} name="nhomSP" id="">
                                        <option value={-1}>Chọn</option>
                                        {props.children[2]}
                                    </select>
                                </li>
                                <li className="item-col item-wq-col col-image-upload">
                                    <label htmlFor="">Danh mục sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                    <select onChange={props.onSetDataPost} name="danhMucSP" id="">
                                        <option>Chọn</option>
                                        {props.children[8]}
                                    </select>
                                </li>
                                <div className="row-col">
                                    <li className="item-col item-wq-col col-image-upload">
                                        <label htmlFor="">Thể loại sản phẩm</label>
                                        <input value={props.dataAccount.theloaiText} onKeyPress={props.onEnterKey} onChange={props.onAddTheLoai} type="text" name="tenSanPham" id="theloai" />
                                        <ul className="col-theloai">
                                            {props.children[10]}
                                        </ul>
                                    </li>
                                    <li className="item-col item-wq-col  col-image-upload">
                                        <label htmlFor="">Dạng sản phẩm cung cấp<i class="fa-solid fa-circle-question"></i></label>
                                        <select onChange={props.onSetDataPost} name="gameBuy" id="">
                                            <option value={0}>Chọn</option>
                                            <option value={1}>Dạng Tài khoản - mật khẩu </option>
                                            <option value={2}>Dạng Key</option>
                                            <option value={3}>Gửi MAIL</option>
                                        </select>
                                        <ul className="flex-end-w">
                                            {props.children[9]}
                                        </ul>
                                    </li>
                                </div>
                                <li className="item-col-fw item-wq-col col-image-upload">
                                    <label htmlFor="">Lưu ý sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                    <textarea name="luuY" id="" onChange={props.onSetDataPost} />
                                </li>
                                <li className="item-col-fw item-wq-col col-image-upload">
                                    <label htmlFor="">Thông tin sản phẩm</label>
                                    {/* <textarea name="luuYSP" onChange={props.valueStt.luuYSP} id="" defaultValue={""} /> */}
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data=""
                                        onChange={(event, data) => {
                                            props.onEditor(data.getData())
                                        }}
                                    />
                                </li>
                                <div className="button-list">
                                    <button type="reset">Đặt lại</button>
                                    <button onClick={props.onPostProduct} type="button">Đăng sản phẩm </button>
                                </div>
                            </ul>

                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}