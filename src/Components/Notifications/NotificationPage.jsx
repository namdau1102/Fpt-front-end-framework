import React from 'react';
import LoadingBtnBlack from '../LoadingForm/LoadingBtnBlack';

export default function NotificationPage({ title, statusOp, status, message }) {

    return (
        <div className="form-fixed-notification-w">
            <div className="inner-form">
                <div className="text-opw">
                    <div className="logo-status">
                        {
                            status === 'loading' ? <LoadingBtnBlack /> : status === 'danger' ?
                                <i class="fa-solid fa-triangle-exclamation" ></i> :
                                <i class="fa-solid fa-circle-check"></i>
                        }
                    </div>
                    <div className="text-op">
                        <h4 className="title" style={statusOp === 'danger' ? { color: 'red' } : {}}>{title}</h4>
                        <p className="col-text" style={statusOp === 'danger' ? { color: 'red' } : {}}>{message} </p>
                    </div>
                </div>
            </div>
        </div>

    )

}