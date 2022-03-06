import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom'
import { getAllCartUser, getUserLogin } from "../../Actions/user";
import HomePageContainer from "../../Containers/HomePageContainer";
import PageSearchProductContainer from "../../Containers/PageSearchProductContainer";
import ProductInfomationContainer from "../../Containers/ProductInfomationContainer";
import ManagerAccountContainer from "../Admin/Container/ManagerAccountContainer";
import Dashboard from "../Admin/BodyPage/Dashboard/Dashboard";
import AddAccountGameContainer from "../Admin/Container/AddAccountGameContainer";
import LoginContainer from "../Admin/Container/LoginContainer";
import ManagerAccountUserContainer from "../Admin/Container/ManagerAccountUserContainer";
import OrderProductContainer from "../Admin/Container/OrderProductContainer";
import ProfileContainer from "../Admin/Container/ProfileContainer";
import TransactionHistoryContainer from "../Admin/Container/TransactionHistoryContainer";
import PageCart from "../Cart/PageCart";
import ConfirmationDeposit from "../ConfirmationDeposit/ConfirmationDeposit";
import Page404 from "../Page404/Page404";
import RechargePrice from "../RechargePrice/RechargePrice";
import PageUser from "../User/PageUser";
import { pathURLHome, pathURLAdmin } from "./Path";
import PageCartContainer from "../../Containers/PageCartContainer";
import PageSettingProduct from "../Admin/BodyPage/PageFunctionProduct/PageSettingProduct";
import PageSettingProductConTainer from "../Admin/Container/PageSettingProductConTainer";
export default function RoutesURL() {
    const dispatch = useDispatch()
    const dataUser = useSelector(state => state.loginUser)
    // console.log(dataUser.userInfo   )
    const getDataUser = () => dispatch(getUserLogin())
    useEffect(() => {
        // if (dataUser.loggedIn)
        getDataUser()
    }, [])
    const getCart = (value) => dispatch(getAllCartUser(value))
    useEffect(() => {
        if (dataUser.userInfo.loggedIn) {
            getCart(dataUser.userInfo.user.nhomGioHang)
        }
    }, [dataUser.userInfo])
    return (
        <Routes>
            {/* <HeaderContainer /> */}
            <Route path={pathURLHome.INFORMATION_PRODUCT + "/:codeProduct/:nameProduct"} element={<ProductInfomationContainer />} />
            {/* <Route path=":ticketId" element={<ProductInfomationContainer />} /> */}
            <Route path={pathURLHome.HOME} exact element={<HomePageContainer />}></Route>
            {/* <Route path={pathURLHome.INFORMATION_PRODUCT + "/:codeProduct/:nameProduct"} element={<ProductInfomationContainer />}></Route> */}
            <Route path={pathURLHome.CART} element={<PageCartContainer />}></Route>
            <Route path={pathURLHome.INFORMATION_USER} element={<PageUser isPageID={0} />}></Route>
            <Route path={pathURLHome.INFORMATION_CART_LOG} element={<PageUser isPageID={1} isPageDetail={-1} />}></Route>
            <Route path={pathURLHome.INFORMATION_TRANSACTION} element={<PageUser isPageID={2} isPageDetail={-2} />}></Route>
            <Route path={pathURLHome.CHANGE_PASSWORD_USER} element={<PageUser isPageID={3} />}></Route>
            <Route path={pathURLHome.PRODUCT_FAVOURITE} element={<PageUser isPageID={4} />}></Route>
            <Route path={pathURLHome.ADD_PRICE_USER_MENU} element={<PageUser isPageID={5} />} />
            <Route path={pathURLHome.ADD_PRICE_USER_INFO} element={<RechargePrice />}></Route>
            <Route path={pathURLHome.CONFIRMATION_ADD_PRICE} element={<ConfirmationDeposit />}></Route>
            <Route path={pathURLHome.DETAIL_ORDER_PRODUCT + "/:codeCart"} element={<PageUser isPageID={1} isPageDetail={1} />}></Route>
            <Route path={pathURLHome.DETAIL_BUY_PRODUCT_TK} element={<PageUser isPageID={2} isPageDetail={2} />}></Route>
            <Route path={pathURLHome.SEARCH_PRODUCT_KEY} element={<PageSearchProductContainer />}>
            </Route>
            {/* <Footer /> */}
            {/** ROUTER ADMIN  */}
            <Route path={pathURLAdmin.LOGIN} element={<LoginContainer />}></Route>
            <Route path={pathURLAdmin.HOME} element={<Dashboard />}></Route>
            <Route path={pathURLAdmin.ADD_ACCOUNT_GAME} element={<AddAccountGameContainer />}></Route>
            <Route path={pathURLAdmin.MANAGER_ACCOUNT_GAME} element={<ManagerAccountContainer />} ></Route>
            <Route path={pathURLAdmin.PROFILE_USER_CTV} element={<ProfileContainer />} ></Route>
            <Route path={pathURLAdmin.MANAGER_ACCOUNT_USER} element={<ManagerAccountUserContainer />} ></Route>
            <Route path={pathURLAdmin.MANAGER_HISTORY_PRODUCT} element={<TransactionHistoryContainer />} ></Route>
            <Route path={pathURLAdmin.MANAGER_ORDER_PRODUCT} element={<OrderProductContainer />} ></Route>
            <Route path={pathURLAdmin.MANAGER_SETTING_PRODUCT + "/:codeProduct"} element={<PageSettingProductConTainer />} ></Route>
            <Route path='*' element={<LoginContainer />} />
        </Routes>

    )
}