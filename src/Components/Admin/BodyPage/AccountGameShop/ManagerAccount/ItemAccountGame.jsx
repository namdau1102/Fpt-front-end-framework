import React from 'react';
import { formatPriceVND } from '../../../../Format/FormatPrice';
export default function ItemAccountGame({ id, maSP, tenSP, giaSP, dvt, nhomSP, soLuong, theLoai, tinhTrang, onShowFromSw, onFormSetting }) {
    return (

        <tr tabIndex={0} className="item-w">
            <td className="text-col-w th-td-id">{id}</td>
            <th className="text-col-w  th-td-code">{maSP}</th>
            <td className="text-col-w  th-td-name">
                <p>{tenSP}</p>
            </td>
            <td className="text-col-w  th-td-price">
                <p>{formatPriceVND(Number(giaSP))}</p>
            </td>
            <td className="text-col-w  th-td-dvt">{dvt}</td>
            <td className="text-col-w  th-td-group">
                <p>{nhomSP}</p>
            </td>
            <td className="text-col-w  th-td-quanlity">{soLuong}</td>
            <td className="text-col-w  th-td-list-w">
                {/* {theLoai} */}
            </td>
            <td className="text-col-w  th-td-status">
                <p
                    className={tinhTrang === 0 && soLuong !== 0 && soLuong !== 0 ? "status-success" : "status-danger"}>
                    {tinhTrang === 0 && soLuong !== 0 && soLuong !== 0 ? ' Hoạt động ' : tinhTrang === 1 ? 'Đang cập nhật' : 'Hết hàng'}
                </p>
            </td>
            <td className="text-col-w  th-td-setting" style={{ borderLeft: '1px solid #ccc' }}>
                <div class="flex-setting-oder">
                    <i onClick={() => onShowFromSw(maSP)} class="fa-solid fa-delete-left color-icon color-icon-remove"></i>
                    <i onClick={() => onFormSetting(maSP)} class="fa-solid fa-gear color-icon color-icon-setting"></i>
                </div>
            </td>
        </tr>
    )

}