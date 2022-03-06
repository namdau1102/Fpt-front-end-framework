import * as types from '../Constants/ActionTypes'
let initialStatePageLogin = {
    isDisplay: 0
};
let fromNotification = {
    isDisplay: false,
    value: null
}
let btnCheckPayProduct = {
    isCheckPay: false
}
export const isPageFromLogin = (state = initialStatePageLogin, action) => {
    switch (action.type) {
        case types.SHOW_IS_PAGE_FROM:
            return state = {
                ...state,
                isDisplay: action.valueFrom
            }
        default: return state
    }
}
export const formNotification = (state = fromNotification, action) => {
    switch (action.type) {
        case types.FORM_NOTIFICATION_OW:
            return state = {
                ...state,
                isDisplay: !state.isDisplay,
                value: action.value
            }
        default: return state
    }
}
export const formBtnPayProduct = (state = btnCheckPayProduct, action) => {
    switch (action.type) {
        case types.SP_PAY_BTN_PRODUCT:
            return state = {
                ...state,
                isCheckPay: !state.sCheckPay
            }
        default: return state
    }
}