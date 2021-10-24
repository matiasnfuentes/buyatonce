import { BrowserRouter } from "react-router-dom"
import CartProvider from "./CartContext"
import Footer from "./Footer"
import NavBar from "./NavBar"
import Main from "./Main"
import ModalProvider from "./ModalContext"

const App = () =>{
    return (
        <CartProvider>
        <ModalProvider>
            <BrowserRouter>
                <div className="container">
                    <NavBar />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        </ModalProvider>
        </CartProvider>
    )
}

export default App
