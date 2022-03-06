import * as types from '../Constants/ActionTypes'
let initialStateProduct = {
    pending: false,
    products: [],
    error: null
}
let postDataProduct = {
    pending: false,
    valuePost: null,
    error: null
}
let productReducer = {
    value: null,
}
let initialStatePostDMSP = {
    value: null
}
let initialStateUnitPrice = {
    value: []
}
let initialStateDiscountPrice = {
    value: []
}
let initialStatePswGroupProduct = {
    value: []
}
let initialStateDanhMucSP = {
    value: []

}
let initialStateBuyPrice = {
    value: []
}
let initialStateInfoProduct = {
    pending: false,
    infoProducts: [],
    error: null
}
let initialStateGroupProduct = {
    pending: false,
    groupProducts: [],
    error: null
}
let initialStateSearchProduct = {
    pending: false,
    productSearch: ["124", "21412"],
    error: null
}

let initialStateSearchText = {
    textSearch: '',
    productsSearch: localStorage.getItem('searchProduct') ? JSON.parse(localStorage.getItem('searchProduct')) : []
}
let initialStateCategory = {
    arrCategory: []
}
let initialStateSelectProduct = {
    objSelect: null
}
let searchStateProduct = {
    search: null,
    status: null,
    group: null
}
export const getAllProducts = (state = initialStateProduct, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.playload
            }
        case types.GET_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        default:
            return state
    }
}
export const getSelectProduct = (state = initialStateSelectProduct, action) => {
    switch (action.type) {
        case types.SELECT_PRODUCTS_SEARCH:
            // resultSelectSearchProduct = action.playload.products.filter(item => item.maDanhMuc === action.valueSelect.category)
            return {
                ...state,
                objSelect: action.valueSelect
            }
        default:
            return state
    }
}
export const getInfoProduct = (state = initialStateInfoProduct, action) => {
    switch (action.type) {
        case types.GET_INFO_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.GET_INFO_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                infoProducts: action.playload
            }
        case types.GET_INFO_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                infoProducts: action.error
            }
        default:
            return state
    }
}
export const getProductGroup = (state = initialStateGroupProduct, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS_GROUP_PENDING:
            return {
                ...state,
                pending: true
            }
        case types.GET_PRODUCTS_GROUP_SUCCESS:
            return {
                ...state,
                pending: false,
                groupProducts: action.playload
            }
        case types.GET_PRODUCTS_GROUP_ERROR:
            return {
                ...state,
                pending: false,
                groupProducts: action.error
            }
        default:
            return state
    }
}

export const searchProduct = (state = initialStateSearchProduct, action) => {
    switch (action.type) {
        case types.SEARCH_PRODUCT_PENDDING:
            return {
                ...state,
                pending: true
            }
        case types.SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                productSearch: action.playload
            }
        case types.SEARCH_PRODUCT_ERROR:
            return {
                ...state,
                pending: false,
                productSearch: action.error
            }
        default: return state
    }
}
export const searcProductText = (state = initialStateSearchText, action) => {
    switch (action.type) {
        case types.SEARCH_PRODUCT_TEXT:
            const resultTextSearch = action.textSearch.toLowerCase()
            let resultProductSearch = null
            if (action.arrProduct.length > 0) {
                resultProductSearch = action.arrProduct.filter(item => item.tenSanPham.toLowerCase().indexOf(resultTextSearch.toLowerCase()) !== -1)
            }
            return {
                ...state,
                textSearch: action.textSearch.toLowerCase(),
                productsSearch: resultProductSearch
            }
        default: return state
    }
}
export const getCategoryProduct = (state = initialStateCategory, action) => {
    switch (action.type) {
        case types.GET_CATEGORY_PRODUCT_SEARCH:
            return state = {
                arrCategory: action.arrCategory
            }
        default: return state
    }
}
export const getUnitPrice = (state = initialStateUnitPrice, action) => {
    switch (action.type) {
        case types.GET_ALL_UNIT_PRICE:
            return state = {
                ...state,
                value: action.playload
            }
        default:
            return state
    }
}
export const getDiscountType = (state = initialStateDiscountPrice, action) => {
    switch (action.type) {
        case types.GET_ALL_DISCOUNT_PRICE:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const getpswGroupProduct = (state = initialStatePswGroupProduct, action) => {
    switch (action.type) {
        case types.GET_ALL_GROUP_PRODUCT:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const getBuyPrice = (state = initialStateBuyPrice, action) => {
    switch (action.type) {
        case types.GET_ALL_BUY_PRODUCT:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const getDanhMucSP = (state = initialStateDanhMucSP, action) => {
    switch (action.type) {
        case types.GET_ALL_DANH_MUC_SP:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const postDataAccountProduct = (state = postDataProduct, action) => {
    switch (action.type) {
        case types.POST_PRODUCT_PENDING:
            return state = {
                ...state,
                pending: true
            }
        case types.POST_PRODUCT_SUCCESS:
            return state = {
                ...state,
                pending: false,
                error: null,
                valuePost: action.playload
            }
        case types.POST_PRODUCT_ERROR:
            return state = {
                ...state = {
                    ...state,
                    pending: false,
                    valuePost: null,
                    error: action.error
                }
            }
        default: return state
    }
}
export const postProduct = (state = initialStatePostDMSP, action) => {
    switch (action.type) {
        case types.POST_VALUE_NHOM_SP:
            return state = {
                ...state,
                value: action.playload
            }
        default: return state
    }
}
export const productManagerw = (state = productReducer, action) => {
    switch (action.type) {
        case types.SP_DELETE_PRODUCT:
            return state = {
                ...state,
                value: action.value
            }
        default: return state
    }
}
export const selectIsProduct = (state = searchStateProduct, action) => {
    switch (action.type) {
        case types.SEARCH_SELECT_PRODUCT:
            return state = {
                ...state,
                search: action.value.search,
                status: action.value.status,
                group: action.value.group
            }
        default: return state
    }
}
//* MANAGER PRODUCT

// export const getProducts = state => state.products;
// export const getProductsPending = state => state.pending;
// export const getProductsError = state => state.error