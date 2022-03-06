import { useEffect } from "react"

export default function Page404() {
    useEffect(() => {
        document.title = "Trang không tồn tại"
    }, [])
    return (
        <>
            <h1>KHONG TON TAI</h1>
        </>
    )
}