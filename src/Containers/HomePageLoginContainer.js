import { useDispatch, useSelector } from "react-redux";
import { st_fromLogin } from "../Actions";
import HomePageLogin from "../Components/Form/HomePageLogin";
import { showIsPageFrom } from '../Actions/from'
import { useEffect, useState } from "react";
export default function HomePageLoginContainer() {
    const isPage = useSelector(state => state.isPageFromLogin)
    const isDisplayFromLogin = useSelector(state => state.formLogin);
    const dispatch = useDispatch();
    const closeFromLogin = (isDisplay) => dispatch(st_fromLogin(isDisplay))
    const showPageLogin = (valueFrom) => dispatch(showIsPageFrom(valueFrom))
    const getInfoReg = useSelector(state => state.regsiterUser)

    const onShowPage = (value) => {
        showPageLogin(value)
    }
    useEffect(() => {
        if (getInfoReg) {
            if (getInfoReg.userInfo.affectedRows === 1) {
                showPageLogin(0)
            }
        }
    }, [getInfoReg])
    return (
        <HomePageLogin
            isDisplay={isDisplayFromLogin}
            closeFromLogin={closeFromLogin}
            onShowPage={onShowPage}
            isPageShow={isPage}
        >
        </HomePageLogin>
    )
}