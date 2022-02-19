import ImageBraned from "./ImageBraned/ImageBraned";
import MenuBar from "./MenuBar/MenuBar";
import TopBarMenu from "./TopBarMenu/TopBarMenu";
import TopSaleImage from "./TopSaleImage/TopSaleImage";

export default function MegaMenu() {
    return (
        <div className="mega_menu_fw">
            <div className="container">
                <TopBarMenu />
                <div className="menu_slider_bar">
                    <MenuBar />
                    <ImageBraned />
                </div>
                <TopSaleImage />
            </div>
        </div>

    )
}