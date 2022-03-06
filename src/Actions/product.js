import { APIShopGame } from '../Components/API/axios'
import {
    getProductsError, getProductsPending, getProductsSuccess,
    getInfoProductsError, getInfoProductsPending, getInfoProductsSuccess, getGroupProductPending, getGroupProductError, getGroupProductSuccess, searchProductPending, getCategoryProductixd, getDataUnitPrice, getDataDiscountType, getDataGroupProduct, getDataBuyPrice, getDataDanhMucSP, postDataGroupProduct, postDataProductPending, postDataProductSuccess, postDataProductError, removeProductAPI, getPageProduct
} from './index'
/**
 * API GOI SERVER
 * @returns 
 */
export const getProducts = (value) => {
    return async (dispatch) => {
        dispatch(getProductsPending())
        await APIShopGame.get(`/api/getAllProducts?page=${value}`)
            .then(res => {
                if (res.error) {
                    throw (res.error)
                }
                console.log(res)
                dispatch(getProductsSuccess(res.data.product.data))
                dispatch(getPageProduct(res.data.product.total_page))
                return res
            })
            .catch(error => {
                dispatch(getProductsError(error))
                return error
            })
    }
}
export const getInfoProduct = (codeProduct) => {
    return async (dispatch) => {
        dispatch(getInfoProductsPending())
        await APIShopGame.get(`/api/getInfoProduct/${codeProduct}`)
            .then(res => {
                dispatch(getInfoProductsSuccess(res.data.infoProduct))
                return res
            }).catch(err => {
                dispatch(getInfoProductsError(err))
                return err
            })
    }
}
export const getGroupProduct = (codeGroupProduct) => {
    return async (dispatch) => {
        dispatch(getInfoProductsPending())
        await APIShopGame.get(`/api/getGroupsProduct/${codeGroupProduct}`)
            .then(res => {
                console.log(res)
                dispatch(getGroupProductSuccess(res.data.groups))
            }).catch(err => {
                dispatch(getGroupProductError(err))
            })
    }
}
export const seachProduct = (txtSearch) => {
    return async (dispatch) => {
        dispatch(searchProductPending());
        await APIShopGame.get(``)
    }
}
/**
 * API GOI SERVER
 * @returns A
 */


/**------------------------------------------- **/

export const getCategoryProduct = (nameProduct, codeProduct) => {
    return async (dispatch) => {
        // dispatch(getCategoryProduct())
        await APIShopGame.get(`/api/getCategoryProduct/${nameProduct}/${codeProduct}`)
            .then(res => {
                dispatch(getCategoryProductixd(res.data))
            })
            .catch(err => {
                return err
            })
    }
}


/** 
 * 
 * CREATE PRODUCT => DATA _ADD _SELECT
 * 
 */
export const getUnitPrice = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/product/getUnitPrice')
            .then(res => {
                return dispatch(getDataUnitPrice(res.data.data))
            })
            .catch(err => {
                return dispatch(getDataUnitPrice(err))
            })
    }
}
export const getDiscountType = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/product/getDiscountType')
            .then(res => {
                return dispatch(getDataDiscountType(res.data.data))
            })
            .catch(err => {
                return dispatch(getDataDiscountType(err))
            })
    }
}
export const getpswGroupProduct = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/product/getGroupProduct')
            .then(res => {
                return dispatch(getDataGroupProduct(res.data.data))
            })
            .catch(err => {
                return dispatch(getDataGroupProduct(err))
            })
    }
}
export const getBuyPrice = () => {
    return async (dispatch) => {
        await APIShopGame.get("/api/product/getBuyPrice")
            .then(res => {
                return dispatch(getDataBuyPrice(res.data.data))
            })
            .catch(err => {
                return dispatch(getDataBuyPrice(err))
            })
    }
}
export const getDanhMucSP = () => {
    return async (dispatch) => {
        await APIShopGame.get('/api/product/getDanhMucSP')
            .then(res => {
                return dispatch(getDataDanhMucSP(res.data))
            })
            .catch(err => {
                return dispatch(getDataDanhMucSP(err))

            })
    }
}

export const postNhomSp = (value) => {
    return async (dispatch) => {
        await APIShopGame.post('/api/product/postNhomSp', {
            maNhomSP: value.maNhomSP,
            maHinhAnh: value.maHinhAnh,
            tenNhomSP: value.tenNhomSP,
            moTa: value.moTa,
            tinhTrang: value.tinhTrang,
            linkHinhAnh: value.linkHinhAnh,
        }).then(res => {
            return dispatch(postDataGroupProduct(res.data))
        }).catch(err => {
            return dispatch(postDataGroupProduct(err))
        })
    }
}
export const postProduct = (value) => {
    return async (dispatch) => {
        dispatch(postDataProductPending())
        await APIShopGame.post('/api/product/postProduct', {
            dataAccount: {
                tenSanPham: value.tenSanPham,
                maSanPham: value.maSanPham,
                giaSanPham: value.giaSanPham,
                giamGia: value.giamGia,
                maGiamGia: value.maGiamGia,
                donViTien: value.donViTien,
                loaiGiamGia: value.loaiGiamGia,
                danhMucSP: value.danhMucSP,
                nhomSP: value.nhomSP,
                soLuongSanPham: value.soLuongSanPham,
                theLoaiSanPham: value.theLoaiSanPham,
                thanhToan: value.thanhToan,
                luuY: value.luuY,
                Editor: value.Editor,
                tinhTrang: value.tinhTrang,
                gioiThieuBanBe: 0,
                maHinhAnh: value.maHinhAnh,
                linkHinhAnh: value.linkHinhAnh
            },
            selectGame: {
                gameBuy: value.gameBuy
            },
            dataKeyGame: {
                codeKeyGame: value.codeKeyGame,
                keyGameOnline: value.keyGameOnline
            },
            dataUserPass: {
                codeAcc: value.codeAcc,
                username: value.userNameP,
                password: value.passWordP,
            }
        }).then(res => {
            return dispatch(postDataProductSuccess(res.data))
        }).catch(err => {
            console.log(err)
            return dispatch(postDataProductError(err))
        })
    }
}
export const removeProduct = (codeProduct) => {
    return async (dispatch) => {
        await APIShopGame.post(`/api/product/deleteProduct/${codeProduct}`)
            .then(res => {
                return dispatch(removeProductAPI(res.data))
            })
            .catch(err => {
                return dispatch(removeProductAPI(err))
            })
    }
}

