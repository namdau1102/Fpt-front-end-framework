import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { st_fromLogin } from "../../Actions";
import PageHomeUserInfoContainer from "../../Containers/PageHomeUserInfoContainer";
import PageAddPriceUser from "./AddPriceUser/PageAddPriceUser";
import PageChangePass from "./ChangePassUser/PageChangePass";
import OrderDetailProductContainer from "../../Containers/OrderDetailProductContainer";
import PageHistoryOrderUserContainer from "../../Containers/PageHistoryOrderUserContainer";
import PageHistoryTransaction from "./HistoryTransaction/PageHistoryTransaction ";
import TransactionDetailProduct from "./HistoryTransaction/TransactionDetailProduct/TransactionDetailProduct";
import MenuUserLeft from "./MenuUserLeft/MenuUserLeft";
import PageProductFavourite from "./ProductFavourite/PageProductFavourite";

export default function PageUser(props) {
    const [isPageHomeUser, SetIsPageHomeUser] = useState({
        isPageHome: props.isPageID,
        isPageOrder: props.isPageDetail
    })
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.loginUser)
    const showFromLogin = (isDisplay) => dispatch(st_fromLogin(isDisplay))

    useEffect(() => {
        document.title = "Lịch sử đơn hàng"
    }, [])

    useEffect(() => {
        SetIsPageHomeUser({
            isPageHome: props.isPageID,
            isPageOrder: props.isPageDetail
        })
        if (props.isPageID === 0) {
            document.title = "Thông tin tài khoản"
        } else if (props.isPageID === 1) {
            document.title = "Lịch sử đơn hàng"
        } else if (props.isPageID === 2) {
            document.title = "Lịch sử giao dịch"
        } else if (props.isPageID === 3) {
            document.title = "Thay đổi mật khẩu"
        } else if (props.isPageID === 4) {
            document.title = "Sản phẩm yêu thích"
        }
        else if (props.isPageID === 5) {
            document.title = "Nạp tiền vào tài khoản"
        }
    }, [props.isPageID, props.isPageDetail])
    return (
        <div className="bd_user_wp">
            <div className="container">
                <div className="flex_user_root">
                    <div className="flex_user_root_left">
                        <MenuUserLeft isPageID={isPageHomeUser.isPageHome} />
                    </div>
                    <div className="flex_user_root_right">
                        {
                            dataUser && dataUser.userInfo.loggedIn ?
                                isPageHomeUser.isPageHome === 0 ? <PageHomeUserInfoContainer /> :
                                    isPageHomeUser.isPageHome === 1 && isPageHomeUser.isPageOrder === -1 ? <PageHistoryOrderUserContainer /> :
                                        isPageHomeUser.isPageHome === 2 && isPageHomeUser.isPageOrder === -2 ? <PageHistoryTransaction /> :
                                            isPageHomeUser.isPageHome === 3 ? <PageChangePass /> :
                                                isPageHomeUser.isPageHome === 4 ? <PageProductFavourite /> :
                                                    isPageHomeUser.isPageHome === 5 ? <PageAddPriceUser /> :
                                                        isPageHomeUser.isPageHome === 1 && isPageHomeUser.isPageOrder === 1 ? <OrderDetailProductContainer /> :
                                                            isPageHomeUser.isPageHome === 2 && isPageHomeUser.isPageOrder === 2 ? <TransactionDetailProduct /> : ''
                                : <button onClick={() => showFromLogin(true)} className="btn btn-login-user-w" type="button">Đăng nhập để tiếp tục</button>
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}