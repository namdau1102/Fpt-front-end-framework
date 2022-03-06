import React from 'react';

export default function FormNotificationOpw({ title, valueTitle, message, notMess, status, onShowFromSw, onClickOwp }) {
    return (
        <div className="form-fixed-notification">
            <div className="inner-form">
                <div className="topbar-title">
                    <div className="close">
                        <i onClick={onShowFromSw} on className="fa-solid fa-xmark" />
                    </div>
                    <i className="fa-solid fa-exclamation color-icon" />
                    <div className="text-w">
                        <h4>{title}</h4>
                        <p>{valueTitle}</p>
                    </div>
                </div>
                <div className="col-w">
                    <h4>{message}</h4>
                    <p>Lưu ý :{notMess}</p>
                    <div className="btn-w">
                        <button onClick={onShowFromSw} className="btn btn-exit" type="submit">
                            Hủy
                        </button>
                        <button onClick={onClickOwp} className="btn btn-sur" type="submit">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}