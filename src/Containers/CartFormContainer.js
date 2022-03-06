import { useDispatch, useSelector } from 'react-redux'
import { onPayBtnProduct } from '../Actions/from'
import { insertProductShipCode } from '../Actions/user'
import CartForm from '../Components/Cart/CartForm/CartForm'
import { formatPriceVND } from '../Components/Format/FormatPrice'
import { RandomText } from '../Components/RandomText/RandomText'
import NotificationPage from '../Components/Notifications/NotificationPage'
import { useEffect, useState } from 'react'
export default function CartFormContainer() {
    const dispatch = useDispatch()
    const dataCartUser = useSelector(state => state.getAllCart)
    const dataUser = useSelector(state => state.loginUser)
    const isCheckpay = useSelector(state => state.formBtnPayProduct)
    const [isStatus, SetStatus] = useState(false)
    const onCheckpay = () => dispatch(onPayBtnProduct())
    const onInsertShipCode = (value) => dispatch(insertProductShipCode(value))

    useEffect(() => {
        setTimeout(() => {
            SetStatus(false)
        }, 4000)
    }, [isStatus])
    const resultPriceSale = (price, valueSale) => {
        if (valueSale) {
            const resultSale = 100 - valueSale
            return price * (resultSale / 100);
        }
    }
    const resultUserAddPrice = (pricew1, pricew2) => {
        let result = null
        result = pricew2 - pricew1
        if (result < 0) {
            return 0
        }
        else { return result }
    }
    const fomrResultPrice = (dataCart) => {
        let resultPrice = null
        let resultPricew2 = null
        dataCart.cartUser.map(item => {
            return resultPrice += item.soLuong * resultPriceSale(item.giaSanPham, item.giamGia)
        })
        dataCart.cartUser.map(item => {
            return resultPricew2 += item.soLuong * item.giaSanPham
        })
        return (
            <>
                <div className="sum_price_all">
                    <h6 className="title_sw_q">Thanh toán</h6>
                    <div className="sum_all_product">
                        Tổng giá trị sản phẩm
                        <span>{formatPriceVND(resultPricew2)}</span>
                    </div>
                </div>
                <div className="list_price_sum">
                    <div className="sum_all_product">
                        Tổng giá trị phải thanh toán
                        <span>{formatPriceVND(resultPrice)}</span>
                    </div>
                    <div className="sum_all_product">
                        Số dư hiện tại
                        <span>{dataUser.userInfo.user && formatPriceVND(dataUser.userInfo.user.soDu)}</span>
                    </div>
                    <div className="sum_all_product">
                        Số tiền cần nạp thêm
                        <span>{formatPriceVND(resultUserAddPrice(dataUser.userInfo.user && dataUser.userInfo.user.soDu, resultPrice))}</span>
                    </div>
                </div>
            </>
        )
    }
    const onPostShipCodew = (value) => {
        // console.log(dataUser)
        const maNhomDonHang = RandomText(9).toUpperCase();
        const DATE = new Date().toISOString().slice(0, 19).replace('T', ' ')
        let resultShipCode = []
        dataCartUser.cartUser.map(item => {
            resultShipCode.push({
                maDonHang: RandomText(9).toUpperCase(),
                maSanPham: item.maSanPham,
                soLuong: item.soLuong,
                tongTien: item.tongTien,
                ngayDatHang: DATE,
                maNhomDonHang: maNhomDonHang,
                trangThai: 2,
            })
        })
        const dataPost = {
            dataw1: {
                tenTaiKhoan: dataUser.userInfo.user.tenTaiKhoan,
                maCTTK: dataUser.userInfo.user.maChiTietTaiKhoan
            },
            dataw2: {
                value: resultShipCode
            }
        }
        onInsertShipCode(dataPost)
        SetStatus(true)

    }
    const showBtnpay = (isPay) => {
        return (
            <>
                {
                    !isPay.isCheckPay ?
                        <div className="sbm_price_w w_1">
                            <button onClick={onCheckpay} type="button" className="btn_wq_tt add_tt">
                                <i className="fas fa-donate" />
                                Thanh toán
                            </button>
                            <div className="or_wq">
                                Quét mã. Thanh toán. Không cần nạp tiền.{" "}
                            </div>
                            <button type="button" className="btn_wq_tt bank_king">
                                <i className="fas fa-qrcode" />
                                Mua siêu tốc qua Mobile Banking
                            </button>
                            <button type="button" className="btn_wq_tt momo_wq">
                                <i className="fas fa-qrcode" />
                                Mua siêu tốc với MOMO
                            </button>
                        </div>
                        :
                        <div class="sbm_price_w w_2">
                            <button onClick={() => onPostShipCodew('124')} type="button" class="btn_wq_tt momo_wq">
                                <i class="fas fa-qrcode"></i>
                                Xác nhận thanh toán
                            </button>
                        </div>
                }
            </>
        )
    }
    return (
        <>
            {
                isStatus ? <NotificationPage
                    title={'Đặt hàng thành công'}
                    message={'Bạn đã đặt hàng thành công - hãy kiểm tra trong lịch sử đơn hàng'}
                /> : ''
            }

            <CartForm
                onCheckpay={onCheckpay}
            >
                {fomrResultPrice(dataCartUser)}
                {showBtnpay(isCheckpay)}
            </CartForm>
        </>
    )
}