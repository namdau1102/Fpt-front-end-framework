import * as types from '../Constants/ActionTypes'


let initialStateUser = {
    pending: false,
    userInfo: {
        loggedIn: false
    },
    error: null
}
let initialStateRegUser = {
    pending: false,
    userInfo: [],
    error: null
}
let initialStateCart = {
    cartUser: []
}
let initialStateShipCode = {
    shipCodeUser: []
}
export const loginUser = (state = initialStateUser, action) => {
    switch (action.type) {
        case types.LOGIN_USER_PENDING:
            return state = {
                pending: true,
                userInfo: [],
                error: null
            }
        case types.LOGIN_USER_SUCCESS:
            return state = {
                pending: false,
                userInfo: action.playload,
                error: null
            }
        case types.LOGIN_USER_ERROR:
            return state = {
                pending: false,
                userInfo: {
                    loggedIn: false,
                },
                error: action.error
            }
        case types.LOGOUT_USER_API:
            return state = {
                ...state,
                userInfo: {
                    loggedIn: false
                }
            }
        default: return state
    }
}
export const logoutUser = (state = initialStateUser, action) => {
    switch (action.type) {

        default: return state
    }
}
export const regsiterUser = (state = initialStateRegUser, action) => {
    switch (action.type) {
        case types.REGSITER_USER_PENDING:
            return state = {
                pending: true,
                userInfo: [],
                error: null
            }
        case types.REGSITER_USER_SUCCESS:
            return state = {
                pending: false,
                userInfo: action.playload,
                error: null
            }
        case types.REGSITER_USER_ERROR:
            return state = {
                pending: false,
                userInfo: null,
                error: action.error
            }
        default: return state
    }
}
export const getAllShipCode = (state = initialStateShipCode, action) => {
    switch (action.type) {
        case types.GET_ALL_SHIP_CODE_PRODUCT:
            return state = {
                ...state,
                shipCodeUser: action.playload
            }
        default: return state
    }
}
export const getAllCart = (state = initialStateCart, action) => {
    switch (action.type) {
        case types.GET_ALL_CART_USER:
            return state = {
                ...state,
                cartUser: action.playload
            }
        case types.DELETE_CART_USER:
            let datafk = state.cartUser.filter(item => item.maGioHang.toLowerCase() !== action.playload.toLowerCase())
            return state = {
                ...state,
                cartUser: datafk

            }
        case types.ADD_CART_USER:
            console.log("IS OK")
            let isCheck = state.cartUser.filter(item => item.maSanPham !== action.playload.maSanPham)
            console.log(isCheck.length)
            if (isCheck.length > 0) {
                state.cartUser.map(item => {
                    if (item.maSanPham === action.playload.maSanPham)
                        return item.soLuong += Number(action.playload.quanlity)
                })
            } else {
                state.cartUser.push(action.playload)
            }
            return state = {
                ...state,
            }
        default: return state
    }
}