import parse from 'html-react-parser';

export default function TextInfomationProduct({ dataInfoProduct, parseHTML }) {
    return (
        <div className="text_preview_product">
            <div className="container">
                <div className="topbar_preview">
                    <p>
                        {

                            // parseHTML()
                            // (dataInfoProduct && dataInfoProduct[0].luuYSP)
                            parseHTML(dataInfoProduct && dataInfoProduct[0].luuYSP)
                            // console.log(dataInfoProduct && dataInfoProduct[0].luuYSP)
                            // console.log(dataInfoProduct)

                        }
                    </p>
                </div>
                <div className="below_preview">
                    <div className="prieview_text_qw_o">
                        <h3 className="title_prq">Chi tiết sản phẩm</h3>
                        <p className="preview_root">
                            {
                                parseHTML(dataInfoProduct && dataInfoProduct[0].thongTinSP)
                            }
                        </p>
                    </div>
                    <div className="configuration_pc">
                        <h3 className="title_prq">Cấu hình</h3>
                        <p className="preview_root">
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}