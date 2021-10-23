import { useCart } from "./CartContext"

const CartProduct = ({product}) => {

    const {title, price, image, quantity} = product
    const totalPrice = quantity * price 
    const {deleteProduct} = useCart()

    const eliminarProducto = () => deleteProduct(product)

    return ( <div className="cartProduct">
                <img className="cartProduct__image" src={image} alt="cart product"></img>
                <h3 className="cartProduct__title">{title}</h3>
                <p className="cartProduct__price">$ {totalPrice}</p>
                <p className="cartProduct__quantity">{quantity} u</p>
                <button onClick={eliminarProducto} className="button cartProduct__button">Eliminar</button>
            </div> )
}
 
export default CartProduct