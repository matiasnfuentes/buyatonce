import { useCart } from "./CartContext";
import { Link } from "react-router-dom";  

const CartWidget = () => {
    const {cart} = useCart();

    const productCount = (total, product) => total + product.quantity;

    return (<>
                {(cart.length > 0 ) ? (<div className="cartWidget">
                                        <Link to="/cart" className="cartWidget__link">
                                            <i className="cartWidget__widget material-icons">shopping_cart</i>
                                        </Link>
                                        <p className="cartWidget__count">{cart.reduce(productCount, 0)}</p>
                                    </div>) : (<></>)}  
            </>  
             );
}
 
export default CartWidget;