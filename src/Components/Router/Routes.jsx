import React from "react";
import { Routes, Link, Route } from 'react-router-dom'
import PageCart from "../Cart/PageCart";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Page404 from "../Page404/Page404";
import ProductInfomation from "../ProductInfomation/ProductInfomation";
import { pathURLHome } from "./Path";
export default function RoutesURL() {
    return (
        <Routes>
            <Route path={pathURLHome.HOME} exact element={<HomePage />}></Route>
            <Route path={pathURLHome.INFORMATION_PRODUCT} element={<ProductInfomation />}></Route>
            <Route path={pathURLHome.CART} element={<PageCart />}></Route>
            <Route path='*' element={<Page404 />} />
        </Routes>

    )
}