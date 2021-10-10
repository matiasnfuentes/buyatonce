import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { context } from "./CartContext"
import { useHistory } from "react-router-dom";


const ItemDetail = ({item}) => {
    let {title, id, price, imagePath, description, categoria} = item;

    const { addProduct } = useContext(context)
    const [quantity, setQuantity] = useState();
    const history = useHistory();

    const onAdd = itemCount => {
        setQuantity(itemCount)
    }

    const buyItem = () => {
        addProduct({item, quantity})
        history.push("/")
    }

    return ( <div className="itemDetail">
                <h2 className="itemDetail__title">{title}</h2>
                <img src={imagePath.detail} alt="alternative text" className="itemDetail__image"/>
                <p className="itemDetail__description" ><strong>Descripción: </strong> {description}</p>
                <p className="itemDetail__price" ><strong>Precio: </strong> {price}</p>
                <div className="itemDetail__itemCount">
                    {quantity ? <button className="button itemDetail__buyButton" onClick={buyItem}>Finalizar compra</button> : <ItemCount initial={0} stock={5} onAdd={onAdd} />}
                </div>
            </div> 
            );
}
 
export default ItemDetail;