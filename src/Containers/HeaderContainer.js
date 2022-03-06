import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { st_fromLogin } from "../Actions";
import { logoutUser } from "../Actions/user";
import Header from "../Components/Header/Header";

export default function HeaderContainer() {
    const dispatch = useDispatch();
    const dataUser = useSelector(state => state.loginUser)
    const [isLogin, SetIsLogin] = useState(dataUser.userInfo.loggedIn)
    const showFromLogin = (isDisplay) => dispatch(st_fromLogin(isDisplay))
    const onLogoutAPI = () => dispatch(logoutUser())
    useEffect(() => {
        if (dataUser.userInfo) {
            SetIsLogin(dataUser.userInfo.loggedIn)
        }
    }, [dataUser])
    const showMenu = () => {
        let menuShow = document.getElementById("mobie_wqp")
        menuShow.style.display = "block"
    }
    const onExitMenu = () => {
        let menuShow = document.getElementById("mobie_wqp")
        menuShow.style.display = "none"
    }
    const onLogout = () => {
        onLogoutAPI()
    }
    return (
        <Header
            onShowMenu={showMenu}
            showFromLogin={showFromLogin}
            onExitMenu={onExitMenu}
            isLogin={isLogin}
            dataUser={dataUser.userInfo}
            onLogout={onLogout}
        >
        </Header>
    )
}