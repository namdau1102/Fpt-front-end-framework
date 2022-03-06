import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import MenuLeft from "../MenuLeft/MenuLeft";

export default function MenuLeftContainer() {
    const dataOrder = useSelector(state => state.getValueOrderAdm)
    const params = useLocation();
    const [active, SetAcvite] = useState({
        isActive: 0,
        activeMenu: 0
    })
    const onActiveLink = (isActive, activeMenu) => {
        SetAcvite({
            isActive,
            activeMenu
        })
    }
    const valueNotiOrder = () => {
        let resuleLength = null
        resuleLength = dataOrder.value && dataOrder.value.filter(item => item.trangThai === 2)
        return resuleLength.length
    }
    return (
        <MenuLeft
            onActiveLink={onActiveLink}
            active={active}
            valueNotiOrder={valueNotiOrder}

        />
    )
}