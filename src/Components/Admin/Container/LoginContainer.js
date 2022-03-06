import { useState } from "react";
import Login from "../Login/Login";

export default function LoginContainer() {
    const [hidePass, SetHidePass] = useState({
        isHide: false
    })
    const [dataLogin, SetDataLogin] = useState({
        username: '',
        password: ''
    })
    const [passWord, setPassWord] = useState()
    const onHidePassUser = (isActive) => {
        SetHidePass({
            isHide: isActive
        })
    }
    const onChangePass = (e) => {


    }
    const onSetDataLogin = (e) => {
        if (e.target.name === 'password') {
            if (String(e.target.value).length < 10)
                setPassWord(e.target.value)
        }
        SetDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value,
        })
    }
    const onLoginBd = () => {

    }
    return (
        <Login
            onSetDataLogin={onSetDataLogin}
            isShowPass={hidePass}
            passWord={passWord}
            onChangePass={onChangePass}
            onPass={onHidePassUser}>
        </Login>
    )
}