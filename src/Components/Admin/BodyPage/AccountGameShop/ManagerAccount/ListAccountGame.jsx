import React from 'react';
import ItemAccountGame from './ItemAccountGame';

export default function ListAccountGame(props) {
    return (
        <>
            <thead>
                <tr>
                    <th className="text-header-w th-td-id">ID</th>
                    <th className="text-header-w th-td-code">Mã sản phẩm</th>
                    <th className="text-header-w th-td-name">Tên sản phẩm</th>
                    <th className="text-header-w th-td-price">Giá sản phẩm</th>
                    <th className="text-header-w th-td-dvt">Đơn vị tính</th>
                    <th className="text-header-w th-td-group">Nhóm sản phẩm</th>
                    <th className="text-header-w th-td-quanlity">Số lượng</th>
                    <th className="text-header-w th-td-list-w">Thể loại</th>
                    <th className="text-header-w th-td-status">Tinh trạng</th>
                    <th className="text-header-w th-td-setting">Cài đặt</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </>
    )

}