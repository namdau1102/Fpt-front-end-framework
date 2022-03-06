import { APIShopGame } from '../Components/API/axios';
import * as types from '../Constants/ActionTypes';
export const st_fromLogin = (isDisplay) => ({
    type: types.FORM_LOGIN,
    isDisplay,
})
/**
 * GET PRODUCT
 * @returns 
 */
export const getProductsPending = () => ({
    type: types.GET_PRODUCTS_PENDING
})
export const getProductsSuccess = (products) => ({
    type: types.GET_PRODUCTS_SUCCESS,
    playload: products
})
export const getProductsError = (error) => ({
    type: types.GET_PRODUCTS_ERROR,
    error
})

/**
 * GET INFORMATION PRODUCT
 * @returns 
 */
export const getInfoProductsPending = () => ({
    type: types.GET_INFO_PRODUCTS_PENDING
})
export const getInfoProductsSuccess = (products) => ({
    type: types.GET_INFO_PRODUCTS_SUCCESS,
    playload: products
})
export const getInfoProductsError = (error) => ({
    type: types.GET_INFO_PRODUCTS_ERROR,
    error
})

/**
 * GET PRODUCT GROUP
 * @param {*} error 
 * @returns 
 */
export const getGroupProductPending = () => ({
    type: types.GET_PRODUCTS_GROUP_PENDING
})
export const getGroupProductSuccess = (products) => ({
    type: types.GET_PRODUCTS_GROUP_SUCCESS,
    playload: products
})
export const getGroupProductError = (error) => ({
    type: types.GET_PRODUCTS_GROUP_ERROR,
    error
})

/**
 * SEARCH PRODUCT `
 */
export const searchProductPending = () => ({
    type: types.SEARCH_PRODUCT_PENDDING
})
export const searchProductSuccess = (product) => ({
    type: types.SEARCH_PRODUCT_SUCCESS,
    playload: product
})
export const searchProductError = (error) => ({
    type: types.SEARCH_PRODUCT_ERROR,
    error
})
export const searchProductText = (arrProduct, textSearch) => ({
    type: types.SEARCH_PRODUCT_TEXT,
    arrProduct,
    textSearch
})
export const getCategoryProductixd = (arrCategory) => ({
    type: types.GET_CATEGORY_PRODUCT_SEARCH,
    arrCategory

})
export const getProductSelectxd = (valueSelect) => ({
    type: types.SELECT_PRODUCTS_SEARCH,
    valueSelect
})

/**
 * Login user - API
 */
export const loginUserPending = () => ({
    type: types.LOGIN_USER_PENDING

})
export const loginUserSuccess = (infoUser) => ({
    type: types.LOGIN_USER_SUCCESS,
    playload: infoUser

})
export const loginUserError = (error) => ({
    type: types.LOGIN_USER_ERROR,
    error
})

export const logoutUserAPI = () => ({
    type: types.LOGOUT_USER_API,
})

/**
 * Regsiter user - API
 */
export const regsiterUserPending = () => ({
    type: types.REGSITER_USER_PENDING

})
export const regsiterUserSuccess = (infoUser) => ({
    type: types.REGSITER_USER_SUCCESS,
    playload: infoUser

})
export const regsiterUserError = (error) => ({
    type: types.REGSITER_USER_ERROR,
    error
})
/**
 * Adress User - API
 */

export const getDataThanhPho = (value) => ({
    type: types.GET_ALL_THANH_PHO,
    playload: value,
    err: value
})
export const getDataQuanHuyen = (value) => ({
    type: types.GET_ALL_QUAN_HUYEN,
    playload: value,
    err: value

})
export const getDataQuanHuyenCodeTP = (value) => ({
    type: types.GET_ALL_QUAN_HUYEN_CODE_TP,
    playload: value,
    err: value
})
export const getDataXaPhuong = (value) => ({
    type: types.GET_ALL_XA_PHUONG,
    playload: value,
    err: value
})
export const getDataXaPhuongCodeQH = (value) => ({
    type: types.GET_ALL_XA_PHUONG_CODE_QH,
    playload: value,
    err: value
})

/**
 * API GET DATA_ ADD _PRODUCT SELECT
 */
export const getDataUnitPrice = (value) => ({
    type: types.GET_ALL_UNIT_PRICE,
    playload: value,
    err: value
})
export const getDataDiscountType = (value) => ({
    type: types.GET_ALL_DISCOUNT_PRICE,
    playload: value,
    err: value
})
export const getDataGroupProduct = (value) => ({
    type: types.GET_ALL_GROUP_PRODUCT,
    playload: value,
    err: value
})
export const getDataBuyPrice = (value) => ({
    type: types.GET_ALL_BUY_PRODUCT,
    playload: value,
    err: value
})

export const getDataDanhMucSP = (value) => ({
    type: types.GET_ALL_DANH_MUC_SP,
    playload: value,
    err: value
})

export const postDataGroupProduct = (value) => ({
    type: types.POST_VALUE_NHOM_SP,
    playload: value,
    err: value
})

export const postDataProductPending = () => ({
    type: types.POST_PRODUCT_PENDING,
})
export const postDataProductSuccess = (value) => ({
    type: types.POST_PRODUCT_SUCCESS,
    playload: value
})
export const postDataProductError = (err) => ({
    type: types.POST_PRODUCT_ERROR,
    error: err
})
export const removeProductAPI = (value) => ({
    type: types.SP_DELETE_PRODUCT,
    value,
})

export const searchSelectProduct = (value) => ({
    type: types.SEARCH_SELECT_PRODUCT,
    value
})

export const getDataCartUserW = (value) => ({
    type: types.GET_ALL_CART_USER,
    playload: value
})
export const removeCartUser = (value) => ({
    type: types.DELETE_CART_USER,
    playload: value
})
export const addCartUser = (value) => ({
    type: types.ADD_CART_USER,
    playload: value
})
export const getAllShipCode = (value) => ({
    type: types.GET_ALL_SHIP_CODE_PRODUCT,
    playload: value
})
export const getAllOrderAdmin = (value) => ({
    type: types.GET_ALL_ORDER_ADMIN_PRODUCTS,
    playload: value
})

export const updateOrderTT = (value) => ({
    type: types.UPDATE_TT_ORDER_PRODUCT,
    playload: value
})
export const updateProduct = (value) => ({
    type: types.UPDATE_PRODUCT_ADMIN,
    playload: value
})
export const getPageProduct = (value) => ({
    type: types.GET_PAGE_DATA,
    playload: value
})
export const getPageOrderAdm = (value) => ({
    type: types.GET_PAGE_ORDER_DATA,
    playload: value
})
export const getPageOrderUser = (value) => ({
    type: types.GET_PAGE_ORDER_USER_CODE,
    playload: value
})