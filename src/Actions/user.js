import { getAllShipCode, getDataCartUserW, getPageOrderUser, loginUserError, loginUserPending, loginUserSuccess, logoutUserAPI, regsiterUserError, regsiterUserPending, regsiterUserSuccess, removeCartUser } from "."
import { APIShopGame } from "../Components/API/axios"

export const loginUser = (username, password) => {
    return async (dispatch) => {
        dispatch(loginUserPending())
        await APIShopGame.post('/api/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            username,
            password
        }).then(res => {
            console.log(res)
            setTimeout(() => {
                return dispatch(loginUserSuccess(res.data.userInfo))
            }, 2000)
        }).catch(err => {
            console.log(err)
            return dispatch(loginUserError(err))
        })
    }
}
export const logoutUser = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/logout')
            .then(res => {
                console.log(res)
                return dispatch(logoutUserAPI())
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const regsiterUser = (value) => {
    return async (dispatch) => {
        dispatch(regsiterUserPending())
        await APIShopGame.post('/api/register', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            codeAccount: value.codeUser,
            username: value.username,
            nameuser: value.nameuser,
            password: value.password,
            email: value.email,
            matkhau: value.matkhau,
            cttk: value.maCTTK,
            tinhtrang: value.tinhTrang
        }).then(res => {
            return dispatch(regsiterUserSuccess(res.data.data))
        }).catch(err => {
            return dispatch(regsiterUserError(err))
        })
    }
}
export const getUserLogin = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/getUser')
            .then(res => {
                return dispatch(loginUserSuccess(res.data.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const insertCartUser = (value) => {
    return async (dispatch) => {
        await APIShopGame.post('/api/user/cartProduct', {
            value
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}


export const getAllCartUser = (value) => {
    return async (dispatch) => {
        await APIShopGame.get(`/api/user/getCartuser/${value}`)
            .then(res => {
                return dispatch(getDataCartUserW(res.data))
            })
            .catch(err => {
                return dispatch(getDataCartUserW(err))
            })
    }
}
export const removeCartUserAPI = (value) => {
    return async (dispatch) => {
        await APIShopGame.post(`/api/user/removeCart/${value}`)
            .then(res => {
                return dispatch(removeCartUser(value))
            })
            .catch(err => {
                return dispatch(removeCartUser(err))
            })
    }
}
export const insertProductShipCode = (value) => {
    return async (dispatch) => {
        await APIShopGame.post('/api/user/insertShipCode', {
            value
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getAllShipCodeProduct = (page, value) => {
    return async (dispatch) => {
        await APIShopGame.get(`/api/user/getAllShipCode/${value}?page=${page}`)
            .then(res => {
                console.log(res)
                dispatch(getAllShipCode(res.data.data))
                dispatch(getPageOrderUser(res.data.per_page))
            }).catch(err => {
                dispatch(getAllShipCode(err))
            })
    }
}
export const postCartUser = () => {

}