import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBuyPrice, getDanhMucSP, getDiscountType, getpswGroupProduct, getUnitPrice, postProduct } from "../../../Actions/product";
import AddAccountGame from "../BodyPage/AccountGameShop/AddAccountGame/AddAccountGame";
import JoditEditor from "jodit-react";
import parse from 'html-react-parser';
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import { authenticationEndpoint, publicKey, urlEndpoint } from "../ImageKit/ConfigImageKit";
import FormAddGroupProductContainer from "./FormAddGroupProductContainer";
import { RandomText } from "../../RandomText/RandomText";
import FormNotification from "../Notification/FormNotification";
import FormNotificationLoading from '../Notification/FormNotificationLoading'
import FormNotificationOpw from "../Notification/FormNotificationOpw";
import { fromNotification } from "../../../Actions/from";
import { useNavigate } from "react-router-dom";
import { pathURLAdmin } from "../../Router/Path";
export default function AddAccountGameContainer() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isDisplay, SetisDisplay] = useState(false)
    const statusPost = useSelector(state => state.postDataAccountProduct)
    const atGetDataUnitPrice = () => dispatch(getUnitPrice())
    const atGetDataDiscountType = () => dispatch(getDiscountType())
    const atGetDataGroupProduct = () => dispatch(getpswGroupProduct())
    const atGetDataBuyPrice = () => dispatch(getBuyPrice())
    const atGetDataDMSP = () => dispatch(getDanhMucSP())
    const dataUnitPrice = useSelector(state => state.getUnitPrice)
    const dataDiscountType = useSelector(state => state.getDiscountType)
    const dataGroupProduct = useSelector(state => state.getpswGroupProduct)
    const dataBuyPrice = useSelector(state => state.getBuyPrice)
    const dataDMSP = useSelector(state => state.getDanhMucSP)
    const postProductWp = (value) => dispatch(postProduct(value))
    const editor = useRef(null)
    const [content, setContent] = useState('')
    const [imageUpload, setImageUpload] = useState({
        codeImage: null,
        linkImage: '',
    })
    useEffect(() => {
        if (isDisplay)
            setTimeout(() => {
                SetisDisplay(false)
            }, 5000)
    }, [isDisplay])
    const [arrImageUp, SetArrImageUp] = useState([])
    const [isFromGroupProduct, SetIsFromGroupProduct] = useState(false)
    const [dataAccount, SetDataAccount] = useState({
        codeAcc: RandomText(8),
        userNameP: '',
        passWordP: '',
        codeKeyGame: RandomText(8),
        keyGameOnline: '',
        keyGame: '',
        tenSanPham: '',
        maSanPham: '',
        giaSanPham: 0,
        giamGia: 0,
        maGiamGia: '',
        donViTien: '',
        loaiGiamGia: '',
        danhMucSP: '',
        nhomSP: '',
        loaiThanhVien: '',
        soLuongSanPham: 0,
        theLoaiSanPham: [],
        theloaiText: '',
        gioiThieuBanBe: -1,
        thanhToan: '',
        luuY: '',
        Editor: '',
        tinhTrang: '',
        maHinhAnh: '',
        linkHinhAnh: '',
        gameBuy: ''
    })
    const [isUpload, SetIsUpload] = useState({
        isLoading: false,
        data: null
    })
    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        width: "100%", // default
        height: "450px",
        language: "auto",
        theme: 'default',
        colors: {
            greyscale: ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
            palette: ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00F0F0', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
            full: [
                '#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
                '#DD7E6B', '#EA9999', '#F9CB9C', '#FFE599', '#B6D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D6', '#D5A6BD',
                '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#6D9EEB', '#6FA8DC', '#8E7CC3', '#C27BA0',
                '#A61C00', '#CC0000', '#E69138', '#F1C232', '#6AA84F', '#45818E', '#3C78D8', '#3D85C6', '#674EA7', '#A64D79',
                '#85200C', '#990000', '#B45F06', '#BF9000', '#38761D', '#134F5C', '#1155CC', '#0B5394', '#351C75', '#733554',
                '#5B0F00', '#660000', '#783F04', '#7F6000', '#274E13', '#0C343D', '#1C4587', '#073763', '#20124D', '#4C1130'
            ]
        },
        activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about', 'dots'],
        toolbarButtonSize: 'middle',
        color: "#fff",
        colorPickerDefaultTab: 'background',

    }

    useEffect(() => {
        atGetDataUnitPrice()
        atGetDataDiscountType()
        atGetDataGroupProduct()
        atGetDataBuyPrice()
        atGetDataDMSP()

    }, [])
    useEffect(() => {
        mapTheLoai(dataAccount.theLoaiSanPham)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataAccount.theLoaiSanPham])
    // console.log(dataGroupProduct)
    const UnitPriceSelect = (dataUnitPrice) => {
        let result = null
        if (dataUnitPrice && dataUnitPrice.value.length > 0) {
            result = dataUnitPrice.value.map((item, index) => {
                return (
                    <option key={index} value={item.maDVT}>{item.tenDVT}</option>
                )
            })

        }
        return result
    }
    const onAddTheLoai = (e) => {
        SetDataAccount({
            ...dataAccount,
            theloaiText: e.target.value
        })
    }
    const onEnterKey = (e) => {
        let result = dataAccount.theLoaiSanPham
        if (e.key === 'Enter') {
            let dataPush = dataAccount.theloaiText
            result.push(dataPush)
            SetDataAccount({
                ...dataAccount,
                theloaiText: '',
                theLoaiSanPham: result
            })
        }
    }
    const mapTheLoai = (arr) => {
        let result = null
        result = arr.map(item => {
            return (
                <>
                    <li className="item-col-theloai">
                        <i onClick={() => onDelete(item)} class="fa-solid fa-delete-left color-icon"></i>
                        {item}
                    </li>
                </>
            )
        })
        return result
    }
    const onDelete = (value) => {
        let theLoaiSanPham = dataAccount.theLoaiSanPham
        theLoaiSanPham = theLoaiSanPham.filter(item => item !== value)
        console.log(value)
        SetDataAccount({
            ...dataAccount,
            theLoaiSanPham: theLoaiSanPham
        })
    }
    const DiscountTypeSelect = (dataDiscountType) => {
        let result = null
        if (dataDiscountType && dataDiscountType.value.length > 0) {
            result = dataDiscountType.value.map((item, index) => {
                return (
                    <option key={index} value={item.maLoaiGiamGia}>{item.tenLoaiGiamGia}</option>
                )
            })
        }
        return result
    }
    const dataGroupProductSelect = (dataGroupProduct) => {
        let result = null
        if (dataGroupProduct && dataGroupProduct.value.length > 0) {
            result = dataGroupProduct.value.map((item, index) => {
                return (
                    <option key={index} value={item.maNhomSP}>{item.tenNhomSP}</option>
                )
            })
        }
        return result
    }
    const dataBuyPriceSelect = (dataBuyPrice) => {
        let result = null
        if (dataBuyPrice && dataBuyPrice.value.length > 0) {
            result = dataBuyPrice.value.map((item, index) => {
                return (
                    <option key={index} value={item.maThanhToan}>{item.tenThanhToan}</option>
                )
            })
        }
        return result
    }
    const EditorHtmlProduct = () => {
        return (
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => SetDataAccount({
                    ...dataAccount,
                    Editor: newContent
                })} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { }}
            />
        )
    }
    const partHTMLInfoProduct = (textHTML) => {
        return (
            parse(textHTML)
        )
    }
    const onUploadError = (err) => {
    }
    const onUploadSuccess = (res) => {
        console.log(res)
        SetDataAccount({
            ...dataAccount,
            maHinhAnh: RandomText(8),
            linkHinhAnh: res.url
        })
    }
    const onUploading = () => {
        console.log(!isUpload.data)
        SetIsUpload({
            ...isUpload,
            isLoading: true
        })

    }
    // * Error c
    const uploadImage = () => {
        return (
            <IKContext
                publicKey={publicKey}
                urlEndpoint={urlEndpoint}
                authenticationEndpoint={authenticationEndpoint}
            >
                <IKUpload
                    className="upload-image"
                    onError={onUploadError}
                    onSuccess={onUploadSuccess}
                    onClick={onUploading}
                />
            </IKContext>
        )
    }
    const listArrImageUp = (arrImage) => {
        let result = null
        result = arrImage && arrImage.map((item, index) => {
            return (
                <li key={index} className="item-img">
                    <i class="fa-solid fa-trash color-icon"></i>
                    <img src={item.image} alt="" />
                </li>
            )
        })
        return result
    }
    const listDanhMucSP = (arrDMSP) => {
        let result = null
        result = arrDMSP && arrDMSP.value.map((item, index) => {
            return (
                <>
                    <option key={index} value={item.maDanhMuc}>{item.tenDanhMuc}</option>
                </>
            )
        })
        return result
    }
    const addGroupProduct = () => {
        SetIsFromGroupProduct(!isFromGroupProduct)
    }
    const getDataFormProduct = (e) => {
        e.preventDefault();
        const isConfim = window.confirm('Bạn chắc chắn muốn đăng sản phẩm này')
        if (isConfim) {
            postProductWp(dataAccount)
            window.alert('Đăng sản phẩm thành công')
            navigate(pathURLAdmin.MANAGER_ACCOUNT_USER)
        } else {

        }

        console.log(dataAccount)
        // SetisDisplay(true)
    }
    const onSetDataPost = (e) => {
        SetDataAccount({
            ...dataAccount,
            [e.target.name]: e.target.value
        })
    }
    const onEditor = (e) => {
        SetDataAccount({
            ...dataAccount,
            Editor: e
        })
    }
    const selectKeyAnduserPass = (data) => {
        if (Number(data) === 1) {
            return <li className="item-bot-w">
                <input onChange={onSetDataPost} type="text" name="userNameP" id="" placeholder="Tên tài khoản" />
                <input onChange={onSetDataPost} type="password" name="passWordP" id="" placeholder="Mật khẩu" />
            </li>
        } else if (Number(data) === 2) {
            return (
                <li className="item-bot-w-2">
                    <input onChange={onSetDataPost} type="text" name="keyGameOnline" id="" placeholder="Key game" />
                </li>
            )
        } else {
            return <>
            </>
        }
    }
    return (
        <>
            {

                isDisplay ? <FormNotification
                    title={statusPost.error ? "Lỗi" : "Thành công"}
                    message={statusPost.error ? "Lỗi đăng sản phẩm" : "Đã thêm sản phẩm thành công - Hãy kiểm tra"}
                    status={statusPost.error ? "error" : 'success'}
                /> : ''
            }
            {
                // <FormNotificationLoading
                //     title={'Đang tải'}
                //     message={'Đang tài sản phẩm lên'}
                // />
            }
            {/* <FormNotificationOpw /> */}
            {isFromGroupProduct
                ? <FormAddGroupProductContainer
                    isPage={isFromGroupProduct}
                    onClose={addGroupProduct}
                />
                : ''}

            <AddAccountGame
                isUpload={isUpload}
                arrImageUp={arrImageUp}
                addGroupProduct={addGroupProduct}
                onPostProduct={getDataFormProduct}
                onSetDataPost={onSetDataPost}
                onAddTheLoai={onAddTheLoai}
                onEditor={onEditor}
                dataAccount={dataAccount}
                onEnterKey={onEnterKey}
                linkHinhAnh={dataAccount.linkHinhAnh}

            >
                {UnitPriceSelect(dataUnitPrice)}
                {DiscountTypeSelect(dataDiscountType)}
                {dataGroupProductSelect(dataGroupProduct)}
                {dataBuyPriceSelect(dataBuyPrice)}
                {EditorHtmlProduct()}
                {partHTMLInfoProduct(content)}
                {uploadImage()}
                {listArrImageUp(arrImageUp)}
                {listDanhMucSP(dataDMSP)}
                {selectKeyAnduserPass(dataAccount.gameBuy)}
                {mapTheLoai(dataAccount.theLoaiSanPham)}
            </AddAccountGame>
        </>

    )

}