import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const App = () =>{
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
