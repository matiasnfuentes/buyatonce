import { createContext , useState , useContext} from 'react'

const context = createContext()

const {Provider} = context

export const useCart = () => useContext(context)

const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [total, setTotal] = useState(0)

    const addProduct = (product) => {
        let newCart = [...cart]
        if ( cartHas(product) ){
            let cartProduct = cart.find(p => p.id === product.id)
            cartProduct.quantity += product.quantity
        } else {
            newCart.push(product)
        }
        setTotal(total + (product.quantity * product.price))
        setProductCount(productCount + product.quantity)
        setCart(newCart)
    }

    const deleteProduct = (product) => {
        setCart(cart.filter( p => p.id !== product.id))
        setProductCount(productCount - product.quantity)
        setTotal(total - (product.quantity * product.price))
    }

    const clearCart = () => {
        setCart([])
        setProductCount(0)
        setTotal(0)
    }
    const cartHas = (product) => cart.find(p => p.id === product.id) !== undefined

    const contextValue = {
        productCount,
        total,
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
    )
}
 
export default CustomProvider