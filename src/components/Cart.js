import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import CartList from "./CartList";

const Cart = () => {
    let {cart} = useCart();

    const productSubtotal = (total, product) => total + (product.price * product.quantity)

    return ( <>
                {   cart.length > 0 ?
                        <CartList cart={cart}/> :
                        <>
                            <h2>El carrito está vacío</h2>
                            <Link className="button" to="/">Volver</Link>
                        </>
                }
                <div className="cartTotal">
                    <h2>Total a pagar: $ {cart.reduce(productSubtotal, 0)}</h2>
                </div>
            </>
     );
}
 
export default Cart;