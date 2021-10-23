import { useCart } from "./CartContext"
import { Link } from "react-router-dom"
import CartList from "./CartList"
import { firestore } from "../firebase"
import Order from "./Order"
import { useModal } from "./ModalContext"

const Cart = () => {
    const {cart, total, clearCart} = useCart()
    const {setModalText, showModal} = useModal()

    const saveOrder = (buyer) => {

        const order = {
            buyer: buyer,
            cart: cart,
            total: total
        }

        const ordersRef = firestore.collection('orders')
        const query = ordersRef.add(order)

        query.then(result => {
            setModalText(`Se procesó con éxito su compra ID Nº ${result.id}`)
            clearCart()
        }).catch( error => 
            setModalText("Ocurrió un error tratando de procesar su orden!")
        ).finally(() =>
            showModal()
        )
    }

    return ( <>
                {   cart.length > 0 
                    ?
                    <>
                        <CartList cart={cart}/>
                        <div className="cartTotal">
                            <h2>Total a pagar: $ {total}</h2>
                        </div>
                        <Order saveOrder={saveOrder} showModal={showModal} setModalText={setModalText} />
                    </> 
                    :
                    <>
                        <h2 className = "cart__emptyTitle">El carrito está vacío</h2>
                        <Link className="button cart__backButton" to="/">Volver</Link>
                    </>
                }
            </>
     )
}
 
export default Cart