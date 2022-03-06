import { useState } from 'react'
import Register from '../Components/Form/Register/Register'
import { useDispatch, useSelector } from 'react-redux'
import { RandomText } from '../Components/RandomText/RandomText'
import { regsiterUser } from '../Actions/user';
import NotificationPage from '../Components/Notifications/NotificationPage';
export default function RegisterContainer() {
    const dispatch = useDispatch();
    const onRegUser = (valueReg) => dispatch(regsiterUser(valueReg))
    const getInfoReg = useSelector(state => state.regsiterUser)
    const [dataReg, SetDataReg] = useState({
        codeUser: RandomText(9).toUpperCase(),
        nameuser: 'Người dùng',
        username: '',
        email: '',
        password: '',
        maCTTK: RandomText(9).toUpperCase(),
        tinhTrang: 0

    })
    const onSetData = (e) => {
        SetDataReg({
            ...dataReg,
            [e.target.name]: e.target.value
        })
    }
    const onRegisterUser = (e) => {
        e.preventDefault()
        onRegUser(dataReg)
    }
    return (
        <>
            {
                getInfoReg.userInfo.err === 1102 ?
                    <NotificationPage
                        title={'Không thành công'}
                        statusOp={"danger"}
                        status={'danger'}
                        message={'Đăng kí không thành công - Tài khoản đã tồn tại'}
                    /> : getInfoReg.userInfo.affectedRows === 1 ? <NotificationPage
                        title={'Thành công'}
                        statusOp={"success"}
                        status={'success'}
                        message={'Đăng kí thành công'}
                    /> : ''
            }
            <Register
                onReg={onRegisterUser}
                dataReg={dataReg}
                onSetData={onSetData}
                getInfoReg={getInfoReg.userInfo}
            >
            </Register>
        </>

    )
}