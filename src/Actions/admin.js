import { getAllOrderAdmin, getPageOrderAdm, updateOrderTT, updateProduct } from "."
import { APIShopGame } from "../Components/API/axios"

export const getAllOrderKH = (page) => {
    return async (dispatch) => {
        APIShopGame.get(`/api/admin/getAllOrderAdmin?page=${page}`)
            .then(res => {
                dispatch(getAllOrderAdmin(res.data.data))
                dispatch(getPageOrderAdm(res.data.total_page))
            })
            .catch(err => {
                return dispatch(getAllOrderAdmin(err))
            })
    }
}

export const updateOrderTTAPI = (status, CodeOrder) => {
    return async (dispatch) => {
        await APIShopGame.put(`/api/admin/orderProduct/updateStaus/${status}/${CodeOrder}`)
            .then(res => {
                console.log(res)
                return dispatch(updateOrderTT(res.data))
            })
            .catch(err => {
                return dispatch(updateOrderTT(err))
            })
    }
}

export const updateProductAPI = (value) => {
    return async (dispatch) => {
        await APIShopGame.post(`/api/admin/updateProductAdmin`, {
            value
        }).then(res => {
            console.log(res)
            return dispatch(updateProduct(res.data.data))
        }).catch(err => {
            console.log(err)

            return dispatch(updateProduct(err))
        })
    }
}