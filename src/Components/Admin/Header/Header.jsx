export default function Header() {
    return (
        <div className="header-admin">
            <div className="flex-header-wq">
                <div className="logo-admin">
                    <div className="logo">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXqRALLydtrNxBboA7lsWOgXEOUqo8iskkA&usqp=CAU"
                            alt=""
                        />
                    </div>
                    <div className="name-admin">
                        <span className="top-v1">ADMIN</span>
                        <span className="top-v2">DAU VAN NAM</span>
                    </div>
                </div>
                <div className="flex-top-bar">
                    <div className="left-lw-q">
                        <div className="menu-bar-w">
                            <i className="fas fa-bars" />
                        </div>
                        <div className="text-menu-t">
                            <span className="wq">Thông báo WEB</span>
                        </div>
                        <div className="search-menu-w">
                            `
                            <input type="search" name="" id="" placeholder="Tìm kiếm chức năng" />
                            <i className="fas fa-search fs-search-wq" />
                        </div>
                    </div>
                    <div className="right-lw-q">
                        <ul className="root-item-op-kl">
                            <li className="item-op">
                                <i className="far fa-envelope color-icon" />
                                <h5 className="quanlity-pst">10</h5>
                            </li>
                            <li className="item-op">
                                <i className="fas fa-bell color-icon" />
                                <h5 className="quanlity-pst">10</h5>
                            </li>
                            <li className="item-op">
                                <i className="fas fa-cog color-icon" />
                                <h5 className="quanlity-pst">10</h5>
                            </li>
                            <li className="item-op avatar-ad">
                                <img
                                    src="https://jobick.dexignlab.com/xhtml/images/profile/pic1.jpg"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}