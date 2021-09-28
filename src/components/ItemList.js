import Item from "./Item";


const ItemList = ({items}) => {
    return (<>
                {items.map(i => <Item title={i.title} id={i.id} price={i.price} imagePath={i.imagePath} description={i.description}/>)}
            </> );
}
 
export default ItemList;