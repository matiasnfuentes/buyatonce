import { createContext , useState } from 'react';

export const context = createContext()

const {Provider} = context;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState(new Map())

    const addProduct = ({item , quantity }) => {
        let newCart = new Map(cart)
        let newQuantity = cartHas(item) ? newCart.get(item.id) + quantity : quantity
        newCart.set(item.id, newQuantity)
        setCart(newCart)
    }

    const deleteProduct = (product) => {
        let newCart = new Map(cart)
        newCart.delete(product.id)
        setCart(newCart)
    }

    const clearCart = () => setCart(new Map())

    const cartHas = (product) => cart.has(product.id)

    const contextValue = {
        addProduct,
        deleteProduct,
        clearCart,
        cartHas
    }

    return (  
        <>
            <Provider value={contextValue}>
                {children}
            </Provider>
        </>
    );
}
 
export default CustomProvider;