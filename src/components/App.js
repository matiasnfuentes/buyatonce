import Footer from "./Footer"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Main from "./Main"

const App = () =>{
    return (
        <div className="container">
            <Header />
            <ItemListContainer greeting="Hola coders!" />
            <Main />
            <Footer />
        </div>
    )
}

export default App