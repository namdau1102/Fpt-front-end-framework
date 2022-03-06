import ListSearchnvbContainer from "../../../Containers/ListSearchnvbContainer";

export default function SearchForm(props) {
    return (
        <>
            <div className="search_list_wq_o">
                <input
                    onChange={props.onChangSearchProduct}
                    className="ipn_text_search"
                    type="search"
                    name=""
                    id=""
                    onKeyPress={props.onEnterSearchInput}
                    placeholder="Tìm kiếm sản phẩm"
                />
                {/* <div className="list_search_nvb" style={props.textSearch.length > 0 ? { display: 'block' } : { display: 'none' }}>
                    <ListSearchnvbContainer />
                </div> */}
                <div className="list_search_nvb" style={{ display: 'none' }}>
                    <ListSearchnvbContainer />
                </div>
            </div>
            <i onClick={props.onSearchText} className="fas fa-search color_icon" />
        </>
    )
}