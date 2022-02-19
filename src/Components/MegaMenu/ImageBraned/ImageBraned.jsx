export default function ImageBraned() {
    return (
        <div className="image_braned">
            <div className="bs-image-braned image_braned_left">
                <div className="topbar_image">
                    <li className="item_image">
                        <img
                            src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/Adobe1201-37163.png?hash=1641957340"
                            alt=""
                        />
                    </li>
                    <li className="item_image">
                        <img
                            src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/Spotify1201-20572.png?hash=1641957357"
                            alt=""
                        />
                    </li>
                </div>
                <div className="bottombar_image slider_image">
                    <div className="item-arrow arrow-left">
                        <i
                            onclick="plusSlides(-1)"
                            className="fa-solid fa-circle-arrow-left"
                        />
                    </div>
                    <div className="item-arrow arrow-right">
                        <i
                            onclick="plusSlides(1)"
                            className="fa-solid fa-circle-arrow-right"
                        />
                    </div>
                    <div className="inner-image-slider">
                        <li className="item_image_slider_w">
                            <img
                                src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/data%20si%C3%AAu%20t%E1%BB%91c-76618.png?hash=1640349471"
                                alt=""
                            />
                        </li>
                        <li className="item_image_slider_w">
                            <img
                                src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/Game1201-34441.png?hash=1641957437"
                                alt=""
                            />
                        </li>
                        <li className="item_image_slider_w">
                            <img
                                src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/Adobe1201-37163.png?hash=1641957340"
                                alt=""
                            />
                        </li>
                    </div>
                </div>
            </div>
            <div className="bs-image-braned image_braned_right">
                <li className="item_image">
                    <img
                        src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/Adobe1201-37163.png?hash=1641957340"
                        alt=""
                    />
                </li>
                <li className="item_image">
                    <img
                        src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/Game1201-34441.png?hash=1641957437"
                        alt=""
                    />
                </li>
                <li className="item_image">
                    <img
                        src="https://cdn.divineshop.vn/image/catalog/Anh/24.12.21/Spotify1201-20572.png?hash=1641957357"
                        alt=""
                    />
                </li>
            </div>
        </div>
    )
}