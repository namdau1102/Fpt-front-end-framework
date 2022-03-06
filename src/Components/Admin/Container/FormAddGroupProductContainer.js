import FormAddGroupProduct from '../BodyPage/FormFixed/FormAddGroupProduct.jsx'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import { authenticationEndpoint, publicKey, urlEndpoint } from '../ImageKit/ConfigImageKit.js'
import { useState } from 'react'
import { RandomText } from '../../RandomText/RandomText.js'
import { useDispatch } from 'react-redux'
import { postNhomSp } from '../../../Actions/product.js'
export default function FormAddGroupProductContainer(props) {
    const dispatch = useDispatch();
    const postDataGroupProduct = (value) => dispatch(postNhomSp(value))
    const [dataPostGroupProduct, SetDataPostGroupProduct] = useState({
        maNhomSP: '',
        maHinhAnh: '',
        tenNhomSP: '',
        moTa: '',
        tinhTrang: 0,
        linkHinhAnh: ''
    })
    const onUploadError = () => {

    }
    const onUploadSuccess = (res) => {
        console.log(res)
        SetDataPostGroupProduct({
            ...dataPostGroupProduct,
            maHinhAnh: RandomText(8).toUpperCase(),
            linkHinhAnh: res.url
        })
    }
    const postData = (e) => {
        e.preventDefault();
        console.log(dataPostGroupProduct)
        if (dataPostGroupProduct) {
            postDataGroupProduct(dataPostGroupProduct)
        }
    }
    const upLoadImageGroupProduct = () => {
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
                />
            </IKContext>
        )
    }
    console.log(props)
    return (
        <FormAddGroupProduct
            isPage={props.isPage}
            addGroupProduct={props.onClose}
            onSetDataPost={SetDataPostGroupProduct}
            dataPost={dataPostGroupProduct}
            postData={postData}

        >
            {upLoadImageGroupProduct()}
        </FormAddGroupProduct>
    )
}