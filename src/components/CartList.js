import CartProduct from "./CartProduct"

const CartList = ({cart}) => {
    return (    <>
                    {cart.map(product => <CartProduct key={product.id} product={product}/>)}
                </>
     )
}
 
export default CartList
