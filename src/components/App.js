import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CartContext"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import ModalProvider from "./ModalContext"

const App = () =>{
    return (
        <CustomProvider>
        <ModalProvider>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        </ModalProvider>
        </CustomProvider>
    )
}

export default App
