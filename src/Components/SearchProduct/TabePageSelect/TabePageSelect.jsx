import ItemTabSelect from "./ItemTabSelect/ItemTabSelect";

export default function TabePageSelect(props) {
    return (
        <ul className="flex_page_q">
            {props.children}
        </ul>
    )
}