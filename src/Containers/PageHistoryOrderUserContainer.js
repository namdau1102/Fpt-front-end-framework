import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShipCodeProduct } from "../Actions/user";
import PageHistoryOrderUser from "../Components/User/HistoryOrderUser/PageHistoryOrderUser";

export default function PageHistoryOrderUserContainer() {

    return (
        <PageHistoryOrderUser>

        </PageHistoryOrderUser>
    )
}