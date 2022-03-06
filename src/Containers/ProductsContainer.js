// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PageProduct from "../Components/PageProduct/PageProduct";
export default function ProductsContainer() {
    const dataProducts = useSelector(state => state.getAllProducts)
    return (
        <PageProduct dataProducts={dataProducts}>
        </PageProduct>
    )
}