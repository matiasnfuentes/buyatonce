import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CartContext"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const App = () =>{
    return (
        <CustomProvider>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App
