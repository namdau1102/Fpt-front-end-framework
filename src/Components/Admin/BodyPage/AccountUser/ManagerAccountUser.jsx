export default function ManagerAccountUser() {
    return (
        <div className="manager-account-user">
            <div className="top-bar-flex">
                <div className="search-user">
                    <input type="search" name="" id="" placeholder="Tìm kiếm tài khoản" />
                </div>
                <div className="list-select-w">
                    <select name="" id="">
                        <option value="">Loại tài khoản</option>
                    </select>
                    <select name="" id="">
                        <option value="">Tình trạng</option>
                    </select>
                </div>
            </div>
            <div className="table-user-login-w">
                <table>
                    <thead>
                        <tr>
                            <th className="item-head">ID</th>
                            <th className="item-head image-user">Avatar</th>
                            <th className="item-head code-user">Mã tài khoản</th>
                            <th className="item-head user-name">Tên tài khoản</th>
                            <th className="item-head password-user">Mật khẩu</th>
                            <th className="item-head cmnd-user">CMND</th>
                            <th className="item-head group-user">Loại tài khoản</th>
                            <th className="item-head status-user">Tình trạng</th>
                            <th className="item-head "></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr tabIndex={0} className="item-body-w">
                            <td className="item-col">1</td>
                            <td className="item-col image-user">
                                <div className="avatar">
                                    <img
                                        src="../../assets/images/175680824_546906196349888_3882325029746498974_n.jpg"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td className="item-col code-user">
                                <p>PKIWQM4812W1</p>
                            </td>
                            <td className="item-col user-name">
                                <p>namdau1102</p>
                            </td>
                            <td className="item-col password-user">
                                <div className="col-password">
                                    <p style={{ display: "none" }}>124912571251278512758215</p>
                                    <i className="fa-solid fa-eye color-icon" />
                                </div>
                            </td>
                            <td className="item-col cmnd-user">241913808</td>
                            <td className="item-col group-user">ADMIN</td>
                            <td className="item-col status-user">
                                <p className="status-danger">BỊ KHÓA</p>
                            </td>
                            <td className="item-col setting-user">
                                <i className="fa-solid fa-gear color-icon" />
                            </td>
                        </tr>
                        <tr tabIndex={0} className="item-body-w">
                            <td className="item-col">1</td>
                            <td className="item-col image-user">
                                <div className="avatar">
                                    <img
                                        src="../../assets/images/175680824_546906196349888_3882325029746498974_n.jpg"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td className="item-col code-user">
                                <p>PKIWQM4812W1</p>
                            </td>
                            <td className="item-col user-name">
                                <p>namdau1102</p>
                            </td>
                            <td className="item-col password-user">
                                <div className="col-password">
                                    <p style={{ display: "none" }}>124912571251278512758215</p>
                                    <i className="fa-solid fa-eye color-icon" />
                                </div>
                            </td>
                            <td className="item-col cmnd-user">241913808</td>
                            <td className="item-col group-user">ADMIN</td>
                            <td className="item-col status-user">
                                <p className="status-suggest"> HOẠT ĐỘNG</p>
                            </td>
                            <td className="item-col setting-user">
                                <i className="fa-solid fa-gear color-icon" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}