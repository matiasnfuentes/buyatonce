import Item from "./Item"


const ItemList = ({items}) => {
    return (<>
                {items.map(i => <Item key={i.id} item={i}/>)}
            </> )
}
 
export default ItemList