import * as types from '../Constants/ActionTypes'
let dataPageProduct = {
    value: null
}
export const getDataPage = (state = dataPageProduct, action) => {
    switch (action.type) {
        case types.GET_PAGE_DATA:
            return state = {
                ...state,
                value: action.playload
            }
        case types.GET_PAGE_ORDER_DATA:
            return state = {
                ...state,
                value: action.playload
            }
        case types.GET_PAGE_ORDER_USER_CODE:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}