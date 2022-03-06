import * as types from '../Constants/ActionTypes'
let initialStateTP = {
    value: []
}
let initialStateQH = {
    value: []
}
let initialStateQHCodeTP = {
    value: []
}
let initialStateXP = {
    value: []
}
let initialStateXPCodeQH = {
    value: []
}
export const getRdrThanhPhoAPI = (state = initialStateTP, action) => {
    switch (action.type) {
        case types.GET_ALL_THANH_PHO:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const getRdrQuanHuyenAPI = (state = initialStateQH, action) => {
    switch (action.type) {
        case types.GET_ALL_QUAN_HUYEN:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const getRdrXaPhuongAPI = (state = initialStateXP, action) => {
    switch (action.type) {
        case types.GET_ALL_XA_PHUONG:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const getRdrQuanHuyenCodeTPAPI = (state = initialStateQHCodeTP, action) => {
    switch (action.type) {
        case types.GET_ALL_QUAN_HUYEN_CODE_TP:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const getRdrXaPhuongCodeQHAPI = (state = initialStateXPCodeQH, action) => {
    switch (action.type) {
        case types.GET_ALL_XA_PHUONG_CODE_QH:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}