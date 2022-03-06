import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../Actions/product";
import HomePage from "../Components/HomePage/HomePage";
import NotificationPage from "../Components/Notifications/NotificationPage";
export default function HomePageContainer() {
    const dispatch = useDispatch()
    const getDataProduct = () => dispatch(getProducts())
    useEffect(() => {
        getDataProduct()
        document.title = "Web Bán tài khoản game - Trang chủ"
    }, [])
    return (
        <>
            <HomePage>

            </HomePage>

        </>

    )
}