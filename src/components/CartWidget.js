import { useCart } from "./CartContext";
import { Link } from "react-router-dom";  

const CartWidget = () => {
    const {cart, productCount} = useCart();

    return (<>
                {(cart.length > 0 ) ? (<div className="cartWidget">
                                        <Link to="/cart" className="cartWidget__link">
                                            <i className="cartWidget__widget material-icons">shopping_cart</i>
                                        </Link>
                                        <p className="cartWidget__count">{productCount}</p>
                                    </div>) : (<></>)}  
            </>  
             );
}
 
export default CartWidget;