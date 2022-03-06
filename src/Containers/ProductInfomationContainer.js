import { useEffect, useState } from "react";
import { connectAdvanced, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { getGroupProduct, getInfoProduct } from "../Actions/product";
import parse from 'html-react-parser';
import { formatPriceVND } from "../Components/Format/FormatPrice";
import MenuTopPage from "../Components/MenuTopPage/MenuTopPage";
import ChatUserProduct from "../Components/ProductInfomation/ChatuserProduct/ChatUserProduct";
import ProductInfomation from "../Components/ProductInfomation/ProductInfomation";
import TextInfomationProduct from "../Components/ProductInfomation/TextInfomationProduct/TextInfomationProduct";
import TopBarInfomationProduct from "../Components/ProductInfomation/TopBarInfomationProduct/TopBarInfomationProduct";
import { pathURLHome } from "../Components/Router/Path";
import { Slug } from "../Components/Slug/Slug";
import { addCartUser, st_fromLogin } from "../Actions";
import { RandomText } from "../Components/RandomText/RandomText";
import { insertCartUser } from "../Actions/user";
export default function ProductInfomationContainer() {
    const dispatch = useDispatch()
    const dataInfoProduct = useSelector(state => state.getInfoProduct)
    const dataGroupProduct = useSelector(state => state.getProductGroup)
    const addCartProductUser = (value) => dispatch(addCartUser(value))
    const [dataProductfk, SetDataProductfk] = useState(null)
    const [onDataProductc, SetOnDataProductc] = useState({
        quanlityProduct: 0
    })
    const navation = useNavigate()
    const [dataGroupProductfk, SetDataGroupProductfk] = useState(null)
    const isLoginUser = useSelector(state => state.loginUser)

    const history = useParams();
    const showFromLogin = (isDisplay) => dispatch(st_fromLogin(isDisplay))
    const getDataInfoProduct = (codeProduct) => dispatch(getInfoProduct(codeProduct))
    const getDataGroupProduct = (codeGroupProduct) => dispatch(getGroupProduct(codeGroupProduct))
    const insertCartW = (value) => dispatch(insertCartUser(value))

    useEffect(() => {
        window.scrollTo(0, 0)
        // if (dataInfoProduct) {
        //     document.title = `Thông tin sản phẩm : ${history.nameProduct} `
        // }
        if (history.codeProduct) {
            getDataInfoProduct(history.codeProduct)
        }
    }, [history.codeProduct])
    useEffect(() => {
        if (dataInfoProduct.infoProducts.length > 0) {
            getDataGroupProduct(dataInfoProduct.infoProducts[0].maNhomSP)
        }
    }, [dataProductfk])
    const onSetDataProductc = (e) => {
        SetOnDataProductc({
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (dataInfoProduct.infoProducts.length > 0) {
            SetDataProductfk(dataInfoProduct.infoProducts)
        }
        if (dataGroupProduct.groupProducts && dataGroupProduct.groupProducts.length > 0) {
            SetDataGroupProductfk(dataGroupProduct.groupProducts)
        }
    }, [dataInfoProduct, dataGroupProduct])
    /**
     * 
     * @param {number} price 
     * @param {number} valueSale
     * -> Tính giá tiền sau khi giảm giá 
     * @returns 
     */
    const resultPriceSale = (price, valueSale) => {
        if (valueSale) {
            const resultSale = 100 - valueSale
            return price * (resultSale / 100);
        }

    }
    /**
     * 
     * @param {string} codeHTML 
     * -> Chuyển dạng String chi tiết sản phẩm qua dạng chay HTML
     * @returns 
     */
    const parseHTML = (codeHTML) => {
        if (codeHTML)
            return parse(codeHTML)
    }
    /**
     * 
     * @param {string} linkShear 
     * -> Xử lí sự kiện copy dường dẫn chia sẻ cho bạn bè
     */
    const copyLinkShearFriend = (linkShear) => {
        if (linkShear.length > 0) {
            navigator.clipboard.writeText(linkShear)
            alert('Copy thành công')
        }
    }

    /**
     * 
     * @param {number} quanlity 
     * @param {number} statusProduct 
     * -> Kiểm tra tình trạng sản phẩm qua 2 giá trị gồm số lượng và trạng thái của sản phẩm
     * @returns 
     */
    const checkQuanLityProduct = (quanlity, statusProduct) => {
        let resultText = null
        if (quanlity === 0) {
            resultText = 'Hết hàng'
        } else if (quanlity === 0 || statusProduct === 1) {
            resultText = 'Đang Cập nhật'
        } else {
            resultText = 'Còn Hàng'
        }
        return resultText
    }
    /**
     * 
     * @param {*} dataInfoProduct
     * -> Trả về childer để show giao diện cho người dùng và các data có sẵn 
     * @returns 
     */

    const showInfomationProduct = (dataInfoProduct) => {
        return (
            <>
                <MenuTopPage />
                <TopBarInfomationProduct
                    dataInfoProduct={dataInfoProduct}
                    resultPriceSale={resultPriceSale}
                    formatPriceVND={formatPriceVND}
                    resultTypeProduct={resultTypeProduct}
                    checkQuanLityProduct={checkQuanLityProduct}
                    copyLinkShearFriend={copyLinkShearFriend}
                    showProductGroups={showProductGroups}
                    dataGroupProductfk={dataGroupProductfk}
                    postCart={postProductCart}
                    onSetDataProductc={onSetDataProductc}
                >
                </TopBarInfomationProduct>
                <TextInfomationProduct
                    parseHTML={parseHTML}
                    dataInfoProduct={dataInfoProduct}
                />
                <ChatUserProduct />
            </>
        )
    }
    const showProductGroups = (products) => {
        let result = null
        if (products) {
            if (products.length > 0) {
                result = products.map((item, index) => {
                    if (index < 4)
                        return (
                            <Link key={index} to={pathURLHome.INFORMATION_PRODUCT + '/' + item.maSanPham + "/" + Slug(item.tenSanPham)} className="item_product_w">
                                <h4 className="name_product_group">
                                    {item.tenSanPham}
                                </h4>
                                <span className="price_product_group">
                                    Giá : {formatPriceVND(item.giaSanPham)}
                                </span>
                                <input className="check_product" checked={history.codeProduct === item.maSanPham ? true : false} type="radio" name="" id="" />
                            </Link>
                        )
                })
            }
        }
        return result

    }
    const resultTypeProduct = (typeProduct) => {
        const result = JSON.parse(typeProduct)
        return result && result.map(item => {
            return (
                <Link to="">
                    {item}
                </Link>
            )
        })

    }
    const postProductCart = (isBtn, dataProduct, codeProduct, price) => {
        console.log(isBtn === 'ADD')
        const tongTien = price * Number(onDataProductc.quanlityProduct);
        const tinhTrang = 0
        const maGioHang = RandomText(8).toUpperCase();;
        const maSanPham = codeProduct
        const nhomGioHang = RandomText(8).toUpperCase();
        if (isLoginUser.userInfo.loggedIn === false) {
            console.log("MO FORM")
            showFromLogin(true)
        } else {
            const valueInsetCart = {
                tenTaiKhoan: isLoginUser.userInfo.user.tenTaiKhoan,
                maGioHang,
                maSanPham,
                nhomGioHang,
                tongTien,
                quanlity: onDataProductc.quanlityProduct,
                tinhTrang,
                maCTTK: isLoginUser.userInfo.user.maChiTietTaiKhoan

            }
            const resultPay = {
                ...valueInsetCart,
                ...dataProduct[0],
            }
            if (!isLoginUser.userInfo.user.maGioHang) {
                if (isBtn === 'PAY') {
                    addCartProductUser(resultPay)
                    insertCartW(valueInsetCart)
                    navation(pathURLHome.CART)
                } else {
                    addCartProductUser(resultPay)

                    insertCartW(valueInsetCart)
                    navation(pathURLHome.CART)

                }

            } else {
                if (isBtn === 'PAY') {
                    // addCartProductUser()
                    addCartProductUser(resultPay)
                    insertCartW(valueInsetCart)
                    navation(pathURLHome.CART)
                } else {
                    addCartProductUser(resultPay)
                    insertCartW(valueInsetCart)
                    navation(pathURLHome.CART)

                }

            }
        }
    }
    return (
        <>

            <ProductInfomation >
                {showInfomationProduct(dataProductfk)}
            </ProductInfomation>
        </>
    )
}