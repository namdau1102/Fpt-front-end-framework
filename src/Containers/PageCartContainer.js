import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartUser } from '../Actions/user'
import ProductListCart from '../Components/Cart/ProductListCart/ProductListCart'
import PageCart from '../Components/Cart/PageCart'
export default function PageCartContainer() {
    const dispatch = useDispatch()
    const infouser = useSelector(state => state.loginUser)
    const dataCartUser = useSelector(state => state.getAllCart)
    return (
        <PageCart
            dataCartUser={dataCartUser}
        >
        </PageCart>
    )
}