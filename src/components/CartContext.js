import { createContext , useState , useContext} from 'react';

export const context = createContext()

const {Provider} = context;

export const useCart = () => useContext(context);

const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProduct = (product) => {
        let newCart = [...cart]
        if ( cartHas(product) ){
            cart.find(p => p.id == product.id).quantity += product.quantity;
        } else {
            newCart.push(product)
        }
        setCart(newCart)
    }

    const deleteProduct = (product) => setCart(cart.filter( p => p.id !== product.id))

    const clearCart = () => setCart([])

    const cartHas = (product) => cart.find(p => p.id == product.id) !== undefined

    const contextValue = {
        cart,
        addProduct,
        deleteProduct,
        clearCart
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