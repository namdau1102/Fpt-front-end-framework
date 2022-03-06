import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ItemTabSelect from "../Components/SearchProduct/TabePageSelect/ItemTabSelect/ItemTabSelect";
import TabePageSelect from "../Components/SearchProduct/TabePageSelect/TabePageSelect";

export default function TabePageSelectContainer() {
    const dataPage = useSelector(state => state.getDataPage)
    const [paramsSearch] = useSearchParams();

    const mapPageProduct = (valuePage) => {
        const pageSelect = paramsSearch.get('page')
        let resultPageData = []
        let result = null
        let i = 1;
        if (valuePage && valuePage.value) {
            console.log(valuePage.value)
            for (i; i <= valuePage.value; i++)
                resultPageData.push(i)
        }
        result = resultPageData.map(item => {
            paramsSearch.set('page', item)
            const linkPath = paramsSearch.toString();
            return (
                <ItemTabSelect linkPath={linkPath} id={item} />
            )
        })
        return result
    }
    return (
        <TabePageSelect>
            {mapPageProduct(dataPage)}
        </TabePageSelect>
    )
}