import { useEffect } from "react";
import MegaMenu from "../MegaMenu/MegaMenu";
import PageProduct from "../PageProduct/PageProduct";
export default function HomePage() {
    useEffect(() => {
    }, [])
    return (
        <>
            <MegaMenu />
            <PageProduct />
        </>
    )
}