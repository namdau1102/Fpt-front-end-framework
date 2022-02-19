import MenuTopPage from "../MenuTopPage/MenuTopPage";
import ChatUserProduct from "./ChatuserProduct/ChatUserProduct";
import TextInfomationProduct from "./TextInfomationProduct/TextInfomationProduct";
import TopBarInfomationProduct from "./TopBarInfomationProduct/TopBarInfomationProduct";

export default function ProductInfomation() {
    return (
        <>
            <MenuTopPage />
            <TopBarInfomationProduct />
            <TextInfomationProduct />
            <ChatUserProduct />
        </>
    )
}