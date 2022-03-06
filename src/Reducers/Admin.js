import * as types from '../Constants/ActionTypes'


let initialStateOrderAdm = {
    value: []
}
export const getValueOrderAdm = (state = initialStateOrderAdm, action) => {
    switch (action.type) {
        case types.GET_ALL_ORDER_ADMIN_PRODUCTS:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}