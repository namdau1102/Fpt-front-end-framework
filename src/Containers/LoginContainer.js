import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Actions/user";
import { APIShopGame } from "../Components/API/axios";
import Login from "../Components/Form/Login/Login";
import NotificationPage from "../Components/Notifications/NotificationPage";

export default function LoginContainer() {
    APIShopGame.defaults.withCredentials = true
    const dispatch = useDispatch()
    const [isLoading, SetIsLoading] = useState(false)
    const onLoginUser = (username, password) => dispatch(loginUser(username, password))
    const userInfo = useSelector(state => state.loginUser)
    useEffect(() => {

    }, [])
    const [dataLogin, SetDataLogin] = useState({
        username: '',
        password: ''
    })
    const [isData, SetIsData] = useState({
        isUserName: true,
        isPassword: true
    })

    const onChangeDataLogin = (e) => {
        if (e.target.name === 'password') {
            SetDataLogin({
                ...dataLogin,
                password: e.target.value
            })
        }
        SetDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        })
    }
    const LoginUser = (e) => {
        e.preventDefault();
        onLoginUser(dataLogin.username, dataLogin.password)
    }
    // console.log(userInfo)

    return (
        <>
            {
                userInfo.userInfo.loggedIn === false ?
                    '' :
                    userInfo.userInfo.loggedIn === undefined ?
                        <NotificationPage
                            status="loading"
                            title={"Đang đăng nhập"}
                            message={"Đang Đăng nhập vào hệ thống "}
                        /> : ''
            }
            <Login
                onLoginUser={LoginUser}
                dataLogin={dataLogin}
                onSetData={onChangeDataLogin}
                userInfo={userInfo}
            >
            </Login>
        </>
    )
}