import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "./CartContext"
import { Link } from "react-router-dom";


const ItemDetail = ({item}) => {
    let {title, price, image, description} = item;
    const { addProduct } = useCart();
    const [quantity, setQuantity] = useState();

    const onAdd = itemCount => {
        setQuantity(itemCount)
    }

    const buyItem = () => {
        addProduct({...item, quantity})
    }

    return ( <div className="itemDetail">
                <h2 className="itemDetail__title">{title}</h2>
                <img src={image} alt="alternative text" className="itemDetail__image"/>
                <p className="itemDetail__description" ><strong>Descripción: </strong> {description}</p>
                <p className="itemDetail__price" ><strong>Precio: </strong>{`$ ${price}`}</p>
                <div className="itemDetail__itemCount">
                    {quantity ? 
                        <Link className="button itemDetail__buyButton" to="/" onClick={buyItem}>Finalizar compra</Link> : 
                        <ItemCount initial={0} stock={5} onAdd={onAdd} />}
                </div>
            </div> 
            );
}
 
export default ItemDetail;
