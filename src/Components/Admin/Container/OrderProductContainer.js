
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams, useSearchParams } from "react-router-dom";
import { getAllOrderKH } from "../../../Actions/admin";
import OrderProduct from "../BodyPage/OrderProduct/OrderProduct";

export default function OrderProductContainer() {
    const [linkPage] = useSearchParams()
    const dispatch = useDispatch()
    const isCheckPageActive = linkPage.get('page')
    const dataOrder = useSelector(state => state.getDataPage)
    const getAllOrderAdm = (page) => dispatch(getAllOrderKH(page))
    // useEffect(() => {
    //     getAllOrderAdm(linkPage.get('page'))
    // }, [])
    const mapPageData = () => {
        let linkPageResult = "?page="
        const isLink = linkPage.get('page')
        let resultPage = [], resultHtml
        if (dataOrder && dataOrder.value) {
            console.log(dataOrder)
            for (let i = 1; i <= dataOrder.value; i++) {
                resultPage.push(i);
            }
        }

        resultHtml = resultPage.map((item, index) => {
            linkPageResult = linkPage.toString();
            return (
                <>
                    <NavLink
                        to={`?page=` + Number(index + 1)} key={index}
                        className={Number(isLink) === Number(index + 1) ? 'item-page item-active-page' : 'item-page'}>
                        {item}
                    </NavLink>
                </>
            )

        })

        // active.isActive ? "item-page item-active-page" : 'item-page'
        return resultHtml
    }
    return (
        <OrderProduct>
            {mapPageData()}
        </OrderProduct>
    )
}