import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQHcodeTP, getXPcodeQH } from "../Actions/address";
import FormSettingUser from "../Components/User/PageHomeUserInfo/FormSettingUser/FormSettingUser";

export default function FormSettingUserContainer({ dataUser }) {
    const dataThanhPho = useSelector(state => state.getRdrThanhPhoAPI)
    const dataQH = useSelector(state => state.getRdrQuanHuyenAPI)
    const dataQHSelect = useSelector(state => state.getRdrQuanHuyenCodeTPAPI)
    const dataXPSelect = useSelector(state => state.getRdrXaPhuongCodeQHAPI)
    const [dataAddress, SetDataAddress] = useState({
        dataTP: [],
        dataQH: [],
        dataXP: []
    })
    const dispatch = useDispatch()
    const onSelectQH = (codeTP) => dispatch(getQHcodeTP(codeTP))
    const onSelectXP = (codeQH) => dispatch(getXPcodeQH(codeQH))

    useEffect(() => {
        SetDataAddress({
            ...dataAddress,
            dataTP: dataThanhPho,
            dataQH: dataQHSelect,
            dataXP: dataXPSelect
        })
    }, [dataQHSelect, dataThanhPho, dataXPSelect])
    useEffect(() => {
        onSelectQH(dataUser && dataUser.matp)
        onSelectXP(dataUser && dataUser.maqh)
    }, [])
    const showTPSelectW = () => {
        var result = null
        if (dataAddress.dataTP.value)
            result = dataAddress.dataTP.value.map((item, index) => {
                return (
                    <option key={index} value={item.matp}>{item.tenThanhPho}</option>
                )
            })
        return result
    }
    const showQHSelectW = () => {
        var result = null
        result = dataAddress.dataQH.value && dataAddress.dataQH.value.map((item, index) => {
            return (
                <option key={index} value={item.maqh}>{item.tenHuyen}</option>
            )
        })
        return result
    }
    const showXPSelectW = () => {
        var result = null
        result = dataAddress.dataXP.value && dataAddress.dataXP.value.map((item, index) => {
            return (
                <option key={index} value={item.xaid}>{item.tenPhuong}</option>
            )
        })
        return result
    }
    return (
        <FormSettingUser
            dataUser={dataUser}
            dataAddress={dataAddress}
            onSelectQH={onSelectQH}
            onSelectXP={onSelectXP}
        >
            {showTPSelectW()}
            {showQHSelectW()}
            {showXPSelectW()}
        </FormSettingUser>
    )
}