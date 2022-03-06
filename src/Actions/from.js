import * as types from '../Constants/ActionTypes'
export const showIsPageFrom = (valueFrom) => ({
    type: types.SHOW_IS_PAGE_FROM,
    valueFrom
})
export const fromNotification = (value) => ({
    type: types.FORM_NOTIFICATION_OW,
    value
})
export const onRemoveProduct = () => ({
    type: types.SP_DELETE_PRODUCT
})
export const onPayBtnProduct = () => ({
    type: types.SP_PAY_BTN_PRODUCT
})