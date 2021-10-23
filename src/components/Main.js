import { Route, Switch } from "react-router"
import Cart from "./Cart"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer"
import Modal from "./Modal"
import { useModal } from "./ModalContext"

const Main = () => {
    const { modalShowStatus, hideModal, modalText} = useModal()
    return ( 
            <main className="container main">
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/categorias/:id">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemDetailContainer/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart/>
                    </Route>
                </Switch>
                <Modal modalShowStatus = {modalShowStatus} hideModal = {hideModal} modalText={modalText}/>
            </main>
     )
}

export default Main