export default function AvatarUser({ dataUser }) {
    return (
        <>
            <div className="fl_image_up">
                <div className="image">
                    <img
                        src={dataUser && dataUser.linkHinhAnh}
                        alt=""
                    />
                </div>
                <button className="btn_up_image">Sửa ảnh đại diện</button>
            </div>
            <div className="info_image_q">
                <h6>Vui lòng chọn ảnh nhỏ hơn 5MB </h6>
                <h6>Chọn hình ảnh phù hợp, không phản cảm </h6>
            </div>
        </>
    )
}