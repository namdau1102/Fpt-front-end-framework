import { combineReducers } from 'redux'
import { formLogin } from './Login'
import { getValueOrderAdm } from './Admin'
import {
    getAllProducts,
    getInfoProduct,
    getProductGroup,
    searcProductText,
    getCategoryProduct,
    getSelectProduct,
    getUnitPrice,
    getDiscountType,
    getpswGroupProduct,
    getDanhMucSP,
    postDataAccountProduct,
    getBuyPrice,
    productManagerw
} from './Product'
import { loginUser, regsiterUser, logoutUser, getAllCart, getAllShipCode } from './User'
import { isPageFromLogin, formNotification, formBtnPayProduct } from './From'
import {
    getRdrThanhPhoAPI,
    getRdrQuanHuyenAPI,
    getRdrXaPhuongAPI,
    getRdrQuanHuyenCodeTPAPI,
    getRdrXaPhuongCodeQHAPI,
} from './Address'
import { getDataPage } from './Page'
const rootReducer = combineReducers({
    formBtnPayProduct,
    getDataPage,
    formLogin,
    getAllCart,
    getAllShipCode,
    logoutUser,
    getAllProducts,
    getInfoProduct,
    getProductGroup,
    searcProductText,
    getCategoryProduct,
    getValueOrderAdm,
    getSelectProduct,
    loginUser,
    isPageFromLogin,
    regsiterUser,
    getRdrThanhPhoAPI,
    getRdrQuanHuyenAPI,
    getRdrXaPhuongAPI,
    getRdrQuanHuyenCodeTPAPI,
    getRdrXaPhuongCodeQHAPI,
    getUnitPrice,
    getDiscountType,
    getpswGroupProduct,
    getDanhMucSP,
    getBuyPrice,
    postDataAccountProduct,
    formNotification,
    productManagerw
})
export default rootReducer