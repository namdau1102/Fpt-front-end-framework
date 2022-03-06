import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fromNotification } from '../../../Actions/from';
import { removeProduct } from '../../../Actions/product';
import FormNotificationOpw from '../Notification/FormNotificationOpw';
export default function FormNotificationOpwContainer({ title, valueTitle, message, notMess, status, onShowFromSw, onClickOwp }) {
    return (
        <FormNotificationOpw
            onShowFromSw={onShowFromSw}
            title={"Bạn có chắc chắn"}
            valueTitle={"Xác nhận hành động"}
            message={"Bạn có muốn xóa sản phẩm này"}
            notMess={"Sản phẩm bị xóa có thể khôi phục lại "}
            onClickOwp={onClickOwp}
        >
        </FormNotificationOpw>
    )

}