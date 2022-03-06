import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function PageSettingProduct(props) {
    return (
        <div className="manager-setting-product">
            <div className="text-topbar">
                <h4 className="title">Cài đặt sản phẩm : {props.codeProduct} </h4>
                <p className="title-cl">Cấu hình các thông tin sản phẩm</p>
            </div>
            <div className="col-form">
                <form action="">
                    <div className="flex-topbar-w">
                        <h4 className="title">Dữ liệu sản phẩm</h4>
                        <div className="flex-wq">
                            <button type="button" className="">
                                Ẩn sản phẩm này
                            </button>
                        </div>
                    </div>
                    <div className="col-value-w">
                        <ul className="flex-col-ow">
                            <li className="item-col item-wq-col col-image-upload">
                                <label htmlFor="">Hình ảnh sản phẩm</label>
                                {/* <input type="file"> */}
                            </li>
                            <li className="item-col item-wq-col col-image-upload">
                                <label htmlFor="">Tên sản phẩm</label>
                                <input value={props.valueStt.tenSanPham} type="text" onChange={props.onChangeValue} name="tenSanPham" id="" />
                            </li>
                            <li className="item-col item-wq-col col-image-upload">
                                <label htmlFor="">Giá sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                <input type="text" value={props.valueStt.giaSanPham} onChange={props.onChangeValue} name="giaSanPham" id="" />
                            </li>
                            <li className="item-col item-wq-col col-image-upload">
                                <label htmlFor="">Đơn vị tính sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                <select onChange={props.onChangeValue} name="maDVT" id="" value={props.valueStt.maDVT}>
                                    <option>Chọn</option>
                                    {props.children[2]}
                                </select>
                            </li>
                            <li className="item-col-fw item-wq-col col-image-upload">
                                <label htmlFor="">Trạng thái của sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                <select onChange={props.onChangeValue} value={props.valueStt.tinhTrang} name="tinhTrang" id="">
                                    <option value={-1}>Chọn</option>
                                    <option value={0}>Hoạt động</option>
                                    <option value={1}>Không Hoạt động</option>
                                    <option value={2}>Đang cập nhật</option>
                                </select>
                            </li>
                            <li className="item-col item-wq-col  col-image-upload">
                                <label htmlFor="">Nhóm sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                <select value={props.valueStt.maNhomSP} onChange={props.onChangeValue} name="maNhomSP" id="">
                                    <option>Chọn</option>
                                    {props.children[0]}
                                </select>
                            </li>
                            <li className="item-col item-wq-col col-image-upload">
                                <label htmlFor="">Thanh toán <i class="fa-solid fa-circle-question"></i></label>
                                <select value={props.valueStt.maThanhToan} name="maThanhToan" id="">
                                    <option>Chọn</option>
                                    {props.children[1]}
                                </select>
                            </li>
                            <li className="item-col-fw  item-wq-col col-image-upload">
                                <label htmlFor="">Giảm giá <i class="fa-solid fa-circle-question"></i> </label>

                                <input value={props.valueStt.giamGia} onChange={props.onChangeValue} type="text" name="giamGia" id="" />
                            </li>
                            <li className="item-col-fw item-wq-col col-image-upload">
                                <label htmlFor="">Lưu ý sản phẩm <i class="fa-solid fa-circle-question"></i></label>
                                <textarea value={props.valueStt.luuYSP} name="luuYSP" id="" onChange={props.onChangeValue} />
                            </li>
                            <li className="item-col-fw item-wq-col col-image-upload">
                                <label htmlFor="">Thông tin sản phẩm</label>
                                {/* <textarea name="luuYSP" onChange={props.valueStt.luuYSP} id="" defaultValue={""} /> */}
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={props.valueStt.thongTinSP}
                                    name="thongTinSP"
                                    onChange={(event, data) => {
                                        props.onEditor(data.getData())
                                    }}
                                />
                            </li>
                            <div className="button-list">
                                <button type="reset">Đặt lại</button>
                                <button onClick={props.onShowFromSw} type="button">Cập nhât</button>
                            </div>
                        </ul>

                    </div>
                </form>
            </div>
        </div>

    )
}