import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartUserAPI } from "../Actions/user";
import CartItem from "../Components/Cart/CartItem/CartItem";
import ProductListCart from "../Components/Cart/ProductListCart/ProductListCart";
import { Link } from 'react-router-dom'
import { formatPriceVND } from '../Components/Format/FormatPrice'
import { pathURLHome } from "../Components/Router/Path";
import { Slug } from "../Components/Slug/Slug";
export default function ProductListCartContainer() {
    const dispatch = useDispatch()
    const dataCartUser = useSelector(state => state.getAllCart)
    const removeProductCart = (value) => dispatch(removeCartUserAPI(value))
    const [dataCart, SetDataCart] = useState(dataCartUser)
    const resultPriceSale = (price, valueSale) => {
        if (valueSale) {
            const resultSale = 100 - valueSale
            return price * (resultSale / 100);
        }

    }
    useEffect(() => {
        SetDataCart(dataCartUser)
    }, [dataCartUser])
    const CartItemMap = (arrProduct) => {
        var result = null
        if (arrProduct.cartUser) {
            result = arrProduct.cartUser.map((item, index) => {
                console.log(item)
                if (item.tinhTrangGH !== -1)
                    return (

                        <CartItem
                            maSanPham={item.maSanPham}
                            tenSanPham={item.tenSanPham}
                            giaSanPham={formatPriceVND(resultPriceSale(item.giaSanPham, item.giamGia))}
                            giamGia={item.giamGia}
                            giaGoc={formatPriceVND(item.giaSanPham)}
                            hinhAnh={item.linkHinhAnh}
                            soLuong={item.soLuong}
                            maGioHang={item.maGioHang}
                            onRemove={removeProductCart}
                        />


                    )
            })
        }
        return result
    }
    return (
        <ProductListCart>
            {CartItemMap(dataCart)}
        </ProductListCart>
    )
}