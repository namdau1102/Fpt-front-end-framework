import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuanHuyen, getThanhPho, getXaPhuong } from '../Actions/address';
import PageHomeUserInfo from '../Components/User/PageHomeUserInfo/PageHomeUserInfo'
export default function PageHomeUserInfoContainer() {
    const dispatch = useDispatch();
    const dataInfoUser = useSelector(state => state.loginUser.userInfo.user)
    const getIwThanhPho = () => dispatch(getThanhPho())
    const getIwQuanHuyen = () => dispatch(getQuanHuyen())
    const getIwXaPhuong = () => dispatch(getXaPhuong())
    useEffect(() => {
        getIwThanhPho()
        getIwQuanHuyen()
        getIwXaPhuong();
    }, [])
    return (
        <PageHomeUserInfo
            dataUser={dataInfoUser}
        >
        </PageHomeUserInfo>
    )
}