import { getDataThanhPho, getDataQuanHuyen, getDataXaPhuong, getDataQuanHuyenCodeTP, getDataXaPhuongCodeQH } from "."
import { APIShopGame } from "../Components/API/axios"


export const getThanhPho = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/getThanhPho')
            .then(res => {
                dispatch(getDataThanhPho(res.data.data))
                return res
            })
            .catch(err => {
                dispatch(getDataThanhPho(err))
                return err
            })
    }
}
export const getQuanHuyen = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/getQuanHuyen')
            .then(res => {
                dispatch(getDataQuanHuyen(res)); //
                return res
            })
            .catch(err => {
                dispatch(getDataQuanHuyen(err))
                return err
            })
    }
}
export const getQHcodeTP = (codeTP) => {
    return async (dispatch) => {
        await APIShopGame.get(`/api/getQuanHuyenCDTP/${codeTP}`)
            .then(res => {
                dispatch(getDataQuanHuyenCodeTP(res.data.data))
                return res
            })
            .catch(err => {
                dispatch(getDataQuanHuyenCodeTP(err))
                return err
            })
    }
}
export const getXPcodeQH = (codeTP) => {
    return async (dispatch) => {
        await APIShopGame.get(`/api/getXaPhuongCDQH/${codeTP}`)
            .then(res => {
                dispatch(getDataXaPhuongCodeQH(res.data.data))
                return res
            })
            .catch(err => {
                dispatch(getDataXaPhuongCodeQH(err))
                return err
            })
    }
}
export const getXaPhuong = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/getXaPhuong')
            .then(res => {
                dispatch(getDataXaPhuong(res.data.data))
                return res
            })
            .catch(err => {
                dispatch(getDataQuanHuyen(err))
                return err
            })
    }
}