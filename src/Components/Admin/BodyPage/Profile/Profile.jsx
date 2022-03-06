export default function Profile() {
    return (
        <>
            <div className="profile-info">
                <div className="background-w">
                    <img src="../../assets/images/175680824_546906196349888_3882325029746498974_n.jpg" alt="" />
                </div>
                <div className="flex-profile">
                    <div className="avatar-w">
                        <img
                            src="../../assets/images/175680824_546906196349888_3882325029746498974_n.jpg"
                            alt=""
                        />
                    </div>
                    <div className="text-w-io">
                        <div className="w-text-p">
                            <h1 className="tx-oi t1-p">ĐẬU VĂN NAM</h1>
                            <h4 className="tx-oi info-w">UI / UX Designer</h4>
                            <p className="tx-oi address-w">
                                <i className="fa-solid fa-location-pin " />
                                Medan, Sumatera Utara - ID
                            </p>
                        </div>
                        <div className="oi-wp-up">
                            <div className="item-info">
                                <i className="fa-brands fa-internet-explorer color-icon" />
                                <span>
                                    Truy cập Web :<p>360.156.245Tr</p>
                                </span>
                            </div>
                            <div className="item-info">
                                <i className="fa-brands fa-facebook color-icon" />
                                <span>
                                    Thành viên Facebook : <p>965.254K</p>
                                </span>
                            </div>
                            <div className="item-info">
                                <i className="fa-solid fa-cloud-arrow-up color-icon" />
                                <button className="btn btn-profile">Cập nhật thông tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-text-wq">
                <div className="info-user-wq box-prow-w">
                    <div className="title-w-o">
                        <i className="fa-solid fa-user-gear" />
                        <span>THÔNG TIN TÀI KHOẢN</span>
                    </div>
                    <form action="" method="post">
                        <div className="item-wq-o">
                            <label htmlFor="username">Tên người dùng</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="item-wq-o">
                            <label htmlFor="username">Tên tài khoản</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="item-wq-o">
                            <label htmlFor="username">Thông tin phụ</label>
                            <textarea name="" id="" cols={30} rows={10} defaultValue={""} />
                        </div>
                        <div className="item-wq-o">
                            <span className="title-w">Địa chỉ tài khoản</span>
                            <div className="item-wq-o-w2">
                                <label htmlFor="username">Tỉnh / Thành phố</label>
                                <select name="" id="">
                                    <option value="" />
                                    <option value="" />
                                    <option value="" />
                                </select>
                            </div>
                            <div className="item-wq-o-w2">
                                <label htmlFor="username">Quận / Huyện</label>
                                <select name="" id="">
                                    <option value="" />
                                    <option value="" />
                                    <option value="" />
                                </select>
                            </div>
                            <div className="item-wq-o-w2">
                                <label htmlFor="username">Xã / Phường / Thị trấn</label>
                                <select name="" id="">
                                    <option value="" />
                                    <option value="" />
                                    <option value="" />
                                </select>
                            </div>
                        </div>
                        <div className="item-wq-o">
                            <label htmlFor="username">Địa chỉ cụ thể</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div className="btn-update-user">
                            <button type="submit">
                                <i className="fa-solid fa-floppy-disk color-icon" />
                                Cập nhật thông tin
                            </button>
                        </div>
                    </form>
                </div>
                <div className="info-cio-pp box-prow-w">
                    <div className="title-w-o">
                        <i className="fa-solid fa-file-lines" />
                        <span>THÔNG TIN CHI TIẾT</span>
                    </div>
                    <div className="inner-tewq-o">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className="contact-web box-prow-w">
                    <div className="title-w-o">
                        <i className="fa-solid fa-address-book" />
                        <span>THÔNG TIN LIÊN HỆ</span>
                    </div>
                    <div className="inner-contact">
                        <div
                            href="#"
                            aria-disabled="true"
                            className="item-contact item-contact-facebook"
                        >
                            <i className="fa-brands fa-facebook color-facebook" />
                            <span className="text">Trang cá nhân </span>
                            <div className="setting-w">
                                <i className="fa-solid fa-gear" />
                            </div>
                        </div>
                        <div href="#" className="item-contact item-contact-youtube">
                            <i className="fa-brands fa-youtube color-youtube" />
                            <span className="text">Trang Youtube</span>
                            <div className="setting-w">
                                <i className="fa-solid fa-gear color-setting" />
                            </div>
                        </div>
                        <div href="#" className="item-contact item-contact-instagram">
                            <i className="fa-brands fa-instagram color-instagram" />
                            <span className="text">Trang Instagram</span>
                            <div onclick="alert(123123)" className="setting-w">
                                <i className="fa-solid fa-gear color-setting" />
                            </div>
                        </div>
                        <div href="#" className="item-contact">
                            <i className="fa-brands fa-tiktok color-tiktok" />
                            <span className="text">Trang Tik Tok</span>
                            <div className="setting-w">
                                <i className="fa-solid fa-gear color-setting" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}